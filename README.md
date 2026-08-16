# 开源雷达 · OpenSource Radar

自动追踪 GitHub 上 AI、机器人、智能硬件等方向的最新开源项目，并把「能不能跑起来」这件事量化出来：
每个项目都附带可复现度评分、环境搭建命令、克隆命令与下载入口。

A daily automated sweep of open-source AI, robotics and smart-hardware repositories, scored for
reproducibility and shipped with the clone command, setup steps and download links you need to
actually build the thing.

---

## 它解决什么问题 · What it is for

找开源项目不难，难的是找到**真的能跑起来**的开源项目。本站在收录时会读取每个仓库的根目录文件、
README 和 Release，识别 Dockerfile、依赖清单、示例目录、硬件图纸等信号，据此：

1. 算出 0–100 的**可复现度**评分，并列出加分/扣分的具体原因；
2. 生成**对应技术栈的搭建命令**（Docker / pip / colcon / PlatformIO / ESP-IDF / CMake …）；
3. 给出三条获取路径：`git clone`、源码 ZIP、官方 Release 产物。

## 技术栈 · Stack

| | |
|---|---|
| 框架 | Next.js 16（App Router，静态预渲染）+ React 19 |
| 样式 | Tailwind CSS 4 |
| 数据 | 提交进仓库的静态 JSON，无数据库、无运行时依赖 |
| 更新 | GitHub Actions 定时任务，每天 09:20（北京时间）自动刷新并提交 |

数据在构建时被内联进页面，因此站点可以部署在任何静态托管上，零运行成本。

## 本地运行 · Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

首次克隆时 `data/projects.json` 里已有一份数据。要自己重新抓取：

```bash
# 强烈建议带 token：未认证时 GitHub 只给 60 次/小时的核心 API 配额，
# 意味着 400 个项目里只有十几个能做深度分析。
# token 只需 public_repo 只读权限，在 https://github.com/settings/tokens 生成。
GITHUB_TOKEN=ghp_xxx npm run fetch
```

也可以把 token 写进项目根目录的 `.github-token`（已在 `.gitignore` 里），脚本会自动读取，
这样不会留在 shell 历史里：

```bash
echo 'ghp_xxx' > .github-token
npm run fetch
```

常用参数：

```bash
node scripts/fetch-github.mjs \
  --limit=600        # 最终保留的项目数
  --min-stars=150    # 主检索的星标门槛（各方向可在 taxonomy 里单独覆盖）
  --enrich=600       # 做深度分析的项目数
  --quick            # 每个方向只查 2 个 topic，用于快速验证
  --from-cache       # 跳过检索，直接用上次的原始结果重新排序/分析
```

## 项目结构 · Layout

```
app/                     页面（首页 + /project/[id] 详情页，全部静态预渲染）
components/              UI 组件，全部支持中英切换
lib/
  taxonomy 相关          分类标签、配色
  i18n.ts                中英文案与格式化
  data.ts                读取静态数据集
data/
  taxonomy.json          分类定义：检索用 topic、关键词、星标门槛（脚本与前端共用）
  projects.json          抓取产物，由 Actions 每日更新
  meta.json              数据集元信息（更新时间、各方向数量）
scripts/
  fetch-github.mjs       抓取 + 分析 + 打分，纯 Node，无额外依赖
.github/workflows/
  update-data.yml        每日定时刷新
```

## 调整收录范围 · Tuning what gets indexed

所有分类逻辑集中在 `data/taxonomy.json`，前端和抓取脚本共用同一份定义。新增一个方向只需要追加一项：

```jsonc
{
  "id": "quantum",
  "zh": "量子计算",
  "en": "Quantum Computing",
  "descZh": "……",
  "descEn": "……",
  "hue": "cyan",          // 取值见 lib/categories.ts 里的 HUES
  "minStars": 80,         // 可选，覆盖全局门槛
  "searchTopics": ["quantum-computing", "qiskit"],
  "keywords": ["quantum", "qubit"]
}
```

`searchTopics` 用于 GitHub 检索，`keywords` 用于把仓库归到最合适的方向。

## 部署 · Deploy

推到 GitHub 后：

1. 在 Vercel 导入仓库，框架自动识别为 Next.js，无需任何环境变量；
2. 仓库 Settings → Actions → General → Workflow permissions 选择 **Read and write permissions**，
   让定时任务可以把刷新后的数据提交回仓库；
3. 每次数据提交都会触发一次重新部署，站点内容随之更新。

定时任务使用 Actions 自带的 `GITHUB_TOKEN`，不需要额外配置 secret。

## 说明 · Notes

本站只聚合和索引公开的开源仓库元数据，所有代码与版权归各项目作者所有，使用前请遵守各自的开源许可证。
