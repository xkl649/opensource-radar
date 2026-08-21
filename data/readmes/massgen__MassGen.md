<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/logo.png">
    <img src="assets/logo.png" alt="MassGen Logo" width="360" />
  </picture>
</p>

<div align="center">

[![PyPI](https://img.shields.io/pypi/v/massgen?style=flat-square&logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/massgen/)
[![Docs](https://img.shields.io/badge/docs-massgen.ai-blue?style=flat-square&logo=readthedocs&logoColor=white)](https://docs.massgen.ai)
[![GitHub Stars](https://img.shields.io/github/stars/Leezekun/MassGen?style=flat-square&logo=github&color=181717&logoColor=white)](https://github.com/Leezekun/MassGen)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-Apache%202.0-green?style=flat-square)](LICENSE)

</div>

<div align="center">

[![Follow on X](https://img.shields.io/badge/FOLLOW%20ON%20X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.massgen.ai)
[![Follow on LinkedIn](https://img.shields.io/badge/FOLLOW%20ON%20LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/massgen-ai)
[![Join our Discord](https://img.shields.io/badge/JOIN%20OUR%20DISCORD-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.massgen.ai)

</div>

<h1 align="center">🚀 MassGen: Multi-Agent Scaling System for GenAI</h1>

<p align="center">
  <i>MassGen is a cutting-edge multi-agent system that leverages the power of collaborative AI to solve complex tasks.</i>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=5JofXWf_Ok8">
    <img src="docs/source/_static/images/readme.gif" alt="MassGen example" width="800">
  </a>
</p>

<p align="center">
  <i>Scaling AI with collaborative, continuously improving agents (4x speed)</i>
</p>

MassGen is a cutting-edge multi-agent framework that coordinates AI agents to solve complex tasks through redundancy and iterative refinement. Every agent tackles the full problem, observing, critiquing, and building on each other's work across cycles of refinement and restarts. When agents believe there is a strong enough answer, they vote, and the best collectively validated answer wins. This approach to parallel refinement and collective validation lays the groundwork for principled multi-agent scaling, where the system continuously improves its outputs by leveraging diverse agent perspectives and enforcing quality through consensus.

This project started with the "threads of thought" and "iterative refinement" ideas presented in [The Myth of Reasoning](https://docs.ag2.ai/latest/docs/blog/2025/04/16/Reasoning/), and extends the classic "multi-agent conversation" idea in [AG2](https://github.com/ag2ai/ag2). Here is a [video recording](https://www.youtube.com/watch?v=xM2Uguw1UsQ) of the background context introduction presented at the Berkeley Agentic AI Summit 2025.

<p align="center">
  <b>🧩 Use MassGen as a Skill:</b> <code>npx skills add massgen/skills --all</code> — then type invoke the skill in Claude Code, Cursor, Copilot, or 40+ other agents. <a href="https://github.com/massgen/skills">Learn more →</a>
</p>

<p align="center">
  <b>📚 For Contributors:</b> See <a href="https://massgen.github.io/Handbook/">MassGen Contributor Handbook</a> - Centralized policies and resources for development and research teams
</p>

---

## 📋 Table of Contents

<details open>
<summary><h3>✨ Key Features</h3></summary>

- [Cross-Model/Agent Synergy](#-key-features-1)
- [Parallel Processing](#-key-features-1)
- [Intelligence Sharing](#-key-features-1)
- [Consensus Building](#-key-features-1)
- [Live Visualization](#-key-features-1)
</details>

<details open>
<summary><h3>🆕 Latest Features</h3></summary>

- [v0.1.96 Features](#-latest-features-v0196)
</details>

<details open>
<summary><h3>🏗️ System Design</h3></summary>

- [System Architecture](#%EF%B8%8F-system-design-1)
- [Parallel Processing](#%EF%B8%8F-system-design-1)
- [Real-time Collaboration](#%EF%B8%8F-system-design-1)
- [Convergence Detection](#%EF%B8%8F-system-design-1)
- [Adaptive Coordination](#%EF%B8%8F-system-design-1)
</details>

<details open>
<summary><h3>🚀 Quick Start</h3></summary>

- [📥 Installation](#1--installation)
- [🔐 API Configuration](#2--api-configuration)
- [🧩 Supported Models and Tools](#3--supported-models-and-tools)
  - [Models](#models)
  - [Tools](#tools)
- [🏃 Run MassGen](#4--run-massgen)
  - [CLI Configuration Parameters](#cli-configuration-parameters)
  - [1. Single Agent (Easiest Start)](#1-single-agent-easiest-start)
  - [2. Multi-Agent Collaboration (Recommended)](#2-multi-agent-collaboration-recommended)
  - [3. Model Context Protocol (MCP)](#3-model-context-protocol-mcp)
  - [4. File System Operations](#4-file-system-operations--workspace-management)
  - [5. Project Integration (NEW in v0.0.21)](#5-project-integration--user-context-paths-new-in-v0021)
  - [Backend Configuration Reference](#backend-configuration-reference)
  - [Interactive Multi-Turn Mode](#interactive-multi-turn-mode)
- [📊 View Results](#5--view-results)
  - [Real-time Display](#real-time-display)
  - [Comprehensive Logging](#comprehensive-logging)
</details>

<details open>
<summary><h3>🤖 Automation & LLM Integration</h3></summary>

- [Automation Mode](#-automation--llm-integration)
- [BackgroundShellManager](#using-backgroundshellmanager)
- [Status File Reference](#statusjson-structure)
- [Full Automation Guide](https://docs.massgen.ai/en/latest/user_guide/automation.html)
</details>

<details open>
<summary><h3>💡 Case Studies & Examples</h3></summary>

- [Case Studies](#-case-studies)
</details>

<details open>
<summary><h3>🗺️ Roadmap</h3></summary>

- [Recent Achievements (v0.1.97)](#recent-achievements-v0197)
- [Previous Achievements (v0.0.3 - v0.1.96)](#previous-achievements-v003---v0196)
- [Key Future Enhancements](#key-future-enhancements)
  - Bug Fixes & Backend Improvements
  - Advanced Agent Collaboration
  - Expanded Model, Tool & Agent Integrations
  - Improved Performance & Scalability
  - Enhanced Developer Experience
- [v0.1.97 Roadmap](#v0197-roadmap)
</details>

<details open>
<summary><h3>📚 Additional Resources</h3></summary>

- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [⭐ Star History](#-star-history)
</details>

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **🤝 Cross-Model/Agent Synergy** | Harness strengths from diverse frontier model-powered agents |
| **⚡ Parallel Processing** | Multiple agents tackle problems simultaneously |
| **👥 Intelligence Sharing** | Agents share and learn from each other's work |
| **🔄 Consensus Building** | Natural convergence through collaborative refinement |
| **🖥️ Live Visualization** | Interactive Textual TUI with timeline, agent cards, and vote tracking (default). Also available: Web UI, Rich display. |

---

## 🆕 Latest Features (v0.1.97)

**🎉 Released: June 12, 2026**

**What's New in v0.1.97** (Application-Layer Permission Engine):
- **🛡️ Layered Permission Engine** - Opt-in `permissions:` block routes every tool call through a non-overridable **hardline** floor (`rm -rf /`, fork bombs), declarative **`allow/ask/deny` rules** over a small `action(target)` algebra (deny-wins), and a **blast-radius risk classifier** — auto-allowing reads/in-workspace edits and asking only for the dangerous tail (egress, force-push, publish, privilege). The app-layer companion to v0.1.96's OS sandbox.
- **✋ Approval That Fits the Run** - An `ask` resolves via an automation **policy** (`risk-based` / `deny-all` / `allow-all`) or a **file** request/response handshake for headless/remote approval (Slack bot, `/approve <id>`, …) — fail-closed by design.
- **🧑‍🤝‍🧑 Roles, Audit & Guards** - Per-agent `role` presets (e.g. `read-only`, which also empties the agent's OS-sandbox writable set), an append-only JSONL **audit ledger** of every decision, a runaway-loop **budget**, `always`-grant persistence, and a channel-based **guardrail prompt** that nudges the model to surface blocks rather than circumvent them while keeping `ask` sanctioned. *(Honest scope: the prompt is best-effort alignment; the OS sandbox is the enforcement.)*

**Install v0.1.97:**
```bash
pip install massgen==0.1.97
```

→ [See full release history and examples](massgen/configs/README.md#release-history--examples)

---

## 🏗️ System Design

MassGen operates through an architecture designed for **seamless multi-agent collaboration**:

```mermaid
graph TB
    O[🚀 MassGen Orchestrator<br/>📋 Task Distribution & Coordination]

    subgraph Collaborative Agents
        A1[Agent 1<br/>🏗️ Anthropic/Claude + Tools]
        A2[Agent 2<br/>🌟 Google/Gemini + Tools]
        A3[Agent 3<br/>🤖 OpenAI/GPT + Tools]
        A4[Agent 4<br/>⚡ xAI/Grok + Tools]
    end

    H[🔄 Shared Collaboration Hub<br/>📡 Real-time Notification & Consensus]

    O --> A1 & A2 & A3 & A4
    A1 & A2 & A3 & A4 <--> H

    classDef orchestrator fill:#e1f5fe,stroke:#0288d1,stroke-width:3px
    classDef agent fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef hub fill:#e8f5e8,stroke:#388e3c,stroke-width:2px

    class O orchestrator
    class A1,A2,A3,A4 agent
    class H hub
```

The system's workflow is defined by the following key principles:

**Parallel Processing** - Multiple agents tackle the same task simultaneously, each leveraging their unique capabilities (different models, tools, and specialized approaches).

**Real-time Collaboration** - Agents continuously share their working summaries and insights through a notification system, allowing them to learn from each other's approaches and build upon collective knowledge.

**Convergence Detection** - The system intelligently monitors when agents have reached stability in their solutions and achieved consensus through natural collaboration rather than forced agreement.

**Adaptive Coordination** - Agents can restart and refine their work when they receive new insights from others, creating a dynamic and responsive problem-solving environment.

This collaborative approach ensures that the final output leverages collective intelligence from multiple AI systems, leading to more robust and well-rounded results than any single agent could achieve alone.

---

> 📖 **Complete Documentation:** For comprehensive guides, API reference, and detailed examples, visit **[MassGen Official Documentation](https://docs.massgen.ai/)**
>
> 🤖 **For AI agents:** A curated [`llms.txt`](https://docs.massgen.ai/en/latest/llms.txt) index and full [`llms-full.txt`](https://docs.massgen.ai/en/latest/llms-full.txt) dump are published with the docs ([llmstxt.org spec](https://llmstxt.org)).

---

## 🚀 Quick Start

### 1. 📥 Installation

**Method 1: PyPI Installation** (Recommended - Python 3.11+):

```bash
# Install MassGen via pip
pip install massgen

# Or with uv (faster)
pip install uv
uv venv && source .venv/bin/activate
uv pip install massgen

# If you install massgen in uv, make sure you either activate your venv using source .venv/bin/activate
# Or include "uv run" before all commands
```

**Quickstart Setup** (Fastest way to get running):

```bash
# Step 1: Set up API keys, Docker, and skills
uv run massgen --setup

# Step 2: Create a simple config and start
uv run massgen --quickstart
```

The `--setup` command will:
- Configure your API keys (OpenAI, Anthropic, Google, xAI)
- Offer to set up Docker images for code execution
- Offer to install skills (openskills, Anthropic/OpenAI/Vercel collections, Agent Browser skill, Crawl4AI)

The `--quickstart` command will:
- Ask how many agents you want (1-5, default 3)
- Ask which backend/model for each agent
- For GPT-5x models, ask for `reasoning.effort` (`low|medium|high`; Codex GPT-5 models also include `xhigh`)
- Auto-detect Docker availability and configure execution mode
- If Docker mode is selected, show a Skills step where you can choose package(s) (`openskills`-based Anthropic/OpenAI/Vercel/Agent Browser plus Crawl4AI) and install them in-place with live status
- Create a ready-to-use config and launch into interactive TUI mode

**🤖 Use MassGen from Your AI Coding Agent:**

Install the [MassGen skill](https://github.com/massgen/skills) to invoke MassGen directly from Claude Code, OpenAI Codex, GitHub Copilot, Cursor, and [40+ other agents](https://skills.sh) that support the [Agent Skills](https://agentskills.io/home) standard:

```bash
npx skills add massgen/skills
```

Then use `/massgen` (Claude Code) or `$massgen` (Codex) to run multi-agent evaluation, planning, spec writing, or any general task. See the [skills docs](https://docs.massgen.ai/en/latest/user_guide/skills.html) for per-agent install options.

**🖥️ Textual TUI (Default Display Mode):**

MassGen launches with an interactive Terminal User Interface (TUI) by default, providing:
- 📊 **Real-time timeline** of all agent activities
- 🎯 **Individual agent status cards** for each team member
- 🗳️ **Vote visualization** and consensus tracking
- 💬 **Multi-turn conversation** management
- ⌨️ **Keyboard controls** for navigation (↑/↓ to scroll, 'q' to cancel)

**Legacy Rich display:**
```bash
massgen --display rich "Your question"
```

**Alternative: Full Setup Wizard**

For more control, use the full configuration wizard:
```bash
uv run massgen --init
```

This guides you through use case selection (Research, Code, Q&A, etc.) and advanced configuration options.

**After setup:**
```bash
# Interactive mode
uv run massgen

# Single query
uv run massgen "Your question here"

# With example configurations
uv run massgen --config @examples/basic/multi/three_agents_default "Your question"
```

→ See [Installation Guide](https://docs.massgen.ai/en/latest/quickstart/installation.html) for complete setup instructions.

**Method 2: Development Installation** (for contributors):

**Clone the repository**
```bash
git clone https://github.com/Leezekun/MassGen.git
cd MassGen
```

**Install in editable mode with pip**

**Option 1 (recommended): Installing with uv (faster)**

```bash
uv venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
uv pip install -e .

# If you install massgen in uv, make sure you either activate your venv using source .venv/bin/activate
# Or include "uv run" before all commands

# Automated setup (works on all platforms) - installs dependencies, skills, Docker images, also sets up API keys
uv run massgen --setup

# Or use the bash script (Unix/Linux/macOS only), need manually config API keys, see sections below
uv run ./scripts/init.sh

# If you would like to install other dependencies later
# Here is a light-weighted setup script which only installs skills (works on all platforms)
uv run massgen --setup-skills

# Or use the bash script (Unix/Linux/macOS only)
uv run ./scripts/init_skills.sh
```

**Option 2: Using traditional Python env**

```bash
pip install -e .

# Optional: External framework integration
pip install -e ".[external]"

# Automated setup (works on all platforms) - installs dependencies, skills, Docker images, also sets up API keys
massgen --setup

# Or use the bash script (Unix/Linux/macOS only), need manually config API keys, see sections below
./scripts/init.sh

# If you would like to install other dependencies later
# Here is a light-weighted setup script which only installs skills (works on all platforms)
massgen --setup-skills

# Or use the bash script (Unix/Linux/macOS only)
./scripts/init_skills.sh
```

> **Note:** The `--setup` and `--setup-skills` commands work cross-platform (Windows, macOS, Linux). The bash scripts (`init.sh`, `init_skills.sh`) are Unix-only but provide additional dev setup like Docker image builds.

<details>
<summary><b>Alternative Installation Methods</b> (click to expand)</summary>

**Using uv with venv:**
```bash
git clone https://github.com/Leezekun/MassGen.git
cd MassGen
uv venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
uv pip install -e .
```

**Using traditional Python venv:**
```bash
git clone https://github.com/Leezekun/MassGen.git
cd MassGen
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -e .
```

**Global installation with uv tool:**
```bash
git clone https://github.com/Leezekun/MassGen.git
cd MassGen
uv tool install -e .
# Now run from any directory
uv tool run massgen --config @examples/basic/multi/three_agents_default "Question"
```

**Backwards compatibility (uv run):**
```bash
cd /path/to/MassGen
uv run massgen --config @examples/basic/multi/three_agents_default "Question"
uv run python -m massgen.cli --config config.yaml "Question"
```

</details>

**Optional CLI Tools:**
```bash
# Claude Code CLI - Advanced coding assistant
npm install -g @anthropic-ai/claude-code

# LM Studio - Local model inference
# MacOS/Linux:
sudo ~/.lmstudio/bin/lms bootstrap
# Windows:
cmd /c %USERPROFILE%\.lmstudio\bin\lms.exe bootstrap
```

**After setup:**
```bash
# Interactive mode
uv run massgen

# Single query
uv run massgen "Your question here"

# With example configurations
uv run massgen --config @examples/basic/multi/three_agents_default "Your question"
```

### 2. 🔐 API Configuration

**Create a `.env` file in your working directory with your API keys:**

```bash
# Copy this template to .env and add your API keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...
XAI_API_KEY=...

# Optional: Additional providers
CEREBRAS_API_KEY=...
TOGETHER_API_KEY=...
GROQ_API_KEY=...
OPENROUTER_API_KEY=...
```

MassGen automatically loads API keys from `.env` in your current directory.

→ **Complete setup guide with all providers:** See [API Key Configuration](https://docs.massgen.ai/en/latest/quickstart/installation.html#api-key-configuration) in the docs

**Get API keys:**
 - [OpenAI](https://platform.openai.com/api-keys) | [Claude](https://docs.anthropic.com/en/api/overview) | [Gemini](https://ai.google.dev/gemini-api/docs) | [Grok](https://docs.x.ai/docs/overview)
 - [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/) | [Cerebras](https://inference-docs.cerebras.ai/introduction) | [OpenRouter](https://openrouter.ai/docs/api/api-reference/api-keys/create-keys) | [More providers...](https://docs.massgen.ai/en/latest/reference/supported_models.html)

### 3. 🧩 Supported Models and Tools

#### Models

The system currently supports multiple model providers with advanced capabilities:

**API-based Models:**
- **OpenAI**: GPT-5.2 (recommended default), GPT-5.1, GPT-5 series (GPT-5, GPT-5-mini, GPT-5-nano), GPT-5.1-Codex series, GPT-4.1 series, GPT-4o, o4-mini with reasoning, web search, code interpreter, and computer-use support
  - **Note**: We recommend GPT-5.2/5.1/5 over Codex models. Codex models are [optimized for shorter system messages](https://cookbook.openai.com/examples/gpt-5-codex_prompting_guide) and may not work well with MassGen's coordination prompts.
  - **Reasoning**: GPT-5.1 and GPT-5.2 default to `reasoning: none`. MassGen automatically sets `reasoning.effort: medium` when no reasoning config is provided, matching GPT-5's default behavior.
- **Azure OpenAI**: Any Azure-deployed models (GPT-4, GPT-4o, GPT-35-turbo, etc.)
- **Claude / Anthropic**: Claude Opus 4.5, Claude Haiku 4.5, Claude Sonnet 4.5, Claude Opus 4.1, Claude Sonnet 4
  - Advanced tooling: web search, code execution, Files API, programmatic tool calling, tool search with deferred loading
- **Claude Code**: Native Claude Code SDK with server-side session persistence and built-in dev tools
- **Gemini**: Gemini 3 Pro, Gemini 2.5 Flash, Gemini 2.5 Pro with code execution and grounding
- **Antigravity CLI**: Google's `agy` CLI as a MassGen backend, with hardened workspace isolation, workflow-tool fallback, native hooks, and Gemini-tier server-side model selection
- **Grok / xAI**: Grok-4.1, Grok-4, Grok-3, Grok-3-mini with Grok Live Search
- **Cerebras AI**: Ultra-fast inference for supported models
- **Together AI**, **Fireworks AI**, **Groq**: Fast inference for LLaMA, Mistral, Qwen, and other open models
- **OpenRouter**: Multi-model aggregator with dynamic model listing (400+ models)
- **Kimi / Moonshot**: Chinese AI models via OpenAI-compatible API
- **Nebius AI Studio**: Cloud inference platform
- **POE**: Quora AI platform with dynamic model discovery
- **Qwen / Alibaba**: DashScope API for Qwen models
- **Z AI / Zhipu**: GLM-4.5 and related models

**Local Model Support:**
- **vLLM & SGLang**: Unified inference backend supporting both vLLM and SGLang servers
  - vLLM (port 8000) and SGLang (port 30000) with OpenAI-compatible API
  - Support for `top_k`, `repetition_penalty`, `chat_template_kwargs` parameters
  - SGLang-specific `separate_reasoning` parameter for thinking models
  - Mixed server deployments with configuration example: `two_qwen_vllm_sglang.yaml`

- **LM Studio**: Run open-weight models locally with automatic server management
  - Automatic LM Studio CLI installation
  - Auto-download and loading of models
  - Support for LLaMA, Mistral, Qwen and other open-weight models

→ For complete model list and configuration details, see [Supported Models](https://docs.massgen.ai/en/latest/reference/supported_models.html)

#### Tools

MassGen agents can leverage various tools to enhance their problem-solving capabilities:

- **Built-in Tools**: Web search, code execution, bash/shell (provider-dependent)
- **Filesystem**: Native file operations or via MCP
- **MCP Integration**: Connect to any MCP server for extended capabilities
- **Custom Tools**: Define your own tools via YAML configuration
- **Multimodal**: Image, audio, video understanding and generation (native or via custom tools)

→ For detailed backend capabilities and tool support matrix, see [User Guide - Backends](https://docs.massgen.ai/en/latest/user_guide/backends.html#backend-capabilities)

---

### 4. 🏃 Run MassGen

> **Complete Usage Guide:** For all usage modes, advanced features, and interactive multi-turn sessions, see [Running MassGen](https://docs.massgen.ai/en/latest/quickstart/running-massgen.html)

#### 🚀 Getting Started

#### CLI Configuration Parameters

| Parameter          | Description |
|-------------------|-------------|
| `--config`         | Path to YAML configuration file with agent definitions, model parameters, backend parameters and UI settings |
| `--backend`        | Backend type for quick setup without a config file (`claude`, `claude_code`, `gemini`, `grok`, `openai`, `azure_openai`, `zai`). Optional for [models with default backends](massgen/utils.py).|
| `--model`          | Model name for quick setup (e.g., `gemini-2.5-flash`, `gpt-5-nano`, ...). `--config` and `--model` are mutually exclusive - use one or the other. |
| `--system-message` | System prompt for the agent in quick setup mode. If `--config` is provided, `--system-message` is omitted. |
| `--cwd-context`    | Add current working directory as runtime context path: `ro`/`read` for read-only, `rw`/`write` for write access. In TUI, this initializes the same state as `Ctrl+P`. |
| `--plan`           | Planning-only mode. Agents create a structured task plan without auto-executing it. |
| `--plan-depth`     | Plan granularity for `--plan`: `dynamic`, `shallow`, `medium`, or `deep`. |
| `--plan-and-execute` | Run both phases: create a plan, then execute it automatically. |
| `--execute-plan`   | Execute an existing plan by path, plan ID, or `latest`. |
| `--no-display`     | Disable real-time streaming UI coordination display (fallback to simple text output).|
| `--no-logs`        | Disable real-time logging.|
| `--debug`          | Enable debug mode with verbose logging (NEW in v0.0.13). Shows detailed orchestrator activities, agent messages, backend operations, and tool calls. Debug logs are saved to `agent_outputs/log_{time}/massgen_debug.log`. |
| `"<your question>"`         | Optional single-question input; if omitted, MassGen enters interactive chat mode. |

#### **0. OpenAI-Compatible HTTP Server (NEW)**

Run MassGen as an **OpenAI-compatible** HTTP API (FastAPI + Uvicorn). This is useful for integrating MassGen with existing tooling that expects `POST /v1/chat/completions`.

```bash
# Start server (defaults: host 0.0.0.0, port 4000)
massgen serve

# With explicit bind + defaults for model/config
massgen serve --host 0.0.0.0 --port 4000 --config path/to/config.yaml --default-model gpt-5
```

**Endpoints**

- `GET /health`
- `POST /v1/chat/completions` (supports `stream: true` SSE and OpenAI-style tool calling)

**cURL examples**

```bash
# Health
curl http://localhost:4000/health

# Non-streaming chat completion
curl http://localhost:4000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "massgen",
    "messages": [{"role": "user", "content": "hi"}],
    "stream": false
  }'

# Streaming (Server-Sent Events)
curl -N http://localhost:4000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "massgen",
    "messages": [{"role": "user", "content": "hi"}],
    "stream": true
  }'
```

**Notes**

- Client-provided `tools` are supported, but tool names that collide with MassGen workflow tools are rejected.
- Environment variables (optional): `MASSGEN_SERVER_HOST`, `MASSGEN_SERVER_PORT`, `MASSGEN_SERVER_DEFAULT_CONFIG`, `MASSGEN_SERVER_DEFAULT_MODEL`, `MASSGEN_SERVER_DEBUG`.


#### **1. Single Agent (Easiest Start)**

**Quick Start Commands:**
```bash
# Quick test with any supported model - no configuration needed
uv run python -m massgen.cli --model claude-sonnet-4-5-20250929 "What is machine learning?"
uv run python -m massgen.cli --model gemini-3-pro-preview "Explain quantum computing"
uv run python -m massgen.cli --model gpt-5-nano "Summarize the latest AI developments"
```

**Configuration:**

Use the `agent` field to define a single agent with its backend and settings:

```yaml
agent:
  id: "<agent_name>"
  backend:
    type: "azure_openai" | "chatcompletion" | "claude" | "claude_code" | "gemini" | "grok" | "openai" | "zai" | "lmstudio" #Type of backend
    model: "<model_name>" # Model name
    api_key: "<optional_key>"  # API key for backend. Uses env vars by default.
  system_message: "..."    # System Message for Single Agent
```

→ [See all single agent configs](massgen/configs/basic/single/)


#### **2. Multi-Agent Collaboration (Recommended)**

**Configuration:**

Use the `agents` field to define multiple agents, each with its own backend and config:

**Quick Start Commands:**

```bash
# Three powerful agents working together - Gemini, GPT-5, and Grok
massgen --config @examples/basic/multi/three_agents_default \
  "Analyze the pros and cons of renewable energy"
```

**This showcases MassGen's core strength:**
- **Gemini 3 Pro** - Fast research with web search
- **GPT-5 Nano** - Advanced reasoning with code execution
- **Grok-4 Fast** - Real-time information and alternative perspectives

```yaml
agents:  # Multiple agents (alternative to 'agent')
  - id: "<agent1 name>"
    backend:
      type: "azure_openai" | "chatcompletion" | "claude" | "claude_code" | "gemini" | "grok" | "openai" |  "zai" | "lmstudio" #Type of backend
      model: "<model_name>" # Model name
      api_key: "<optional_key>"  # API key for backend. Uses env vars by default.
    system_message: "..."    # System Message for Single Agent
  - id: "..."
    backend:
      type: "..."
      model: "..."
      ...
    system_message: "..."
```

→ [Explore more multi-agent setups](massgen/configs/basic/multi/)


#### **3. Model context protocol (MCP)**

The [Model context protocol](https://modelcontextprotocol.io/) (MCP) standardises how applications expose tools and context to language models. From the official documentation:

>MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

**MCP Configuration Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mcp_servers` | dict | **Yes** (for MCP) | Container for MCP server definitions |
| └─ `type` | string | Yes | Transport: `"stdio"` or `"streamable-http"` |
| └─ `command` | string | stdio only | Command to run the MCP server |
| └─ `args` | list | stdio only | Arguments for the command |
| └─ `url` | string | http only | Server endpoint URL |
| └─ `env` | dict | No | Environment variables to pass |
| `allowed_tools` | list | No | Whitelist specific tools (if omitted, all tools available) |
| `exclude_tools` | list | No | Blacklist dangerous/unwanted tools |


**Quick Start Commands ([Check backend MCP support here](#tools)):**

```bash
# Weather service with GPT-5
massgen --config @examples/tools/mcp/gpt5_nano_mcp_example \
  "What's the weather forecast for New York this week?"

# Multi-tool MCP with Gemini - Search + Weather + Filesystem (Requires BRAVE_API_KEY in .env)
massgen --config @examples/tools/mcp/multimcp_gemini \
  "Find the best restaurants in Paris and save the recommendations to a file"
```

**Configuration:**

```yaml
agents:
  # Basic MCP Configuration:
  backend:
    type: "openai"              # Your backend choice
    model: "gpt-5-mini"         # Your model choice

    # Add MCP servers here
    mcp_servers:
      weather:                  # Server name (you choose this)
        type: "stdio"           # Communication type
        command: "npx"          # Command to run
        args: ["-y", "@modelcontextprotocol/server-weather"]  # MCP server package

  # That's it! The agent can now check weather.

  # Multiple MCP Tools Example:
  backend:
    type: "gemini"
    model: "gemini-3.0-pro-preview"
    mcp_servers:
      # Web search
      search:
        type: "stdio"
        command: "npx"
        args: ["-y", "@modelcontextprotocol/server-brave-search"]
        env:
          BRAVE_API_KEY: "${BRAVE_API_KEY}"  # Set in .env file

      # HTTP-based MCP server (streamable-http transport)
      custodm_api:
        type: "streamable-http"   # For HTTP/SSE servers
        url: "http://localhost:8080/mcp/sse"  # Server endpoint


  # Tool configuration (MCP tools are auto-discovered)
  allowed_tools:                        # Optional: whitelist specific tools
    - "mcp__weather__get_current_weather"
    - "mcp__test_server__mcp_echo"
    - "mcp__test_server__add_numbers"

  exclude_tools:                        # Optional: blacklist specific tools
    - "mcp__test_server__current_time"
```

→ [View more MCP examples](massgen/configs/tools/mcp/)

→ For comprehensive MCP integration guide, see [MCP Integration](https://docs.massgen.ai/en/latest/user_guide/mcp_integration.html)

#### **4. File System Operations & Workspace Management**

MassGen provides comprehensive file system support through multiple backends, enabling agents to read, write, and manipulate files in organized workspaces.


**Filesystem Configuration Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cwd` | string | **Yes** (for file ops) | Working directory for file operations (agent-specific workspace) |
| `snapshot_storage` | string | Yes | Directory for workspace snapshots |
| `agent_temporary_workspace` | string | Yes | Parent directory for temporary workspaces |


**Quick Start Commands:**

```bash
# File operations with Claude Code
massgen --config @examples/tools/filesystem/claude_code_single \
  "Create a Python web scraper and save results to CSV"

# Multi-agent file collaboration
massgen --config @examples/tools/filesystem/claude_code_context_sharing \
  "Generate a comprehensive project report with charts and analysis"
```

**Configuration:**

```yaml
# Basic Workspace Setup:
agents:
  - id: "file-agent"
    backend:
      type: "claude_code"          # Backend with file support
      cwd: "workspace"             # Isolated workspace for file operations

# Multi-Agent Workspace Isolation:
agents:
  - id: "agent_a"
    backend:
      type: "claude_code"
      cwd: "workspace1"            # Agent-specific workspace

  - id: "agent_b"
    backend:
      type: "gemini"
      cwd: "workspace2"            # Separate workspace

orchestrator:
  snapshot_storage: "snapshots"              # Shared snapshots directory
  agent_temporary_workspace: "temp_workspaces" # Temporary workspace management
```
**Available File Operations:**
- **Claude Code**: Built-in tools (Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS, TodoWrite)
- **Other Backends**: Via [MCP Filesystem Server](https://github.com/modelcontextprotocol/servers/blob/main/src%2Ffilesystem%2FREADME.md)

**Workspace Management:**
- **Isolated Workspaces**: Each agent's `cwd` is fully isolated and writable
- **Snapshot Storage**: Share workspace context between Claude Code agents
- **Temporary Workspaces**: Agents can access previous coordination results

→ [View more filesystem examples](massgen/configs/tools/filesystem/)

> ⚠️ **IMPORTANT SAFETY WARNING**
>
> MassGen agents can **autonomously read, write, modify, and delete files** within their permitted directories.
>
> **Before running MassGen with filesystem access:**
> - Only grant access to directories you're comfortable with agents modifying
> - Use the permission system to restrict write access where needed
> - Consider testing in an isolated directory or virtual environment first
> - Back up important files before granting write access
> - Review the `context_paths` configuration carefully
>
> The agents will execute file operations without additional confirmation once permissions are granted.

→ For comprehensive file operations guide, see [File Operations](https://docs.massgen.ai/en/latest/user_guide/file_operations.html)

#### **5. Project Integration & User Context Paths (NEW in v0.0.21)**

Work directly with your existing projects! User Context Paths allow you to share specific directories with all agents while maintaining granular permission control. This enables secure multi-agent collaboration on your real codebases, documentation, and data.

MassGen automatically organizes all its working files under a `.massgen/` directory in your project root, keeping your project clean and making it easy to exclude MassGen's temporary files from version control.

**Project Integration Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `context_paths` | list | **Yes** (for project integration) | Shared directories for all agents |
| └─ `path` | string | Yes | Absolute or relative path to your project directory (**must be directory, not file**) |
| └─ `permission` | string | Yes | Access level: `"read"` or `"write"` (write applies only to final agent) |
| └─ `protected_paths` | list | No | Files/directories immune from modification (relative to context path) |

**⚠️ Important Notes:**
- Context paths must point to **directories**, not individual files
- Paths can be **absolute** or **relative** (resolved against current working directory)
- **Write permissions** apply only to the **final agent** during presentation phase
- During coordination, all context paths are **read-only** to protect your files
- MassGen validates all paths during startup and will show clear error messages for missing paths or file paths


**Quick Start Commands:**

```bash
# Multi-agent collaboration to improve the website in `massgen/configs/resources/v0.0.21-example
massgen --config @examples/tools/filesystem/gpt5mini_cc_fs_context_path "Enhance the website with: 1) A dark/light theme toggle with smooth transitions, 2) An interactive feature that helps users engage with the blog content (your choice - could be search, filtering by topic, reading time estimates, social sharing, reactions, etc.), and 3) Visual polish with CSS animations or transitions that make the site feel more modern and responsive. Use vanilla JavaScript and be creative with the implementation details."
```

**Configuration:**

```yaml
# Basic Project Integration:
agents:
  - id: "code-reviewer"
    backend:
      type: "claude_code"
      cwd: "workspace"             # Agent's isolated work area

orchestrator:
  context_paths:
    - path: "."                    # Current directory (relative path)
      permission: "write"          # Final agent can create/modify files
      protected_paths:             # Optional: files immune from modification
        - ".env"
        - "config.json"
    - path: "/home/user/my-project/src"  # Absolute path example
      permission: "read"           # Agents can analyze your code

# Advanced: Multi-Agent Project Collaboration
agents:
  - id: "analyzer"
    backend:
      type: "gemini"
      cwd: "analysis_workspace"

  - id: "implementer"
    backend:
      type: "claude_code"
      cwd: "implementation_workspace"

orchestrator:
  context_paths:
    - path: "../legacy-app/src"   # Relative path to existing codebase
      permission: "read"           # Read existing codebase
    - path: "../legacy-app/tests"
      permission: "write"          # Final agent can write new tests
      protected_paths:             # Protect specific test files
        - "integration_tests/production_data_test.py"
    - path: "/home/user/modernized-app"  # Absolute path
      permission: "write"          # Final agent can create modernized version
```

**This showcases project integration:**
- **Real Project Access** - Work with your actual codebases, not copies
- **Secure Permissions** - Granular control over what agents can read/modify
- **Multi-Agent Collaboration** - Multiple agents safely work on the same project
- **Context Agents** (during coordination): Always READ-only access to protect your files
- **Final Agent** (final execution): Gets the configured permission (READ or write)

**Use Cases:**
- **Code Review**: Agents analyze your source code and suggest improvements
- **Documentation**: Agents read project docs to understand context and generate updates
- **Data Processing**: Agents access shared datasets and generate analysis reports
- **Project Migration**: Agents examine existing projects and create modernized versions

**Clean Project Organization:**
```
your-project/
├── .massgen/                          # All MassGen state
│   ├── sessions/                      # Multi-turn conversation history (if using interactively)
│   │   └── session_20240101_143022/
│   │       ├── turn_1/                # Results from turn 1
│   │       ├── turn_2/                # Results from turn 2
│   │       └── SESSION_SUMMARY.txt    # Human-readable summary
│   ├── workspaces/                    # Agent working directories
│   │   ├── agent1/                    # Individual agent workspaces
│   │   └── agent2/
│   ├── snapshots/                     # Workspace snapshots for coordination
│   └── temp_workspaces/               # Previous turn results for context
├── massgen/
└── ...
```

**Benefits:**
- ✅ **Clean Projects** - All MassGen files contained in one directory
- ✅ **Easy Gitignore** - Just add `.massgen/` to `.gitignore`
- ✅ **Portable** - Move or delete `.massgen/` without affecting your project
- ✅ **Multi-Turn Sessions** - Conversation history preserved across sessions

**Configuration Auto-Organization:**
```yaml
orchestrator:
  # User specifies simple names - MassGen organizes under .massgen/
  snapshot_storage: "snapshots"         # → .massgen/snapshots/
  agent_temporary_workspace: "temp"     # → .massgen/temp/

agents:
  - backend:
      cwd: "workspace1"                 # → .massgen/workspaces/workspace1/
```

→ For comprehensive project integration guide, see [Project Integration](https://docs.massgen.ai/en/latest/user_guide/project_integration.html)

**Security Considerations:**
- **Agent ID Safety**: Avoid using agent+incremental digits for IDs (e.g., `agent1`, `agent2`). This may cause ID exposure during voting
- **File Access Control**: Restrict file access using MCP server configurations when needed
- **Path Validation**: All context paths are validated to ensure they exist and are directories (not files)
- **Directory-Only Context Paths**: Context paths must point to directories, not individual files

---

#### Additional Examples by Provider

**Claude (Recursive MCP Execution - v0.0.20+)**
```bash
# Claude with advanced tool chaining
massgen --config @examples/tools/mcp/claude_mcp_example \
  "Research and compare weather in Beijing and Shanghai"
```

**OpenAI (GPT-5 Series with MCP - v0.0.17+)**
```bash
# GPT-5 with weather and external tools
massgen --config @examples/tools/mcp/gpt5_nano_mcp_example \
  "What's the weather of Tokyo"
```

**Gemini (Multi-Server MCP - v0.0.15+)**
```bash
# Gemini with multiple MCP services
massgen --config @examples/tools/mcp/multimcp_gemini \
  "Find accommodations in Paris with neighborhood analysis"    # (requires BRAVE_API_KEY in .env)
```

**Claude Code (Development Tools)**
```bash
# Professional development environment with auto-configured workspace
uv run python -m massgen.cli \
  --backend claude_code \
  --model sonnet \
  "Create a Flask web app with authentication"

# Default workspace directories created automatically:
# - workspace1/              (working directory)
# - snapshots/              (workspace snapshots)
# - temp_workspaces/        (temporary agent workspaces)
```

**Local Models (LM Studio - v0.0.7+)**
```bash
# Run open-source models locally
massgen --config @examples/providers/local/lmstudio \
  "Explain machine learning concepts"
```

→ [Browse by provider](massgen/configs/providers/) | [Browse by tools](massgen/configs/tools/) | [Browse teams](massgen/configs/teams/)

#### Additional Use Case Examples

**Question Answering & Research:**
```bash
# Complex research with multiple perspectives
massgen --config @examples/basic/multi/gemini_gpt5_claude \
  "What's best to do in Stockholm in October 2025"

# Specific research requirements
massgen --config @examples/basic/multi/gemini_gpt5_claude \
  "Give me all the talks on agent frameworks in Berkeley Agentic AI Summit 2025"
```

**Creative Writing:**
```bash
# Story generation with multiple creative agents
massgen --config @examples/basic/multi/gemini_gpt5_claude \
  "Write a short story about a robot who discovers music"
```

**Development & Coding:**
```bash
# Full-stack development with file operations
massgen --config @examples/tools/filesystem/claude_code_single \
  "Create a Flask web app with authentication"
```

**Web Automation:** (still in test)
```bash
# Browser automation with screenshots and reporting
# Prerequisites: npm install @playwright/mcp@latest (for Playwright MCP server)
massgen --config @examples/tools/code-execution/multi_agent_playwright_automation \
  "Browse three issues in https://github.com/Leezekun/MassGen and suggest documentation improvements. Include screenshots and suggestions in a website."

# Data extraction and analysis
massgen --config @examples/tools/code-execution/multi_agent_playwright_automation \
  "Navigate to https://news.ycombinator.com, extract the top 10 stories, and create a summary report"
```

→ [**See detailed case studies**](docs/source/examples/case_studies/README.md) with real session logs and outcomes

#### Interactive Mode & Advanced Usage

**Multi-Turn Conversations:**
```bash
# Start interactive chat (no initial question)
massgen --config @examples/basic/multi/three_agents_default

# Add CWD context quickly (read-only)
massgen --config @examples/basic/multi/three_agents_default --cwd-context ro

# Add CWD context quickly (read+write)
massgen --config @examples/basic/multi/three_agents_default --cwd-context rw

# Debug mode for troubleshooting
massgen --config @examples/basic/multi/three_agents_default \
  --debug "Your question"
```

## Configuration Files

MassGen configurations are organized by features and use cases. See the [Configuration Guide](massgen/configs/README.md) for detailed organization and examples.

**Quick navigation:**
- **Basic setups**: [Single agent](massgen/configs/basic/single/) | [Multi-agent](massgen/configs/basic/multi/)
- **Tool integrations**: [MCP servers](massgen/configs/tools/mcp/) | [Web search](massgen/configs/tools/web-search/) | [Filesystem](massgen/configs/tools/filesystem/)
- **Provider examples**: [OpenAI](massgen/configs/providers/openai/) | [Claude](massgen/configs/providers/claude/) | [Gemini](massgen/configs/providers/gemini/)
- **Specialized teams**: [Creative](massgen/configs/teams/creative/) | [Research](massgen/configs/teams/research/) | [Development](massgen/configs/teams/development/)

See MCP server setup guides: [Discord MCP](massgen/configs/docs/DISCORD_MCP_SETUP.md) | [Twitter MCP](massgen/configs/docs/TWITTER_MCP_ENESCINAR_SETUP.md)

#### Backend Configuration Reference

For detailed configuration of all supported backends (OpenAI, Claude, Gemini, Grok, etc.), see:

→ **[Backend Configuration Guide](massgen/configs/BACKEND_CONFIGURATION.md)**

#### Interactive Multi-Turn Mode

MassGen supports an interactive mode where you can have ongoing conversations with the system:

```bash
# Start interactive mode with a single agent (no tool enabled by default)
uv run python -m massgen.cli --model gpt-5-mini

# Start interactive mode with configuration file
uv run python -m massgen.cli \
  --config massgen/configs/basic/multi/three_agents_default.yaml
```

**Interactive Mode Features:**
- **Multi-turn conversations**: Multiple agents collaborate to chat with you in an ongoing conversation
- **Real-time coordination tracking**: Live visualization of agent interactions, votes, and decision-making processes
- **Real-time feedback**: Displays real-time agent and system status with enhanced coordination visualization
- **Multi-line input**: Use `"""` or `'''` to enter multi-line messages
- **Slash commands**:
  - `/help` or `/h` - Show available commands
  - `/status` - Display current system status
  - `/config` - Open the configuration file
  - `/clear` or `/reset` - Clear conversation history and start fresh
  - `/quit`, `/exit`, or `/q` - Exit the session (or press `Ctrl+C`)

**Watch the recorded demo:**

[![MassGen Case Study](https://img.youtube.com/vi/h1R7fxFJ0Zc/0.jpg)](https://www.youtube.com/watch?v=h1R7fxFJ0Zc)

### 5. 📊 View Results

The system provides multiple ways to view and analyze results:

#### Real-time Display
- **Live Collaboration View**: See agents working in parallel through a multi-region terminal display
- **Status Updates**: Real-time phase transitions, voting progress, and consensus building
- **Streaming Output**: Watch agents' reasoning and responses as they develop

**Watch an example here:**

[![MassGen Case Study](https://img.youtube.com/vi/Dp2oldJJImw/0.jpg)](https://www.youtube.com/watch?v=Dp2oldJJImw)

#### Comprehensive Logging

All sessions are automatically logged with detailed information for debugging and analysis.

**Real-time Interaction:**
- Press `r` during execution to view the coordination table in your terminal
- Watch agents collaborate, vote, and reach consensus in real-time

##### Logging Storage Structure

```
.massgen/
└── massgen_logs/
    └── log_YYYYMMDD_HHMMSS/           # Timestamped log directory
        ├── agent_<id>/                 # Agent-specific coordination logs
        │   └── YYYYMMDD_HHMMSS_NNNNNN/ # Timestamped coordination steps
        │       ├── answer.txt          # Agent's answer at this step
        │       ├── context.txt         # Context available to agent
        │       └── workspace/          # Agent workspace (if filesystem tools used)
        ├── agent_outputs/              # Consolidated output files
        │   ├── agent_<id>.txt          # Complete output from each agent
        │   ├── final_presentation_agent_<id>.txt       # Winning agent's final answer
        │   ├── final_presentation_agent_<id>_latest.txt # Symlink to latest
        │   └── system_status.txt       # System status and metadata
        ├── final/                      # Final presentation phase
        │   └── agent_<id>/             # Winning agent's final work
        │       ├── answer.txt          # Final answer
        │       └── context.txt         # Final context
        ├── coordination_events.json    # Structured coordination events
        ├── coordination_table.txt      # Human-readable coordination table
        ├── vote.json                   # Final vote tallies and consensus data
        ├── massgen.log                 # Complete debug log (or massgen_debug.log in debug mode)
        ├── snapshot_mappings.json      # Workspace snapshot metadata
        └── execution_metadata.yaml     # Query, config, and execution details
```

##### Key Log Files

- **Coordination Table** (`coordination_table.txt`): Complete visualization of multi-agent coordination with event timeline, voting patterns, and consensus building
- **Coordination Events** (`coordination_events.json`): Structured JSON log of all events (started_streaming, new_answer, vote, restart, final_answer)
- **Vote Summary** (`vote.json`): Final vote tallies, winning agent, and consensus information
- **Execution Metadata** (`execution_metadata.yaml`): Original query, timestamp, configuration, and execution context for reproducibility
- **Agent Outputs** (`agent_outputs/`): Complete output history and final presentations from all agents
- **Debug Log** (`massgen.log`): Complete system operations, API calls, tool usage, and error traces (use `--debug` for verbose logging)

→ For comprehensive logging guide and debugging techniques, see [Logging & Debugging](https://docs.massgen.ai/en/latest/user_guide/logging.html)

---

## 🤖 Automation & LLM Integration

**→ For LLM agents: See [AI_USAGE.md](AI_USAGE.md) for complete command-line usage guide**

MassGen provides **automation mode** designed for LLM agents and programmatic workflows:

### Quick Start - Automation Mode

```bash
# Run with minimal output and status tracking
uv run massgen --automation --config your_config.yaml "Your question"
```

### Comprehensive Guide

→ **Full automation guide with examples:** [Automation Guide](https://docs.massgen.ai/en/latest/user_guide/automation.html)

Topics covered:
- Complete automation patterns with error handling
- Parallel experiment execution
- Performance tips and troubleshooting

### Python API & LiteLLM

Use MassGen programmatically with the familiar LiteLLM/OpenAI interface:

```python
from dotenv import load_dotenv
load_dotenv()  # Load API keys from .env

import litellm
from massgen import register_with_litellm

register_with_litellm()

# Multi-agent with slash format: "backend/model"
response = litellm.completion(
    model="massgen/build",
    messages=[{"role": "user", "content": "Compare AI approaches"}],
    optional_params={"models": ["openai/gpt-5", "groq/llama-3.3-70b"]}
)
print(response.choices[0].message.content)  # Final consensus answer
```

Or use the direct Python API:

```python
from dotenv import load_dotenv
load_dotenv()

import asyncio
import massgen

result = asyncio.run(massgen.run(
    query="What is machine learning?",
    models=["openai/gpt-5", "gemini/gemini-3-pro-preview"]
))
print(result["final_answer"])  # Consensus answer from winning agent
```

> **Full API reference:** [Programmatic API Guide](https://docs.massgen.ai/en/latest/user_guide/integration/python_api.html)

---

## 💡 Case Studies

To see how MassGen works in practice, check out these detailed case studies based on real session logs:

**Featured:**
- [**Multi-Turn Persistent Memory**](docs/source/examples/case_studies/multi-turn-persistent-memory.md) - Research-to-implementation workflow demonstrating memory system (v0.1.5) | [📹 Watch Demo](https://youtu.be/wWxxFgyw40Y)

**All Case Studies:**
- [**MassGen Case Studies**](docs/source/examples/case_studies/README.md)
- [**Case Studies Documentation**](https://docs.massgen.ai/en/latest/examples/case_studies.html) - Browse case studies online

---


## 🗺️ Roadmap

MassGen is currently in its foundational stage, with a focus on parallel, asynchronous multi-agent collaboration and orchestration. Our roadmap is centered on transforming this foundation into a highly robust, intelligent, and user-friendly system, while enabling frontier research and exploration.

⚠️ **Early Stage Notice:** As MassGen is in active development, please expect upcoming breaking architecture changes as we continue to refine and improve the system.

### Recent Achievements (v0.1.97)

**🎉 Released: June 12, 2026**

#### Application-Layer Permission Engine
- **Permission engine (opt-in `permissions:` block)**: a composite `PreToolUse` pipeline in `massgen/permissions/` — a non-overridable **hardline** blocklist (`hardline.py`: `rm -rf /`, fork bombs, raw-disk `dd`), a declarative **`action(target)` rule layer** (`rules.py`: `command`/`read_file`/`write_file`/`read_url`/`mcp`/`*`, deny-wins across scopes), and a **blast-radius `RiskClassifier`** that tiers by what the call does (egress/force-push/publish/privilege → high; reads/in-workspace edits → low). An explicit rule suppresses the risk-ask, so rules + risk live in one hook
- **Approval round-trip**: the `base_with_custom_tool_and_mcp` chokepoint resolves an `ask` via a pluggable `ApprovalProvider` — automation **policy** (`risk-based` default / `deny-all` / `allow-all`) and **file** request/response handshake for headless/remote (both live-verified, fail-closed on timeout)
- **Roles, audit & guards**: per-agent `role` presets (`read-only`/`researcher` deny writes+shell, also empties the agent's SRT writable set), an append-only JSONL **`ApprovalLedger`**, a runaway-loop **`ApprovalBudget`**, and `always`-grant persistence to `settings.local.json`
- **Guardrail system prompt** (`PermissionGuardrailSection`, injected only when the engine is active): follow the guardrails, don't circumvent a denial, surface-and-ask — while keeping `ask` a sanctioned path. Authority is established by channel (only the system prompt is authoritative). Denied tool calls now render as **first-class failed tool events** (with the command) in the TUI/WebUI timeline
- **Presence-gated & honest**: a config with no `permissions:` block is 100% unchanged; native backends (claude_code/codex) report **INACTIVE** rather than silently inert. All under TDD; live-verified that the prompt is best-effort *alignment* (a model evaded the regex egress classifier via `\c\u\r\l` / `python urllib`), so the OS sandbox remains the load-bearing enforcement

### Previous Achievements (v0.0.3 - v0.1.96)

✅ **OS-Level Agent Sandboxing (v0.1.96)**: Added a real OS-level execution sandbox (`command_line_execution_mode: srt`) wrapping agent command/code execution in Anthropic's sandbox-runtime (bubblewrap/Seatbelt), with OS-enforced filesystem + network isolation derived from the same `PathPermissionManager` policy as the app layer (defense in depth), configurable read confinement (`confined`/`strict`/`open`, deny-all network), a hardened key-agnostic permission hook, native-sandbox-backend `srt`→`local` degrade, and subagent inheritance.

✅ **Steering Improvements (v0.1.95)**: Extended mid-stream steering from a UI-only capability into a programmatic, headless one — `send_steering_message()` drops guidance into a file inbox (`--inbox-dir`) routed through the same `set_pending_input` chokepoint the TUI/WebUI use — and upgraded Codex/Antigravity to interrupt-and-resume the in-flight turn (`codex exec resume` / `agy --continue`) instead of waiting for a round boundary, with `expires_at`-guarded MCP-hook payload IPC and the Antigravity `--model` flag wired through.

✅ **Parallelism Hardening — Engineering Health (v0.1.94)**: Moved the peer-context snapshot copy off the event loop (worker thread via `asyncio.to_thread`) backed by immutable, versioned snapshots (`SnapshotVersionStore`) with atomically-repointed symlinks and refcounted readers, eliminating the read-during-write race; fixed lost peer-answer revisions (R1), lost background-subagent results (R2/R3), leaked trace tasks (R4), and cancel-without-await teardown (R5); surfaced worktree-isolation degradation (D2); and unified the mid-stream injection paths (A1). No per-backend functionality changes.

✅ **CLI Package Decomposition & Pydantic Config Migration (v0.1.93)**: Split the monolithic 12k-line `cli.py` into an 18-module `massgen/cli/` package, migrated config classes to `pydantic.dataclasses` with `Literal`-typed modes the validator derives from, consolidated provider-exclusion lists, removed ~8.7k lines of dead legacy code from the wheel, and hardened the test-signal/type-checking tooling. Internal-quality release, no runtime behavior changes.

✅ **Orchestrator Collaborator Refactor & Parallel Search MCP (v0.1.92)**: Reduced `orchestrator.py` from 21,599 to 8,574 lines by extracting 49 lazy collaborators, split Textual display helpers into sibling modules, added characterization coverage, and introduced a Parallel Web Search MCP registry entry plus example config.

✅ **Config Reliability & Hook Safety (v0.1.91)**: Centralized coordination, timeout, and orchestrator runtime parsing; strict unknown-key validation; checklist runtime control wiring; and safer Gemini/Codex native hook path permission precedence.

✅ **Discriminative Criteria Refinements & Checklist Calibration (v0.1.90)**: Improved checklist-gated refinement quality with discriminative-power pruning, per-criterion feedback, position-bias counterbalancing, deterministic tie-breaking, a unified checklist gate, shared score parsing utilities, and fast-iteration config updates.

✅ **Antigravity CLI Full Integration & Hardening (v0.1.89)**: Completed the follow-up Antigravity integration pass with workflow-mode parity, auth checks, workspace project anchoring, standalone `hooks.json`, and prompt affordance gating.

✅ **Antigravity CLI Backend (v0.1.88)**: Added the first `antigravity_cli` backend wrapping Google's `agy` binary, with workspace-local `.antigravity/` config isolation, MCP config translation, native-hook adapter support, and runnable single-agent / mixed Gemini + Antigravity examples.

✅ **Framework Comparisons & `llms.txt` (v0.1.87)**: Added CrewAI, LangGraph, and AutoGen/AG2 comparison pages, plus `llms.txt` and generated `llms-full.txt` for AI-agent documentation discovery. Also fixed `bootstrap_subagent` single-shot behavior with `refine=False`.

✅ **`bootstrap_subagent` Discriminator + Codex MCP Approval Fix (v0.1.86)**: Variant B is now functional — the orchestrator runs an in-process LLM critic between rounds, merges critic-proposed criteria into the accumulator, and augments the next round's checklist. Codex MCP tool calls under `codex exec` now write both approval bypasses needed for non-interactive runs.

✅ **Discriminative Criteria Emergence (`criteria_mode`) (v0.1.85)**: New `orchestrator.coordination.criteria_mode` lets evaluation criteria emerge from observed gaps across rounds. `bootstrap_inline` is fully functional on all backends with checklist tool support, with `proposed_criteria` persisted, deduped, capped, and merged into the next round's effective checklist.

✅ **TUI Consensus Map (v0.1.84)**: Compact visual map below the agent status ribbon during multi-agent runs that summarizes coordination state — agent nodes with latest answer labels, vote arrows, current leader, winner state — driven by existing coordination events without backend schema changes.

✅ **In-Session Standalone Checkpoint MCP Integration (v0.1.83)**: The standalone checkpoint MCP server can now run inside a normal MassGen single-agent session via `coordination.standalone_checkpoint` config block. Enhanced TUI tool card visualization distinguishes primary checkpoint operations from system tasks.

✅ **TUI Copy Mode & Checkpoint Quality Improvements (v0.1.82)**: `Ctrl+Shift+S` copy mode toggle for native text selection. Checkpoint quality criteria with selective branch depth scoring, optional workspace context for reviewer agents, and single-checkpoint agent recovery guidance.

✅ **Multi-Region Circuit Breaker Failover (v0.1.81)**: LLM circuit breaker fails over to backup regions when the primary trips OPEN, with automatic recovery when the primary returns to healthy. Completes the circuit breaker series (Phase 1-6).

✅ **Adaptive Circuit Breaker & Checkpoint Modes (v0.1.80)**: Circuit breaker Phase 5 with self-tuning adaptive thresholds. New standalone checkpoint modes: single checkpoint and draft plan verify.

✅ **Fast Mode Speed Control & Broader Checkpoint Framing (v0.1.79)**: New fast mode options for fine-grained speed vs. quality control. Checkpoint framing broadened from safety-only to high-stakes and coordinated phases.

✅ **Circuit Breaker Distributed Store (v0.1.78)**: Pluggable distributed state store for the LLM circuit breaker — share state across workers/processes. In-memory (zero-deps) and Redis-backed implementations with atomic state transitions.

✅ **Answer Now Button (v0.1.77)**: New "Answer Now" button lets agents submit answers more quickly, both within a round, and bypassing additional refinement rounds when quality is sufficient.

✅ **Exa Search & Circuit Breaker Observability (v0.1.76)**: New Exa AI-powered search tool for MCP. Circuit breaker Phase 3 with observability. Checkpoint agent instructions and Docker dependency fixes.

✅ **Codex Hooks & Checkpoint WebUI (v0.1.75)**: Hybrid hook system for Codex backend. Checkpoint workflows auto-launch WebUI for visual monitoring. Standalone checkpoint MCP server docs with safety policy integration.

✅ **Checkpoint Improvements & Tool Call Fixes (v0.1.74)**: Major improvements to standalone checkpoint MCP server. Fix for duplicate tool calls in ChatCompletions and Response API backends.

✅ **Eval Criteria Evolver & Checkpoint Objectives (v0.1.73)**: New eval criteria evolver subagent that evolves criteria across rounds. Initial draft of checkpoint objective mode for safety planning of irreversible actions.

✅ **Grok Backend Update & Circuit Breaker Phase 2 (v0.1.72)**: Grok backend update with latest improvements. LLM API circuit breaker extended to ChatCompletions, Response API, and Gemini backends (was Claude-only).

✅ **Trace Memory & Evaluation Polish (v0.1.71)**: Trace analyzer subagents launch in background after each round to write insights from execution traces into memory. Improved evaluation criteria generation and system prompt tuning.

✅ **Evaluation Criteria Redesign (v0.1.70)**: Redesigned three-tier evaluation criteria with anti-pattern definitions and aspiration statements. Improved checklist-gated evaluation. Fast iteration mode, WebUI review modal, and background trace analysis.

✅ **WebUI Automation & Improved Skill (v0.1.69)**: WebUI automation auto-starts without browser interaction. MassGen skill redesign for increased usability and WebUI integration. Quickstart Wizard rework and Workspace Browser expansion.

✅ **Checkpoint Mode (v0.1.68)**: New checkpoint coordination mode with delegator pattern — main agent plans solo then delegates to team via `checkpoint()` tool. LLM API circuit breaker for 429 handling. WebUI checkpoint support. LiteLLM supply chain fix.

✅ **Modernized WebUI (v0.1.67)**: Complete WebUI redesign with inline final answers, keyboard shortcuts, and Zustand state management. RoundBudgetGuardHook for per-round cost control. Unified parallel pre-collab phases. Regression guard.

✅ **Step Mode (v0.1.66)**: New `--step` CLI mode for external orchestrators. Powers massgen-refinery plugin step mode. Codex Windows UTF-8 fixes and console text sanitization.

✅ **MassGen Refinery Plugin (v0.1.65)**: Standalone MCP servers (quality, workflow, media) bring MassGen's checklist-based evaluation to Claude Code through the massgen-refinery plugin. Single-agent refinement working; multi-agent experimental.

✅ **Gemini CLI Backend (v0.1.64)**: Gemini CLI as a first-class backend with session persistence, MCP tools, and Docker support. WebSocket streaming for OpenAI Response API. Execution trace analyzer subagent. Copilot Docker mode.

✅ **Ensemble & Contracts (v0.1.63)**: Subagent ensemble pattern with `disable_injection` and `defer_voting_until_all_answered` as defaults. Round evaluator transformation pressure and success contracts. Lighter refinement for subagents. Killed agent handling.

<!-- opensource-radar:truncated -->
