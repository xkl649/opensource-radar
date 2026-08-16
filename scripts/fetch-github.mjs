/**
 * Builds data/projects.json by searching GitHub for active open-source projects
 * across the categories declared in data/taxonomy.json, then enriching each repo
 * with the signals a person needs in order to actually clone and run it:
 * dependency manifests, container files, releases and a README excerpt.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/fetch-github.mjs [--quick] [--limit=400] [--min-stars=150]
 *
 * Without a token the GitHub API allows only 60 core + 10 search requests per
 * hour, so the script degrades to searching only and enriching the top repos.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
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
const LIMIT = Number(flag("limit", 400));
const MIN_STARS = Number(flag("min-stars", 150));
const FRESH_MIN_STARS = Number(flag("fresh-min-stars", 40));
// Enriching costs 3 API calls per repo, which is unaffordable unauthenticated.
const ENRICH_LIMIT = Number(flag("enrich", QUICK ? 40 : TOKEN ? LIMIT : 12));

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

function scoreCategory(repo, category) {
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  const haystack = `${repo.name} ${repo.description || ""}`.toLowerCase();
  let score = 0;
  for (const topic of category.searchTopics) {
    if (topics.includes(topic.toLowerCase())) score += 4;
  }
  for (const kw of category.keywords) {
    if (topics.some((t) => t.includes(kw))) score += 2;
    if (haystack.includes(kw)) score += 1;
  }
  return score;
}

function classify(repo, categories, seedCategoryId) {
  const scored = categories
    .map((c) => ({ id: c.id, score: scoreCategory(repo, c) }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);

  // The query that surfaced the repo is strong evidence; give it a nudge so a
  // ROS package found under "robotics" does not get filed under "ml-frameworks".
  const seed = scored.find((c) => c.id === seedCategoryId);
  if (seed) seed.score += 3;
  else scored.push({ id: seedCategoryId, score: 3 });
  scored.sort((a, b) => b.score - a.score);

  return {
    category: scored[0]?.id ?? seedCategoryId,
    categories: scored.slice(0, 3).map((c) => c.id),
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
  { key: "notebook", match: (f) => /\.ipynb$/i.test(f) },
  { key: "examples", match: (f) => /^examples?$|^demos?$|^samples?$|^tutorials?$/i.test(f) },
  { key: "hardware", match: (f) => /\.(kicad_pcb|kicad_pro|sch|brd|step|stl|f3d|scad|dxf)$/i.test(f) },
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
    zh: "用 Docker 一键起环境，无需本机装依赖",
    en: "Spin up the environment with Docker, no local deps required",
    cmd: "docker compose up -d   # 或 / or: docker build -t app . && docker run --rm -it app",
  },
  {
    when: (s) => s.includes("conda"),
    zh: "用 Conda 还原作者声明的完整环境",
    en: "Recreate the author's exact environment with Conda",
    cmd: "conda env create -f environment.yml && conda activate <env-name>",
  },
  {
    when: (s) => s.includes("python") && !s.includes("conda"),
    zh: "创建虚拟环境并安装 Python 依赖",
    en: "Create a virtualenv and install the Python dependencies",
    cmd: "python -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt   # 或 / or: pip install -e .",
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
    zh: "硬件文件：用 KiCad / CAD 软件打开，或直接把 STL 送去 3D 打印",
    en: "Hardware files: open in KiCad / CAD, or send the STL straight to a 3D printer",
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

  if (typeof readme === "string" && readme.length) {
    project.hasQuickstart = QUICKSTART_RE.test(readme);
    project.readmeLength = readme.length;
    project.readmePreview = cleanReadme(readme).slice(0, 600);
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

/**
 * Ranking purely on stars would hand almost every slot to AI repos, because an
 * LLM framework routinely out-stars the best open hardware project by 50x.
 * Each domain therefore gets a guaranteed quota first, and whatever is left is
 * handed out globally.
 */
function selectBalanced(projects, categoryIds, limit) {
  const rank = (p) => p.stars + p.momentum * 3;
  const quota = Math.ceil((limit / categoryIds.length) * 0.75);

  const picked = [];
  const taken = new Set();

  for (const id of categoryIds) {
    const inCategory = projects
      .filter((p) => p.category === id)
      .sort((a, b) => rank(b) - rank(a))
      .slice(0, quota);
    for (const p of inCategory) {
      picked.push(p);
      taken.add(p.id);
    }
  }

  const rest = projects
    .filter((p) => !taken.has(p.id))
    .sort((a, b) => rank(b) - rank(a));

  return [...picked, ...rest].slice(0, limit).sort((a, b) => rank(b) - rank(a));
}

async function main() {
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

  let projects = raw.map(({ repo, seeds }) => {
    const { category, categories: cats } = classify(repo, categories, seeds[0]);
    return toProject(repo, category, cats);
  });

  projects = selectBalanced(
    projects,
    categories.map((c) => c.id),
    LIMIT
  );

  const toEnrich = projects.slice(0, ENRICH_LIMIT);
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

  for (const p of projects) {
    const { score, reasons } = buildabilityScore(p);
    p.buildability = score;
    p.buildabilityReasons = reasons;
    p.steps = buildSteps(p);
  }

  const counts = Object.fromEntries(
    categories.map((c) => [c.id, projects.filter((p) => p.category === c.id).length])
  );

  await mkdir(resolve(ROOT, "data"), { recursive: true });
  await writeFile(
    resolve(ROOT, "data/projects.json"),
    JSON.stringify(projects, null, 0)
  );
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

  console.log(`\nWrote ${projects.length} projects to data/projects.json`);
  console.table(counts);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
