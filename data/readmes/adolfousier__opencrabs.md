[![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org)
[![Rust Edition](https://img.shields.io/badge/rust-2024_edition-orange.svg)](https://www.rust-lang.org/)
[![Ratatui](https://img.shields.io/badge/ratatui-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)](https://ratatui.rs)
[![Docker](https://img.shields.io/badge/docker-%23000000.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![CI](https://github.com/adolfousier/opencrabs/actions/workflows/ci.yml/badge.svg)](https://github.com/adolfousier/opencrabs/actions/workflows/ci.yml)
[![GitHub Stars](https://img.shields.io/github/stars/adolfousier/opencrabs?style=social)](https://github.com/adolfousier/opencrabs)

<a href="https://trendshift.io/repositories/22468?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-22468" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/22468/daily?language=Rust" alt="adolfousier/opencrabs — Trendshift #3 Repository Of The Day, Rust" width="250" height="55"/></a>
<a href="https://trendshift.io/repositories/22468?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-22468" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/22468/weekly?language=Rust" alt="adolfousier/opencrabs — Trendshift #20 Repository Of The Week, Rust" width="250" height="55"/></a>

# 🦀 OpenCrabs

**The autonomous, self-improving AI agent. Single Rust binary. Every channel.**

> Autonomous, self-improving multi-channel AI agent built in Rust. Inspired by [Open Claw](https://github.com/openclaw/openclaw).

```
    ___                    ___           _
   / _ \ _ __  ___ _ _    / __|_ _ __ _| |__  ___
  | (_) | '_ \/ -_) ' \  | (__| '_/ _` | '_ \(_-<
   \___/| .__/\___|_||_|  \___|_| \__,_|_.__//__/
        |_|

 🦀 The autonomous, self-improving AI agent. Single Rust binary. Every channel.

```

**Author:** [Adolfo Usier](https://github.com/adolfousier)

⭐ Star us on [GitHub](https://github.com/adolfousier/opencrabs) if you like what you see!

---

## 📚 Documentation

**Official docs:** [docs.opencrabs.com](https://docs.opencrabs.com) — comprehensive guides, architecture deep-dives, and reference material.

### Getting Started
- [Installation & Quick Start](src/docs/start/GETTING_STARTED.md)
- [Onboarding Wizard](src/docs/start/ONBOARDING.md)
- [OpenCrabs Overview](src/docs/start/OPENCRABS.md)

### Reference
- [Architecture](src/docs/reference/ARCHITECTURE_2026_04_14.md)
- [Brain Constitution](src/docs/reference/BRAIN_CONSTITUTION.md)
- [Adding New Providers](src/docs/reference/ADDING_NEW_PROVIDERS.md)
- [Plan JSON Specification](src/docs/reference/plans/plan-json-spec.md)

### Brain File Templates
- [SOUL.md](src/docs/reference/templates/SOUL.md) — personality and voice
- [AGENTS.md](src/docs/reference/templates/AGENTS.md) — workspace governance and hard rules
- [TOOLS.md](src/docs/reference/templates/TOOLS.md) — tool usage and skills
- [MEMORY.md](src/docs/reference/templates/MEMORY.md) — long-term memory
- [CODE.md](src/docs/reference/templates/CODE.md) — coding standards
- [SECURITY.md](src/docs/reference/templates/SECURITY.md) — security policies
- [BOOT.md](src/docs/reference/templates/BOOT.md) — startup and service config
- [USER.md](src/docs/reference/templates/USER.md) — user profile template
- [HEARTBEAT.md](src/docs/reference/templates/HEARTBEAT.md) — heartbeat configuration

### Skills
- [Security Audit](src/docs/reference/templates/skills/security-audit/SKILL.md)
- [Cost Estimate](src/docs/reference/templates/skills/cost-estimate/SKILL.md)
- [Repo Audit](src/docs/reference/templates/skills/repo-audit/SKILL.md)
- [Multi-Agent](src/docs/reference/templates/skills/multi-agent/SKILL.md)
- [Browser CDP](src/docs/reference/templates/skills/browser-cdp/SKILL.md)
- [A2A Gateway](src/docs/reference/templates/skills/a2a-gateway/SKILL.md)
- [Dynamic Tools](src/docs/reference/templates/skills/dynamic-tools/SKILL.md)

### Cron Templates
- [Cron Jobs Guide](src/docs/reference/templates/cron/README.md)

---

## Why OpenCrabs?

OpenCrabs runs as a **single binary on your terminal** — no server, no gateway, no infrastructure. It makes direct HTTPS calls to LLM providers from your machine. Nothing else leaves your computer.

### OpenCrabs vs Node.js Agent Frameworks

| | **OpenCrabs** (Rust) | **Node.js Frameworks** (e.g. Open Claw) |
|---|---|---|
| **Binary size** | **34–36 MB** single binary, zero dependencies | **1 GB+** `node_modules` with hundreds of transitive packages |
| **Runtime** | None — runs natively | Requires Node.js runtime + npm install |
| **Attack surface** | Zero network listeners. Outbound HTTPS only | Server infrastructure: open ports, auth layers, middleware |
| **API key security** | Keys on your machine only. `zeroize` clears them from RAM on drop, `[REDACTED]` in all debug output | Keys in env vars or config. GC doesn't guarantee memory clearing. Heap dumps can leak secrets |
| **Data residency** | 100% local — SQLite DB, embeddings, brain files, all in `~/.opencrabs/` | Server-side storage, potential multi-tenant data, network transit |
| **Supply chain** | Single compiled binary. Rust's type system prevents buffer overflows, use-after-free, data races at compile time | npm ecosystem: typosquatting, dependency confusion, prototype pollution |
| **Memory safety** | Compile-time guarantees — no GC, no null pointers, no data races | GC-managed, prototype pollution, type coercion bugs |
| **Concurrency** | tokio async + Rust ownership = zero data races guaranteed | Single-threaded event loop, worker threads share memory unsafely |
| **Native TTS/STT** | Built-in local speech-to-text (whisper.cpp) and text-to-speech — ~130 MB total stack, fully offline | No native voice. Requires external APIs (Google, AWS, Azure) or heavy Python dependencies (PyTorch, ~5 GB+) |
| **Telemetry** | Zero. No analytics, no tracking, no remote logging | Server infra typically includes monitoring, logging pipelines, APM |

### What stays local (never leaves your machine)

- All chat sessions and messages (SQLite)
- Tool executions (bash, file reads/writes, git)
- Memory and embeddings (local vector search)
- Voice transcription in local STT mode (whisper.cpp, on-device)
- Brain files, config, API keys

### What goes out (only when you use it)

- Your messages to the LLM provider API (Anthropic, OpenAI, GitHub Copilot, etc.)
- Web search queries (optional tool)
- GitHub API via `gh` CLI (optional tool)
- Browser automation (optional, `browser` feature — auto-detects Chromium-based browsers via CDP, not Firefox)
- Dynamic tool HTTP requests (only when you define HTTP tools in `tools.toml`)

### 🔒 Zero Telemetry — Not Even Opt-In

**OpenCrabs does not phone home. Ever.**

No analytics. No tracking. No usage statistics. No remote logging. No crash reports. No "anonymous telemetry." Nothing.

Your data stays on your machine. Your conversations, your tools, your memory, your configuration, your API keys — all of it. The only outbound traffic is what you explicitly initiate: LLM API calls, web searches, GitHub commands, browser automation.

Other AI harnesses silently collect usage data, performance metrics, and behavioral analytics. OpenCrabs makes a different bet: **what happens on your machine stays on your machine.**

This isn't a privacy policy checkbox. It's an architectural decision. There is no telemetry code to disable, no opt-out flag to set, no analytics service to block. There's simply nothing to send.

---

## Table of Contents

- [Screenshots](#-screenshots)
- [Why OpenCrabs?](#why-opencrabs)
- [Core Features](#-core-features)
- [CLI Commands](#cli)
- [Migrating from Other Tools](#-migrating-from-other-tools)
- [Supported AI Providers](#-supported-ai-providers)
- [Agent-to-Agent (A2A) Protocol](#-agent-to-agent-a2a-protocol)
- [Quick Start](#-quick-start)
- [Onboarding Wizard](#-onboarding-wizard)
- [API Keys (keys.toml)](#-api-keys-keystoml)
- [Configuration (config.toml)](#-configuration-configtoml)
- [Epistemic Engine](#-epistemic-engine)
- [Safety Gates (~/.opencrabs/safety/)](#-safety-gates-opencrabssafety)
- [Commands (commands.toml)](#-commands-commandstoml)
- [Dynamic Tools (tools.toml)](#-dynamic-tools-toolstoml)
- [Using Local LLMs](#-using-local-llms)
- [Configuration](#-configuration)
- [Tool System](#-tool-system)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Brain System & 3-Tier Memory](#-brain-system--3-tier-memory)
- [Debug and Logging](#-debug-and-logging)
- [/goal — Autonomous Goal Loop](#-goal-autonomous-goal-loop)
- [Cron Jobs & Heartbeats](#-cron-jobs--heartbeats)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Platform Notes](#-platform-notes)
- [Troubleshooting](#-troubleshooting)
- [Companion Tools](#-companion-tools)
- [Disclaimers](#-disclaimers)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎬 Full onboard

https://github.com/user-attachments/assets/833dd5e9-3bcc-432a-96ac-3a5bb97b5966

## 🎬 Demo

https://github.com/user-attachments/assets/7f45c5f8-acdf-48d5-b6a4-0e4811a9ee23

## 🖥️ Split Panes

![Split Panes](src/assets/split-panes.png)

---

## 🎯 Core Features

### AI & Providers
| Feature | Description |
|---------|-------------|
| **Multi-Provider** | **Xiaomi MiMo**, Anthropic Claude, OpenAI, GitHub Copilot (uses your Copilot subscription), OpenRouter (400+ models), MiniMax, Google Gemini, z.ai GLM (General API + Coding API), Moonshot Kimi (API plan + Coding plan), Claude CLI, OpenCode CLI, Codex CLI (uses your ChatGPT/Codex subscription), Qwen Native (free OAuth with multi-account rotation), Qwen Code CLI (1k free req/day), and any OpenAI-compatible API (Ollama, LM Studio, LocalAI). Model lists fetched live from provider APIs — new models available instantly. Custom provider dialog: paste-by-default for API keys, Enter-to-load live models, typed-not-in-list models accepted and merged. Each session remembers its provider + model and restores it on switch |
| **Fallback Providers** | Configure a chain of fallback providers — if the primary fails, each fallback is tried in sequence automatically. Any configured provider can be a fallback. Config: `[providers.fallback] providers = ["openrouter", "anthropic"]` |
| **Per-Provider Vision** | Set `vision_model` per provider — the LLM calls `analyze_image` as a tool, which uses the vision model on the same provider API to describe images. The chat model stays the same and gets vision capability via tool call. Gemini vision takes priority when configured. Auto-configured for known providers (e.g. MiniMax) on first run |
| **Prompt Caching** | Caches the stable context prefix (system prompt, brain files, earlier turns) on every caching-capable provider — Anthropic native (default), OpenAI/OpenRouter (`cache_enabled`), Qwen/Alibaba (zero-config auto), Xiaomi (server-side). Averaging ~87% cache efficiency in real use; watch it live in the Cache Efficiency card of `/usage`. Big reason a larger context window stays affordable |
| **Context Window & Auto-Compaction** | Per-provider `context_window` override (default 200k, works on every provider); transparent auto-compaction at 65% (soft, background) / 90% (hard) of the window gives effectively unlimited session memory with no manual clearing |
| **Real-time Streaming** | Character-by-character response streaming with animated spinner showing model name and live text |
| **Local LLM Support** | Run with LM Studio, Ollama, or any OpenAI-compatible endpoint — 100% private, zero-cost |
| **Usage Dashboard** | Per-message token count and cost displayed in header; `/usage` opens an interactive dashboard with daily activity charts, cost breakdowns by project/provider/model/activity, core tool usage stats, and period filtering (Today/Week/Month/All-Time). Sessions are auto-categorized on startup (Development, Bug Fixes, Features, Refactoring, Testing, Documentation, CI/Deploy, etc.). Estimated costs for historical sessions shown as `~$X.XX` |
| **Context Awareness** | Live context usage indicator showing actual token counts (e.g. `ctx: 45K/200K (23%)`); auto-compaction at 70% with tool overhead budgeting; accurate tiktoken-based counting calibrated against API actuals |
| **3-Tier Memory** | (1) **Brain MEMORY.md** — user-curated durable memory, loaded on demand in the main session (see [Brain Files](#brain-files--one-file-one-job)), (2) **Daily Logs** — auto-compaction summaries at `~/.opencrabs/memory/YYYY-MM-DD.md`, (3) **Hybrid Memory Search** — FTS5 keyword search + vector embeddings combined via Reciprocal Rank Fusion. Three modes: **Local** (embeddinggemma-300M, 768-dim, no API key, works offline), **API** (any OpenAI-compatible `/v1/embeddings` endpoint: OpenAI, Ollama, Jina, etc.), or **FTS5-only** (no embeddings, VPS-friendly, ~0 RAM overhead). Auto-detects VPS environments and disables local embeddings |
| **Dynamic Brain System** | System brain assembled from workspace MD files (SOUL, USER, AGENTS, TOOLS, MEMORY) — all editable live between turns |
| **Multi-Agent Orchestration** | Spawn typed child agents (General, Explore, Plan, Code, Research) for parallel task execution. Five tools: `spawn_agent`, `wait_agent`, `send_input`, `close_agent`, `resume_agent`. Each type gets a role-specific system prompt and filtered tool registry. Configurable subagent provider/model. Children run in isolated sessions with auto-approve — no recursive spawning |
| **Recursive Self-Improvement** | ⚠️ Experimental. Automatic feedback ledger tracks every tool execution, user correction, and provider error. Three tools: `feedback_record` (log observations), `feedback_analyze` (query patterns), `self_improve` (autonomously apply brain file changes — no human approval). Changes logged to `~/.opencrabs/rsi/improvements.md` with daily archives. Startup digest injects performance summary into system prompt. **Upstream template sync** — automatically detects new releases, fetches updated brain file templates from the repo, diffs against local files, and appends only new sections (never overwrites user customizations). Backups created before every merge. Zero tokens spent when version unchanged. Zero setup — works out of the box via auto-migration |

### Multimodal Input
| Feature | Description |
|---------|-------------|
| **Image Attachments** | Paste image paths or URLs into the input — auto-detected and attached as vision content blocks for multimodal models. Also supports pasting raw image data from the clipboard (copied from a browser, screenshot tool, or any app) — on macOS via the clipboard as PNG, on Linux via wl-paste/xclip. The bytes are written to a temp file and routed through the existing image pipeline |
| **Video Attachments** | Send a video on any channel (mp4, m4v, mov, webm, mkv, avi, 3gp, flv) or paste a video path in the TUI — the agent calls the `analyze_video` tool, which routes through Google Gemini's multimodal video API (inline ≤18 MB, resumable Files API for larger). Requires `image.vision.enabled = true` with a Gemini API key in `config.toml`. Phase 1 is Gemini-native; a frame-extraction fallback for non-Gemini providers (ffmpeg → analyze_image per frame) is on the roadmap |
| **PDF Support** | Attach PDF files by path — native Anthropic PDF support; for other providers, text is extracted locally via `pdf-extract`. **Scanned / image-only PDFs** (no embedded text) are rendered to page images so vision models can read them — this needs **poppler** (`pdftoppm`) on the system: macOS `brew install poppler`, Debian/Ubuntu `apt install poppler-utils`, Fedora `dnf install poppler-utils`. The one-line installer sets this up automatically; without it, the PDF is still saved and its path handed to the agent (text extraction and the `pdf_to_images` tool can be retried once poppler is present) |
| **Document Parsing** | Built-in `parse_document` tool extracts text from PDF, DOC, DOCX, XLSX, XLSM, XLSB, XLS, ODS, CSV, HTML, TXT, MD, JSON, XML. All native Rust, zero external services: PDF text via `pdf-extract`, legacy Word 97-2003 `.doc` via `rwml`, DOCX/XML via a `quick-xml` streaming walk, spreadsheets (all five Excel/ODS variants) via `calamine`, CSV via `csv`. Scanned/image-only PDFs fall back to page-image rendering for vision models (see **PDF Support** above). Spreadsheet files are parsed into readable table format with sheet headers. Reading legacy binary `.ppt` is out of scope by design |
| **Document Generation** | Built-in `generate_document` tool creates XLSX (live Excel formulas), DOCX, and PDF natively in Rust with zero host dependencies, plus PPTX via python-pptx when present. Full styling per format: brand colors, page headers/footers with logos and page numbers, zebra tables, frozen headers, autofilters, number formats, PowerPoint brand templates. Image blocks embed PNG/JPEG inline with optional captions in PDF and DOCX. Generated files are delivered as downloadable attachments on Telegram/WhatsApp/Discord. See [Document Generation](#-document-generation) |
| **Voice (STT)** | Voice notes transcribed via **Groq Whisper API** (`whisper-large-v3-turbo`), any **OpenAI-compatible STT endpoint** (set `stt_base_url` + `stt_model` — works with self-hosted Whisper, Deepgram-compatible proxies, etc.), **Voicebox STT** (self-hosted open-source voice stack — point `voicebox_stt_base_url` at your instance; 2s liveness probe runs before each request so a dead voicebox fails fast), or **Local** whisper.cpp via `whisper-rs` (runs on-device, Tiny 75 MB / Base 142 MB / Small 466 MB / Medium 1.5 GB, zero API cost). All dispatched through a single entry point so every channel gets the same provider priority chain — and an optional `[providers.stt].fallback_chain` lets the user codify "if my local voicebox is down, try Groq, then OpenAI" so transient outages auto-route to the next provider with zero user action. Choose mode in `/onboard:voice`. Included by default |
| **Voice (TTS)** | Agent replies to voice notes with audio via **OpenAI TTS API** (`gpt-4o-mini-tts`), any **OpenAI-compatible TTS endpoint** (set `tts_base_url` + `tts_model` + `tts_voice` — works with self-hosted Coqui/Bark, ElevenLabs-compatible proxies, etc.), **Voicebox TTS** (async `/generate` → poll `/generate/{id}/status` → fetch audio; set `voicebox_tts_base_url` + `voicebox_tts_profile_id`), or **Local** Piper TTS (runs on-device via Python venv, Ryan / Amy / Lessac / Kristin / Joe / Cori, zero API cost). All outputs normalised to OGG/Opus via `ensure_opus` before delivery — consistent format across every channel regardless of backend. `[providers.tts].fallback_chain` provides the same auto-failover behaviour as the STT side. Falls back to text if disabled |
| **Attachment Indicator** | Attached images show as `[IMG1:filename.png]` in the input title bar |
| **Image Generation** | Agent generates images via Google Gemini (`gemini-3.1-flash-image-preview` "Nano Banana") using the `generate_image` tool — enabled via `/onboard:image`. Returned as native images/attachments in all channels |

#### Vision setup — two paths, pick one

> **Using Xiaomi?** Share images and OpenCrabs automatically routes to MiMo's multimodal model — no separate vision key needed.

**Path A (preferred, simpler).** Set `vision_model = "<model>"` on your active `[providers.<name>]` block in `config.toml`. Works for every built-in and custom provider — the agent calls the vision model on the **same provider endpoint** via the `analyze_image` tool, so no second API key is needed. Pick a vision-capable model on that provider (DeepSeek chat models like `deepseek-v4-flash` reject `image_url` content, so point `vision_model` at a vision-capable variant of the same family — every provider has at least one).

```toml
[providers.opencode]
enabled = true
vision_model = "mimo-v2-omni"  # any vision-capable model on this provider
```

**Path B (fallback).** Enable Gemini globally. Use this only when your active provider has no vision-capable model. Easiest way: run `/onboard:image` and the wizard walks you through. Manual setup:

```toml
# config.toml
[image.vision]
enabled = true
model = "gemini-3.1-flash-image-preview"
provider = "openrouter"  # Optional: force vision to use a specific provider (bypasses enabled gate)
```

```toml
# keys.toml  ← the Gemini key MUST live here, NOT in config.toml
[image]
api_key = "YOUR_GEMINI_KEY"
```

> **Gotcha:** `[image.vision] api_key = "..."` in `config.toml` is silently ignored — the field carries `#[serde(skip)]` for security. Use `keys.toml` `[image]` section, or `[providers.image.gemini]` in config.toml + the key in keys.toml.

> **Vision-only provider override:** Set `[image.vision] provider = "name"` to route vision requests through a specific provider regardless of its `enabled` flag. Useful when you have a vision-only provider (e.g., OpenRouter proxying Gemini) with `enabled = false` for chat but want it to serve `analyze_image` and `analyze_video`. An unresolvable name falls through to the normal provider scan.

**Diagnostic:** when vision is unavailable for any reason, `is_vision_available` logs the exact cause at INFO level in `~/.opencrabs/logs/opencrabs.YYYY-MM-DD` — search for `target=vision`.

#### Context window & auto-compaction (effectively unlimited memory)

OpenCrabs never makes you start a fresh session to "clear context." Instead it auto-compacts: as a session's history approaches the model's context window, it summarizes the older turns in place and keeps going. Two tiers:

- **65% — soft trigger:** spawns a background LLM compaction that summarizes history back down to ~65% of the budget. Non-blocking — the conversation keeps streaming.
- **90% — hard trigger:** synchronous compaction before the next request, so a single turn can never overflow the window.

The triggers are **percentages of the effective window**, so they scale to whatever you set: at the 200k default compaction kicks in around 130k; at a 1M window, around 650k.

It's **transparent** — most of the time you won't notice it happen at all. Occasionally you'll catch a brief inline notice while it summarizes (the agent tends to mention it dynamically, in its own voice), then the conversation carries on with the older turns condensed. You never have to start over or manually clear anything.

**The budget defaults to 200,000 tokens** — the battle-tested sweet spot: large enough for long sessions, small enough to keep each request fast and cheap. Override it **per provider** in `config.toml`:

```toml
[providers.xiaomi]
context_window = 1000000   # raise the budget; compaction still triggers at 65% / 90% of it

[providers.anthropic]
context_window = 1000000   # native providers too — Anthropic, Gemini, and the CLI providers
```

This override works for **every provider** — OpenAI-compatible (custom, xiaomi, qwen, openrouter, minimax, …) and the native Anthropic, Gemini, and CLI providers. A provider with no override inherits the 200k default.

> **Sizing guidance.** 200k is the battle-tested sweet spot for essentially **every cloud model**. Going bigger has two real downsides — **cost** and **context loss**:
>
> - **Cost** is the lesser one, and it's softened by caching: OpenCrabs uses prompt caching across every caching-capable provider (currently averaging ~87% efficiency), and a long context is mostly an unchanged prefix served from cache — so a bigger window costs far less than the raw token count suggests.
> - **Context loss** is the one to watch: most models degrade as the window fills — they lose track of the middle and recall less reliably. Only the latest SOTA models hold large context robustly: closed (Opus 4.7 / 4.8, Fable 5, GPT-5.5, Gemini 3.1, …) or open (Qwen 3.7, Kimi K2.7, MiMo V2.5, GLM 5.2, DeepSeek V4, and the newer releases that keep coming from these and other labs). So raise `context_window` mainly on those frontier models; on anything older or smaller, staying near 200k keeps answers sharper.
>
> **Local models want less:** 128k is a good sweet spot — go **lower** if your machine is tight on resources or you start noticing hallucinations/fabrications, and **higher** only if you have more than 32GB of RAM and have tested your model at a larger window. Not sure what fits your setup? Reach out to Adolfo for suggestions/support, or open a [GitHub discussion](https://github.com/adolfousier/opencrabs/discussions).
>
> **Leave auto-compaction on** — it's been battle-tested over months and needs no babysitting. Only run a *manual* compaction (the `/compact` command) if you have a specific, strong reason to summarize early; otherwise let it manage itself.

#### Prompt caching (every caching-capable provider)

A long context is mostly a **stable prefix** — system prompt, brain files, earlier turns rarely change between requests. OpenCrabs caches that prefix wherever the provider supports it, so you pay full price for it once and a fraction on every reuse. Across real usage it's currently averaging **~87% cache efficiency**, which you can watch live in the **Cache Efficiency** card of `/usage`. This is the main reason a larger `context_window` costs far less than its raw token count suggests.

How it turns on depends on the provider:

- **Anthropic** — native prompt caching, on by default: the `cache_control: ephemeral` markers and the caching beta header are added automatically to the system prompt and tools.
- **OpenAI / OpenAI-compatible** — OpenAI caches automatically server-side. **OpenRouter caches by default too** — OpenCrabs enables it automatically, so there's no flag to discover; set `cache_enabled = false` only if you specifically want to opt out.
- **Qwen / Alibaba** — auto-enabled, zero-config (detected by endpoint or a `qwen-` model name; unlocks Alibaba's explicit context cache, ~90% off on hits). See the Qwen note further below.
- **Xiaomi (MiMo)** — caches automatically server-side; nothing to configure.

```toml
[providers.openrouter]
enabled = true
# Caching is ON by default — uncomment only to opt out:
# cache_enabled = false
```

**About the TTL — it's system-controlled.** The prompt-prefix caching that drives that ~87% (Anthropic native, Qwen/Alibaba, Xiaomi) uses a **provider-fixed 5-minute TTL that OpenCrabs does not expose** — you can't change it, and you don't need to. It **renews on every cache hit**, so in an active session each message keeps the prefix warm and it survives the *whole* session, however long, as long as you're not idle for more than 5 minutes; only an idle gap longer than that expires it, and the next message simply re-creates it once. The short TTL is the safeguard: a long TTL would keep the cache **alive on the provider's servers during idle time**, which you pay to keep stored — exactly how caching bills run away (an idle cache left alive for days can rack up serious charges). Keeping it fixed protects everyone, especially non-technical users, by default.

The one user-settable TTL is `cache_ttl` (default 300s, range 1-86400), which sets OpenRouter's cache TTL via the `X-OpenRouter-Cache-TTL` header. OpenRouter caching is on by default with this conservative 300s; it does **not** touch the prompt-prefix caches above. Leave it at the default unless you specifically understand the cost tradeoff of a longer TTL (a longer one keeps the cache alive longer at standing cost).

#### Changing provider settings: edit the file, or just ask

`vision_model`, `context_window`, provider keys, allowlists — any setting — can be changed two ways, and **neither needs a restart**:

- **Edit `config.toml` / `keys.toml` directly.** A file watcher hot-reloads on save, so the running TUI *and* the headless daemon both pick the change up on the next message — provider swap, tool re-registration, context budget, commands, and skills all update live.
- **Ask OpenCrabs in natural language** — e.g. *"set my context window to 1M"*, *"use mimo-v2-omni for vision on xiaomi"*, *"add my OpenRouter key"*. It writes the change through the `config_manager` tool (`write_config`), and if the automatic hot-reload doesn't pick the save up for any reason, it can run `config_manager reload` to force a fresh load from disk on the spot.

### Messaging Integrations
| Feature | Description |
|---------|-------------|
| **Telegram Bot** | Full-featured Telegram bot — owner DMs share TUI session, groups get isolated per-group sessions (keyed by chat ID). Photo/voice support (STT transcribes incoming voice notes; TTS replies as OGG/Opus voice notes via `send_voice` when input was audio). Allowed user IDs, allowed chat/group IDs, per-group allow lists (`[channels.telegram.groups.<id>]`), `respond_to` filter (`all`/`dm_only`/`mention`/`auto`, global or per-group). Passive group message capture — all messages stored for context even when bot isn't mentioned |
| **WhatsApp** | Pair by scanning a QR code from the TUI: first-run onboarding, or `/onboard:channels` then select WhatsApp. The QR is shown in the terminal. You run the bot AS whatever account you scan — your own number (talk via "Message Yourself") or any other number you own, including a WhatsApp Business account, to serve that account's incoming DMs. `response_policy` (`auto`/`owner_only`/`allowlist`/`open`) decides who it answers; the paired account's self-chat and `bot_owner` operator are always allowed. Text + image + voice (STT transcribes incoming voice notes; TTS replies as voice notes when input was audio and `tts_enabled=true`). Per-phone sessions, session persists across restarts |
| **Discord** | Full Discord bot — text + image + voice. Owner DMs share TUI session, guild channels get isolated per-channel sessions. Allowed user IDs, allowed channel IDs, `respond_to` filter. Tool calls render as ONE grouped message per turn, collapsed to a summary with an Expand/Collapse button, edited in place as tools run — Slack parity. Reacting to a bot message becomes an agent turn (approval emoji = keep going with a silent react-back, stop emoji = pause and ask), and the agent reacts back via its `<<react:EMOJI>>` marker. Multiple generated files batch into one gallery-style message. Interactive components: select menus (`discord_send` with `action=select_menu`), modal forms (`action=modal`), component TTL with auto-cleanup, role-based access control, forum thread creation. Full proactive control via `discord_send` (17 actions): `send`, `reply`, `react`, `unreact`, `edit`, `delete`, `pin`, `unpin`, `create_thread`, `send_embed`, `get_messages`, `list_channels`, `add_role`, `remove_role`, `kick`, `ban`, `send_file`. Generated images sent as native Discord file attachments |
| **Slack** | Full Slack bot via Socket Mode — owner DMs share TUI session, channels get isolated per-channel sessions. Text + image + voice (STT transcribes incoming audio attachments; TTS replies upload an OGG/Opus audio file via Slack's external upload flow — renders inline with waveform UI — when input was audio and `tts_enabled=true`). Allowed user IDs, allowed channel IDs, `respond_to` filter. Tool calls render as ONE grouped message per turn, collapsed to a summary with an Expand/Collapse button (Block Kit), edited in place as tools run — Telegram parity. Reacting to a bot message becomes an agent turn (approval emoji = keep going with a silent react-back, stop emoji = pause and ask), and the agent reacts back via its `<<react:EMOJI>>` marker. All file uploads (generated docs/images, TTS audio) use Slack's supported external upload flow (`files.getUploadURLExternal` + `completeUploadExternal`) with real MIME types. Full proactive control via `slack_send` (17 actions): `send`, `reply`, `react`, `unreact`, `edit`, `delete`, `pin`, `unpin`, `get_messages`, `get_channel`, `list_channels`, `get_user`, `list_members`, `kick_user`, `set_topic`, `send_blocks`, `send_file`. Generated images sent as native Slack file uploads. Bot token + app token from `api.slack.com/apps` (Socket Mode required). **Required Bot Token Scopes:** `chat:write`, `channels:history`, `groups:history`, `im:history`, `mpim:history`, `users:read`, `files:read`, `files:write`, `reactions:write`, `app_mentions:read` |
| **Trello** | Tool-only by default — the AI acts on Trello only when explicitly asked via `trello_send`. Opt-in polling via `poll_interval_secs` in config; when enabled, only `@bot_username` mentions from allowed users trigger a response. Full card management via `trello_send` (22 actions): `add_comment`, `create_card`, `move_card`, `find_cards`, `list_boards`, `get_card`, `get_card_comments`, `update_card`, `archive_card`, `add_member_to_card`, `remove_member_from_card`, `add_label_to_card`, `remove_label_from_card`, `add_checklist`, `add_checklist_item`, `complete_checklist_item`, `list_lists`, `get_board_members`, `search`, `get_notifications`, `mark_notifications_read`, `add_attachment`. API Key + Token from `trello.com/power-ups/admin`, board IDs and member-ID allowlist configurable |

#### File & Media Input Support

When users send files, images, or documents across any channel, the agent receives the content automatically — no manual forwarding needed. Example: a user uploads a dashboard screenshot to a Trello card with the comment _"I'm seeing this error"_ — the agent fetches the attachment, passes it through the vision pipeline, and responds with full context.

| Channel | Images (in) | Text files (in) | Documents (in) | Audio (in) | Audio reply (out) | Image gen (out) |
|---------|-------------|-----------------|----------------|------------|-------------------|-----------------|
| **Telegram** | ✅ vision pipeline | ✅ extracted inline | ✅ / PDF note | ✅ STT | ✅ TTS via `send_voice` (OGG/Opus) | ✅ native photo |
| **WhatsApp** | ✅ vision pipeline | ✅ extracted inline | ✅ / PDF note | ✅ STT | ✅ TTS via upload + `audio_message` (OGG/Opus, `ptt=true`) | ✅ native image |
| **Discord** | ✅ vision pipeline | ✅ extracted inline | ✅ / PDF note | ✅ STT | ✅ TTS as `response.ogg` attachment | ✅ file attachment |
| **Slack** | ✅ vision pipeline | ✅ extracted inline | ✅ / PDF note | ✅ STT | ✅ TTS via external upload flow (OGG/Opus, inline waveform) | ✅ file upload |
| **Trello** | ✅ card attachments → vision | ✅ extracted inline | — | — | — | ✅ card attachment + embed |
| **TUI** | ✅ paste path → vision | ✅ paste path → inline | — | ✅ STT | — (terminal has no native audio) | ✅ `[IMG: name]` display |

Images are passed to the active model's vision pipeline if it supports multimodal input, or routed to the `analyze_image` tool (Google Gemini vision) otherwise. Text files (`.txt`, `.md`, `.json`, `.csv`, source code, etc.) are extracted as UTF-8 and included inline up to 8 000 characters — in the TUI simply paste or type the file path.

Videos uploaded on any channel (mp4, m4v, mov, webm, mkv, avi, 3gp, flv) auto-route to `analyze_video` when `image.vision.enabled = true` with a Gemini API key. The TUI also detects pasted video paths and labels them `Video #N` in the attachment indicator. Provider-side limits to keep in mind: Gemini's inline-bytes mode caps at ~20 MB (we use ≤18 MB), and the resumable Files API supports up to 2 GB / ~1 hour videos. Channel-side limits are tighter — Telegram's Bot API hard-caps `getFile` downloads at **20 MB** even though chats accept larger uploads, so videos over that size will get a friendly "compress to under 20 MB and resend" reply. Slack file downloads use the bot token (`files:read` scope) and inherit the workspace's per-file upload cap. Frame-extraction fallback for non-Gemini providers is not yet wired — without a Gemini key, video uploads return an "unsupported" notice.

#### Telegram rich message formatting

When a Telegram reply carries structured Markdown (tables, headings, lists, `- [ ]` task lists, fenced code, or math), OpenCrabs can render it natively using Telegram's rich messages (Bot API 10.1) — real tables, real section headings, real checkboxes — instead of plain text or basic HTML.

This is **on by default** via `channels.telegram.rich_messages`. The one caveat: native rich messages are unreadable on **Telegram Web and older clients** — those show a "this message is not supported, update Telegram" placeholder, and the rich API has no text fallback. If your audience runs outdated clients, disable it in the onboarding dialog (the "Rich text experience" checkbox) or ask the agent: `/onboard:channels telegram richtext off`. With the flag off, the universal HTML rendering is used — tables come out as aligned monospace grids, task items as `☐`/`☑`, with proper paragraph spacing, so structured replies look decent on every client.

When enabled, native rich applies to the agent's reply (sent as a fresh rich message so it renders cleanly) and to proactive `telegram_send` messages. Plain-prose replies are left untouched, so incidental characters like a stray `*` or `#` are never reinterpreted. If the rich send fails for any reason, OpenCrabs falls back silently to HTML, so a message is never dropped.

**Flow logs** (processing-log messages showing tool calls and intermediate text) also use the rich API when enabled, supporting 32K characters instead of HTML's 4K limit. Long tool chains fit in a single message without splitting. If the rich send fails, flow logs fall back to HTML rendering. The block auto-freezes at 30K characters to stay within limits.

#### /cowork — Telegram-only workspace creation

The `/cowork` command creates a team workspace directly from Telegram. It is **Telegram-only** because it relies on Telegram-specific primitives: group creation via `?startgroup` deep links, invite links, QR codes from `t.me` URLs, and `new_chat_members` service messages for auto-registration. None of these exist in Discord, Slack, or WhatsApp.

**Prerequisite:** Telegram must be configured (bot token set via `/onboard:channels telegram` or manual `config.toml` setup).

**Flow:**
1. Owner sends `/cowork` in DM (owner-only command) → bot replies with an **Add to Group** inline button
2. Owner taps it → Telegram's native group picker opens. The deep link requests admin rights inline (`?startgroup=cowork_<id>&admin=invite_users+delete_messages+pin_messages+manage_chat`), so the bot is **added already promoted to admin** — no manual promotion step. Always keep the bot as admin: an admin bot reads every message regardless of privacy mode and can create invite links.
3. On joining via cowork, the bot sets that group's `open = true` (persisted) so **every member is allowed** — existing and new, no per-user step — and posts a short welcome. If it somehow landed without admin, the welcome also nudges the owner to promote it.
4. **Members are auto-registered in an open group:** joining members are added to the group's own allowlist (`[channels.telegram.groups.<chat_id>].allowed_users`) on join, and anyone who was already in the group before the bot can send `/start` to be tracked. This is group-scoped only — members can chat in that group (`@mention` the bot) but cannot DM it privately unless also on the global `allowed_users` or `bot_owner`. Already in the group and want to open it without re-adding the bot? Send `/cowork` inside the group (owner-only).
5. **`/start` in a DM never auto-registers** (DMs are invite-only): the bot just returns the sender's Telegram ID so they can share it with the owner to be added (or add it to `config.toml` when self-hosting). `/start` in a non-open group likewise returns the ID and points the user to ask the owner to run `/cowork`. The owner's own `/start` in a group is silent — they are already allowed everywhere.

**Cross-channel behavior:** `/cowork` works from any surface. In Telegram DMs, the native flow activates directly. From the TUI, Discord, Slack, or WhatsApp, the agent calls the `cowork_connect` tool which mints a session, registers it with the bot, and returns the `t.me` deep link plus a scannable QR code PNG. The TUI shows the clickable link; channels deliver the QR as a photo.

#### Telegram group security model

When `allowed_users` is configured, the bot enforces a strict allowlist on all incoming messages. The behavior differs between DMs and groups:

**In DMs:**
- Non-allowed users always get a reply: *"You are not authorized. Send /start to get your user ID."* — so they know what to do.

**In groups:**
- Non-allowed users get **silently dropped** (no reply, no processing) for normal messages.
- If the user explicitly **@mentions** or **replies to** the bot, they get the "not authorized" reply — so they know they need to be added.
- `/start` in an **open** group (`open = true`, see [Per-group access control](#per-group-access-control-per-chat-acl)) registers the sender into that group's allowlist and confirms. In a non-open group it returns the sender's ID and tells them to ask the owner to run `/cowork` or add them — it never silently self-adds. The owner's `/start` (which Telegram auto-fires when the bot is added) is silent.

This prevents the bot from spamming "not authorized" in active groups where most members aren't on the allowlist. The bot only engages with non-allowed users when they explicitly reach out.

**Config:**
```toml
[channels.telegram]
allowed_users = ["123456789"]    # Only these users can interact
respond_to = "mention"           # Bot only responds to @mentions in groups
silence_group_start = true       # Silently ignore /start from non-allowed users in groups
```

#### Bot owner and owner-only commands

Every channel has a `bot_owner` field (`[channels.telegram]`, `[channels.discord]`, `[channels.slack]`, `[channels.whatsapp]`, `[channels.trello]`). It names the user ID(s) (phone for WhatsApp) treated as the bot owner. On first-run setup the owner is seeded automatically from the first entry in your allow list (`allowed_users`, or `allowed_phones` for WhatsApp), and existing configs are migrated on load. Set `bot_owner` explicitly to pin the owner instead of relying on list order.

The owner gets access that other allowlisted users do not. All channel commands except `/new` are owner-only: `/compact`, `/doctor`, `/evolve`, `/help`, `/models`, `/rtk`, `/sessions`, `/stop`, `/usage`, `/profiles`, `/goal`, `/mission-control`, `/rename`, `/cd`, `/respond_to`, `/redact`, `/restart`, `/exit`. `/new` stays open for session recovery (bugged/hallucinated sessions). Non-owners who try get a short "owner only" notice.

**Deny-by-default access model:** if neither `allowed_users` nor `bot_owner` is configured, the bot refuses all interactions — unconfigured installs are locked down by default. Set at least one to unlock access. This prevents open-mode footguns on fresh deployments.

```toml
[channels.telegram]
allowed_users = ["123456789"]    # who may interact
# bot_owner = ["123456789"]      # owner for owner-only commands (auto-seeded from allowed_users[0])
```

#### Per-group access control (per-chat ACL)

Telegram groups can have their own member list, so a user can be allowed in **one group** without gaining DM access:

- `allowed_users` (channel level) — **admins**: may DM the bot and act in any chat.
- `bot_owner` — the **owner**: always allowed everywhere.
- `[channels.telegram.groups.<chat_id>].allowed_users` — allowed in **that group only**. These users are refused in DMs unless they are also an admin or the owner, which closes the "DM the bot privately to escape group oversight" bypass.
- `[channels.telegram.groups.<chat_id>].open` — **per-group blanket allow** (default `false`). When `true`, *any* member of that group passes the group ACL without being individually listed, and joining members / members who `/start` are auto-registered into `allowed_users` so there's a visible roster. DMs and every other group stay locked. This is the ONLY switch that relaxes group access — it is **per-group, never global**, and defaults off so the bot is secure by default. There is no global `open`.
- `[channels.telegram.groups.<chat_id>].name` — the group's title, **recorded automatically** so config is readable rather than a wall of chat ids. Written on the group's next message and refreshed when the group is renamed; only for groups that already have a section, so the bot never adds one for a room you didn't configure. Purely a label: the ACL keys off the chat id and never reads it. Safe to edit or delete by hand (it comes back on the next message).

DMs are gated to admins + owner. If neither `allowed_users` nor `bot_owner` is set, the bot refuses all interactions (deny-by-default). Set at least one to unlock access. Each group can also override `respond_to` just for itself.

```toml
[channels.telegram]
allowed_users = ["111"]                  # admins: DM + any chat
respond_to = "mention"                   # global default

[channels.telegram.groups.-1001234567890]
name = "Release Crew"                    # recorded from Telegram; a label, never part of the ACL
allowed_users = ["222", "333"]           # allowed in this group only, never via DM
respond_to = "all"                       # per-group override of the global respond_to
open = true                              # any member of THIS group is allowed (blanket, per-group)
```

`respond_to` accepts `all`, `mention`, `dm_only`, or `auto` (reply to all while there is at most one active sender, then switch to mention-only once a second unique sender appears).

**`/cowork` opens a group.** Running `/cowork` (owner-only) is the explicit, owner-initiated action that sets that group's `open = true` (persisted, until you change it): either by adding the bot to a group via the cowork deep link, or by sending `/cowork` inside a group the bot is already in. Once open, every member (existing and new) is allowed and tracked in the group's `allowed_users` — no per-user `/start` needed — while DM access stays closed. Auto-registration only happens in open groups; a group you never `/cowork` (or set `open = true` on) stays secure by default and admits no one automatically.

#### Voice and file pickup in groups

In mention-only groups (`respond_to = "mention"`), users can now share files and voice messages even when the bot isn't directly tagged in the same message. Here's how it works:

1. **Fire-and-forget file capture** — The bot downloads ALL incoming voice, video, document, and audio files from group messages to `~/.opencrabs/tmp/`, regardless of whether the bot was mentioned. This happens silently in the background.
2. **Tag-then-ask** — A user sends a voice message, then tags the bot in a follow-up message (e.g. `@bot what did I just say?`). The bot scans the tmp directory for recent voice files from that chat (5-minute window), transcribes the most recent one, and prepends the transcript to the user's message.

This solves the core UX problem in mention-only groups: previously, tagging the bot in the *same* message as a voice note didn't work because Telegram sends voice and text as separate messages.

**Supported file types:** `.ogg` (voice notes), `.mp4` (video notes), documents, and audio files.

### Terminal UI
| Feature | Description |
|---------|-------------|
| **Cursor Navigation** | Full cursor movement: Left/Right arrows, Ctrl+Left/Right word jump, Home/End, Delete, Backspace at position |
| **Input History** | Persistent command history (`~/.opencrabs/history.txt`), loaded on startup, capped at 500 entries |
| **Inline Tool Approval** | Claude Code-style `❯ Yes / Always / No` selector with arrow key navigation |
| **Inline Plan Approval** | Interactive plan review selector (Approve / Reject / Request Changes / View Plan) |
| **Session Management** | Create, rename, delete sessions with persistent SQLite storage; each session remembers its provider + model — switching sessions auto-restores the provider (no manual `/models` needed); token counts and context % per session. New sessions auto-generate a meaningful title from the first user message (no more "New Chat") |
| **Direct Model Switch** | `/models <provider/model>` switches the current session instantly — no picker — on the TUI and every channel. You can also name it the way you say it: `/models xiaomi mimo v2.5 pro` resolves the same as `/models xiaomi/mimo-v2.5-pro`, with spacing, hyphens, dots and case interchangeable. Matching is programmatic against the provider's own catalogue, so it costs no model call and never invents a model that provider doesn't serve; an ambiguous reference is refused with the candidates listed rather than guessed. Add `all` (`/models minimax/MiniMax-M3 all`) to apply to every non-archived session (Telegram also offers an inline "Apply to all sessions" button). `opencrabs session set-model` does the same from the terminal, and `[providers.<name>] force_default = true` pushes the section's default pair to all sessions on config reload |
| **Split Panes** | Horizontal (`\|` in sessions) and vertical (`_` in sessions) pane splitting — tmux-style. Each pane runs its own session with independent provider, model, and context. Run 10 sessions side by side, all processing in parallel. `Tab` to cycle focus, `Ctrl+X` to close pane |
| **Parallel Sessions** | Multiple sessions can have in-flight requests to different providers simultaneously. Send a message in one session, switch to another, send another — both process in parallel. Background sessions auto-approve tool calls; you'll see results when you switch back |
| **Scroll While Streaming** | Scroll up during streaming without being yanked back to bottom; auto-scroll re-enables when you scroll back down or send a message |
| **Path Normalization** | Home paths (`/home/user/...`) automatically collapsed to `~` in system prompt, tool call display, and brain files — keeps context lean and readable |
| **Recent File Memory** | Agent remembers recently accessed file paths across sessions — no need to re-specify paths you were just working on |
| **Compaction Summary** | Auto-compaction shows the full summary in chat as a system message — see exactly what the agent remembered |
| **Syntax Highlighting** | 100+ languages with line numbers via syntect |
| **Markdown Rendering** | Rich text formatting with code blocks, headings, lists, and inline styles |
| **Tool Context Persistence** | Tool call groups saved to DB and reconstructed on session reload — no vanishing tool history |
| **Expand / Collapse Blocks** | Click a tool-call group or a **Thinking** block, or press `Ctrl+O`, to expand it. Reasoning cycles through three states so a long thought never floods the view: **collapsed → capped** (first ~10 lines + a "… N more (click / ctrl+o for full)" hint) **→ full → collapsed**. Tool-call groups toggle expand/collapse. A plain **click** toggles the block under the cursor; a **click-and-drag** selects text to copy (even over a collapsible block) instead of expanding it |
| **Multi-line Input** | Alt+Enter / Shift+Enter for newlines; Enter to send |
| **Abort Processing** | Escape×2 within 3 seconds to cancel any in-progress request |
| **Clipboard Image Paste** | Copy an image from a browser, screenshot tool, or any app and paste it directly into the input. Raw image bytes are read from the OS clipboard (macOS: osascript, Linux: wl-paste/xclip), written to a temp file, and attached through the existing image pipeline. No need to save to disk first |
| **Bang Operator (`!cmd`)** | Run any shell command directly from the input — no LLM round-trip. Output is shown as a system message in the working directory context |
| **Auto-Update** | Checks GitHub for new releases on startup and once every 24h in the background. When a new version is found it silently installs and hot-restarts. Disable via `[agent] auto_update = false` in `config.toml` to be prompted instead |

### Agent Capabilities
| Feature | Description |
|---------|-------------|
| **Full Terminal Access** | 30+ built-in tools (file I/O, glob, grep, web search, code execution, image gen/analysis, memory search, cron jobs) plus **any CLI tool on your system** via `bash` — GitHub CLI, Docker, SSH, Python, Node, ffmpeg, curl, and everything else just work |
| **RTK Token Savings** | Automatic bash output optimization via [RTK](https://github.com/rtk-ai/rtk) integration — enabled by default, zero config. Prepends `rtk` to supported commands (git, cargo, npm, pnpm, yarn, docker, kubectl, grep, find, ls, tree, curl, and 100+ more) to filter noise from command output. Reduces token usage on bash commands by 60-90% without losing critical information. Check savings with `/rtk` command. RTK binary bundled with prebuilt OpenCrabs releases and installed by `/evolve` on update; if it is ever missing, OpenCrabs auto-downloads the right binary for your platform on first use |
| **Per-Session Isolation** | Each session is an independent agent with its own provider, model, context, and tool state. Sessions can run tasks in parallel against different providers — ask Claude a question in one session while Kimi works on code in another |
| **Self-Healing** | Detects and recovers from phantom tool calls, gaslighting preambles, text repetition loops, XML tool call failures, and provider errors. Short-circuits repeated failing bash commands and rejects interactive commands that would hang. Near-match loop detection catches tool loops that differ only by a counter or whitespace across every tool except read_file, and reworded announcement loops both mid-turn and across turns, that exact-match guards miss (#957, #961). Automatic context compaction at 65% (soft) and 90% (hard). Sticky fallback promotion when primary recovers |
| **Self-Sustaining** | Agent can modify its own source, build, test, and hot-restart via Unix `exec()` |
| **Self-Improving** | Learns from experience — saves reusable workflows as custom commands, writes lessons learned to memory, updates its own brain files. All local, no data leaves your machine |
| **Autonomous /goal** | Set a goal with `/goal <text>` and the agent loops autonomously: executing, self-evaluating with an LLM judge, and continuing with a correction prompt until the goal is satisfied or the turn budget runs out. Supports `/goal pause`, `/goal resume`, `/goal status`, and `/goal clear` |
| **Dynamic Tools** | Define custom tools at runtime via `~/.opencrabs/tools.toml` — the agent can call them autonomously like built-in tools. HTTP and shell executors, template parameters (`{{param}}`), enable/disable without restart. The `tool_manage` meta-tool lets the agent create, remove, and reload tools on the fly |
| **Skills (cross-harness)** | Multi-stage workflow templates in the de-facto `SKILL.md` format used by Claude Code, Anthropic managed agents, and OpenClaw. Drop a `SKILL.md` under `~/.opencrabs/skills/<name>/` and it auto-registers as `/<name>` — no `commands.toml` entry needed. Works in the TUI **and** every connected channel (Telegram, Discord, Slack, WhatsApp). Built-ins ship with the binary (always version-matched); user skills override by file presence. Two built-ins out of the box: `/security-audit` (language-agnostic CVE & static-analysis audit, scores 0-100) and `/cost-estimate` (codebase valuation with AI-assisted ROI). Same `SKILL.md` is portable across harnesses |
| **Mission Control** | Full-screen `/mission-control` dialog showing every actionable artifact in one place: pending RSI proposals (inbox cards), recent RSI activity (improvements log feed), the schedule queue (cron jobs + paused/active state), and a live **Analytics** panel (brain file sizes, tool usage with proportional bars, failure rates, RSI applied by dimension, phantom-detection and resolution rates, per-model reliability, stream-recovery counts) with **D / W / M / All** window tabs so a fixed 30-day view cannot hide a tool that has already recovered. Apply or reject inbox proposals inline with `a` / `r` — same machinery as the agent's `rsi_proposals` tool, byte-identical install. Tab between panels, j/k to navigate, Enter for the detail popup, Esc to close. Cron paused jobs flag in orange, active in teal — at-a-glance state |
| **Skills picker** | Full-screen `/skills` dialog with a live filter input — start typing to narrow the list (case-insensitive on name + description), Tab / Shift-Tab cycle the filtered cards (wraps at the edges), Enter runs the selected skill (sends its body as a prompt to the agent), Esc closes. Built-in skills badge orange; user-installed skills badge teal. When the filter narrows to a single match, Enter just fires it — fastest path to launch a skill |
| **Browser Automation** | Native browser control via CDP (Chrome DevTools Protocol). Auto-detects your default Chromium-based browser (Chrome, Brave, Edge, Arc, Vivaldi, Opera, Chromium) and uses its profile — your logins, cookies, and extensions carry over. 7 browser tools: navigate, click, type, screenshot, eval JS, extract content, wait for elements. Headed or headless mode with display auto-detection. **Note:** Firefox is not supported (no CDP) — if Firefox is your default, OpenCrabs falls back to the first available Chromium browser. Feature-gated under `browser` (included by default) |
| **Natural Language Commands** | Tell OpenCrabs to create slash commands — it writes them to `commands.toml` autonomously via the `config_manager` tool |
| **Live Settings** | Agent can read/write `config.toml` at runtime; Settings TUI screen (press `S`) shows current config; approval policy persists across restarts. Default: auto-approve (use `/approve` to change) |
| **Web Search** | DuckDuckGo (built-in, no key needed) + EXA AI (neural, free via MCP) by default; Brave Search optional (key in `keys.toml`) |
| **Debug Logging** | `--debug` flag or `debug_logs = true` in config enables file logging; config toggle hot-reloads live without restart; `DEBUG_LOGS_LOCATION` env var for custom log directory |
| **Agent-to-Agent (A2A)** | HTTP gateway implementing A2A Protocol RC v1.0 — peer-to-peer agent communication via JSON-RPC 2.0. Supports `message/send`, `message/stream` (SSE), `tasks/get`, `tasks/cancel`. Built-in `a2a_send` tool lets the agent proactively call remote A2A agents. Optional Bearer token auth. Includes multi-agent debate (Bee Colony) with confidence-weighted consensus. Task persistence across restarts |
| **Profiles** | Run multiple isolated instances from the same installation. Each profile gets its own config, keys, memory, sessions, and database. Create with `opencrabs profile create <name>`, switch with `-p <name>`. Migrate config between profiles with `profile migrate`. Export/import for sharing. Token-lock isolation prevents two profiles from using the same bot credential |

### CLI
| Command | Description |
|---------|-------------|
| `opencrabs` | Launch interactive TUI (default) |
| `opencrabs chat` | Launch TUI with optional `--session <id>` to resume, `--onboard` to force wizard |
| `opencrabs run <prompt>` | Execute a single prompt non-interactively. Already unattended under the default `approval_policy`; `--auto-approve` / `--yolo` only when the policy is `ask`. `--format text\|json\|markdown` |
| `opencrabs agent` | Interactive CLI agent — multi-turn conversation in your terminal, no TUI. `-m <msg>` for single-message mode |
| `opencrabs status` | System overview: version, provider, channels, database, brain, cron, dynamic tools |
| `opencrabs doctor` | Full diagnostics: config, provider connectivity, database, brain, channels, CLI tools in PATH |
| `opencrabs init` | Initialize configuration (`--force` to overwrite) |
| `opencrabs config` | Show current configuration (`--show-secrets` to reveal keys) |
| `opencrabs onboard` | Run the onboarding setup wizard |
| `opencrabs channel list` | List all configured channels with enabled/disabled status |
| `opencrabs channel doctor` | Run health checks on all enabled channels |
| `opencrabs memory list` | List brain files and memory entries |
| `opencrabs memory get <name>` | Show contents of a specific memory or brain file |
| `opencrabs memory stats` | Memory statistics: file count, total size, entry count |
| `opencrabs session list` | List all sessions with provider, model, token count (`--all` includes archived) |
| `opencrabs session get <id>` | Show session details and recent messages |
| `opencrabs session set-model <provider/model> [target]` | Non-interactive model switch: target by id prefix, `--name "<title match>"`, or `--all` (non-archived sessions). The pair splits on the first slash, so `openrouter/tencent/hy3:free` works. A running instance applies it on each session's next message |
| `opencrabs db init` | Initialize database |
| `opencrabs db stats` | Show database statistics |
| `opencrabs db clear` | Clear all sessions and messages (`--force` to skip confirmation) |
| `opencrabs cron add\|list\|remove\|enable\|disable\|test` | Manage scheduled cron jobs |
| `opencrabs logs status\|view\|clean\|open` | Log management |
| `opencrabs service install\|start\|stop\|restart\|status\|uninstall` | OS service management (launchd on macOS, systemd on Linux) |
| `opencrabs daemon` | Run in headless daemon mode — channels only, no TUI |
| `opencrabs completions <shell>` | Generate shell completions (bash, zsh, fish, powershell) |
| `opencrabs migrate <source>` | Migrate from OpenClaw or Hermes. Scans the system, shows interactive picker, spawns agent to handle migration. `--dry-run` to preview |
| `opencrabs version` | Print version and exit |

Global flags: `--debug` (enable file logging), `--config <path>` (custom config file), `--profile <name>` / `-p <name>` (run as a named profile).

### Debug Logging

OpenCrabs writes structured debug logs to files when debug logging is active. Two ways to turn it on:

| Method | How | Can be turned off? |
|--------|-----|--------------------|
| CLI flag | Launch with `--debug` | No, stays on for the process lifetime |
| Config toggle | Set `debug_logs = true` under `[agent]` in `config.toml` | Yes, flip back to `false` and it hot-reloads live |

**Precedence:** the two are ORed. If `--debug` is set, debug logging stays on regardless of the config value. A config edit setting `debug_logs = false` cannot silence an operator who launched with the flag. If only the config toggle is set, flipping it back to `false` turns logging off immediately, no restart needed.

**Where logs land:** `~/.opencrabs/logs/` by default. Override the directory with the `DEBUG_LOGS_LOCATION` env var.

**Hot-reload:** edit `debug_logs` in `config.toml` (or ask the agent to flip it via `config_manager`) and the change takes effect on the next event. No restart required.

### Brain Files — One File, One Job

OpenCrabs's behavior lives in plain-markdown **brain files** in `~/.opencrabs/`. Each file owns exactly **one kind of content**, so a rule lives in one place and never drifts out of sync. The agent — and its self-improvement engine — route every learning to the file that owns it.

| File | Owns | Scope | In context |
|------|------|-------|-----------|
| **SOUL.md** | Who you are — **personality / voice** (how the agent *sounds*) | Generic | Always |
| **USER.md** | Facts about your human — identity, role, preferences | Personal | Always |
| **AGENTS.md** | Workspace process **+ the enforced hard rules** (safety/permission gates: never delete/push/email without approval) | Generic | **Always** |
| **MEMORY.md** | What the agent has *learned* — facts, corrections, lessons | Personal | On demand · main session only |
| **CODE.md** | How code is written — standards, testing, your language/framework preference | Generic | On demand |
| **TOOLS.md** | Tools — access, skills, commands | Generic | On demand |
| **SECURITY.md** | Security policy — code review, network, data, credentials | Generic | On demand |
| **BOOT.md** | Startup + runtime — boot steps, memory-save triggers, upgrade/evolve, running as a service | Generic | On demand |

**Loading is lazy, but the gates are always on.** Three files are injected on every turn — and survive new sessions and context compaction: `SOUL.md` (personality), `USER.md` (who you're helping), and `AGENTS.md` (the enforced hard rules). Everything else is listed in an "Available Context Files" index and pulled with the `load_brain_file` tool only when a task needs it — saving 10–20k tokens per turn. The hard rules live in always-loaded AGENTS (not in on-demand files) precisely so they can never be silently dropped; `MEMORY.md` is personal and loads only in your **main session**, never in shared/group chats.

<!-- opensource-radar:truncated -->
