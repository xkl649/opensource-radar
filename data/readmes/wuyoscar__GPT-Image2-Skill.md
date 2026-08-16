<h1 align="center">GPT Image 2 Prompt Gallery + Agentic Skill + CLI</h1>
<p align="center"><em>OpenAI GPT Image 2 prompt gallery, image prompt library, agentic skill, and CLI — curated, copy-paste prompts and runnable examples for skill-capable agents.</em></p>

<p align="center">
  <a href="README.md"><strong>English</strong></a> · <a href="README.zh.md">中文</a>
</p>

<p align="center">
  <a href="https://github.com/wuyoscar/gpt_image_2_skill/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT"/></a>
  <a href="https://github.com/wuyoscar/gpt_image_2_skill/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"/></a>
  <img src="https://img.shields.io/badge/model-gpt--image--2-purple.svg" alt="Model: gpt-image-2"/>
  <img src="https://img.shields.io/badge/python-%E2%89%A53.11-blue.svg" alt="Python ≥ 3.11"/>
</p>

<p align="center">
  <a href="https://oosmetrics.com/repo/wuyoscar/gpt_image_2_skill"><img src="https://img.shields.io/static/v1?label=oosmetrics&message=Top%201%20Agents&color=8AA399" alt="oosmetrics Top 1 in Agents by velocity"/></a>
  <a href="https://oosmetrics.com/repo/wuyoscar/gpt_image_2_skill"><img src="https://img.shields.io/static/v1?label=oosmetrics&message=Top%201%20LLMs&color=8798B5" alt="oosmetrics Top 1 in LLMs by velocity"/></a>
  <a href="https://oosmetrics.com/repo/wuyoscar/gpt_image_2_skill"><img src="https://img.shields.io/static/v1?label=oosmetrics&message=Top%201%20CLI&color=A58B9D" alt="oosmetrics Top 1 in CLI by velocity"/></a>
</p>

<p align="center">
  <a href="docs/assets/gptimage2skill-banner.png"><img src="docs/assets/gptimage2skill-banner.png" alt="GPTImage2Skill banner" width="100%"/></a>
</p>










## ✨ At a glance

<table border="1" cellspacing="0" cellpadding="6">
  <tr>
    <th align="left">Item</th>
    <th align="left">Value</th>
  </tr>
  <tr>
    <td>Gallery size</td>
    <td><strong>Small but mighty</strong> · curated for signal, not volume; README shows a selected showcase</td>
  </tr>
  <tr>
    <td>Surfaces</td>
    <td><strong>Agentic Skill + CLI</strong> — Claude Code / Codex, OpenClaw, Hermes Agent and other skill-capable agent runtimes</td>
  </tr>
  <tr>
    <td>Last update</td>
    <td><strong>2026-05-05</strong></td>
  </tr>
  <tr>
    <td>Docs</td>
    <td><strong>English + 中文</strong></td>
  </tr>
</table>

<p align="center">
  <a href="https://starmapper.bruniaux.com/wuyoscar/GPT-Image2-Skill?utm_source=map-embed&utm_medium=readme&utm_campaign=stargazer-map">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://starmapper.bruniaux.com/api/map-image/wuyoscar/GPT-Image2-Skill?theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://starmapper.bruniaux.com/api/map-image/wuyoscar/GPT-Image2-Skill?theme=light" />
      <img alt="Stargazer map for GPT-Image2-Skill" src="https://starmapper.bruniaux.com/api/map-image/wuyoscar/GPT-Image2-Skill" width="100%" />
    </picture>
  </a>
</p>




---

## 🔎 

Use this repo as a **GPT Image 2 prompt gallery**, **image prompt library**, **example of generation showcase**, **Codex / Claude Code agent skill**, and **gpt-image-2 CLI**. It includes reusable AI image prompts for research paper figures, posters, UI mockups, game HUDs, anime / manga, photography, typography, maps, tattoo design, and reference-image editing workflows.

> This project is not trying to collect every prompt on the internet. We keep a selected set of examples that show what GPT Image 2 can do and how to use it well. Thanks for all the love this little gallery has received 🫶.

> [!CAUTION]
> For research figures, treat generated images as references, workflow sketches, or reproducible style targets. We do **not** recommend dropping GPT Image 2 outputs directly into a paper as-is; for academic communication, that can be misleading and is generally bad practice.

---

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md).

## 📥 

Before installing, check whether the skill or CLI is already available. Do not reinstall blindly, overwrite an existing skill folder, or create/replace API-key files. Use your runtime's own skill list/status command when available; global/shared installs should be an explicit user choice, not an automatic setup step.

```bash
command -v gpt-image || true
command -v uv >/dev/null && uv tool list | grep -E '^gpt-image-cli([[:space:]]|$)' || true
test -n "${OPENAI_API_KEY:-}" && echo "OPENAI_API_KEY is already set (value hidden)"
```

<details>
<summary><strong>Claude Code</strong></summary>

```text
/plugin marketplace add wuyoscar/gpt_image_2_skill
/plugin install gpt-image@wuyoscar-skills
```

</details>

<details>
<summary><strong>Codex</strong></summary>

Codex ships with built-in skill helpers such as `$skill-installer` and `$skill-creator`.
Open Codex and invoke the built-in installer with this GitHub skill-folder URL:

```text
$skill-installer
Install this skill from GitHub:
https://github.com/wuyoscar/gpt_image_2_skill/tree/main/skills/gpt-image
```

The installer downloads that GitHub folder and places it under your Codex skills directory, usually:

```bash
~/.codex/skills/gpt-image
```

Restart Codex after installation so the new `$gpt-image` skill is loaded.

If you prefer to install it manually, copy the skill folder into Codex's skills directory:

```bash
git clone https://github.com/wuyoscar/gpt_image_2_skill.git
cd gpt_image_2_skill

mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
test -e "${CODEX_HOME:-$HOME/.codex}/skills/gpt-image" && echo "gpt-image skill already exists; stop before overwriting" && exit 1
cp -R skills/gpt-image "${CODEX_HOME:-$HOME/.codex}/skills/"
```

</details>

<details>
<summary><strong>AgentSkills / npx skills</strong></summary>

For runtimes supported by the cross-agent `skills` installer, install the same `skills/gpt-image` folder directly from GitHub:

```bash
# Codex
npx --yes skills@latest add wuyoscar/gpt_image_2_skill \
  --skill gpt-image --agent codex --copy

# OpenClaw
npx --yes skills@latest add wuyoscar/gpt_image_2_skill \
  --skill gpt-image --agent openclaw --copy
```

These examples intentionally avoid `--global`. Add `--global` only when you explicitly want this skill installed into that runtime's global/shared skills directory.

If your runtime is not listed by `skills@latest` yet, use the manual Agent Skill install below.

</details>

<details>
<summary><strong>Manual agent-skill install</strong></summary>

Set `AGENT_SKILLS_DIR` to the skills directory used by your agent runtime, then symlink this repo's skill folder into it.

