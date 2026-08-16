/**
 * Builds data/projects.json by searching GitHub for active open-source projects
 * across the categories declared in data/taxonomy.json, then enriching each repo
 * with the signals a person needs in order to actually clone and run it:
 * dependency manifests, container files, releases and the README.
 *
 * READMEs are written to data/readmes/<id>.md rather than into projects.json,
 * which is imported wholesale by the app and would otherwise grow by tens of
 * megabytes; the detail page reads only the single file it renders.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/fetch-github.mjs [--quick] [--limit=400] [--min-stars=150]
 *
 * Without a token the GitHub API allows only 60 core + 10 search requests per
 * hour, so the script degrades to searching only and enriching the top repos.
 */

import { readFile, readdir, writeFile, mkdir, rm } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const API = "https://api.github.com";

/** Falls back to a gitignored file so the token stays out of shell history. */
function readToken() {
  const fromEnv = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (fromEnv) return fromEnv.trim();
  try {
    return readFileSync(resolve(ROOT, ".github-token"), "utf8").trim();
  } catch {
    return "";
  }
}

const TOKEN = readToken();

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=").slice(1).join("=") : fallback;
};
const QUICK = args.includes("--quick");
/** Re-rank and re-enrich from the last search cache instead of hitting search again. */
const FROM_CACHE = args.includes("--from-cache");
/** Recompute scores and setup steps from the stored signals, offline. */
const REBUILD_STEPS = args.includes("--rebuild-steps");
/** Classify the cached search results and report where they land, offline. */
const DRY_CLASSIFY = args.includes("--dry-classify");
/** Refetch only the READMEs of the projects already in data/projects.json. */
const README_ONLY = args.includes("--readmes-only");
const LIMIT = Number(flag("limit", 400));
const MIN_STARS = Number(flag("min-stars", 150));
const FRESH_MIN_STARS = Number(flag("fresh-min-stars", 40));
// Enriching costs 3 API calls per repo, which is unaffordable unauthenticated.
const ENRICH_LIMIT = Number(
  flag("enrich", QUICK ? 40 : TOKEN ? Number.MAX_SAFE_INTEGER : 12)
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const daysAgo = (n) =>
  new Date(Date.now() - n * 86400_000).toISOString().slice(0, 10);

let coreRemaining = TOKEN ? 5000 : 60;
let searchRemaining = TOKEN ? 30 : 10;

async function api(path, { raw = false, search = false } = {}) {
  const url = path.startsWith("http") ? path : `${API}${path}`;
  const headers = {
    Accept: raw ? "application/vnd.github.raw" : "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "opensource-radar",
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  for (let attempt = 0; attempt < 3; attempt++) {
    // Search has a much tighter budget than the core API; pace it deliberately.
    await sleep(search ? (TOKEN ? 2200 : 6500) : TOKEN ? 60 : 800);
    let res;
    try {
      res = await fetch(url, { headers });
    } catch (err) {
      if (attempt === 2) throw err;
      await sleep(2000 * (attempt + 1));
      continue;
    }

    const remaining = Number(res.headers.get("x-ratelimit-remaining"));
    if (!Number.isNaN(remaining)) {
      if (search) searchRemaining = remaining;
      else coreRemaining = remaining;
    }

    if (res.status === 404) return null;
    if (res.status === 403 || res.status === 429) {
      const reset = Number(res.headers.get("x-ratelimit-reset")) * 1000;
      const waitMs = Math.min(Math.max(reset - Date.now(), 5000), 90_000);
      console.warn(`  rate limited, waiting ${Math.round(waitMs / 1000)}s`);
      await sleep(waitMs);
      continue;
    }
    if (!res.ok) {
      if (attempt === 2) {
        console.warn(`  ${res.status} ${url}`);
        return null;
      }
      continue;
    }
    return raw ? res.text() : res.json();
  }
  return null;
}

async function search(query, { perPage = 30, sort = "stars" } = {}) {
  const qs = new URLSearchParams({
    q: query,
    sort,
    order: "desc",
    per_page: String(perPage),
  });
  const data = await api(`/search/repositories?${qs}`, { search: true });
  return data?.items ?? [];
}

/* ------------------------------------------------------------------ */
/* Classification                                                      */
/* ------------------------------------------------------------------ */

/** Substring matching turns "cad" into a hit for "academy", so match words. */
function containsWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
}

function scoreCategory(repo, category) {
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  const haystack = `${repo.name} ${repo.description || ""}`.toLowerCase();
  let topicScore = 0;
  let textScore = 0;

  for (const topic of category.searchTopics) {
    if (topics.includes(topic.toLowerCase())) topicScore += 4;
  }
  for (const kw of category.keywords) {
    if (topics.some((t) => containsWord(t, kw))) topicScore += 2;
    if (containsWord(haystack, kw)) textScore += 1;
  }
  return { topicScore, textScore };
}

/** Returns null when nothing in the repo's metadata ties it to a domain. */
function classify(repo, categories, seedCategoryId) {
  const scored = categories.map((c) => ({ id: c.id, ...scoreCategory(repo, c) }));

  // The repo turned up in this domain's topic search, which is itself
  // topic-level evidence, so a ROS package found under "robotics" does not get
  // filed under "ml-frameworks". A stale seed from a category that has since
  // been renamed or removed carries no weight.
  const seed = scored.find((c) => c.id === seedCategoryId);
  if (seed) seed.topicScore += 3;

  const ranked = scored
    .filter((c) => c.topicScore > 0)
    .sort((a, b) => b.topicScore - a.topicScore || b.textScore - a.textScore);

  // Prose alone must never place a repo in a domain: a description mentioning
  // "editor" or "simulator" says nothing about hardware.
  if (!ranked.length) return null;

  const winner = ranked[0].id;
  return {
    category: winner,
    categories: [winner, ...ranked.slice(1, 3).map((c) => c.id)],
  };
}

/* ------------------------------------------------------------------ */
/* Buildability signals                                                */
/* ------------------------------------------------------------------ */

const FILE_SIGNALS = [
  { key: "docker", match: (f) => /^dockerfile$|^docker-compose\.ya?ml$|^compose\.ya?ml$/i.test(f) },
  { key: "python", match: (f) => /^requirements.*\.txt$|^pyproject\.toml$|^setup\.py$|^environment\.ya?ml$/i.test(f) },
  { key: "conda", match: (f) => /^environment\.ya?ml$/i.test(f) },
  { key: "node", match: (f) => /^package\.json$/i.test(f) },
  { key: "rust", match: (f) => /^cargo\.toml$/i.test(f) },
  { key: "go", match: (f) => /^go\.mod$/i.test(f) },
  { key: "cmake", match: (f) => /^cmakelists\.txt$/i.test(f) },
  { key: "make", match: (f) => /^makefile$/i.test(f) },
  { key: "platformio", match: (f) => /^platformio\.ini$/i.test(f) },
  { key: "arduino", match: (f) => /\.ino$/i.test(f) },
  { key: "espidf", match: (f) => /^sdkconfig(\.defaults)?$/i.test(f) },
  { key: "ros", match: (f) => /^package\.xml$|^colcon\.meta$/i.test(f) },
  { key: "notebook", match: (f) => /\.ipynb$/i.test(f) || /^notebooks?$/i.test(f) },
  { key: "examples", match: (f) => /^examples?$|^demos?$|^samples?$|^tutorials?$/i.test(f) },
  {
    key: "hardware",
    // Only the repository root is listed, and hardware projects almost always
    // file their drawings under a directory rather than at the top level.
    match: (f) =>
      /\.(kicad_pcb|kicad_pro|kicad_sch|sch|brd|step|stl|3mf|f3d|scad|dxf|gbr)$/i.test(f) ||
      /^(hardware|hw|pcb|pcbs|cad|kicad|eagle|altium|electronics|mechanical|enclosures?|schematics?|gerbers?|3d[-_ ]?print(ing|able)?|3d[-_ ]?models?|stl|stls)$/i.test(f),
  },
  { key: "docs", match: (f) => /^docs?$|^documentation$/i.test(f) },
  { key: "install", match: (f) => /^install\.sh$|^setup\.sh$|^bootstrap\.sh$/i.test(f) },
  { key: "tests", match: (f) => /^tests?$|^spec$/i.test(f) },
];

function detectSignals(entries) {
  const names = entries.map((e) => e.name);
  const found = new Set();
  for (const signal of FILE_SIGNALS) {
    if (names.some((n) => signal.match(n))) found.add(signal.key);
  }
  return [...found];
}

const STEP_RECIPES = [
  {
    when: (s) => s.includes("docker"),
    zh: "用 Docker 一键起环境，无需本机装依赖。仓库里没有 compose 文件时，改用 docker build -t app . 再 docker run --rm -it app",
    en: "Spin up the environment with Docker, no local deps required. If the repo has no compose file, use docker build -t app . followed by docker run --rm -it app",
    cmd: "docker compose up -d",
  },
  {
    when: (s) => s.includes("conda"),
    zh: "用 Conda 还原作者声明的完整环境",
    en: "Recreate the author's exact environment with Conda",
    cmd: "conda env create -f environment.yml && conda activate <env-name>",
  },
  {
    when: (s) => s.includes("python") && !s.includes("conda"),
    zh: "创建虚拟环境并安装 Python 依赖。只有 pyproject.toml / setup.py 而没有 requirements.txt 时，改用 pip install -e .",
    en: "Create a virtualenv and install the Python dependencies. If there is a pyproject.toml or setup.py but no requirements.txt, use pip install -e . instead",
    cmd: "python -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt",
  },
  {
    when: (s) => s.includes("node"),
    zh: "安装 Node 依赖并启动开发服务",
    en: "Install Node dependencies and start the dev server",
    cmd: "npm install && npm run dev",
  },
  {
    when: (s) => s.includes("rust"),
    zh: "用 Cargo 编译运行",
    en: "Build and run with Cargo",
    cmd: "cargo run --release",
  },
  {
    when: (s) => s.includes("go"),
    zh: "用 Go 工具链构建",
    en: "Build with the Go toolchain",
    cmd: "go mod download && go build ./...",
  },
  {
    when: (s) => s.includes("ros"),
    zh: "放进 ROS 工作空间并用 colcon 构建",
    en: "Drop into a ROS workspace and build with colcon",
    cmd: "colcon build --symlink-install && source install/setup.bash",
  },
  {
    when: (s) => s.includes("platformio"),
    zh: "用 PlatformIO 编译并烧录到开发板",
    en: "Compile and flash to the board with PlatformIO",
    cmd: "pio run --target upload && pio device monitor",
  },
  {
    when: (s) => s.includes("espidf"),
    zh: "用 ESP-IDF 配置、编译并烧录",
    en: "Configure, build and flash with ESP-IDF",
    cmd: "idf.py set-target esp32 && idf.py build flash monitor",
  },
  {
    when: (s) => s.includes("cmake") && !s.includes("ros"),
    zh: "用 CMake 构建",
    en: "Build with CMake",
    cmd: "cmake -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build -j",
  },
  {
    when: (s) => s.includes("make") && !s.includes("cmake"),
    zh: "直接用 Make 构建",
    en: "Build straight from the Makefile",
    cmd: "make",
  },
  {
    when: (s) => s.includes("notebook"),
    zh: "打开 Notebook 逐格复现实验",
    en: "Open the notebooks and reproduce the experiments cell by cell",
    cmd: "jupyter lab",
  },
  {
    when: (s) => s.includes("hardware"),
    zh: "仓库含硬件设计文件：用 KiCad / CAD 软件打开原理图与 PCB，STL 可直接送去 3D 打印",
    en: "The repo ships hardware design files: open the schematics and PCB in KiCad / CAD, and send any STL straight to a 3D printer",
    cmd: null,
  },
];

function buildSteps(project) {
  const s = project.signals;
  const steps = [
    {
      zh: "克隆仓库到本地",
      en: "Clone the repository",
      cmd: `git clone --depth 1 ${project.cloneUrl}\ncd ${project.name}`,
    },
  ];
  for (const recipe of STEP_RECIPES) {
    if (recipe.when(s)) steps.push({ zh: recipe.zh, en: recipe.en, cmd: recipe.cmd });
  }
  if (steps.length === 1) {
    steps.push({
      zh: "阅读 README 的 Installation / Quick Start 章节按说明构建",
      en: "Follow the Installation / Quick Start section of the README",
      cmd: null,
    });
  }
  return steps;
}

function buildabilityScore(p) {
  let score = 0;
  const reasons = [];
  const add = (n, zh, en) => {
    score += n;
    reasons.push({ zh, en, weight: n });
  };

  if (p.hasQuickstart) add(22, "README 有明确的安装/快速开始章节", "README has a clear install / quick-start section");
  else if (p.readmeLength > 800) add(8, "README 内容较完整", "README is reasonably detailed");

  if (p.signals.includes("docker")) add(20, "提供 Docker / Compose，开箱即用", "Ships Docker / Compose for a one-command setup");
  if (p.signals.some((s) => ["python", "node", "rust", "go", "conda"].includes(s)))
    add(14, "有明确的依赖清单，环境可还原", "Declares its dependencies, so the environment is reproducible");
  if (p.signals.includes("examples")) add(10, "带示例 / demo 目录", "Includes an examples or demo directory");
  if (p.signals.includes("notebook")) add(6, "含 Notebook，便于逐步复现", "Includes notebooks for step-by-step reproduction");
  if (p.signals.includes("docs")) add(6, "有独立文档目录", "Has a dedicated docs directory");
  if (p.signals.includes("tests")) add(4, "有测试，质量更有保障", "Has tests, a good quality signal");
  if (p.license) add(8, `${p.license} 许可证，可放心使用`, `${p.license} licensed, clear terms of use`);
  if (p.latestRelease) add(6, "有正式 Release 版本", "Publishes tagged releases");
  if (p.releaseAssets?.length) add(6, "Release 附带可直接下载的产物", "Release ships downloadable artifacts");

  const daysSincePush = (Date.now() - new Date(p.pushedAt).getTime()) / 86400_000;
  if (daysSincePush < 14) add(10, "两周内仍在活跃更新", "Actively updated within the last two weeks");
  else if (daysSincePush < 60) add(6, "近两个月有更新", "Updated within the last two months");
  else if (daysSincePush > 365) add(-10, "超过一年未更新，依赖可能已失效", "Untouched for over a year, dependencies may have rotted");

  return { score: Math.max(0, Math.min(100, score)), reasons };
}

/* ------------------------------------------------------------------ */
/* README handling                                                     */
/* ------------------------------------------------------------------ */

const QUICKSTART_RE =
  /^#{1,4}\s*(?:\d+[.、)]\s*)?(installation|install|getting started|quick ?start|quick ?-?start|setup|usage|how to (?:use|run|install)|安装|快速开始|快速上手|使用方法|环境配置|部署)/im;

function cleanReadme(md) {
  return md
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const READMES_DIR = resolve(ROOT, "data/readmes");
/** A handful of repos ship book-length READMEs; nobody reads 400KB in a panel. */
const README_MAX_BYTES = 64 * 1024;
/** Kept in sync with lib/readme.ts, which strips it and shows a "truncated" note. */
const TRUNCATION_MARKER = "<!-- opensource-radar:truncated -->";

const readmePath = (id) => resolve(READMES_DIR, `${id}.md`);

/**
 * Cuts at a line boundary rather than mid-sentence, and closes a code fence
 * left hanging by the cut — an unbalanced fence would otherwise swallow the
 * whole tail of the document into one code block.
 *
 * The budget is in bytes, not characters: a Chinese README would otherwise be
 * three times the size of an English one under the same limit.
 */
function clipReadme(md) {
  const text = md.replace(/\r\n/g, "\n").replace(/^\uFEFF/, "");
  const buf = Buffer.from(text, "utf8");
  if (buf.length <= README_MAX_BYTES) return `${text.trimEnd()}\n`;

  // Slicing bytes can land inside a multi-byte character; drop the remnant.
  let cut = buf
    .subarray(0, README_MAX_BYTES)
    .toString("utf8")
    .replace(/\uFFFD$/, "");
  const lastBreak = cut.lastIndexOf("\n");
  if (lastBreak > cut.length * 0.9) cut = cut.slice(0, lastBreak);
  cut = cut.trimEnd();
  if ((cut.match(/^\s*```/gm) || []).length % 2 === 1) cut += "\n```";
  return `${cut}\n\n${TRUNCATION_MARKER}\n`;
}

async function saveReadme(id, md) {
  await mkdir(READMES_DIR, { recursive: true });
  await writeFile(readmePath(id), clipReadme(md));
}

async function dropReadme(id) {
  await rm(readmePath(id), { force: true });
}

/** Keeps data/readmes/ from accumulating files for projects that dropped out. */
async function pruneReadmes(keptIds) {
  let files;
  try {
    files = await readdir(READMES_DIR);
  } catch {
    return 0;
  }
  let removed = 0;
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    if (keptIds.has(file.slice(0, -3))) continue;
    await rm(resolve(READMES_DIR, file), { force: true });
    removed++;
  }
  return removed;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function collect(categories) {
  const found = new Map();
  const record = (repo, categoryId) => {
    if (repo.archived || repo.disabled || repo.fork) return;
    const existing = found.get(repo.full_name);
    if (existing) {
      existing.seeds.add(categoryId);
      return;
    }
    found.set(repo.full_name, { repo, seeds: new Set([categoryId]) });
  };

  const activeSince = daysAgo(180);
  const newSince = daysAgo(365);

  for (const category of categories) {
    const minStars = category.minStars ?? MIN_STARS;
    const topics = QUICK ? category.searchTopics.slice(0, 2) : category.searchTopics;
    for (const topic of topics) {
      const items = await search(
        `topic:${topic} stars:>=${minStars} pushed:>=${activeSince}`,
        { perPage: 30 }
      );
      items.forEach((r) => record(r, category.id));
      process.stdout.write(
        `  ${category.id}/${topic}: +${items.length} (total ${found.size})\n`
      );
      // api() already backs off on 403/429, so a depleted window only costs
      // time rather than results.
      if (searchRemaining <= 1) console.warn("  search window depleted, backing off");
    }
    // A second pass biased toward young repos so the feed is not frozen in 2023.
    const freshTopic = category.searchTopics[0];
    const fresh = await search(
      `topic:${freshTopic} stars:>=${Math.min(FRESH_MIN_STARS, minStars)} created:>=${newSince}`,
      { perPage: 20 }
    );
    fresh.forEach((r) => record(r, category.id));
    process.stdout.write(`  ${category.id}/fresh: +${fresh.length}\n`);
  }
  return found;
}

async function enrich(project) {
  const [contents, readme, release] = await Promise.all([
    api(`/repos/${project.fullName}/contents`),
    api(`/repos/${project.fullName}/readme`, { raw: true }),
    api(`/repos/${project.fullName}/releases/latest`),
  ]);

  project.signals = Array.isArray(contents) ? detectSignals(contents) : [];

  if (typeof readme === "string" && readme.trim()) {
    project.hasQuickstart = QUICKSTART_RE.test(readme);
    project.readmeLength = readme.length;
    // Still stored on the project: it is the page <meta> description.
    project.readmePreview = cleanReadme(readme).slice(0, 600);
    await saveReadme(project.id, readme);
  } else {
    // Confirmed to have none, so a file left over from an earlier run is stale.
    await dropReadme(project.id);
  }

  if (release?.tag_name) {
    project.latestRelease = release.tag_name;
    project.latestReleaseUrl = release.html_url;
    project.latestReleaseAt = release.published_at;
    project.releaseAssets = (release.assets || [])
      .slice(0, 6)
      .map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size }));
  }

  project.enriched = true;
  return project;
}

function toProject(repo, categoryId, categoryIds) {
  const ageDays = Math.max(
    1,
    (Date.now() - new Date(repo.created_at).getTime()) / 86400_000
  );
  return {
    id: repo.full_name.replace("/", "__"),
    name: repo.name,
    fullName: repo.full_name,
    owner: repo.owner.login,
    ownerAvatar: repo.owner.avatar_url,
    url: repo.html_url,
    homepage: repo.homepage || null,
    description: repo.description || "",
    category: categoryId,
    categories: categoryIds,
    topics: (repo.topics || []).slice(0, 12),
    language: repo.language || null,
    license: repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION" ? repo.license.spdx_id : null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    createdAt: repo.created_at,
    pushedAt: repo.pushed_at,
    defaultBranch: repo.default_branch,
    cloneUrl: repo.clone_url,
    zipUrl: `${repo.html_url}/archive/refs/heads/${repo.default_branch}.zip`,
    // Stars per month: a small, recent project outranks a dormant giant.
    momentum: Math.round((repo.stargazers_count / ageDays) * 30),
    signals: [],
    hasQuickstart: false,
    readmeLength: 0,
    readmePreview: null,
    latestRelease: null,
    latestReleaseUrl: null,
    latestReleaseAt: null,
    releaseAssets: [],
    enriched: false,
    buildability: 0,
    buildabilityReasons: [],
    steps: [],
  };
}

const rank = (p) => p.stars + p.momentum * 3;
const quotaFor = (limit, categoryCount) => Math.ceil((limit / categoryCount) * 0.75);

/** Extra candidates pulled in for domains that are filtered after analysis. */
const PROBE_FACTOR = 3;

/**
 * Ranking purely on stars would hand almost every slot to AI repos, because an
 * LLM framework routinely out-stars the best open hardware project by 50x.
 * Each domain therefore gets a guaranteed quota first, and whatever is left is
 * handed out globally.
 *
 * Domains flagged `probeDesignFiles` are deliberately over-filled here: whether
 * a repo contains real hardware drawings is only knowable after enrichment, so
 * the surplus is analysed and then trimmed by `finalize`.
 */
function shortlist(projects, categories, limit) {
  const quota = quotaFor(limit, categories.length);
  const picked = [];
  const taken = new Set();

  for (const category of categories) {
    const slots = category.probeDesignFiles ? quota * PROBE_FACTOR : quota;
    const inCategory = projects
      .filter((p) => p.category === category.id)
      .sort((a, b) => rank(b) - rank(a))
      .slice(0, slots);
    for (const p of inCategory) {
      picked.push(p);
      taken.add(p.id);
    }
  }

  const surplus =
    categories.filter((c) => c.probeDesignFiles).length * quota * (PROBE_FACTOR - 1);
  const rest = projects
    .filter((p) => !taken.has(p.id))
    .sort((a, b) => rank(b) - rank(a));

  return [...picked, ...rest].slice(0, limit + surplus);
}

/** Applies the real quotas once build signals are known. */
function finalize(candidates, categories, limit) {
  const quota = quotaFor(limit, categories.length);
  const kept = [];
  const taken = new Set();

  for (const category of categories) {
    const inCategory = candidates.filter((p) => p.category === category.id);
    if (category.probeDesignFiles) {
      const hasDesign = (p) => (p.signals.includes("hardware") ? 1 : 0);
      inCategory.sort((a, b) => hasDesign(b) - hasDesign(a) || rank(b) - rank(a));
    } else {
      inCategory.sort((a, b) => rank(b) - rank(a));
    }
    for (const p of inCategory.slice(0, quota)) {
      kept.push(p);
      taken.add(p.id);
    }
  }

  const rest = candidates
    .filter((p) => !taken.has(p.id))
    .sort((a, b) => rank(b) - rank(a));

  return [...kept, ...rest].slice(0, limit).sort((a, b) => rank(b) - rank(a));
}

/** Recomputes everything derived from already-stored signals. */
function rescore(projects) {
  for (const p of projects) {
    const { score, reasons } = buildabilityScore(p);
    p.buildability = score;
    p.buildabilityReasons = reasons;
    p.steps = buildSteps(p);
  }
  return projects;
}

/**
 * Backfills data/readmes/ for the dataset that is already committed, at one API
 * call per project instead of the three a full enrichment pass costs. Leaves
 * projects.json untouched.
 */
async function fetchReadmesOnly(projectsPath) {
  const projects = JSON.parse(await readFile(projectsPath, "utf8"));
  console.log(`Fetching READMEs for ${projects.length} projects`);

  let stored = 0;
  let missing = 0;
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const readme = await api(`/repos/${project.fullName}/readme`, { raw: true });
    if (typeof readme === "string" && readme.trim()) {
      await saveReadme(project.id, readme);
      stored++;
    } else {
      await dropReadme(project.id);
      missing++;
    }
    if ((i + 1) % 50 === 0)
      console.log(`  ${i + 1}/${projects.length} (core budget left: ${coreRemaining})`);
  }

  const pruned = await pruneReadmes(new Set(projects.map((p) => p.id)));
  console.log(
    `\nStored ${stored} READMEs, ${missing} projects have none, pruned ${pruned} stale files`
  );
}

async function main() {
  const projectsPath = resolve(ROOT, "data/projects.json");

  if (README_ONLY) {
    await fetchReadmesOnly(projectsPath);
    return;
  }

  if (REBUILD_STEPS) {
    const existing = JSON.parse(await readFile(projectsPath, "utf8"));
    rescore(existing);
    await writeFile(projectsPath, JSON.stringify(existing, null, 0));
    console.log(`Recomputed scores and steps for ${existing.length} projects (no API calls)`);
    return;
  }

  const taxonomy = JSON.parse(
    await readFile(resolve(ROOT, "data/taxonomy.json"), "utf8")
  );
  const categories = taxonomy.categories;
  const cachePath = resolve(ROOT, "data/.raw-repos.json");

  let raw;
  if (FROM_CACHE) {
    raw = JSON.parse(await readFile(cachePath, "utf8"));
    console.log(`Reusing ${raw.length} cached repositories from ${cachePath}`);
  } else {
    console.log(
      `Searching GitHub (${TOKEN ? "authenticated" : "anonymous — slower, and only the top repos get deep-analysed"})`
    );
    const found = await collect(categories);
    raw = [...found.values()].map(({ repo, seeds }) => ({ repo, seeds: [...seeds] }));
    await mkdir(resolve(ROOT, "data"), { recursive: true });
    await writeFile(cachePath, JSON.stringify(raw));
    console.log(`\nFound ${raw.length} unique repositories`);
  }

  const classified = [];
  let unclassified = 0;
  for (const { repo, seeds } of raw) {
    const verdict = classify(repo, categories, seeds[0]);
    if (!verdict) {
      unclassified++;
      continue;
    }
    classified.push(toProject(repo, verdict.category, verdict.categories));
  }
  if (unclassified) {
    console.log(`Dropped ${unclassified} repositories with no domain evidence`);
  }

  if (DRY_CLASSIFY) {
    const counts = {};
    for (const p of classified) counts[p.category] = (counts[p.category] ?? 0) + 1;
    console.table(counts);
    const names = flag("show", "");
    for (const name of names.split(",").filter(Boolean)) {
      const hit = classified.find((p) => p.name === name || p.fullName === name);
      console.log(hit ? `${hit.fullName} -> ${hit.category}` : `${name}: not in cache`);
    }
    return;
  }

  const candidates = shortlist(classified, categories, LIMIT);
  const toEnrich = candidates.slice(0, ENRICH_LIMIT);
  console.log(`Enriching ${toEnrich.length} repositories with build signals`);
  for (let i = 0; i < toEnrich.length; i++) {
    await enrich(toEnrich[i]);
    if ((i + 1) % 20 === 0)
      console.log(`  ${i + 1}/${toEnrich.length} (core budget left: ${coreRemaining})`);
    if (coreRemaining < 10) {
      console.warn("  core budget nearly exhausted, stopping enrichment");
      break;
    }
  }

  const projects = rescore(finalize(candidates, categories, LIMIT));

  const counts = Object.fromEntries(
    categories.map((c) => [c.id, projects.filter((p) => p.category === c.id).length])
  );

  await mkdir(resolve(ROOT, "data"), { recursive: true });
  await writeFile(projectsPath, JSON.stringify(projects, null, 0));
  await writeFile(
    resolve(ROOT, "data/meta.json"),
    JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        total: projects.length,
        enriched: projects.filter((p) => p.enriched).length,
        authenticated: Boolean(TOKEN),
        counts,
      },
      null,
      2
    )
  );

  const pruned = await pruneReadmes(new Set(projects.map((p) => p.id)));

  console.log(`\nWrote ${projects.length} projects to data/projects.json`);
  if (pruned) console.log(`Pruned ${pruned} stale README files`);
  console.table(counts);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
