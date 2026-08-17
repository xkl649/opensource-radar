import type { Lang } from "./types";

export const messages = {
  zh: {
    "site.name": "开源雷达",
    "site.tagline": "自动追踪全球最新开源项目，一键下载、照着做就能跑起来",
    "site.description":
      "每天自动扫描 GitHub 上的 AI、机器人、智能硬件开源项目，标注可复现程度，附上克隆命令、依赖安装步骤和下载入口。",

    "nav.explore": "浏览项目",
    "nav.how": "工作原理",
    "nav.source": "数据来源",

    "hero.badge": "数据每日自动更新",
    "hero.cta": "开始浏览",
    "hero.stat.projects": "个开源项目",
    "hero.stat.categories": "个方向",
    "hero.stat.updated": "最近更新",
    "hero.stat.runnable": "个附带完整复现步骤",

    "search.placeholder": "搜索项目名、描述或标签，例如 ros2、esp32、diffusion…",
    "search.clear": "清空",

    "filter.all": "全部方向",
    "filter.title": "筛选",
    "filter.language": "编程语言",
    "filter.anyLanguage": "不限语言",
    "filter.onlyDocker": "带 Docker",
    "filter.onlyRunnable": "有快速开始",
    "filter.onlyFresh": "30 天内更新",
    "filter.onlyLicensed": "有开源许可证",
    "filter.reset": "重置筛选",

    "sort.label": "排序",
    "sort.relevance": "综合推荐",
    "sort.stars": "星标最多",
    "sort.momentum": "上升最快",
    "sort.updated": "最近更新",
    "sort.buildability": "最容易复现",
    "sort.newest": "最新创建",

    "results.count": "个项目",
    "results.empty.title": "没有匹配的项目",
    "results.empty.body": "试试换个关键词，或者放宽筛选条件。",
    "results.more": "加载更多",

    "card.detail": "复现指南",
    "card.copy": "复制克隆命令",
    "card.copied": "已复制",
    "card.zip": "下载 ZIP",
    "card.stars": "星标",
    "card.buildability": "可复现度",

    "detail.back": "返回全部项目",
    "detail.openGithub": "在 GitHub 打开",
    "detail.homepage": "项目主页",
    "detail.overview": "项目概览",
    "detail.steps": "复现步骤",
    "detail.stepsHint": "按顺序执行即可在本地跑起来；具体参数以项目 README 为准。",
    "detail.download": "下载方式",
    "detail.download.zip": "下载源码 ZIP",
    "detail.download.zipHint": "不需要装 Git，浏览器直接下载当前主分支快照",
    "detail.download.clone": "Git 克隆",
    "detail.download.cloneHint": "推荐方式，方便后续拉取更新",
    "detail.download.release": "发行版下载",
    "detail.download.releaseHint": "作者打包好的正式版本与可执行产物",
    "detail.readme": "README 摘要",
    "detail.readmeMore": "阅读完整 README",
    "detail.readme.full": "项目 README",
    "detail.readme.expand": "展开完整 README",
    "detail.readme.collapse": "收起 README",
    "detail.readme.truncated": "README 过长，这里只收录了开头部分。",
    "detail.readme.onGithub": "在 GitHub 上查看 README",
    "detail.why": "为什么这个项目容易复现",
    "detail.signals": "仓库里检测到的内容",
    "detail.related": "同方向的其他项目",
    "detail.meta.stars": "星标",
    "detail.meta.forks": "复刻",
    "detail.meta.issues": "未关闭 Issue",
    "detail.meta.language": "主要语言",
    "detail.meta.license": "许可证",
    "detail.meta.updated": "最近提交",
    "detail.meta.created": "创建于",
    "detail.meta.release": "最新版本",
    "detail.noLicense": "未声明",

    "how.title": "它是怎么工作的",
    "how.step1.title": "每天自动扫描",
    "how.step1.body":
      "定时任务按方向检索 GitHub，只收录近半年仍在更新、且有一定社区规模的仓库，剔除归档与复刻仓库。",
    "how.step2.title": "读懂每个仓库",
    "how.step2.body":
      "抓取根目录文件、README 与 Release，识别出 Dockerfile、依赖清单、示例目录、硬件图纸等真正决定「能不能跑起来」的信号。",
    "how.step3.title": "算出可复现度",
    "how.step3.body":
      "把这些信号加权成 0–100 的分数，并据此生成对应的环境搭建命令，让你不用翻文档就知道从哪一步开始。",
    "how.step4.title": "直接拿走用",
    "how.step4.body":
      "每个项目都给出克隆命令、源码 ZIP 和官方发行版下载入口，复制粘贴即可开始复现。",

    "signal.docker": "Docker",
    "signal.python": "Python 依赖",
    "signal.conda": "Conda 环境",
    "signal.node": "Node 依赖",
    "signal.rust": "Rust",
    "signal.go": "Go",
    "signal.cmake": "CMake",
    "signal.make": "Makefile",
    "signal.platformio": "PlatformIO",
    "signal.arduino": "Arduino",
    "signal.espidf": "ESP-IDF",
    "signal.ros": "ROS 包",
    "signal.notebook": "Notebook",
    "signal.examples": "示例代码",
    "signal.hardware": "硬件图纸",
    "signal.docs": "文档",
    "signal.install": "安装脚本",
    "signal.tests": "测试",

    "buildability.high": "开箱即用",
    "buildability.mid": "稍作配置",
    "buildability.low": "需要摸索",
    "buildability.unknown": "待评估",

    "time.today": "今天",
    "time.daysAgo": "天前",
    "time.monthsAgo": "个月前",
    "time.yearsAgo": "年前",

    "footer.updated": "数据最后更新于",
    "footer.note":
      "本站仅聚合与索引公开的开源仓库元数据，所有代码与版权归各项目作者所有，请遵守各自的开源许可证。",
    "footer.refresh": "数据由 GitHub Actions 每日自动刷新",
  },

  en: {
    "site.name": "OpenSource Radar",
    "site.tagline":
      "Tracks the newest open-source work worldwide, with everything you need to download it and get it running",
    "site.description":
      "A daily automated sweep of AI, robotics and smart-hardware repositories on GitHub, scored for reproducibility and shipped with clone commands, setup steps and download links.",

    "nav.explore": "Explore",
    "nav.how": "How it works",
    "nav.source": "Data source",

    "hero.badge": "Refreshed automatically every day",
    "hero.cta": "Start exploring",
    "hero.stat.projects": "projects",
    "hero.stat.categories": "domains",
    "hero.stat.updated": "last refreshed",
    "hero.stat.runnable": "with full setup steps",

    "search.placeholder":
      "Search names, descriptions or topics — try ros2, esp32, diffusion…",
    "search.clear": "Clear",

    "filter.all": "All domains",
    "filter.title": "Filters",
    "filter.language": "Language",
    "filter.anyLanguage": "Any language",
    "filter.onlyDocker": "Has Docker",
    "filter.onlyRunnable": "Has quick start",
    "filter.onlyFresh": "Updated in 30 days",
    "filter.onlyLicensed": "Has a license",
    "filter.reset": "Reset filters",

    "sort.label": "Sort",
    "sort.relevance": "Recommended",
    "sort.stars": "Most stars",
    "sort.momentum": "Fastest rising",
    "sort.updated": "Recently updated",
    "sort.buildability": "Easiest to reproduce",
    "sort.newest": "Newest",

    "results.count": "projects",
    "results.empty.title": "Nothing matches yet",
    "results.empty.body": "Try a different keyword or loosen the filters.",
    "results.more": "Load more",

    "card.detail": "Build guide",
    "card.copy": "Copy clone command",
    "card.copied": "Copied",
    "card.zip": "Download ZIP",
    "card.stars": "stars",
    "card.buildability": "Reproducibility",

    "detail.back": "Back to all projects",
    "detail.openGithub": "Open on GitHub",
    "detail.homepage": "Project site",
    "detail.overview": "Overview",
    "detail.steps": "Reproduction steps",
    "detail.stepsHint":
      "Run these in order to get it going locally; defer to the project README for exact flags.",
    "detail.download": "Get the code",
    "detail.download.zip": "Source ZIP",
    "detail.download.zipHint":
      "No Git required — downloads a snapshot of the default branch",
    "detail.download.clone": "Git clone",
    "detail.download.cloneHint": "Recommended, so you can pull updates later",
    "detail.download.release": "Releases",
    "detail.download.releaseHint": "Tagged versions and prebuilt artifacts from the author",
    "detail.readme": "README excerpt",
    "detail.readmeMore": "Read the full README",
    "detail.readme.full": "README",
    "detail.readme.expand": "Show full README",
    "detail.readme.collapse": "Collapse README",
    "detail.readme.truncated": "This README is very long — only the beginning is stored here.",
    "detail.readme.onGithub": "View the README on GitHub",
    "detail.why": "Why this one is easy to reproduce",
    "detail.signals": "Detected in the repository",
    "detail.related": "More in this domain",
    "detail.meta.stars": "Stars",
    "detail.meta.forks": "Forks",
    "detail.meta.issues": "Open issues",
    "detail.meta.language": "Language",
    "detail.meta.license": "License",
    "detail.meta.updated": "Last push",
    "detail.meta.created": "Created",
    "detail.meta.release": "Latest release",
    "detail.noLicense": "Not declared",

    "how.title": "How it works",
    "how.step1.title": "A daily sweep",
    "how.step1.body":
      "A scheduled job searches GitHub domain by domain, keeping only repositories that are still active in the last six months and have real community traction, dropping archives and forks.",
    "how.step2.title": "Reading each repository",
    "how.step2.body":
      "It pulls the root file listing, the README and the latest release to spot Dockerfiles, dependency manifests, example folders and hardware drawings — the things that decide whether you can actually run it.",
    "how.step3.title": "Scoring reproducibility",
    "how.step3.body":
      "Those signals are weighted into a 0–100 score and turned into the matching setup commands, so you know where to start without digging through docs.",
    "how.step4.title": "Take it and go",
    "how.step4.body":
      "Every project comes with a clone command, a source ZIP and links to official release downloads. Copy, paste, start building.",

    "signal.docker": "Docker",
    "signal.python": "Python deps",
    "signal.conda": "Conda env",
    "signal.node": "Node deps",
    "signal.rust": "Rust",
    "signal.go": "Go",
    "signal.cmake": "CMake",
    "signal.make": "Makefile",
    "signal.platformio": "PlatformIO",
    "signal.arduino": "Arduino",
    "signal.espidf": "ESP-IDF",
    "signal.ros": "ROS package",
    "signal.notebook": "Notebooks",
    "signal.examples": "Examples",
    "signal.hardware": "Hardware files",
    "signal.docs": "Docs",
    "signal.install": "Install script",
    "signal.tests": "Tests",

    "buildability.high": "Ready to run",
    "buildability.mid": "Some setup",
    "buildability.low": "Expect digging",
    "buildability.unknown": "Not scored",

    "time.today": "today",
    "time.daysAgo": "d ago",
    "time.monthsAgo": "mo ago",
    "time.yearsAgo": "y ago",

    "footer.updated": "Data last refreshed",
    "footer.note":
      "This site only indexes public metadata of open-source repositories. All code and copyright belong to the original authors — please respect each project's license.",
    "footer.refresh": "Refreshed daily by GitHub Actions",
  },
} as const;