```bash
git clone https://github.com/wuyoscar/gpt_image_2_skill.git
cd gpt_image_2_skill

# Choose the skill directory for your runtime.
# Examples:
#   Codex:      ~/.codex/skills
#   Claude Code / OpenClaw / Hermes Agent / other runtimes: use that runtime's documented skills directory.
export AGENT_SKILLS_DIR="/path/to/your/agent/skills"

mkdir -p "$AGENT_SKILLS_DIR"
test -e "$AGENT_SKILLS_DIR/gpt-image" && echo "gpt-image skill already exists; stop before overwriting" && exit 1
ln -s "$PWD/skills/gpt-image" "$AGENT_SKILLS_DIR/gpt-image"
```

</details>

<details>
<summary><strong>CLI</strong></summary>

```bash
uvx --from git+https://github.com/wuyoscar/gpt_image_2_skill gpt-image -p "a cat astronaut"

# or install to PATH if not already installed
command -v gpt-image >/dev/null || uv tool install git+https://github.com/wuyoscar/gpt_image_2_skill
gpt-image -p "a cat astronaut"
```

</details>

<details>
<summary><strong>Update</strong></summary>

```bash
# plugin: use Claude Code's update flow
# codex skill: rerun the installer
# manual git clone
cd gpt_image_2_skill && git pull

# CLI
uv tool upgrade gpt-image-cli
```

</details>

Reads `OPENAI_API_KEY` from process env, then `.env`, then `~/.env` without overriding an already-set env var.

> **Agent + API-key note.** Codex also has its own built-in image-generation skill, but that path is black-box and cannot be edited here; Codex users can switch to it if they prefer. Thanks to the related issue discussion for the simple safety tip: if you do not want an agent to accidentally use your OpenAI API key, run `unset OPENAI_API_KEY` before invoking the local CLI/skill.

---

## ⚡ Quick Usage & Prompting Fundamentals

<details>
<summary><strong>CLI quick usage</strong></summary>

After install, every gallery entry below can be copy-pasted as `gpt-image -p "…"` or requested from any skill-capable agent runtime in natural language, e.g. *"generate the Boston Spring poster from the skill gallery"*.

### Text → image

```bash
gpt-image -p "a photorealistic convenience store at 10pm" --size 1k --quality high -f store.png
```

Under the hood: `POST /v1/images/generations` with `model=gpt-image-2`.

### Text + reference image → image (edit)

```bash
# Single-reference edit / restyle
gpt-image -p "Make it a winter evening with heavy snowfall" \
  -i chess.png --quality high -f chess-winter.png

# Multi-reference edit: the edits endpoint accepts multiple input images
gpt-image -p "Place the dog from image 2 next to the woman in image 1. Match the same lighting, composition, and background. Do not change anything else." \
  -i woman.png -i dog.png --size portrait --quality medium -f woman-with-dog.png

# Mask-based inpaint: opaque = keep, transparent = regenerate
gpt-image -p "replace sky with aurora" \
  -i photo.jpg -m sky_mask.png -f aurora.png
```

Under the hood: `POST /v1/images/edits` (multipart form), the official endpoint in the OpenAI cookbook. `gpt-image-2` supports `image`, `mask`, `prompt`, `size`, `quality`, `background`, `output_format`, and `n`. Multiple `-i` inputs are supported for multi-reference edits.

### Parameters (complete)

<details>
<summary><strong>Show full parameter reference</strong></summary>

| Flag | Values | Default | Applies to | Notes |
|---|---|---|---|---|
| `-p, --prompt` | str | — required | both | Full prompt text. |
| `-f, --file` | path | `./fig/YYYY-MM-DD-HH-MM-SS-<slug>.png` | both | Explicit output path. |
| `-i, --image` | path (repeatable) | — | edits | Presence routes through `/v1/images/edits`. |
| `-m, --mask` | path (PNG, alpha) | — | edits | Opaque = preserved, transparent = regenerated. Requires `-i`. |
| `--input-fidelity` | `low` · `high` | — | edits | Supported on `gpt-image-1`/`1.5`. `gpt-image-2` rejects this parameter, so the CLI drops it locally. |
| `--size` | `1k` · `2k` · `4k` · `portrait` · `landscape` · `square` · `wide` · `tall` · literal `1024x1024` etc. | `1024x1024` | both | Literals must be 16-px multiples, max edge 3840, 3:1 cap, 655k–8.3M total pixels. |
| `--quality` | `auto` · `low` · `medium` · `high` | `high` | both | This is the practical budget dial: `low` for cheap drafts / large sweeps, `medium` for normal exploration, `high` for final text-heavy or shipping-facing assets. |
| `-n, --n` | int | 1 | both | Batch generation. `n>1` suffixes filenames `_0`, `_1`, … |
| `--background` | `auto` · `opaque` | API default | generations | `opaque` disables transparency. |
| `--moderation` | `auto` · `low` | `low` | generations | `low` is the default here for broader prompt exploration; switch to `auto` if you want the stricter API-side default. |
| `--format` | `png` · `jpeg` · `webp` | `png` | both | Response encoding. |
| `--compression` | 0–100 | — | both | JPEG/WebP only. |

</details>

### Budget / quality guide

There is no separate `budget` flag here — use `--quality` as the budget knob.

- `low` = cheap draft / collect / many variants
- `medium` = normal exploration / style probing
- `high` = final posters, Chinese text, diagrams, paper figures, banners

If you are generating dozens of candidates, start at `low` and only rerun finalists at `high`.

### From gallery prompt → CLI / SDK

Every entry below ships **just the prompt plus a metadata line** (`"size"` · `"quality"` · source). Assemble the CLI / SDK call the same way every time — worked once here so per-entry code blocks can stay out of your way. Example for a `"portrait"` · `"high"` entry:

```bash
# CLI
gpt-image -p "<PROMPT FROM ENTRY>" --size portrait --quality high -f out.png
```

```python
# OpenAI SDK — `size` is the literal pixels; the CLI shortcut maps to `1024x1536` for portrait
from openai import OpenAI
client = OpenAI()
result = client.images.generate(
    model="gpt-image-2",
    prompt="<PROMPT FROM ENTRY>",
    size="1024x1536",
    quality="high",
)
```

For reference-based edits, add `-i ref.png` (repeatable) and optionally `-m mask.png` on the CLI, or call `client.images.edit(...)` with `image=[open(p, "rb") for p in refs]`. Everything else stays identical to the generate path.

Exit codes: `0` success · `1` API/refusal error (full response body echoed to stderr) · `2` bad args or missing `OPENAI_API_KEY`.

</details>

### 📖 Prompting Fundamentals

<details>
<summary><strong>Show prompting notes</strong></summary>

Distilled from OpenAI's [official GPT Image prompting guide](https://github.com/openai/openai-cookbook/blob/main/examples/multimodal/image-gen-models-prompting-guide.ipynb) (also archived locally at [`skills/gpt-image/references/openai-cookbook.md`](skills/gpt-image/references/openai-cookbook.md) — loaded on demand by the skill when you ask about parameter semantics, edits, UI mockups, pitch-deck slides, scientific visuals, virtual try-on, billboard mockups, or translation edits):

