<!-- registry-sync: version=15.14.0; skills=2013; stars=45008; updated_at=2026-08-16T10:07:40+00:00 -->
# AAS Core — Agentic Awesome Skills

> **Local, agent-owned skill stacks for coding agents—from complete catalog access to a reproducible, reviewable plan.**

**Current release: V15.14.0.** This release includes AAS Core for complete local catalog search, agent-owned selection, manifest validation, planning, and diagnosis. Apply and recovery remain experimental and outside the supported preview path.

Codex or Claude inspects your project and chooses exact skills from the complete local AAS catalog. AAS Core does not rank or recommend them: its read-only `compose_stack` tool validates the agent-owned selection in memory, and a client or the `aas` CLI can persist it as `aas-stack.json` and produce an immutable plan before any target change.

**[Read the AAS Core preview guide →](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md)**

```text
Project
  -> inspected by Codex or Claude (not by AAS)
  -> agent searches and reads the complete local catalog
  -> AAS MCP (local stdio, read-only)
  -> Codex or Claude chooses exact skill IDs
  -> compose_stack validates the selection in memory (read-only)
  -> client or AAS CLI persists aas-stack.json and optional evidence
  -> AAS CLI validate + immutable plan preview
  -> human review (optionally in Workbench)
```

The reusable `SKILL.md` playbooks, specialized plugins, bundles, workflows, and direct installers remain important. They are the content, curation, distribution, and compatibility layers around AAS Core—not competing primary products.

This is an independent community project. It is not affiliated with, sponsored by, endorsed by, or authorized by Google. Google, Antigravity, Gemini, and related product names are referenced only to describe compatibility and install targets. The GitHub repository is canonical; the hosted catalog and browser-local Workbench are companion discovery and review surfaces, not a hosted control plane.

