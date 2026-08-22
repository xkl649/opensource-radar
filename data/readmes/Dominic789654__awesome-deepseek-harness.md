<p align="center">
  <img src="./assets/deepseek-logo.svg" alt="DeepSeek" height="48">
</p>

# Awesome DeepSeek Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of **plugins, skills, MCP servers, patch/profile layers, orchestrators, aggregators & UIs** for **DeepSeek Harness (DSH)** — DeepSeek's official agent runtime built around the idea **`Model + Harness = Agent`**.

**English** | [简体中文](./README.zh-CN.md)

DeepSeek Harness ("DSH") is DeepSeek's agent runtime / harness layer — the "hands" that turn the model's reasoning into real actions (context management, tool-call orchestration, execution sandbox, feedback loop, session persistence). Its defining feature is an **open plugin ecosystem**: the community contributes plugins, skills, MCP servers, orchestrators, aggregators, and UIs.

This list collects the best of that ecosystem. Contributions welcome — see [Contributing](#contributing).

> **Tip for authors:** DeepSeek asks plugin repositories to carry the **`#dsh`** GitHub topic so they can be discovered. Add it to your repo, then open a PR here.

![DeepSeek Harness ecosystem map](./assets/dsh-ecosystem.svg)

## Quick Start

```bash
# Launch the DSH Web UI
npx @deepseek-ai/dsh web

# Install a community plugin (from this list) into your profile
dsh plugin --profile web add "github:owner/repo#main"
```

Before installing, confirm the target repo carries the **`#dsh`** GitHub topic so the community hub can index it.

## Contents

- [Official](#official)
- [Profiles & Patch Layers](#profiles--patch-layers)
- [Harnesses & Runtimes](#harnesses--runtimes)
- [Security & Permissions](#security--permissions)
- [Session & Memory Management](#session--memory-management)
- [Cost & Usage Tracking](#cost--usage-tracking)
- [Channel / IM Bridges](#channel--im-bridges)
- [Plugin Marketplaces & Ecosystem](#plugin-marketplaces--ecosystem)
- [Visualization](#visualization)
- [Slides / PPT](#slides--ppt)
- [Coding](#coding)
- [Agents](#agents)
- [Loops (Auto-Research, Self-Improve, etc.)](#loops-auto-research-self-improve-etc)
- [MCP Servers](#mcp-servers)
- [Orchestrators & Aggregators](#orchestrators--aggregators)
- [UI / Clients](#ui--clients)
- [Skills](#skills)
- [Resources](#resources)
- [Contributing](#contributing)

---

## Official

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — DeepSeek's official agent runtime framework (`Model + Harness = Agent`); an "everything is a plugin" architecture built on Cordis (TypeScript, MIT).  `⭐38238`
- [deepseek-ai/awesome-deepseek-integration](https://github.com/deepseek-ai/awesome-deepseek-integration) — Official curated list of DeepSeek API integrations.  `⭐38654`
- [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) — Official list of agents/harnesses with DeepSeek support.  `⭐5426`

## Profiles & Patch Layers

_DSH's core composition mechanism: a **profile** stacks bundle patch layers, then your own `cordis.patch.yml` (profile-level, then `$DSH_HOME`-level, then `--patch` overlays) — letting you reshape the whole plugin tree without forking. This is the layer where **task-specialized runtime configurations** live: a long-horizon profile, a math-reasoning profile, a slides-editing profile are all just a different bundle stack + patch, not a different codebase. Tools and harnesses that operate at this layer (share/export a profile, or run DSH as a specialized backend under a task-specific patch) belong here rather than under generic plugins._

- [asdf17128/dshp](https://github.com/asdf17128/dshp) — Manage DeepSeek Harness profiles: list, create, clone, diff, and share a whole `dsh` setup (plugin versions + bundle order + patch) as one portable file.
- [geohotstan/dsh-tabula-rasa-preset](https://github.com/geohotstan/dsh-tabula-rasa-preset) — Blank slate preset for DeepSeek Harness. Create your own adventure.
- [AMAP-ML/LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness) — Long-horizon computer-use harness with a DSH adapter: runs `dsh --profile headless` under an isolated `DSH_HOME` with role-scoped patches (`workspace-write` for executors, `read-only` for Manager/auditors) — a concrete example of a task-specialized DSH profile.

- [duyanta123/dsh-preset-scaffold](https://github.com/duyanta123/dsh-preset-scaffold) — DSH agent preset: scaffold a standardized, runnable, verifiable project skeleton from scratch (architect persona + six template assets + a strict bootstrap flow).
- [light051001/dsh-preset-qa-mode](https://github.com/light051001/dsh-preset-qa-mode) — Ask-first DSH agent preset based on Standard: exhaustive structured clarifying questions (nine dimensions, max 5 rounds, interruptible) with a confirmation gate before any execution; plan-first for complex tasks.
- [Jungod1121/dsh-anchored-standard](https://github.com/Jungod1121/dsh-anchored-standard) — Two-phase DSH preset: a minimal-aligned bootstrap (bash + read), then full Standard tools after the first tool call or reply.
- [ZRui-C/dsh-minimal-first-turn](https://github.com/ZRui-C/dsh-minimal-first-turn) — Installable Web bundle for a Minimal-compatible root-session first request, then restores the selected preset after the first tool call or reply; includes a persistent composer toggle.
- [songoao25/virtual-product-team](https://github.com/songoao25/virtual-product-team) — Product Team Mode — a DSH agent preset: boss-style conversation with a virtual product team (PM → Engineer → QA → Release) from idea to shipped product.
- [qwe225380/dsh-omni-router](https://github.com/qwe225380/dsh-omni-router) — Omni Router: an intelligent orchestration preset that routes tasks by complexity and thinking mode (spec/react/balanced), auto-collects project context, and adds Plan Mode, TDD, delivery-gate, Git workflow, and acceptance-checklist guidance. Supports `dsh plugin add dsh-omni-router`.


- [AythyaCrispus/dsh-minimal-msys2](https://github.com/AythyaCrispus/dsh-minimal-msys2) — Windows Minimal Mode: persistent bash + str_replace_editor plugin — registers an agent preset, provides a working persistent-bash backend on Windows, and exposes a GUI-editable bash path in the plugin-settings section (persisted via the credentials domain).
- [CeilCelia/dsh-eli-mode](https://github.com/CeilCelia/dsh-eli-mode) — Eli Mode: an agent preset for DeepSeek Harness built around wiki-driven long-term memory and skills, on an extremely minimal Harness setup.
- [LiFenrir/dsh-scenario](https://github.com/LiFenrir/dsh-scenario) — Scenario-management plugin: bundle persona + model + permissions into named scenarios (dev / wiki / personal), one-click hot-switch from the settings page.
- [Saikel-Orado-Liu/dsh-coding-agent-preset](https://github.com/Saikel-Orado-Liu/dsh-coding-agent-preset) — Windows-adapted DSH coding-agent preset with persistent PowerShell 7 (pwsh) and str_replace_editor, mirroring the official minimal preset.
- [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) — Soul.md persona for DeepSeek Harness: a persona-card plugin (人设卡) that gives your agent a persistent character.
- [delightedMaster/dsh-anchored-standard-windows](https://github.com/delightedMaster/dsh-anchored-standard-windows) — Windows Anchored Standard agent preset for DeepSeek Harness with on-demand tools and Skills.
- [delightedMaster/dsh-subprocess-win32](https://github.com/delightedMaster/dsh-subprocess-win32) — Windows subprocess Cordis runtime and Minimal/Anchored Standard presets for DeepSeek Harness.
- [brunhildzhou/dsh-all-warmup](https://github.com/brunhildzhou/dsh-all-warmup) — Global frictionless warm-up layer plugin for DeepSeek Harness: the first turn of any session auto-warms up, full mode resumes from the second turn on.
- [jiatong-lab914/obsidian-knowledge-mode](https://github.com/jiatong-lab914/obsidian-knowledge-mode) — DSH agent preset for a portable, AI-native knowledge system on Obsidian: anti-hoarding Layer 0, 80/20 distillation into Context/Claim, verifiable update loops, four read-only role agents, a source gate hook, and a zero-content starter template.
- [alllllllllli/Living-Dream-DSH](https://github.com/alllllllllli/Living-Dream-DSH) — Complete DSH desktop config framework: 8+ MCP servers (computer-use, browser, memory, OCR, vision, history, markitdown, os-copilot), free model channels (AMD Radeon Cloud, DeepSeek v4-flash/v4-pro), mobile remote via Tailscale, vision patches (GLM-4V-Flash → Ollama fallback), and a one-click installer (PowerShell + offline 120 MB SFX). MIT.
- [JingMox/learner-preset](https://github.com/JingMox/learner-preset) — First-principles learning assistant preset for DeepSeek Harness: knowledge components with decaying mastery, an analogy lifecycle, and a prediction ledger.
- [hackerFish/awesome-dsh-presets](https://github.com/hackerFish/awesome-dsh-presets) — Tested DeepSeek Harness presets & rules: official-derived + original combos, every preset passes structure and package-existence validation (Chinese-first).
- [orziz/odai](https://github.com/orziz/odai) — Profile-wide DSH governance and routing bundle with a separately installable session-scoped Agent preset; compatible with DSH 0.1.0-rc.6 and 0.1.0-rc.7.

- [JohnXu22786/hooks-adapter](https://github.com/JohnXu22786/hooks-adapter) — Hooks-config compatibility layer for dsh: reads hooks from .claude/settings.json, .codex/hooks.json, opencode.json and maps their lifecycle events to dsh extension points, running shell/webhook/oracle/proxy handlers.
- [Asher-2000/dsh-expert-mode](https://github.com/Asher-2000/dsh-expert-mode) — DSH expert-mode agent preset: a chief-coordinator persona plus 11 domain-expert subagents.
- [Socialist-Sister/dsh-survival-mode](https://github.com/Socialist-Sister/dsh-survival-mode) — DeepSeek Harness Survival Mode: a playful agent preset mixing Minecraft survival rules with real coding work.
- [baihejiangnan/dsh-plugin-pack-web](https://github.com/baihejiangnan/dsh-plugin-pack-web) — DeepSeek Harness plugin pack: one-click Profile/Web replication (DSH Plugin Pack).
- [hili986/dshpack](https://github.com/hili986/dshpack) — Export a dsh scenario into an installable, shareable, auditable pack, then install that pack as a standard dsh profile.
- [Kaalia0912/dsh-whale-musume-persona](https://github.com/Kaalia0912/dsh-whale-musume-persona) — Global whale-girl persona plugin for DeepSeek Harness.
- [xingyingyuzhui/dsh-agent-identity](https://github.com/xingyingyuzhui/dsh-agent-identity) — Claw identity files for DeepSeek Harness: bakes SOUL / AGENTS persona files into the prompt.
- [xingyingyuzhui/dsh-claw-suite](https://github.com/xingyingyuzhui/dsh-claw-suite) — Claw Agent governance suite for DeepSeek Harness: persona, permissions, gates, delegation, and memory.
- [KannaKuron/dsh-ptc-cordis-preset](https://github.com/KannaKuron/dsh-ptc-cordis-preset) — A creative mode built on top of PTC: DSH preset that composes Code Mode tool orchestration with self-referential Cordis tools and preset authoring guidance, materialized as the 'ptc-cordis' user preset.
- [Feiyang1997/dsh-preset-minimal-pwsh](https://github.com/Feiyang1997/dsh-preset-minimal-pwsh) — DeepSeek Harness Windows minimal-mode agent preset: two tools (pwsh + str_replace_editor), built-in plugins only.
- [ztlovelsw/dsh-model-profile](https://github.com/ztlovelsw/dsh-model-profile) — Manually or automatically configure model thinking effort, context window, and max output tokens.
- [NIU-001-LIU/dsh-win-minimal](https://github.com/NIU-001-LIU/dsh-win-minimal) — Windows minimal agent preset for DeepSeek Harness: one-line fixed persona, three tools, no runtime context. Installs via dsh plugin add.
- [Freakz2z/dsh-catgirl-plugin](https://github.com/Freakz2z/dsh-catgirl-plugin) — A token-efficient persona runtime for DeepSeek Harness.
- [zhy201810576/dsh-zh-reasoning](https://github.com/zhy201810576/dsh-zh-reasoning) — Makes DeepSeek Harness's reasoning and final answers default to Simplified Chinese.
- [chaserchan/dsh-plugin-global-prompt](https://github.com/chaserchan/dsh-plugin-global-prompt) — A global-prompt textarea in Settings > General, injected into every conversation system prompt.
- [peterwangze/dsh-reasoning-level](https://github.com/peterwangze/dsh-reasoning-level) — Unified default reasoning level (thinking effort) for all models: per-model defaults with capability probing, live call statistics, one-command install via dsh plugin.
- [zhangdong456/dsh-prompt-presets](https://github.com/zhangdong456/dsh-prompt-presets) — Prompt Presets to manage your library.
- [SLAPaper/dsh-self-checking-profile](https://github.com/SLAPaper/dsh-self-checking-profile) — A drop-in dsh web profile that adds the Self Checking sandbox mode to DeepSeek Harness (dsh).
- [lynsucceed/dsh-openclaw-persona](https://github.com/lynsucceed/dsh-openclaw-persona) — Reuse OpenClaw persona files (SOUL/IDENTITY/USER/MEMORY/TOOLS.md) as the DSH agent persona, with a Web GUI editor — edit the .md files in the sidebar and the change takes effect on the next request.

## Harnesses & Runtimes

_DeepSeek-native or DeepSeek-first agent harnesses / coding agents, plus runtime-level infrastructure (diagnostics, ops, session management, approval policies)._

- [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) — 1-Line AI Agent Scaffolding Generator for DeepSeek Harness (dsh): `npx create-dsh-app my-agent` scaffolds a production-ready agent pre-wired with MCP tools, long-term memory, and web browsing.
- [wwkk214222208/StageCraft](https://github.com/wwkk214222208/StageCraft) — Self-hosted, plugin-based multi-character roleplay runtime with a web creator workbench (a friendlier alternative to SillyTavern). Runs standalone, as a DSH plugin (via a `dsh-rp` Cordis adapter shell), or as an Android APK; uses DSH to assist script/scene editing.
- [gehennawu/dsh-service](https://github.com/gehennawu/dsh-service) — Self-hosted operations plugin for DSH Web: safe restart/recovery, health diagnostics, model usage/error stats, backups, and Linux permission repair.
- [bright-y/dsh-restart](https://github.com/bright-y/dsh-restart) — One-click restart button for DeepSeek Harness (DSH Desktop).
- [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) — DeepSeek Harness network diagnostics, proxy detection and repair for Windows/WSL/macOS.
- [wizzy-yang/dsh-updater](https://github.com/wizzy-yang/dsh-updater) — DSH auto-update plugin — detects official deepseek-ai/deepseek-harness releases, one-click npm upgrade + auto restart from the sidebar.
- [WTStarMark/DSH-QAQ](https://github.com/WTStarMark/DSH-QAQ) — Startup disaster-recovery guard for DeepSeek Harness (DSH), paired with the dsh-qaq backup plugin: headless Chrome reads the real browser DOM, detects host crashes and Web UI red-screens, auto-rolls back to the last-good config and safely restarts, with anti-loop protection. Full-screen TUI covering startup, logs, plugin management, and hot-update monitoring — zero-intrusion, one-command deploy.
- [krystal-cao/deepseek-harness-desktop](https://github.com/krystal-cao/deepseek-harness-desktop) — Unofficial desktop wrapper for DeepSeek Harness: local-first, sandbox-isolated, with built-in dsh version management and plugin management, auto-update, and desktop task-completion notifications (macOS).
- [huiliyi37/oh-my-tianshu](https://github.com/huiliyi37/oh-my-tianshu) — A full-featured open-source coding agent distribution built on top of the dsh harness, adding vision, cross-session memory, verification gates, agent routing, semantic + graph code search, file rollback, and a full-screen terminal UI — all composed as plugins. A friendly MIT fork of DeepSeek Harness (dsh) that keeps the upstream everything-is-a-plugin architecture, with a UI/UX modeled on oh-my-pi.
- [jhuanxx44/dsh-sseye](https://github.com/jhuanxx44/dsh-sseye) — The LLM debug console inside DeepSeek Harness: captures every model call, semantic diff, Replay & Mutate.
- [frank6com/obsidian-harness-like](https://github.com/frank6com/obsidian-harness-like) — An Obsidian desktop implementation inspired by DeepSeek Harness: run a Cordis plugin system and an AI agent inside the Obsidian desktop app. The agent reads/writes your notes through approvals; you (or the agent) can create Cordis plugins in conversation to extend commands, tools & panels.
- [songying2024/dsh-plugin-lingxi](https://github.com/songying2024/dsh-plugin-lingxi) — Imports DeepSeek Harness session records and workspace artifacts as new tasks for 灵犀 (Kingsoft Office WPS) to pick up.
- [UllrAI/dsh-mqtt](https://github.com/UllrAI/dsh-mqtt) — MQTT protocol driver and agent worker gateway for DSH.
- [YaoaY/dsh-gpt-compat](https://github.com/YaoaY/dsh-gpt-compat) — Fail-closed GPT/Codex sandbox escalation compatibility for DeepSeek Harness.
- [IslandManSwevo/deepseek-harness-tailscale](https://github.com/IslandManSwevo/deepseek-harness-tailscale) — Run your DeepSeek Harness (dsh) web UI securely from any device over Tailscale - zero-config launcher, WebSocket-safe reverse proxy, built-in file viewer.
- [modred522/dsh-manager](https://github.com/modred522/dsh-manager) — Windows desktop manager for DeepSeek Harness (dsh): tray-resident, one-click start/stop/update, plugin marketplace and smart analytics, token usage stats.
- [Alvinpro/DSH-Launcher](https://github.com/Alvinpro/DSH-Launcher) — A single-file Windows launcher for the dsh (DeepSeek Harness) web UI. Double-click to start; close the browser and the whole process tree is torn down — no terminal to babysit, no leftover node processes holding the port, no console flash.
- [orrinzeng/dsh-cursor-subscription](https://github.com/orrinzeng/dsh-cursor-subscription) — Log directly into your Cursor account within DeepSeek Harness and use your Cursor subscription — no API Key required, and no dependency on Cursor IDE or Cursor CLI.
- [zhangxiubo/dsh-llm-chatgpt-oauth](https://github.com/zhangxiubo/dsh-llm-chatgpt-oauth) — ChatGPT Plus/Pro OAuth model provider for DeepSeek Harness using pi-ai openai-codex.
- [chiyulogg-commits/deepseek-harness-zh-tw](https://github.com/chiyulogg-commits/deepseek-harness-zh-tw) — Traditional Chinese (Taiwan) locale edition of DeepSeek Harness: adds a third UI language option with Taiwan terminology across all 25 web UI packages.
- [eya46/dsh-plugins](https://github.com/eya46/dsh-plugins) — Personal plugin collection for dsh projects.
- [bozhang1214/dsh-ai-brief](https://github.com/bozhang1214/dsh-ai-brief) — DeepSeek Harness plugin tagged dsh / dsh-plugin / dsh-plugins (upstream provides no further description).
- [LuckVd/dsh-btw](https://github.com/LuckVd/dsh-btw) — DeepSeek Harness client plugin tagged deepseek-harness / dsh-client / dsh-plugin (upstream provides no further description).
- [a792883583/dsh-cron-panel](https://github.com/a792883583/dsh-cron-panel) — DSH web GUI scheduled-tasks panel: sidebar management of DSH and system (crontab) tasks with natural-language creation and execution logs.
- [birat-chapagain/dsh-codex-oauth](https://github.com/birat-chapagain/dsh-codex-oauth) — DeepSeek Harness plugin: use your OpenAI Codex (ChatGPT Plus/Pro) subscription through OAuth.
- [ChenZeiShuai/ZeishuaiDeepSeekHarness](https://github.com/ChenZeiShuai/ZeishuaiDeepSeekHarness) — Personal derivative build of DeepSeek Harness geared toward C#, C/C++, Python, and TypeScript development.
- [shawnyhu/DSH-Launcher](https://github.com/shawnyhu/DSH-Launcher) — Windows tray launcher, installer, and version manager for DeepSeek Harness.
- [Zeno2019/dsh-flightdeck](https://github.com/Zeno2019/dsh-flightdeck) — Electron desktop launcher for DeepSeek Harness, bundling a pinned DSH runtime and curated plugins for Windows and macOS.
- [dsh-ssh/dsh-ssh](https://github.com/dsh-ssh/dsh-ssh) — SSH remote workspaces for DeepSeek Harness — run bash, file, and search tools on any remote machine.
- [thinkmoon/dsh-gateway](https://github.com/thinkmoon/dsh-gateway) — DSH plugin: authenticated reverse proxy that turns remote access into plain local traffic (Host rewritten, Origin stripped) — password-gated, WebSocket-tunneled, zero runtime deps.
- [a554878526/dsh-debug-mode](https://github.com/a554878526/dsh-debug-mode) — Runtime-first Debug Mode plugin for DeepSeek Harness.
- [striveh/dsh-llm-call-inspector](https://github.com/striveh/dsh-llm-call-inspector) — Local request and response inspector for session-associated DeepSeek Harness LLM calls.
- [StefanIsMe/dsh-updater-plugin](https://github.com/StefanIsMe/dsh-updater-plugin) — Agnostic draft-preserving self-update system for DeepSeek Harness.
- [JohnXu22786/rss-digest](https://github.com/JohnXu22786/rss-digest) — RSS/Atom digest plugin for DeepSeek Harness (dsh bundle): subscribe, fetch on schedule, dedupe, LLM summaries, daily Markdown briefings.
- [myflx/hundun-dsh](https://github.com/myflx/hundun-dsh) — Personal DSH plugin/skill toolkit (dsh-plugin, dsh-plugins).
- [nmbzth/dsh_update_check](https://github.com/nmbzth/dsh_update_check) — dsh_update_check is a dsh plugin that automatically checks for diffs against the official upstream dsharness repo and prompts for updates.
- [onewilk/dsh-updater](https://github.com/onewilk/dsh-updater) — DeepSeek Harness update-check plugin: NEW badge alerts + About tab + GitHub acceleration switch.
- [piggy00544/dsh-upgrade-kit](https://github.com/piggy00544/dsh-upgrade-kit) — DSH upgrade kit bundling cost tracking (dsh-cost), file preview, research-mcp, and vision-bridge; installs all four with one command.
- [polaris-smart/dsh-devices](https://github.com/polaris-smart/dsh-devices) — Turn your devices into a fleet — a dph plugin for decentralized multi-device collaboration: mDNS discovery, key pairing, SSH direct exec. Tools auto-register for dph agents.
- [fancr-code/dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) — Windows desktop tray launcher for DeepSeek Harness: run `dsh web` windowless, shortcut + system tray (open UI / logs / quit-all), one-click install.
- [hibays/dshl](https://github.com/hibays/dshl) — Minimal desktop shell for DeepSeek Harness: single EXE, <=4MB, launch-and-go; auto-reuses or self-installs/updates local dsh, fully configurable startup; UI layer is destroyed on tray-minimize to keep memory tiny while dsh keeps running as a background service, ready to be recalled anytime.
- [IoveCelestina/dsh-lifeboat](https://github.com/IoveCelestina/dsh-lifeboat) — Out-of-process safe boot, failure isolation, and recovery UI for DeepSeek Harness profiles.
- [KYinCode/dsh-hooks-plugin](https://github.com/KYinCode/dsh-hooks-plugin) — Claude Code-style DSH hooks: run shell commands on agent/tool lifecycle events via `.dsh/hooks.json`.
- [liuwenji007/dsh-muyu](https://github.com/liuwenji007/dsh-muyu) — deepseek-harness, dsh, dsh-plugin (upstream description limited to topic tags).
- [NelsonLongxiang/dsh-prompt-templates](https://github.com/NelsonLongxiang/dsh-prompt-templates) — dsh-prompt-templates (no further description provided upstream).
- [hxs996-beep/deepAct](https://github.com/hxs996-beep/deepAct) — Terminal AI coding agent built for DeepSeek that guards every action: ambiguity check, design review, scope control, team mode, parallel sub-agents, and MCP support.
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) — Large plugin collection (700+) for DSH that registers only through extension seams, without modifying the agent-loop core.  `⭐24`
- [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) — Minecraft-Fabric-style hook processor for DSH.
- [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) — Read-only, zero-dependency session health check: frame-level scanning of multi-frame zstd session files to detect torn/corrupted/empty sessions; registers a `session_health` tool.
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) — Local security audit plugin: read-only, redacted risk report covering config, plugin sources, sessions, and network exposure.
- [lanbaolu/dsh-fail-soft](https://github.com/lanbaolu/dsh-fail-soft) — Automatic plugin-failure isolation for DeepSeek Harness: a bad plugin gets quarantined while the rest of the bundle assembles and starts normally, with a management/recovery UI and self-healing kernel patch.
- [LvDAO/dsh-exec-extension](https://github.com/LvDAO/dsh-exec-extension) — An exec extension for the headless dsh runner allowing more flags, etc.
- [ningmengxr/dsh-task-control](https://github.com/ningmengxr/dsh-task-control) — DeepSeek Harness plugin: one-click emergency stop for stuck pip/GitHub downloads, download-progress detection, stall detection, and invisible append conditions.
- [wangxing-git/dsh-tool-workspace](https://github.com/wangxing-git/dsh-tool-workspace) — DeepSeek Harness workspace-management toolset: view, register, rename, and delete workspace records (registry-only, never touches on-disk directories); destructive operations (unregister, change registered path) go through user approval, fail-closed.
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) — Context-injection audit: measures the token cost of the AGENTS.md instruction chain, skill catalog, and tool schemas, and detects duplication and conflicts; Web UI ring panel plus a `context_audit` tool.
- [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) — flutter-doctor-style diagnostics and repair covering install-level and in-harness checks, with safe auto-fixes; repository-plugin format.
- [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) — Auto-detects bash output encoding (UTF-16LE/UTF-8/GBK, etc.) and decodes it correctly, fixing garbled non-ASCII output on WSL/Windows.
- [vlln/plugin-registry](https://github.com/vlln/plugin-registry) — Ecosystem infrastructure: a thin browser console for managing repository plugins (zero patches) plus a `make-dsh-plugin` skill guiding plugin development.  `⭐13`
- [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) — Automated tool-call approval: an `auto` tier that classifies every tool call as allow/deny via rules plus an LLM classifier, with a status chip beside the composer.
- [zzh-newlearner/dsh-postmortem](https://github.com/zzh-newlearner/dsh-postmortem) — Local-first failure postmortems for DeepSeek Harness sessions.
- [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) — Telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP.
- [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) — Community extension catalog and profile-generation manager, adding transactional installation, recovery, catalog browsing, and a settings UI on top of official contracts.
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) — Ops toolbox: A/B dual-slot snapshot upgrades with atomic switch and one-click rollback, a watchdog that auto-restarts web/agent, and a self-rescue doctor command.
- [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) — Multi-device session handoff with PostgreSQL as the single online authority; only one device holds write credentials at a time.
- [Tieboyh/dsh-session-search](https://github.com/Tieboyh/dsh-session-search) — Index-free cross-agent session search for DeepSeek Harness.
- [21hbguo/dsh-thinking-counter](https://github.com/21hbguo/dsh-thinking-counter) — Thinking-phrase detection and statistics for DeepSeek Harness: full-session reasoning-phrase hit counts, grouping, and a "smartness" score.
- [KYinCode/dsh-hot-installer](https://github.com/KYinCode/dsh-hot-installer) — Hot plugin manager for DeepSeek Harness (dsh): install once, restart once, then install/remove/upgrade plugins take effect instantly without further restarts.
- [lzx-Bill/dsh-plugins](https://github.com/lzx-Bill/dsh-plugins) — Open-source community plugins for DeepSeek Harness, built with TypeScript and Cordis.
- [openrect/dsh-community-installer](https://github.com/openrect/dsh-community-installer) — Unofficial community installer for `@deepseek-ai/dsh` on Windows.
- [chenyinrusi/dsh-updater](https://github.com/chenyinrusi/dsh-updater) — One-command external updater/repair tool for DeepSeek Harness on Windows: git fetch, merge upstream, pnpm install, build and typecheck; pip-installable, auto-elevates, works around the pnpm symlink EPERM crash.
- [dongsheng123132/u-dsh-deepseek-harness-portable](https://github.com/dongsheng123132/u-dsh-deepseek-harness-portable) — U-DSH Portable: DeepSeek Harness USB portable edition for Windows with a Xiapan Cloud device wallet.
- [huiruo/robbot](https://github.com/huiruo/robbot) — Personal AI platform powered by DeepSeek Harness.
- [Yukari316/dsh-toolcall-compat](https://github.com/Yukari316/dsh-toolcall-compat) — Fixes tool-call JSON-schema parsing errors that cause repeated bad tool calls when using custom-provider models in DSH, plus a long-wait toolcall skip feature.
- [Prism-Shadow/penguin-harness](https://github.com/Prism-Shadow/penguin-harness) — 🐧 Harness for RSI tuned for open models like DeepSeek: a deliberately minimal toolset over clean low-level interfaces, fewer tool calls and tokens; carries the `deepseek-harness` GitHub topic.
- [snow-The/dsh-ark-plan](https://github.com/snow-The/dsh-ark-plan) — Correctly activate DeepSeek V4 Flash on the Volcano Ark plan API for DeepSeek Harness: default config injection (reasoningEfforts + effort=max) plus an `ark_plan_doctor` self-check.
- [CH4ACKO3/the-binding-of-dsh](https://github.com/CH4ACKO3/the-binding-of-dsh) — Bidirectional DSH Connection and Typert Gateway integration.
- [Howe829/dsh-runtime](https://github.com/Howe829/dsh-runtime) — Runtime observability and relationship graph for DeepSeek Harness and Cordis.
- [LAN-TINA-WS/dsh-windows-shell-policy](https://github.com/LAN-TINA-WS/dsh-windows-shell-policy) — DeepSeek Harness Windows default shell policy: probes git-bash/MSYS2, a settings-panel one-click bash/pwsh switch, dynamic bash-tool registration, and trimmed prompt tool surface — a DSH composite plugin.
- [NOirBRight/dsh-llm-codex](https://github.com/NOirBRight/dsh-llm-codex) — ChatGPT Codex login, sortable catalog, and Fast models for DeepSeek Harness.
- [pawaca/dsh-edge](https://github.com/pawaca/dsh-edge) — Run DeepSeek Harness on Cloudflare Workers.
- [sunny0826/dsh-plugin-herdr](https://github.com/sunny0826/dsh-plugin-herdr) — Herdr control-plane plugin for DeepSeek Harness (DSH): observe and drive Herdr — a terminal workspace manager for AI coding agents — from DSH sessions.
- [shiyi-0x7f/dsh-tool-sysinfo](https://github.com/shiyi-0x7f/dsh-tool-sysinfo) — Read-only `system_info` tool plugin for DeepSeek Harness agents (OS/CPU/memory/network snapshot).
- [edusrez/dsh-smart-restart](https://github.com/edusrez/dsh-smart-restart) — Wakes the main agent after a DeepSeek Harness (DSH) restart so interrupted work resumes without the user prompting.
- [Moonweave-AI/cantilune](https://github.com/Moonweave-AI/cantilune) — A proposed general-purpose language and control substrate for agent orchestration, coordinating agents, tools, people, services, permissions, sessions, and scarce resources in one inspectable model; carries the `cordis`/`dsh` GitHub topics.
- [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) — Manual approval for tool calls (a "manual mode" / "ask mode" for DSH).
- [blissito/ghostycode](https://github.com/blissito/ghostycode) — DeepSeek V4 terminal coding agent and constitutional harness (Rust TUI with MCP and sub-agents).
- [bobleer/deepseek-harness-rust](https://github.com/bobleer/deepseek-harness-rust) — Rust implementation of DeepSeek Harness: layered crates for session log, turn/step loop, and DeepSeek SSE adapter.
- [didclawapp-ai/zagens](https://github.com/didclawapp-ai/zagens) — Open-source agent harness for DeepSeek V4.  `⭐13`
- [liubf21/ds-forge](https://github.com/liubf21/ds-forge) — Lightweight agent harness for DeepSeek V4.
- [Owen718/FlashCoder](https://github.com/Owen718/FlashCoder) — Simple harness for DeepSeek models.
- [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) — Logical-call context taxonomy plugin for DeepSeek Harness.
- [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) — Role-based LLM retry and fallback strategy plugin.
- [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) — Declarative deny-by-default tool policy plugin.
- [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) — Context undo/redo: roll the model context back to the last completed step and restore it again.
- [omdsh-dev/omdsh](https://github.com/omdsh-dev/omdsh) — Community experiment for organizing versioned DSH component sets and defaults in a reviewable, reproducible form.
- [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) — Headless execution layer reusing official Profile/Bundle/Cordis operations, adding deterministic plan/apply, candidate generations, and previous-generation recovery.
- [wangshunnn/oh-my-dsh](https://github.com/wangshunnn/oh-my-dsh) — A collection of DeepSeek Harness plugins.
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) — BepInEx-style mod injector: hot-injects local plugin packages into a running DSH web instance without patches or restarts.
- [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) — OpenAI Codex OAuth login and usage card plugin.
- [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) — Bridges Claude Code memory, skills, and config into DeepSeek Harness.
- [Gordonynh/dsh-plugin-codex-import](https://github.com/Gordonynh/dsh-plugin-codex-import) — Imports Codex conversation history into DSH.
- [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) — Codex provider plugin with OAuth login support.
- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) — Caches Codex subscription/usage state for DSH.
- [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) — Use third-party subscription accounts in DeepSeek Harness: chat, image understanding, image generation, and image editing with the models your subscription covers, with available models and reasoning levels synced from your account; currently supports OpenAI/ChatGPT subscriptions, more providers planned.
- [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) — Switch between different assistant output styles.
- [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) — Adjusts model reasoning effort on the fly.
- [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) — Snapshot backup and WebDAV sync for DSH workspaces.
- [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) — Cron-style scheduled tasks with status monitoring.
- [Karuisawa-Mrs/dsh-plugins](https://github.com/Karuisawa-Mrs/dsh-plugins) — Community plugin collection for DSH.
- [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) — A second brain for your DeepSeek Harness agent — strong-model review before risky tool calls, plus 70 models from one wallet.
- [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) — Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it.
- [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) — Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backoff failover, and task-level orchestration.
- [KeepLost/harniverse](https://github.com/KeepLost/harniverse) — General pluggable coding-agent harness built on DeepSeek Harness, tuned to the author's personal workflow.
- [MonshinYu/dsh-bun-compat-patch](https://github.com/MonshinYu/dsh-bun-compat-patch) — Node-API compatibility layer for running DeepSeek Harness on Bun 1.3.14.
- [rugose-learnedprofession58/pi-dsh](https://github.com/rugose-learnedprofession58/pi-dsh) — Crash-consistent coding-agent runtime manager: durable session history, causal undo/redo, session replay, and approval-gated self-extension.
- [MayBeTheWorld/dsh-inherit](https://github.com/MayBeTheWorld/dsh-inherit) — Imports MCP servers and Skills from Claude Code / Cursor / Codex / cc-switch into DeepSeek Harness (Settings → General → import agent settings).
- [unStone/dsh-xray-plugin](https://github.com/unStone/dsh-xray-plugin) — Ask what a DeepSeek Harness plugin can actually do, from inside your agent; companion to dsh-xray.
- [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) — LLM-free lossless compaction engine for DeepSeek Harness.
- [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) — Relational-database persistence layer for DSH sessions.
- [rainforest888/dsh-plugins-raincode](https://github.com/rainforest888/dsh-plugins-raincode) — Model layer for DeepSeek Harness: model pool/cache/retry plus a `/skills` browser.
- [weijiafu14/dsh-remote-sandbox](https://github.com/weijiafu14/dsh-remote-sandbox) — Crash-resilient remote execution world for DeepSeek Harness: `ctx.fs`/`ctx.subprocess` over an E2B sandbox with heartbeat keep-alive, transparent recovery, and workspace sync.
- [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) — Fail-closed export-copy redaction for DeepSeek Harness session telemetry.
- [cnyac/dsh-polling](https://github.com/cnyac/dsh-polling) — Polling/scheduled-task plugin: cron scheduled tasks as real sessions, natural-language creation, model tools (`polling_*`), and a Web UI.
- [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) — Bridges DeepSeek Harness into Claude Code for review, critique, delegation, and session import.
- [khiqwq/dsh-system-proxy](https://github.com/khiqwq/dsh-system-proxy) — Host plugin for smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider/plugin rules, direct-first fallback with health memory.
- [lire1131/dsh-undo](https://github.com/lire1131/dsh-undo) — Snapshot & rollback for plugin/skin/settings configs: auto-save on change, undo/redo stack, snapshot manager panel, keyboard shortcuts, plus an offline PowerShell CLI & GUI that work even when DSH won't boot.
- [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) — Read-only environment-probe plugin for DeepSeek Harness: reports runtime environment, software versions, system resources, ports, services, hardware, and workspace info.
- [sleepinginsummer/dsh-rtk-optimizer](https://github.com/sleepinginsummer/dsh-rtk-optimizer) — RTK optimizer plugin for DeepSeek Harness.
- [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) — Bridges the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins.
- [wenliang9527/dsh-workspace](https://github.com/wenliang9527/dsh-workspace) — Workspace plugin for DeepSeek Harness.
- [biedongbin/dsh-claude-compat](https://github.com/biedongbin/dsh-claude-compat) — DSH plugin that bridges Claude Code's `.claude/` directory (skills, commands, rules) into DeepSeek Harness natively.
- [revive/dsh-git-credentials](https://github.com/revive/dsh-git-credentials) — Keeps GitLab and GitHub API tokens out of the model context — encrypted at rest (AES-256-GCM), tools on demand, web settings panel.
- [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) — Role-based model routing plugin for DeepSeek Harness: planner/subagent roles plus a settings card and composer summary.
- [omdsh-dev/dsh-coding](https://github.com/omdsh-dev/dsh-coding) — DeepSeek Harness coding plugin (no description provided upstream).
- [byhongyu/oh-my-dsh](https://github.com/byhongyu/oh-my-dsh) — Curated Coding, Research, and Investing agent setups for DeepSeek Harness.
- [Bernardxu123/dsh-plugins](https://github.com/Bernardxu123/dsh-plugins) — DeepSeek Harness (dsh) plugin bundle: dsh-sensenova-image for image generation plus dsh-vision for image understanding, install by cloning.
- [boxiaolanya2008/dsh-plugin](https://github.com/boxiaolanya2008/dsh-plugin) — A DeepSeek Harness plugin tool.
- [cnzgray/dsh-plugins](https://github.com/cnzgray/dsh-plugins) — A DeepSeek Harness plugin collection.
- [linqunxun/dsh-plugins](https://github.com/linqunxun/dsh-plugins) — DeepSeek Harness (DSH) client UI plugins collection.
- [MaimoryLab/dib](https://github.com/MaimoryLab/dib) — DSH-in-Box: a DSH runtime and plugin packager.
- [NIyueeE/dsh-container](https://github.com/NIyueeE/dsh-container) — DeepSeek Harness (dsh) container image: universal dev-container base, dsh auto-update on boot, compose + Quadlet examples.
- [Saktawdi/ha-orchestrator](https://github.com/Saktawdi/ha-orchestrator) — DSH dynamic Cordis plugin: model high-availability failover plus subagent orchestration for DeepSeek Harness.
- [wefio/dsh-plugin-audit](https://github.com/wefio/dsh-plugin-audit) — A DSH plugin audit tool.
- [Whning0513/deepseek-protocol-doctor](https://github.com/Whning0513/deepseek-protocol-doctor) — Offline DeepSeek protocol diagnostics and an installable DSH plugin for tool loops, reasoning_content, strict schemas, and SSE.
- [woshi-Tom/dsh-status-plugin](https://github.com/woshi-Tom/dsh-status-plugin) — DSH status plugin for conveniently checking host machine runtime status, easing troubleshooting during failures.
- [wxxb789/dsh-legion](https://github.com/wxxb789/dsh-legion) — Configurable multi-model subagent profiles for DeepSeek Harness.
- [ZhengQingJing/dsh-session-tree](https://github.com/ZhengQingJing/dsh-session-tree) — Git-like immutable session branching for DeepSeek Harness.
- [devmom/dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) — A DeepSeek Harness trajectory-debugging plugin.
- [mafeis/dsh-net-proxy](https://github.com/mafeis/dsh-net-proxy) — A network proxy plugin for DeepSeek Harness.
- [PandaColour/dsh-cmd-starter](https://github.com/PandaColour/dsh-cmd-starter) — Provides a command-line launcher for deepseek-harness, adding Claude-style flags like `--append-prompt` and `--resume`.
- [jiangrz77/DSHLauncher](https://github.com/jiangrz77/DSHLauncher) — A launcher for DeepSeek Harness.
- [AndPuQing/dsh-pi](https://github.com/AndPuQing/dsh-pi) — A DeepSeek Harness plugin (dsh-pi).
- [gyyxs88/dsh-subagent-codex](https://github.com/gyyxs88/dsh-subagent-codex) — A DeepSeek Harness plugin bridging Codex as a subagent.
- [bujue600-arch/dsh-testgen](https://github.com/bujue600-arch/dsh-testgen) — Automated unit-test generation for DeepSeek Harness: a `/testgen` command plus a `generate_tools` tool that scaffold, run, and fix unit tests until they pass.
- [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) — Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode.
- [4060415/Deepseek-harness-routing-layer-](https://github.com/4060415/Deepseek-harness-routing-layer-) — Smart model auto-routing plugin for DeepSeek Harness: automatically selects the best-fit model for each task.
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) — DSH-native HarmonyOS dev assistant: hdc device debug loop, bundled offline official knowledge (Tier-1), and a DevEco CLI build channel.
- [StyxNether/dsh-auto-approval](https://github.com/StyxNether/dsh-auto-approval) — Trusted Auto: a middle permission tier between workspace-write and danger-full-access, auto-approving harmless commands and trusted-area targets.
- [phelpsyacht/dshmath-manim](https://github.com/phelpsyacht/dshmath-manim) — Manim math-animation plugin for DeepSeek Harness.
- [saurtone/dsh-tool-somark](https://github.com/saurtone/dsh-tool-somark) — SoMark document parser tool (`somark_parse`) plugin for DeepSeek Harness.
- [niuniu-869/dsh-plugin-cas-kb](https://github.com/niuniu-869/dsh-plugin-cas-kb) — DeepSeek Harness bundle: article-level Chinese accounting standards (CAS/ASSE) and tax-law lookup, plus a skill that keeps citations anchored to source articles.
- [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) — A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, and plugin release workflows.
- [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) — Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support, Models-page card. Ported from pi-commandcode-provider (MIT).
- [nickhelion/dsh-qwen-token-plan-cn-responses](https://github.com/nickhelion/dsh-plugins/tree/main/packages/qwen-token-plan-cn-responses) — Qwen Token Plan CN Personal Responses API provider with official model/tool catalog sync, server-side built-in tools, DSH local functions, and image input.
- [040822/dsh-gzip](https://github.com/040822/dsh-gzip) — Enables gzip for `/api` responses, fixing history-loading timeouts (30s) on slow links.
- [LyleMi/dsh-codex-app-server](https://github.com/LyleMi/dsh-codex-app-server) — OpenAI Codex App Server agent provider for DeepSeek Harness.
- [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) — Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness.
- [TGYD-helige/dsh-pi](https://github.com/TGYD-helige/dsh-pi) — Runs trusted Pi extensions inside DeepSeek Harness through a compatibility host.
- [FengHuoLinShan/dsh-plugin-llm-balance](https://github.com/FengHuoLinShan/dsh-plugin-llm-balance) — Floating API balance ball plugin for DeepSeek Harness.
- [Niuniu-Sir/dsh-data-ledger](https://github.com/Niuniu-Sir/dsh-data-ledger) — Unified local data ledger for DeepSeek Harness: source/location/content summary for conversations, billing, skills, memory, and logs, with trash cleanup and browser-storage cleanup.
- [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) — Role-based LLM retry and fallback strategy plugin.
- [enoughpower/dsh-desktop-mac](https://github.com/enoughpower/dsh-desktop-mac) — Lightweight macOS build of DeepSeek Harness Desktop.
- [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) — Structural observability layer: real tool/skill usage recording (tools/result), skill-catalog audit, and a watchdog — no model self-reporting.
- [Gu-ZT/dsh-auxiliary](https://github.com/Gu-ZT/dsh-auxiliary) — Auxiliary models for DeepSeek Harness: vision understanding and context compression through dedicated model routes.
- [xiaohj233/dsh-keepalive](https://github.com/xiaohj233/dsh-keepalive) — Opt-in detached watchdog for the DSH Web process with snapshot-checked repair and explicit patch restoration.
- [Zhuchen00123/dsh-wsl-modes](https://github.com/Zhuchen00123/dsh-wsl-modes) — WSL modes for DSH on Windows: WSL Linux bash + bubblewrap sandbox with two ready-to-use agent presets.
- [sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) — Real Minimal mode on Windows: the missing win32 process inspector (persistent Git Bash shell), Ctrl-C interrupt injection, and an install-trap doctor.
- [strukto-ai/mirage#dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) — Swaps the filesystem and bash providers for a mirage virtual workspace: file tools and shell commands run over mounted resources (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) instead of the host disk, with per-mount read/write/exec modes, per-command sandbox routing (monty, pyodide, quickjs in process; docker, e2b, daytona remote), and installed CLIs (git, gh, slack, linear, ntn, gws, or one you register) as head words in the virtual terminal.
- [ArmyWas/dsh-plugin-reducer](https://github.com/ArmyWas/dsh-plugin-reducer) — Finds a 1-minimal DeepSeek Harness plugin set that reproduces a profile failure.
- [BYYY-eng/deepseek-harness-file-upload-ocr-plugin](https://github.com/BYYY-eng/deepseek-harness-file-upload-ocr-plugin) — File upload and local OCR plugin for PDF, Word, Excel, PowerPoint, images, and text files.
- [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) — Visual MCP management plugin for DeepSeek Harness: view installed/enabled MCP servers under Settings → MCP, add/remove, enable/disable, and see live connection status.
- [LouisHaoL/dsh-timer-agent](https://github.com/LouisHaoL/dsh-timer-agent) — Host-resident scheduled-jobs × AI-agent engine (hermes-agent cron inspired): a 60s ticker fires real agent sessions via cron, with pinned-session / project-workdir / default-workspace targeting, a `timer_agent` model tool, and a web board.
- [lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) — GitHub Copilot LLM provider plugin for DeepSeek Harness.
- [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) — A library for patching, replacing, and decorating DSH plugins at runtime.
- [nefevcore/dsh-adt](https://github.com/nefevcore/dsh-adt) — ABAP Development Tools (ADT) plugin for DeepSeek Harness.
- [shizhonggang/dsh-harmonyos](https://github.com/shizhonggang/dsh-harmonyos) — DeepSeek Harness OpenHarmony adaptation suite: install/upgrade scripts, idempotent patches, launchers, and platform docs for HarmonyOS PCs.
- [ZeroMadLife/boss-watch-agent](https://github.com/ZeroMadLife/boss-watch-agent) — Approval-gated local job-search agent and DeepSeek Harness plugin with SQLite tracking, bounded browser observation, and Feishu projection.
- [zoahdev/dsh-readme-forge](https://github.com/zoahdev/dsh-readme-forge) — Generates README.md for DeepSeek Harness (dsh) plugin repositories from package.json + cordis.patch.yml + source layout — deterministic, zero runtime deps, read-only by default; CLI + agent-callable `readme_forge` tool.

- [cinob/dsh-plugin-custom-provider-enhancer](https://github.com/cinob/dsh-plugin-custom-provider-enhancer) — Custom-provider enhancer: when configuring third-party providers, auto-fills context size, token limits, vision/multimodal input and thinking-strength tiers from an authoritative model library.
- [dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) — Auxiliary models for DeepSeek Harness: vision understanding and context compression through dedicated model routes.
- [wqy8593521/dsh-model-pro](https://github.com/wqy8593521/dsh-model-pro) — Model Pro — settings-page UI for managing llm-pi-ai providers: create/delete/edit baseURL·api·apiKeyEnv·custom headers, enable/disable, and batch pull remote models with select-all/invert.
- [edynasty/dsh-opencode-go-provider](https://github.com/edynasty/dsh-opencode-go-provider) — OpenCode Go provider plugin for DSH.
- [RoyougiShiki/dsh-restart-systemd](https://github.com/RoyougiShiki/dsh-restart-systemd) — One-click dsh-web restart button (systemd) in the sidebar: WSL/Linux systemd channel + Windows branch, `/restart` command, sessions auto-resume.
- [Sureo0/deepseek-harness-launcher](https://github.com/Sureo0/deepseek-harness-launcher) — Zero-dependency Windows launcher for DeepSeek Harness — no Node.js / Git / pnpm needed; virtual-environment isolation, uninstall by deletion.
- [zeronesun/dsh-web-manager](https://github.com/zeronesun/dsh-web-manager) — Lightweight shell script managing the full DSH Web service lifecycle (start, stop, restart, status check).
- [ZhenHuangLab/dsh-sync](https://github.com/ZhenHuangLab/dsh-sync) — Policy-driven DeepSeek Harness config sync: sidecar Git under `$DSH_HOME`, namespace-projected settings, secret scan, journaled apply, `/sync` command, plus a Web settings panel.

- [alex04130/dsh-forge](https://github.com/alex04130/dsh-forge) — Runtime extension suite for DeepSeek Harness: forge, install, route and orchestrate plugins the Forge way (Minecraft-style), no monkey-patching.
- [daifuyang/dsh-plugin](https://github.com/daifuyang/dsh-plugin) — Community plugin bundles for dsh (DeepSeek Harness) — login, metrics, and other Cordis bundles.
- [loongsuite/pilot-dsh](https://github.com/loongsuite/pilot-dsh) — DeepSeek Harness (dsh) plugin for LoongSuite Pilot: records session, LLM, and tool events to local JSONL for OpenTelemetry GenAI traces.
- [QvShui/dsh-llm-qwen](https://github.com/QvShui/dsh-llm-qwen) — Qwen (DashScope) LLM provider adapter plugin for DeepSeek Harness.
- [tianxia--/dsh-llm-local-token](https://github.com/tianxia--/dsh-llm-local-token) — LLM provider plugin that reuses local Codex CLI and Claude Code OAuth tokens instead of separate API keys.
- [wss534857356/dsh-plugin-codex](https://github.com/wss534857356/dsh-plugin-codex) — Codex App Server model provider for DeepSeek Harness, using your local Codex login.


- [beijingwahw/dsh-companion-dev](https://github.com/beijingwahw/dsh-companion-dev) — DeepSeek Companion developer edition — full feature set of the official companion plugin: nine modules A–J (conversation export / handoff summaries / cost optimization / global search + execution-trajectory analysis, prompt-engineering workbench, multi-model arena, task orchestration, security audit), Cordis plugin architecture.
- [beijingwahw/dsh-companion-enterprise](https://github.com/beijingwahw/dsh-companion-enterprise) — DeepSeek Companion Enterprise — enterprise-grade companion plugin: security audit & DLP, team collaboration & knowledge management, task orchestration with resume, multi-model arena, execution-trajectory analysis, prompt-engineering workbench.
- [muvuula/DeepSeek-Harness-Core](https://github.com/muvuula/DeepSeek-Harness-Core) — DeepSeek Harness Core (DHC) — AI personality-core evolution plugin.
- [peiyuwang54/deepseek-harness-cli](https://github.com/peiyuwang54/deepseek-harness-cli) — DeepSeek Harness CLI (unofficial): an open-source coding agent powered by DeepSeek that runs locally in your terminal.
- [alib8b8/aflare](https://github.com/alib8b8/aflare) — Local-first automation agent: keep data on-device, connect your own LLM / databases / knowledge bases, ReAct reasoning, 300+ skill templates, deterministic workflow execution (DAG/WAL/Saga/idempotent), MCP protocol, offline/LAN-ready.
- [fire-disposal/dsh-mojibake-interceptor](https://github.com/fire-disposal/dsh-mojibake-interceptor) — Mojibake interceptor bundle: feature-based garbled-text detection, review-then-release, and pwsh encoding audit.
- [fuilyha56-wq/dsh-for-mofox-ada](https://github.com/fuilyha56-wq/dsh-for-mofox-ada) — DeepSeek Harness integration plugin for Neo-MoFox.
- [yhlooo/dsh-bridges](https://github.com/yhlooo/dsh-bridges) — Bridges DSH into projects already configured for other Harness agents (CodeBuddy / Codex / OpenCode / Claude Code / ...).
- [kamanager2012/dsh-community](https://github.com/kamanager2012/dsh-community) — DSH Community Edition: terminal/desktop distribution layer on the official @deepseek-ai/dsh. Independent repo, not the official client.
- [SparkElf/deepseek-harness-plus](https://github.com/SparkElf/deepseek-harness-plus) — DeepSeek Harness Plus: timely fixes for upstream bugs, early features, practical extensions, and curated presets.
- [WSL043/DSH-Portable](https://github.com/WSL043/DSH-Portable) — Carry DeepSeek Harness, sessions, settings, plugins, and workspace between Windows and macOS.

- [cradler-ai/harness](https://github.com/cradler-ai/harness) — DeepSeek Harness (dsh), preconfigured for Cradler Router — one command, one key, runs on your own machine.
- [Miyazawai/dsh-whale](https://github.com/Miyazawai/dsh-whale) — DSH all-in-one pack: a DeepSeek Harness distribution shell built on Oh-DSH — 17 core components out of the box, webui/gui/tui in one package, model↔preset linkage, everything is a plugin.
- [Ritard563/dsh-opencode](https://github.com/Ritard563/dsh-opencode) — Local reverse proxy so Opencode's free models work inside DeepSeek Harness.
- [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) — OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM calls with TTFT, tool executions, token usage — exported over standard OTLP to Jaeger, Grafana Tempo, SigNoz, Langfuse, or any compatible backend.
- [QiE2035/dsh-llm-headers](https://github.com/QiE2035/dsh-llm-headers) — Custom LLM request-headers plugin for DeepSeek Harness (no description provided upstream).
- [lhf6623/dsh-proxy-config](https://github.com/lhf6623/dsh-proxy-config) — Proxy config plugin: injects HTTP/SOCKS proxy into process.env so plugin installs (pnpm/git) use it.
- [moonquake2004/dsh-doctor](https://github.com/moonquake2004/dsh-doctor) — DSH diagnostics/repair plugin (no description provided upstream).
- [xu-kai-quan/dsh-tool-diagnose](https://github.com/xu-kai-quan/dsh-tool-diagnose) — DSH tool-diagnostics plugin (no description provided upstream).
- [heidi-dang/flowdeck-dsh](https://github.com/heidi-dang/flowdeck-dsh) — Native DeepSeek Harness integration, Cordis bundle, runtime broker, and execution host for FlowDeck.
- [KeKe0904/deepseek-harness-rainyun](https://github.com/KeKe0904/deepseek-harness-rainyun) — DeepSeek Harness (dsh) Web UI one-click deployment image: Docker + RainYun cloud-app (RCA) template with listing docs.
- [kevin090820/dsh-wsl-bash](https://github.com/kevin090820/dsh-wsl-bash) — WSL bash integration for DeepSeek Harness (no description provided upstream).
- [royenheart/dsh-plugin-opencode-omo](https://github.com/royenheart/dsh-plugin-opencode-omo) — DeepSeek Harness opencode + omo (oh-my-openagent) preset.
- [sqs404/dsh-portable](https://github.com/sqs404/dsh-portable) — Installer-free portable DeepSeek Harness (Windows): official npm package + bundled Node.js, double-click .exe, runs standalone on any 64-bit Windows machine after copying.
- [tsrigo/dsh-from-scratch](https://github.com/tsrigo/dsh-from-scratch) — A runnable TypeScript tutorial that builds a minimal DeepSeek-style agent harness from scratch.
- [wormggmm/dsh-booster](https://github.com/wormggmm/dsh-booster) — A launcher for DeepSeek Harness.
- [ai-thinkshare/dsh-workbench](https://github.com/ai-thinkshare/dsh-workbench) — DSH workbench plugin (no description provided upstream).
- [beijingwahw/dsh-proactive](https://github.com/beijingwahw/dsh-proactive) — DSH Proactive — proactive scheduling plugin: autonomous heartbeat + dual scientist/theorist minds (Bayesian experiment design and law induction) + energy symbiosis economy + curiosity exploration + safety governance, Raft consensus and hot updates.
- [Dingpenghui-good/dsh-conversation-language](https://github.com/Dingpenghui-good/dsh-conversation-language) — DSH plugin for switching conversation language between Chinese and English.
- [ipromise2021/dsh-omc-tui](https://github.com/ipromise2021/dsh-omc-tui) — Keyboard-first terminal TUI profile for DeepSeek Harness.
- [javen-yan/deepseek-harness-fnos](https://github.com/javen-yan/deepseek-harness-fnos) — Native full FPK package for DeepSeek Harness on fnOS.
- [karoc/dsh-model-reasoning](https://github.com/karoc/dsh-model-reasoning) — DSH model-reasoning plugin (no description provided upstream).
- [mario03690/dsh-allrouter](https://github.com/mario03690/dsh-allrouter) — DSH all-router plugin (no description provided upstream).
- [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) — DSH agency agents — cross-industry agents built on DeepSeek Harness.
- [mytianyi0712/dsh-tui-plugin-OhMyPi](https://github.com/mytianyi0712/dsh-tui-plugin-OhMyPi) — A terminal-styling plugin for dsh, inspired by Oh My Pi.
- [noname-iii/dsh-code-checker](https://github.com/noname-iii/dsh-code-checker) — A plugin for DeepSeek Harness that checks for errors after the AI finishes writing code.
- [Onenightcarnival/deepseek-harness-desktop](https://github.com/Onenightcarnival/deepseek-harness-desktop) — Desktop installer packages for DeepSeek Harness (dsh): Windows exe and macOS dmg — an Electron shell and CI config that installs the published npm `@deepseek-ai/dsh` package at build time.
- [sdkwork-ai/sdkwork-birdcoder2](https://github.com/sdkwork-ai/sdkwork-birdcoder2) — SDKWork BirdCoder2: a fork of deepseek-harness-desktop, kept in sync with upstream via the upstream git remote.
- [Sovea/deepseek-harness-docker](https://github.com/Sovea/deepseek-harness-docker) — A minimal Docker deployment for DeepSeek Harness.
- [supengpeng/dsh-plugin-quarantine](https://github.com/supengpeng/dsh-plugin-quarantine) — Crash isolation and safe-boot supervisor for DeepSeek Harness plugins.
- [Taler97/dsh-rollback](https://github.com/Taler97/dsh-rollback) — File-mutation rollback plugin for DeepSeek Harness.
- [TT-Wang/dsh-assembler](https://github.com/TT-Wang/dsh-assembler) — DSH assembler plugin (no description provided upstream).
- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) — Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys.
- [white-sand-grand/dsh-plugin-doctor](https://github.com/white-sand-grand/dsh-plugin-doctor) — DSH plugin-doctor diagnostics plugin (no description provided upstream).
- [xjwwjx/dsh-sonic](https://github.com/xjwwjx/dsh-sonic) — Sound notification plugin for DeepSeek Harness Web: plays a chime when user confirmation is needed and a success sound when tasks complete.
- [YiGeSama/dsh-preset-run](https://github.com/YiGeSama/dsh-preset-run) — `preset_run` tool that runs one-shot tasks under any agent preset (router-spec/router-standard/minimal) headlessly; install with `dsh plugin add`.
- [ZZKeepCurious/mini-deepseek-harness-python](https://github.com/ZZKeepCurious/mini-deepseek-harness-python) — Educational re-implementation of DeepSeek Harness in pure Python stdlib — event sourcing, plugin bus, agent loop. For learning only.
- [42ch-dev/dsh-rust-sdk](https://github.com/42ch-dev/dsh-rust-sdk) — Rust SDK for DeepSeek Harness (DSH).
- [dickpy/dsh-cloud-sync](https://github.com/dickpy/dsh-cloud-sync) — Portable DeepSeek Harness profile and local-plugin source synchronization via WebDAV.
- [loudMore/dsh-launcher](https://github.com/loudMore/dsh-launcher) — DeepSeek Harness (dsh) beginner-friendly launcher & manager: one-click install/update/maintain plugins & environment, environment detection.
- [chen7712369/dsh-web-launcher](https://github.com/chen7712369/dsh-web-launcher) — Browser-based quick launcher for DeepSeek Harness, sparing you from opening a terminal and typing commands by hand every time.
- [rouyiemei/dsh-smart-router](https://github.com/rouyiemei/dsh-smart-router) — Automatic model routing for DeepSeek Harness: three difficulty tiers (hard/normal/easy) plus vision routing, picking models you already configured under Settings → Models.
- [Yuki-takuya-kun/dsh-claude-code](https://github.com/Yuki-takuya-kun/dsh-claude-code) — Run Claude Code harness as the DeepSeek Harness main loop, streaming live trajectory into the DSH web UI.
- [zynieie/dsh-lan-plugin](https://github.com/zynieie/dsh-lan-plugin) — Independent dsh plugins for things upstream can't (yet) accept as PRs. Starts with `@zynieie/dsh-lan-fix`: let dsh web load on `http://<lan-ip>:3080` (insecure context) without the WebSocket abort storm.
- [2672243194/dsh-fetch-data](https://github.com/2672243194/dsh-fetch-data) — DeepSeek Harness plugin for fetching remote data (no description provided upstream).
- [ARFCON/DSH_Automatic-update-plugin](https://github.com/ARFCON/DSH_Automatic-update-plugin) — Personal auto-update plugin for DeepSeek Harness.
- [atesahmet0/dh-workspace](https://github.com/atesahmet0/dh-workspace) — DeepSeek Harness Workspace.
- [CH4ACKO3/dsh-webui-studio](https://github.com/CH4ACKO3/dsh-webui-studio) — Harmony WebUI Studio for isolated DSH plugin development.
- [Fantasia-Infinity/dsh-agent-society-combo](https://github.com/Fantasia-Infinity/dsh-agent-society-combo) — DeepSeek Harness plugin combo for agent-society style multi-agent setups (no description provided upstream).
- [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) — Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs.
- [ipromise2021/dsh-tui-demo](https://github.com/ipromise2021/dsh-tui-demo) — Keyboard-first terminal TUI profile for DeepSeek Harness.
- [KeLearns/dsh-build-diff](https://github.com/KeLearns/dsh-build-diff) — Agent-loop change review for the DeepSeek Harness web GUI.
- [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) — Claude Code to DeepSeek Harness migration/bridge plugin (no description provided upstream).

<!-- opensource-radar:truncated -->