1. **Structure, then goal.** Use a consistent order: `background/scene → subject → key details → constraints`, and **state the intended use** (ad, UI mock, infographic) so the model picks the right mode and polish level.
2. **Any format works; consistency matters more.** Minimal prompts, descriptive paragraphs, JSON-style structures, instruction-style prompts, and tag-based prompts all work. For production, prefer a skimmable template over clever syntax.
3. **Specificity + quality cues.** Be concrete about materials, shapes, textures, and medium (photo, watercolor, 3D render). Add targeted levers only when they matter: *film grain*, *textured brushstrokes*, *macro detail*. For photorealism, say *"photorealistic"* directly; *"real photograph"*, *"taken on a real camera"*, and *"iPhone photo"* also help.
4. **Put required text in quotes.** Any text that must appear in the image — slogans, prices, kanji — should be in straight quotes. Do not paraphrase it inside the prompt.
5. **Choose aspect ratio early.** Decide 1:1 / 3:4 / 4:3 / 9:16 / 16:9 / 3:1 before writing the prompt. Reinforce it in the prompt text, not only with `--size`.
6. **One hero, supporting cast.** Complex scenes work best when one subject is clearly primary and the rest is framed as supporting detail.
7. **Use `quality="high"` for in-image text, dense diagrams, small labels, and multi-panel layouts.** Those cases degrade visibly at `medium`.

**The skill ships four local reference surfaces:**
- [`skills/gpt-image/references/gallery.md`](skills/gpt-image/references/gallery.md) — lightweight routing index for the split Reference Gallery Atlas. It should be read first to pick a category; it does **not** contain the full prompt dump.
- `skills/gpt-image/references/gallery-*.md` — one category per file, loaded only when relevant, e.g. [`gallery-product-and-food.md`](skills/gpt-image/references/gallery-product-and-food.md), [`gallery-ui-ux-mockups.md`](skills/gpt-image/references/gallery-ui-ux-mockups.md), [`gallery-research-paper-figures.md`](skills/gpt-image/references/gallery-research-paper-figures.md). This keeps the skill useful without overflowing context.
- [`skills/gpt-image/references/craft.md`](skills/gpt-image/references/craft.md) — expanded 19-section prompt-craft checklist covering gallery-first usage, JSON/config-style prompts, multi-panel boards, UI specs, data/diagram grammar, edit invariants, reference workflows, dense text, and category mini-schemas.
- [`skills/gpt-image/references/openai-cookbook.md`](skills/gpt-image/references/openai-cookbook.md) — verbatim Markdown capture of OpenAI's cookbook (1004 lines), including the authoritative parameter-coverage table and every §4 / §5 use-case example.

</details>

---

<a id="gallery-index"></a>

## 🎨 Prompt Showcase

> **About the prompts.** This README showcases a representative selection of prompts together with their generated images. The larger Reference Gallery contains the full curated prompt/image atlas, organized by category in [`skills/gpt-image/references/gallery.md`](skills/gpt-image/references/gallery.md) and the matching `skills/gpt-image/references/gallery-*.md` files.
>
> **Source labels.** `Curated` means a repo-curated or substantially reworked prompt/image; outside-source items keep visible author/source links.

<table>
  <tr>
    <td align="center" valign="top">🎌<br/><strong><a href="#gallery-anime-manga">Anime & Manga</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-anime-and-manga.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🎮<br/><strong><a href="#gallery-gaming">Gaming</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-gaming.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🤖<br/><strong><a href="#gallery-retro-cyberpunk">Retro & Cyberpunk</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-retro-and-cyberpunk.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🎬<br/><strong><a href="#gallery-cinematic-animation">Cinematic & Animation</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-cinematic-and-animation.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">👤<br/><strong><a href="#gallery-character-design">Character Design</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-character-design.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📝<br/><strong><a href="#gallery-typography-posters">Typography & Posters</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-typography-and-posters.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🎨<br/><strong><a href="#gallery-illustration">Illustration</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-illustration.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">💧<br/><strong><a href="#gallery-watercolor">Watercolor</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-watercolor.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🖌️<br/><strong><a href="#gallery-ink-chinese">Ink & Chinese</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-ink-and-chinese.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🕹️<br/><strong><a href="#gallery-pixel-art">Pixel Art</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-pixel-art.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📐<br/><strong><a href="#gallery-isometric">Isometric</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-isometric.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📦<br/><strong><a href="#gallery-product-food">Product & Food</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-product-and-food.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🧩<br/><strong><a href="#gallery-brand-systems-identity">Brand Systems & Identity</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-brand-systems-and-identity.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📷<br/><strong><a href="#gallery-photography">Photography</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-photography.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🖥️<br/><strong><a href="#gallery-screen-photography">Screen Photography</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-screen-photography.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">📊<br/><strong><a href="#gallery-infographics-field-guides">Infographics & Field Guides</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-infographics-and-field-guides.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📚<br/><strong><a href="#gallery-research-paper-figures">Research Paper Figures</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-research-paper-figures.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🏢<br/><strong><a href="#gallery-official-openai-cookbook">Official OpenAI Cookbook Examples</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-official-openai-cookbook-examples.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">✨<br/><strong><a href="#gallery-edit-endpoint-showcase">Edit Endpoint Showcase</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-edit-endpoint-showcase.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📱<br/><strong><a href="#gallery-uiux-mockups">UI/UX Mockups</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-ui-ux-mockups.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">📊<br/><strong><a href="#gallery-data-visualization">Data Visualization</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-data-visualization.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">⚙️<br/><strong><a href="#gallery-technical-illustration">Technical Illustration</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-technical-illustration.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🏛️<br/><strong><a href="#gallery-architecture-interior">Architecture & Interior</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-architecture-and-interior.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🔬<br/><strong><a href="#gallery-scientific-educational">Scientific & Educational</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-scientific-and-educational.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">👗<br/><strong><a href="#gallery-fashion-editorial">Fashion Editorial</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-fashion-editorial.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🎨<br/><strong><a href="#gallery-fine-art-painting">Fine Art Painting</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-fine-art-painting.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">✏️<br/><strong><a href="#gallery-more-illustration-styles">More Illustration Styles</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-more-illustration-styles.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🎥<br/><strong><a href="#gallery-cinematic-film-references">Cinematic Film References</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-cinematic-film-references.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">💄<br/><strong><a href="#gallery-beauty-lifestyle">Beauty & Lifestyle</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-beauty-and-lifestyle.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top">🎟️<br/><strong><a href="#gallery-events-experience">Events & Experience</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-events-and-experience.md"><kbd>Full Gallery MD</kbd></a></sub></td>
  </tr>
  <tr>
    <td align="center" valign="top">🖋️<br/><strong><a href="#gallery-tattoo-design">Tattoo Design</a></strong><br/><sub><a href="skills/gpt-image/references/gallery-tattoo-design.md"><kbd>Full Gallery MD</kbd></a></sub></td>
    <td align="center" valign="top"></td>
    <td align="center" valign="top"></td>
  </tr>
</table>

---

<a id="gallery-anime-manga"></a>

<h2 align="center">🎌 Anime & Manga</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Anime fashion portrait triptych

