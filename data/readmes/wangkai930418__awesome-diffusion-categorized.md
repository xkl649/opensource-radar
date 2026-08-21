<!-- The superlink doesn't support uppercases -->

<!-- # PostDoc position in LAMP group

We are looking for postdocs to join [LAMP group](https://groups.google.com/g/ml-news/c/penSOI3751Y?pli=1) working on Diffusion Models. -->

# Awesome Diffusion Categorized

## Contents

- [Visual Illusion](#illusion)
- [Color](#color-in-generation)
- [Count](#count-guidance)
- [Poster](#poster)
- [Accelerate](#accelerate)
    - [Train-Free](#train-free)
    - [AR model](#ar-model)
    - [VAR model](#var-model)
- [Image Restoration](#image-restoration)
    - [Colorization](#colorization)
    - [Face Restoration](#face-restoration)
    - [Image Compression](#image-compression)
    - [Super Resolution](#super-resolution)
    - [Personalized Restoration](#personalized-restoration)
- [Storytelling](#storytelling)
- [Virtual Try On](#try-on)
- [Drag Edit](#drag-edit)
- [Text-Guided Editing](#text-guided-image-editing)
    - [Diffusion Inversion](#diffusion-models-inversion)
- [Continual Learning](#continual-learning)
- [Remove Concept](#remove-concept)
- [In Context Learning](#in-context-learning)
    - [Multi-Concept](#mutiple-concepts)
    - [Decompostion](#decomposition)
    - [ID Encoder](#id-encoder)
    - [General Personalization](#general-concept)
    - [AR-based](#ar-based)
    - [Video Customization](#video-customization)
<!-- - [T2I augmentation](#t2i-diffusion-model-augmentation)
    - [Spatial Control](#spatial-control) -->
- [Image Translation](#i2i-translation)
- [Seg & Detect & Track](#segmentation-detection-tracking)
- [Adding Conditions](#additional-conditions)
- [Few-Shot](#few-shot)
- [Inpainting](#sd-inpaint)
- [Layout](#layout-generation)
<!-- - [Text Generation](#text-generation)
- [Video Generation](#video-generation)
- [Video Editing](#video-editing) -->


# Illusion 

**The Art of Deception: Color Visual Illusions and Diffusion Models** \
[[CVPR 2025](https://arxiv.org/abs/2412.10122)]
[[Project](https://openaccess.thecvf.com/content/CVPR2025/html/Gomez-Villa_The_Art_of_Deception_Color_Visual_Illusions_and_Diffusion_Models_CVPR_2025_paper.html)] 
[[Code](https://alviur.github.io/color-illusion-diffusion/)] 

**Visual Anagrams: Generating Multi-View Optical Illusions with Diffusion Models** \
[[CVPR 2024](https://arxiv.org/abs/2311.17919)]
[[Project](https://dangeng.github.io/visual_anagrams/)]
[[Code](https://github.com/dangeng/visual_anagrams)] 

**PTDiffusion: Free Lunch for Generating Optical Illusion Hidden Pictures with Phase-Transferred Diffusion Model** \
[[CVPR 2025](https://arxiv.org/abs/2503.06186)]
[[Project](https://xianggao1102.github.io/PTDiffusion_webpage/)]
[[Code](https://github.com/XiangGao1102/PTDiffusion)] 

**Factorized Diffusion: Perceptual Illusions by Noise Decomposition** \
[[ECCV 2024](https://arxiv.org/abs/2404.11615)]
[[Project](https://dangeng.github.io/factorized_diffusion/)]
[[Code](https://github.com/dangeng/visual_anagrams)] 

**Diffusion Illusions: Hiding Images in Plain Sight** \
[[Website](https://arxiv.org/abs/2312.03817)]
[[Project](https://diffusionillusions.com/)]
[[Code](https://github.com/RyannDaGreat/Diffusion-Illusions)] 

**Diffusion-based Visual Anagram as Multi-task Learning** \
[[WACV 2025](https://arxiv.org/abs/2412.02693)]
[[Code](https://github.com/Pixtella/Anagram-MTL)] 

**Evaluating Model Perception of Color Illusions in Photorealistic Scenes** \
[[Website](https://arxiv.org/abs/2412.06184)]
[[Code](https://github.com/mao1207/RCID)] 

**Illusion3D: 3D Multiview Illusion with 2D Diffusion Priors** \
[[Website](https://arxiv.org/abs/2412.09625)]
[[Project](https://3d-multiview-illusion.github.io/)] 


# Color in Generation

**ColorPeel: Color Prompt Learning with Diffusion Models via Color and Shape Disentanglement** \
[[ECCV 2024](https://arxiv.org/abs/2407.07197)] 
[[Project](https://moatifbutt.github.io/colorpeel/)]
[[Code](https://github.com/moatifbutt/color-peel)]

**Free-Lunch Color-Texture Disentanglement for Stylized Image Generation** \
[[NeurIPS 2025](https://arxiv.org/abs/2503.14275v1)] 
[[Project](https://deepffff.github.io/sadis.github.io/)] 
[[Code](https://github.com/deepffff/SADis)]

**Not Every Gift Comes in Gold Paper or with a Red Ribbon: Exploring Color Perception in Text-to-Image Models** \
[[WACV 2026](https://arxiv.org/abs/2508.19791)]
[[Project](https://tau-vailab.github.io/color-edit/)] 
[[Code](https://github.com/TAU-VAILab/color-edit)]

**Color Conditional Generation with Sliced Wasserstein Guidance** \
[[NeurIPS 2025](https://arxiv.org/abs/2503.19034)]
[[Code](https://github.com/alobashev/sw-guidance/)]

**Leveraging Semantic Attribute Binding for Free-Lunch Color Control in Diffusion Models** \
[[WACV 2026](https://arxiv.org/abs/2503.09864)]
[[Project](https://hecoding.github.io/colorwave-page/)]

**Evaluating Model Perception of Color Illusions in Photorealistic Scenes** \
[[Website](https://arxiv.org/abs/2412.06184)]
[[Code](https://github.com/mao1207/RCID)]



**Exploring Palette based Color Guidance in Diffusion Models** \
[[ACM MM 2025](https://arxiv.org/abs/2508.08754)]

**Color Me Correctly: Bridging Perceptual Color Spaces and Text Embeddings for Improved Diffusion Generation** \
[[ACM MM 2025](https://arxiv.org/abs/2509.10058)]

**GenColorBench: A Color Evaluation Benchmark for Text-to-Image Generation Models** \
[[Website](https://arxiv.org/abs/2510.20586)]

**Training-Free Text-Guided Color Editing with Multi-Modal Diffusion Transformer** \
[[Website](https://arxiv.org/abs/2508.09131)]

**DiffBrush:Just Painting the Art by Your Hands** \
[[Website](https://arxiv.org/abs/2502.20904)]

**GenColor: Generative Color-Concept Association in Visual Design** \
[[Website](https://arxiv.org/abs/2503.03236)]

**Training-free Color-Style Disentanglement for Constrained Text-to-Image Synthesis** \
[[Website](https://arxiv.org/abs/2409.02429)]

**Color encoding in Latent Space of Stable Diffusion Models** \
[[Website](https://arxiv.org/abs/2512.09477)]

# Count Guidance

**Make It Count: Text-to-Image Generation with an Accurate Number of Objects** \
[[CVPR 2025](https://arxiv.org/abs/2406.10210)] 
[[Project](https://make-it-count-paper.github.io//)] 
[[Code](https://github.com/Litalby1/make-it-count)]

**Detection-Driven Object Count Optimization for Text-to-Image Diffusion Models** \
[[Website](https://arxiv.org/abs/2408.11721v2)] 
[[Project](https://ozzafar.github.io/count_token/)] 
[[Code](https://github.com/ozzafar/discriminative_class_tokens_for_counting)]

**CountCluster: Training-Free Object Quantity Guidance with Cross-Attention Map Clustering for Text-to-Image Generation** \
[[Website](https://arxiv.org/abs/2508.10710)] 
[[Code](https://github.com/JoohyeonL22/CountCluster)] 

**YOLO-Count: Differentiable Object Counting for Text-to-Image Generation** \
[[ICCV 2025](https://arxiv.org/abs/2508.00728)] 

**CountDiffusion: Text-to-Image Synthesis with Training-Free Counting-Guidance Diffusion** \
[[Website](https://arxiv.org/abs/2505.04347)] 


# Poster

**PosterCraft: Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework** \
[[Website](https://arxiv.org/abs/2506.10741)] 
[[Project](https://ephemeral182.github.io/PosterCraft/)] 
[[Code](https://github.com/Ephemeral182/PosterCraft)]

**CreatiPoster: Towards Editable and Controllable Multi-Layer Graphic Design Generation** \
[[Website](https://arxiv.org/abs/2506.10890)] 
[[Code](https://github.com/graphic-design-ai/creatiposter)] 

**PosterMaker: Towards High-Quality Product Poster Generation with Accurate Text Rendering** \
[[CVPR 2025](https://arxiv.org/abs/2504.06632)]
[[Project](https://poster-maker.github.io/)] 

**POSTA: A Go-to Framework for Customized Artistic Poster Generation** \
[[CVPR 2025](https://arxiv.org/abs/2503.14908)] 
[[Project](https://haoyuchen.com/POSTA)] 

**DreamPoster: A Unified Framework for Image-Conditioned Generative Poster Design** \
[[Website](https://arxiv.org/abs/2507.04218)] 
[[Project](https://dreamposter.github.io/)] 

**LogoDiffuser: Training-Free Multilingual Logo Generation and Stylization via Letter-Aware Attention Control** \
[[Website](https://arxiv.org/abs/2603.09759)] 

# Accelerate

**PIXART-δ: Fast and Controllable Image Generation with Latent Consistency Models** \
[[ICLR 2024 Spotlight](https://arxiv.org/abs/2401.05252)]
[[Diffusers 1](https://huggingface.co/docs/diffusers/main/en/api/pipelines/pixart)]
[[Diffusers 2](https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS)]
[[Project](https://pixart-alpha.github.io/)]
[[Code](https://github.com/PixArt-alpha/PixArt-alpha)]

**SDXL-Turbo: Adversarial Diffusion Distillation** \
[[Website](https://arxiv.org/abs/2311.17042)]
[[Diffusers 1](https://huggingface.co/stabilityai/sdxl-turbo)]
[[Diffusers 2](https://huggingface.co/docs/diffusers/en/using-diffusers/sdxl_turbo)]
[[Project](https://huggingface.co/stabilityai)]
[[Code](https://github.com/Stability-AI/generative-models)]

**Trajectory Consistency Distillation: Improved Latent Consistency Distillation by Semi-Linear Consistency Function with Trajectory Mapping** \
[[Website](https://arxiv.org/abs/2405.14867)]
[[Diffusers 1](https://huggingface.co/h1t/TCD-SDXL-LoRA)]
[[Diffusers 2](https://huggingface.co/docs/diffusers/en/using-diffusers/inference_with_tcd_lora)]
[[Project](https://tianweiy.github.io/dmd2/)]
[[Code](https://github.com/jabir-zheng/TCD)]

**LCM-LoRA: A Universal Stable-Diffusion Acceleration Module** \
[[Website](https://arxiv.org/abs/2311.05556)]
[[Diffusers](https://huggingface.co/docs/diffusers/en/using-diffusers/inference_with_lcm?lcm-lora=LCM-LoRA#lora)]
[[Project](https://latent-consistency-models.github.io/)]
[[Code](https://github.com/luosiallen/latent-consistency-model)]

**Latent Consistency Models: Synthesizing High-Resolution Images with Few-Step Inference** \
[[Website](https://arxiv.org/abs/2310.04378)]
[[Project](https://huggingface.co/docs/diffusers/api/pipelines/latent_consistency_models)]
[[Code](https://github.com/luosiallen/latent-consistency-model)]

**DMD2: Improved Distribution Matching Distillation for Fast Image Synthesis** \
[[NeurIPS 2024 Oral](https://arxiv.org/abs/2405.14867)]
[[Project](https://tianweiy.github.io/dmd2/)]
[[Code](https://github.com/tianweiy/DMD2)]

**DMD1: One-step Diffusion with Distribution Matching Distillation** \
[[CVPR 2024](https://arxiv.org/abs/2311.18828)]
[[Project](https://tianweiy.github.io/dmd/)]
[[Code](https://github.com/devrimcavusoglu/dmd)]

**Tortoise and Hare Guidance: Accelerating Diffusion Model Inference with Multirate Integration** \
[[NeurIPS 2025](https://arxiv.org/abs/2511.04117)]
[[Project](https://yhlee-add.github.io/THG/)]
[[Code](https://github.com/yhlee-add/THG)]

**Consistency Models** \
[[ICML 2023](https://proceedings.mlr.press/v202/song23a.html)]
[[Diffusers](https://huggingface.co/docs/diffusers/main/en/api/pipelines/consistency_models)]
[[Code](https://github.com/openai/consistency_models)]

**SwiftBrush: One-Step Text-to-Image Diffusion Model with Variational Score Distillation** \
[[CVPR 2024](https://arxiv.org/abs/2312.05239)]
[[Project](https://vinairesearch.github.io/SwiftBrush/)]
[[Code](https://github.com/VinAIResearch/SwiftBrush)]

**SwiftBrush V2: Make Your One-Step Diffusion Model Better Than Its Teacher** \
[[ECCV 2024](https://arxiv.org/abs/2408.14176)]
[[Project](https://swiftbrushv2.github.io/)]
[[Code](https://github.com/VinAIResearch/SwiftBrush)]

**CoDi: Conditional Diffusion Distillation for Higher-Fidelity and Faster Image Generation** \
[[CVPR 2024](https://arxiv.org/abs/2310.01407)]
[[Project](https://fast-codi.github.io/)]
[[Code](https://github.com/fast-codi/CoDi)]

**PCM : Phased Consistency Model** \
[[NeurIPS 2024](https://arxiv.org/abs/2405.18407)]
[[Project](https://g-u-n.github.io/projects/pcm/)]
[[Code](https://github.com/G-U-N/Phased-Consistency-Model)]

**Motion Consistency Model: Accelerating Video Diffusion with Disentangled Motion-Appearance Distillation** \
[[NeurIPS 2024](https://arxiv.org/abs/2406.06890)]
[[Project](https://yhzhai.github.io/mcm/)]
[[Code](https://github.com/yhZhai/mcm)]

**KOALA: Empirical Lessons Toward Memory-Efficient and Fast Diffusion Models for Text-to-Image Synthesis** \
[[NeurIPS 2024](https://arxiv.org/abs/2312.04005)]
[[Project](https://youngwanlee.github.io/KOALA/)]
[[Code](https://github.com/youngwanLEE/sdxl-koala)]

**Random Conditioning with Distillation for Data-Efficient Diffusion Model Compression** \
[[CVPR 2025](https://arxiv.org/abs/2504.02011)]
[[Project](https://dohyun-as.github.io/Random-Conditioning/)]
[[Code](https://github.com/dohyun-as/Random-Conditioning)]

**DIMO:Distilling Masked Diffusion Models into One-step Generator** \
[[Website](https://arxiv.org/abs/2503.15457)]
[[Project](https://yuanzhi-zhu.github.io/DiMO/)]
[[Code](https://github.com/yuanzhi-zhu/DiMO)]

**Flash Diffusion: Accelerating Any Conditional Diffusion Model for Few Steps Image Generation** \
[[Website](https://arxiv.org/abs/2406.02347)]
[[Project](https://gojasper.github.io/flash-diffusion-project/)]
[[Code](https://github.com/gojasper/flash-diffusion)]

**Timestep Embedding Tells: It's Time to Cache for Video Diffusion Model** \
[[Website](https://arxiv.org/abs/2411.19108)]
[[Project](https://liewfeng.github.io/TeaCache/)]
[[Code](https://github.com/LiewFeng/TeaCache)]

**You Only Sample Once: Taming One-Step Text-to-Image Synthesis by Self-Cooperative Diffusion GANs** \
[[Website](https://arxiv.org/abs/2403.12931)]
[[Project](https://yoso-t2i.github.io/)]
[[Code](https://github.com/Luo-Yihong/YOSO)]

**PeRFlow: Piecewise Rectified Flow as Universal Plug-and-Play Accelerator** \
[[Website](https://arxiv.org/abs/2405.07510)]
[[Project](https://piecewise-rectified-flow.github.io/)]
[[Code](https://github.com/magic-research/piecewise-rectified-flow)]

**Scale-wise Distillation of Diffusion Models** \
[[Website](https://arxiv.org/abs/2503.16397)]
[[Project](https://yandex-research.github.io/swd/)]
[[Code](https://github.com/yandex-research/swd)]

**Simplifying, Stabilizing and Scaling Continuous-Time Consistency Models** \
[[Website](https://doi.org/10.48550/arXiv.2410.11081)]
[[Project](https://openai.com/index/simplifying-stabilizing-and-scaling-continuous-time-consistency-models/)]
[[Code](https://github.com/xandergos/sCM-mnist)]

**Adaptive Caching for Faster Video Generation with Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2411.02397)]
[[Project](https://adacache-dit.github.io/)]
[[Code](https://github.com/AdaCache-DiT/AdaCache)]

**FasterCache: Training-Free Video Diffusion Model Acceleration with High Quality** \
[[Website](https://arxiv.org/abs/2410.19355)]
[[Project](https://vchitect.github.io/FasterCache/)]
[[Code](https://github.com/Vchitect/FasterCache)]

**Learning Few-Step Diffusion Models by Trajectory Distribution Matching** \
[[Website](https://arxiv.org/abs/2503.06674)]
[[Project](https://tdm-t2x.github.io/)]
[[Code](https://github.com/Luo-Yihong/TDM)]

**SDXS: Real-Time One-Step Latent Diffusion Models with Image Conditions** \
[[Website](https://arxiv.org/abs/2403.16627)]
[[Project](https://idkiro.github.io/sdxs/)]
[[Code](https://github.com/IDKiro/sdxs)]

**Reward Guided Latent Consistency Distillation** \
[[Website](https://arxiv.org/abs/2403.11027)]
[[Project](https://rg-lcd.github.io/)]
[[Code](https://github.com/Ji4chenLi/rg-lcd)]

**T-Stitch: Accelerating Sampling in Pre-Trained Diffusion Models with Trajectory Stitching** \
[[Website](https://arxiv.org/abs/2402.14167)]
[[Project](https://t-stitch.github.io/)]
[[Code](https://github.com/NVlabs/T-Stitch)]

**Accelerating Diffusion Sampling via Exploiting Local Transition Coherence** \
[[Website](https://arxiv.org/abs/2503.09675)]
[[Project](https://zhushangwen.github.io/LTC-accel.io/)]
[[Code](https://github.com/zhushangwen/LTC-Accel)]

**AccVideo: Accelerating Video Diffusion Model with Synthetic Dataset** \
[[Website](https://arxiv.org/abs/2503.19462)]
[[Project](https://aejion.github.io/accvideo/)]
[[Code](https://github.com/aejion/AccVideo/)]

**One-Step Offline Distillation of Diffusion-based Models via Koopman Modeling** \
[[Website](https://arxiv.org/abs/2505.13358)]
[[Project](https://sites.google.com/view/koopman-distillation-model/)]
[[Code](https://github.com/azencot-group/KDM)]

**Fast-dLLM: Training-free Acceleration of Diffusion LLM by Enabling KV Cache and Parallel Decoding** \
[[Website](https://arxiv.org/abs/2505.22618)]
[[Project](https://nvlabs.github.io/Fast-dLLM/)]
[[Code](https://github.com/NVlabs/Fast-dLLM)]

**MagCache: Fast Video Generation with Magnitude-Aware Cache** \
[[Website](https://arxiv.org/abs/2506.09045)]
[[Project](https://zehong-ma.github.io/MagCache/)]
[[Code](https://github.com/Zehong-Ma/MagCache)]

**Evolutionary Caching to Accelerate Your Off-the-Shelf Diffusion Model** \
[[Website](https://arxiv.org/abs/2506.15682)]
[[Project](https://aniaggarwal.github.io/ecad/)]
[[Code](https://github.com/aniaggarwal/ecad)]

**Less is Enough: Training-Free Video Diffusion Acceleration via Runtime-Adaptive Caching** \
[[Website](https://arxiv.org/abs/2507.02860)]
[[Project](https://h-embodvis.github.io/EasyCache/)]
[[Code](https://github.com/H-EmbodVis/EasyCache)]

**Distilling Diversity and Control in Diffusion Models** \
[[Website](https://arxiv.org/abs/2503.10637)]
[[Project](https://distillation.baulab.info/)]
[[Code](https://github.com/rohitgandikota/distillation)]

**SANA-Sprint: One-Step Diffusion with Continuous-Time Consistency Distillation** \
[[Website](https://arxiv.org/abs/2503.09641)]
[[Project](https://nvlabs.github.io/Sana/Sprint/)]
[[Code](https://github.com/NVlabs/Sana)]

**LeMiCa: Lexicographic Minimax Path Caching for Efficient Diffusion-Based Video Generation** \
[[Website](https://arxiv.org/abs/2511.00090)]
[[Project](https://unicomai.github.io/LeMiCa/)]
[[Code](https://github.com/UnicomAI/LeMiCa)]

**Glance: Accelerating Diffusion Models with 1 Sample** \
[[Website](https://arxiv.org/abs/2512.02899)]
[[Project](https://zhuobaidong.github.io/Glance/)]
[[Code](https://github.com/zhuobaidong/Glance)]

**No Cache Left Idle: Accelerating diffusion model via Extreme-slimming Caching** \
[[Website](https://arxiv.org/abs/2512.12604)]
[[Project](https://thu-accdiff.github.io/xslim-page/)]
[[Code](https://github.com/THU-AccDiff/xslim/]

**Relational Feature Caching for Accelerating Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2602.19506)]
[[Project](https://cvlab.yonsei.ac.kr/projects/RFC/)]
[[Code](https://github.com/cvlab-yonsei]

**One-Way Ticket:Time-Independent Unified Encoder for Distilling Text-to-Image Diffusion Models** \
[[CVPR 2025](https://arxiv.org/abs/2505.21960)]
<!-- [[Project](https://openaccess.thecvf.com/content/CVPR2025/html/Li_One-Way_Ticket_Time-Independent_Unified_Encoder_for_Distilling_Text-to-Image_Diffusion_Models_CVPR_2025_paper.html)] -->
[[Code](https://github.com/sen-mao/Loopfree)]

**Relational Diffusion Distillation for Efficient Image Generation** \
[[ACM MM 2024 (Oral)](https://arxiv.org/abs/2410.07679)]
[[Code](https://github.com/cantbebetter2/RDD)]

**Autoregressive Distillation of Diffusion Transformers** \
[[CVPR 2025 Oral](https://arxiv.org/abs/2504.11295)]
[[Code](https://github.com/alsdudrla10/ARD)]

**UFOGen: You Forward Once Large Scale Text-to-Image Generation via Diffusion GANs** \
[[CVPR 2024](https://arxiv.org/abs/2311.09257)]
[[Code](https://github.com/xuyanwu/SIDDMs-UFOGen)]

**Accelerating Diffusion Transformer via Increment-Calibrated Caching with Channel-Aware Singular Value Decomposition** \
[[CVPR 2025](https://arxiv.org/abs/2505.05829)]
[[Code](https://github.com/ccccczzy/icc)]

**ToM: Decider-Guided Dynamic Token Merging for Accelerating Diffusion MLLMs** \
[[AAAI 2026](https://arxiv.org/abs/2511.12280)]
[[Code](https://github.com/bcmi/D3ToM-Diffusion-MLLM)]

**SADA: Stability-guided Adaptive Diffusion Acceleration** \
[[ICML 2025](https://arxiv.org/abs/2507.17135)]
[[Code](https://github.com/Ting-Justin-Jiang/sada-icml)]

**SlimFlow: Training Smaller One-Step Diffusion Models with Rectified Flow** \
[[ECCV 2024](https://arxiv.org/abs/2407.12718)]
[[Code](https://github.com/yuanzhi-zhu/SlimFlow)]

**Accelerating Image Generation with Sub-path Linear Approximation Model** \
[[ECCV 2024](https://arxiv.org/abs/2404.13903)]
[[Code](https://github.com/MCG-NJU/SPLAM)]

**Diff-Instruct: A Universal Approach for Transferring Knowledge From Pre-trained Diffusion Models** \
[[NeurIPS 2023](https://arxiv.org/abs/2305.18455)]
[[Code](https://github.com/pkulwj1994/diff_instruct)]

**Fast and Memory-Efficient Video Diffusion Using Streamlined Inference** \
[[NeurIPS 2024](https://arxiv.org/abs/2411.01171)]
[[Code](https://github.com/wuyushuwys/FMEDiffusion)]

**Accelerating Diffusion via Hybrid Data-Pipeline Parallelism Based on Conditional Guidance Scheduling** \
[[CVPR 2026](https://arxiv.org/abs/2602.21760)]
[[Code](https://github.com/kaist-dmlab/Hybridiff)]

**A Simple Early Exiting Framework for Accelerated Sampling in Diffusion Models** \
[[ICML 2024](https://arxiv.org/abs/2408.05927)]
[[Code](https://github.com/taehong-moon/ee-diffusion)]

**Score identity Distillation: Exponentially Fast Distillation of Pretrained Diffusion Models for One-Step Generation** \
[[ICML 2024](https://arxiv.org/abs/2404.04057)]
[[Code](https://github.com/mingyuanzhou/SiD)]

**On the Trajectory Regularity of ODE-based Diffusion Sampling** \
[[ICML 2024](https://arxiv.org/abs/2405.11326)]
[[Code](https://github.com/zju-pi/diff-sampler)]

**InstaFlow: One Step is Enough for High-Quality Diffusion-Based Text-to-Image Generation** \
[[ICLR 2024](https://arxiv.org/abs/2309.06380)]
[[Code](https://github.com/gnobitab/instaflow)]

**Improved Training Technique for Latent Consistency Models** \
[[ICLR 2025](https://arxiv.org/abs/2502.01441)]
[[Code](https://github.com/quandao10/sLCT/)]

**ProCache: Constraint-Aware Feature Caching with Selective Computation for Diffusion Transformer Acceleration** \
[[AAAI 2026](https://arxiv.org/abs//2512.17298)]
[[Code](https://github.com/macovaseas/ProCache)]

**Compute Only 16 Tokens in One Timestep: Accelerating Diffusion Transformers with Cluster-Driven Feature Caching** \
[[ACM MM 2025](https://arxiv.org/abs/2509.10312)]
[[Code](https://github.com/Shenyi-Z/Cache4Diffusion)]

**CacheQuant: Comprehensively Accelerated Diffusion Models** \
[[CVPR 2025](https://arxiv.org/abs/2503.01323)]
[[Code](https://github.com/BienLuky/CacheQuant)]

**SeaCache: Spectral-Evolution-Aware Cache for Accelerating Diffusion Models** \
[[CVPR 2026](https://arxiv.org/abs/2602.18993)]
[[Code](https://github.com/jiwoogit/SeaCache)]

**Accelerating Vision Diffusion Transformers with Skip Branches** \
[[Website](https://arxiv.org/abs/2411.17616)]
[[Code](https://github.com/OpenSparseLLMs/Skip-DiT)]

**Accelerating Diffusion Transformers with Dual Feature Caching** \
[[Website](https://arxiv.org/abs/2412.18911)]
[[Code](https://github.com/shenyi-z/duca)]

**From Reusing to Forecasting: Accelerating Diffusion Models with TaylorSeers** \
[[Website](https://arxiv.org/abs/2503.06923)]
[[Code](https://github.com/Shenyi-Z/TaylorSeer)]

**Exposure Bias Reduction for Enhancing Diffusion Transformer Feature Caching** \
[[Website](https://arxiv.org/abs/2503.07120)]
[[Code](https://github.com/aSleepyTree/EB-Cache)]

**One Step Diffusion via Shortcut Models** \
[[Website](https://arxiv.org/abs/2410.12557)]
[[Code](https://github.com/kvfrans/shortcut-models)]

**DuoDiff: Accelerating Diffusion Models with a Dual-Backbone Approach** \
[[Website](https://arxiv.org/abs/2410.09633)]
[[Code](https://github.com/razvanmatisan/duodiff)]

**DraftAttention: Fast Video Diffusion via Low-Resolution Attention Guidance** \
[[Website](https://arxiv.org/abs/2505.14708)]
[[Code](https://github.com/shawnricecake/draft-attention)]

**A Closer Look at Time Steps is Worthy of Triple Speed-Up for Diffusion Model Training** \
[[Website](https://arxiv.org/abs/2405.17403)]
[[Code](https://github.com/nus-hpc-ai-lab/speed)]

**Stable Consistency Tuning: Understanding and Improving Consistency Models** \
[[Website](https://arxiv.org/abs/2410.18958)]
[[Code](https://github.com/G-U-N/Stable-Consistency-Tuning)]

**SpeedUpNet: A Plug-and-Play Adapter Network for Accelerating Text-to-Image Diffusion Models** \
[[Website](https://arxiv.org/abs/2312.08887)]
[[Code](https://github.com/williechai/speedup-plugin-for-stable-diffusions)]

**Learning-to-Cache: Accelerating Diffusion Transformer via Layer Caching** \
[[Website](https://arxiv.org/abs/2406.01733)]
[[Code](https://github.com/horseee/learning-to-cache)]

**SDXL-Lightning: Progressive Adversarial Diffusion Distillation** \
[[Website](https://arxiv.org/abs/2402.13929)]
[[Code](https://huggingface.co/ByteDance/SDXL-Lightning)]

**Distribution Backtracking Builds A Faster Convergence Trajectory for Diffusion Distillation** \
[[Website](https://arxiv.org/abs/2408.15991)]
[[Code](https://github.com/SYZhang0805/DisBack)]

**Long and Short Guidance in Score identity Distillation for One-Step Text-to-Image Generation** \
[[Website](https://arxiv.org/abs/2406.01561)]
[[Code](https://github.com/mingyuanzhou/SiD-LSG)]

**Diffusion Models Are Innate One-Step Generators** \
[[Website](https://arxiv.org/abs/2405.20750)]
[[Code](https://github.com/Zyriix/GDD)]

**Optimal Stepsize for Diffusion Sampling** \
[[Website](https://arxiv.org/abs/2503.21774)]
[[Code](https://github.com/bebebe666/OptimalSteps)]

**Model Reveals What to Cache: Profiling-Based Feature Reuse for Video Diffusion Models** \
[[Website](https://arxiv.org/abs/2504.03140)]
[[Code](https://github.com/GeekGuru123/ProfilingDiT/tree/main)]

**Few-Step Diffusion via Score identity Distillation** \
[[Website](https://arxiv.org/abs/2505.12674)]
[[Code](https://github.com/mingyuanzhou/SiD-LSG)]

**FastCache: Fast Caching for Diffusion Transformer Through Learnable Linear Approximation** \
[[Website](https://arxiv.org/abs/2505.20353)]
[[Code](https://github.com/NoakLiu/FastCache-xDiT)]

**SenseFlow: Scaling Distribution Matching for Flow-based Text-to-Image Distillation** \
[[Website](https://arxiv.org/abs/2506.00523)]
[[Code](https://github.com/XingtongGe/SenseFlow)]

**Sparse-vDiT: Unleashing the Power of Sparse Attention to Accelerate Video Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2506.03065)]
[[Code](https://github.com/Peyton-Chen/Sparse-vDiT)]

**Morse: Dual-Sampling for Lossless Acceleration of Diffusion Models** \
[[Website](https://arxiv.org/abs/2506.18251)]
[[Code](https://github.com/deep-optimization/Morse)]

**SpeCa: Accelerating Diffusion Transformers with Speculative Feature Caching** \
[[Website](https://arxiv.org/abs/2509.11628)]
[[Code](https://github.com/Shenyi-Z/Cache4Diffusion/)]

**QuantSparse: Comprehensively Compressing Video Diffusion Transformer with Model Quantization and Attention Sparsification** \
[[Website](https://arxiv.org/abs/2509.23681)]
[[Code](https://github.com/wlfeng0509/QuantSparse)]

**DC-Gen: Post-Training Diffusion Acceleration with Deeply Compressed Latent Space** \
[[Website](https://arxiv.org/abs/2509.25180)]
[[Code](https://github.com/dc-ai-projects/DC-Gen)]

**QuantSparse: Comprehensively Compressing Video Diffusion Transformer with Model Quantization and Attention Sparsification** \
[[Website](https://arxiv.org/abs/2509.23681)]
[[Code](https://github.com/wlfeng0509/QuantSparse)]

**Towards Better & Faster Autoregressive Image Generation: From the Perspective of Entropy** \
[[Website](https://arxiv.org/abs/2510.09012)]
[[Code](https://github.com/krennic999/ARsample)]

**pi-Flow: Policy-Based Few-Step Generation via Imitation Distillation** \
[[Website](https://arxiv.org/abs/2510.14974)]
[[Code](https://github.com/Lakonik/piFlow)]

**Towards One-step Causal Video Generation via Adversarial Self-Distillation** \
[[Website](https://arxiv.org/abs/2511.01419)]
[[Code](https://github.com/BigAandSmallq/SAD)]

**RedVTP: Training-Free Acceleration of Diffusion Vision-Language Models Inference via Masked Token-Guided Visual Token Pruning** \
[[Website](https://arxiv.org/abs/2511.12428)]
[[Code](https://github.com/Blacktower27/RedVTP)]

**Decoupled DMD: CFG Augmentation as the Spear, Distribution Matching as the Shield** \
[[Website](https://arxiv.org/abs/2511.22677)]
[[Code](https://github.com/Tongyi-MAI/Z-Image)]

**TurboDiffusion: Accelerating Video Diffusion Models by 100-200 Times** \
[[Website](https://arxiv.org/abs/2512.16093)]
[[Code](https://github.com/thu-ml/TurboDiffusion)]

**CorGi: Contribution-Guided Block-Wise Interval Caching for Training-Free Acceleration of Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2512.24195)]
[[Code](https://github.com/CASL-KU/CorGi)]

**ArcFlow: Unleashing 2-Step Text-to-Image Generation via High-Precision Non-Linear Flow Distillation** \
[[Website](https://arxiv.org/abs/2602.09014)]
[[Code](https://github.com/pnotp/ArcFlow)]

**Jano: Adaptive Diffusion Generation with Early-stage Convergence Awareness** \
[[Website](https://arxiv.org/abs/2603.00519)]
[[Code](https://github.com/chen-yy20/Jano)]

**SODA: Sensitivity-Oriented Dynamic Acceleration for Diffusion Transformer** \
[[Website](https://arxiv.org/abs/2603.07057)]
[[Code](https://github.com/leaves162/SODA)]

**TDM-R1: Reinforcing Few-Step Diffusion Models with Non-Differentiable Reward** \
[[Website](https://arxiv.org/abs/2603.07700)]
[[Code](https://github.com/Luo-Yihong/TDM-R1)]

**Distilling Diffusion Models into Conditional GANs** \
[[ECCV 2024](https://arxiv.org/abs/2405.05967)]
[[Project](https://mingukkang.github.io/Diffusion2GAN/)]

**Shortcutting Pre-trained Flow Matching Diffusion Models is Almost Free Lunch** \
[[NeurIPS 2025](https://arxiv.org/abs/2510.17858)]
[[Project](https://shortcutfm.github.io/)]

**Cache Me if You Can: Accelerating Diffusion Models through Block Caching** \
[[CVPR 2024](https://arxiv.org/abs/2312.03209)]
[[Project](https://fwmb.github.io/blockcaching/)]

**Plug-and-Play Diffusion Distillation** \
[[CVPR 2024](https://arxiv.org/abs/2406.01954)]
[[Project](https://5410tiffany.github.io/plug-and-play-diffusion-distillation.github.io/)]

**SnapFusion: Text-to-Image Diffusion Model on Mobile Devices within Two Seconds** \
[[NeurIPS 2023](https://arxiv.org/abs/2306.00980)]
[[Project](https://snap-research.github.io/SnapFusion/)]

**One-step Diffusion Models with f-Divergence Distribution Matching** \
[[Website](https://arxiv.org/abs/2502.15681)]
[[Project](https://research.nvidia.com/labs/genair/f-distill/)]

**MagicDistillation: Weak-to-Strong Video Distillation for Large-Scale Portrait Few-Step Synthesis** \
[[Website](https://arxiv.org/abs/2503.13319)]
[[Project](https://w2svd.github.io/W2SVD/)]

**Diffusion Adversarial Post-Training for One-Step Video Generation** \
[[Website](https://arxiv.org/abs/2501.08316)]
[[Project](https://seaweed-apt.com/)]

**SNOOPI: Supercharged One-step Diffusion Distillation with Proper Guidance** \
[[Website](https://arxiv.org/abs/2412.02687)]
[[Project](https://snoopi-onestep.github.io/)]

**NitroFusion: High-Fidelity Single-Step Diffusion through Dynamic Adversarial Training** \
[[Website](https://arxiv.org/abs/2412.02030)]
[[Project](https://chendaryen.github.io/NitroFusion.github.io/)]

**Truncated Consistency Models** \
[[Website](https://arxiv.org/abs/2410.14895)]
[[Project](https://truncated-cm.github.io/)]

**Multi-student Diffusion Distillation for Better One-step Generators** \
[[Website](https://arxiv.org/abs/2410.23274)]
[[Project](https://research.nvidia.com/labs/toronto-ai/MSD/index_hidden.html)]

**Effortless Efficiency: Low-Cost Pruning of Diffusion Models** \
[[Website](https://arxiv.org/abs/2412.02852)]
[[Project](https://yangzhang-v5.github.io/EcoDiff/)]

**SnapGen: Taming High-Resolution Text-to-Image Models for Mobile Devices with Efficient Architectures and Training** \
[[Website](https://arxiv.org/abs/2412.09619)]
[[Project](https://snap-research.github.io/snapgen/)]

**SnapGen-V: Generating a Five-Second Video within Five Seconds on a Mobile Device** \
[[Website](https://arxiv.org/abs/2412.10494)]
[[Project](https://snap-research.github.io/snapgen-v/)]

**Align Your Flow: Scaling Continuous-Time Flow Map Distillation** \
[[Website](https://arxiv.org/abs/2506.14603)]
[[Project](https://research.nvidia.com/labs/toronto-ai/AlignYourFlow/)]

**Training-Free Motion Customization for Distilled Video Generators with Adaptive Test-Time Distillation** \
[[Website](https://arxiv.org/abs/2506.19348)]
[[Project](https://euminds.github.io/motionecho/)]

**Forecasting When to Forecast: Accelerating Diffusion Models with Confidence-Gated Taylor** \
[[Website](https://arxiv.org/abs/2508.02240)]
[[Project](https://cg-taylor-acce.github.io/CG-Taylor/)]

**POSE: Phased One-Step Adversarial Equilibrium for Video Diffusion Models** \
[[Website](https://arxiv.org/abs/2508.21019)]
[[Project](https://pose-paper.github.io/)]

**Hyper-Bagel: A Unified Acceleration Framework for Multimodal Understanding and Generation** \
[[Website](https://arxiv.org/abs/2509.18824)]
[[Project](https://hyper-bagel.github.io/)]

**Large Scale Diffusion Distillation via Score-Regularized Continuous-Time Consistency** \
[[Website](https://arxiv.org/abs/2510.08431)]
[[Project](https://research.nvidia.com/labs/dir/rcm/)]

**Self-Evaluation Unlocks Any-Step Text-to-Image Generation** \
[[Website](https://arxiv.org/abs/2512.22374)]
[[Project](https://xinyu-andy.github.io/SelfE-project/)]

**Transition Matching Distillation for Fast Video Generation** \
[[Website](https://arxiv.org/abs/2601.09881)]
[[Project](https://research.nvidia.com/labs/genair/tmd/)]

**Fast Autoregressive Video Diffusion and World Models with Temporal Cache Compression and Sparse Attention** \
[[Website](https://arxiv.org/abs/2602.01801)]
[[Project](https://dvirsamuel.github.io/fast-auto-regressive-video/)]

**FlashBlock: Attention Caching for Efficient Long-Context Block Diffusion** \
[[Website](https://arxiv.org/abs/2602.05305)]
[[Project](https://caesarhhh.github.io/FlashBlock/)]

**Adversarial Distribution Matching for Diffusion Distillation Towards Efficient Image and Video Synthesis** \
[[ICCV 2025 (Highlight)](https://arxiv.org/abs/2507.18569)]

**OmniCache: A Trajectory-Oriented Global Perspective on Training-Free Cache Reuse for Diffusion Transformer Models** \
[[ICCV 2025](https://arxiv.org/abs/2508.16212)]

**FasterDiT: Towards Faster Diffusion Transformers Training without Architecture Modification** \
[[NeurIPS 2024](https://arxiv.org/abs/2410.10356)]

**One-Step Diffusion Distillation through Score Implicit Matching** \
[[NeurIPS 2024](https://arxiv.org/abs/2410.16794)]

**Self-Corrected Flow Distillation for Consistent One-Step and Few-Step Text-to-Image Generation** \
[[AAAI 2025](https://arxiv.org/abs/2412.16906)]

**TAP: A Token-Adaptive Predictor Framework for Training-Free Diffusion Acceleration** \
[[CVPR 2026](https://arxiv.org/abs/2603.03792)]

**BlockDance: Reuse Structurally Similar Spatio-Temporal Features to Accelerate Diffusion Transformers** \
[[CVPR 2025](https://arxiv.org/abs/2503.15927)]

**PCM : Picard Consistency Model for Fast Parallel Sampling of Diffusion Models** \
[[CVPR 2025](https://arxiv.org/abs/2503.19731)]

**MVPortrait: Text-Guided Motion and Emotion Control for Multi-view Vivid Portrait Animation** \
[[CVPR 2025](https://arxiv.org/abs/2503.19383)]

**Revisiting Diffusion Models: From Generative Pre-training to One-Step Generation** \
[[ICML 2025](https://arxiv.org/abs/2506.09376)]

**Accelerate High-Quality Diffusion Models with Inner Loop Feedback** \
[[Website](https://arxiv.org/abs/2501.13107)]

**Accelerating Diffusion Transformer via Error-Optimized Cache** \
[[Website](https://arxiv.org/abs/2501.19243)]

**DICE: Distilling Classifier-Free Guidance into Text Embeddings** \
[[Website](https://arxiv.org/abs/2502.03726)]

**ProReflow: Progressive Reflow with Decomposed Velocity** \
[[Website](https://arxiv.org/abs/2503.04824)]

**Inference-Time Diffusion Model Distillation** \
[[Website](https://arxiv.org/abs/2412.08871)]

**Taming Consistency Distillation for Accelerated Human Image Animation** \
[[Website](https://arxiv.org/abs/2504.11143)]

**Token Pruning for Caching Better: 9 Times Acceleration on Stable Diffusion for Free** \
[[Website](https://arxiv.org/abs/2501.00375)]

**HarmoniCa: Harmonizing Training and Inference for Better Feature Cache in Diffusion Transformer Acceleration** \
[[Website](https://arxiv.org/abs/2410.01723)]

**Diff-Instruct\*: Towards Human-Preferred One-step Text-to-image Generative Models** \
[[Website](https://arxiv.org/abs/2410.20898)]

**MLCM: Multistep Consistency Distillation of Latent Diffusion Model** \
[[Website](https://arxiv.org/abs/2406.05768)]

**EM Distillation for One-step Diffusion Models** \
[[Website](https://arxiv.org/abs/2405.16852)]

**AsymRnR: Video Diffusion Transformers Acceleration with Asymmetric Reduction and Restoration** \
[[Website](https://arxiv.org/abs/2412.11706)]

**Score-of-Mixture Training: Training One-Step Generative Models Made Simple** \
[[Website](https://arxiv.org/abs/2502.09609)]

**Partially Conditioned Patch Parallelism for Accelerated Diffusion Model Inference** \
[[Website](https://arxiv.org/abs/2412.02962)]

**Importance-based Token Merging for Diffusion Models** \
[[Website](https://arxiv.org/abs/2411.16720)]

**Imagine Flash: Accelerating Emu Diffusion Models with Backward Distillation** \
[[Website](https://arxiv.org/abs/2405.05224)]

**Accelerating Diffusion Models with One-to-Many Knowledge Distillation** \
[[Website](https://arxiv.org/abs/2410.04191)]

**Accelerating Video Diffusion Models via Distribution Matching** \
[[Website](https://arxiv.org/abs/2412.05899)]

**TDDSR: Single-Step Diffusion with Two Discriminators for Super Resolution** \
[[Website](https://arxiv.org/abs/2410.07663)]

**DDIL: Improved Diffusion Distillation With Imitation Learning** \
[[Website](https://arxiv.org/abs/2410.11971)]

**OSV: One Step is Enough for High-Quality Image to Video Generation** \
[[Website](https://arxiv.org/abs/2409.11367)]

**Target-Driven Distillation: Consistency Distillation with Target Timestep Selection and Decoupled Guidance** \
[[Website](https://arxiv.org/abs/2409.01347)]

**Token Caching for Diffusion Transformer Acceleration** \
[[Website](https://arxiv.org/abs/2409.18523)]

**DiP-GO: A Diffusion Pruner via Few-step Gradient Optimization** \
[[Website](https://arxiv.org/abs/2410.16942)]

**LazyDiT: Lazy Learning for the Acceleration of Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2412.12444)]

**Flow Generator Matching** \
[[Website](https://arxiv.org/abs/2410.19310)]

**Multistep Distillation of Diffusion Models via Moment Matching** \
[[Website](https://arxiv.org/abs/2406.04103)]

**SFDDM: Single-fold Distillation for Diffusion models** \
[[Website](https://arxiv.org/abs/2405.14961)]

**LAPTOP-Diff: Layer Pruning and Normalized Distillation for Compressing Diffusion Models** \
[[Website](https://arxiv.org/abs/2404.11098)]

**CogView3: Finer and Faster Text-to-Image Generation via Relay Diffusion** \
[[Website](https://arxiv.org/abs/2403.05121)]

**SCott: Accelerating Diffusion Models with Stochastic Consistency Distillation** \
[[Website](https://arxiv.org/abs/2403.01505)]

**Ditto: Accelerating Diffusion Model via Temporal Value Similarity** \
[[Website](https://arxiv.org/abs/2501.11211)]

**Adaptive Non-Uniform Timestep Sampling for Diffusion Model Training** \
[[Website](https://arxiv.org/abs/2411.09998)]

**TSD-SR: One-Step Diffusion with Target Score Distillation for Real-World Image Super-Resolution** \
[[Website](https://arxiv.org/abs/2411.18263)]

**Sparse VideoGen: Accelerating Video Diffusion Transformers with Spatial-Temporal Sparsity** \
[[Website](https://arxiv.org/abs/2502.01776)]

**Efficient Distillation of Classifier-Free Guidance using Adapters** \
[[Website](https://arxiv.org/abs/2503.07274)]

**Denoising Score Distillation: From Noisy Diffusion Pretraining to One-Step High-Quality Generation** \
[[Website](https://arxiv.org/abs/2503.07578)]

**Inductive Moment Matching** \
[[Website](https://arxiv.org/abs/2503.07565)]

**High Quality Diffusion Distillation on a Single GPU with Relative and Absolute Position Matching** \
[[Website](https://arxiv.org/abs/2503.20744)]

**DiTFastAttnV2: Head-wise Attention Compression for Multi-Modality Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2503.22796)]

**Mean Flows for One-step Generative Modeling** \
[[Website](https://arxiv.org/abs/2505.13447)]

**Faster Video Diffusion with Trainable Sparse Attention** \
[[Website](https://arxiv.org/abs/2505.13389)]

**Accelerating Diffusion-based Super-Resolution with Dynamic Time-Spatial Sampling** \
[[Website](https://arxiv.org/abs/2505.12048)]

**SRDiffusion: Accelerate Video Diffusion Inference via Sketching-Rendering Cooperation** \
[[Website](https://arxiv.org/abs/2505.19151)]

**Sparse VideoGen2: Accelerate Video Generation with Sparse Attention via Semantic-Aware Permutation** \
[[Website](https://arxiv.org/abs/2505.18875)]

**RainFusion: Adaptive Video Generation Acceleration via Multi-Dimensional Visual Redundancy** \
[[Website](https://arxiv.org/abs/2505.21036)]

**Foresight: Adaptive Layer Reuse for Accelerated and High-Quality Text-to-Video Generation** \
[[Website](https://arxiv.org/abs/2506.00329)]

**Accelerating Diffusion Large Language Models with SlowFast: The Three Golden Principles** \
[[Website](https://arxiv.org/abs/2506.10848)]

**Diffusion Transformer-to-Mamba Distillation for High-Resolution Image Generation** \
[[Website](https://arxiv.org/abs/2506.18999)]

**Upsample What Matters: Region-Adaptive Latent Sampling for Accelerated Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2507.08422)]

**Accelerating Parallel Diffusion Model Serving with Residual Compression** \
[[Website](https://arxiv.org/abs/2507.17511)]

**SwiftVideo: A Unified Framework for Few-Step Video Generation through Trajectory-Distribution Alignment** \
[[Website](https://arxiv.org/abs/2508.06082)]

**MixCache: Mixture-of-Cache for Video Diffusion Transformer Acceleration** \
[[Website](https://arxiv.org/abs/2508.12691)]

**Forecast then Calibrate: Feature Caching as ODE for Efficient Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2508.16211)]

**DiCache: Let Diffusion Model Determine Its Own Cache** \
[[Website](https://arxiv.org/abs/2508.17356)]

**HiCache: Training-free Acceleration of Diffusion Models via Hermite Polynomial-based Feature Caching** \
[[Website](https://arxiv.org/abs/2508.16984)]

**SpecDiff: Accelerating Diffusion Model Inference with Self-Speculation** \
[[Website](https://arxiv.org/abs/2509.13848)]

**BWCache: Accelerating Video Diffusion Transformers through Block-Wise Caching** \
[[Website](https://arxiv.org/abs/2509.13789)]

**RAPID^3: Tri-Level Reinforced Acceleration Policies for Diffusion Transformer** \
[[Website](https://arxiv.org/abs/2509.22323)]

**SLA: Beyond Sparsity in Diffusion Transformers via Fine-Tunable Sparse-Linear Attention** \
[[Website](https://arxiv.org/abs/2509.24006)]

**CLQ: Cross-Layer Guided Orthogonal-based Quantization for Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2509.24416)]

**Score Distillation of Flow Matching Models** \
[[Website](https://arxiv.org/abs/2509.25127)]

**Let Features Decide Their Own Solvers: Hybrid Feature Caching for Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2510.04188)]

**LinVideo: A Post-Training Framework towards O(n) Attention in Efficient Video Generation** \
[[Website](https://arxiv.org/abs/2510.08318)]

**FreqCa: Accelerating Diffusion Models via Frequency-Aware Caching** \
[[Website](https://arxiv.org/abs/2510.08669)]

**Hierarchical Koopman Diffusion: Fast Generation with Interpretable Diffusion Trajectory** \
[[Website](https://arxiv.org/abs/2510.12220)]

**Test-Time Iterative Error Correction for Efficient Diffusion Models** \
[[Website](https://arxiv.org/abs/2511.06250)]

**From Structure to Detail: Hierarchical Distillation for Efficient Diffusion Model** \
[[Website](https://arxiv.org/abs/2511.08930)]

**PipeDiT: Accelerating Diffusion Transformers in Video Generation with Task Pipelining and Model Decoupling** \
[[Website](https://arxiv.org/abs/2511.12056)]

**Flash-DMD: Towards High-Fidelity Few-Step Image Generation with Efficient Distillation and Joint Reinforcement Learning** \
[[Website](https://arxiv.org/abs/2511.20549)]

**GalaxyDiT: Efficient Video Generation with Guidance Alignment and Adaptive Proxy in Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2512.03451)]

**InvarDiff: Cross-Scale Invariance Caching for Accelerated Diffusion Models** \
[[Website](https://arxiv.org/abs/2512.05134)]

**USV: Unified Sparsification for Accelerating Video Diffusion Models** \
[[Website](https://arxiv.org/abs/2512.05754)]

**TwinFlow: Realizing One-step Generation on Large Models with Self-adversarial Flows** \
[[Website](https://arxiv.org/abs/2512.05150)]

**Few-Step Distillation for Text-to-Image Generation: A Practical Guide** \
[[Website](https://arxiv.org/abs/2512.13006)]

**On the Design of One-step Diffusion via Shortcutting Flow Paths** \
[[Website](https://arxiv.org/abs/2512.11831)]

**OUSAC: Optimized Guidance Scheduling with Adaptive Caching for DiT Acceleration** \
[[Website](https://arxiv.org/abs/2512.14096)]

**Plug-and-Play Fidelity Optimization for Diffusion Transformer Acceleration via Cumulative Error Minimization** \
[[Website](https://arxiv.org/abs/2512.23258)]

**Forecast the Principal, Stabilize the Residual: Subspace-Aware Feature Caching for Efficient Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2601.07396)]

**DisCa: Accelerating Video Diffusion Transformers with Distillation-Compatible Learnable Feature Caching** \
[[Website](https://arxiv.org/abs/2602.05449)]

**NanoFLUX: Distillation-Driven Compression of Large Text-to-Image Generation Models for Mobile Devices** \
[[Website](https://arxiv.org/abs/2602.06879)]

**DDiT: Dynamic Patch Scheduling for Efficient Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2602.16968)]

**LESA: Learnable Stage-Aware Predictors for Diffusion Model Acceleration** \
[[Website](https://arxiv.org/abs/2602.20497)]

**Analyzing and Improving Fast Sampling of Text-to-Image Diffusion Models** \
[[Website](https://arxiv.org/abs/2603.00763)]

**Adaptive Spectral Feature Forecasting for Diffusion Sampling Acceleration** \
[[Website](https://arxiv.org/abs/2603.01623)]

**TC-Padé: Trajectory-Consistent Padé Approximation for Diffusion Acceleration** \
[[Website](https://arxiv.org/abs/2603.02943)]


## Train-Free

**AsyncDiff: Parallelizing Diffusion Models by Asynchronous Denoising** \
[[NeurIPS 2024](https://arxiv.org/abs/2406.06911)]
[[Project](https://czg1225.github.io/asyncdiff_page/)]
[[Code](https://github.com/czg1225/AsyncDiff)]

**Training-Free Adaptive Diffusion with Bounded Difference Approximation Strategy** \
[[NeurIPS 2024](https://arxiv.org/abs/2410.09873)]
[[Project](https://jiakangyuan.github.io/AdaptiveDiffusion-project-page/)]
[[Code](https://github.com/UniModal4Reasoning/AdaptiveDiffusion)]


**DeepCache: Accelerating Diffusion Models for Free** \
[[CVPR 2024](https://arxiv.org/abs/2312.00858)]
[[Project](https://horseee.github.io/Diffusion_DeepCache/)]
[[Code](https://github.com/horseee/DeepCache)]

**Grouping First, Attending Smartly: Training-Free Acceleration for Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2505.14687)]
[[Project](https://oliverrensu.github.io/project/GRAT/)]
[[Code](https://github.com/OliverRensu/GRAT)]

**Faster Diffusion: Rethinking the Role of the Encoder for Diffusion Model Inference** \
[[NeurIPS 2024](https://arxiv.org/abs/2312.09608)]
[[Code](https://github.com/hutaihang/faster-diffusion)]

**DiTFastAttn: Attention Compression for Diffusion Transformer Models** \
[[NeurIPS 2024](https://arxiv.org/abs/2406.08552)]
[[Code](https://github.com/thu-nics/DiTFastAttn)]

**Structural Pruning for Diffusion Models** \
[[NeurIPS 2023](https://arxiv.org/abs/2305.10924)]
[[Code](https://github.com/VainF/Diff-Pruning)]

**AutoDiffusion: Training-Free Optimization of Time Steps and Architectures for Automated Diffusion Model Acceleration** \
[[ICCV 2023](https://arxiv.org/abs/2309.10438)]
[[Code](https://github.com/lilijiangg/AutoDiffusion)]

**Agent Attention: On the Integration of Softmax and Linear Attention** \
[[ECCV 2024](https://arxiv.org/abs/2312.08874)]
[[Code](https://github.com/LeapLabTHU/Agent-Attention)]

**Attend to Not Attended: Structure-then-Detail Token Merging for Post-training DiT Acceleration** \
[[CVPR 2025](https://arxiv.org/abs/2505.11707)]
[[Code](https://github.com/ICTMCG/SDTM)]

**Token Merging for Fast Stable Diffusion** \
[[CVPRW 2024](https://arxiv.org/abs/2303.17604)]
[[Code](https://github.com/dbolya/tomesd)]

**LightCache: Memory-Efficient, Training-Free Acceleration for Video Generation** \
[[Website](https://arxiv.org/abs/2510.05367)]
[[Code](https://github.com/NKUShaw/LightCache)]

**FORA: Fast-Forward Caching in Diffusion Transformer Acceleration** \
[[Website](https://arxiv.org/abs/2407.01425)]
[[Code](https://github.com/prathebaselva/FORA)]

**Real-Time Video Generation with Pyramid Attention Broadcast** \
[[Website](https://arxiv.org/abs/2408.12588)]
[[Code](https://github.com/NUS-HPC-AI-Lab/VideoSys)]

**Accelerating Diffusion Transformers with Token-wise Feature Caching** \
[[Website](https://arxiv.org/abs/2410.05317)]
[[Code](https://github.com/Shenyi-Z/ToCa)]

**TGATE-V1: Cross-Attention Makes Inference Cumbersome in Text-to-Image Diffusion Models** \
[[Website](https://arxiv.org/abs/2404.02747v1)]
[[Code](https://github.com/HaozheLiu-ST/T-GATE)]

**TGATE-V2: Faster Diffusion via Temporal Attention Decomposition** \
[[Website](https://arxiv.org/abs/2404.02747v2)]
[[Code](https://github.com/HaozheLiu-ST/T-GATE)]

**SmoothCache: A Universal Inference Acceleration Technique for Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2411.10510)]
[[Code](https://github.com/Roblox/SmoothCache)]

**Attention-Driven Training-Free Efficiency Enhancement of Diffusion Models** \
[[CVPR 2024](https://arxiv.org/abs/2405.05252)]
[[Project](https://atedm.github.io/)]

**Training-free Diffusion Acceleration with Bottleneck Sampling** \
[[Website](https://arxiv.org/abs/2503.18940)]
[[Project](https://tyfeld.github.io/BottleneckSampling.github.io/)]

**Cache Me if You Can: Accelerating Diffusion Models through Block Caching** \
[[Website](https://arxiv.org/abs/2312.03209)]
[[Project](https://github.com/Shenyi-Z/ToCa)]

**Fewer Denoising Steps or Cheaper Per-Step Inference: Towards Compute-Optimal Diffusion Model Deployment** \
[[ICCV 2025](https://arxiv.org/abs/2508.06160)]

**Token Fusion: Bridging the Gap between Token Pruning and Token Merging** \
[[WACV 2024](https://arxiv.org/abs/2312.01026)]

**Flexiffusion: Training-Free Segment-Wise Neural Architecture Search for Efficient Diffusion Models** \
[[Website](https://arxiv.org/abs/2506.02488)]

**PFDiff: Training-free Acceleration of Diffusion Models through the Gradient Guidance of Past and Future** \
[[Website](https://arxiv.org/abs/2408.08822)]

**Δ-DiT: A Training-Free Acceleration Method Tailored for Diffusion Transformers** \
[[Website](https://arxiv.org/abs/2406.01125)]

**Adversarial Score identity Distillation: Rapidly Surpassing the Teacher in One Step** \
[[Website](https://arxiv.org/abs/2410.14919)]

**Diff-Instruct++: Training One-step Text-to-image Generator Model to Align with Human Preferences** \
[[Website](https://arxiv.org/abs/2410.18881)]

**Fast constrained sampling in pre-trained diffusion models** \
[[Website](https://arxiv.org/abs/2410.18804)]

**Chipmunk: Training-Free Acceleration of Diffusion Transformers with Dynamic Column-Sparse Deltas** \
[[Website](https://arxiv.org/abs/2506.03275)]

**ETC: training-free diffusion models acceleration with Error-aware Trend Consistency** \
[[Website](https://arxiv.org/abs/2510.24129)]


## AR model

**Distilled Decoding 1: One-step Sampling of Image Auto-regressive Models with Flow Matching** \
[[ICLR 2025](https://arxiv.org/abs/2412.17153)]
[[Project](https://imagination-research.github.io/distilled-decoding/)]
[[Code](https://github.com/imagination-research/distilled-decoding)]

**Accelerating Auto-regressive Text-to-Image Generation with Training-free Speculative Jacobi Decoding** \
[[ICLR 2025](https://arxiv.org/abs/2410.01699)]
[[Code](https://github.com/tyshiwo1/Accelerating-T2I-AR-with-SJD)]

**LANTERN: Accelerating Visual Autoregressive Models with Relaxed Speculative Decoding** \
[[ICLR 2025](https://arxiv.org/abs/2410.03355)]
[[Code](https://github.com/tyshiwo1/Accelerating-T2I-AR-with-SJD)]

**Show-o Turbo: Towards Accelerated Unified Multimodal Understanding and Generation** \
[[Website](https://arxiv.org/abs/2502.05415)]
[[Code](https://github.com/zhijie-group/Show-o-Turbo)]

**SimpleAR: Pushing the Frontier of Autoregressive Visual Generation through Pretraining, SFT, and RL** \
[[Website](https://arxiv.org/abs/2504.11455)]
[[Code](https://github.com/wdrink/SimpleAR)]

**Speculative Jacobi-Denoising Decoding for Accelerating Autoregressive Text-to-image Generation** \
[[Website](https://arxiv.org/abs/2510.08994)]

**SJD++: Improved Speculative Jacobi Decoding for Training-free Acceleration of Discrete Auto-regressive Text-to-Image Generation** \
[[Website](https://arxiv.org/abs/2512.07503)]

**Hawk: Leveraging Spatial Context for Faster Autoregressive Text-to-Image Generation** \
[[Website](https://arxiv.org/abs/2510.25739)]

**Fast-ARDiff: An Entropy-informed Acceleration Framework for Continuous Space Autoregressive Generation** \
[[Website](https://arxiv.org/abs/2512.08537)]



## VAR model

**Collaborative Decoding Makes Visual Auto-Regressive Modeling Efficient** \
[[CVPR 2025](https://arxiv.org/abs/2411.17787)]
[[Project](https://czg1225.github.io/CoDe_page/)]
[[Code](https://github.com/czg1225/CoDe)]

**FastVAR: Linear Visual Autoregressive Modeling via Cached Token Pruning** \
[[ICCV 2025](https://arxiv.org/abs/2503.23367)]
[[Project](https://fastvar.github.io/)]
[[Code](https://github.com/csguoh/FastVAR)]

**Memory-Efficient Visual Autoregressive Modeling with Scale-Aware KV Cache Compression** \
[[Website](https://arxiv.org/abs/2505.19602)]
[[Code](https://github.com/StargazerX0/ScaleKV)]

**SkipVAR: Accelerating Visual Autoregressive Modeling via Adaptive Frequency-Aware Skipping** \
[[Website](https://arxiv.org/abs/2506.08908)]
[[Code](https://github.com/fakerone-li/SkipVAR)]

**Frequency-Aware Autoregressive Modeling for Efficient High-Resolution Image Synthesis** \
[[Website](https://arxiv.org/abs/2507.20454v1)]
[[Code](https://github.com/Caesarhhh/SparseVAR)]

**LiteVAR: Compressing Visual Autoregressive Modelling with Efficient Attention and Quantization** \
[[Website](https://arxiv.org/abs/2411.17178)]


# Image Restoration


**Diffusion Prior-Based Amortized Variational Inference for Noisy Inverse Problems** \
[[ECCV 2024 Oral](https://arxiv.org/abs/2407.16125)]
[[Project](https://mlvlab.github.io/DAVI-project/)]
[[Code](https://github.com/mlvlab/DAVI)]


**Zero-Shot Image Restoration Using Denoising Diffusion Null-Space Model** \
[[ICLR 2023 oral](https://arxiv.org/abs/2212.00490)]
[[Project](https://wyhuai.github.io/ddnm.io/)]
[[Code](https://github.com/wyhuai/DDNM)]

**Scaling Up to Excellence: Practicing Model Scaling for Photo-Realistic Image Restoration In the Wild** \
[[CVPR 2024](https://arxiv.org/abs/2401.13627)]
[[Project](https://supir.xpixel.group/)]
[[Code](https://github.com/Fanghua-Yu/SUPIR)]

**Selective Hourglass Mapping for Universal Image Restoration Based on Diffusion Model** \
[[CVPR 2024](https://arxiv.org/abs/2403.11157)]
[[Project](https://isee-laboratory.github.io/DiffUIR/)]
[[Code](https://github.com/iSEE-Laboratory/DiffUIR)]

**Zero-Reference Low-Light Enhancement via Physical Quadruple Priors** \
[[CVPR 2024](https://arxiv.org/abs/2403.12933)]
[[Project](https://daooshee.github.io/QuadPrior-Website/)]
[[Code](https://github.com/daooshee/QuadPrior/)]

**From Posterior Sampling to Meaningful Diversity in Image Restoration** \
[[ICLR 2024](https://arxiv.org/abs/2310.16047)]
[[Project](https://noa-cohen.github.io/MeaningfulDiversityInIR/)]
[[Code](https://github.com/noa-cohen/MeaningfulDiversityInIR)]

**Generative Diffusion Prior for Unified Image Restoration and Enhancement** \
[[CVPR 2023](https://arxiv.org/abs/2304.01247)]
[[Project](https://generativediffusionprior.github.io/)]
[[Code](https://github.com/Fayeben/GenerativeDiffusionPrior)]

**MoE-DiffIR: Task-customized Diffusion Priors for Universal Compressed Image Restoration** \
[[ECCV 2024](https://arxiv.org/abs/2407.10833)]
[[Project](https://renyulin-f.github.io/MoE-DiffIR.github.io/)]
[[Code](https://github.com/renyulin-f/MoE-DiffIR)]

**Image Restoration with Mean-Reverting Stochastic Differential Equations** \
[[ICML 2023](https://arxiv.org/abs/2301.11699)]
[[Project](https://algolzw.github.io/ir-sde/index.html)]
[[Code](https://github.com/Algolzw/image-restoration-sde)]

**PhoCoLens: Photorealistic and Consistent Reconstruction in Lensless Imaging** \
[[NeurIPS 2024 Spotlight](https://arxiv.org/abs/2409.17996)]
[[Project](https://phocolens.github.io/)]
[[Code](https://github.com/PhoCoLens)]

**Denoising Diffusion Models for Plug-and-Play Image Restoration** \
[[CVPR 2023 Workshop NTIRE](https://arxiv.org/abs/2305.08995)]
[[Project](https://yuanzhi-zhu.github.io/DiffPIR/)]
[[Code](https://github.com/yuanzhi-zhu/DiffPIR)]

**FoundIR: Unleashing Million-scale Training Data to Advance Foundation Models for Image Restoration** \
[[Website](https://arxiv.org/abs/2412.01427)]
[[Project](https://foundir.net/)]
[[Code](https://github.com/House-Leo/FoundIR)]

**Improving Diffusion Inverse Problem Solving with Decoupled Noise Annealing** \
[[Website](https://arxiv.org/abs/2407.01521)]
[[Project](https://daps-inverse-problem.github.io/)]
[[Code](https://github.com/zhangbingliang2019/DAPS)]

**SVFR: A Unified Framework for Generalized Video Face Restoration** \
[[Website](https://arxiv.org/abs/2501.01235)]
[[Project](https://wangzhiyaoo.github.io/SVFR/)]
[[Code](https://github.com/wangzhiyaoo/SVFR)]

**DiffIR2VR-Zero: Zero-Shot Video Restoration with Diffusion-based Image Restoration Models** \
[[Website](https://arxiv.org/abs/2407.01519)]
[[Project](https://jimmycv07.github.io/DiffIR2VR_web/)]
[[Code](https://github.com/jimmycv07/DiffIR2VR-Zero)]

**Solving Video Inverse Problems Using Image Diffusion Models** \
[[Website](https://arxiv.org/abs/2409.02574)]
[[Project](https://solving-video-inverse.github.io/main/)]
[[Code](https://github.com/solving-video-inverse/codes)]

**RestoreVAR: Visual Autoregressive Generation for All-in-One Image Restoration** \
[[Website](https://arxiv.org/abs/2505.18047)]
[[Project](https://sudraj2002.github.io/restorevarpage/)]
[[Code](https://github.com/sudraj2002/RestoreVAR)]

**Learning Efficient and Effective Trajectories for Differential Equation-based Image Restoration** \
[[Website](https://arxiv.org/abs/2410.04811)]
[[Project](https://zhu-zhiyu.github.io/FLUX-IR/)]
[[Code](https://github.com/ZHU-Zhiyu/FLUX-IR)]

**GenDR: Lightning Generative Detail Restorator** \
[[Website](https://arxiv.org/abs/2503.06790)]
[[Project](https://icandle.github.io/gendr_page/)]
[[Code](https://github.com/icandle/GenDR)]

**AutoDIR: Automatic All-in-One Image Restoration with Latent Diffusion** \
[[Website](https://arxiv.org/abs/2310.10123)]
[[Project](https://jiangyitong.github.io/AutoDIR_webpage/)]
[[Code](https://github.com/jiangyitong/AutoDIR)]

**SeedVR2: One-Step Video Restoration via Diffusion Adversarial Post-Training** \
[[Website](https://arxiv.org/abs/2506.05301)]
[[Project](https://iceclear.github.io/projects/seedvr2/)]
[[Code](https://github.com/IceClear/SeedVR2)]

**Text-Aware Image Restoration with Diffusion Models** \
[[Website](https://arxiv.org/abs/2506.09993)]
[[Project](https://cvlab-kaist.github.io/TAIR/)]
[[Code](https://github.com/cvlab-kaist/TAIR)]

**LucidFlux: Caption-Free Universal Image Restoration via a Large-Scale Diffusion Transformer** \
[[Website](https://arxiv.org/abs/2509.22414)]
[[Project](https://w2genai-lab.github.io/LucidFlux/)]
[[Code](https://github.com/W2GenAI-Lab/LucidFlux)]

**Zero-Shot Video Deraining with Video Diffusion Models** \
[[Website](https://arxiv.org/abs/2511.18537)]
[[Project](https://tvaranka.github.io/ZSVD/)]
[[Code](https://github.com/tvaranka/ZSVD)]

**TPGDiff: Hierarchical Triple-Prior Guided Diffusion for Image Restoration** \
[[Website](https://arxiv.org/abs/2601.20306)]
[[Project](https://leoyjtu.github.io/tpgdiff-project/)]
[[Code](https://github.com/leoyjTu/TPGDiff)]

**FlowIE: Efficient Image Enhancement via Rectified Flow** \
[[CVPR 2024 oral](https://arxiv.org/abs/2406.00508)]
[[Code](https://github.com/EternalEvan/FlowIE)]

**ResShift: Efficient Diffusion Model for Image Super-resolution by Residual Shifting** \
[[NeurIPS 2023 (Spotlight)](https://arxiv.org/abs/2307.12348)]
[[Code](https://github.com/zsyOAOA/ResShift)]

**GibbsDDRM: A Partially Collapsed Gibbs Sampler for Solving Blind Inverse Problems with Denoising Diffusion Restoration** \
[[ICML 2023 oral](https://arxiv.org/abs/2301.12686)]
[[Code](https://github.com/sony/gibbsddrm)]

**Diffusion Priors for Variational Likelihood Estimation and Image Denoising** \
[[NeurIPS 2024 Spotlight](https://arxiv.org/abs/2410.17521)]
[[Code](https://github.com/HUST-Tan/DiffusionVI)]

**DiffIR: Efficient Diffusion Model for Image Restoration**\
<!-- [[ICCV 2023](https://openaccess.thecvf.com/content/ICCV2023/papers/Xia_DiffIR_Efficient_Diffusion_Model_for_Image_Restoration_ICCV_2023_paper.pdf)] -->
[[ICCV 2023](https://arxiv.org/abs/2303.09472)] 
[[Code](https://github.com/Zj-BinXia/DiffIR)]

**Compression-Aware One-Step Diffusion Model for JPEG Artifact Removal** \
[[ICCV 2025](https://arxiv.org/pdf/2502.09873)]
[[Code](https://github.com/jp-guo/CODiff)]

**Image Restoration by Denoising Diffusion Models with Iteratively Preconditioned Guidance** \
[[CVPR 2024](https://arxiv.org/abs/2312.16519)]
[[Code](https://github.com/tirer-lab/DDPG)]

**InstaRevive: One-Step Image Enhancement via Dynamic Score Matching** \
[[ICLR 2025](https://arxiv.org/abs/2504.15513)]
[[Code](https://github.com/EternalEvan/InstaRevive)]

**LightenDiffusion: Unsupervised Low-Light Image Enhancement with Latent-Retinex Diffusion Models** \
[[ECCV 2024](https://arxiv.org/abs/2407.08939)]
[[Code](https://github.com/JianghaiSCU/LightenDiffusion)]

**Rethinking Video Deblurring with Wavelet-Aware Dynamic Transformer and Diffusion Model** \
[[ECCV 2024](https://arxiv.org/abs/2408.13459)]
[[Code](https://github.com/Chen-Rao/VD-Diff)]

**DAVI: Diffusion Prior-Based Amortized Variational Inference for Noisy Inverse Problem** \
[[ECCV 2024](https://arxiv.org/abs/2407.16125)]
[[Code](https://github.com/mlvlab/DAVI)]

**Low-Light Image Enhancement with Wavelet-based Diffusion Models** \
[[SIGGRAPH Asia 2023](https://arxiv.org/abs/2306.00306)]
[[Code](https://github.com/JianghaiSCU/Diffusion-Low-Light)]

**Residual Denoising Diffusion Models** \
[[CVPR 2024](https://arxiv.org/abs/2308.13712)]
[[Code](https://github.com/nachifur/RDDM)]

**Diff-Plugin: Revitalizing Details for Diffusion-based Low-level Tasks** \
[[CVPR 2024](https://arxiv.org/abs/2403.00644)]
[[Code](https://github.com/yuhaoliu7456/Diff-Plugin)]

**Learning Hazing to Dehazing: Towards Realistic Haze Generation for Real-World Image Dehazing** \
[[CVPR 2025](https://arxiv.org/abs/2503.19262)]
[[Code](https://github.com/ruiyi-w/Learning-Hazing-to-Dehazing)]

**Deep Equilibrium Diffusion Restoration with Parallel Sampling** \
[[CVPR 2024](https://arxiv.org/abs/2311.11600)]
[[Code](https://github.com/caojiezhang/deqir)]

**Unleashing the Potential of the Semantic Latent Space in Diffusion Models for Image Dehazing** \
[[ECCV 2024](https://arxiv.org/abs/2509.20091)]
[[Code](https://github.com/aaaasan111/difflid)]

**An Expectation-Maximization Algorithm for Training Clean Diffusion Models from Corrupted Observations** \
[[NeurIPS 2024](https://arxiv.org/abs/2407.01014)]
[[Code](https://github.com/weiminbai/EMDiffusion)]

**ReFIR: Grounding Large Restoration Models with Retrieval Augmentation** \
[[NeurIPS 2024](https://arxiv.org/abs/2410.05601)]
[[Code](https://github.com/csguoh/ReFIR)]

**DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation** \
[[NeurIPS 2024](https://arxiv.org/abs/2410.18666)]
[[Code](https://github.com/shallowdream204/DreamClear)]

**Reconciling Stochastic and Deterministic Strategies for Zero-shot Image Restoration using Diffusion Model in Dual** \
[[CVPR 2025](https://arxiv.org/abs/2503.01288)]
[[Code](https://github.com/ChongWang1024/RDMD)]

**Learning to See in the Extremely Dark** \
[[ICCV 2025](https://arxiv.org/abs/2506.21132)]
[[Code](https://github.com/JianghaiSCU/SIED)]

**Exploiting Diffusion Prior for Real-World Image Dehazing with Unpaired Training** \
[[AAAI 2025](https://arxiv.org/abs/2503.15017)]
[[Code](https://github.com/ywxjm/Diff-Dehazer)]

**Seeing Through the Rain: Resolving High-Frequency Conflicts in Deraining and Super-Resolution via Diffusion Guidance** \
[[AAAI 2026](https://arxiv.org/abs/2511.12419)]
[[Code](https://github.com/PRIS-CV/DHGM)]

**Genuine Knowledge from Practice: Diffusion Test-Time Adaptation for Video Adverse Weather Removal** \
[[CVPR 2024](https://arxiv.org/abs/2403.07684)]

<!-- opensource-radar:truncated -->
