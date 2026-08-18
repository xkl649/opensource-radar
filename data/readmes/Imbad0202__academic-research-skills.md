# Academic Research Skills for Claude Code

[![Version](https://img.shields.io/badge/version-v3.20.1-blue)](https://github.com/Imbad0202/academic-research-skills/releases/tag/v3.20.1)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.20696614-blue)](https://doi.org/10.5281/zenodo.20696614)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Sponsor](https://img.shields.io/badge/sponsor-Buy%20Me%20a%20Coffee-orange?logo=buy-me-a-coffee)](https://buymeacoffee.com/crucify020v)

[简体中文版](README.zh-CN.md) | [繁體中文版](README.zh-TW.md) | [日本語版](README.ja-JP.md) | [한국어](README.ko-KR.md)

A comprehensive suite of Claude Code skills for academic research, covering the full pipeline from research to publication.

**Install in 30 seconds** (Claude Code CLI / VS Code / JetBrains, v3.7.0+):

```text
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

Then try `/ars-plan` to walk through your paper structure via Socratic dialogue, or jump to [Quick install](#quick-install) for prerequisites and the traditional symlink flow.

> **AI is your copilot, not the pilot.** This tool won't write your paper for you. It handles the grunt work — hunting down references, formatting citations, verifying data, checking logical consistency — so you can focus on the parts that actually require your brain: defining the question, choosing the method, interpreting what the data means, and writing the sentence after "I argue that."
>
> Unlike a humanizer, this tool doesn't help you hide the fact that you used AI. It helps you write better. Style Calibration learns your voice from past work. Writing Quality Check catches the patterns that make prose feel machine-generated. The goal is quality, not cheating.

### Why human-in-the-loop, not full automation?

Lu et al. (2026, *Nature* 651:914-919) built **The AI Scientist** — the first fully autonomous AI research system to publish a paper through blind peer review at a top-tier ML venue (ICLR 2025 workshop, score 6.33/10 vs workshop average 4.87). Their Limitations section enumerates the failure modes that any fully-autonomous AI research pipeline inherits: implementation bugs, hallucinated results, shortcut reliance, bug-as-insight reframing, methodology fabrication, frame-lock, citation hallucinations.

ARS is built on the premise that **a human researcher augmented by AI avoids these failure modes better than either alone**. Stage 2.5 and Stage 4.5 integrity gates run a 7-mode blocking checklist (see [`academic-pipeline/references/ai_research_failure_modes.md`](academic-pipeline/references/ai_research_failure_modes.md)); the reviewer offers an opt-in calibration mode that measures its own FNR/FPR against a user-supplied gold set.

[**Zhao et al.**](https://arxiv.org/abs/2605.07723) (2026-05) audited 111M references across 2.5M papers on arXiv, bioRxiv, SSRN, and PMC. Their conservative estimate is 146,932 hallucinated citations for 2025 alone, with an observed mid-2024 inflection; for the bioRxiv-to-PMC pairing they report 85.3% preprint-to-published persistence. The paper describes "real citations deployed to support claims the cited references do not actually make" as an open challenge. ARS v3.7.1 added trust-chain frontmatter for source provenance; v3.7.3 added locator infrastructure (three-layer citation anchors) for future claim-level audits and surfaces advisory risk signals at cite time (ARS labels the claim-faithfulness gap internally as "L3"; this is ARS terminology, not the paper's). v3.7.x is motivated by Zhao et al.'s corpus-scale findings; corpus-scale evaluation of ARS itself remains future work.

v3.8 closes the second half of the L3 gap. v3.7.3 made every citation carry a locator anchor; v3.8 adds an opt-in audit pass (`ARS_CLAIM_AUDIT=1`) that fetches the cited source against each anchor and judges whether the claim is actually supported. Five new HIGH-WARN classes (claim-not-supported, negative-constraint-violation, fabricated-reference, anchorless, constraint-violation-uncited) gate-refuse output through the formatter terminal hard gate. Calibration is shipped as a 20-tuple gold set with FNR<0.15 + FPR<0.10 acceptance thresholds; ramp-on plan is deferred to post-calibration evidence per v3.8 spec §5.

[**Ren et al.**](https://arxiv.org/abs/2607.13104) (2026, *Self-Improvements in Modern Agentic Systems: A Survey*) supplies a third, survey-level anchor. Its scientific-discovery synthesis (§7.4) concludes that discovery agents cannot easily verify novelty, correctness, or reproducibility on their own and may exploit weak proxies instead, must manage evidence across heterogeneous tools and literature, and raise governance issues — "scientific writing can also amplify misinformation when the evidence is weak." Its generation-loop chapters (§5.1–§5.2) list human auditing and retained human anchors among the practical safeguards for self-generated evaluation loops, and its historical chapter (§2.2) records the oldest form of the same lesson: the practical success of Lenat's EURISKO depended heavily on the user serving as the external evaluation signal, pruning unproductive heuristic drift — a limitation the survey notes persists in modern agentic systems. ARS cites the survey as design rationale for its human-in-the-loop stance, not as empirical proof that human-in-the-loop pipelines outperform autonomous ones; the survey's actionable deltas for ARS are tracked in #539–#541 and #547–#550.

v3.3 was inspired by [**PaperOrchestra**](https://arxiv.org/abs/2604.05018) (Song, Song, Pfister & Yoon, 2026, Google): Semantic Scholar API verification, anti-leakage protocol, VLM figure verification, and revision-trajectory tracking. ARS now implements that last idea through categorical, evidence-anchored criterion trajectories rather than score deltas.

---

## Architecture & pipeline

**👉 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** — the full pipeline view: flow diagram, stage-by-stage matrix, data-access flow, skill dependency graph, quality gates, and mode list.

The architecture doc supersedes the sprawling pipeline description that used to live here. Everything about *what runs in which stage* now lives in one place.

## Quick install

**Prerequisites**

- [Claude Code](https://docs.claude.com/en/docs/claude-code/setup) (latest; plugin packaging requires recent versions)
- `ANTHROPIC_API_KEY` exported, or set on first `claude` run
- *Optional:* Pandoc for DOCX, tectonic + Source Han Serif TC for APA 7.0 PDF (Markdown output works without either)
- *Optional (real Python):* The core skills (research / write / review) need no Python — they are prompt-driven. A **real Python interpreter** is needed only for: the `PreToolUse` write-scope guard (optional subagent hardening — if no real Python is found it cleanly no-ops and the guard is simply inactive; core skills are unaffected), plus a few opt-in features that shell out to Python (revision-patch mode, the submission-package verifier, and the `/ars-cache-invalidate` / `/ars-mark-read` / `/ars-unmark-read` commands). On Windows, note that `python3` is often a non-functional Microsoft Store placeholder rather than real Python; install Python from python.org (or via `winget`) so the launcher can find a real interpreter. The guard launcher is a POSIX shell script and `hooks.json` invokes it through `bash`, so on Windows it needs **Git Bash** (bundled with Git for Windows). With Git Bash present, a missing real Python degrades cleanly (the guard no-ops, silently). Without Git Bash, Claude Code falls back to PowerShell, which cannot run the `.sh` launcher at all: the guard is inactive and the `PreToolUse` hook will log an error per call rather than no-op quietly (accepted degradation — the guard is optional and never blocks your writes, but the hook noise is the trade-off until Git Bash is installed).

> **Which controls are active in *your* install channel?** Availability varies by install channel. See the per-channel map: [docs/CONTROL_AVAILABILITY.md](docs/CONTROL_AVAILABILITY.md).

**Plugin install (v3.7.0+, recommended):**

```text
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

**Verify it works:** run `/ars-plan` and describe a paper you're working on — ARS will start a Socratic dialogue to map out chapter structure. For a single-shot test instead, try `/ars-lit-review "your topic"`.

**👉 [docs/SETUP.md](docs/SETUP.md)** — full guide: install Claude Code, set up API keys, optional Pandoc/tectonic for DOCX/PDF, cross-model verification (`ARS_CROSS_MODEL`), and six installation methods (Plugin, project skills, global skills, claude.ai Project, repo-cloned, Claude Science import).

**👉 [docs/DATA_FLOWS.md](docs/DATA_FLOWS.md)** — what leaves your machine (bibliographic resolvers, optional consent-gated cross-model calls, the plugin update check), what is cached locally, for how long, and how to turn each path off.

**Using Claude Science?** The four skills import directly: **Skills → Import from GitHub**, paste `https://github.com/Imbad0202/academic-research-skills`, **Preview**, then **Import 4 skills** (requires v3.14.0+ of this repo — the importer reads the explicit skill paths in the marketplace manifest). Imports are point-in-time snapshots: re-import after ARS updates. Imported skills carry the ARS methodology (research / writing / review protocols); Claude Code-specific machinery — slash commands, hooks, subagent orchestration — does not transfer. See [docs/SETUP.md](docs/SETUP.md) Method 5 for details.

**Using Pi?** Install the in-tree, community-maintained wrapper with `pi install git:github.com/Imbad0202/academic-research-skills`. It keeps the original ARS content authoritative and documents Pi-specific orchestration and hook limitations. See [`pi/README.md`](pi/README.md).

**Using Codex CLI?** Install the sibling distribution instead: [`Imbad0202/academic-research-skills-codex`](https://github.com/Imbad0202/academic-research-skills-codex) — same workflow content, Codex-native packaging as a single `$academic-research-suite` skill with `ars-*` aliases.

**Third-party platforms and integrations** that wrap or host ARS are listed in [THIRD_PARTY.md](THIRD_PARTY.md) — community-submitted and not reviewed or endorsed by the maintainer.

## Performance & cost

**👉 [docs/PERFORMANCE.md](docs/PERFORMANCE.md)** — per-mode token budgets, full-pipeline estimate (~$4–6 for a 15k-word paper), and recommended Claude Code settings (Auto mode; Agent Team optional).

## Guides & articles

- [Academic Writing Shouldn't Be a Solo Act](https://open.substack.com/pub/edwardwu223235/p/academic-writing-shouldnt-be-a-solo?r=4dczl&utm_medium=ios) — full pipeline walkthrough (English)
- [學術寫作不該是一個人的事：一套開源 AI 協作工具如何改變研究者的工作流](https://open.substack.com/pub/edwardwu223235/p/ai?r=4dczl&utm_medium=ios) — 完整使用指南（繁體中文）

---

## Features at a glance

- **Deep Research** — 13-agent research team with Socratic guided mode, PRISMA systematic review, intent detection, dialogue health monitoring, optional cross-model DA, Semantic Scholar API verification.
- **Academic Paper** — 12-agent paper writing with Style Calibration, Writing Quality Check, LaTeX hardening, visualization, revision coaching, citation conversion, anti-leakage protocol, and VLM figure verification.
- **Academic Paper Reviewer** — 7-agent multi-perspective peer review with criterion-bound, evidence-anchored narrative judgements (Journal-Fit Reviewer + 3 dynamic reviewers + Devil's Advocate), concession threshold protocol, attack intensity preservation, optional cross-model DA critique / calibration, R&R traceability matrix, read-only constraint. Current live reviews remain `NOT_CALIBRATED`; full calibration produces a bounded candidate profile, while live-profile application is not yet wired.
- **Academic Pipeline** — 10-stage pipeline orchestrator with adaptive checkpoints, claim verification, Material Passport, optional `repro_lock`, optional cross-model integrity verification, mid-conversation reinforcement, and narrative criterion-by-criterion regression checks (the typed trajectory carrier is deferred).
- **Data Access Level Metadata** (v3.3.2+) — every skill declares `data_access_level` (`raw` / `redacted` / `verified_only`); enforced by `scripts/check_data_access_level.py`. Pattern adapted from Anthropic's automated-w2s-researcher (2026). See [`shared/ground_truth_isolation_pattern.md`](shared/ground_truth_isolation_pattern.md).
- **Task Type Annotation** (v3.3.2+) — every skill declares `task_type` (`open-ended` or `outcome-gradable`). All current ARS skills are `open-ended`.
- **Benchmark Report Schema** (v3.3.5+) — JSON Schema + lint for honest benchmark comparisons. See [`shared/benchmark_report_pattern.md`](shared/benchmark_report_pattern.md).
- **Artifact Reproducibility Lockfile** (v3.3.5+) — optional `repro_lock` sub-block on Material Passport. **Configuration documentation, not replay guarantee** — LLM outputs are not byte-reproducible. See [`shared/artifact_reproducibility_pattern.md`](shared/artifact_reproducibility_pattern.md).
- **Model Tiering** (#517, v3.16+) — optional `ARS_MODEL_TIERING` switch with two directions: `economy` (execution-type agents dispatch one tier below the session model, floor Opus-class) and `quality-boost` (judgment-type agents at integrity gates and final review step up to the frontier tier). Default unset = byte-equivalent to pre-#517 behavior. See [`shared/model_tiering.md`](shared/model_tiering.md).
- **Canonical Cross-Model Handoff Envelope** (#527, v3.17+) — the owner→dispatcher→owner blind-checkpoint transport path (#523) now has a machine-stable `[CROSS-MODEL-HANDOFF v1]` envelope with a normative Python grammar (`scripts/cross_model_handoff.py`) instead of prose-only enforcement, pinning agreement/divergence/malformed-result routing across all three checkpoint owners. See [`shared/cross_model_verification.md`](shared/cross_model_verification.md) §"Cross-model handoff envelope".
- **Experiment Provenance Intake** (#260) — optional `experiment_provenance[]` on the Material Passport records experiments the scholar ran **externally** (ARS never runs experiments), and manuscript claims join to them via `claim_intent_manifest.planned_experiment_ids[]`. The integrity gate (Stage 2.5/4.5) audits each experiment-backed claim against declared provenance — `ALIGNED` / `OVERSTATED` / `NOT_SUPPORTED_BY_PROVENANCE` / `PROVENANCE_INSUFFICIENT` — **without judging whether the experiment itself was correct**. A fail-closed `experiment_intake_declaration` makes "did you run experiments?" an explicit Stage 1 decision (even literature-only runs declare `no_experiments_declared`). See [`shared/handoff_schemas.md`](shared/handoff_schemas.md) §"Experiment Provenance Intake (#260)".

**Integrity and verification boundary:** ARS checks the manuscript and the reported process—including citation existence, claim–source alignment, reported methodology, declared experiment–result alignment, figure/table fidelity, and reporting/process/package conformance. Some checks are sampled or LLM-mediated. ARS does **not** establish that procedures were actually performed, raw data are authentic, or results reproduce; a consistently reported fabrication can pass these checks. See [POSITIONING.md § Integrity checks and the empirical-work boundary](POSITIONING.md#integrity-checks-and-the-empirical-work-boundary).

---

## Showcase: real pipeline output

See the complete artifacts from a real 10-stage pipeline run — peer review reports, integrity verification reports, and the final paper:

**[Browse all pipeline artifacts →](examples/showcase/)**

| Artifact | Description |
|---|---|
| [Final Paper (EN)](examples/showcase/full_paper_apa7.pdf) | APA 7.0 formatted, LaTeX-compiled |
| [Final Paper (ZH)](examples/showcase/full_paper_zh_apa7.pdf) | Chinese version, APA 7.0 |
| [Integrity Report — Pre-Review](examples/showcase/integrity_report_stage2.5.pdf) | Stage 2.5: caught 15 fabricated refs + 3 statistical errors |
| [Integrity Report — Final](examples/showcase/integrity_report_stage4.5.pdf) | Stage 4.5: zero regressions confirmed |
| [Peer Review Round 1](examples/showcase/stage3_review_report.pdf) | Journal-Fit Reviewer + 3 Reviewers + Devil's Advocate |
| [Re-Review](examples/showcase/stage3prime_rereview_report.pdf) | Verification after revisions |
| [Peer Review Round 2](examples/showcase/stage3_review_report_r2.pdf) | Follow-up review |
| [Response to Reviewers](examples/showcase/response_to_reviewers_r2.pdf) | Point-by-point author response |
| [Post-Publication Audit Report](examples/showcase/post_publication_audit_2026-03-09.pdf) | Independent full-reference audit: found 21/68 issues missed by 3 rounds of integrity checks |

---

## Companion: Experiment Agent

If your research involves running experiments (code or human studies) before writing, the [Experiment Agent](https://github.com/Imbad0202/experiment-agent) skill fills the gap between ARS Stage 1 (RESEARCH) and Stage 2 (WRITE).

```
ARS Stage 1 RESEARCH  →  RQ Brief + Methodology Blueprint
        ↓
  experiment-agent     →  run/manage experiments → validate results
        ↓
ARS Stage 2 WRITE     →  write paper with verified experiment results
```

**What it does**: executes code experiments (Python, R, etc.) with real-time monitoring, manages human study protocols with IRB ethics checklist, interprets statistics with 11-type fallacy detection, and verifies reproducibility.

**How to use together**: pause the ARS pipeline after Stage 1, run experiments in a separate experiment-agent session, then bring the results (with Material Passport) back to ARS Stage 2. ARS requires zero modification. See the [experiment-agent README](https://github.com/Imbad0202/experiment-agent) for setup instructions.

**Stage 1 intake declaration (#260)**: at Stage 1, ARS detects whether the run will carry experiment-backed claims and sets a fail-closed `experiment_intake_declaration` on the Material Passport. If you ran experiments externally, the scholar enters one `experiment_provenance[]` entry per experiment (`experiment_id`, nested `repro_lock`, `planned_vs_executed[]`, `negative_results[]`, `known_limitations[]`) and the declaration is set to `experiments_declared`; if not, it is set to `no_experiments_declared`. The declaration is **required on every post-#260 passport** — a run that touches no experiments still declares `no_experiments_declared`, so the integrity gate can never be silently bypassed by a forgotten provenance block. The `experiment_id`s are frozen at this intake point; the writers later reference them via `planned_experiment_ids[]`.

**Teaching-side companion**: [Teaching Skills](https://github.com/YujxZJCN/teaching-skills) applies the ARS architecture (skill ensembles, shared contracts, staged gates, a Course Passport) to the teaching side of academic life — course design → lessons → assessment → delivery → reflection; its `sotl` mode hands classroom-inquiry projects off to ARS deep-research / academic-paper for the publication phase.

---

## Usage

### Quick Start

```
# Start a full research pipeline
You: "I want to write a research paper on AI's impact on higher education QA"

# Start with Socratic guidance
You: "Guide my research on AI in educational evaluation"

# Write a paper with guided planning
You: "Guide me through writing a paper on demographic decline"

# Review an existing paper
You: "Review this paper" (then provide the paper)

# Check pipeline status
You: "status"
```

### Individual Skills

#### Deep Research (8 modes)

```
"Research the impact of AI on higher education"       → full mode
"Give me a quick brief on X"                          → quick mode
"Do a systematic review on X with PRISMA"             → systematic-review mode
"Guide my research on X"                              → socratic mode (guided)
"Fact-check these claims"                             → fact-check mode
"Do a literature review on X"                         → lit-review mode
"Compare these papers in WHY/HOW/WHAT format"         → three-way-scan mode
"Review this paper's research quality"                → review mode
```

#### Academic Paper (11 modes)

```
"Write a paper on X"                                  → full mode
"Guide me through writing a paper"                    → plan mode (guided)
"Build a paper outline"                               → outline-only mode
"I have a draft, here are reviewer comments"          → revision mode
"Parse these reviewer comments into a roadmap"        → revision-coach mode
"Write an abstract for this paper"                    → abstract-only mode
"Turn this into a literature review paper"            → lit-review mode
"Convert to LaTeX" / "Convert citations to IEEE"      → format-convert mode
"Check citations"                                     → citation-check mode
"Generate an AI disclosure statement for NeurIPS"     → disclosure mode
"Audit my rebuttal draft against the reviews"         → rebuttal-audit mode
```

#### Academic Paper Reviewer (6 modes)

```
"Review this paper"                                   → full mode (Journal-Fit Reviewer + R1/R2/R3 + Devil's Advocate)
"Quick assessment of this paper"                      → quick mode
"Guide me to improve this paper"                      → guided mode
"Check the methodology"                               → methodology-focus mode
"Verify the revisions"                                → re-review mode
"Calibrate this reviewer against my gold set"         → calibration mode
```

#### Academic Pipeline (Orchestrator)

```
"I want to write a complete research paper"           → full pipeline from Stage 1
"I already have a paper, review it"                   → mid-entry at Stage 2.5 (integrity first)
"I received reviewer comments"                        → mid-entry at Stage 4
```

> Pipeline ends with **Stage 6: Process Summary** — auto-generates a paper creation process record with 6-dimension Collaboration Quality Evaluation (1–100 scoring).

### Supported Languages

- **Traditional Chinese** (繁體中文) — default when user writes in Chinese
- **English** — default when user writes in English
- Bilingual abstracts (Chinese + English) for academic papers

> **Using a different language?** Socratic mode (deep-research) and Plan mode (academic-paper) use **intent-based activation** — they detect the meaning of your request, not specific keywords. This means they work in **any language** without modification.
>
> However, the general `Trigger Keywords` section (which determines whether the skill is activated at all) still lists English and Traditional Chinese keywords. If you find the skill isn't activating reliably in your language, you can add your language's keywords to the `### Trigger Keywords` section in each `SKILL.md` file to improve matching confidence.

### Supported Citation Formats

- APA 7.0 (default, including Chinese citation rules)
- Chicago (Notes & Author-Date)
- MLA
- IEEE
- Vancouver

### Supported Paper Structures

- IMRaD (empirical research)
- Thematic Literature Review
- Theoretical Analysis
- Case Study
- Policy Brief
- Conference Paper

---

## Skill Details

Per-agent responsibilities and per-stage artifacts now live in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). Version numbers are anchored here so release metadata stays in one place.

### Deep Research (v2.12.1)

13-agent research team. Modes: full, quick, review, lit-review, three-way-scan, fact-check, socratic, systematic-review. Full agent roster and artifacts: see ARCHITECTURE.md §3.

### Academic Paper (v3.3.1)

12-agent paper writing pipeline. Modes: full, plan, outline-only, revision, revision-coach, abstract-only, lit-review, format-convert, citation-check, disclosure, rebuttal-audit. Output: MD + DOCX (via Pandoc when available) + LaTeX (APA 7.0 `apa7` class / IEEE / Chicago) → PDF via tectonic. Full agent roster and per-phase responsibilities: see ARCHITECTURE.md §3.

### Academic Paper Reviewer (v1.11.1)

7-agent multi-perspective review with **criterion-bound narrative judgements**. Modes: full, re-review, quick, methodology-focus, guided, calibration. Current live reviews and Schema 6 packages remain `NOT_CALIBRATED`; full calibration can produce a bounded candidate profile, but application to a live review is not wired. No numerical total is mapped to Accept, Minor Revision, Major Revision, or Reject. First-round review panel vs. contract-governed re-review dispatch boundary: see ARCHITECTURE.md §3 Stage 3 / Stage 3'.

### Academic Pipeline (v3.20.1)

10-stage orchestrator with integrity verification, two-stage review, Socratic coaching, and collaboration evaluation. Pipeline guarantees: every stage requires user confirmation checkpoint; integrity verification (Stage 2.5 + 4.5) cannot be skipped; R&R Traceability Matrix (Schema 11) independently verifies author revision claims. v3.4 added the Compliance Agent (PRISMA-trAIce + RAISE) at Stage 2.5 / 4.5. v3.5 adds the **Collaboration Depth Observer** (`collaboration_depth_agent`, advisory only — never blocks) at every FULL/SLIM checkpoint and at pipeline completion. MANDATORY integrity gates (2.5 / 4.5) explicitly skip the observer so compliance checks are not diluted. Based on Wang & Zhang (2026), IJETHE 23:11. Stage-by-stage matrix with agents, artifacts, and gates: see ARCHITECTURE.md §3.

---

## v3.0 Optimizations: What We Discovered About AI's Structural Limits

### What happened

While using ARS to write a reflection article about AI in higher education, I ran into three structural problems that no amount of prompt engineering could fix:

1. **Frame-lock**: I asked the AI to run a devil's advocate debate against its own thesis. It did — four rounds, each more refined than the last. But every round stayed inside the frame I'd set. The DA attacked arguments, never premises. It never asked "are we even discussing the right question?" This is the same pattern that caused the 31% citation error rate in v2.7's stress test: the verifying AI and the generating AI share the same cognitive frame.

2. **Sycophancy under pushback**: Every time I challenged the DA's attacks, it conceded too quickly. It retracted findings faster than it launched them. The model's training rewards conversational harmony — so "the user pushed back" was treated as evidence that the attack was wrong, when often it just meant the user was persistent.

3. **Intent misdetection**: The Socratic Mentor kept trying to converge and produce deliverables ("Want me to write this up?") when I was still exploring. It couldn't distinguish "the user wants a deep philosophical discussion" from "the user wants an RQ brief." Both look like engagement, but they need opposite AI behaviors.

### What we changed (v3.0)

**Devil's Advocate — Concession Threshold Protocol** (`deep-research` + `academic-paper-reviewer`)
- DA must now score every rebuttal on a 1-5 scale before responding
- Concession only allowed at score ≥4 (rebuttal directly addresses core attack with evidence)
- Score ≤3: hold position and restate the original attack
- Anti-sycophancy rules: no consecutive concessions, concession rate tracking, frame-lock detection after each checkpoint

**Socratic Mentor — Intent Detection Layer** (`deep-research`)
- Classifies user intent as exploratory vs. goal-oriented at dialogue start and every 3 turns
- Exploratory mode: disables auto-convergence, raises max rounds to 60, prohibits "want me to summarize?" prompts
- Goal-oriented mode: standard convergence behavior
- Anti-premature-closure rules: in exploratory mode, the user decides when to stop

**Socratic Mentor — Dialogue Health Indicator** (`deep-research`)
- Silent self-assessment every 5 turns on three dimensions: persistent agreement, conflict avoidance, premature convergence
- Auto-injects challenging questions when agreement pattern detected
- Invisible to user (to prevent gaming), but log available for post-session review

### Why this matters

These optimizations don't solve AI's structural limits — they make the limits visible and manageable. The DA will still eventually concede if pushed hard enough. The Socratic Mentor will still have some convergence bias. But now there are explicit checkpoints that slow down the sycophancy, force the DA to justify concessions, and prevent the Mentor from wrapping up before the user is ready.

The deeper lesson: AI literacy isn't about learning to use AI as a tool, following ethics rules, or fearing AI risks. It's about engaging AI deeply enough to discover its structural limits yourself — and your own thinking limits in the process.

---

## License

This work is licensed under [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

**You are free to:**
- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**
- **Attribution** — You must give appropriate credit
- **NonCommercial** — You may not use the material for commercial purposes

**Attribution format:**
```
Based on Academic Research Skills by Cheng-I Wu
https://github.com/Imbad0202/academic-research-skills
```

---

## Contributors

**Cheng-I Wu** (吳政宜) — Author and maintainer

**[aspi6246](https://github.com/aspi6246)** — Contributor. The v3.1 optimization was inspired by patterns from [Claude-Code-Skills-for-Academics](https://github.com/aspi6246/Claude-Code-Skills-for-Academics): read-only constraint pattern, anti-pattern codification as first-class design, cognitive framework approach (teaching "how to think" not just procedures), and lean skill size philosophy.

**[mchesbro1](https://github.com/mchesbro1)** — Contributor. Originally proposed and drafted the IS Basket of 8 journals for `academic-paper-reviewer/references/top_journals_by_field.md` ([Issue #5](https://github.com/Imbad0202/academic-research-skills/issues/5)).

**[cloudenochcsis](https://github.com/cloudenochcsis)** — Contributor. Extended the IS section from the *Basket of 8* to the full *Senior Scholars' Basket of 11* — adding *Decision Support Systems*, *Information & Management*, and *Information and Organization* ([Issue #7](https://github.com/Imbad0202/academic-research-skills/issues/7), [PR #8](https://github.com/Imbad0202/academic-research-skills/pull/8)). Sourced from the [AIS Senior Scholars' List of Premier Journals](https://aisnet.org/research/seniorscholarsbasket/).

**[eltociear](https://github.com/eltociear)** (Ikko Eltociear Ashimine) — Contributor. Translated the Japanese README ([`README.ja-JP.md`](README.ja-JP.md)) ([PR #161](https://github.com/Imbad0202/academic-research-skills/pull/161)).

**[xpfo-go](https://github.com/xpfo-go)** (xpfo) — Contributor. Translated the Simplified Chinese README ([`README.zh-CN.md`](README.zh-CN.md)) ([PR #181](https://github.com/Imbad0202/academic-research-skills/pull/181)).

**[devCharlotte](https://github.com/devCharlotte)** — Contributor. Translated the Korean README ([`README.ko-KR.md`](README.ko-KR.md)) ([PR #469](https://github.com/Imbad0202/academic-research-skills/pull/469)).

**[Yaobin29](https://github.com/Yaobin29)** — Contributor. Proposed reviewer-response tooling in [PR #433](https://github.com/Imbad0202/academic-research-skills/pull/433); the `deep-research three-way-scan` mode and the `academic-paper rebuttal-audit` mode (rescued from the PR's `audit` concept) were integrated from that contribution in v3.12.1.

**[ktao732084-arch](https://github.com/ktao732084-arch)** — Contributor. Expanded the `academic-paper` disclosure system with nine medical-publishing policy targets, target-specific required-fact intake, and fail-closed standalone rendering ([Issue #596](https://github.com/Imbad0202/academic-research-skills/issues/596), [PR #599](https://github.com/Imbad0202/academic-research-skills/pull/599)); expanded the EQUATOR clinical-reporting reference with condensed CARE, STARD and TRIPOD+AI guidance plus a fail-closed study-design routing sequence ([Issue #594](https://github.com/Imbad0202/academic-research-skills/issues/594), [PR #601](https://github.com/Imbad0202/academic-research-skills/pull/601)); and designed and contributed the standalone Chinese-literature resolver, API protocol, and synthetic transport-fixture suite ([Issue #595](https://github.com/Imbad0202/academic-research-skills/issues/595), [PR #600](https://github.com/Imbad0202/academic-research-skills/pull/600)).

---

## Changelog

### v3.20.1 (2026-08-15) — Contract-honesty hardening and bounded evaluation substrates

> **Hardened and bounded:** v3.20.1 makes review and integrity claims match the evidence the suite can actually replay. Claim coverage is population-bounded with semantic completeness left unknown; revision claim-strength changes require explicit byte-bound author dispositions; new read attestations require scope and fail visibly; live reviewer packages remain `NOT_CALIBRATED`; and six-axis provenance replaces binary independence language. It also ships the offline/unmeasured claim-standing probe substrate and a closed first-round assignment gate for the ideation-diversity bundle, plus an opt-in roadmap for future inquiry branches and alternatives. These contracts do not establish improved scientific outcomes, reviewer correctness, complete semantic detection, authenticated human identity, independent error processes, or live-provider effectiveness. Suite/pipeline → v3.20.1; deep-research → v2.12.1; academic-paper → v3.3.1; academic-paper-reviewer → v1.11.1.

### v3.20.0 (2026-08-14) — Evidence-bound review and revision, contained transports, hermetic evaluation substrates

> **Added and hardened:** v3.20.0 strengthens evidence and authority boundaries across review, revision, citation, human-subjects, and submission workflows. It adds source-bound evidence rows, author-controlled non-ranking revision roadmaps, replay-bound consistency and content-coverage advisories, unified review criteria, human-subjects authority and pathway traces, deterministic submission and correspondence artifacts, optional post-run adjudication observability, a contained ChatGPT-subscription citation transport, an offline claim-standing candidate ledger, and an opt-in process-isolated PDF text/OCR advisory. Reviewer and re-review contracts gain role-scoped scoring, evidence-before-persuasion gates, and tighter provenance and transport handling; clinical reporting, Chinese-literature resolution, plugin aliases, Pi, and platform guidance are also extended. New evaluation assets include frozen hermetic fixtures and no-call envelopes for revision drift, role topology, ideation diversity, indirect prompt injection, and tortured-phrase screening. Unless a retained measured cohort is explicitly cited in `CHANGELOG.md`, these are protocol or synthetic/offline conformance artifacts, not evidence of safety, efficacy, accuracy, or behavioral improvement. Suite/pipeline → v3.20.0; deep-research → v2.12.0; academic-paper → v3.3.0; academic-paper-reviewer → v1.11.0.

### v3.19.0 (2026-07-22) — Revision-round claim-drift guards, PDF read-integrity preflight, read-scope attestation

> **Added:** three advisory-or-opt-in integrity layers plus a launcher fix. **Revision-round claim-drift guards (#569/#570):** a claim-strength ladder ("no silent move along `is associated with < predicts < causes` without an authorizing roadmap item") wired into revision drafting and a new advisory Phase E6, plus a deterministic numeric/citation token-conservation checker — together they stand watch over the epistemic and token halves of the #390 honest-claim residual (a touched block's interior had no fidelity check; whether the guards reduce the measured drift awaits the #652 re-measurement). Baseline measured on the current frontier model first (`evals/heldout/revision_claim_drift/`), mechanism shape credited to [Yila-AI/sci-ssci-skills](https://github.com/Yila-AI/sci-ssci-skills). **PDF read-integrity preflight (#512):** a three-signal page-count cross-check so a truncated / mispaginated PDF read cannot mint an apparently-valid `page` anchor. **`read_scope` attestation (#513):** an optional honest-coverage declaration on the human-read ledger (`full_text` / `sections` / `abstract_only` / `toc_only`) that makes the finalizer's citation promotion read-scope-aware. **Launcher watchdog fix (#545):** removes a pipe-stall that blocked every healthy PreToolUse write-scope-guard call for the full wall-clock bound. Suite → v3.19.0; the three underlying skill versions are unchanged.

### v3.18.0 (2026-07-18) — Self-improvement survey integration: advisory quality layers, risk-stratified claim gate, cross-model reviewer & judge tracks

> **Added:** eight quality mechanisms motivated by Ren et al. (2026, arXiv:2607.13104, *Self-Improvements in Modern Agentic Systems: A Survey*): per-sub-question scope bindings + a Phase E scope-conformance advisory (#547) and search-bounded novelty claims + an E5 novelty classification (#548) — both advisory-only, displayed per-row at the MANDATORY integrity checkpoints; risk-stratified Stage 2.5 claim verification (100% of HIGH-IMPACT claims + a random sentinel, extending the #518 reference tiers to claim level, #549); cache-through wired into the citation-verification gate with an age-based staleness advisory + opt-in live re-validation (#541, closing the v3.11 Delta-2 forward-decl); a consent-gated cross-model reviewer track — one seat of the fixed five-seat panel on the second model family (#540) — and re-review judge independence with a transparent Judge Record (#539); a metamorphic routing/gate robustness eval seed set (#550), which also shipped the reviewer skill's missing zh-TW trigger aliases; and the survey itself as a third human-in-the-loop literature anchor (#542). Independently of the survey track, plugin installs also gain the #544 SessionStart update-available reminder (`/plugin update` announce when behind; `ARS_UPDATE_CHECK=0` kill switch). `academic-pipeline` tracks the suite at v3.18.0; the other three skill versions are unchanged.

### v3.17.0 (2026-07-16) — Pipeline boundary semantics, canonical cross-model handoff envelope, executable panel checker

> **Fixed:** two under-specified pipeline boundaries closed (#528) — Stage 5's "before finalization: always MANDATORY" now names exactly one checkpoint (the entry gate between Stage 4.5 PASS and Stage 5 dispatch), and Stage 6 gains a defined terminal-acknowledgement vocabulary (`finish`/`end`/`done`/`confirm`) plus an explicit decline path; all five pipeline surfaces now carry whole-file sha256 content locks (#529) so any further prompt-surface drift fails CI until the hash is updated in the same commit. Blind-checkpoint transport moved to the dispatching layer (#523) — the Bucket A checkpoint owners were being told to execute cross-model transport themselves, which is unexecutable under the runtime Bash deny; the dispatching layer now owns the transport call. **Added:** a canonical `[CROSS-MODEL-HANDOFF v1]` envelope + normative Python grammar (#527) replaces prose-only enforcement of the owner→dispatcher→owner transport path, pinning agreement/divergence/malformed-result routing across all three checkpoint owners. A defrift lock for the #514 tools allowlist (#524, 74 mutation tests) closes the drift path where a symmetric edit to an agent + its mirror could silently re-add Bash. An executable sprint-contract panel checker (#510) recomputes both v3.6.2 decision layers from the primary artifacts and catches a transcription error in the majority-vote formula. A machine-readable degradation registry (#511 Part A) indexes every graceful-degradation mechanism in the suite, plus a hermetic transport-fixture integration test for the citation-verification gate (#511 Part B) exercising all four resolver clients end-to-end against checked-in synthetic API bodies. `academic-pipeline` tracks the suite at v3.17.0; the other three skill versions are unchanged.

### v3.16.0 (2026-07-12) — Model tiering, cross-model gate hardening, WP advisory sharpening

> **Added:** opt-in model tiering (#517) — a new `ARS_MODEL_TIERING` switch with two directions (`economy` dispatches the 13 execution-type agents one tier below the session model, floor Opus-class; `quality-boost` steps the judgment-type agents at the integrity gates and final-review surfaces up to the frontier tier); default unset stays byte-equivalent, with the frozen 39-agent classification pinned by a new manifest + lint. Cross-model gate hardening (#518) — risk-stratified verification sampling (HIGH-IMPACT references verified 100% at both gates), blind disagreement checkpoints at the two irreversible decisions (design freeze + final editorial decision), an id-status allowlist for verifier model ids, and a promotion bakeoff protocol; the once-planned generic 6th reviewer is retired, not deferred. GPT-5.6 Sol listed as a provisional cross-model verifier with explicit reasoning-effort control (#515). Korean trigger keywords + routing boundary fixtures by devCharlotte (#452/#509). A CARS introduction-rhetoric + title-crafting reference for the paper writer (#500). **Changed:** the WP research-question advisory generalizes beyond its 20-shell table via the noun-swap test (#501) and a sharpened exemption clause that catches decorated title-form shells (#505) — held-out miss rate 0.34–0.38 → 0.094 with false-fire 0/16 preserved; reviewer calibration protocol now documents the LLM-as-judge leniency direction (FARS anchor, #484); OpenAlex API-key auth + budget-aware 429 handling + arXiv ToU-aligned backoff (#495/#496). **Docs:** THIRD_PARTY.md community directory (#497/#498). `academic-pipeline` tracks the suite at v3.16.0; the other three skill versions are unchanged.

### v3.15.0 (2026-07-04) — Release-gate hardening, prompt-debt retirement round 2, defrift locks

> A release-discipline-and-hygiene release; no skill-behavior changes. **Added:** three CI gates — the CHANGELOG-covers-merges pre-tag gate (#483), version-consistency invariants 9-11 plus a tag-time re-run gate (#487), and a command-invariants gate pinning the SessionStart announce list to the actual 16-command inventory (#486) — plus two defrift locks: the Phase Boundary enforcement sentence is pinned verbatim across all 23 Bucket A agent blocks, and the SETUP cross-model examples are pinned to each other and to the canonical model tables (#491 → #492). **Changed:** prompt-debt retirement round 2 deep-scans the 17 agents the first pass deferred (#489 → #490): two live self-contradictions fixed in both socratic_mentor agents (stale 15-round quit rules vs the documented typical 20-30-round run), the repo-wide stale enforcement-status sentence corrected at 29 surfaces, few-shot and duplicated-process scaffolds trimmed across 7 agents — verified by a 4-batch parallel audit + independent codex cross-model challenge; audit report under `audits/`. **Fixed:** DOI badge served from shields.io (#482). `academic-pipeline` tracks the suite at v3.15.0; the other three skill versions are unchanged.

### v3.14.0 (2026-07-02) — Claude Science importability, eval-comment rendering, prompt-debt retirement

> A portability-and-polish release; no skill-behavior changes. **Added:** Claude Science importability — the marketplace manifest declares explicit skill paths, so GitHub-API importers that cannot traverse the symlinked `skills/` directory (Claude Science "Import from GitHub", Windows checkouts) now find all four skills; verified end-to-end on Claude Science, with an import guide in README + SETUP (#480). Eval-harness PR comments render as a one-line verdict + per-task table with the raw JSON folded into `<details>`, replacing the raw report dump — display layer only, gate logic byte-identical (#479). **Changed:** expired writing-harness scaffolds retired from four writer-surface agents after the 2026-07 harness-retirement audit (#476/#477 → #478, net −111 prompt lines); a remind-don't-block Platform Port Reminder surfaces the platform-ports policy when a PR adds a new top-level directory (#473). **Docs:** native-reviewed Korean README by devCharlotte (#469/#471); GitHub Copilot repository instructions (#465); auto permission mode recommended over Skip Permissions (#464). The accumulated `[Unreleased]` backlog (16 entries whose code shipped before the v3.13.0 tag — diff/patch revision mode #390, submission-package verifier #394, eval gold sets #215/#216, and more) is rolled into the versioned record; see `CHANGELOG.md`. `academic-pipeline` tracks the suite at v3.14.0; the other three skill versions are unchanged.

### v3.13.0 (2026-06-18) — Hook portability, provider-agnostic verification, guard correctness

> A minor release hardening the install/runtime surface and extending cross-model reach. **Fixes:** the write-scope guard no longer false-denies a user's own `CLAUDE.md` under the git-clone + symlink install layout (#459, closing the residual half of #448/#449 — `CLAUDE.md` is documentation, not a load-bearing enforcement file, so it leaves the infra-protected list while every load-bearing file stays protected); Windows Python hook portability + graceful no-Python degradation via a cross-platform `hooks/run_guard.sh` launcher that rejects the 0-byte Microsoft Store `python3` stub and never spams the hook log (#454); `draft_writer` dual-phase static union documented + POSIX-safe Windows path matching (#451). **Added:** provider-agnostic cross-model verification accepting OpenAI-compatible endpoints (MiMo, DeepSeek, self-hosted) alongside grounded first-party OpenAI, which is never silently downgraded (#455); an opt-in Socratic adjacent-framing probe (STORM-borrowed perspective expansion, `ARS_SOCRATIC_ADJACENT_PROBE=1`, default OFF, prose-layer only — `deep-research` 2.10.0 → 2.11.0) (#461). `academic-pipeline` tracks the suite at v3.13.0; `academic-paper` and `academic-paper-reviewer` are unchanged. See `CHANGELOG.md` for the per-issue detail.

### v3.12.1 (2026-06-15) — Reviewer-response triage modes (PR #433 integration)

> A patch release folding the genuinely-novel parts of an external contribution into existing skills as modes, per ARS's mode-based architecture. **New modes:** `deep-research` `three-way-scan` — a lightweight WHY/HOW/WHAT paper-comparison triage between `quick` and `lit-review`, with per-paper shortlists + a cross-paper synthesis (`deep-research` 2.9.4 → 2.10.0); `academic-paper` `rebuttal-audit` — standalone advisory QA of an author's existing rebuttal/response draft against the reviewer comments (per-comment coverage table + gap list + tone/evidence/misread risk flags), which generates nothing and explicitly suppresses Schema 11 / Material Passport writes / `ready_to_submit` when run standalone (enforced by a `check_rebuttal_audit_guard()` lint with mutation coverage); plus a `revision-coach` scope extension to pushback/disagreement posture and non-journal scopes, and `/ars-3w` + `/ars-rebuttal-audit` slash commands. Routed by input shape: reviewer comments AND a draft → `rebuttal-audit`; comments only → `revision-coach`. Integrated from [@Yaobin29](https://github.com/Yaobin29)'s [PR #433](https://github.com/Imbad0202/academic-research-skills/pull/433). Suite mode count 25 → 27 (still 4 skills). See `CHANGELOG.md` for the per-issue detail.

### v3.12.0 (2026-06-08) — Kong auto-research feature track: experiment provenance, figure fidelity, cross-paper contradiction, partial-evidence decomposition

> A minor release shipping the Kong et al. (2026, arXiv:2605.18661) auto-research feature track plus the partial-evidence-trap decomposition work, each reviewed and merged independently. **New features:** Experiment Provenance Intake + claim→experiment alignment — a schema-first evidence-ledger layer for experiment-backed claims, intake-and-alignment only (the scholar runs experiments externally; ARS never executes them) (#260); a Figure/Table Fidelity Gate that checks whether a caption's interpretation follows from the data and whether the manuscript cites the artifact for a claim it supports (#261); a structured Cross-Paper Contradiction inventory making assessed paper-pairs enumerable for scholar confirmation (#262); and sub-claim decomposition before judgment in both the citation judge (#213) and the editorial synthesizer (#214), closing the §F.3.2 partial-evidence trap on both layers. **Guidance + interpretive layer:** concise-output + pressure-stable boundary reinforcement across the report-producing reviewers (#274); a same-family / rubric-aware calibration epistemic note (#273); the retrieved-content instruction/data boundary stated as a standing principle (#367). **Negative scope:** the Kong META (#255) closed with a "Rejected mechanisms" section in `POSITIONING.md` enumerating the five autonomous mechanisms ARS does not do, plus two Tier D design-lesson docs. **Release-discipline lint:** version-consistency invariants 5–7 (#357) and ARCHITECTURE component-version policing (#345). Plus correctness fixes across the cross-model grounding guards (#346 / #349 / #351), the citation-gate cache key and rationale bounding (#359 / #360 / #361), the eval gold set (#250), and ACL/EMNLP disclosure regrounding (#242). The new schemas, manifest field, and all invariants are additive and backward-compatible. `academic-pipeline` tracks the suite at v3.12.0; the other three skill versions are unchanged. See `CHANGELOG.md` for the per-issue detail.

### v3.11.1 (2026-06-06) — Post-ship correctness, hardening & provenance rollup

> A patch release rolling up the post-ship fixes surfaced after v3.11.0, each reviewed and merged independently: a cross-model consent-gate extension to the integrity-verification + collaboration-depth paths (#322), a per-entry OpenAlex + Crossref backfill parallelization (#138), and seven correctness/hardening fixes across the citation-existence gate, the v3.10 policy layer, the eval harness, the domain evidence profiles, and the #310 security-boundary edge cases (#323 / #327 / #328 / #329 / #331 / #332 / #333) — including two P1 fixes (#327 domain-profile activation on the no-handoff path, #328 the eval-harness per-class threshold gate). No new features and no breaking schema changes. See `CHANGELOG.md` for the per-issue detail.

### v3.11.0 (2026-06-04) — Deterministic citation verification gate (#182)

> Adds a **deterministic citation-existence verification gate** that runs independently of LLM peer review. Every cited reference is cross-checked against up to four bibliographic indexes — Semantic Scholar + OpenAlex + Crossref + the new **arXiv resolver** (`scripts/arxiv_client.py`, no API key needed) — and a per-citation `lookup_verified` status (`{true, false, unresolvable}`) is written to a unified summary, so a fabricated citation with a provably-bogus DOI/arXiv ID is caught by lookup rather than by hoping a reviewer agent notices. The gate **inherits the v3.10 `terminal_policies` opt-in model**: detection always runs, but a `lookup_verified == false` row is terminal **only** when a user opts into `terminal_policies.citation_existence == strict` — default behavior is advisory and `/ars-mark-read`-acknowledgeable. `false` is narrowed to **ID-keyed unmatched** (an exact DOI/arXiv lookup that provably fails), so legitimately-unindexed humanities / non-English / regional citations stay `unresolvable` and never block (a documented precision-over-recall tradeoff). Ships a persistent SQLite verification cache (`~/.cache/ars/verification.db`, 90-day TTL) with an `/ars-cache-invalidate` command, a standalone `verification_gate` API + `verify_passport.py` CLI, and a four-index extension (k=0..4) of the v3.9.0 contamination triangulation matrix (all advisory). `academic-pipeline` tracks the suite at v3.11.0; the other three skill versions are unchanged. Spec: `docs/design/2026-05-21-v3.10-182-promote-citation-gate-spec.md` (§0 amendment + C-V6).

### v3.10.0 (2026-06-01) — Triangulation policy layer, Kong survey adoptions, eval harness, scoped-write guard

> Minor release bundling: the opt-in contamination-triangulation **terminal policy layer** (#127 — default citation behavior byte-equivalent to v3.9.0); **Kong et al. 2026 survey adoptions** — the Rebuttal Commitment Ledger (#256/#266/#268/#269) and discipline-relative domain evidence profiles (#259); the **v3.10 measurement infrastructure** — a generalized eval gold set + ranking-lift CI gate (#184); the **scoped-write guard MVP** (#134) — a deterministic `PreToolUse` hook that fences the 23 single-phase agents to their own phase directory and denies them Bash (they use the Grep/Glob and structured editing tools instead); the `/ars-mark-read` plugin commands (#190) plus a broken-on-arrival fix (#195); a Simplified-Chinese README (#185); and CI hardening (#156/#155). `academic-paper` → v3.2.0 and `academic-paper-reviewer` → v1.10.0 for the Commitment-Ledger and domain-profile additions; `academic-pipeline` tracks the suite at v3.10.0. Default skill behavior is unchanged unless a strict policy mode is opted into; the one default-on change is the #134 guard, which constrains the fenced subagents, not user-facing outputs.

### v3.9.4.2 (2026-05-19) — post-ship hotfix for PR #149 CI discipline gates (codex post-ship)

> Codex post-ship review of PR #149 (7 CI discipline gates) surfaced 4 P2 findings; v3.9.4.2 hardens 3 of 4. F1: `harness-retirement-monthly.yml` adds `GH_REPO` so scheduled runs have repo context for `gh issue create`. F2: `release-cooldown.yml` filters `PREV_TAG` lookup to `v*` tags so non-release tags cannot bypass cooldown. F3: `release-cooldown.yml` also reads annotated tag subject + accepts `hot-fix` spelling (v3.9.2 was previously a false-negative hotfix). PR #157 follow-up: `[skip-cooldown]` override now read from both commit message AND annotated tag message (self-bootstrapping fix — this tag's cooldown bypass demonstrates F2+F3 work end-to-end). F4 (test-count-monotonic harden) reverted because it surfaced pre-existing `scripts/` package issue, tracked as #154 (since fixed by PR #158) + re-attempt #155. Closes #152. Follow-ups: #155, #156.

### v3.9.4.1 (2026-05-19) — post-ship hotfix for v3.9.4 temporal verification (#135 codex post-ship)

> Codex post-ship review of v3.9.4 caught 4 real bugs that per-task subagent reviewers missed. Hotfix patches all 4: (1) `audit()` now wires `citation_provenance` through to P2 and P4 — when a ref slug has `confidence: low` or `conflict`, the verifier emits `TEMPORAL-METADATA-MISSING` instead of using timeline dates as ground truth (spec §3.4 first-party safety check was broken). (2) `_date_to_interval` parses all schema-valid date shapes including `YYYY-MM` (Crossref month precision) and `YYYY-MM-DD..YYYY-MM-DD` (interval); v3.9.4 silently `ValueError`'d on these and skipped the check. (3) P4 now binds direct date captures when ref markers are absent — sentences like "The 2026 policy enabled the 2020 rollout" actually trigger now. (4) `citation_provenance.schema.json` `confidence:high` allOf now requires presence (`then.required`) in addition to non-null, closing the absent-property bypass. 1561 passed (+12 new tests vs v3.9.4 baseline, 0 regression). ARCHITECTURE.md aligned to current state (was stale at v3.8.0).

### v3.9.4 (2026-05-18) — #135 temporal verification layer (advisory)

> Deterministic advisory verifier at the Phase 4 → 5 boundary covering 5 temporal failure modes (P1 retrospective arithmetic, P2 anachronistic citation, P3 comparator unmaterialized, P4 causal inversion, P5 deictic present). New Phase 2 sibling `timeline_extraction_agent` owns `phase2_investigation/timeline.yaml` + `phase2_investigation/citation_provenance.yaml`. Verifier script `scripts/temporal_integrity_audit.py` runs 5 passes deterministically. M3 Temporal Integrity Iron Rule added to `report_compiler_agent` + `draft_writer_agent`. M6-minimal: Crossref `issued` + pdftotext cover first-party verification. M7-minimal: date provenance + comparator materialization. M5-stub: user-declared `version_family_id` only. Zero modification to `literature_corpus_entry`, `claim_audit_result`, `claim_intent_manifest`. `bibliography_agent` unmodified (F2 invariant). 3 new sidecar schemas. Coverage estimate: 55-70% baseline / 65-75% with M7 minimal. 1549 passed (+44 new, 0 regression).

### v3.9.3 (2026-05-18) — #128 housekeeping (shared client utilities + dedup resolvers)

> Pure refactor + one latent-bug fix from the v3.9.0 `/simplify` review backlog. Extracts `scripts/_text_similarity.py` (3-way client dedup: normalize / similarity / threshold / retry constants) + `scripts/_passport_yaml.py` (2-way migration tool dedup: ruamel.yaml round-trip config) + private `_resolve_by_doi_then_title` helper (2-way resolver body dedup, §3.4 / §3.5 API surface preserved). Standardizes throttle measurement on `time.monotonic` across OpenAlex + Crossref (was `time.time`, NTP-unsafe), aligning with Semantic Scholar. Dual-path import infrastructure on all 5 module-level cross-imports (sibling-first, namespace-package fallback) preserves class identity for `SemanticScholarUnavailable` and bonus-fixes 2 latent-broken `import scripts.X` paths. 1505 passed (+23 new, 0 regression). #128 §4 (parallelize OA + CR per-entry) carried to #138.

### v3.9.2 (2026-05-18) — #133 phase boundary hot-fix

> #133 closure (hot-fix layer). Long-term architectural fix tracked as v3.10 active conductor in #134. Adds: routing clarification gate in CLAUDE.md (cross-phase materials → clarify with a-d options, not silent dispatch), 22 single-phase agents get prompt hard fence (`## Phase Boundary (v3.9.2)`), 16 multi-phase / phase-orthogonal / cross-phase-meta agents intentionally NOT fenced (honest framing — prose placebo creates false-enforcement illusion), advisory verifier `scripts/check_pipeline_integrity.py` detects #133 pattern post-hoc. Behavioral smoke tests with cross-model spot-check (100% Opus 4.7, ≥75% Sonnet + GPT-5.5).

### v3.9.1 (2026-05-18) — #129 + #130 client hardening

> v3.9.0 hot-fix. Wraps OpenAlex / Crossref response-read failures as `*Unavailable` (#129); guards `check_claim_audit_consistency` against non-string `manifest_id` (#130). No spec change.

### v3.9.0 (2026-05-17) — #102 cross-index triangulation measurement

> #102 closure. v3.7.3 shipped single-index (Semantic Scholar) contamination detection; v3.9.0 extends to three-index triangulation (S2 + OpenAlex + Crossref) as **advisory evidence only**. Two new optional booleans (`openalex_unmatched`, `crossref_unmatched`) on `contamination_signals`; manual-entry not-rule extended symmetrically. Finalizer adds a 4-tier advisory matrix (k=0/1/2/3 over present `*_unmatched` fields) with v3.7.3 legacy `CONTAMINATED-UNMATCHED` preserved for the k=1/k_max=1 S2-only case. Formatter pass-through allowlist extends 3 → 9 suffixes; refusal rules 1-10 unchanged per R-L3-2-E. The policy layer (strict modes, hard-block tier, `venue_type` / `triangulation_policy`) is deferred to v3.10 per spec §2.3. k=3 marker is `CONTAMINATED-TRIANGULATION-UNMATCHED` (describes observable, not inferred cause). 3 new firm rules: R-L3-2-C (k computed over present fields), R-L3-2-D (no API-inferred classification), R-L3-2-E (refusal list unchanged; pass-through allowlist extends).

**Migration:** v3.7.3 corpora — run `python scripts/migrate_literature_corpus_to_v3_9_0.py PATH` to backfill the two new fields. Pre-v3.7.3 corpora — run `migrate_literature_corpus_to_v3_7_3.py` FIRST, then v3.9.0 migration (daisy-chained per spec §3.7; the v3.9.0 tool only acts on entries that already carry `contamination_signals.semantic_scholar_unmatched`).

### v3.8.2 (2026-05-17) — #118 uncited audit_tool_failure surface

> #118 closure. The `ARS_CLAIM_AUDIT=1` uncited constraint-judging path used to silently substitute `{"judgment": "NOT_VIOLATED"}` on `JudgeInvocationError`, suppressing HIGH-WARN constraint checks on transient judge outage. v3.8.2 routes those failures through a dedicated `uncited_audit_failures[]` aggregate at MED-WARN advisory tier, mirroring the cited path INV-14 row but using a dedicated schema because `claim_audit_result.ref_slug` is required and the uncited path has no ref to bind. The four option-1..4 trade-offs from the #118 issue body landed on option 2 (new aggregate) — option 4 (re-raise and abort) was rejected for the audit-coverage hit on flaky judge endpoints.

- **New `uncited_audit_failure.schema.json` aggregate** (spec §3.6). One entry per uncited sentence × manifest pair where the constraint judge raised `JudgeInvocationError`. Same fault-class enum as cited-path INV-14 (`judge_timeout` / `judge_api_error` / `judge_parse_error` / `cache_corruption` / `retrieval_api_error` / `retrieval_timeout` / `retrieval_network_error`). `rule_version: D4-c-v1-uaf-v1`.
- **UAF-INV-1..UAF-INV-6 lint** (spec §6 rule 4d). `finding_id` uniqueness, scoped_manifest_id cross-array integrity, (M, C) pair integrity when manifest_claim_id non-null, per-(sentence, manifest) dedup, rationale fault_class prefix, cross-aggregate exclusivity vs `constraint_violations[]`.
- **Finalizer §5 MED-WARN advisory row**: annotation `[CLAIM-AUDIT-TOOL-FAILURE-UNCITED — <fault-class>]`, gate passes (retry-next-pass remediation). Formatter REFUSE list unchanged — UAF is advisory.
- **Pipeline integration** (`scripts/claim_audit_pipeline.py`): swallow site at line 1211-1224 removed; `JudgeInvocationError` now emits a UAF row + `continue`s to the next (sentence, manifest) pair. No fake NOT_VIOLATED reaches `constraint_violations[]`.
- **Tests**: 18 new (15 schema/lint TSUAFUncitedAuditFailureInvariants + 3 pipeline integration TP23UncitedJudgeOutageEmitsUAF). Baseline 694 → 712 tests, 0 regression.
- **Agent doc** (`academic-pipeline/agents/claim_ref_alignment_audit_agent.md`): Output emission table grows seventh row; Error handling table grows from 3 surfaces to 4 surfaces with the uncited-path UAF row.

### v3.8.0 (2026-05-16) — L3 Claim-Faithfulness Locator + Audit (paired milestone)

> v3.7.3 + v3.8 close the L3 (claim-faithfulness) gap end-to-end. v3.7.3 ships the locator infrastructure — every citation carries a three-layer anchor so future audits can fetch the cited passage. v3.8 ships the audit pass that consumes those anchors, judges whether the cited source supports the claim, and gate-refuses HIGH-WARN violations at the formatter terminal hard gate. The release also bundles 5 audit-trail-shipped feature PRs accumulated since v3.7.0 (#104 / #105 / #108 / #111 / #115).

- **#103 — `claim_ref_alignment_audit_agent`** (v3.8 PR #121). Opt-in (`ARS_CLAIM_AUDIT=1`, default OFF) Stage 4→5 audit agent. Judges every sampled citation against retrieved excerpt; emits `claim_audit_results[]` + `claim_intent_manifests[]` + `claim_drifts[]` + `uncited_assertions[]` + `constraint_violations[]` aggregates. 8-row finalizer matrix routes HIGH-WARN classes (CLAIM-NOT-SUPPORTED / NEGATIVE-CONSTRAINT-VIOLATION / FABRICATED-REFERENCE / ANCHORLESS / CONSTRAINT-VIOLATION-UNCITED) through the formatter REFUSE rules 6-10. Calibration runner ships with 20-tuple gold set (T-C1 FNR<0.15 + FPR<0.10, T-C2 per-class, T-C3 shape integrity). 8 rounds of dual-track review (R1 codex + Gemini-3.1-pro-preview, R2-R8 codex-only after Gemini quota exhausted); trajectory R1 4P1+2P2 → R8 0P1+4P2 ship gate.
- **v3.7.3 — Three-Layer Citation Emission + contamination signals** (PR #98). `synthesis_agent` / `draft_writer_agent` / `report_compiler_agent` gain `## Three-Layer Citation Emission (v3.7.3)` H2. Every `<!--ref:slug-->` carries `<!--anchor:<kind>:<value>-->` with `<kind> ∈ {quote, page, section, paragraph, none}` (quote anchors capped at 25 words, URL-encoded). `pipeline_orchestrator_agent` finalizer becomes 5-cell with precedence-zero NO-LOCATOR check. `formatter_agent` adds explicit hard-gate refusal for `[UNVERIFIED CITATION — NO QUOTE OR PAGE LOCATOR]`. `literature_corpus_entry.schema.json` adds optional `contamination_signals: { preprint_post_llm_inflection, semantic_scholar_unmatched }` object. `bibliography_agent` computes both signals at ingest. 11-round review trajectory (Codex×10 + Gemini cross-model×1) closed 22 findings. Spec: `docs/design/2026-05-12-ars-v3.7.3-claim-faithfulness-and-contaminated-source-spec.md`. External motivation: Zhao et al. arXiv:2605.07723 (2026-05).
- **#108 — AI disclosure policy-anchor renderer** (audit-trail-shipped 2026-05-14). Adds PRISMA-trAIce / ICMJE / Nature / IEEE policy-anchor disclosure paths alongside the existing venue-track renderer.

<!-- opensource-radar:truncated -->