<table>
  <tr>
    <td width="33%" align="center" valign="top">
      <a href="docs/anime-manga/anime-cafe-stockings-fashion.png"><img src="docs/anime-manga/anime-cafe-stockings-fashion.png" width="100%" alt="Elegant cafe anime fashion portrait"/></a><br/>
      <sub><strong>A · Elegant cafe fashion</strong><br/><code>"portrait"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
    <td width="33%" align="center" valign="top">
      <a href="docs/anime-manga/anime-arcade-stockings-fashion.png"><img src="docs/anime-manga/anime-arcade-stockings-fashion.png" width="100%" alt="Neon arcade anime fashion portrait"/></a><br/>
      <sub><strong>B · Neon arcade fashion</strong><br/><code>"portrait"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
    <td width="33%" align="center" valign="top">
      <a href="docs/anime-manga/anime-roadside-mirror-fashion.png"><img src="docs/anime-manga/anime-roadside-mirror-fashion.png" width="100%" alt="Roadside mirror anime fashion selfie"/></a><br/>
      <sub><strong>C · Roadside mirror selfie</strong><br/><code>"portrait"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Anime & Manga · 3-image portrait set · Curated</sub></p>

<details>
<summary><strong>📝 Prompts for all three panels</strong></summary>

**Prompt A — Elegant cafe fashion**
```text
Create a tasteful portrait-oriented anime fashion illustration of an adult woman, age 24, with a cute playful expression, looking at the camera in a cozy European cafe at golden hour. She wears a cream blouse, charcoal pleated skirt, tailored cropped jacket, sheer black stockings, loafers, and a small ribbon hair clip; she is seated sideways at a small marble table with latte art, a sketchbook, and warm window light. Composition: three-quarter fashion portrait, elegant legs visible but relaxed and non-explicit, wholesome editorial mood, no nudity, no lingerie, no school uniform, no explicit pose, adult character only. Use polished modern anime rendering, crisp line art, luminous eyes, soft cel shading, subtle fabric texture, gentle blush, background bokeh, and a refined magazine-cover color palette.
```

**Prompt B — Neon arcade fashion**
```text
Create a portrait-oriented anime fashion illustration of an adult woman, age 25, in a neon arcade district at night. She has a cute confident smile and looks directly at the viewer while standing beside glowing claw machines and retro game cabinets. Outfit: black turtleneck, red satin bomber jacket, high-waisted skirt, patterned dark stockings, platform shoes, small crossbody bag, star earrings. Composition: full-body fashion portrait with strong silhouette, neon reflections on wet pavement, vending machines, sticker-covered walls, colorful signage, and cinematic rim light. Keep the pose playful but non-explicit, no nudity, no lingerie, no fetish framing, adult character only. Use high-end anime key visual rendering, crisp line art, saturated magenta-cyan lighting, clean readable background details, and glossy cyber-pop atmosphere.
```

**Prompt C — Roadside mirror selfie**
```text
Create a portrait-oriented anime fashion illustration of an adult woman, age 24, taking a playful roadside mirror selfie in the reflection of a parked scooter mirror on a quiet Tokyo side street. She looks into the mirror with a bright mischievous smile, one hand making a small peace sign near her cheek, the other holding a phone with a cute sticker case. Outfit: soft ivory knit cardigan, navy pleated skirt, sheer black stockings, loafers, small shoulder bag, ribbon hair clip, tasteful everyday street fashion. Composition: the mirror reflection is the main frame, with blurred street signs, vending machine glow, crosswalk stripes, and spring evening light around the mirror edge. Keep the pose cute, stylish, and non-explicit; no nudity, no lingerie, no fetish framing, adult character only. Use polished modern anime rendering, crisp line art, luminous eyes, soft cel shading, warm reflections, natural street-photo energy, and a charming slice-of-life mood.
```

</details>

---

#### MAPPA-style anime action still (Jujutsu-Kaisen aesthetic)

<p align="center">
<a href="docs/anime-manga/anime-jjk-action.png"><img src="docs/anime-manga/anime-jjk-action.png" width="620" alt="MAPPA-style anime action still (Jujutsu-Kaisen aesthetic)"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
An anime action still in the visual style of MAPPA's Jujutsu Kaisen (2020 TV anime). Landscape 16:9.

A silver-white-haired young man in a dark navy school-uniform jacket, a blue blindfold across his eyes, in a mid-fight stance — one palm extended outward releasing a swirling dense-blue energy sphere with lightning-like crackles around its edge. Opposite him, a demonic shadow creature made of liquid black mass with multiple eyes lunges from the right.

Backdrop: ruined urban street at dusk, shattered asphalt, cracked neon kanji sign "呪術" in split red LED, destroyed vehicles, rubble suspended mid-air by the shockwave, rain particles caught mid-flight.

Art direction: MAPPA-style digital 2D animation — heavy cel shading, crisp line-art, rim-light on both figures, motion-blur streaks around the energy sphere. Palette of deep navy, electric cyan, crimson splashes. Kinetic-impact composition in the tradition of JJK's Shibuya arc.
```

</details>

---

#### Shōnen battle key-visual (Naruto-Shippuden aesthetic)

<p align="center">
<a href="docs/anime-manga/anime-naruto-clash.png"><img src="docs/anime-manga/anime-naruto-clash.png" width="620" alt="Shōnen battle key-visual (Naruto-Shippuden aesthetic)"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A shōnen anime battle key-visual in the visual style of Studio Pierrot's Naruto Shippuden. Landscape 16:9.

Two ninja figures clash mid-air at the exact instant their signature jutsu collide — a glowing blue spiral of swirling chakra on the left fighter's right palm, a crackling white lightning blade on the right fighter's right palm. The collision point sends a circular shockwave outward.

Both fighters wear hitai-ate forehead protectors, jounin-style tactical vests with scroll pouches, ninja sandals. Left: spiky blond hair, whisker cheek marks, focused snarl, blue eyes. Right: dark hair, one red sharingan-like eye with three tomoe, calm expression.

Backdrop: nighttime valley, cracked earth, giant uprooted trees mid-crash, moonlit clouds parting, sakura petals caught in the shockwave.

Art direction: Studio Pierrot Naruto-Shippuden aesthetic — dynamic perspective, strong speed lines radiating from the collision, anime-action key-frame quality, digital 2D cel shading, saturated but not neon, visible genga-quality line-art, dramatic backlight.
```

</details>

---

#### Manga / anime 1×2 panel

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <a href="docs/anime-manga/manga-spread.png"><img src="docs/anime-manga/manga-spread.png" width="100%" alt="Shōnen manga two-page spread (basketball slam dunk)"/></a><br/>
      <sub><strong>A · Shōnen manga two-page spread (basketball slam dunk)</strong><br/><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
    <td width="50%" align="center" valign="top">
      <a href="docs/anime-manga/anime-ten-panel-character-grid.png"><img src="docs/anime-manga/anime-ten-panel-character-grid.png" width="100%" alt="Ten-panel anime character grid"/></a><br/>
      <sub><strong>B · Ten-panel anime character grid</strong><br/><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Anime & Manga · 1×2 panel · Curated</sub></p>

<details>
<summary><strong>📝 Prompts for both manga/anime panels</strong></summary>