export type MessageKey = keyof (typeof messages)["zh"];

export function translate(lang: Lang, key: MessageKey): string {
  return messages[lang][key] ?? messages.en[key] ?? messages.zh[key] ?? key;
}

export function formatRelative(iso: string, lang: Lang): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return translate(lang, "time.today");
  if (days < 30)
    return lang === "zh" ? `${days} 天前` : `${days}${translate(lang, "time.daysAgo")}`;
  if (days < 365) {
    const months = Math.floor(days / 30);
    return lang === "zh"
      ? `${months} 个月前`
      : `${months}${translate(lang, "time.monthsAgo")}`;
  }
  const years = Math.floor(days / 365);
  return lang === "zh" ? `${years} 年前` : `${years}${translate(lang, "time.yearsAgo")}`;
}

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10_000 ? 0 : 1)}k`;
  return String(n);
}

export function formatBytes(n: number): string {
  if (n >= 1024 ** 3) return `${(n / 1024 ** 3).toFixed(1)} GB`;
  if (n >= 1024 ** 2) return `${(n / 1024 ** 2).toFixed(1)} MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${n} B`;
}

export function buildabilityTier(score: number): {
  key: MessageKey;
  color: string;
  bar: string;
} {
  if (score <= 0)
    return { key: "buildability.unknown", color: "text-slate-400", bar: "bg-slate-500" };
  if (score >= 70)
    return { key: "buildability.high", color: "text-emerald-300", bar: "bg-emerald-400" };
  if (score >= 40)
    return { key: "buildability.mid", color: "text-amber-300", bar: "bg-amber-400" };
  return { key: "buildability.low", color: "text-slate-400", bar: "bg-slate-500" };
}