[![GitHub stars](https://img.shields.io/badge/⭐%2045%2C000%2B%20Stars-gold?style=for-the-badge)](https://github.com/sickn33/agentic-awesome-skills/stargazers)
[![Follow @AASkills_ on X](https://img.shields.io/badge/Follow-%40AASkills__-black?style=for-the-badge&logo=x)](https://x.com/AASkills_)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Anthropic-purple)](https://claude.ai)
[![Cursor](https://img.shields.io/badge/Cursor-AI%20IDE-orange)](https://cursor.sh)
[![Codex CLI](https://img.shields.io/badge/Codex%20CLI-OpenAI-green)](https://github.com/openai/codex)
[![Autohand Code](https://img.shields.io/badge/Autohand%20Code-CLI-blue)](https://github.com/autohandai/code-cli)
[![Gemini CLI](https://img.shields.io/badge/Gemini%20CLI-Google-blue)](https://github.com/google-gemini/gemini-cli)
[![Latest Release](https://img.shields.io/github/v/release/sickn33/agentic-awesome-skills?display_name=tag&style=for-the-badge)](https://github.com/sickn33/agentic-awesome-skills/releases/latest)
[![Direct skill distribution](https://img.shields.io/badge/Direct%20skills-npx%20agentic--awesome--skills-black?style=for-the-badge&logo=npm)](#installation)
[![Kiro](https://img.shields.io/badge/Kiro-AWS-orange?style=for-the-badge)](https://kiro.dev)
[![Copilot](https://img.shields.io/badge/Copilot-GitHub-lightblue?style=for-the-badge)](https://github.com/features/copilot)
[![OpenCode](https://img.shields.io/badge/OpenCode-CLI-gray?style=for-the-badge)](https://github.com/opencode-ai/opencode)
[![Antigravity](https://img.shields.io/badge/Antigravity-AI%20IDE-red?style=for-the-badge)](https://github.com/sickn33/agentic-awesome-skills)

## AAS Core: Agent-First Preview

> **The agent composes. You control. AAS keeps the stack reproducible.**

AAS Core gives the repository one product model:

- **Let the agent choose.** The local MCP preserves `search_skills`, `get_skill`, `compose_stack`, `inspect_stack`, and `diff_stack`, and adds read-only `export_selection_evidence` and `inspect_selection_evidence`; Core does not rank, recommend, exclude, or hide skills.
- **Guide capability coverage.** MCP session instructions require the agent to evaluate the full project surface—from architecture, domain behavior, data and integrations through testing, security, UX, deployment, and maintenance—then search each applicable capability, compare multiple candidates, cover it with a non-redundant skill or report a catalog gap, and avoid stopping at a minimal shortlist. Core records and validates the resulting selection, but it does not certify semantic completeness.
- **Keep the chosen stack and evidence reviewable.** A client or the CLI can persist `aas-stack.json` and the separate `aas-selection-evidence.json` sidecar in an `artifact-dir`; the manifest preserves exact agent-selected IDs, while evidence records factual process trace and the agent-declared capability ledger.
- **Validate and preview through the CLI.** `aas stack validate` checks the proposal, while `aas stack plan` produces an immutable, per-target plan without applying it.
- **Review in Workbench.** The hosted Workbench imports and reviews stack/plan JSON in browser memory; it does not access your filesystem or install anything.
- **Retain every useful distribution path.** Direct installs, plugins, bundles, workflows, and the full catalog remain available as payload and compatibility surfaces.

> [!IMPORTANT]
> Structural and identity validity does not certify semantic fit, compatibility, setup correctness, operational safety, or safety to apply.

| Surface | Current status |
| --- | --- |
| Published package | Current npm release; AAS Core status is `agent-first-preview` |
| Catalog search and inspection | Supported preview; local and read-only |
| Agent-owned composition | Supported preview; Core validates IDs and structure, not semantic suitability; manifests have a technical maximum of 128 skills |
| Stack validation and plan preview | Supported preview; no target skill changes |
| Workbench | Browser-local review of stack and plan artifacts |
| Selection evidence | Exported and inspected through MCP/CLI contracts; not yet reviewed in Workbench |
| Apply and recovery | Experimental, explicit opt-in, outside the supported safety claim |
| Semantic suitability certification | Not provided |

Read the [AAS Core guide](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md) for the exact trust boundaries, current preview status, Codex/Claude setup model, and CLI lifecycle.

## Why This Repo

- **Agent-first, locally controlled**: Codex or Claude inspects the project and chooses from the complete local catalog without uploading your repository to AAS.
- **Complete and inspectable**: every catalog skill is searchable, readable, and available for agent selection; Core does not certify suitability, compatibility, or operational safety, and metadata is informational rather than an eligibility gate.
- **Approval before writes**: the durable artifacts are an approved stack and immutable plan, not an opaque one-shot install.
- **Installable, not just inspirational**: use the compatible legacy installer or plugin distributions when direct delivery is the right path.
- **Built for major agent workflows**: Claude Code, Cursor, Codex CLI, Autohand Code, Gemini CLI, Antigravity, Kiro, OpenCode, Copilot, and more.
- **Broad coverage with real utility**: 2,013+ skills across development, testing, security, infrastructure, product, and marketing.
- **Inspect before installing**: the hosted [Skill Workbench](https://sickn33.github.io/agentic-awesome-skills/workbench) reviews agent-produced stack manifests and immutable plans without browser-side installation.
- **Focused delivery remains available**: specialized plugins package proven sets for web, security, data, docs, DevOps, QA, OSS, or agent/MCP workflows.
- **Useful whether you want breadth or curation**: install the full catalog, choose a specialized plugin, start with bundles, or compare alternatives before installing.

### Why not just search the skills directory?

Direct file search can find candidate prose, but it leaves the result in the conversation. AAS Core adds verified catalog identity, explicit target binding, durable desired state, optional selection evidence, deterministic validation, immutable planning, and dedicated review surfaces. Its value is not choosing better than the coding agent; it is turning the agent's choice into reproducible, inspectable state.

## Table of Contents

- [AAS Core: Agent-First Preview](#aas-core-agent-first-preview)
- [Why This Repo](#why-this-repo)
- [Installation](#installation)
- [Recommended Specialized Plugins](#recommended-specialized-plugins)
- [Choose Your Tool](#choose-your-tool)
- [Quick FAQ](#quick-faq)
- [Bundles & Workflows](#bundles--workflows)
- [Browse 2,013+ Skills](#browse-2013-skills)
- [Troubleshooting](#troubleshooting)
- [Stable Skills Manifest v1](#stable-skills-manifest-v1)
- [Support the Project](#support-the-project)
- [Contributing](#contributing)
- [Community](#community)
- [Credits & Sources](#credits--sources)
- [Repo Contributors](#repo-contributors)
- [Star History](#star-history)
- [License](#license)

## Installation

For Codex and Claude, start with the [AAS Core guide](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md): configure the local MCP, ask the agent to inspect the project and choose exact IDs from the full catalog, review the proposed `aas-stack.json`, then run CLI validation and planning. The MCP and validation are read-only. Planning writes only the requested plan artifact; it does not materialize skill payloads or AAS managed state in the target.

Use direct installation when your host does not yet have a native AAS Core adapter, when you already know the exact skill IDs, or when you deliberately prefer manual selection:

- **Specialized plugins** when the job has a clear domain.
- **Full library install** when you want every skill available in a local skills directory.
- **Bundles and workflows** when you want role-based recommendations or ordered execution playbooks.

### Direct skill install

```bash
# Antigravity: preview an exact, agent-selected set before writing.
npx agentic-awesome-skills --antigravity --skills brainstorming,systematic-debugging --dry-run

# Antigravity CLI slash commands (agy): ~/.gemini/antigravity-cli/skills/<skill>/SKILL.md
npx agentic-awesome-skills --agy
```

The npm installer uses a shallow, release-pinned clone by default and verifies the cloned commit against the immutable `gitHead` recorded for that exact npm package version. If the GitHub tag moved or npm identity metadata is unavailable, installation stops before copying content. Use `--tag main` only when you intentionally accept a mutable, explicitly unverified repository ref.

Antigravity watches `~/.agents/skills` and may load enough installed instructions
to exhaust its context, slow startup, trigger truncation errors, or enter a crash
loop. For that target, the installer stops before cloning or writing unless you
provide `--skills`, a metadata filter, or the explicit `--all` override. The bare
`npx agentic-awesome-skills` command uses the same protected Antigravity target.

The recommended flow is to ask Codex or Claude with the read-only AAS Core MCP
configured to inspect the project, search the complete catalog, and choose exact
skill IDs. AAS MCP selects and validates IDs but does not install them; the agent
or user then previews the direct installation with the command above and repeats
it without `--dry-run` after review.

Other direct-install targets retain the legacy-compatible full-catalog behavior
when no selectors are supplied. The CLI prints the catalog's risk summary first:
a full install includes `critical` and authorized-use-only `offensive`
instructions. Installation copies files; it does not execute their commands,
but an agent may act on an installed skill later. Prefer an exact reviewed set:

```bash
npx agentic-awesome-skills audit --skills brainstorming,backend-dev-guidelines
npx agentic-awesome-skills --skills brainstorming,backend-dev-guidelines --dry-run
```

If you deliberately accept the context and crash-loop risk, the complete
Antigravity catalog remains available through explicit consent:

```bash
npx agentic-awesome-skills --antigravity --all
```

The audit reads the selected skill directories without executing them and
reports command, network, credential, filesystem, privileged, destructive,
symlink, and binary signals. It is a review aid, not a safety certificate. See
[Security, trust, and antivirus alerts](docs/users/security-and-antivirus.md).

### Focused single-skill install with GitHub CLI (preview)

GitHub CLI can preview and install one exact skill for Copilot and other supported hosts. Use an exact `SKILL.md` path in this large, mirrored repository so the selected source is unambiguous and discovery stays fast:

```bash
gh skill preview sickn33/agentic-awesome-skills skills/brainstorming/SKILL.md
gh skill install sickn33/agentic-awesome-skills skills/brainstorming/SKILL.md \
  --agent github-copilot --scope user --pin v14.2.0
```

`gh skill` support is currently a GitHub CLI preview and may change. Install a focused skill or plugin surface for the job; do not use `--all` unless you intentionally want every discovered canonical and mirrored skill.

### Verify the install

```bash
test -d ~/.agents/skills && echo "Skills installed in ~/.agents/skills"
```

### Run your first skill

```text
Use @brainstorming to plan a SaaS MVP.
```

### Prefer plugins for Claude Code, Codex, or another compatible client?

- Use a specialized plugin when you want a focused marketplace-style distribution.
- Use the full-library plugin only when you want the widest plugin-safe catalog.
- Read [Plugins for compatible agent clients](docs/users/plugins.md) for host-specific installs, portable Agent Plugins bundles, and direct skills installs.

## Recommended Specialized Plugins

Do not install everything first if you already know the work. Start with the focused plugin for your job, then add more only when the task expands.

All specialized plugins are generated as Claude Code and Codex plugin bundles. Bundles with flat, cross-host-safe skill layouts also receive a standard Agent Plugins 1.0 root manifest. For Antigravity, use the same `SKILL.md` content through the installer or supported skills paths.

| Plugin | Skills | Best for |
| --- | ---: | --- |
| AAS Web App Builder | 10 | Frontend and full-stack developers shipping modern web apps. |
| AAS Product Design Studio | 10 | Product UI, brand, portfolio, accessibility, and richer visual work. |
| AAS Security Engineer | 10 | Authorized security testing, audit, and hardening. |
| AAS Secure App Builder | 10 | Developers who want security embedded while building features. |
| AAS Documents & Presentations | 9 | Office files, document conversion, decks, and slide workflows. |
| AAS Data Analytics | 10 | Product analytics, SQL, dashboards, and experiments. |
| AAS Agent & MCP Builder | 10 | Agentic apps, MCP tools, RAG systems, and evaluation loops. |
| AAS QA & Test Automation | 10 | Test suites, browser automation, and QA stabilization. |
| AAS DevOps & Cloud | 10 | Infrastructure, deployments, and operational workflows. |
| AAS Accessibility & Inclusive UX | 8 | WCAG audits, automated scans, screen-reader checks, and accessible QA. |
| AAS API Platform Builder | 10 | API design, OpenAPI contracts, auth, security, load tests, and observability. |
| AAS SaaS Launch & Revenue | 10 | SaaS MVPs, pricing, payments, analytics, lifecycle, referrals, and SEO. |
| AAS AI Product & Evaluation Ops | 10 | AI product metrics, evals, tracing, experiments, and model-quality loops. |

Next-wave plugins cover marketing/SEO/growth, automation, observability/incident response, Python APIs, mobile apps, data engineering, privacy/compliance, and localization/international growth.

- Read the [specialized plugin roadmap](docs/users/specialized-plugin-roadmap.md).
- Read the [plugin guide for compatible agent clients](docs/users/plugins.md).
- Compare the hosted [specialized plugin landing page](https://sickn33.github.io/agentic-awesome-skills/plugins).
- Browse the generated plugin folders in [`plugins/`](plugins/).

## Choose Your Tool

Use the same repository, but install or invoke it in the way your host expects.

| Tool           | Install                                                                  | First Use                                              |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| Claude Code    | [AAS Core local MCP preview](docs/users/claude-code-skills.md), direct install, or Claude plugin marketplace | Ask Claude to choose and compose an AAS stack |
| Cursor         | `npx agentic-awesome-skills --cursor`                              | `@brainstorming help me plan a feature`              |
| Gemini CLI     | `npx agentic-awesome-skills --gemini`                              | `Use brainstorming to plan a feature`                |
| Codex CLI      | [AAS Core local MCP preview](docs/users/codex-cli-skills.md) or `npx agentic-awesome-skills --codex` | Ask Codex to choose and compose an AAS stack |
| Autohand Code  | `npx agentic-awesome-skills --path ~/.autohand/skills` or `--path .autohand/skills` | `Use brainstorming to plan a feature`                |
| Antigravity IDE | `npx agentic-awesome-skills --antigravity --skills <ids> --dry-run` | Ask an MCP-enabled agent to choose exact IDs first |
| Antigravity CLI (`agy`) | `npx agentic-awesome-skills --agy`                        | `/brainstorming help me plan a feature`              |
| Kiro CLI       | `npx agentic-awesome-skills --kiro`                                | `Use brainstorming to plan a feature`                |
| Kiro IDE       | `npx agentic-awesome-skills --path ~/.kiro/skills`                 | `Use @brainstorming to plan a feature`               |
| GitHub Copilot | `gh skill install sickn33/agentic-awesome-skills skills/brainstorming/SKILL.md --agent github-copilot --scope user --pin v14.2.0` (preview) | `Ask Copilot to use brainstorming to plan a feature` |
| OpenCode       | `npx agentic-awesome-skills --path .agents/skills --category development,backend --risk safe,none` | `opencode run @brainstorming help me plan a feature` |
| AdaL CLI       | `npx agentic-awesome-skills --path .adal/skills`                   | `Use brainstorming to plan a feature`                |
| Custom path    | `npx agentic-awesome-skills --path ./my-skills`                    | Depends on your tool                                   |

Use the Codex and Claude guides for the AAS Core MCP preview path. For other hosts—or when you deliberately want manual delivery—use the table's direct install targets, specialized plugins, and host-specific path guidance.

- [Claude Code skills](docs/users/claude-code-skills.md): install paths, starter skills, prompt examples, and plugin marketplace flow.
- [Cursor skills](docs/users/cursor-skills.md): `.cursor/skills/` setup, UI-heavy work, and pair-programming flows.
- [Codex CLI skills](docs/users/codex-cli-skills.md): planning, implementation, debugging, and review skills for local coding loops.
- [Gemini CLI skills](docs/users/gemini-cli-skills.md): research, agent systems, integrations, and engineering workflows.
- [AI agent skills guide](docs/users/ai-agent-skills.md): breadth vs curation, skill-library evaluation, and starting-point selection.

## Quick FAQ

### What is Agentic Awesome Skills?

**Agentic Awesome Skills** is the repository behind AAS Core, a local agent-first control plane for recording and validating agent-chosen skill stacks. The read-only AAS MCP gives Codex and Claude complete catalog search and skill inspection; the stack CLI and Workbench make the chosen state reproducible and reviewable. Direct installers, specialized plugins, bundles, and workflows remain supported distribution and discovery surfaces.

### Is AAS Core fully certified?

The supported path covers complete local catalog search and inspection, agent-owned selection, stack composition and validation, immutable planning, and diagnosis. Transactional apply/recovery safety remains outside the supported claim; apply and recovery are explicitly experimental and disabled without additional opt-in flags.

### How do I install it?

For AAS Core, follow the [preview guide](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md) and use only a package release whose notes explicitly state that it includes Core. Release 14.6.0 predates Core; Core-capable releases begin with the 15.x line.

For direct skill distribution, use a tool-specific flag such as `--codex`,
`--cursor`, `--gemini`, or `--claude` to place skills in the directory your
assistant watches. The default target is Antigravity; it requires `--skills`, a
metadata filter, or explicit `--all` consent before cloning or writing because a
full watched catalog can exhaust context or trigger a crash loop.

For Autohand Code, use the installer with a custom path:

```bash
npx agentic-awesome-skills --path ~/.autohand/skills
npx agentic-awesome-skills --path .autohand/skills
```

### What are AAS specialized plugins?

AAS specialized plugins are focused, domain-specific distributions of the skill library. They package the most relevant skills for web apps, security, data analytics, documents, DevOps, QA, OSS maintenance, and agent or MCP work so users can start with the right surface instead of activating the entire catalog.

### Should I use the full library or a plugin?

Use the full library if you want the biggest catalog and direct filesystem control. Use a specialized plugin when you want a smaller, marketplace-style distribution for a specific workflow in Claude Code or Codex. For Antigravity, install the matching skills into the supported skills path. The complete explanation lives in [Plugins for Claude Code and Codex](docs/users/plugins.md).

### How are plugins, bundles, and workflows different?

Plugins are installable packaging surfaces, bundles are curated skill recommendations, and workflows are ordered execution playbooks. Start with a plugin when the domain is clear, use bundles to compare adjacent skills, and use workflows when the important part is sequencing planning, coding, testing, auditing, or release work.

### Where do I browse plugins, bundles, workflows, and the full catalog?

Start with [Specialized Plugins](#recommended-specialized-plugins) when you want an installable domain pack. Use [Bundles](docs/users/bundles.md) for role-based recommendations, [Workflows](docs/users/workflows.md) for ordered execution playbooks, [CATALOG.md](CATALOG.md) for the full registry, and the hosted [GitHub Pages catalog](https://sickn33.github.io/agentic-awesome-skills/) for searchable browsing.


## Bundles & Workflows

Core, plugins, bundles, and workflows answer different questions. Codex or Claude selects skills; AAS Core records and validates that selection; plugins package a focused delivery surface; bundles are curated starting points; workflows are ordered playbooks for getting a result.

| Surface | Answers | Use it for |
| --- | --- | --- |
| AAS Core | How do I search the full catalog and preserve the agent's chosen stack? | Agent-owned selection, a pinned `aas-stack.json`, validation, and immutable plan preview. |
| Specialized plugin | What should I install or activate for this domain? | Focused Claude Code/Codex plugin packaging and Antigravity-compatible skill selection. |
| Bundle | Which skills naturally belong together? | Role-based discovery after a full-library install or when building a custom subset. |
| Workflow | What order should the agent run skills in? | Planning, shipping, auditing, testing, or incident-style execution. |

Use a specialized plugin first when your domain is clear. Use bundles to explore adjacent skills or assemble a custom install. Use workflows when the hard part is sequencing the work.

### Start with bundles

Bundles are curated groups of recommended skills for a role or goal such as `Web Wizard`, `Security Engineer`, or `OSS Maintainer`.

- Bundles are recommendations, not separate installs.
- Install the closest specialized plugin when one matches your work, or install the repository once and use [docs/users/bundles.md](docs/users/bundles.md) to pick a starting set.
- Good starter combinations:
  - SaaS MVP: `Essentials` + `Full-Stack Developer` + `QA & Testing`
  - Production hardening: `Security Developer` + `DevOps & Cloud` + `Observability & Monitoring`
  - OSS shipping: `Essentials` + `OSS Maintainer`

### Use workflows for outcome-driven execution

- Read [docs/users/workflows.md](docs/users/workflows.md) for human-readable playbooks.
- Use [data/workflows.json](data/workflows.json) for machine-readable workflow metadata.
- Initial workflows include shipping a SaaS MVP, security audits, AI agent systems, QA/browser automation, and DDD-oriented design work.

### Need fewer active skills at runtime?

If Antigravity starts hitting context limits with too many active skills, the activation guidance in [docs/users/agent-overload-recovery.md](docs/users/agent-overload-recovery.md) can materialize only the bundles or skill ids you want in the live Antigravity directory.

If you use OpenCode or another `.agents/skills` host, prefer a reduced install up front instead of copying the full library into a context-sensitive runtime. The installer now supports `--risk`, `--category`, and `--tags` so you can keep the installed set narrow.

For a reproducible exact set, pin the package and catalog release and preview the full per-target plan before writing:

```bash
npx agentic-awesome-skills@14.3.0 --codex --release 14.3.0 --skills frontend-design,game-development/2d-games --dry-run
```

Remove `--dry-run` only after reviewing the install, update, and removal plan. Unknown or ambiguous skill identifiers fail closed, and metadata filters combine with `--skills` using AND.

The hosted [Skill Workbench](https://sickn33.github.io/agentic-awesome-skills/workbench) imports and reviews AAS Core stack manifests and immutable plans in browser memory. It does not access the filesystem, generate an approved plan, or install skills.

## Browse 2,013+ Skills

Use the root repo as a landing page, then jump into the deeper surface that matches your intent.

### What you get in this repository

- **Skills library** in [`skills/`](skills/)
- **AAS Core** in [`tools/lib/aas-v1`](tools/lib/aas-v1), exposed through the `aas` CLI and local `aas-mcp` server
- **Versioned stack and result schemas** in [`schemas/aas-v1`](schemas/aas-v1)
- **Compatible legacy installer CLI** powered by the npm package in [`package.json`](package.json)
- **Generated catalog and metadata** in [`CATALOG.md`](CATALOG.md), `skills_index.json`, and [`data/`](data/)
- **Hosted and local web app** in [`apps/web-app`](apps/web-app) and on [GitHub Pages](https://sickn33.github.io/agentic-awesome-skills/)
- **Role-based bundles** in [docs/users/bundles.md](docs/users/bundles.md)
- **Specialized plugin surfaces** in [docs/users/specialized-plugin-roadmap.md](docs/users/specialized-plugin-roadmap.md), [docs/users/plugins.md](docs/users/plugins.md), and [`plugins/`](plugins/)
- **Execution workflows** in [docs/users/workflows.md](docs/users/workflows.md)
- **User, contributor, and maintainer docs** under [`docs/`](docs/)
- **Project visuals** in [`assets/`](assets/), including the [hero](assets/aas-readme-hero.jpeg), [social card](assets/aas-social-card.jpeg), [logo](assets/aas-logo.jpeg), and [support banner](assets/buy-me-a-coffee-banner.png)

### Best ways to explore

- Read the full catalog in [`CATALOG.md`](CATALOG.md).
- Browse the hosted catalog at [https://sickn33.github.io/agentic-awesome-skills/](https://sickn33.github.io/agentic-awesome-skills/).
- Start with [Getting Started](docs/users/getting-started.md) and [Usage](docs/users/usage.md) if you are new after installation.
- Use [Bundles](docs/users/bundles.md) for role-based discovery and [Workflows](docs/users/workflows.md) for step-by-step execution.
- Use [Plugins for Claude Code and Codex](docs/users/plugins.md) when you care about marketplace-safe distribution, and the [Specialized Plugin Roadmap](docs/users/specialized-plugin-roadmap.md) when you want the best plugin candidates.

### Compare alternatives

- **[Agentic Awesome Skills vs Awesome Claude Skills](docs/users/agentic-awesome-skills-vs-awesome-claude-skills.md)** for breadth vs curated-list tradeoffs.
- **[Best Claude Code skills on GitHub](docs/users/best-claude-code-skills-github.md)** for a high-intent shortlist.
- **[Best Cursor skills on GitHub](docs/users/best-cursor-skills-github.md)** for Cursor-compatible options and selection criteria.
- **[Vexilo · A field guide to Claude Code](https://vexilo.app/?lang=en)** — different scope: a visual, searchable index of every Claude Code primitive (31 agents / 99 commands / 123 skills / 13 rules), organized around the 5-step workflow. Useful as a navigation layer *over* any skill library, not as a skill library itself. ([companion repo](https://github.com/lilhawk7077/claude-code-resources))

## Troubleshooting

Keep the root README short; use the dedicated docs for recovery and platform-specific guidance.

- If you are confused after installation, start with the [Usage Guide](docs/users/usage.md).
- For Core setup, trust boundaries, stack manifests, and preview status, use the [AAS Core guide](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md).
- On native Windows, `AAS_ADAPTER_WINDOWS_ACL_FAILED` refers to the configuration path checked with PowerShell `Get-Acl`, not the cache and not `icacls`; do not approve until preview returns an approval digest.
- If you integrate agentic-awesome-skills into a host, read the discovery contract first: [Stable Skills Manifest v1](docs/users/discovery-manifest.md).
- For Windows truncation or context crash loops, use [docs/users/windows-truncation-recovery.md](docs/users/windows-truncation-recovery.md).
- For Linux/macOS overload or selective activation, use [docs/users/agent-overload-recovery.md](docs/users/agent-overload-recovery.md).
- For OpenCode or other `.agents/skills` installs, prefer a reduced install such as `npx agentic-awesome-skills --path .agents/skills --category development,backend --risk safe,none`.
- For plugin install details, host compatibility, and marketplace-safe distribution, use [docs/users/plugins.md](docs/users/plugins.md).
- For contributor expectations and guardrails, use [CONTRIBUTING.md](CONTRIBUTING.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md), and [`SECURITY.md`](SECURITY.md).

## Stable Skills Manifest v1

This is the stable **direct-host discovery manifest** for integrations that load individual `SKILL.md` files. It is not `aas-stack.json`, the verified AAS Core catalog, or the Core composition contract. Core users should start with the [AAS Core guide](https://github.com/sickn33/agentic-awesome-skills/blob/v15.14.0/docs/users/aas-core.md); custom host integrations can continue using the manifest below.

Host integrations should use:

- [`skills_index.json`](./skills_index.json) as the **canonical array-format manifest**.
- [`schemas/skills-index.v1.schema.json`](./schemas/skills-index.v1.schema.json) for the JSON shape.
- [`data/skills_index.json`](./data/skills_index.json) as the compatibility mirror.

This keeps discovery stable (`id`, `path`, metadata) while ensuring hosts only load `SKILL.md` for requested `@skill-id` values.

## Support the Project

Support is optional. The project stays free and open-source for everyone.

[![Buy me a coffee](assets/buy-me-a-coffee-banner.png)](https://buymeacoffee.com/sickn33)

- [Buy me a book on Buy Me a Coffee](https://buymeacoffee.com/sickn33)
- Security tooling support: [Snyk](https://snyk.io/)
- Star the repository
- Open reproducible issues
- Contribute docs, fixes, and skills

---

## Contributing

- Add new skills under `skills/<skill-name>/SKILL.md`.
- Follow the contributor guide in [`CONTRIBUTING.md`](CONTRIBUTING.md).
- Use the template in [`docs/contributors/skill-template.md`](docs/contributors/skill-template.md).
- Validate with `npm run validate` before opening a PR.
- Keep community PRs source-only: do not commit generated registry artifacts like `CATALOG.md`, `skills_index.json`, or `data/*.json`.
- If your PR changes `SKILL.md`, expect the automated `skill-review` check on GitHub in addition to the usual validation and security scans.
- If your PR changes skills or risky guidance, manual logic review is still required even when the automated checks are green.

## Community

- [Discussions](https://github.com/sickn33/agentic-awesome-skills/discussions) for questions, ideas, showcase posts, and community feedback.
- [Issues](https://github.com/sickn33/agentic-awesome-skills/issues) for reproducible bugs and concrete, actionable improvement requests.
- [Follow @AASkills_ on X](https://x.com/AASkills_) for daily skills, practical workflows, and example prompts from the repo.
- [Follow @sickn33 on X](https://x.com/sickn33) for project updates and releases.
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) for community expectations and moderation standards.
- [`SECURITY.md`](SECURITY.md) for security reporting.

## Credits & Sources

We stand on the shoulders of giants.

👉 **[View the Full Attribution Ledger](docs/sources/sources.md)**

Source credits stay here for attribution and auditability. Repository contributor credit lives separately in [Repo Contributors](#repo-contributors).

Key source families include:

- **Official AI platform and tool repositories**
- **Security, web, infrastructure, data, design, and automation communities**
- **Independent skill authors and open-source maintainers**

<details open>
<summary><strong>Official Sources</strong></summary>

### Official Sources

- **[vostride/agent-qa](https://github.com/vostride/agent-qa)**: Official Agent QA skills for authoring natural-language web and mobile tests, evidence-backed run triage, and scoped debug/fix workflows (FSL-1.1-ALv2, Apache-2.0 after two years).
- **[aislon/uizze-mcp](https://github.com/aislon/uizze-mcp)**: Official source for the `uizze-ui-research` skill and UIZZE MCP-assisted UI research workflows.
- **[anthropics/skills](https://github.com/anthropics/skills)**: Official Anthropic skills repository - Document manipulation (DOCX, PDF, PPTX, XLSX), Brand Guidelines, Internal Communications.
- **[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)**: Official notebooks and recipes for building with Claude.
- **[Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio)**: Official source for the `video-router` skill - choose and lock generation, deterministic composition, supplied-footage editing, or an automatic cross-modal production plan (MIT).
- **[remotion-dev/skills](https://github.com/remotion-dev/skills)**: Official Remotion skills - Video creation in React with 28 modular rules.
- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)**: Vercel Labs official skills - React Best Practices, Web Design Guidelines.
- **[openai/skills](https://github.com/openai/skills)**: OpenAI Codex skills catalog - Agent skills, Skill Creator, Concise Planning.
- **[supabase/agent-skills](https://github.com/supabase/agent-skills)**: Supabase official skills - Postgres Best Practices.
- **[microsoft/skills](https://github.com/microsoft/skills)**: Official Microsoft skills - Azure cloud services, Bot Framework, Cognitive Services, and enterprise development patterns across .NET, Python, TypeScript, Go, Rust, and Java.
- **[Simon-He95/markstream-vue](https://github.com/Simon-He95/markstream-vue)**: Official Markstream skill for installing streaming Markdown renderers across Vue, React, Svelte, Angular, Nuxt, Next.js, and Vue 2 applications (MIT).
- **[nowork-studio/NotFair](https://github.com/nowork-studio/NotFair)**: Official source for the `seo-drift` skill - dated SEO baselines and regression detection across rankings, indexation, metadata, directives, schema, and on-page elements (MIT).
- **[MiniMax-AI/cli](https://github.com/MiniMax-AI/cli)**: Official MiniMax CLI - text, image, video, speech, music, vision, and web-search workflows for MiniMax models and APIs.
- **[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills)**: Official Gemini skills - Gemini API, SDK and model interactions.
- **[apify/agent-skills](https://github.com/apify/agent-skills)**: Official Apify skills - Web scraping, data extraction and automation.
- **[BuyWhere/buywhere-mcp](https://github.com/BuyWhere/buywhere-mcp)**: Official BuyWhere MCP server — search and compare products from Singapore, SEA, and US markets via Model Context Protocol.
- **[expo/skills](https://github.com/expo/skills)**: Official Expo skills - Expo project workflows and Expo Application Services guidance.
- **[huggingface/skills](https://github.com/huggingface/skills)**: Official Hugging Face skills - Models, Spaces, datasets, inference, and broader Hugging Face ecosystem workflows.
- **[longbridge/skills](https://github.com/longbridge/skills)**: Official Longbridge Securities skills - real-time quotes, charts, fundamentals, portfolio analysis, options, and market workflows for HK, US, A-share, and SG markets.
- **[HasData/hasdata-cli](https://github.com/HasData/hasdata-cli)**: Official HasData CLI and API guidance for search, scraping, ecommerce, travel, jobs, local business, and structured web data workflows.
- **[runapi-ai/cli-skill](https://github.com/runapi-ai/cli-skill)**: Official RunAPI CLI skill - generate AI images, videos, and music/audio from agent workflows, plus run other model API jobs.
- **[neondatabase/agent-skills](https://github.com/neondatabase/agent-skills)**: Official Neon skills - Serverless Postgres workflows and Neon platform guidance.
- **[Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern)**: Official Skyvern browser automation skill — AI-powered browser control using Vision LLMs and computer vision for navigating sites, filling forms, and extracting structured data.
- **[scopeblind/scopeblind-gateway](https://github.com/scopeblind/scopeblind-gateway)**: Official Scopeblind MCP governance toolkit - Cedar policy authoring, shadow-to-enforce rollout, and signed-receipt verification guidance for agent tool calls.
- **[Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)**: Official Loop Library skill - find, adapt, and design bounded AI-agent feedback loops with verification, stop rules, guardrails, and handoffs (MIT).
- **[agent-frontier/wgm](https://github.com/agent-frontier/wgm)**: Official wgm protocol skill - governed build loops with triage, alignment, planning, deterministic backpressure, holdout-scenario judging, and handoff audits (MIT).
- **[browser-act/skills](https://github.com/browser-act/skills)**: Official BrowserAct skills - authenticated browser automation, JavaScript-rendered extraction, screenshots, parallel session isolation, verification handling, and human handoff (MIT).
- **[browserbase/skills](https://github.com/browserbase/skills)**: Official Browserbase `competitor-analysis` skill - Browserbase Search API competitor discovery, research lanes, matrices, screenshots, and HTML reports (MIT).
- **[dair-ai/dair-academy-plugins](https://github.com/dair-ai/dair-academy-plugins)**: Official DAIR Academy plugin skills imported as standalone skills - image generation, adaptive learning, lesson artifacts, LLM council deliberation, survey papers, wiki building, and YouTube study notes (MIT).
- **[weaviate/agent-skills](https://github.com/weaviate/agent-skills)**: Official Weaviate skills - vector database operations, semantic and hybrid search, data imports, RAG cookbooks, agentic RAG, multimodal PDF search, and async client patterns (BSD-3-Clause).
- **[pilot-protocol/pilotprotocol](https://github.com/pilot-protocol/pilotprotocol)**: Official Pilot Protocol overlay network - agent addressing, encrypted P2P messaging, NAT traversal, and an installable agent app store (AGPL-3.0).
- **[Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)**: Official Xquik skill for X data workflows - tweet search, user lookup, follower export, media downloads, MCP, webhooks, OpenAPI, and SDK setup (MIT).
- **[Modellix/modellix-plugin](https://github.com/Modellix/modellix-plugin)**: Official Modellix skill - authenticated, paid AI image and video generation through the Modellix CLI (MIT).
- **[cohesivity-org/cohesivity-skill](https://github.com/cohesivity-org/cohesivity-skill)**: Official Cohesivity skill - agent provisioned backend infrastructure covering Postgres, hosting, auth, realtime, storage, cron, email, and AI model APIs over one HTTP API (MIT).
- **[ASI2030/Fact-Check-X](https://github.com/ASI2030/Fact-Check-X)**: Source for the `fact-check-x-complete` workflow - claim-level AI answer comparison, citation-fidelity review, and public primary-source verification without bundled browser automation (Apache-2.0).
- **[happy520ai/unified-ai-system](https://github.com/happy520ai/unified-ai-system)**: Official source for the `unified-ai-gateway` skill - nine governed Codex MCP tools for provider-free prompt enhancement, credential-free gateway health, readiness, fake-provider chat, knowledge, workflow, and workforce evidence (Apache-2.0).

</details>

<details>
<summary><strong>Community Contributors & Source Repositories</strong></summary>

### Community Contributors

- **[riffkit/skill](https://github.com/riffkit/skill)**: Official upstream source for the `riffkit` skill - short-form video riffing and UGC ad generation in nine natively generated languages (MIT).
- **[5dive-ai/skills](https://github.com/5dive-ai/skills)**: Source for the `compile-knowledge` skill - durable, atomic, interlinked knowledge stores with explicit hygiene, provenance, expiry, and secret-handling boundaries (MIT).
- **[saudademjj/luopan](https://github.com/saudademjj/luopan)**: Source for the `travel-planner` skill - Chinese-first travel itinerary planning with mandatory budget confirmation, source-traceable facts, workload-aware daily pacing, and rule self-checks (MIT).
- **[OJPalenzuela/agents-generator](https://github.com/OJPalenzuela/agents-generator)**: Source for the `agents-generator` skill - project-specific `AGENTS.md` and companion rule generation with package-manager detection, monorepo handling, dry-run/update modes, backups, and validated commands (MIT).
- **[agentbody/skills](https://github.com/agentbody/skills)**: Source for the `people-data` skill - LinkedIn and YouTube professional-profile and public business-contact research via the Agent Body MCP server (MIT).
- **[sudosubin/gh-attach](https://github.com/sudosubin/gh-attach)**: Source for the `gh-attach` skill - GitHub CLI uploads and downloads of `user-attachments` (screenshots, PDFs, zips, videos), producing repo-scoped URLs for PRs, issues, and READMEs, with GitHub Enterprise Server support (MIT).
- **[abhinaykrupa/cowork-to-code-bridge](https://github.com/abhinaykrupa/cowork-to-code-bridge)**: Source for the `cowork-to-code-bridge` skill - consent-bound execution on the user's own machine with pinned provenance, narrow scopes, and explicit local-agent limitations (MIT).
- **[maleksaadi0109/hyprfedora](https://github.com/maleksaadi0109/hyprfedora)**: Source for the `fedora-hyprland-installer` skill - GPU-aware Fedora Hyprland installation, configuration, verification, repair, and removal workflows (MIT).
- **[merc1305/findMate](https://github.com/merc1305/findMate)**: Source for the `find-complementary-founders` skill - private-first own-owner assessment, approved expiring profiles, and evidence-backed human founder matching (MIT).
- **[provencher/codex-skills](https://github.com/provencher/codex-skills)**: Source for the `orchestrate` skill - focused Codex multi-agent delegation with non-overlapping ownership, coordinator integration, and user-held approval gates (MIT).
- **[Phelan164/codex-howto](https://github.com/Phelan164/codex-howto)**: Source for the `maintain-codex-wiki` skill - review-first engineering knowledge with provenance, explicit capture and promotion, and deterministic structural checks (MIT).
- **[0xsarwagya/ontoly](https://github.com/0xsarwagya/ontoly)**: Source for the `ontoly-software-graph` skill - deterministic TypeScript software graphs, MCP-backed architecture review, request tracing, impact analysis, and dependency analysis (MIT).
- [amElnagdy/guard-skills](https://github.com/amElnagdy/guard-skills) — Code Quality & Testing Guard Skills (by amElnagdy)

- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) — Cloudflare Web Security Audit Skill (by Cloudflare)

- **[gooseworks-ai/goose-skills](https://github.com/gooseworks-ai/goose-skills)**: Source for the `competitor-ad-intelligence` and `ad-campaign-analyzer` skills - evidence-labeled public ad research plus uncertainty-aware campaign diagnostics and bounded budget tests (MIT).

- **[supernovae-st/nika-agents](https://github.com/supernovae-st/nika-agents)**: Official upstream source for the `nika` skill and its deterministic, budget-aware AI workflow runner (MIT skill content; AGPL-3.0 engine).
- **[atdy/maoxuan-product-agent](https://github.com/atdy/maoxuan-product-agent)**: Source for the `product-decision-agent` skill - Chinese-first product judgment across prioritization, growth, operations, data, delivery, and cross-functional collaboration, with 36 tested scenarios (MIT).
- **[hafiz-actyte/idea-autopsy](https://github.com/hafiz-actyte/idea-autopsy)**: Source for the `idea-autopsy` skill - business-idea validation that hunts the one sentence that kills an idea before you build: kill-list check, five hard filters, free-AI one-prompt test, and live ad-market verification (MIT).
- **[cruisekkk/trading-ledger](https://github.com/cruisekkk/trading-ledger)**: Source for the `trading-ledger` skill - decision-quality trade journaling that captures entry thesis, plan, and emotion into the user's own Notion database (MIT).
- **[cruisekkk/time-ledger](https://github.com/cruisekkk/time-ledger)**: Source for the `time-ledger` skill - natural-language time tracking parsed into the user's own Notion database with ask-instead-of-guessing reconciliation (MIT).
- **[mattpocock/skills](https://github.com/mattpocock/skills)**: Source for 17 Matt Pocock workflow skills - codebase design, TDD, bug diagnosis, triage, PRDs, issues, prototyping, handoff, teaching, and skill-writing guidance (MIT).
- **[emilkowalski/skills](https://github.com/emilkowalski/skills)**: Source for Emil Kowalski design engineering skills - UI polish, motion review, animation standards, component craft, and high-taste frontend guidance (MIT).
- **[chaunsin/agent-skills](https://github.com/chaunsin/agent-skills)**: Source for the `pre-release-review` and `drizzle-migration-conflict` skills - deploy-readiness audits and Drizzle Kit migration-conflict workflows (Apache-2.0).
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)**: Source for the `browser-testing-with-devtools` skill - Chrome DevTools MCP browser verification, profiling, network inspection, and frontend debugging guidance (MIT).
- **[stareezy-1/frontend-architecture-skill](https://github.com/stareezy-1/frontend-architecture-skill)**: Source for the `frontend-lighthouse` skill - portable Lighthouse CI Core Web Vitals gates, performance budgets, and GitHub Actions reporting (MIT).
- **[bin1874/before-you-build-skill](https://github.com/bin1874/before-you-build-skill)**: Source for the `before-you-build` skill - pre-coding product risk review across demand, alternatives, switching costs, channels, and validation steps (MIT).
- **[sparklingneuronics/sparkling-skills](https://github.com/sparklingneuronics/sparkling-skills)**: Source for the `dispatch` skill - multi-CLI delegation from Claude Code to Codex, Antigravity, and Gemini agents (MIT).
- **[takeaseatventure/sql-sentinel](https://github.com/takeaseatventure/sql-sentinel)**: Source for the `sql-sentinel` skill - SQL warehouse cost and performance anti-pattern audits across BigQuery, Snowflake, Redshift, and Postgres (MIT).
- **[takeaseatventure/devops-skills](https://github.com/takeaseatventure/devops-skills)**: Source for the `cron-doctor` skill - cron expression diagnosis, validation, trap detection, and zero-dependency schedule analysis tooling (MIT).
- **[drogers0/gh-image](https://github.com/drogers0/gh-image)**: Source for the `gh-image` skill - GitHub CLI image uploads that return canonical `user-attachments` embed URLs for PRs, issues, comments, and README screenshots (MIT).
- **[Genefold/arrowspace-skills](https://github.com/Genefold/arrowspace-skills)**: Source for the `arrowspace` skill - spectral vector search using graph Laplacian eigenstructure for structurally aware retrieval (Apache-2.0).
- **[yaojingang/yao-meta-skill](https://github.com/yaojingang/yao-meta-skill)**: Source for the `yao-meta-skill` skill - governed skill creation, refactoring, evaluation, packaging, review, and distribution workflows (MIT).
- **[connerkward/ckw-design-skill](https://github.com/connerkward/ckw-design-skill)**: Source for the `ckw-design` skill - frontend design direction, design-system guidance, visual philosophy, spatial checks, usability review, and production UI polish workflows (MIT).
- **[connerkward/deterministic-design-skill](https://github.com/connerkward/deterministic-design-skill)**: Source for the `deterministic-design` skill - rendered UI layout and usability audits using deterministic measurement plus vision-judged review loops (MIT).
- **[connerkward/lookdev-auto-skill](https://github.com/connerkward/lookdev-auto-skill)**: Source for the `lookdev-auto` skill - automated visual tuning loops where a vision or video model rates rendered variants and suggests improvements (MIT).
- **[connerkward/lookdev-studio-skill](https://github.com/connerkward/lookdev-studio-skill)**: Source for the `lookdev` skill - human-in-the-loop visual and prose tuning through rendered variants, sliders, swatches, inline edits, and selection-driven refinement (MIT).
- **[connerkward/macos-screen-recorder-system-audio](https://github.com/connerkward/macos-screen-recorder-system-audio)**: Source for the `macos-screen-recorder` skill - macOS ScreenCaptureKit recording with system audio, CLI workflows, permission handling, and export guidance (MIT).
- **[connerkward/mcp-apple-notes](https://github.com/connerkward/mcp-apple-notes)**: Source for the `apple-notes-search` skill - semantic and keyword search, related-note discovery, bridge finding, entity threads, and cited synthesis across local Apple Notes via MCP (MIT).
- **[connerkward/screenstudio-alternative-skill](https://github.com/connerkward/screenstudio-alternative-skill)**: Source for the `screenstudio-alt` skill - open-source screen recording polish with auto-zoom, idle speed-up, cursor treatment, captions, and vertical export workflows (MIT).
- **[connerkward/web-media-getter-skill](https://github.com/connerkward/web-media-getter-skill)**: Source for the `web-media-getter` skill - unified search across free image, video, and GIF APIs with license-aware media selection guidance (MIT).
- **[xi-kari/crossframe-skill](https://github.com/xi-kari/crossframe-skill)**: Source for the CrossFrame Skill Suite - Chinese-canonical structural diagnosis, essay drafting, review, and companion workflows across relationships, organizations, institutions, public issues, and research notes (MIT).
- **[qinghui316/ecl-harness-engineer](https://github.com/qinghui316/ecl-harness-engineer)**: Source for the `ecl-harness-engineer` skill - ECL Agent Harness infrastructure for AI coding workflows, repository guidance, change tracking, lint checks, CI gates, and handoff docs (MIT).
- **[baskduf/FableCodex](https://github.com/baskduf/FableCodex)**: Source for the `codex-fable5` skill - Codex-native Fable-inspired workflow discipline for evidence-first implementation, goal tracking, review findings, verification gates, and prompt adaptation (AGPL-3.0-or-later).
- **[Suraj1235/open-dynamic-workflows](https://github.com/Suraj1235/open-dynamic-workflows)**: Source for the `open-dynamic-workflows` skill - open-source dynamic multi-agent workflow engine that plans, orchestrates, and adversarially verifies parallel AI coding agents across OpenCode, Codex, Antigravity, and VS Code (MIT).
- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)**: Source for the `andrej-karpathy` skill - English Karpathy-inspired LLM coding guidelines for simplicity, surgical changes, assumption surfacing, and verifiable success criteria (MIT).
- **[mskadu/opencode-agent-skills](https://github.com/mskadu/opencode-agent-skills)**: Source for opencode behavior, permission, skill-suggestion, and smart Git automation skills.
- **[adelaidasofia/ai-brain-starter](https://github.com/adelaidasofia/ai-brain-starter)**: Source for the `ingest-youtube` skill - YouTube transcript ingestion into markdown vaults with yt-dlp metadata, VTT cleanup, and capture-seed stubs (MIT).
- **[JDDavenport/context-kit](https://github.com/JDDavenport/context-kit)**: Source reference for the `context-kit` skill - local-first Personal Context Artifact setup, installer review, and private context hygiene for Claude Code and adjacent agent workflows.
- **[JunsW/feature-track](https://github.com/JunsW/feature-track)**: Source for the `feature-tracking` skill - lightweight repository-native feature memory for current status, source-of-truth documents, decisions, risks, and cross-session handoff (MIT).
- **[JularDepick/user-thoughts.SKILL](https://github.com/JularDepick/user-thoughts.SKILL)**: Source for the `user-thoughts` skill - persistent project idea repository workflows for capturing decisions, tech stack notes, UI/UX rationale, and MDBASE-backed project memory (MIT).
- **[TheaDust/lore](https://github.com/TheaDust/lore)**: Source for the `lore` skill - Markdown-only, zero-dependency long-term project memory for AI coding agents, with monorepo scopes, two-section platform mirrors, and stdlib Python helpers (MIT).
- **[ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills)**: Source for the `youtube-full` skill - TranscriptAPI-backed YouTube transcripts, search, channel browsing, playlists, and cloud-safe video research workflows (MIT).
- **[ZeroPointRepo/zillow-skills](https://github.com/ZeroPointRepo/zillow-skills)**: Source for the `us-property-data` skill - U.S. property lookup, valuation, listing, tax, school, photo, and price-history guidance through the independent Zillapi API (MIT-0).
- **[Antheurus/anywrite](https://github.com/Antheurus/anywrite)**: Source for the `anywrite` skill - low-context CLI access to Anytype's local API for objects, properties, files, search, chat, and other workspace operations (MIT).
- **[Antheurus/sshepherd](https://github.com/Antheurus/sshepherd)**: Source for the `sshepherd` skill - credential-isolated SSH operations, service control, logs, configuration changes, Postgres introspection, and declarative deploys through preconfigured aliases (MIT).
- **[ejentum/ejentum-mcp](https://github.com/ejentum/ejentum-mcp)**: Source for the `ejentum-reasoning-harness` skill - MCP cognitive harness modes for reasoning, code review, anti-deception checks, and memory-drift analysis (MIT).
- **[luoyuctl/agenttrace](https://github.com/luoyuctl/agenttrace)**: Source for the `agenttrace-session-audit` skill - local AI coding-agent session audits for cost spikes, tool failures, latency gaps, anomalies, health gates, and session diffs (MIT).
- **[ohad6k/ditto](https://github.com/ohad6k/ditto)**: Source for the `ditto` skill - mines local coding-agent sessions into private, evidence-backed work, design, and writing profiles with dated source receipts (MIT).
- **[Necmttn/ax](https://github.com/Necmttn/ax)**: Source for the `ax-extract-workflow` skill - reconstruct workflow behind past coding-agent artifacts using local ax sessions, commits, skills, and tool traces (AGPL-3.0-only).
- **[Hanyuyuan6/remote-gpu-trainer](https://github.com/Hanyuyuan6/remote-gpu-trainer)**: Source for the `remote-gpu-trainer` skill - rented and remote GPU job orchestration, monitoring, teardown safety, spot resilience, and DL-debug workflows (MIT).
- **[mturac/recsys-pipeline-architect](https://github.com/mturac/recsys-pipeline-architect)**: Source for the `recsys-pipeline-architect` skill - recommendation, ranking, and feed pipeline architecture using Source, Hydrator, Filter, Scorer, Selector, and SideEffect stages (MIT).
- **[aomi-labs/skills](https://github.com/aomi-labs/skills)**: Source for the `aomi-transact` skill — natural-language driver for the Aomi CLI with account-abstraction-first execution and simulate-then-sign across 25+ DeFi apps (MIT).
- **[mycelos-ai/bumblebee-skill](https://github.com/mycelos-ai/bumblebee-skill)**: Source for the `bumblebee` skill - multi-agent implementation workflows with repeatable planning, coding, review, and verification loops (MIT).
- **[demo112/yunqu-ai-skills](https://github.com/demo112/yunqu-ai-skills)**: Source for WeChat official account, Xiaohongshu content strategy, and MCP tool development skills for Chinese-language platform workflows (MIT).
- **[tellmefrankie/news-engine](https://github.com/tellmefrankie/news-engine)**: Source for the `news-sentiment-engine` skill - news ingestion, sentiment analysis, and market/news intelligence workflows (MIT).
- **[Kench001/antigravity-awesome-skills](https://github.com/Kench001/antigravity-awesome-skills)**: Source for the `recursive-context-pruning-token-budgeting` skill - context pruning, token budgeting, and long-session compression guidance (MIT).
- **[rich-elicitation](https://github.com/CyberZenithX/Rich-Elicitation-Skill)**: Source for the `rich-elicitation` skill - asks clarifying questions in multiple rounds before starting ambiguous tasks.
- **[CodeShuX/mockhunter](https://github.com/CodeShuX/mockhunter)**: Source for the `mock-hunter` skill - Playwright-based live-page audits that classify visible values as real, mock, LLM-generated, hardcoded, broken, or unknown (MIT).
- **[commitshow/production-audit](https://github.com/commitshow/production-audit)**: Source for the `production-audit` skill - shipped-app readiness auditing across deployment health, RLS, webhooks, secrets exposure, grants, Stripe idempotency, and mobile UX.
- **[MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop)**: Source for the `unslop` skill - deterministic and LLM-assisted cleanup for AI-generated prose across CLI and agent tool workflows.
- **[monte-carlo-data/mc-agent-toolkit](https://github.com/monte-carlo-data/mc-agent-toolkit)**: Monte Carlo data observability skills — table health checks, change impact assessment, monitor creation, push ingestion, and SQL validation notebooks for dbt changes.
- **[openclaw/skills](https://github.com/openclaw/skills)**: Source for the `daily-gift` skill - relationship-aware creative gift generation with editorial judgment, concept selection, and multi-format rendering.
- **[umutbozdag/agent-skills-manager](https://github.com/umutbozdag/agent-skills-manager)**: Source for the `manage-skills` skill - cross-tool skill discovery, creation, editing, toggling, copying, moving, and deletion workflows across major agent coding tools.
- **[pumanitro/global-chat](https://github.com/pumanitro/global-chat)**: Source for the Global Chat Agent Discovery skill - cross-protocol discovery of MCP servers and AI agents across multiple registries.
- **[bitjaru/styleseed](https://github.com/bitjaru/styleseed)**: StyleSeed Toss UI and UX skill collection - setup wizard, page and pattern generation, design-token management, accessibility review, UX audits, feedback states, and microcopy guidance for professional mobile-first UI.
- **[yikuansun/PhotopeaAPI](https://github.com/yikuansun/PhotopeaAPI)**: Source for the `photopea-embedded-editor` skill - Photopea embedding, host-page messaging, file I/O, scripting, and export workflows for web apps (MIT).
- **[milkomida77/guardian-agent-prompts](https://github.com/milkomida77/guardian-agent-prompts)**: Source for the Multi-Agent Task Orchestrator skill - production-tested delegation patterns, anti-duplication, and quality gates for coordinated agent work.
- **[Elkidogz/technical-change-skill](https://github.com/Elkidogz/technical-change-skill)**: Source for the Technical Change Tracker skill - structured JSON change records, session handoff, and accessible HTML dashboards for coding continuity.
- **[vipin-si/article-illustrations](https://github.com/vipin-si/article-illustrations)**: Source for the `article-illustrations` skill - Grav-style hand-drawn article illustrations with whiteboard sketches, sparse annotations, and visual metaphor QA guidance (MIT).
- **[274326424/video-content-extractor](https://github.com/274326424/video-content-extractor)**: Source for the `video-content-extractor` skill - FFmpeg and Tesseract OCR workflows for extracting timestamped screen text and structured Markdown reports from MP4 videos (MIT).
- **[metrox-eth/quit-sponsor](https://github.com/metrox-eth/quit-sponsor)**: Source for the `quit-sponsor` skill - evidence-based quit-smoking sponsorship for agents with persistent memory: 44-source cited protocols, sponsor decision tree, three-clause contract, wave protocol, slip attribution coaching, and a timestamped logbook (MIT).
- **[rmyndharis/antigravity-skills](https://github.com/rmyndharis/antigravity-skills)**: For the massive contribution of 300+ Enterprise skills and the catalog generation logic.
- **[amartelr/antigravity-workspace-manager](https://github.com/amartelr/antigravity-workspace-manager)**: Workspace Manager CLI companion to dynamically auto-provision subsets of skills across local development environments.
- **[obra/superpowers](https://github.com/obra/superpowers)**: The original "Superpowers" by Jesse Vincent.
- **[guanyang/antigravity-skills](https://github.com/guanyang/antigravity-skills)**: Core Antigravity extensions.
- **[diet103/claude-code-infrastructure-showcase](https://github.com/diet103/claude-code-infrastructure-showcase)**: Infrastructure and Backend/Frontend Guidelines.
- **[ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)**: React UI patterns and Design Systems.
- **[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)**: Loki Mode and Playwright integration.
- **[Dimillian/Skills](https://github.com/Dimillian/Skills)**: Curated Codex skills focused on Apple platforms, GitHub workflows, refactoring, and performance (MIT).
- **[zebbern/claude-code-guide](https://github.com/zebbern/claude-code-guide)**: Comprehensive Security suite & Guide (Source for ~60 new skills).
- **[morsechimwai/lemmaly](https://github.com/morsechimwai/lemmaly)**: Source for the `lemmaly`, `mathguard`, `invariant-guard`, and `complexity-cuts` skills — algorithm-first discipline layer that forces AI coding agents to state Big-O, name the data structure, prove termination, and pick the right algorithm before writing the loop. Ships a deterministic CI scanner with 59 rules across 11 languages (Apache-2.0).
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)**: Senior Engineering and PM toolkit.
- **[karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills)**: A massive list of verified skills for Claude Code.
- **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)**: Curated collection of 1000+ official and community agent skills from leading development teams (MIT).
- **[zircote/.claude](https://github.com/zircote/.claude)**: Archived Claude Code dotfiles/config repo with a Shopify development skill reference.
- **[vibeforge1111/vibeship-spawner-skills](https://github.com/vibeforge1111/vibeship-spawner-skills)**: AI agents, integrations, maker tools, and other production-grade skill packs.
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)**: Marketing skills for CRO, copywriting, SEO, paid ads, and growth (23 skills, MIT).
- **[iradoweck/antigravity-awesome-skills](https://github.com/iradoweck/antigravity-awesome-skills)**: Source for the GeminiIgnore FinOps skill - `.geminiignore` setup patterns for context-window efficiency and token cost reduction.
- **[heyneuron/flowhunt-skill](https://github.com/heyneuron/flowhunt-skill)**: Source for the FlowHunt automation discovery audit skill - workflow intake, tool-by-tool audit, and opportunity prioritization for productivity automation.

<!-- opensource-radar:truncated -->