**Prompt A — Shōnen manga two-page spread (basketball slam dunk)**
```text
A black-and-white shōnen manga two-page spread (landscape 16:9 as a single composition, with a faint centre-gutter line). High-contrast ink plus screentone, Weekly Shōnen Jump basketball-manga tradition (Inoue's Slam Dunk / Fujimaki's Kuroko no Basuke).

Composition: 5 irregular panels plus one large diagonal panel spanning both pages at bottom-right for the climactic slam dunk.

- Top-left: close-up of the protagonist's intense eyes, sweat beading, headband tied tight
- Top-centre: wide shot of a packed high-school gymnasium, scoreboard reading "42 — 40 · 4Q 0:03"
- Top-right: rival team captain's shocked face, mouth agape
- Centre-left: protagonist leaping skyward with both hands gripping a basketball
- Centre-right-small: sound-effect katakana "バッ" in thick black letters
- Large diagonal bottom-right (half of both pages): protagonist slamming the ball through the hoop, rim bending, massive ink-brushed kanji "決" (decide) filling the negative space

Art direction: professional mangaka quality — confident inking, dramatic screentone gradients, speed lines radiating from the dunk, varied line-weights, off-white paper texture with faint page-edge shading.

Dialogue balloons intentionally blank; only the two sound effects are visible.
```

**Prompt B — Ten-panel anime character grid**
```text
Create a single landscape image containing a clean 2×5 ten-panel anime character grid. Each panel shows a different adult young woman, age 22 to 26, designed as a cute gentle heroine archetype: bookish librarian, cheerful cafe barista, shy violinist, sporty tennis player, elegant student-council president, sleepy illustrator, flower-shop assistant, soft-spoken witch apprentice, city-pop singer, and cozy winter commuter. Keep all panels consistent in art direction: modern polished anime, crisp line art, soft cel shading, luminous eyes, pastel accent colors, tidy white gutters, small readable name tag at the bottom of each panel, and a balanced character-design-sheet feel. Every character should have a distinct hairstyle, outfit, prop, and expression. The overall board should feel like a collectible anime cast sheet / ten-grid poster, cute and wholesome, no nudity, no lingerie, no explicit pose, adult characters only.
```

</details>

---

#### 16-panel anime expression grid

<p align="center">
<a href="docs/anime-manga/anime-expression-grid.png"><img src="docs/anime-manga/anime-expression-grid.png" width="460" alt="16-panel anime expression grid"/></a>
</p>

<p align="center"><sub><code>"square"</code> · <code>"high"</code> · <a href="https://mp.weixin.qq.com/s/ASxig6mFVYxrIE8-8Fthew"><code>"WeChat"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a 16-panel expression grid of a silver-haired, blue-eyed anime girl. Her face shape, hairstyle, and clothing must remain highly consistent across all panels. The 16 expressions should include: happy, sad, angry, surprised, shy, speechless, evil grin, contemplative, curious, proud, wronged, disdainful, confused, scared, crying, and a heart expression.
```

</details>

---

#### Tide Brothers 19-page manga proof sheet

<p align="center">
<a href="docs/anime-manga/tide-brothers-19-page-manga.png"><img src="docs/anime-manga/tide-brothers-19-page-manga.png" width="460" alt="Tide Brothers 19-page original manga proof sheet"/></a>
</p>

<p align="center"><sub><code>"tall 2160×3840"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create one tall manga chapter proof sheet containing 19 numbered miniature pages for an original shonen pirate manga, not based on any existing series. Title: "TIDE BROTHERS: THE STARFALL MAP". Main characters: Rune, a cheerful rubbery-armed young pirate captain with a straw-colored scarf but original costume; and Ash, his older flame-wielding brother with a red coat, freckles, and a calm smile. They are original characters, not existing IP. Show 19 small pages arranged as a readable contact sheet, each page with 1 to 3 manga panels, black-and-white ink, screentone, dynamic speed lines, expressive faces, and clear speech bubbles. Complete plot beats: 1 cover page with the brothers on a stormy deck; 2 reunion at a floating harbor; 3 discovery of a star-shaped map; 4 alien sea-beast emerges; 5 Rune jokes "Adventure found us first!"; 6 Ash replies "Then we answer together."; 7 rival sky pirates attack; 8 slapstick cooking scene; 9 quiet flashback promise; 10 double-page-style action pose compressed into one page; 11 map glows with alien constellations; 12 crew cheers; 13 villain captain steals the compass; 14 chase across rooftop sails; 15 Ash shields Rune with fire; 16 Rune launches a spring-like punch; 17 brothers laugh after victory; 18 cliffhanger: moon door opens; 19 final page text "NEXT: THE ISLAND ABOVE THE CLOUDS". Keep dialogue short, legible, and complete. Style: classic weekly shonen manga energy, original pirate adventure, wholesome brotherhood, no gore, no existing copyrighted characters.
```

</details>

---

<a id="gallery-gaming"></a>

<h2 align="center">🎮 Gaming</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Stealth and open-world action panel

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/hitman-openai.png"><img src="docs/gaming/hitman-openai.png" width="100%" alt="Hitman gameplay — OpenAI HQ"/></a><br/>
      <sub><strong>A · Hitman gameplay — OpenAI HQ</strong><br/><code>"landscape"</code> · <code>"high"</code> · <a href="https://x.com/flowersslop"><code>"X"</code></a></sub>
    </td>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/gta6-beach.png"><img src="docs/gaming/gta6-beach.png" width="100%" alt="GTA 6 gameplay — Vice City beach"/></a><br/>
      <sub><strong>B · GTA 6 gameplay — Vice City beach</strong><br/><code>"landscape"</code> · <code>"high"</code> · <a href="https://x.com/WolfRiccardo"><code>"X"</code></a></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Gaming · 2-image landscape gameplay panel</sub></p>

<details>
<summary><strong>📝 Prompts for Stealth and open-world action panel</strong></summary>

**Prompt A — Hitman gameplay — OpenAI HQ**
```text
A Hitman level where you are in the OpenAI HQ and your mission is to steal GPT-6 without getting caught
```

**Prompt B — GTA 6 gameplay — Vice City beach**
```text
GTA 6 in-game footage, very detailed, very realistic. Close-up shot taken from a stationary 4k monitor. (There's a slight blurriness in the image, as it feels like it was taken handheld). A wide, bright environment. Realistic details. The character is walking on the beach with /:dog.
```

</details>

---

#### Fantasy adventure panel

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/dark-fantasy-hunt.png"><img src="docs/gaming/dark-fantasy-hunt.png" width="100%" alt="Dark-fantasy swamp boss hunt"/></a><br/>
      <sub><strong>A · Dark-fantasy swamp boss hunt</strong><br/><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/epic-fellowship-bridge.png"><img src="docs/gaming/epic-fellowship-bridge.png" width="100%" alt="Epic fellowship bridge approach"/></a><br/>
      <sub><strong>B · Epic fellowship bridge approach</strong><br/><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Gaming · 2-image landscape gameplay panel</sub></p>

<details>
<summary><strong>📝 Prompts for Fantasy adventure panel</strong></summary>

**Prompt A — Dark-fantasy swamp boss hunt**
```text
Create an original AAA dark-fantasy action RPG screenshot. A silver-haired monster hunter in layered leather armor stands in a ruined marsh at blue hour, sword drawn toward a huge winged swamp beast rising from mist. Cinematic over-the-shoulder framing, believable HUD with health, stamina, potion icons, quest text, and minimap. Wet stones, dead trees, torchlight, moonlit fog, subtle alchemy glyphs, highly detailed materials, dramatic but readable composition, premium next-gen game look, 16:9 landscape.
```

