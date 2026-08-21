# Awesome Hand Pose Estimation

A curated list of related resources for hand pose estimation. Feel free to [contribute](#Contribute)!

## Contents

- [Evaluation](#evaluation)
- [arXiv Papers](#arxiv-papers)
- [Journal Papers](#journal-papers)
  - [TPAMI / IJCV](#tpami--ijcv)
  - [Others](#other-journals)
- [Conference Papers](#conference-papers)
  - 2025: [Others](#2025-others)
  - 2024: [CVPR](#2024-cvpr), [ECCV](#2024-eccv), [Others](#2024-others)
  - 2023: [CVPR](#2023-cvpr), [ICCV](#2023-iccv), [Others](#2023-others)
  - 2022: [CVPR](#2022-cvpr), [ECCV](#2022-eccv), [Others](#2022-others)
  - 2021: [CVPR](#2021-cvpr), [ICCV](#2021-iccv), [Others](#2021-others)
  - 2020: [CVPR](#2020-cvpr), [ECCV](#2020-eccv), [Others](#2020-others)
  - 2019: [CVPR](#2019-cvpr), [ICCV](#2019-iccv), [Others](#2019-others)
  - 2018: [CVPR](#2018-cvpr), [ECCV](#2018-eccv), [Others](#2018-others)
  - 2017: [CVPR](#2017-cvpr), [ICCV](#2017-iccv), [Others](#2017-others)
  - 2016: [CVPR](#2016-cvpr), [ECCV](#2016-eccv), [Others](#2016-others)
  - 2015: [CVPR](#2015-cvpr), [ICCV](#2015-iccv), [Others](#2015-others)
  - 2014: [CVPR](#2014-cvpr), [Others & Before](#2014-others--before)
- [Theses](#theses)
- [Datasets](#datasets)
  - [Depth](#depth)
  - [RGB+Depth](#rgbdepth)
  - [RGB](#rgb)
- [Workshops](#workshops)
- [Challenges](#challenges)
- [Other Related Papers](#other-related-papers)

\* indicates equal contribution

## Evaluation

See folder [``evaluation``](./evaluation) to get more details about performance evaluation for hand pose estimation.

## arXiv Papers

##### • [\[arXiv:2206.04927\]](https://arxiv.org/abs/2303.15147) Pushing the Envelope for Depth-Based Semi-Supervised 3D Hand Pose Estimation with Consistency Training.  [\[PDF\]](https://arxiv.org/abs/2303.15147)

_Mohammad Rezaei, Farnaz Farahanipad, Alex Dillhoff, Vassilis Athitsos_

##### • [\[arXiv:2206.04927\]](https://arxiv.org/abs/2206.04927) Ego2HandsPose: A Dataset for Egocentric Two-hand 3D Global Pose Estimation.  [\[PDF\]](https://arxiv.org/abs/2206.04927)

_Fanqing Lin, Tony Martinez_

##### • [\[arXiv:2206.07117\]](https://arxiv.org/abs/2206.07117) TriHorn-Net: A Model for Accurate Depth-Based 3D Hand Pose Estimation.  [\[PDF\]](https://arxiv.org/abs/2206.07117)  [\[Code\]](https://github.com/mrezaei92/TriHorn-Net)

_Mohammad Rezaei, Razieh Rastgoo, Vassilis Athitsos_

##### • [\[arXiv:2202.04533\]](https://arxiv.org/abs/2202.04533) NIMBLE: A Non-rigid Hand Model with Bones and Muscles.  [\[PDF\]](https://arxiv.org/pdf/2202.04533)

_Yuwei Li, Longwen Zhang, Zesong Qiu, Yingwenqi Jiang, Yuyao Zhang, Nianyi Li, Yuexin Ma, Lan Xu, Jingyi Yu_

##### • [\[arXiv:2201.09548\]](https://arxiv.org/abs/2201.09548) Consistent 3D Hand Reconstruction in Video via self-supervised Learning.  [\[PDF\]](https://arxiv.org/pdf/2201.09548)

_Zhigang Tu, Zhisheng Huang, Yujin Chen, Di Kang, Linchao Bao, Bisheng Yang, Junsong Yuan_

##### • [\[arXiv:2111.06500\]](https://arxiv.org/abs/2111.06500) Dynamic Iterative Refinement for Efficient 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2111.06500)

_John Yang, Yash Bhalgat, Simyung Chang, Fatih Porikli, Nojun Kwak_

##### • [\[arXiv:2109.14744\]](https://arxiv.org/abs/2109.14744) The Object at Hand: Automated Editing for Mixed Reality Video Guidance from Hand-Object Interactions. [\[PDF\]](https://arxiv.org/pdf/2109.14744)

_Yao Lu, Walterio W. Mayol-Cuevas_

##### • [\[arXiv:2109.14657\]](https://arxiv.org/abs/2109.14657) Understanding Egocentric Hand-Object Interactions from Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2109.14657)

_Yao Lu, Walterio W. Mayol-Cuevas_

##### • [\[arXiv:2109.11747\]](https://arxiv.org/abs/2109.11747) A Multi-View Video-Based 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2109.11747)

_Leyla Khaleghi, Alireza Sepas Moghaddam, Joshua Marshall, Ali Etemad_

##### • [\[arXiv:2108.13995\]](https://arxiv.org/abs/2108.13995) Realistic Hands: A Hybrid Model for 3D Hand Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2108.13995) [\[Project\]](https://hassony2.github.io/homan.html)

_Michael Seeber, Martin R. Oswald, Roi Poranne_

##### • [\[arXiv:2108.07044\]](https://arxiv.org/abs/2108.07044) Towards unconstrained joint hand-object reconstruction from RGB videos. [\[PDF\]](https://arxiv.org/pdf/2108.07044) [\[Project\]](https://hassony2.github.io/homan.html)  [\[Code\]](https://github.com/hassony2/homan)

_Yana Hasson, Gül Varol, Ivan Laptev, Cordelia Schmid_

##### • [\[arXiv:2107.00887\]](https://arxiv.org/abs/2107.00887) HO-3D_v3: Improving the Accuracy of Hand-Object Annotations of the HO-3D Dataset. [\[PDF\]](https://arxiv.org/abs/2107.00887)

_Shreyas Hampali, Sayan Deb Sarkar, Vincent Lepetit_

##### • [\[arXiv:2106.05954\]](https://arxiv.org/abs/2106.05954) Adversarial Motion Modelling helps Semi-supervised Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2106.05954)

_Adrian Spurr, Pavlo Molchanov, Umar Iqbal, Jan Kautz, Otmar Hilliges_

##### • [\[arXiv:2106.04324\]](https://arxiv.org/abs/2106.04324) Contrastive Representation Learning for Hand Shape Estimation. [\[PDF\]](https://arxiv.org/pdf/2106.04324)  [\[Project\]](https://lmb.informatik.uni-freiburg.de/projects/contra-hand/)  [\[Code\]](https://github.com/lmb-freiburg/contra-hand)  [\[Data\]](https://lmb.informatik.uni-freiburg.de/resources/datasets/HanCo.en.html)

_Christian Zimmermann, Max Argus, Thomas Brox_

##### • [\[arXiv:2104.14639\]](https://arxiv.org/abs/2104.14639) HandsFormer: Keypoint Transformer for Monocular 3D Pose Estimation ofHands and Object in Interaction. [\[PDF\]](https://arxiv.org/pdf/2104.14639)

_Shreyas Hampali, Sayan Deb Sarkar, Mahdi Rad, Vincent Lepetit_

##### • [\[arXiv:2102.07067\]](https://arxiv.org/abs/2102.07067) FastHand: Fast Hand Pose Estimation From A Monocular Camera. [\[PDF\]](https://arxiv.org/pdf/2102.07067)

_Shan An, Xiajie Zhang, Dong Wei, Haogang Zhu, Jianyu Yang, Konstantinos A. Tsintotas_

##### • [\[arXiv:2012.11260\]](https://arxiv.org/abs/2012.11260) Unsupervised Domain Adaptation with Temporal-Consistent Self-Training for 3D Hand-Object Joint Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2012.11260.pdf)

_Mengshi Qi, Edoardo Remelli, Mathieu Salzmann, Pascal Fua_

##### • [\[arXiv:2008.08324\]](https://arxiv.org/abs/2008.08324) FrankMocap: Fast Monocular 3D Hand and Body Motion Capture by Regression and Integration. [\[PDF\]](https://arxiv.org/pdf/2008.08324.pdf)  [\[Project\]](https://penincillin.github.io/frank_mocap)

_Yu Rong, Takaaki Shiratori, Hanbyul Joo_

##### • [\[arXiv:2006.05927\]](https://arxiv.org/abs/2006.05927) Recent Advances in 3D Object and Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2006.05927.pdf)

_Vincent Lepetit_

##### • [\[arXiv:2001.08047\]](https://arxiv.org/abs/2001.08047) Attention! A Lightweight 2D Hand Pose Estimation Approach. [\[PDF\]](https://arxiv.org/pdf/2001.08047.pdf)

_Nicholas Santavas, Ioannis Kansizoglou, Loukas Bampis, Evangelos Karakasis, Antonios Gasteratos_

##### • [\[arXiv:2001.00702\]](https://arxiv.org/abs/2001.00702) HandAugment: A Simple Data Augmentation Method for Depth-Based 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2001.00702.pdf) [\[Code\]](https://github.com/wozhangzhaohui/HandAugment)

_Zhaohui Zhang, Shipeng Xie, Mingxiu Chen, Haichao Zhu_

##### • [\[arXiv:1912.12436\]](https://arxiv.org/abs/1912.12436) Silhouette-Net: 3D Hand Pose Estimation from Silhouettes. [\[PDF\]](https://arxiv.org/pdf/1912.12436.pdf)

_Kuo-Wei Lee, Shih-Hung Liu, Hwann-Tzong Chen, Koichi Ito_

##### • [\[arXiv:1911.12501\]](https://arxiv.org/abs/1911.12501) An End-to-end Framework for Unconstrained Monocular 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/1911.12501.pdf)

_Sanjeev Sharma, Shaoli Huang, Dacheng Tao_

##### • [\[arXiv:1912.01875\]](https://arxiv.org/abs/1912.01875) GraphPoseGAN: 3D Hand Pose Estimation from a Monocular RGB Image via Adversarial Learning on Graphs. [\[PDF\]](https://arxiv.org/pdf/1912.01875.pdf)

_Yiming He, Wei Hu, Siyuan Yang, Xiaochao Qu, Pengfei Wan, Zongming Guo_

##### • [\[arXiv:1911.07424\]](https://arxiv.org/abs/1911.07424) Capturing Hand Articulations using Recurrent Neural Network for 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/1911.07424.pdf)

_Cheol-hwan Yoo, Seung-wook Kim, Seo-won Ji, Yong-goo Shin, Sung-jea Ko_

##### • [\[arXiv:1807.00898\]](https://arxiv.org/abs/1807.00898) Model-based Hand Pose Estimation for Generalized Hand Shape with Appearance Normalization. [\[PDF\]](https://arxiv.org/pdf/1807.00898.pdf)

_Jan Wöhlke, Shile Li, Dongheui Lee_

##### • [\[arXiv:1705.09606\]](https://arxiv.org/abs/1705.09606) End-to-end Global to Local CNN Learning for Hand Pose Recovery in Depth data. [\[PDF\]](https://arxiv.org/pdf/1705.09606.pdf)

_Meysam Madadi, Sergio Escalera, Xavier Baro, Jordi Gonzalez_

##### • [\[arXiv:1704.02224\]](https://arxiv.org/abs/1704.02224) Hand3D: Hand Pose Estimation using 3D Neural Network. [\[PDF\]](https://arxiv.org/pdf/1704.02224.pdf)  [\[Project\]](http://www.idengxm.com/hand3d/index.html)

_Xiaoming Deng\*, Shuo Yang\*, Yinda Zhang\*, Ping Tan, Liang Chang, Hongan Wang_

##### • [\[arXiv:1612.00596\]](https://arxiv.org/abs/1612.00596) Learning to Search on Manifolds for 3D Pose Estimation of Articulated Objects. [\[PDF\]](https://arxiv.org/pdf/1612.00596.pdf)

*Yu Zhang, Chi Xu, Li Cheng*

[\[back to top\]](#contents)

## Journal Papers

### TPAMI / IJCV

##### • \[2025 TPAMI\] 3D Hand Pose Estimation via Articulated Anchor-to-Joint 3D Local Regressors. [\[PDF\]](https://ieeexplore.ieee.org/document/11165058/)

_Changlong Jiang, Yang Xiao, Jinghong Zheng, Haohong Kuang, Cunlin Wu, Mingyang Zhang, Zhiguo Cao, Min Du, Joey Tianyi Zhou, Junsong Yuan_

##### • \[2024 TPAMI\] EvHandPose: Event-Based 3D Hand Pose Estimation With Sparse Supervision. [\[PDF\]](https://ieeexplore.ieee.org/document/10478195/)

_Jianping Jiang, Jiahe Li, Baowen Zhang, Xiaoming Deng, Boxin Shi_

##### • \[2024 TPAMI\] Learning a Contact Potential Field for Modeling the Hand-Object Interaction. [\[PDF\]](https://ieeexplore.ieee.org/document/10478277/)

_Lixin Yang, Xinyu Zhan, Kailin Li, Wenqiang Xu, Junming Zhang, Jiefeng Li, Cewu Lu_

##### • \[2023 TPAMI\] Consistent 3D Hand Reconstruction in Video via self-supervised Learning. [\[PDF\]](https://arxiv.org/pdf/2201.09548)

_Zhigang Tu, Zhisheng Huang, Yujin Chen, Di Kang, Linchao Bao, Bisheng Yang, Junsong Yuan_

##### • \[2022 TPAMI\] Recurrent 3D Hand Pose Estimation Using Cascaded Pose-guided 3D Alignments. [\[PDF\]](https://ieeexplore.ieee.org/document/9736619/)

_Xiaoming Deng, Dexin Zuo, Yinda Zhang, Zhaopeng Cui, Jian Cheng, Ping Tan, Liang Chang, Marc Pollefeys, Sean Fanello, Hongan Wang_

##### • \[2021 TPAMI\] HandVoxNet++: 3D Hand Shape and Pose Estimation using Voxel-Based Neural Networks. [\[PDF\]](https://arxiv.org/abs/2107.01205)

_Jameel Malik, Soshi Shimada, Ahmed Elhayek, Sk Aziz Ali, Christian Theobalt, Vladislav Golyanik, Didier Stricker_

##### • \[2020 TPAMI\] 3D Hand Pose Estimation Using Synthetic Data and Weakly Labeled RGB Images. [\[PDF\]](https://ieeexplore.ieee.org/document/9091090)

_Yujun Cai, Liuhao Ge, Jianfei Cai, Nadia Magnenat-Thalmann, Junsong Yuan_

##### • \[2019 TPAMI\] Generalized Feedback Loop for Joint Hand-Object Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/1903.10883) [\[Project\]](https://www.tugraz.at/institute/icg/research/team-lepetit/research-projects/joint-3d-hand-object-pose-estimation/)

_Markus Oberweger, Paul Wohlhart, Vincent Lepetit_

##### • \[2019 TPAMI\] Feature Boosting Network For 3D Pose Estimation. [\[PDF\]](https://ieeexplore.ieee.org/document/8621059)

_Jun Liu, Henghui Ding, Amir Shahroudy, Ling-Yu Duan, Xudong Jiang, Gang Wang, Alex C. Kot_

##### • \[2018 TPAMI\] Opening the Black Box: Hierarchical Sampling Optimization for Hand Pose Estimation. [\[PDF\]](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8386667)

_Danhang Tang\*, Qi Ye\*, Shanxin Yuan, Jonathan Taylor, Pushmeet Kohli, Cem Keskin, Tae-Kyun Kim, Jamie Shotton_

##### • \[2018 IJCV\] Depth-Based Hand Pose Estimation: Methods, Data, and Challenges. [\[PDF\]](https://link.springer.com/content/pdf/10.1007%2Fs11263-018-1081-7.pdf)  [\[Project\]](http://arrummzen.net/#HandData) [\[Code\]](https://github.com/jsupancic/deep_hand_pose)

*James Steven Supančič III, Grégory Rogez, Yi Yang, Jamie Shotton, Deva Ramanan*

##### • \[2018 TPAMI\] Real-time 3D Hand Pose Estimation with 3D Convolutional Neural Networks. [\[PDF\]](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8338122)

_Liuhao Ge, Hui Liang, Junsong Yuan and Daniel Thalmann_

##### • \[2016 IJCV\] Lie-X: Depth Image Based Articulated Object Pose Estimation, Tracking, and Action Recognition on Lie Groups. [\[PDF\]](https://arxiv.org/pdf/1609.03773.pdf) [\[Project\]](https://web.bii.a-star.edu.sg/archive/machine_learning/Projects/behaviorAnalysis/Lie-X/Lie-X.html)

*Chi Xu, Lakshmi Narasimhan Govindarajan, Yu Zhang, Li Cheng*

##### • \[2016 TPAMI\] Latent Regression Forest: Structured Estimation of 3D Hand Poses. [\[PDF\]](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7539555)

*Danhang Tang, Hyung Chang, Alykhan Tejani, Tae-Kyun Kim*

##### • \[2016 IJCV\] Capturing Hands in Action using Discriminative Salient Points and Physics Simulation. [\[PDF\]](http://files.is.tue.mpg.de/dtzionas/Hand-Object-Capture/IJCV_Hand_Object_Capture.pdf) [\[Project\]](http://files.is.tue.mpg.de/dtzionas/Hand-Object-Capture/)

*Dimitrios Tzionas, Luca Ballan, Abhilash Srikantha, Pablo Aponte, Marc Pollefeys, Juergen Gall*

##### • \[2015 IJCV\] Estimate Hand Poses Efficiently from Single Depth Images. [\[PDF\]](https://web.bii.a-star.edu.sg/~xuchi/pdf/XuEtAl_IJCV15.pdf) [\[Project\]](http://web.bii.a-star.edu.sg/~xuchi/dhand.htm)  [\[Code\]](https://github.com/lzddzh/HandPoseEstimation)

*Chi Xu, Ashwin Nanjappa, Xiaowei Zhang, Li Cheng*

[\[back to top\]](#contents)

### Other Journals

##### • \[2023 ESWA\] TriHorn-Net: A Model for Accurate Depth-Based 3D Hand Pose Estimation.  [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0957417423004232)  [\[Code\]](https://github.com/mrezaei92/TriHorn-Net)

_Mohammad Rezaei, Razieh Rastgoo, Vassilis Athitsos_

##### • \[2022 TIP\] A Dual-Branch Self-Boosting Framework for Self-Supervised 3D Hand Pose Estimation. [\[PDF\]](https://ieeexplore.ieee.org/document/9841448) [\[Code\]](https://github.com/RenFeiTemp/DSF)

_Pengfei Ren, Haifeng Sun, Jiachang Hao, Qi Qi, Jingyu Wang, Jianxin Liao_

##### • \[2022 Technologies\] A Survey on GAN-Based Data Augmentation for Hand Pose Estimation Problem. [\[PDF\]](https://www.mdpi.com/2227-7080/10/2/43/pdf?version=1647826385)

_Farnaz Farahanipad, Mohammad Rezaei, Mohammad Sadegh Nasr, Farhad Kamangar, Vassilis Athitsos_

##### • \[2022 TCSVT\] 3D Hand Pose Estimation from Monocular RGB with Feature Interaction Module. [\[PDF\]](https://ieeexplore.ieee.org/document/9680673/)

_Shaoxiang Guo, Eric Rigall, Yakun Ju, Junyu Dong_

##### • \[2021 TIP\] Hand Pose Understanding with Large-Scale Photo-Realistic Rendering Dataset. [\[PDF\]](https://ieeexplore.ieee.org/document/9398571)

_Xiaoming Deng, Yinda Zhang, Jian Shi, Yuying Zhu, Dachuan Cheng, Dexin Zuo, Zhaopeng Cui, Ping Tan, Liang Chang, Hongan Wang_

##### • \[2021 TIP\] Joint Hand-object 3D Reconstruction from a Single Image with Cross-branch Feature Fusion. [\[PDF\]](https://arxiv.org/pdf/2006.15561.pdf)

_Yujin Chen, Zhigang Tu, Di Kang, Ruizhi Chen, Linchao Bao, Zhengyou Zhang, Junsong Yuan_

##### • \[2021 Neurocomputing\] Spatial-aware Stacked Regression Network for Real-time 3D Hand Pose Estimation. [\[PDF\]](https://www.sciencedirect.com/science/article/abs/pii/S0925231221000667)

_Pengfei Ren, Haifeng Sun, Weiting Huang, Jiachang hao, Daixuan Cheng, Qi Qi, Jingyu Wang, Jianxin Liao_

##### • \[2021 TMM\] Differentiable Spatial Regression: A Novel Method for 3D Hand Pose Estimation. [\[PDF\]](https://drive.google.com/file/d/1kuhBSA4nzmJnIPeiTOTqC4w1YKQgjPBR/view?usp=share_link) [\[Code\]](https://github.com/IcarusWizard/PixelwiseRegression)

_Xingyuan Zhang, Fuhai Zhang_

##### • \[2020 TIP\] Weakly-supervised Learning for Single Depth based Hand Shape Recovery. [\[PDF\]](https://ieeexplore.ieee.org/document/9262071)

_Xiaoming Deng, Yuying Zhu, Yinda Zhang, Zhaopeng Cui, Ping Tan, Wentian Qu, Cuixia Ma, Hongan Wang_

##### • \[2020 Signal Process Image Commun\] Accurate 3D Hand Pose Estimation Network Utilizing Joints Information. [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0923596520301831)

_Xiongquan Zhang; Shiliang Huang; Zhongfu Ye_

##### • \[2020 TCSVT\] Improve Regression Network on Depth Hand Pose Estimation with Auxiliary Variable. [\[PDF\]](https://ieeexplore.ieee.org/abstract/document/9085372)

_Lu Xu, Chen Hu, Ji’an Tao, Jianru Xue, Kuizhi Mei_

##### • \[2020 TVCG\] 3D Hand Tracking in the Presence of Excessive Motion Blur. [\[PDF\]](https://ieeexplore.ieee.org/document/8998145)

_Gabyong Park, Antonis Argyros, Juyoung Lee, Woontack Woo_

##### • \[2019 Computers & Graphics\] Simple and effective deep hand shape and pose regression from a single depth image. [\[PDF\]](https://www.sciencedirect.com/science/article/abs/pii/S0097849319301591)

_Jameel Malik, Ahmed Elhayek, Fabrizio Nunnari, Didier Stricker_

##### • \[2019 TIP\] SRHandNet: Real-time 2D Hand Pose Estimation with Simultaneous Region Localization. [\[PDF\]](https://yangangwang.com/papers/WANG-SRH-2019-11.pdf) [\[Project\]](https://yangangwang.com/papers/WANG-SRH-2019-07.html)

_Yangang Wang, Baowen Zhang, Cong Peng_

##### • \[2019 Sensors\] WHSP-Net: A Weakly-Supervised Approach for 3D Hand Shape and Pose Recovery from a Single Depth Image. [\[PDF\]](https://www.mdpi.com/1424-8220/19/17/3784)

_Jameel Malik\*, Ahmed Elhayek\*, Didier Stricker_

##### • \[2019 [RA-L](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083369)\] Variational Object-aware 3D Hand Pose from a Single RGB Image. [\[PDF\]](https://www.researchgate.net/profile/Yida_Wang/publication/334639748_Variational_Object-aware_3D_Hand_Pose_from_a_Single_RGB_Image/links/5d3a1a41a6fdcc370a6048df/Variational-Object-aware-3D-Hand-Pose-from-a-Single-RGB-Image.pdf)  [\[Code\]](https://github.com/wangyida/VO-handpose)

_Yafei Gao\*, Yida Wang\*, Pietro Falco, Nassir Navab, Federico Tombari_

##### • \[2018 PR\] A Survey on 3D Hand Pose Estimation: Cameras, Methods, and Datasets. [\[PDF\]](https://www.sciencedirect.com/science/article/abs/pii/S0031320319301724)

_Rui Li, Zhenyu Liu, Jianrong Tan_

##### • \[2018 Neurocomputing\] A CRNN module for hand pose estimation. [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0925231218315273#!)

_Zhongxu Hu, Youmin Hu, Jie Liu, Bo Wu, Dongmin Han, Thomas Kurfess_

##### • \[2018 IVC\] Large-scale Multiview 3D Hand Pose Dataset. [\[PDF\]](https://arxiv.org/pdf/1707.03742.pdf)  [\[Project\]](http://www.rovit.ua.es/dataset/mhpdataset/)

_Francisco Gomez-Donoso, Sergio Orts-Escolano and Miguel Cazorla_

##### • \[2018 TCSVT\] Mask-pose Cascaded CNN for 2D Hand Pose Estimation from Single Color Image. [\[PDF\]](https://www.yangangwang.com/papers/WANG-MCC-2018-10.pdf)  [\[Project\]](https://www.yangangwang.com/papers/WANG-MCC-2018-10.html)  [\[Code\]](https://www.yangangwang.com/papers/WANG-MCC-2018-10.html)

_Yangang Wang, Cong Peng and Yebin Liu_

##### • \[2018 IVC\] Top-down model fitting for hand pose recovery in sequences of depth images. [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0262885618301513#aep-article-footnote-id1)

_Meysam Madadi, Sergio Escalera, Alex Carruesco, Carlos Andujar, Xavier Baró, Jordi Gonzàlez_

##### • \[2018 TCYB\] Context-Aware Deep Spatio-Temporal Network for Hand Pose Estimation from Depth Images. [\[PDF\]](https://arxiv.org/pdf/1810.02994.pdf)

_Yiming Wu, Wei Ji, Xi Li, Gang Wang, Jianwei Yin, Fei Wu_

##### • \[2018 IEEE Access\] SHPR-Net: Deep Semantic Hand Pose Regression From Point Clouds. [\[PDF\]](https://ieeexplore.ieee.org/document/8425735/)  [\[Project\]](https://sites.google.com/view/xinghaochen/projects/SHPR-Net)

_Xinghao Chen, Guijin Wang, Cairong Zhang, Tae-Kyun Kim, Xiangyang Ji_

##### • \[2018 Neurocomputing\]  Pose Guided Structured Region Ensemble Network for Cascaded Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/1708.03416.pdf)  [\[Project\]](https://sites.google.com/view/xinghaochen/projects/Pose-REN)  [\[Code\]](https://github.com/xinghaochen/Pose-REN)

_Xinghao Chen, Guijin Wang, Hengkai Guo, Cairong Zhang_

##### • \[2018 PR\]  Learning a deep network with spherical part model for 3D hand pose estimation. [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S0031320318300839)

_Tzu-Yang Chen, Pai-Wen Ting, Min-Yu Wu, Li-Chen Fu_

##### • \[2018 TIP\] Robust 3D Hand Pose Estimation from Single Depth Images using Multi-View CNNs. [\[PDF\]](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8357595)

_Liuhao Ge, Hui Liang, Junsong Yuan and Daniel Thalmann_

##### • \[2018 JVCI\] Region Ensemble Network: Towards Good Practices for Deep 3D Hand Pose Estimation. [\[PDF\]](https://www.sciencedirect.com/science/article/pii/S1047320318300816) [\[Code\]](https://github.com/guohengkai/region-ensemble-network)

_Guijin Wang, Xinghao Chen\*, Hengkai Guo\*, Cairong Zhang_

##### • \[2017 TCYB\] Hough Forest with Optimized Leaves for Global Hand Pose Estimation with Arbitrary Postures. [\[PDF\]](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8237190)

*Hui Liang, Junsong Yuan, J. Lee, Liuhao Ge and Daniel Thalmann*

##### • \[2017 TCSVT\] Robust RGB-D Hand Tracking Using Deep Learning Priors. [\[PDF\]](http://ieeexplore.ieee.org/abstract/document/7955084/)

*Jordi Sanchez-Riera, Kathiravan Srinivasan, Kai-Lung Hua, Wen-Huang Cheng, M. Anwar Hossain, and Mohammed F. Alhamid*

##### • [2017 CVIU] Hand Pose Estimation through Semi-Supervised and Weakly-Supervised Learning. [\[PDF\]](https://arxiv.org/pdf/1511.06728.pdf)

*Natalia Neverova, Christian Wolf, Florian Nebout, Graham Taylor*

##### • \[2017 Neurocomputing\] Multi-task, Multi-domain Learning: application to semantic segmentation and pose regression. [\[PDF\]](http://liris.cnrs.fr/christian.wolf/papers/neurocomputing2017.pdf)

*Damien Foururea, Rémi Emonet, Elisa Fromont, Damien Muselet, Natalia Neverova, Alain Trémeaua, Christian Wolf*

##### • \[2016 CVIU\] Guided Optimisation through Classification and Regression for Hand Pose Estimation. [\[PDF\]](http://www.krejov.com/uploads/2/4/0/5/24053627/1-s2.0-s107731421630193x-main.pdf) [\[Project\]](http://www.krejov.com/hand-pose-estimation.html)

*Philip Krejov, Andrew Gilbert, Richard Bowden*

##### • \[2015 TCSVT\] Resolving Ambiguous Hand Pose Predictions by Exploiting Part Correlations. [\[PDF\]](https://ieeexplore.ieee.org/document/6926804/)

*Hui Liang, Junsong Yuan, Daniel Thalmann*

##### • \[2014 TMM\] Parsing the Hand in Depth Images. [\[PDF\]](https://ieeexplore.ieee.org/document/6740010) [\[Project\]](https://sites.google.com/site/seraphlh/projects)  [\[Code\]](https://github.com/shrekei/RandomDecisionForest)

*Hui Liang, Junsong Yuan, Daniel Thalmann*

[\[back to top\]](#contents)

## Conference Papers

### 2025 Others
##### • [2025 ICLR] SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training. [\[PDF\]](https://openreview.net/pdf?id=96jZFqM5E0) [\[Project\]](https://lin-nie.github.io/projects/simhand/index.html)  [\[Code\]](https://github.com/ut-vision/SiMHand)
_[Nie Lin*](https://lin-nie.github.io/), [Takehiko Ohkawa*](https://tkhkaeio.github.io/), [Yifei Huang](https://hyf015.github.io/), [Mingfang Zhang](https://mf-zhang.github.io/), [Minjie Cai](https://cai-mj.github.io/), [Ming Li](), [Ryosuke Furuta](https://rfuruta.github.io/), [Yoichi Sato](https://sites.google.com/ut-vision.org/ysato/) (*equal contribution)._

### 2024 ECCV

##### • HandDAGT: A Denoising Adaptive Graph Transformer for 3D Hand Pose Estimation. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/12018.pdf)
_Wencan Cheng, Eunji Kim, Jong Hwan Ko_

##### • Dense Hand-Object(HO) GraspNet with Full Grasping Taxonomy and Dynamics. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/10784.pdf)
_Woojin Cho, Jihyun Lee, Minjae Yi, Minje Kim, Taeyun Woo, Donghwan Kim, Taewook Ha, Hyokeun Lee, Je-Hwan Ryu, Woontack Woo, Tae-Kyun (T-K) Kim_

##### • 3D Hand Pose Estimation in Everyday Egocentric Images. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/10034.pdf)
_Aditya Prakash, Ruisen Tu, Matthew Chang, Saurabh Gupta_

##### • 3D Reconstruction of Objects in Hands without Real World 3D Supervision. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/10029.pdf)
_Aditya Prakash, Matthew Chang, Matthew Jin, Ruisen Tu, Saurabh Gupta_

##### • Weakly-Supervised 3D Hand Reconstruction with Knowledge Prior and Uncertainty Guidance. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/10017.pdf)
_Yufei Zhang, Jeffrey Kephart, Qiang Ji_

##### • MLPHand: Real Time Multi-View 3D Hand Reconstruction via MLP Modeling. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09503.pdf)
_Jian Yang, Jiakun Li, Guoming Li, Huaiyu Wu, Zhen Shen, Zhaoxin Fan_

##### • Are Synthetic Data Useful for Egocentric Hand-Object Interaction Detection? [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/08953.pdf)
_Rosario Leonardi, Antonino Furnari, Francesco Ragusa, Giovanni Maria Farinella_

##### • 3D Hand Sequence Recovery from Real Blurry Images and Event Stream. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07674.pdf)
_JoonKyu Park, Gyeongsik Moon, Weipeng Xu, Evan Kaseman, Takaaki Shiratori, Kyoung Mu Lee_

##### • Coarse-to-Fine Implicit Representation Learning for 3D Hand-Object Reconstruction from a Single RGB-D Image. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/06748.pdf)
_Xingyu Liu, Pengfei Ren, Jingyu Wang, Qi Qi, Haifeng Sun, Zirui Zhuang, Jianxin Liao_

##### • HandDGP: Camera-Space Hand Mesh Prediction with Differentiable Global Positioning. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/05563.pdf) [\[Project\]](https://nianticlabs.github.io/handdgp/) [\[Code\]](https://github.com/nianticlabs/HandDGP)
_Eugene Valassakis, Guillermo Garcia-Hernando_

##### • Controlling the World by Sleight of Hand. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04442.pdf)
_Sruthi Sudhakar, Ruoshi Liu, Basile Van Hoorick, Carl Vondrick, Richard Zemel_

##### • Learning Cross-hand Policies of High-DOF Reaching and Grasping. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04377.pdf)
_Qijin She, Shishun Zhang, Yunfan Ye, Ruizhen Hu, Kai Xu_

##### • D-SCo: Dual-Stream Conditional Diffusion for Monocular Hand-Held Object Reconstruction. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04261.pdf)
_Bowen Fu, Gu Wang, Chenyangguang Zhang, Yan Di, Ziqin Huang, Zhiying Leng, Fabian Manhardt, Xiangyang Ji, Federico Tombari_

##### • NL2Contact: Natural Language Guided 3D Hand-Object Contact Modeling with Diffusion Model. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04090.pdf)
_Zhongqun Zhang, Hengfei Wang, Ziwei Yu, Yihua Cheng, Angela Yao, Hyung Jin Chang_

##### • Benchmarks and Challenges in Pose Estimation for Egocentric Hand Interactions with Objects. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03682.pdf)
_Zicong Fan, Takehiko Ohkawa, Linlin Yang, Nie Lin, Zhishan Zhou, Shihao Zhou, Jiajun Liang, Zhong Gao, Xuanyang Zhang, Xue Zhang, Fei Li, Liu Zheng, Feng Lu, Karim Abou Zeid, Bastian Leibe, Jeongwan On, Seungryul Baek, Aditya Prakash, Saurabh Gupta, Kun He, Yoichi Sato, Otmar Hilliges, Hyung Jin Chang, Angela Yao_

##### • On the Utility of 3D Hand Poses for Action Recognition. [\[PDF\]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/01025.pdf)
_Md Salman Shamil, Dibyadip Chatterjee, Fadime Sener, Shugao Ma, Angela Yao_

##### • AttentionHand: Text-driven Controllable Hand Image Generation for 3D Hand Reconstruction in the Wild. [\[PDF\]](https://arxiv.org/abs/2407.18034) [\[Project\]](https://redorangeyellowy.github.io/AttentionHand/) [\[Code\]](https://github.com/redorangeyellowy/AttentionHand) *(Oral)*
_Junho Park, Kyeongbo Kong, Suk-Ju Kang_

[\[back to top\]](#contents)

### 2024 CVPR

##### • Physics-aware Hand-object Interaction Denoising
_Haowen Luo, Yunze Liu, Li Yi_

##### • HOIDiffusion: Generating Realistic 3D Hand-Object Interaction Data
_Mengqi Zhang, Yang Fu, Zheng Ding, Sifei Liu, Zhuowen Tu, Xiaolong Wang_

##### • URHand: Universal Relightable Hands. [\[PDF\]](https://arxiv.org/pdf/2401.05334)
_Zhaoxi Chen, Gyeongsik Moon, Kaiwen Guo, Chen Cao, Stanislav Pidhorskyi, Tomas Simon, Rohan Joshi, Yuan Dong, Yichen Xu, Bernardo Pires, He Wen, Lucas Evans, Bo Peng, Julia Buffalini, Autumn Trimble, Kevyn McPhail, Melissa Schoeller, Shoou-I Yu, Javier Romero, Michael Zollhöfer, Yaser Sheikh, Ziwei Liu, Shunsuke Saito_

##### • OakInk2: A Dataset of Embodied Hands-Object Manipulation in Long-Horizon Complex Task Completion
_Xinyu Zhan, Lixin Yang, Yifei Zhao, Kangrui Mao, Hanlin Xu, Zenan Lin, Kailin Li, Cewu Lu_

##### • InterHandGen: Two-Hand Interaction Generation via Cascaded Reverse Diffusion
_Jihyun Lee, Shunsuke Saito, Giljoo Nam, Minhyuk Sung, Tae-Kyun (T-K) Kim_

##### • MOHO: Learning Single-view Hand-held Object Reconstruction with Multi-view Occlusion-Aware Supervision. [\[PDF\]](https://arxiv.org/pdf/2310.11696)
_Chenyangguang Zhang, Guanlong Jiao, Yan Di, Ziqin Huang, Gu Wang, Ruida Zhang, Bowen Fu, Federico Tombari, Xiangyang Ji_

##### • OHTA: One-shot Hand Avatar via Data-driven Implicit Priors. [\[PDF\]](https://arxiv.org/pdf/2402.18969)
_Xiaozheng Zheng, Chao Wen, Zhuo Su, Zeran Xu, Zhaohu Li, Yang Zhao, Zhou Xue_

##### • HandBooster: Boosting 3D Hand-Mesh Reconstruction by Conditional Synthesis and Sampling of Hand-Object Interactions. 
_Hao Xu, Haipeng Li, Yinqiao Wang, Shuaicheng Liu, Chi-Wing Fu_

##### • HandDiff: 3D Hand Pose Estimation with Diffusion on Image-Point Cloud.
_Wencan Cheng, Hao Tang, Luc Van Gool, Jong Hwan Ko_ 

##### • Text2HOI: Text-guided 3D Motion Generation for Hand-Object Interaction.
_Junuk Cha, Jihyeon Kim, Jae Shin Yoon, Seungryul Baek_

##### • BOTH2Hands: Inferring 3D Hands from Both Text Prompts and Body Dynamics. [\[PDF\]](https://arxiv.org/pdf/2312.07937)
_Wenqian Zhang, Molin Huang, Yuxuan Zhou, Juze Zhang, Jingyi Yu, Jingya Wang, Lan Xu_

##### • GEARS: Local Geometry-aware Hand-object Interaction Synthesis.
_Keyang Zhou, Bharat Bhatnagar, Jan Eric Lenssen, Gerard Pons-Moll_

##### • A Simple Baseline for Efficient Hand Mesh Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2403.01813)
_Zhishan Zhou, Shihao.zhou, Zhi Lv, Minqiang Zou, Yao Tang, Jiajun Liang_

##### • HOLD: Category-agnostic 3D Reconstruction of Interacting Hands and Objects from Video. [\[PDF\]](https://arxiv.org/pdf/2311.18448) [\[Code\]](https://github.com/zc-alexfan/hold) 
_Zicong Fan, Maria Parelli, Maria Eleni Kadoglou, Muhammed Kocabas, Xu Chen, Michael J. Black, Otmar Hilliges_

##### • MS-MANO: Enabling Hand Pose Tracking with Biomechanical Constraints.
_Pengfei Xie, Wenqiang Xu, Tutian Tang, Zhenjun Yu, Cewu Lu_

##### • HOIST-Former: Hand-held Objects Identification, Segmentation, and Tracking in the Wild.
_Supreeth Narasimhaswamy, Huy Nguyen, Lihan Huang, Minh Hoai_

##### • BiTT: Bi-directional Texture Reconstruction of Interacting Two Hands from a Single Image.
_Minje Kim, Tae-Kyun Kim_

##### • Authentic Hand Avatar from a Phone Scan via Universal Hand Model.
_Gyeongsik Moon, Weipeng Xu, Rohan Joshi, Chenglei Wu, Takaaki Shiratori_

##### • Reconstructing Hands in 3D with Transformers. [\[PDF\]](https://arxiv.org/pdf/2312.05251)
_Georgios Pavlakos, Dandan Shan, Ilija Radosavovic, Angjoo Kanazawa, David Fouhey, Jitendra Malik_

##### • Complementing Event Streams and RGB Frames for Hand Mesh Reconstruction.
_Jianping Jiang, Xinyu Zhou, Bingxuan Wang, Xiaoming Deng, Chao Xu, Boxin Shi_

##### • Single-to-Dual-View Adaptation for Egocentric 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2403.04381)
_Ruicong Liu, Takehiko Ohkawa, Mingfang Zhang, Yoichi Sato_

##### • HOISDF: Constraining 3D Hand Object Pose Estimation with Global Signed Distance Fields. [\[PDF\]](https://arxiv.org/pdf/2402.17062)
_Haozhe Qi, Chen Zhao, Mathieu Salzmann, Alexander Mathis_

##### • G-HOP: Generative Hand-Object Prior for Interaction Reconstruction and Grasp Synthesis.
_Yufei Ye, Abhinav Gupta, Kris Kitani, Shubham Tulsiani_

##### • HHMR: Holistic Hand Mesh Recovery by Enhancing the Multimodal Controllability of Graph Diffusion Models.
_Mengcheng Li, Hongwen Zhang, Yuxiang Zhang, Ruizhi Shao, Tao Yu, Yebin Liu_

[\[back to top\]](#contents)

### 2024 Others

##### • [2024 NeurIPS] Hamba: Single-view 3D Hand Reconstruction with Graph-guided Bi-Scanning Mamba [\[PDF\]](https://arxiv.org/pdf/2407.09646) [\[Project\]](https://humansensinglab.github.io/Hamba/) [\[Code\]](https://github.com/humansensinglab/Hamba)

_Haoye Dong*, Aviral Chharia*, Wenbo Gou*, Francisco Vicente Carrasco, Fernando De la Torre_

[\[back to top\]](#contents)

## Conference Papers

### 2023 CVPR

##### • A Probabilistic Attention Model with Occlusion-aware Texture Regression for 3D Hand Reconstruction from a Single RGB Image

_Zheheng Jiang, Hossein Rahmani, Sue Black, Bryan M. Williams_

##### • A2J-Transformer: Anchor-to-Joint Transformer Network for 3D Interacting Hand Pose Estimation from a Single RGB Image. [\[PDF\]](https://arxiv.org/pdf/2304.03635.pdf)  [\[Code\]](https://github.com/ChanglongJiangGit/A2J-Transformer)

_Changlong Jiang, Yang Xiao, Cunlin Wu, Mingyang Zhang, Jinghong Zheng, Zhiguo Cao, Joey Tianyi Zhou_

##### • MeMaHand: Exploiting Mesh-Mano Interaction for Single Image Two-Hand Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2303.15718.pdf)

_Congyi Wang, Feida Zhu, Shilei Wen_

##### • ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation. [\[Project\]](https://arctic.is.tue.mpg.de/)

_Zicong Fan, Omid Taheri, Dimitrios Tzionas, Muhammed Kocabas, Manuel Kaufmann, Michael J. Black, Otmar Hilliges_

##### • AssemblyHands: Towards Egocentric Activity Understanding via 3D Hand Pose Estimation. [\[Project\]](https://assemblyhands.github.io/)

_Takehiko Ohkawa, Kun He, Fadime Sener, Tomas Hodan, Luan Tran, and Cem Keskin_

##### • High Fidelity 3D Hand Shape Reconstruction via Scalable Graph Frequency Decomposition.

_Tianyu Luan, Yuanhao Zhai, Jingjing Meng, Zhong Li, Zhang Chen, Yi Xu, and Junsong Yuan._

##### • HandNeRF: Neural Radiance Fields for Animatable Interacting Hands. [\[PDF\]](https://arxiv.org/pdf/2303.13825.pdf)

_Zhiyang Guo, Wengang Zhou, Min Wang, Li Li, Houqiang Li_

##### • POEM: Reconstructing Hand in a Point Embedded Multi-view Stereo. [\[PDF\]](https://arxiv.org/pdf/2304.04038.pdf) [\[Code\]](https://github.com/lixiny/POEM)

_Lixin Yang, Jian Xu, Licheng Zhong, Xinyu Zhan, Zhicheng Wang, Kejian Wu, Cewu Lu_

##### • HARP: Personalized Hand Reconstruction from a Monocular RGB Video. [\[PDF\]](https://arxiv.org/pdf/2212.09530.pdf) [\[Project\]](https://korrawe.github.io/harp-project/)

_Korrawe Karunratanakul, Sergey Prokudin, Otmar Hilliges, Siyu Tang_

##### • RelightableHands: Efficient Neural Relighting of Articulated Hand Models. [\[PDF\]](https://arxiv.org/pdf/2303.04866.pdf) [\[Project\]](https://sh8.io/#/relightable_hands)

_Shun Iwase, Shunsuke Saito, Tomas Simon, Stephen Lombardi, Timur Bagautdinov, Rohan Joshi, Fabian Prada, Takaaki Shiratori, Yaser Sheikh, Jason Saragih_

##### • H2ONet: Hand-Occlusion-and-Orientation-aware Network for Real-time 3D Hand Mesh Reconstruction.

_Hao Xu, Tianyu Wang, Xiao Tang, Chi-Wing Fu_

##### • Affordance Diffusion: Synthesizing Hand-Object Interactions. [\[PDF\]](https://arxiv.org/pdf/2303.12538.pdf) [\[Project\]](https://judyye.github.io/affordiffusion-www/)

_Yufei Ye, Xueting Li, Abhinav Gupta, Shalini De Mello, Stan Birchfield, Jiaming Song, Shubham Tulsiani, Sifei Liu_

##### • gSDF: Geometry-Driven Signed Distance Functions for 3D Hand-Object Reconstruction. [\[PDF\]](https://zerchen.github.io/contents/CVPR_gSDF_Paper.pdf) [\[Project\]](https://zerchen.github.io/projects/gsdf.html)

_Zerui Chen, Shizhe Chen, Cordelia Schmid, Ivan Laptev_

##### • Harmonious Feature Learning for Interactive Hand-Object Pose Estimation.

_Zhifeng Lin, Changxing Ding, Huan Yao, Zengsheng Kuang, Shaoli Huang_

##### • Handy: Towards a high fidelity 3D hand shape and appearance model.

_Rolandos Potamias Potamias, Stylianos Ploumpis, Stylianos Moschoglou, Vasileios Triantafyllou, Stefanos Zafeiriou_

##### • Hand Avatar: Free-Pose Hand Animation and Rendering from Monocular Video. [\[PDF\]](https://arxiv.org/pdf/2211.12782.pdf) [\[Project\]](https://seanchenxy.github.io/HandAvatarWeb/)

_Xingyu Chen, Baoyuan Wang Heung-Yeung, Shum_

##### • Cross-domain 3D Hand Pose Estimation with Dual Modalities. \[PDF\]

_Qiuxia Lin, Linlin Yang, Angela Yao_

##### • Overcoming the Tradeoff in Accuracy and Plausibility for 3D Hand Shape Reconstruction. \[PDF\]

_Ziwei Yu, Chen Li, Linlin Yang, Xiaoxu Zheng, Michael Bi Mi, Gim Hee Lee, Angela Yao_

##### • Hierarchical Temporal Transformer for 3D Hand Pose Estimation and Action Recognition from Egocentric RGB Videos. [\[PDF\]](https://arxiv.org/pdf/2209.09484)  [\[Project\]](https://fylwen.github.io/htt.html) [\[Code\]](https://github.com/fylwen/HTT)

_Yilin Wen, Hao Pan, Lei Yang, Jia Pan, Taku Komura, Wenping Wang_

##### • Im2Hands: Learning Attentive Implicit Representation of Interacting Two-Hand Shapes. [\[PDF\]](https://arxiv.org/pdf/2302.14348)  [\[Project\]](https://jyunlee.github.io/projects/implicit-two-hands/) [\[Code\]](https://github.com/jyunlee/Im2Hands)

_Jihyun Lee, Minhyuk Sung, Honggyu Choi, Tae-Kyun Kim_

##### • Neural Voting Field for Camera-Space 3D Hand Pose Estimation. \[PDF\]

_Lin Huang, Chung-Ching Lin, Kevin Lin, Lin Liang, Lijuan Wang, Junsong Yuan, Zicheng Liu_

##### • Bringing Inputs to Shared Domains for 3D Interacting Hands Recovery in the Wild. \[PDF\]

_Gyeongsik Moon_

##### • Recovering 3D Hand Mesh Sequence from a Single Blurry Image: A New Dataset and Temporal Unfolding. \[PDF\]

_JoonKyu Park*, Yeonguk Oh*, Jaeha Kim*, Gyeongsik Moon, Kyoung Mu Lee_

##### • Semi-supervised Hand Appearance Recovery via Structure Disentanglement and Dual Adversarial Discrimination. \[PDF\]

_Zimeng Zhao, Binghui Zuo, Zhiyu Long and Yangang Wang_

##### • Transformer-based Unified Recognition of Two Hands Manipulating Objects. \[PDF\]

_Hoseong Cho, Chanwoo Kim, Jihyeon Kim, Seongyeong Lee, Elkhan Ismayilzada, Seungryul Baek_

##### • ACR: Attention Collaboration-based Regressor for Arbitrary Two-Hand Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2303.05938)  [\[Project\]](https://zhengdiyu.github.io/ACR-page/) [\[Code\]](https://github.com/ZhengdiYu/Arbitrary-Hands-3D-Reconstruction)

_Zhengdi Yu, Shaoli Huang, Chen Fang, Toby P. Breckon, Jue Wang_

[\[back to top\]](#contents)


### 2023 ICCV

##### • Novel-view Synthesis and Pose Estimation for Hand-Object Interaction from Sparse Views. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Qu_Novel-View_Synthesis_and_Pose_Estimation_for_Hand-Object_Interaction_from_Sparse_ICCV_2023_paper.pdf) [Project\]](https://iscas3dv.github.io/HO-NeRF/index.html) [\[Code\]](https://github.com/iscas3dv/HO-NeRF) [\[Data\]](https://pan.baidu.com/s/1t7oRCtJe0qBYazbC7CZoiA?pwd=8rc4)
_Wentian  Qu, Zhaopeng Cui, Yinda Zhang, Chenyu Meng, Cuixia Ma, Xiaoming Deng, Hongan Wang_

##### • ContactGen: Generative Contact Modeling for Grasp Generation [\[PDF\]](https://arxiv.org/pdf/2310.03740.pdf) [\[Project\]](https://stevenlsw.github.io/contactgen/) [\[Code\]](https://github.com/stevenlsw/contactgen)
_Shaowei Liu, Yang Zhou, Jimei Yang, Saurabh Gupta, Shenlong Wang_

##### • Diffusion-Guided Reconstruction of Everyday Hand-Object Interaction Clips. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Ye_Diffusion-Guided_Reconstruction_of_Everyday_Hand-Object_Interaction_Clips_ICCV_2023_paper.pdf)
_Yufei Ye, Poorvi Hebbar, Abhinav Gupta, Shubham Tulsiani_

##### • HandR2N2: Iterative 3D Hand Pose Estimation Using a Residual Recurrent Neural Network. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Cheng_HandR2N2_Iterative_3D_Hand_Pose_Estimation_Using_a_Residual_Recurrent_ICCV_2023_paper.pdf)
_Wencan Cheng, Jong Hwan Ko_

##### • HaMuCo: Hand Pose Estimation via Multiview Collaborative Self-Supervised Learning. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Zheng_HaMuCo_Hand_Pose_Estimation_via_Multiview_Collaborative_Self-Supervised_Learning_ICCV_2023_paper.pdf) [\[Project\]](https://zxz267.github.io/HaMuCo/) [\[Code\]](https://github.com/zxz267/HaMuCo)
_Xiaozheng Zheng, Chao Wen, Zhou Xue, Pengfei Ren, Jingyu Wang_

##### • Deformer: Dynamic Fusion Transformer for Robust Hand Pose Estimation. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Fu_Deformer_Dynamic_Fusion_Transformer_for_Robust_Hand_Pose_Estimation_ICCV_2023_paper.pdf)
_Qichen Fu, Xingyu Liu, Ran Xu, Juan Carlos Niebles, Kris M. Kitani_

##### • PHRIT: Parametric Hand Representation with Implicit Template. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Huang_PHRIT_Parametric_Hand_Representation_with_Implicit_Template_ICCV_2023_paper.pdf)
_Zhisheng Huang, Yujin Chen, Di Kang, Jinlu Zhang, Zhigang Tu_

##### • CHORD: Category-level Hand-held Object Reconstruction via Shape Deformation. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Li_CHORD_Category-level_Hand-held_Object_Reconstruction_via_Shape_Deformation_ICCV_2023_paper.pdf)
_Kailin Li, Lixin Yang, Haoyu Zhen, Zenan Lin, Xinyu Zhan, Licheng Zhong, Jian Xu, Kejian Wu, Cewu Lu_

##### • Uncertainty-aware State Space Transformer for Egocentric 3D Hand Trajectory Forecasting. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Bao_Uncertainty-aware_State_Space_Transformer_for_Egocentric_3D_Hand_Trajectory_Forecasting_ICCV_2023_paper.pdf)
_Wentao Bao, Lele Chen, Libing Zeng, Zhong Li, Yi Xu, Junsong Yuan, Yu Kong_

##### • Spectral Graphormer: Spectral Graph-Based Transformer for Egocentric Two-Hand Reconstruction using Multi-View Color Images. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Tse_Spectral_Graphormer_Spectral_Graph-Based_Transformer_for_Egocentric_Two-Hand_Reconstruction_using_ICCV_2023_paper.pdf) [\[Project\]](https://eldentse.github.io/Spectral-Graphormer/) [\[Code\]](https://github.com/google-research/google-research/tree/master/spectral_graphormer)
_Tze Ho Elden Tse, Franziska Mueller, Zhengyang Shen, Danhang Tang, Thabo Beeler, Mingsong Dou, Yinda Zhang, Sasa Petrovic, Hyung Jin Chang, Jonathan Taylor, Bardia Doosti_

##### • Reconstructing Interacting Hands with Interaction Prior from Monocular Images. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Zuo_Reconstructing_Interacting_Hands_with_Interaction_Prior_from_Monocular_Images_ICCV_2023_paper.pdf)
_Binghui Zuo, Zimeng Zhao, Wenqian Sun, Wei Xie, Zhou Xue, Yangang Wang_

##### • OCHID-Fi: Occlusion-Robust Hand Pose Estimation in 3D via RF-Vision. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Zhang_OCHID-Fi_Occlusion-Robust_Hand_Pose_Estimation_in_3D_via_RF-Vision_ICCV_2023_paper.pdf)
_Shujie Zhang, Tianyue Zheng, Zhe Chen, Jingzhi Hu, Abdelwahed Khamis, Jiajun Liu, Jun Luo_

##### • Dynamic Hyperbolic Attention Network for Fine Hand-object Reconstruction. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Leng_Dynamic_Hyperbolic_Attention_Network_for_Fine_Hand-object_Reconstruction_ICCV_2023_paper.pdf)
_Zhiying Leng, Shun-Cheng Wu, Mahdi Saleh, Antonio Montanaro, Hao Yu, Yin Wang, Nassir Navab, Xiaohui Liang, Federico Tombari_

##### • Decoupled Iterative Refinement Framework for Interacting Hands Reconstruction from a Single RGB Image. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Ren_Decoupled_Iterative_Refinement_Framework_for_Interacting_Hands_Reconstruction_from_a_ICCV_2023_paper.pdf) [\[Project\]](https://pengfeiren96.github.io/DIR/) [\[Code\]](https://github.com/PengfeiRen96/DIR)
_Pengfei Ren, Chao Wen, Xiaozheng Zheng, Zhou Xue, Haifeng Sun, Qi Qi, Jingyu Wang, Jianxin Liao_

##### • AffordPose: A Large-Scale Dataset of Hand-Object Interactions with Affordance-Driven Hand Pose. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Jian_AffordPose_A_Large-Scale_Dataset_of_Hand-Object_Interactions_with_Affordance-Driven_Hand_ICCV_2023_paper.pdf)
_Juntao Jian, Xiuping Liu, Manyi Li, Ruizhen Hu, Jian Liu_

##### • EgoPCA: A New Framework for Egocentric Hand-Object Interaction Understanding. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Xu_EgoPCA_A_New_Framework_for_Egocentric_Hand-Object_Interaction_Understanding_ICCV_2023_paper.pdf)
_Yue Xu, Yong-Lu Li, Zhemin Huang, Michael Xu Liu, Cewu Lu, Yu-Wing Tai, Chi-Keung Tang_

##### • RenderIH: A Large-scale Synthetic Dataset for 3D Interacting Hand Pose Estimation [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Li_RenderIH_A_Large-Scale_Synthetic_Dataset_for_3D_Interacting_Hand_Pose_ICCV_2023_paper.pdf) [\[Project\]](https://github.com/adwardlee/RenderIH/tree/main) [\[Code\]](https://github.com/adwardlee/RenderIH/tree/main)

_Lijun Li, Linrui Tian, Xindi Zhang, Qi Wang, Bang Zhang, Liefeng Bo, Mengyuan Liu, Chen Chen_

##### • Source-free Domain Adaptive Human Pose Estimation [\[PDF\]](https://arxiv.org/abs/2308.03202) [\[Project\]](https://github.com/davidpengucf/SFDAHPE) [\[Code\]](https://github.com/davidpengucf/SFDAHPE)

_Qucheng Peng, Ce Zheng, Chen Chen_

##### • LiveHand: Real-time and Photorealistic Neural Hand Rendering [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2023/papers/Mundra_LiveHand_Real-time_and_Photorealistic_Neural_Hand_Rendering_ICCV_2023_paper.pdf) [\[Project\]](https://vcai.mpi-inf.mpg.de/projects/LiveHand/) [\[Code\]](https://github.com/amundra15/livehand)

_Akshay Mundra, Mallikarjun B R, Jiayi Wang, Marc Habermann, Christian Theobalt, Mohamed Elgharib_

[\[back to top\]](#contents)


### 2023 Others

##### • [2023 NeurIPS] FourierHandFlow: Neural 4D Hand Representation Using Fourier Query Flow. [\[PDF\]](https://arxiv.org/pdf/2307.08100.pdf)  [\[Project\]](https://jyunlee.github.io/projects/fourier-hand-flow/)
_Jihyun Lee, Junbong Jang, Donghwan Kim, Minhyuk Sung, Tae-Kyun (T-K) Kim_

##### • [2023 ICCVW] SHOWMe: Benchmarking Object-agnostic Hand-Object 3D Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2309.10748.pdf)  [\[Project\]](https://europe.naverlabs.com/research/showme) [\[Code\]](https://github.com/naver/showme/tree/main) [\[Data\]](https://download.europe.naverlabs.com/showme/)
_Anilkumar Swamy, Vincent Leroy, Philippe Weinzaepfel, Fabien Baradel, Salma Galaaoui, Romain Bregier, Matthieu Armando, Jean-Sebastien Franco, Gregory Rogez_

##### • [2023 AAAI] Two Heads are Better than One: Image-Point Cloud Network for Depth-Based 3D Hand Pose Estimation. [\[PDF\]]  *(AAAI-23 Distinguished Papers)*

_Pengfei Ren, Yuchen Chen, Jiachang Hao, Haifeng Sun, Qi Qi, Jingyu Wang, Jianxin Liao_

##### • [2023 AAAI] Tracking and Reconstructing Hand Object Interactions from Point Cloud Sequences in the Wild. [\[PDF\]](https://arxiv.org/pdf/2209.12009)

_Jiayi Chen, Mi Yan, Jiazhao Zhang, Yinzhen Xu, Xiaolong Li, Yijia Weng, Li Yi, Shuran Song, He Wang_

##### • [2023 WACV] THOR-Net: End-to-End Graformer-Based Realistic Two Hands and Object Reconstruction With Self-Supervision. [\[PDF\]](https://openaccess.thecvf.com/content/WACV2023/papers/Aboukhadra_THOR-Net_End-to-End_Graformer-Based_Realistic_Two_Hands_and_Object_Reconstruction_With_WACV_2023_paper.pdf) [\[Code\]](https://github.com/ATAboukhadra/THOR-Net)

_Ahmed Tawfik Aboukhadra, Jameel Malik, Ahmed Elhayek, Nadia Robertini, Didier Stricker_

[\[back to top\]](#contents)


### 2022 ECCV

##### • Identity-aware Hand Mesh Estimation and Personalization from RGB Images    . [\[PDF\]] [\[Code\]](https://github.com/deyingk/PersonalizedHandMeshEstimation)

_Deying Kong, Linguang Zhang, Liangjian Chen, Haoyu Ma, Xiangyi Yan, Shanlin Sun, Xingwei Liu, Kun Han, Xiaohui Xie_

##### • AlignSDF: Pose-Aligned Signed Distance Fields for Hand-Object Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2207.12909.pdf) [\[Project\]](https://zerchen.github.io/projects/alignsdf.html) [\[Code\]](https://github.com/zerchen/alignsdf)

_Zerui Chen, Yana Hasson, Cordelia Schmid, Ivan Laptev_

##### • S<sup>2</sup>Contact: Graph-based Network for 3D Hand-Object Contact Estimation with Semi-Supervised Learning. [\[PDF\]](https://arxiv.org/pdf/2208.00874.pdf) [\[Project\]](https://eldentse.github.io/s2contact/)  [\[Code\]](https://github.com/eldentse/s2contact)

_Tze Ho Elden Tse, Zhongqun Zhang, Kwang In Kim, Ales Leonardis, Feng Zheng, Hyung Jin Chang_

##### • Domain Adaptive Hand Keypoint and Pixel Localization in the Wild. [\[PDF\]](https://arxiv.org/pdf/2203.08344.pdf) [\[Project\]](https://tkhkaeio.github.io/projects/22-hand-ps-da/)

_Takehiko Ohkawa, Yu-Jhe Li, Qichen Fu, Ryosuke Furuta, Kris M. Kitani, and Yoichi Sato_

##### • 3D Interacting Hand Pose Estimation by Hand De-occlusion and Removal. [\[PDF\]](https://arxiv.org/abs/2207.11061) [\[Project\]](https://menghao666.github.io/HDR/)[\[Dataset\]](https://connecthkuhk-my.sharepoint.com/personal/js20_connect_hku_hk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjs20%5Fconnect%5Fhku%5Fhk%2FDocuments%2FAIH%5Fdataset&ga=1)

Hao Meng, Sheng Jin, Wentao Liu, Chen Qian, Mengxiang Lin, Wanli Ouyang, Ping Luo

##### • Cross-Attention of Disentangled Modalities for 3D Human Mesh Recovery with Transformers. [\[PDF\]](https://arxiv.org/abs/2207.13820) [\[Project\]](https://fastmetro.github.io/) [\[Code\]](https://github.com/postech-ami/FastMETRO)

_Junhyeong Cho, Kim Youwang, Tae-Hyun Oh_

[\[back to top\]](#contents)


### 2022 CVPR

##### • What's in your hands? 3D Reconstruction of Generic Objects in Hands. [\[PDF\]](https://arxiv.org/pdf/2204.07153.pdf) [\[Project\]](https://judyye.github.io/ihoi/) [\[Code\]](https://github.com/JudyYe/ihoi)

_Yufei Ye, Abhinav Gupta, Shubham Tulsiani_

##### • Mining Multi-View Information: A Strong Self-Supervised Framework for Depth-based 3D Hand Pose and Mesh Estimation. [\[PDF\]](https://openaccess.thecvf.com/content/CVPR2022/papers/Ren_Mining_Multi-View_Information_A_Strong_Self-Supervised_Framework_for_Depth-Based_3D_CVPR_2022_paper.pdf) \[Code\]

_Pengfei Ren, Haifeng Sun, Jiachang Hao, Jingyu Wang, Qi Qi,Jianxin Liao_

##### • HandOccNet: Occlusion-Robust 3D Hand Mesh Estimation Network. [\[PDF\]](https://arxiv.org/pdf/2203.14564) [\[Code\]](https://github.com/namepllet/HandOccNet)

_JoonKyu Park, Yeonguk Oh, Gyeongsik Moon, Hongsuk Choi, Kyoung Mu Lee_

##### • Keypoint Transformer: Solving Joint Identification in Challenging Hands and Object Interactions for Accurate 3D Pose Estimation. \[PDF\]

_Shreyas Hampali, Sayan Deb Sarkar, Mahdi Rad, Vincent Lepetit_

##### • Collaborative Learning for Hand and Object Reconstruction with Attention-guided Graph Convolution. [\[PDF\]](https://openaccess.thecvf.com/content/CVPR2022/papers/Tse_Collaborative_Learning_for_Hand_and_Object_Reconstruction_With_Attention-Guided_Graph_CVPR_2022_paper.pdf) [\[Project\]](https://eldentse.github.io/collab-hand-object/)

_Tze Ho Elden Tse, Kwang In Kim, Ales Leonardis, and Hyung Jin Chang_

##### • Spatial-Temporal Parallel Transformer for Arm-Hand Dynamic Estimation. [\[PDF\]](https://arxiv.org/pdf/2203.16202.pdf)

_Shuying Liu, Wenbin Wu, Jiaxian Wu, Yue Lin_

##### • D-Grasp: Physically Plausible Dynamic Grasp Synthesis for Hand-Object Interactions. [\[PDF\]](https://arxiv.org/pdf/2112.03028.pdf) [\[Project\]](https://eth-ait.github.io/d-grasp/)

_Sammy Christen, Muhammed Kocabas, Emre Aksan, Jemin Hwangbo, Jie Song, Otmar Hilliges_

##### • GOAL: Generating 4D Whole-Body Motion for Hand-Object Grasping. [\[PDF\]](https://arxiv.org/pdf/2112.11454.pdf) [\[Project\]](https://goal.is.tuebingen.mpg.de/)

_Omid Taheri, Vasileios Choutas, Michael J. Black, Dimitrios Tzionas_

##### • OakInk: A Large-scale Knowledge Repository for Understanding Hand-Object Interaction. [\[PDF\]](https://arxiv.org/pdf/2203.15709) [\[Code\]](https://github.com/lixiny/OakInk)

_Lixin Yang, Kailin Li Xinyu Zhan, Fei Wu, Anran Xu, Liu Liu, Cewu Lu_

##### • ArtiBoost: Boosting Articulated 3D Hand-Object Pose Estimation via Online Exploration and Synthesis. [\[PDF\]](https://arxiv.org/pdf/2109.05488) [\[Code\]](https://github.com/MVIG-SJTU/ArtiBoost)

_Kailin Li, Lixin Yang, Xinyu Zhan, Jun Lv, Wenqiang Xu, Jiefeng Li, Cewu Lu_

##### • Interacting Attention Graph for Single Image Two-Hand Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2203.09364)  [\[Project\]](http://www.liuyebin.com/IntagHand/Intaghand.html)  [\[Code\]](https://github.com/Dw1010/IntagHand)

_Mengcheng Li，Liang An, Hongwen Zhang, Lianpeng Wu, Feng Chen, Tao Yu, Yebin Liu_

##### • MobRecon: Mobile-Friendly Hand Mesh Reconstruction from Monocular Image.  [\[PDF\]](https://arxiv.org/pdf/2112.02753) [\[Code\]](https://github.com/SeanChenxy/HandMesh)

_Xingyu Chen, Yufeng Liu, Yajiao Dong, Xiong Zhang, Chongyang Ma, Yanmin Xiong, Yuan Zhang, Xiaoyan Guo_

##### • LISA: Learning Implicit Shape and Appearance of Hands.  [\[PDF\]](https://arxiv.org/pdf/2204.01695) [\[Project\]](http://www.iri.upc.edu/people/ecorona/lisa/)

_Enric Corona, Tomas Hodan, Minh Vo, Francesc Moreno-Noguer, Chris Sweeney, Richard Newcombe, Lingni Ma_

### 2022 Others

##### • [2022 AAAI] Efficient Virtual View Selection for 3D Hand Pose Estimation. [\[PDF\]](https://me495.github.io/handpose-virtualview/resources/paper.pdf) [\[Project\]](https://me495.github.io/handpose-virtualview/) [\[Code\]](https://github.com/iscas3dv/handpose-virtualview)

_Jian Cheng, Yanguang Wan, Dexin Zuo, Cuixia Ma, Jian Gu, Ping Tan, Hongan Wang, Xiaoming Deng, Yinda Zhang_

[\[back to top\]](#contents)


### 2021 ICCV

##### • Toward Human-Like Grasp: Dexterous Grasping via Semantic Representation of Object-Hand. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2021/papers/Zhu_Toward_Human-Like_Grasp_Dexterous_Grasping_via_Semantic_Representation_of_Object-Hand_ICCV_2021_paper.pdf)

_Tianqiang Zhu, Rina Wu, Xiangbo Lin, Yi Sun_

##### • Self-Supervised Transfer Learning for Hand Mesh Recovery From Binocular Images. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2021/papers/Chen_Self-Supervised_Transfer_Learning_for_Hand_Mesh_Recovery_From_Binocular_Images_ICCV_2021_paper.pdf)

_Zheng Chen, Sihan Wang, Yi Sun, Xiaohong Ma_

##### • Self-Supervised 3D Hand Pose Estimation from monocular RGB via Contrastive Learning. [\[PDF\]](https://arxiv.org/pdf/2106.05953) [\[Code\]](https://github.com/dahiyaaneesh/peclr) (Oral)

_Adrian Spurr, Aneesh Dahiya, Xucong Zhang, Xi Wang, Otmar Hilliges_

##### • Towards Accurate Alignment in Real-time 3D Hand-Mesh Reconstruction. [\[PDF\]](https://arxiv.org/pdf/2109.01723.pdf)  [\[Code\]](https://github.com/wbstx/handAR)

_Xiao Tang, Tianyu Wang, Chi-Wing Fu_

##### • EventHands: Real-Time Neural 3D Hand Reconstruction from an Event Stream. [\[PDF\]](https://arxiv.org/pdf/2012.06475.pdf)  [\[Project\]](https://gvv.mpi-inf.mpg.de/projects/EventHands/)

_Viktor Rudnev, Vladislav Golyanik, Jiayi Wang, Hans-Peter Seidel, Franziska Mueller, Mohamed Elgharib, Christian Theobalt_

##### • Reconstructing Hand-Object Interactions in the Wild. [\[PDF\]](https://arxiv.org/pdf/2012.09856.pdf)  [\[Project\]](https://people.eecs.berkeley.edu/~zhecao/rhoi/)

_Zhe Cao*, Ilija Radosavovic*, Angjoo Kanazawa, Jitendra Malik_

##### • HandFoldingNet: A 3D Hand Pose Estimation Network Using Multiscale-Feature Guided Folding of a 2D Hand Skeleton. [\[PDF\]](https://arxiv.org/pdf/2108.05545) [\[Code\]](https://github.com/cwc1260/HandFold)

_Wencan Cheng, Jae Hyun Park, Jong Hwan Ko_

##### • H2O: Two Hands Manipulating Objects for First Person Interaction Recognition. [\[PDF\]](https://arxiv.org/pdf/2104.11181)  [\[Project\]](https://www.taeinkwon.com/projects/h2o)  [\[Code\]](https://github.com/taeinkwon/h2odataset)

_Taein Kwon, Bugra Tekin, Jan Stuhmer, Federica Bogo, Marc Pollefeys_

##### • I2UV-HandNet: Image-to-UV Prediction Network for Accurate and High-fidelity 3D Hand Mesh Modeling. [\[PDF\]](https://arxiv.org/pdf/2102.03725)

_Ping Chen, Yujin Chen, Dong Yang, Fangyin Wu, Qin Li, Qingpei Xia, Yong Tan_

##### • SemiHand: Semi-supervised Hand Pose Estimation with Consistency. [\[PDF\]](https://www.mu4yang.com/files/project/semihand/semihand.pdf)

_Linlin Yang, Shicheng Chen, Angela Yao_

##### • End-to-End Detection and Pose Estimation of Two Interacting Hands. [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2021/papers/Kim_End-to-End_Detection_and_Pose_Estimation_of_Two_Interacting_Hands_ICCV_2021_paper.pdf)

_Donguk Kim, Kwang In Kim, Seungryul Baek_

##### • Hand-Object Contact Consistency Reasoning for Human Grasps Generation. [\[PDF\]](https://arxiv.org/pdf/2104.03304) [\[Project\]](https://hwjiang1510.github.io/GraspTTA/) *(Oral)*

_Hanwen Jiang, Shaowei Liu, Jiashun Wang, Xiaolong Wang_

##### • Hand Image Understanding via Deep Multi-Task Learning. [\[PDF\]](https://arxiv.org/pdf/2107.11646) [\[Code\]](https://github.com/MandyMo/HIU-DMTL)

_Xiong Zhang, Hongsheng Huang, Jianchao Tan, Hongmin Xu, Cheng Yang, Guozhu Peng, Lei Wang, Ji Liu_

##### • CPF: Learning a Contact Potential Field to Model the Hand-object Interaction. [\[PDF\]](https://arxiv.org/pdf/2012.00924.pdf)  [\[Code\]](https://github.com/lixiny/CPF)

_Lixin Yang, Xinyu Zhan, Kailin Li, Wenqiang Xu, Jiefeng Li, Cewu Lu_

##### • TravelNet: Self-supervised Physically Plausible Hand Motion Learning from Monocular Color Images.  [\[PDF\]](https://www.yangangwang.com/papers/ZHAO-TRAVEL-2021-08.pdf)

_Zimeng Zhao, Xi Zhao and Yangang Wang_

##### • Interacting Two-Hand 3D Pose and Shape Reconstruction from Single Color Image.  [\[PDF\]](https://openaccess.thecvf.com/content/ICCV2021/papers/Zhang_Interacting_Two-Hand_3D_Pose_and_Shape_Reconstruction_From_Single_Color_ICCV_2021_paper.pdf) [\[Project\]](https://baowenz.github.io/Intershape/) [\[Code\]](https://github.com/BaowenZ/Two-Hand-Shape-Pose)

_Baowen Zhang, Yangang Wang, Xiaoming Deng, Yinda Zhang, Ping Tan, Cuixia Ma and Hongan Wang_

##### • Removing the Bias of Integral Pose Regression. [\[PDF\]](https://www.mu4yang.com/files/papers/Removing%20the%20Bias%20of%20Integral%20Pose%20Regression.pdf)

_Kerui Gu, Linlin Yang, Angela Yao_

[\[back to top\]](#contents)

### 2021 CVPR

##### • Monocular Real-time Full Body Capture with Inter-part Correlations. [\[PDF\]](https://arxiv.org/pdf/2012.06087)

_Yuxiao Zhou, Marc Habermann, Ikhsanul Habibie, Ayush Tewari, Christian Theobalt, Feng Xu_

##### • End-to-End Human Pose and Mesh Reconstruction with Transformers. [\[PDF\]](https://arxiv.org/pdf/2012.09760.pdf) [\[Code\]](https://github.com/microsoft/MeshTransformer)

_Kevin Lin, Lijuan Wang, Zicheng Liu_

##### • DexYCB: A Benchmark for Capturing Hand Grasping of Objects. [\[PDF\]](https://arxiv.org/pdf/2104.04631.pdf) [\[Project\]](https://dex-ycb.github.io/) [\[Code\]](https://github.com/NVlabs/dex-ycb-toolkit)

_Yu-Wei Chao, Wei Yang, Yu Xiang, Pavlo Molchanov, Ankur Handa, Jonathan Tremblay, Yashraj S. Narang, Karl Van Wyk, Umar Iqbal, Stan Birchfield, Jan Kautz, Dieter Fox_

##### • Body2Hands: Learning to Infer 3D Hands from Conversational Gesture Body Dynamics. [\[PDF\]](https://arxiv.org/pdf/2007.12287.pdf) [\[Project\]](http://people.eecs.berkeley.edu/~evonne_ng/projects/body2hands/)

_Evonne Ng, Hanbyul Joo, Shiry Ginosar, Trevor Darrell_

##### • Camera-Space Hand Mesh Recovery via Semantic Aggregation and Adaptive 2D-1D Registration. [\[PDF\]](https://arxiv.org/pdf/2103.02845.pdf)

_Xingyu Chen, Yufeng Liu, Chongyang Ma, Jianlong Chang, Huayan Wang, Tian Chen, Xiaoyan Guo, Pengfei Wan, Wen Zheng_

##### • Model-based 3D Hand Reconstruction via Self-Supervised Learning. [\[PDF\]](https://arxiv.org/pdf/2103.11703)

_Yujin Chen, Zhigang Tu, Di Kang, Linchao Bao, Ying Zhang, Xuefei Zhe, Ruizhi Chen, Junsong Yuan_

##### • Semi-Supervised 3D Hand-Object Poses Estimation with Interactions in Time. [\[PDF\]](https://arxiv.org/pdf/2106.05266.pdf) [\[Project\]](https://stevenlsw.github.io/Semi-Hand-Object/) [\[Code\]](https://github.com/stevenlsw/Semi-Hand-Object)

_Shaowei Liu*, Hanwen Jiang*, Jiarui Xu, Sifei Liu, Xiaolong Wang_

[\[back to top\]](#contents)

### 2021 Others

##### • [2021 3DV] A Skeleton-Driven Neural Occupancy Representation for Articulated Hands. [\[PDF\]](https://arxiv.org/pdf/2109.11399) [\[Project\]](https://korrawe.github.io/HALO/HALO.html) [\[Code\]](https://github.com/korrawe/halo) *(Oral)*

_Korrawe Karunratanakul, Adrian Spurr, Zicong Fan, Otmar Hilliges, Siyu Tang_

##### • [2021 3DV] Learning to Disambiguate Strongly Interacting Hands via Probabilistic Per-pixel Part Segmentation. [\[PDF\]](https://arxiv.org/abs/2107.00434) [\[Project\]](https://zc-alexfan.github.io/digit) [\[Code\]](https://github.com/zc-alexfan/digit-interacting) *(Oral)*

_Zicong Fan, Adrian Spurr, Muhammed Kocabas, Siyu Tang, Michael J. Black, Otmar Hilliges_

##### • [2021 DICTA] Semi-Supervised 3D Hand Shape and Pose Estimation with Label Propagation. [\[PDF\]](https://arxiv.org/pdf/2111.15199)

_Samira Kaviani, Amir Rahimi, Richard Hartley_

##### • [2021 BMVC] Joint-Aware Regression: Rethinking Regression-Based Method for 3D Hand Pose Estimation. \[PDF\]

_Xiaozheng Zheng, Pengfei Ren, Haifeng Sun, Jingyu Wang, Qi Qi and Jianxin Liao_

##### • [2021 BMVC] Local and Global Point Cloud Reconstruction for 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2112.06389.pdf) [\[Data\]](https://github.com/ShichengChen/multiviewDataset)

_Ziwei Yu, Linlin Yang, Shicheng Chen and Angela Yao_

##### • [2021 BMVC] HandTailor: Towards High-Precision Monocular 3D Hand Recovery. [\[PDF\]](https://arxiv.org/pdf/2102.09244) [\[Code\]](https://github.com/LyuJ1998/HandTailor)

_Jun Lv, Wenqiang Xu, Lixin Yang, Sucheng Qian, Chongzhao Mao, Cewu Lu_

##### • [2021 BMVC] Multi-view Image-based Hand Geometry Refinement using Differentiable Monte Carlo Ray Tracing. [\[PDF\]](https://arxiv.org/pdf/2107.05509)

_Giorgos Karvounas, Nikolaos Kyriazis, Iason Oikonomidis, Aggeliki Tsoli, Antonis A. Argyros_

##### • [2021 SIGGRAPH] ManipNet: Neural Manipulation Synthesis with a Hand-Object Spatial Representation. [\[PDF\]](http://www.ipab.inf.ed.ac.uk/cgvu/zhang2021.pdf)  [\[Code\]](https://github.com/cghezhang/ManipNet)

_He Zhang, Yuting Ye, Takaaki Shiratori, Taku Komura_

##### • [2021 SIGGRAPH] Single Depth View-Based Real-time Reconstruction of Hand-object Interactions. [\[PDF\]](http://xufeng.site/publications/2021/Single%20Depth%20View%20Based%20Real-time%20Reconstruction%20of%20Hand-objectInteractions.pdf)

_Hao Zhang, Yuxiao Zhou, Yifei Tian, Jun-Hai Yong, Feng Xu_

##### • [2021 IROS] Dynamic Modeling of Hand-Object Interactions via Tactile Sensing. [\[PDF\]](https://arxiv.org/pdf/2109.04378)  [\[Project\]](http://phystouch.csail.mit.edu/)

_Qiang Zhang, Yunzhu Li, Yiyue Luo, Wan Shou, Michael Foshey, Junchi Yan, Joshua B. Tenenbaum, Wojciech Matusik, Antonio Torralba_

##### • [2021 AAAI] Exploiting Learnable Joint Groups for Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2012.09496)  [\[Code\]](https://github.com/moranli-aca/LearnableGroups-Hand)

_Moran Li, Yuan Gao, Nong Sang_

##### • [2021 WACV] Active Learning for Bayesian 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/pdf/2010.00694)  [\[Code\]](https://github.com/razvancaramalau/al_bhpe)

_Razvan Caramalau, Binod Bhattarai, Tae-Kyun Kim_

##### • [2021 WACV] Two-hand Global 3D Pose Estimation Using Monocular RGB. [\[PDF\]](https://arxiv.org/pdf/2006.01320.pdf)  [\[Code\]](https://github.com/AlextheEngineer/Ego3DHands)

_Fanqing Lin, Connor Wilhelm, Tony Martinez_

##### • [2021 WACV] MVHM: A Large-Scale Multi-View Hand Mesh Benchmark for Accurate 3D Hand Pose Estimation. [\[PDF\]](https://arxiv.org/abs/2012.03206)

_Liangjian Chen, Shih-Yao Lin, Yusheng Xie, Yen-Yu Lin, Xiaohui Xie_

##### • [2021 WACV] Temporal-Aware Self-Supervised Learning for 3D Hand Pose and Mesh Estimation in Videos. [\[PDF\]](https://arxiv.org/abs/2012.03205)

_Liangjian Chen, Shih-Yao Lin, Yusheng Xie, Yen-Yu Lin, Xiaohui Xie_

##### • [2021 PETRA] Weakly-supervised hand part segmentation from depth images. [\[PDF\]](https://dl.acm.org/doi/10.1145/3453892.3453902)

_Mohammad Rezaei, Farnaz Farahanipad, Alex Dillhoff, Ramez Elmasri, Vassilis Athitsos_

##### • [2021 PETRA] A Pipeline for Hand 2-D Keypoint Localization Using Unpaired Image to Image Translation. [\[PDF\]](https://dl.acm.org/doi/10.1145/3453892.3453904)

<!-- opensource-radar:truncated -->
