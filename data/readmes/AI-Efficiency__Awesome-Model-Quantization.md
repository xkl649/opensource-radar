# Awesome Model Quantization [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

This repo collects papers, documents, and codes about model quantization for anyone who wants to research it. We are continuously improving the project. Welcome to PR the works (papers, repositories) that the repo misses.


- [Benchmarks](#benchmarks)
- [Survey Papers](#survey-papers)
- [Papers](#papers)
  - [2026](#2026)
  - [2025](#2025)
  - [2024](#2024)
  - [2023](#2023)
  - [2022–2015](#2022)
- [Books](#books)
- [Related Repositories](#related-repositories)

## Benchmarks

**1. BiBench: Benchmarking and Analyzing Network Binarization** [[Paper](https://proceedings.mlr.press/v202/qin23a.html)] [[Code](https://github.com/htqin/BiBench)] [![GitHub stars](https://img.shields.io/github/stars/htqin/BiBench?style=social)](https://github.com/htqin/BiBench)

**Venue:** ICML 2023

**Authors:** Haotong Qin, Mingyuan Zhang, Yifu Ding, Aoyu Li, Zhongang Cai, Ziwei Liu, Fisher Yu, Xianglong Liu.

![survey](./Imgs/bibench.png)

<details><summary>Bibtex</summary><pre><code>@inproceedings{qin2023bibench,
  title={BiBench: Benchmarking and Analyzing Network Binarization},
  author={Qin, Haotong and Zhang, Mingyuan and Ding, Yifu and Li, Aoyu and Cai, Zhongang and Liu, Ziwei and Yu, Fisher and Liu, Xianglong},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2023}
}</code></pre></details>

**2. An empirical study of LLaMA3 quantization: from LLMs to MLLMs** [[Paper](https://link.springer.com/article/10.1007/s44267-024-00070-x)] [[Code](https://github.com/Macaronlin/LLaMA3-Quantization)] [![GitHub stars](https://img.shields.io/github/stars/Macaronlin/LLaMA3-Quantization?style=social)](https://github.com/Macaronlin/LLaMA3-Quantization)

**Venue:** Visual Intelligence 2024

**Authors:** Wei Huang, Xingyu Zheng, Xudong Ma, Haotong Qin, Chengtao Lv, Hong Chen, Jie Luo, Xiaojuan Qi, Xianglong Liu, Michele Magno.

![LLaMA3 Quantization Benchmark](./Imgs/llama3.png)

<details><summary>Bibtex</summary><pre><code>@article{huang2024empirical,
  title={An empirical study of llama3 quantization: From llms to mllms},
  author={Huang, Wei and Zheng, Xingyu and Ma, Xudong and Qin, Haotong and Lv, Chengtao and Chen, Hong and Luo, Jie and Qi, Xiaojuan and Liu, Xianglong and Magno, Michele},
  journal={Visual Intelligence},
  volume={2},
  number={1},
  pages={36},
  year={2024},
  publisher={Springer}
}</code></pre></details>

**3. An Empirical Study of Qwen3 Quantization** [[Paper](https://arxiv.org/abs/2505.02214)] [[Code](https://github.com/Efficient-ML/Qwen3-Quantization)] [![GitHub stars](https://img.shields.io/github/stars/Efficient-ML/Qwen3-Quantization?style=social)](https://github.com/Efficient-ML/Qwen3-Quantization)

**Venue:** Visual Intelligence 2026

**Authors:** Xingyu Zheng, Yuye Li, Haoran Chu, Yue Feng, Xudong Ma, Jie Luo, Jinyang Guo, Haotong Qin, Michele Magno, Xianglong Liu.

![qwen3](./Imgs/qwen3.png)

<details><summary>Bibtex</summary><pre><code>@article{zheng2025empirical,
  title={An empirical study of qwen3 quantization},
  author={Zheng, Xingyu and Li, Yuye and Chu, Haoran and Feng, Yue and Ma, Xudong and Luo, Jie and Guo, Jinyang and Qin, Haotong and Magno, Michele and Liu, Xianglong},
  journal={arXiv preprint arXiv:2505.02214},
  year={2025}
}</code></pre></details>

**4. LLMC: Benchmarking Large Language Model Quantization with a Versatile Compression Toolkit** [[Paper](https://aclanthology.org/2024.emnlp-industry.12/)] [[Code](https://github.com/ModelTC/LightCompress)] [![GitHub stars](https://img.shields.io/github/stars/ModelTC/LightCompress?style=social)](https://github.com/ModelTC/LightCompress)

**Venue:** EMNLP 2024 Industry Track

**Authors:** Ruihao Gong, Yang Yong, Shiqiao Gu, Yushi Huang, Chengtao Lv, Yunchen Zhang, Xianglong Liu, Dacheng Tao.

![llmc](./Imgs/llmc.png)

<details><summary>Bibtex</summary><pre><code>@inproceedings{gong2024llmc,
  title={Llmc: Benchmarking large language model quantization with a versatile compression toolkit},
  author={Gong, Ruihao and Yong, Yang and Gu, Shiqiao and Huang, Yushi and Lv, Chengtao and Zhang, Yunchen and Tao, Dacheng and Liu, Xianglong},
  booktitle={Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: Industry Track},
  pages={132--152},
  year={2024}
}</code></pre></details>

**5. RobustMQ: Benchmarking Robustness of Quantized Models** [[Paper](https://link.springer.com/article/10.1007/s44267-023-00031-w)]

**Venue:** Visual Intelligence 2023

**Authors:** Yisong Xiao, Aishan Liu, Tianyuan Zhang, Haotong Qin, Jinyang Guo, Xianglong Liu.

![robustmq](./Imgs/robustmq.png)

<details><summary>Bibtex</summary><pre><code>@article{xiao2023robustmq,
  title={Robustmq: benchmarking robustness of quantized models},
  author={Xiao, Yisong and Liu, Aishan and Zhang, Tianyuan and Qin, Haotong and Guo, Jinyang and Liu, Xianglong},
  journal={Visual Intelligence},
  volume={1},
  number={1},
  pages={30},
  year={2023},
  publisher={Springer}
}</code></pre></details>

## Survey Papers

**1. Binary Neural Networks: A Survey** [[Paper](https://www.sciencedirect.com/science/article/abs/pii/S0031320320300856)] [[Blog](https://mp.weixin.qq.com/s/QGva6fow9tad_daZ_G2p0Q)]

**Venue:** Pattern Recognition 2020

**Authors:** Haotong Qin, Ruihao Gong, Xianglong Liu, Xiao Bai, Jingkuan Song, Nicu Sebe.


![survey](./Imgs/survey.png)

<details><summary>Bibtex</summary><pre><code>@article{Qin:pr20_bnn_survey,
    title = "Binary neural networks: A survey",
    author = "Haotong Qin and Ruihao Gong and Xianglong Liu and Xiao Bai and Jingkuan Song and Nicu Sebe",
    journal = "Pattern Recognition",
    volume = "105",
    pages = "107281",
    year = "2020"
}</code></pre></details>

**2. A Survey of Low-bit Large Language Models: Basics, Systems, and Algorithms** [[Paper](https://www.sciencedirect.com/science/article/pii/S0893608025007361)]

**Venue:** Neural Networks 2025

**Authors:** Ruihao Gong, Yifu Ding, Zining Wang, Chengtao Lv, Xingyu Zheng, Jinyang Du, Yang Yong, Shiqiao Gu, Haotong Qin, Jinyang Guo, Dahua Lin, Michele Magno, Xianglong Liu.

![A Survey of Low-bit Large Language Models](./Imgs/llm-survey.png)

<details><summary>Bibtex</summary><pre><code>@article{gong2025survey,
  title={A survey of low-bit large language models: Basics, systems, and algorithms},
  author={Gong, Ruihao and Ding, Yifu and Wang, Zining and Lv, Chengtao and Zheng, Xingyu and Du, Jinyang and Yong, Yang and Gu, Shiqiao and Qin, Haotong and Guo, Jinyang and others},
  journal={Neural networks},
  pages={107856},
  year={2025},
  publisher={Elsevier}
}</code></pre></details>

**3. Low-bit Model Quantization for Deep Neural Networks: A Survey** [[Paper](https://arxiv.org/abs/2505.05530)]

**Venue:** arXiv 2025

**Authors:** Kai Liu, Qian Zheng, Kaiwen Tao, Zhiteng Li, Haotong Qin, Wenbo Li, Yong Guo, Xianglong Liu, Linghe Kong, Guihai Chen, Yulun Zhang, Xiaokang Yang.

![quant-survey](./Imgs/quant-survey.png)

<details><summary>Bibtex</summary><pre><code>@article{liu2025low,
  title={Low-bit model quantization for deep neural networks: A survey},
  author={Liu, Kai and Zheng, Qian and Tao, Kaiwen and Li, Zhiteng and Qin, Haotong and Li, Wenbo and Guo, Yong and Liu, Xianglong and Kong, Linghe and Chen, Guihai and others},
  journal={arXiv preprint arXiv:2505.05530},
  year={2025}
}</code></pre></details>

## Papers

### 2026

- [[arXiv](https://arxiv.org/abs/2605.04062)] EdgeRazor: A Lightweight Framework for Large Language Models via Mixed-Precision Quantization-Aware Distillation [[code](https://github.com/zhangsq-nju/EdgeRazor)] [![GitHub stars](https://img.shields.io/github/stars/zhangsq-nju/EdgeRazor?style=social)](https://github.com/zhangsq-nju/EdgeRazor)
- [[ICLR](https://openreview.net/forum?id=7QZanjCD6M)] PT²-LLM: Post-Training Ternarization for Large Language Models [[code](https://github.com/XIANGLONGYAN/PT2-LLM)] [![GitHub stars](https://img.shields.io/github/stars/XIANGLONGYAN/PT2-LLM?style=social)](https://github.com/XIANGLONGYAN/PT2-LLM)
- [[ICLR](https://openreview.net/forum?id=HD7tuVakmR)] Quant-dLLM: Post-Training Extreme Low-Bit Quantization for Diffusion Large Language Models
- [[ICLR](https://openreview.net/forum?id=3AnRMvlVDw)] DVD-Quant: Data-free Video Diffusion Transformers Quantization
- [[ICLR](https://openreview.net/forum?id=AH7hbA7Zkk)] Q&C: When Quantization Meets Cache in Efficient Generation
- [[CVPR Findings](https://arxiv.org/abs/2503.21970)] Q-MambaIR: Accurate Quantized Mamba for Efficient Image Restoration
- [[ICLR](https://arxiv.org/abs/2509.21302)] Quantized Visual Geometry Grounded Transformer
- [[ICLR](https://openreview.net/forum?id=XAXT7A8EWh)] Post-Training Quantization for Video Matting
- [[ICLR](https://openreview.net/forum?id=XJXZXuTj11)] QVGen: Pushing the Limit of Quantized Video Generative Models
- [[ICLR](https://openreview.net/forum?id=4TAG3aQljJ)] QuantSparse: Comprehensively Compressing Video Diffusion Transformer with Model Quantization and Attention Sparsification [[code](https://github.com/wlfeng0509/QuantSparse)] [![GitHub stars](https://img.shields.io/github/stars/wlfeng0509/QuantSparse?style=social)](https://github.com/wlfeng0509/QuantSparse)
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/40123)] First-Order Error Matters: Accurate Compensation for Quantized Large Language Models [[code](https://github.com/Xingyu-Zheng/FOEM)] [![GitHub stars](https://img.shields.io/github/stars/Xingyu-Zheng/FOEM?style=social)](https://github.com/Xingyu-Zheng/FOEM)
- [[AAAI](https://arxiv.org/abs/2503.06564)] TR-DQ: Time-Rotation Diffusion Quantization
- [[ICLR](https://openreview.net/forum?id=tO3ASKZlok)] TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate
- [[ICLR](https://openreview.net/forum?id=VQIvBpL5ag)] Optimal Brain Restoration for Joint Quantization and Sparsification of LLMs [[code](https://github.com/csguoh/OBR)] [![GitHub stars](https://img.shields.io/github/stars/csguoh/OBR?style=social)](https://github.com/csguoh/OBR)
- [[ICLR](https://openreview.net/forum?id=XPIEkFdEDi)] AnyBCQ: Hardware Efficient Flexible Binary-Coded Quantization for Multi-Precision LLMs [[code](https://github.com/naver-aics/anybcq)] [![GitHub stars](https://img.shields.io/github/stars/naver-aics/anybcq?style=social)](https://github.com/naver-aics/anybcq)
- [[ICLR](https://openreview.net/forum?id=9CZzD5LWdy)] Tequila: Deadzone-free Ternary Quantization for Large Language Models
- [[ICLR](https://openreview.net/forum?id=V85HbymBLW)] LogART: Pushing the Limit of Efficient Logarithmic Post-Training Quantization [[code](https://github.com/logart-lab/logart)] [![GitHub stars](https://img.shields.io/github/stars/logart-lab/logart?style=social)](https://github.com/logart-lab/logart)
- [[ICLR](https://openreview.net/forum?id=1USeVjsKau)] ParoQuant: Pairwise Rotation Quantization for Efficient Reasoning LLM Inference [[code](https://github.com/z-lab/paroquant)] [![GitHub stars](https://img.shields.io/github/stars/z-lab/paroquant?style=social)](https://github.com/z-lab/paroquant)
- [[ICLR](https://openreview.net/forum?id=VpZ8YYdBmT)] Improving Block-Wise LLM Quantization by 4-bit Generalized Normal Float Formats
- [[ICLR](https://openreview.net/forum?id=yjr2jX41qO)] Channel-Aware Mixed-Precision Quantization for Efficient Long-Context Inference
- [[ICLR](https://openreview.net/forum?id=ATpchFiBQi)] CodeQuant: Unified Clustering and Quantization for Enhanced Outlier Smoothing in Low-Precision Mixture-of-Experts
- [[ICLR](https://arxiv.org/abs/2510.11696)] QeRL: Beyond Efficiency - Quantization-enhanced Reinforcement Learning for LLMs [[code](https://github.com/NVlabs/QeRL)] [![GitHub stars](https://img.shields.io/github/stars/NVlabs/QeRL?style=social)](https://github.com/NVlabs/QeRL)
- [[ICLR](https://arxiv.org/abs/2602.03782)] AutoQVLA: Not All Channels Are Equal in Vision-Language-Action Model's Quantization
- [[ICLR](https://openreview.net/forum?id=g2l9bg9DWx)] Achieving low-bit Muon through subspace preservation and grid quantization
- [[ICLR](https://openreview.net/forum?id=DAZvMAlZRp)] Shift-and-Sum Quantization for Visual Autoregressive Models
- [[ICLR](https://arxiv.org/abs/2602.03472)] Inlier-Centric Post-Training Quantization for Object Detection Models
- [[ICLR](https://openreview.net/forum?id=yiMlVBAoQi)] Efficient Quantization of Mixture-of-Experts with Theoretical Generalization Guarantees
- [[ICLR](https://openreview.net/forum?id=tY9yPAT3PU)] BBQ: Boosting Quantization Entropy with Bell Box Quantization
- [[ICLR](https://arxiv.org/abs/2505.06653)] Improving Block-Wise LLM Quantization by 4-bit Block-Wise Optimal Float (BOF4): Analysis and Variations [[code](https://github.com/ifnspaml/bof4)] [![GitHub stars](https://img.shields.io/github/stars/ifnspaml/bof4?style=social)](https://github.com/ifnspaml/bof4)
- [[ICLR](https://arxiv.org/abs/2510.18259)] Learning under Quantization for High-Dimensional Linear Regression
- [[ICLR](https://arxiv.org/abs/2509.25214)] On-the-Fly Adaptation to Quantization: Configuration-Aware LoRA for Efficient Fine-Tuning of Quantized LLMs
- [[ICLR](https://arxiv.org/abs/2509.23202)] Bridging the Gap Between Promise and Performance for FP4 Quantization [[code](https://github.com/IST-DASLab/FP-Quant)] [![GitHub stars](https://img.shields.io/github/stars/IST-DASLab/FP-Quant?style=social)](https://github.com/IST-DASLab/FP-Quant)
- [[ICLR](https://arxiv.org/abs/2602.11184)] KBVQ-MoE: KLT-guided SVD with Bias-Corrected Vector Quantization for MoE Large Language Models [[code](https://github.com/xuzukang/kbvq_moe)] [![GitHub stars](https://img.shields.io/github/stars/xuzukang/kbvq_moe?style=social)](https://github.com/xuzukang/kbvq_moe)
- [[ICLR](https://arxiv.org/abs/2512.03383)] UniQL: Unified Quantization and Low-rank Compression for Adaptive Edge LLMs [[code](https://github.com/enyac-group/UniQL)] [![GitHub stars](https://img.shields.io/github/stars/enyac-group/UniQL?style=social)](https://github.com/enyac-group/UniQL)
- [[ICLR](https://arxiv.org/abs/2508.01077)] The Lattice Geometry of Neural Network Quantization: A Short Equivalence Proof of GPTQ and Babai's algorithm
- [[ICLR](https://arxiv.org/abs/2509.03472)] DPQuant: Efficient and Private Model Training via Dynamic Quantization Scheduling
- [[ICLR](https://openreview.net/pdf/ee0ea14cd2283b1fee1902a6811796b443849c5c.pdf)] Towards Quantization-Aware Training for Ultra-Low-Bit Reasoning LLMs
- [[ICLR](https://arxiv.org/abs/2510.21314)] A Convergence Analysis of Adaptive Optimizers under Floating-point Quantization
- [[ICLR](https://arxiv.org/abs/2510.06213)] Training Dynamics Impact Post-Training Quantization Robustness [[code](https://github.com/aldakata/TrainingDynamicsQuantizationRobustness)] [![GitHub stars](https://img.shields.io/github/stars/aldakata/TrainingDynamicsQuantizationRobustness?style=social)](https://github.com/aldakata/TrainingDynamicsQuantizationRobustness)
- [[ICLR](https://openreview.net/forum?id=pjMDZJd4rT)] SSDi8: Accurate and Efficient 8-bit Quantization for State Space Duality
- [[ICLR](https://arxiv.org/abs/2507.18553)] The Geometry of LLM Quantization: GPTQ as Babai's Nearest Plane Algorithm
- [[ICLR](https://arxiv.org/abs/2601.21238)] PTQ4ARVG: Post-Training Quantization for AutoRegressive Visual Generation Models [[code](https://github.com/BienLuky/PTQ4ARVG)] [![GitHub stars](https://img.shields.io/github/stars/BienLuky/PTQ4ARVG?style=social)](https://github.com/BienLuky/PTQ4ARVG)
- [[ICLR](https://arxiv.org/abs/2509.17428)] QWHA: Quantization-Aware Walsh-Hadamard Adaptation for Parameter-Efficient Fine-Tuning on Large Language Models [[code](https://github.com/vantaa89/qwha)] [![GitHub stars](https://img.shields.io/github/stars/vantaa89/qwha?style=social)](https://github.com/vantaa89/qwha)
- [[ICLR](https://arxiv.org/abs/2602.01289)] Gradient-Aligned Calibration for Post-Training Quantization of Diffusion Models
- [[ICLR](https://openreview.net/forum?id=nFjj8NEBqv)] SERQ: Saliency-Aware Low-Rank Error Reconstruction for LLM Quantization
- [[ICLR](https://arxiv.org/abs/2509.22935)] Compute-Optimal Quantization-Aware Training
- [[ICLR](https://arxiv.org/abs/2505.18610)] PM-KVQ: Progressive Mixed-precision KV Cache Quantization for Long-CoT LLMs [[code](https://github.com/thu-nics/PM-KVQ)] [![GitHub stars](https://img.shields.io/github/stars/thu-nics/PM-KVQ?style=social)](https://github.com/thu-nics/PM-KVQ)
- [[ICLR](https://arxiv.org/abs/2509.23500)] Beyond Outliers: A Study of Optimizers Under Quantization
- [[ICLR](https://arxiv.org/abs/2505.11695)] Qronos: Correcting the Past by Shaping the Future... in Post-Training Quantization
- [[ICLR](https://arxiv.org/abs/2508.02343)] MicroMix: Efficient Mixed-Precision Quantization with Microscaling Formats for Large Language Models [[code](https://github.com/lwy2020/MicroMix)] [![GitHub stars](https://img.shields.io/github/stars/lwy2020/MicroMix?style=social)](https://github.com/lwy2020/MicroMix)
- [[ICLR](https://arxiv.org/abs/2602.04929)] TurboBoA: Faster and Exact Attention-aware Quantization without Backpropagation
- [[ICLR](https://openreview.net/forum?id=FDdOD3qwS7)] Beyond Uniformity: Sample and Frequency Meta Weighting for Post-Training Quantization of Diffusion Models
- [[ICLR](https://openreview.net/forum?id=LWYZ1nNkJl)] Rethinking Residual Errors in Compensation-based LLM Quantization
- [[ICLR](https://openreview.net/forum?id=8tDIzHFOx6)] SPR²Q: Static Priority-based Rectifier Routing Quantization for Image Super-Resolution [[code](https://github.com/momo5-a11/SPR2Q)] [![GitHub stars](https://img.shields.io/github/stars/momo5-a11/SPR2Q?style=social)](https://github.com/momo5-a11/SPR2Q)
- [[ICLR](https://arxiv.org/abs/2510.26771)] STaMP: Sequence Transformation and Mixed Precision for Low-Precision Activation Quantization
- [[arXiv](https://arxiv.org/abs/2601.07892)] Sherry: Hardware-Efficient 1.25-Bit Ternary Quantization via Fine-grained Sparsification [[code](https://github.com/Tencent/AngelSlim)] [![GitHub stars](https://img.shields.io/github/stars/Tencent/AngelSlim?style=social)](https://github.com/Tencent/AngelSlim)
- [[arXiv](https://arxiv.org/abs/2602.16018)] D²Quant: Accurate Low-bit Post-Training Weight Quantization for LLMs
- [[arXiv](https://arxiv.org/abs/2601.03170)] QuantLRM: Quantization of Large Reasoning Models via Fine-Tuning Signals
- [[arXiv](https://arxiv.org/pdf/2603.25284v1)] SliderQuant: Accurate Post-Training Quantization for LLMs 
- [[arXiv](https://arxiv.org/abs/2601.14888)] What Makes Low-Bit Quantization-Aware Training Work for Reasoning LLMs? A Systematic Study
- [[arXiv](https://arxiv.org/abs/2603.28845)] OneComp: One-Line Revolution for Generative AI Model Compression [[Code](https://github.com/FujitsuResearch/OneCompression)] [![GitHub stars](https://img.shields.io/github/stars/FujitsuResearch/OneCompression?style=social)](https://github.com/FujitsuResearch/OneCompression)

### 2025

- [[ICML](https://icml.cc/virtual/2025/poster/45429)] Q-VDiT: Towards Accurate Quantization and Distillation of Video-Generation Diffusion Transformers [[code](https://github.com/cantbebetter2/Q-VDiT)] [![GitHub stars](https://img.shields.io/github/stars/cantbebetter2/Q-VDiT?style=social)](https://github.com/cantbebetter2/Q-VDiT)
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/33823)] MPQ-DM: Mixed Precision Quantization for Extremely Low Bit Diffusion Models
- [[ICML](https://icml.cc/virtual/2025/poster/45388)] SliM-LLM: Salience-Driven Mixed-Precision Quantization for Large Language Models [[code](https://github.com/Aaronhuang-778/SliM-LLM)] [![GitHub stars](https://img.shields.io/github/stars/Aaronhuang-778/SliM-LLM?style=social)](https://github.com/Aaronhuang-778/SliM-LLM)
- [[TPAMI](https://www.computer.org/csdl/journal/tp/2025/10/11060852/281Hxm5TK2Q)] BiVM: Accurate Binarized Neural Network for Efficient Video Matting
- [[NeurIPS](https://openreview.net/forum?id=e8pm93koQU)] S²Q-VDiT: Accurate Quantized Video Diffusion Transformer with Salient Data and Sparse Token Distillation [[code](https://github.com/wlfeng0509/S2Q-VDiT)] [![GitHub stars](https://img.shields.io/github/stars/wlfeng0509/S2Q-VDiT?style=social)](https://github.com/wlfeng0509/S2Q-VDiT)
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhu_PassionSR_Post-Training_Quantization_with_Adaptive_Scale_in_One-Step_Diffusion_based_CVPR_2025_paper.pdf)] PassionSR: Post-Training Quantization with Adaptive Scale in One-Step Diffusion based Image Super-Resolution [[code](https://github.com/libozhu03/PassionSR)] [![GitHub stars](https://img.shields.io/github/stars/libozhu03/PassionSR?style=social)](https://github.com/libozhu03/PassionSR)
- [[ICLR](https://openreview.net/forum?id=ZU8OdDLTts)] ARB-LLM: Alternating Refined Binarizations for Large Language Models [[code](https://github.com/ZHITENGLI/ARB-LLM)] [![GitHub stars](https://img.shields.io/github/stars/ZHITENGLI/ARB-LLM?style=social)](https://github.com/ZHITENGLI/ARB-LLM)
- [[ICLR](https://openreview.net/forum?id=cCE46s1obO)] BinaryDM: Accurate Weight Binarization for Efficient Diffusion Models [[code](https://github.com/Xingyu-Zheng/BinaryDM)] [![GitHub stars](https://img.shields.io/github/stars/Xingyu-Zheng/BinaryDM?style=social)](https://github.com/Xingyu-Zheng/BinaryDM)
- [[ICML](https://proceedings.mlr.press/v267/sun25l.html)] FlatQuant: Flatness Matters for LLM Quantization [[code](https://github.com/ruikangliu/FlatQuant)] [![GitHub stars](https://img.shields.io/github/stars/ruikangliu/FlatQuant?style=social)](https://github.com/ruikangliu/FlatQuant)
- [[ICML](https://icml.cc/virtual/2025/poster/44438)] RoSTE: An Efficient Quantization-Aware Supervised Fine-Tuning Approach for Large Language Models [[code](https://github.com/OptimAI-Lab/RoSTE)] [![GitHub stars](https://img.shields.io/github/stars/OptimAI-Lab/RoSTE?style=social)](https://github.com/OptimAI-Lab/RoSTE)
- [[ICML](https://icml.cc/virtual/2025/poster/43984)] GANQ: GPU-Adaptive Non-Uniform Quantization for Large Language Models
- [[ICML](https://icml.cc/virtual/2025/poster/43551)] Modulated Diffusion: Accelerating Generative Modeling with Modulated Quantization [[code](https://github.com/WeizhiGao/MoDiff)] [![GitHub stars](https://img.shields.io/github/stars/WeizhiGao/MoDiff?style=social)](https://github.com/WeizhiGao/MoDiff)
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/118539)] DartQuant: Efficient Rotational Distribution Calibration for LLM Quantization [[code](https://github.com/CAS-CLab/DartQuant)] [![GitHub stars](https://img.shields.io/github/stars/CAS-CLab/DartQuant?style=social)](https://github.com/CAS-CLab/DartQuant)
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/35415)] JAQ: Joint Efficient Architecture Design and Low-Bit Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/33807/35962)] OAC: Output-adaptive Calibration for Accurate Post-Training Quantization of LLMs
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/34039)] Optimizing Quantized Diffusion Models via Distillation with Decay Timestep-Aware Loss
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/32658/40071)] Quantifiable Quantization Sensitivity of Diffusion Models
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/33913/36068)] TCAQ-DM: Timestep-Channel Adaptive Quantization for Diffusion Models
- [[ACL](https://aclanthology.org/2025.acl-long.498/)] EfficientQAT: Efficient Quantization-Aware Training for Large Language Models [[code](https://github.com/OpenGVLab/EfficientQAT)] [![GitHub stars](https://img.shields.io/github/stars/OpenGVLab/EfficientQAT?style=social)](https://github.com/OpenGVLab/EfficientQAT)
- [[ACL](https://aclanthology.org/2025.acl-long.99/)] L4Q: Parameter Efficient Quantization-Aware Fine-Tuning on Large Language Models
- [[ACL](https://aclanthology.org/2025.acl-long.531/)] MoQAE: Mixed-Precision Quantization for Long-Context LLM Inference via Mixture of Quantization-Aware Experts
- [[ACL](https://aclanthology.org/2025.acl-long.618/)] Outlier-Safe Pre-Training for Robust 4-Bit Quantization of Large Language Models
- [[ACL](https://aclanthology.org/2025.acl-long.225/)] PTQ1.61: Push the Real Limit of Extremely Low-Bit Post-Training Quantization Methods for Large Language Models [[code](https://github.com/zjq0455/PTQ1.61)] [![GitHub stars](https://img.shields.io/github/stars/zjq0455/PTQ1.61?style=social)](https://github.com/zjq0455/PTQ1.61)
- [[ACL](https://aclanthology.org/2025.acl-long.1382/)] Unifying Uniform and Binary-coding Quantization for Accurate Compression of Large Language Models
- [[ACL](https://aclanthology.org/2025.acl-long.1304/)] “Give Me BF16 or Give Me Death”? Accuracy-Performance Trade-Offs in LLM Quantization
- [[ACM MM](https://acmmm2025.org/accepted-regular-papers/)] DilateQuant: Accurate and Efficient Quantization-Aware Training for Diffusion Models via Weight Dilation
- [[ACM MM](https://dl.acm.org/doi/10.1145/3744239)] Learning Binarized Representations with Pseudo-positive Distillation
- [[ACM MM](https://dl.acm.org/doi/10.1145/3746027.3755433)] MQuant: Unleashing the Inference Potential of Multimodal Large Language Models with Post-Training Quantization
- [[ACM MM](https://dl.acm.org/doi/10.1145/3746027.3755213)] Pushing the Limit of Binarized Neural Network for Image Super Resolution with Smooth Information Transmission
- [[ACM MM](https://acmmm2025.org/accepted-regular-papers/)] Quantization Meets OOD: Generalizable Quantization-aware Training from a Flatness Perspective
- [[EMNLP](https://aclanthology.org/2025.emnlp-main.1799/)] AMQ: Enabling AutoML for Mixed-precision Weight-Only Quantization of Large Language Models
- [[EMNLP](https://aclanthology.org/2025.emnlp-main.479/)] Does quantization affect models' performance on long-input and long-output tasks?
- [[ICLR](https://iclr.cc/virtual/2025/poster/28924)] CBQ: Cross-Block Quantization for Large Language Models
- [[ICLR](https://iclr.cc/virtual/2025/poster/29192)] DGQ: Distribution-Aware Group Quantization for Text-to-Image Diffusion Models
- [[ICLR](https://iclr.cc/virtual/2025/poster/30168)] LeanQuant: Accurate and Scalable Large Language Model Quantization with Loss-error-aware Grid
- [[ICLR](https://openreview.net/forum?id=rAcgDBdKnP)] OSTQuant: Refining Large Language Model Quantization with Orthogonal and Scaling Transformations for Better Distribution Fitting [[code](https://github.com/BrotherHappy/OSTQuant)] [![GitHub stars](https://img.shields.io/github/stars/BrotherHappy/OSTQuant?style=social)](https://github.com/BrotherHappy/OSTQuant)
- [[ICLR](https://openreview.net/forum?id=LB5cKhgOTu)] QERA: an Analytical Framework for Quantization Error Reconstruction [[code](https://github.com/ChengZhang-98/QERA)] [![GitHub stars](https://img.shields.io/github/stars/ChengZhang-98/QERA?style=social)](https://github.com/ChengZhang-98/QERA)
- [[ICLR](https://iclr.cc/virtual/2025/poster/28338)] SpinQuant: LLM Quantization with Learned Rotations
- [[ICLR](https://iclr.cc/virtual/2025/poster/27906)] SVDQuant: Absorbing Outliers by Low-Rank Component for 4-Bit Diffusion Models
- [[ICLR](https://iclr.cc/virtual/2025/poster/30429)] ViDiT-Q: Efficient and Accurate Quantization of Diffusion Transformers for Image and Video Generation
- [[ICML](https://openreview.net/forum?id=ZawsPjlIGu&noteId=x0z6YCJM6S)] GuidedQuant: Large Language Model Quantization via Exploiting End Loss Guidance [[code](https://github.com/snu-mllab/GuidedQuant)] [![GitHub stars](https://img.shields.io/github/stars/snu-mllab/GuidedQuant?style=social)](https://github.com/snu-mllab/GuidedQuant)
- [[ICML](https://openreview.net/forum?id=4qIP1sXcR1)] ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals [[code](https://github.com/utkarsh-dmx/project-resq)] [![GitHub stars](https://img.shields.io/github/stars/utkarsh-dmx/project-resq?style=social)](https://github.com/utkarsh-dmx/project-resq)
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/117148)] A Double Normalization Approach for Calibration-Free Low-Bit KV Cache Quantization
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/119877)] Binary Quadratic Quantization: Beyond First-Order Quantization for Real-Valued Matrix Compression
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/117396)] Learning Grouped Lattice Vector Quantizers for Low-Bit Large Language Models
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/115061)] LittleBit: Ultra Low-Bit Quantization via Latent Factorization
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/118224)] ParetoQ: Improving Scaling Laws in Extremely Low-bit LLM Quantization
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/116315)] Q-Palette: Fractional-Bit Quantizers Toward Optimal Weight-Only Post-Training Quantization
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/120052)] Wavelet-Enhanced High-Fidelity 1-Bit Quantization for LLMs
- [[NeurIPS](https://openreview.net/forum?id=a3l3K9khbL)] Quantization Error Propagation: Revisiting Layer-Wise Post-Training Quantization [[Code](https://github.com/FujitsuResearch/OneCompression)] [![GitHub stars](https://img.shields.io/github/stars/FujitsuResearch/OneCompression?style=social)](https://github.com/FujitsuResearch/OneCompression)
- [[ACL Findings](https://aclanthology.org/2025.findings-acl.459/)] Achieving Binary Weight and Activation for LLMs using Post-Training Quantization
- [[EMNLP Findings](https://aclanthology.org/2025.findings-emnlp.943/)] KurTail: Kurtosis-based LLM Quantization
- [[SIGMOD](https://dl.acm.org/doi/10.1145/3725413)] Practical and Asymptotically Optimal Quantization of High-Dimensional Vectors in Euclidean Space for Approximate Nearest Neighbor Search [[code](https://github.com/VectorDB-NTU/Extended-RaBitQ)] [![GitHub stars](https://img.shields.io/github/stars/VectorDB-NTU/Extended-RaBitQ?style=social)](https://github.com/VectorDB-NTU/Extended-RaBitQ)
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/119764)] QBasicVSR: Temporal Awareness Adaptation Quantization for Video Super-Resolution
- [[NeurIPS](https://arxiv.org/abs/2504.09629)] Quantization Error Propagation: Revisiting Layer-Wise Post-Training Quantization
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/115665)] Point4Bit: Post Training 4-bit Quantization for Point Cloud 3D Detection
- [[NeurIPS](https://arxiv.org/abs/2505.12266)] PMQ-VE: Progressive Multi-Frame Quantization for Video Enhancement [[code](https://github.com/xiaoBIGfeng/PMQ-VE)] [![GitHub stars](https://img.shields.io/github/stars/xiaoBIGfeng/PMQ-VE?style=social)](https://github.com/xiaoBIGfeng/PMQ-VE)
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/115090)] VETA-DiT: Variance-Equalized and Temporally Adaptive Quantization for Efficient 4-bit Diffusion Transformers
- [[NeurIPS](https://arxiv.org/abs/2505.18724)] LoTA-QAF: Lossless Ternary Adaptation for Quantization-Aware Fine-Tuning [[code](https://github.com/KingdalfGoodman/LoTA-QAF/blob/main/README.md)] [![GitHub stars](https://img.shields.io/github/stars/KingdalfGoodman/LoTA-QAF?style=social)](https://github.com/KingdalfGoodman/LoTA-QAF)
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/117708)] Efficient Multi-bit Quantization Network Training via Weight Bias Correction and Bit-wise Coreset Sampling
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/119554)] Efficient and Generalizable Mixed-Precision Quantization via Topological Entropy
- [[NeurIPS](https://neurips.cc/virtual/2025/poster/119301)] QSCA: Quantization with Self-Compensating Auxiliary for Monocular Depth Estimation
- [[ICCV](https://arxiv.org/abs/2404.19248)] Scheduling Weight Transitions for Quantization-Aware Training [[code](https://github.com/cvlab-yonsei/TRS)] [![GitHub stars](https://img.shields.io/github/stars/cvlab-yonsei/TRS?style=social)](https://github.com/cvlab-yonsei/TRS)
- [[ICCV](https://arxiv.org/abs/2507.16782)] Task-Specific Zero-shot Quantization-Aware Training for Object Detection [[code](https://github.com/DFQ-Dojo/dfq-toolkit)] [![GitHub stars](https://img.shields.io/github/stars/DFQ-Dojo/dfq-toolkit?style=social)](https://github.com/DFQ-Dojo/dfq-toolkit)
- [[ICCV](https://arxiv.org/abs/2503.10959)] OuroMamba: A Data-Free Quantization Framework for Vision Mamba
- [[ICCV](https://arxiv.org/abs/2506.23516)] FedWSQ: Efficient Federated Learning with Weight Standardization and Distribution-Aware Non-Uniform Quantization [[code](https://github.com/Seongyeol-kim/FedWSQ)] [![GitHub stars](https://img.shields.io/github/stars/Seongyeol-kim/FedWSQ?style=social)](https://github.com/Seongyeol-kim/FedWSQ)
- [[ICCV](https://arxiv.org/abs/2412.16553)] Semantic Alignment and Reinforcement for Data-Free Quantization of Vision Transformers [[code](https://github.com/zysxmu/SARDFQ)] [![GitHub stars](https://img.shields.io/github/stars/zysxmu/SARDFQ?style=social)](https://github.com/zysxmu/SARDFQ)
- [[ICCV](https://arxiv.org/abs/2503.06545)] QuantCache: Adaptive Importance-Guided Quantization with Hierarchical Latent and Layer Caching for Video Generation [[code](https://github.com/JunyiWuCode/QuantCache)] [![GitHub stars](https://img.shields.io/github/stars/JunyiWuCode/QuantCache?style=social)](https://github.com/JunyiWuCode/QuantCache)
- [[ICCV](https://arxiv.org/abs/2507.19131)] MixA-Q: Revisiting Activation Sparsity for Vision Transformers from a Mixed-Precision Quantization Perspective
- [[ICCV](https://arxiv.org/abs/2507.12933)] DMQ: Dissecting Outliers of Diffusion Models for Post-Training Quantization [[code](https://github.com/LeeDongYeun/dmq)] [![GitHub stars](https://img.shields.io/github/stars/LeeDongYeun/dmq?style=social)](https://github.com/LeeDongYeun/dmq)
- [[ICCV](https://arxiv.org/abs/2503.03088)] AHCPTQ: Accurate and Hardware-Compatible Post-Training Quantization for Segment Anything Model
- [[ICCV](https://arxiv.org/abs/2507.22349)] MSQ: Memory-Efficient Bit Sparsification Quantization
- [[ICCV](https://arxiv.org/abs/2402.03666)] QuEST: Low-bit Diffusion Model Quantization via Efficient Selective Finetuning [[code](https://github.com/hatchetProject/QuEST)] [![GitHub stars](https://img.shields.io/github/stars/hatchetProject/QuEST?style=social)](https://github.com/hatchetProject/QuEST)
- [[ICML](https://arxiv.org/abs/2505.05799)] MxMoE: Mixed-precision Quantization for MoE with Accuracy and Performance Co-Design [[code](https://github.com/cat538/MxMoE)] [![GitHub stars](https://img.shields.io/github/stars/cat538/MxMoE?style=social)](https://github.com/cat538/MxMoE)
- [[ICML](https://arxiv.org/abs/2505.04877)] Learning from Loss Landscape: Generalizable Mixed-Precision Quantization via Adaptive Sharpness-Aware Gradient Aligning
- [[ICML](https://arxiv.org/abs/2503.15748)] PARQ: Piecewise-Affine Regularized Quantization [[code](https://github.com/facebookresearch/parq)] [![GitHub stars](https://img.shields.io/github/stars/facebookresearch/parq?style=social)](https://github.com/facebookresearch/parq)
- [[ICML](https://arxiv.org/abs/2503.22879)] Quamba2: A Robust and Scalable Post-training Quantization Framework for Selective State Space Models [[code](https://github.com/enyac-group/Quamba)] [![GitHub stars](https://img.shields.io/github/stars/enyac-group/Quamba?style=social)](https://github.com/enyac-group/Quamba)
- [[ICML](https://openreview.net/forum?id=G6DmP9wxeB)] LRA-QViT: Integrating Low-Rank Approximation and Quantization for Robust and Efficient Vision Transformers
- [[ICML](https://arxiv.org/abs/2406.13474)] BoA: Attention-aware Post-training Quantization without Backpropagation
- [[ICML](https://arxiv.org/abs/2505.03804)] MoEQuant: Enhancing Quantization for Mixture-of-Experts Large Language Models via Expert-Balanced Sampling and Affinity Guidance [[code](https://github.com/chenzx921020/MoEQuant)] [![GitHub stars](https://img.shields.io/github/stars/chenzx921020/MoEQuant?style=social)](https://github.com/chenzx921020/MoEQuant)
- [[ICML](https://arxiv.org/abs/2502.09720)] NestQuant: nested lattice quantization for matrix products and LLMs
- [[ICML](https://arxiv.org/abs/2506.20251)] Q-resafe: Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models [[code](https://github.com/Thecommonirin/Qresafe)] [![GitHub stars](https://img.shields.io/github/stars/Thecommonirin/Qresafe?style=social)](https://github.com/Thecommonirin/Qresafe)
- [[ICML](https://arxiv.org/abs/2410.09615)] SLiM: One-shot Quantization and Sparsity with Low-rank Approximation for LLM Weight Compression [[code](https://github.com/Paramathic/slim)] [![GitHub stars](https://img.shields.io/github/stars/Paramathic/slim?style=social)](https://github.com/Paramathic/slim)
- [[ICML](https://arxiv.org/abs/2410.06020)] QT-DoG: Quantization-Aware Training for Domain Generalization [[code](https://github.com/saqibjaved1/QT-DoG)] [![GitHub stars](https://img.shields.io/github/stars/saqibjaved1/QT-DoG?style=social)](https://github.com/saqibjaved1/QT-DoG)
- [[ICML](https://arxiv.org/abs/2502.06786)] Matryoshka Quantization
- [[ICML](https://arxiv.org/abs/2505.23651)] Merge-Friendly Post-Training Quantization for Multi-Target Domain Adaptation [[code](https://github.com/ewsn1593/HDRQ)] [![GitHub stars](https://img.shields.io/github/stars/ewsn1593/HDRQ?style=social)](https://github.com/ewsn1593/HDRQ)
- [[ICML](https://arxiv.org/abs/2505.14371)] Layer-wise Quantization for Quantized Optimistic Dual Averaging
- [[ICML](https://openreview.net/forum?id=w5fONAEwra)] Outlier-Aware Post-Training Quantization for Discrete Graph Diffusion Models
- [[ICML](https://arxiv.org/abs/2501.01144)] BlockDialect: Block-wise Fine-grained Mixed Format Quantization for Energy-Efficient LLM Inference
- [[ICML](https://arxiv.org/abs/2504.02692)] GPTAQ: Efficient Finetuning-Free Quantization with Asymmetric Calibration [[code](https://github.com/Intelligent-Computing-Lab-Panda/GPTAQ)] [![GitHub stars](https://img.shields.io/github/stars/Intelligent-Computing-Lab-Panda/GPTAQ?style=social)](https://github.com/Intelligent-Computing-Lab-Panda/GPTAQ)
- [[ICML](https://arxiv.org/abs/2501.17116)] Optimizing Large Language Model Training Using FP4 Quantization
- [[ICML](https://arxiv.org/abs/2412.04180)] SKIM: Any-bit Quantization Pushing The Limits of Post-Training Quantization
- [[ICML](https://arxiv.org/abs/2411.10958)] SageAttention2: Efficient Attention with Thorough Outlier Smoothing and Per-thread INT4 Quantization [[code](https://github.com/thu-ml/SageAttention)] [![GitHub stars](https://img.shields.io/github/stars/thu-ml/SageAttention?style=social)](https://github.com/thu-ml/SageAttention)
- [[AAAI](https://arxiv.org/abs/2409.14330)] Thinking in Granularity: Dynamic Quantization for Image Super-Resolution by Intriguing Multi-Granularity Clues [[code](https://github.com/MmmingS/Granular-DQ)] [![GitHub stars](https://img.shields.io/github/stars/MmmingS/Granular-DQ?style=social)](https://github.com/MmmingS/Granular-DQ)
- [[AAAI](https://arxiv.org/abs/2501.08180)] D2-DPM: Dual Denoising for Quantized Diffusion Probabilistic Models [[code](https://github.com/TaylorJocelyn/D2-DPM)] [![GitHub stars](https://img.shields.io/github/stars/TaylorJocelyn/D2-DPM?style=social)](https://github.com/TaylorJocelyn/D2-DPM)
- [[CVPR](https://arxiv.org/abs/2411.13918)] Quantization without Tears
- [[CVPR](https://arxiv.org/abs/2504.02508)] APHQ-ViT: Post-Training Quantization with Average Perturbation Hessian Based Reconstruction for Vision Transformer [[code](https://github.com/GoatWu/APHQ-ViT)] [![GitHub stars](https://img.shields.io/github/stars/GoatWu/APHQ-ViT?style=social)](https://github.com/GoatWu/APHQ-ViT)
- [[ICLR](https://openreview.net/forum?id=2rnOgyFQgb)] SynQ: Accurate Zero-shot Quantization by Synthesis-aware Fine-tuning [[code](https://github.com/snudm-starlab/SynQ)] [![GitHub stars](https://img.shields.io/github/stars/snudm-starlab/SynQ?style=social)](https://github.com/snudm-starlab/SynQ)

### 2024

- [[ICML](https://openreview.net/forum?id=qOl2WWOqFg)] BiLLM: Pushing the Limit of Post-Training Quantization for LLMs [[code](https://github.com/Aaronhuang-778/BiLLM)] [![GitHub stars](https://img.shields.io/github/stars/Aaronhuang-778/BiLLM?style=social)](https://github.com/Aaronhuang-778/BiLLM)
- [[ICML](https://openreview.net/forum?id=sCGRhnuMUJ)] Compressing Large Language Models by Joint Sparsification and Quantization
- [[NeurIPS](https://nips.cc/virtual/2024/poster/93620)] BiDM: Pushing the Limit of Quantization for Diffusion Models
- [[ACL Findings](https://aclanthology.org/2024.findings-acl.516/)] DB-LLM: Accurate Dual-Binarization for Efficient LLMs
- [[NeurIPS](https://neurips.cc/virtual/2024/poster/93008)] Binarized Diffusion Model for Image Super-Resolution [[code](https://github.com/zhengchen1999/BI-DiffSR)] [![GitHub stars](https://img.shields.io/github/stars/zhengchen1999/BI-DiffSR?style=social)](https://github.com/zhengchen1999/BI-DiffSR)
- [[NeurIPS](https://openreview.net/forum?id=ADJASE9uQ2)] 2DQuant: Low-bit Post-Training Quantization for Image Super-Resolution [[code](https://github.com/Kai-Liu001/2DQuant)] [![GitHub stars](https://img.shields.io/github/stars/Kai-Liu001/2DQuant?style=social)](https://github.com/Kai-Liu001/2DQuant)
- [[ICML](https://proceedings.mlr.press/v235/qin24b.html)] Accurate LoRA-Finetuning Quantization of LLMs via Information Retention [[code](https://github.com/htqin/IR-QLoRA)] [![GitHub stars](https://img.shields.io/github/stars/htqin/IR-QLoRA?style=social)](https://github.com/htqin/IR-QLoRA)
- [[ICML](https://proceedings.mlr.press/v235/zhang24bb.html)] Flexible Residual Binarization for Image Super-Resolution
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29860)] Agile-Quant: Activation-Guided Quantization for Faster Inference of LLMs on the Edge
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29487)] AQ-DETR: Low-Bit Quantized Detection Transformer with Auxiliary Queries
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/28109)] Bi-ViT: Pushing the Limit of Vision Transformer Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29908)] Exploring Post-training Quantization in LLMs from Comprehensive Study to Low Rank Compensation
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29045)] Make RepVGG Greater Again: A Quantization-Aware Approach
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29212)] MetaMix: Meta-State Precision Searcher for Mixed-Precision Activation Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29815)] Norm Tweaking: High-Performance Low-Bit Quantization of Large Language Models
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29237)] OWQ: Outlier-Aware Weight Quantization for Efficient Fine-Tuning and Inference of Large Language Models
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29553)] PTMQ: Post-training Multi-Bit Quantization of Neural Networks
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/28972)] Robustness-Guided Image Synthesis for Data-Free Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/29765)] What Makes Quantization for Large Language Model Hard? An Empirical Study from the Lens of Perturbation
- [[ACL](https://aclanthology.org/2024.acl-long.612/)] Improving Conversational Abilities of Quantized Large Language Models via Direct Preference Alignment
- [[ACM MM](https://dl.acm.org/doi/abs/10.1145/3664647.3680838)] Advancing Multimodal Large Language Models with Quantization-Aware Scale Learning Based on Warmup
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Fan_Data-Free_Quantization_via_Pseudo-label_Filtering_CVPR_2024_paper.html)] Data-Free Quantization via Pseudo-label Filtering
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Shang_Enhancing_Post-training_Quantization_Calibration_through_Contrastive_Learning_CVPR_2024_paper.html)] Enhancing Post-training Quantization Calibration through Contrastive Learning
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Moon_Instance-Aware_Group_Quantization_for_Vision_Transformers_CVPR_2024_paper.html)] Instance-Aware Group Quantization for Vision Transformers
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_Mixed-Precision_Quantization_for_Federated_Learning_on_Resource-Constrained_Heterogeneous_Devices_CVPR_2024_paper.html)] Mixed-Precision Quantization for Federated Learning on Resource-Constrained Heterogeneous Devices
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Lv_PTQ4SAM_Post-Training_Quantization_for_Segment_Anything_CVPR_2024_paper.html)] PTQ4SAM: Post-Training Quantization for Segment Anything
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Ding_Reg-PTQ_Regression-specialized_Post-training_Quantization_for_Fully_Quantized_Object_Detector_CVPR_2024_paper.html)] Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Tang_Retraining-Free_Model_Quantization_via_One-Shot_Weight-Coupling_Learning_CVPR_2024_paper.html)] Retraining-Free Model Quantization via One-Shot Weight-Coupling Learning
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Huang_TFMQ-DM_Temporal_Feature_Maintenance_Quantization_for_Diffusion_Models_CVPR_2024_paper.html)] TFMQ-DM: Temporal Feature Maintenance Quantization for Diffusion Models
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Towards_Accurate_Post-training_Quantization_for_Diffusion_Models_CVPR_2024_paper.html)] Towards Accurate Post-training Quantization for Diffusion Models
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/3969_ECCV_2024_paper.php)] AdaLog: Post-Training Quantization for Vision Transformers with Adaptive Logarithm Quantizer
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/8434_ECCV_2024_paper.php)] CLAMP-ViT: Contrastive Data-Free Learning for Adaptive Post-Training Quantization of ViTs
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/2494_ECCV_2024_paper.php)] Memory-Efficient Fine-Tuning for Quantized Diffusion Model
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/3914_ECCV_2024_paper.php)] MetaAug: Meta-Data Augmentation for Post-Training Quantization
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/2212_ECCV_2024_paper.php)] MixDQ: Memory-Efficient Few-Step Text-to-Image Diffusion Models with Metric-Decoupled Mixed Precision Quantization
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/2121_ECCV_2024_paper.php)] Overcoming Distribution Mismatch in Quantizing Image Super-Resolution Networks
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/7353_ECCV_2024_paper.php)] Post-training Quantization with Progressive Calibration and Activation Relaxing for Text-to-Image Diffusion Models
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/1627_ECCV_2024_paper.php)] PQ-SAM: Post-training Quantization for Segment Anything Model
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/8312_ECCV_2024_paper.php)] Timestep-Aware Correction for Quantized Diffusion Models
- [[ECCV](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/9567_ECCV_2024_paper.php)] Towards Robust Full Low-bit Quantization of Super Resolution Networks
- [[EMNLP](https://aclanthology.org/2024.emnlp-main.1168/)] ApiQ: Finetuning of 2-Bit Quantized Large Language Model
- [[EMNLP](https://aclanthology.org/2024.emnlp-main.134/)] Prefixing Attention Sinks can Mitigate Activation Outliers for Large Language Model Quantization
- [[EMNLP](https://aclanthology.org/2024.emnlp-main.467/)] VPTQ: Extreme Low-bit Vector Post-Training Quantization for Large Language Models
- [[ICLR](https://openreview.net/forum?id=of2rhALq8l)] AffineQuant: Affine Transformation Quantization for Large Language Models [[code](https://github.com/bytedance/AffineQuant)] [![GitHub stars](https://img.shields.io/github/stars/bytedance/AffineQuant?style=social)](https://github.com/bytedance/AffineQuant)
- [[ICLR](https://openreview.net/forum?id=UmMa3UNDAz)] EfficientDM: Efficient Quantization-Aware Fine-Tuning of Low-Bit Diffusion Models
- [[ICLR](https://openreview.net/forum?id=0d1gQI114C)] LiDAR-PTQ: Post-Training Quantization for Point Cloud 3D Object Detection
- [[ICLR](https://openreview.net/forum?id=LzPWWPAdY4)] LoftQ: LoRA-Fine-Tuning-aware Quantization for Large Language Models [[code](https://github.com/yxli2123/LoftQ)] [![GitHub stars](https://img.shields.io/github/stars/yxli2123/LoftQ?style=social)](https://github.com/yxli2123/LoftQ)
- [[ICLR](https://openreview.net/forum?id=gLARhFLE0F)] LUT-GEMM: Quantized Matrix Multiplication based on LUTs for Efficient Inference in Large-Scale Generative Language Models
- [[ICLR](https://openreview.net/forum?id=8Wuvhh0LYW)] OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models [[code](https://github.com/OpenGVLab/OmniQuant)] [![GitHub stars](https://img.shields.io/github/stars/OpenGVLab/OmniQuant?style=social)](https://github.com/OpenGVLab/OmniQuant)
- [[ICLR](https://openreview.net/forum?id=BifeBRhikU)] PB-LLM: Partially Binarized Large Language Models [[code](https://github.com/hahnyuan/PB-LLM)] [![GitHub stars](https://img.shields.io/github/stars/hahnyuan/PB-LLM?style=social)](https://github.com/hahnyuan/PB-LLM)
- [[ICLR](https://openreview.net/forum?id=WvFoJccpo8)] QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models [[code](https://github.com/yuhuixu1993/qa-lora)] [![GitHub stars](https://img.shields.io/github/stars/yuhuixu1993/qa-lora?style=social)](https://github.com/yuhuixu1993/qa-lora)
- [[ICLR](https://openreview.net/forum?id=FIplmUWdm3)] QLLM: Accurate and Efficient Low-Bitwidth Quantization for Large Language Models
- [[ICLR](https://openreview.net/forum?id=JzG7kSpjJk)] Rethinking Channel Dimensions to Isolate Outliers for Low-bit Weight Quantization of Large Language Models
- [[ICLR](https://openreview.net/forum?id=Q1u25ahSuy)] SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression [[code](https://github.com/Vahe1994/SpQR)] [![GitHub stars](https://img.shields.io/github/stars/Vahe1994/SpQR?style=social)](https://github.com/Vahe1994/SpQR)
- [[ICML](https://openreview.net/forum?id=mbx2pLK5Eq)] A2Q+: Improving Accumulator-Aware Weight Quantization
- [[ICML](https://openreview.net/forum?id=DbyHDYslM7)] BiE: Bi-Exponent Block Floating-Point for Large Language Models Quantization
- [[ICML](https://openreview.net/forum?id=jKUWlgra9b)] ERQ: Error Reduction for Post-Training Quantization of Vision Transformers
- [[ICML](https://openreview.net/forum?id=DKKg5EFAFr)] Evaluating Quantized Large Language Models
- [[ICML](https://openreview.net/forum?id=5mCaITRTmO)] Extreme Compression of Large Language Models via Additive Quantization
- [[ICML](https://openreview.net/forum?id=xPypr0kufs)] FrameQuant: Flexible Low-Bit Quantization for Transformers
- [[ICML](https://openreview.net/forum?id=L057s2Rq8O)] KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache [[code](https://github.com/jy-yuan/KIVI)] [![GitHub stars](https://img.shields.io/github/stars/jy-yuan/KIVI?style=social)](https://github.com/jy-yuan/KIVI)
- [[ICML](https://openreview.net/forum?id=dh8k41g775)] LQER: Low-Rank Quantization Error Reconstruction for LLMs
- [[ICML](https://openreview.net/forum?id=Uh5XN9d2J4)] Outlier-aware Slicing for Post-Training Quantization in Vision Transformer
- [[ICML](https://openreview.net/forum?id=8mKXMnhnFW)] Sharpness-Aware Data Generation for Zero-shot Quantization
- [[ICML](https://openreview.net/forum?id=0jpbpFia8m)] SqueezeLLM: Dense-and-Sparse Quantization [[code](https://github.com/SqueezeAILab/SqueezeLLM)] [![GitHub stars](https://img.shields.io/github/stars/SqueezeAILab/SqueezeLLM?style=social)](https://github.com/SqueezeAILab/SqueezeLLM)
- [[MLSys](https://proceedings.mlsys.org/paper_files/paper/2024/hash/42a452cbafa9dd64e9ba4aa95cc1ef21-Abstract-Conference.html)] AWQ: Activation-aware Weight Quantization for On-Device LLM Compression and Acceleration [[code](https://github.com/mit-han-lab/llm-awq)] [![GitHub stars](https://img.shields.io/github/stars/mit-han-lab/llm-awq?style=social)](https://github.com/mit-han-lab/llm-awq)
- [[NeurIPS](https://nips.cc/virtual/2024/poster/96909)] BitsFusion: 1.99 bits Weight Quantization of Diffusion Model
- [[NeurIPS](https://nips.cc/virtual/2024/poster/93727)] DuQuant: Distributing Outliers via Dual Transformation Makes Stronger Quantized LLMs
- [[NeurIPS](https://nips.cc/virtual/2024/poster/93558)] KV Cache is 1 Bit Per Channel: Efficient Large Language Model Inference with Coupled Quantization
- [[NeurIPS](https://nips.cc/virtual/2024/poster/96936)] KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization
- [[NeurIPS](https://nips.cc/virtual/2024/poster/95445)] PTQ4DiT: Post-training Quantization for Diffusion Transformers
- [[NeurIPS](https://nips.cc/virtual/2024/poster/94107)] Q-VLM: Post-training Quantization for Large Vision-Language Models
- [[NeurIPS](https://nips.cc/virtual/2024/poster/95634)] QBB: Quantization with Binary Bases for LLMs
- [[NeurIPS](https://nips.cc/virtual/2024/poster/96563)] ZipCache: Accurate and Efficient KV Cache Quantization with Salient Token Identification
- [[ACL Findings](https://aclanthology.org/2024.findings-acl.726/)] A Comprehensive Evaluation of Quantization Strategies for Large Language Models
- [[ACL Findings](https://aclanthology.org/2024.findings-acl.3/)] AFPQ: Asymmetric Floating Point Quantization for LLMs [[code](https://github.com/zhangsichengsjtu/AFPQ)] [![GitHub stars](https://img.shields.io/github/stars/zhangsichengsjtu/AFPQ?style=social)](https://github.com/zhangsichengsjtu/AFPQ)
- [[ACL Findings](https://aclanthology.org/2024.findings-acl.26/)] LLM-QAT: Data-Free Quantization Aware Training for Large Language Models
- [[EMNLP Findings](https://aclanthology.org/2024.findings-emnlp.1001/)] ATQ: Activation Transformation for Weight-Activation Quantization of LLMs
- [[EMNLP Findings](https://aclanthology.org/2024.findings-emnlp.444/)] Fine-tuning Rotated Outlier-free LLMs for Effective Weight-Activation Quantization
- [[EMNLP Findings](https://aclanthology.org/2024.findings-emnlp.935/)] How Does Quantization Affect Multilingual LLMs?
- [[EMNLP Findings](https://aclanthology.org/2024.findings-emnlp.570/)] MobileQuant: Mobile-friendly Quantization for On-device Language Models
- [[EMNLP Findings](https://aclanthology.org/2024.findings-emnlp.811/)] QEFT: Quantization for Efficient Fine-Tuning of LLMs
- [[EMNLP Industry](https://aclanthology.org/2024.emnlp-industry.12/)] LLMC: Benchmarking Large Language Model Quantization with a Versatile Compression Toolkit
- [[arXiv](https://arxiv.org/abs/2402.14866)] APTQ: Attention-aware Post-Training Mixed-Precision Quantization for Large Language Models
- [[arXiv](https://arxiv.org/abs/2403.02775)] EasyQuant: An Efficient Data-free Quantization Algorithm for LLMs
- [[arXiv](https://arxiv.org/abs/2402.10787)] EdgeQAT: Entropy and Distribution Guided Quantization-Aware Training for the Acceleration of Lightweight LLMs on the Edge [[code](https://github.com/shawnricecake/EdgeQAT)] [![GitHub stars](https://img.shields.io/github/stars/shawnricecake/EdgeQAT?style=social)](https://github.com/shawnricecake/EdgeQAT)
- [[arXiv](https://arxiv.org/abs/2402.17985)] FlattenQuant: Breaking Through the Inference Compute-bound for Large Language Models with Per-tensor Quantization
- [[arXiv](https://arxiv.org/abs/2402.15319)] GPTVQ: The Blessing of Dimensionality for LLM Quantization [[code](https://github.com/qualcomm-ai-research/gptvq)] [![GitHub stars](https://img.shields.io/github/stars/qualcomm-ai-research/gptvq?style=social)](https://github.com/qualcomm-ai-research/gptvq)
- [[arXiv](https://arxiv.org/abs/2403.01241)] IntactKV: Improving Large Language Model Quantization by Keeping Pivot Tokens Intact
- [[arXiv](https://arxiv.org/abs/2402.11295)] OneBit: Towards Extremely Low-bit Large Language Models
- [[arXiv](https://arxiv.org/abs/2404.00456)] QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs [[code](https://github.com/spcl/QuaRot)] [![GitHub stars](https://img.shields.io/github/stars/spcl/QuaRot?style=social)](https://github.com/spcl/QuaRot)
- [[arXiv](https://arxiv.org/abs/2402.05628)] RepQuant: Towards Accurate Post-Training Quantization of Large Transformer Models via Scale Reparameterization
- [[SIGMOD](https://dl.acm.org/doi/10.1145/3654970)] RaBitQ: Quantizing High-Dimensional Vectors with a Theoretical Error Bound for Approximate Nearest Neighbor Search [[code](https://github.com/gaoj0017/RaBitQ)] [![GitHub stars](https://img.shields.io/github/stars/gaoj0017/RaBitQ?style=social)](https://github.com/gaoj0017/RaBitQ)
- [[AAAI](https://arxiv.org/abs/2401.16760)] One-Step Forward and Backtrack: Overcoming Zig-Zagging in Loss-Aware Quantization Training
- [[ICML](https://arxiv.org/abs/2405.03103)] Learning from students: Applying t-distributions to explore accurate and efficient formats for llms [[code](https://github.com/cornell-zhang/llm-datatypes)] [![GitHub stars](https://img.shields.io/github/stars/cornell-zhang/llm-datatypes?style=social)](https://github.com/cornell-zhang/llm-datatypes)
- [[ICML](https://arxiv.org/abs/2403.12422)] Jetfire: Efficient and Accurate Transformer Pretraining with INT8 Data Flow and Per-Block Quantization
- [[ICML](https://openreview.net/forum?id=fM9xTkpAdu)] Reshape and Adapt for Output Quantization (RAOQ): Quantization-aware Training for In-memory Computing Systems
- [[ICML](https://arxiv.org/abs/2402.04396)] QuIP#: Even Better LLM Quantization with Hadamard Incoherence and Lattice Codebooks [[code](https://github.com/Cornell-RelaxML/quip-sharp)] [![GitHub stars](https://img.shields.io/github/stars/Cornell-RelaxML/quip-sharp?style=social)](https://github.com/Cornell-RelaxML/quip-sharp)
- [[NeurIPS](https://arxiv.org/abs/2402.08958)] Towards Next-Level Post-Training Quantization of Hyper-Scale Transformers [[code](https://github.com/SamsungLabs/aespa)] [![GitHub stars](https://img.shields.io/github/stars/SamsungLabs/aespa?style=social)](https://github.com/SamsungLabs/aespa)
- [[NeurIPS](https://arxiv.org/abs/2406.00800)] MagR: Weight Magnitude Reduction for Enhancing Post-Training Quantization [[code](https://github.com/aozhongzhang/magr)] [![GitHub stars](https://img.shields.io/github/stars/aozhongzhang/magr?style=social)](https://github.com/aozhongzhang/magr)
- [[NeurIPS](https://arxiv.org/abs/2405.18137)] Exploiting LLM Quantization
- [[NeurIPS](https://openreview.net/forum?id=HfpV6u0kbX)] Efficient Multi-task LLM Quantization and Serving for Multiple LoRA Adapters
- [[NeurIPS](https://arxiv.org/abs/2406.11235)] QTIP: Quantization with Trellises and Incoherence Processing [[code](https://github.com/Cornell-RelaxML/qtip)] [![GitHub stars](https://img.shields.io/github/stars/Cornell-RelaxML/qtip?style=social)](https://github.com/Cornell-RelaxML/qtip)
- [[NeurIPS](https://openreview.net/forum?id=dYIqAZXQNV)] Generalizing CNNs to graphs with learnable neighborhood quantization [[code](https://github.com/Grosenick-Lab-Cornell/QuantNets)] [![GitHub stars](https://img.shields.io/github/stars/Grosenick-Lab-Cornell/QuantNets?style=social)](https://github.com/Grosenick-Lab-Cornell/QuantNets)
- [[NeurIPS](https://arxiv.org/abs/2410.15526)] SDP4Bit: Toward 4-bit Communication Quantization in Sharded Data Parallelism for LLM Training [[code](https://github.com/ByteDance-Seed/SDP4Bit)] [![GitHub stars](https://img.shields.io/github/stars/ByteDance-Seed/SDP4Bit?style=social)](https://github.com/ByteDance-Seed/SDP4Bit)
- [[NeurIPS](https://papers.nips.cc/paper_files/paper/2024/file/ab6a2c6ee757afe43882121281f6065c-Paper-Conference.pdf)] Optimal and Approximate Adaptive Stochastic Quantization [[code](https://github.com/ranbenbasat/QUIVER)] [![GitHub stars](https://img.shields.io/github/stars/ranbenbasat/QUIVER?style=social)](https://github.com/ranbenbasat/QUIVER)
- [[NeurIPS](https://arxiv.org/abs/2404.02837)] Cherry on Top: Parameter Heterogeneity and Quantization in Large Language Models
- [[NeurIPS](https://openreview.net/forum?id=cEtExbAKYV)] StepbaQ: Stepping backward as Correction for Quantized Diffusion Models

### 2023

- [[ICML](https://proceedings.mlr.press/v202/qin23a.html)] BiBench: Benchmarking and Analyzing Network Binarization [[code](https://github.com/htqin/BiBench)] [![GitHub stars](https://img.shields.io/github/stars/htqin/BiBench?style=social)](https://github.com/htqin/BiBench)
- [[IJCV](https://arxiv.org/abs/2109.12338)] Distribution-sensitive Information Retention for Accurate Binary Neural Network
- [[NeurIPS](https://neurips.cc/virtual/2023/poster/71287)] BiMatting: Efficient Video Matting via Binarization [[code](https://github.com/htqin/BiMatting)] [![GitHub stars](https://img.shields.io/github/stars/htqin/BiMatting?style=social)](https://github.com/htqin/BiMatting)
- [[NeurIPS](https://neurips.cc/virtual/2023/poster/72890)] QuantSR: Accurate Low-bit Quantization for Efficient Image Super-Resolution [[code](https://github.com/htqin/QuantSR)] [![GitHub stars](https://img.shields.io/github/stars/htqin/QuantSR?style=social)](https://github.com/htqin/QuantSR)
- [[TPAMI](https://ieeexplore.ieee.org/document/10146917)] Diverse Sample Generation: Pushing the Limit of Generative Data-Free Quantization [[code](https://github.com/htqin/DSG)] [![GitHub stars](https://img.shields.io/github/stars/htqin/DSG?style=social)](https://github.com/htqin/DSG)
- [[TNNLS](https://ieeexplore.ieee.org/document/10049753)] BiFSMNv2: Pushing Binary Neural Networks for Keyword Spotting to Real-Network Performance [[code](https://github.com/htqin/BiFSMNv2)] [![GitHub stars](https://img.shields.io/github/stars/htqin/BiFSMNv2?style=social)](https://github.com/htqin/BiFSMNv2)
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/26268)] Fast and Accurate Binary Neural Networks Based on Depth-Width Reshaping
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/26084)] OMPQ: Orthogonal Mixed Precision Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/26354)] Quantized Feature Distillation for Network Quantization
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/26261)] Resilient Binary Neural Network
- [[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/26136)] Rethinking Data-Free Quantization as a Zero-Sum Game
- [[ACL](https://aclanthology.org/2023.findings-acl.15/)] Boost Transformer-based Language Models with GPU-Friendly Sparsity and Quantization
- [[ACL](https://arxiv.org/abs/2306.00014)] PreQuant: A Task-agnostic Quantization Approach for Pre-trained Language Models
- [[CVPR](https://ipl.dgist.ac.kr/ABCD_cvpr23.pdf)] ABCD : Arbitrary Bitwise Coefficient for De-quantization
- [[CVPR](https://arxiv.org/abs/2303.06869)] Adaptive Data-Free Quantization
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/papers/Lin_Bit-Shrinking_Limiting_Instantaneous_Sharpness_for_Improving_Post-Training_Quantization_CVPR_2023_paper.pdf)] Bit-shrinking: Limiting Instantaneous Sharpness for Improving Post-training Quantization
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/papers/Yu_Boost_Vision_Transformer_With_GPU-Friendly_Sparsity_and_Quantization_CVPR_2023_paper.pdf)] Boost Vision Transformer with GPU-Friendly Sparsity and Quantization
- [[CVPR](https://arxiv.org/abs/2212.04780)] GENIE: Show Me the Data for Quantization [[code](https://github.com/SamsungLabs/Genie)] [![GitHub stars](https://img.shields.io/github/stars/SamsungLabs/Genie?style=social)](https://github.com/SamsungLabs/Genie)
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/html/Li_Hard_Sample_Matters_a_Lot_in_Zero-Shot_Quantization_CVPR_2023_paper.html)] Hard Sample Matters a Lot in Zero-Shot Quantization
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/papers/Shin_NIPQ_Noise_Proxy-Based_Integrated_Pseudo-Quantization_CVPR_2023_paper.pdf)] NIPQ: Noise proxy-based Integrated Pseudo-Quantization
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/papers/Liu_NoisyQuant_Noisy_Bias-Enhanced_Post-Training_Activation_Quantization_for_Vision_Transformers_CVPR_2023_paper.pdf)] NoisyQuant: Noisy Bias-Enhanced Post-Training Activation Quantization for Vision Transformers
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/papers/Koryakovskiy_One-Shot_Model_for_Mixed-Precision_Quantization_CVPR_2023_paper.pdf)] One-Shot Model for Mixed-Precision Quantization
- [[CVPR](https://openaccess.thecvf.com/content/CVPR2023/html/Liu_PD-Quant_Post-Training_Quantization_Based_on_Prediction_Difference_Metric_CVPR_2023_paper.html)] PD-Quant: Post-Training Quantization Based on Prediction Difference Metric [[code](https://github.com/hustvl/PD-Quant)] [![GitHub stars](https://img.shields.io/github/stars/hustvl/PD-Quant?style=social)](https://github.com/hustvl/PD-Quant)
- [[CVPR](http://openaccess.thecvf.com/content/CVPR2023/html/Shang_Post-Training_Quantization_on_Diffusion_Models_CVPR_2023_paper.html)] Post-training Quantization on Diffusion Models [[code](https://https//github.com/42Shawn/PTQ4DM)]

<!-- opensource-radar:truncated -->
