# Auto-claude-code-research-in-sleep (ARIS ⚔️🌙)

<p align="center">
  <a href="https://huggingface.co/papers/2605.03042">
    <img src="docs/hf_daily_paper_1.svg" alt="Hugging Face Daily Paper · #1 Paper of the Day" width="360">
  </a>
</p>

[![Technical Report](https://img.shields.io/badge/Technical%20Report-arXiv%3A2605.03042-b31b1b?style=flat&logo=arxiv)](https://huggingface.co/papers/2605.03042) · [![ARIS Intro (HTML)](https://img.shields.io/badge/ARIS%20Intro-HTML%20%C2%B7%20by%20%2Frender--html-1a4a8c?style=flat&logo=html5&logoColor=white)](https://wanshuiyin.github.io/Auto-claude-code-research-in-sleep/ARIS_INTRO.html) · [![ARIS Intro Slides — VALSE 2026](https://img.shields.io/badge/Slides%20%40%20VALSE%202026-PDF%20%C2%B7%20by%20%2Fpaper--talk-EC1C24?style=flat&logo=adobeacrobatreader&logoColor=white)](docs/aris_intro_slides.pdf) · [![AI Agents](https://img.shields.io/badge/AI%20Agents-AGENT__GUIDE.md-4B2E83?style=flat&logo=readthedocs&logoColor=white)](AGENT_GUIDE.md) · [![Featured on PaperWeekly](https://img.shields.io/badge/Featured%20on-PaperWeekly-red?style=flat)](https://mp.weixin.qq.com/s/tDniVryVGjDkkkWl-5sTkQ) · [![Featured in awesome-agent-skills](https://img.shields.io/badge/Featured%20in-awesome--agent--skills-blue?style=flat&logo=github)](https://github.com/VoltAgent/awesome-agent-skills) · [![AI Digital Crew - Project of the Day](https://img.shields.io/badge/AI%20Digital%20Crew-Project%20of%20the%20Day%20(2026.03.14)-orange?style=flat)](https://aidigitalcrew.com) · [![GitHub stars](https://img.shields.io/github/stars/wanshuiyin/Auto-claude-code-research-in-sleep?style=flat&logo=github&logoColor=white&color=gold&label=Stars)](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/stargazers) · [💬 Join Community](#community) · [![Cite](https://img.shields.io/badge/📖_Cite_Us-BibTeX-green?style=flat)](#citation)

💡 *Use ARIS as a skill-based workflow in [Claude Code](https://docs.anthropic.com/en/docs/claude-code) / [Codex CLI](skills/skills-codex/) / [Cursor](docs/CURSOR_ADAPTATION.md) / [Trae](docs/TRAE_ARIS_RUNBOOK_EN.md) / [Antigravity](docs/ANTIGRAVITY_ADAPTATION.md) / [GitHub Copilot CLI](docs/COPILOT_CLI_ADAPTATION.md) / [OpenClaw](docs/OPENCLAW_ADAPTATION.md) / [DeepSeek Harness](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/dsh-aris#readme), or get the full experience with the standalone **[ARIS-Code](docs/ARIS-Code-README_EN.md)** CLI — enjoy any way you like!*

🐋 **On DeepSeek Harness it installs as one plugin:** `dsh plugin --profile web add dsh-aris` — all 82 skills unchanged, Codex still the independent reviewer. Setup and limits on the [`dsh-aris` branch](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/dsh-aris#readme).

🌱 *ARIS is a methodology, not a platform. What matters is the research workflow — take it wherever you go.*

🤖 **AI agents:** Read [`AGENT_GUIDE.md`](AGENT_GUIDE.md) instead — structured for LLM consumption, not human browsing.

🛡️ **ARIS audits its own output → now [Anti-Autoresearch](https://github.com/wanshuiyin/Anti-Autoresearch) audits everyone's.** 61 signals — 46 integrity hack-patterns in 8 families, 13 AI-style impressions, 2 advisory — checked end-to-end into a deterministic, reviewer-ready report.
*Self-consistency + fabrication forensics, **not** an AI-text detector.*

<p align="center"><em>The field has put up with unreliable autoresearch long enough —<br>Anti-Autoresearch is the read that finally catches it.</em></p>

🧱 **ARIS's reviewer is good — and it also proposed hashes nobody reads → [HERO](https://github.com/wanshuiyin/HERO-Anti-OverDefense) is the contract that stops that.** **H**ashing, **E**dge cases, **R**ubrics, **O**verbuild — the four shapes agents over-defend in, as a ~550-token block for `CLAUDE.md` / `AGENTS.md`.
*It bounds what the agent **proposes**, never what it **looks for**.*

🎬 **ARIS goes multimodal → [ARIS-Movie-Director](https://github.com/wanshuiyin/ARIS-Movie-Director)** — hand it a rough story and get back a movie told in still frames, checked scene by scene (the reference run has 19 scenes).
Long stories usually break when the model forgets earlier details or judges its own work — so ARIS keeps a research-wiki for memory and has other models check every frame.

<details>
<summary>🗺️ <b>Method figure</b> — story brief → authored source of truth → per-panel audited spiral → assembly &amp; release, on one canvas</summary>

<p align="center">
  <a href="https://github.com/wanshuiyin/ARIS-Movie-Director">
    <img src="docs/aris-movie-director-method.png" alt="ARIS-Movie-Director method — the audited spiral: authored source of truth (asset library · outline · storyboard · comic.json) → per-panel image_gen + cross-model panel_gate (blind token-diff, single-vote veto) → research-wiki audit trace → assembly + release" width="100%">
  </a>
</p>

</details>

> 🧭 *The same loop also makes clean method / flow diagrams — the figure above was made with it. Entry points in **[ARIS-Movie-Director](https://github.com/wanshuiyin/ARIS-Movie-Director)**: [`/movie-pipeline`](https://github.com/wanshuiyin/ARIS-Movie-Director/blob/main/skills/movie-pipeline/SKILL.md) and [`/method-figure`](https://github.com/wanshuiyin/ARIS-Movie-Director/blob/main/skills/method-figure/SKILL.md), the skill that made this figure.*

<details>
<summary>🎞️ <i>A few frames from the reference movie — the story's own integrity beat: a run that <b>reported <code>+6.2</code></b> but <b>really moved <code>+1.4</code></b>.</i> &nbsp;<b><a href="https://wanshuiyin.github.io/ARIS-Movie-Director/comic/">▶ watch all 19 scenes →</a></b></summary>

<table><tr>
<td width="33%"><a href="https://wanshuiyin.github.io/ARIS-Movie-Director/comic/"><img src="https://raw.githubusercontent.com/wanshuiyin/ARIS-Movie-Director/main/docs/preview_audit.webp" alt="ARIS-Movie-Director frame — the evaluator-integrity audit page" width="100%"></a></td>
<td width="33%"><a href="https://wanshuiyin.github.io/ARIS-Movie-Director/comic/"><img src="https://raw.githubusercontent.com/wanshuiyin/ARIS-Movie-Director/main/docs/preview_panels.webp" alt="ARIS-Movie-Director frame — a multi-panel scene" width="100%"></a></td>
<td width="33%"><a href="https://wanshuiyin.github.io/ARIS-Movie-Director/comic/"><img src="https://raw.githubusercontent.com/wanshuiyin/ARIS-Movie-Director/main/docs/preview_fix.webp" alt="ARIS-Movie-Director frame — the integrity beat (reported +6.2, really moved +1.4)" width="100%"></a></td>
</tr></table>

</details>

🎯 **准备 2026 AI 秋招？** → [**🌐 ARIS-in-AI-Offer**](https://wanshuiyin.github.io/ARIS-in-AI-Offer/) · [GitHub repo](https://github.com/wanshuiyin/ARIS-in-AI-Offer) · [中文 README](https://github.com/wanshuiyin/ARIS-in-AI-Offer/blob/main/README_CN.md) —— 23 篇双语 ML / LLM / 多模态 / 生成式 / Agent 面试 cheat sheet，每篇 = 公式推导 + 从零 PyTorch + 25 高频面试题（L1 / L2 / L3），全部由 ARIS 的 `/render-html` 自动生成。**希望大家秋招轻松一点 🌱**

<details>
<summary><b>🖼️ Preview</b> — the three-pillar cheat-sheet strip (① Foundations · ② Interview Q&amp;A · ③ From-Scratch Code)</summary>

<p align="center">
  <a href="https://github.com/wanshuiyin/ARIS-in-AI-Offer">
    <img src="https://raw.githubusercontent.com/wanshuiyin/ARIS-in-AI-Offer/main/assets/preview_strip.jpg" alt="ARIS-in-AI-Offer preview — ① Foundations + ② Interview Q&A + ③ From-Scratch Code, three columns from a representative cheat sheet" width="100%">
  </a>
</p>

</details>

> 📝 *Three long-form blogs, cross-model collaborative writing via `/render-html` — [Continuous DLM — a representation-perspective survey (2026 H1)](https://wanshuiyin.github.io/ARIS-in-AI-Offer/blogs/continuous_dlm_representation_perspective.html) · [Cosmos 3 — understanding + generation in one Transformer (MoT)](https://wanshuiyin.github.io/ARIS-in-AI-Offer/blogs/cosmos3_mot_guide.html) · [Diffusion × representation × manifold learning](https://wanshuiyin.github.io/ARIS-in-AI-Offer/blogs/diffusion_representation_manifold.html).*

🛰 **Keep an eye on your agent windows** — [Claude Fleet](https://github.com/tianyilt/claude-fleet) (by [@tianyilt](https://github.com/tianyilt); local read-only dashboard for many parallel Claude Code / Codex windows, full-text transcript search — worth a ⭐), or the lighter built-in [ARIS-Monitor](aris-monitor/) (a tiny always-on-top macOS widget that lights up 🔴 when a session waits for your approval; click to jump there).

<details>
<summary><b>🖼️ Preview</b> — Claude Fleet dashboard (full web) &amp; ARIS-Monitor widget (minimal, built-in)</summary>

<table align="center" width="100%">
<tr>
<td width="66%" align="center" valign="top">
<a href="https://github.com/tianyilt/claude-fleet"><img src="assets/claude-fleet-preview.png" width="100%" alt="Claude Fleet — full local web dashboard for many concurrent Claude Code / Codex windows (triage, Focus, full-text search, skill/memory analytics)"></a>
</td>
<td width="34%" align="center" valign="top">
<a href="aris-monitor/"><img src="aris-monitor/assets/screenshot.png" width="100%" alt="ARIS-Monitor — minimal always-on-top floating widget showing which Claude Code sessions need approval (calm all-clear vs red ATTENTION)"></a>
</td>
</tr>
<tr>
<td align="center"><b><a href="https://github.com/tianyilt/claude-fleet">Claude Fleet</a></b> · 全功能网页看板</td>
<td align="center"><b><a href="aris-monitor/">ARIS-Monitor</a></b> · 极简悬浮小窗(自带)</td>
</tr>
</table>

</details>

<details>
<summary><b>Run either in seconds</b> — ARIS-Monitor (5s) / Claude Fleet (30s)</summary>

**ARIS-Monitor** — built-in, no clone / no pip / no browser:

```bash
cd aris-monitor && ./run.sh
# a borderless panel floats top-right; click a row to jump to that terminal
```

**Claude Fleet** — full web dashboard:

```bash
git clone https://github.com/tianyilt/claude-fleet
cd claude-fleet && bash run.sh
# open http://127.0.0.1:7878 in your browser
```

</details>

🚀 **Beyond 科研 → 任何 "研究"**：[**ARIS-Anything**](https://github.com/wanshuiyin/ARIS-Anything) 把 ARIS 的五步 loop（plan / draft / 对抗审 / 迭代 / 持久化）推广到非学术的结构化研究——投资尽调 / 法律研究 / 市场研究 / 自驱学习 / 调查新闻 / 工程复盘等。

🔥 [**ARIS-Code CLI — 独立安装版**](docs/ARIS-Code-README_CN.md) · [English](docs/ARIS-Code-README_EN.md) | [⬇️ Download](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/releases/latest) · [![Downloads](https://img.shields.io/github/downloads/wanshuiyin/Auto-claude-code-research-in-sleep/total?style=flat-square&color=brightgreen)](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/releases)

<table>
<tr>
<td valign="top" width="60%">

📰 **ARIS-Code v0.4.24** (2026-08) — latest is the **Claude 5 model refresh** ([#392](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/392)): first-class **Claude Opus 5** (new default, same $5/$25 tier) and **Claude Fable 5** (Mythos-class flagship, correct $10/$50 pricing) — `/model` picker + `fable`/`opus`/`sonnet` aliases + an ordered availability chain (Opus 5 → 4.8 → 4.7) so accounts without Claude 5 access keep working untouched. Recent headliners: **v0.4.23 — output folding** (tool output folds to a few lines, `ARIS_TOOL_OUTPUT_LINES=0` restores full dumps; **81 bundled skills** incl. the [Anti-Autoresearch](https://github.com/wanshuiyin/Anti-Autoresearch) `/integrity-forensics` launcher) and **v0.4.17 — the MCP release** (cross-model review needs no OpenAI API key — `aris setup` wires your **ChatGPT subscription** in as reviewer via *Codex MCP*). Caps a 20-release run (v0.4.5 → v0.4.24); per-release detail below. Credits: [@GetIT-Sunday](https://github.com/GetIT-Sunday), [@Anduin9527](https://github.com/Anduin9527), [@GO-player-hhy](https://github.com/GO-player-hhy), [@Jxy-yxJ](https://github.com/Jxy-yxJ), [@screw-44](https://github.com/screw-44), [@StevenUST](https://github.com/StevenUST), [@opposj](https://github.com/opposj), [@ShijunLei-cn](https://github.com/ShijunLei-cn), [@algojogacor](https://github.com/algojogacor), [@YukinoshitaLove](https://github.com/YukinoshitaLove).

</td>
<td valign="top" width="40%">

<img src="docs/aris-code-banner.png" width="100%" alt="ARIS-Code CLI terminal — Auto Research in Sleep">

</td>
</tr>
</table>

> <details><summary>Per-release details (v0.4.5 → v0.4.24)</summary>
>
> **v0.4.24** (2026-08-09) — **the Claude 5 model refresh** ([#392](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/392), requested by [@YukinoshitaLove](https://github.com/YukinoshitaLove)). Explicit `--model claude-opus-5` / `claude-fable-5` already passed through on every platform — this release makes them first-class. **Default → `claude-opus-5`** (main session, subagents, `aris setup`; same $5/$25 tier as Opus 4.8); the v0.4.18 availability fallback becomes an ordered **chain walk** (Opus 5 → Opus 4.8 → Opus 4.7, one step per precise `404 not_found_error`, explicit choices never silently change) — the naive constant swap would have stranded 4.7-only accounts and configs saved by v0.4.23's setup, a regression the cross-model review caught and an end-to-end mock-404 chain test now locks. `/model` picker adds Fable 5 / Opus 5 / Sonnet 5; new `fable` alias. **New Mythos-class pricing tier** (`fable`/`mythos` = $10/$50, cache write $12.50 / read $1, verified 2026-08 — previously fell to the conservative $15/$75 unknown-model tier, a 1.5× over-estimate); Opus 5 / Sonnet 5 pinned on their existing branches. Tests: api 41 / aris-cli 213 + 4 e2e / runtime 226 / tools 70 / commands 5, all green; live smoke on claude-opus-5, claude-fable-5 and the fable alias. Codex MCP (gpt-5.6-sol xhigh) implementation gate: NO-GO → NO-GO → GO.
>
> **v0.4.23** (2026-08-02) — **the output-folding release** (top real-user complaint: "aris dumps thinking and the full content of documents it reads onto the screen"). **🧹 Tool-output folding, display layer ONLY**: the disk-verified culprits were format_read_result appending the ENTIRE read payload, bash pushing full stdout/stderr, grep dumping its full content blob, and the edit preview capping line counts but not line LENGTH. Now Read/Grep show the first 6 lines, Bash shows first 4 + last 4 per stream (stderr keeps its red), each kept line capped at 240 chars (the minified-single-line case), then one dim "… (+N more lines — set ARIS_TOOL_OUTPUT_LINES=0 for full output)" hint. ONE env knob: unset = defaults, a positive integer overrides every tool, 0 = the exact old display; the session, model context, `--output-format json` and `/export` are untouched and always complete. Thinking was verified to never print (Anthropic deltas only accumulate; Kimi reasoning_content only feeds the replay cache — the "thinking dump" perception came from the document dumps); two end-to-end sentinel tests (real binary vs mock SSE server) lock that thinking/reasoning never reaches the terminal. Interactive expand/collapse was deliberately rejected as over-engineering. **🐛 Bash timeout now kills the command**: a timed-out call reported `interrupted: true` while the dropped tokio future left the child RUNNING — side effects landed after the report; now kill_on_drop (escape hatch `ARIS_BASH_KILL_ON_TIMEOUT=0`; background tasks untouched; locked by a real behavioral test — a timed-out "sleep 1 && touch marker" must not create the marker). **📦 Bundle 79→81** (pin 7182624 → 3e49e63): **`/integrity-forensics`** — the Anti-Autoresearch SHA-pinned thin launcher (span-anchored evidence ledger → GPT auditors propose → deterministic rules-only adjudicator decides → typed BLOCK/WARN gate + obligations ledger) — and `/web-debug-search`, +tools/forensics_gate.py (29 helpers, 104 embedded resources). **🎁 Also**: grep's content mode no longer shows a false "0 matches" above real results (the gate caught that `"numMatches": null` serializes with the key present, defeating a naive presence check); all four crates' local-mock-server tests are now proxy-immune (a shell with http(s)_proxy set used to turn 15 tests red on a released tag — 127.0.0.1 was routed through the proxy). The rest of the runtime-state package (compaction re-arm, failed-turn cleanup, /cost dollars, SSE tail) ships as v0.4.24 — the cached-token cost fix is deliberately held back because it changes what the compaction trigger measures. Tests: api 41 / aris-cli 212 + 3 e2e / runtime 225 / tools 69 / commands 5 (+13), all green **under a live proxy**; new-code clippy delta zero. Codex MCP (gpt-5.6-sol): ultra scope+design adjudication, then a 3-round implementation gate (round 1 caught the null-serialization defeat and a non-hermetic behavioral test; round 3 GO).
>
> **v0.4.22** (2026-07-12) — **the skills-resync + GPT-5.6-Sol release**. **📦 Bundle resync** (pin 7e3ab67 → 7182624, 93 commits): **79 bundled skills** (+`meta-apply`, +`paper-poster-html`; `paper-poster` retired to a redirect stub), 28 tools helpers (8 new: capture_filter, evidence_check, iteration_log, provenance, run_state, threat_scan, meta_opt/trigger_eval + sample evals), 11 new shared-references docs (fan-out-pattern, acceptance-gate, external-cadence, skill-governance, compute-env-contract, resumable-runs, evidence-precheck, injection-hygiene, capture-antipatterns, output-composition, taste-calibration); sync hardening — `ARIS_SYNC_EXPECT_SHA` guard (aborts before touching assets if main moved; it caught a real move on first use) + exact-inventory drift tests + the vendored posterly MIT license text now ships. **🎛 GPT-5.6-Sol two-tier reviewer alignment**: the CLI's system-prompt nudge now passes the skills' explicit `model: gpt-5.6-sol` + per-call effort pins through (the v0.4.17 blanket "never pass a model" rule would have silently stripped deep audits from ultra to xhigh), carries the canonical capability-only fallback chain (effort-unsupported → same model xhigh, deep tier only; model-unknown → explicit gpt-5.5+xhigh; never degrade on transport-class errors; an explicit call-level override disables the chain), pins `approval-policy: "never"` + explicit `sandbox` on every fresh codex call, and makes the HTTP fallback pre-dispatch-only with parameter stripping; the HTTP LlmReview default deliberately stays gpt-5.5 pending a real smoke; gpt-5.6 family pricing (sol $5/$30, terra $2.50/$15, luna $1/$6) verified against the official page; banner/Reviewer display/`/reviewer` are honest about primary-vs-fallback (pure-Codex setups get status + guidance instead of a fake picker). **🐛 8 verified fixes**: explicit `--model` was silently overridden by the saved executor model (model provenance now tracked end-to-end; the 4.8→4.7 availability fallback respects explicit choices; `/model` and `/setup` re-arm it); saved models no longer leak across provider transports (blank saved models count as absent; OpenAI transport with no model source fails fast; the first-run wizard's config now actually feeds startup model resolution); `--output-format json` never prompts (locked by a real end-to-end binary test against a mock SSE server); **Windows `aris login` fixed** (PKCE randomness read /dev/urandom → getrandom); **Windows command probing fixed** (the PowerShell tool probed itself through `sh`; now where.exe); codex `.cmd` shims classified honestly (three-state probe; setup requires explicit confirmation before writing a config the MCP client can't spawn); nested config.json warns instead of silently parsing to all-defaults; NotebookEdit mints collision-free cell ids. **🖥 New windows-latest CI job** (workspace compile gate + three targeted test groups, each guarded against silent 0-test green). Tests: api 41 / aris-cli 204 + 1 e2e / runtime 223 / tools 69 / commands 5 (+54), all green; new-code clippy delta zero. Codex MCP (gpt-5.6-sol): **ultra** design gate — 5 rounds, NO-GO ×4 → GO — then a 3-round implementation gate whose round 2 caught a first-run config-wiring blocker before it shipped; 4 implementation subagents, every report disk-verified.
>
> **v0.4.21** (2026-06-28) — **bug-fix patch**: 5 new user-facing bugs from a Codex adversarial hunt (all disk-verified, distinct from v0.4.20), each cross-model reviewed at a design gate and an implementation gate (gpt-5.5 xhigh; both started NO-GO — the reviewer caught an off-by-one in the grep line-mapping and a missing stream-level test before GO). **🐛 Headline**: OpenAI-compatible streaming corrupted multi-byte UTF-8 (CJK / emoji) split across network chunks into `�` — each HTTP body chunk was `from_utf8_lossy`'d independently, so a 3-byte Chinese character or 4-byte emoji straddling a chunk boundary broke on both sides (a frequent hit for Chinese users on domestic OpenAI-compatible providers — Kimi/GLM/MiniMax/DeepSeek/Qwen/Doubao — streaming Chinese text); the stream buffer is now raw bytes, decoding only complete SSE lines. **A saved OpenAI/custom executor config no longer overrides a shell-set `EXECUTOR_PROVIDER`** — the startup "shell-provided vars win" path had one ungated write that re-pointed `EXECUTOR_PROVIDER=anthropic … aris …` to OpenAI (wrong executor / model-not-found). **An Anthropic stream truncated after content but before a terminal signal now hard-errors** (`premature_eof`) instead of saving a half-finished answer to history as a complete turn (symmetric to the OpenAI `#249` guard; the `stop_reason`-only compat path is preserved, and `ARIS_ALLOW_EOF_WITHOUT_STOP=1` opts a terminal-signal-less proxy back into the old behavior). **`grep_search` with `multiline: true`** now matches across lines in content mode (was silently empty — `count` mode already worked). **MCP tool results carried only in `structuredContent`** (empty `content`) are no longer dropped — the model gets the JSON structured payload. Tests (CI mode): api 32→35 / runtime 205→212 / tools 67 / aris-cli 172→181 / commands 5 (+21, incl. 2 stream-level integration tests), all green. Codex MCP (gpt-5.5 xhigh): design gate (NO-GO → GO after fixing the off-by-one) → implementation gate (NO-GO → GO after adding the stream-level integration tests); the Anthropic streaming spec (every stream ends with `message_stop`) was WebFetch-verified. Two latent-only candidates (Anthropic block-`index` routing, OpenAI multi-line SSE) remain deferred.
>
> **v0.4.20** (2026-06-19) — **bug-fix patch**: 7 user-facing bugs surfaced by a Codex adversarial hunt, each reviewed across 3 rounds (the reviewer caught a redraw gap, a trailing-blank, a spinner tail, and a blank-line edge before GO). **🐛 Headline ([#299](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/299))**: short REPL replies showed only "✔ Done" — the spinner draws "⠋ Thinking…" with Save/RestorePosition so streamed output overwrites it on the same line, but `finish` then cleared that whole line, **erasing a short single-line reply**. The REPL now finishes without clearing when the turn printed visible text (`Clear(UntilNewLine)` wipes only the spinner tail after the reply). **Streamed multi-paragraph replies rendered glued** ("para1para2") — each chunk's paragraph separator was trimmed at the stream boundary; the markdown streamer now preserves separators via a held-separator so streamed output equals a single full render (no dangling blank line). **Markdown tables with CJK/fullwidth content misaligned** — width now counts display cells (CJK = 2), not chars. **`aris "prompt"` / `--print` ignored the executor model saved by `aris setup`** (REPL-only before) — a configured OpenAI/custom executor got the Anthropic default sent to its endpoint; the one-shot and REPL paths now share one resolver. **Esc** now actually closes the completion dropdown (it was recomputed right back). **`glob_search`** reports the total matched count when truncated (not the capped 100, which made the model think a 1000-match glob had 100 files). **`/model`'s custom menu** reads the effective env the executor uses, not stale on-disk config. Tests (CI mode): api 32 / runtime 205 / tools 67 / aris-cli 172 / commands 5, all green; +7 new; real-machine verified (short reply renders + "✔ Done"; paragraphs keep their blank lines). Codex MCP (gpt-5.5 xhigh): hunt → 3 review rounds (NO-GO → NO-GO → GO). Two latent-only candidates (Anthropic block-`index` routing, OpenAI multi-line SSE) deferred to a hardening pass.
>
> **v0.4.19** (2026-06-14) — **honesty / guardrails patch** (theme from a Codex fresh-eyes audit; no behavior change for healthy setups). **🔴 MCP protocol-version negotiation guard** — the stdio handshake requested `2025-03-26` but never read the version the server negotiated back (a parsed-but-dead field), so a server agreeing on a version ARIS can't speak was silently accepted and later `tools/list` / `tools/call` ran on an incompatible protocol with opaque failures. ARIS now validates the negotiated version against a supported set (`2025-11-25` / `2025-06-18` / `2025-03-26` / `2024-11-05` — stdio framing is identical across these) and, on an unsupported one, terminates the child + clears the slot + surfaces a clear per-server error (`aris doctor` shows it) — the "terminate when versions can't be agreed" behavior the MCP lifecycle spec requires. The *request* stays `2025-03-26` (proven against `codex mcp-server`), so healthy servers are unaffected — verified end-to-end: the real Codex MCP server still spawns + initializes + advertises its tools under the guard. **🧹 Papercuts**: the OpenAI-family subagent fail-loud message dropped its stale "lands in v0.4.18" marker (now version-agnostic + actionable, still credential-free); OpenAI upstream error bodies are now truncated (500 chars) + credential-redacted (`sk-…` keys and `Bearer …` tokens, via a substring scanner that catches the compact-JSON shape `{"api_key":"sk-…"}` a misconfigured proxy can reflect back) instead of splatted verbatim; the system-prompt hook-events summary now counts only the hooks the runtime actually executes (a `command` hook with a `command` string), matching the parser. Tests (CI mode): api 32 / runtime 204 / tools 67 / aris-cli 167 / commands 5, all green; live smoke confirms the real Codex MCP server still initializes under the guard. Reviewed by Codex MCP (gpt-5.5 xhigh): design GO → impl NO-GO (compact-secret miss + command-string strictness) → GO after fixes.
>
> **v0.4.18** (2026-06-14) — **default model → Claude Opus 4.8**, with corrected pricing and a safety net. The bump moves `DEFAULT_MODEL`, the `opus` alias, the model picker, `aris setup`, and the subagent default to `claude-opus-4-8` — with an **availability fallback**: if the account lacks 4.8 (the API returns `404 not_found_error`), ARIS auto-falls-back to `claude-opus-4-7` for the session, **rebuilds the system-prompt model identity so it stays coherent** (the model is never told it's 4.8 while served 4.7), warns once, and retries — for the main session (text + JSON) and subagents. It fires only on that precise 404 (never 400/rate-limit/auth), latches against loops, and the text path rebuilds from a pre-turn snapshot so a retry never double-appends the user message; accounts **with** 4.8 are byte-identical to a plain bump. **💰 Pricing corrected** (verified against Anthropic's published schedule; had been a 3–5× over-estimate): current **Opus 4.5–4.8 = `$5/$25`** (deprecated Opus 4/4.1 keep `$15/$75`, split by word-boundary so a future `opus-4-10` isn't mis-tiered); **Sonnet 4.x = `$3/$15`** (decoupled from the generic unknown-model fallback, which stays `$15/$75`); Haiku was already correct. **🧹 Backlog**: `aris setup` option 10 pins the Codex MCP reviewer to `model_reasoning_effort="xhigh"` (deterministic for new setups, independent of `~/.codex/config.toml`; idempotent merge never clobbers an existing entry); a startup + `aris doctor` **misconfig hint** ([#259](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/259)) for a silently-ignored/misplaced config (malformed JSON, or a stray `~/.aris/config.yaml` — stderr-only so `--print`/JSON stdout stays clean); the system-prompt hook summary now marks parsed-but-never-fired events **"PARSED ONLY … will NOT run"** instead of implying dead hooks run (full event expansion — actually firing `SessionStart`/`SessionEnd`/… — deferred to a separate issue). Tests (CI mode): api 32 / runtime 202 / tools 67 / aris-cli 166 / commands 5, all green; a live one-shot smoke returns `model=claude-opus-4-8` end-to-end. Reviewed by Codex MCP (gpt-5.5 xhigh) across the design + both implementation batches (design REWORK→GO, impl NO-GO→GO, batch-2 GO).
>
> **v0.4.17** (2026-06-13) — **the MCP release.** Before v0.4.17, `mcpServers` in `settings.json` parsed, showed in `aris doctor`, and did *nothing*; now ARIS spawns each configured stdio server, runs the MCP handshake, discovers tools, and advertises them as `mcp__<server>__<tool>` on **both** provider paths (Anthropic + OpenAI-family), with end-to-end dispatch, soft per-server degradation, and an approval gate for untrusted MCP tools (external processes the sandbox can't cover; `--allowedTools` now accepts `mcp__` names). **🆕 zero-API-key cross-model reviewer**: `aris setup` → **option 10 (Codex MCP, ChatGPT subscription, no API key)** writes an idempotent `mcpServers.codex` entry into the settings file the runtime actually reads (atomic write + backup, explicit consent before `trust: true`), with an optional API reviewer as **fallback** (`ARIS_REVIEWER_PROVIDER=codex-mcp` + `ARIS_REVIEWER_FALLBACK_PROVIDER`); `/setup` in-REPL rebuilds the system prompt + runtime so reviewer changes take effect without quitting. **🔴 Protocol fix the fakes couldn't catch**: real-machine e2e against `codex mcp-server` exposed that our stdio transport spoke LSP-style `Content-Length:` framing while the MCP spec (and codex) use **newline-delimited JSON-RPC** — every fake-server test passed because the fakes spoke the same wrong dialect; writes are now NDJSON, reads auto-detect both, and the spec-mandated `notifications/initialized` is sent after `initialize` (a select-based round-trip also closes the [#286](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/286) large-request deadlock). **Hooks**: object-style Claude Code hooks preserve `matcher` / `timeout` / `async` (anchored-regex matcher filtering; per-hook timeout, default 30 s kill = warning not deny). **Long tail**: `ARIS_DISABLE_KEYCHAIN` gate, Anthropic `stop_reason` clean-EOF symmetry (CL2), OpenAI tool-call `index`-missing merge-by-id (OE6), slash commands enter history. **Real-machine push-gate hardening** (the zero-key reviewer's first run): codex `codex/event` notification spam silenced by default (gated behind `ARIS_MCP_STDERR=inherit`), the system prompt now tells the model **not** to pass a `model` parameter to Codex (account default = gpt-5.5 + xhigh; arbitrary names are rejected by a ChatGPT account), and a Codex-MCP-primary-with-no-fallback `LlmReview` call returns a clear "use `mcp__codex__codex`" message instead of a misleading `OPENAI_API_KEY`/`gpt-5.5` error. Built with the v0.4.16 zero-regression methodology (24 new characterization tests; every deliberate flip annotated in-place). Tests (CI mode): runtime 199 / aris-cli 165 / tools 67 / api 30 / commands 5, all green. Reviewed phase-by-phase by Codex MCP (gpt-5.5 xhigh) across 17 rounds (7 NO-GOs all resolved). Subagent MCP routing (P8) + MCP `protocolVersion` bump + hook `async` execution deferred to v0.4.18.
>
> **v0.4.16** (2026-05-30) — REPL UX + provider hardening, shipped under a zero-regression discipline: 64 characterization ("golden") tests locked the *current* provider-routing / pricing / reviewer / subagent / REPL behavior first, then stayed green through every change. Closes [#274](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/274): command history now persists to `~/.config/aris/history` (0600) and reloads on startup, with an `ARIS_NO_HISTORY` kill-switch and a disk-only secret-skip (credential-looking lines stay in in-session history but never touch disk); bash-style **Ctrl+R** reverse incremental search (CJK display-width-aware single-line render; no existing key binding changed; no new dependency). Security: an OpenAI-family main session (Kimi / GLM / MiniMax / …) spawning a subagent previously **silently billed the user's Anthropic OAuth/Keychain credential** — it now fails loud with a clear, credential-free error; full OpenAI-family subagent routing is a cross-crate change deferred to v0.4.17. Groundwork (no behavior change): the 3 byte-identical word-boundary matchers consolidate into one canonical `runtime::word_match`; new pure `ProviderFamily` classifier (unwired). Tests (CI mode): runtime 164 / aris-cli 128 / tools 49 / commands 5, all green. Codex MCP (gpt-5.5 xhigh) reviewed each phase + a final integration pass.
>
> **v0.4.15** (2026-05-29) — OpenAI-compatible streaming robustness hotfix. Closes [#249](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/249): MiniMax (and other OpenAI-compatible providers / proxies) were effectively unusable because the clean-EOF completion check treated the `data: [DONE]` SSE sentinel as the *only* authoritative signal. A non-empty `choices[].finish_reason` is the Chat Completions spec's terminal-chunk marker; `[DONE]` is a transport convention some compatible providers never emit (MiniMax sends `finish_reason: "stop"` then closes without `[DONE]`). The clean-EOF decision is now a pure, unit-tested `stream_eof_action(...)` that completes on EITHER `[DONE]` OR a non-empty `finish_reason`; reads are NOT stopped early at finish_reason (a trailing `include_usage` usage-only chunk is still consumed), genuine truncation still hard-errors, and a pre-output proxy abort still restarts. Coupled fixes: **OE7** reads finish_reason before the `delta` guard (delta-less terminal choice); **OE2** flushes pending tool calls on any non-empty finish_reason; **OE4** surfaces a mid-stream error envelope as a hard error instead of silently dropping it; **OE3** tolerates `data:{...}` without the space after the colon. +5 unit tests (77→82) extract the previously-untested SSE completion logic into pure helpers. Anthropic SSE path untouched. Codex MCP (gpt-5.5 xhigh) 3 rounds (GO-WITH-NITS → GO-WITH-NITS → GO).
>
> **v0.4.14** (2026-05-25) — Security-hygiene release closing the top items from the v0.4.13 codex audit (gpt-5.5 xhigh, 6/10 NEEDS-REWORK verdict). **🔴 S9 (P0) system-prompt config redaction** — before v0.4.14, `render_config_section()` dumped the merged `settings.json` verbatim into the system prompt sent to the LLM provider, leaking `env`, `mcpServers.<name>.headers.Authorization` Bearer tokens, hook command env, signed-URL query params, and `apiKey` fields. New renderer whitelists top-level fields (`model`/`permissionMode`/`theme`/`outputStyle`/`permissions`/`sandbox` with recursive redaction inside), redacts sensitive keys (`apikey`/`token`/`secret`/`password`/`authorization`/`headers`/`env`/`_KEY`/`_SECRET`/`_TOKEN`), replaces MCP `command` with `<configured>` placeholder, reduces MCP `url` to strict `<scheme://host[:port]>` origin (scheme allow-list `http`/`https`/`ws`/`wss`, ASCII host, digit-only port, IPv6 brackets), and drops hook command strings entirely. Regression test exercises 9 distinct leak surfaces; URL parser has its own targeted test for 7 smuggling attempts including port-position secret injection (codex round-3 catch). **🟡 P9 (P1)**: DeepSeek `aris --help` now points at `aris setup` option 7 instead of an env-var path the resolver never honored. **🟡 M1/M2 (P1) doc**: `aris doctor` + README/README_CN gain experimental warning whenever `mcpServers.len() > 0` (full MCP tool dispatch lands v0.4.16). **🟢 C11 (P2) stream idle timeout** — both Anthropic `MessageStream` and the OpenAI SSE loop wrap `response.chunk().await` in `tokio::time::timeout` (env `ARIS_STREAM_IDLE_TIMEOUT_SECS`, default 120, clamp `[10, 1800]`, 0/negative disables); closes the "aris hangs forever with no output" symptom when an upstream HTTPS proxy holds a connection without keepalives. **Bundle**: 77 skills (+1 `/wiki-enrich` via late same-day sync to main `7e3ab67` which also picks up upstream `check_ready.sh` awk + grep-c null-match fix), 54 helpers. Codex MCP 6 rounds (NO-GO + 4 → GO-WITH-NITS + 3 → NO-GO + port smuggling → GO → release metadata GO → sync GO).
>
> **v0.4.13** (2026-05-25) — Residue-cleanup release closing every codex audit P1 carried since v0.4.10–v0.4.12, plus the long-tail regression tests. **🟡 v0.4.10 P1.D per-server MCP timeout** — `mcpServers.<name>.requestTimeoutSecs` override > `MCP_REQUEST_TIMEOUT_SECS` env > 300s default (clamped 1..=1800), so one Codex MCP agent can run 5 min while filesystem MCP errors in 5 s. **🟡 v0.4.10 known limitation closed** — `McpStdioProcess::request()` skips JSON-RPC notifications (id absent/null) and keeps reading until the correlated response. **🟢 meta_opt hook deploy via `aris init`** — `tools/meta_opt/{log_event,check_ready}.sh` bundle into the binary; `aris init` writes ARIS-namespaced **`aris-meta-opt-log-event.sh`** / **`aris-meta-opt-check-ready.sh`** to `~/.claude/hooks/` (codex round-1 #1: never clobbers user hooks); settings.json merge idempotent, backups hard-fail, final rewrite atomic via tempfile + rename. **🧪 9 v0.4.12 targeted regression tests** for sandbox.strictMode (3) + parse strictMode + provider_match pricing + has_word o-series + stream_options 400 + meaningful-content classification + premature-EOF retry truth table (codex round-1 #3 — `should_retry_on_premature_eof()` extracted to pure fn, 7-row test). **Bundle**: 76 skills, **54 helpers** (+2 meta_opt scripts vs v0.4.12). Codex 3 rounds (NO-GO + 3 → NO-GO + metadata → GO).
>
> **v0.4.12** (2026-05-22) — Bug-fix + small-feature release. **#238 `sandbox.strictMode`** opt-in config key; when set, `SandboxConfig::resolve_request()` ignores all five LLM-supplied overrides (`dangerouslyDisableSandbox`, `namespaceRestrictions`, `isolateNetwork`, `filesystemMode`, `allowedMounts`) — closes the gap where a tool call could silently bypass user sandbox policy. `aris doctor` adds a "Sandbox:" row; bash tool schema documents the strictMode semantics. **#232** `auto-review-loop-llm` updated from legacy `deepseek-chat` / `deepseek-reasoner` (deprecate 2026-07-24; reasoner rejects `tool_choice`) to `deepseek-v4-flash` / `deepseek-v4-pro`. **v0.4.10 audit P1 follow-ups**: P1.A Anthropic stream retry gates on `has_emitted_meaningful_content` (a stream that only sent `MessageStart` before EOF is retry-eligible); P1.B `supports_reasoning_effort` + reviewer mirror use word-boundary match so `openai/o3-mini` / `proxy:o4` route correctly; P1.C `stream_options.include_usage:true` proxy fallback retries once without on real 400 unknown-field errors; P2 pricing match precision via `provider_match()` so `qwen3.6-plus` / `kimi-k2.5` route correctly while `my-kimi-clone` does not. **Skills sync** (76 skills, 52 helpers): `/interview-cheatsheet` + `/render-html` newly bundled; `build.rs` `ALLOWED_EXTS` gains `html` for render-html templates; `EXCLUDED_SKILL_PREFIXES` → `starts_with("skills-codex")`. **CI fetch-depth: 0** + origin/main fetch so drift-test ancestor check runs. Cross-reviewed by Codex MCP (gpt-5.5 xhigh) over 4 rounds.
>
> **v0.4.11** (2026-05-18) — Skills bundle refresh + sync infrastructure. The embedded skills set in the v0.4.10 binary had fallen behind main (~6 of 56 main `skills/` commits had been cherry-picked); v0.4.11 syncs the full set and ships sync infrastructure so the gap can't silently reopen. Bundle: 65→74 user-facing skills, 34→49 helper resources. 10 new skills bundled: `/citation-audit` (fourth-layer bibliography audit), `/experiment-queue` (SSH multi-seed job queue with OOM retry), `/kill-argument` (two-thread adversarial review for theory papers), `/resubmit-pipeline` (W5: text-only port to a new venue), `/paper-talk` (end-to-end conference talk pipeline), `/slides-polish` (per-page Codex layout review), `/overleaf-sync` (two-way Overleaf Git-bridge), `/gemini-search` + `/openalex` (broader literature sources), `/qzcli` (Qizhi GPU jobs). 46 existing SKILL.md refreshed — most critically the canonical resolver chain rollout (closes real user incident where `/research-wiki` was empty for a week from hardcoded `tools/research_wiki.py`), submission assurance gate + external verifier (`/paper-writing` Phase 6 now functions). tools/ goes 9→18: 9 baseline helpers refreshed (`research_wiki.py` 315→767 lines with canonical `ingest_paper` API), 9 new helpers (`extract_paper_style.py`, `figure_renderer.py`, `paper_illustration_image2.py`, `overleaf_{setup,audit}.sh`, `verify_wiki_coverage.sh`, `watchdog.py`, `experiment_queue/{build_manifest,queue_manager}.py`). New `tools/sync_main_skills.sh` automates main → bundle rsync with symlink pre-flight + codex-mirror prune + `SKILLS_SOURCE_COMMIT` pinning. 3 new CI drift tests in `crates/runtime/src/cache.rs` cover all 4 resolver layer patterns. Gemini MCP calls in `/research-lit` and `/gemini-search` now pass `model: 'auto-gemini-3'` (avoids silent downgrade to 2.5-pro on OAuth-personal capacity exhaustion). CLI runtime unchanged — codex-audit P1 follow-ups remain on v0.4.12 backlog. Cross-reviewed by Codex MCP (gpt-5.5 xhigh) across 5 rounds (REQUEST CHANGES → APPROVE WITH NITS → NO-GO → GO → final GO).
>
> **v0.4.10** (2026-05-17) — Stream + MCP reliability + multi-provider pricing. C6 whole-stream restart in Anthropic `MessageStream` + OpenAI SSE loop on chunk decode failure / premature EOF (`ARIS_STREAM_RETRY`, default 2, clamp 0..=5, fires only when nothing emitted yet — closes [#228](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/228)-style "error decoding response body" loop). M3 MCP stdio gains 300s default `tokio::time::timeout` over send+read (override `MCP_REQUEST_TIMEOUT_SECS`, clamp 1..=1800); `response.id ↔ request.id` correlation; `ensure_server_ready()` `try_wait()` dead-process respawn; `kill().await` on all failure paths so the next call starts clean (closes [#151](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/151) / [#172](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/172) "Calling codex..." stalls). C8/P4 OpenAI streaming requests now send `stream_options.include_usage:true` + parse `cached_tokens`; Anthropic streaming merges `MessageStart.usage` (input/cache) with `MessageDelta.usage` (output). C9 multi-provider pricing registry (15+ models, OpenAI cache_read = input × 0.1 corrects 5× generic overstatement, DeepSeek cache_hit/cache_miss tiers, `has_word()` boundary matcher for `provider/<model>` slugs). 9 dead-code warnings cleared; `aris setup` help text synced with actual behaviour.
>
> **v0.4.9** (2026-05-17) — Closes Codex v0.4.7 audit residuals (L1 TLS double-stack, L3 reasoning_cache compaction misalign, L4 reasoning replay unbounded). 2 new skills bundled (`/figure-spec` + `/paper-illustration-image2` with `scripts/` subdirs, new Layer 0b = `$ARIS_CACHE_DIR/skills/<name>/scripts/`); `research_wiki.py` promoted to shared `tools/` (9+ callers); 5 more SKILL.md migrated to fallback chain.
>
> **v0.4.8** (2026-05-17) — Skill helper subsystem rewrite. Bundled helpers extract to `~/.config/aris/cache/<version>/` at startup; every Skill invocation surfaces `helperReport` JSON + 4-layer resolver preamble; `/skills export` copies helpers; new `integration-contract.md` with 6 failure policies; 8 shared helpers (arxiv/deepxiv/exa/S2/openalex/save_trace/verify_papers/verify_paper_audits) bundled; `/research-lit` + `/deepxiv` migrated. Plus 4 bug fixes: gpt-5.5+tools 400 on OpenAI; Custom reviewer reset; missing `signature` field ([#228](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/228)); `--version` Build date hardcoded.
>
> **v0.4.7** (2026-05-16) — DashScope Coding Plan 405 fixed ([#159](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/159)) via `native-tls` switch ([#225](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/225)); `reasoning_content` replay for all reasoning models (OpenAI o1/o3/o4 / DeepSeek-R1 etc.), not just Kimi ([#226](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/226)); 600+ lines dead code cleanup + `rustyline` dep removed + "Claw Code" → "ARIS-Code" rebrand.
>
> **v0.4.6** (2026-05-14) — 🚨 Two long-standing silent bugs fixed: `PermissionMode::Prompt` silently allowed every tool (derived-`Ord` bug); system prompt hardcoded `current_date = "2026-03-31"` made models reject post-cutoff data as future/prompt-injection. Plus Custom OpenAI-compatible provider (`/setup` option 11) with dynamic `/models` discovery ([@Anduin9527](https://github.com/Anduin9527) [#221](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/221) + [#222](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/222)).
>
> **v0.4.5** (2026-05-13) — First-class reasoning-model support: thinking content blocks end-to-end (fixes [#161](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/161)) + `reasoning_effort='xhigh'` for GPT-5.5 / o1 / o3 / o4 / DeepSeek-thinking. DeepSeek V4 Pro + Xiaomi MiMo + Qwen 3.6 + Doubao in `/setup` (options 7-10). Object-style hooks parser. Default model bumped to Claude Opus 4.7 + GPT-5.5. REPL input hardening (multi-line wrap / Cmd+V paste / CJK boundary). GitHub Actions CI. Credits: [@GO-player-hhy](https://github.com/GO-player-hhy) ([#186](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/186)), [@Jxy-yxJ](https://github.com/Jxy-yxJ) ([#171](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/171)), [@GetIT-Sunday](https://github.com/GetIT-Sunday) ([#216](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/216) partial).
>
> </details>
>
> <details><summary>Older versions</summary>
>
> **v0.4.4** (2026-04-20) — **Setup UX + reviewer routing fixes** (resolves [#158](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/158), [#162](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/162)) | `/setup` no longer forces Bearer for Anthropic + custom URL | Provider-aware proxy URL hints | Stale state no longer leaks across provider switches | LlmReview smart fallback
>
> **v0.4.3** (2026-04-17) — **Third-party Anthropic-compat proxy support** (Bedrock etc.) | Skip beta flags that proxies reject | Propagate custom base URL for `anthropic` provider | Credit [@screw-44](https://github.com/screw-44)
>
> **v0.4.2** (2026-04-17) — **Auto-compaction corruption fix** | Compaction summary preserved on OpenAI-compat executors | Shell-provided API keys no longer erased on launch
>
> **v0.4.1** (2026-04-15) — **Plan mode** (`/plan`) | Cooperative Ctrl+C interrupt | Auto-retry (429/5xx/network) | **Research Wiki** 📚 (persistent knowledge base) | **Self-Evolution** 🧬 (`/meta-optimize`) | Local models (LM Studio/Ollama) | 62 skills synced
>
> **v0.3.11** (2026-04-13) — Reviewer Anthropic-compatible mode (Claude via proxy)
>
> **v0.3.9** (2026-04-11) — Proxy/custom base URL (CCSwitch) | Local models (LM Studio/Ollama) | Windows (experimental)
>
> **v0.3.5** (2026-04-08) — **Research Wiki** (persistent papers/ideas/experiments/claims + relationship graph) | **Meta-Optimize** self-evolution (analyze logs → propose SKILL.md patches)
>
> **v0.3.0** (2026-04-03) — Multi-file memory index | Rich task system (TodoWrite) | `/plan` | Security hardening
>
> **v0.2.2** (2026-04-03) — `/plan` step-by-step planning | `/tasks` persistent tracking
>
> **v0.2.1** (2026-04-03) — Persistent Memory | Kimi K2.5 multi-turn fix | CJK cursor fix
>
> **v0.2.0** (2026-04-02) — Open source | Kimi + MiniMax + GLM support | Smart LlmReview routing | CI/CD
>
> **v0.1.0** (2026-04-02) — Initial release | Multi-executor & reviewer | 42 bundled skills
>
> </details>

![ARIS Logo](docs/aris_logo.svg)

![Hero](docs/hero_combined.svg)

[中文版 README](README_CN.md) | English

> 🌙 **Let Claude Code do research while you sleep.** Wake up to find your paper scored, weaknesses identified, experiments run, and narrative rewritten — autonomously.
>
> 🪶 **Radically lightweight — no infrastructure, zero lock-in.** The entire skill layer is plain Markdown files. No framework to learn, no database to maintain, no Docker to configure, no daemon to babysit. Every skill is a single `SKILL.md` readable by any LLM — swap Claude Code for [Codex CLI](skills/skills-codex/), [OpenClaw](docs/OPENCLAW_ADAPTATION.md), [Cursor](docs/CURSOR_ADAPTATION.md), [Trae](docs/TRAE_ARIS_RUNBOOK_EN.md), [Antigravity](docs/ANTIGRAVITY_ADAPTATION.md), [Copilot CLI](docs/COPILOT_CLI_ADAPTATION.md), Windsurf, or your own agent and the workflows still work. Fork it, rewrite it, adapt it to your stack.

Custom [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skills for autonomous ML research workflows. These skills orchestrate **cross-model collaboration** — Claude Code drives the research while an external LLM (via [Codex MCP](https://github.com/openai/codex)) acts as a critical reviewer. 🔀 **Also supports [alternative model combinations](#alternative-model-combinations) (Kimi, LongCat, DeepSeek, etc.) — no Claude or OpenAI API required.** For example, [MiniMax-M3 + GLM-5 or GLM-5 + MiniMax-M3](docs/MiniMax-GLM-Configuration.md). 🤖 **[Codex CLI native](skills/skills-codex/)** — full skill set also available for OpenAI Codex. 🖱️ **[Cursor](docs/CURSOR_ADAPTATION.md)** — works in Cursor too. 🖥️ **[Trae](docs/TRAE_ARIS_RUNBOOK_EN.md)** — ByteDance AI IDE. 🚀 **[Antigravity](docs/ANTIGRAVITY_ADAPTATION.md)** — Google's agent-first IDE. 🐙 **[Copilot CLI](docs/COPILOT_CLI_ADAPTATION.md)** — GitHub's terminal agent (native SKILL.md + MCP). 🆓 **[Free tier via ModelScope](docs/MODELSCOPE_GUIDE.md) — zero cost, zero lock-in.**

> 💭 **Why not self-play with a single model?** Using Claude Code subagents or agent teams for both execution and review is technically possible, but tends to fall into **local minima** — the same model reviewing its own patterns creates blind spots.
>
> *Think of it like adversarial vs. stochastic bandits: a single model self-reviewing is the stochastic case (predictable reward noise), while cross-model review is adversarial (the reviewer actively probes weaknesses the executor didn't anticipate) — and adversarial bandits are fundamentally harder to game.*
>
> 💭 **Why two models, not more?** Two is the minimum needed to break self-play blind spots, and 2-player games converge to Nash equilibrium far more efficiently than n-player ones. Adding more reviewers increases API cost and coordination overhead with diminishing returns — the biggest gain is going from 1→2, not 2→4.
>
> Claude Code's strength is fast, fluid execution; Codex (GPT-5.6-Sol xhigh) is slower but more deliberate and rigorous in critique. These complementary styles — **speed × rigor** — produce better outcomes than either model talking to itself.
>
> 🧿 **Want the strongest possible reviewer?** Add `— reviewer: oracle-pro` to any skill to route reviews through **GPT-5.5 Pro** via [Oracle MCP](https://github.com/steipete/oracle). Pro-level reasoning for proof verification, experiment auditing, and final stress tests. Works with API key or free browser mode. [Setup →](#-optional-gpt-54-pro-via-oracle)

<a id="contents"></a>

## Contents

1. [More Than Just a Prompt](#more-than-just-a-prompt)
2. [What's New](#whats-new) · changelog
3. [Quick Start](#quick-start) · install + first run
4. [Features](#features)
5. [Score Progression (Real Run)](#score-progression)
6. [Community Showcase — Papers Built with ARIS](#community-showcase)
7. [Awesome Community Skills & Extensions](#awesome-community-skills)
8. [Workflows](#workflows) · 13 named pipelines (W1 / W1.5 / W2 / W3 / W4 / W5 / W6 / Wiki / WM + Effort / Assurance / Oracle)
9. [Setup](#setup) · prerequisites / install / update / usage / [GPU server config](#gpu-server-setup)
10. [Customization](#customization) · per-skill config knobs
11. [Alternative Model Combinations](#alternative-model-combinations) · GLM / MiniMax / Kimi / etc.
12. [Community](#community)
13. [Citation](#citation)
14. [Star History](#star-history)
15. [Acknowledgements](#acknowledgements)
16. [License](#license)

---

<a id="more-than-just-a-prompt"></a>

## 1. 🎯 More Than Just a Prompt

> These are full pipelines — you can also use each workflow independently. Already have an idea? Skip to Workflow 1.5. Have results? Jump to Workflow 3. Got reviews? Jump to Workflow 4. Want persistent memory? Enable [Research Wiki](#-research-wiki--persistent-research-memory). See [Quick Start](#quick-start) for all commands and [Workflows](#workflows) for the full breakdown.

**Basic mode** — give ARIS a research direction, it handles everything:

```
/research-pipeline "factorized gap in discrete diffusion LMs"
```

**🔥 Targeted mode** — got a paper you want to improve? Give ARIS the paper + the code:

```
/research-pipeline "improve method X" — ref paper: https://arxiv.org/abs/2406.04329, base repo: https://github.com/org/project
```

ARIS reads the paper → finds its weaknesses → clones the codebase → generates ideas that specifically fix *those* weaknesses with *that* code → runs experiments → writes your paper. Like telling a research assistant: *"read this paper, use this repo, find what's missing, and fix it."*

> Mix and match: `ref paper` only = "what can be improved?", `base repo` only = "what can I build with this code?", both = "improve *this* paper using *this* code."

**🔥 Rebuttal mode** — reviews just dropped? Don't panic. ARIS reads every concern, builds a strategy, and drafts a rebuttal that's grounded, structured, and under the character limit:

```
/rebuttal "paper/ + reviews" — venue: ICML, character limit: 5000
```

Three safety gates — rebuttal will NOT finalize if any fails:
- 🔒 **No fabrication** — every claim maps to paper/review/user-confirmed result
- 🔒 **No overpromise** — every promise is user-approved
- 🔒 **Full coverage** — every reviewer concern is tracked

Two outputs: `PASTE_READY.txt` (exact char count, paste to venue) + `REBUTTAL_DRAFT_rich.md` (extended version for manual editing).

<details>
<summary><b>Show rebuttal parameters</b> — venue, character limit (required), quick mode, auto experiment, stress test rounds, followup rounds</summary>

| Parameter | Default | What it does |
|-----------|---------|-------------|
| `venue` | `ICML` | Target venue (ICML/NeurIPS/ICLR/CVPR/ACL/AAAI/ACM) |
| `character limit` | — | **Required.** Hard character limit for rebuttal text |
| `quick mode` | `false` | Stop after parsing + strategy (Phase 0-3). See what reviewers want before drafting |
| `auto experiment` | `false` | Auto-run supplementary experiments via `/experiment-bridge` when reviewers ask for new evidence |
| `max stress test rounds` | `1` | How many times GPT-5.6-Sol xhigh stress-tests the draft |
| `max followup rounds` | `3` | Per-reviewer follow-up round limit |

</details>

**After acceptance** — your paper is in, now prepare the presentation:

```
/paper-slides "paper/"     # → Beamer PDF + PPTX + speaker notes + Q&A prep
/paper-poster-html "paper/" # → measurement-gated HTML/CSS poster → print-ready PDF
```

> *💡 From idea to paper to podium — one toolchain. 🌱*

<a id="whats-new"></a>

## 2. 📢 What's New

- **2026-08-21** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🔌 **Codex reviewer unreachable? You can now configure an HTTP fallback** ([#413](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/413), closes [#412](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/412); by [@TheFlashForge](https://github.com/TheFlashForge)). Opt-in and off by default: set `LLM_REVIEW_FALLBACK_ENABLED=true` on the `llm-chat` MCP server and reviews can fall back to any OpenAI-compatible endpoint — but only when Codex provably never received the request. A timeout does **not** trigger it: the review may already be running, and re-sending would mean paying twice for two possibly conflicting verdicts. The fallback reviewer reads your actual files, not the executor's summary, must be a different model family than the executor, and gets *less* trust than Codex — never more. ⚠️ Run `bash tools/smart_update.sh --apply` to pull.
- **2026-08-21** — ![FIX](https://img.shields.io/badge/FIX-2ea44f?style=flat-square) 🧹 **Four community fixes merged in one day** ([#406](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/406), [#408](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/408), [#409](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/409), [#410](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/410); by [@ZLZLGe](https://github.com/ZLZLGe) and [@JasmineLCY](https://github.com/JasmineLCY)). Overnight runs no longer stall at a checkpoint waiting for an answer that can never arrive — `AUTO_PROCEED=true` now genuinely continues on its own, `false` still stops and asks ([#410](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/410), closes [#30](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/30)). An idea-discovery run can no longer claim it was reviewed when no review happened — the gate now wants the reviewer's actual model and session on record before it opens ([#409](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/409), closes [#375](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/375)). Cached research-wiki context gets scanned right before `/idea-creator` reads it, so a booby-trapped web page can't ride the cache into your prompt — and if the scan can't run, the run simply proceeds without wiki context instead of failing ([#408](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/408)). Codex users who picked Claude as their reviewer get `paper-figure` / `paper-plan` / `paper-write` back — a quote-escaping bug had made those three skills invisible to strict loaders ([#406](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/406)). ⚠️ Run `bash tools/smart_update.sh --apply` to pull.
- **2026-08-09** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🦆 **Copilot CLI now defaults `/auto-review-loop` to its native complementary rubber-duck reviewer** ([#360](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/360), closes [#258](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/258)). No fixed GPT model and no second Copilot process: each round dispatches the built-in subagent, then a load-bearing helper binds and revalidates Copilot's session-event lifecycle, actual executor/reviewer models, cross-family relation, and raw response before the stop gate can accept it. Same/unknown-family, stale, malformed, or unavailable native review fails closed to a known opposite-family external fallback or `REVIEW_UNAVAILABLE`. Explicit external reviewer choices still win — and **the standard Claude Code + Codex setup is untouched**: the native route activates only when ARIS itself runs inside a Copilot CLI session (a one-time host probe decides; anywhere else it falls straight back to the Codex default).
- **2026-08-09** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🚧 **`/idea-discovery` can no longer silently skip a stage** ([#383](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/383), closes [#285](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/285); by [@3mom3](https://github.com/3mom3)). A deterministic evidence gate checks each of the five stages for a recorded run-state entry plus its canonical report section before the final report may be declared complete — anything missing yields a visible `BLOCKED: <stage> evidence missing` section instead of a complete-looking `IDEA_REPORT.md`. The gate proves execution evidence only; per-stage acceptance stays with each stage's own review gate. ⚠️ Run `bash tools/smart_update.sh --apply` to pull.
- **2026-08-05** — ![FIX](https://img.shields.io/badge/FIX-2ea44f?style=flat-square) 🈶 **The research wiki now handles non-ASCII correctly** ([#386](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/386), [#387](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/387); reported by [@LIMMIL7](https://github.com/LIMMIL7)). Two bugs stacked: most file ops in `research_wiki.py` inherited the platform encoding, so a wiki written on a cp936 locale was unreadable elsewhere — and `slugify()` stripped every non-ASCII character, so a Chinese-only title collapsed to `<year>_untitled` and a second such paper from the same year was silently dropped as a duplicate. Both fixed; ASCII slugs are unchanged, and existing UTF-8 wikis stay compatible (a legacy cp936 wiki now names the file it needs converted instead of raising a traceback). Also: `/research-lit` now warns instead of skipping silently when no local paper library is found. ⚠️ Run `bash tools/smart_update.sh --apply` to pull.
- **2026-08-04** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🖼️ **Upstream spotlight: [posterly](https://github.com/Chenruishuo/posterly) — the engine behind `/paper-poster-html` — just got a big design upgrade.** posterly (MIT, by [@Chenruishuo](https://github.com/Chenruishuo)) is the project whose measurement-gate machinery `/paper-poster-html` adapted. Its developer reports ~50 posters at this year's ICML were built with it, and the post-conference update distills what makes successful conference posters work — much stronger design variety on top of the "works out of the box" baseline. If you make posters, it's worth a look: [GitHub](https://github.com/Chenruishuo/posterly) · [Blog](https://www.tryposterly.com/blog).
- **2026-08-03** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🧭 **`/proof-orchestrator` — Workflow 7, the standalone theory track: proof campaigns with a memory** ([#381](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/pull/381), community contribution by [@shenmuxing](https://github.com/shenmuxing), adapted from their own [EtaSkill](https://github.com/shenmuxing/EtaSkill)). Hard theorems rarely fall in one chat turn — this skill runs proof work as a stateful, local-first pipeline: freeze the exact target, attempt and audit locally, pass a 7-line notation scorecard (zero undefined symbols, zero collisions) and a top-down derivation-structure gate — a bug-catcher in disguise: circular reasoning surfaces the moment a proof is rewritten target-first — and when a proof stalls, get a copy-paste-ready GPT Pro handoff package. Runs continue across sessions: each run records which prior claims were proved, conjectural, or rejected, and only audited claims are reused. A DeepSeek adversarial second opinion is available on request. Nothing in Workflows 1–6 calls it; `/proof-checker` remains the submission gate. ⚠️ Run `bash tools/smart_update.sh --apply` to pull.
<details>
<summary>Earlier updates (2026-03-12 — 2026-07-14, 81 entries)</summary>

- **2026-07-14** — ![NEW](https://img.shields.io/badge/NEW-red?style=flat-square) 🐞 **[`/web-debug-search`](skills/web-debug-search/SKILL.md)** (Issue [#211](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/211)). Adds a focused debugging/discovery workflow for GitHub Issues and Discussions: exact and normalized error-string matching, version compatibility tracking, and explicit failure handling. Results are labeled for debugging only and are not paper-citation evidence.

<!-- opensource-radar:truncated -->
