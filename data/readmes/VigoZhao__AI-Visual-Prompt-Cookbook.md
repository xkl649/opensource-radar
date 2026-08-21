<h1 align="center">AI Visual Prompt Cookbook</h1>

<p align="center">
  <img src="assets/hero-collage.jpg" alt="AI Visual Prompt Cookbook showcase">
</p>

<p align="center">
  English |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.id.md">Bahasa Indonesia</a>
</p>

<p align="center">
  <img alt="Styles" src="https://img.shields.io/badge/styles-118-ff5a7a?style=flat-square">
  <img alt="Previews" src="https://img.shields.io/badge/previews-236-4cc9f0?style=flat-square">
  <img alt="Format" src="https://img.shields.io/badge/format-style.json-111111?style=flat-square">
  <img alt="Languages" src="https://img.shields.io/badge/languages-6-f7b801?style=flat-square">
</p>

<p align="center">
  <strong>Copy a JSON, get a style.</strong> Drop one <code>style.json</code> into ChatGPT, Claude, Nano Banana Pro, or any LLM image workflow. Replace the variables, keep the visual system.
</p>

<p align="center">
  A curated library of plug-and-play visual prompt styles for AI image generation, distilled from visual design references and structured for more consistent, reusable output.
</p>

<p align="center">
  Curated by <a href="https://x.com/VigoCreativeAI">@VigoCreativeAI</a>, structured with assistance from OpenAI Codex. Star this repo to follow new style drops.
</p>

<p align="center">
  🖼️ <strong><a href="https://vigozhao.github.io/AI-Visual-Prompt-Cookbook/site/">Browse the online gallery</a></strong> · or jump to the <a href="#all-styles">All Styles gallery</a> / <a href="docs/CATALOG.md">full catalog</a> below.
</p>

## Quick Links

