# Seedance 2.0 API

Examples for calling the **Seedance 2.0 API** (ByteDance text-to-video and image-to-video) through Apiframe.

**Model page:** [Seedance 2.0 API](https://apiframe.ai/models/seedance-2)

This repo does not host model weights. Seedance is a closed model. Inference runs on `POST /v2/videos/generate` with `model: "seedance-2"`.

Related model ids on the same endpoint: `seedance-2.5`, `seedance-2-fast`, `seedance-2-mini`.

## What is Seedance 2.0?

Seedance 2.0 is ByteDance's video generation model. It supports text-to-video, image-to-video, and multimodal reference-to-video (images, video, audio), with native synchronized audio. Clips are 4–15 seconds at 480p, 720p, 1080p, or 4K.

## Quick start

```bash
export APIFRAME_API_KEY=afk_your_api_key_here
```

### Python

```bash
pip install requests
```

```python
import os
import time
import requests

API = "https://api.apiframe.ai/v2"
headers = {
    "X-API-Key": os.environ["APIFRAME_API_KEY"],
    "Content-Type": "application/json",
}

job = requests.post(
    f"{API}/videos/generate",
    headers=headers,
    json={
        "model": "seedance-2",
        "prompt": "A cinematic slow-motion shot of a golden eagle soaring through a mountain valley at sunrise.",
        "seedanceParams": {
            "duration": 8,
            "resolution": "720p",
            "aspect_ratio": "16:9",
            "generate_audio": True,
        },
    },
).json()

while True:
    result = requests.get(f"{API}/jobs/{job['jobId']}", headers=headers).json()
    if result["status"] in ("COMPLETED", "FAILED"):
        break
    time.sleep(2)

print(result.get("result"))
```

### JavaScript

```bash
npm i @apiframe-ai/sdk@next
```

```javascript
import { Apiframe } from "@apiframe-ai/sdk";

const client = new Apiframe({ apiKey: process.env.APIFRAME_API_KEY });

const { jobId } = await client.videos.generate({
  model: "seedance-2",
  prompt:
    "A cinematic slow-motion shot of a golden eagle soaring through a mountain valley at sunrise.",
  seedanceParams: {
    duration: 8,
    resolution: "720p",
    aspect_ratio: "16:9",
    generate_audio: true,
  },
});

const job = await client.jobs.waitFor(jobId);
console.log(job.result);
```

Pass `webhookUrl` on the generate call if you do not want to poll.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `prompt` | string | required | Text description of the video |
| `seedanceParams.duration` | integer | `8` | Seconds, `4`–`15` |
| `seedanceParams.resolution` | string | `"720p"` | `480p`, `720p`, `1080p`, `4k` |
| `seedanceParams.aspect_ratio` | string | `"16:9"` | `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, `adaptive` |
| `seedanceParams.start_image` | string | — | First-frame URL (image-to-video) |
| `seedanceParams.end_image` | string | — | Last-frame URL |
| `seedanceParams.reference_image_urls` | string[] | — | Up to 9 reference images |
| `seedanceParams.reference_video_urls` | string[] | — | Up to 3 reference videos |
| `seedanceParams.reference_audio_urls` | string[] | — | Up to 3 reference audio files |
| `seedanceParams.generate_audio` | boolean | `true` | Native synchronized audio |
| `seedanceParams.seed` | integer | — | Reproducible generations |
| `seedanceParams.camera_fixed` | boolean | `false` | Lock the camera |
| `seedanceParams.web_search` | boolean | `false` | Ground the prompt with web search |

## Image to video

```python
requests.post(
    "https://api.apiframe.ai/v2/videos/generate",
    headers=headers,
    json={
        "model": "seedance-2",
        "prompt": "She slowly turns to face the camera, wind catching her hair.",
        "seedanceParams": {
            "start_image": "https://example.com/portrait.jpg",
            "duration": 8,
            "resolution": "720p",
        },
    },
)
```

## Reference to video

```python
requests.post(
    "https://api.apiframe.ai/v2/videos/generate",
    headers=headers,
    json={
        "model": "seedance-2",
        "prompt": "The person from the reference image walks down a neon-lit street at night.",
        "seedanceParams": {
            "reference_image_urls": ["https://example.com/character.jpg"],
            "duration": 10,
            "resolution": "720p",
        },
    },
)
```

Start/end frames and reference media are mutually exclusive on Seedance 2.5. On Seedance 2.0 they can be combined; keep inputs consistent.

## Output

```json
{
  "videoUrl": "https://cdn2.apiframe.ai/videos/….mp4"
}
```

## Examples

| Example | Python | JavaScript |
|---|---|---|
| Text to video | [text_to_video.py](examples/text_to_video.py) | [text_to_video.js](examples/text_to_video.js) |
| Image to video | [image_to_video.py](examples/image_to_video.py) | [image_to_video.js](examples/image_to_video.js) |
| Reference to video | [reference_to_video.py](examples/reference_to_video.py) | [reference_to_video.js](examples/reference_to_video.js) |

```bash
cp .env.example .env
# set APIFRAME_API_KEY
python examples/text_to_video.py
```

## License

Example code in this repository is provided as-is. Seedance outputs are subject to ByteDance's terms. Seedance is a trademark of ByteDance Ltd.
