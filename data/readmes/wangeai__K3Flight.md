<div align="center">
  <img src="assets/brand/k3-flight-readme-banner-v2.png" width="100%" alt="K3 Flight pixel aircraft: 2.8T parameters, approximately 55GB measured runtime RAM, CPU-only">

  # K3 Flight

  **Run Kimi K3 locally.**

  **2.8T parameters. ~55GB RAM. CPU-only.**

  A single-file Linux inference server powered by **cPilot Runtime**.  
  The model does not fit in memory. It does not have to.

  [**See the proof**](#the-impossible-looking-numbers) · [**How it works**](#what-k3-flight-actually-does) · [**Preview quick start**](#preview-quick-start) · [**Star K3 Flight**](https://github.com/onetoken-oss/K3Flight)

  [English](README.md) · [简体中文](README.zh-CN.md)

  ![Model](https://img.shields.io/badge/model-Kimi_K3_2.8T-111827?style=flat-square)
  ![Measured RAM](https://img.shields.io/badge/measured_RAM-~55GB-16a34a?style=flat-square)
  ![Backend](https://img.shields.io/badge/backend-CPU--only-475569?style=flat-square)
  ![Platform](https://img.shields.io/badge/platform-Linux_x86--64-f59e0b?style=flat-square)
  ![Status](https://img.shields.io/badge/status-preview_packaging-f97316?style=flat-square)
</div>

> [!IMPORTANT]
> **Release status:** The first Linux binary, checksums, and Hugging Face model download notes are being packaged for `v0.1.0-preview`. The measurements below come from the maintainer reference run. [Watch this repository](https://github.com/onetoken-oss/K3Flight/subscription) to be notified when the reproducible release lands.

## Why "K3 Flight"?

An aircraft does not carry the whole airport into the air. It needs the right payload, a runway, and a flight plan.

K3 works the same way. The complete 929GB checkpoint stays on storage. cPilot Runtime manages the weights and runtime state needed for the current execution path, bringing the right data into the right place at the right time.

**A model this large does not need to fit in memory. It needs a flight plan.**

<p align="center">
  <img src="assets/brand/png/why-k3-flight-en.png" width="100%" alt="Why K3 Flight: the complete checkpoint stays on storage while cPilot manages the active execution path through memory and CPU">
</p>

## Day-0 proof

Kimi K3 was released. On the same day, we completed the first end-to-end adaptation on cPilot Runtime: prompt in, model execution, tokens out.

The public recording will be captured from the exact release binary and will show startup, stable runtime memory, and the first generated tokens. We will not substitute a simulated terminal for the real run.

## The impossible-looking numbers

<p align="center">
  <img src="assets/929-to-55.png" width="900" alt="929GB checkpoint and approximately 55GB managed runtime working set; this is not compression">
</p>

| | Reference run |
| --- | ---: |
| Model | Kimi-K3-GGUF |
| Total parameters | 2.8T |
| Runtime memory | ~55GB |
| Backend | CPU-only |
| Prefill | ~1 token/s |
| Decode | ~0.8 token/s |

These figures describe a preliminary maintainer run, not a hardware-independent guarantee. The exact CPU and SSD model are not disclosed in this preview. Storage bandwidth, CPU capability, context length, prompt shape, and runtime version can materially change the result.

The point is not that 0.8 token/s beats a datacenter. The point is that a complete 2.8T-parameter Q2_K checkpoint can execute on a local CPU system without keeping 929GB of weights resident in RAM.

## What K3 Flight actually does

K3 Flight does **not** turn a 929GB model into a 55GB model. The checkpoint remains on storage. The runtime manages a much smaller live working set while inference is in progress.

Kimi K3 is a Mixture-of-Experts model. Its public model information states that each token selects 16 of 896 experts. Total parameter count describes the model's capacity; the execution working set describes what the machine must carry at a particular moment.

cPilot Runtime turns that sparsity into a systems problem:

- storage, host memory, and CPU are treated as one coordinated execution path;
- weights and runtime state are staged as the model needs them;
- data movement and compute are orchestrated to keep the active path moving;
- the complete Q2_K checkpoint remains available without being fully resident.

<p align="center">
  <img src="assets/runtime-path.png" width="900" alt="Storage to cPilot managed working set to CPU to tokens">
</p>

> **Model size is a parameter question. Running it locally is a systems question.**

## Requirements

K3 Flight v0.1.0-preview targets a narrow, verifiable first configuration:

- Linux on x86-64;
- 64GB or more of system memory recommended;
- at least 1TB of free local storage, with additional headroom recommended;
- a local NVMe SSD strongly recommended;
- the Kimi-K3-GGUF Q2_K files downloaded from Hugging Face;
- no GPU required for the reference CPU path.

macOS support is planned next. Other architectures, filesystems, virtual machines, and storage configurations are not claimed until they are tested.

## Preview quick start

The interface below is the release candidate. Filenames, checksums, model revision, and command flags will be frozen against the published binary before `v0.1.0-preview` is marked ready.

### 1. Download the binary

When `v0.1.0-preview` is published, download the Linux x86-64 release archive from [GitHub Releases](https://github.com/onetoken-oss/K3Flight/releases), then extract and verify it before running:

```bash
curl -L -O https://github.com/onetoken-oss/K3Flight/releases/download/v0.1.0-preview/cpilot-server-v0.1.0-preview-linux-x86_64.tar.gz
tar -xzf cpilot-server-v0.1.0-preview-linux-x86_64.tar.gz
sha256sum -c cpilot-server-v0.1.0-preview-linux-x86_64.sha256
chmod +x cpilot-server-v0.1.0-preview-linux-x86_64
```

The archive contains `cpilot-server-v0.1.0-preview-linux-x86_64` and `cpilot-server-v0.1.0-preview-linux-x86_64.sha256`. If you download from the GitHub web UI, select this `.tar.gz` release asset, not the automatically generated source code archive.

### 2. Download the model

Download **Kimi-K3-GGUF** from the tested Hugging Face repository, specifically the 929GB Q2_K checkpoint. Follow [MODEL.md](MODEL.md) for the repository link, tested revision, required license notice, download commands, and expected file layout.

The examples below use `MODEL_DIR="$HOME/models/Kimi-K3-Q2_K"`. Set `MODEL_DIR` to your local model path if you download the files somewhere else.

### 3. Start the server

```bash
export MODEL_DIR="$HOME/models/Kimi-K3-Q2_K"

./cpilot-server-v0.1.0-preview-linux-x86_64 \
  --model "$MODEL_DIR/Kimi-K3-Q2_K-00001-of-00094.gguf" \
  --host 127.0.0.1 \
  --port 8080
```

Keep the default loopback binding unless you understand the security implications of exposing an inference server to a network.

If port `8080` is already in use, change it with `--port`. Use the same port in the web UI URL and any later `curl` commands.

### Runtime options

Run `./cpilot-server-v0.1.0-preview-linux-x86_64 --help` to print all supported options. Most local runs only need a model path; change `--port` when the default port is occupied, and tune the remaining options when you need to control CPU usage, context size, batching, or cPilot memory behavior.

| Option | Default | Description |
| --- | --- | --- |
| `-m, --model FNAME` | required | Path to the GGUF model shard to load. For the Q2_K release, point this at `$MODEL_DIR/Kimi-K3-Q2_K-00001-of-00094.gguf`. |
| `--host HOST` | `127.0.0.1` | Address to listen on. Keep loopback for local use; values ending in `.sock` bind a Unix socket. |
| `--port PORT` | `8080` | HTTP port for the web UI and OpenAI-compatible API. |
| `-t N` | `12` | Number of CPU threads used during generation. |
| `-c N` | `512` | Prompt context size. Use `0` to load the context size from the model. |
| `-b N` | `64` | Logical maximum batch size. |
| `-ub N` | `64` | Physical maximum batch size. |
| `--cpilot-memory N` | `0` | cPilot memory tuning level. Lower values use less memory; higher values may improve responsiveness. |
| `--chat-template-kwargs STRING` | none | Additional JSON object passed to the chat template parser, for example `'{"key":"value"}'`. |

### 4. Send a request

K3 Flight includes a web UI. The recommended path is to open <http://127.0.0.1:8080> and send prompts from the page.

You can also use the OpenAI-compatible API:

```bash
curl http://127.0.0.1:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "kimi-k3-q2_k",
    "stream": true,
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

Both request paths use the same inference server. The cpilot-server runtime logs report prefill and decode throughput.

Already have the model and suitable hardware? [Share your run](https://github.com/onetoken-oss/K3Flight/issues/new?template=share-a-run.yml). Independent measurements are the most useful contribution to this preview.

## Licensing and commercial use

The binary license is separate from the Kimi K3 model license. Review [BINARY-LICENSE.md](BINARY-LICENSE.md) before downloading or redistributing a release. Commercial integration, OEM work, and access to the cPilot SDK require a separate agreement.

## FAQ

<details>
<summary><b>Did you compress 929GB into 55GB?</b></summary>

No. The model files remain approximately 929GB on storage. Around 55GB is the observed runtime memory footprint of the reference run.
</details>

<details>
<summary><b>Is this a smaller or distilled Kimi model?</b></summary>

No. The reference run uses the complete Kimi-K3-GGUF Q2_K checkpoint. Q2_K is a quantized representation, so it is not numerically identical to the original higher-precision checkpoint.
</details>

<details>
<summary><b>Why can a 2.8T model run this way?</b></summary>

Kimi K3 activates 16 of 896 experts per token. cPilot manages the live execution working set instead of requiring the entire checkpoint to remain resident in memory.
</details>

<details>
<summary><b>Is ~55GB the minimum RAM requirement?</b></summary>

No. It is a preliminary measured result from the reference run. We recommend at least 64GB of system memory for the preview and will publish a broader hardware matrix from reproducible community reports.
</details>

<details>
<summary><b>Why is generation slower than a datacenter endpoint?</b></summary>

The CPU path trades residency requirements for data movement through local storage and memory. It is intended to prove and explore local execution, not to claim datacenter-class latency.
</details>

<details>
<summary><b>Does this repository include the model?</b></summary>

No. Download Kimi-K3-GGUF from Hugging Face; it remains subject to the Kimi K3 License.
</details>

## Known limitations

- Linux x86-64 is the only launch target; macOS is not yet released.
- The reference path is CPU-only and optimized for feasibility rather than interactive cloud latency.
- Performance varies substantially with storage and CPU capability.
- The API and command examples remain release candidates until verified against the final binary.
- This preview carries no production SLA and should not be exposed to untrusted networks by default.

## Help build the hardware map

We are looking for honest results, including slow runs and failures. Use the [Share a run](https://github.com/onetoken-oss/K3Flight/issues/new?template=share-a-run.yml) template and include:

- CPU, system memory, Linux distribution, and kernel;
- SSD model, interface, filesystem, and available space;
- exact K3 Flight release and model revision;
- prompt length, generated tokens, prefill, decode, and peak memory;
- whether the run was cold, warm, resumed, or interrupted;
- logs sufficient to reproduce the result, with private paths and data removed.

Controlled negative results are welcome. They tell us where the actual hardware boundary is.

## Follow the flight

If this changed what you thought could run locally, **star this repository**.

[Watch the repository](https://github.com/onetoken-oss/K3Flight/subscription) for release builds, new model adaptations, benchmark updates, and the upcoming macOS preview. Once the binary is live, independent runs submitted through [GitHub Issues](https://github.com/onetoken-oss/K3Flight/issues) will become the public hardware matrix.

## Attribution and licenses

Kimi K3 is developed by Moonshot AI and distributed under the Kimi K3 License. A copy is included at [licenses/KIMI-K3-LICENSE.txt](licenses/KIMI-K3-LICENSE.txt) for reference.

K3 Flight and cPilot are independent projects by the cPilot team. They are not affiliated with, sponsored by, or endorsed by Moonshot AI.

The K3 Flight executable is governed by [BINARY-LICENSE.md](BINARY-LICENSE.md). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for attribution details.