| Category | Good for | Start with |
| --- | --- | --- |
| Photo + Doodle | Social snapshots, lifestyle scenes, playful overlays | [Playful Mascot Doodle Snapshot](#playful-mascot-doodle-snapshot-style), [Subway Doodle Photo Hybrid](#subway-doodle-photo-hybrid-style) |
| Zine + Collage | Fashion posters, music visuals, maximalist editorial layouts | [K-pop Apocalypse Ransom Zine](#k-pop-apocalypse-ransom-zine-style), [Y2K Grunge Hip-hop Cutout Poster](#y2k-grunge-hiphop-cutout-poster-style) |
| Type Posters | Big headline systems, loud campaign graphics, visual punch | [Impact Burst Halftone Comic Poster](#impact-burst-halftone-comic-poster-style), [Neon Kinetic Typographic Poster](#neon-kinetic-typographic-poster-style) |
| Travel + City | Destination posters, street scenes, urban diaries | [Clean Triptych Travel Vlog Thumbnail](#clean-triptych-travel-vlog-thumbnail-style), [Tokyo Kawaii Travel Collage Poster](#tokyo-kawaii-travel-collage-poster-style) |
| Editorial + Minimal | Cleaner compositions, structured layouts, quieter art direction | [Tri Color Hardcut Portrait Poster](#tri-color-hardcut-portrait-poster-style), [Soft Analog Future Editorial Poster](#soft-analog-future-editorial-poster-style) |

## Why This Exists

Most AI image prompts are one-off text blobs: hard to reuse, hard to compare, and hard to iterate on. This repo takes a different approach: each visual style is distilled into a structured `style.json` you can drop into any LLM-based image generation workflow. Same JSON, more consistent style direction across generations.

## Quick Start

1. Browse the [Featured Styles](#featured-styles), [Quick Links](#quick-links), or [All Styles](#all-styles).
2. Open a style folder and copy the `style.json`.
3. Paste the full JSON into ChatGPT, Claude, Nano Banana Pro, or any LLM-based image workflow.
4. Provide your own values for the variables declared in `environment_variables`, or edit a case in `examples[*].values`.
5. Generate the final image prompt and send it to your image model.

See the [Complete Example](#complete-example) below for a full input-to-output walkthrough.

### Recommended Image Models

This workflow works best with end-to-end multimodal image models that can read long structured JSON prompts and generate the final image in one step.

- ChatGPT Images 2 (OpenAI, gpt-image-2) — strong text rendering, 2K/4K output, reasoning before generation
- Nano Banana Pro (Google, Gemini 3 Pro Image) — 4K output, multilingual text accuracy, strong subject consistency

Other multimodal LLMs that accept long JSON prompts may also work but are not the primary recommendation.

## Complete Example

### Input → Output Walkthrough

This example uses [Mono Noir Type Portrait Poster Style](styles/mono-noir-type-portrait-poster-style/).

#### Step 1 — The Style

<details>
<summary>prompt_template excerpt</summary>

```text
Create a {ASPECT_RATIO} monochrome editorial poster in the Mono Noir Type Portrait Poster Style. Style fidelity lock: {STYLE_FIDELITY_ANCHORS}. Source content to avoid: {SOURCE_CONTENT_TO_AVOID}. Scene: {SUBJECT} {SUBJECT_ACTION} with {PRODUCT_OR_PROP} in {LOCATION}. Background elements: {BACKGROUND_ELEMENTS}. Wardrobe and styling: {WARDROBE_STYLE}. Composition: one large high-contrast black-and-white photographic subject, close crop, deep charcoal background, sparse negative space, shallow depth of field, serious noir editorial mood. If the aspect ratio is 16:9, make a landscape poster with the subject weighted to the right side and the headline block on the left. If the aspect ratio is 9:16, make a vertical poster with the headline stacked in the upper-left or middle-left field and the subject cropped large on the right or lower-right. Typography: render the exact readable lowercase headline text "{MAIN_TEXT}" as three short left-aligned lines...
```

</details>

#### Step 2 — Your Variables

```text
SUBJECT = a tired architect with silver hair
SUBJECT_ACTION = studying a folded blueprint in a late-night pause
PRODUCT_OR_PROP = a rolled plan tube and a pencil held low
LOCATION = a dim concrete studio after midnight
BACKGROUND_ELEMENTS = soft charcoal wall gradient, blurred drafting table edge, deep empty space
MAIN_TEXT = focus / outlasts / noise.
SECONDARY_TEXT = studio log 02:14
ACCENT_SYMBOL = a tiny white plus
WARDROBE_STYLE = dark work jacket over a plain black shirt
ASPECT_RATIO = 16:9
```

#### Step 3 — The Final Prompt

```text
Create a 16:9 monochrome editorial poster in the Mono Noir Type Portrait Poster Style. Style fidelity lock: black-and-white photographic portrait, deep charcoal background, giant lowercase left-aligned headline, first word in a white label, remaining words in white, high contrast, sparse negative space, close crop. Source content to avoid: no young woman with blunt bangs, no freckles close-up, no discipline beats procrastination text, no copied face or exact source crop. Scene: a tired architect with silver hair studying a folded blueprint in a late-night pause with a rolled plan tube and a pencil held low in a dim concrete studio after midnight. Background elements: soft charcoal wall gradient, blurred drafting table edge, deep empty space. Wardrobe and styling: dark work jacket over a plain black shirt. Composition: one large high-contrast black-and-white photographic subject, close crop, deep charcoal background, sparse negative space, shallow depth of field, serious noir editorial mood. If the aspect ratio is 16:9, make a landscape poster with the subject weighted to the right side and the headline block on the left. If the aspect ratio is 9:16, make a vertical poster with the headline stacked in the upper-left or middle-left field and the subject cropped large on the right or lower-right. Typography: render the exact readable lowercase headline text "focus
outlasts
noise." as three short left-aligned lines with tight leading; put the first headline word as black type inside a crisp white rectangular label, then set the remaining lines in heavy white type directly on the dark background. Add "studio log 02:14" only as tiny unobtrusive white microcopy if it fits. Use a tiny white plus only as a minimal typographic mark. Keep type sharp, flat, square-cornered, and massive. Photo treatment: realistic black-and-white studio photography, strong shadow falloff, visible facial or fabric texture, subtle grain, no color, no illustration, no collage, no extra panels, no logos, no watermark.
```

#### Step 4 — The Result

<img src="assets/thumbs/mono-noir-type-portrait-poster-style-16x9.jpg" alt="Mono Noir Type Portrait Poster Style result preview">

## Copy Prompt Library

Prefer the short path? Browse the generated [Copy Prompt Library](docs/copy-prompts/README.md) for a copy-ready prompt per style. The full reusable style systems still live in each `style.json`.

## Featured Styles

Six visual systems to start with. Every style ships as one JSON plus two preview images. Browse the complete set of 118 in the [All Styles](#all-styles) gallery below.

<!-- HTML table used for rich image+link cells -->

<table>
<tr>
<td width="33%" valign="top">
<a href="styles/primary-block-isometric-editorial-poster-style"><img src="assets/thumbs/primary-block-isometric-editorial-poster-style-16x9.jpg" alt="Primary Block Isometric Editorial Poster Style preview"></a>
<h3>Primary Block Isometric Editorial Poster Style</h3>
<p>A crisp editorial poster system built from a sparse diagonal cluster of oversized rounded cuboids, oblique isometric depth, black hairline construction, bright primary-color top planes, darker side faces, oversized grotesk labels, and tiny Swiss-style perimeter copy on warm white paper.</p>
<p><a href="styles/primary-block-isometric-editorial-poster-style/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/primary-block-isometric-editorial-poster-style.md">Copy Prompt</a> · <a href="styles/primary-block-isometric-editorial-poster-style">Folder</a></p>
</td>
<td width="33%" valign="top">
<a href="styles/signal-red-contour-poster"><img src="assets/thumbs/signal-red-contour-poster-16x9.jpg" alt="Signal Red Contour Poster preview"></a>
<h3>Signal Red Contour Poster</h3>
<p>A severe two-ink public-information poster system built from a near-black field, one monumental flat silhouette defined by an agitated signal-red contour, and detached white grotesk text arranged around the perimeter like urgent fragments.</p>
<p><a href="styles/signal-red-contour-poster/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/signal-red-contour-poster.md">Copy Prompt</a> · <a href="styles/signal-red-contour-poster">Folder</a></p>
</td>
<td width="33%" valign="top">
<a href="styles/electric-yellow-cutout-megatype-poster-style"><img src="assets/thumbs/electric-yellow-cutout-megatype-poster-style-16x9.jpg" alt="Electric Yellow Cutout Megatype Poster Style preview"></a>
<h3>Electric Yellow Cutout Megatype Poster Style</h3>
<p>A high-impact pop advertising poster system that places one oversized photoreal cutout subject over monumental warped display lettering, using an electric-yellow field, black upper type, cobalt-blue lower type, severe cropping, and tiny editorial metadata for scale contrast.</p>
<p><a href="styles/electric-yellow-cutout-megatype-poster-style/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/electric-yellow-cutout-megatype-poster-style.md">Copy Prompt</a> · <a href="styles/electric-yellow-cutout-megatype-poster-style">Folder</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="styles/burnt-orange-halftone-hero-collage"><img src="assets/thumbs/burnt-orange-halftone-hero-collage-16x9.jpg" alt="Burnt Orange Halftone Hero Collage preview"></a>
<h3>Burnt Orange Halftone Hero Collage</h3>
<p>A dense celebratory editorial poster system that combines one warm, flash-lit photographic hero cutout with burnt-orange screenprint panels, monumental condensed headline type, coarse halftone diagrams, dry-brush lettering, a looping foreground flourish, a monochrome base strip, and disciplined magazine microtype on aged cream paper.</p>
<p><a href="styles/burnt-orange-halftone-hero-collage/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/burnt-orange-halftone-hero-collage.md">Copy Prompt</a> · <a href="styles/burnt-orange-halftone-hero-collage">Folder</a></p>
</td>
<td width="33%" valign="top">
<a href="styles/signal-red-petal-profile-editorial-cover"><img src="assets/thumbs/signal-red-petal-profile-editorial-cover-16x9.jpg" alt="Signal Red Petal Profile Editorial Cover preview"></a>
<h3>Signal Red Petal Profile Editorial Cover</h3>
<p>A maximal independent-magazine cover system built from a fragmented signal-red masthead, one monumental flat-color side-profile portrait, a sparse off-white editorial rail, and a huge right-heavy mantle of overlapping cobalt, coral, and hot-pink petal lobes.</p>
<p><a href="styles/signal-red-petal-profile-editorial-cover/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/signal-red-petal-profile-editorial-cover.md">Copy Prompt</a> · <a href="styles/signal-red-petal-profile-editorial-cover">Folder</a></p>
</td>
<td width="33%" valign="top">
<a href="styles/cobalt-pop-cutout-editorial"><img src="assets/thumbs/cobalt-pop-cutout-editorial-16x9.jpg" alt="Cobalt Pop Cutout Editorial preview"></a>
<h3>Cobalt Pop Cutout Editorial</h3>
<p>A high-saturation editorial poster system pairing one low-angle full-body photographic cutout with oversized irregular orange display lettering, a cobalt-to-sky-blue field, flat green organic edge shapes, and tiny cream callouts.</p>
<p><a href="styles/cobalt-pop-cutout-editorial/style.json"><strong>Open style.json</strong></a> · <a href="docs/copy-prompts/cobalt-pop-cutout-editorial.md">Copy Prompt</a> · <a href="styles/cobalt-pop-cutout-editorial">Folder</a></p>
</td>
</tr>
</table>

## Package Shape

```text
styles/<style-slug>/
  style.json          # Machine-readable prompt template
  preview-16x9.jpg    # Landscape preview
  preview-9x16.jpg    # Portrait preview
```

## style.json v2.1

Every `style.json` is self-contained: copy the whole file into your LLM, then provide values for the variables declared in `environment_variables` or edit one of the `examples[*].values` cases.

- `prompt_template` is the reusable style prompt with `{VARIABLE}` placeholders.
- `environment_variables` declares every placeholder the template can use.
- `examples` contains ready-to-edit cases; each case stores only `case_name` and `values`.
- `style_fidelity_anchors` and `source_content_to_avoid` tell the model what to preserve and what not to copy.
- `negative_prompt` keeps watermarks, logos, direct source recreations, and off-style outputs away.

Rendered prompts such as `prompt_9x16`, `prompt_16x9`, or `full_prompt` are intentionally not stored. They are derived at generation time from `prompt_template` plus chosen values, so the JSON stays compact and does not drift.

Validate the library with:

```bash
python3 scripts/validate-style-json.py .
```


## All Styles

Browse all 118 styles below.

The complete library, including the featured styles above. For full descriptions and all file links per style, see [docs/CATALOG.md](docs/CATALOG.md).

<!-- HTML table used for rich image+link cells -->

<table>
<tr>
<td width="33%" valign="top">
<a id="primary-block-isometric-editorial-poster-style"></a>
<a href="styles/primary-block-isometric-editorial-poster-style"><img src="assets/thumbs/primary-block-isometric-editorial-poster-style-16x9.jpg" alt="Primary Block Isometric Editorial Poster Style preview"></a>
<p><strong><a href="styles/primary-block-isometric-editorial-poster-style">Primary Block Isometric Editorial Poster Style</a></strong><br>
<em>Crisp editorial posters built from a diagonal cluster of oversized rounded cuboids in oblique isometric depth, with primary-color top planes, oversized grotesk labels, and Swiss-style perimeter copy.</em><br>
<a href="styles/primary-block-isometric-editorial-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/primary-block-isometric-editorial-poster-style.md">prompt</a> · <a href="styles/primary-block-isometric-editorial-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="signal-red-contour-poster"></a>
<a href="styles/signal-red-contour-poster"><img src="assets/thumbs/signal-red-contour-poster-16x9.jpg" alt="Signal Red Contour Poster preview"></a>
<p><strong><a href="styles/signal-red-contour-poster">Signal Red Contour Poster</a></strong><br>
<em>Severe two-ink public-information posters with a near-black field, a monumental flat silhouette traced by an agitated signal-red contour, and detached white grotesk text fragments.</em><br>
<a href="styles/signal-red-contour-poster/style.json">style.json</a> · <a href="docs/copy-prompts/signal-red-contour-poster.md">prompt</a> · <a href="styles/signal-red-contour-poster/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="electric-yellow-cutout-megatype-poster-style"></a>
<a href="styles/electric-yellow-cutout-megatype-poster-style"><img src="assets/thumbs/electric-yellow-cutout-megatype-poster-style-16x9.jpg" alt="Electric Yellow Cutout Megatype Poster Style preview"></a>
<p><strong><a href="styles/electric-yellow-cutout-megatype-poster-style">Electric Yellow Cutout Megatype Poster Style</a></strong><br>
<em>High-impact pop ad posters placing an oversized photoreal cutout over monumental warped display lettering, on an electric-yellow field with black-and-cobalt type and severe cropping.</em><br>
<a href="styles/electric-yellow-cutout-megatype-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/electric-yellow-cutout-megatype-poster-style.md">prompt</a> · <a href="styles/electric-yellow-cutout-megatype-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="burnt-orange-halftone-hero-collage"></a>
<a href="styles/burnt-orange-halftone-hero-collage"><img src="assets/thumbs/burnt-orange-halftone-hero-collage-16x9.jpg" alt="Burnt Orange Halftone Hero Collage preview"></a>
<p><strong><a href="styles/burnt-orange-halftone-hero-collage">Burnt Orange Halftone Hero Collage</a></strong><br>
<em>Dense celebratory editorial posters with a flash-lit photographic hero cutout, burnt-orange screenprint panels, monumental condensed headlines, coarse halftone diagrams, and dry-brush lettering.</em><br>
<a href="styles/burnt-orange-halftone-hero-collage/style.json">style.json</a> · <a href="docs/copy-prompts/burnt-orange-halftone-hero-collage.md">prompt</a> · <a href="styles/burnt-orange-halftone-hero-collage/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="signal-red-petal-profile-editorial-cover"></a>
<a href="styles/signal-red-petal-profile-editorial-cover"><img src="assets/thumbs/signal-red-petal-profile-editorial-cover-16x9.jpg" alt="Signal Red Petal Profile Editorial Cover preview"></a>
<p><strong><a href="styles/signal-red-petal-profile-editorial-cover">Signal Red Petal Profile Editorial Cover</a></strong><br>
<em>Maximal indie-magazine covers with a fragmented signal-red masthead, a monumental flat-color side-profile portrait, and a right-heavy mantle of overlapping cobalt, coral, and pink petal lobes.</em><br>
<a href="styles/signal-red-petal-profile-editorial-cover/style.json">style.json</a> · <a href="docs/copy-prompts/signal-red-petal-profile-editorial-cover.md">prompt</a> · <a href="styles/signal-red-petal-profile-editorial-cover/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cobalt-pop-cutout-editorial"></a>
<a href="styles/cobalt-pop-cutout-editorial"><img src="assets/thumbs/cobalt-pop-cutout-editorial-16x9.jpg" alt="Cobalt Pop Cutout Editorial preview"></a>
<p><strong><a href="styles/cobalt-pop-cutout-editorial">Cobalt Pop Cutout Editorial</a></strong><br>
<em>High-saturation editorial posters pairing a low-angle photographic cutout with oversized irregular orange lettering, a cobalt-to-sky-blue field, and flat green organic shapes.</em><br>
<a href="styles/cobalt-pop-cutout-editorial/style.json">style.json</a> · <a href="docs/copy-prompts/cobalt-pop-cutout-editorial.md">prompt</a> · <a href="styles/cobalt-pop-cutout-editorial/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="crimson-noir-newsprint-editorial-style"></a>
<a href="styles/crimson-noir-newsprint-editorial-style"><img src="assets/thumbs/crimson-noir-newsprint-editorial-style-16x9.jpg" alt="Crimson Noir Newsprint Editorial preview"></a>
<p><strong><a href="styles/crimson-noir-newsprint-editorial-style">Crimson Noir Newsprint Editorial</a></strong><br>
<em>Prestige culture-magazine covers with a monumental grayscale portrait, narrow Didone display type, selective deep-crimson fragments, and a fibrous newsprint finish.</em><br>
<a href="styles/crimson-noir-newsprint-editorial-style/style.json">style.json</a> · <a href="docs/copy-prompts/crimson-noir-newsprint-editorial-style.md">prompt</a> · <a href="styles/crimson-noir-newsprint-editorial-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="electric-cobalt-motion-type-poster-style"></a>
<a href="styles/electric-cobalt-motion-type-poster-style"><img src="assets/thumbs/electric-cobalt-motion-type-poster-style-16x9.jpg" alt="Electric Cobalt Motion Type Poster preview"></a>
<p><strong><a href="styles/electric-cobalt-motion-type-poster-style">Electric Cobalt Motion Type Poster</a></strong><br>
<em>High-energy event posters with a full-bleed motion-smeared photo, a cobalt field, fluorescent-green ultra-condensed type, oversized lower-edge numerals, and analog print texture.</em><br>
<a href="styles/electric-cobalt-motion-type-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/electric-cobalt-motion-type-poster-style.md">prompt</a> · <a href="styles/electric-cobalt-motion-type-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cobalt-torn-didone-portrait-editorial-style"></a>
<a href="styles/cobalt-torn-didone-portrait-editorial-style"><img src="assets/thumbs/cobalt-torn-didone-portrait-editorial-style-16x9.jpg" alt="Cobalt Torn Didone Portrait Editorial preview"></a>
<p><strong><a href="styles/cobalt-torn-didone-portrait-editorial-style">Cobalt Torn Didone Portrait Editorial</a></strong><br>
<em>Sparse fashion-editorial posters with a warm paper field, a centered halftone portrait, monumental cobalt Didone type, and an irregular torn-paper reveal.</em><br>
<a href="styles/cobalt-torn-didone-portrait-editorial-style/style.json">style.json</a> · <a href="docs/copy-prompts/cobalt-torn-didone-portrait-editorial-style.md">prompt</a> · <a href="styles/cobalt-torn-didone-portrait-editorial-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="foreshortened-gradient-impact-ad-style"></a>
<a href="styles/foreshortened-gradient-impact-ad-style"><img src="assets/thumbs/foreshortened-gradient-impact-ad-style-16x9.jpg" alt="Foreshortened Gradient Impact Ad Style preview"></a>
<p><strong><a href="styles/foreshortened-gradient-impact-ad-style">Foreshortened Gradient Impact Ad Style</a></strong><br>
<em>Kinetic worm's-eye ad posters with a monumental foreground product, a receding figure, giant edge-cropped diagonal neo-grotesk type, and a dark-to-luminous gradient field.</em><br>
<a href="styles/foreshortened-gradient-impact-ad-style/style.json">style.json</a> · <a href="docs/copy-prompts/foreshortened-gradient-impact-ad-style.md">prompt</a> · <a href="styles/foreshortened-gradient-impact-ad-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="vermilion-photocopy-tension-editorial"></a>
<a href="styles/vermilion-photocopy-tension-editorial"><img src="assets/thumbs/vermilion-photocopy-tension-editorial-16x9.jpg" alt="Vermilion Photocopy Tension Editorial preview"></a>
<p><strong><a href="styles/vermilion-photocopy-tension-editorial">Vermilion Photocopy Tension Editorial</a></strong><br>
<em>Confrontational posters built from one monumentally cropped near-binary photocopy photograph, a vertical condensed headline rail, compact annotations, and a single vermilion ink layer of sharp shards and edge-born organic forms.</em><br>
<a href="styles/vermilion-photocopy-tension-editorial/style.json">style.json</a> · <a href="docs/copy-prompts/vermilion-photocopy-tension-editorial.md">prompt</a> · <a href="styles/vermilion-photocopy-tension-editorial/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cobalt-xerox-script-editorial-poster-style"></a>
<a href="styles/cobalt-xerox-script-editorial-poster-style"><img src="assets/thumbs/cobalt-xerox-script-editorial-poster-style-16x9.jpg" alt="Cobalt Xerox Script Editorial Poster preview"></a>
<p><strong><a href="styles/cobalt-xerox-script-editorial-poster-style">Cobalt Xerox Script Editorial Poster</a></strong><br>
<em>Compressed cobalt posters where fragmented grotesk headlines, two enormous repeated outline-script words, an ambiguous macro halftone photo, a dark flat Xerox cutout, and dense microcopy collide edge to edge.</em><br>
<a href="styles/cobalt-xerox-script-editorial-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/cobalt-xerox-script-editorial-poster-style.md">prompt</a> · <a href="styles/cobalt-xerox-script-editorial-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="coral-window-megatype-motion-poster-style"></a>
<a href="styles/coral-window-megatype-motion-poster-style"><img src="assets/thumbs/coral-window-megatype-motion-poster-style-16x9.jpg" alt="Coral Window Megatype Motion Poster preview"></a>
<p><strong><a href="styles/coral-window-megatype-motion-poster-style">Coral Window Megatype Motion Poster</a></strong><br>
<em>Tactile motion posters built from a coral-red paper field, one pale-blue photographic window, colossal black condensed type crossing the image boundary, a single action subject, sparse micro labels, and one bold direction symbol.</em><br>
<a href="styles/coral-window-megatype-motion-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/coral-window-megatype-motion-poster-style.md">prompt</a> · <a href="styles/coral-window-megatype-motion-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cobalt-megatype-roadside-travel-editorial-style"></a>
<a href="styles/cobalt-megatype-roadside-travel-editorial-style"><img src="assets/thumbs/cobalt-megatype-roadside-travel-editorial-style-16x9.jpg" alt="Cobalt Megatype Roadside Travel Editorial preview"></a>
<p><strong><a href="styles/cobalt-megatype-roadside-travel-editorial-style">Cobalt Megatype Roadside Travel Editorial</a></strong><br>
<em>Nostalgic roadside-travel posters combining cropped cobalt megatype, sparse locator graphics, warm straight-on architectural photography, cream uncoated paper, and one loose hand-painted word across the dark foreground.</em><br>
<a href="styles/cobalt-megatype-roadside-travel-editorial-style/style.json">style.json</a> · <a href="docs/copy-prompts/cobalt-megatype-roadside-travel-editorial-style.md">prompt</a> · <a href="styles/cobalt-megatype-roadside-travel-editorial-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="surreal-megatype-dossier-collage"></a>
<a href="styles/surreal-megatype-dossier-collage"><img src="assets/thumbs/surreal-megatype-dossier-collage-16x9.jpg" alt="Surreal Megatype Dossier Collage preview"></a>
<p><strong><a href="styles/surreal-megatype-dossier-collage">Surreal Megatype Dossier Collage</a></strong><br>
<em>Dense neo-editorial posters layering monumental white typography behind a centered surreal photographic cutout, framed by technical microcopy, ruled panels, celestial symbols, and coarse vintage grain on black.</em><br>
<a href="styles/surreal-megatype-dossier-collage/style.json">style.json</a> · <a href="docs/copy-prompts/surreal-megatype-dossier-collage.md">prompt</a> · <a href="styles/surreal-megatype-dossier-collage/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="urban-photo-ink-beast-collage-style"></a>
<a href="styles/urban-photo-ink-beast-collage-style"><img src="assets/thumbs/urban-photo-ink-beast-collage-style-16x9.jpg" alt="Urban Photo Ink Beast Collage Style preview"></a>
<p><strong><a href="styles/urban-photo-ink-beast-collage-style">Urban Photo Ink Beast Collage Style</a></strong><br>
<em>Surreal collage posters layering monumental flat-ink beasts and tiny figures over faded archival city photography, with cut-paper masses, hand-drawn contours, and sparse bright accents.</em><br>
<a href="styles/urban-photo-ink-beast-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/urban-photo-ink-beast-collage-style.md">prompt</a> · <a href="styles/urban-photo-ink-beast-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="prismatic-glass-animal-weekend-editorial"></a>
<a href="styles/prismatic-glass-animal-weekend-editorial"><img src="assets/thumbs/prismatic-glass-animal-weekend-editorial-16x9.jpg" alt="Prismatic Glass Animal Weekend Editorial preview"></a>
<p><strong><a href="styles/prismatic-glass-animal-weekend-editorial">Prismatic Glass Animal Weekend Editorial</a></strong><br>
<em>Sparse black posters built around one oversized translucent glass animal with smoky depth, liquid-chrome edges, rainbow refractions, and futuristic micro-editorial weekend copy.</em><br>
<a href="styles/prismatic-glass-animal-weekend-editorial/style.json">style.json</a> · <a href="docs/copy-prompts/prismatic-glass-animal-weekend-editorial.md">prompt</a> · <a href="styles/prismatic-glass-animal-weekend-editorial/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="sun-faded-scenic-editorial-poster"></a>
<a href="styles/sun-faded-scenic-editorial-poster"><img src="assets/thumbs/sun-faded-scenic-editorial-poster-16x9.jpg" alt="Sun-Faded Scenic Editorial Poster preview"></a>
<p><strong><a href="styles/sun-faded-scenic-editorial-poster">Sun-Faded Scenic Editorial Poster</a></strong><br>
<em>Nostalgic scenic travel posters with enormous warm-ivory condensed headlines, a flowing tangerine script accent, tiny magazine microcopy, and sun-faded analog film grain.</em><br>
<a href="styles/sun-faded-scenic-editorial-poster/style.json">style.json</a> · <a href="docs/copy-prompts/sun-faded-scenic-editorial-poster.md">prompt</a> · <a href="styles/sun-faded-scenic-editorial-poster/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="cyan-grain-macro-megatype-poster-style"></a>
<a href="styles/cyan-grain-macro-megatype-poster-style"><img src="assets/thumbs/cyan-grain-macro-megatype-poster-style-16x9.jpg" alt="Cyan Grain Macro Megatype Poster preview"></a>
<p><strong><a href="styles/cyan-grain-macro-megatype-poster-style">Cyan Grain Macro Megatype Poster</a></strong><br>
<em>Sparse experimental posters built from one radically enlarged macro photograph, a saturated cyan field, monumental interlocking white letterforms, and tactile analog print grain.</em><br>
<a href="styles/cyan-grain-macro-megatype-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/cyan-grain-macro-megatype-poster-style.md">prompt</a> · <a href="styles/cyan-grain-macro-megatype-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="retro-future-chrome-portrait-dossier"></a>
<a href="styles/retro-future-chrome-portrait-dossier"><img src="assets/thumbs/retro-future-chrome-portrait-dossier-16x9.jpg" alt="Retro Future Chrome Portrait Dossier preview"></a>
<p><strong><a href="styles/retro-future-chrome-portrait-dossier">Retro Future Chrome Portrait Dossier</a></strong><br>
<em>Retro-futurist editorial portrait posters with a technical dossier sidebar, an edge-cropped posterized face, liquid-chrome interruptions, optical diagrams, and coarse halftone print grain.</em><br>
<a href="styles/retro-future-chrome-portrait-dossier/style.json">style.json</a> · <a href="docs/copy-prompts/retro-future-chrome-portrait-dossier.md">prompt</a> · <a href="styles/retro-future-chrome-portrait-dossier/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="pink-anime-motorcycle-spec-poster-style"></a>
<a href="styles/pink-anime-motorcycle-spec-poster-style"><img src="assets/thumbs/pink-anime-motorcycle-spec-poster-style-16x9.jpg" alt="Pink Anime Motorcycle Spec Poster Style preview"></a>
<p><strong><a href="styles/pink-anime-motorcycle-spec-poster-style">Pink Anime Motorcycle Spec Poster Style</a></strong><br>
<em>Anime motorsport dossier posters pairing an original rider with a hero motorcycle, oversized italic model codes, a cream-and-magenta editorial grid, and a compact spec card.</em><br>
<a href="styles/pink-anime-motorcycle-spec-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/pink-anime-motorcycle-spec-poster-style.md">prompt</a> · <a href="styles/pink-anime-motorcycle-spec-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="xerox-neon-editorial-collage-style"></a>
<a href="styles/xerox-neon-editorial-collage-style"><img src="assets/thumbs/xerox-neon-editorial-collage-style-16x9.jpg" alt="Xerox Neon Editorial Collage preview"></a>
<p><strong><a href="styles/xerox-neon-editorial-collage-style">Xerox Neon Editorial Collage</a></strong><br>
<em>Photocopied editorial collage posters with a distressed black headline, a halftone photo cutout, cyan-green misregistration, fluorescent paint swashes, and marker scribbles.</em><br>
<a href="styles/xerox-neon-editorial-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/xerox-neon-editorial-collage-style.md">prompt</a> · <a href="styles/xerox-neon-editorial-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="crimson-ink-manga-dossier"></a>
<a href="styles/crimson-ink-manga-dossier"><img src="assets/thumbs/crimson-ink-manga-dossier-16x9.jpg" alt="Crimson Ink Manga Dossier preview"></a>
<p><strong><a href="styles/crimson-ink-manga-dossier">Crimson Ink Manga Dossier</a></strong><br>
<em>High-density manga dossier posters with a foreshortened hero, distressed condensed headlines, newspaper sidebars, and a crimson-black-paper palette.</em><br>
<a href="styles/crimson-ink-manga-dossier/style.json">style.json</a> · <a href="docs/copy-prompts/crimson-ink-manga-dossier.md">prompt</a> · <a href="styles/crimson-ink-manga-dossier/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="lime-loop-megatype-action-poster-style"></a>
<a href="styles/lime-loop-megatype-action-poster-style"><img src="assets/thumbs/lime-loop-megatype-action-poster-style-16x9.jpg" alt="Lime Loop Megatype Action Poster preview"></a>
<p><strong><a href="styles/lime-loop-megatype-action-poster-style">Lime Loop Megatype Action Poster</a></strong><br>
<em>Studio action posters with an overhead subject, stacked dark-green megatype, a fluorescent-lime motion loop, and clean white space.</em><br>
<a href="styles/lime-loop-megatype-action-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/lime-loop-megatype-action-poster-style.md">prompt</a> · <a href="styles/lime-loop-megatype-action-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="yellow-graffiti-fisheye-manga-street-poster-style"></a>
<a href="styles/yellow-graffiti-fisheye-manga-street-poster-style"><img src="assets/thumbs/yellow-graffiti-fisheye-manga-street-poster-style-16x9.jpg" alt="Yellow Graffiti Fisheye Manga Street Poster Style preview"></a>
<p><strong><a href="styles/yellow-graffiti-fisheye-manga-street-poster-style">Yellow Graffiti Fisheye Manga Street Poster Style</a></strong><br>
<em>Fisheye street posters mixing manga ink cutouts, sprayed yellow graffiti type, pavement tag texture, and anxious character energy.</em><br>
<a href="styles/yellow-graffiti-fisheye-manga-street-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/yellow-graffiti-fisheye-manga-street-poster-style.md">prompt</a> · <a href="styles/yellow-graffiti-fisheye-manga-street-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="red-yellow-product-trophy-collage-style"></a>
<a href="styles/red-yellow-product-trophy-collage-style"><img src="assets/thumbs/red-yellow-product-trophy-collage-style-16x9.jpg" alt="Red Yellow Product Trophy Collage Style preview"></a>
<p><strong><a href="styles/red-yellow-product-trophy-collage-style">Red Yellow Product Trophy Collage Style</a></strong><br>
<em>Fast-food billboard collages with red-and-yellow blocks, glossy cutout products, and a trophy silhouette built from product objects.</em><br>
<a href="styles/red-yellow-product-trophy-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/red-yellow-product-trophy-collage-style.md">prompt</a> · <a href="styles/red-yellow-product-trophy-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="manga-dossier-blueprint-poster"></a>
<a href="styles/manga-dossier-blueprint-poster"><img src="assets/thumbs/manga-dossier-blueprint-poster-16x9.jpg" alt="Manga Dossier Blueprint Poster preview"></a>
<p><strong><a href="styles/manga-dossier-blueprint-poster">Manga Dossier Blueprint Poster</a></strong><br>
<em>Manga dossier posters with cream margins, grayscale ink portraits, cobalt-blue technical panels, and editorial annotation rails.</em><br>
<a href="styles/manga-dossier-blueprint-poster/style.json">style.json</a> · <a href="docs/copy-prompts/manga-dossier-blueprint-poster.md">prompt</a> · <a href="styles/manga-dossier-blueprint-poster/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="red-black-manga-tabloid-poster-style"></a>
<a href="styles/red-black-manga-tabloid-poster-style"><img src="assets/thumbs/red-black-manga-tabloid-poster-style-16x9.jpg" alt="Red Black Manga Tabloid Poster Style preview"></a>
<p><strong><a href="styles/red-black-manga-tabloid-poster-style">Red Black Manga Tabloid Poster Style</a></strong><br>
<em>Dense red-black manga tabloids with cropped ink characters, editorial metadata blocks, halftone shading, and photocopy paper texture.</em><br>
<a href="styles/red-black-manga-tabloid-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/red-black-manga-tabloid-poster-style.md">prompt</a> · <a href="styles/red-black-manga-tabloid-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="ice-cyan-megatype-action-poster-style"></a>
<a href="styles/ice-cyan-megatype-action-poster-style"><img src="assets/thumbs/ice-cyan-megatype-action-poster-style-16x9.jpg" alt="Ice Cyan Megatype Action Poster Style preview"></a>
<p><strong><a href="styles/ice-cyan-megatype-action-poster-style">Ice Cyan Megatype Action Poster Style</a></strong><br>
<em>Ice-white action posters with oversized cyan megatype, ghost text layers, a cutout action photo, and chartreuse motion blur.</em><br>
<a href="styles/ice-cyan-megatype-action-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/ice-cyan-megatype-action-poster-style.md">prompt</a> · <a href="styles/ice-cyan-megatype-action-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="scarlet-megatype-action-collage-style"></a>
<a href="styles/scarlet-megatype-action-collage-style"><img src="assets/thumbs/scarlet-megatype-action-collage-style-16x9.jpg" alt="Scarlet Megatype Action Collage Style preview"></a>
<p><strong><a href="styles/scarlet-megatype-action-collage-style">Scarlet Megatype Action Collage Style</a></strong><br>
<em>Scarlet action key-art with diagonal block megatype, layered cutout subjects, hard graphic shadows, and controlled print grain.</em><br>
<a href="styles/scarlet-megatype-action-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/scarlet-megatype-action-collage-style.md">prompt</a> · <a href="styles/scarlet-megatype-action-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="jagged-red-street-photo-event-poster-style"></a>
<a href="styles/jagged-red-street-photo-event-poster-style"><img src="assets/thumbs/jagged-red-street-photo-event-poster-style-16x9.jpg" alt="Jagged Red Street Photo Event Poster Style preview"></a>
<p><strong><a href="styles/jagged-red-street-photo-event-poster-style">Jagged Red Street Photo Event Poster Style</a></strong><br>
<em>High-impact street posters with black-and-white photo cores, jagged red-and-black display type, thick white gutters, and three-color print energy.</em><br>
<a href="styles/jagged-red-street-photo-event-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/jagged-red-street-photo-event-poster-style.md">prompt</a> · <a href="styles/jagged-red-street-photo-event-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="neon-stadium-3d-hero-type-poster-style"></a>
<a href="styles/neon-stadium-3d-hero-type-poster-style"><img src="assets/thumbs/neon-stadium-3d-hero-type-poster-style-16x9.jpg" alt="Neon Stadium 3D Hero Type Poster Style preview"></a>
<p><strong><a href="styles/neon-stadium-3d-hero-type-poster-style">Neon Stadium 3D Hero Type Poster Style</a></strong><br>
<em>Hyper-saturated 3D stadium posters with toy-like heroes, cropped condensed type, lime-and-purple fields, and motion-blurred debris.</em><br>
<a href="styles/neon-stadium-3d-hero-type-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/neon-stadium-3d-hero-type-poster-style.md">prompt</a> · <a href="styles/neon-stadium-3d-hero-type-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="dusk-cyan-layered-type-poster-style"></a>
<a href="styles/dusk-cyan-layered-type-poster-style"><img src="assets/thumbs/dusk-cyan-layered-type-poster-style-16x9.jpg" alt="Dusk Cyan Layered Type Poster Style preview"></a>
<p><strong><a href="styles/dusk-cyan-layered-type-poster-style">Dusk Cyan Layered Type Poster Style</a></strong><br>
<em>Full-bleed dusk photo posters with navy silhouettes, oversized cyan-and-white type, script swashes, and crisp vector icons.</em><br>
<a href="styles/dusk-cyan-layered-type-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/dusk-cyan-layered-type-poster-style.md">prompt</a> · <a href="styles/dusk-cyan-layered-type-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="electric-blue-cutout-manga-poster-style"></a>
<a href="styles/electric-blue-cutout-manga-poster-style"><img src="assets/thumbs/electric-blue-cutout-manga-poster-style-16x9.jpg" alt="Electric Blue Cutout Manga Poster Style preview"></a>
<p><strong><a href="styles/electric-blue-cutout-manga-poster-style">Electric Blue Cutout Manga Poster Style</a></strong><br>
<em>Electric-blue manga posters with white cutout geometry, rounded modular type, orange microtype, and a cel-shaded subject in exaggerated perspective.</em><br>
<a href="styles/electric-blue-cutout-manga-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/electric-blue-cutout-manga-poster-style.md">prompt</a> · <a href="styles/electric-blue-cutout-manga-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="y2k-streetwear-sticker-collage-style"></a>
<a href="styles/y2k-streetwear-sticker-collage-style"><img src="assets/thumbs/y2k-streetwear-sticker-collage-style-16x9.jpg" alt="Y2K Streetwear Sticker Collage Style preview"></a>
<p><strong><a href="styles/y2k-streetwear-sticker-collage-style">Y2K Streetwear Sticker Collage Style</a></strong><br>
<em>Dense Y2K street collages with cutout subjects, sticker props, comic typography, and saturated yellow-blue-green accents.</em><br>
<a href="styles/y2k-streetwear-sticker-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/y2k-streetwear-sticker-collage-style.md">prompt</a> · <a href="styles/y2k-streetwear-sticker-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cream-smoke-city-manga-poster-style"></a>
<a href="styles/cream-smoke-city-manga-poster-style"><img src="assets/thumbs/cream-smoke-city-manga-poster-style-16x9.jpg" alt="Cream Smoke City Manga Poster Style preview"></a>
<p><strong><a href="styles/cream-smoke-city-manga-poster-style">Cream Smoke City Manga Poster Style</a></strong><br>
<em>Manga ink city scenes with cream cloud masses, sparse teal frames, peach accents, and precise miniature urban architecture.</em><br>
<a href="styles/cream-smoke-city-manga-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/cream-smoke-city-manga-poster-style.md">prompt</a> · <a href="styles/cream-smoke-city-manga-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="red-yellow-grunge-skate-cover-style"></a>
<a href="styles/red-yellow-grunge-skate-cover-style"><img src="assets/thumbs/red-yellow-grunge-skate-cover-style-16x9.jpg" alt="Red Yellow Grunge Skate Cover Style preview"></a>
<p><strong><a href="styles/red-yellow-grunge-skate-cover-style">Red Yellow Grunge Skate Cover Style</a></strong><br>
<em>Raw red-and-yellow action-culture covers with flash-lit cutouts, warped headline type, boxed callouts, and analog print grit.</em><br>
<a href="styles/red-yellow-grunge-skate-cover-style/style.json">style.json</a> · <a href="docs/copy-prompts/red-yellow-grunge-skate-cover-style.md">prompt</a> · <a href="styles/red-yellow-grunge-skate-cover-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="monochrome-xerox-sports-dossier"></a>
<a href="styles/monochrome-xerox-sports-dossier"><img src="assets/thumbs/monochrome-xerox-sports-dossier-16x9.jpg" alt="Monochrome Xerox Sports Dossier preview"></a>
<p><strong><a href="styles/monochrome-xerox-sports-dossier">Monochrome Xerox Sports Dossier</a></strong><br>
<em>Black-and-white xerox sports dossiers with cropped subjects, inset photo panels, distressed condensed type, and press-kit grain.</em><br>
<a href="styles/monochrome-xerox-sports-dossier/style.json">style.json</a> · <a href="docs/copy-prompts/monochrome-xerox-sports-dossier.md">prompt</a> · <a href="styles/monochrome-xerox-sports-dossier/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="liquid-chrome-clearance-poster-style"></a>
<a href="styles/liquid-chrome-clearance-poster-style"><img src="assets/thumbs/liquid-chrome-clearance-poster-style-16x9.jpg" alt="Liquid Chrome Clearance Poster Style preview"></a>
<p><strong><a href="styles/liquid-chrome-clearance-poster-style">Liquid Chrome Clearance Poster Style</a></strong><br>
<em>High-impact clearance posters with glossy liquid-chrome 3D type, acid-lime gradients, sale-interface microcopy, and barcode-style retail panels.</em><br>
<a href="styles/liquid-chrome-clearance-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/liquid-chrome-clearance-poster-style.md">prompt</a> · <a href="styles/liquid-chrome-clearance-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="hot-ink-comic-poster"></a>
<a href="styles/hot-ink-comic-poster"><img src="assets/thumbs/hot-ink-comic-poster-16x9.jpg" alt="Hot Ink Comic Poster preview"></a>
<p><strong><a href="styles/hot-ink-comic-poster">Hot Ink Comic Poster</a></strong><br>
<em>Loud underground comic flyers with mustard fields, coral cutouts, heavy marker outlines, hand-lettered bubble type, and dense comic symbols.</em><br>
<a href="styles/hot-ink-comic-poster/style.json">style.json</a> · <a href="docs/copy-prompts/hot-ink-comic-poster.md">prompt</a> · <a href="styles/hot-ink-comic-poster/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="kinetic-editorial-photo-collage-style"></a>
<a href="styles/kinetic-editorial-photo-collage-style"><img src="assets/thumbs/kinetic-editorial-photo-collage-style-16x9.jpg" alt="Kinetic Editorial Photo Collage preview"></a>
<p><strong><a href="styles/kinetic-editorial-photo-collage-style">Kinetic Editorial Photo Collage</a></strong><br>
<em>High-energy action posters built from staggered photo tiles, a cutout motion subject, bold black condensed type, loose ink speed marks, and sparse line-art scaffolding.</em><br>
<a href="styles/kinetic-editorial-photo-collage-style/style.json">style.json</a> · <a href="docs/copy-prompts/kinetic-editorial-photo-collage-style.md">prompt</a> · <a href="styles/kinetic-editorial-photo-collage-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="sunlit-coastal-product-blitz"></a>
<a href="styles/sunlit-coastal-product-blitz"><img src="assets/thumbs/sunlit-coastal-product-blitz-16x9.jpg" alt="Sunlit Coastal Product Blitz preview"></a>
<p><strong><a href="styles/sunlit-coastal-product-blitz">Sunlit Coastal Product Blitz</a></strong><br>
<em>Sunlit photoreal coastal product ads with tropical botanicals, ocean-blue depth, distressed white brush type, dense label blocks, curved callouts, and gold seal badges.</em><br>
<a href="styles/sunlit-coastal-product-blitz/style.json">style.json</a> · <a href="docs/copy-prompts/sunlit-coastal-product-blitz.md">prompt</a> · <a href="styles/sunlit-coastal-product-blitz/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="monochrome-grid-sneaker-tech-spec"></a>
<a href="styles/monochrome-grid-sneaker-tech-spec"><img src="assets/thumbs/monochrome-grid-sneaker-tech-spec-16x9.jpg" alt="Monochrome Grid Sneaker Tech Spec preview"></a>
<p><strong><a href="styles/monochrome-grid-sneaker-tech-spec">Monochrome Grid Sneaker Tech Spec</a></strong><br>
<em>Black-and-white footwear tech-spec posters with an oversized sneaker hero, engineering grid, evidence panels, macro callouts, pixelated uppercase type, and coarse halftone print.</em><br>
<a href="styles/monochrome-grid-sneaker-tech-spec/style.json">style.json</a> · <a href="docs/copy-prompts/monochrome-grid-sneaker-tech-spec.md">prompt</a> · <a href="styles/monochrome-grid-sneaker-tech-spec/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="sky-blue-lucky-tag-doodle-poster-style"></a>
<a href="styles/sky-blue-lucky-tag-doodle-poster-style"><img src="assets/thumbs/sky-blue-lucky-tag-doodle-poster-style-16x9.jpg" alt="Sky Blue Lucky Tag Doodle Poster Style preview"></a>
<p><strong><a href="styles/sky-blue-lucky-tag-doodle-poster-style">Sky Blue Lucky Tag Doodle Poster Style</a></strong><br>
<em>Sky-blue doodle posters with chunky white type, a hanging lucky-tag plaque, thick black outlines, and one big playful mascot.</em><br>
<a href="styles/sky-blue-lucky-tag-doodle-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/sky-blue-lucky-tag-doodle-poster-style.md">prompt</a> · <a href="styles/sky-blue-lucky-tag-doodle-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="neon-type-photo-scribble-poster"></a>
<a href="styles/neon-type-photo-scribble-poster"><img src="assets/thumbs/neon-type-photo-scribble-poster-16x9.jpg" alt="Neon Type Photo Scribble Poster preview"></a>
<p><strong><a href="styles/neon-type-photo-scribble-poster">Neon Type Photo Scribble Poster</a></strong><br>
<em>Neon event posters with huge condensed type, documentary photo crops, and raw white scribble gestures.</em><br>
<a href="styles/neon-type-photo-scribble-poster/style.json">style.json</a> · <a href="docs/copy-prompts/neon-type-photo-scribble-poster.md">prompt</a> · <a href="styles/neon-type-photo-scribble-poster/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="loose-scribble-riso-print-style"></a>
<a href="styles/loose-scribble-riso-print-style"><img src="assets/thumbs/loose-scribble-riso-print-style-16x9.jpg" alt="Loose Scribble Riso Print Style preview"></a>
<p><strong><a href="styles/loose-scribble-riso-print-style">Loose Scribble Riso Print Style</a></strong><br>
<em>Sparse riso posters with wavering contours, overprint accents, handwritten margins, and visible paper grain.</em><br>
<a href="styles/loose-scribble-riso-print-style/style.json">style.json</a> · <a href="docs/copy-prompts/loose-scribble-riso-print-style.md">prompt</a> · <a href="styles/loose-scribble-riso-print-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="jade-glyph-grocer-collage-poster-style"></a>
<a href="styles/jade-glyph-grocer-collage-poster-style"><img src="assets/thumbs/jade-glyph-grocer-collage-poster-style-16x9.jpg" alt="Jade Glyph Grocer Collage Poster Style preview"></a>
<p><strong><a href="styles/jade-glyph-grocer-collage-poster-style">Jade Glyph Grocer Collage Poster Style</a></strong><br>
<em>Cream grocer posters with jade glyphs, vegetable silhouettes, and glossy produce-photo centerpieces.</em><br>
<a href="styles/jade-glyph-grocer-collage-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/jade-glyph-grocer-collage-poster-style.md">prompt</a> · <a href="styles/jade-glyph-grocer-collage-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="scarlet-court-photo-type-poster-style"></a>
<a href="styles/scarlet-court-photo-type-poster-style"><img src="assets/thumbs/scarlet-court-photo-type-poster-style-16x9.jpg" alt="Scarlet Court Photo Type Poster preview"></a>
<p><strong><a href="styles/scarlet-court-photo-type-poster-style">Scarlet Court Photo Type Poster</a></strong><br>
<em>Scarlet action posters with blue sports panels, cutout athletes, cream typography, and gritty print texture.</em><br>
<a href="styles/scarlet-court-photo-type-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/scarlet-court-photo-type-poster-style.md">prompt</a> · <a href="styles/scarlet-court-photo-type-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="sunlit-kinetic-block-type-photo-poster-style"></a>
<a href="styles/sunlit-kinetic-block-type-photo-poster-style"><img src="assets/thumbs/sunlit-kinetic-block-type-photo-poster-style-16x9.jpg" alt="Sunlit Kinetic Block Type Photo Poster preview"></a>
<p><strong><a href="styles/sunlit-kinetic-block-type-photo-poster-style">Sunlit Kinetic Block Type Photo Poster</a></strong><br>
<em>Sunlit sports editorials with oversized cream block type, diagonal photo crops, and bright sky fields.</em><br>
<a href="styles/sunlit-kinetic-block-type-photo-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/sunlit-kinetic-block-type-photo-poster-style.md">prompt</a> · <a href="styles/sunlit-kinetic-block-type-photo-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="scarlet-block-cutout-doodle-book-cover-style"></a>
<a href="styles/scarlet-block-cutout-doodle-book-cover-style"><img src="assets/thumbs/scarlet-block-cutout-doodle-book-cover-style-16x9.jpg" alt="Scarlet Block Cutout Doodle Book Cover Style preview"></a>
<p><strong><a href="styles/scarlet-block-cutout-doodle-book-cover-style">Scarlet Block Cutout Doodle Book Cover Style</a></strong><br>
<em>Literary white-paper covers with scarlet letterforms, central cutout objects, marker contours, and asymmetrical space.</em><br>
<a href="styles/scarlet-block-cutout-doodle-book-cover-style/style.json">style.json</a> · <a href="docs/copy-prompts/scarlet-block-cutout-doodle-book-cover-style.md">prompt</a> · <a href="styles/scarlet-block-cutout-doodle-book-cover-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="halftone-assemblage-metaphor-psa-poster-style"></a>
<a href="styles/halftone-assemblage-metaphor-psa-poster-style"><img src="assets/thumbs/halftone-assemblage-metaphor-psa-poster-style-16x9.jpg" alt="Halftone Assemblage Metaphor PSA Poster Style preview"></a>
<p><strong><a href="styles/halftone-assemblage-metaphor-psa-poster-style">Halftone Assemblage Metaphor PSA Poster Style</a></strong><br>
<em>Retro PSA posters where everyday materials form symbolic halftone silhouettes on aged paper.</em><br>
<a href="styles/halftone-assemblage-metaphor-psa-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/halftone-assemblage-metaphor-psa-poster-style.md">prompt</a> · <a href="styles/halftone-assemblage-metaphor-psa-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="school-grid-paper-cutout-poster"></a>
<a href="styles/school-grid-paper-cutout-poster"><img src="assets/thumbs/school-grid-paper-cutout-poster-16x9.jpg" alt="School Grid Paper Cutout Poster preview"></a>
<p><strong><a href="styles/school-grid-paper-cutout-poster">School Grid Paper Cutout Poster</a></strong><br>
<em>Nostalgic grid-paper posters with torn-paper cutout objects, handwritten notes, and soft shadows.</em><br>
<a href="styles/school-grid-paper-cutout-poster/style.json">style.json</a> · <a href="docs/copy-prompts/school-grid-paper-cutout-poster.md">prompt</a> · <a href="styles/school-grid-paper-cutout-poster/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="naive-marker-quote-card-style"></a>
<a href="styles/naive-marker-quote-card-style"><img src="assets/thumbs/naive-marker-quote-card-style-16x9.jpg" alt="Naive Marker Quote Card Style preview"></a>
<p><strong><a href="styles/naive-marker-quote-card-style">Naive Marker Quote Card Style</a></strong><br>
<em>Absurd quote-card posters with crude marker outlines, pastel panels, blue lettering, and object gags.</em><br>
<a href="styles/naive-marker-quote-card-style/style.json">style.json</a> · <a href="docs/copy-prompts/naive-marker-quote-card-style.md">prompt</a> · <a href="styles/naive-marker-quote-card-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="sky-blue-home-life-doodle-poster-style"></a>
<a href="styles/sky-blue-home-life-doodle-poster-style"><img src="assets/thumbs/sky-blue-home-life-doodle-poster-style-16x9.jpg" alt="Sky Blue Home Life Doodle Poster Style preview"></a>
<p><strong><a href="styles/sky-blue-home-life-doodle-poster-style">Sky Blue Home Life Doodle Poster Style</a></strong><br>
<em>Sky-blue home-life posters with house insets, giant black lettering, badges, and marker doodle scenes.</em><br>
<a href="styles/sky-blue-home-life-doodle-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/sky-blue-home-life-doodle-poster-style.md">prompt</a> · <a href="styles/sky-blue-home-life-doodle-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="playful-marker-grounding-poster-style"></a>
<a href="styles/playful-marker-grounding-poster-style"><img src="assets/thumbs/playful-marker-grounding-poster-style-16x9.jpg" alt="Playful Marker Grounding Poster Style preview"></a>
<p><strong><a href="styles/playful-marker-grounding-poster-style">Playful Marker Grounding Poster Style</a></strong><br>
<em>Playful grounding posters with cream margins, marker blocks, uneven keylines, big lettering, and mascot figures.</em><br>
<a href="styles/playful-marker-grounding-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/playful-marker-grounding-poster-style.md">prompt</a> · <a href="styles/playful-marker-grounding-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="rough-marker-monster-poster-style"></a>
<a href="styles/rough-marker-monster-poster-style"><img src="assets/thumbs/rough-marker-monster-poster-style-16x9.jpg" alt="Rough Marker Monster Poster Style preview"></a>
<p><strong><a href="styles/rough-marker-monster-poster-style">Rough Marker Monster Poster Style</a></strong><br>
<em>Naive monster posters with thick marker outlines, crayon fills, cream paper, and chunky handmade type.</em><br>
<a href="styles/rough-marker-monster-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/rough-marker-monster-poster-style.md">prompt</a> · <a href="styles/rough-marker-monster-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="cyan-red-shockwave-type-poster-style"></a>
<a href="styles/cyan-red-shockwave-type-poster-style"><img src="assets/thumbs/cyan-red-shockwave-type-poster-style-16x9.jpg" alt="Cyan Red Shockwave Type Poster Style preview"></a>
<p><strong><a href="styles/cyan-red-shockwave-type-poster-style">Cyan Red Shockwave Type Poster Style</a></strong><br>
<em>Cyan-red impact posters with giant block type, jagged shockwaves, yellow accents, and rotated microcopy.</em><br>
<a href="styles/cyan-red-shockwave-type-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/cyan-red-shockwave-type-poster-style.md">prompt</a> · <a href="styles/cyan-red-shockwave-type-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="fantasy-scribble-mascot-poster-style"></a>
<a href="styles/fantasy-scribble-mascot-poster-style"><img src="assets/thumbs/fantasy-scribble-mascot-poster-style-16x9.jpg" alt="Fantasy Scribble Mascot Poster Style preview"></a>
<p><strong><a href="styles/fantasy-scribble-mascot-poster-style">Fantasy Scribble Mascot Poster Style</a></strong><br>
<em>Naive fantasy mascot posters with neon marker fills, huge wobbly type, and dense scribbles.</em><br>
<a href="styles/fantasy-scribble-mascot-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/fantasy-scribble-mascot-poster-style.md">prompt</a> · <a href="styles/fantasy-scribble-mascot-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="crayon-catalog-doodle-poster-style"></a>
<a href="styles/crayon-catalog-doodle-poster-style"><img src="assets/thumbs/crayon-catalog-doodle-poster-style-16x9.jpg" alt="Crayon Catalog Doodle Poster Style preview"></a>
<p><strong><a href="styles/crayon-catalog-doodle-poster-style">Crayon Catalog Doodle Poster Style</a></strong><br>
<em>Sparse crayon catalog posters with red handmade headlines, simple doodles, and folded paper texture.</em><br>
<a href="styles/crayon-catalog-doodle-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/crayon-catalog-doodle-poster-style.md">prompt</a> · <a href="styles/crayon-catalog-doodle-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="blue-halftone-ransom-zine-poster-style"></a>
<a href="styles/blue-halftone-ransom-zine-poster-style"><img src="assets/thumbs/blue-halftone-ransom-zine-poster-style-16x9.jpg" alt="Blue Halftone Ransom Zine Poster Style preview"></a>
<p><strong><a href="styles/blue-halftone-ransom-zine-poster-style">Blue Halftone Ransom Zine Poster Style</a></strong><br>
<em>Cobalt ransom-zine posters with torn scraps, halftone cutouts, and marker lettering.</em><br>
<a href="styles/blue-halftone-ransom-zine-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/blue-halftone-ransom-zine-poster-style.md">prompt</a> · <a href="styles/blue-halftone-ransom-zine-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="market-brush-produce-poster-style"></a>
<a href="styles/market-brush-produce-poster-style"><img src="assets/thumbs/market-brush-produce-poster-style-16x9.jpg" alt="Market Brush Produce Poster Style preview"></a>
<p><strong><a href="styles/market-brush-produce-poster-style">Market Brush Produce Poster Style</a></strong><br>
<em>Farmers-market produce posters with giant glossy crops, rough brush type, and ivory paper space.</em><br>
<a href="styles/market-brush-produce-poster-style/style.json">style.json</a> · <a href="docs/copy-prompts/market-brush-produce-poster-style.md">prompt</a> · <a href="styles/market-brush-produce-poster-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="folded-newspaper-product-ad-style"></a>
<a href="styles/folded-newspaper-product-ad-style"><img src="assets/thumbs/folded-newspaper-product-ad-style-16x9.jpg" alt="Folded Newspaper Product Ad Style preview"></a>
<p><strong><a href="styles/folded-newspaper-product-ad-style">Folded Newspaper Product Ad Style</a></strong><br>
<em>Folded newspaper advertorials with oversized product cutouts, dense columns, stamps, and antique-gold type.</em><br>
<a href="styles/folded-newspaper-product-ad-style/style.json">style.json</a> · <a href="docs/copy-prompts/folded-newspaper-product-ad-style.md">prompt</a> · <a href="styles/folded-newspaper-product-ad-style/preview-9x16.jpg">9:16</a></p>
</td>
<td width="33%" valign="top">
<a id="sunlit-supermodel-nameplate-editorial"></a>
<a href="styles/sunlit-supermodel-nameplate-editorial"><img src="assets/thumbs/sunlit-supermodel-nameplate-editorial-16x9.jpg" alt="Sunlit Supermodel Nameplate Editorial preview"></a>
<p><strong><a href="styles/sunlit-supermodel-nameplate-editorial">Sunlit Supermodel Nameplate Editorial</a></strong><br>
<em>Sunlit supermodel editorials with outdoor texture, nameplate details, and clean lower-third type.</em><br>
<a href="styles/sunlit-supermodel-nameplate-editorial/style.json">style.json</a> · <a href="docs/copy-prompts/sunlit-supermodel-nameplate-editorial.md">prompt</a> · <a href="styles/sunlit-supermodel-nameplate-editorial/preview-9x16.jpg">9:16</a></p>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a id="black-cutout-food-card-ad-style"></a>

<!-- opensource-radar:truncated -->
