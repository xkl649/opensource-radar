# PyGPT - Desktop AI Assistant

[![pygpt](https://snapcraft.io/pygpt/badge.svg)](https://snapcraft.io/pygpt)

Release: **2.8.4** | build: **2026-08-19** | Python: **>=3.10, <3.14**

> Official website: https://pygpt.net | [Documentation](https://pygpt.readthedocs.io) | [Discord](https://pygpt.net/discord)
> 
> Get it from: [PyPi](https://pypi.org/project/pygpt-net) | [Snap Store](https://snapcraft.io/pygpt) | [Microsoft Store](https://apps.microsoft.com/detail/XP99R4MX3X65VQ) | [AppImage](https://github.com/szczyglis-dev/py-gpt/releases)
> 
> Compiled version for Linux and Windows: [Download](https://pygpt.net/#download) (64bit)
> 
> Donate: [Buy Me A Coffee](https://www.buymeacoffee.com/szczyglis) | [GitHub Sponsors](https://github.com/sponsors/szczyglis-dev) | [PayPal](https://pygpt.net/donate/paypal)

## Overview

**PyGPT** is an **all-in-one desktop AI assistant** supporting models from `OpenAI` (`GPT-5`, `GPT-4`, `o1`, `o3`), `Google Gemini`, `Anthropic Claude`, `xAI Grok`, `Perplexity / Sonar`, `DeepSeek`, and models available through `HuggingFace`, `LlamaIndex`, OpenAI-compatible APIs, and local `Ollama` installations such as `gpt-oss`, `Llama 3`, `Mistral`, `DeepSeek` and `Bielik`.

It supports chat, assistants, agents, completions, Chat with Files (via `LlamaIndex`), image and video generation, and image analysis. Models can work with files, run Python and system or custom commands, transfer files, call external APIs, and search the web with `DuckDuckGo`, `Google` and `Microsoft Bing`.

**PyGPT** also provides speech synthesis through `Microsoft Azure`, `Google`, `Eleven Labs` and `OpenAI`, plus speech recognition with `OpenAI Whisper`, `Google` and `Bing`. It stores conversation history and memory, supports reusable presets, and can be extended with built-in or custom plugins for tools, automation and external integrations.

**Showcase** (mp4, version `2.8.3`, build `2026-08-16`):

https://github.com/user-attachments/assets/22972e34-dc9f-451d-ae64-23a91e945e97

**Screenshots** (version `2.8.4`, build `2026-08-16`):

Dark theme:
![v2_main](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_main.png)

Light theme:
![v2_light](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_light.png)

You can download compiled 64-bit versions for Windows and Linux here: https://pygpt.net/#download

## Features

- Desktop AI Assistant for `Linux`, `Windows` and `Mac`, written in Python.
- Works similarly to `ChatGPT`, but locally (on a desktop computer).
- 11 modes of operation: Chat, Chat with Files, Realtime + audio, Research (Perplexity), Completion, Image and Video generation, Assistants, Experts, Computer use, Agents and Autonomous Mode.
- Supports multiple models like `OpenAI GPT-5`, `GPT-4`, `o1`, `o3`, `o4`, `Google Gemini`, `Anthropic Claude`, `xAI Grok`, `DeepSeek V3/R1`, `Perplexity / Sonar`, and any model accessible through `LlamaIndex` and `Ollama` such as `DeepSeek`, `gpt-oss`, `Llama 3`, `Mistral`, `Bielik`, etc.
- Chat with your own Files: integrated `LlamaIndex` support: chat with data such as: `txt`, `pdf`, `csv`, `html`, `md`, `docx`, `json`, `epub`, `xlsx`, `xml`, webpages, `Google`, `GitHub`, video/audio, images and other data types, or use conversation history as additional context provided to the model.
- Built-in vector databases support and automated files and data embedding.
- Image generation via models like `gpt-image`, `Imagen`, `Gemini`, and `Nano Banana`.
- Video generation via models like `Veo3` and `Sora2`.
- Internet access via `DuckDuckGo`, `Google` and `Microsoft Bing`.
- Speech synthesis via `Microsoft Azure`, `Google`, `Eleven Labs` and `OpenAI` Text-To-Speech services.
- Speech recognition via `OpenAI Whisper`, `Google` and `Microsoft Speech Recognition`.
- Plugins support with built-in plugins like `Files I/O`, `Code Interpreter`, `Web Search`, `Google`, `Facebook`, `X/Twitter`, `Slack`, `Telegram`, `GitHub`, `MCP`, and many more.
- MCP support.
- Camera capture for real-time image analysis in Chat and other supported modes.
- Image analysis via vision models.
- Included support features for individuals with disabilities: customizable keyboard shortcuts, voice control, and translation of on-screen actions into audio via speech synthesis.
- Handles and stores the full context of conversations (short and long-term memory).
- Integrated calendar, day notes and search in contexts by selected date.
- Tools and commands execution (via plugins: access to the local filesystem, Python Code Interpreter, system commands execution, and more).
- Custom commands creation and execution.
- Crontab / Task scheduler included.
- Built-in real-time Python Code Interpreter / IPython.
- Manages files and attachments with options to upload, download, and organize.
- Context history with the capability to revert to previous contexts (long-term memory).
- Allows you to easily manage prompts with handy editable presets.
- Provides an intuitive operation and interface.
- Includes a notepad.
- Includes simple painter / drawing tool.
- Includes an node-based Agents Builder.
- Supports multiple languages.
- Requires no previous knowledge of using AI models.
- Fully configurable.
- Themes support.
- Real-time code syntax highlighting.
- Built-in token usage calculation.
- **Open source**; source code is available on `GitHub`.
- Utilizes the user's own API key.
- and many more.

The application is free, open-source, and runs on PCs with `Linux`, `Windows 10`, `Windows 11` and `Mac`. 
Full Python source code is available on `GitHub`.

PyGPT uses your own API credentials to connect to supported AI providers such as OpenAI, Google, Anthropic, xAI, Perplexity, Mistral, OpenRouter, and others. Depending on the selected model and provider, you may need an account and a valid API key for that service. Local models do not require external API credentials.
You can also use built-it LlamaIndex support to connect to other Large Language Models (LLMs), 
such as those on HuggingFace. Additional API keys may be required.

# Installation

## Binaries (Linux, Windows 10 and 11)

You can download compiled binary versions for `Linux` and `Windows` (10/11). 

**PyGPT** binaries require a PC with Windows 10, 11, or Linux. Simply download the installer or the archive with the appropriate version from the download page at https://pygpt.net, extract it, or install it, and then run the application. A binary version for Mac is not available, so you must run PyGPT from PyPi or from the source code on Mac. Currently, only 64-bit binaries are available.

Linux version requires `GLIBC` >= `2.35`.

## Microsoft Store (Windows)

For Windows 10/11, you can install **PyGPT** directly from Microsoft Store:

[![Get it from Microsoft Store](https://get.microsoft.com/images/en-us%20dark.svg)](https://apps.microsoft.com/detail/XP99R4MX3X65VQ)

Link to MS Store: https://apps.microsoft.com/detail/XP99R4MX3X65VQ

## AppImage (Linux)

You can download the latest **PyGPT** `AppImage` for Linux from the release page:

**Releases:** https://github.com/szczyglis-dev/py-gpt/releases

**Tip:** Remember to give execution permissions to the downloaded file:

```chmod +x ./PyGPT-X.X.X-x86_64.AppImage```

To manage future updates you can use `AppImageUpdate` tool:

You can download it from: https://github.com/AppImage/AppImageUpdate/releases

After downloading, run the following command in terminal:

```appimageupdatetool ./PyGPT-X.X.X-x86_64.AppImage```

## Snap Store (Linux)

You can install **PyGPT** directly from Snap Store:

```commandline
sudo snap install pygpt
```

To manage future updates use:

```commandline
sudo snap refresh pygpt
```

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/pygpt)

**Using camera:** to use camera in Snap version you must connect the camera with:

```commandline
sudo snap connect pygpt:camera
```

**Using microphone:** to use microphone in Snap version you must connect the microphone with:

```commandline
sudo snap connect pygpt:audio-record :audio-record
sudo snap connect pygpt:alsa
```

**Using audio output:** to use audio output in Snap version you must connect the audio with:

```commandline
sudo snap connect pygpt:audio-playback
sudo snap connect pygpt:alsa
```

**Connecting IPython in Docker in Snap version**:

To use IPython in the Snap version, you must connect PyGPT to the Docker daemon:

```commandline
sudo snap connect pygpt:docker-executables docker:docker-executables
```

````commandline
sudo snap connect pygpt:docker docker:docker-daemon
````

## PyPi (pip)

The application can also be installed from `PyPi` using `pip install`:

1. Create virtual environment:

```commandline
python3 -m venv venv
source venv/bin/activate
```

2. Install from PyPi:

``` commandline
pip install pygpt-net
```

3. Once installed run the command to start the application:

``` commandline
pygpt
```

## Running from GitHub source code

An alternative method is to download the source code from `GitHub` and execute the application using the Python interpreter (`>=3.10`, `<3.14`). 

### Install with pip

1. Clone git repository or download .zip file:

```commandline
git clone https://github.com/szczyglis-dev/py-gpt.git
cd py-gpt
```

2. Create a new virtual environment:

```commandline
python3 -m venv venv
source venv/bin/activate
```

3. Install requirements:

```commandline
pip install -r requirements.txt
```

4. Run the application:

```commandline
python3 run.py
```

### Install with Poetry

1. Clone git repository or download .zip file:

```commandline
git clone https://github.com/szczyglis-dev/py-gpt.git
cd py-gpt
```

2. Install Poetry (if not installed):

```commandline
pip install poetry
```

3. Create a new virtual environment that uses Python 3.10:

```commandline
poetry env use python3.10
poetry shell
```

or (Poetry >= 2.0):

```commandline
poetry env use python3.10
poetry env activate
```

4. Install requirements:

```commandline
poetry install
```

5. Run the application:

```commandline
poetry run python3 run.py
```

**Tip**: you can use `PyInstaller` to create a compiled version of
the application for your system (required version >= `6.0.0`).

### Troubleshooting

If you have a problems with `xcb` plugin with newer versions of PySide on Linux, e.g. like this:

```commandline
qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.
This application failed to start because no Qt platform plugin could be initialized. 
Reinstalling the application may fix this problem.
```

...then install `libxcb`:

```commandline
sudo apt install libxcb-cursor0
```

If you have a problems with audio on Linux, then try to install `portaudio19-dev` and/or `libasound2`:

```commandline
sudo apt install portaudio19-dev
```

```commandline
sudo apt install libasound2
sudo apt install libasound2-data 
sudo apt install libasound2-plugins
```

**Problems with GLIBC on Linux**

If you encounter error: 

```commandline
Error loading Python lib libpython3.10.so.1.0: dlopen: /lib/x86_64-linux-gnu/libm.so.6: version GLIBC_2.35 not found (required by libpython3.10.so.1.0)
```
when trying to run the compiled version for Linux, try updating GLIBC to version `2.35`, or use a newer operating system that has at least version `2.35` of GLIBC.

**Access to camera in Snap version:**


```commandline
sudo snap connect pygpt:camera
```

**Access to microphone in Snap version:**

To use microphone in Snap version you must connect the microphone with:

```commandline
sudo snap connect pygpt:audio-record :audio-record
```

**Snap and AppArmor permission denied**

Snap installs AppArmor profiles for each application by default. The profile for PyGPT is created at:

`/var/lib/snapd/apparmor/profiles/snap.pygpt.pygpt`

The application should work with the default profile; however, if you encounter errors like:

`PermissionError: [Errno 13] Permission denied: '/etc/httpd/conf/mime.types'`

add the appropriate access rules to the profile file, for example:

```
# /var/lib/snapd/apparmor/profiles/snap.pygpt.pygpt

...

/etc/httpd/conf/mime.types r
```

and reload the profiles.

Alternatively, you can try removing snap and reinstalling it:

`sudo snap remove --purge pygpt`

`sudo snap install pygpt`


**Access to a microphone and audio in Windows version:**

If you have a problems with audio or a microphone in the non-binary PIP/Python version on Windows, check to see if FFmpeg is installed. If it's not, install it and add it to the PATH. You can find a tutorial on how to do this here: https://phoenixnap.com/kb/ffmpeg-windows. The binary version already includes FFmpeg.

**Windows and VC++ Redistributable**

On Windows, the proper functioning requires the installation of the `VC++ Redistributable`, which can be found on the Microsoft website:

https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist

The libraries from this environment are used by `PySide6` - one of the base packages used by PyGPT. 
The absence of the installed libraries may cause display errors or completely prevent the application from running.

It may also be necessary to add the path `C:\path\to\venv\Lib\python3.x\site-packages\PySide6` to the `PATH` variable.

**WebEngine/Chromium renderer and OpenGL problems**

If you have a problems with `WebEngine / Chromium` renderer you can force the legacy mode by launching the app with command line arguments:

``` ini
python3 run.py --legacy=1
```

and to force disable OpenGL hardware acceleration:

``` ini
python3 run.py --disable-gpu=1
```

You can also manualy enable legacy mode by editing config file - open the `%WORKDIR%/config.json` config file in editor and set the following options:

``` json
"render.engine": "legacy",
"render.open_gl": false,
```

## Other requirements

For operation, an internet connection is needed (for API connectivity), a registered OpenAI account, 
and an active API key that must be input into the program. Local models, such as `Llama3` do not require OpenAI account and any API keys.

## Debugging and logging

Please go to `Debugging and Logging` section for instructions on how to log and diagnose issues in a more detailed manner.


# Quick Start

## Setting-up API Key(s)

You can configure API keys for various providers, such as OpenAI, Anthropic, Google, xAI, Perplexity, OpenRouter, and more. This flexibility allows you to use different providers based on your needs.

During the initial setup, configure your API keys within the application.

To do so, navigate to the menu:

`Config -> Settings -> API Keys`

Here, you can add or manage API keys for any supported provider.

![v2_api_keys](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_api_keys.png)

**Configuring Provider**

1. **Select the Provider:** Choose a tab with provider.
2. **Enter the API Key:** Paste the corresponding API key for the selected provider.

**Example**

- **OpenAI:** Obtain your API key by registering on the OpenAI website: https://platform.openai.com and navigating to https://platform.openai.com/account/api-keys.
- **Anthropic, Google, etc.:** Follow similar steps on their respective platforms.

**Note:** The ability to use models or services depends on your access level with the respective provider. If you wish to use custom API endpoints or local APIs that do not require API keys, simply enter any value into the API key field to bypass prompts about an empty key.

# Work modes

## Chat

**+ Inline vision and image generation**

In **PyGPT**, this mode lets you chat with models such as `GPT-5`, `GPT-4`, `o1`, `o3`, `Claude`, `Gemini`, `Grok`, `Perplexity (Sonar)`, `DeepSeek`, and many others. PyGPT can use native SDKs from supported providers, including OpenAI, Google, Anthropic, and xAI, when enabled. It can also connect to providers and local services through OpenAI-compatible APIs, including `Responses API` and `ChatCompletions API` compatible endpoints where supported.

**Tip:** This mode uses the provider SDK directly. If there's no native client built into the app, models like Sonar, or Llama3 are supported in Chat mode via LlamaIndex or OpenAI-compatible API endpoints. The app automatically switches to these endpoints when using non-OpenAI models. You can enable or disable the use of the native API SDK (per provider) in `Settings -> API Keys`. If the native SDK is disabled, the OpenAI SDK will be used via the compatible ChatCompletions API endpoint.

Currently built-in native clients:

- Anthropic SDK
- OpenAI SDK
- Google GenAI SDK
- xAI SDK

Local `Ollama` models are also supported.

The main part of the interface is a chat window where you see your conversations. Below it is a message box for typing. On the right side, you can set up or change the model and system prompt. You can also save these settings as presets to easily switch between models or tasks.

Above where you type your messages, the interface shows you the number of tokens your message will use up as you type it – this helps to keep track of usage. There is also a feature to attach and upload files in this area. Go to the `Files and Attachments` section for more information on how to use attachments.

![v2_mode_chat](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_mode_chat.png)

**Vision:** If you want to analyze photos from disk, screenshots, or camera captures and the currently selected model cannot accept image input, enable the `Vision (inline)` plugin in the Plugins menu. The plugin uses a separately configured image-capable Chat model only for the image-analysis turn. The fallback model can come from any supported provider (for example OpenAI, Google, Anthropic, xAI, OpenRouter, or another OpenAI-compatible provider), as long as the model is configured for Chat and image input.

![v3_vision_plugins](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v3_vision_plugins.png)

With this plugin, you can capture an image with your camera or attach an image and send it for analysis to discuss the photograph:

![v3_vision_chat](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v3_vision_chat.png)

**Image generation:** If you want to generate images directly in chat you must enable plugin `Image generation (inline)` in the Plugins menu.
Plugin allows you to generate images in Chat mode:

![v3_img_chat](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v3_img_chat.png)

##  Chat with Files (LlamaIndex)

This mode enables chat interaction with your documents and entire context history through conversation. 
It seamlessly incorporates `LlamaIndex` into the chat interface, allowing for immediate querying of your indexed documents.

**Tip:** If you do not want to call tools/commands, disable the checkbox `+Tools`. It will speed up the response time when using local models. You can also enable the ReAct agent for tool calls in: `Settings -> Indexes / LlamaIndex -> Chat -> Use ReAct agent for Tool calls in Chat with Files mode`. Stream mode is disabled if the ReAct agent and `+Tools` checkbox are active.

**Querying single files**

You can also query individual files "on the fly" using the `query_file` command from the `Files I/O` plugin. This allows you to query any file by simply asking a question about that file. A temporary index will be created in memory for the file being queried, and an answer will be returned from it. From version `2.1.9` similar command is available for querying web and external content: `Directly query web content with LlamaIndex`.

**For example:**

If you have a file: `data/my_cars.txt` with content `My car is red.`

You can ask for: `Query the file my_cars.txt about what color my car is.`

And you will receive the response: `Red`.

Note: this command indexes the file only for the current query and does not persist it in the database. To store queried files also in the standard index you must enable the option `Auto-index readed files` in plugin settings. Remember to enable `+ Tools` checkbox to allow usage of tools and commands from plugins. 

**Using Chat with Files mode**

In this mode, you are querying the whole index, stored in a vector store database.
To start, you need to index (embed) the files you want to use as additional context.
Embedding transforms your text data into vectors. If you're unfamiliar with embeddings and how they work, check out this article:

https://stackoverflow.blog/2023/11/09/an-intuitive-introduction-to-text-embeddings/

For a visualization from OpenAI's page, see this picture:

![vectors](https://github.com/szczyglis-dev/py-gpt/assets/61396542/4bbb3860-58a0-410d-b5cb-3fbfadf1a367)

Source: https://cdn.openai.com/new-and-improved-embedding-model/draft-20221214a/vectors-3.svg

To index your files, simply copy or upload them  into the `data` directory and initiate indexing (embedding) by clicking the `Index all` button, or right-click on a file and select `Index...`. Additionally, you have the option to utilize data from indexed files in any Chat mode by activating the `Chat with Files (LlamaIndex, inline)` plugin.

![v2_idx1](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_idx1.png)

After the file(s) are indexed (embedded in vector store), you can use context from them in chat mode:

![v2_idx2](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_idx2.png)

Built-in file loaders: 

**Files:**

- CSV files (csv)
- Epub files (epub)
- Excel .xlsx spreadsheets (xlsx)
- HTML files (html, htm)
- IPYNB Notebook files (ipynb)
- Image (vision) (jpg, jpeg, png, gif, bmp, tiff, webp)
- JSON files (json)
- Markdown files (md)
- PDF documents (pdf)
- Plain-text files (txt)
- Video/audio (mp4, avi, mov, mkv, webm, mp3, mpeg, mpga, m4a, wav)
- Word .docx documents (docx)
- XML files (xml)

**Web/external content:**

- Bitbucket
- ChatGPT Retrieval Plugin
- GitHub Issues
- GitHub Repository
- Google Calendar
- Google Docs
- Google Drive 
- Google Gmail
- Google Keep
- Google Sheets
- Microsoft OneDrive
- RSS
- SQL Database
- Sitemap (XML)
- Twitter/X posts
- Webpages (crawling any webpage content)
- YouTube (transcriptions)

You can configure data loaders in `Settings / Indexes / LlamaIndex / Data Loaders` by providing list of keyword arguments for specified loaders.
You can also develop and provide your own custom loader and register it within the application.

LlamaIndex is also integrated with context database - you can use data from database (your context history) as additional context in discussion. 
Options for indexing existing context history or enabling real-time indexing new ones (from database) are available in `Settings / Indexes / LlamaIndex` section.

**WARNING:** remember that when indexing content, API calls to the embedding model are used. Each indexing consumes additional tokens. Always control the number of tokens used on the provider's page.

**Tip:** Using the Chat with Files mode, you have default access to files manually indexed from the /data directory. However, you can use additional context by attaching a file - such additional context from the attachment does not land in the main index, but only in a temporary one, available only for the given conversation.

**Token limit:** When you use `Chat with Files` in non-query mode, LlamaIndex adds extra context to the system prompt. If you use a plugins (which also adds more instructions to system prompt), you might go over the maximum number of tokens allowed. If you get a warning that says you've used too many tokens, turn off plugins you're not using or turn off the "+ Tools" option to reduce the number of tokens used by the system prompt.

**Available vector stores** (provided by `LlamaIndex`):

```
- ChromaVectorStore
- ElasticsearchStore
- PinecodeVectorStore
- QdrantVectorStore
- RedisVectorStore
- SimpleVectorStore
```

You can configure selected vector store by providing config options like `api_key`, etc. in `Settings -> LlamaIndex` window. See the section: `Configuration / Vector stores` for configuration reference.


**Configuring data loaders**

In the `Settings -> LlamaIndex -> Data loaders` section you can define the additional keyword arguments to pass into data loader instance. See the section: `Configuration / Data Loaders` for configuration reference.


## Chat with Audio

This mode works like the Chat mode but with native support for audio input and output using a Realtime and Live APIs. In this mode, audio input and output are directed to and from the model directly, without the use of external plugins. This enables faster and better audio communication.

Currently, in beta. 

At this moment, only OpenAI real-time models (via the Realtime API) and Google Gemini real-time models (via the Live API) are supported.

## Research

This mode (when using Sonar and R1 models) operates using the Perplexity API: https://perplexity.ai.

It allows for deep web searching and utilizes Sonar models, available in `Perplexity AI`.

It requires a Perplexity API key, which can be generated at: https://perplexity.ai.

From version `2.5.27` also OpenAI deep-research models are available in this mode.

## Completion

An older mode of operation that allows working in the standard text completion mode. However, it allows for a bit more flexibility with the text by enabling you to initiate the entire discussion in any way you like.

Similar to chat mode, on the right-hand side of the interface, there are convenient presets. These allow you to fine-tune instructions and swiftly transition between varied configurations and pre-made prompt templates.

Additionally, this mode offers options for labeling the AI and the user, making it possible to simulate dialogues between specific characters - for example, you could create a conversation between Batman and the Joker, as predefined in the prompt. This feature presents a range of creative possibilities for setting up different conversational scenarios in an engaging and exploratory manner.

From version `2.0.107` the `davinci` models are deprecated and has been replaced with `gpt-3.5-turbo-instruct` model in Completion mode.

## Image and video generation

**PyGPT** enables quick and easy image creation with image-generation models such as `gpt-image`, `Imagen`, `Gemini`, `Nano Banana`, and `Grok`, as well as video generation using models such as `Veo` and `Sora`.
Generating images and videos is akin to a chat conversation  -  a user's prompt triggers the generation, followed by downloading, saving to the computer, and displaying the image onscreen. You can send raw prompt to the model in `Image generation` mode or ask the model for the best prompt.

![v3_img](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v3_img.png)

Image generation using image models is also available in every mode via plugin `Image Generation (inline)`. Just ask any model, in any mode, like e.g. GPT or Gemini to generate an image and it will do it inline, without need to mode change.

If you want to generate images directly in chat you must enable plugin **Image generation (inline)** in the Plugins menu.
Plugin allows you to generate images in Chat mode:

![v3_img_chat](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v3_img_chat.png)

For OpenAI models, you can also enable remote image generation in `Config -> Settings -> Remote Tools`. If enabled, image generation will be available natively within the conversation, without plugins, in Chat mode.

To use `Imagen` models you must enable `VertexAI` in `Config -> Settings -> API Keys -> Google -> Advanced options`.

### Remix, Edit, or Extend

To remix or extend from a previous image or video instead of creating a new one from scratch, enable the `Remix/Extend` option checkbox in the toolbox. The last generated image or video in the current context will be used as a reference for your prompt, allowing you to request changes to the generated content. If the `Remix/Extend` option is enabled, uploading an image attachment as a reference will not take effect.

### Raw mode

There is an option for switching prompt generation mode.

If **Raw Mode** is enabled, a model will receive the prompt exactly as you have provided it.
If **Raw Mode** is disabled, a model will generate the best prompt for you based on your instructions.

### Image storage

Once you've generated an image, you can easily save it anywhere on your disk by right-clicking on it. 
You also have the options to delete it or view it in full size in your web browser.

**Tip:** Use presets to save your prepared prompts. 
This lets you quickly use them again for generating new images later on.

The app keeps a history of all your prompts, allowing you to revisit any session and reuse previous 
prompts for creating new images.

Images are stored in ``img`` directory in **PyGPT** user data folder.

## Assistants

This mode uses the OpenAI's **Assistants API**. 

**This mode is old and may be deprecated.**

This mode expands on the basic chat functionality by including additional external tools like a `Code Interpreter` for executing code, `Retrieval Files` for accessing files, and custom `Functions` for enhanced interaction and integration with other APIs or services. In this mode, you can easily upload and download files. **PyGPT** streamlines file management, enabling you to quickly upload documents and manage files created by the model.

Setting up new assistants is simple - a single click is all it takes, and they instantly sync with the `OpenAI API`. Importing assistants you've previously created with OpenAI into **PyGPT** is also a seamless process.

In Assistant mode you are allowed to storage your files in remote vector store (per Assistant) and manage them easily from app:

Please note that token usage calculation is unavailable in this mode. Nonetheless, file (attachment) 
uploads are supported. Simply navigate to the `Files` tab to effortlessly manage files and attachments which 
can be sent to the OpenAI API.

### Vector stores (via Assistants API)

Assistant mode supports the use of external vector databases offered by the OpenAI API. This feature allows you to store your files in a database and then search them using the Assistant's API. Each assistant can be linked to one vector database—if a database is linked, all files uploaded in this mode will be stored in the linked vector database. If an assistant does not have a linked vector database, a temporary database is automatically created during the file upload, which is accessible only in the current thread. Files from temporary databases are automatically deleted after 7 days.

To enable the use of vector stores, enable the `Chat with Files` checkbox in the Assistant settings. This enables the `File search` tool in Assistants API.

To manage external vector databases, click the DB icon next to the vector database selection list in the Assistant creation and editing window (screen below). In this management window, you can create a new vector database, edit an existing one, or import a list of all existing databases from the OpenAI server.

You can define, using `Expire days`, how long files should be automatically kept in the database before deletion (as storing files on OpenAI incurs costs). If the value is set to 0, files will not be automatically deleted.

The vector database in use will be displayed in the list of uploaded files, on the field to the right—if a file is stored in a database, the name of the database will be displayed there; if not, information will be shown indicating that the file is only accessible within the thread.

##  Agent (LlamaIndex) 

Mode that allows the use of agents offered by `LlamaIndex`.

Includes built-in agents (Workflow):

- FunctionAgent
- ReAct
- Structured Planner (sub-tasks)
- CodeAct (connected to Code Interpreter plugin)
- Supervisor + worker

Includes built-in agents (Legacy):

- OpenAI Assistants

In the future, the list of built-in agents will be expanded.

You can create your own types (workflows/patterns) using the built-in visual node-based editor found in the `Tools -> Agents Builder`.

You can also create your own agent by creating a new provider that inherits from `pygpt_net.provider.agents.base`.

**Tools and Plugins**  

In this mode, all commands from active plugins are available (commands from plugins are automatically converted into tools for the agent on-the-fly).

**RAG - using indexes**  

If an index is selected in the agent preset, a tool for reading data from the index is automatically added to the agent, creating a RAG automatically.

Multimodality is currently unavailable, only text is supported. Vision support will be added in the future.

**Loop / Evaluate Mode**

You can run the agent in autonomous mode, in a loop, and with evaluation of the current output. When you enable the `Loop / Evaluate` checkbox, after the final response is given, the quality of the answer will be rated on a percentage scale of `0% to 100%` by another agent. If the response receives a score lower than the one expected (set using a slider at the bottom right corner of the screen, with a default value `75%`), a prompt will be sent to the agent requesting improvements and enhancements to the response.

Setting the expected (required) score to `0%` means that the response will be evaluated every time the agent produces a result, and it will always be prompted to self-improve its answer. This way, you can put the agent in an autonomous loop, where it will continue to operate until it succeeds.

You can choose between two methods of evaluation:

- By the percentage of tasks completed
- By the accuracy (score) of the final response

You can set the limit of steps in such a loop by going to `Settings -> Agents and experts -> LlamaIndex agents -> Max evaluation steps `. The default value is `3`, meaning the agent will only make three attempts to improve or correct its answer. If you set the limit to zero, there will be no limit, and the agent can operate in this mode indefinitely (watch out for tokens!).

You can change the prompts used for evaluating the response in `Settings -> Prompts -> Agent: evaluation prompt in loop`. Here, you can adjust it to suit your needs, for example, by defining more or less critical feedback for the responses received.

## Agent (OpenAI)

The mode operates on the `openai-agents` library integrated into the application:

https://github.com/openai/openai-agents-python

It allows running agents for OpenAI models and models compatible with the OpenAI API.

In this mode, you can use pre-configured Experts in Expert mode presets - they will be launched as agents (in the `openai_agents_experts` type, which allows launching one main agent and subordinate agents to which queries will be appropriately directed).

**Agent types (workflows/patterns):**

- `Agent with experts` - uses attached experts as sub-agents
- `Agent with experts + feedback` - uses attached experts as sub-agents + feedback agent in a loop
- `Agent with feedback` - single agent + feedback agent in a loop
- `Planner` - planner agent, 3 sub-agents inside: planner, base agent + feedback
- `Research bot` - researcher, 3 sub-agents inside: planner, searcher and writer as base agent
- `Simple agent` - a single agent.
- `Evolve` - in each generation (cycle), the best response from a given parent agent is selected; in the next generation, the cycle repeats.
- `B2B` - bot-to-bot communication, involving two bots interacting with each other while keeping a human in the loop.
- `Supervisor + Worker` - one agent (supervisor) acts as a bridge between the user and the second agent (worker). The user provides a query to the supervisor, who then sends instructions to the worker until the task is completed by the worker.

You can create your own types (workflows/patterns) using the built-in visual node-based editor found in the `Tools -> Agents Builder`.

There are also predefined presets added as examples:

- `Coder`
- `Experts agent`
- `Planner`
- `Researcher`
- `Simple agent`
- `Writer with Feedback`
- `2 bots`
- `Supervisor + worker`

In the Agents (OpenAI) mode, all remote tools are available for the base agent according to the configuration in the Config -> Settings -> Remote tools menu.

Remote tools for experts can be selected separately for each expert in the preset configuration.

Local tools (from plugins) are available for agents and experts according to the enabled plugins, as in other modes.

In agents with feedback and plans, tools can be allowed in a preset configuration for each agent. They also have separate prompts that can be configured in presets.

**Description of how different types of agents work:**

Below is a pattern for how different types of agents work. You can use these patterns to create agents for different tasks by modifying the appropriate prompts in the preset for the specific task.

**Simple Agent**
- The agent completes its task and then stops working.

**Agent with Feedback**
- The first agent answers a question.
- The second agent (feedback) evaluates the answer and, if necessary, goes back to the first agent to enforce corrections.
- The cycle repeats until the feedback agent is satisfied with the evaluation.

**Agent with Experts**
- The agent completes the assigned task on its own or delegates it to the most suitable expert (another agent).

**Agent with Experts + Feedback**
- The first agent answers a question or delegates it to the most suitable expert.
- The second agent (feedback) evaluates and, if necessary, goes back to the first agent to enforce corrections.
- The cycle repeats until the feedback agent is satisfied with the evaluation.

**Research Bot**
- The first agent (planner) prepares a list of phrases to search.
- The second agent (search) finds information based on the phrases and creates a summary.
- The third agent (writer) prepares a report based on the summary.

**Planner**
- The first agent (planner) breaks down a task into sub-tasks and sends the list to the second agent.
- The second agent performs the task based on the prepared task list.
- The third agent, responsible for feedback, evaluates, requests corrections if needed, and sends the request back to the first agent. The cycle repeats.

**Evolve**
- You select the number of agents (parents) to operate in each generation (iteration).
- Each agent prepares a separate answer to a question.
- The best agent (producing the best answer) in a generation is selected by the next agent (chooser).
- Another agent (feedback) verifies the best answer and suggests improvements.
- A request for improving the best answer is sent to a new pair of agents (new parents).
- From this new pair, the best answer is selected again in the next generation, and the cycle repeats.

**B2B**
- A human provides a topic for discussion.
- Bot 1 generates a response and sends it to Bot 2.
- Bot 2 receives the response from Bot 1 as input, provides an answer, and sends the response back to Bot 1 as its input. This cycle repeats.
- The human can interrupt the loop at any time and update the entire discussion.

**Supervisor + Worker**

- A human provides a query to the Supervisor.
- The Supervisor prepares instructions for the Worker and sends them to the Worker.
- The Worker completes the task and returns the result to the Supervisor.
- If the task is completed, the Supervisor returns the result to the user. If not, the Supervisor sends another instruction to the Worker to complete the task or asks the user if there are any questions.
- The cycle repeats until the task is completed.

**Tip**: Starting from version `2.5.97`, you can assign and use Experts in all of the agent types.

**Limitations:**

- When the `Computer use` tool is selected for an expert or when the `computer-use` model is chosen, all other tools will not be available for that model.

##  Agent (Autonomous) 

This is an older version of the Agent mode, still available as legacy. However, it is recommended to use the newer mode: `Agent (LlamaIndex)`.

**WARNING: Please use this mode with caution** - autonomous mode, when connected with other plugins, may produce unexpected results!

The mode activates autonomous mode, where AI begins a conversation with itself. 
You can set this loop to run for any number of iterations. Throughout this sequence, the model will engage
in self-dialogue, answering his own questions and comments, in order to find the best possible solution, subjecting previously generated steps to criticism.

**WARNING:** Setting the number of run steps (iterations) to `0` activates an infinite loop which can generate a large number of requests and cause very high token consumption, so use this option with caution! Confirmation will be displayed every time you run the infinite loop.

This mode is similar to `Auto-GPT` - it can be used to create more advanced inferences and to solve problems by breaking them down into subtasks that the model will autonomously perform one after another until the goal is achieved.

You can create presets with custom instructions for multiple agents, incorporating various workflows, instructions, and goals to achieve.

All plugins are available for agents, so you can enable features such as file access, command execution, web searching, image generation, vision analysis, etc., for your agents. Connecting agents with plugins can create a fully autonomous, self-sufficient system. All currently enabled plugins are automatically available to the Agent.

When the `Auto-stop` option is enabled, the agent will attempt to stop once the goal has been reached.

In opposition to `Auto-stop`, when the `Always continue...` option is enabled, the agent will use the "always continue" prompt to generate additional reasoning and automatically proceed to the next step, even if it appears that the task has been completed.

**Options**

The agent is essentially a **virtual** mode that internally sequences the execution of a selected underlying mode. 
You can choose which internal mode the agent should use in the settings:

```Settings / Agent (autonomous) / Sub-mode to use```

Default mode is: `Chat`.

If you want to use the LlamaIndex mode when running the agent, you can also specify which index `LlamaIndex` should use with the option:

```Settings / Agents and experts / Index to use```

##  Experts (co-op, co-operation mode)

Expert mode allows for the creation of experts (using presets) and then consulting them during a conversation. In this mode, a primary base context is created for conducting the conversation. From within this context, the model can make requests to an expert to perform a task and return the results to the main thread. When an expert is called in the background, a separate context is created for them with their own memory. This means that each expert, during the life of one main context, also has access to their own memory via their separate, isolated context.

**In simple terms - you can imagine an expert as a separate, additional instance of the model running in the background, which can be called at any moment for assistance, with its own context and memory, as well as its own specialized instructions in a given subject.**

Experts do not share contexts with one another, and the only point of contact between them is the main conversation thread. In this main thread, the model acts as a manager of experts, who can exchange data between them as needed.

An expert is selected based on the name in the presets; for example, naming your expert as: ID = python_expert, name = "Python programmer" will create an expert whom the model will attempt to invoke for matters related to Python programming. You can also manually request to refer to a given expert:

```bash
Call the Python expert to generate some code.
```

Experts can be activated or deactivated - to enable or disable use RMB context menu to select the `Enable/Disable` options from the presets list. Only enabled experts are available to use in the thread.

Experts can also be used in `Agent (autonomous)` mode - by creating a new agent using a preset. Simply move the appropriate experts to the active list to automatically make them available for use by the agent.

You can also use experts in "inline" mode - by activating the `Experts (inline)` plugin. This allows for the use of experts in any mode, such as normal chat.

Expert mode, like agent mode, is a "virtual" mode - you need to select a target mode of operation for it, which can be done in the settings at `Settings / Agent (autonomous) / Sub-mode for experts`.

You can also ask for a list of active experts at any time:

```bash
Give me a list of active experts.
```

##  Computer use

This mode allows for autonomous computer control.

In this mode, the model takes control of the mouse and keyboard and can navigate within the user's environment. The `Computer use` remote tool is used here: https://platform.openai.com/docs/guides/tools-computer-use, combined with the `Mouse and Keyboard` plugin.

**Example of use:**

```Click on the Start Menu to open it, search for the Notepad in the list, and run it.```

You can change the environment in which the navigation mode operates by using the list at the bottom of the toolbox.

**Available Environments:**

- Browser
- Linux
- Windows
- Mac

You can run this mode in Sandbox (using `Playwright` - https://playwright.dev/) - to do it, just enable the `Sandbox` switch in the toolbox. Playwright browsers must be installed on your system. To do so, run:

```bash
pip install playwright
playwright install <chromium|firefox|webkit>
```
After that, set the path to directory with installed browsers in `Mouse and Keyborad` plugin settings option: `Sandbox  (Playwright) / Browsers directory`.

Compiled binary and Snap versions have `chromium` preinstalled in the package.


**Tip:** DO NOT enable the `Mouse and Keyboard` plugin in Computer use mode—it is already connected to Computer use mode "in the background."


# Context and memory

## Short and long-term memory

**PyGPT** features a continuous chat mode that maintains a long context of the ongoing dialogue. It preserves the entire conversation history and automatically appends it to each new message (prompt) you send to the AI. Additionally, you have the flexibility to revisit past conversations whenever you choose. The application keeps a record of your chat history, allowing you to resume discussions from the exact point you stopped.

## Handling multiple contexts

On the left side of the application interface, there is a panel that displays a list of saved conversations. You can save numerous contexts and switch between them with ease. This feature allows you to revisit and continue from any point in a previous conversation. **PyGPT** automatically generates a summary for each context, akin to the way `ChatGPT` operates and gives you the option to modify these titles itself.

You can disable context support in the settings by using the following option:

``` ini
Config -> Settings -> Use context 
```

## Clearing history

You can clear the entire memory (all contexts) by selecting the menu option:

``` ini
File -> Clear history...
```

## Context storage

On the application side, the context is stored in the `SQLite` database located in the working directory (`db.sqlite`).
In addition, all history is also saved to `.txt` files for easy reading.

Once a conversation begins, a title for the chat is generated and displayed on the list to the left. This process is similar to `ChatGPT`, where the subject of the conversation is summarized, and a title for the thread is created based on that summary. You can change the name of the thread at any time.

# Files And Attachments

## Uploading attachments

**Using Your Own Files as Additional Context in Conversations**

You can use your own files (for example, to analyze them) during any conversation. You can do this in two ways: by indexing (embedding) your files in a vector database, which makes them available all the time during a "Chat with Files" session, or by adding a file attachment (the attachment file will only be available during the conversation in which it was uploaded).

**Attachments**

**PyGPT** makes it simple for users to upload files and send them to the model for tasks like analysis, similar to attaching files in `ChatGPT`. There's a separate `Attachments` tab next to the text input area specifically for managing file uploads. 

**Tip: Attachments uploaded in group are available in all contexts in group**.

![v2_file_input](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_file_input.png)

You can use attachments to provide additional context to the conversation. By default, uploaded files are processed locally using loaders from LlamaIndex and can be converted into text and/or indexed in the vector store. You can upload any file format supported by the application through LlamaIndex. Supported formats include:

Text-based types:

- CSV files (csv)
- Epub files (epub)
- Excel .xlsx spreadsheets (xlsx)
- HTML files (html, htm)
- IPYNB Notebook files (ipynb)
- JSON files (json)
- Markdown files (md)
- PDF documents (pdf)
- Plain-text files (txt and etc.)
- Word .docx documents (docx)
- XML files (xml)

Media-types:

- Image (using vision) (jpg, jpeg, png, gif, bmp, tiff, webp)
- Video/audio (mp4, avi, mov, mkv, webm, mp3, mpeg, mpga, m4a, wav)

Archives:

- zip
- tar, tar.gz, tar.bz2

### Native file upload

In the `Attachments` tab you can enable **Prefer native file upload when supported**. This option is disabled by default.

When enabled, PyGPT will try to upload each supported attachment directly through the selected provider's native file API instead of reading the file locally and appending its extracted content to the prompt. Native upload is used only when it is supported by the current provider, model, file type, and file size. The native upload path is available for supported OpenAI, Google Gemini, Anthropic, and xAI configurations.

For a file that is successfully sent natively, native upload overrides the selected attachment context mode (`Full context`, `RAG`, or `Summary`) for that file. If native upload is unavailable or fails, PyGPT automatically falls back to the standard local attachment processing, so existing attachment behavior is preserved.

Archive files such as ZIP and TAR are unpacked locally first. Their contents are then handled individually: supported files can be uploaded natively, while unsupported files use the normal local-processing fallback. Attachments sent through the native path are marked with the `(Native)` suffix in the uploaded attachments list.

**Note:** Native upload sends the original file content to the selected API provider. Provider-specific file type, size, model, retention, and availability limits may apply.

**Tip:** To see native-upload activity in the console, enable `Settings -> Debug -> Log attachments usage to console`. Native upload messages are printed only when attachment logging is enabled.

The content from the uploaded attachments will be used in the current conversation and will be available throughout (per context). There are 3 modes available for working with additional context from attachments:

- `Full context`: Provides best results. This mode attaches the entire content of the read file to the user's prompt. This process happens in the background and may require a large number of tokens if you uploaded extensive content.

- `RAG`: The indexed attachment will only be queried in real-time using LlamaIndex. This operation does not require any additional tokens, but it may not provide access to the full content of the file 1:1.

- `Summary`: When queried, an additional query will be generated in the background and executed by a separate model to summarize the content of the attachment and return the required information to the main model. You can change the model used for summarization in the settings under the `Files and attachments` section.

In the `RAG` and `Summary` mode, you can enable an additional setting by going to `Settings -> Files and attachments -> Use history in RAG query`. This allows for better preparation of queries for RAG. When this option is turned on, the entire conversation context is considered, rather than just the user's last query. This allows for better searching of the index for additional context. In the `RAG limit` option, you can set a limit on how many recent entries in a discussion should be considered (`0 = no limit, default: 3`).

**Important**: When using `Full context` mode, the entire content of the file is included in the prompt, which can result in high token usage each time. If you want to reduce the number of tokens used, instead use the `RAG` option, which will only query the indexed attachment in the vector database to provide additional context.

**Images as Additional Context**

Files such as jpg, png, and similar images are a special case. By default, images are not used as additional context; they are analyzed in real-time using a vision model. If you want to use them as additional context instead, you must enable the "Allow images as additional context" option in the settings: `Files and attachments -> Allow images as additional context`.

**Uploading larger files and auto-index**

To use the `RAG` mode, the file must be indexed in the vector database. This occurs automatically at the time of upload if the `Auto-index on upload` option in the `Attachments` tab is enabled. When uploading large files, such indexing might take a while - therefore, if you are using the `Full context` option, which does not use the index, you can disable the `Auto-index` option to speed up the upload of the attachment. In this case, it will only be indexed when the `RAG` option is called for the first time, and until then, attachment will be available in the form of `Full context` and `Summary`.

**Embeddings**

When using RAG to query attachments, the documents are indexed into a temporary vector store. With multiple providers and models available, you can select the model used for querying attachments in: `Config -> Settings -> Files and Attachments`. You can also choose the embedding models for specified providers in `Config -> Settings -> Indexes / LlamaIndex -> Embeddings -> Default embedding models` list. By default, when querying an attachment using RAG, the default embedding model and provider corresponding to the RAG query model will be used. If no default configuration is provided for a specific provider, the global embedding configuration will be used.

For example, if the RAG query model is `gpt-4o-mini`, then the default model for the provider `OpenAI` will be used. If the default model for `OpenAI` is not specified on the list, the global provider and model will be used.

## Downloading files

**PyGPT** enables the automatic download and saving of files created by the model. This is carried out in the background, with the files being saved to an `data` folder located within the user's working directory. To view or manage these files, users can navigate to the `Files` tab which features a file browser for this specific directory. Here, users have the interface to handle all files sent by the AI.

This `data` directory is also where the application stores files that are generated locally by the AI, such as code files or any other data requested from the model. Users have the option to execute code directly from the stored files and read their contents, with the results fed back to the AI. This hands-off process is managed by the built-in plugin system and model-triggered commands. You can also indexing files from this directory (using integrated `LlamaIndex`) and use it's contents as additional context provided to discussion.

The `Files I/O` plugin takes care of file operations in the `data` directory, while the `Code Interpreter` plugin allows for the execution of code from these files.

![v2_file_output](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_file_input.png)

To allow the model to manage files or python code execution, the `+ Tools` option must be active, along with the above-mentioned plugins:

![v2_code_execute](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_code_execute.png)

# Presets

## What is preset?

Presets in **PyGPT** are essentially templates used to store and quickly apply different configurations. Each preset includes settings for the mode you want to use (such as chat, completion, or image generation), an initial system prompt, an assigned name for the AI, a username for the session, and the desired "temperature" for the conversation. A warmer "temperature" setting allows the AI to provide more creative responses, while a cooler setting encourages more predictable replies. These presets can be used across various modes and with models accessed via the `OpenAI API` or `LlamaIndex`.

The application lets you create as many presets as needed and easily switch among them. Additionally, you can clone an existing preset, which is useful for creating variations based on previously set configurations and experimentation.

![v2_preset](https://github.com/szczyglis-dev/py-gpt/raw/master/docs/source/images/v2_preset.png)

## Example usage

The application includes several sample presets that help you become acquainted with the mechanism of their use.

# Profiles

You can create multiple profiles for an app and switch between them. Each profile uses its own configuration, settings, context history, and a separate folder for user files. This allows you to set up different environments and quickly switch between them, changing the entire setup with just one click.

The app lets you create new profiles, edit existing ones, and duplicate current ones.

To create a new profile, select the option from the menu: `Config -> Profile -> New Profile...`

To edit saved profiles, choose the option from the menu: `Config -> Profile -> Edit Profiles...`

To switch to a created profile, pick the profile from the menu: `Config -> Profile -> [Profile Name]`

Each profile uses its own user directory (workdir). You can link a newly created or edited profile to an existing workdir with its configuration.

The name of the currently active profile is shown as (Profile Name) in the window title.

# Models

## Built-in models

PyGPT has a preconfigured list of models (as of 2026-08-15):

- `bielik-11b-v2.3-instruct:Q4_K_M` (Ollama)
- `claude-fable-5` (Anthropic)
- `claude-haiku-4-5` (Anthropic)
- `claude-opus-4-5` (Anthropic)
- `claude-opus-5` (Anthropic)
- `claude-sonnet-4-5` (Anthropic)
- `claude-sonnet-5` (Anthropic)
- `codellama` (Ollama)
- `computer-use-preview` (OpenAI)
- `deep-research-max-preview-04-2026` (Google)
- `deep-research-preview-04-2026` (Google)
- `deep-research-pro-preview-12-2025` (Google)
- `deepseek-r1:1.5b` (Ollama)
- `deepseek-r1:14b` (Ollama)
- `deepseek-r1:7b` (Ollama)
- `deepseek-v4-flash` (DeepSeek)
- `deepseek-v4-pro` (DeepSeek)
- `gemini-2.5-computer-use-preview-10-2025` (Google)
- `gemini-2.5-flash` (Google)
- `gemini-2.5-flash-image` (Google)
- `gemini-2.5-flash-native-audio-latest` (Google, real-time)
- `gemini-2.5-pro` (Google)
- `gemini-3-flash-preview` (Google)
- `gemini-3-pro-image` (Google)
- `gemini-3.1-flash-image` (Google)
- `gemini-3.1-flash-lite-image` (Google)
- `gemini-3.1-flash-live-preview` (Google, real-time)
- `gemini-3.1-pro-preview` (Google)
- `gemini-3.5-flash` (Google)
- `gemini-3.5-flash-lite` (Google)
- `gemini-3.6-flash` (Google)
- `gpt-3.5-turbo` (OpenAI)
- `gpt-3.5-turbo-instruct` (OpenAI)
- `gpt-4` (OpenAI)
- `gpt-4-turbo` (OpenAI)
- `gpt-4.1` (OpenAI)
- `gpt-4.1-mini` (OpenAI)
- `gpt-4.1-nano` (OpenAI)
- `gpt-4o` (OpenAI)
- `gpt-4o-mini` (OpenAI)
- `gpt-5` (OpenAI)
- `gpt-5-mini` (OpenAI)
- `gpt-5-nano` (OpenAI)
- `gpt-5.2` (OpenAI)
- `gpt-5.6-sol` (OpenAI)
- `gpt-5.6-luna` (OpenAI)
- `gpt-5.6-terra` (OpenAI)
- `gpt-image-1` (OpenAI)
- `gpt-image-1.5` (OpenAI)
- `gpt-image-2` (OpenAI)
- `gpt-oss:20b` (OpenAI - via Ollama and HuggingFace Router)
- `gpt-oss:120b` (OpenAI - via Ollama and HuggingFace Router)
- `gpt-realtime` (OpenAI, real-time)
- `gpt-realtime-2.1` (OpenAI, real-time)
- `gpt-realtime-2.1-mini` (OpenAI, real-time)
- `grok-2-image-1212` (xAI)
- `grok-2-vision` (xAI)
- `grok-3-mini` (xAI)
- `grok-3-mini-fast` (xAI)
- `grok-4.3` (xAI)
- `grok-4.5` (xAI)
- `grok-4.6` (xAI)
- `grok-imagine-image` (xAI)
- `grok-imagine-image-quality-latest` (xAI)
- `grok-imagine-video` (xAI)
- `grok-imagine-video-1.5` (xAI)
- `imagen-4.0-generate-001` (Google)
- `llama2-uncensored` (Ollama)
- `llama3.1` (Ollama)
- `llama3.1:70b` (Ollama)
- `llama3.3:70b` (Ollama)
- `mistral` (Ollama)
- `mistral-large` (Ollama)
- `mistral-small3.1` (Ollama)
- `nano-banana-pro-preview` (Google)
- `o1` (OpenAI)
- `o1-pro` (OpenAI)
- `o3` (OpenAI)
- `o3-deep-research` (OpenAI)
- `o3-mini` (OpenAI)
- `o3-pro` (OpenAI)
- `o4-mini` (OpenAI)
- `o4-mini-deep-research` (OpenAI)
- `qwen2:7b` (Ollama)
- `qwen2.5-coder:7b` (Ollama)
- `qwen3:8b` (Ollama)
- `qwen3:30b-a3b` (Ollama)
- `sonar` (Perplexity)
- `sonar-deep-research` (Perplexity)
- `sonar-pro` (Perplexity)
- `sonar-reasoning-pro` (Perplexity)
- `sora-2` (OpenAI)
- `sora-2-pro` (OpenAI)
- `veo-3.1-fast-generate-preview` (Google)
- `veo-3.1-generate-preview` (Google)
- `veo-3.1-lite-generate-preview` (Google)

All models are specified in the configuration file `models.json`, which you can customize. 
This file is located in your working directory. You can add new models provided directly by `OpenAI API` (or compatible), `Google Gen AI API`, `Anthropic API`, `xAI API`, and those supported by `LlamaIndex` or `Ollama` to this file. Configuration for LlamaIndex in placed in `llama_index` key.

You can import new models by manually editing `models.json` or by using the model importer in the `Config -> Models -> Import` menu.

**Tip:** The models on the list are sorted by provider, not by manufacturer. A model from a particular manufacturer may be available through different providers (e.g., OpenAI models can be provided by the `OpenAI API` or by `OpenRouter`). If you want to use a specific model through a particular provider, you need to configure the provider in `Config -> Models -> Edit`, or import it directly via `Config -> Models -> Import`.

**Tip**: Anthropic and Deepseek API providers use VoyageAI for embeddings (Chat with Files and attachments RAG), so you must also configure the Voyage API key if you want to use embeddings from these providers.

## Adding a custom model

You can add your own models. See the section `Extending PyGPT / Adding a new model` for more info.

There is built-in support for those LLM providers:

- `Anthropic`
- `Azure OpenAI` (native SDK)
- `Deepseek API`
- `Eden AI`
- `Forge`
- `Google` (native SDK)
- `HuggingFace API`
- `HuggingFace Router` (wrapper for OpenAI compatible ChatCompletions)
- `LiteLLM`
- `Local models` (OpenAI API compatible)
- `Mistral AI`
- `Ollama`
- `OpenAI` (native SDK)
- `OpenRouter`
- `Perplexity`
- `xAI` (native SDK)

## How to use local or non-GPT models

### Llama 3, Mistral, DeepSeek, Qwen, gpt-oss, and other local models

How to use locally installed Llama 3, DeepSeek, Mistral, etc. models:

1) Choose a working mode: `Chat` or `Chat with Files`.

2) On the models list - select, edit, or add a new model (with `ollama` provider). You can edit the model settings through the menu `Config -> Models -> Edit`, then configure the model parameters in the `advanced` section.

3) Download and install Ollama from here: https://github.com/ollama/ollama

For example, on Linux:

```curl -fsSL https://ollama.com/install.sh | sh```

4) Run the model (e.g. Llama 3) locally on your machine. For example, on Linux:

```ollama run llama3.1```

5) Return to PyGPT and select the correct model from models list to chat with selected model using Ollama running locally.

**Example available models**

- `llama3.1`
- `codellama`
- `mistral`
- `llama2-uncensored`
- `deepseek-r1`

etc.

You can add more models by editing the models list.

**Real-time importer**

You can also import models in real-time from a running Ollama instance using the `Config -> Models -> Import...` tool.

**Custom Ollama endpoint**

The default endpoint for Ollama is: http://localhost:11434

You can change it globally by setting the environment variable `OLLAMA_API_BASE` in `Settings -> General -> Advanced -> Application environment`.

You can also change the "base_url" for a specific model in its configuration:

`Config -> Models -> Edit`, then in the `Advanced -> [LlamaIndex] ENV Vars` section add the variable:

NAME: `OLLAMA_API_BASE`
VALUE: `http://my_endpoint.com:11434`


**List of all models supported by Ollama**

https://ollama.com/library

https://github.com/ollama/ollama

**IMPORTANT:** Remember to define the correct model name in the **kwargs list in the model settings.

**Using local embeddings**

Refer to: https://docs.llamaindex.ai/en/stable/examples/embeddings/ollama_embedding/

You can use an Ollama instance for embeddings. Simply select the `ollama` provider in:

```Config -> Settings -> Indexes / LlamaIndex -> Embeddings -> Embeddings provider```

Define parameters like model name and Ollama base URL in the Embeddings provider **kwargs list, e.g.:

<!-- opensource-radar:truncated -->
