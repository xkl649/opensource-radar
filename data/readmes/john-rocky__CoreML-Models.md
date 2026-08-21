# CoreML-Models

<img width="1280" src="https://user-images.githubusercontent.com/23278992/147420041-fdeb1fbb-7e93-41c6-84d6-80d7c1c45200.jpeg">

*Maintained by [Daisuke Majima](https://john-rocky.github.io/) — on-device AI for iOS & Android.*

# How to use

Take a look this model zoo, and if you found the CoreML model you want,
download the model from google drive link and bundle it in your project.
Or if the model have sample project link, try it and see how to use the model in the project.
You are free to do or not.

**If you like this repository, please give me a star so I can do my best.**

# Section Link

- [**Image Classifier**](#image-classifier)
  - [Efficientnetb0](#efficientnetb0)
  - [Efficientnetv2](#efficientnetv2)
  - [VisionTransformer](#visiontransformer)
  - [Conformer](#conformer)
  - [DeiT](#deit)
  - [RepVGG](#repvgg)
  - [RegNet](#regnet)
  - [MobileViTv2](#mobilevitv2)

  
- [**Object Detection**](#object-detection)
  - [D-FINE](#d-fine)
  - [RF-DETR](#rf-detr)
  - [YOLOv5s](#yolov5s)
  - [YOLOv7](#yolov7)
  - [YOLOv8](#yolov8)
  - [YOLOv9](#yolov9)
  - [YOLOv10](#yolov10)
  - [YOLO11](#yolo11)
  - [YOLO26](#yolo26)
  - [YOLO-World](#yolo-world)
  - [YOLOE](#yoloe)

- [**Multi-Object Tracking**](#multi-object-tracking)
  - [ByteTrack](#bytetrack)

- [**Segmentation**](#segmentation)
  - [U2Net](#u2net)
  - [IS-Net](#is-net)
  - [RMBG1.4](#rmbg14)
  - [face-parsing](#face-parsing)
  - [Segformer](#segformer)
  - [BiseNetv2](#bisenetv2)
  - [DNL](#dnl)
  - [ISANet](#isanet)
  - [FastFCN](#fastfcn)
  - [GCNet](#gcnet)
  - [DANet](#danet)
  - [Semantic FPN](#semantic-fpn)
  - [cloths_segmentation](#cloths_segmentation)
  - [easyportrait](#easyportrait)
  - [MobileSAM](#mobilesam)
  - [SAM2-Tiny](#sam2-tiny)
  - [FastSAM](#fastsam)

- [**Video Matting**](#video-matting)
  - [MatAnyone](#matanyone)

- [**Super Resolution**](#super-resolution)
  - [Real ESRGAN](#real-esrgan)
  - [GFPGAN](#gfpgan)
  - [BSRGAN](#bsrgan)
  - [A-ESRGAN](#a-esrgan)
  - [Beby-GAN](#beby-gan)
  - [RRDN](#rrdn)
  - [Fast-SRGAN](#fast-srgan)
  - [ESRGAN](#esrgan)
  - [UltraSharp](#ultrasharp)
  - [SRGAN](#srgan)
  - [SRResNet](#srresnet)
  - [LESRCNN](#lesrcnn)
  - [MMRealSR](#mmrealsr)
  - [DASR](#dasr)
  - [SinSR](#sinsr)
      
- [**Low Light Enhancement**](#low-light-enhancement)
  - [StableLLVE](#stablellve)
  - [Zero-DCE](#zero-dce)
  - [Retinexformer](#retinexformer)

- [**Image Restoration**](#image-restroration)
  - [MPRNet](#mprnet)
  - [MIRNetv2](#mirnetv2)
  
- [**Image Generation**](#image-generation)
  - [MobileStyleGAN](#mobilestylegan)
  - [DCGAN](#dcgan)

- [**Image2Image**](#image2image)
  - [Anime2Sketch](#anime2sketch)
  - [AnimeGAN2Face_Paint_512_v2](#animegan2face_paint_512_v2)
  - [Photo2Cartoon](#photo2cartoon)
  - [AnimeGANv2_Hayao](#animeGANv2_hayao)
  - [AnimeGANv2_Paprika](#animeGANv2_paprika)
  - [WarpGAN Caricature](#warpgancaricature)
  - [UGATIT_selfie2anime](#ugatit_selfie2anime)
  - [Fast-Neural-Style-Transfer](#fast-neural-style-transfer)
  - [White_box_Cartoonization](#white_box_cartoonization)
  - [FacialCartoonization](#facialcartoonization)

- [**Inpainting**](#inpainting)
  - [AOT-GAN-for-Inpainting](#aot-gan-for-inpainting)
  - [Lama](#lama)

- [**Monocular Depth Estimation**](#monocular-depth-estimation)
  - [Depth Anything 3](#depth-anything-3)
  - [MoGe-2](#moge-2)
  - [MiDaS](#midas)
  
- [**Stable Diffusion**](#stable-diffusion) **:text2image**
  - [Nitro-E](#nitro-e)
  - [Hyper-SD](#hyper-sd)
  - [stable-diffusion-v1-5](#stable-diffusion-v1-5)
  - [pastel-mix](#pastel-mix)
  - [Orange Mix](#orange-mix)
  - [Counterfeit-V2.5](#counterfeit)
  - [anything-v4.5](#anything-v4)
  - [Openjourney](#openjourney)
  - [dreamlike-photoreal-2.0](#dreamlike-photoreal-2)

- [**Image Colorization**](#image-colorization)
  - [DDColor Tiny](#ddcolor-tiny)

- [**Face Recognition**](#face-recognition)
  - [AdaFace IR-18](#adaface-ir-18)

- [**3D Face Pose Estimation**](#3d-face-pose-estimation)
  - [3DDFA_V2](#3ddfa_v2)

- [**Speaker Diarization**](#speaker-diarization)
  - [pyannote segmentation-3.0](#pyannote-segmentation-30)

- [**Voice Conversion**](#voice-conversion)
  - [OpenVoice V2](#openvoice-v2)

- [**Text-to-Speech**](#text-to-speech)
  - [Kokoro-82M](#kokoro-82m)

- [**Text-to-Music Generation**](#text-to-music-generation)
  - [Stable Audio Open Small](#stable-audio-open-small)

- [**Audio Source Separation**](#audio-source-separation)
  - [HTDemucs](#htdemucs)

- [**Vision-Language**](#vision-language)
  - [Florence-2-base](#florence-2-base)

- [**Language Model**](#language-model)
  - [Gemma 4 E2B (text + image + audio + video)](#gemma-4-e2b-coreml-llm)
  - [Gemma 4 E4B (text)](#gemma-4-e4b)
  - [Qwen3.5 2B (text)](#qwen35-2b)
  - [Qwen3.5 0.8B (text)](#qwen35-08b)
  - [Qwen3-VL 2B (text + image)](#qwen3-vl-2b)

- [**Zero-Shot Image Classification**](#zero-shot-image-classification)
  - [SigLIP ViT-B/16](#siglip-vit-b16)

- [**Anomaly Detection**](#anomaly-detection)
  - [EfficientAD](#efficientad)

- [**Music Transcription**](#music-transcription)
  - [Basic Pitch](#basic-pitch)

# How to get the model
You can get the model converted to CoreML format from the link of Google drive.
See the section below for how to use it in Xcode.
The license for each model conforms to the license for the original project.

# Image Classifier

### Efficientnet

<img width="400" alt="スクリーンショット 2021-12-27 6 34 43" src="https://user-images.githubusercontent.com/23278992/147420587-108b87f8-7996-4288-905a-ad53f9142221.png">

| Google Drive Link | Size | Dataset |Original Project | License |
| ------------- | ------------- | ------------- |------------- |------------- |
| [Efficientnetb0](https://drive.google.com/file/d/1mJq8SMuDaCQHW77ui3fAfe5o3Qu2GKMi/view?usp=sharing) | 22.7 MB | ImageNet | [TensorFlowHub](https://tfhub.dev/tensorflow/efficientnet/b0/classification/1)  |[Apache2.0](https://opensource.org/licenses/Apache-2.0)|


### Efficientnetv2

<img width="400" alt="スクリーンショット 2021-12-31 4 30 22" src="https://user-images.githubusercontent.com/23278992/147782567-bbf26186-8c84-4073-8df4-b08e06d4e791.png">

| Google Drive Link | Size | Dataset |Original Project | License | Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [Efficientnetv2](https://drive.google.com/file/d/12JiGwXh8pX3yjoG_GsJOKAnPd3lbVrrn/view?usp=sharing) | 85.8 MB | ImageNet | [Google/autoML](https://github.com/google/automl/tree/master/efficientnetv2)  | [Apache2.0](https://github.com/google/automl/blob/master/LICENSE)|2021|

### VisionTransformer

An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale.

<img width="400" alt="スクリーンショット 2022-01-07 10 37 05" src="https://user-images.githubusercontent.com/23278992/148482246-64269fb4-fda4-4bd5-b219-5bf860fd77e7.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [VisionTransformer-B16](https://drive.google.com/file/d/1VPo8Cjv7dyicM4lcJ6TgxnD4AN3ldMQp/view?usp=sharing) | 347.5 MB | ImageNet | [google-research/vision_transformer](https://github.com/google-research/vision_transformer)  | [Apache2.0](https://github.com/google-research/vision_transformer/blob/main/LICENSE)|2021|

### Conformer

Local Features Coupling Global Representations for Visual Recognition.

<img width="400" alt="スクリーンショット 2022-01-07 11 34 33" src="https://user-images.githubusercontent.com/23278992/148482144-2d5bb7e8-ed67-4146-9f9d-c95fe94735d3.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [Conformer-tiny-p16](https://drive.google.com/file/d/1-4qVbuTYr4r4o08656iGtV8KKblAVVyr/view?usp=sharing) | 94.1 MB | ImageNet | [pengzhiliang/Conformer](https://github.com/pengzhiliang/Conformer)  | [Apache2.0](https://github.com/google-research/vision_transformer/blob/main/LICENSE)|2021|

### DeiT

Data-efficient Image Transformers

<img width="400" alt="スクリーンショット 2022-01-07 11 50 25" src="https://user-images.githubusercontent.com/23278992/148484220-38494287-49b4-4992-9ceb-9dc7b75a250e.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [DeiT-base384](https://drive.google.com/file/d/1-7J-b0fTjmZi2VDPrDCWKBsCYGxYP5yW/view?usp=sharing) | 350.5 MB | ImageNet | [facebookresearch/deit](https://github.com/facebookresearch/deit)  | [Apache2.0](https://github.com/facebookresearch/deit/blob/main/LICENSE)|2021|

### RepVGG

Making VGG-style ConvNets Great Again

<img width="400" alt="スクリーンショット 2022-01-08 5 00 53" src="https://user-images.githubusercontent.com/23278992/148600326-69dd9666-2709-4318-914b-30db8c294fd3.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [RepVGG-A0](https://drive.google.com/file/d/1i8mDvRGn2_OjzIG9ioVJyQrefVliKsh_/view?usp=sharing) | 33.3 MB | ImageNet | [DingXiaoH/RepVGG](https://github.com/DingXiaoH/RepVGG)  | [MIT](https://github.com/DingXiaoH/RepVGG/blob/main/LICENSE)|2021|

### RegNet

Designing Network Design Spaces

<img width="400" alt="スクリーンショット 2022-02-23 7 38 23" src="https://user-images.githubusercontent.com/23278992/155233183-edf61ebe-922c-4b63-8a5e-7ef6c9f7eaa8.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| [regnet_y_400mf](https://drive.google.com/file/d/16jbUJ4gHSzdxxbYb99rOQe0FiKCuLyDB/view?usp=sharing) | 16.5 MB | ImageNet | [TORCHVISION.MODELS](https://pytorch.org/vision/stable/models.html#torchvision-models)  | [MIT](https://github.com/facebookresearch/pycls/blob/main/LICENSE)|2020|


### MobileViTv2

CVNets: A library for training computer vision networks

<img width="400" alt="スクリーンショット 2022-02-23 7 38 23" src="https://user-images.githubusercontent.com/23278992/225600794-a0a4dc00-cc67-4614-82ed-3ed8633cf03e.png">

| Google Drive Link | Size | Dataset |Original Project | License |Year|Conversion Script|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |------------- |
| [MobileViTv2](https://drive.google.com/file/d/1__aG67p6o5-NIchkHpfFJBszCpIhI0uf/view?usp=share_link) | 18.8 MB | ImageNet | [apple/ml-cvnets](https://github.com/apple/ml-cvnets)  | [apple](https://github.com/apple/ml-cvnets/blob/main/LICENSE)|2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)]([https://colab.research.google.com/drive/1QiTlFsN948Xt2e4WgqUB8DnGgwWwtVZS?usp=sharing](https://colab.research.google.com/drive/1UQwhFpVP_4Q9I6LXPdBSS0VDhIRdUBQA?usp=sharing)) |

# Object Detection

### D-FINE

<img width="400" alt="D-FINE iOS Demo" src="https://github.com/user-attachments/assets/a9af3b06-dc8b-4384-88f3-765b85414b0f">

| Download Link | Size | Output | Original Project | License | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- |------------- |------------- |------------- |
|[dfine-n-coco](https://github.com/john-rocky/peaceofcake/releases/download/v0.2.0/dfine_n_coco.mlpackage.zip)|13MB| Confidence(MultiArray (Float32 300 × 80)), Coordinates (MultiArray (Float32 300 × 4)) |[Peterande/D-FINE](https://github.com/Peterande/D-FINE)|[Apache 2.0](https://github.com/Peterande/D-FINE/blob/master/LICENSE)|Input 640×640. Coordinates are normalized cxcywh. No NMS — filter by confidence threshold.| [peaceofcake DFINEDemo](https://github.com/john-rocky/peaceofcake/tree/main/DFINEDemo) |

### RF-DETR

<img width="400" alt="RF-DETR iOS Demo" src="https://github.com/user-attachments/assets/bde0438e-5c56-4528-a083-2952106e8073">

| Download Link | Size | Output | Original Project | License | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- |------------- |------------- |------------- |
|[rfdetr-n-coco](https://github.com/john-rocky/peaceofcake/releases/download/v0.2.0/rfdetr_n_coco.mlpackage.zip)|95MB| Confidence(MultiArray (Float32 300 × 91)), Coordinates (MultiArray (Float32 300 × 4)) |[roboflow/rf-detr](https://github.com/roboflow/rf-detr)|[Apache 2.0](https://github.com/roboflow/rf-detr/blob/main/LICENSE)|Input 384×384. 91 classes (index 0 = background, 1-90 = COCO category IDs). Coordinates are normalized cxcywh. No NMS.| [peaceofcake DFINEDemo](https://github.com/john-rocky/peaceofcake/tree/main/DFINEDemo) |

### YOLOv5s

<img width="400" alt="スクリーンショット 2021-12-29 6 17 08" src="https://user-images.githubusercontent.com/23278992/147608051-be2ff345-22e8-4f82-83ed-7cc41ce4084d.png">

| Google Drive Link | Size | Output | Original Project | License | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- |------------- |------------- |------------- |
|[YOLOv5s](https://drive.google.com/file/d/1KT-9eKO4F-LYIJVYJg7dy2LEW_hVUq0M/view?usp=sharing)|29.3MB| Confidence(MultiArray (Double 0 × 80)), Coordinates (MultiArray (Double 0 × 4)) |[ultralytics/yolov5](https://github.com/ultralytics/yolov5)|[GNU](https://github.com/ultralytics/yolov5/blob/master/LICENSE)|Non Maximum Suppression has been added.| [CoreML-YOLOv5](https://github.com/john-rocky/CoreML-YOLOv5) |

### YOLOv7

<img width="400" alt="スクリーンショット 2021-12-29 6 17 08" src="https://user-images.githubusercontent.com/23278992/178128011-e0056777-0c2a-495b-b132-7741cc693077.png">

| Google Drive Link | Size | Output | Original Project | License | Note | Sample Project | Conversion Script |
| ------------- | ------------- | ------------- | ------------- |------------- |------------- |------------- |------------- |
|[YOLOv7](https://drive.google.com/file/d/1EKBC7tiwP1tDvXUm_ldD1Nq7hW8HofLe/view?usp=sharing)|147.9MB| Confidence(MultiArray (Double 0 × 80)), Coordinates (MultiArray (Double 0 × 4)) |[WongKinYiu/yolov7](https://github.com/WongKinYiu/yolov7)|[GNU](https://github.com/WongKinYiu/yolov7/blob/main/LICENSE.md)|Non Maximum Suppression has been added.| [CoreML-YOLOv5](https://github.com/john-rocky/CoreML-YOLOv5) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1QiTlFsN948Xt2e4WgqUB8DnGgwWwtVZS?usp=sharing) |

### YOLOv8

<img width="400" alt="スクリーンショット 2021-12-29 6 17 08" src="https://user-images.githubusercontent.com/23278992/211807010-d48854b3-beb0-46a8-bd99-cbb9351529b0.png">

| Google Drive Link | Size | Output | Original Project | License | Note | Sample Project | 
| ------------- | ------------- | ------------- | ------------- |------------- |------------- |------------- |
|[YOLOv8s](https://drive.google.com/file/d/1pLRh1Y37KLEMpQn3v8qH-A12swakoHbI/view?usp=share_link)|45.1MB| Confidence(MultiArray (Double 0 × 80)), Coordinates (MultiArray (Double 0 × 4)) |[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)|[GNU](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)|Non Maximum Suppression has been added.| [CoreML-YOLOv5](https://github.com/john-rocky/CoreML-YOLOv5) |

### YOLOv9

YOLOv9: Learning What You Want to Learn Using Programmable Gradient Information. Uses PGI and GELAN architecture for efficient object detection.

| Download Link | Size | Output | Original Project | License | Year | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yolov9s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/yolov9s.mlpackage.zip) | 14 MB | Confidence (MultiArray (Double 0 × 80)), Coordinates (MultiArray (Double 0 × 4)) | [WongKinYiu/yolov9](https://github.com/WongKinYiu/yolov9) | [GPL-3.0](https://github.com/WongKinYiu/yolov9/blob/main/LICENSE.md) | 2024 | Non Maximum Suppression has been added. | [YOLOv9Demo](sample_apps/YOLOv9Demo) |

### YOLOv10

YOLOv10: Real-Time End-to-End Object Detection. NMS-free architecture using consistent dual assignments — no post-processing needed.

| Download Link | Size | Output | Original Project | License | Year | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yolov10s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/yolov10s.mlpackage.zip) | 14 MB | MultiArray (1 × 300 × 6) | [THU-MIG/yolov10](https://github.com/THU-MIG/yolov10) | [AGPL-3.0](https://github.com/THU-MIG/yolov10/blob/main/LICENSE) | 2024 | NMS-free end-to-end detection. | [YOLO26Demo](sample_apps/YOLO26Demo) |

### YOLO11

YOLO11: Ultralytics latest YOLO with improved backbone and neck architecture. 22% fewer parameters than YOLOv8 with higher mAP.

| Download Link | Size | Output | Original Project | License | Year | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yolo11s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/yolo11s.mlpackage.zip) | 18 MB | Confidence (MultiArray (Double 0 × 80)), Coordinates (MultiArray (Double 0 × 4)) | [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | [AGPL-3.0](https://github.com/ultralytics/ultralytics/blob/main/LICENSE) | 2024 | Non Maximum Suppression has been added. | [YOLOv9Demo](sample_apps/YOLOv9Demo) |

### YOLO26

YOLO26: Edge-first vision AI with NMS-free end-to-end detection. Up to 43% faster CPU inference vs YOLO11 with DFL removal and ProgLoss.

<img width="300" src="https://github.com/user-attachments/assets/bade5e8b-25fd-4ef8-96d6-7f8dfbb954b2">

| Download Link | Size | Output | Original Project | License | Year | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yolo26s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/yolo26s.mlpackage.zip) | 18 MB | MultiArray (1 × 300 × 6) | [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | [AGPL-3.0](https://github.com/ultralytics/ultralytics/blob/main/LICENSE) | 2026 | NMS-free end-to-end detection. | [YOLO26Demo](sample_apps/YOLO26Demo) |

### YOLO-World

YOLO-World: Real-Time Open-Vocabulary Object Detection. Type any text query and detect it — no fixed class list. Uses CLIP text encoder for open-vocabulary matching.

<img width="300" src="https://github.com/user-attachments/assets/999e063a-9ace-49b0-808e-e330516e1896">

| Download Link | Size | Description | Original Project | License | Year | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yoloworld_detector.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/yoloworld_detector.mlpackage.zip) | 25 MB | YOLO-World V2-S visual detector | [AILab-CVC/YOLO-World](https://github.com/AILab-CVC/YOLO-World) | [GPL-3.0](https://github.com/AILab-CVC/YOLO-World/blob/master/LICENSE) | 2024 | [YOLOWorldDemo](sample_apps/YOLOWorldDemo) |
| [clip_text_encoder.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/clip_text_encoder.mlpackage.zip) | 121 MB | CLIP ViT-B/32 text encoder | [openai/CLIP](https://github.com/openai/CLIP) | [MIT](https://github.com/openai/CLIP/blob/main/LICENSE) | 2021 | — |
| [clip_vocab.json.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yolo-models-v1/clip_vocab.json.zip) | 1.6 MB | BPE vocabulary for tokenizer | — | — | — | — |

### YOLOE

YOLOE: Real-Time Open-Vocabulary **Detection + Instance Segmentation**. Detect *and* segment anything from a text query or a visual prompt (box an example object) — no fixed class list. Available in **S** (fast) and **L** (accurate). See [YOLOEDemo](sample_apps/YOLOEDemo) for the region-embedding + MobileCLIP pipeline.

<img width="250" src="https://github.com/user-attachments/assets/739f9c8c-474f-4b91-be5b-40f4987ca319"> <img width="250" src="https://github.com/user-attachments/assets/e5767541-6021-4933-b1c1-91d762e9e878">

| Download Link | Size | Description | Original Project | License | Year | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [yoloe_detector_s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/yoloe_detector_s.mlpackage.zip) | 20 MB | YOLOE-11**s**-seg region-embedding detector + segmentation | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | [YOLOEDemo](sample_apps/YOLOEDemo) |
| [yoloe_detector_l.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/yoloe_detector_l.mlpackage.zip) | 54 MB | YOLOE-11**l**-seg region-embedding detector + segmentation | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | [YOLOEDemo](sample_apps/YOLOEDemo) |
| [reprta_s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/reprta_s.mlpackage.zip) | 6 MB | YOLOE RepRTA text-refinement MLP (S) | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | — |
| [reprta_l.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/reprta_l.mlpackage.zip) | 6 MB | YOLOE RepRTA text-refinement MLP (L) | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | — |
| [visual_prompt_encoder_s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/visual_prompt_encoder_s.mlpackage.zip) | 20 MB | YOLOE SAVPE visual-prompt encoder (S): image + box → query | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | [YOLOEDemo](sample_apps/YOLOEDemo) |
| [visual_prompt_encoder_l.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/visual_prompt_encoder_l.mlpackage.zip) | 54 MB | YOLOE SAVPE visual-prompt encoder (L): image + box → query | [THU-MIG/yoloe](https://github.com/THU-MIG/yoloe) | [AGPL-3.0](https://github.com/THU-MIG/yoloe/blob/main/LICENSE) | 2025 | [YOLOEDemo](sample_apps/YOLOEDemo) |
| [mobileclip_blt_text.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/mobileclip_blt_text.mlpackage.zip) | 121 MB | Apple MobileCLIP B-LT text encoder (shared) | [apple/ml-mobileclip](https://github.com/apple/ml-mobileclip) | [Apple](https://github.com/apple/ml-mobileclip/blob/main/LICENSE) | 2024 | — |
| [clip_vocab.json.zip](https://github.com/john-rocky/CoreML-Models/releases/download/yoloe-v1/clip_vocab.json.zip) | 1.6 MB | BPE vocabulary for tokenizer (shared) | — | — | — | — |

# Multi-Object Tracking

### ByteTrack

ByteTrack: Multi-Object Tracking by Associating Every Detection Box. Pure-Swift on-device tracker that adds persistent IDs on top of any detector above — an 8D Kalman filter plus two-stage IoU association, no appearance / ReID network.

| Implementation | Source | Paper | License | Year | Note | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Pure Swift (no download) | [Tracker.swift](sample_apps/YOLO26Demo/YOLO26Demo/Tracker.swift) | [ByteTrack (arXiv 2110.06864)](https://arxiv.org/abs/2110.06864) | MIT (this port) / [Original](https://github.com/ifzhang/ByteTrack/blob/main/LICENSE) | 2022 | 8D Kalman + two-stage IoU association, class-aware, greedy matching, lost-track buffer of 30 frames. Drop-in on top of any `[Detection]` stream. | [YOLO26Demo](sample_apps/YOLO26Demo) |

# Segmentation

### [U2Net](https://drive.google.com/file/d/1cpm-x12Ih7Cqd_kOjfTvtt4ipGS3BpCx/view?usp=sharing)
<img width="400" src="https://camo.qiitausercontent.com/a8e89c72c0950db66d63415b9010d203aae22617/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233353235392f36303037393162322d633534332d613537652d303639622d3863663130373932643662392e6a706567"> <img width="400" src="https://camo.qiitausercontent.com/4f502487cd9e9e02d150ad63b33683a1446e7516/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233353235392f39636532633237612d643134322d663136352d343365662d6532373966646337386333382e706e67">

| Google Drive Link | Size | Output |Original Project | License |
| ------------- | ------------- | ------------- | ------------- |------------- |
| [U2Net](https://drive.google.com/file/d/1cpm-x12Ih7Cqd_kOjfTvtt4ipGS3BpCx/view?usp=sharing) | 175.9 MB | Image(GRAYSCALE 320 × 320)| [xuebinqin/U-2-Net](https://github.com/xuebinqin)  | [Apache](https://github.com/john-rocky/CoreML-Models/blob/master/Apache-LICENSE)|
| [U2Netp](https://drive.google.com/file/d/1D-quPGy33PzSEC6A7EBNv7mCyuiBlO08/view?usp=sharing) | 4.6 MB | Image(GRAYSCALE 320 × 320) | [xuebinqin/U-2-Net](https://github.com/xuebinqin)  |  [Apache](https://github.com/john-rocky/CoreML-Models/blob/master/Apache-LICENSE)|

### [IS-Net](https://drive.google.com/drive/folders/13CkOTBCYc3FjGTU26lmCsRYsOkeHnAMA?usp=sharing)
<img width="400" src="https://user-images.githubusercontent.com/23278992/179818731-b919c8a2-f5c9-4a80-8666-e3034d1e86f0.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/179818740-38336aec-c9c5-4471-b529-ae45286062b5.JPG">
<img width="400" src="https://user-images.githubusercontent.com/23278992/186722092-3b8ed1a1-4a03-4357-9bfd-9ec213e7d87d.jpeg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/186791654-42b4ba54-f06f-43d3-805b-5bb89e5df272.JPG">

| Google Drive Link | Size | Output |Original Project | License | Year | Conversion Script |
| ------------- | ------------- | ------------- | ------------- |------------- | ------------- |------------- |
| [IS-Net](https://drive.google.com/drive/folders/13CkOTBCYc3FjGTU26lmCsRYsOkeHnAMA?usp=sharing) | 176.1 MB | Image(GRAYSCALE 1024 × 1024)| [xuebinqin/DIS](https://github.com/xuebinqin/DIS)  | [Apache](https://github.com/xuebinqin/DIS/blob/main/LICENSE.md)| 2022 |[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1xWD7LZbI-_09LXmiYMdhA28V2qujvOlZ?usp=sharing)|
| [IS-Net-General-Use](https://drive.google.com/file/d/1Vglh1zPwTglroMvycnkLdFP6nCHf_GuH/view?usp=sharing) | 176.1 MB | Image(GRAYSCALE 1024 × 1024)| [xuebinqin/DIS](https://github.com/xuebinqin/DIS)  | [Apache](https://github.com/xuebinqin/DIS/blob/main/LICENSE.md)| 2022 |[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1xWD7LZbI-_09LXmiYMdhA28V2qujvOlZ?usp=sharing)|

### RMBG1.4

RMBG1.4 - The IS-Net enhanced with our unique training scheme and proprietary dataset. 

<img src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/2a91ec10-fe94-43be-aedc-283e71fa9a1e" width=400> <img src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/04af501d-996d-48f4-b008-f0076dcbc117" width=400>

| Download Link | Size | Output |Original Project | License | year  | Sample Project | Conversion Script |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- |------------- |------------- |
| [RMBG_1_4.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/rmbg-v1/RMBG_1_4.mlpackage.zip) | 42 MB (INT8) | Alpha mask 1024x1024 |[briaai/RMBG-1.4](https://huggingface.co/briaai/RMBG-1.4) | [Creative Commons](https://huggingface.co/briaai/RMBG-1.4) |2024| [RMBGDemo](sample_apps/RMBGDemo) | [convert_rmbg.py](conversion_scripts/convert_rmbg.py) |

### face-Parsing

<img src="https://user-images.githubusercontent.com/23278992/147860040-14a7e022-5490-4e51-98cd-cd421066dd8c.png" width=400> <img src="https://user-images.githubusercontent.com/23278992/147860042-d27f37b0-227b-45ab-8d76-f6c6f2f5b3a4.png" width=400>

| Google Drive Link | Size | Output |Original Project | License | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [face-Parsing](https://drive.google.com/file/d/1I_cu8x0k6d1AEV_VPLyMu3Pqg3hwmo7g/view?usp=sharing) | 53.2 MB | MultiArray(1 x 512 × 512)| [zllrunning/face-parsing.PyTorch](https://github.com/zllrunning/face-parsing.PyTorch)  | [MIT](https://github.com/zllrunning/face-parsing.PyTorch/blob/master/LICENSE)|[CoreML-face-parsing](https://github.com/john-rocky/CoreML-Face-Parsing) |

### Segformer

Simple and Efficient Design for Semantic Segmentation with Transformers

<img src="https://user-images.githubusercontent.com/23278992/148621010-5ecf6b90-c501-4cf8-91e1-446850030265.png" width=400> <img src="https://user-images.githubusercontent.com/23278992/148621013-44d9cd29-ef3c-4250-bbd9-4e4093385a54.JPG" width=400>

| Google Drive Link | Size | Output |Original Project | License | year |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [SegFormer_mit-b0_1024x1024_cityscapes](https://drive.google.com/file/d/1-lcNjJM85DZh5-xQv4jlKL6I1ZMBk2uu/view?usp=sharing) | 14.9 MB | MultiArray(512 × 1024)| [NVlabs/SegFormer](https://github.com/NVlabs/SegFormer)  | [NVIDIA](https://github.com/NVlabs/SegFormer/blob/master/LICENSE)|2021|

### BiSeNetV2	

Bilateral Network with Guided Aggregation for Real-time Semantic Segmentation

<img src="https://user-images.githubusercontent.com/23278992/148663182-c1f3b9dd-8db4-49be-bf92-97a898a8b477.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/148663183-327dc684-342d-43f1-a8d8-ebf817c91bdd.JPG" width=400>

| Google Drive Link | Size | Output |Original Project | License | year |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [BiSeNetV2_1024x1024_cityscapes](https://drive.google.com/file/d/1-20x0-TP8zqXCzDhH06TyL03SJRFYY9n/view?usp=sharing) | 12.8 MB | MultiArray | [ycszen/BiSeNet](https://github.com/ycszen/BiSeNet)  | Apache2.0 |2021|

### DNL

Disentangled Non-Local Neural Networks

<img src="https://user-images.githubusercontent.com/23278992/150061280-23a1de7c-2e12-41d2-9056-7c4b375193a6.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150061290-eed50b79-f5c0-4fa4-b5bf-728b9029f34c.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [dnl_r50-d8_512x512_80k_ade20k](https://drive.google.com/file/d/1DOnPGocotsjXknBuNqikgpFVpmH6s_E3/view?usp=sharing) | 190.8 MB | MultiArray[512x512] |ADE20K| [yinmh17/DNL-Semantic-Segmentation](https://github.com/yinmh17/DNL-Semantic-Segmentation)  | [Apache2.0](https://github.com/yinmh17/DNL-Semantic-Segmentation/blob/master/LICENSE) |2020|

### ISANet

Interlaced Sparse Self-Attention for Semantic Segmentation

<img src="https://user-images.githubusercontent.com/23278992/150234575-7dcb8521-4ebd-46aa-bd19-4c1036b514dc.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150234561-41478d2a-b411-48df-9980-8553c381e530.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [isanet_r50-d8_512x512_80k_ade20k](https://drive.google.com/file/d/114ypGU9S1BOT2otl7P_gsmZbA3bCmz5K/view?usp=sharing) | 141.5 MB | MultiArray[512x512] |ADE20K| [openseg-group/openseg.pytorch](https://github.com/openseg-group/openseg.pytorch) | [MIT](https://github.com/openseg-group/openseg.pytorch/blob/master/LICENSE) |ArXiv'2019/IJCV'2021|

### FastFCN

Rethinking Dilated Convolution in the Backbone for Semantic Segmentation

<img src="https://user-images.githubusercontent.com/23278992/150237380-3b8522e6-e310-436e-b5c3-60b7ff8cb606.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150237372-1d17f4e2-cf1b-49f0-82b8-d9e6644ff465.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [fastfcn_r50-d32_jpu_aspp_512x512_80k_ade20k](https://drive.google.com/file/d/1-2CUR1M-a4xzUxdf5enU_9cUdxONmFbT/view?usp=sharing) | 326.2 MB | MultiArray[512x512] |ADE20K| [wuhuikai/FastFCN](https://github.com/wuhuikai/FastFCN) | [MIT](https://github.com/wuhuikai/FastFCN/blob/master/LICENSE) |ArXiv'2019|

### GCNet

Non-local Networks Meet Squeeze-Excitation Networks and Beyond

<img src="https://user-images.githubusercontent.com/23278992/150239404-9d6438ec-cee5-44b9-9179-436ac5ceaab2.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150239421-cceaae77-eb6b-468d-a069-72750fc6b0f4.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [gcnet_r50-d8_512x512_20k_voc12aug](https://drive.google.com/file/d/1-DfjorbUDFXOVasSPoGk7GP1XC_OnNVT/view?usp=sharing) | 189 MB | MultiArray[512x512] |PascalVOC| [xvjiarui/GCNet](https://github.com/xvjiarui/GCNet) | [Apache License 2.0](https://github.com/xvjiarui/GCNet/blob/master/LICENSE) |ICCVW'2019/TPAMI'2020|

### DANet

Dual Attention Network for Scene Segmentation(CVPR2019)

<img src="https://user-images.githubusercontent.com/23278992/150419837-980a0e0f-6333-4853-b638-6e6854e093e3.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150419740-052fca9b-0519-440c-bffd-5abc7a5ac240.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [danet_r50-d8_512x1024_40k_cityscapes](https://drive.google.com/file/d/1A45r_725V7edPTSrjA4T-T03rPD6Sj2z/view?usp=sharing) | 189.7 MB | MultiArray[512x1024] |CityScapes| [junfu1115/DANet](https://github.com/junfu1115/DANet/) | [MIT](https://github.com/junfu1115/DANet/blob/master/LICENSE) |CVPR2019|

### Semantic-FPN

Panoptic Feature Pyramid Networks

<img src="https://user-images.githubusercontent.com/23278992/150614015-6b712113-6b8f-484e-88dc-124b76229153.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/150614022-590eb6fa-075f-4ff7-8ad5-b9d502b8763b.png" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [fpn_r50_512x1024_80k_cityscapes](https://drive.google.com/file/d/1_IVhCnJ--54P7qVGLo8-ks_LRGXJQXht/view?usp=sharing) | 108.6 MB | MultiArray[512x1024] |CityScapes| [facebookresearch/detectron2](https://github.com/facebookresearch/detectron2) | [Apache License 2.0](https://github.com/facebookresearch/detectron2/blob/main/LICENSE) |2019|

### cloths_segmentation

Code for binary segmentation of various cloths.

<img src="https://user-images.githubusercontent.com/23278992/154873792-54c12be0-d446-4789-bf00-bb89cab5a566.jpg" width=400> <img src="https://user-images.githubusercontent.com/23278992/154873786-2b90e0d9-dd86-4397-8977-ea1464ca2f75.JPG" width=400>

| Google Drive Link | Size | Output |Dataset|Original Project | License | year |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- | ------------- |
| [clothSegmentation](https://drive.google.com/file/d/1-2AydEgkth6UTD5bu13R0fJYoqZZMG3e/view?usp=sharing) | 50.1 MB | Image(GrayScale 640x960) |[fashion-2019-FGVC6](https://www.kaggle.com/c/imaterialist-fashion-2019-FGVC6)| [facebookresearch/detectron2](https://github.com/facebookresearch/detectron2) | [MIT](https://github.com/ternaus/cloths_segmentation/blob/main/LICENSE) |2020|

### easyportrait

EasyPortrait - Face Parsing and Portrait Segmentation Dataset.

<img src="https://github.com/john-rocky/CoreML-Models/assets/23278992/6ab8ed6a-2de7-43fd-bb84-2fb77286bd6c" width=400> <img src="https://github.com/john-rocky/CoreML-Models/assets/23278992/a0b8e435-d04e-4a88-940b-bd5fb45cbc15" width=400>

| Google Drive Link | Size | Output |Original Project | License | year | Swift sample |Conversion Script |
| ------------- | ------------- | ------------- |------------- | ------------- | ------------- |------------- |------------- |
| [easyportrait-segformer512-fp](https://drive.google.com/drive/folders/13BUhNpQHodAgcj6eJaPbzuSUaFn3JuU-?usp=sharing) | 7.6 MB | Image(GrayScale 512x512) * 9 |[hukenovs/easyportrait](https://github.com/hukenovs/easyportrait) | [Creative Commons](https://github.com/hukenovs/easyportrait/tree/main/license) |2023|[easyportrait-coreml](https://github.com/john-rocky/easyportrait-coreml)|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/11a3XWFA8fa8V0a2zgWFqOMUaZgF4O1qt?usp=sharing)|

### MobileSAM

Faster Segment Anything: Towards Lightweight SAM for Mobile Applications. MobileSAM replaces the heavy ViT-H image encoder with a lightweight ViT-Tiny encoder via decoupled knowledge distillation, making it ~60x smaller and ~40x faster than the original SAM.
<img src="https://github.com/user-attachments/assets/2a4364ee-a3fc-4e40-a0bb-b3c7c9bfa0f5" width=200>
| Download Link | Size | Output | Original Project | License | Year | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [MobileSAM.zip](https://github.com/john-rocky/SamKit/releases/download/v1.0.0/MobileSAM.zip) | 23 MB (Encoder 13 MB + Decoder 9.8 MB) | Segmentation Mask | [ChaoningZhang/MobileSAM](https://github.com/ChaoningZhang/MobileSAM) | [Apache 2.0](https://github.com/ChaoningZhang/MobileSAM/blob/master/LICENSE) | 2023 | [SamKit](https://github.com/john-rocky/SamKit) |

### SAM2-Tiny

SAM 2: Segment Anything in Images and Videos. SAM 2 extends promptable segmentation from images to videos using a streaming architecture with memory. The Tiny variant uses a Hiera-T backbone for efficient on-device inference.

| Download Link | Size | Output | Original Project | License | Year | Sample Project |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [SAM2Tiny.zip](https://github.com/john-rocky/SamKit/releases/download/v1.0.0/SAM2Tiny.zip) | 76 MB (ImageEncoder 64 MB + PromptEncoder 2 MB + MaskDecoder 9.8 MB) | Segmentation Mask | [facebookresearch/sam2](https://github.com/facebookresearch/sam2) | [Apache 2.0](https://github.com/facebookresearch/sam2/blob/main/LICENSE) | 2024 | [SamKit](https://github.com/john-rocky/SamKit) |

### FastSAM

Fast Segment Anything — a **YOLOv8-seg** instance segmenter (not a SAM encoder/decoder): one forward pass segments everything and point/box prompts just *select* among them, the fastest SAM-family option for real-time use. FastSAM-s (light) / FastSAM-x (quality).

| Download Link | Size | Output | Original Project | License | Year | Sample Project | Conversion Script |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [FastSAM_s.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/fastsam-v1/FastSAM_s.mlpackage.zip) | ~23 MB FP16 | Instance masks | [CASIA-IVA-Lab/FastSAM](https://github.com/CASIA-IVA-Lab/FastSAM) | [AGPL-3.0](https://github.com/CASIA-IVA-Lab/FastSAM/blob/main/LICENSE) | 2023 | [FastSAMDemo](sample_apps/FastSAMDemo) · [SamKit](https://github.com/john-rocky/SamKit) | [convert_fastsam.py](conversion_scripts/convert_fastsam.py) |
| [FastSAM_x.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/fastsam-v1/FastSAM_x.mlpackage.zip) | ~138 MB FP16 | Instance masks | [CASIA-IVA-Lab/FastSAM](https://github.com/CASIA-IVA-Lab/FastSAM) | [AGPL-3.0](https://github.com/CASIA-IVA-Lab/FastSAM/blob/main/LICENSE) | 2023 | [FastSAMDemo](sample_apps/FastSAMDemo) · [SamKit](https://github.com/john-rocky/SamKit) | [convert_fastsam.py](conversion_scripts/convert_fastsam.py) |

Note: AGPL-3.0 (Ultralytics YOLOv8), unlike the Apache-2.0 SAM family.

# Video Matting

### MatAnyone

[pq-yang/MatAnyone](https://github.com/pq-yang/MatAnyone) (CVPR 2025) — temporally consistent video matting with object-level memory propagation. From a first-frame mask it tracks and refines an alpha matte across the whole clip, holding sharp edges (hair, semitransparent regions) far better than per-frame baselines.

| Download Link | Size | Input | Output | Original Project | License | Year | Sample Project | Conversion Script |
| ------------- | ---- | ----- | ------ | ---------------- | ------- | ---- | -------------- | ----------------- |
| MatAnyone (5 mlpackages, ~111 MB FP16 total) | 111 MB | image [1,3,432,768] (per-frame state in Swift) | alpha matte [1,1,432,768] | [pq-yang/MatAnyone](https://github.com/pq-yang/MatAnyone) | [NTU S-Lab 1.0](https://github.com/pq-yang/MatAnyone/blob/main/LICENSE) | 2025 | [MatAnyoneDemo](sample_apps/MatAnyoneDemo) | [convert_matanyone.py](conversion_scripts/convert_matanyone.py) |

See [`sample_apps/MatAnyoneDemo/README.md`](sample_apps/MatAnyoneDemo/README.md) for the per-frame state machine, the 5-module split, and conversion details.

# Super Resolution

### [Real ESRGAN](https://drive.google.com/file/d/1cpm-x12Ih7Cqd_kOjfTvtt4ipGS3BpCx/view?usp=sharing)
<img width="400" src="https://user-images.githubusercontent.com/23278992/147418147-47f2089f-80ea-4688-ac06-7d9c4b46a08e.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/147418143-b8f89073-afa1-4c5c-95e9-2ee8a00a94b9.JPG"> 

| Google Drive Link | Size | Output |Original Project | License | year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [Real ESRGAN4x](https://drive.google.com/file/d/16JEWh48fgQc8az7avROePOd-PYda0Yi2/view?usp=sharing) | 66.9 MB | Image(RGB 2048x2048)| [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)  | [BSD 3-Clause License](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE) |2021|
| [Real ESRGAN Anime4x](https://drive.google.com/file/d/1qXdLx46Lpqya7Txc5Wvgkd2Dqlnqm3Qm/view?usp=sharing) | 66.9 MB | Image(RGB 2048x2048)| [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)  | [BSD 3-Clause License](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE) |2021|

### [GFPGAN](https://drive.google.com/file/d/1-3fF4aPnh8ygUOmKItIrZ318xI9JGmQx/view?usp=sharing)

Towards Real-World Blind Face Restoration with Generative Facial Prior

<img width="400" src="https://user-images.githubusercontent.com/23278992/186315786-56634605-e357-4e9e-a0d9-51bb526bf69f.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/186316328-1fc64a6f-a443-4df2-bb86-0af343cd8a64.png"> 

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [GFPGAN](https://drive.google.com/file/d/1-3fF4aPnh8ygUOmKItIrZ318xI9JGmQx/view?usp=sharing) | 337.4 MB | Image(RGB 512x512)| [TencentARC/GFPGAN](https://github.com/TencentARC/GFPGAN)  | [Apache2.0](https://github.com/TencentARC/GFPGAN/blob/master/LICENSE) |2021|

### [BSRGAN](https://drive.google.com/file/d/1-3K89vJZ5OUAh4xdSAifgnL52jbl2fVf/view?usp=sharing)
<img width="400" src="https://user-images.githubusercontent.com/23278992/148810656-4c5faa33-1be9-45f6-b31a-defd931cb1f8.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/148811822-56844bc7-b197-44d5-8454-757890c890b5.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [BSRGAN](https://drive.google.com/file/d/1-3K89vJZ5OUAh4xdSAifgnL52jbl2fVf/view?usp=sharing) | 66.9 MB | Image(RGB 2048x2048)| [cszn/BSRGAN](https://github.com/cszn/BSRGAN)  |  |2021|

### [A-ESRGAN](https://drive.google.com/file/d/1-0rKVQtFXNWfIBIpvyemjuO3O00GZBeb/view?usp=sharing)
<img width="400" src="https://user-images.githubusercontent.com/23278992/151077592-a993a19c-8a05-471a-8924-c7302f7af84b.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/151077667-62bdbe2b-8e00-4816-945a-14890ccf1bcd.png"> 

| Google Drive Link | Size | Output |Original Project | License |year |Conversion Script|
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
| [A-ESRGAN](https://drive.google.com/file/d/1-0rKVQtFXNWfIBIpvyemjuO3O00GZBeb/view?usp=sharing) | 63.8 MB | Image(RGB 1024x1024)| [aesrgan/A-ESRGANN](https://github.com/aesrgan/A-ESRGAN)  | [BSD 3-Clause License](https://github.com/aesrgan/A-ESRGAN/blob/main/LICENSE) |2021|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1UxtSXnVYOXEfTVdIeoP7HQEjsyVbqOKa?usp=sharing)|

### [Beby-GAN](https://drive.google.com/file/d/1bJ7_NgR2KXI46JiFk5hH_6IdCHMyhN05/view?usp=sharing)

Best-Buddy GANs for Highly Detailed Image Super-Resolution

<img width="400" src="https://user-images.githubusercontent.com/23278992/151282027-14a5d386-60a8-4152-bff1-a0416db81d7a.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/151282014-1177b73d-a2b3-40eb-9a87-9cbe8ace504b.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [Beby-GAN](https://drive.google.com/file/d/1bJ7_NgR2KXI46JiFk5hH_6IdCHMyhN05/view?usp=sharing) | 66.9 MB | Image(RGB 2048x2048)| [dvlab-research/Simple-SR](https://github.com/dvlab-research/Simple-SR)  | [MIT](https://github.com/dvlab-research/Simple-SR/blob/master/LICENSE) |2021|

### [RRDN](https://drive.google.com/file/d/1-M30vR0xMuYDn2p5O4KZrUnUXy4SNThF/view?usp=sharing)

The Residual in Residual Dense Network for image super-scaling.

<img width="400" src="https://user-images.githubusercontent.com/23278992/152622988-795c1279-43f7-4d8a-a2ea-a786bcd6a34b.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/152622984-fbc911c5-901c-4ce3-93b6-753f35dea531.png">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [RRDN](https://drive.google.com/file/d/1-M30vR0xMuYDn2p5O4KZrUnUXy4SNThF/view?usp=sharing) | 16.8 MB | Image(RGB 2048x2048)| [idealo/image-super-resolution](https://github.com/idealo/image-super-resolution)  | [Apache2.0](https://github.com/idealo/image-super-resolution/blob/master/LICENSE) |2018|


### [Fast-SRGAN](https://drive.google.com/file/d/1gYXbhcSUm5rhcCAmwLruonAhu8jvyDL8/view?usp=sharing)

Fast-SRGAN.

<img width="400" src="https://user-images.githubusercontent.com/23278992/156285673-a6239cec-41ec-46d8-a2fa-d0ad21498f1d.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/156285686-8d0333a2-b07f-4aa2-8a44-fe959758289f.png">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [Fast-SRGAN](https://drive.google.com/file/d/1gYXbhcSUm5rhcCAmwLruonAhu8jvyDL8/view?usp=sharing) | 628 KB | Image(RGB 1024x1024)| [HasnainRaz/Fast-SRGAN](https://github.com/HasnainRaz/Fast-SRGAN)  | [MIT](https://github.com/HasnainRaz/Fast-SRGAN/blob/master/LICENSE) |2019|

### [ESRGAN](https://drive.google.com/file/d/1fkRbh_gckuFlgr357OIdOrEJK4T_2Xkz/view?usp=sharing)

Enhanced-SRGAN.

<img width="400" src="https://user-images.githubusercontent.com/23278992/156899173-bdc1ceed-c3f6-4abd-b217-18667fc88cf6.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/156899267-65343f4e-a963-4680-83ba-7ecd7e6680a5.jpg">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [ESRGAN](https://drive.google.com/file/d/1fkRbh_gckuFlgr357OIdOrEJK4T_2Xkz/view?usp=sharing) | 66.9 MB | Image(RGB 2048x2048)| [xinntao/ESRGAN](https://github.com/xinntao/ESRGAN)  | [Apache 2.0](https://github.com/xinntao/ESRGAN/blob/master/LICENSE) |2018|

### [UltraSharp](https://drive.google.com/drive/folders/1-Q1SdS8iHWTfTs7FE39pUTEubPks30Ca?usp=drive_link)

Pretrained: 4xESRGAN

<img width="400" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/b98ab056-23b0-486e-a52c-a88e857c1048"> <img width="400" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/d4214ded-c9d2-4f18-8de3-222f912862b0">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [UltraSharp](https://drive.google.com/drive/folders/1-Q1SdS8iHWTfTs7FE39pUTEubPks30Ca?usp=drive_link) | 34 MB | Image(RGB 1024x1024)| [Kim2019/](https://openmodeldb.info/models/4x-UltraSharp)  | [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja) |2021|

### [SRGAN](https://drive.google.com/file/d/1-076W2o0wCtoODptikX1eOnlFBx2s3qK/view?usp=sharing)

Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network.

<img width="400" src="https://user-images.githubusercontent.com/23278992/156899475-172b7ac5-a6ca-4b0b-a6d8-f0d0ddea986e.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/156899476-641af271-9b2e-4122-a048-099700d8335a.png">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [SRGAN](https://drive.google.com/file/d/1-076W2o0wCtoODptikX1eOnlFBx2s3qK/view?usp=sharing) | 6.1 MB | Image(RGB 2048x2048)| [dongheehand/SRGAN-PyTorch](https://github.com/dongheehand/SRGAN-PyTorch)  |  |2017|

### [SRResNet](https://drive.google.com/file/d/1-2kYZgF_Z6vntrRsHmRiwyHJg5TC1PSW/view?usp=sharing)

Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network.

<img width="400" src="https://user-images.githubusercontent.com/23278992/156899905-40746d09-4580-4e30-b0b4-b146fd1975c2.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/156899906-ab5c8c4e-54af-4d55-874b-5d1e0aac961f.JPG">

| Google Drive Link | Size | Output |Original Project | License |year |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [SRResNet](https://drive.google.com/file/d/1-2kYZgF_Z6vntrRsHmRiwyHJg5TC1PSW/view?usp=sharing) | 6.1 MB | Image(RGB 2048x2048)| [dongheehand/SRGAN-PyTorch](https://github.com/dongheehand/SRGAN-PyTorch)  |  |2017|

### [LESRCNN](https://drive.google.com/file/d/1-0zgxURZwqX0mAAVy69K-owE7QP-7NfJ/view?usp=sharing)

Lightweight Image Super-Resolution with Enhanced CNN.

<img width="400" src="https://user-images.githubusercontent.com/23278992/180625941-3a6b44a6-35e1-4ff9-a85b-c5efc81fc101.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/180625939-308f7176-488a-40a1-ab6e-428dc01bbf67.jpg">

| Google Drive Link | Size | Output |Original Project | License |year | Conversion Script |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
| [LESRCNN](https://drive.google.com/file/d/1-0zgxURZwqX0mAAVy69K-owE7QP-7NfJ/view?usp=sharing) | 4.3 MB | Image(RGB 512x512)| [hellloxiaotian/LESRCNN](https://github.com/hellloxiaotian/LESRCNN)  |  |2020|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1Q6piAJvXSmb-DcdFipcRUEYuHi9fnTm7?usp=sharing)|

### [MMRealSR](https://drive.google.com/file/d/1-HwMLvOy_hHycHNhojob6uT8t6tRyWqb/view?usp=sharing)

Metric Learning based Interactive Modulation for Real-World Super-Resolution

<img width="400" src="https://user-images.githubusercontent.com/23278992/186336018-9c5d5700-28a7-438e-bc07-5ca2a8e843cd.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/186336038-5e877d1a-33b1-4f54-9e4d-192f9bb765fe.png">

| Google Drive Link | Size | Output |Original Project | License |year | Conversion Script |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
| [MMRealSRGAN](https://drive.google.com/file/d/1-HwMLvOy_hHycHNhojob6uT8t6tRyWqb/view?usp=sharing) | 104.6 MB | Image(RGB 1024x1024)| [TencentARC/MM-RealSR](https://github.com/TencentARC/MM-RealSR)  | [BSD 3-Clause](https://github.com/TencentARC/MM-RealSR/blob/main/LICENSE) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1zhUhQhdtP02N2pFIxsO5lin7tDOExZCo?usp=sharing)|
| [MMRealSRNet](https://drive.google.com/file/d/1-77P8AtHFh5kca2kYZ6X7GaUueoa3el_/view?usp=sharing) | 104.6 MB | Image(RGB 1024x1024)| [TencentARC/MM-RealSR](https://github.com/TencentARC/MM-RealSR)  | [BSD 3-Clause](https://github.com/TencentARC/MM-RealSR/blob/main/LICENSE) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1zhUhQhdtP02N2pFIxsO5lin7tDOExZCo?usp=sharing)|

### [DASR](https://drive.google.com/drive/folders/10J2ehHewK2ppS5ToDqmtJ2Ei5k8vcdL0?usp=sharing)

Pytorch implementation of "Unsupervised Degradation Representation Learning for Blind Super-Resolution", CVPR 2021

<img width="400" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/7e806f4d-0323-431a-89e8-816163e5c3f5"> <img width="400" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/8589f89b-367d-4777-8ebd-6e78253c4b33">

| Google Drive Link | Size | Output |Original Project | License |year|
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |
| [DASR](https://drive.google.com/drive/folders/10J2ehHewK2ppS5ToDqmtJ2Ei5k8vcdL0?usp=sharing) | 12.1 MB | Image(RGB 1024x1024)| [The-Learning-And-Vision-Atelier-LAVA/DASR](https://github.com/The-Learning-And-Vision-Atelier-LAVA/DASR)  | [MIT](https://github.com/The-Learning-And-Vision-Atelier-LAVA/DASR/blob/main/LICENSE) |2022|


### SinSR

[wyf0912/SinSR](https://github.com/wyf0912/SinSR) — single-step diffusion-based super-resolution (CVPR 2024, ~113M params). Distilled from ResShift for one-step 4x upscaling. Uses a Swin Transformer UNet with VQ-VAE latent space.

<img width="512" src="sample_apps/SinSRDemo/sinsr_demo.png">

*Left: bicubic 4x upscale, Right: SinSR single-step diffusion SR (128x128 → 512x512)*

3 CoreML models: VQ-VAE encoder, Swin-UNet denoiser (single step), and VQ-VAE decoder with vector quantization.

| Download Link | Size | Input | Output | Original Project | License | Year | Sample Project | Conversion Script |
| ------------- | ---- | ----- | ------ | ---------------- | ------- | ---- | -------------- | ----------------- |
| [SinSR_Encoder.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/sinsr-v1/SinSR_Encoder.mlpackage.zip) | 39 MB | image [1,3,1024,1024] | latent [1,3,256,256] | [wyf0912/SinSR](https://github.com/wyf0912/SinSR) | [S-Lab](https://github.com/wyf0912/SinSR/blob/main/LICENSE) | 2024 | [SinSRDemo](sample_apps/SinSRDemo) | [convert_sinsr.py](conversion_scripts/convert_sinsr.py) |
| [SinSR_Denoiser.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/sinsr-v1/SinSR_Denoiser.mlpackage.zip) | 420 MB | input [1,6,256,256] | predicted_latent [1,3,256,256] | | | | | |
| [SinSR_Decoder.mlpackage.zip](https://github.com/john-rocky/CoreML-Models/releases/download/sinsr-v1/SinSR_Decoder.mlpackage.zip) | 58 MB | latent [1,3,256,256] | image [1,3,1024,1024] | | | | | |

See [`sample_apps/SinSRDemo/README.md`](sample_apps/SinSRDemo/README.md) for the inference pipeline and conversion details.


# Low Light Enhancement

### StableLLVE

Learning Temporal Consistency for Low Light Video Enhancement from Single Images.

<img width="400" src="https://user-images.githubusercontent.com/23278992/148664179-4d0cd417-d8f9-4d0e-bc05-cff3a4a30b5a.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/148664220-c756198f-e8c5-4ea8-8737-59c004d2f08c.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |Year|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [StableLLVE](https://drive.google.com/file/d/1-9xry7XeCJYsZadxcfTscjGi_Sna5NhM/view?usp=sharing) | 17.3 MB | Image(RGB 512x512)| [zkawfanx/StableLLVE](https://github.com/zkawfanx/StableLLVE)  | [MIT](https://github.com/zkawfanx/StableLLVE/blob/main/LICENSE) |2021|

### Zero-DCE

Zero-Reference Deep Curve Estimation for Low-Light Image Enhancement

<img width="400" src="https://user-images.githubusercontent.com/23278992/151897265-7c3c0295-69c3-4c90-9dcc-d04bbcfd41a3.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/151897430-f16d84f0-170c-4e54-a08d-ad4d5b6ca47a.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |Year|Conversion Script|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [Zero-DCE](https://drive.google.com/file/d/1-0lxlBNFm8E_y9ImhS2wxq0p1ZJlXyoA/view?usp=sharing) | 320KB | Image(RGB 512x512)| [Li-Chongyi/Zero-DCE](https://github.com/Li-Chongyi/Zero-DCE)  | [See Repo](https://github.com/Li-Chongyi/Zero-DCE) |2021|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1sh3O-4EvYv49Rlm59beH6koHe0sYxc2r?usp=sharing)|

### Retinexformer

Retinexformer: One-stage Retinex-based Transformer for Low-light Image Enhancement

<img width="256" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/296650ba-e2a9-49ba-b2d6-be02e8b56f09"> <img width="256" src="https://github.com/john-rocky/PersonSegmentationSampler/assets/23278992/eac9f78a-2b00-442a-b73f-01760268184e"> 

| Google Drive Link | Size | Output |Original Project | License |Year|Conversion Script|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [ZRetinexformer FiveK](https://drive.google.com/drive/folders/1ea6vBuLG-z4TAK4iU6vrgABAAlHuDdhy?usp=drive_link) | 3.4MB | Image(RGB 512x512)| [caiyuanhao1998/Retinexformer](https://github.com/caiyuanhao1998/Retinexformer)  | [MIT](https://github.com/caiyuanhao1998/Retinexformer?tab=MIT-1-ov-file#readme) |2023|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/10PtPI4V72Pp6PQZcrah-vClGzjKLaGGK?usp=sharing)|
| [ZRetinexformer NTIRE](https://drive.google.com/drive/folders/14piyZVwzu4Abpfgwh2HIKoubeeE-3qoq?usp=drive_link) | 3.4MB | Image(RGB 512x512)| [caiyuanhao1998/Retinexformer](https://github.com/caiyuanhao1998/Retinexformer)  | [MIT](https://github.com/caiyuanhao1998/Retinexformer?tab=MIT-1-ov-file#readme) |2023|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/10PtPI4V72Pp6PQZcrah-vClGzjKLaGGK?usp=sharing)|

# Image Restoration

### MPRNet

Multi-Stage Progressive Image Restoration.

Debluring

<img width="400" src="https://user-images.githubusercontent.com/23278992/149243725-79c68d8e-db6c-4114-ac64-738cd6b5c37c.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/149243509-7eff6ae8-65c2-45ba-bfa2-d730657ab2bd.png"> 

Denoising

<img width="400" src="https://user-images.githubusercontent.com/23278992/149241165-534c54db-7e98-4356-8613-44acb93d4c6a.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/149242199-7cc3e456-7c8d-441c-b0aa-f1b6ca19a5c9.png"> 

Deraining

<img width="400" src="https://user-images.githubusercontent.com/23278992/149241095-91791593-416e-41b0-8a95-71819cb7fb06.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/149241720-afe94607-e9c2-45bb-988d-3c322d7dde1a.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |Year|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [MPRNetDebluring](https://drive.google.com/file/d/1--5L6BxxbyYGY9ey5WCIrl7g1yYBN27U/view?usp=sharing) | 137.1 MB | Image(RGB 512x512)| [swz30/MPRNet](https://github.com/swz30/MPRNet)  | [MIT](https://github.com/swz30/MPRNet/blob/main/LICENSE.md) |2021|
| [MPRNetDeNoising](https://drive.google.com/file/d/1-04xou-UgoflZb7MqTBycCpuLWKUAj0i/view?usp=sharing) | 108 MB | Image(RGB 512x512)| [swz30/MPRNet](https://github.com/swz30/MPRNet)  | [MIT](https://github.com/swz30/MPRNet/blob/main/LICENSE.md) |2021|
| [MPRNetDeraining](https://drive.google.com/file/d/1tGvjj49yaDym24vGdGqr1VKOtGd7ALKB/view?usp=sharing) | 24.5 MB | Image(RGB 512x512)| [swz30/MPRNet](https://github.com/swz30/MPRNet)  | [MIT](https://github.com/swz30/MPRNet/blob/main/LICENSE.md) |2021|


### MIRNetv2

Learning Enriched Features for Fast Image Restoration and Enhancement.

Denoising

<img width="400" src="https://user-images.githubusercontent.com/23278992/176293658-6715e545-fe9b-4b21-b374-1394740efdde.png"> <img width="400" src="https://user-images.githubusercontent.com/23278992/176293741-dc77831a-86d0-4bdc-a667-96d318d064c4.png"> 

Super Resolution

<img width="400" src="https://user-images.githubusercontent.com/23278992/176276244-93535414-bc0e-423d-9c0a-18ba432391a4.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/176276266-75228905-2266-4c2c-b42a-026803a0da3b.jpg"> 

Contrast Enhancement

<img width="400" src="https://user-images.githubusercontent.com/23278992/176286891-563c92cd-1817-406a-babb-7dd9b0cccc01.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/176296935-bce82abf-6420-43ae-924e-5b98ee956431.jpg"> 

Low Light Enhancement

<img width="400" src="https://user-images.githubusercontent.com/23278992/176283269-145a5ce4-709a-4eea-91a7-b924b598a03d.jpg"> <img width="400" src="https://user-images.githubusercontent.com/23278992/176283354-c45a6247-b1c2-43f8-8b43-8fcf0ddac64f.jpg"> 

| Google Drive Link | Size | Output |Original Project | License |Year|Conversion Script|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| [MIRNetv2Denoising](https://drive.google.com/file/d/1-HY2AhQV84LUZMadsbIi4TGBhEntAOaF/view?usp=sharing) | 42.5 MB | Image(RGB 512x512)| [swz30/MIRNetv2](https://github.com/swz30/MIRNetv2)  | [ACADEMIC PUBLIC LICENSE](https://github.com/swz30/MIRNetv2/blob/main/LICENSE.md) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1lSWCn0et08hdS3sgKc40c7VXUvKcqCSi?usp=sharing)|
| [MIRNetv2SuperResolution](https://drive.google.com/file/d/1-BLfJj8xK_bw-GsGLfRR9uMvuA2VOqsh/view?usp=sharing) | 42.5 MB | Image(RGB 512x512)| [swz30/MIRNetv2](https://github.com/swz30/MIRNetv2)  | [ACADEMIC PUBLIC LICENSE](https://github.com/swz30/MIRNetv2/blob/main/LICENSE.md) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1lSWCn0et08hdS3sgKc40c7VXUvKcqCSi?usp=sharing)|
| [MIRNetv2ContrastEnhancement](https://drive.google.com/file/d/1--q9Decpy1ZZbSifiE26SkpXstoadpM8/view?usp=sharing) | 42.5 MB | Image(RGB 512x512)| [swz30/MIRNetv2](https://github.com/swz30/MIRNetv2)  | [ACADEMIC PUBLIC LICENSE](https://github.com/swz30/MIRNetv2/blob/main/LICENSE.md) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1lSWCn0et08hdS3sgKc40c7VXUvKcqCSi?usp=sharing)|
| [MIRNetv2LowLightEnhancement](https://drive.google.com/file/d/1Yh3FCogRfQ8k7Hh_UIZAnGwwhXHX6k6P/view?usp=sharing) | 42.5 MB | Image(RGB 512x512)| [swz30/MIRNetv2](https://github.com/swz30/MIRNetv2)  | [ACADEMIC PUBLIC LICENSE](https://github.com/swz30/MIRNetv2/blob/main/LICENSE.md) |2022|[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1lSWCn0et08hdS3sgKc40c7VXUvKcqCSi?usp=sharing)|

# Image Generation

### [MobileStyleGAN](https://drive.google.com/drive/folders/1rUV6AXwp8JhPPmkog-0r0AUGzUvN9DmW?usp=sharing)

<!-- opensource-radar:truncated -->
