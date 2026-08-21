<a id="readme-top"></a>

[![](https://dcbadge.limes.pink/api/server/EwKE8KBDqD)](https://discord.gg/EwKE8KBDqD)
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Dynamic TOML Badge][version-shield]][version-url]
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/diogogo)

# TTS Audio Suite v5.8.3

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/diogogo)

*Universal multi-engine TTS extension for ComfyUI - evolved from the original [ChatterBox Voice project](https://github.com/diodiogod/ComfyUI_ChatterBox_SRT_Voice).*

<div align="center">
  <img src="images/AllNodesShowcase.jpg" alt="TTS Audio Suite Nodes Showcase" />
</div>

A comprehensive ComfyUI extension providing unified Text-to-Speech, Voice Conversion, Audio Editing, and integrated RVC model training through multiple engines including ChatterboxTTS, DramaBox, F5-TTS, Higgs Audio 2, Higgs Audio v3, Step Audio EditX, MOSS-TTS, Echo-TTS, and RVC (Real-time Voice Conversion), with modular architecture designed for extensibility, runtime isolation for fragile legacy stacks, and a modern Transformers 5 main environment.

Subtitle workflows are still a core focus: the suite can transcribe to SRT, rebuild subtitles from edited transcripts, or estimate fresh SRT timing from plain text using the same advanced readability rules, while preserving project control tags for downstream TTS.

<!-- ENGINE_COMPARISON_START -->

## Quick Engine Comparison — 19 Engines

| Engine | Languages | Size | Key Features |
|--------|-----------|------|--------------|
| **F5-TTS** | 🇺🇸​🇩🇪​🇪🇸​🇫🇷​🇮🇹​🇯🇵 +4 | ~1.2GB each | Targeted Word/Speech Editing, Speed control |
| **ChatterBox** | 🇺🇸​🇩🇪​🇫🇷​🇮🇹​🇯🇵​🇰🇷 +4 | ~4.3GB | Expressiveness slider |
| **ChatterBox 23L** | 🌐 24 languages | ~4.3GB | V1, V2, and V3 official checkpoints |
| **VibeVoice** | 🇺🇸​🇨🇳​🇩🇪​🇪🇸​🇫🇷​🇮🇹 +21 | 5.4GB / 18GB | 90-min long-form, Native 4-speaker (Base models) |
| **Higgs Audio 2** | 🇺🇸​🇨🇳​🇩🇪​🇪🇸​🇰🇷 | ~9GB | 3 multi-speaker, CUDA graphs (55+ tokens/sec) |
| **Higgs Audio v3** | 🌐 100+ languages | ~8GB | Native inline emotion/style/prosody/SFX tags |
| **IndexTTS 2 / 2.5** | 🇺🇸​🇨🇳​🇪🇸​🇯🇵​🇸🇦 | ~4.7GB / ~5.49GB | Emotion Control: 8 vectors, Text as reference |
| **CosyVoice3** | 🇺🇸​🇨🇳​🇯🇵​🇰🇷 | ~5.4GB | Paralinguistic tags |
| **Qwen3-TTS** | 🇺🇸​🇨🇳​🇩🇪​🇪🇸​🇫🇷​🇮🇹 +4 | ~3-6GB | Voice design, ASR (Automatic Speech Recognition) |
| **Granite ASR** | 🇺🇸​🇩🇪​🇪🇸​🇫🇷​🇯🇵​🇵🇹 | ~4.6GB | Native speaker attribution / diarization (plus model variant), Native word-level timestamps (plus model variant) |
| **Step Audio EditX** | 🇺🇸​🇨🇳​🇯🇵​🇰🇷 | ~7GB | Second Pass Speech Editing Node: 14 emotions, 32 speaking styles |
| **Echo-TTS** | 🇺🇸 | ~5.3GB + ~1.8GB | Diffusion-based (~30s best), Force Speaker KV (speaker drift control) |
| **Fish Audio S2 Pro** | 🌐 80+ languages | ~10.3GB / ~8.0GB | Free-form sub-word emotion/prosody tags, Native multi-speaker and multi-turn dialogue with dynamic speaker references |
| **Dots TTS** | 🇺🇸​🇨🇳​🇩🇪​🇪🇸​🇫🇷​🇮🇹 +13 | ~6GB | Official auto language detect / language control, SOAR and MeanFlow distilled variants |
| **DramaBox** | 🇺🇸 | ~16.4GB | Expressive scene prompting and stage directions, Native and SRT-aware duration targeting |
| **OmniVoice** | 🌐 600+ languages | ~3.7GB | Inline non-verbal tags and pronunciation overrides, Reference-free voice design |
| **MOSS-TTS** | 🇺🇸​🇨🇳​🇩🇪​🇪🇸​🇫🇷​🇮🇹 +18 | ~8.5GB tokenizer + ~6.1GB/17GB/18GB model | Reference-free voice design with MOSS-VoiceGenerator, Native 1-5 speaker TTSD dialogue |
| **MOSS-SoundEffect v2** | 🇺🇸​🇨🇳 | ~11.2GB | Durations up to 30 seconds, Native negative prompting, CFG, flow shift, and diffusion-step controls |
| **RVC** | 🌐 Any | 100-300MB | Real-time VC, Integrated training workflow |

📊 **[Full comparison tables →](docs/ENGINE_COMPARISON.md)** | **[Language matrix →](docs/LANGUAGE_SUPPORT.md)** | **[Feature matrix →](docs/FEATURE_COMPARISON.md)** | **[Model download sources →](docs/MODEL_DOWNLOAD_SOURCES.md)** | **[Model folder layouts →](docs/MODEL_LAYOUTS.md)**

*Note: These tables are generated automatically from source: [tts_audio_suite_engines.yaml](docs/Dev%20reports/tts_audio_suite_engines.yaml)*

<!-- ENGINE_COMPARISON_END -->

## 🚀 Project Evolution Timeline

```
🎭 ChatterBox Voice Era                     🌟 Multi-Engine Era
|                                                      |        
v1.0 ───────────► v1.1 ────────► v2.0 ──────────► v3.0 ─────────┐
Jun 25            Jun 25         Jun 25           Jul 25        │
│                 │              │                │             │
Foundation        SRT            Modular          F5-TTS +      │
ChatterBox        Subtitles      Structure        Audio         │
Voice Cloning     Timing Node    Refactor         Analyzer      │
                                                                ▼
v3.4 ◄──────────────── v3.2 ◄──────────────── v3.1 ◄────────────┘
Jul 25                 Jul 25                 Jul 25             
│                      │                      │                  
Language               Pause                  Character          
Switching              Tags                   Switching          
[German:Bob]           [pause:1s]             [Alice]            
│                                                  
│         ⚙️ TTS Audio Suite Era                                
▼         |                                   
v4.0 ──────────► v4.3 ──────────► v4.4 ────────► v4.5 ──────────┐
Aug 25           Aug 25           Aug 25         Aug 25         │
│                │                │              │              │
BREAKING!        RVC +            Silent         Higgs Audio 2  │
Project          Voice            Speech         New TTS Engine │
Renamed          Conversion       Analyzer       Voice Cloning  │
TTS Audio Suite  + Streaming                                    │
                                                                ▼
v4.9 ◄─────────────── v4.8 ◄────────────────── v4.6 ◄───────────┘
Sep 25                Sep 25                    Aug 25
│                     │                         │
IndexTTS-2            Chatterbox                VibeVoice
Emotion               Multilingual              New TTS Engine
Control               Official (23-lang)        90min Generation
│
│             🎨 Inline Editor Tags Era
▼                            |
v4.12 ──────────────► v4.15 ────────────► v4.16 ───────────────┐
Oct 25                Dez 25              Dez 25               │
│                     │                   │                    │
Per-Seg Parameter     Step Audio EditX    CosyVoice3           │
Switching [seed:24]   Inline Edit tags    TTS + VC             │
                      <laughter:2>                             │
                                                               ▼
v4.24◄─────────────── v4.22 ◄─────────────── v4.19 ◄───────────┘
Mar 26                Mar 26                 Jan 26
│                     │                      │
Text to SRT           Echo-TTS               Qwen3-TTS
Builder               English TTS      TTS + ASR + VoiceDesign
|                                          
|─── 🎓 Training Support Era     🧱 Runtime Isolation T5 Era
▼                                      |
v4.25 ──────────────► v4.26 ────────────► v5.00 ───────────────┐
Apr 26                May 26              Jun 26               │
│                     │                   │                    │
RVC                   MOSS-TTS            Transformers 5       │
Model Training                            Higgs Audio v3 TTS   │
                                                               │
                                                               ▼
v5.3 ◄─────────────── v5.2 ◄─────────────── v5.1 ◄─────────────┘
Jun 26                 Mar 26                 Jan 26
│                      │                      │
Native SRT Duration    OmniVoice TTS          Dots TTS
Granite ASR
Visual Tag Builder
│
▼
v5.4 ───────────────────────────────► v5.5
Jul 26                                  Jul 26
│                                       │
Fish Audio S2 Pro                       MOSS-TTS v1.5
IndexTTS-2 Emotion Blending              Sound Effects
Faster Tag Editor                       Voice Designer
                                        Character Alias Manager

```

## 🧩 Adding New Engines

Want to add support for a new TTS engine, Voice Changer, ASR, or special audio model?

Start with the **[New Engine Guide Hub](docs/New%20Engines%20Guides/README.md)**. It is written for users guiding an LLM through the process: first research the official model, then check existing ComfyUI implementations, decide scope, implement in the suite architecture, and run the parity checklist before PR review. For TTS engines, Unified TTS Text and Unified SRT TTS are a required pair.

<details>
<summary><h2>📋 Table of Contents</h2></summary>

- [🧩 Adding New Engines](#-adding-new-engines)
- [🎥 Demo Videos](#-demo-videos)
- [Features](#features)
- [What's New in this Project?](#whats-new-in-this-project)
  - [SRT Timing and TTS Node](#srt-timing-and-tts-node)
  - [Runtime Isolation + Transformers 5 Main Environment](#runtime-isolation--transformers-5-main-environment)
  - [F5-TTS Integration and Audio Analyzer](#f5-tts-integration-and-audio-analyzer)
  - [Silent Speech Analyzer](#silent-speech-analyzer)
  - [Higgs Audio 2 Voice Cloning](#higgs-audio-2-voice-cloning)
  - [Higgs Audio v3 Native Inline Tags and Voice Cloning](#higgs-audio-v3-native-inline-tags-and-voice-cloning)
  - [VibeVoice Long-Form Generation](#vibevoice-long-form-generation)
  - [Character and Narrator Switching](#character-and-narrator-switching)
  - [Language Switching with Bracket Syntax](#language-switching-with-bracket-syntax)
  - [Iterative Voice Conversion](#iterative-voice-conversion)
  - [RVC Voice Conversion Integration](#rvc-voice-conversion-integration)
  - [RVC Model Training](#rvc-model-training)
  - [Pause Tags System](#pause-tags-system)
  - [Multi-language ChatterBox Community Models](#multi-language-chatterbox-community-models)
  - [ChatterBox Multilingual TTS (Official 23-Lang)](#chatterbox-multilingual-tts-official-23-lang)
  - [Universal Streaming Architecture](#universal-streaming-architecture)
  - [IndexTTS-2 With Emotion Control](#indextts-2-with-emotion-control)
  - [Step Audio EditX - LLM Audio Editing](#step-audio-editx---llm-audio-editing)
  - [CosyVoice3 Multilingual Voice Cloning](#cosyvoice3-multilingual-voice-cloning)
  - [Qwen3-TTS - 4 Model Types with Text-to-Voice Design](#qwen3-tts---4-model-types-with-text-to-voice-design)
  - [OmniVoice + Visual Tag Builder](#omnivoice--visual-tag-builder)
  - [Echo-TTS Voice Cloning](#echo-tts-voice-cloning)
  - [Phoneme Text Normalizer](#phoneme-text-normalizer)
  - [Multiline TTS Tag Editor and Per-Segment Parameter Switching](#multiline-tts-tag-editor-and-per-segment-parameter-switching)
- [🚀 Quick Start](#-quick-start)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installation Methods](#installation-methods)
  - [Troubleshooting Dependency Issues](#troubleshooting-dependency-issues)
  - [Updating the Node](#updating-the-node)
- [📁 Example Workflows](#-example-workflows)
- [License](#license)
- [Credits](#credits)
- [🔗 Links](#-links)

</details>

## 🎥 Demo Videos

<div align="center">
  <a href="https://youtu.be/aHz1mQ2bvEY">
    <img src="https://img.youtube.com/vi/aHz1mQ2bvEY/maxresdefault.jpg" width="400" alt="ChatterBox SRT Voice v3.2 - F5-TTS Integration & Features Overview">
  </a>
  <br>
  <strong><a href="https://youtu.be/aHz1mQ2bvEY">▶️ v3.2 Features Overview (20min) - F5-TTS Integration, Speech Editor & More!</a></strong>
</div>

<br>

<div align="center">
  <a href="https://youtu.be/VyOawMrCB1g?si=7BubljRhsudGqG3s">
    <img src="https://img.youtube.com/vi/VyOawMrCB1g/maxresdefault.jpg" width="400" alt="ChatterBox SRT Voice Demo">
  </a>
  <br>
  <strong><a href="https://youtu.be/VyOawMrCB1g?si=7BubljRhsudGqG3s">▶️ Original Demo - SRT Timing & Basic Features</a></strong>
</div>

## Features

- 🎤 **Multi-Engine TTS**
- 🎨 **Voice Designer** → Create reusable voices with compatible Qwen3-TTS, MOSS, and OmniVoice engines
- 🌩️ **Sound Effects** → **[📖 Sound Effects Guide](docs/SOUND_EFFECTS_GUIDE.md)**
- 🔄 **Voice Conversion**
- ✏️ **ASR Transcription**
- 📺 **Text to SRT Builder**
- 🎓 **Integrated Model Training**
- 🎨 **Audio Post-Processing** → **[📖 Inline Edit Tags Guide](docs/INLINE_EDIT_TAGS_USER_GUIDE.md)**
- 🎭 **Character and Language Switching** → **[📖 Character Switching Guide](docs/CHARACTER_SWITCHING_GUIDE.md)**
- 📐 **Visual Tag Builder** → Preset-driven visual tag and attribute assembly for OmniVoice and other tag-based text workflows
- 🏷️ **Multiline TTS Tag Editor and Per-Segment Parameter Switching** → **[📖 Per-Segment Parameters](docs/PARAMETER_SWITCHING_GUIDE.md)** | **[📖 Multiline Tag Editor Guide](docs/MULTILINE_TTS_TAG_EDITOR_GUIDE.md)** | **[📖 OmniVoice Tags Guide](docs/OMNIVOICE_TAGS_GUIDE.md)**
- 📝 **Intelligent Text Chunking** → **[📖 Text Chunking Guide](docs/TEXT_CHUNKING_GUIDE.md)**
- 🤐 **Vocal/Noise Removal** → **[📖 Complete Guide](docs/VOCAL_REMOVAL_GUIDE.md)**
- 🌊 **Audio Wave Analyzer** → **[📖 Complete Guide](docs/🌊_Audio_Wave_Analyzer-Complete_User_Guide.md)**

<div align="right"><a href="#-table-of-contents">Back to top</a></div>

<summary><h2>What's New in this Project? (click to expand)</h2></summary>

<details>
<summary><h3>SRT Timing and TTS Node</h3></summary>

<img title="" src="images/srt.png" alt="SRT Node Screenshot" width="500" data-align="center">

The **"ChatterBox SRT Voice TTS"** node allows TTS generation by processing SRT content (SubRip Subtitle) files, ensuring precise timing and synchronization with your audio.

**Key SRT Features:**

* **SRT style Processing**: Uses SRT style to generate TTS, aligning audio with subtitle timings
* **`smart_natural` Timing Mode**: Intelligent shifting logic that prevents overlaps and ensures natural speech flow
* **`Adjusted_SRT` Output**: Provides actual timings for generated audio for accurate post-processing
* **Segment-Level Caching**: Only regenerates modified segments, significantly speeding up workflows

For comprehensive technical information, refer to the [SRT_IMPLEMENTATION.md](docs/Dev%20reports/SRT_IMPLEMENTATION.md) file.

</details>

<details>
<summary><h3>Runtime Isolation + Transformers 5 Main Environment</h3></summary>

This is the new architectural baseline for the suite.

* **Main environment moved forward**: the primary ComfyUI environment is now meant to run on **Transformers 5**
* **Isolation for fragile engines**: engines that still behave better on the older stack can use **shared** or **dedicated** legacy runtimes instead of forcing the whole suite backward
* **Cleaner engine strategy**: modern engines such as **Higgs Audio v3**, **Step Audio EditX**, **MOSS-TTS**, and other compatible stacks can stay native in the main environment
* **Less dependency deadlock**: adding new engines no longer has to mean globally freezing the entire project to one old Transformers version

This matters because the suite now has a clearer split:

- **Main environment** for engines that are healthy on the current stack
- **Isolated runtimes** for engines that are still strategically important but fragile on the modern stack

</details>

<details>
<summary><h3>DramaBox Expressive TTS and Native Duration Targeting</h3></summary>

**NEW**: DramaBox is integrated as an English expressive TTS engine for both
**Unified TTS Text** and **Unified SRT TTS**.

* **Scene-driven prompting**: quoted dialogue, narration, stage directions,
  laughter, sighs, pauses, and delivery transitions
* **Voice cloning**: optional reference audio with a configurable reference
  window
* **Native duration targeting**: explicit generation duration and automatic SRT
  subtitle-duration targeting before final timing correction
* **Generation controls**: CFG, negative prompt, STG, rescale, duration
  multiplier, seed, and optional Perth watermark
* **Segment controls**: character switching, pause tags, prompt templates, and
  parameter switching for supported generation settings
* **Memory options**: fast, staged, and sequential strategies, optional official
  FP8-cast transformer storage, and optional `torch.compile`
* **Generation diagnostics**: conservative near-silence detection in console
  output, TTS generation information, and SRT timing reports
* **LoRA training**: official DramaBox audio-branch IC-LoRA training through
  the unified training nodes, with normalized manifest/index input and managed
  adapter export

**Important limitations:**

- The official model is English-only and can be sensitive to reference audio,
  reference duration, requested generation duration, guidance settings, and seed.
- Fast mode uses roughly 24GB VRAM. Staged/sequential memory strategies and FP8
  are experimental options for reducing peak memory.
- DramaBox uses the conditional LTX-2 Community License.

See the **[DramaBox Prompting Guide](docs/DRAMABOX_PROMPTING_GUIDE.md)** for
prompt syntax, controls, memory modes, duration behavior, and examples.
See the **[DramaBox LoRA Training Guide](docs/DRAMABOX_LORA_GUIDE.md)** for
dataset formats, training workflow, adapter loading, and CPU-safe preflight.

</details>

<details>
<summary><h3>F5-TTS Integration and Audio Analyzer</h3></summary>

<img title="" src="images/waveanalgif.gif" alt="Audio Wave gif" width="500" data-align="center">

* **F5-TTS Voice Synthesis**: High-quality voice cloning with reference audio + text
* **Audio Wave Analyzer**: Interactive waveform visualization for precise timing extraction
* **Multi-language Support**: English, German, Spanish, French, Japanese models
* **Speech Editing Workflows**: Advanced F5-TTS editing capabilities

</details>

<details>
<summary><h3>Silent Speech Analyzer</h3></summary>

**NEW in v4.4.0**: Video analysis and mouth movement detection for silent video processing!

* **Mouth Movement Analysis**: Real-time detection of mouth shapes and movements from video
* **Experimental Viseme Classification**: Approximate detection of vowels (A, E, I, O, U) and consonants (B, F, M, etc.) - results are experimental approximations, not precise
* **3-Level Analysis System**:
  - Frame-level mouth movement detection
  - Syllable grouping with temporal analysis  
  - Word prediction using CMU Pronouncing Dictionary (135K+ words)
* **Base SRT Generation**: Creates timing-focused SRT files with start/end speech timing as foundation for user editing
* **MediaPipe Integration**: Production-ready analysis using Google's MediaPipe framework
* **Visual Feedback**: Preview videos with overlaid detection results
* **Automatic Phonetic Placeholders**: Word predictions provide phonetically-sensible placeholders, but phrases require user editing for meaningful content
* **TTS Integration**: SRT output designed for use with TTS SRT nodes after manual content editing

**Perfect for:**

- Creating base timing templates from silent video footage
- Animation and VFX reference timing
- Foundation for manual subtitle creation

**Important Notes**: 

- OpenSeeFace provider is experimental and not recommended for production use - MediaPipe is the stable solution
- Viseme detection is experimental approximation - expect to manually edit both timing and content
- Generated text placeholders are phonetic suggestions, not meaningful sentences

</details>

<details>
<summary><h3>Higgs Audio 2 Voice Cloning</h3></summary>

**NEW in v4.5.0**: State-of-the-art voice cloning technology with advanced neural voice replication!

* **High-Quality Voice Cloning**: Clone any voice from 30+ second reference audio with exceptional fidelity
* **Multi-Speaker Conversations**: Native support for character switching within conversations
* **Real-Time Processing**: Generate speech in cloned voices with minimal latency
* **Universal Integration**: Works seamlessly with existing TTS Text and TTS SRT nodes

**Key Capabilities:**

- **Voice Cloning from Reference Audio**: Upload any 30+ second audio file for voice replication
- **Multi-Language Support**: English (tested), with potential support for Chinese, Korean, German, and Spanish (based on model training data)
- **Character Switching**: Use `[CharacterName]` syntax for multi-speaker dialogues
- **Advanced Generation Control**: Fine-tune temperature, top-p, top-k, and token limits
- **Smart Chunking**: Automatic handling of unlimited text length with seamless audio combination
- **Intelligent Caching**: Instant regeneration of previously processed content

**Technical Features:**

- **Modular Architecture**: Clean integration with unified TTS system
- **Automatic Model Management**: Downloads and organizes models in `ComfyUI/models/TTS/HiggsAudio/` structure
- **Progress Tracking**: Real-time generation feedback with tqdm progress bars
- **Voice Reference Discovery**: Flexible voice file management system

**Quick Start:**

1. Add `Higgs Audio Engine` node to configure voice cloning parameters
2. Connect to `TTS Text` or `TTS SRT` node for generation
3. Specify reference audio file or use voice discovery system
4. Generate high-quality cloned speech with automatic optimization

**Perfect for:**

- Voice acting and character dialogue creation
- Audiobook narration with consistent voice characteristics
- Multi-speaker content with distinct voice personalities
- Professional voice replication for content creation

</details>

<details>
<summary><h3>Higgs Audio v3 Native Inline Tags and Voice Cloning</h3></summary>

**NEW**: Higgs Audio v3 is now integrated as a native main-environment engine on the modern Transformers 5 stack.

* **Native inline controls**: official Higgs tags like `<|emotion:amusement|>`, `<|style:whispering|>`, `<|prosody:pause|>`, and `<|sfx:laughter|>`
* **Alias convenience support**: the suite also accepts `<emotion:amusement>`-style input and normalizes it internally to the official Higgs format
* **Zero-shot voice cloning**: reference audio cloning works in both **TTS Text** and **TTS SRT**
* **Unified character workflows**: supports narrator/character switching, SRT timing, pause tags, caching, and multiline tag editor integration
* **Engine-aware inline editor**: the multiline editor now has a dedicated `Higgs Audio v3` inline tags mode instead of pretending all inline systems are Step Audio EditX

**Important behavior note:**

- Higgs Audio v3 does **not** use an explicit language parameter in the official TTS flow
- language is inferred primarily from the text prompt and reinforced by reference context when available

**Good fit for:**

- expressive TTS with official inline emotion/style/prosody/SFX controls
- multilingual zero-shot cloning
- character-driven SRT generation without leaving the unified pipeline

</details>

<details>
<summary><h3>VibeVoice Long-Form Generation</h3></summary>

- **Custom Character Switching**: Use `[Alice]`, `[Bob]` character tags with voice files from the voices folder - supports unlimited characters with pause tags and per-character control
- **Native Multi-Speaker**: Efficient single-pass generation supporting both `[Character]` tag auto-conversion and manual "Speaker 1: Hello" format for up to 4 speakers  
- **Voice File Integration**: Seamless compatibility with existing voice folder structure and Character Voices node
- **Smart Chunking**: Automatic text chunking with configurable time-based limits for memory efficiency
- **Priority System**: Connected speaker2/3/4_voice inputs override character aliases with intelligent warnings

**Technical Features:**

- **Model Support**: Microsoft vibevoice-1.5B/7B (official models for English/Chinese) + vibevoice-hindi-1.5B/7B (community Hindi finetunes) + **KugelAudio-0-Open** and **kugel-2** (Kugel 7B variants)
- **Language Detection**: VibeVoice/KugelAudio automatically detect language from input text and reference audio - **no language parameters are used**
- **Intelligent Caching**: Advanced caching system with mode-aware invalidation for instant regeneration
- **Memory Optimization**: Configurable chunking system balances quality with memory usage
- **Unified Architecture**: Seamless integration with existing TTS Text and TTS SRT nodes

**Quick Start:**

1. Add `⚙️ VibeVoice Engine` node to configure model and multi-speaker mode  
2. Connect to `TTS Text` or `TTS SRT` node for generation
3. Choose between Custom Character Switching (recommended) or Native Multi-Speaker mode
4. Generate long-form content with automatic voice cloning from your voices folder

**Isolation note:** On current ComfyUI stacks, **Kugel/VibeVoice is usually meant to run with `⚠️ Runtime Isolation = Shared Runtime`**. If you force `Main Environment`, you are opting back into the dependency-conflict path.

**Perfect for:**

- Long-form audiobooks and narration with consistent voice quality
- Multi-character dialogue and conversations with distinct speaker voices  
- Extended podcast-style content with natural speech patterns
- Educational content requiring extended generation without quality degradation

</details>

<details>
<summary><h3>Character and Narrator Switching</h3></summary>

**NEW in v3.1.0**: Seamless character switching for both F5TTS and ChatterBox engines!

* **Multi-Character Support**: Use `[CharacterName]` tags to switch between different voices
* **Voice Folder Integration**: Organized character voice management system
* **🏷️ Character Aliases**: User-friendly alias system - use `[Alice]` instead of `[female_01]` with `#character_alias_map.txt`
* **Robust Fallback**: Graceful handling when characters not found (no errors!)
* **Universal Compatibility**: Works with both F5TTS and ChatterBox TTS engines
* **SRT Integration**: Character switching within subtitle timing
* **Backward Compatible**: Existing workflows work unchanged

**📖 [Complete Character Switching Guide](docs/CHARACTER_SWITCHING_GUIDE.md)**

Example usage:

```
Hello! This is the narrator speaking.
[Alice] Hi there! I'm Alice, nice to meet you.
[Bob] And I'm Bob! Great to meet you both.
Back to the narrator for the conclusion.
```

</details>

<details>
<summary><h3>Language Switching with Bracket Syntax</h3></summary>

**NEW in v3.4.0**: Seamless language switching using simple bracket notation!

* **Language Code Syntax**: Use `[language:character]` tags to switch languages and models automatically
* **Smart Model Loading**: Automatically loads correct language models (F5-DE, F5-FR, German, Norwegian, etc.)
* **Flexible Aliases** *(v3.4.3)*: Support for `[German:Alice]`, `[Brazil:Bob]`, `[USA:]`, `[Portugal:]` - no need to remember language codes!
* **Standard Format**: Also supports traditional `[fr:Alice]`, `[de:Bob]`, or `[es:]` (language only) patterns
* **Character Integration**: Combines perfectly with character switching and alias system
* **Performance Optimized**: Language groups processed efficiently to minimize model switching
* **Alias Support**: Language defaults work with character alias system

**Supported Languages:**

* **F5-TTS**: English (en), German (de), Spanish (es), French (fr), Italian (it), Japanese (jp), Thai (th), Portuguese (pt), Hindi (hi)
* **ChatterBox**: English (en), German (de, de-best, de-expressive), Italian (it), French (fr), Russian (ru), Armenian (hy), Georgian (ka), Japanese (ja), Korean (ko), Norwegian (no/nb/nn)
* **ChatterBox 23-Lang** & **Qwen3-TTS**: Use explicit language parameters - language tags directly control output
* **VibeVoice/KugelAudio**: Do NOT use language parameters - auto-detect from text (language tags have no effect on these models)

Example usage:

```
Hello! This is English text with the default model.
[de:Alice] Hallo! Ich spreche Deutsch mit Alice's Stimme.
[fr:] Bonjour! Je parle français avec la voix du narrateur.
[es:Bob] ¡Hola! Soy Bob hablando en español.
Back to English with the original model.
```

**Advanced SRT Integration:**

```srt
1
00:00:01,000 --> 00:00:04,000
Hello! Welcome to our multilingual show.

2
00:00:04,500 --> 00:00:08,000
[de:female_01] Willkommen zu unserer mehrsprachigen Show!

3
00:00:08,500 --> 00:00:12,000
[fr:] Bienvenue à notre émission multilingue!
```

</details>

<details>
<summary><h3>Iterative Voice Conversion</h3></summary>

**NEW**: Progressive voice refinement with intelligent caching for instant experimentation!

* **Refinement Passes**: Multiple conversion iterations (1-30, recommended 1-5)
* **Smart Caching**: Results cached up to 5 iterations - change from 5→3→4 passes instantly
* **Progressive Quality**: Each pass refines output to sound more like target voice

**How it works:**

1. Add **"🔄 ChatterBox Voice Conversion"** node
2. Connect source audio (voice to convert)
3. Connect target audio (voice style to copy)
4. Configure refinement settings:
   - **Refinement Passes**: Number of conversion iterations (1-30, recommended 1-5)
   - Each pass refines the output to sound more like the target
   - **Smart Caching**: Results cached up to 5 iterations for instant experimentation

**Intelligent caching examples:**

- Run **3 passes** → caches iterations 1, 2, 3
- Change to **5 passes** → resumes from cached 3, runs 4, 5
- Change to **2 passes** → returns cached iteration 2 instantly
- Change to **4 passes** → resumes from cached 3, runs 4

**Practical tip**: Start with 1 pass, then test 2-5 passes to find the sweet spot for your audio. More passes can improve voice similarity, but there is no universal best value.

</details>

<details>
<summary><h3>RVC Voice Conversion Integration</h3></summary>

**NEW in v4.1.0**: Professional-grade Real-time Voice Conversion with .pth character models!

* **RVC Character Models**: Load .pth voice models with 🎭 Load RVC Character Model node
* **Unified Voice Changer**: Full RVC integration in the Voice Changer node
* **Iterative Refinement**: 1-30 passes with smart caching (like ChatterBox)
* **Enhanced Quality**: Automatic .index file loading for improved voice similarity
* **Auto-Download**: Required models download from official sources automatically
* **Cache Intelligence**: Skip recomputation - change 5→3→4 passes instantly
* **Neural Network Quality**: High-quality voice conversion using trained RVC models

📖 **See [Model folder layouts](docs/MODEL_LAYOUTS.md#rvc) for detailed setup paths**

**How it works:**

1. Load your .pth RVC model with 🎭 Load RVC Character Model
2. Connect to 🔄 Voice Changer, select "RVC" engine
3. Process with iterative refinement for progressive quality improvement
4. Results cached for instant experimentation with different pass counts

</details>

<details>
<summary><h3>RVC Model Training</h3></summary>

**NEW**: Integrated RVC training inside the suite, using the same unified node style as the rest of the project instead of a detached external workflow.

* **Unified Entry Point**: `🎓 Model Training` accepts `TTS_ENGINE` and routes by engine type
* **RVC Dataset Pipeline**: `📦 RVC Dataset Prep` handles dataset path/zip/folder upload or direct audio input, slicing, HuBERT features, F0 extraction, and reusable prep caches
* **RVC Training Config**: `🎛️ RVC Training Config` exposes practical training controls with tooltip guidance instead of raw upstream garbage
* **Live Dashboard**: Compact in-node dashboard for epoch progress, ETA, speed, recent loss trend, and training health checks
* **Resume + Continue**: Supports exact resume from saved training checkpoints and warm-start `continue_from` for training further from a finished RVC model/artifact
* **Safe Interrupts**: ComfyUI interrupt now saves resumable state at a safe boundary when possible
* **Auto-Downloads**: Required HuBERT, RMVPE, and `pretrained_v2` RVC training init checkpoints are auto-managed

**Current scope:**

1. RVC is the only engine with training support right now.
2. The architecture is unified on purpose so Qwen or other future engines can plug into the same training entry point later.

**Typical flow:**

1. Build `⚙️ RVC Engine`
2. Prepare data with `📦 RVC Dataset Prep`
3. Set parameters with `🎛️ RVC Training Config`
4. Train with `🎓 Model Training`
5. Load the resulting model with `🎭 Load RVC Character Model`

**Important notes:**

- Training job logs, resumable checkpoints, and progress files go under `ComfyUI/output/tts_audio_suite_training/rvc/`
- Final trained `.pth` models and `.index` files go under `ComfyUI/models/TTS/RVC/`
- `save_best_model` is only a low-loss inference candidate, not a magical quality oracle. You still need to listen.

</details>

<details>
<summary><h3>Pause Tags System</h3></summary>

**NEW**: Intelligent pause insertion for natural speech timing control!

* **Smart Pause Syntax**: Use pause tags anywhere in your text with multiple aliases
* **Flexible Duration Formats**: 
  - Seconds: `[pause:1.5]`, `[wait:2s]`, `[stop:3]`
  - Milliseconds: `[pause:500ms]`, `[wait:1200ms]`, `[stop:800ms]`
  - Supported aliases: `pause`, `wait`, `stop` (all work identically)
* **Character Integration**: Pause tags work seamlessly with character switching
* **Intelligent Caching**: Changing pause durations won't regenerate unchanged text segments
* **Universal Support**: Works across all TTS nodes (ChatterBox, F5-TTS, SRT)
* **Automatic Processing**: No additional parameters needed - just add tags to your text

Example usage:

```
Welcome to our show! [pause:1s] Today we'll discuss exciting topics.
[Alice] I'm really excited! [wait:500ms] This will be great.
[stop:2] Let's get started with the main content.
```

</details>

<details>
<summary><h3>Multi-language ChatterBox Community Models</h3></summary>

**NEW in v4.6.29**: ChatterBox TTS now supports 11 languages with community-finetuned models and automatic model management!

**Supported Languages:**

- 🇺🇸 **English**: Original ResembleAI model (default)
- 🇩🇪 **German**: Three variants available:
  - Standard German (stlohrey/chatterbox_de)
  - German Best (havok2) - Multi-speaker hybrid, best quality
  - German Expressive (SebastianBodza) - Emotion control with `<haha>`, `<wow>` tags
- 🇮🇹 **Italian**: Bilingual Italian/English model with `[it]` prefix for Italian text
- 🇫🇷 **French**: 1,400 hours Emilia dataset with zero-shot voice cloning
- 🇷🇺 **Russian**: Complete model with training artifacts
- 🇦🇲 **Armenian**: Complete model with unique architecture
- 🇬🇪 **Georgian**: Complete model with specialized features
- 🇯🇵 **Japanese**: Uses shared English components with Japanese text processing
- 🇰🇷 **Korean**: Uses shared English components with Korean text processing
- 🇳🇴 **Norwegian**: Norwegian ChatterBox model (akhbar/chatterbox-tts-norwegian)

**Key Features:**

* **Language Dropdown**: Simple language selection in all ChatterBox nodes
* **Auto-Download**: Models download automatically on first use (~1GB per language)
* **Local Priority**: Prefers locally installed models over downloads for offline use
* **Safetensors Support**: Modern format support for newer language models
* **Seamless Integration**: Works with existing workflows - just select your language

**Usage**: Select language from dropdown → First generation downloads model → Subsequent generations use cached model

</details>

<details>
<summary><h3>ChatterBox Multilingual TTS (Official 23-Lang)</h3></summary>

**NEW in v4.8.0**: Official ResembleAI Chatterbox Multilingual TTS model with native support for 23 languages!

The **Chatterbox Multilingual TTS** (referred to internally as "ChatterBox Official 23-Lang" to distinguish from community models) is ResembleAI's first production-grade open-source TTS model supporting 23 languages out of the box. This is the official successor to the original ChatterBox model with enhanced multilingual capabilities.

**🎯 Key Advantages over Community Models:**

* **Single Unified Model**: One model handles all 23 languages - no model switching required
* **Language Parameter Switching**: Changes language via parameter, not model loading (faster)
* **Zero-Shot Voice Cloning**: Clone any voice with just a few seconds of reference audio across all languages
* **Production-Grade Quality**: Benchmarked against leading closed-source systems like ElevenLabs
* **MIT Licensed**: Fully open-source with commercial usage rights
* **Perth Watermarking**: Built-in responsible AI usage (disabled by default for compatibility)

**🌍 Supported Languages (23 total + Vietnamese community finetune):**

Arabic (ar), Danish (da), German (de), Greek (el), English (en), Spanish (es), Finnish (fi), French (fr), Hebrew (he), Hindi (hi), Italian (it), Japanese (ja), Korean (ko), Malay (ms), Dutch (nl), Norwegian (no), Polish (pl), Portuguese (pt), Russian (ru), Swedish (sv), Swahili (sw), Turkish (tr), Chinese (zh)

**🇻🇳 Vietnamese (Viterbox)**: Community finetune by Dolly AI 23 with expanded Vietnamese tokenization (dolly-vn/viterbox) - select from model version dropdown

**🔧 Fully Integrated Features:**

* ✅ **Character Switching**: Full `[CharacterName]` support with per-character voice references
* ✅ **Language Switching**: `[language:character]` syntax with intelligent parameter switching
* ✅ **Pause Tags**: Complete `[pause:Ns]` support with character voice inheritance  
* ✅ **SRT Processing**: Advanced subtitle timing with overlapping modes and audio assembly
* ✅ **Voice Conversion**: Built-in VC engine supporting all 23 languages
* ✅ **Emotion Control**: Unique exaggeration parameter for expressive speech
* ✅ **Advanced Parameters**: Full control over repetition_penalty, min_p, top_p for fine-tuning
* ✅ **Cache Invalidation**: Proper parameter-based caching for responsive generation

**🆚 vs Community Models:**

| Feature               | Chatterbox Multilingual TTS       | Community Models            |
| --------------------- | --------------------------------- | --------------------------- |
| Languages             | 23 native languages               | 11 finetuned variants       |
| Model Loading         | Single model, parameter switching | Separate model per language |
| Voice Cloning         | Zero-shot across all languages    | Per-model training          |
| Official Support      | ✅ ResembleAI official             | Community maintained        |
| Character Integration | ✅ Full integration                | ✅ Full integration          |
| SRT Support           | ✅ Advanced timing modes           | ✅ Advanced timing modes     |
| Performance           | Optimized single-model            | Multiple model overhead     |

**🎭 Character Example:**

```
[En:Alice] Hello everyone! [De:Hans] Guten Tag! [Es:Maria] ¡Hola! [pause:2s] [En:Alice] That was amazing multilingual switching!
```

This creates seamless multilingual character switching with proper voice inheritance and pause support - all within a single model.

**🎭 NEW: v2 Special Emotion & Sound Tokens** 🚧 *Experimental*

ChatterBox v2 vocabulary includes 30+ special tokens for emotions, sounds, and vocal effects. **Note: These are experimental - tokens may produce minimal or no audible effects.** ResembleAI has not officially documented their usage ([see issue #186](https://github.com/resemble-ai/chatterbox/issues/186)).

Try angle brackets `<emotion>` to experiment:

```
[Alice] Hello! <laughter> hahaha. [pause:0.5] <whisper> This might work slightly.
```

**Available v2 Tokens:**

- **Emotions**: `<giggle>`, `<laughter>`, `<sigh>`, `<cry>`, `<gasp>`, `<groan>`
- **Speech Modifiers**: `<whisper>`, `<mumble>`, `<singing>`, `<humming>`
- **Sounds**: `<cough>`, `<sneeze>`, `<sniff>`, `<inhale>`, `<exhale>`
- **And more!** See the **[📖 Complete v2 Special Tokens Guide](docs/CHATTERBOX_V2_SPECIAL_TOKENS.md)** for all 30+ tokens

**Model Version Selection:**

- **v2** (default): Enhanced tokenization with experimental emotion/sound tokens
- **v1**: Original model without special tokens

Both versions fully support character switching, language switching, and pause tags. The v2 special tokens are **experimental with limited effectiveness** - our implementation is ready for when/if ResembleAI improves this feature. The angle bracket syntax `<emotion>` avoids conflicts with character tags `[Name]` and pause tags `[pause:1s]`.

</details>

<details>
<summary><h3>Universal Streaming Architecture</h3></summary>

**NEW in v4.3.0**: Complete architectural overhaul implementing universal streaming system with parallel processing capabilities!

**Key Features:**

* **Universal Streaming Infrastructure**: Unified processing system eliminating engine-specific code complexity
* **Parallel Processing**: Configurable worker-based processing via `batch_size` parameter
* **Thread-Safe Design**: Stateless wrapper architecture eliminates shared state corruption
* **Future-Proof**: New engines require only adapter implementation

**Performance Notes:**

* **Sequential Recommended**: Use `batch_size=0` for optimal performance (sequential processing)
* **Parallel Available**: `batch_size > 1` enables parallel workers but typically slower due to GPU inference characteristics
* **Memory Efficiency**: Improved model sharing prevents memory exhaustion when switching modes

→ **[📖 Read Technical Details](docs/Dev%20reports/POST_V4.2.3_DEVELOPMENT_REVIEW.md)**

</details>

<details>
<summary><h3>IndexTTS 2 / 2.5 With Emotion Control</h3></summary>

**NEW in v4.9.0**: Revolutionary IndexTTS-2 engine with advanced emotion control and dual-source emotion blending!

* **Separate Emotion Inputs**: Connect vectors or Qwen text emotion to `emotion_control` and audio references to `emotion_audio`; both can be used together
* **Dynamic Text Emotion**: AI-powered QwenEmotion analysis with dynamic `{seg}` template processing for contextual per-segment emotions
* **Direct Audio Reference**: Use any audio file on `emotion_audio` as an emotion reference for natural expression
* **Character Voices Integration**: Use Character Voices `opt_narrator` on `emotion_audio`, including per-character `[Character:emotion_ref]` references
* **8-Emotion Vector Control**: Manual precision control over Happy, Angry, Sad, Surprised, Afraid, Disgusted, Calm, and Melancholic emotions
* **Character Tag Emotions**: Per-character audio emotion control using `[Character:emotion_ref]` syntax, blendable with vector/text emotion
* **Emotion Alpha Control**: Fine-tune emotion conditioning from 0.0 to the official 1.0 maximum
* **IndexTTS-2.5 Multilingual Generation**: Explicit Chinese, English, Japanese, Spanish, and Arabic selection
* **Official 2.5 Duration Factor**: `duration_factor` scales the internal semantic feature sequence (`0.5` shorter/faster, `1.0` unchanged, `2.0` longer/slower). It is not natural prosody or exact-duration planning, does not apply to 2.0, and is not used by SRT native-duration targeting
* **Pronunciation Overrides**: Preserve official `<word|pronunciation>` annotations through suite text processing

> **2.0 versus 2.5:** Treat 2.5 as a multilingual/efficiency alternative, not an automatic voice-cloning quality upgrade. In our manual listening, legacy 2.0 preserved speaker resemblance better when transferring a strong emotion from a different reference voice; 2.5 may still be preferable for Japanese, Spanish, Arabic, or cross-lingual generation. Strong external emotion settings can reduce perceived speaker identity, so compare both models for the target voice.

**Key Features:**

- **Emotion Blending**: Audio references and vector/text emotion are blended in IndexTTS-2's latent conditioning space; character tags select segment-local audio references
- **Dynamic Templates**: Use `{seg}` placeholder for contextual emotion analysis (e.g., "Worried parent speaking: {seg}")
- **Universal Compatibility**: Works with existing TTS Text and TTS SRT nodes seamlessly
- **Advanced Caching**: Stable audio content hashing for reliable cache hits across sessions
- **QwenEmotion Integration**: State-of-the-art text emotion analysis with configurable model selection

**Example Usage:**

```text
Welcome to our show! [Alice:happy_sarah] I'm so excited to be here!
[Bob:angry_narrator] That's completely unacceptable behavior.
```

**Perfect for:**

- Multi-character dialogue with individual emotional expressions
- Dynamic storytelling with contextual emotion adaptation
- Professional voice acting with precise emotional control
- Content creation requiring sophisticated emotional nuance

**📖 [Complete IndexTTS-2 Emotion Control Guide](docs/IndexTTS2_Emotion_Control_Guide.md)**

</details>

<details>
<summary><h3>Step Audio EditX - LLM Audio Editing</h3></summary>

**NEW in v4.15**: Revolutionary LLM-based audio post-processing with emotion, style, and paralinguistic control!

* **🎨 Step Audio EditX - Audio Editor Node**: Post-process ANY TTS audio with advanced editing capabilities
* **🗣️ Paralinguistic Effects**: Insert natural sounds - Laughter, Breathing, Sigh, Uhm, Surprise (oh/ah/wa), Confirmation, Question, Dissatisfaction
* **😊 14 Emotion Controls**: happy, sad, angry, excited, calm, fearful, surprised, disgusted, confusion, empathy, embarrass, depressed, coldness, admiration
* **🎭 32 Speaking Styles**: whisper, serious, child, older, girl, pure, sister, sweet, exaggerated, ethereal, generous, recite, act_coy, warm, shy, comfort, authority, chat, radio, soulful, gentle, story, vivid, program, news, advertising, roar, murmur, shout, deeply, loudly, arrogant, friendly
* **⚡ Speed Control**: faster, slower, more_faster, more_slower with multi-iteration support
* **🔊 Voice Restoration**: ChatterBox VC integration to restore original voice resemblance after editing
* **🏷️ Inline Edit Tags**: Apply effects directly in text using `<Laughter:2>`, `<emotion:happy>`, `<style:whisper>` tags
* **🎛️ Multiline Tag Editor Integration**: Tabbed interface with dropdowns for all edit types, iteration sliders, and pipe-separator support

**Key Features:**

- **LLM-Based Processing**: 3B parameter Step-1 model for high-quality audio editing
- **Multi-Language Support**: Mandarin Chinese (primary), English, Sichuanese, Cantonese, Japanese, Korean
- **Iteration Control**: 1-5 iterations per effect for strength adjustment (WARNING: 3+ iterations risk voice degradation)
- **Batch Processing**: Automatically processes all tagged segments efficiently
- **Position-Aware**: Paralinguistic tags insert sounds at exact cursor positions
- **Pipe-Separator Tags**: Combine multiple effects `<Laughter:2|emotion:happy|style:whisper>`
- **Universal Compatibility**: Works with ALL TTS engines - F5-TTS, ChatterBox, Higgs Audio 2, VibeVoice, IndexTTS-2

**Example Usage:**

```text
[Alice] Hello there <Laughter:2> my friend! <emotion:happy>
[Bob] Listen carefully <style:whisper|speed:slower>, this is important.
[Alice] I'm laughing so hard <Laughter:3> <restore>
```

**Perfect for:**

- Adding natural expressiveness to robotic TTS output
- Creating dynamic conversations with varied emotional tones
- Professional voice-over work requiring subtle emotional nuances
- Storytelling with immersive paralinguistic effects

**⚠️ Important Notes:**

- **Language Limitation**: Only supports Mandarin, English, Sichuanese, Cantonese, Japanese, Korean - using other languages will lose accents and distort audio
- **Voice Quality**: 3+ iterations can degrade voice resemblance - use `<restore>` tag to recover original voice character
- **Duration Limits**: Segments must be 0.5s - 30s (split longer segments)

**📖 [Complete Inline Edit Tags Guide](docs/INLINE_EDIT_TAGS_USER_GUIDE.md)**

</details>

<details>
<summary><h3>CosyVoice3 Multilingual Voice Cloning</h3></summary>

**NEW in v4.16**: Alibaba's fast multilingual voice cloning with native paralinguistic tags, instruct mode, and zero-shot voice conversion!

* **⚡ Ultra-Fast Generation**: ~0.05 RTF (20x faster than real-time) - 10s audio in ~0.5s
* **🎵 Native Paralinguistic Tags**: Built-in `<breath>`, `<laughter>`, `<cough>`, `<sigh>`, `<laughing>text</laughing>` - processed during generation → **[📖 Tags Guide](docs/COSYVOICE3_TAGS_GUIDE.md)**
* **🎭 Instruct Mode**: Natural language control - "Speak with a joyful tone" or "Use Cantonese dialect with excitement"
* **🔄 Zero-Shot Voice Conversion**: Built-in VC with iterative refinement (10 passes) and chunking via Voice Changer node
* **🌍 4 Core Languages**: English, Chinese, Japanese, Korean with native language tag support
* **🎤 Zero-Shot Voice Cloning**: Clone any voice from 3-30s reference audio
* **~5.4GB Model**: Efficient 0.5B parameter model with production quality

**Key Features:**

- **Native Tag Support**: 13 paralinguistic effects - `<breath>`, `<laughter>`, `<cough>`, `<sigh>`, `<gasp>`, `<laughing>text</laughing>`, `<strong>text</strong>`
- **Instruct Mode**: Control emotions, dialects, styles via text instructions - no tag syntax needed
- **Fast Voice Conversion**: CosyVoice VC with 10-pass iterative refinement and smart/fixed chunking
- **Character Switching**: Full `[CharacterName]` support with per-character voice references
- **Language Switching**: `[en:]`, `[zh:]`, `[ja:]`, `[ko:]` bracket syntax or native `<|en|>` tags
- **Pause Tags**: Complete `[pause:Ns]` support for natural speech timing
- **SRT Processing**: Advanced subtitle timing with all timing modes
- **Speed Control**: 0.5x to 2.0x speech speed adjustment

**Example Usage:**

```
[Alice] Hello everyone! This is zero-shot voice cloning.
[Bob] 你好！我说普通话。[pause:1s] 还可以说方言。
```

**Instruct Mode Examples:**

```
# Speak with Cantonese dialect
Instruct: 请用广东话表达。

# Speak with excitement
Instruct: 用兴奋的语气说话。
```

**Perfect for:**

- Multilingual content with Chinese dialect support
- Voice cloning with fine emotional control via instructions
- Multi-character conversations across languages
- Professional localization with native accent preservation

</details>

<details>
<summary><h3>Qwen3-TTS - 4 Model Types with Text-to-Voice Design</h3></summary>

**NEW in v4.19**: Alibaba's Qwen3-TTS with 3 distinct TTS model types - CustomVoice presets, dedicated text-to-voice design, and zero-shot voice cloning. The engine's **model** dropdown exposes every checkpoint and marks installed checkpoints with a `local:` prefix. Model-specific controls appear only when they apply.
**NEW**: ✏️ Unified ASR Transcribe support now includes **Qwen3-ASR** and **Granite ASR**, giving the suite a second ASR engine option with optional custom timestamps/SRT for Granite via the reused Qwen forced aligner. Granite `4.1 plus` also adds native speaker diarization and native word timestamps.

**Model Types:**

* **🎭 CustomVoice Model** (0.6B / 1.7B): 9 preset multilingual speakers (Vivian, Serena, Uncle_Fu, Dylan, Eric, Ryan, Aiden, Ono_Anna, Sohee)
  - ✅ Supports style instructions ("Speak cheerfully", "Sound professional")
  - Character switching auto-maps to different preset speakers

* **✍️ VoiceDesign Model** (1.7B only): Dedicated Qwen voice creation from text descriptions
  - Input: "A cheerful young woman with a bright, energetic tone"
  - Output: Instant voice generation matching the description
  - ✅ Supports style instructions alongside the voice description
  - Smart disk caching for reuse across sessions

* **🎤 Base Model** (0.6B / 1.7B): Zero-shot voice cloning from 3-30s reference audio
  - **ICL mode** (default, best quality): requires reference audio **+ reference transcript** — use the 🎭 Character Voices node which always includes both
  - **X-Vector mode**: uses only the audio to extract a speaker embedding, no transcript needed — faster but lower quality
  - ⚠️ **Does NOT support style instructions** — instruction field is ignored in this mode

* **🔤 ASR**: Qwen3-TTS Engine can be connected to the ✏️ Unified ASR Transcribe node for transcription

> **⚠️ Style instructions only work with CustomVoice and VoiceDesign.** Voice cloning (Base) ignores the instruction field entirely.

**Technical Specs:**

* **🌍 10 Languages**: Chinese, English, Japanese, Korean, German, French, Russian, Portuguese, Spanish, Italian
* **📏 2 Model Sizes**: 0.6B and 1.7B parameter variants (VoiceDesign is 1.7B only)
* **⚡ Attention Options**: eager, flash_attention_2, sdpa, sage_attn for performance tuning
* **🔧 Generation Control**: Temperature, top_k, top_p, repetition_penalty parameters
* **⚡ torch.compile Optimizations**: Optional 1.7x speedup (PyTorch 2.10+ required) → [📖 Setup Guide](docs/qwen3_tts_optimizations.md)

**Unified Features Support:**
- Works with all project features: character switching, language switching, pause tags, SRT timing, Step Audio EditX post-processing
- **ASR Transcription**: The ✏️ ASR Transcribe node now supports both Qwen3-ASR and Granite ASR

**Voice Designer Node:**

The shared designer accepts Qwen3-TTS, MOSS-TTS, or OmniVoice engine configurations and outputs the same `NARRATOR_VOICE` format. The voice-design instruction lives on **🎨 Voice Designer**; the engine keeps model, language, and generation settings. Select Qwen VoiceDesign or MOSS VoiceGenerator in the engine's model dropdown, or set OmniVoice to **Voice Design** mode. The corresponding engine instruction stays visible but is disabled because it would be ignored. Incompatible modes stop with a direct correction message. OmniVoice's controlled tag vocabulary can still be assembled with **📐 Visual Tag Builder**. Connect the resulting `opt_narrator` to **💾 Save Character Voice** when persistence is wanted.

**💾 Save Character Voice** accepts only `opt_narrator`, keeping persistence separate from voice construction. For existing audio, use **🎭 Character Voices** with the audio and its exact transcription, then connect its `opt_narrator` output to Save Character Voice. The save node writes the established three-file format—`name.wav`, `name.reference.txt`, and metadata in `name.txt`—under `models/voices/`.

```
Description: "A deep, authoritative male voice with clear articulation"
→ Voice generated and cached → Use in TTS Text/SRT nodes
```

**Perfect for:**

- Quick multilingual content with preset speakers (CustomVoice)
- Creative voice design from text descriptions with Qwen VoiceDesign
- High-quality voice cloning with reference audio (Base)
- Content requiring specific vocal characteristics defined by text

</details>

<details>
<summary><h3>OmniVoice + Visual Tag Builder</h3></summary>

**NEW in v5.x**: OmniVoice is now integrated into the unified suite with native duration-aware SRT generation and a generalized visual tag workflow.

* **🌍 OmniVoice integration**: official model support with broad upstream language coverage
* **🎯 Native duration targeting**: SRT workflows can send target durations directly into OmniVoice instead of relying only on post-generation time stretching
* **⏱️ Precise segment control**: this is the first engine in the suite where segment duration can be meaningfully guided at generation time, making precise TTS timing far more practical
* **📺 Better SRT timing behavior**: subtitle generation can land much closer to target timings before any fallback timing correction, so stretch-to-fit has less work to do and results can stay more natural
* **📐 Visual Tag Builder**: reusable preset-driven visual node for assembling tag or attribute strings, originally added for OmniVoice voice-design prompting and now generalized for broader tag-based text workflows
* **🔊 Native inline non-verbal tags**: OmniVoice non-verbal controls are exposed in suite-default `<>` form like `<laughter>`, then converted internally for generation → **[📖 OmniVoice Tags Guide](docs/OMNIVOICE_TAGS_GUIDE.md)**

**Practical note:**

Use the built-in OmniVoice preset in **📐 Visual Tag Builder** for the canonical voice-design workflow. If you need a different tag schema, the same node now supports reusable custom presets with saved column order.

</details>

<details>
<summary><h3>MOSS-TTS - Local/Delay/TTSD Engine Family</h3></summary>

**NEW in v4.26**: OpenMOSS engine family integration with unified support for single-speaker TTS and native multi-speaker dialogue.

**Model Variants:**

* **1.7B**: `MOSS-TTS-Local-Transformer`
* **v1.5 8B**: `MOSS-TTS-v1.5` — 31 languages and more stable cloning
* **Voice Acting 8B (Community - LAION)**: optional third-party full v1.5 fine-tune for expressive delivery; selecting it downloads `laion/moss-tts-v1.5-8b-voice-acting`
* **v1 8B**: `MOSS-TTS`
* **Native 8B Dialogue**: `MOSS-TTSD-v1.0`
* **Voice Designer 1.7B**: `MOSS-VoiceGenerator` — select it in the MOSS engine for Voice Designer
* **Shared Codec**: `MOSS-Audio-Tokenizer`

Compatible community full checkpoints can also be placed in `models/TTS/moss_tts/<model-name>/`.
They are listed as `local:<model-name>` and classified from `config.json`; unsupported layouts fail explicitly.

**Supported Native Input Forms (TTSD):**

* `[Character]` tags
* `[1]` / `[S1]` numeric speaker tags
* Manual `Speaker 1: ...` format

All native forms are normalized internally to canonical `[S1]...[S5]` dialogue.

**Speaker Modes:**

* **Custom Character Switching**: Standard per-character generation, pause tags, segment parameters, and full unified controls.
* **Native Multi-Speaker Dialogue**: Single native TTSD dialogue request with S1-S5 mapping.

**Important Native Compatibility Rule:**

Native TTSD mode now **hard-fails** (explicit error popup) instead of silently switching models when these are detected:

* pause tags
* inline edit tags
* per-segment `[]` parameter changes
* more than 5 speakers

If you need those controls, switch to **Custom Character Switching** and use `MOSS-TTS-Local-Transformer`, `MOSS-TTS-v1.5`, or `MOSS-TTS`.

**Official Prompt Fields Exposed:**

`instruction`, `quality`, `sound_event`, `ambient_sound`, `language`, `duration_tokens`

Per-segment overrides are supported with `[]` parameter syntax for whole-segment conditioning.

**Documentation:**

* [📖 MOSS Prompt Fields Guide](docs/MOSS_TTS_PROMPT_FIELDS_GUIDE.md)
* [📖 MOSS LoRA Guide](docs/MOSS_LORA_GUIDE.md)
* [📖 MOSS Training Guide](docs/MOSS_TRAINING_GUIDE.md)
* [📖 Parameter Switching Guide](docs/PARAMETER_SWITCHING_GUIDE.md)

**Training status:**

* **Initial MOSS LoRA training support is now integrated** through the unified `🎓 Model Training` flow.
* Current scope is **MOSS-TTS 8B (Delay) LoRA training** with local adapter export into `models/TTS/moss_tts/loras/`.
* The LAION Voice Acting 8B community checkpoint is accepted by the same training path because it uses the v1.5 Delay architecture, but full inference/training validation is pending community feedback.
* Dataset-building UX is still early and will need refinement, but the end-to-end workflow is functional.

</details>

<details>
<summary><h3>Modular ASR + Text to SRT Builder</h3></summary>

**NEW in v4.23**: ASR subtitle generation is now modular instead of being buried inside the transcriber.

The flow is now:

`✏️ ASR Transcribe` → optional `📝 ASR Punctuation / Truecase` → `📺 Text to SRT Builder`

This matters because the suite can now:

* **Separate transcription from subtitle construction** - The ASR node focuses on transcript + timing data, while the new builder owns subtitle formatting
* **Reuse timings with edited text** - Clean or post-process transcript text first, then rebuild SRT using the original timings
* **Use dedicated subtitle controls** - `🔧 SRT Advanced Options` now belongs to the builder stage instead of being mixed into ASR
* **Support Granite better** - Granite can stay raw for alignment, then go through punctuation/truecase before subtitle construction
* **Support diarized Granite workflows** - Granite `4.1 plus` can emit suite-native speaker tags like `[Speaker 1]` for downstream TTS/alias workflows, and if you need both diarization and word timings the node automatically falls back to the reused Qwen forced aligner
* **Support text-only SRT generation** - Leave `asr_timing_data` disconnected and the builder estimates subtitle timings from plain text using the same SRT options that later shape the final cues
* **Preserve project control tags** - Character, language, parameter, pause, and inline edit tags are preserved instead of being broken by subtitle heuristics
* **Keep tag-heavy SRT usable for TTS** - Control tags do not count toward readability metrics, pause tags still affect timing, and active speaker state is re-emitted on wrapped subtitle lines/cues so TTS does not fall back to narrator

**Current intended use:**

* `✏️ ASR Transcribe` for timed transcription with **Qwen3-ASR** or **Granite ASR**
* `📝 ASR Punctuation / Truecase` mainly for low-punctuation ASR outputs like Granite
* `📺 Text to SRT Builder` to turn cleaned text + ASR timing data into final SRT

Granite note:

* `granite-speech-4.1-2b` keeps Japanese support
* `granite-speech-4.1-2b-plus` adds native diarization and native word timestamps, but drops Japanese
* When Granite diarization and word timestamps are requested together, the suite automatically uses the reused Qwen forced aligner so the output still carries speaker-attributed word timings

**Workflow example:**

Use the new [Unified ✏️ ASR Transcribe + SRT Builder](example_workflows/Unified%20✏️%20ASR%20Transcribe%20+%20SRT%20Builder.json) workflow for both **Granite ASR** and **Qwen3-ASR** examples.

</details>

<details>
<summary><h3>Echo-TTS Voice Cloning</h3></summary>

**NEW in v4.22**: Echo-TTS DiT-based voice cloning with reference audio support.

* **⏱️ Best at ≤30s per generation** — Echo-TTS performs best at ~30 seconds or less per chunk
* **🧩 Long-form (best-effort)** — Longer text is handled via the unified chunking system
* **⚡ CUDA recommended** — CPU works but is very slow for real workloads
* **🔑 Force Speaker KV** — Controls speaker identity drift across chunks
* **🪪 License** — Echo-TTS weights are non-commercial (CC-BY-NC-SA)

**Usage:**
1. Add `⚙️ Echo-TTS Engine` node
2. Connect to `🎤 TTS Text` or `📺 TTS SRT`
3. First run auto-downloads the model (~7.1GB total) into `ComfyUI/models/TTS/echo-tts-base/`

📖 **See [Model folder layouts](docs/MODEL_LAYOUTS.md#echo-tts) for detailed setup paths**

</details>

<details>
<summary><h3>Phoneme Text Normalizer</h3></summary>

**NEW in v4.10.0**: Universal multilingual text preprocessing node for improved TTS pronunciation quality across languages!

* **📝 Phoneme Text Normalizer Node**: Standalone text processing node with multiple normalization methods
* **🌍 Universal Language Support**: Handles special characters for Polish, German, French, Spanish, Czech, Nordic languages, and more
* **🔄 Multiple Processing Methods**:
  - **Pass-through**: No processing (original text)
  - **Unicode Decomposition**: Converts special characters to base + diacritical marks
  - **IPA Phonemization**: Full International Phonetic Alphabet conversion using espeak
  - **Character Mapping**: ASCII fallback for maximum compatibility
* **🧠 Auto-Language Detection**: Automatically detects input language based on character patterns
* **🖥️ Cross-Platform Support**: Works on Windows (espeak-phonemizer-windows), Linux/Mac (phonemizer + system espeak)

<!-- opensource-radar:truncated -->