**Prompt B — Epic fellowship bridge approach**
```text
Create an original epic fantasy RPG key-art screenshot. A small fellowship of travelers crosses a colossal ancient stone bridge toward a luminous mountain city at sunrise. One ranger leads, a mage carries a lantern, a dwarf-like smith bears a hammer, and banners whip in the wind. Vast valley below, waterfalls, golden clouds, weathered masonry, cinematic scale, subtle HUD quest marker and compass, richly detailed armor and environment, AAA fantasy adventure tone, 16:9 landscape, highly detailed and uplifting.
```

</details>

---

#### Stylized game HUD panel

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/retro-japan-rpg.png"><img src="docs/gaming/retro-japan-rpg.png" width="100%" alt="Retro Japanese town pixel RPG"/></a><br/>
      <sub><strong>A · Retro Japanese town pixel RPG</strong><br/><code>"landscape"</code> · <code>"high"</code> · <a href="https://www.reddit.com/r/midjourney/comments/1kozn4u/retro_video_games_in_japan_prompts_included/"><code>"Reddit"</code></a></sub>
    </td>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/cyberpunk-europe-action.png"><img src="docs/gaming/cyberpunk-europe-action.png" width="100%" alt="Cyberpunk Europe action HUD"/></a><br/>
      <sub><strong>B · Cyberpunk Europe action HUD</strong><br/><code>"landscape"</code> · <code>"high"</code> · <a href="https://www.reddit.com/r/midjourney/comments/1kzzy77/cyberpunk_video_games_in_european_cities_prompts/"><code>"Reddit"</code></a></sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/anime-open-world.png"><img src="docs/gaming/anime-open-world.png" width="100%" alt="Anime open-world adventure HUD"/></a><br/>
      <sub><strong>C · Anime open-world adventure HUD</strong><br/><code>"landscape"</code> · <code>"high"</code> · <a href="https://www.reddit.com/r/midjourney/comments/1lh2l98/anime_style_video_games_prompts_included/"><code>"Reddit"</code></a></sub>
    </td>
    <td width="50%" align="center" valign="top">
      <a href="docs/gaming/mobile-moba-arena-hud.png"><img src="docs/gaming/mobile-moba-arena-hud.png" width="100%" alt="Mobile MOBA arena HUD"/></a><br/>
      <sub><strong>D · Mobile MOBA arena HUD</strong><br/><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Gaming · 2×2 landscape gameplay HUD panel</sub></p>

<details>
<summary><strong>📝 Prompts for Stylized game HUD panel</strong></summary>

**Prompt A — Retro Japanese town pixel RPG**
```text
Create an isometric pixel-art RPG screenshot of a traditional Japanese village during cherry blossom season. Sakura petals drift through the air, a samurai player character practices sword moves in the square, villagers watch nearby, and the interface includes an inventory panel, stamina gauge, skill cooldown timers, and subtle quest UI. Cozy retro console feeling, soft ambient pastel lighting, crisp pixel details, 16:9 gameplay composition.
```

**Prompt B — Cyberpunk Europe action HUD**
```text
Create a third-person cyberpunk action game screenshot set in a neon-soaked European capital at night. The protagonist has glowing cybernetic implants and stands on rain-slick streets near a famous landmark while holograms, drones, and flying traffic crowd the skyline. Add a polished game HUD with health bar, ammo count, radar, stealth/energy meters, and mission overlays. Vivid cyan-magenta palette, wet reflections, cinematic intensity, 16:9.
```

**Prompt C — Anime open-world adventure HUD**
```text
Create a third-person over-the-shoulder screenshot from a nostalgic anime-style open-world adventure game. The protagonist stands in a lush forest with detailed foliage and vibrant shading, drawing a bow toward distant enemies. Add a clean on-screen HUD: quest log, compass at the top, character portrait and status effects at bottom left, subtle rain droplets on screen, and sun rays filtering through trees. Keep the composition dynamic, the forest immersive, and the UI believable like a premium action-RPG screenshot.
```

**Prompt D — Mobile MOBA arena HUD**
```text
Create an original landscape mobile MOBA / action-RPG gameplay screenshot, inspired by competitive lane-battle games but not copying any existing franchise. 16:9 landscape, polished mobile game HUD. Scene: a bright fantasy arena at golden-hour dusk, three stylized heroes clash near a central river bridge and glowing crystal objective. Camera: slightly elevated isometric third-person gameplay view, readable battlefield lanes, minions, spell effects, terrain brush, turret silhouettes, and a boss-objective pit in the distance. HUD design: bottom-left translucent virtual joystick, bottom-right four circular ability buttons with cooldown numbers, ultimate button glowing but 87% charged, top-center score bar reading "12 - 11", match timer "08:42", team health bars, mini-map in the top-left, item quick slots, gold counter "3,420", clean mobile-safe margins, crisp icons, no real game logos. Art direction: premium anime-fantasy 3D mobile game, saturated teal / gold / violet palette, sharp readable UI, dynamic spell VFX, high-detail materials, readable text, screen-capture feel, not a poster, not a mockup board.
```

</details>

---

#### Nine-panel dark-fantasy worldbuilding set

<p align="center">
<a href="docs/gaming/worldbuilding-nine-panel-set.png"><img src="docs/gaming/worldbuilding-nine-panel-set.png" width="620" alt="Nine-panel dark-fantasy worldbuilding set"/></a>
</p>

<p align="center"><sub><code>"square"</code> · <code>"high"</code> · <a href="https://x.com/aleenaamiir/status/2046866168208916503"><code>"X"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a square 3x3 worldbuilding set for an original dark-fantasy universe called "Saltwind Reach". Each panel is a distinct but consistent scene: a storm-battered coastal fortress at dawn, a foggy market street, a knight relic close-up, a handwritten map fragment, a monster silhouette study, a candlelit tavern interior, an alchemist kit flat lay, a moonlit harbor, and a faction banner concept. Keep one cohesive art direction across all nine panels: painterly realism, muted teal / rust / bone palette, cinematic weather, premium concept-art presentation, small caption labels, and strong consistency across costume motifs, architecture, symbols, and lighting. The full board should feel like a polished pre-production worldbuilding sheet rather than a collage of unrelated images.
```

</details>


<a id="gallery-retro-cyberpunk"></a>

<h2 align="center">🤖 Retro & Cyberpunk</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Cyberpunk mecha girl over sea fortress

<p align="center">
<a href="docs/retro-cyberpunk/cyberpunk-mecha.png"><img src="docs/retro-cyberpunk/cyberpunk-mecha.png" width="620" alt="Cyberpunk mecha girl over sea fortress"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <a href="https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts"><code>"GitHub archive"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A mecha girl mid-teens, pale skin smudged with soot and salt spray, sharp amber eyes with glowing HUD reticles, waist-length ash-white hair tied in a high ponytail whipping in the sea wind, matte gunmetal exoskeleton armor plating her shoulders, forearms and shins, exposed hydraulic pistons at the joints, chest rig with glowing cyan coolant lines, oversized oil-stained hangar jacket half slipping off one shoulder, a massive rail cannon resting on her right shoulder, dog tags and frayed red ribbon at her collar, standing off-center to the left on the rusted edge of a tilted steel platform jutting out over dark water, weight shifted onto one leg, left hand gripping the cannon strap, head turned slightly toward camera with a quiet defiant stare, steam venting from her back thrusters, her ponytail and jacket streaming sideways in the salt wind, a vast derelict sea-city at dusk, colossal megastructures of unknown purpose rising from the ocean in staggered silhouettes, bone-white monolithic towers fused with barnacled steel, cyclopean ring-shaped constructs canted at broken angles, rusted skeletal gantries threaded with dead cables, dark swells rolling between the pylons, shipwrecks half-swallowed at their feet, thick sea fog clinging to the bases while the upper structures pierce into a bruised sky, scattered faint lights blinking high in the towers like distant eyes, moody low-key lighting, cold teal ambient from the overcast sky, warm amber sodium glow leaking from a distant structure camera-right, hard backlight from a low sun behind the towers carving her silhouette, volumetric god rays cutting through sea mist, wet specular highlights on her armor, 35mm anamorphic lens, slight low angle looking up past her shoulder toward the structures, medium-wide shot, shallow depth of field with foreground rust in soft focus, horizontal lens flares, fine atmospheric haze compressing the distant megastructures into layered silhouettes, cinematic anime key visual, painterly digital illustration with crisp line art, desaturated oceanic palette of teal, bone-white and rust punched by small warm accent lights, film grain, high-contrast editorial poster aesthetic. Format 16:9.
```

