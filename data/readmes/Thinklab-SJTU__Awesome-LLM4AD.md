# Awesome-LLM-for-Autonomous-Driving-Resources
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)![GitHub stars](https://img.shields.io/github/stars/Thinklab-SJTU/Awesome-LLM4AD?color=yellow) ![GitHub forks](https://img.shields.io/github/forks/Thinklab-SJTU/Awesome-LLM4AD?color=9cf) [![GitHub license](https://img.shields.io/github/license/Thinklab-SJTU/Awesome-LLM4AD)](https://github.com/Thinklab-SJTU/Awesome-LLM4AD/blob/main/LICENSE)

This is a collection of research papers about **LLM-for-Autonomous-Driving(LLM4AD)**. The repository will be continuously updated to track the frontier of LLM4AD (Large Language Models for Autonomous Driving), which encompasses VLM4AD (Vision-Language Models for AD) and VLA4AD (Vision-Language-Action models for AD) as integral components of this unified paradigm.  *Maintained by SJTU-ReThinklab.*


Welcome to follow and star! If you find any related materials could be helpful, feel free to contact us (yangzhenjie@sjtu.edu.cn or jiaxiaosong@sjtu.edu.cn) or make a PR.

## Citation
Our survey paper is at https://arxiv.org/abs/2311.01043 which includes more detailed discussions and will be continuously updated.

If you find our repo is helpful, please consider cite it.
```BibTeX
@misc{yang2023survey,
      title={LLM4Drive: A Survey of Large Language Models for Autonomous Driving}, 
      author={Zhenjie Yang and Xiaosong Jia and Hongyang Li and Junchi Yan},
      year={2023},
      eprint={2311.01043},
      archivePrefix={arXiv},
      primaryClass={cs.AI}
}
```

## Table of Contents
- [Awesome LLM-for-Autonomous-Driving(LLM4AD)](#awesome-llm-for-autonomous-driving-resources)
  - [Table of Contents](#table-of-contents)
  - [Overview of LLM4AD](#overview-of-llm4ad)
  - [Papers](#papers)
  - [Datasets](#datasets)
  - [Citation](#citation)
  - [License](#license)

## Overview of LLM4AD
LLM-for-Autonomous-Driving (LLM4AD) refers to the application of Large Language Models(LLMs) in autonomous driving. We divide existing works based on the perspective of applying LLMs: planning, perception, question answering, and generation. 

![image info](./assets/llm4adpipeline.png)

## Motivation of LLM4AD
The orange circle represents the ideal level of driving competence, akin to that possessed by an experienced human driver. There are two main methods to acquire such proficiency: one, through learning-based techniques within simulated environments; and two, by learning from offline data through similar methodologies. It’s important to note that due to discrepancies between simulations and the real-world, these two domains are not fully the same, i.e. sim2real gap. Concurrently, offline data serves as a subset of real-world data since it’s collected directly from actual surroundings. However, it is difficult to fully cover the distribution as well due to the notorious long-tailed nature of autonomous driving tasks. The final goal of autonomous driving is to elevate driving abilities from a basic green stage to a more advanced blue level through extensive data collection and deep learning.

![image info](./assets/whyllmenhance.png)

## Papers
<details open>
<summary>Toggle</summary>

```
format:
- [title](paper link) [links]
  - author1, author2, and author3...
  - publisher
  - task
  - keyword
  - code or project page
  - datasets or environment or simulator
  - publish date
  - summary
  - metrics
```

- [Lagrange: An Open-Vocabulary, Energy-Based Sparse Framework for Generalized End-to-End Driving](https://arxiv.org/abs/2606.20274)
  - Shihao Ji, HongXi Li, Zihui Song, Mingyu Li
  - Publish Date: 2026.06.18
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - Proposes Lagrange, an open-vocabulary computationally sparse driving framework using Masked Latent Fields, leveraging Vision-Language Models to encode class-agnostic object proposals into continuous semantic visual tokens.
    - Introduces an intent-driven masked cross-attention module that temporally filters irrelevant entities and decodes attended tokens into an implicit continuous energy field defined over spatial coordinates.
    - Frames decision-making as a Lagrangian action minimization problem spanning this energy field, enforcing compliance with vehicle kinematics while executing collision avoidance.

- [OmniDrive: An LLM-Choreographed Multi-Agent World Model with Unified Latent Co-Compression for Multi-View Driving Video Generation](https://arxiv.org/abs/2606.17536)
  - Zijie Meng, Yufei Liu, Chengqian Ma, Zhiyu Li, Jiyuan Liu, Wenhua Nie, Bingcai Wei, Shuqin Chen, Weichen Xu, Jiquan Yuan, Miao Zhang
  - Publish Date: 2026.06.16
  - Task: Generation
  - Datasets: [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - Presents DRIVE-CHOREO, an LLM-choreographed multi-agent world model that recasts controllable multi-view video generation as latent choreography, using three Qwen2.5-VL agents for intent parsing, spatial grounding, and cross-view critique.
    - Achieves state-of-the-art multi-view consistency and BEV mAP (21.6) on nuScenes, with a detector trained purely on synthetic data gaining +2.4 NDS on the real validation split.

- [DriveJudge: Rethinking Autonomous Driving Evaluation with Vision-Language Models](https://arxiv.org/abs/2606.17362)
  - Xinglong Sun, Kevin Xie, Jenny Schmalfuss, Despoina Paschalidou, Xiuming Zhang, Sanja Fidler, Kashyap Chitta, Jose M. Alvarez
  - Publish Date: 2026.06.15
  - Task: Evaluation
  - Summary：
    - DriveJudge is a driving evaluation agent that combines rule-grounded evaluation with Vision-Language Model (VLM) reasoning, selectively invoking physically-grounded deterministic rule functions after interpreting environmental context.
    - It introduces two human-aligned benchmark tasks: Driving Quality Classification and Trajectory Preference Selection, and outperforms existing methods like EPDMS and DriveCritic.

- [HOLO-MPPI: Multi-Scenario Motion Planning via Hierarchical Policy Optimization](https://arxiv.org/abs/2606.16480)
  - Youngjae Min, Jovin D'sa, Faizan M. Tariq, David Isele, Navid Azizan, Sangjae Bae
  - Publish Date: 2026.06.15
  - Task: Planning
  - Summary：
    - Introduces HOLO-MPPI, a framework that combines offline high-level policy learning with online low-level MPPI control for multi-scenario motion planning.
    - The high-level policy, trained with a learned world model, generates scenario-robust plans as priors for MPPI, which then refines low-level control in real time.
    - Demonstrated in autonomous driving, HOLO-MPPI outperforms standard MPPI and end-to-end RL baselines while maintaining real-time performance across diverse scenarios.

- [GraphWorld: Long-Horizon Planning with World Models for End-to-End Autonomous Driving](https://arxiv.org/abs/2606.16274)
  - Ziying Song, Caiyan Jia, Lin Liu, Lei Yang, Shengkai Zhang, Feiyang Jia, Fengda Zhao, Peiliang Wu, Shaoqing Xu, Chen Lv, Yadan Luo
  - Publish Date: 2026.06.15
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim), [nuScenes](https://www.nuscenes.org/), [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Proposes GraphWorld, an E2E-AD framework that enhances long-horizon planning through latent world modeling.
    - Introduces Ego-Centric Interaction Graph and World-State-Conditioned Planning to model interactions and safety-aware trajectory planning.
    - Significantly reduces collision rates and improves long-horizon planning performance on Bench2Drive, NAVSIM, and nuScenes.

- [CausalDrive: Real-time Causal World Models for Autonomous Driving](https://arxiv.org/abs/2606.15341)
  - Tianyi Yan, Huan Zheng, Dubing Chen, Meizhi Qu, Yingying Shen, Lijun Zhou, Mingfei Tu, Bing Wang, Guang Chen, Hangjun Ye, Haiyang Sun, Cheng-zhong Xu, Jianbing Shen
  - Publish Date: 2026.06.13
  - Task: Planning
  - Summary：
    - CausalDrive is a controllable, real-time foundation driving world renderer that operates solely on initial front-view frame, ego trajectory, and text prompt.
    - It uses a Context-Forced DMD architecture combining continuous flow-matching with a self-correcting distillation objective to achieve interactive speeds of 12 FPS.
    - It supports downstream applications: generative closed-loop evaluation, large-scale RL post-training via a Video2Reward module, and real-time human-in-the-loop simulation.

- [ParkingTransformer: LLM-Enhanced End-to-End Trajectory Planning for Autonomous Parking](https://arxiv.org/abs/2606.17082)
  - Hauteng Wu, Xu Li, Dong Kong, Zihang Wang, Xieyuanli Chen, Benwu Wang, Wenkai Zhu
  - Publish Date: 2026.06.12
  - Task: Planning
  - Summary：
    - ParkingTransformer leverages multi-view perception and Large Language Models for end-to-end trajectory planning, eliminating the need for dense Bird's-Eye View representations.
    - The framework introduces 3D positional encoding, a fixed-window streaming mechanism, and a coarse-to-fine decoding strategy to enhance spatial reasoning, temporal efficiency, and trajectory precision.
    - Extensive closed-loop experiments in CARLA simulator and real-world vehicle platforms demonstrate high performance (driving score 61.32 in CARLA, 88.70% real-world success rate).

- [ReactSim-Bench: Benchmarking Reactive Behavior World Model Simulation in Autonomous Driving](https://arxiv.org/abs/2606.14058)
  - Zhiyuan Zhang, Yanlun Peng, Jianing Zhang, Xianda Guo, Zehan Huang, Haoran Liu, Qifeng Li, Shaofeng Zhang, Xiaosong Jia, Junchi Yan
  - Publish Date: 2026.06.12
  - Task: Evaluation
  - Summary：
    - Introduces ReactSim-Bench, a benchmark for evaluating reactive capability of behavior world model simulation in autonomous driving, with decoupled agent and AV control using AV behaviors differing from the log.
    - Evaluates safety and rule compliance through collision, map-based, and kinematic feasibility metrics.
    - Constructs 2,636 test scenarios and systematically evaluates state-of-the-art models across multiple architectures including Transformer-based, diffusion-based, and next-token-prediction-based models.

- [RT-VLA: Real-Time Vision-Language-Action Models via Knowledge Distillation](https://arxiv.org/abs/2606.14010)
  - Xiangyu Huang, Zhenlin Hua, Han Zhou, Shounak Sural, Ragunathan Rajkumar
  - Publisher: Carnegie Mellon University
  - Publish Date: 2026.06.12
  - Task: Planning
  - Summary：
    - Proposes RT-VLA, a lightweight distilled VLA model that transfers driving and reasoning capabilities from the state-of-the-art SimLingo teacher through multi-level supervised distillation.
    - Achieves competitive closed-loop driving performance while reducing inference time by 44.8× in vision-only mode and 7.9× in vision+language mode.

- [Multi-Agent Embodied Autonomous Driving: From V2X Information Exchange to Shared World Models](https://arxiv.org/abs/2606.13840)
  - Senkang Hu, Zhengru Fang, Yihang Tao, Zihan Fang, Sam Tak Wu Kwong, Yuguang Fang
  - Publish Date: 2026.06.11
  - Task: Planning
  - Summary：
    - A comprehensive survey of multi-agent embodied autonomous driving through the lens of Shared World Models (SWMs), covering V2X communication, collaborative perception, inter-agent cognition, cooperative planning, end-to-end cooperative driving, and simulation.
    - Identifies key research priorities for multi-agent embodied autonomous driving, including verifiable shared-state maintenance, robust intent and plan alignment, and safe coordinated action under communication, latency, and deployment constraints.

- [VLADriveBench: Evaluating CoT-Action Relationship in VLA for Autonomous Driving](https://arxiv.org/abs/2606.12706)
  - Thach Nguyen, Danhua Guo, Tom Lampo, Fei Wu, Burhan Yaman
  - Publish Date: 2026.06.10
  - Task: Evaluation
  - Summary：
    - VLADriveBench is a framework for evaluating the relationship between chain-of-thought (CoT) reasoning and driving actions in Vision-Language-Action models.
    - It introduces observational metrics (mentioning, hallucination, contradiction, action alignment) combined with a CoT intervention protocol to provide complementary views of the CoT-action relationship.
    - Findings show that high observational alignment does not guarantee causal CoT, and visual salience gates the extent of CoT influence.

- [VLGA: Vision-Language-Geometry-Action Models for Autonomous Driving](https://arxiv.org/abs/2606.12396)
  - Jin Yao, Dhruva Dixith Kurra, Tom Lampo, Zezhou Cheng, Danhua Guo, Burhan Yaman
  - Publish Date: 2026.06.10
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/), [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Introduces geometry as a fourth modality (per-pixel pointmap) alongside vision, language, and action, supervised via a regression loss against LiDAR.
    - Achieves state-of-the-art open-loop results on nuScenes (0.50 m L2 error, 0.18% collision rate) and closed-loop driving score of 79.08 on Bench2Drive.

- [DrivingAgent: Design and Scheduling Agents for Autonomous Driving Systems](https://arxiv.org/abs/2606.12236)
  - Zhongyu Xia, Wenhao Chen, Yongtao Wang, Ming-Hsuan Yang
  - Publish Date: 2026.06.10
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/), [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Proposes DrivingAgent, a novel agent framework with two phases: a design phase that automates module development by interpreting system architecture and generating code, and a scheduling phase that uses a lightweight LLM trained with reinforcement learning for dynamic real-time orchestration supported by structured memory.
    - Achieves a superior speed-accuracy trade-off on both the nuScenes and Bench2Drive benchmarks, demonstrating effective system design and scheduling for autonomous driving.

- [Task-Aligned Stability Analysis of Vision-Language Models for Autonomous Driving Hazard Detection](https://arxiv.org/abs/2606.11889)
  - Everett Richards
  - Publish Date: 2026.06.10
  - Task: Perception
  - Summary：
    - Studies the relationship between corruption-induced embedding drift and task-aligned hazard score (margin drift) using CLIP-based VLMs for autonomous driving hazard detection.
    - Finds that the correlation is corruption-dependent, with some corruptions causing hazardous decision instability despite small embedding changes.
    - Highlights asymmetric failure modes: most corruptions lead to false negatives (missed hazards), while occlusion triggers false alarms, emphasizing the need for task-aligned robustness benchmarks.

- [Language-Driven Cost Optimization for Autonomous Driving](https://arxiv.org/abs/2606.10974)
  - Diego Martinez-Baselga, Khaled Mustafa, Javier Alonso-Mora
  - Publish Date: 2026.06.09
  - Task: Planning
  - Summary：
    - A language-driven framework for adaptive cost design in autonomous driving, using an LLM to interpret scenario descriptions and user queries to generate parameters for a risk-aware MPPI controller.
    - Incorporates human-in-the-loop validation and iterative refinement based on user feedback to align vehicle behavior with intended requirements.

- [Where Does the Answer Come From? Benchmarking View-Level Visual Evidence Identification in Multi-View MLLMs for Autonomous Driving](https://arxiv.org/abs/2606.09644)
  - Yimu Wang, Yee Man Choi, Barry Zhang, Mozhgan Nasr Azadani, Sean Sedwards, Krzysztof Czarnecki
  - Publish Date: 2026.06.08
  - Task: Generation
  - Datasets: [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - Introduces a benchmark for evaluating evidence-source identification in multi-view MLLMs for autonomous driving, requiring models to identify the supporting camera view and answer the question.
    - Contains 122 conflict-centric question-answer pairs from 73 scenes, spanning causality, counterfactual reasoning, and intent prediction.
    - Evaluates three settings (camera-view selection, oracle QA, and joint prediction) and exposes grounding failures that answer-only evaluation misses.

- [Zero-Shot Semantic Re-Identification for Autonomous Driving: A VLM Baseline Study](https://arxiv.org/abs/2606.09362)
  - Eduardo Borges, Manuel Abreu, Luís Garrote, Urbano J. Nunes
  - Publish Date: 2026.06.08
  - Task: Perception
  - Summary：
    - Proposes a zero-shot pipeline using Vision-Language Models (VLMs) to generate structured semantic descriptions for re-identifying traffic participants in autonomous driving.
    - Provides an initial benchmark for language-based re-identification, showing retrieval performance comparable to supervised CNN baselines with greater interpretability.
    - Reveals challenges including attribute inconsistency across viewpoints and limited fine-grained discrimination between visually similar instances.

- [BLUE: Toward Better Language Use in Efficient Vision-Language-Action Models for Autonomous Driving](https://arxiv.org/abs/2606.08684)
  - George Ling, Lijin Yang, Hao Yang, Zhongzhan Huang
  - Publish Date: 2026.06.07
  - Code: [BLUE](https://github.com/George-Ling3/BLUE)
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - BLUE employs a lightweight gate that decides per frame whether to generate language or predict actions, reducing unnecessary computation.
    - It achieves state-of-the-art performance on Bench2Drive (76.2% success rate) and Longest6 v2 (36 driving score) with a 2.54x inference speedup.
    - The method requires no additional human annotation or backbone modification, making it a practical and efficient approach for language-augmented autonomous driving.

- [DriveReward: A Comprehensive Dataset and Generative Vision-Language Reward Model for Autonomous Driving](https://arxiv.org/abs/2606.08525)
  - Qimao Chen, Fang Li, Yuechen Luo, Zehan Zhang, Haiyang Sun, Fangzhen Li, Bing Wang, Guang Chen, Yang Ji, Jiong Deng, Hongwei Xie, Hangjun Ye, Long Chen, Yi Zhang
  - Publish Date: 2026.06.07
  - Task: Evaluation
  - Summary：
    - Introduces DriveReward, a reasoning trajectory evaluation dataset with counterfactual driving behaviors for autonomous driving.
    - Proposes a specialized 1B Vision-Language Reward Model that outperforms larger VLMs on task-specific reward alignment.
    - Validates the reward model via RL finetuning and multi-modal trajectory scoring, achieving comparable performance to rule-based methods in open-loop and closed-loop evaluation.

- [LUNA-AD: Lightweight Uncertainty-Aware Language Model with Lifelong Learning for Autonomous Driving](https://arxiv.org/abs/2606.08470)
  - Ruoyu Yao, Pei Liu, Ruiguo Zhong, Mingxing Peng, Rui Yang, Jun Ma
  - Publish Date: 2026.06.07
  - Task: Perception
  - Datasets: [nuPlan](https://www.nuplan.org/)
  - Summary：
    - Proposes LUNA-AD, a lightweight uncertainty-aware language model with lifelong learning for autonomous driving, featuring a tri-system architecture that reconciles complex multimodal behavioral reasoning, efficient deployment, and continual refinement.
    - Utilizes a multi-agent analytical system to generate uncertainty-aware decision-making demonstrations, a dual-head lightweight heuristic model for unified inference, and a reflection-driven lifelong learning mechanism to enhance driving robustness.

- [PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models](https://arxiv.org/abs/2606.06014)
  - Xiaoyun Qiu, Jingtao He, Yijie Chen, Yusong Huang, Haotian Wang, Yixuan Wang, Xinhu Zheng
  - Publish Date: 2026.06.04
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/), [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - PLAN-S decodes a style-conditioned, four-channel semantic cost map from the latent representation to address the compactness-controllability dilemma in latent world model-based planning.
    - It introduces two host-side interfaces (attention-level fusion for regression planners and reward-level fusion for anchor-score planners) enabling explicit risk, drivability, and style modulation.
    - On nuScenes, PLAN-S reduces average L2 to 0.55 m and achieves a 42% relative reduction in 3 s collision rate; on NAVSIM, the rule-cost variant reaches 89.4 PDMS.

- [Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning](https://arxiv.org/abs/2606.05645)
  - Ziyang Yao, Haochen Liu, Yuncheng Jiang, Zeyu Zhu, Zibin Guo, Jingru Wang, Tianle Liu, Jianwei Cui, Kuiyuan Yang, Hongwei Xie, Jingwei Zhao, Guang Chen, Hangjun Ye
  - Publish Date: 2026.06.04
  - Task: Planning
  - Summary：
    - Introduces Discrete-WAM, a unified discrete vision-action world-policy framework that represents visual observations, future states, high-level decisions, and ego actions within a shared token space.
    - Jointly trains world modeling, world-policy modeling, and policy modeling through multi-task and multi-stage pretraining, enabling action-conditioned future prediction to support policy generation.
    - Decomposes policy generation into hierarchical decision prediction and parallel action-token editing, achieving strong planning performance with support for controllable future generation, counterfactual evaluation, and efficient parallel decoding.

- [EvoDrive: Pareto Evolution for Safety-Critical Autonomous Driving via Self-Improving LLM Agents](https://arxiv.org/abs/2606.03678)
  - Tong Nie, Yuewen Mei, Yihong Tang, Junlin He, Jie Deng, Jian Sun, Wei Ma
  - Publish Date: 2026.06.02
  - Task: Planning
  - Summary：
    - EvoDrive is an automated LLM-based agentic evolution framework for multi-objective scenario generation in autonomous driving, using a simulator-grounded actor-critic architecture.
    - It maintains a Pareto archive to balance adversariality and realism, and demonstrates expanded Pareto frontiers and valuable scenario generation on MetaDrive and CARLA.

- [NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation](https://arxiv.org/abs/2606.03159)
  - NVIDIA, :, Aarti Basant, Amlan Kar, Despoina Paschalidou, Fangyin Wei, Francesco Ferroni, Guillermo Garcia Cobo, Haithem Turki, Huan Ling, Jaewoo Seo, James Lucas, Jay Zhangjie Wu, Jialiang Wang, Jonathan Lorraine, Jun Gao, Kai He, Katarina Tothova, Kevin Xie, Michał Tyszkiewicz, Qi Wu, Riccardo de Lutio, Ruilong Li, Sanja Fidler, Seung Wook Kim, Tianchang Shen, Tianshi Cao, Tobias Pfaff, William Lew, Xindi Wu, Xuanchi Ren, Yifan Lu, Yuxuan Zhang, Zan Gojcic, Zian Wang
  - Publisher: NVIDIA
  - Publish Date: 2026.06.02
  - Task: Generation
  - Summary：
    - OmniDreams is a foundation generative world model mid- and post-trained from the Cosmos diffusion model to autoregressively generate action-conditioned videos in real time for closed-loop autonomous vehicle simulation.
    - It synthesizes complex unobserved phenomena such as extreme weather and unpredictable dynamic agent behaviors, and acts as a responsive, reactive environment for training and evaluating driving policies.

- [GeoDrive-Bench: Benchmarking Region-Specific Multimodal Reasoning in Autonomous Driving](https://arxiv.org/abs/2606.02774)
  - Yingzi Ma, Chaowei Xiao, Ming Jiang
  - Publish Date: 2026.06.01
  - Task: Evaluation
  - Summary：
    - Introduces GeoDrive-Bench, a benchmark with 5,053 human-validated QA pairs across six countries to evaluate VLMs' geo-culturally grounded driving reasoning.
    - Covers four driving tasks: perception, prediction, planning, and region reasoning, requiring models to infer correct behavior from visual evidence and local conventions.
    - Proposes a distillation algorithm to inject region-specific traffic-rule knowledge into VLMs, improving geo-cultural reasoning across regions.

- [Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning](https://arxiv.org/abs/2606.01935)
  - Ziyang Yao, Zeyu Zhu, YunCheng Jiang, Zibin Guo, Huijing Zhao
  - Publish Date: 2026.06.01
  - Task: Perception, Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - Presents a representation-guided and geometry-enhanced discrete tokenizer for driving world models and planning, learning tokens under joint supervision.
    - Aligns discrete bottleneck with frozen DINO features for representation consistency while preserving appearance, and injects geometric cues via depth and pose supervision.

- [DriveAnchor: Progressive Anchor-based Flow Learning for Autonomous Driving Planning](https://arxiv.org/abs/2606.00519)
  - Limin Yan, Haoyun Tang, Yutao Qiu, Hongqing Liu, Haoyu Xu
  - Publish Date: 2026.05.30
  - Task: Planning
  - Summary：
    - DriveAnchor is a three-stage framework for autonomous driving planning that achieves behavioral diversity, controllability, and safety.
    - It uses Demonstration Flow Pretraining with a vocabulary of 2,398 trajectory shapes, Guided Flow Post-training with an Energy Field for controllability, and Reward-Refined Flow Fine-tuning using zeroth-order reinforcement learning.
    - The method reduces near-range collision rates by 89% and improves mean reward by 32% without imitation accuracy degradation, validated through real-world vehicle testing.

- [StressDream: Steering Video World Models for Robust Policy Evaluation and Improvement](https://arxiv.org/abs/2606.00267)
  - Junwon Seo, Sushant Veer, Ran Tian, Wenhao Ding, Apoorva Sharma, Karen Leung, Edward Schmerling, Marco Pavone, Andrea Bajcsy
  - Publish Date: 2026.05.29
  - Project Page: [StressDream](https://junwon.me/StressDream/)
  - Task: Evaluation
  - Summary：
    - StressDream steers video world model imaginations toward high-impact yet plausible outcomes by optimizing initial noise of diffusion-based world models.
    - It uses a semantic objective with a Vision-Language Model and a plausibility objective to avoid out-of-distribution noise.
    - Demonstrates on autonomous driving and robotic manipulation for robust policy evaluation and improvement.

- [nuReasoning: A Reasoning-Centric Dataset and Benchmark for Long-Tail Autonomous Driving](https://arxiv.org/abs/2605.31572)
  - Zhiyu Huang, Johnson Liu, Rui Song, Zewei Zhou, Ruining Yang, Yun Zhang, Tianhui Cai, Hanyin Zhang, Mingxuan Gao, Valeria Xu, Jiali Chen, Yishan Shen, Yiluan Guo, Tony, Qi, Jiaqi Ma
  - Publish Date: 2026.05.29
  - Task: Reasoning
  - Summary：
    - nuReasoning is a large-scale real-world dataset and benchmark for reasoning-centric autonomous driving, containing 20,000 clips with human-verified reasoning annotations.
    - It supports both reasoning evaluation and planning evaluation, enabling direct study of how reasoning supervision affects driving performance.
    - Experiments show that fine-tuning VLMs on nuReasoning improves driving-specific question answering and incorporating reasoning supervision into VLA training improves planning performance.

- [IDOL: Inverse-Dynamics-Guided Future Prediction for End-to-End Autonomous Driving](https://arxiv.org/abs/2605.31476)
  - Chenghao Zhang, Timin Li, Dongmei Li
  - Publish Date: 2026.05.29
  - Task: Prediction
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - IDOL proposes an inverse-dynamics-guided future prediction framework for world-model-based end-to-end planning in latent BEV space.
    - It uses an inverse dynamics model to decode transition-aware trajectory features from predicted future latent states, turning future forecasting into actionable planning guidance.
    - Experiments on NAVSIM v1 and v2 benchmarks show state-of-the-art performance.

- [Before Parc Fermé: RL-Time Pruning for Efficient Embodied LLMs in Autonomous Driving](https://arxiv.org/abs/2605.31256)
  - Luca Benfenati, Ali Azimi, Matteo Risso, Fabio Carapellese, Daniele Jahier Pagliari, Alessio Burrello
  - Publish Date: 2026.05.29
  - Task: Reasoning
  - Summary：
    - Proposes BPF, a pruning strategy performed during reinforcement learning to compress embodied LLM controllers, allowing pruning decisions to account for task-specific supervision and closed-loop feedback.
    - Introduces two variants: BPF-RL and BPF-SFT/RL, which iteratively prune at different training stages to achieve target compression ratios.
    - Evaluates on RobotxR1 autonomous-driving pipeline, demonstrating superior task-performance vs. memory/throughput trade-offs, with up to 27% decode throughput improvement on Jetson AGX Orin.

- [Does Visual Information Play a Decisive Role in Vision-Language-Action Model Driving Behavior?](https://arxiv.org/abs/2605.31041)
  - Jingtao He, Hongliang Lu, Xiaoyun Qiu, Yixuan Wang, Xinhu Zheng
  - Publish Date: 2026.05.29
  - Task: Perception
  - Summary：
    - Introduces a structured multi-level visual perturbation framework to analyze visual-behavior dependency in VLA-based driving models.
    - Framework organizes controlled visual perturbations along three complementary dimensions: channel-level degradation, information-level disruption, and structure-level modification.
    - Evaluated on open-loop trajectory prediction and interactive closed-loop safety evaluation, revealing evaluation-dependent dependency patterns and uneven visual grounding.

- [World Models: A Comprehensive Survey of Architectures, Methodologies, Reasoning Paradigms, and Applications](https://arxiv.org/abs/2606.00133)
  - Arif Hassan Zidan, Yi Pan, Hanqi Jiang, Ruiyu Yan, Wei Ruan, Zihao Wu, Lifeng Chen, Weihang You, Xinliang Li, Bowen Chen, Huawen Hu, Peilong Wang, Sizhuang Liu, Jing Zhang, Siyuan Li, Zhengliang Liu, Yu Bao, Lin Zhao, Lichao Sun, Dajiang Zhu, Xiang Li, Jinglei Lv, Quanzheng Li, Wei Liu, Tianming Liu, Wei Zhang
  - Publish Date: 2026.05.28
  - Summary：
    - Presents a comprehensive multi-axis taxonomy for world models across architecture, methodology, reasoning, and application domains.
    - Traces the evolution from early cognitive-science foundations to milestone systems and highlights recent convergence of chain-of-thought reasoning with world-model imagination.

- [SARAD: LLM-Based Safety-Aware Hybrid Reinforcement Learning with Collision Prediction for Autonomous Driving](https://arxiv.org/abs/2605.28583)
  - Kangyu Wu, Peng Cui, Guoxi Chen, Ya Zhang
  - Publish Date: 2026.05.27
  - Task: Prediction, Planning
  - Summary：
    - SARAD substitutes the random exploration of DRL with RAG-enhanced, LLM-guided decisions sourced from a dynamic expert knowledge repository.
    - An attention discriminator is proposed to integrate the prior knowledge of LLMs into DRL policy optimization.
    - A collision predictor module, fine-tuned with historical collision data, is further designed to improve vehicle safety.

- [DriveWAM: Video Generative Priors Enable Scalable World-Action Modeling for Autonomous Driving](https://arxiv.org/abs/2605.28544)
  - Chen Shi, Jinrui Xu, Shaoshuai Shi, Kehua Sheng, Bo Zhang, Li Jiang
  - Publish Date: 2026.05.27
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - DriveWAM adapts a pretrained video diffusion transformer into an autoregressive video-action policy, preserving video-generation architecture for action generation.
    - Introduces scene-evolving driving guidance with a frozen VLM for chunk-specific semantic intent, and selective KV memory for bounded long-horizon rollout.
    - Achieves strong planning performance on NAVSIM and PhysicalAI-Autonomous-Vehicles benchmark, with data-scaling study confirming scaling potential.

- [TPS-Drive: Task-Guided Representation Purification for VLM-based Autonomous Driving](https://arxiv.org/abs/2605.27038)
  - Jiaxiang Li, Yumao Liu, Ke Ma
  - Publish Date: 2026.05.26
  - Task: Perception, Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/), [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - Proposes TPS-Drive, a framework centered on Task-Guided Representation Purification to mitigate spatial hallucinations and representation interference in VLM-based autonomous driving.
    - Introduces an Agent-Centric Tokenizer with task-guided vector quantization, supervised by a frozen 3D detection head, to reallocate codebook capacity from static backgrounds to dynamic agents.
    - Optimized via a progressive three-stage training paradigm with reward-driven refinement, achieving state-of-the-art safety on NAVSIM benchmarks and reduced collision rates in nuScenes.

- [Decision-Making with Lightweight Confidence-Aware Language Model for Autonomous Driving](https://arxiv.org/abs/2605.25393)
  - Ruoyu Yao, Ruiguo Zhong, Pei Liu, Mingxing Peng, Rui Yang, Jun Ma
  - Publish Date: 2026.05.25
  - Task: Planning
  - Datasets: [nuPlan](https://www.nuscenes.org/nuplan)
  - Summary：
    - Proposes a lightweight confidence-aware language model for autonomous driving decision-making, leveraging a multi-agent collaborative workflow for demonstration generation.
    - Employs confidence-aware fine-tuning with Retrieval Augmented Generation (RAG) to distill knowledge into a dual-head lightweight model.
    - Achieves state-of-the-art success rates on the nuPlan benchmark while maintaining low inference latency.

- [PEDESTRIANQA: A Benchmark for Vision-Language Models on Pedestrian Intention and Trajectory Prediction](https://arxiv.org/abs/2605.24562)
  - Naman Mishra, Shankar Gangisetty, C. V. Jawahar
  - Publish Date: 2026.05.23
  - Task: Evaluation
  - Summary：
    - Introduces PedestrianQA, a large-scale video-based dataset that formulates pedestrian intention and trajectory prediction as question-answering tasks with structured rationales.
    - Demonstrates that finetuning state-of-the-art VLMs on PedestrianQA significantly improves intention classification, trajectory forecasting accuracy, and the quality of explanatory rationales.

- [SparseWorld: Enhancing End-to-End Autonomous Driving via World Models with Sparse Scene Representation](https://arxiv.org/abs/2605.24354)
  - Ruoyu Wang, Jingke Wang, Yukai Ma, Yuehao Huang, Shuangming Lei, Guanglin Xu, Aixue Ye, Yong Liu
  - Publish Date: 2026.05.23
  - Project Page: [SparseWorld](https://wryzju.github.io/SparseWorld/)
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/), [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Proposes SparseWorld, a lightweight world model that predicts only critical scene layout via autoregressive rollout of future map elements and agents, reducing computational cost.
    - Uses a Sparse Dreamer with joint temporal-spatial attention to anticipate future instances, refining motion prediction and trajectory planning.
    - Achieves state-of-the-art open-loop planning on nuScenes (0.05% collision rate) and significantly outperforms baselines in closed-loop on Bench2Drive.

- [D2-V2X: Depth-Driven Cooperative V2X Reasoning for Autonomous Driving](https://arxiv.org/abs/2605.24098)
  - Kevin Richard, Alphin Varghese, Colin Pham, David Oh, Srijan Das
  - Publish Date: 2026.05.22
  - Code: [D2-V2X](https://github.com/KevinRichard1/D2-V2X)
  - Task: Evaluation
  - Summary：
    - Introduces D2-V2X, a spatially-aware Question-Rationale-Answer (QRA) benchmark with 8,500 triplets from multimodal vehicle and infrastructure sensors.
    - Establishes a baseline that aligns 3D LiDAR features with VLM latent space, using Chain-of-Thought rationales to explicitly articulate spatial relations, achieving 24.4% recall in identifying occluded hazards and reducing spatial estimation error by 77%.

- [ChainFlow-VLA: Causal Flow Planning with Vision-Language Models](https://arxiv.org/abs/2605.23270)
  - Xiyang Wang, Xinlin Wang, Tingguang Zhou, Gong Chen, Xingtai Gui, Zhi Xu, Xiaolei Wu, Feiyang Tan, Hangning Zhou, Mu Yang
  - Publish Date: 2026.05.22
  - Code: [ChainFlow-VLA](https://github.com/AFARI-Research/ChainFlow-VLA)
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - ChainFlow-VLA unifies causal generation and global refinement within a unified probabilistic framework for end-to-end autonomous driving.
    - It formulates planning as a mixture over AR-induced modes and learns VLM-conditioned residual distributions, achieving robust planning in ambiguous and long-tail scenarios.
    - The approach achieves a state-of-the-art score of 94.85 on the NAVSIM v1 leaderboard, matching human-level performance.

- [DRIVESPATIAL: A Benchmark for Spatiotemporal Intelligence in VLMs for Autonomous Driving](https://arxiv.org/abs/2605.23176)
  - Hao Vo, Khoa Vo, Phu Loc Nguyen, Sieu Tran, Duc Minh Nguyen, Ngo Xuan Cuong, Gladys Gawugah, Sreevenkata Anjani Tishita Godavarthi, Chase Rainwater, Nghi D. Q. Bui, Anh Nguyen, Duy Minh Ho Nguyen, Ngan Le
  - Publish Date: 2026.05.22
  - Task: Evaluation
  - Summary：
    - DriveSpatial is a benchmark of 15.6K human-verified QA pairs across 20 tasks from five large-scale AD datasets, evaluating four abilities: Cognitive Scene Construction, Multi-view Relational Understanding, Temporal Reasoning, and Generalization.
    - It reveals a substantial human-model gap, with the strongest model trailing humans by 28.4 points, and shows that explicit BEV grounding consistently improves performance, indicating current VLMs lack the scene-construction ability needed for reliable spatiotemporal driving intelligence.

- [LVDrive: Latent Visual Representation Enhanced Vision-Language-Action Autonomous Driving Model](https://arxiv.org/abs/2605.22089)
  - Xiaodong Mei, Diankun Zhang, Hongwei Xie, Guang Chen, Hangjun Ye, Dan Xu
  - Publish Date: 2026.05.21
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Introduces a future scene prediction task entirely in high-level latent space under auxiliary supervision from a pretrained vision backbone, avoiding inefficient pixel-level reconstruction.
    - Jointly models future scene and motion prediction within a unified embedding space, processed in a single forward pass for future-aware reasoning.
    - Designs a two-stage trajectory decoding strategy that leverages learned latent future representations to refine trajectory generation, achieving significant improvements on the Bench2Drive benchmark.

- [Lost in Fog: Sensor Perturbations Expose Reasoning Fragility in Driving VLAs](https://arxiv.org/abs/2605.21446)
  - Abhinaw Priyadershi, Jelena Frtunikj
  - Publish Date: 2026.05.20
  - Task: Perception
  - Summary：
    - Conducted a controlled perturbation study of Vision-Language-Action robustness in autonomous driving, evaluating across 1,996 scenarios under eight sensor perturbations.
    - Found that reasoning consistency (Chain-of-Causation) is a high-fidelity indicator of trajectory reliability, with trajectory deviation spiking 5.3× when explanations change.
    - Established CoC consistency as a quantitative proxy for planning safety, motivating reasoning-based runtime monitoring for safer VLA deployment.

- [Distill to Think, Foresee to Act: Cognitive-Physical Reinforcement Learning for Autonomous Driving](https://arxiv.org/abs/2605.21139)
  - Yang Wu, Qiang Meng, Zhaojiang Liu, Youquan Liu, Jian Yang, Jin Xie
  - Publish Date: 2026.05.20
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - CoPhy, a Cognitive-Physical reinforcement learning framework for autonomous driving, distilling VLM knowledge into BEV encoder and building an auto-regressive world model.
    - It uses GRPO with a dual-reward mechanism: physical reward from BEV rollouts and cognitive reward from language-aligned scorer.
    - Achieves state-of-the-art on NAVSIM v1 and v2 benchmarks and enables safer driving via cognitively informed scene compliance.

- [Bridging Structure and Language: Graph-Based Visual Reasoning for Autonomous Road Understanding](https://arxiv.org/abs/2605.20942)
  - Lena Wild, Katie Z Luo, Marco Pavone
  - Publish Date: 2026.05.20
  - Task: Perception
  - Summary：
    - Introduces Combined Road Substrate (CRS), a graph-grounded framework that integrates geometric road structure and open-vocabulary semantics for structured road reasoning.
    - Demonstrates that training small vision-language models with as few as 20-80 CRS-enriched scenes yields stable gains in compositional reasoning, revealing that structured supervision is key rather than model scale.

- [VL-DPO: Vision-Language-Guided Finetuning for Preference-Aligned Autonomous Driving](https://arxiv.org/abs/2605.20082)
  - Zhefan Xu, Ghassen Jerfel, Marina Haliem, Qi Zhao, Jeonhyung Kang, Khaled S. Refaat
  - Publish Date: 2026.05.19
  - Task: Planning
  - Datasets: [Waymo Open End-to-End Driving Dataset](https://waymo.com/open/)
  - Summary：
    - VL-DPO leverages a Vision-Language Model as a zero-shot reasoner to automatically generate preference pairs from a pretrained model's rollouts, then finetunes the model via Direct Preference Optimization.
    - The framework aligns ego-vehicle motion forecasting models with human preferences, achieving an 11.94% increase in rater feedback score and a 10.01% reduction in average displacement error.

- [Beyond Imitation: Learning Safe End-to-End Autonomous Driving from Hard Negatives](https://arxiv.org/abs/2605.19771)
  - Junli Wang, Zhihua Hua, Xueyi Liu, Zebin Xing, Haochen Tian, Kun Ma, Hangjun Ye, Guang Chen, Long Chen, Qichao Zhang
  - Publish Date: 2026.05.19
  - Task: Perception, Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - BeyondDrive, a failure-aware imitation learning framework for end-to-end autonomous driving that jointly learns from successful and failed driving behaviors.
    - Introduces flow matching-based negative trajectory generator to synthesize safety-critical trajectories, diversity-aware sampling to cover diverse failure modes, and Repulsive Distance Loss to establish discriminative safety boundaries.
    - Achieves 89.7 PDMS on NAVSIMv1 closed-loop benchmark, outperforming prior state-of-the-art, and demonstrates strong zero-shot transferability on HUGSIM.

- [HEAT: Heterogeneous End-to-End Autonomous Driving via Trajectory-Guided World Models](https://arxiv.org/abs/2605.19631)
  - Hoonhee Cho, Giwon Lee, Jae-Young Kang, Hyemin Yang, Heejun Park, Kuk-Jin Yoon
  - Publish Date: 2026.05.19
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org), [NAVSIM](https://github.com/autonomousvision/navsim), [Waymo](https://waymo.com/open/)
  - Summary：
    - Proposes a trajectory-driven learning paradigm that organizes training around planning trajectories to capture domain-invariant representations of driving intent.
    - Incorporates a world model that predicts future latent features conditioned on ego actions, improving feature consistency and mitigating domain-induced biases.
    - Demonstrates that a single unified model can be trained on heterogeneous datasets (nuScenes, NAVSIM, Waymo) while maintaining strong performance within each domain.

- [SafeAlign-VLA: A Negative-Enhanced Safe Alignment Framework for Risk-Aware Autonomous Driving](https://arxiv.org/abs/2605.19524)
  - Kefei Tian, Yuansheng Lian, Kai Yang, Xiangdong Chen, Shen Li
  - Publish Date: 2026.05.19
  - Task: Perception
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - SafeAlign-VLA introduces a negative-enhanced safe alignment framework for Vision-Language-Action (VLA) models, incorporating negative data into both supervised fine-tuning and reinforcement learning.
    - A counterfactual safety pairing paradigm generates structured safety labels and counterfactual positive trajectories from risky scenarios, enabling the model to understand risky behaviors and safety boundaries.
    - Two-stage training is employed: negative-enhanced supervised fine-tuning for failure feedback and trajectory correction, followed by anchor-based group relative policy optimization (AGRO) that uses positive and negative trajectories as contrastive anchors to penalize high-risk behaviors.

- [Xiaomi EV World Model: A Joint World Model Integrating Reconstruction and Generation for Autonomous Driving](https://arxiv.org/abs/2605.18137)
  - Lijun Zhou, Hongcheng Luo, Zhenxin Zhu, Cheng Chi, Mingfei Tu, Kaixin Xiong, Lei Gong, Zhanqian Wu, Zehan Zhang, Fangzhen Li, Hao Li, Yingying Shen, Jiale He, Haohui Zhu, Shan Zhao, Kai Wang, Zhiwei Zhan, Yuechuan Pu, Kaiyuan Tan, Ruiling Yang, Xianqi Wang, Tianyi Yan, Jiawei Zhou, Lei Zhang, Jingyang Zhao, Xi Zhou, Chitian Sun, Chenming Wu, Jiong Deng, Hongwei Xie, Ming Lu, Kun Ma, Long Chen, Guang Chen, Hangjun Ye, Bing Wang, Haiyang Sun
  - Publisher: Xiaomi EV
  - Publish Date: 2026.05.18
  - Task: Generation
  - Summary：
    - Proposes a unified technical system for world models in autonomous driving, comprising world representation (WorldRec) and world generation (WorldGen).
    - WorldRec uses feed-forward reconstruction with sparse scene queries to produce compact 3D Gaussian scene representations, while WorldGen enables high-quality causal video generation with few denoising steps.
    - The Joint World Model (JWM) integrates both modules to enhance generation stability, cross-frame consistency, and visual fidelity for closed-loop simulation and end-to-end training.

- [GEM: Gaussian Evolution Model for Occupancy Forecasting and Motion Planning](https://arxiv.org/abs/2605.17682)
  - Cheng Chen, Hao Huang, Saurabh Bagchi
  - Publish Date: 2026.05.17
  - Task: Prediction, Planning
  - Summary：
    - Proposes GEM, a Gaussian Evolution Model for non-autoregressive occupancy world modeling, representing driving scenes as explicit continuous 4D Gaussian primitives with learned dynamics.
    - Enables direct querying of Gaussian world representation at arbitrary timestamps for efficient full-horizon forecasting and supports motion planning by predicting future ego trajectories.
    - Achieves state-of-the-art future semantic occupancy forecasting and strong motion planning performance with flexible temporal querying.

- [CLAP: Contrastive Latent-space Prompt Optimization for End-to-end Autonomous Driving](https://arxiv.org/abs/2605.17284)
  - Ruiyang Zhu, Yuehan He, Boyuan Zheng, Zesen Zhao, Ahmad Chalhoub, Qingzhao Zhang, Z. Morley Mao
  - Publish Date: 2026.05.17
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - CLAP introduces a contrastive latent-space prompt optimization framework for end-to-end autonomous driving, enhancing performance in long-tail scenarios.
    - The method uses per-roadblock soft prompts optimized via contrastive learning and directionally regularized optimization, improving planning error on challenging frames without regressing normal frames.
    - Validated on NAVSIM benchmark with various VLA backbones, achieving 24% reduction in challenging scenario planning error.

- [PCASim: Promptable Closed-loop Adversarial Simulation for Urban Traffic Environment](https://arxiv.org/abs/2605.15654)
  - Chuancheng Zhang, Zhenhao Wang, Kaizheng Li, Yaran Lin, Qiang Guo, Bin Jiang
  - Publish Date: 2026.05.15
  - Project Page: [PCASim](https://zhenhaooo.github.io/PCASim.github.io/)
  - Task: Generation
  - Summary：
    - PCASim introduces a promptable closed-loop adversarial simulation framework for urban traffic, integrating rule-based filtering, knowledge retrieval, and large language models to generate safety-critical scenarios.
    - The framework employs reinforcement learning to train diverse vehicle behaviors, enriching scenario diversity and realism, achieving improvements in domain-specific language accuracy, scenario transformation success rate, and obstacle-avoidance capability.

- [Learning Direct Control Policies with Flow Matching for Autonomous Driving](https://arxiv.org/abs/2605.14832)
  - Marcello Ceresini, Federico Pirazzoli, Andrea Bertogalli, Lorenzo Cipelli, Filippo D'Addeo, Anthony Dell'Eva, Alessandro Paolo Capasso, Alberto Broggi
  - Publish Date: 2026.05.14
  - Project Page: [DirectControlFlowMatching](https://marcelloceresini.github.io/DirectControlFlowMatching)
  - Task: Planning
  - Summary：
    - Presents a flow-matching planner that directly outputs control trajectories (acceleration and curvature) conditioned on a BEV raster, enabling low-latency inference via ODE integration.
    - Trained on urban simulator data and tested in closed-loop on in-distribution and out-of-distribution scenarios (highways, unseen cities), demonstrating reliable generalization attributed to the BEV representation and flow-matching formulation.

- [EponaV2: Driving World Model with Comprehensive Future Reasoning](https://arxiv.org/abs/2605.14696)
  - Jiawei Xu, Zhizhou Zhong, Zhijian Shu, Mingkai Jia, Mingxiao Li, Jia-Wang Bian, Qian Zhang, Kaicheng Zhang, Jin Xie, Jian Yang, Wei Yin
  - Publish Date: 2026.05.14
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - Proposes EponaV2, a driving world model that forecasts comprehensive future representations (geometry & semantics) to enhance planning without relying on expensive manual annotation.
    - Introduces a flow matching group relative policy optimization mechanism, inspired by LLM training, to further improve planning accuracy.
    - Achieves state-of-the-art performance on three NAVSIM benchmarks among perception-free models.

- [MAPLE: Latent Multi-Agent Play for End-to-End Autonomous Driving](https://arxiv.org/abs/2605.14201)
  - Rajeev Yasarla, Deepti Hegde, Hsin-Pai Cheng, Shizhong Han, Yunxiao Shi, Meysam Sadeghigooghari, Hanno Ackermann, Litian Liu, Pranav Desai, Fatih Porikli, Mohammad Ghavamzadeh, Hong Cai
  - Publish Date: 2026.05.13
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - MAPLE introduces a latent-space multi-agent rollout framework for reactive, closed-loop training of VLA-based end-to-end motion planners, enabling independent control of ego and traffic agents over multi-step horizons.
    - The two-stage training pipeline combines supervised fine-tuning on latent rollouts with reinforcement learning using global/agent-specific rewards and diversity rewards, achieving state-of-the-art performance on Bench2Drive without external simulators.

- [MindVLA-U1: VLA Beats VA with Unified Streaming Architecture for Autonomous Driving](https://arxiv.org/abs/2605.12624)
  - Yuzhou Huang, Benjin Zhu, Hengtong Lu, Victor Shea-Jay Huang, Haiming Zhang, Wei Chen, Jifeng Dai, Yan Xie, Hongsheng Li
  - Publish Date: 2026.05.12
  - Task: Planning
  - Datasets: [WOD-E2E](https://waymo.com/open/)
  - Summary：
    - First unified streaming VLA architecture for autonomous driving, producing autoregressive language tokens and flow-matching continuous action trajectories in a single forward pass over a shared representation.
    - Streaming design processes driving video framewise with a learned memory channel for temporal context, enabling smooth trajectory evolution without redundant multi-frame VLM modeling.
    - Surpasses experienced human drivers on the long-tail WOD-E2E benchmark for the first time (8.20 RFS vs. 8.13 GT RFS) and achieves state-of-the-art planning ADEs over prior VA/VLA methods with throughput matching VA-class models.

- [Action Emergence from Streaming Intent](https://arxiv.org/abs/2605.12622)
  - Pengfei Jing, Victor Shea-Jay Huang, Hengtong Lu, Jifeng Dai, Xie Yan, Benjin Zhu
  - Publish Date: 2026.05.12
  - Task: Planning
  - Datasets: [Waymo](https://waymo.com/open/)
  - Summary：
    - Formalizes action emergence as generating physically feasible, semantically appropriate, safety-compliant actions via scene-conditioned reasoning, rather than retrieval or interpolation.
    - Introduces Streaming Intent, a mechanism with continuous chain-of-thought and temporal streaming across clips, realized in the SI model using autoregressive intent decoding and flow-matching action head.
    - Achieves competitive performance on the Waymo End-to-End benchmark (RFS 7.96 val, 7.74 test) and demonstrates intent-faithful controllability without pre-built trajectory banks.

- [C-CoT: Counterfactual Chain-of-Thought with Vision-Language Models for Safe Autonomous Driving](https://arxiv.org/abs/2605.10744)
  - Kefei Tian, Yuansheng Lian, Kai Yang, Xiangdong Chen, Shen Li
  - Publish Date: 2026.05.11
  - Task: Planning
  - Datasets: [DeepAccident-CCoT](https://deepaccident.github.io/)
  - Summary：
    - Proposes a counterfactual chain-of-thought (C-CoT) framework that decomposes driving decisions into five stages, including counterfactual risk reasoning with a meta-action evaluation tree.
    - Achieves risk prediction recall of 81.9%, reduces collision rate to 3.52%, and lowers L2 error to 1.98 m on the DeepAccident-CCoT dataset.

- [DeepSight: Long-Horizon World Modeling via Latent States Prediction for End-to-End Autonomous Driving](https://arxiv.org/abs/2605.10564)
  - Lingjun Zhang, Changjie Wu, Linzhe Shi, Jiangyang Li, Jiaxin Liu, Lei Yang, Hang Zhang, Mu Xu, Hong Wang
  - Publish Date: 2026.05.11
  - Code: [DeepSight](https://github.com/hotdogcheesewhite/DeepSight)
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - DeepSight proposes a driving world model that performs parallel prediction of latent semantic features in BEV space for consecutive future frames, enabling long-horizon world modeling.
    - It introduces an efficient and adaptive text reasoning mechanism that leverages social knowledge and reasoning to improve driving performance in challenging long-tail scenarios.
    - The approach achieves state-of-the-art results on the closed-loop Bench2drive benchmark.

- [CoWorld-VLA: Thinking in a Multi-Expert World Model for Autonomous Driving](https://arxiv.org/abs/2605.10426)
  - Minqing Huang, Yujiao Xiang, Zihan Liang, Jiajie Huang, Jingqi Wang, Zhi Xu, Feiyang Tan, Hangning Zhou, Mu Yang, Gong Che
  - Publish Date: 2026.05.11
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - CoWorld-VLA proposes a multi-expert world reasoning framework for autonomous driving, where world representations serve as explicit conditions to guide action planning.
    - It extracts complementary world information through multi-source supervision and encodes it into four types of expert tokens: semantic interaction, geometric structure, dynamic evolution, and ego trajectory tokens.
    - A diffusion-based hierarchical multi-expert fusion planner is employed to generate continuous ego trajectories, achieving competitive results on the NAVSIM benchmark.

- [Temporal Sampling Frequency Matters: A Capacity-Aware Study of End-to-End Driving Trajectory Prediction](https://arxiv.org/abs/2605.10388)
  - Yumao Liu, Tao Liu, Xiangyu Li, Jiaxiang Li, Ke Ma
  - Publish Date: 2026.05.11
  - Task: Prediction
  - Datasets: [Waymo](https://waymo.com/open/), [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - Investigates temporal sampling frequency as an explicit training design variable for end-to-end driving trajectory prediction, challenging the default use of highest available frequency.
    - Demonstrates model-dependent frequency responses: smaller models benefit from lower or intermediate frequencies, while a larger VLA-style model achieves best performance at the highest frequency across three datasets.
    - Provides capacity-aware analysis showing that sparse sampling may miss cues while dense sampling adds redundant visual content, and that iteration-matched controls rule out unequal training updates as the sole explanation.

- [DriveFuture: Future-Aware Latent World Models for Autonomous Driving](https://arxiv.org/abs/2605.09701)
  - Yufeng Hong, Xiaotian Zhou, Yingyan Li, Xiangpo Zhou, Lin Liu, Yadan Luo, Shaoqing Xu, Lei Yang, Ziying Song
  - Publish Date: 2026.05.10
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - DriveFuture explicitly conditions current latent state modeling on future world states to learn planning-oriented foresight.
    - It uses cross-attention to refine predicted future latent states and a diffusion-based trajectory planner, achieving state-of-the-art performance on NAVSIM benchmarks.

- [VECTOR-Drive: Tightly Coupled Vision-Language and Trajectory Expert Routing for End-to-End Autonomous Driving](https://arxiv.org/abs/2605.08830)
  - Rui Zhao, Jianlin Yu, Zhenhai Gao, Jiaqiao Liu, Fei Gao
  - Publish Date: 2026.05.09
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Proposes VECTOR-DRIVE, a tightly coupled vision-language-action (VLA) framework that keeps all tokens coupled via shared self-attention and routes feed-forward computation by token semantics, coupling vision-language reasoning and trajectory prediction.
    - Achieves 88.91 Driving Score on Bench2Drive, outperforming representative end-to-end and VLA-based baselines, and validates the benefits of shared attention, semantic-aware expert routing, progressive training, and flow-based action decoding.

- [GEM: Generating LiDAR World Model via Deformable Mamba](https://arxiv.org/abs/2605.07326v1)
  - Yang Wu, Zhaojiang Liu, Qiang Meng, Youquan Liu, Renliang Weng, Jianjun Qian, Jian Yang, Jin Xie
  - Publish Date: 2026.05.08
  - Code: [GitHub](https://github.com/wuyang98/GEM)
  - Task: Generation
  - Summary：
    - Proposes GEM, a generative LiDAR world model using deformable Mamba architecture for improved fidelity and imagination.
    - Introduces a LiDAR scene tokenizer and dynamic-static separator for unsupervised disentanglement of features.
    - Achieves state-of-the-art performance on diverse benchmarks, with optional integration for autonomous rollout and what-if scenarios.

- [See Tomorrow, Act Today: Foresight-Driven Autonomous Driving](https://arxiv.org/abs/2605.07195)
  - Bozhou Zhang, Nan Song, Yuang Wang, Jiankang Deng, Xiatian Zhu, Li Zhang
  - Publish Date: 2026.05.08
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim), [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - ForeSight introduces a foresight-driven planning framework for autonomous driving, using a world model to generate future scenes before planning actions.
    - The framework shifts from reactive to anticipatory decision-making by conditioning actions on imagined future observations.
    - Experiments on NAVSIM and nuScenes demonstrate state-of-the-art performance compared to previous reactive methods.

- [Information Coordination as a Bridge: A Neuro-Symbolic Architecture for Reliable Autonomous Driving Scene Understanding](https://arxiv.org/abs/2605.04475)
  - Shuo Liu, Lei Shi, Haowen Liu, Jing Xu, Yufei Gao, Yucheng Shi
  - Publish Date: 2026.05.06
  - Task: Perception
  - Datasets: [nuScenes](https://www.nuscenes.org/), [Waymo](https://waymo.com/open/)
  - Summary：
    - Proposes InfoCoordiBridge, a BEV-centric neuro-symbolic architecture that inserts an explicit coordination bridge between perception and language reasoning for reliable autonomous driving scene understanding.
    - Comprises three modules: a unified multi-agent perception layer, an ICA module for aligning and fusing multi-source outputs into a single SceneSummary, and an SSRE module for SceneSummary-grounded reasoning with verification.
    - Experiments on nuScenes and Waymo show that ICA improves fusion consistency and reduces redundancy, while SSRE reduces hallucinated entity mentions compared to VLM and agentic baselines.

- [HERMES++: Toward a Unified Driving World Model for 3D Scene Understanding and Generation](https://arxiv.org/abs/2604.28196)
  - Xin Zhou, Dingkang Liang, Xiwu Chen, Feiyang Tan, Dingyuan Zhang, Hengshuang Zhao, Xiang Bai
  - Publish Date: 2026.04.30
  - Code: [HERMESV2](https://github.com/H-EmbodVis/HERMESV2)
  - Task: Generation
  - Summary：
    - HERMES++ is a unified driving world model that integrates 3D scene understanding and future geometry prediction within a single framework.
    - It utilizes BEV representation, LLM-enhanced world queries, a Current-to-Future Link, and Joint Geometric Optimization to achieve strong performance.
    - The model outperforms specialist approaches in both future point cloud prediction and 3D scene understanding tasks.

- [GSDrive: Reinforcing Driving Policies by Multi-mode Trajectory Probing with 3D Gaussian Splatting Environment](https://arxiv.org/abs/2604.28111)
  - Ziang Guo, Min Chen, Xuefeng Zhang, Yixiao Zhou, Zufeng Zhang, Dzmitry Tsetserukou
  - Publish Date: 2026.04.30
  - Code: [GSDrive](https://github.com/ZionGo6/GSDrive)
  - Task: Planning
  - Datasets: [nuScenes](https://www.nuscenes.org/)
  - Summary：
    - GSDrive exploits 3D Gaussian Splatting for differentiable, physics-based reward shaping in end-to-end driving policy improvement.
    - It incorporates a flow matching-based trajectory predictor for multi-mode trajectory probing, providing immediate dense feedback instead of sparse catastrophic events.

- [Understanding Adversarial Transferability in Vision-Language Models for Autonomous Driving: A Cross-Architecture Analysis](https://arxiv.org/abs/2604.27414)
  - David Fernandez, Pedram MohajerAnsari, Amir Salarpour, Mert D. Pese
  - Publish Date: 2026.04.30
  - Task: Planning
  - Summary：
    - Systematic cross-architecture study of adversarial transferability in VLM-based autonomous driving.
    - Evaluates three representative architectures (Dolphins, OmniDrive, LeapVAD) using physically realizable adversarial patches.
    - Demonstrates high transferability rates (73-91%) and sustained frame-level manipulation over critical decision windows.

- [Judge, Then Drive: A Critic-Centric Vision Language Action Framework for Autonomous Driving](https://arxiv.org/abs/2604.27366)
  - Lijin Yang, Jianing Huang, Zhongzhan Huang, Shu Liu, Hao Yang
  - Publish Date: 2026.04.30
  - Task: Planning
  - Datasets: [Bench2Drive](https://thinklab-sjtu.github.io/Bench2Drive/)
  - Summary：
    - Proposes CriticVLA, a two-stage framework that first generates a rough trajectory and then refines it using a VLA-based critic, enhancing driving quality.
    - Constructs a large-scale synthetic dataset of 12.9 million annotated trajectories to improve the critic's reasoning and refinement abilities.
    - Achieves state-of-the-art performance on Bench2Drive with a 73.33% total success rate, showing about 30% improvement in challenging scenarios.

- [ProDrive: Proactive Planning for Autonomous Driving via Ego-Environment Co-Evolution](https://arxiv.org/abs/2604.25329)
  - Chuyao Fu, Shengzhe Gan, Zhuoli Ouyang, Yuhan Rui, Xiaowei Chi, Sirui Han, Jiankun Wang, Hong Zhang
  - Publish Date: 2026.04.28
  - Task: Planning
  - Datasets: [NAVSIM](https://github.com/autonomousvision/navsim)
  - Summary：
    - ProDrive proposes a world-model-based proactive planning framework that enables ego-environment co-evolution for autonomous driving.
    - It jointly trains a query-centric trajectory planner and a bird's-eye-view world model end-to-end, allowing future outcome assessment to directly shape planning.
    - Experiments on NAVSIM v1 show ProDrive outperforms strong baselines in both safety and planning efficiency.

- [Towards Lawful Autonomous Driving: Deriving Scenario-Aware Driving Requirements from Traffic Laws and Regulations](https://arxiv.org/abs/2604.24562)
  - Bowen Jian, Rongjie Yu, Hong Wang, Liqiang Wang, Zihang Zou
  - Publish Date: 2026.04.27
  - Task: Reasoning
  - Summary：
    - Proposes a pipeline that grounds LLM reasoning in a traffic scenario taxonomy through node-wise anchors, improving law-scenario matching by 29.1%.
    - Demonstrates real-world applicability by constructing a law-compliance layer for AV navigation and an onboard compliance monitor.

- [Cross-Stage Coherence in Hierarchical Driving VQA: Explicit Baselines and Learned Gated Context Projectors](https://arxiv.org/abs/2604.22560)
  - Gautam Kumar Jain, Carsten Markgraf, Julian Stähler
  - Publish Date: 2026.04.24
  - Task: VQA
  - Summary：
    - Proposes two complementary mechanisms for cross-stage context passing in hierarchical driving VQA: explicit prompt-based conditioning (training-free) and implicit gated context projectors (training-efficient, ~0.5% parameters).
    - The explicit variant reduces NLI contradiction by up to 42.6% on a domain-adapted 4B VLM, while the implicit variant achieves 34% reduction in planning-stage contradiction and 50% increase in cross-stage entailment on an 8B VLM.
    - Planning language quality improves (CIDEr +30.3%) but lexical overlap degrades due to absence of driving-domain pretraining, highlighting the need for domain adaptation.

- [Frozen LLMs as Map-Aware Spatio-Temporal Reasoners for Vehicle Trajectory Prediction](https://arxiv.org/abs/2604.21479)
  - Yanjiao Liu, Jiawei Liu, Xun Gong, Zifei Nie
  - Publish Date: 2026.04.23
  - Task: Prediction
  - Summary：

<!-- opensource-radar:truncated -->
