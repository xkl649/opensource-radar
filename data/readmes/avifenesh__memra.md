# memra

[![ci](https://github.com/avifenesh/memra/actions/workflows/ci.yml/badge.svg)](https://github.com/avifenesh/memra/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Rust](https://img.shields.io/badge/rust-edition%202024-orange.svg)
![CUDA](https://img.shields.io/badge/CUDA-12.8%20%2F%2013.1-76B900.svg)
![arch](https://img.shields.io/badge/arch-sm__120a%20%2B%20sm__90a-black.svg)
![target](https://img.shields.io/badge/tuned%20for-RTX%20PRO%206000%20%2B%20RTX%205090-76B900.svg)

**Two card classes, tuned properly, instead of every card tuned adequately.** A mechanism that wins on
the RTX PRO 6000 and loses on the RTX 5090 becomes a per-device default keyed on the device — not
a compromise applied to both — so a naked command runs at that card's measured best. Speculative,
graphed and batched serving are each gated byte-identical to plain decode, per request, so the
speed is not paid for in silent output drift.

MIT. Clone it, point it at a supported checkpoint and a Blackwell card, and it serves — no
account, no key. No card? A hosted instance runs at
**[inference.tiyuvta.ai](https://inference.tiyuvta.ai)**; the lab is
**[tiyuvta.ai](https://tiyuvta.ai)**, same author, and its terms and prices are documented there
rather than here.

| | |
|---|---|
| **What** | Inference engine, Rust + CUDA, OpenAI-compatible serving |
| **Tuned for** | RTX PRO 6000 Blackwell (`sm_120a`) and RTX 5090, with a compile-gated H100 (`sm_90a`) lane |
| **Format** | **safetensors first** — the tuned path from here on. GGUF stays supported, and is still the path most models take |
| **Shape** | One model per GPU, replicas across cards behind an admission proxy, PP-2 when a model does not fit one card; placement validated through four GPUs. Tensor parallel, P2P and 3-stage PP are in progress |
| **Author** | [Avi Fenesh](https://github.com/avifenesh) · lab [tiyuvta.ai](https://tiyuvta.ai) · hosted instance [inference.tiyuvta.ai](https://inference.tiyuvta.ai) |
| **Licence** | MIT |

**Jump to** — [Quick start](#quick-start) · [Cookbook](docs/COOKBOOK.md) · [Speed](#speed) · [Which models run](#which-models-run)
· [What the server does](#what-the-server-does) · [Docs](#docs)
· [Request a model](#request-a-model)

---

**Use it** if you serve on a PRO 6000 or a 50-series card and want a naked command to run at
that card's measured best.

**Look elsewhere** if you serve on datacenter parts — the `sm_90a` lane is compile-gated,
secondary, and sets no defaults — or if you want a Python library to import rather than a Rust
binary behind an HTTP surface. If the model you need is not in the table below,
[ask for it](#request-a-model): support is per (model, quantization, drafter), so a format alone
never carries a checkpoint here.

Current tag: [releases/latest](https://github.com/avifenesh/memra/releases/latest). `main` runs
ahead of it. A version number in prose is stale the day after it is written, so this file does
not repeat one.

## Install

The release installer is the shortest path. It selects the published `sm_120a`, `sm_90a`, or
`sm_89` prebuilt, verifies the release checksum, and installs `memra-server`, `run-gen`,
`run-spec`, and `kernel-check`.

```bash
curl -fsSL https://raw.githubusercontent.com/avifenesh/memra/main/tools/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
```

Prebuilt binaries require Linux x86_64, glibc 2.35 or newer, NVIDIA driver 580 or newer,
and the CUDA runtime libraries. They do not require `nvcc`. Set `MEMRA_INSTALL_DIR` to
override `~/.local/bin`.

To build all workspace binaries from source:

```bash
git clone https://github.com/avifenesh/memra.git
cd memra
cargo build --release
export PATH="$PWD/target/release:$PATH"
```

Source builds require Rust 1.85 or newer and the CUDA 13.1 toolkit. Architecture is detected
at build time; `MEMRA_CUDA_ARCH` is the documented override.

## Quick start

Point the command at a supported Hugging Face checkpoint directory or GGUF artifact to run one
chat-templated generation. New upstream model onboarding starts from the official checkpoint:

```bash
MEMRA_CHAT=1 run-gen /absolute/path/to/hf-checkpoint \
  --prompt "Explain KV caches in one sentence."
```

`run-gen` also accepts a supported GGUF or an `hf:owner/repo[:file]` spec. The `hf:` form
downloads and caches the selected artifact on first use.

Start the OpenAI-compatible server in one terminal:

```bash
MODEL=/absolute/path/to/hf-checkpoint
MEMRA_MODELS="qwen=$MODEL" memra-server
```

The default bind address is `127.0.0.1:8080`. From another terminal, stream a chat completion:

```bash
curl -sS -N http://127.0.0.1:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen",
    "messages": [{"role": "user", "content": "Explain KV caches in one sentence."}],
    "max_tokens": 128,
    "stream": true
  }'
```

The `qwen` value is the alias from `MEMRA_MODELS`. Bearer authentication, multiple model
aliases, MTP drafter attachment, and deployment probes are covered in
[docs/SERVING.md](docs/SERVING.md).

## Speed

Flagship model, RTX PRO 6000 Blackwell, safetensors with the masked-ranks trim — the leading
path. Every figure carries its conditions in
[docs/PERFORMANCE.md](docs/PERFORMANCE.md), which is also where regression re-measures land.

| Metric | Measured |
|---|---|
| TTFT p50, cold | **0.166 s** (c=1) — ≤0.25 s through c=4 |
| TTFT, cached conversation turn | **0.130 s** on a 5.7k-token context (full prefix restore) |
| Decode p50, single stream | **259 tok/s** at 512-token outputs — v0.101.0 serving build, frspec (MTP) route, measured through the hosted instance’s public endpoint 2026-08-22 (n=8 medians; 136 at 128-out · 166 at 2048-out — per-length detail in the labeled paragraph below). Historical bench row: 140 tok/s @v0.86.1 (2026-08-15, RTX PRO 6000, masked-ranks trim) |
| Sampled-config throughput | top-p/top-k/min-p requests sample on-device — sampled aggregate **equals greedy** (240–245 tok/s at c=16–32; row current to v0.84.1, 2026-08-14 — aggregate re-measure on the v0.101+ engine pending) |
| Aggregate completion | **238–245 tok/s** at c=16, flat to c=32, zero sheds across capacity mixes (row current to v0.84.1, 2026-08-14 — single-stream moved +19–35% at v0.101.0; aggregate re-measure pending) |
| Sustained soak | 576/576 requests, 0 errors, 0 sheds, −0.27% drift |
| Spec ON/OFF exactness | 8/8 byte-identical; verify gate: zero differing logits at T=1..4, K=1/3/8 |

**v0.101.0 moved single-stream decode** (the DFlash2-drafter × round-cost-engine train,
2026-08-21 — [release notes](https://github.com/avifenesh/memra/releases/tag/v0.101.0)).
Two measurements, each with its own label — different routes on different instruments,
never one claim:

- **Bench, opt-in DSpark route** (`MEMRA_DSPARK_SPEC=1`, default-off), DFlash2 drafter —
  RTX PRO 6000 Blackwell Workstation bench silicon, serve surface, agentic pack, c=1:
  accept **3.57 tok/round at 13.7 ms/round ≈ 260 tok/s decode-class greedy**; 217–240
  tok/s at t0.6 with thinking on; spec **2.09×** the same gate's plain arm.
- **Served, frspec (MTP) route — the serving default** — the v0.101.0 serving build
  measured through the hosted instance's public endpoint (2026-08-22; single stream,
  greedy, streamed, idle-steady medians): **259 tok/s at 512-token outputs** (n=8) ·
  136 at 128-out · 166 at 2048-out — **+19.6% to +35.6% over v0.100.0** by output
  length. Acceptance was unchanged across the hop, so the gain is round-cost and decays
  as context grows — which is why the figure is quoted per output length. The 8-turn
  agentic smoke holds turn-8 TTFT at **1.07 s** on a 38k-token prompt with 95% of it
  prefix-cached, conversation wall −13.2%. Dated measurements of a live deployment,
  not commitments.

The served 512-out median landing at 259 while the bench cell reads ≈260 is a coincidence
of two different measurements, not one number quoted twice.

**Image and video input** on the same endpoint (OpenAI `image_url` /
`video_url` content parts, base64 data URIs; videos as animated GIF, decoded
in-process) — the checkpoint's native ViT tower runs in-engine, gated by a per-token
cosine parity oracle against the HF reference before serving (images min-cos 0.9997,
video 0.99999); vision tokens bill as ordinary prompt tokens.

Tuning on Qwen3.8-27B is **finished on both paths, and safetensors is the leading one** — the
decode p50 row above is its numbers, measured with the masked-ranks trim. Step-3.7-Flash already
serves on the GGUF path and its current tuning is on **FP8**, not Q8. Gemma-4 31B's serving
stack shipped in v0.89.0: an NVFP4mix GGUF trunk (Q6_K embedding + ffn_down), batched decode and
an assistant-drafter speculative path on by default, and capacity-keyed kernel mirrors that engage
only on the 96GB card class they were measured on — banked on RTX PRO 6000 (450W host cap) at
65.7 tok/s plain c1, 144.9/218.9 spec prose/code, 282.6 aggregate at c8 cached, 287.5 at c16
(receipts: research/gemma-vision-20260816/, SERVED-SPEC.md; spec figures re-banked 2026-08-17
after a GGUF chat_template fix — the earlier 138.5/243.0 rows were measured under a ChatML
prompt wrap a mint bug caused). A default only ships for a card class it was measured on.

Per-model detail lives in [docs/MODELS.md](docs/MODELS.md): the three published rank flavours and
the corpus behind each, why the trim cannot move output, what the prefix cache does and does not
cover on a GDN-hybrid, and two measured results that went against expectation — cache depth alone
swinging throughput 3.1x, and speculative decoding *losing* 4x on cache-carried shapes (a v1 loss
closed for greedy traffic in v0.93.0 and for sampled traffic — the API default, and so nearly all
of it — in v0.95.0).

### Same-rig samples

The README carries only representative regression samples. The full boards, methodology,
thermal regime, N, and open cells live in [docs/PERFORMANCE.md](docs/PERFORMANCE.md).

<!-- PERF-SAMPLES:START (generated by tools/update-perf-board.py — do not hand-edit; edit research/tune-data/current-board.json instead) -->
| Model / scenario | Path | tok/s |
|---|---|---|
| Qwen3.5-9B — speculative decode, short / medium / long-agentic prompt classes | GGUF NVFP4, MTP + masked-ranks trim | **281.0 / 211.7 / 187.1** |
| Gemma-4 31B dense — speculative decode at 1.7k context (NVFP4 safetensors tuning in progress) | GGUF Q4_0, MTP K=6 + trim | **97.3** |
| Qwen3.6-35B-A3B MoE — plain decode, tg128 at 512-token context | GGUF IQ4_XS, plain decode | **187.0** |
| Qwen3.6-35B-A3B MoE — the same, at 6.3k-token context | GGUF IQ4_XS, plain decode | **177.1** |

*RTX 5090 Laptop, measured 2026-08-02 — medians of N=5 interleaved reps. The flagship's own numbers are in the table above; these are the rest of the roster on the second card. Conditions, thermal regime, open cells and the engine-to-engine pairings: [docs/PERFORMANCE.md](docs/PERFORMANCE.md); raw per-run logs: [research/tune-data/](research/tune-data/).*
<!-- PERF-SAMPLES:END -->

## Which models run

Support is specific to a model, quantization and drafter — never to a format. A checkpoint
loading is not a model being supported: each family has its own tensor census, quantization
arithmetic and topology, and it counts as supported once it has passed its own gates.

**safetensors is the tuned path from here on.** GGUF stays supported and is still the path most
models take. There is no promise that a format keeps getting new work, in either direction — a
GGUF landing tomorrow may or may not be picked up, and a safetensors checkpoint can load
without being on the tuned path. Where a model is supported on both, both keep working.

| Family | Supported on | Tuning now |
|---|---|---|
| Qwen3.8-27B | **both**, both tuned — safetensors NVFP4 and NVFP4+Q5_K GGUF | done; safetensors leads |
| Gemma-4 31B | **GGUF** — QAT Q4_0 and the NVFP4mix shipQ6K serving trunk, both tuned; official tooluse tools branch | — |
| Step-3.7-Flash 196B-A11B | **GGUF** (IQ4_XS + Q8_0 MTP head, two-card PP-2) | FP8 |
| everything else | **GGUF** | — |

Since v0.94.0 the loader **enforces** the first sentence above instead of trusting it: a
checkpoint declaring a pre-tokenizer memra has no exact split for is REFUSED at load rather
than silently falling through to the `qwen35` split. That fall-through was the default until
2026-08-19, and it was invisible — the model loaded, produced fluent text, and every token id
was wrong. Supported splits are `qwen35`, `qwen2`, `deepseek-v3` and `gemma4`;
`MEMRA_ALLOW_UNKNOWN_PRETOKENIZER=1` downgrades the refusal to a warning for deliberate
bring-up, and must never be set for a run whose numbers get quoted.

Full roster, per-card targets and the reasoning: **[docs/MODELS.md](docs/MODELS.md)**.
Ready-to-paste serving configs — per model, per card, with the artifact links and the boot-log
line that proves the config took: **[docs/COOKBOOK.md](docs/COOKBOOK.md)**.

Tensor parallel, P2P and 3-stage pipeline parallel are being built now — named here as
unfinished rather than listed as features.

## What the server does

Table stakes, present and not worth a paragraph each: `/v1/chat/completions` and
`/v1/completions`, blocking or SSE; streaming `tool_calls` mapped through each model's
chat template — including gemma-4's official tooluse dialect, byte-parity-gated against
the vendor Jinja and accepted by a real agentic-CLI round-trip (per-model truth stays
in `/v1/models` `capabilities.tools`); separated reasoning
output and `reasoning_effort` mapped through each model's chat template, with an optional
per-model `default_reasoning_effort` in the model metadata deciding the unset case
(explicit client choice always wins) — one canonical effort table serves all three
dialects (v0.103.0, issue #31: `none|minimal|low|medium|high`, the real-client aliases
`xhigh|max|ultra` clamp to `high`, and `/v1/messages` `output_config.effort` now
validates and acts instead of being silently dropped; `thinking.type` keeps the on/off
switch when both are present); per-model **vendor sampling defaults** in the same
metadata (v0.96.0): a request that omits a sampling field gets the model vendor's own
published recommendation for that model — not greedy, not a house guess — resolved
identically on all four surfaces by one shared resolver; an explicit client value always
wins, an explicit `temperature: 0` stays true greedy, and a model with no keys declared
behaves byte-identically to before the keys existed; `response_format` `json_object`
and `json_schema` enforced during decode; prefix caching with same-window dedup and
session affinity; bearer auth, per-tenant cache boundaries and caps, health and readiness
probes, metrics, graceful drain; `/v1/models` reporting each loaded model's
`supported_parameters`; the model's full 262,144-token window. Two more dialects serve
over the same core with identical auth and accounting: `/v1/messages` (Anthropic Messages
API) and a stateless `/v1/responses` (OpenAI Responses API) — so Anthropic-format and
Responses-only agent clients point here directly ([docs/API-SURFACES.md](docs/API-SURFACES.md)).

Three things here are less common:

- **Block drafters are read by their training strategy, not their file format (v0.98.0;
  family-keyed v0.101.0).** The DFlash-family loader serves distinct semantic programs
  from one checkpoint shape: mask-fill (z-lab DFlash — drafts are the block's mask rows,
  the anchor row is untrained), DSpark (shifted labels — every row is a draft and the
  anchor row's output is draft 1), and DFlash2 (mask-fill with a dynamic-conv block and
  a codebook candidate selector in place of the markov chain). Which rows to harvest is
  a property of the checkpoint, so the convention resolves family-first (a DFlash2
  checkpoint is mask-fill by construction; contradicting it by env refuses loudly), then
  from the checkpoint's own config census; mismatching it is invisible to every
  byte-exactness gate and silently costs most of the acceptance (measured 2.9 → 1.43
  tok/round before the fix). On checkpoints that carry a trained accept-rate head, each
  round's verify window is sized from the head's own per-slot scores (`confidence-slot`,
  τ = 0.5 default) instead of a reactive ladder — windows open on confident streaks and
  shrink on bursty text, at the ladder's own row budget. Exactness is untouched either
  way: the trunk's argmax still decides every committed token, and the resolved harvest
  and window policy are printed at drafter load. The DSpark serving route itself remains
  opt-in (`MEMRA_DSPARK_SPEC`).
- **The DFlash2 drafter and the round-cost engine landed together (v0.101.0).** One
  release train merges the accept side (the z-lab DFlash2 drafter ported into the
  DSpark route as its own census-keyed family: dynamic causal conv, top-16 selector
  walk over trained codebooks, non-causal ±2048 windowed attention) with the
  round-cost side (batched GDN state snap/commit, one merged readback sync per round,
  batched fa/append rows, ILP-unrolled norms, dual/group-fused NVFP4 matvecs — every
  door bit-identical to its predecessor and kill-switched). Measured on the serving
  card class (RTX PRO 6000 Blackwell, agentic pack, c=1): accept 3.57 tok/round at
  13.7 ms/round ≈ 260 tok/s decode-class greedy, 217–240 at t0.6 with thinking on;
  spec-vs-plain 2.09× at engine terms. The route now serves temperature>0 through
  true rejection sampling (the committed stream's distribution equals trunk-only
  sampling — chi-square gated, and T=0 stays the byte-exact greedy path), and >12k-token
  contexts no longer crash the drafter's round attention (lo-clipped windowed SDPA,
  byte-identical and O(window) — 43k-token conversations complete with speculation
  engaged on every turn). Accept vectors are pinned per-request byte-identical to the
  pre-merge banks across both drafters, both window arms, greedy and t0.6. v0.103.0
  finishes the route's sampling surface and its round cost: the penalty keys
  (`presence_penalty`, `frequency_penalty`, `repetition_penalty`) now ride the sampled
  admission — penalties apply to the verify columns over the true per-state window,
  within-round accepts included, so a penalized T>0 request keeps speculation instead
  of falling back to plain decode (T=0 plus penalties stays plain, and the engine
  refuses the contradiction by name); and the verify-graph capture pool is default-ON
  on the serve route (`MEMRA_DSPARK_VERIFY_GRAPH=0` reverts byte-identically) — a
  model-owned pool whose captures any session replays: measured over a 240-request
  serve lifetime, the capture storm repays itself by request ≈40 and every round after
  runs ≈0.36 ms cheaper (−1.6% session wall, byte-exact throughout, memory bounded by
  `MEMRA_DSPARK_VG_MAX`). The pool rides the deferred-readback verify, so it engages
  ladder/fixed verify-window policies and head-less drafters; confidence-slot rounds
  keep the eager walk.
- **Vocab-masked draft heads.** The drafter proposes over 32,768 frequency-ranked tokens while
  verification runs the target's full 248,320-token vocabulary — so the mask moves the acceptance
  rate and cannot move output. On a safetensors trunk a published `.txt` of ranks drives the trim
  at load time (`MEMRA_FRSPEC_TRIM=<ranks.txt>`) and no separate draft file is needed; three
  flavours are published, one per workload
  ([docs/MODELS.md](docs/MODELS.md#qwen38-27b-in-detail)).
- **The decode mode is a per-request decision.** Speculation is not free: under load the server
  demotes spec sessions into batched decode where that measures faster, PP-2 included. The prefix
  cache and speculation compose rather than compete (v0.93.0): a spec session's boundary capture
  publishes the draft plane alongside the trunk KV (entry layout v2), and a whole-entry cache hit
  re-arms a warm spec session — qwen/MTP and the gemma assistant drafter both. **Sampled hits
  re-arm as of v0.95.0.** v0.93.0 shipped this greedy-only, which left it inert for the traffic
  that pays: the OpenAI surface defaults to `temperature` 1.0, so a customer's requests are
  sampled, and the deploy window measured cache hits with zero restores. Sampled restore is
  admitted **solo** — the measured crossover sits between one and two in-flight requests (1.35x at
  c1, 0.67x at c2), so it takes the interactive win and stands aside under load rather than
  averaging the two. Constrained and partial hits serve plain exactly as before. Each mode is
  byte-identity gated against plain decode before it is allowed to serve; sampled spec is
  *distributionally* exact rather than byte-equal to plain sampling, so its gate is per-seed byte
  identity against the cold sampled leader instead. v0.96.0 tightens the sampled path's identity
  on both ends: the sampled draft graph is keyed on every field that shapes its distribution, so
  requests differing in any sampling filter can never share a captured graph, and a whole-session
  resume verifies the request's sampler against the identity that shaped the parked session — a
  differing sampler is refused with the field named (`seed` is carried, not compared), counted in
  `/metrics` as `spec_pool_sampler_refusals`.
- **Multi-turn conversations keep the cache under speculation (v0.99.1).** The spec tier's turn
  checkpoint and restored-entry republication were captured at prompt-end — inside the template's
  live generation header, which every re-rendered turn replaces — so multi-turn agentic traffic
  declined spec affinity on every turn and froze the conversation's prefix-cache boundary at
  turn 1 (measured: 1.5% of prompt tokens cached by turn 7 vs 98.6% plain; TTFT 10–13.6 s by
  turn 8). v0.99.1 ports the plain tier's stable pre-generation boundary law to all three spec
  capture sites (`MEMRA_SPEC_STABLE_BOUNDARY`, default on; see docs/FLAGS.md): cached tokens now
  track the conversation turn over turn, TTFT stays in the plain-with-cache class, and 8-turn
  agentic wall flips from losing 1.4–1.8× against plain decode to beating it 1.3–1.4× — with
  served bytes unchanged by construction (the door only moves where the prime stops and what
  gets captured). v0.101.0 adds the prime-grid law underneath it: a hybrid's chunked GDN scan
  makes a prompt primed in two calls bit-identical to the monolithic prime only when the split
  lands on the fold grid, so every boundary the server chooses now lands on that grid
  (`tools/prime-grid-gate.sh` pins the law and its teeth), and the checkpoint-resumed,
  boundary-stopped and monolithic paths byte-agree.

Request fields, response shapes, capability gates, auth, cache semantics and admission
behaviour: [docs/SERVING.md](docs/SERVING.md).

## Docs

| Read this | For |
|---|---|
| [docs/COOKBOOK.md](docs/COOKBOOK.md) | Copy-paste serving configs per model and card — artifacts, flags, and the boot-log line that proves each config took |
| [docs/MODELS.md](docs/MODELS.md) | Every supported model, which path it runs on, per-card targets |
| [docs/SERVING.md](docs/SERVING.md) | API contract, caching, auth, admission, PP-2, and operations |
| [docs/API-SURFACES.md](docs/API-SURFACES.md) | The `/v1/messages` and `/v1/responses` translation surfaces |
| [docs/PERFORMANCE.md](docs/PERFORMANCE.md) | Full boards, methodology, rigs, gaps, and model qualification |
| [docs/FLAGS.md](docs/FLAGS.md) | Audited environment-variable catalog |
| [docs/KERNELS.md](docs/KERNELS.md) | Kernel inventory: every `.cu` entry symbol — purpose, qtype, arch guard, dispatch flag, FFI binding |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Engine structure and the `sm_120a` implementation ledger |
| [ARCHITECTURE-H100.md](ARCHITECTURE-H100.md) | H100-specific mechanisms and evidence |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development workflow and GPU correctness gates |
| [docs/decisions/](docs/decisions/) | Why a default, format, target or arm was chosen — and what was rejected, with the measurement that settled it |
| [releases](https://github.com/avifenesh/memra/releases) | **The changelog.** Generated from conventional commits by `tools/changelog.sh` — what changed lives there, not in these docs |
| [docs/RELEASING.md](docs/RELEASING.md) | Versioning, target-rig battery, tags, and publication |

## Request a model

The support list is a series of decisions, not a plan — so the most useful thing you can send is
which model you want served and on what card. Open an issue or a discussion. A concrete
checkpoint with a reason carries more weight than a wishlist, and it gets read.

## Contributing

Issues and PRs are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md); validation on a new
GPU should use the [hardware report template](.github/ISSUE_TEMPLATE/hardware-validation.md).

## License

MIT — see [LICENSE](LICENSE).
