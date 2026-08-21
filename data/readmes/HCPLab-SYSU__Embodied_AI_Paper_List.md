<br>
<p align="center">
<h1 align="center"><strong>Paper List  and Resource Repository for Embodied AI</strong></h1>
  <p align="center">
    <a href='https://www.sysu-hcp.net/' target='_blank'>HCPLab</a>&emsp;
    <br>
    SYSU HCP Lab and Pengcheng Laboratory
    <br>
  </p>
</p>

<p align="center">
<img src="./EmbodiedAI.jpg" width="250">
</p>

[![arXiv](https://img.shields.io/badge/arXiv-2407.06886-orange)](https://arxiv.org/abs/2407.06886)
[![](https://img.shields.io/badge/Paper-%F0%9F%93%96-yellow)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List/blob/main/EmbodiedAI_Review.pdf)
[![](https://img.shields.io/badge/Project-%F0%9F%9A%80-pink)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List)

#### We appreciate any useful suggestions for improvement of this paper list or survey from peers. Please raise issues or send an email to **liuy856@mail.sysu.edu.cn** and **chen867820261@gmail.com**. Thanks for your cooperation! We also welcome your pull requests for this project!

![Teaser](teaser.png "demo")

[**Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI, IEEE/ASME Transactions on Mechatronics 2025**](https://arxiv.org/pdf/2407.06886)    
  [Yang Liu](https://yangliu9208.github.io), Weixing Chen, Yongjie Bai, [Xiaodan Liang](https://lemondan.github.io), [Guanbin Li](http://guanbinli.com/), [Wen Gao](https://idm.pku.edu.cn/info/1017/1041.htm), [Liang Lin](http://www.linliang.net/)     

<p align="center">
<img src="./Survey.png" width="800">
</p>  

## 🏠 About

Embodied Artificial Intelligence (Embodied AI) is crucial for achieving Artificial General Intelligence (AGI) and serves as a foundation for various applications (e.g., intelligent mechatronics systems, smart manufacturing) that bridge cyberspace and the physical world. Recently, the emergence of Multi-modal Large Models (MLMs) and World Models (WMs) have attracted significant attention due to their remarkable perception, interaction, and reasoning capabilities, making them a promising architecture for embodied agents. In this survey, we give a comprehensive exploration of the latest advancements in Embodied AI. Our analysis firstly navigates through the forefront of representative works of embodied robots and simulators, to fully understand the research focuses and their limitations. Then, we analyze four main research targets: 1) embodied perception, 2) embodied interaction, 3) embodied agent, and 4) sim-to-real adaptation, covering state-of-the-art methods, essential paradigms, and comprehensive datasets. Additionally, we explore the complexities of MLMs in virtual and real embodied agents, highlighting their significance in facilitating interactions in digital and physical environments.  Finally, we summarize the challenges and limitations of embodied AI and discuss potential future directions. We hope this survey will serve as a foundational reference for the research community. 

## :collision: Update Log 
* [2026.03.31] We release the [Physical Agent Operation System](https://github.com/PhyAgentOS/PhyAgentOS)!
* [2026.03.11] Updated paper list with latest 2025-2026 papers across all categories!
* [2025.05.27] Our Embodied AI Survey paper is accepted by IEEE/ASME Transactions on Mechatronics!
* [2024.09.08] We are constantly updating the Dataset section!
* [2024.08.31] We added the Datasets section and classified the useful projects!
* [2024.08.19] To make readers focus on newest works, we have arranged papers in chronological order!   
* [2024.08.02] We regularly update the project weekly!   
* [2024.07.29] We have updated the project!   
* [2024.07.22] We have updated the paper list and other useful embodied projects!   
* [2024.07.10] We release the first version of the survey on Embodied AI [PDF](https://arxiv.org/pdf/2407.06886)!
* [2024.07.10] We release the first version of the paper list for Embodied AI. This page is continually updating!



## <a id="table-of-contents">📚 Table of Contents </a>

- [Books & Surveys](#books-surveys)
- [Embodied Simulators](#simulators)
- [Embodied Perception](#perception)
- [Embodied Interaction](#interaction)
- [Embodied Agent](#agent)
- [Sim-to-Real Adaptation](#sim-to-real)
- [Datasets](#datasets)

## <a id="books-surveys"> Books & Surveys <a href="#table-of-contents">🔝</a> </a> 

* **Self-evolving Embodied AI**, arXiv:2602.04411, 2026       
Tongtong Feng, Xin Wang, Wenwu Zhu.        
[[Paper](https://arxiv.org/pdf/2602.04411)]

* **Towards Robust and Secure Embodied AI: A Survey on Vulnerabilities and Attacks**, arXiv:2502.13175, 2025       
Wenpeng Xing, Minghao Li, Mohan Li, Meng Han.        
[[Paper](https://arxiv.org/pdf/2502.13175)]

* **From Screens to Scenes: A Survey of Embodied AI in Healthcare**, arXiv:2501.07468, 2025       
Yihao Liu, Xu Cao, Tingting Chen, Yankai Jiang, Junjie You, Minghua Wu, Xiaosong Wang, Mengling Feng, Yaochu Jin, Jintai Chen.        
[[Paper](https://arxiv.org/pdf/2501.07468)]

* **Semantic Mapping in Indoor Embodied AI -- A Survey**, arXiv:2501.05750, 2025       
Sonia Raychaudhuri, Angel X. Chang.        
[[Paper](https://arxiv.org/pdf/2501.05750)]

* **A Comprehensive Survey on World Models for Embodied AI**, arXiv:2510.16732, 2025       
Xinqing Li, Xin He, Le Zhang, Min Wu, Xiaoli Li, Yun Liu.        
[[Paper](https://arxiv.org/pdf/2510.16732)]

* **Generative Artificial Intelligence in Robotic Manipulation: A Survey**, arXiv:2503.03464, 2025       
Kun Zhang, Peng Yun, Jun Cen, Junhao Cai, Didi Zhu, Hangjie Yuan, Chao Zhao, Tao Feng, Michael Yu Wang, Qifeng Chen, Jia Pan, Wei Zhang, Bo Yang, Hua Chen.        
[[Paper](https://arxiv.org/pdf/2503.03464)]

* **Dexterous Manipulation through Imitation Learning: A Survey**, arXiv:2504.03515, 2025       
Shan An, Ziyu Meng, Chao Tang, Yuning Zhou, Tengyu Liu, Fangqiang Ding, Shufang Zhang, Yao Mu, Ran Song, Wei Zhang, Zeng-Guang Hou, Hong Zhang.        
[[Paper](https://arxiv.org/pdf/2504.03515)]

* **Humanoid Robots and Humanoid AI: Review, Perspectives and Directions**, arXiv:2405.15775, 2025       
Longbing Cao.        
[[Paper](https://arxiv.org/pdf/2405.15775)]

* **A Survey of Robotic Navigation and Manipulation with Physics Simulators in the Era of Embodied AI**, arXiv:2505.01458, 2025       
Lik Hang Kenny Wong, Xueyang Kang, Kaixin Bai, Jianwei Zhang.        
[[Paper](https://arxiv.org/pdf/2505.01458)]

* **Multimodal Large Models: The New Paradigm of Artificial General Intelligence**, Publishing House of Electronics Industry (PHE), 2024       
Yang Liu, Liang Lin             
[[Page](https://hcplab-sysu.github.io/Book-of-MLM/)]      

* **Aligning Cyber Space with Physical World: A Comprehensive Survey on Embodied AI**, arXiv:2407.06886, 2024       
Yang Liu, Weixing Chen, Yongjie Bai, Guanbin Li, Wen Gao, Liang Lin.        
[[Paper](https://arxiv.org/pdf/2407.06886)]    

* **All Robots in One: A New Standard and Unified Dataset for Versatile, General-Purpose Embodied Agents**, arXiv:2408.10899, 2024      
Zhiqiang Wang, Hao Zheng, Yunshuang Nie, Wenjun Xu, Qingwei Wang, Hua Ye, Zhe Li, Kaidong Zhang, Xuewen Cheng, Wanxi Dong, Chang Cai, Liang Lin, Feng Zheng, Xiaodan Liang           
[[Paper](https://arxiv.org/pdf/2408.10899)][[Project](https://imaei.github.io/project_pages/ario/)]

* **Embodied intelligence toward future smart manufacturing in the era of AI foundation model**, IEEE/ASME Transactions on Mechatronics, 2024         
Lei Ren, Jiabao Dong, Shuai Liu, Lin Zhang, and Lihui Wang.         
[[Paper](https://ieeexplore.ieee.org/abstract/document/10697107)]

* **A Survey of Embodied Learning for Object-Centric Robotic Manipulation**, arXiv:2408.11537, 2024   
Ying Zheng, Lei Yao, Yuejiao Su, Yi Zhang, Yi Wang, Sicheng Zhao, Yiyi Zhang, Lap-Pui Chau    
[[Paper](https://arxiv.org/pdf/2408.11537)]

* **Teleoperation of Humanoid Robots: A Survey**, IEEE Transactions on Robotics, 2024       
Kourosh Darvish, Luigi Penco, Joao Ramos, Rafael Cisneros, Jerry Pratt, Eiichi Yoshida, Serena Ivaldi, Daniele Pucci.        
[[Paper](https://arxiv.org/pdf/2301.04317)]

* **A Survey on Vision-Language-Action Models for Embodied AI**, arXiv:2405.14093, 2024   
Yueen Ma, Zixing Song, Yuzheng Zhuang, Jianye Hao, Irwin King    
[[Paper](https://arxiv.org/pdf/2405.14093)]

* **Towards Generalist Robot Learning from Internet Video: A Survey**, arXiv:2404.19664, 2024   
McCarthy, Robert, Daniel CH Tan, Dominik Schmidt, Fernando Acero, Nathan Herr, Yilun Du, Thomas G. Thuruthel, and Zhibin Li.  
[[Paper](https://arxiv.org/pdf/2404.19664)]

* **A Survey on Robotics with Foundation Models: toward Embodied AI**, arXiv:2402.02385, 2024    
Zhiyuan Xu, Kun Wu, Junjie Wen, Jinming Li, Ning Liu, Zhengping Che, and Jian Tang.     
[[Paper](https://arxiv.org/pdf/2402.02385)]     

* **Toward general-purpose robots via foundation models: A survey and meta-analysis**, Machines, 2023   
Yafei Hu, Quanting Xie, Vidhi Jain, Jonathan Francis, Jay Patrikar, Nikhil Keetha, Seungchan Kim, Yaqi Xie, Tianyi Zhang, Shibo Zhao, Yu Quan Chong, Chen Wang, Katia Sycara, Matthew Johnson-Roberson, Dhruv Batra, Xiaolong Wang, Sebastian Scherer, Zsolt Kira, Fei Xia, Yonatan Bisk.            
[[Paper](https://arxiv.org/pdf/2312.08782)]    

* **Deformable Object Manipulation in Caregiving Scenarios: A Review**, Machines, 2023   
Liman Wang, Jihong Zhu.  
[[Paper]https://www.mdpi.com/2075-1702/11/11/1013]

* **A survey of embodied ai: From simulators to research tasks**, IEEE Transactions on Emerging Topics in Computational Intelligence, 2022    
Jiafei Duan, Samson Yu, Hui Li Tan, Hongyuan Zhu, Cheston Tan    
[[Paper](https://arxiv.org/pdf/2103.04918)]    

* **The development of embodied cognition: Six lessons from babies**, Artificial life, 2005    
Linda Smith, Michael Gasser    
[[Paper](https://cogdev.sitehost.iu.edu/labwork/6_lessons.pdf)]    

* **Embodied artificial intelligence: Trends and challenges**, Lecture notes in computer science, 2004    
Rolf Pfeifer, Fumiya Iida   
[[Paper](https://people.csail.mit.edu/iida/papers/PfeiferIidaEAIDags.pdf)]     

## <a id="simulators"> Embodied Simulators <a href="#table-of-contents">🔝</a> </a>
### General Simulator

* **Design and use paradigms for gazebo, an open-source multi-robot simulator**, IROS, 2004        
Koenig, Nathan, Andrew, Howard.      
[[page](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=79f91c1c95271a075b91e9fdca43d6c31e4cbe17)]

* **Nvidia isaac sim: Robotics simulation and synthetic data**, NVIDIA, 2023    
[[page](https://developer.nvidia.com/isaac/sim)]    

* **Aerial Gym -- Isaac Gym Simulator for Aerial Robots**, ArXiv, 2023    
Mihir Kulkarni and Theodor J. L. Forgaard and Kostas Alexis.     
[[paper](https://arxiv.org/abs/2305.16510)]     

* **Webots: open-source robot simulator**, 2018      
Cyberbotics      
[[page](https://cyberbotics.com/doc/reference/index), [code](https://github.com/cyberbotics/webots)]     

* **Unity: A general platform for intelligent agents**, ArXiv, 2020    
Juliani, Arthur, Vincent-Pierre, Berges, Ervin, Teng, Andrew, Cohen, Jonathan, Harper, Chris, Elion, Chris, Goy, Yuan, Gao, Hunter, Henry, Marwan, Mattar, Danny, Lange.    
[[page](https://arxiv.org/pdf/1809.02627)]    

* **AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles**, Field and Service Robotics, 2017    
Shital Shah, , Debadeepta Dey, Chris Lovett, Ashish Kapoor.    
[[page](https://arxiv.org/pdf/1705.05065.pdf%20http://arxiv.org/abs/1705.05065)]    

* **Pybullet, a python module for physics simulation for games, robotics and machine learning**, 2016     
Coumans, Erwin, Yunfei, Bai.     
[[page](https://github.com/bulletphysics/bullet3)]       

* **V-REP: A versatile and scalable robot simulation framework**, IROS, 2013      
Rohmer, Eric, Surya PN, Singh, Marc, Freese.     
[[page](https://coppeliarobotics.com/coppeliaSim_v-rep_iros2013.pdf)]     

* **MuJoCo: A physics engine for model-based control**, IROS, 2012    
Todorov, Emanuel, Tom, Erez, Yuval, Tassa.      
[[page](https://ieeexplore.ieee.org/abstract/document/6386109/), [code](https://github.com/google-deepmind/mujoco)]     

* **Modular open robots simulation engine: Morse**, ICRA, 2011       
Echeverria, Gilberto and Lassabe, Nicolas and Degroote, Arnaud and Lemaignan, S{\'e}verin     
[[page](https://www.openrobots.org/morse/material/media/pdf/paper-icra.pdf)]    


### Real-Scene Based Simulators

* **UnrealZoo: Enriching Photo-realistic Virtual Worlds for Embodied AI**, ICCV Highlight, 2025<br>
Fangwei Zhong, Kui Wu, Churan Wang, Hao Chen, Hai Ci, Zhoujun Li, Yizhou Wang.<br>
[[paper](https://arxiv.org/abs/2412.20977), [page](https://unrealzoo.site/), [code](https://github.com/UnrealZoo/unrealzoo-gym)]

* **RoboVerse: Towards a Unified Platform, Dataset and Benchmark for Scalable and Generalizable Robot Learning**, arXiv, 2025  
Haoran Geng, Feishi Wang, Songlin Wei, Yuyang Li, Bangjun Wang, Boshi An, Charlie Tianyue Cheng, Haozhe Lou, Peihao Li, Yen-Jen Wang, Yutong Liang, Dylan Goetting, Chaoyi Xu, Haozhe Chen, Yuxi Qian, Yiran Geng, Jiageng Mao, Weikang Wan, Mingtong Zhang, Jiangran Lyu, Siheng Zhao, Jiazhao Zhang, Jialiang Zhang, Chengyang Zhao, Haoran Lu, Yufei Ding, Ran Gong, Yuran Wang, Yuxuan Kuang, Ruihai Wu, Baoxiong Jia, Carlo Sferrazza, Hao Dong, Siyuan Huang, Yue Wang, Jitendra Malik, Pieter Abbeel.   
[[page](https://arxiv.org/pdf/2504.18904)]

* **Isaac Lab: A GPU-Accelerated Simulation Framework for Multi-Modal Robot Learning**, arXiv, 2025  
Mayank Mittal, Pascal Roth, James Tigue, Antoine Richard, Octi Zhang, Peter Du, Antonio Serrano-Muñoz, Xinjie Yao, René Zurbrügg, Nikita Rudin, Lukasz Wawrzyniak, Milad Rakhsha, Alain Denzler, Eric Heiden, Ales Borovicka, Ossama Ahmed, Iretiayo Akinola, Abrar Anwar, Mark T. Carlson, Ji Yuan Feng, Animesh Garg.   
[[page](https://arxiv.org/pdf/2511.04831)]

* **InfiniteWorld: A Unified Scalable Simulation Framework for General Visual-Language Robot Interaction**, arxiv, 2024  
Pengzhen Ren, Min Li, Zhen Luo, Xinshuai Song, Ziwei Chen, Weijia Liufu, Yixuan Yang, Hao Zheng, Rongtao Xu, Zitong Huang, Tongsheng Ding, Luyang Xie, Kaidong Zhang, Changfei Fu, Yang Liu, Liang Lin, Feng Zheng, Xiaodan Liang.   
[[page](https://arxiv.org/pdf/2412.05789)]


* **ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI**, arxiv, 2024  
Stone Tao, Fanbo Xiang, Arth Shukla, Yuzhe Qin, Xander Hinrichsen, Xiaodi Yuan, Chen Bao, Xinsong Lin, Yulin Liu, Tse-kai Chan, Yuan Gao, Xuanlin Li, Tongzhou Mu, Nan Xiao, Arnav Gurha, Zhiao Huang, Roberto Calandra, Rui Chen, Shan Luo, Hao Su.   
[[page](https://arxiv.org/pdf/2410.00425)]

* **PhyScene: Physically Interactable 3D Scene Synthesis for Embodied AI**, arxiv, 2024  
Yang, Yandan, Baoxiong, Jia, Peiyuan, Zhi, Siyuan, Huang.   
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Yang_PhyScene_Physically_Interactable_3D_Scene_Synthesis_for_Embodied_AI_CVPR_2024_paper.pdf)]

* **Holodeck: Language Guided Generation of 3D Embodied AI Environments**, CVPR, 2024  
Yue Yang, , Fan-Yun Sun, Luca Weihs, Eli VanderBilt, Alvaro Herrasti, Winson Han, Jiajun Wu, Nick Haber, Ranjay Krishna, Lingjie Liu, Chris Callison-Burch, Mark Yatskar, Aniruddha Kembhavi, Christopher Clark.   
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Yang_Holodeck_Language_Guided_Generation_of_3D_Embodied_AI_Environments_CVPR_2024_paper.pdf)]

* **RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning via Generative Simulation**, arXiv, 2023  
Wang, Yufei, Zhou, Xian, Feng, Chen, Tsun-Hsuan, Wang, Yian, Wang, Katerina, Fragkiadaki, Zackory, Erickson, David, Held, Chuang, Gan.   
[[page](https://arxiv.org/pdf/2311.01455)]

* **ProcTHOR: Large-Scale Embodied AI Using Procedural Generation**, NeurIPS, 2022  
Deitke, VanderBilt, Herrasti, Weihs, Salvador, Ehsani, Han, Kolve, Farhadi, Kembhavi, Mottaghi   
[[page](https://arxiv.org/pdf/2206.06994)]

* **ThreeDWorld: A Platform for Interactive Multi-Modal Physical Simulation**, NeurIPS, 2021  
Gan, Chuang, J., Schwartz, Seth, Alter, Martin, Schrimpf, James, Traer, JulianDe, Freitas, Jonas, Kubilius, Abhishek, Bhandwaldar, Nick, Haber, Megumi, Sano, Kuno, Kim, Elias, Wang, Damian, Mrowca, Michael, Lingelbach, Aidan, Curtis, KevinT., Feigelis, DavidM., Bear, Dan, Gutfreund, DavidD., Cox, JamesJ., DiCarlo, JoshH., McDermott, JoshuaB., Tenenbaum, Daniel, Yamins.   
[[page](https://arxiv.org/pdf/2007.04954)]

* **iGibson 1.0: A Simulation Environment for Interactive Tasks in Large Realistic Scenes**, IROS, 2021  
Shen, Bokui, Fei, Xia, Chengshu, Li, Roberto, Martín-Martín, Linxi, Fan, Guanzhi, Wang, Claudia, Pérez-D’Arpino, Shyamal, Buch, Sanjana, Srivastava, Lyne, Tchapmi, Micael, Tchapmi, Kent, Vainio, Josiah, Wong, Li, Fei-Fei, Silvio, Savarese.   
[[page](https://arxiv.org/pdf/2012.02924)]

* **SAPIEN: A SimulAted Part-Based Interactive ENvironment**, CVPR, 2020  
Xiang, Fanbo, Yuzhe, Qin, Kaichun, Mo, Yikuan, Xia, Hao, Zhu, Fangchen, Liu, Minghua, Liu, Hanxiao, Jiang, Yifu, Yuan, He, Wang, Li, Yi, Angel X., Chang, Leonidas J., Guibas, Hao, Su.   
[[page](http://openaccess.thecvf.com/content_CVPR_2020/papers/Xiang_SAPIEN_A_SimulAted_Part-Based_Interactive_ENvironment_CVPR_2020_paper.pdf)]

* **Habitat: A Platform for Embodied AI Research**, ICCV, 2019  
Savva, Manolis, Abhishek, Kadian, Oleksandr, Maksymets, Yili, Zhao, Erik, Wĳmans, Bhavana, Jain, Julian, Straub, Jia, Liu, Vladlen, Koltun, Jitendra, Malik, Devi, Parikh, Dhruv, Batra.   
[[page](http://openaccess.thecvf.com/content_ICCV_2019/papers/Savva_Habitat_A_Platform_for_Embodied_AI_Research_ICCV_2019_paper.pdf)]

* **VirtualHome: Simulating Household Activities Via Programs**, CVPR, 2018  
Puig, Xavier, Kevin, Ra, Marko, Boben, Jiaman, Li, Tingwu, Wang, Sanja, Fidler, Antonio, Torralba.   
[[page](http://openaccess.thecvf.com/content_cvpr_2018/papers/Puig_VirtualHome_Simulating_Household_CVPR_2018_paper.pdf)]

* **Matterport3D: Learning from RGB-D Data in Indoor Environments**, 3DV, 2017  
Chang, Angel, Angela, Dai, Thomas, Funkhouser, Maciej, Halber, Matthias, Niebner, Manolis, Savva, Shuran, Song, Andy, Zeng, Yinda, Zhang.   
[[page](https://arxiv.org/pdf/1709.06158)]

* **AI2-THOR: An Interactive 3D Environment for Visual AI**. arXiv, 2017  
Kolve, Eric, Roozbeh, Mottaghi, Daniel, Gordon, Yuke, Zhu, Abhinav, Gupta, Ali, Farhadi.   
[[page](https://arxiv.org/pdf/1712.05474)]

## <a id="perception">  Embodied Perception <a href="#table-of-contents">🔝</a> </a>
### Active Visual Exploration
* **Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection**, Arxiv, 2025.  
Juil Koo*, Daehyeon Choi*, Sangwoo Youn*, Phillip Y. Lee, Minhyuk Sung.  
[[Paper](https://arxiv.org/abs/2512.13250)]

* **ActiveGAMER: Active GAussian Mapping through Efficient Rendering**, CVPR, 2025.  
Liyan Chen, Huangying Zhan, Kevin Chen, Xiangyu Xu, Qingan Yan, Changjiang Cai, Yi Xu.  
[[Paper](https://arxiv.org/abs/2501.06897)]

* **ActiveGS: Active Scene Reconstruction Using Gaussian Splatting**, RA-L, 2025.  
Liren Jin, Xingguang Zhong, Yue Pan, Jens Behley, Cyrill Stachniss, Marija Popović.  
[[Paper](https://arxiv.org/abs/2412.17769)]

* **RoboTracer: Mastering Spatial Trace with Reasoning in Vision-Language Models for Robotics**, arxiv, 2025.  
Enshen Zhou, Cheng Chi, Yibo Li, Jingkun An, Jiayuan Zhang, Shanyu Rong, Yi Han, Yuheng Ji, Mengzhen Liu, Pengwei Wang, Zhongyuan Wang, Lu Sheng, Shanghang Zhang.  
[[Paper](https://arxiv.org/abs/2512.13660)] [[Project](https://zhoues.github.io/RoboTracer/)]

* **RoboRefer: Towards Spatial Referring with Reasoning in Vision-Language Models for Robotics**, arxiv, 2025.  
Enshen Zhou, Jingkun An, Cheng Chi, Yi Han, Shanyu Rong, Chi Zhang, Pengwei Wang, Zhongyuan Wang, Tiejun Huang, Lu Sheng, Shanghang Zhang.  
[[Paper](https://arxiv.org/abs/2506.04308)] [[Project](https://zhoues.github.io/RoboRefer/)]

* **3DAffordSplat: Efficient Affordance Reasoning with 3D Gaussians**, arxiv, 2025.     
Zeming Wei, Junyi Lin, Yang Liu, Weixing Chen, Jingzhou Luo, Guanbin Li, Liang Lin.     
[[Paper](https://arxiv.org/pdf/2504.11218)] [[Project](https://github.com/HCPLab-SYSU/3DAffordSplat)]    

* **Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection**, CVPR, 2025.  
Enshen Zhou, Qi Su, Cheng Chi, Zhizheng Zhang, Zhongyuan Wang, Tiejun Huang, Lu Sheng, He Wang.  
[[Paper](https://arxiv.org/abs/2412.04455)] [[Project](https://zhoues.github.io/Code-as-Monitor/)]

* **SnapMem: Snapshot-based 3D Scene Memory for Embodied Exploration and Reasoning**, arxiv, 2024.    
Yuncong Yang, Han Yang, Jiachen Zhou, Peihao Chen, Hongxin Zhang, Yilun Du, Chuang Gan.      
[[page](https://arxiv.org/pdf/2411.17735)]

* **AIR-Embodied: An Efficient Active 3DGS-based Interaction and Reconstruction Framework with Embodied Large Language Model**, arxiv, 2024.    
Zhenghao Qi, Shenghai Yuan, Fen Liu, Haozhi Cao, Tianchen Deng, Jianfei Yang, Lihua Xie.      
[[page](https://arxiv.org/pdf/2409.16019)]

* **BEHAVIOR Vision Suite: Customizable Dataset Generation via Simulation**, CVPR, 2024.    
Yunhao Ge, Yihe Tang, Jiashu Xu, Cem Gokmen, Chengshu Li, Wensi Ai, Benjamin Jose Martinez, Arman Aydin, Mona Anvari, Ayush K Chakravarthy, Hong-Xing Yu, Josiah Wong, Sanjana Srivastava, Sharon Lee, Shengxin Zha, Laurent Itti, Yunzhu Li, Roberto Martín-Martín, Miao Liu, Pengchuan Zhang, Ruohan Zhang, Li Fei-Fei, Jiajun Wu.         
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Ge_BEHAVIOR_Vision_Suite_Customizable_Dataset_Generation_via_Simulation_CVPR_2024_paper.pdf)]

* **Coarse-to-Fine Detection of Multiple Seams for Robotic Welding**, arxiv, 2024.    
Pengkun Wei, Shuo Cheng, Dayou Li, Ran Song, Yipeng Zhang, Wei Zhang.      
[[page](https://arxiv.org/pdf/2408.10710)]      

* **Evidential Active Recognition: Intelligent and Prudent Open-World Embodied Perception**, CVPR, 2024.    
Fan, Lei, Mingfu, Liang, Yunxuan, Li, Gang, Hua, Ying, Wu.      
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Fan_Evidential_Active_Recognition_Intelligent_and_Prudent_Open-World_Embodied_Perception_CVPR_2024_paper.pdf)]

* **SpatialBot: Precise Spatial Understanding with Vision Language Models**, arxiv, 2024.    
Wenxiao Cai, Yaroslav Ponomarenko, Jianhao Yuan, Xiaoqi Li, Wankou Yang, Hao Dong, Bo Zhao.      
[[page](https://arxiv.org/pdf/2406.13642)]

* **Embodied Uncertainty-Aware Object Segmentations**, IROS, 2024.      
Xiaolin Fang, Leslie Pack Kaelbling, Tom ́as Lozano-P ́erez.     
[[page](https://arxiv.org/pdf/2408.04760)]

* **Point Transformer V3: Simpler Faster Stronger**, CVPR, 2024.
Wu, Xiaoyang, Li, Jiang, Peng-Shuai, Wang, Zhijian, Liu, Xihui, Liu, Yu, Qiao, Wanli, Ouyang, Tong, He, Hengshuang, Zhao.    
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Wu_Point_Transformer_V3_Simpler_Faster_Stronger_CVPR_2024_paper.pdf)]    

* **PointMamba: A Simple State Space Model for Point Cloud Analysis**, arXiv, 2024.   
Liang, Dingkang, Xin, Zhou, Xinyu, Wang, Xingkui, Zhu, Wei, Xu, Zhikang, Zou, Xiaoqing, Ye, Xiang, Bai.     
[[page](https://arxiv.org/pdf/2402.10739)]    

* **Point Could Mamba: Point Cloud Learning via State Space Model**, arXiv, 2024.    
Zhang, Tao, Xiangtai, Li, Haobo, Yuan, Shunping, Ji, Shuicheng, Yan.     
[[page](https://arxiv.org/pdf/2403.00762)]    

* **Mamba3d: Enhancing local features for 3d point cloud analysis via state space model**, arXiv, 2024.   
Han, Xu, Yuan, Tang, Zhaoxuan, Wang, Xianzhi, Li.    
[[page](https://arxiv.org/pdf/2404.14966)]

* **Gs-slam: Dense visual slam with 3d gaussian splatting**, CVPR, 2024.    
Yan, Chi, Delin, Qu, Dan, Xu, Bin, Zhao, Zhigang, Wang, Dong, Wang, Xuelong, Li.      
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Yan_GS-SLAM_Dense_Visual_SLAM_with_3D_Gaussian_Splatting_CVPR_2024_paper.pdf)    

* **GOReloc: Graph-based Object-Level Relocalization for Visual SLAM**, IEEE RAL, 2024.    
Yutong Wang, Chaoyang Jiang, Xieyuanli Chen.      
[[page]](https://arxiv.org/pdf/2408.07917)

* **Embodiedscan: A holistic multi-modal 3d perception suite towards embodied ai** CVPR, 2024.    
Wang, Tai, Xiaohan, Mao, Chenming, Zhu, Runsen, Xu, Ruiyuan, Lyu, Peisen, Li, Xiao, Chen, Wenwei, Zhang, Kai, Chen, Tianfan, Xue, others.      
[[page](https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_EmbodiedScan_A_Holistic_Multi-Modal_3D_Perception_Suite_Towards_Embodied_AI_CVPR_2024_paper.pdf)]

* **Neu-nbv: Next best view planning using uncertainty estimation in image-based neural rendering**, IROS, 2023.    
Jin, Liren, Xieyuanli, Chen, Julius, Rückin, Marija, Popovi\'c.    
[[page](https://arxiv.org/pdf/2303.01284)]    

* **Off-policy evaluation with online adaptation for robot exploration in challenging environments**, IEEE Robotics and Automation Letters, 2023.   
Hu, Yafei, Junyi, Geng, Chen, Wang, John, Keller, Sebastian, Scherer.    
[[page](https://arxiv.org/pdf/2204.03140)]    

* **OVD-SLAM: An online visual SLAM for dynamic environments**, IEEE Sensors Journal, 2023.    
He, Jiaming, Mingrui, Li, Yangyang, Wang, Hongyu, Wang.     
[[page]](https://ieeexplore.ieee.org/abstract/document/10113832)    

* **Transferring implicit knowledge of non-visual object properties across heterogeneous robot morphologies**, ICRA, 2023.    
Tatiya, Gyan, Jonathan, Francis, Jivko, Sinapov.    
[[page](https://arxiv.org/pdf/2209.06890)]

* **Swin3d: A pretrained transformer backbone for 3d indoor scene understanding**, arXiv, 2023.   
Yang, Yu-Qi, Yu-Xiao, Guo, Jian-Yu, Xiong, Yang, Liu, Hao, Pan, Peng-Shuai, Wang, Xin, Tong, Baining, Guo.    
[[page](https://arxiv.org/pdf/2304.06906)]

* **Point transformer v2: Grouped vector attention and partition-based pooling**, NeurIPS, 2022.   
Wu, Xiaoyang, Yixing, Lao, Li, Jiang, Xihui, Liu, Hengshuang, Zhao.     
[[page](https://proceedings.neurips.cc/paper_files/paper/2022/file/d78ece6613953f46501b958b7bb4582f-Paper-Conference.pdf)]

* **Rethinking network design and local geometry in point cloud: A simple residual MLP framework**, arXiv, 2022.
Ma, Xu, Can, Qin, Haoxuan, You, Haoxi, Ran, Yun, Fu. 
[[page](https://arxiv.org/pdf/2202.07123)]    

* **So-slam: Semantic object slam with scale proportional and symmetrical texture constraints**. IEEE Robotics and Automation Letters 7. 2(2022): 4008–4015.  
Liao, Ziwei, Yutong, Hu, Jiadong, Zhang, Xianyu, Qi, Xiaoyu, Zhang, Wei, Wang.   
[[page]](https://ieeexplore.ieee.org/abstract/document/9705562)

* **SG-SLAM: A real-time RGB-D visual SLAM toward dynamic scenes with semantic and geometric information**, IEEE Transactions on Instrumentation and Measurement 72. (2022): 1–12.      
Cheng, Shuhong, Changhe, Sun, Shĳun, Zhang, Dianfan, Zhang.    
[[page]](https://ieeexplore.ieee.org/abstract/document/9978699)   

* **Point transformer**, ICCV, 2021.
Zhao, Hengshuang, Li, Jiang, Jiaya, Jia, Philip HS, Torr, Vladlen, Koltun.     
[[page](https://openaccess.thecvf.com/content/ICCV2021/papers/Zhao_Point_Transformer_ICCV_2021_paper.pdf)]    

* **Pointpillars: Fast encoders for object detection from point clouds**, CVPR, 2019.    
Lang, Alex H, Sourabh, Vora, Holger, Caesar, Lubing, Zhou, Jiong, Yang, Oscar, Beijbom.     
[[page]](https://openaccess.thecvf.com/content_CVPR_2019/papers/Lang_PointPillars_Fast_Encoders_for_Object_Detection_From_Point_Clouds_CVPR_2019_paper.pdf)    

* **4d spatio-temporal convnets: Minkowski convolutional neural networks**, CVPR, 2019.    
Choy, Christopher, JunYoung, Gwak, Silvio, Savarese.    
[[page]](https://openaccess.thecvf.com/content_CVPR_2019/papers/Choy_4D_Spatio-Temporal_ConvNets_Minkowski_Convolutional_Neural_Networks_CVPR_2019_paper.pdf)

* **Cubeslam: Monocular 3-d object slam**, IEEE T-RO 35. 4(2019): 925–938  
Yang, Shichao, Sebastian, Scherer.  
[[page]](https://ieeexplore.ieee.org/abstract/document/8708251)

* **Hierarchical topic model based object association for semantic SLAM**, IEEE T-VCG 25. 11(2019): 3052–3062  
Zhang, Jianhua, Mengping, Gui, Qichao, Wang, Ruyu, Liu, Junzhe, Xu, Shengyong, Chen.   
[[page]](https://ieeexplore.ieee.org/abstract/document/8794595)

* **DS-SLAM: A semantic visual SLAM towards dynamic environments**, IROS, 2018   
Yu, Chao, Zuxin, Liu, Xin-Jun, Liu, Fugui, Xie, Yi, Yang, Qi, Wei, Qiao, Fei.   
[[page]](https://ieeexplore.ieee.org/abstract/document/8593691)

* **DynaSLAM: Tracking, mapping, and inpainting in dynamic scenes**, IEEE Robotics and Automation Letters 3. 4(2018): 4076–4083     
Bescos, Berta, José M, Facil, Javier, Civera, José, Neira.   
[[page]](https://ieeexplore.ieee.org/abstract/document/8421015)

* **Quadricslam: Dual quadrics from object detections as landmarks in object-oriented slam**, IEEE Robotics and Automation Letters 4. 1(2018): 1–8.  
Nicholson, Lachlan, Michael, Milford, Niko, Sünderhauf.   
[[page]](https://ieeexplore.ieee.org/abstract/document/8440105)

* **3d semantic segmentation with submanifold sparse convolutional networks**, CVPR, 2018.    
Graham, Benjamin, Martin, Engelcke, Laurens, Van Der Maaten.     
[[page](https://openaccess.thecvf.com/content_cvpr_2018/papers/Graham_3D_Semantic_Segmentation_CVPR_2018_paper.pdf)]

* **Learning to look around: Intelligently exploring unseen environments for unknown tasks**, CVPR, 2018.   
Jayaraman, Dinesh, Kristen, Grauman.    
[[page](https://openaccess.thecvf.com/content_cvpr_2018/papers/Jayaraman_Learning_to_Look_CVPR_2018_paper.pdf)]    

* **Multi-view 3d object detection network for autonomous driving**, CVPR, 2017.    
Chen, Xiaozhi, Huimin, Ma, Ji, Wan, Bo, Li, Tian, Xia.     
[[page]](https://openaccess.thecvf.com/content_cvpr_2017/papers/Chen_Multi-View_3D_Object_CVPR_2017_paper.pdf)    

* **Semantic scene completion from a single depth image**, CVPR, 2017.    
Song, Shuran, Fisher, Yu, Andy, Zeng, Angel X, Chang, Manolis, Savva, Thomas, Funkhouser.     
[[page]](https://openaccess.thecvf.com/content_cvpr_2017/papers/Song_Semantic_Scene_Completion_CVPR_2017_paper.pdf)    

* **Pointnet: Deep learning on point sets for 3d classification and segmentation**, CVPR, 2017.    
Qi, Charles R, Hao, Su, Kaichun, Mo, Leonidas J, Guibas.     
[[page](Pointnet: Deep learning on point sets for 3d classification and segmentation)]    

* **Pointnet++: Deep hierarchical feature learning on point sets in a metric space**, NeurIPS, 2017.    
Qi, Charles Ruizhongtai, Li, Yi, Hao, Su, Leonidas J, Guibas.     
[[page](https://proceedings.neurips.cc/paper_files/paper/2017/file/d8bf84be3800d12f74d8b05e9b89836f-Paper.pdf)]

* **The curious robot: Learning visual representations via physical interactions**, ECCV, 2016.   
Pinto, Lerrel, Dhiraj, Gandhi, Yuanfeng, Han, Yong-Lae, Park, Abhinav, Gupta.    
[[page](https://arxiv.org/pdf/1604.01360)]    

* **Multi-view convolutional neural networks for 3d shape recognition**, ICCV, 2015.    
Su, Hang, Subhransu, Maji, Evangelos, Kalogerakis, Erik, Learned-Miller.     
[[page]](https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/Su_Multi-View_Convolutional_Neural_ICCV_2015_paper.pdf)    

* **Voxnet: A 3d convolutional neural network for real-time object recognition**, IROS, 2015.    
Maturana, Daniel, Sebastian, Scherer.     
[[page]](https://ieeexplore.ieee.org/abstract/document/7353481)    

* **ORB-SLAM: a versatile and accurate monocular SLAM system** IEEE T-RO 31. 5(2015): 1147–1163  
Mur-Artal, Raul, Jose Maria Martinez, Montiel, Juan D, Tardos.   
[[page]](https://ieeexplore.ieee.org/abstract/document/7219438/)

* **LSD-SLAM: Large-scale direct monocular SLAM**, ECCV, 2014  
Engel, Jakob, Thomas, Schops, Daniel, Cremers.  
[[page]](https://link.springer.com/chapter/10.1007/978-3-319-10605-2_54)

* **Slam++: Simultaneous localisation and mapping at the level of objects**, CVPR, 2013  
Salas-Moreno, Renato F, Richard A, Newcombe, Hauke, Strasdat, Paul HJ, Kelly, Andrew J, Davison.   
[[page]](https://openaccess.thecvf.com/content_cvpr_2013/papers/Salas-Moreno_SLAM_Simultaneous_Localisation_2013_CVPR_paper.pdf)

* **DTAM: Dense tracking and mapping in real-time**, ICCV, 2011  
Newcombe, Richard A, Steven J, Lovegrove, Andrew J, Davison.  
[[page]](https://ieeexplore.ieee.org/abstract/document/6126513/)

* **MonoSLAM: Real-time single camera SLAM**, IEEE T-PAMI, 2007.  
Davison, Andrew J, Ian D, Reid, Nicholas D, Molton, Olivier, Stasse.   
[[page]](http://www.doc.ic.ac.uk/~ajd/Publications/davison_etal_pami2007.pdf)

* **A multi-state constraint Kalman filter for vision-aided inertial navigation**, IROS, 2007  
Mourikis, Anastasios I, Stergios I, Roumeliotis.   
[[page]](https://intra.engr.ucr.edu/~mourikis/tech_reports/TR_MSCKF.pdf)

* **Parallel tracking and mapping for small AR workspaces**, ISMAR, 2007  
Klein, Georg, David, Murray.   
[[page]](https://ieeexplore.ieee.org/abstract/document/4538852/)

### 3D Visual Perception and Grounding
* **ReasonGrounder: LVLM-Guided Hierarchical Feature Splatting for Open-Vocabulary 3D Visual Grounding**, CVPR, 2025  
Zhenyang Liu, Yikai Wang, Sixiao Zheng, Tongying Pan, Longfei Liang, Yanwei Fu, Xiangyang Xue.  
[[page]](https://arxiv.org/pdf/2503.23297)

* **ViGiL3D: A Linguistically Diverse Dataset for 3D Visual Grounding**, arXiv, 2025  
Austin T. Wang, ZeMing Gong, Angel X. Chang.  
[[page]](https://arxiv.org/pdf/2501.01366)

* **UAD: Unsupervised Affordance Distillation for Generalization in Robotic Manipulation**, ICRA, 2025
Yihe Tang, Wenlong Huang, Yingke Wang, Chengshu Li, Roy Yuan, Ruohan Zhang, Jiajun Wu, Li Fei-Fei  
[[page]](https://openreview.net/pdf?id=an953WOpo2)

* **Grounding 3D Object Affordance with Language Instructions, Visual Observations and Interactions**, arxiv, 2025  
He Zhu, Quyu Kong, Kechun Xu, Xunlong Xia, Bing Deng, Jieping Ye, Rong Xiong, Yue Wang  
[[page]](https://arxiv.org/pdf/2504.04744)  

* **3D-AffordanceLLM: Harnessing Large Language Models for Open-Vocabulary Affordance Detection in 3D Worlds**, arxiv, 2025  
Hengshuo Chu, Xiang Deng, Qi Lv, Xiaoyang Chen, Yinchuan Li, Jianye Hao, Liqiang Nie  
[[page]](https://arxiv.org/pdf/2502.20041)  

* **SeqAfford: Sequential 3D affordance reasoning via Multimodal Large Language Model**, CVPR, 2025  
Hanqing Wang, Chunlin Yu, Haoyang Luo, Jingyi Yu, Ye Shi, Jingya Wang  
[[page]](https://arxiv.org/pdf/2412.01550) 

* **GEAL: Generalizable 3D Affordance Learning with Cross-Modal Consistency**, CVPR, 2025  
Dongyue Lu, Lingdong Kong, Tianxin Huang, Gim Hee Lee  
[[page]](https://arxiv.org/pdf/2412.09511)  

* **GREAT: Geometry-Intention Collaborative Inference for Open-Vocabulary 3D Object Affordance Grounding**, arxiv, 2024  
Yawen Shao, Wei Zhai, Yuhang Yang, Hongchen Luo, Yang Cao, Zheng-Jun Zha, CVPR, 2025 
[[page]](https://arxiv.org/pdf/2411.19626)  

* **LASO: Language-guided affordance segmentation on 3d object**, CVPR, 2024  
Yicong Li, Na Zhao, Junbin Xiao, Chun Feng, Xiang Wang, Tat-seng Chua  
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Li_LASO_Language-guided_Affordance_Segmentation_on_3D_Object_CVPR_2024_paper.pdf)  

* **SceneFun3D: fine-grained functionality and affordance understanding in 3D scenes**, CVPR, 2024  
Alexandros Delitzas, Ayca Takmaz, Federico Tombari, Robert Sumner, Marc Pollefeys, Francis Engelmann  
[[page]](https://openaccess.thecvf.com/content/CVPR2024/html/Delitzas_SceneFun3D_Fine-Grained_Functionality_and_Affordance_Understanding_in_3D_Scenes_CVPR_2024_paper.html)  

* **Language-conditioned affordance-pose detection in 3d point clouds**, ICRA, 2024  
Toan Nguyen, Minh Nhat Vu, Baoru Huang, Tuan Van Vo, Vy Truong, Ngan Le, Thieu Vo, Bac Le, Anh Nguyen  
[[page]](https://arxiv.org/pdf/2309.10911)   

* **DSPNet: Dual-vision Scene Perception for Robust 3D Question Answering**, CVPR, 2025        
Jingzhou Luo, Yang Liu, Weixing Chen, Zhen Li, Yaowei Wang, Guanbin Li, Liang Lin                                   
[[page]](https://arxiv.org/pdf/2503.03190)[project](https://github.com/LZ-CH/DSPNet)    

* **Learning 2D Invariant Affordance Knowledge for 3D Affordance Grounding**, arxiv, 2024        
Xianqiang Gao, Pingrui Zhang, Delin Qu, Dong Wang, Zhigang Wang, Yan Ding, Bin Zhao, Xuelong Li                               
[[page]](https://arxiv.org/pdf/2408.13024)

* **EmbodiedSAM: Online Segment Any 3D Thing in Real Time**, arxiv, 2024        
Xiuwei Xu, Huangxing Chen, Linqing Zhao, Ziwei Wang, Jie Zhou, Jiwen Lu                          
[[page]](https://arxiv.org/pdf/2408.11811)

* **OpenScan: A Benchmark for Generalized Open-Vocabulary 3D Scene Understanding**, arxiv, 2024        
Youjun Zhao, Jiaying Lin, Shuquan Ye, Qianshi Pang, Rynson W.H. Lau                           
[[page]](https://arxiv.org/pdf/2408.11030)

* **LLMI3D: Empowering LLM with 3D Perception from a Single 2D Image**, arxiv, 2024       
Fan Yang, Sicheng Zhao, Yanhao Zhang, Haoxiang Chen, Hui Chen, Wenbo Tang, Haonan Lu, Pengfei Xu, Zhenyu Yang, Jungong Han, Guiguang Ding                      
[[page]](https://arxiv.org/pdf/2408.07422)

* **MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations**, arxiv, 2024       
Ruiyuan Lyu, Tai Wang, Jingli Lin, Shuai Yang, Xiaohan Mao, Yilun Chen, Runsen Xu, Haifeng Huang, Chenming Zhu, Dahua Lin, Jiangmiao Pang                   
[[page]](https://arxiv.org/pdf/2406.09401)

* **ShapeLLM: Universal 3D Object Understanding for Embodied Interaction**, arxiv, 2024          
Zekun Qi, Runpei Dong, Shaochen Zhang, Haoran Geng, Chunrui Han, Zheng Ge, He Wang, Li Yi, Kaisheng Ma      
[[page]](https://qizekun.github.io/shapellm/)

* **LEO: An Embodied Generalist Agent in 3D World**, ICML, 2024      
Jiangyong Huang, Silong Yong, Xiaojian Ma, Xiongkun Linghu, Puhao Li, Yan Wang, Qing Li, Song-Chun Zhu, Baoxiong Jia, and Siyuan Huang   
[[page]](https://embodied-generalist.github.io/)    

* **SceneVerse: Scaling 3D Vision-Language Learning for Grounded Scene Understanding**, ECCV, 2024    
Baoxiong Jia, Yixin Chen, Huangyue Yu, Yan Wang, Xuesong Niu, Tengyu Liu, Qing Li, and Siyuan Huang    
[[page]](https://scene-verse.github.io/)    

* **PQ3D: Unifying 3D Vision-Language Understanding via Promptable Queries**, ECCV, 2024     
Ziyu Zhu, Zhuofan Zhang, Xiaojian Ma, Xuesong Niu, Yixin Chen, Baoxiong Jia, Zhidong Deng, Siyuan Huang, and Qing Li    
[[page]](https://3d-vista.github.io/)

* **MultiPLY: A Multisensory Object-Centric Embodied Large Language Model in 3D World**, CVPR, 2024     
Yining Hong, Zishuo Zheng, Peihao Chen, Yian Wang, Junyan Li, Chuang Gan     
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Hong_MultiPLY_A_Multisensory_Object-Centric_Embodied_Large_Language_Model_in_3D_CVPR_2024_paper.pdf)

* **MP5: A Multi-modal Open-ended Embodied System in Minecraft via Active Perception**, CVPR, 2024     
Yiran Qin, Enshen Zhou, Qichang Liu, Zhenfei Yin, Lu Sheng, Ruimao Zhang, Yu Qiao, Jing Shao        
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Qin_MP5_A_Multi-modal_Open-ended_Embodied_System_in_Minecraft_via_Active_CVPR_2024_paper.pdf)

* **MaskClustering: View Consensus based Mask Graph Clustering for Open-Vocabulary 3D Instance Segmentation**, CVPR, 2024     
Mi Yan, Jiazhao Zhang, Yan Zhu, He Wang            
[[page]](https://arxiv.org/pdf/2401.07745)

* **TACO: Benchmarking Generalizable Bimanual Tool-ACtion-Object Understanding**, CVPR, 2024     
Yun Liu, Haolin Yang, Xu Si, Ling Liu, Zipeng Li, Yuxiang Zhang, Yebin Liu, Li Yi                
[[page]](https://taco2024.github.io/)

* **EDA: Explicit Text-Decoupling and Dense Alignment for 3D Visual Grounding**, CVPR, 2023   
Wu, Yanmin and Cheng, Xinhua and Zhang, Renrui and Cheng, Zesen and Zhang, Jian   
[[page]](https://openaccess.thecvf.com/content/CVPR2023/papers/Wu_EDA_Explicit_Text-Decoupling_and_Dense_Alignment_for_3D_Visual_Grounding_CVPR_2023_paper.pdf)   

* **Affordpose: A large-scale dataset of hand-object interactions with affordance-driven hand pose**, ICCV, 2023  
Juntao Jian, Xiuping Liu, Manyi Li, Ruizhen Hu, Jian Liu  
[[page]](https://openaccess.thecvf.com/content/ICCV2023/html/Jian_AffordPose_A_Large-Scale_Dataset_of_Hand-Object_Interactions_with_Affordance-Driven_Hand_ICCV_2023_paper.html)

* **Grounding 3d object affordance from 2d interactions in images**, ICCV, 2023  
Yuhang Yang, Wei Zhai, Hongchen Luo, Yang Cao, Jiebo Luo, Zheng-Jun Zha  
[[page]](https://openaccess.thecvf.com/content/ICCV2023/html/Yang_Grounding_3D_Object_Affordance_from_2D_Interactions_in_Images_ICCV_2023_paper.html)  

* **3d-vista: Pre-trained transformer for 3d vision and text alignment**, ICCV, 2023       
Ziyu Zhu, Xiaojian Ma, Yixin Chen, Zhidong Deng, Siyuan Huang, and Qing Li      
[[page]](https://3d-vista.github.io/)    

* **LeaF: Learning Frames for 4D Point Cloud Sequence Understanding**, ICCV, 2023       
Yunze Liu, Junyu Chen, Zekai Zhang, Li Yi        
[[page]](https://openaccess.thecvf.com/content/ICCV2023/papers/Liu_LeaF_Learning_Frames_for_4D_Point_Cloud_Sequence_Understanding_ICCV_2023_paper.pdf)

* **SQA3D: Situated Question Answering in 3D Scenes**, ICLR, 2023    
Xiaojian Ma, Silong Yong, Zilong Zheng, Qing Li, Yitao Liang, Song-Chun Zhu, and Siyuan Huang    
[[page]]([https://sqa3d.github.io/)

* **LLM-Grounder: Open-Vocabulary 3D Visual Grounding with Large Language Model as an Agent**, arXix, 2023   
Yang, Jianing and Chen, Xuweiyi and Qian, Shengyi and Madaan, Nikhil and Iyengar, Madhavan and Fouhey, David F and Chai, Joyce   
[[page]](https://arxiv.org/pdf/2309.12311)   

* **Visual Programming for Zero-shot Open-Vocabulary 3D Visual Grounding**, arXix, 2023   
Yuan, Zhihao and Ren, Jinke and Feng, Chun-Mei and Zhao, Hengshuang and Cui, Shuguang and Li, Zhen   
[[page]](https://arxiv.org/pdf/2311.15383)

* **Multi-view transformer for 3D visual grounding**, CVPR, 2022   
Huang, Shijia and Chen, Yilun and Jia, Jiaya and Wang, Liwei   
[[page]](https://arxiv.org/pdf/2204.02174)    

* **Look Around and Refer: 2D Synthetic Semantics Knowledge Distillation for 3D Visual Grounding**, CVPR, 2022   
Bakr, Eslam and Alsaedy, Yasmeen and Elhoseiny, Mohamed   
[[page]](https://arxiv.org/pdf/2211.14241)   

* **3D-SPS: Single-Stage 3D Visual Grounding via Referred Point Progressive Selection**, CVPR, 2022   
Luo, Junyu and Fu, Jiahui and Kong, Xianghao and Gao, Chen and Ren, Haibing and Shen, Hao and Xia, Huaxia and Liu, Si   
[[page]](https://arxiv.org/pdf/2204.06272)    

* **Bottom Up Top Down Detection Transformers for Language Grounding in Images and Point Clouds**, ECCV, 2022   
Jain, Ayush and Gkanatsios, Nikolaos and Mediratta, Ishita and Fragkiadaki, Katerina   
[[page]](https://arxiv.org/pdf/2112.08879)   

* **3d affordancenet: A benchmark for visual object affordance understanding**, CVPR, 2021  
Shengheng Deng, Xun Xu, Chaozheng Wu, Ke Chen, Kui Jia  
[[page]](https://openaccess.thecvf.com/content/CVPR2021/html/Deng_3D_AffordanceNet_A_Benchmark_for_Visual_Object_Affordance_Understanding_CVPR_2021_paper.html)

* **Text-guided graph neural networks for referring 3D instance segmentation**, AAAI, 2021   
Huang, Pin-Hao and Lee, Han-Hung and Chen, Hwann-Tzong and Liu, Tyng-Luh   
[[page]](https://ojs.aaai.org/index.php/AAAI/article/view/16253/16060)   

* **InstanceRefer: Cooperative Holistic Understanding for Visual Grounding on Point Clouds through Instance Multi-level Contextual Referring**, ICCV, 2021   
Yuan, Zhihao and Yan, Xu and Liao, Yinghong and Zhang, Ruimao and Wang, Sheng and Li, Zhen and Cui, Shuguang   
[[page]](https://arxiv.org/pdf/2103.01128)   

* **Free-form Description Guided 3D Visual Graph Network for Object Grounding in Point Cloud**, CVPR, 2021   
Feng, Mingtao and Li, Zhen and Li, Qi and Zhang, Liang and Zhang, XiangDong and Zhu, Guangming and Zhang, Hui and Wang, Yaonan and Mian, Ajmal   
[[page]](https://arxiv.org/pdf/2103.16381)   

* **SAT: 2D Semantics Assisted Training for 3D Visual Grounding**, CVPR, 2021   
Yang, Zhengyuan and Zhang, Songyang and Wang, Liwei and Luo, Jiebo   
[[page]](https://arxiv.org/pdf/2105.11450)   

* **LanguageRefer: Spatiallanguage model for 3D visual grounding**, CVPR, 2021   
Roh, Junha and Desingh, Karthik and Farhadi, Ali and Fox, Dieter   
[[page]](https://arxiv.org/pdf/2107.03438)   

* **3DVG-Transformer: Relation Modeling for Visual Grounding on Point Clouds**, ICCV, 2021    
Zhao, Lichen and Cai, Daigang and Sheng, Lu and Xu, Dong    
[[page]](https://openaccess.thecvf.com/content/ICCV2021/papers/Zhao_3DVG-Transformer_Relation_Modeling_for_Visual_Grounding_on_Point_Clouds_ICCV_2021_paper.pdf)    

* **TransRefer3D: Entity-and-relation aware transformer for fine-grained 3D visual grounding**, CVPR, 2021    
He, Dailan and Zhao, Yusheng and Luo, Junyu and Hui, Tianrui and Huang, Shaofei and Zhang, Aixi and Liu, Si
[[page]](https://arxiv.org/pdf/2108.02388)   

* **ScanRefer: 3D Object Localization in RGB-D Scans using Natural Language**, ECCV, 2020    
Chen, Dave Zhenyu and Chang, Angel X and Nie{\ss}ner, Matthias    
[[page]](https://arxiv.org/pdf/1912.08830)    

* **ReferIt3D: Neural Listeners for Fine-Grained 3D Object Identification in Real-World Scenes**, ECCV, 2020   
Achlioptas, Panos and Abdelreheem, Ahmed and Xia, Fei and Elhoseiny, Mohamed and Guibas, Leonidas   
[[page]](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123460409.pdf)   


### Visual Language Navigation

* **NavSpace: How Navigation Agents Follow Spatial Intelligence Instructions**, ICRA, 2026.       
Haolin Yang, Yuxing Long, Zhuoyuan Yu, Zihan Yang, Minghan Wang, Jiapeng Xu, Yihan Wang, Ziyan Yu, Wenzhe Cai, Lei Kang, Hao Dong.             
[[Paper](https://arxiv.org/abs/2510.08173)] [[Project](https://github.com/TidalHarley/NavSpace)]

* **WMNav: Integrating Vision-Language Models into World Models for Object Goal Navigation**, IROS, 2025.       
Dujun Nie, Xianda Guo, Yiqun Duan, Ruijun Zhang, Long Chen.             
[[Paper](https://arxiv.org/abs/2503.02247)] [[Project](https://b0b8k1ng.github.io/WMNav/)]

* **SmartWay: Enhanced Waypoint Prediction and Backtracking for Zero-Shot Vision-and-Language Navigation**, IROS, 2025.       
Xiangyu Shi, Zerui Li, Wenqi Lyu, Jiatong Xia, Feras Dayoub, Yanyuan Qiao, Qi Wu.             
[[Paper](https://arxiv.org/abs/2503.10069)]

* **EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents**, arXiv, 2025.       
Rui Yang, Hanyang Chen, Junyu Zhang, Mark Zhao, Cheng Qian, Kangrui Wang, Qineng Wang, Teja Venkat Koripella, Marziyeh Movahedi, Manling Li, Heng Ji, Huan Zhang, Tong Zhang.             
[[Paper](https://arxiv.org/abs/2502.09560)] [[Project](https://embodiedbench.github.io)]

* **MapNav: A Novel Memory Representation via Annotated Semantic Maps for VLM-based Vision-and-Language Navigation**, arXiv, 2025.       
Lingfeng Zhang, Xiaoshuai Hao, Qinwen Xu, Qiang Zhang, Xinyao Zhang, Pengwei Wang, Jing Zhang, Zhongyuan Wang, Shanghang Zhang, Renjing Xu.             
[[Paper](https://arxiv.org/abs/2502.13451)]

* **Towards Long-Horizon Vision-Language Navigation: Platform, Benchmark and Method**, CVPR, 2025.       
Xinshuai Song, Weixing Chen, Yang Liu, Weikai Chen, Guanbin Li, Liang Lin.             
[[page](https://arxiv.org/pdf/2412.09082)][project](https://hcplab-sysu.github.io/LH-VLN/)   

* **DivScene: Benchmarking LVLMs for Object Navigation with Diverse Scenes and Objects**, arxiv, 2024.     
Zhaowei Wang, Hongming Zhang, Tianqing Fang, Ye Tian, Yue Yang, Kaixin Ma, Xiaoman Pan, Yangqiu Song, Dong Yu.     
[[Paper](https://arxiv.org/abs/2410.02730)] [[Project](https://zhaowei-wang-nlp.github.io/divscene-project-page/)]

* **MapGPT: Map-Guided Prompting with Adaptive Path Planning for Vision-and-Language Navigation**, ACL, 2024.       
Jiaqi Chen, Bingqian Lin, Ran Xu, Zhenhua Chai, Xiaodan Liang, Kwan-Yee K. Wong.             
[[page](https://chen-judge.github.io/MapGPT/)]

* **NavCoT: Boosting LLM-Based Vision-and-Language Navigation via Learning Disentangled Reasoning**, ArXiv, 2024.      
Bingqian Lin, Yunshuang Nie, Ziming Wei, Jiaqi Chen, Shikui Ma, Jianhua Han, Hang Xu, Xiaojun Chang, Xiaodan Liang.             
[[page](https://arxiv.org/abs/2403.07376)]       

* **OMEGA: Efficient Occlusion-Aware Navigation for Air-Ground Robot in Dynamic Environments via State Space Model**, ArXiv, 2024.      
Junming Wang, Dong Huang, Xiuxian Guan, Zekai Sun, Tianxiang Shen, Fangming Liu, Heming Cui.         
[[page](https://arxiv.org/pdf/2408.10618)]

* **CoVLA: Comprehensive Vision-Language-Action Dataset for Autonomous Driving**, ArXiv, 2024.      
Hidehisa Arai, Keita Miwa, Kento Sasaki, Yu Yamaguchi, Kohei Watanabe, Shunsuke Aoki, Issei Yamamoto.         
[[page](https://arxiv.org/pdf/2408.10845)]

* **FLAME: Learning to Navigate with Multimodal LLM in Urban Environments**, ArXiv, 2024.      
Yunzhe Xu, Yiyuan Pan, Zhe Liu, Hesheng Wang.       
[[page](https://arxiv.org/pdf/2408.11051)]

* **Affordances-Oriented Planning using Foundation Models for Continuous Vision-Language Navigation**, ArXiv, 2024.      
Jiaqi Chen, Bingqian Lin, Xinmin Liu, Xiaodan Liang, Kwan-Yee K Wong.         
[[page](https://arxiv.org/pdf/2407.05890)]

* **Embodied Instruction Following in Unknown Environments**, ArXiv, 2024.      
Wu, Wang, Xu, Lu, Yan.       
[[page](https://arxiv.org/pdf/2406.11818)]       

* **DISCO: Embodied Navigation and Interaction via Differentiable Scene Semantics and Dual-level Control**, arxiv, 2024.                
Xinyu Xu, Shengcheng Luo, Yanchao Yang, Yong-Lu Li, Cewu Lu.              
[[page]](https://arxiv.org/abs/2407.14758)

* **NOLO: Navigate Only Look Once**, arxiv, 2024.                
Bohan Zhou, Jiangxing Wang, Zongqing Lu.              
[[page]](https://arxiv.org/pdf/2408.01384)

* **Towards Learning a Generalist Model for Embodied Navigation**, CVPR, 2024.    
Duo Zheng, , Shijia Huang, Lin Zhao, Yiwu Zhong, Liwei Wang.     
[[page](https://arxiv.org/pdf/2312.02010)]     

* **Fast-Slow Test-time Adaptation for Online Vision-and-Language Navigation** ICML, 2024.    
Junyu Gao, , Xuan Yao, Changsheng Xu.    
[[page](https://arxiv.org/pdf/2311.13209)]   

* **Discuss before moving: Visual language navigation via multi-expert discussions**, ICRA, 2024.   
Long, Yuxing, Xiaoqi, Li, Wenzhe, Cai, Hao, Dong.    
[[page](https://arxiv.org/pdf/2309.11382)]    

* **Vision-and-Language Navigation via Causal Learning**, CVPR, 2024.   
Liuyi Wang, Qijun Chen.    
[[page](https://arxiv.org/pdf/2404.10241)]   

* **Volumetric Environment Representation for Vision-Language Navigation**, CVPR, 2024.   
Rui Liu, Yi Yang.    
[[page](https://arxiv.org/pdf/2403.14158)]    

* **Lookahead Exploration with Neural Radiance Representation for Continuous Vision-Language Navigation**, CVPR 2024.   
Wang, Zihan, Xiangyang, Li, Jiahao, Yang, Yeqi, Liu, Junjie, Hu, Ming, Jiang, Shuqiang, Jiang. 
[[page](https://arxiv.org/pdf/2404.01943)]    

* **Bridging zero-shot object navigation and foundation models through pixel-guided navigation skill** ICRA, 2024.           
Wenzhe Cai, Siyuan Huang, Guangran Cheng, Yuxing Long, Peng Gao, Changyin Sun, and Hao Dong.       
[[page]](https://github.com/wzcai99/Pixel-Navigator)      

* **OVER-NAV: Elevating Iterative Vision-and-Language Navigation with Open-Vocabulary Detection and StructurEd Representation**, CVPR, 2024.              
Ganlong Zhao, Guanbin Li, Weikai Chen, Yizhou Yu.           
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhao_OVER-NAV_Elevating_Iterative_Vision-and-Language_Navigation_with_Open-Vocabulary_Detection_and_StructurEd_CVPR_2024_paper.pdf)     

* **RILA: Reflective and Imaginative Language Agent for Zero-Shot Semantic Audio-Visual Navigation**, CVPR, 2024.                
Zeyuan Yang, Jiageng Liu, Peihao Chen, Anoop Cherian, Tim K. Marks, Jonathan Le Roux, Chuang Gan.       
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Yang_RILA_Reflective_and_Imaginative_Language_Agent_for_Zero-Shot_Semantic_Audio-Visual_CVPR_2024_paper.pdf)   

* **Towards Learning a Generalist Model for Embodied Navigation**, CVPR, 2024.                
Duo Zheng, Shijia Huang, Lin Zhao, Yiwu Zhong, Liwei Wang.       
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Zheng_Towards_Learning_a_Generalist_Model_for_Embodied_Navigation_CVPR_2024_paper.pdf)

* **Vision-and-Language Navigation via Causal Learning**, CVPR, 2024.                
Liuyi Wang, Zongtao He, Ronghao Dang, Mengjiao Shen, Chengju Liu, Qijun Chen.        
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_Vision-and-Language_Navigation_via_Causal_Learning_CVPR_2024_paper.pdf)

* **Instance-aware Exploration-Verification-Exploitation for Instance ImageGoal Navigation**, CVPR, 2024.                
Xiaohan Lei, Min Wang, Wengang Zhou, Li Li, Houqiang Li.     
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Lei_Instance-aware_Exploration-Verification-Exploitation_for_Instance_ImageGoal_Navigation_CVPR_2024_paper.pdf)

* **Habitat Synthetic Scenes Dataset (HSSD-200): An Analysis of 3D Scene Scale and Realism Tradeoffs for ObjectGoal Navigation**, CVPR, 2024.                
Mukul Khanna, Yongsen Mao, Hanxiao Jiang, Sanjay Haresh, Brennan Shacklett, Dhruv Batra, Alexander Clegg, Eric Undersander, Angel X. Chang, Manolis Savva.     
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Khanna_Habitat_Synthetic_Scenes_Dataset_HSSD-200_An_Analysis_of_3D_Scene_CVPR_2024_paper.pdf)

* **SchurVINS: Schur Complement-Based Lightweight Visual Inertial Navigation System**, CVPR, 2024.                
Yunfei Fan, Tianyu Zhao, Guidong Wang.     
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Fan_SchurVINS_Schur_Complement-Based_Lightweight_Visual_Inertial_Navigation_System_CVPR_2024_paper.pdf)

* **SPOC: Imitating Shortest Paths in Simulation Enables Effective Navigation and Manipulation in the Real World**, CVPR, 2024.                
Kiana Ehsani, Tanmay Gupta, Rose Hendrix, Jordi Salvador, Luca Weihs, Kuo-Hao Zeng, Kunal Pratap Singh, Yejin Kim, Winson Han, Alvaro Herrasti, Ranjay Krishna, Dustin Schwenk, Eli VanderBilt, Aniruddha Kembhavi.  
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Ehsani_SPOC_Imitating_Shortest_Paths_in_Simulation_Enables_Effective_Navigation_and_CVPR_2024_paper.pdf)

* **Volumetric Environment Representation for Vision-Language Navigation**, CVPR, 2024.                
Rui Liu, Wenguan Wang, Yi Yang.     
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Liu_Volumetric_Environment_Representation_for_Vision-Language_Navigation_CVPR_2024_paper.pdf)

* **GOAT-Bench: A Benchmark for Multi-Modal Lifelong Navigation**, CVPR, 2024.                
Xiaohan Wang, Yuehu Liu, Xinhang Song, Yuyi Liu, Sixian Zhang, Shuqiang Jiang.        
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Khanna_GOAT-Bench_A_Benchmark_for_Multi-Modal_Lifelong_Navigation_CVPR_2024_paper.pdf)

* **An Interactive Navigation Method with Effect-oriented Affordance**, CVPR, 2024.                
Xiaohan Wang, Yuehu Liu, Xinhang Song, Yuyi Liu, Sixian Zhang, Shuqiang Jiang.      
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_An_Interactive_Navigation_Method_with_Effect-oriented_Affordance_CVPR_2024_paper.pdf)

* **Imagine Before Go: Self-Supervised Generative Map for Object Goal Navigation**, CVPR, 2024.                
Sixian Zhang, Xinyao Yu, Xinhang Song, Xiaohan Wang, Shuqiang Jiang.         
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhang_Imagine_Before_Go_Self-Supervised_Generative_Map_for_Object_Goal_Navigation_CVPR_2024_paper.pdf)

* **MemoNav: Working Memory Model for Visual Navigation**, CVPR, 2024.                
Hongxin Li, Zeyu Wang, Xu Yang, Yuran Yang, Shuqi Mei, Zhaoxiang Zhang.         
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Li_MemoNav_Working_Memory_Model_for_Visual_Navigation_CVPR_2024_paper.pdf)

* **Versatile Navigation Under Partial Observability via Value-guided Diffusion Policy**, CVPR, 2024.                
Gengyu Zhang, Hao Tang, Yan Yan.         
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhang_Versatile_Navigation_Under_Partial_Observability_via_Value-guided_Diffusion_Policy_CVPR_2024_paper.pdf)

* **Lookahead Exploration with Neural Radiance Representation for Continuous Vision-Language Navigation**, CVPR, 2024.                
Zihan Wang, Xiangyang Li, Jiahao Yang, Yeqi Liu, Junjie Hu, Ming Jiang, Shuqiang Jiang.    
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_Lookahead_Exploration_with_Neural_Radiance_Representation_for_Continuous_Vision-Language_Navigation_CVPR_2024_paper.pdf)

* **SPIN: Simultaneous Perception Interaction and Navigation**, CVPR, 2024.                
Shagun Uppal, Ananye Agarwal, Haoyu Xiong, Kenneth Shaw, Deepak Pathak.    
[[page]](https://openaccess.thecvf.com/content/CVPR2024/papers/Uppal_SPIN_Simultaneous_Perception_Interaction_and_Navigation_CVPR_2024_paper.pdf)

* **Correctable Landmark Discovery via Large Models for Vision-Language Navigation**, TPAMI, 2024.              
Bingqian Lin, Yunshuang Nie, Ziming Wei, Yi Zhu, Hang Xu, Shikui Ma, Jianzhuang Liu, Xiaodan Liang.           
[[page]](https://ieeexplore.ieee.org/abstract/document/10543121)

* **ETPNav: Evolving Topological Planning for Vision-Language Navigation in Continuous Environments**, IEEE T-PAMI, 2024.   
An, Dong, Hanqing, Wang, Wenguan, Wang, Zun, Wang, Yan, Huang, Keji, He, Liang, Wang. 
[[page](https://arxiv.org/pdf/2304.03047)]

* **NaVid: Video-based VLM Plans the Next Step for Vision-and-Language Navigation**, RSS, 2024.   
Jiazhao Zhang, Kunyu Wang, Rongtao Xu, Gengze Zhou, Yicong Hong, Xiaomeng Fang, Qi Wu, Zhizheng Zhang, He Wang.    
[[page](https://arxiv.org/pdf/2402.15852)]

* **March in Chat: Interactive Prompting for Remote Embodied Referring Expression**, ICCV, 2023.   
Qiao, Yanyuan, Yuankai, Qi, Zheng, Yu, Jing, Liu, Qi, Wu.    
[[page](https://arxiv.org/pdf/2308.10141)]     

* **Multi-level compositional reasoning for interactive instruction following**, AAAI, 2023.   
Bhambri, Suvaansh, Byeonghwi, Kim, Jonghyun, Choi.    
[[page](https://arxiv.org/pdf/2308.09387)]   

* **Vision and Language Navigation in the Real World via Online Visual Language Mapping**, ArXiv, 2023.   
Chengguang Xu, , Hieu T. Nguyen, Christopher Amato, Lawson L.S. Wong. 
[[page](https://arxiv.org/pdf/2310.10822)]    

* **Towards Deviation-robust Agent Navigation via Perturbation-aware Contrastive Learning**, TPAMI, 2023.              
Bingqian Lin, Yanxin Long, Yi Zhu, Fengda Zhu, Xiaodan Liang , Qixiang Ye, Liang Lin.           
[[page]](https://ieeexplore.ieee.org/abstract/document/10120966/)

* **Find What You Want: Learning Demand-conditioned Object Attribute Space for Demand-driven Navigation**, NIPS, 2023.   
Wang, Chen, Li, Wu, Dong.    
[[page](https://arxiv.org/pdf/2309.08138)]

* **HomeRobot: Open-Vocabulary Mobile Manipulation**, NIPS, 2023.   
Yenamandra, Sriram, Arun, Ramachandran, Karmesh, Yadav, Austin, Wang, Mukul, Khanna, Theophile, Gervet, Tsung-Yen, Yang, Vidhi, Jain, AlexanderWilliam, Clegg, John, Turner, Zsolt, Kira, Manolis, Savva, Angel, Chang, DevendraSingh, Chaplot, Dhruv, Batra, Roozbeh, Mottaghi, Yonatan, Bisk, Chris, Paxton.    
[[page](https://arxiv.org/pdf/2306.11565)]    

* **Behavior-1k: A benchmark for embodied ai with 1,000 everyday activities and realistic simulation**, Conference on Robot Learning. 2023.    
Li, Chengshu, Ruohan, Zhang, Josiah, Wong, Cem, Gokmen, Sanjana, Srivastava, Roberto, Mart\in-Mart\'\in, Chen, Wang, Gabrael, Levine, Michael, Lingelbach, Jiankai, Sun, others.    
[[page](https://arxiv.org/pdf/2403.09227)]

* **DialFRED: Dialogue-Enabled Agents for Embodied Instruction Following**, arXiv, 2022.   
Gao, Xiaofeng, Qiaozi, Gao, Ran, Gong, Kaixiang, Lin, Govind, Thattai, GauravS., Sukhatme.    
[[page](https://arxiv.org/pdf/2202.13330)]   

* **HOP: History-and-Order Aware Pretraining for Vision-and-Language Navigation**, CVPR, 2022.       
Qiao, Yanyuan, Yuankai, Qi, Yicong, Hong, Zheng, Yu, Peng, Wang, Qi, Wu.        
[[page](https://arxiv.org/pdf/2203.11591)]      

* **Bridging the Gap Between Learning in Discrete and Continuous Environments for Vision-and-Language Navigation**, CVPR, 2022.    
Hong, Yicong, Zun, Wang, Qi, Wu, Stephen, Gould.    
[[page](https://arxiv.org/pdf/2203.02764)]   

* **FILM: Following Instructions in Language with Modular Methods**, ICLR, 2022.   
So Yeon Min, , Devendra Singh Chaplot, Pradeep Kumar Ravikumar, Yonatan Bisk, Ruslan Salakhutdinov.    
[[page](https://arxiv.org/pdf/2110.07342)]   

* **LM-Nav: Robotic Navigation with Large Pre-Trained Models of Language, Vision, and Action**, Conference on Robot Learning. 2022.   
Dhruv Shah, , Blazej Osinski, Brian Ichter, Sergey Levine.      
[[page](https://arxiv.org/pdf/2207.04429)]

* **SOON: Scenario Oriented Object Navigation with Graph-based Exploration**, CVPR, 2021.      
Zhu, Fengda, Xiwen, Liang, Yi, Zhu, Qizhi, Yu, Xiaojun, Chang, Xiaodan, Liang.    
[[page](https://arxiv.org/pdf/2103.17138)]   

* **Vision-Language Navigation Policy Learning and Adaptation**, IEEE T-PAMI 43. 12(2021): 4205-4216.    
Wang, Xin, Qiuyuan, Huang, Asli, Celikyilmaz, Jianfeng, Gao, Dinghan, Shen, Yuan-Fang, Wang, William Yang, Wang, Lei, Zhang.    
[[page](https://arxiv.org/pdf/https://ieeexplore.ieee.org/document/8986691)]   

* **Neighbor-view enhanced model for vision and language navigation**, MM, 2021.   
An, Dong, Yuankai, Qi, Yan, Huang, Qi, Wu, Liang, Wang, Tieniu, Tan.    
[[page](https://arxiv.org/pdf/2107.07201)]   

* **Beyond the Nav-Graph: Vision-and-Language Navigation in Continuous Environments**, ECCV, 2020.         
Krantz, Jacob and Wijmans, Erik and Majumdar, Arjun and Batra, Dhruv and Lee, Stefan.   
[[page](https://arxiv.org/pdf/2004.02857)]

* **REVERIE: Remote Embodied Visual Referring Expression in Real Indoor Environments**, CVPR, 2020.   
Qi, Yuankai, Qi, Wu, Peter, Anderson, Xin, Wang, William Yang, Wang, Chunhua, Shen, Anton, Hengel.        
[[page](https://arxiv.org/pdf/1904.10151)]      

* **ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks**, CVPR, 2020.    
Shridhar, Mohit, Jesse, Thomason, Daniel, Gordon, Yonatan, Bisk, Winson, Han, Roozbeh, Mottaghi, Luke, Zettlemoyer, Dieter, Fox.    
[[page](https://arxiv.org/pdf/1912.01734)]   

* **Vision-and-dialog navigation**, Conference on Robot Learning. 2020.   
Thomason, Jesse, Michael, Murray, Maya, Cakmak, Luke, Zettlemoyer.    
[[page](https://arxiv.org/pdf/1907.04957)]   

* **Language and visual entity relationship graph for agent navigation**, NeurIPS, 2020.   
Hong, Yicong, Cristian, Rodriguez, Yuankai, Qi, Qi, Wu, Stephen, Gould.    
[[page](https://arxiv.org/pdf/2010.09304)]   

* **Language-Guided Navigation via Cross-Modal Grounding and Alternate Adversarial Learning**, IEEE T-CSVT 31. (2020): 3469-3481.    
Weixia Zhang, , Chao Ma, Qi Wu, Xiaokang Yang.    
[[page](https://arxiv.org/pdf/2011.10972)]   

* **Stay on the Path: Instruction Fidelity in Vision-and-Language Navigation**, ACL, 2019.   
Jain, Vihan, Gabriel, Magalhaes, Alexander, Ku, Ashish, Vaswani, Eugene, Ie, Jason, Baldridge.    
[[page](https://arxiv.org/pdf/1905.12255)]    

* **TOUCHDOWN: Natural Language Navigation and Spatial Reasoning in Visual Street Environments**, CVPR, 2019.   
Chen, Howard, Alane, Suhr, Dipendra, Misra, Noah, Snavely, Yoav, Artzi.    
[[page](https://arxiv.org/pdf/1811.12354)]

* **Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments**, CVPR, 2018.   
Anderson, Peter, Qi, Wu, Damien, Teney, Jake, Bruce, Mark, Johnson, Niko, Sunderhauf, Ian, Reid, Stephen, Gould, Anton, Hengel.    
[[page](https://arxiv.org/pdf/1711.07280)]    

* **Look Before You Leap: Bridging Model-Free and Model-Based Reinforcement Learning for Planned-Ahead Vision-and-Language Navigation**, ECCV, 2018.   
Xin Eric Wang, , Wenhan Xiong, Hongmin Wang, William Yang Wang.    
[[page](https://arxiv.org/pdf/1803.07729)]     

### Non-Visual Perception: Tactile

* **Sensor-Invariant Tactile Representation (SITR)**, ICLR, 2025.    
Harsh Gupta, Yuchen Mo, Shengmiao Jin, Wenzhen Yuan.    
[[page](https://arxiv.org/abs/2502.19638)]

* **Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation**, RSS, 2025.    
Han Xue, Jieji Ren, Wendi Chen, Gu Zhang, Yuan Fang, Guoying Gu, Huazhe Xu, Cewu Lu.    
[[page](https://arxiv.org/abs/2503.02881)]

* **3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing**, CoRL, 2024.    
Binghao Huang, Yixuan Wang, Xinyi Yang, Yiyue Luo, Yunzhu Li.    
[[page](https://arxiv.org/abs/2410.24091)]

* **TacSL: A Library for Visuotactile Sensor Simulation and Learning**, IEEE TRO, 2025.    
Iretiayo Akinola, Jie Xu, Jan Carius, Dieter Fox, Yashraj Narang.    
[[page](https://arxiv.org/abs/2408.06506)]

* **When Vision Meets Touch: A Contemporary Review for Visuotactile Sensors from the Signal Processing Perspective**, Arxiv, 2024.    
Li, Shoujie and Wang, Zihan and Wu, Changsheng and Li, Xiang and Luo, Shan and Fang, Bin and Sun, Fuchun and Zhang, Xiao-Ping and Ding, Wenbo.    
[[page](https://arxiv.org/pdf/2406.12226)]

* **Enhancing Generalizable 6D Pose Tracking of an In-Hand Object with Tactile Sensing**, RA-L, 2024.

<!-- opensource-radar:truncated -->