</details>

---
---

#### Neon Orchid District design board

<p align="center">
<a href="docs/retro-cyberpunk/neon-orchid-district-board.png"><img src="docs/retro-cyberpunk/neon-orchid-district-board.png" width="620" alt="Neon Orchid District cyberpunk design board"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a cyberpunk character-and-city design board in a premium magazine-layout format, landscape 16:9. Title text: "NEON ORCHID DISTRICT". The board is divided into five asymmetric panels: one large cinematic street scene of a rain-soaked elevated night market, two close-up portrait panels of original adult cyberpunk couriers with glowing orchid tattoos, one small isometric map panel showing alleys and drone routes, and one artifact panel showing encrypted transit passes, cybernetic gloves, and vending-machine stickers. Use layered neon magenta, cyan, acid green, wet asphalt reflections, holographic signage, dense but readable composition, editorial margins, small labels, and a cohesive retro-future anime/cyberpunk style. Original characters only, no existing IP, no explicit content.
```

</details>

---

#### Synth Moon Crew alien nightlife grid

<p align="center">
<a href="docs/retro-cyberpunk/synth-moon-crew-grid.png"><img src="docs/retro-cyberpunk/synth-moon-crew-grid.png" width="620" alt="Synth Moon Crew cyberpunk alien nightlife grid"/></a>
</p>

<p align="center"><sub><code>"square"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a square cyberpunk alien nightclub catalog sheet called "SYNTH MOON CREW". Layout: a clean 3×3 grid of nine cards with thin chrome borders. Each card shows a different original alien or android nightlife character: glass-horn DJ, koi-scale bartender, moth-wing hacker, chrome geisha bassist, jellyfish courier, neon priestess, reptile fashion model, vending-machine oracle, and masked dancer. Each card has a tiny readable name tag and a unique color accent, but the whole grid shares a polished late-90s anime cyberpunk aesthetic, black background, fluorescent rim lights, glossy materials, sticker-like UI glyphs, playful stylish energy, no gore, no explicit content, original designs only.
```

</details>


<a id="gallery-cinematic-animation"></a>

<h2 align="center">🎬 Cinematic & Animation</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Pixar-style 3D animation still (kitten)

<p align="center">
<a href="docs/cinematic-animation/pixar-kitchen.png"><img src="docs/cinematic-animation/pixar-kitchen.png" width="620" alt="Pixar-style 3D animation still (kitten)"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A Pixar-quality 3D animation still, landscape 16:9. Cinematic feature-film look, warm studio lighting.

Scene: a cozy apartment kitchen at dawn. A small orange tabby kitten sits on the countertop reaching a paw toward a rising soufflé in the oven; oven glow lighting the scene from below. Soft morning light through linen curtains. A wooden chopping board with a half-peeled lemon, a copper whisk with a small cloud of flour still airborne, a tiny succulent in a clay pot.

Character: kitten with expressive, slightly oversized eyes (classic Pixar proportions), individually sculpted whiskers, believable fur with micro-groom direction, curious-slightly-worried expression.

Art direction: full-CG Pixar aesthetic — subsurface scattering on ears and whiskers, physically based materials, soft shadow ambient occlusion, volumetric morning beam, shallow depth of field. Clean stylised shapes consistent with "Luca", "Soul", "Elemental" — not photoreal uncanny-valley.
```

</details>

---

#### 1940s film-noir still

<p align="center">
<a href="docs/cinematic-animation/noir-detective.png"><img src="docs/cinematic-animation/noir-detective.png" width="620" alt="1940s film-noir still"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A 1940s film-noir black-and-white movie still, landscape 16:9, high contrast. Shot on 35mm with visible grain.

Scene: a detective in trench coat and fedora stands alone at a rain-soaked street corner at 2 a.m., cigarette in hand, smoke curling upward. Wet cobblestones reflecting a single buzzing street lamp. A "HOTEL" neon sign on brick facade with letters "HOTE_" (the L flickered out). A vintage 1946 sedan parked at the curb, tail-lights glowing through drizzle.

Lighting: classic chiaroscuro — single hard key light above right, venetian-blind shadows on the wall behind him. Deep blacks, silvered highlights, full tonal range from pure white to pure black. No colour. Frame should feel lifted from "The Maltese Falcon", "Double Indemnity", or "The Third Man".
```

</details>

---

#### Professional 6-panel film storyboard

<p align="center">
<a href="docs/cinematic-animation/storyboard.png"><img src="docs/cinematic-animation/storyboard.png" width="620" alt="Professional 6-panel film storyboard"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A 6-panel film storyboard laid out as a 3×2 grid, landscape 16:9 overall. Each panel is a rectangular pencil-and-marker sketch with a white margin border and a small information strip underneath.

Scene: a chase through a rainy Tokyo alleyway, ending in a rooftop jump.

Panel 1 — WIDE establishing: wet neon alleyway, runner entering from left; kanji signage on both walls. Info: "PANEL 1 · EXT. ALLEY · NIGHT · WIDE / static / 2s"
Panel 2 — OTS tracking: runner mid-stride from behind; pursuer silhouette 10 m back. Info: "PANEL 2 · OTS TRACKING / follow-cam / pan-L 45° / 3s"
Panel 3 — Close-up: runner's face, sweat, eyes darting up toward fire escape. Info: "PANEL 3 · CU RUNNER / static / 1.5s / SFX: breath"
Panel 4 — Low angle: runner leaping onto fire-escape ladder; rain streaks. Info: "PANEL 4 · LOW ANGLE / tilt-up 30° / 2s"
Panel 5 — Wide aerial: runner silhouetted against neon skyline, about to leap rooftops. Info: "PANEL 5 · WIDE AERIAL / crane-down / 4s"
Panel 6 — Match cut: runner's boots landing on wet rooftop; splash. Info: "PANEL 6 · MATCH CUT CU / static / 1s / SFX: splash"

