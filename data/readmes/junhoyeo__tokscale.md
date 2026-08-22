<!-- <CENTERED SECTION FOR GITHUB DISPLAY> -->

<div align="center">

[![Tokscale](./.github/assets/hero-v2.png)](https://tokscale.ai)

</div>

> A high-performance CLI tool and visualization dashboard for tracking token usage and costs across multiple AI coding agents.

> [!TIP]
>
> I drop new open-source work every week. Don't miss the next one.
>
> | [<img alt="GitHub Follow" src="https://img.shields.io/github/followers/junhoyeo?style=flat-square&logo=github&labelColor=black&color=24292f" width="156px" />](https://github.com/junhoyeo) | Follow [@junhoyeo](https://github.com/junhoyeo) on GitHub for more projects. Hacking on AI, infra, and everything in between. |
> | :-----| :----- |
> [<img alt="Discord link" src="https://img.shields.io/discord/1480206352755458110?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square" width="156px" />](https://discord.gg/h6DUGWdBbm) | Come hang out in our [Discord](https://discord.gg/h6DUGWdBbm) — and surround yourself with the world's top-tier vibers. |
> [<img alt="Sponsor Tokscale" src="https://img.shields.io/badge/sponsor-Tokscale-EA4AAA?style=flat-square&logo=githubsponsors&logoColor=white&labelColor=black" width="156px" />](https://github.com/sponsors/junhoyeo) | Support Tokscale's continued development through [GitHub Sponsors](https://github.com/sponsors/junhoyeo). |

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/junhoyeo/tokscale?color=0073FF&labelColor=black&logo=github&style=flat-square)](https://github.com/junhoyeo/tokscale/releases)
[![npm Version](https://img.shields.io/npm/v/tokscale?color=0073FF&labelColor=black&style=flat-square&logo=npm)](https://www.npmjs.com/package/tokscale)
[![npm Downloads](https://img.shields.io/npm/dt/tokscale?color=0073FF&labelColor=black&style=flat-square)](https://www.npmjs.com/package/tokscale)
[![GitHub Contributors](https://img.shields.io/github/contributors/junhoyeo/tokscale?color=0073FF&labelColor=black&style=flat-square)](https://github.com/junhoyeo/tokscale/graphs/contributors)
[![GitHub Forks](https://img.shields.io/github/forks/junhoyeo/tokscale?color=0073FF&labelColor=black&style=flat-square)](https://github.com/junhoyeo/tokscale/network/members)
[![GitHub Stars](https://img.shields.io/github/stars/junhoyeo/tokscale?color=0073FF&labelColor=black&style=flat-square)](https://github.com/junhoyeo/tokscale/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/junhoyeo/tokscale?color=0073FF&labelColor=black&style=flat-square)](https://github.com/junhoyeo/tokscale/issues)
[![License](https://img.shields.io/badge/license-MIT-white?labelColor=black&style=flat-square)](https://github.com/junhoyeo/tokscale/blob/master/LICENSE)
[![Coverage](https://raw.githubusercontent.com/junhoyeo/tokscale/refs/heads/main/.github/badges/coverage.svg)](https://github.com/junhoyeo/tokscale/issues/403)

[🇺🇸 English](README.md) | [🇰🇷 한국어](README.ko.md) | [🇯🇵 日本語](README.ja.md) | [🇨🇳 简体中文](README.zh-cn.md)

</div>

<!-- </CENTERED SECTION FOR GITHUB DISPLAY> -->

| Overview | Models |
|:---:|:---:|
| ![TUI Overview](.github/assets/tui-overview.png) | ![TUI Models](.github/assets/tui-models.png) | 

| Daily Summary | Stats |
|:---:|:---:|
| ![TUI Daily Summary](.github/assets/tui-daily.png) | ![TUI Stats](.github/assets/tui-stats.png) | 

| Frontend (3D Contributions Graph) | Wrapped 2025 |
|:---:|:---:|
| <a href="https://tokscale.ai"><img alt="Frontend (3D Contributions Graph)" src=".github/assets/frontend-contributions-graph.png" width="700px" /></a> | <a href="#wrapped-2025"><img alt="Wrapped 2025" src=".github/assets/wrapped-2025-agents.png" width="700px" /></a> |

> **Run [`bunx tokscale@latest submit`](#social) to submit your usage data to the leaderboard and create your public profile!**

## Overview

**Tokscale** helps you monitor and analyze your token consumption from:

| Logo | Client | Data Location |
|------|----------|---------------|
| <img width="48px" src=".github/assets/client-opencode.png" alt="OpenCode" /> | [OpenCode](https://github.com/sst/opencode) | `~/.local/share/opencode/opencode.db` (1.2+, all channels including `opencode-stable.db`) or/and `~/.local/share/opencode/storage/message/` (legacy/unmigrated) |
| <img width="48px" src=".github/assets/client-claude.jpg" alt="Claude" /> | [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | `~/.claude/projects/` and `~/.claude/transcripts/` |
| <img width="48px" src=".github/assets/client-openclaw.jpg" alt="OpenClaw" /> | [OpenClaw](https://openclaw.ai/) | `~/.openclaw/agents/` (+ legacy: `.clawdbot`, `.moltbot`, `.moldbot`) |
| <img width="48px" src=".github/assets/client-openai.jpg" alt="Codex" /> | [Codex CLI](https://github.com/openai/codex) | `~/.codex/sessions/` |
| <img width="48px" src="https://github.com/PrimeIntellect-ai.png" alt="Prime Agent" /> | [Prime Agent](https://github.com/PrimeIntellect-ai/prime-agent) | `~/.prime/agent/sessions/` and `~/.prime/agent/session-artifacts/` (RLM child sessions) |
| <img width="48px" src=".github/assets/client-sakana.png" alt="Sakana Fugu" /> | [Sakana Fugu](https://sakana.ai/fugu/) | via Codex — `~/.codex/sessions/*.jsonl` (`model_provider: sakana`) |
| <img width="48px" src=".github/assets/client-copilot.jpg" alt="Copilot" /> | [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-the-github-copilot-coding-agent-in-cli) | `~/.copilot/otel/*.jsonl` (+ `COPILOT_OTEL_FILE_EXPORTER_PATH`) |
| <img width="48px" src=".github/assets/client-hermes.png" alt="Hermes Agent" /> | [Hermes Agent](https://github.com/NousResearch/hermes-agent) | `$HERMES_HOME/state.db` and `$HERMES_HOME/profiles/*/state.db` (fallback: `~/.hermes/...`) |
| <img width="48px" src=".github/assets/client-gemini.png" alt="Gemini" /> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | `$GEMINI_CLI_HOME/tmp/*/chats/*.json` (fallback: `~/.gemini/tmp/*/chats/*.json`) |
| <img width="48px" src=".github/assets/client-cursor.jpg" alt="Cursor" /> | [Cursor IDE](https://cursor.com/) | Cursor API export cached at `~/.config/tokscale/cursor-cache/usage*.csv` (desktop auto-login or cookie paste; not `~/.cursor`) |
| <img width="48px" src=".github/assets/client-amp.png" alt="Amp" /> | [Amp (AmpCode)](https://ampcode.com/) | `~/.local/share/amp/threads/` |
| <img width="48px" src=".github/assets/client-codebuff.png" alt="Codebuff" /> | [Codebuff](https://codebuff.com/) | `~/.config/manicode/` (+ `manicode-dev`, `manicode-staging`; override via `CODEBUFF_DATA_DIR`) |
| <img width="48px" src=".github/assets/client-freebuff.png" alt="Freebuff" /> | [Freebuff](https://github.com/CodebuffAI/freebuff) | shares `~/.config/manicode/` with Codebuff (same runtime); token usage is estimated from the transcript (no local usage; override via `FREEBUFF_DATA_DIR`) |
| <img width="48px" src=".github/assets/client-droid.png" alt="Droid" /> | [Droid (Factory Droid)](https://factory.ai/) | `~/.factory/sessions/` |
| <img width="48px" src=".github/assets/client-pi.png" alt="Pi" /> | [Pi](https://github.com/badlogic/pi-mono) | `~/.pi/agent/sessions/` and `~/.omp/agent/sessions/` ([Oh My Pi](https://github.com/can1357/oh-my-pi)) |
| <img width="48px" src=".github/assets/client-senpi.png" alt="Senpi" /> | [Senpi (OmO Native)](https://github.com/code-yeongyu/senpi) | `~/.senpi/agent/sessions/` (override via `SENPI_CODING_AGENT_DIR`) |
| <img width="48px" src="https://github.com/getkimchi.png" alt="Kimchi" /> | [Kimchi Coding](https://kimchi.dev/) | `~/.config/kimchi/harness/sessions/` (override via `KIMCHI_CODING_AGENT_DIR`) |
| <img width="48px" src=".github/assets/client-synthetic.png" alt="Reasonix" /> | [Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | `~/.reasonix/stats/*.jsonl` (override via `REASONIX_STATE_HOME` or `REASONIX_HOME`) |
| <img width="48px" src=".github/assets/client-kimi.png" alt="Kimi" /> | [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) / [Kimi Code](https://github.com/MoonshotAI/kimi-code) | kimi-cli: `~/.kimi/sessions/` kimi-code: `~/.kimi-code/sessions/` (override via `KIMI_CODE_HOME`) kimi-work: desktop app-data root (auto-discovered) |
| <img width="48px" src=".github/assets/client-qwen.png" alt="Qwen" /> | [Qwen CLI](https://github.com/QwenLM/qwen-cli) | `~/.qwen/projects/` |
| <img width="48px" src=".github/assets/client-roocode.png" alt="Roo Code" /> | [Roo Code](https://github.com/RooCodeInc/Roo-Code) | `~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/tasks/` (+ server: `~/.vscode-server/data/User/globalStorage/rooveterinaryinc.roo-cline/tasks/`) |
| <img width="48px" src=".github/assets/client-kilocode.png" alt="Kilo" /> | [Kilo](https://github.com/Kilo-Org/kilocode) | `~/.config/Code/User/globalStorage/kilocode.kilo-code/tasks/` (+ server: `~/.vscode-server/data/User/globalStorage/kilocode.kilo-code/tasks/`) |
| <img width="48px" src=".github/assets/client-kilocode.png" alt="Kilo CLI" /> | [Kilo CLI](https://github.com/nicepkg/kilo) | `~/.local/share/kilo/kilo.db` |
| <img width="48px" src=".github/assets/client-mux.png" alt="Mux" /> | [Mux](https://github.com/coder/mux) | `~/.mux/sessions/` |
| <img width="48px" src=".github/assets/client-crush.png" alt="Crush" /> | [Crush](https://crush.ai/) | `$XDG_DATA_HOME/crush/projects.json` (project registry; fallback: `~/.local/share/crush/projects.json`) |
| <img width="48px" src=".github/assets/client-goose.png" alt="Goose" /> | [Goose](https://github.com/aaif-goose/goose) | `~/.local/share/goose/sessions/sessions.db` (+ macOS Application Support, legacy Block/goose paths; override via `GOOSE_PATH_ROOT`) |
| <img width="48px" src=".github/assets/client-antigravity.png" alt="Antigravity" /> | [Google Antigravity](https://antigravity.google/) | Cached via `tokscale antigravity sync` to `~/.config/tokscale/antigravity-cache/sessions/*.jsonl` (live RPC against the local language server) |
| <img width="48px" src=".github/assets/client-antigravity.png" alt="Antigravity CLI" /> | [Antigravity CLI](https://antigravity.google/) | `~/.gemini/antigravity-cli/conversations/*.db` (override the Gemini home via `GEMINI_CLI_HOME`; local SQLite, read directly — no `antigravity sync` needed) |
| <img width="48px" src=".github/assets/client-trae.png" alt="Trae" /> | [Trae IDE](https://www.trae.ai/) / [Trae Solo](https://www.trae.ai/solo) (international) | Cached via `tokscale trae sync` to `~/.config/tokscale/trae-cache/sessions/*.json` (account-level usage from the official API) |
| <img width="48px" src="https://github.com/warpdotdev.png" alt="Warp" /> | [Warp](https://www.warp.dev/) / Oz | Cached via `tokscale warp sync` to `~/.config/tokscale/warp-cache/usage.json` (aggregate requests and spend only; no token transcripts) |
| <img width="48px" src="https://github.com/xai-org.png" alt="Grok Build" /> | Grok Build | `$GROK_HOME/sessions/*/*/updates.jsonl` (fallback: `~/.grok/sessions/*/*/updates.jsonl`) |
| <img width="48px" src=".github/assets/client-zed.webp" alt="Zed Agent" /> | [Zed Agent](https://zed.dev/docs/ai/agent-panel) | `~/.local/share/zed/threads/threads.db` (macOS: `~/Library/Application Support/Zed/threads/threads.db`; Windows: `%LOCALAPPDATA%/Zed/threads/threads.db`; hosted Zed models only, not external ACP agents) |
| <img width="48px" src="https://github.com/kirodotdev.png" alt="Kiro" /> | Kiro | `~/.kiro/sessions/cli/*.json` (+ `*.jsonl`), `~/.local/share/kiro-cli/data.sqlite3` (macOS: `~/Library/Application Support/kiro-cli/data.sqlite3`), and Kiro IDE globalStorage snapshots (`Kiro/User/globalStorage/kiro.kiroagent`; macOS Application Support, Linux `~/.config/Kiro`, Windows `%APPDATA%\Kiro`) |
| <img width="48px" src="https://github.com/cline.png" alt="Cline" /> | [Cline](https://github.com/cline/cline) | VS Code globalStorage tasks (Linux: `~/.config/Code/...`; macOS: `~/Library/Application Support/Code/...`; Windows: `%APPDATA%\Code\...`; server: `~/.vscode-server/data/User/globalStorage/saoudrizwan.claude-dev/tasks/`) + Cline CLI sessions (first available root, in order: `$CLINE_SESSION_DATA_DIR`, `$CLINE_DATA_DIR/sessions/`, `$CLINE_DIR/data/sessions/`, fallback `~/.cline/data/sessions/`; blank/whitespace-only environment values are ignored) |
| <img width="48px" src="https://github.com/user-attachments/assets/7246e920-f3f8-4b6e-847e-030ae04e86c2" alt="Gajae-Code" /> | [gajae-code (gjc)](https://github.com/Yeachan-Heo/gajae-code) | `~/.gjc/agent/sessions/` (override via `GJC_CODING_AGENT_DIR`, `GJC_CONFIG_DIR`, `PI_CONFIG_DIR`; `$XDG_DATA_HOME/gjc/sessions/` on Linux/macOS) |
| <img width="48px" src=".github/assets/client-cherrystudio.png" alt="Cherry Studio" /> | [Cherry Studio](https://cherry-ai.com/) | `%APPDATA%\CherryStudio\Data\Agents\.claude\projects\*.jsonl` and legacy `%APPDATA%\CherryStudio\.claude\projects\*.jsonl` (macOS: `~/Library/Application Support/CherryStudio/Data/Agents/.claude/projects/`; Linux: `$XDG_CONFIG_HOME/CherryStudio/Data/Agents/.claude/projects/`; Agent / Claude Code mode transcripts; V2 root preferred, legacy keeps untransferred history) |
| <img width="48px" src=".github/assets/client-jcode.png" alt="Jcode" /> | [Jcode](https://github.com/1jehuang/jcode) | `~/.jcode/sessions/session_*.json` + `session_*.journal.jsonl` sidecars (override via `JCODE_HOME`) |
| <img width="48px" src="https://github.com/XiaomiMiMo.png" alt="MiMo Code" /> | [MiMo Code](https://github.com/XiaomiMiMo/MiMo-Code) | `~/.local/share/mimocode/mimocode.db` (XDG data dir; SQLite) |
| <img width="48px" src="https://github.com/JetBrains.png" alt="Junie" /> | [Junie](https://www.jetbrains.com/junie/) | `~/.junie/sessions/*/events.jsonl` |
| <img width="48px" src="https://raw.githubusercontent.com/CommandCodeAI/command-code/main/.github/commandcode/logo/command-code-logo-black-bg.png" alt="Command Code" /> | [Command Code](https://github.com/CommandCodeAI/command-code) | `~/.commandcode/projects/**/*.jsonl` (token usage estimated from transcripts at ~4 chars/token; not persisted on disk) |
| <img width="48px" src="https://github.com/zai-org.png" alt="ZCode" /> | [ZCode](https://zcode.z.ai/) | `~/.zcode/cli/db/db.sqlite` (v2 usage database) and `~/.zcode/projects/**/*.jsonl` (legacy transcripts) |
| <img width="48px" src="https://github.com/alibaba.png" alt="OpenCodeReview" /> | [OpenCodeReview](https://github.com/alibaba/open-code-review) | `~/.opencodereview/sessions/**/*.jsonl` |
| <img width="48px" src="https://pc3.gtimg.com/softmgr/logo/48/43068_48_1764842447.png" alt="CodeBuddy" /> | [CodeBuddy](https://www.codebuddy.cn/docs/cli/overview) (CLI, IDE, VS Code plugin) | `~/.codebuddy/projects/**/*.jsonl` + extension logs |
| <img width="48px" src="https://static.workbuddy.cn/web/agents/008054d6beaaf4a83e2d049e982e1244560726dc/assets/share-logo.png" alt="WorkBuddy" /> | WorkBuddy | `~/.workbuddy/projects/**/*.jsonl` + SQLite fallback |
| <img width="48px" src=".github/assets/client-devin.jpg" alt="Devin CLI" /> | [Devin CLI](https://devin.ai/) | `~/.local/share/devin/cli/sessions.db` (SQLite) |
| <img width="48px" src=".github/assets/client-devin.jpg" alt="Devin Desktop" /> | [Devin Desktop](https://devin.ai/) | ACP events: macOS `~/Library/Application Support/Devin/User/acp-events/`; Linux `~/.config/Devin/User/acp-events/`; Windows `%APPDATA%\Devin\User\acp-events\` |
| <img width="48px" src="https://github.com/augmentcode.png" alt="Augment Code" /> | [Augment Code](https://www.augmentcode.com/) (Auggie CLI) | `~/.augment/sessions/*.json` |
| <img width="48px" src=".github/assets/client-synthetic.png" alt="Synthetic" /> | [Synthetic](https://synthetic.new/) | Re-attributed from other sources via `hf:` model prefix or `synthetic` provider (+ [Octofriend](https://github.com/synthetic-lab/octofriend): `~/.local/share/octofriend/sqlite.db`) |
| <img width="48px" src="https://github.com/deepseek-ai.png" alt="DeepSeek Harness" /> | [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) | `~/.dsh/sessions/**/session.jsonl.zstd` (or `session.jsonl` when written uncompressed; override via `DSH_HOME`) |
| <img width="48px" src="https://github.com/MiniMax-AI.png" alt="MiniMax Code" /> | [MiniMax Code](https://github.com/MiniMax-AI) | `~/.config/tokscale/headless/mcode/*.jsonl` (headless capture of `mcode exec --output-format stream-json`; override via `TOKSCALE_HEADLESS_DIR`) |
| <img width="48px" src=".github/assets/client-fx.png" alt="Fx" /> | [fx](https://github.com/vercel-labs/fx) | `~/.fx/sessions/<sessionId>/usage-v2.json` (per-session aggregates) |

Get real-time pricing calculations using [🚅 LiteLLM's pricing data](https://github.com/BerriAI/litellm), with support for tiered pricing models and cache token discounts.

### Why "Tokscale"?

[![Tokscale](./.github/assets/hero.png)](https://tokscale.ai)

This project is inspired by the **[Kardashev scale](https://en.wikipedia.org/wiki/Kardashev_scale)**, a method proposed by astrophysicist Nikolai Kardashev to measure a civilization's level of technological advancement based on its energy consumption. A Type I civilization harnesses all energy available on its planet, Type II captures the entire output of its star, and Type III commands the energy of an entire galaxy.

In the age of AI-assisted development, **tokens are the new energy**. They power our reasoning, fuel our productivity, and drive our creative output. Just as the Kardashev scale tracks energy consumption at cosmic scales, Tokscale measures your token consumption as you scale the ranks of AI-augmented development. Whether you're a casual user or burning through millions of tokens daily, Tokscale helps you visualize your journey up the scale—from planetary developer to galactic code architect.

## Contents

- [Overview](#overview)
  - [Why "Tokscale"?](#why-tokscale)
- [Features](#features)
- [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Development Setup](#development-setup)
  - [Building the Native Module](#building-the-native-module)
- [Usage](#usage)
  - [Basic Commands](#basic-commands)
  - [TUI Features](#tui-features)
  - [Filtering by Platform](#filtering-by-platform)
  - [Date Filtering](#date-filtering)
  - [Pricing Lookup](#pricing-lookup)
  - [Social](#social)
  - [Autosubmit](#autosubmit)
  - [Cursor IDE Commands](#cursor-ide-commands)
  - [Antigravity Commands](#antigravity-commands)
  - [Trae Commands](#trae-commands)
  - [Warp/Oz Commands](#warpoz-commands)
  - [Task-Attributed Report](#task-attributed-report)
  - [Subscription Usage](#subscription-usage)
  - [Example Output](#example-output---light-version)
  - [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
- [Frontend Visualization](#frontend-visualization)
  - [Features](#features-1)
  - [Running the Frontend](#running-the-frontend)
- [Social Platform](#social-platform)
  - [Features](#features-2)
  - [Getting Started](#getting-started)
  - [Data Validation](#data-validation)
- [Wrapped 2025](#wrapped-2025)
  - [Command](#command)
  - [What's Included](#whats-included)
- [Development](#development)
  - [Prerequisites](#prerequisites-1)
  - [How to Run](#how-to-run)
  - [Container Setup](#container-setup)
- [Supported Platforms](#supported-platforms)
  - [Native Module Targets](#native-module-targets)
  - [Windows Support](#windows-support)
- [Session Data Retention](#session-data-retention)
- [Data Sources](#data-sources)
- [Pricing](#pricing)
- [Contributing](#contributing)
  - [Development Guidelines](#development-guidelines)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Features

- **Interactive TUI Mode** - Beautiful terminal UI powered by Ratatui (default mode)
  - 6 interactive views: Overview, Models, Daily, Hourly, Stats, Agents (plus an optional Minutely view, opt-in via `minutelyTabEnabled`)
  - Keyboard & mouse navigation
  - GitHub-style contribution graph with configurable color themes
  - Real-time filtering and sorting
  - Zero flicker rendering
- **Multi-platform support** - Track usage across OpenCode, Claude Code, Codex CLI, Prime Agent, Copilot CLI, Cursor IDE, Gemini CLI, Amp, Codebuff, Droid, OpenClaw, Hermes Agent, Pi, Kimchi Coding, Reasonix, Kimi CLI, Kimi Work, Qwen CLI, Roo Code, Kilo, Mux, Kilo CLI, Crush, Goose, Antigravity, Antigravity CLI, Zed, Kiro, Trae, Warp/Oz, Cline, Gajae-Code, Grok Build, Jcode, MiMo Code, Command Code, Junie, ZCode, OpenCodeReview, CodeBuddy, WorkBuddy, Devin CLI, Devin Desktop, Augment Code, Synthetic, Cherry Studio, and fx
- **Real-time pricing** - Fetches current pricing from LiteLLM with 1-hour disk cache; automatic OpenRouter fallback and Cursor model pricing for newly released models
- **Detailed breakdowns** - Input, output, cache read/write, and reasoning token tracking
- **Native Rust core** - All parsing and aggregation done in Rust for 10x faster processing
- **Web visualization** - Interactive contribution graph with 2D and 3D views
- **Flexible filtering** - Filter by platform, date range, or year
- **Task-attributed reports** - LLM-powered session summarization and task grouping with multi-backend support (Apple FM, Claude, Codex, Gemini, Kiro, MiniMax)
- **Export to JSON** - Generate data for external visualization tools
- **Social Platform** - Share your usage, compete on leaderboards, and view public profiles

## Installation

### Quick Start

```bash
# Run directly with npx
npx tokscale@latest

# Or use bunx
bunx tokscale@latest

# Or use Deno without installing an alias
deno x npm:tokscale@latest

# Light mode (table rendering only)
npx tokscale@latest --light
```

That's it! This gives you the full interactive TUI experience with zero setup.

> **Package Structure**: `tokscale` is an alias package (like [`swc`](https://www.npmjs.com/package/swc)) that installs `@tokscale/cli`. Both install the same CLI with the native Rust core (`@tokscale/core`) included.


### Prerequisites

- [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/)
- (Optional) Rust toolchain for building native module from source

### Development Setup

For local development or building from source:

```bash
# Clone the repository
git clone https://github.com/junhoyeo/tokscale.git
cd tokscale

# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Run the CLI in development mode
bun run cli
```

> **Note**: `bun run cli` is for local development. When installed via `bunx tokscale`, the command runs directly. The Usage section below shows the installed binary commands.

### Building the Native Module

The native Rust module is **required** for CLI operation. It provides ~10x faster processing through parallel file scanning and SIMD JSON parsing:

```bash
# Build the native core (run from repository root)
bun run build:core
```

> **Note**: Native binaries are pre-built and included when you install via `bunx tokscale@latest`. Building from source is only needed for local development.

## Usage

### Basic Commands

```bash
# Launch interactive TUI (default)
tokscale

# Launch TUI with specific tab
tokscale models    # Models tab
tokscale monthly   # Daily view (shows daily breakdown)
tokscale hourly    # Hourly tab

# Use legacy CLI table output
tokscale --light
tokscale models --light

# Launch TUI explicitly
tokscale tui

# Export contribution graph data as JSON
tokscale graph --output data.json

# Output data as JSON (for scripting/automation)
tokscale --json                    # Default models view as JSON
tokscale models --json             # Models breakdown as JSON
tokscale monthly --json            # Monthly breakdown as JSON
tokscale models --json > report.json   # Save to file
```

### TUI Features

The interactive TUI mode provides:

- **8 Views**: Overview (chart + top models), Usage (subscription quotas), Models, Daily, Hourly, Stats (contribution graph), Agents. A per-minute view (Minutely) is hidden by default and can be enabled with `minutelyTabEnabled` in `settings.json` — see [Configuration](#configuration)
- **Keyboard Navigation**:
  - `←/→/Tab/BackTab`: Switch views
  - `↑/↓` or `Home/End`: Navigate lists
  - `Enter`: Open daily detail (Daily tab) / select graph cell (Stats tab)
  - `Esc` or `Backspace`: Close dialog or exit detail view
  - `c/d/t`: Sort by cost/date/tokens
  - `j`: Jump to today
  - `s`: Open source picker dialog
  - `g`: Open group-by picker dialog (model, client+model, client+provider+model, workspace+model, session+model, client+session+model)
  - `h`: Toggle Daily/Hourly chart granularity (Overview tab)
  - `v`: Toggle Table/Profile view (Hourly tab)
  - `y`: Copy selected row to clipboard
  - `p`: Cycle through color themes
  - `r`: Refresh data; `Shift+R` toggles auto-refresh; `+`/`-` adjusts interval
  - `e`: Export to JSON
  - `q` or `Ctrl+C`: Quit
- **Mouse Support**: Click tabs, buttons, and filters
- **Themes**: Green, Halloween, Teal, Blue, Pink, Purple, Orange, Monochrome, YlGnBu, Graphite, Lagoon, Dusk
- **Settings Persistence**: Preferences saved to `~/.config/tokscale/settings.json` (see [Configuration](#configuration))

### Group-By Strategies

Press `g` in the TUI or use `--group-by` in `--light`/`--json` mode to control how model rows are aggregated:

| Strategy | Flag | TUI Default | Effect |
|----------|------|-------------|--------|
| **Model** | `--group-by model` | ✅ | One row per model — merges all clients and providers |
| **Client + Model** | `--group-by client,model` | | One row per client-model pair |
| **Client + Provider + Model** | `--group-by client,provider,model` | | Most granular — no merging |
| **Workspace + Model** | `--group-by workspace,model` | | Group local usage by workspace key, then model — add [`--merge-worktrees`](#per-workspace-cost) to fold git worktrees into their repo |
| **Session + Model** | `--group-by session,model` | | One row per `session_id` and model — attribute cost to a specific agent-CLI session |
| **Client + Session + Model** | `--group-by client,session,model` | | One row per client, session, and model — useful for multi-agent runners that join on `session_id` |

**`--group-by model`** (most consolidated)

| Clients | Providers | Model | Cost |
|---------|-----------|-------|------|
| OpenCode, Claude, Amp | github-copilot, anthropic | claude-opus-4-5 | $2,424 |
| OpenCode, Claude | anthropic, github-copilot | claude-sonnet-4-5 | $1,332 |

**`--group-by client,model`** (CLI default)

| Client | Provider | Model | Cost |
|--------|----------|-------|------|
| OpenCode | github-copilot, anthropic | claude-opus-4-5 | $1,368 |
| Claude | anthropic | claude-opus-4-5 | $970 |

**`--group-by client,provider,model`** (most granular)

| Client | Provider | Model | Cost |
|--------|----------|-------|------|
| OpenCode | github-copilot | claude-opus-4-5 | $1,200 |
| OpenCode | anthropic | claude-opus-4-5 | $168 |
| Claude | anthropic | claude-opus-4-5 | $970 |

**`--group-by session,model`** (per-session cost attribution)

`tokscale models --json --group-by session,model` emits one entry per `(session_id, model)`. Each entry includes a top-level `sessionId` field so downstream tools (e.g. multi-agent IDEs) can join cost data back to a specific agent-CLI session:

```json
{
  "groupBy": "session,model",
  "entries": [
    {
      "sessionId": "019e1e27-af49-7cd1-89b7-7bad1c3f3be2",
      "client": "codex",
      "provider": "openai",
      "model": "gpt-5",
      "input": 25251,
      "output": 47,
      "cacheRead": 1920,
      "cacheWrite": 0,
      "reasoning": 40,
      "messageCount": 12,
      "cost": 0.0123
    }
  ]
}
```

Use `--group-by client,session,model` when you also need the client name on every row (one spawn across all 20+ supported CLIs at once).

#### Per-workspace cost

`--group-by workspace,model` attributes usage to the directory an agent ran in, so you can see what a given project cost:

```bash
# One row per (workspace, model)
tokscale models --light --group-by workspace,model --month

# Fold every git worktree into its parent repository — one row per repo
tokscale models --light --group-by workspace,model --merge-worktrees --month

# JSON carries workspaceKey (grouping identity) and workspaceLabel (display name)
tokscale models --json --group-by workspace,model --merge-worktrees
```

In the TUI, press `g` → **Workspace + Model**, then `w` to toggle worktree rollup (the footer shows `[w:worktrees]` or `[w:repos]`).

Workspace rows are labeled `repo` or `repo ⑃ worktree`. Clients disagree about how they record a workspace — Claude Code stores a dash-mangled directory slug (`-Users-me-devpro-app`) while Codex and OpenCode store real paths — so tokscale resolves slugs back to their true path against the filesystem. Four consequences worth knowing:

- **Without `--merge-worktrees`, each git worktree is its own row.** Agent CLIs that isolate every task into a worktree will therefore spread one repository across many rows; `--merge-worktrees` re-unites them (and also merges a repo recorded by different clients under different key formats).
- **`--merge-worktrees` finds worktrees kept inside the repo and beside it.** `<repo>/.claude/worktrees/<name>` (what agent CLIs create) and `<repo>/.git/worktrees/<name>` are recognized from the path alone; a worktree checked out elsewhere (`git worktree add ../feature-x`) is recognized by reading its `.git` pointer file back to the repository. A repo reached through two different path spellings (a symlink and its target) still stays two rows, because a workspace identity is compared as a string. Totals are unaffected either way — usage is split across rows, never lost or double counted.
- **Rows that would show the same name are qualified with their parent directory.** A label is the directory's own name, so `~/work/api` and `~/oss/api` would both read `api`; colliding labels gain as many leading path segments as it takes to tell them apart (`work/api`, `oss/api`), and when no path segment can — the same directory recorded by two clients under different key formats — the row is qualified with its workspace key instead. Grouping is unaffected — this only changes the displayed text.
- **Clients that never record a workspace roll up into a single `Unknown workspace` row.** Roughly half the supported clients (including gemini, cursor, amp, droid, roocode, kilocode, goose, and Copilot's OTEL path) do not write one, so their usage cannot be attributed to a directory.

### Filtering by Platform

Use `--client` (short `-c`) to scope reports to one or more clients. The flag is repeatable, accepts comma-separated values, and works with every report command:

```bash
# Show only OpenCode usage
tokscale --client opencode

# Comma-separated: combine multiple clients
tokscale --client opencode,claude

# Repeated: same effect, useful with shell aliases
tokscale -c opencode -c claude

# Cursor IDE uses Tokscale's API cache; run login + sync --json first
tokscale --client cursor

# Synthetic (synthetic.new) is detected from other agent sessions
tokscale --client synthetic

# Combine with other filters
tokscale --client opencode,claude --week --json
```

Possible values: `opencode`, `claude`, `codex`, `copilot`, `gemini`, `cursor`, `amp`, `codebuff`, `droid`, `openclaw`, `hermes`, `pi`, `prime-agent`, `kimchi`, `kimi`, `qwen`, `roocode`, `kilocode`, `kilo`, `mux`, `crush`, `goose`, `antigravity`, `antigravity-cli`, `zed`, `kiro`, `trae`, `warp`, `cline`, `gjc`, `grok`, `jcode`, `micode`, `commandcode`, `junie`, `zcode`, `opencodereview`, `codebuddy`, `augment`, `synthetic`, `cherrystudio`.

> **Breaking change (v4.0.0):** The per-client boolean flags (`--opencode`, `--claude`, `--codex`, etc.) have been removed and now error. Use the canonical `--client`/`-c` flag instead — e.g. `tokscale --client opencode,claude`.

### Date Filtering

Date filters work across all commands that generate reports (`tokscale`, `tokscale models`, `tokscale monthly`, `tokscale graph`):

```bash
# Quick date shortcuts
tokscale --today              # Today only
tokscale --yesterday          # Yesterday only
tokscale --week               # Last 7 days
tokscale --month              # Current calendar month

# Custom date range (inclusive, local timezone)
tokscale --since 2024-01-01 --until 2024-12-31

# Filter by year
tokscale --year 2024

# Combine with other options
tokscale models --week --client claude --json
tokscale monthly --month --benchmark
```

> **Note**: Date filters use your local timezone. Both `--since` and `--until` are inclusive.
> **v2.2.0 note**: Session active-time daily buckets also use your local timezone, so users outside UTC may see active-time dates align with local token/cost report days instead of UTC day boundaries.

### Pricing Lookup

Look up real-time pricing for any model:

```bash
# Look up model pricing
tokscale pricing "claude-3-5-sonnet-20241022"
tokscale pricing "gpt-4o"
tokscale pricing "grok-code"

# Force specific provider source
tokscale pricing "grok-code" --provider openrouter
tokscale pricing "claude-3-5-sonnet" --provider litellm

# Inspect custom pricing overrides
tokscale pricing list-overrides
```

**Lookup Strategy:**

The pricing lookup uses a multi-step resolution strategy:

1. **Custom Pricing Overrides** - Exact user-defined entries from `~/.config/tokscale/custom-pricing.json`
2. **Exact Match** - Direct lookup in LiteLLM/OpenRouter databases
3. **Alias Resolution** - Resolves friendly names (e.g., `big-pickle` → `glm-4.7`)
4. **Tier Suffix Stripping** - Removes quality tiers (`gpt-5.2-xhigh` → `gpt-5.2`)
5. **Version Normalization** - Handles version formats (`claude-3-5-sonnet` ↔ `claude-3.5-sonnet`)
6. **Provider Prefix Matching** - Tries common prefixes (`anthropic/`, `openai/`, etc.)
7. **Cursor Model Pricing** - Hardcoded pricing for models not yet in LiteLLM/OpenRouter (e.g., `gpt-5.3-codex`)
8. **Fuzzy Matching** - Word-boundary matching for partial model names

### Custom Pricing Overrides

Create `custom-pricing.json` in Tokscale's config directory (`~/.config/tokscale/custom-pricing.json` on macOS/Linux by default; the same directory resolved by `TOKSCALE_CONFIG_DIR` when set) to override prices for model IDs that upstream pricing databases do not yet cover correctly.

```json
{
  "$schema": "https://tokscale.ai/custom-pricing.schema.json",
  "models": {
    "accounts/fireworks/routers/kimi-k2p6-turbo": {
      "input_cost_per_million_tokens": 2.00,
      "output_cost_per_million_tokens": 8.00,
      "cache_read_input_token_cost_per_million_tokens": 0.30,
      "source": "https://docs.fireworks.ai/serverless/pricing",
      "notes": "Fireworks Kimi K2.6 Turbo (preview)"
    },
    "accounts/fireworks/models/kimi-k2p6": {
      "input_cost_per_million_tokens": 0.95,
      "output_cost_per_million_tokens": 4.00,
      "cache_read_input_token_cost_per_million_tokens": 0.16
    },
    "kimi-k2p6-turbo": {
      "input_cost_per_million_tokens": 2.00,
      "output_cost_per_million_tokens": 8.00
    }
  }
}
```

Override prices are entered in dollars per million tokens, matching how most API providers publish pricing; Tokscale converts them to per-token rates internally. At least one of `input_cost_per_million_tokens` or `output_cost_per_million_tokens` must be present, and cache-read/cache-creation fields are optional. An explicit `0` is allowed and is the way to declare a free model — it is a statement ("this costs nothing"), unlike an omitted field, which means the rate is unknown and leaves the usage unpriced. LiteLLM-style per-token field names such as `input_cost_per_token`, `output_cost_per_token`, and `cache_read_input_token_cost` are also accepted for copy/paste compatibility, but the per-million names are the recommended user-facing form. To omit a tier or cache price, leave the field out; negative or non-finite values are treated as invalid and the whole model entry is skipped so typos do not silently alter accounting. Optional `source` and `notes` fields are ignored by Tokscale and can be used for your own bookkeeping.

Overrides are exact-only and case-insensitive. Tokscale checks the raw model ID first, then the existing synthetic `/models/` normalization, then falls through to LiteLLM, OpenRouter, Cursor pricing, and fuzzy matching if no override matches. Raw exact matches beat normalized exact matches, so `accounts/fireworks/routers/kimi-k2p6-turbo` can override one gateway-specific model while `kimi-k2p6-turbo` can cover normalized `/models/` paths. Overrides are loaded once at startup; restart the command after editing the file. This is the recommended local fix for wrong-model pricing bugs while waiting on upstream LiteLLM pricing updates.

**Provider Preference:**

When multiple matches exist, original model creators are preferred over resellers:

| Preferred (Original) | Deprioritized (Reseller) |
|---------------------|-------------------------|
| `xai/` (Grok) | `azure_ai/` |
| `anthropic/` (Claude) | `bedrock/` |
| `openai/` (GPT) | `vertex_ai/` |
| `google/` (Gemini) | `together_ai/` |
| `meta-llama/` | `fireworks_ai/` |

Example: `grok-code` matches `xai/grok-code-fast-1` ($0.20/$1.50) instead of `azure_ai/grok-code-fast-1` ($3.50/$17.50).

### Social

```bash
# Login to Tokscale (opens browser for GitHub auth)
tokscale login

# Save an existing Tokscale API token without browser auth
tokscale login --token tt_xxx

# Check who you're logged in as
tokscale whoami

# Display your saved API token as a QR code (useful for sharing to another device)
# Encodes {"token":"tt_xxx","username":"..."} — scan with any QR reader
tokscale qr

# Submit your usage data to the leaderboard
tokscale submit

# Submit in CI/headless environments without writing credentials
# Precedence: TOKSCALE_API_TOKEN env > saved credentials file (~/.config/tokscale/credentials.json).
# When the env var is set, the saved file is ignored for that invocation.
TOKSCALE_API_TOKEN=tt_xxx tokscale submit

# Revoke a token: visit Settings > API Tokens on the leaderboard site
# (https://tokscale.ai/settings) and click "Revoke" on the token row.
# Revocation takes effect immediately — subsequent requests with that
# token will get HTTP 401 "Invalid API token".

# Submit with filters
tokscale submit --client opencode,claude --since 2024-01-01

# Preview what would be submitted (dry run)
tokscale submit --dry-run

# Logout
tokscale logout
```

<img alt="CLI Submit" src="./.github/assets/cli-submit.png" />

#### Unpriced usage is excluded from submission

Before anything is submitted, every message must resolve to an authoritative price that covers every token bucket the message populated (input, output, cache read, cache write). Messages that cannot be priced are skipped and reported as `Warning: excluded N unpriced provider/model message(s)` — unknown models never submit invented or guessed spend, and all remaining priced usage still submits normally.

The exclusion reasons:

- `no authoritative model-to-price mapping` — the model ID is absent from LiteLLM, OpenRouter, models.dev, and your custom overrides.
- `generic routing label has no authoritative model-to-price mapping` — the ID is a router label (`auto`, `gemini-default`, …) whose underlying model varies per request, so it is refused outright. An explicit entry for the label in `custom-pricing.json` is the supported way to assert a rate you know applies.
- `pricing does not cover every populated token bucket` — a price row was found, but it is missing a rate (most often cache read or cache creation) that this usage actually populates.
- `model price match does not establish the requested provider` — a price row was found only by matching the model part of the ID, or by trying a provider prefix, which does not prove your provider bills at that row's rate.
- `model price match does not exactly name the requested model` — a fuzzy or provider-scoped match was found, but nothing proves the priced key names the model you actually used.
- `model price lookup is ambiguous across non-equivalent candidates` — several candidate rows matched and they quote different prices.

To include previously excluded usage, add an exact-match entry to `custom-pricing.json` (see [Custom Pricing Overrides](#custom-pricing-overrides)) — an explicit `0` declares a genuinely free model — then re-run `tokscale submit --dry-run` until no warnings remain. `tokscale pricing <model-id>` shows which entry matched. The file is keyed by the model ID alone — the `model` half of the `provider/model` pair shown in the warning.

### Autosubmit

Autosubmit schedules the normal `tokscale submit` flow with the operating system scheduler. It is useful for keeping your public profile current without a manual terminal run.

```bash
# Enable periodic submission. Uses launchd on macOS, systemd user timers on Linux
# when available, cron as a Linux fallback, and Windows Task Scheduler on Windows.
tokscale autosubmit enable --interval 24h

# Keep the same client and date filters you would pass to submit.
tokscale autosubmit enable --interval 2h --client opencode,claude --week

# Show saved settings and the last run/error.
tokscale autosubmit status
tokscale autosubmit status --json

# Run once now, even if the saved interval has not elapsed.
tokscale autosubmit run --force

# Disable autosubmit and remove the scheduler entry.
tokscale autosubmit disable
```

Scheduled runs are non-interactive: they never prompt for GitHub auth or star confirmation. Run `tokscale login --token tt_xxx` once, or set `TOKSCALE_API_TOKEN` in the scheduler environment. Tokscale records scheduler state in `settings.json`, writes logs under `~/.config/tokscale/autosubmit/`, and uses a lock file so overlapping scheduler ticks do not submit twice.

### Cursor IDE Commands

Cursor IDE support uses Cursor's web API export, cached by Tokscale at `~/.config/tokscale/cursor-cache/usage*.csv`. Tokscale does not parse local Cursor Agent CLI state under `~/.cursor`, and it does not treat the desktop SQLite DB as a usage ledger.

When the Cursor desktop app is installed and signed in, `tokscale cursor login` prefers the local `cursorAuth/accessToken` from Cursor's `state.vscdb` and builds the session cookie automatically. `tokscale cursor sync` also refreshes that token when available. Usage rows still come only from Cursor's usage-export API.

Setup (desktop auto-login):

1. Sign in to the Cursor desktop app.
2. Run `tokscale cursor login --name work` (auto-detects the local desktop session when available).
3. Run `tokscale cursor sync --json` to populate `~/.config/tokscale/cursor-cache/usage.csv`.
4. Run `tokscale --client cursor` or any report command.

Fallback (manual browser cookie), if desktop login is unavailable:

1. Open https://www.cursor.com/settings in your browser and sign in.
2. Copy the `WorkosCursorSessionToken` cookie value:
   - Network tab: make any request to `cursor.com/api/*`, then copy the value after `WorkosCursorSessionToken=` from the `Cookie` request header.
   - Application tab: open Cookies -> `https://www.cursor.com`, then copy the `WorkosCursorSessionToken` value.
3. Run `tokscale cursor login --name work` and paste the token when prompted.
4. Continue with `tokscale cursor sync --json` as above.

Treat the session token like a password. It is stored locally in `~/.config/tokscale/cursor-credentials.json`.

```bash
# Login to Cursor (auto-detects Cursor desktop login; falls back to browser cookie paste)
# --name is optional; it just helps you identify accounts later
tokscale cursor login --name work

# Check Cursor authentication status and session validity
tokscale cursor status

# List saved Cursor accounts
tokscale cursor accounts

# Manually refresh cached Cursor usage
tokscale cursor sync --json

# Switch active account (controls which account syncs to cursor-cache/usage.csv)
tokscale cursor switch work

# Logout from a specific account (keeps history; excludes it from aggregation)
tokscale cursor logout --name work

# Logout and delete cached usage for that account
tokscale cursor logout --name work --purge-cache

# Logout from all Cursor accounts (keeps history; excludes from aggregation)
tokscale cursor logout --all

# Logout from all accounts and delete cached usage
tokscale cursor logout --all --purge-cache
```

By default, Tokscale aggregates usage across all saved Cursor accounts by reading `cursor-cache/usage*.csv`. The active account syncs to `usage.csv`; additional accounts sync to `usage.<account>.csv`.

When you log out, Tokscale moves cached usage to `cursor-cache/archive/` so it is no longer aggregated. Use `--purge-cache` to delete cached usage instead.

### Antigravity Commands

Antigravity sync currently works on macOS and Linux only. The Antigravity-enabled editor must be running and its local language server available; tokscale reads usage from that local language server and caches normalized artifacts locally.

```bash
# Check whether tokscale can see running Antigravity language servers
tokscale antigravity status

# Sync usage from local Antigravity language servers into tokscale's cache
tokscale antigravity sync

# Delete the cached Antigravity artifacts
tokscale antigravity purge-cache
```

**Cache location**: `~/.config/tokscale/antigravity-cache/`

**How it works**: `tokscale antigravity sync` discovers local Antigravity session candidates, fetches confirmed usage data from the local language server RPC, and stores normalized JSONL artifacts for tokscale-core to parse later. Run sync before reports if you want the freshest Antigravity data.

### Trae Commands

Trae ([ByteDance's AI IDE](https://www.trae.ai/)) ships in two international product lines — Trae IDE and Trae Solo. They share the same account-level usage data (same backend, same JWT), so tokscale reports them as a single `trae` client. You can install either or both desktop apps; tokscale auto-discovers credentials from whichever is present.

Credentials are identified per desktop app via `--variant`:

- **`--variant ide`** — credentials from Trae IDE (`~/Library/Application Support/Trae/`)
- **`--variant solo`** — credentials from Trae Solo (`~/Library/Application Support/TRAE SOLO/`)

`tokscale trae sync` calls the official `query_user_usage_group_by_session` API exactly once per run (regardless of how many desktop apps are installed) and persists the raw JSON to a local cache.

```bash
# Log in (auto-detects credentials from any installed Trae desktop client)
tokscale trae login

# Manual JWT entry (for environments where auto-detect can't find storage.json,
# e.g. Linux/Windows or a headless server). Open https://www.trae.ai/account-setting#usage
# in your browser, then F12 → Network → filter `query_user_usage` and copy the
# `Authorization` header value.
tokscale trae login --manual --variant solo

# Show which variants have cached credentials
tokscale trae status

# Sync usage (uses the first available credential source)
tokscale trae sync --since 30

# Forget cached credentials for one variant
tokscale trae logout --variant solo
```

**Cache location**: `~/.config/tokscale/trae-cache/`

**How it works**: tokscale either decrypts the desktop client's `iCubeAuthInfo://*` blob (`globalStorage/storage.json`) to recover a JWT, or accepts one pasted via `--manual`. It then calls `POST /trae/api/v1/pay/query_user_usage_group_by_session` paginated and stores the raw JSON. Run sync before reports if you want the freshest Trae data.

#### Sync-lock recovery during upgrades

Antigravity and Trae syncs use a legacy-compatible `sync.lock` file to avoid overlapping an older tokscale binary during a rolling upgrade. After a crash or forced stop, that file can remain. Tokscale intentionally fails closed instead of replacing it, because an older binary may still be creating or updating the same path. Confirm that no `tokscale antigravity sync` or `tokscale trae sync` process is active, remove the exact quoted `sync.lock` path printed by the command, then retry. Do not remove the lock while a sync may still be running.

> **Note on pricing**: Trae cost figures are **vendor-reported** — tokscale surfaces the `dollar_float` value returned by Trae's own API rather than recomputing cost from token counts through tokscale's pricing engine. Numbers will match what you see on `trae.ai/account-setting#usage`, not what tokscale would otherwise calculate for the same usage.

> **China variants**: The China editions (`trae.com.cn`) are intentionally **not** supported. The CN backend does not expose a session-level usage query API. Trae CN / Trae Solo CN support will be added once an official endpoint becomes available upstream.

### Warp/Oz Commands

Warp/Oz does not expose local token transcripts. Tokscale only syncs the aggregate request and spend counters returned by Warp's GraphQL API, then reports them as `warp` / `aggregate-requests` rows with zero token buckets.

```bash
# Save a bearer token or Cookie header copied from an authenticated Warp request
tokscale warp login

# Inspect credential/cache state and diagnostics
tokscale warp status

# Sync aggregate requests and spend into tokscale's local cache
tokscale warp sync

# Remove saved credentials; add --purge-cache to delete synced usage too
tokscale warp logout --purge-cache
```

**Cache location**: `~/.config/tokscale/warp-cache/usage.json`

**How it works**: `tokscale warp sync` calls Warp's authenticated GraphQL API for account and workspace aggregate counters. Tokscale preserves request counts as message counts and vendor-reported spend as cost, but it never converts requests into synthetic tokens. Warp is excluded from default `submit` data because the public leaderboard accepts token-attributed usage, not aggregate request counters.

### Task-Attributed Report

The `report` command generates a task-attributed usage breakdown. It uses an LLM to summarize each session into a short title and category, then groups related sessions into high-level task clusters for a bird's-eye view of where your tokens went.

```bash
# Basic report (today, default Apple FM summarizer)
tokscale report

# Last 7 days
tokscale report --week

# Use Claude Code as the summarizer backend
tokscale report --week --summarizer claude

# Use Codex, Gemini, Kiro, or MiniMax
tokscale report --summarizer codex
tokscale report --summarizer gemini
tokscale report --summarizer kiro
tokscale report --summarizer minimax

# Skip LLM summarization (show raw data only)
tokscale report --no-summarize

# Re-summarize from scratch (resets cached summaries in range)
tokscale report --week --rebuild

# Output as JSON
tokscale report --week --json

# Filter by workspace or client
tokscale report --workspace my-project --client opencode
```

**Summarizer backends:**

| Backend | Command | Notes |
|---------|---------|-------|
| `apple-fm` | (default) | On-device Apple Foundation Models via native Rust FFI (no Python). Enabled in the prebuilt Apple Silicon (macOS arm64) binary; runs on macOS 26+ with Apple Intelligence on, and transparently falls back to a built-in Rust heuristic everywhere else (Intel Macs, older macOS, Linux, Windows) — so the default works on every platform. |
| `claude` | `claude -p` | Requires Claude Code CLI installed and authenticated. |
| `codex` | `codex --quiet` | Requires Codex CLI installed and authenticated. |
| `gemini` | `gemini -p` | Requires Gemini CLI installed and authenticated. |
| `kiro` | `kiro --non-interactive` | Requires Kiro CLI installed and authenticated. |
| `minimax` | (HTTP API) | OpenAI-compatible chat-completions API, so no CLI is needed. Set `MINIMAX_API_KEY` or `MINIMAX_API_TOKEN`. Defaults to `MiniMax-M3` on the global endpoint (`https://api.minimax.io/v1`); set `MINIMAX_API_REGION=cn` to use `https://api.minimaxi.com/v1`, and `MINIMAX_MODEL` to select another model (for example `MiniMax-M2.7`). |

**How it works:**

1. Sessions are scanned and inserted into a local SQLite wiki database (`wiki.db` in your platform config dir — e.g. `~/.config/tokscale/` on Linux, `~/Library/Application Support/tokscale/` on macOS)
2. Unsummarized sessions are sent to the chosen LLM backend in batches, which returns a title, category, description, and complexity for each
3. A second LLM pass groups all titled sessions into 3–8 high-level task clusters (e.g. "Kiro Auth", "Tokscale Report", "System Config")
4. Results are cached in the wiki DB — subsequent runs skip already-summarized sessions

**Example output:**

```
  Task Group                                  Sess     Tokens     Cost
  ───────────────────────────────────────────────────────────────────────
  Tokscale Development                          19      4.2B    $22.66
    Add task-attributed report command
    Implement wiki DB schema
    Fix pricing lookup for new models
  System Config                                 28      2.1B    $10.06
    Configure OpenCode workspace settings
    Update shell aliases
  Kiro Auth                                      4    890.5M     $3.10
    Implement JWT refresh flow
```

### Subscription Usage

Tokscale can fetch and display your real-time subscription quota across AI providers. This shows how much of your plan you've used and when limits reset.

```bash
# Show subscription usage for all detected providers
tokscale usage

# Output as JSON (for scripting)
tokscale usage --json

# Lightweight terminal output (no TUI)
tokscale usage --light
```

In the TUI, navigate to the **Usage** tab to see subscription data. Use `[Refresh]` to refresh subscription quotas. The keyboard refresh shortcut `r` uses the same refresh path.

> **Note**: Subscription quotas and balances are **vendor-reported** — tokscale calls each provider's own quota endpoint and surfaces the response verbatim. Numbers reflect what the provider reports (which is also what shows up in their official dashboards) and are not independently verified against tokscale's own usage tracking.

#### Supported Providers

| Provider | Auth Method | Metrics | Setup |
|----------|-------------|---------|-------|
| **Claude** | OAuth (credentials file or macOS Keychain) | Session (5hr), Weekly, model-scoped quotas | Run `claude` to log in |
| **Codex** (OpenAI) | OAuth (Codex auth, saved Tokscale accounts, or OpenCode's `$XDG_DATA_HOME/opencode/auth.json`) | Session, Weekly quotas | Use `[Add Codex]`, run `codex`, import with `tokscale codex import --name work`, or connect OpenAI with ChatGPT Plus/Pro in OpenCode |
| **Z.ai** | API key (env var) | Token limits, Web Searches | Set `ZAI_API_KEY` or `GLM_API_KEY` |
| **Amp** | API key (`~/.local/share/amp/secrets.json`) | Free tier balance, Credits | Run `amp` to log in |
| **GitHub Copilot** | GitHub token (keychain or `~/.config/gh/hosts.yml`) | Premium interactions, Chat quotas | Run `gh auth login` |
| **Grok Build** | OAuth (`~/.grok/auth.json`) | Credits, subscription plan | Run `grok login` |
| **Kimi** | OAuth (`~/.kimi/credentials/kimi-code.json`) | Session, Weekly quotas | Run `kimi` to log in |
| **MiniMax** | API key (env var) | Prompt quotas per model | Set `MINIMAX_API_KEY` or `MINIMAX_API_TOKEN` |
| **MiniMax Token Plan** | API key (env var) | Interval + weekly remaining-percent quotas (per region: CN minimaxi.com + Global minimax.io) | Set `MINIMAX_TOKEN_PLAN_CN_KEY` and/or `MINIMAX_TOKEN_PLAN_GLOBAL_KEY` |
| **Sakana** (Fugu) | Session cookie (env var or file) — billing-console HTML scrape, no public API | 5-hour, Weekly quota windows (plan tier + monthly price as metadata) | Set `SAKANA_SESSION_COOKIE` (see [docs/providers/sakana.md](docs/providers/sakana.md)) |

Providers are auto-detected — only those with valid credentials are shown. If a provider is missing, ensure you've logged in or set the required environment variable.

#### Codex Multi-Account Usage

Tokscale can save multiple Codex OAuth accounts for subscription usage display. The TUI Usage tab groups saved accounts under one **Codex** section. The active account is marked with `*`; inactive accounts can be selected with `[Use]`; account removal uses `[Remove]` followed by `[Confirm]`.

To add an account without leaving the TUI, click `[Add Codex]` in the Usage tab. Tokscale starts `codex login` with a temporary `CODEX_HOME`, displays the login output in the Usage tab, imports the resulting auth into Tokscale's saved account store, and then refreshes usage. This keeps the login isolated and does not switch the current Codex auth; click `[Use]` on a saved account when you want Tokscale to write that account into the real Codex auth file.

The CLI commands are still available for scripted or manual account management, plus a separate opt-in account-activity snapshot:

```bash
# Save the current Codex auth as a named Tokscale account
tokscale codex import --name work

# List saved Codex accounts
tokscale codex accounts
tokscale codex accounts --json

# Switch the active Codex account and write Codex auth.json
tokscale codex switch work

# Stop tracking a saved Codex account (removes it from Tokscale's store
# only — the codex CLI's own auth.json/login is never touched)
tokscale codex remove personal

# Check subscription usage for the active or a named account
tokscale codex status
tokscale codex status --name personal --json

# Fetch the active Codex app-server account activity separately from local totals
tokscale codex activity
tokscale codex activity --json
```

When saved Codex accounts exist, `tokscale usage --json` includes structured account metadata for each Codex entry and the TUI displays those entries under one Codex group. Without saved accounts, Tokscale falls back to the current Codex auth discovery path (`CODEX_HOME/auth.json`, `~/.config/codex/auth.json`, `~/.codex/auth.json`, then macOS Keychain).

If those native Codex sources produce no successful usage result, Tokscale reads the `openai` OAuth entry from OpenCode's `$XDG_DATA_HOME/opencode/auth.json` (normally `~/.local/share/opencode/auth.json`). OpenAI API-key entries are not ChatGPT subscription credentials and are ignored. OpenCode credentials are read-only: Tokscale never imports, refreshes, or rewrites them. If the access token is rejected, use OpenCode so it can refresh the login, or reconnect OpenAI with `/connect`.

`tokscale codex activity` uses only the installed Codex app-server's active authentication to fetch a timestamped, account-level snapshot. It is supplemental data: it is never included in local totals, reports, exports, submissions, or leaderboards.

#### Example Output

```
╭──────────────────────────────────────────────────────────╮
│ Session    85% left  [=========---] resets in 2h 15m     │
│ Weekly     72% left  [========----] resets Fri 3pm       │
│ Plan     Max 20x                                         │
╰──────────────────────────────────────────────────────────╯
╭──────────────────────────────────────────────────────────╮
│ Session    40% left  [=====-------] resets in 4h 30m     │
│ Weekly     90% left  [==========--] resets Mon 12am      │
│ Account  user@example.com                                │
│ Plan     Pro                                             │
╰──────────────────────────────────────────────────────────╯
```

### Example Output (`--light` version)

<img alt="CLI Light" src="./.github/assets/cli-light.png" />

### Configuration

Tokscale stores settings in `~/.config/tokscale/settings.json`:

```json
{
  "colorPalette": "blue",
  "includeUnusedModels": false,
  "defaultClients": ["opencode", "claude"],
  "scanner": {
    "extraScanPaths": {
      "codex": [
        "/Users/me/workspace/project-a/.codex/sessions",
        "/Users/me/workspace/project-b/.codex/archived_sessions"
      ],
      "hermes": [
        "/Users/me/.hermes/profiles/director_planning",
        "/Users/me/.hermes/profiles/research/state.db"
      ]
    }
  }
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `colorPalette` | string | `"blue"` | TUI color theme (green, halloween, teal, blue, pink, purple, orange, monochrome, ylgnbu, graphite, lagoon, dusk, tokyo-night, catppuccin, solarized, gruvbox, gruvbox-material, one-dark) |
| `includeUnusedModels` | boolean | `false` | Show models with zero tokens in reports |
| `autoRefreshEnabled` | boolean | `false` | Enable auto-refresh in TUI |
| `autoRefreshMs` | number | `60000` | Auto-refresh interval (30000-3600000ms) |
| `nativeTimeoutMs` | number | `300000` | Maximum time for native subprocess processing (5000-3600000ms) |
| `defaultClients` | string[] | `[]` | Client filter applied when no `--client/-c` flag is passed. Accepts the same ids as `--client` (e.g. `["opencode", "claude", "synthetic"]`). Unknown ids are silently dropped. CLI flags always override this list completely — no merging. |
| `light.writeCache` | boolean | `false` | When true, `tokscale --light` overwrites the TUI cache atomically after rendering. CLI flags `--write-cache` / `--no-write-cache` override per-invocation. |
| `minutelyTabEnabled` | boolean | `false` | Show the per-minute Minutely tab in the TUI and aggregate per-minute usage during data loading. Default-off because minute-granularity is a niche/diagnostic view for most users and the per-minute bucketing has a non-trivial cost on large datasets. |
| `autosubmit` | object | disabled | Saved `tokscale autosubmit` state: interval, client/date filters, scheduler backend, last run time, and last error. Prefer `tokscale autosubmit enable/status/disable` over editing this object by hand. |
| `scanner.extraScanPaths` | object | `{}` | Additional per-client scan roots for sessions outside Tokscale's default home-root locations |
| `scanner.bucketTimezone` | string | auto-detected | IANA name of the timezone this device buckets usage days into (e.g. `"Asia/Seoul"`). Recorded automatically on first run. Prefer `tokscale config set timezone <zone>` over editing this by hand. |

#### Day boundaries and `scanner.bucketTimezone`

Which calendar day a message counts toward depends on a timezone. Tokscale
records this device's timezone on first run and reuses it, rather than reading
the machine's current timezone on every scan.

This matters because day totals are submitted per day and never allowed to
decrease. If the same history were re-bucketed under a different timezone — you
travel, you change your system clock, you run in CI with a different `TZ` — a
session near midnight would move to the neighbouring day, and both the old and
the new day would keep their value. The total would go up without any new usage.
Pinning the zone makes the day boundary stable, so a rescan of unchanged history
always produces the same buckets.

```console
$ tokscale config list
timezone     Asia/Seoul

$ tokscale config get timezone
Asia/Seoul

# `set timezone auto` is allowed only before a valid pin exists (or while
# recovering an invalid hand-edited value). It cannot repin an established
# device.
$ tokscale config set timezone auto
```

Only IANA zone names are accepted. Fixed UTC offsets such as `+09:00` are
rejected: an offset cannot follow daylight saving time, so a pinned offset stops
matching local midnight after a DST transition and re-splits usage near the day
boundary — a smaller version of the problem pinning removes.

An established valid pin cannot be changed or unset, including with `auto`.
Historical submitted day rows are monotonic, so re-keying prior usage would
permanently double count it. Relocating a device requires a server
resync/replacement transition before choosing a different bucket timezone.

Existing installs are unaffected until they pin, and the run that pins reports
exactly what it would have reported anyway: the zone recorded is the one the
machine was already using.

Use `scanner.extraScanPaths` for persistent extra roots such as project-level `.codex` directories or imported Gemini/OpenClaw histories. Tokscale automatically discovers Hermes profile databases under `$HERMES_HOME/profiles/*/state.db` (or `~/.hermes/profiles/*/state.db` when `HERMES_HOME` is unset). Use `scanner.extraScanPaths.hermes` only for non-standard Hermes profile locations; entries may point at a profile directory containing `state.db` or directly at a `state.db` file. Tokscale merges these paths with the default scan roots on every run and deduplicates overlapping roots by canonical path.

Use `defaultClients` to pin a personal default — for example, set it to `["opencode", "claude"]` if those are the only clients you use, and `tokscale` (with no flags) will scope every report to them automatically. Pass `--client` on the command line to override for a single run.

#### Enabling the Minutely tab

<!-- opensource-radar:truncated -->