Art direction: classic animation-school storyboard — pencil line-work, grey marker shading, red-pencil arrow annotations on panels 2 and 5 (camera move and action arc). Off-white paper texture background.
```

</details>

---

#### Studio-Ghibli-style animation still

<p align="center">
<a href="docs/cinematic-animation/ghibli-cottage.png"><img src="docs/cinematic-animation/ghibli-cottage.png" width="620" alt="Studio-Ghibli-style animation still"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <code>"Curated"</code></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
A Studio-Ghibli-style hand-painted animation still, landscape 16:9. A small wooden cottage sits on a grassy hillside overlooking a valley at golden hour. A child stands barefoot at the cottage doorway waving to a small furry forest spirit half-hidden in the meadow grass. A distant train cuts across the valley floor, swallows dip overhead.

Art direction: classic Miyazaki / Studio Ghibli watercolor-gouache style. Soft painterly edges, slightly desaturated greens and warm skin tones, visible brush texture in the clouds and grass. Thin ink line art on the characters. Gentle atmospheric perspective. The whole frame should feel like a cel from "My Neighbor Totoro" or "Kiki's Delivery Service", not a 3D render.
```

</details>

---

#### VHS grocery-store chaos still

<p align="center">
<a href="docs/cinematic-animation/vhs-grocery-chaos.png"><img src="docs/cinematic-animation/vhs-grocery-chaos.png" width="560" alt="VHS grocery-store chaos still"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <a href="https://www.reddit.com/r/ChatGPT/comments/1jk0p3v/tried_to_push_the_new_image_model_with_an/"><code>"Reddit"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a chaotic security-camera still from a 1990s grocery store. A man in full medieval armor is frozen mid-sprint stealing several rotisserie chickens past the dairy section. Overhead fluorescent lights reflect off the armor. The floor is baby-blue tile. Add a timestamp reading "08/13/96 04:44 AM" and a wall poster saying "NEW! TOASTER STRUDELS!". Make it low-fidelity, absurd, slightly intense, with motion blur, VHS color bleed, surveillance noise, and authentic analog-store lighting.
```

</details>

---

<a id="gallery-character-design"></a>

<h2 align="center">👤 Character Design</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Official character reference sheet

<p align="center">
<a href="docs/character-design/character-sheet.png"><img src="docs/character-design/character-sheet.png" width="620" alt="Official character reference sheet"/></a>
</p>

<p align="center"><sub><code>"landscape"</code> · <code>"high"</code> · <a href="https://x.com/MANISH1027512"><code>"X"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Based on this character and background, please create a character reference sheet similar to official setting materials.
- Includes three-view drawings: front view, side view, and back view
- Add variations of the character's facial expressions
- Break down and display detailed parts of the clothing and equipment
- Add a color palette
- Include a brief explanation of the worldview setting
- Overall, use an organized layout (white background, illustration style)
```

</details>

---

#### Elven archer sketchbook concept sheet

<p align="center">
<a href="docs/character-design/elven-archer-sheet.png"><img src="docs/character-design/elven-archer-sheet.png" width="560" alt="Elven archer sketchbook concept sheet"/></a>
</p>

<p align="center"><sub><code>"portrait"</code> · <code>"high"</code> · <a href="https://www.reddit.com/r/midjourney/comments/1jrcpan/fantasy_concept_arts_with_v7_prompts_included/"><code>"Reddit"</code></a></sub></p>

<details>
<summary><strong>📝 Prompt</strong></summary>

```text
Create a fantasy concept art sketchbook page centered on a mystical elven archer with flowing robes. Render the main figure in loose graphite strokes with precise ink detailing. Surround the hero sketch with side views exploring cloak variations, a half-finished bow study with measurements, thumbnail action poses, handwritten annotations about enchanted embroidery patterns, and faint watercolor tests bleeding into the margins in forest-green and silver. The page should feel like a real art director's development sheet: exploratory, beautiful, readable, and richly tactile.
```

</details>

---

<a id="gallery-typography-posters"></a>

<h2 align="center">📝 Typography & Posters</h2>

<p align="right"><sub><a href="#gallery-index"><kbd>↑ Gallery index</kbd></a></sub></p>

#### Poster 1×3 panel

<table>
  <tr>
    <td width="33%" align="center" valign="top">
      <a href="docs/typography-posters/city-tourism-promo-poster.png"><img src="docs/typography-posters/city-tourism-promo-poster.png" width="100%" alt="Chongqing rainy-night city promo poster"/></a><br/>
      <sub><strong>A · Chongqing rainy-night 山城雨夜</strong><br/><code>"portrait"</code> · <code>"high"</code> · <a href="https://www.xiaohongshu.com/explore/69e5cb85000000001a027aa8"><code>"Xiaohongshu"</code></a></sub>
    </td>
    <td width="33%" align="center" valign="top">
      <a href="docs/typography-posters/vogue-cover.png"><img src="docs/typography-posters/vogue-cover.png" width="100%" alt="Vogue-style fashion magazine cover"/></a><br/>
      <sub><strong>B · Vogue-style fashion magazine cover</strong><br/><code>"portrait"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
    <td width="33%" align="center" valign="top">
      <a href="docs/typography-posters/pulp-scifi-cover.png"><img src="docs/typography-posters/pulp-scifi-cover.png" width="100%" alt="1950s Astounding Stories pulp cover"/></a><br/>
      <sub><strong>C · 1950s Astounding Stories pulp</strong><br/><code>"portrait"</code> · <code>"high"</code> · <code>"Curated"</code></sub>
    </td>
  </tr>
</table>

<p align="center"><sub>Typography & Posters · 3-poster panel · Mixed original + community</sub></p>

<details>
<summary><strong>📝 Prompts for all three posters</strong></summary>

**Prompt A — Chongqing rainy-night city promo poster**
```text
做一张 3:4 城市宣传海报，主题是"山城雨夜·重庆"。整体像高端城市文旅 campaign poster，不要廉价旅行社风格。画面中心是层叠山城建筑、轻轨穿楼、湿润街道、霓虹倒影、江边雾气和夜色中的坡道。用现代中文排版，加入少量准确标题与副标题："山城雨夜" / "CHONGQING" / "8D 城市 / 江雾 / 火锅 / 轻轨 / 夜景"。信息密度适中，留白克制，色彩以深蓝、暖橙、湿润霓虹红为主，像一本设计年鉴里的城市品牌海报。
```

**Prompt B — Vogue-style fashion magazine cover**
```text
A high-fashion magazine cover, 3:4 portrait, Vogue Paris / British Vogue editorial aesthetic.

Subject: a tall female model, medium-dark skin tone, mid-thirties, standing three-quarters to camera, direct piercing gaze. She wears a sculptural high-collared ivory wool coat over a silk slip dress in deep aubergine. Minimalist silver spiral earrings. Hair in a sleek low chignon with a single escaped strand. Makeup: matte bronze-warm, glossy plum lip.

Background: muted concrete-grey seamless paper backdrop, vertical shaft of cool daylight from upper left. Shallow depth of field.

Exact cover typography (all English, crisp, correctly spelled):
- Masthead, huge uppercase serif, white: "VOGUE"
```

<!-- opensource-radar:truncated -->
