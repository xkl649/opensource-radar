Anomaly Detection Learning Resources
====================================

.. image:: https://img.shields.io/github/stars/yzhao062/anomaly-detection-resources.svg
   :target: https://github.com/yzhao062/anomaly-detection-resources/stargazers
   :alt: GitHub stars


.. image:: https://img.shields.io/github/forks/yzhao062/anomaly-detection-resources.svg?color=blue
   :target: https://github.com/yzhao062/anomaly-detection-resources/network
   :alt: GitHub forks


.. image:: https://img.shields.io/github/license/yzhao062/anomaly-detection-resources.svg?color=blue
   :target: https://github.com/yzhao062/anomaly-detection-resources/blob/master/LICENSE
   :alt: License


.. image:: https://awesome.re/badge-flat2.svg
   :target: https://awesome.re/badge-flat2.svg
   :alt: Awesome


.. image:: https://img.shields.io/badge/ADBench-benchmark_results-pink
   :target: https://github.com/Minqi824/ADBench
   :alt: Benchmark


----

`Outlier Detection <https://en.wikipedia.org/wiki/Anomaly_detection>`_
(also known as *Anomaly Detection*) is an exciting yet challenging field,
which aims to identify outlying objects that are deviant from the general data distribution.
Outlier detection has been proven critical in many fields, such as credit card
fraud analytics, network intrusion detection, and mechanical unit defect detection.

**This repository collects**:


#. Books & Academic Papers 
#. Online Courses and Videos
#. Outlier Datasets
#. Open-source and Commercial Libraries/Toolkits
#. Key Conferences & Journals


**More items will be added to the repository**.
Please feel free to suggest other key resources by opening an issue report,
submitting a pull request, or dropping me an email @ (yzhao010@usc.edu).
Enjoy reading!

BTW, you may find my `[GitHub] <https://github.com/yzhao062>`_, `[USC FORTIS Lab] <https://github.com/USC-FORTIS>`_, and
`[Google Scholar] <https://scholar.google.com/citations?user=zoGDYsoAAAAJ&hl=en>`_ relevant,
especially `PyOD library <https://github.com/yzhao062/pyod>`_, `ADBench benchmark <https://github.com/Minqi824/ADBench>`_, and `NLP-ADBench: NLP Anomaly Detection Benchmark  <https://github.com/USC-FORTIS/NLP-ADBench>`_,.

----

Table of Contents
-----------------


* `1. Books & Tutorials & Benchmarks <#1-books--tutorials--benchmarks>`_

  * `1.1. Benchmarks <#13-benchmarks>`_
  * `1.2. Tutorials <#12-tutorials>`_
  * `1.3. Books <#11-books>`_

* `2. Courses/Seminars/Videos <#2-coursesseminarsvideos>`_
* `3. Toolbox & Datasets <#3-toolbox--datasets>`_

  * `3.1. Multivariate data outlier detection <#31-multivariate-data>`_
  * `3.2. Time series outlier detection <#32-time-series-outlier-detection>`_
  * `3.3. Graph Outlier Detection <#33-graph-outlier-detection>`_
  * `3.4. Real-time Elasticsearch <#34-real-time-elasticsearch>`_
  * `3.5. Datasets <#35-datasets>`_

* `4. Papers <#4-papers>`_

  * `4.1. LLM and LLM Agents for Anomaly Detection <#41-llm-and-llm-agents-for-anomaly-detection>`_
  * `4.2. Emerging and Interesting Topics <#42-emerging-and-interesting-topics>`_
  * `4.3. Weakly-supervised Methods <#43-weakly-supervised-methods>`_
  * `4.4. Machine Learning Systems for Outlier Detection <#44-machine-learning-systems-for-outlier-detection>`_
  * `4.5. Automated Outlier Detection <#45-automated-outlier-detection>`_
  * `4.6. Outlier Detection with Neural Networks <#46-outlier-detection-with-neural-networks>`_
  * `4.7. Interpretability <#47-interpretability>`_
  * `4.8. Representation Learning in Outlier Detection <#48-representation-learning-in-outlier-detection>`_
  * `4.9. Outlier Detection in Evolving Data <#49-outlier-detection-in-evolving-data>`_
  * `4.10. Outlier Ensembles <#410-outlier-ensembles>`_
  * `4.11. High-dimensional & Subspace Outliers <#411-high-dimensional--subspace-outliers>`_
  * `4.12. Feature Selection in Outlier Detection <#412-feature-selection-in-outlier-detection>`_
  * `4.13. Time Series Outlier Detection <#413-time-series-outlier-detection>`_
  * `4.14. Graph & Network Outlier Detection <#414-graph--network-outlier-detection>`_
  * `4.15. Key Algorithms <#415-key-algorithms>`_
  * `4.16. Overview & Survey Papers <#416-overview--survey-papers>`_
  * `4.17. Isolation-based Methods <#417-isolation-based-methods>`_
  * `4.18. Fairness and Bias in Outlier Detection <#418-fairness-and-bias-in-outlier-detection>`_
  * `4.19. Outlier Detection Applications <#419-outlier-detection-applications>`_
  * `4.20. Outlier Detection in Other fields <#420-outlier-detection-in-other-fields>`_
  * `4.21. Interactive Outlier Detection <#421-interactive-outlier-detection>`_
  * `4.22. Active Anomaly Detection <#422-active-anomaly-detection>`_


* `5. Key Conferences/Workshops/Journals <#5-key-conferencesworkshopsjournals>`_

  * `5.1. Conferences & Workshops <#51-conferences--workshops>`_
  * `5.2. Journals <#52-journals>`_


----


1. Books & Tutorials & Benchmarks
---------------------------------

1.1. Benchmarks
^^^^^^^^^^^^^^^

**News**: We have two new works on NLP-based and LLM-based anomaly detection:

- NLP-ADBench: NLP Anomaly Detection Benchmark
- AD-LLM: Benchmarking Large Language Models for Anomaly Detection

=============  =================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Data Types     Paper Title                                                                                        Venue                         Year   Ref                           Materials
=============  =================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
NLP            NLP-ADBench: NLP Anomaly Detection Benchmark                                                       Preprint                      2024   [#Li2024NLPADBench]_          `[PDF] <https://arxiv.org/abs/2412.04784>`_, `[Code] <https://github.com/USC-FORTIS/NLP-ADBench>`_
NLP            AD-LLM: Benchmarking Large Language Models for Anomaly Detection                                   Preprint                      2024   [#Yang2024ADLLM]_             `[PDF] <https://arxiv.org/abs/2412.11142>`_, `[Code] <https://github.com/USC-FORTIS/AD-LLM>`_
Time-series    The Elephant in the Room: Towards A Reliable Time-Series Anomaly Detection Benchmark               NeurIPS D&B                   2024   [#Liu2024Elephant]_           `[Homepage] <https://nips.cc/virtual/2024/poster/97690>`_, `[PDF] <https://papers.nips.cc/paper_files/paper/2024/file/c3f3c690b7a99fba16d0efd35cb83b2c-Paper-Datasets_and_Benchmarks_Track.pdf>`_, `[Code] <https://github.com/TheDatumOrg/TSB-AD>`_
Graph          GADBench: Revisiting and Benchmarking Supervised Graph Anomaly Detection                           NeurIPS                       2023   [#Tang2023GADBench]_          `[PDF] <https://arxiv.org/abs/2306.12251>`_, `[Code] <https://github.com/squareRoot3/GADBench>`_
Tabular        ADGym: Design Choices for Deep Anomaly Detection                                                   NeurIPS                       2023   [#Jiang2023adgym]_            `[PDF] <https://arxiv.org/abs/2309.15376>`_, `[Code] <https://github.com/Minqi824/ADGym>`_
Graph          Benchmarking Node Outlier Detection on Graphs                                                      NeurIPS                       2022   [#Liu2022Benchmarking]_       `[PDF] <https://arxiv.org/abs/2206.10071>`_, `[Code] <https://github.com/pygod-team/pygod/tree/main/benchmark>`_
Tabular        ADBench: Anomaly Detection Benchmark                                                               NeurIPS                       2022   [#Han2022Adbench]_            `[PDF] <https://arxiv.org/abs/2206.09426>`_, `[Code] <https://github.com/Minqi824/ADBench>`_
Time-series    Revisiting Time Series Outlier Detection: Definitions and Benchmarks                               NeurIPS                       2021   [#Lai2021Revisiting]_         `[PDF] <https://openreview.net/pdf?id=r8IvOsnHchr>`_, `[Code] <https://github.com/datamllab/tods/tree/benchmark>`_
=============  =================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


1.2. Tutorials
^^^^^^^^^^^^^^

===================================================== ============================================  =====  ============================  ==========================================================================================================================================================================
Tutorial Title                                        Venue                                         Year   Ref                           Materials
===================================================== ============================================  =====  ============================  ==========================================================================================================================================================================
Trustworthy Anomaly Detection                         SDM                                           2024   [#Yuan2024Trustworthy]_       `[HTML] <https://yuan.shuhan.org/talks/SDM24/>`_
Recent Advances in Anomaly Detection                  CVPR                                          2023   [#Pang2023recent]_            `[HTML] <https://sites.google.com/view/cvpr2023-tutorial-on-ad/>`_, `[Video] <https://www.youtube.com/watch?v=dXxrzWeybBo&feature=youtu.be>`_
Deep Learning for Anomaly Detection                   WSDM                                          2021   [#Pang2021Deep]_              `[HTML] <https://sites.google.com/site/gspangsite/wsdm21_tutorial>`_
Toward Explainable Deep Anomaly Detection             KDD                                           2021   [#Pang2021Toward]_            `[HTML] <https://sites.google.com/site/gspangsite/kdd21_tutorial>`_
Deep Learning for Anomaly Detection                   KDD                                           2020   [#Wang2020Deep]_              `[HTML] <https://sites.google.com/view/kdd2020deepeye/home>`_, `[Video] <https://www.youtube.com/watch?v=Fn0qDbKL3UI&list=PLn0nrSd4xjja7AD3aY9Jxmr820gx59EQC&index=66>`_
Which Outlier Detector Should I use?                  ICDM                                          2018   [#Ting2018Which]_             `[PDF] <https://ieeexplore.ieee.org/document/8594824>`_
Outlier detection techniques                          ACM SIGKDD                                    2010   [#Kriegel2010Outlier]_        `[PDF] <https://imada.sdu.dk/~zimek/publications/KDD2010/kdd10-outlier-tutorial.pdf>`_
Data mining for anomaly detection                     PKDD                                          2008   [#Lazarevic2008Data]_         `[Video] <http://videolectures.net/ecmlpkdd08_lazarevic_dmfa/>`_
===================================================== ============================================  =====  ============================  ==========================================================================================================================================================================


1.3. Books
^^^^^^^^^^

`Outlier Analysis <https://link.springer.com/book/10.1007/978-3-319-47578-3>`_ 
by Charu Aggarwal: Classical text book covering most of the outlier analysis techniques. 
A **must-read** for people in the field of outlier detection. `[Preview.pdf] <http://charuaggarwal.net/outlierbook.pdf>`_

`Outlier Ensembles: An Introduction <https://www.springer.com/gp/book/9783319547640>`_ 
by Charu Aggarwal and Saket Sathe: Great intro book for ensemble learning in outlier analysis.

`Data Mining: Concepts and Techniques (3rd) <https://www.elsevier.com/books/data-mining-concepts-and-techniques/han/978-0-12-381479-1>`_ 
by Jiawei Han and Micheline Kamber and Jian Pei: Chapter 12 discusses outlier detection with many key points. `[Google Search] <https://www.google.ca/search?&q=data+mining+jiawei+han&oq=data+ming+jiawei>`_


----

2. Courses/Seminars/Videos
--------------------------

**Coursera Introduction to Anomaly Detection (by IBM)**\ :
`[See Video] <https://www.coursera.org/learn/ai/lecture/ASPv0/introduction-to-anomaly-detection>`_

**Get started with the Anomaly Detection API (by IBM)**\ :
`[See Website] <https://developer.ibm.com/learningpaths/get-started-anomaly-detection-api/>`_

**Practical Anomaly Detection by appliedAI Institute**\:
`[See Website] <https://transferlab.ai/trainings/practical-anomaly-detection/>`_, `[See Video] <https://www.youtube.com/watch?v=sEoMIDARpJ0&list=PLz6xKPm1Bnd6cDDgct3MDhNWJuPXzsmyW>`_, `[See GitHub] <https://github.com/aai-institute/tfl-training-practical-anomaly-detection>`_

**Coursera Real-Time Cyber Threat Detection and Mitigation partly covers the topic**\ :
`[See Video] <https://www.coursera.org/learn/real-time-cyber-threat-detection>`_

**Coursera Machine Learning by Andrew Ng also partly covers the topic**\ :


* `Anomaly Detection vs. Supervised Learning <https://www.coursera.org/learn/machine-learning/lecture/Rkc5x/anomaly-detection-vs-supervised-learning>`_
* `Developing and Evaluating an Anomaly Detection System <https://www.coursera.org/learn/machine-learning/lecture/Mwrni/developing-and-evaluating-an-anomaly-detection-system>`_

**Udemy Outlier Detection Algorithms in Data Mining and Data Science**\ :
`[See Video] <https://www.udemy.com/outlier-detection-techniques/>`_

**Stanford Data Mining for Cyber Security** also covers part of anomaly detection techniques\ :
`[See Video] <http://web.stanford.edu/class/cs259d/>`_

----

3. Toolbox & Datasets
---------------------

[**Python+LLM Agent**] `OpenAD <https://github.com/USC-FORTIS/AD-AGENT>`_: AD-AGENT is a multi-agent framework designed to automate anomaly detection across diverse data modalities, including tabular, graph, time series, and more. It integrates modular agents, model selection strategies, and configurable pipelines to support extensible and interpretable detection workflows. The framework is under active development and aims to support both academic research and practical deployment.

3.1. Multivariate Data
^^^^^^^^^^^^^^^^^^^^^^

[**Python**] `Python Outlier Detection (PyOD) <https://github.com/yzhao062/pyod>`_\ : PyOD is a comprehensive and scalable Python toolkit for detecting outlying objects in multivariate data. It contains more than 20 detection algorithms, including emerging deep learning models and outlier ensembles.

[**Python**, **GPU**] `TOD: Tensor-based Outlier Detection (PyTOD) <https://github.com/yzhao062/pytod>`_: A general GPU-accelerated framework for outlier detection.

[**Python**] `Python Streaming Anomaly Detection (PySAD) <https://github.com/selimfirat/pysad>`_\ : PySAD is a streaming anomaly detection framework in Python, which provides a complete set of tools for anomaly detection experiments. It currently contains more than 15 online anomaly detection algorithms and 2 different methods to integrate PyOD detectors to the streaming setting.

[**Python**] `Scikit-learn Novelty and Outlier Detection <http://scikit-learn.org/stable/modules/outlier_detection.html>`_. It supports some popular algorithms like LOF, Isolation Forest, and One-class SVM.

[**Python**] `Scalable Unsupervised Outlier Detection (SUOD) <https://github.com/yzhao062/suod>`_\ : SUOD (Scalable Unsupervised Outlier Detection) is an acceleration framework for large-scale unsupervised outlier detector training and prediction, on top of PyOD.

[**Julia**] `OutlierDetection.jl <https://github.com/OutlierDetectionJL/OutlierDetection.jl>`_\ : OutlierDetection.jl is a Julia toolkit for detecting outlying objects, also known as anomalies.

[**Java**] `ELKI: Environment for Developing KDD-Applications Supported by Index-Structures <https://elki-project.github.io/>`_\ :
ELKI is an open source (AGPLv3) data mining software written in Java. The focus of ELKI is research in algorithms, with an emphasis on unsupervised methods in cluster analysis and outlier detection. 

[**Java**] `RapidMiner Anomaly Detection Extension <https://github.com/Markus-Go/rapidminer-anomalydetection>`_\ : The Anomaly Detection Extension for RapidMiner comprises the most well know unsupervised anomaly detection algorithms, assigning individual anomaly scores to data rows of example sets. It allows you to find data, which is significantly different from the normal, without the need for the data being labeled.

[**R**] `CRAN Task View: Anomaly Detection with R <https://github.com/pridiltal/ctv-AnomalyDetection>`_\ : This CRAN task view contains a list of packages that can be used for anomaly detection with R.

[**R**] `outliers package <https://cran.r-project.org/web/packages/outliers/index.html>`_\ : A collection of some tests commonly used for identifying outliers in R.

[**Matlab**] `Anomaly Detection Toolbox - Beta <http://dsmi-lab-ntust.github.io/AnomalyDetectionToolbox/>`_\ : A collection of popular outlier detection algorithms in Matlab.


3.2. Time Series Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

[**Python**] `TODS <https://github.com/datamllab/tods>`_\ : TODS is a full-stack automated machine learning system for outlier detection on multivariate time-series data.

[**Python**] `skyline <https://github.com/earthgecko/skyline>`_\ : Skyline is a near real time anomaly detection system.

[**Python**] `banpei <https://github.com/tsurubee/banpei>`_\ : Banpei is a Python package of the anomaly detection.

[**Python**] `telemanom <https://github.com/khundman/telemanom>`_\ : A framework for using LSTMs to detect anomalies in multivariate time series data.

[**Python**] `DeepADoTS <https://github.com/KDD-OpenSource/DeepADoTS>`_\ : A benchmarking pipeline for anomaly detection on time series data for multiple state-of-the-art deep learning methods.

[**Python**] `NAB: The Numenta Anomaly Benchmark <https://github.com/numenta/NAB>`_\ : NAB is a novel benchmark for evaluating algorithms for anomaly detection in streaming, real-time applications.

[**Python**] `CueObserve <https://github.com/cuebook/CueObserve>`_\ : Anomaly detection on SQL data warehouses and databases.

[**Python**] `Chaos Genius <https://github.com/chaos-genius/chaos_genius>`_\ : ML powered analytics engine for outlier/anomaly detection and root cause analysis.

[**R**] `CRAN Task View: Anomaly Detection with R <https://github.com/pridiltal/ctv-AnomalyDetection>`_\ : This CRAN task view contains a list of packages that can be used for anomaly detection with R.

[**R**] `AnomalyDetection <https://github.com/twitter/AnomalyDetection>`_\ : AnomalyDetection is an open-source R package to detect anomalies which is robust, from a statistical standpoint, in the presence of seasonality and an underlying trend.

[**R**] `anomalize <https://cran.r-project.org/web/packages/anomalize/>`_\ : The 'anomalize' package enables a "tidy" workflow for detecting anomalies in data.


3.3. Graph Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

[**Python**] `Python Graph Outlier Detection (PyGOD) <https://github.com/pygod-team/pygod/>`_\ : PyGOD is a Python library for graph outlier detection (anomaly detection). It includes more than 10 latest graph-based detection algorithms


3.4. Real-time Elasticsearch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

[**Open Distro**] `Real Time Anomaly Detection in Open Distro for Elasticsearch by Amazon <https://github.com/aws/random-cut-forest-by-aws>`_\ : A machine learning-based anomaly detection plugins for Open Distro for Elasticsearch. See `Real Time Anomaly Detection in Open Distro for Elasticsearch <https://opendistro.github.io/for-elasticsearch/blog/odfe-updates/2019/11/real-time-anomaly-detection-in-open-distro-for-elasticsearch/>`_.

[**Python**] `datastream.io <https://github.com/MentatInnovations/datastream.io>`_\ : An open-source framework for real-time anomaly detection using Python, Elasticsearch and Kibana.


3.5. Datasets
^^^^^^^^^^^^^

**NLP-ADBench**: NLP Anomaly Detection Benchmark and Datasets: https://github.com/USC-FORTIS/NLP-ADBench

**ELKI Outlier Datasets**\ : https://elki-project.github.io/datasets/outlier

**Outlier Detection DataSets (ODDS)**\ : http://odds.cs.stonybrook.edu/#table1

**Unsupervised Anomaly Detection Dataverse**\ : https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/OPQMVF

**Anomaly Detection Meta-Analysis Benchmarks**\ : https://ir.library.oregonstate.edu/concern/datasets/47429f155

**Skoltech Anomaly Benchmark (SKAB)**\ : https://github.com/waico/skab


----


4. Papers
---------

Recommended reading order (latest-first):

* `4.1. LLM and LLM Agents for Anomaly Detection <#41-llm-and-llm-agents-for-anomaly-detection>`_
* `4.2. Emerging and Interesting Topics <#42-emerging-and-interesting-topics>`_
* `4.3. Weakly-supervised Methods <#43-weakly-supervised-methods>`_
* `4.4. Machine Learning Systems for Outlier Detection <#44-machine-learning-systems-for-outlier-detection>`_
* `4.5. Automated Outlier Detection <#45-automated-outlier-detection>`_

4.1. LLM and LLM Agents for Anomaly Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

==============================================================================================================  ============================  =====  ============================  =====================================================================================================================================================================================
Paper Title                                                                                                     Venue                         Year   Ref                           Materials
==============================================================================================================  ============================  =====  ============================  =====================================================================================================================================================================================
AD-LLM: Benchmarking Large Language Models for Anomaly Detection                                                ACL 2025 Findings             2024   [#Yang2024ADLLM]_             `[PDF] <https://arxiv.org/abs/2412.11142>`_, `[Code] <https://github.com/USC-FORTIS/AD-LLM>`_
NLP-ADBench: NLP Anomaly Detection Benchmark                                                                    EMNLP 2025 Findings           2024   [#Li2024NLPADBench]_          `[PDF] <https://arxiv.org/abs/2412.04784>`_, `[Code] <https://github.com/USC-FORTIS/NLP-ADBench>`_
AD-AGENT: A Multi-agent Framework for End-to-end Anomaly Detection                                              Findings of IJCNLP-AACL       2025   [#Yang2025ADAGENT]_           `[PDF] <https://arxiv.org/abs/2505.12594>`_, `[Code] <https://github.com/USC-FORTIS/AD-AGENT>`_
LogSAD: Training-free Anomaly Detection with Vision & Language Foundation Models                                CVPR 2025                     2025   [#Zhang2025LogSAD]_           `[PDF] <https://arxiv.org/abs/2503.18325>`_, `[Code] <https://github.com/zhang0jhon/LogSAD>`_
MMAD: A Comprehensive Benchmark for Multimodal Large Language Models in Industrial Anomaly Detection            ICLR 2025                     2025   [#Jiang2025MMAD]_             `[PDF] <https://arxiv.org/abs/2410.09453>`_, `[Code] <https://github.com/jam-cc/MMAD>`_
Delving into Large Language Models for Effective Time-Series Anomaly Detection                                  NeurIPS 2025                  2025   [#Park2025LLMTSAD]_           `[PDF] <https://openreview.net/pdf?id=6rpy7X1Of8>`_, `[Code] <https://github.com/junwoopark92/LLM-TSAD>`_
==============================================================================================================  ============================  =====  ============================  =====================================================================================================================================================================================



4.2. Emerging and Interesting Topics
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                           Materials
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Clustering with Outlier Removal                                                                    TKDE                          2019   [#Liu2018Clustering]_         `[PDF] <https://arxiv.org/pdf/1801.01899.pdf>`_
Real-World Anomaly Detection by using Digital Twin Systems and Weakly-Supervised Learning          IEEE Trans. Ind. Informat.    2020   [#Castellani2020Siamese]_     `[PDF] <https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9179030>`_
SSD: A Unified Framework for Self-Supervised Outlier Detection                                     ICLR                          2021   [#Sehwag2021SSD]_             `[PDF] <https://openreview.net/pdf?id=v5gjXpmR8J>`_, `[Code] <https://github.com/inspire-group/SSD>`_
AD-LLM: Benchmarking Large Language Models for Anomaly Detection                                   Preprint                      2024   [#Yang2024ADLLM]_             `[PDF] <https://arxiv.org/abs/2412.11142>`_, `[Code] <https://github.com/USC-FORTIS/AD-LLM>`_
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.3. Weakly-Supervised Methods
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  ============================  =====  =============================  ==============================================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                            Materials
=================================================================================================  ============================  =====  =============================  ==============================================================================================================================================================================================
XGBOD: improving supervised outlier detection with unsupervised representation learning            IJCNN                         2018   [#Zhao2018Xgbod]_              `[PDF] <https://arxiv.org/abs/1912.00290>`_
Feature Encoding With Autoencoders for Weakly Supervised Anomaly Detection                         TNNLS                         2021   [#Zhou2021Feature]_            `[PDF] <https://arxiv.org/pdf/2105.10500.pdf>`_, `[Code] <https://github.com/yj-zhou/Feature_Encoding_with_AutoEncoders_for_Weakly-supervised_Anomaly_Detection>`_
=================================================================================================  ============================  =====  =============================  ==============================================================================================================================================================================================



4.4. Machine Learning Systems for Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This section summarizes a list of systems for outlier detection, which may
overlap with the section of tools and libraries.

=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                           Materials
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
PyOD: A Python Toolbox for Scalable Outlier Detection                                              JMLR                          2019   [#Zhao2019PYOD]_              `[PDF] <https://www.jmlr.org/papers/volume20/19-011/19-011.pdf>`_, `[Code] <https://github.com/yzhao062/pyod>`_
SUOD: Accelerating Large-Scale Unsupervised Heterogeneous Outlier Detection                        MLSys                         2021   [#Zhao2021SUOD]_              `[PDF] <https://arxiv.org/pdf/2003.05731.pdf>`_, `[Code] <https://github.com/yzhao062/suod>`_
TOD: Tensor-based Outlier Detection                                                                Preprint                      2021   [#Zhao2021TOD]_               `[PDF] <https://arxiv.org/pdf/2110.14007.pdf>`_, `[Code] <https://github.com/yzhao062/pytod>`_
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================



4.5. Automated Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                           Materials
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
AutoML: state of the art with a focus on anomaly detection, challenges, and research directions    Int J Data Sci Anal           2022   [#Bahri2022automl]_           `[PDF] <https://www.researchgate.net/publication/358364044_AutoML_state_of_the_art_with_a_focus_on_anomaly_detection_challenges_and_research_directions>`_
AutoOD: Automated Outlier Detection via Curiosity-guided Search and Self-imitation Learning        ICDE                          2020   [#Li2020AutoOD]_              `[PDF] <https://arxiv.org/pdf/2006.11321.pdf>`_
Automatic Unsupervised Outlier Model Selection                                                     NeurIPS                       2021   [#Zhao2020Automating]_        `[PDF] <https://openreview.net/forum?id=KCd-3Pz8VjM>`_, `[Code] <https://github.com/yzhao062/MetaOD>`_
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.6. Outlier Detection with Neural Networks
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                         Venue                         Year   Ref                           Materials
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Detecting spacecraft anomalies using lstms and nonparametric dynamic thresholding                   KDD                           2018   [#Hundman2018Detecting]_      `[PDF] <https://arxiv.org/pdf/1802.04431.pdf>`_, `[Code] <https://github.com/khundman/telemanom>`_
MAD-GAN: Multivariate Anomaly Detection for Time Series Data with Generative Adversarial Networks   ICANN                         2019   [#Li2019MAD]_                 `[PDF] <https://arxiv.org/pdf/1901.04997.pdf>`_, `[Code] <https://github.com/LiDan456/MAD-GANs>`_
Generative Adversarial Active Learning for Unsupervised Outlier Detection                           TKDE                          2019   [#Liu2019Generative]_         `[PDF] <https://arxiv.org/pdf/1809.10816.pdf>`_, `[Code] <https://github.com/leibinghe/GAAL-based-outlier-detection>`_
Deep Autoencoding Gaussian Mixture Model for Unsupervised Anomaly Detection                         ICLR                          2018   [#Zong2018Deep]_              `[PDF] <http://www.cs.ucsb.edu/~bzong/doc/iclr18-dagmm.pdf>`_, `[Code] <https://github.com/danieltan07/dagmm>`_
Deep Anomaly Detection with Outlier Exposure                                                        ICLR                          2019   [#Hendrycks2019Deep]_         `[PDF] <https://arxiv.org/pdf/1812.04606.pdf>`_, `[Code] <https://github.com/hendrycks/outlier-exposure>`_
Unsupervised Anomaly Detection With LSTM Neural Networks                                            TNNLS                         2019   [#Ergen2019Unsupervised]_     `[PDF] <https://arxiv.org/pdf/1710.09207.pdf>`_, `[IEEE] <https://ieeexplore.ieee.org/document/8836638>`_,
Effective End-to-end Unsupervised Outlier Detection via Inlier Priority of Discriminative Network   NeurIPS                       2019   [#Wang2019Effective]_         `[PDF] <https://papers.nips.cc/paper/8830-effective-end-to-end-unsupervised-outlier-detection-via-inlier-priority-of-discriminative-network.pdf>`_ `[Code] <https://github.com/demonzyj56/E3Outlier>`_
Fascinating Supervisory Signals and Where to Find Them: Deep Anomaly Detection with Scale Learning  ICML                          2023   [#Xu2023Fascinating]_         `[PDF] <https://arxiv.org/abs/2305.16114>`_, `[Code] <https://github.com/xuhongzuo/scale-learning>`_ 
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.7. Interpretability
^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                           Materials
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Explaining Anomalies in Groups with Characterizing Subspace Rules                                  DMKD                          2018   [#Macha2018Explaining]_       `[PDF] <https://www.andrew.cmu.edu/user/lakoglu/pubs/18-pkdd-journal-xpacs.pdf>`_
Beyond Outlier Detection: LookOut for Pictorial Explanation                                        ECML-PKDD                     2018   [#Gupta2018Beyond]_           `[PDF] <https://www.andrew.cmu.edu/user/lakoglu/pubs/18-pkdd-lookout.pdf>`_
Contextual outlier interpretation                                                                  IJCAI                         2018   [#Liu2018Contextual]_         `[PDF] <https://arxiv.org/pdf/1711.10589.pdf>`_
Mining multidimensional contextual outliers from categorical relational data                       IDA                           2015   [#Tang2015Mining]_            `[PDF] <http://www.cs.sfu.ca/~jpei/publications/Contextual%20outliers.pdf>`_
Discriminative features for identifying and interpreting outliers                                  ICDE                          2014   [#Dang2014Discriminative]_    `[PDF] <https://ieeexplore.ieee.org/abstract/document/6816642>`_
Sequential Feature Explanations for Anomaly Detection                                              TKDD                          2019   [#Siddiqui2019Sequential]_    `[HTML] <https://dl.acm.org/citation.cfm?id=3230666>`_
A Survey on Explainable Anomaly Detection                                                          TKDD                          2023   [#Li2023XAD]_                 `[HTML] <https://dl.acm.org/doi/10.1145/3609333>`_
Explainable Contextual Anomaly Detection Using Quantile Regression Forests                         DMKD                          2023   [#Li2023QCAD]_                `[HTML] <https://link.springer.com/article/10.1007/s10618-023-00967-z>`_
Beyond Outlier Detection: Outlier Interpretation by Attention-Guided Triplet Deviation Network     WWW                           2021   [#Xu2021Beyond]_              `[PDF] <https://jiansonglei.github.io/files/21WWW.pdf>`_
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.8. Representation Learning in Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                         Venue                         Year   Ref                           Materials
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Learning Representations of Ultrahigh-dimensional Data for Random Distance-based Outlier Detection  SIGKDD                        2018   [#Pang2018Learning]_          `[PDF] <https://arxiv.org/pdf/1806.04808.pdf>`_
Learning representations for outlier detection on a budget                                          Preprint                      2015   [#Micenkova2015Learning]_     `[PDF] <https://arxiv.org/pdf/1507.08104.pdf>`_
XGBOD: improving supervised outlier detection with unsupervised representation learning             IJCNN                         2018   [#Zhao2018Xgbod]_             `[PDF] <https://arxiv.org/abs/1912.00290>`_
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.9. Outlier Detection in Evolving Data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                         Venue                         Year   Ref                           Materials
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
A Survey on Anomaly detection in Evolving Data: [with Application to Forest Fire Risk Prediction]   SIGKDD Explorations           2018   [#Salehi2018A]_               `[PDF] <http://www.kdd.org/exploration_files/20-1-Article2.pdf>`_
Unsupervised real-time anomaly detection for streaming data                                         Neurocomputing                2017   [#Ahmad2017Unsupervised]_     `[PDF] <https://www.researchgate.net/publication/317325599_Unsupervised_real-time_anomaly_detection_for_streaming_data>`_
Outlier Detection in Feature-Evolving Data Streams                                                  SIGKDD                        2018   [#Manzoor2018Outlier]_        `[PDF] <https://www.andrew.cmu.edu/user/lakoglu/pubs/18-kdd-xstream.pdf>`_, `[Github] <https://cmuxstream.github.io/>`_
Evaluating Real-Time Anomaly Detection Algorithms--The Numenta Anomaly Benchmark                    ICMLA                         2015   [#Lavin2015Evaluating]_       `[PDF] <https://arxiv.org/pdf/1510.03336.pdf>`_, `[Github] <https://github.com/numenta/NAB>`_
MIDAS: Microcluster-Based Detector of Anomalies in Edge Streams                                     AAAI                          2020   [#Bhatia2020MIDAS]_           `[PDF] <https://www.comp.nus.edu.sg/~sbhatia/assets/pdf/midas.pdf>`_, `[Github] <https://github.com/bhatiasiddharth/MIDAS>`_
NETS: Extremely Fast Outlier Detection from a Data Stream via Set-Based Processing                  VLDB                          2019   [#Yoon2019NETS]_              `[PDF] <http://www.vldb.org/pvldb/vol12/p1303-yoon.pdf>`_, `[Github] <https://github.com/kaist-dmlab/NETS>`_, `[Slide] <https://drive.google.com/file/d/1wqKJZhEE4nTWe0zODu21ejgPDsDA_xaF/view?usp=sharing>`_
Ultrafast Local Outlier Detection from a Data Stream with Stationary Region Skipping                KDD                           2020   [#Yoon2020STARE]_             `[PDF] <https://dl.acm.org/doi/pdf/10.1145/3394486.3403171>`_, `[Github] <https://github.com/kaist-dmlab/STARE>`_, `[Slide] <https://drive.google.com/file/d/11y7Gs703SKJBkPZ4nKKgua__dHXXMbkV/view?usp=sharing>`_
Multiple Dynamic Outlier-Detection from a Data Stream by Exploiting Duality of Data and Queries     SIGMOD                        2021   [#Yoon2021MDUAL]_             `[PDF] <https://dl.acm.org/doi/pdf/10.1145/3448016.3452810>`_, `[Github] <https://github.com/kaist-dmlab/MDUAL>`_, `[Slide] <https://drive.google.com/file/d/1wmkkKCAcF9Dk8Wg49WnJF4U--lbtWy9J/view>`_
Adaptive Model Pooling for Online Deep Anomaly Detection from a Complex Evolving Data Stream        KDD                           2022   [#Yoon2022ARCUS]_             `[PDF] <https://dl.acm.org/doi/pdf/10.1145/3534678.3539348>`_, `[Github] <https://github.com/kaist-dmlab/ARCUS>`_, `[Slide] <https://drive.google.com/file/d/1JhrnEj1vScqGy69cfNUpfTjQYZh-vj_D/view>`_
==================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.10. Outlier Ensembles
^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                         Year   Ref                           Materials
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Outlier ensembles: position paper                                                                  SIGKDD Explorations           2013   [#Aggarwal2013Outlier]_       `[PDF] <https://pdfs.semanticscholar.org/841e/ce7c3812bbf799c99c84c064bbcf77916ba9.pdf>`_
Ensembles for unsupervised outlier detection: challenges and research questions a position paper   SIGKDD Explorations           2014   [#Zimek2014Ensembles]_        `[PDF] <http://www.kdd.org/exploration_files/V15-01-02-Zimek.pdf>`_
An Unsupervised Boosting Strategy for Outlier Detection Ensembles                                  PAKDD                         2018   [#Campos2018An]_              `[HTML] <https://link.springer.com/chapter/10.1007/978-3-319-93034-3_45>`_
LSCP: Locally selective combination in parallel outlier ensembles                                  SDM                           2019   [#Zhao2019LSCP]_              `[PDF] <https://epubs.siam.org/doi/pdf/10.1137/1.9781611975673.66>`_
Adaptive Model Pooling for Online Deep Anomaly Detection from a Complex Evolving Data Stream       KDD                           2022   [#Yoon2022ARCUS]_             `[PDF] <https://dl.acm.org/doi/pdf/10.1145/3534678.3539348>`_, `[Github] <https://github.com/kaist-dmlab/ARCUS>`_, `[Slide] <https://drive.google.com/file/d/1JhrnEj1vScqGy69cfNUpfTjQYZh-vj_D/view>`_
=================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================

4.11. High-dimensional & Subspace Outliers
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

==================================================================================================  ============================  =====  ============================  =======================================================================================================================================================================================================
Paper Title                                                                                         Venue                         Year   Ref                           Materials
==================================================================================================  ============================  =====  ============================  =======================================================================================================================================================================================================
A survey on unsupervised outlier detection in high-dimensional numerical data                       Stat Anal Data Min            2012   [#Zimek2012A]_                `[HTML] <https://onlinelibrary.wiley.com/doi/abs/10.1002/sam.11161>`_
Learning Representations of Ultrahigh-dimensional Data for Random Distance-based Outlier Detection  SIGKDD                        2018   [#Pang2018Learning]_          `[PDF] <https://arxiv.org/pdf/1806.04808.pdf>`_
Reverse Nearest Neighbors in Unsupervised Distance-Based Outlier Detection                          TKDE                          2015   [#Radovanovic2015Reverse]_    `[PDF] <https://ieeexplore.ieee.org/document/6948273>`_, `[SLIDES] <https://pdfs.semanticscholar.org/c8aa/832362422418287ff56793c780b425afa93f.pdf>`_
Outlier detection for high-dimensional data                                                         Biometrika                    2015   [#Ro2015Outlier]_             `[PDF] <http://web.hku.hk/~gyin/materials/2015RoZouWangYinBiometrika.pdf>`_
==================================================================================================  ============================  =====  ============================  =======================================================================================================================================================================================================


4.12. Feature Selection in Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                                       Venue                         Year   Ref                           Materials
================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Unsupervised feature selection for outlier detection by modelling hierarchical value-feature couplings            ICDM                          2016   [#Pang2016Unsupervised]_      `[PDF] <https://opus.lib.uts.edu.au/bitstream/10453/107356/4/DSFS_ICDM2016.pdf>`_
Learning homophily couplings from non-iid data for joint feature selection and noise-resilient outlier detection  IJCAI                         2017   [#Pang2017Learning]_          `[PDF] <https://www.ijcai.org/proceedings/2017/0360.pdf>`_
================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.13. Time Series Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

=====================================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                                                            Venue                         Year   Ref                           Materials
=====================================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Outlier detection for temporal data: A survey                                                                                          TKDE                          2014   [#Gupta2014Outlier]_          `[PDF] <https://www.microsoft.com/en-us/research/wp-content/uploads/2014/01/gupta14_tkde.pdf>`_
Detecting spacecraft anomalies using lstms and nonparametric dynamic thresholding                                                      KDD                           2018   [#Hundman2018Detecting]_      `[PDF] <https://arxiv.org/pdf/1802.04431.pdf>`_, `[Code] <https://github.com/khundman/telemanom>`_
Time-Series Anomaly Detection Service at Microsoft                                                                                     KDD                           2019   [#Ren2019Time]_               `[PDF] <https://arxiv.org/pdf/1906.03821.pdf>`_
Revisiting Time Series Outlier Detection: Definitions and Benchmarks                                                                   NeurIPS                       2021   [#Lai2021Revisiting]_         `[PDF] <https://openreview.net/pdf?id=r8IvOsnHchr>`_, `[Code] <https://github.com/datamllab/tods/tree/benchmark>`_
Graph-Augmented Normalizing Flows for Anomaly Detection of Multiple Time Series                                                        ICLR                          2022   [#Dai2022Graph]_              `[PDF] <https://openreview.net/pdf?id=45L_dgP48Vd>`_, `[Code] <https://github.com/EnyanDai/GANF>`_
Drift doesn't matter: dynamic decomposition with diffusion reconstruction for unstable multivariate time series anomaly detection      NeurIPS                       2023   [#Wang2023Drift]_             `[PDF] <https://openreview.net/pdf?id=aW5bSuduF1>`_, `[Code] <https://github.com/ForestsKing/D3R>`_
=====================================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================


4.14. Graph & Network Outlier Detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

=================================================================================================  =============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                        Venue                          Year   Ref                           Materials
=================================================================================================  =============================  =====  ============================  ==========================================================================================================================================================================
Graph based anomaly detection and description: a survey                                            DMKD                           2015   [#Akoglu2015Graph]_           `[PDF] <https://arxiv.org/pdf/1404.4679.pdf>`_
Anomaly detection in dynamic networks: a survey                                                    WIREs Computational Statistic  2015   [#Ranshous2015Anomaly]_       `[PDF] <https://onlinelibrary.wiley.com/doi/pdf/10.1002/wics.1347>`_
Outlier detection in graphs: On the impact of multiple graph models                                ComSIS                         2019   [#Campos2019Outlier]_         `[PDF] <http://www.comsis.org/pdf.php?id=wims-8671>`_
A Comprehensive Survey on Graph Anomaly Detection with Deep Learning                               TKDE                           2021   [#Ma2021A]_                   `[PDF] <https://arxiv.org/pdf/2106.07178.pdf>`_
=================================================================================================  =============================  =====  ============================  ==========================================================================================================================================================================


4.15. Key Algorithms
^^^^^^^^^^^^^^^^^^^

All these algorithms are available in `Python Outlier Detection (PyOD) <https://github.com/yzhao062/pyod>`_.

====================  =================================================================================================  =================================  =====  ===========================  ==============================================================================================================================================================================================
Abbreviation          Paper Title                                                                                        Venue                              Year   Ref                          Materials
====================  =================================================================================================  =================================  =====  ===========================  ==============================================================================================================================================================================================
kNN                   Efficient algorithms for mining outliers from large data sets                                      ACM SIGMOD Record                  2000   [#Ramaswamy2000Efficient]_   `[PDF] <https://webdocs.cs.ualberta.ca/~zaiane/pub/check/ramaswamy.pdf>`_
KNN                   Fast outlier detection in high dimensional spaces                                                  PKDD                               2002   [#Angiulli2002Fast]_         `[PDF] <https://www.researchgate.net/profile/Clara_Pizzuti/publication/220699183_Fast_Outlier_Detection_in_High_Dimensional_Spaces/links/542ea6a60cf27e39fa9635c6.pdf>`_
LOF                   LOF: identifying density-based local outliers                                                      ACM SIGMOD Record                  2000   [#Breunig2000LOF]_           `[PDF] <http://www.dbs.ifi.lmu.de/Publikationen/Papers/LOF.pdf>`_
IForest               Isolation forest                                                                                   ICDM                               2008   [#Liu2008Isolation]_         `[PDF] <https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/icdm08b.pdf>`_
OCSVM                 Estimating the support of a high-dimensional distribution                                          Neural Computation                 2001   [#Scholkopf2001Estimating]_  `[PDF] <http://users.cecs.anu.edu.au/~williams/papers/P132.pdf>`_
AutoEncoder Ensemble  Outlier detection with autoencoder ensembles                                                       SDM                                2017   [#Chen2017Outlier]_          `[PDF] <http://saketsathe.net/downloads/autoencode.pdf>`_
COPOD                 COPOD: Copula-Based Outlier Detection                                                              ICDM                               2020   [#Li2020COPOD]_              `[PDF] <https://arxiv.org/abs/2009.09463>`_
ECOD                  Unsupervised Outlier Detection Using Empirical Cumulative Distribution Functions                   TKDE                               2022   [#Li2021ECOD]_               `[PDF] <https://arxiv.org/abs/2201.00382>`_
====================  =================================================================================================  =================================  =====  ===========================  ==============================================================================================================================================================================================

4.16. Overview & Survey Papers
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Papers are sorted by the publication year.

======================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
Paper Title                                                                                                             Venue                         Year   Ref                           Materials
======================================================================================================================  ============================  =====  ============================  ==========================================================================================================================================================================
A survey of outlier detection methodologies                                                                             ARTIF INTELL REV              2004   [#Hodge2004A]_                `[PDF] <https://www-users.cs.york.ac.uk/vicky/myPapers/Hodge+Austin_OutlierDetection_AIRE381.pdf>`_
Anomaly detection: A survey                                                                                             CSUR                          2009   [#Chandola2009Anomaly]_       `[PDF] <https://www.vs.inf.ethz.ch/edu/HS2011/CPS/papers/chandola09_anomaly-detection-survey.pdf>`_
A meta-analysis of the anomaly detection problem                                                                        Preprint                      2015   [#Emmott2015A]_               `[PDF] <https://arxiv.org/pdf/1503.01158.pdf>`_
On the evaluation of unsupervised outlier detection: measures, datasets, and an empirical study                         DMKD                          2016   [#Campos2016On]_              `[HTML] <https://link.springer.com/article/10.1007/s10618-015-0444-8>`_, `[SLIDES] <https://imada.sdu.dk/~zimek/InvitedTalks/TUVienna-2016-05-18-outlier-evaluation.pdf>`_
A comparative evaluation of unsupervised anomaly detection algorithms for multivariate data                             PLOS ONE                      2016   [#Goldstein2016A]_            `[PDF] <http://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0152173&type=printable>`_
A comparative evaluation of outlier detection algorithms: Experiments and analyses                                      Pattern Recognition           2018   [#Domingues2018A]_            `[PDF] <https://www.researchgate.net/publication/320025854_A_comparative_evaluation_of_outlier_detection_algorithms_Experiments_and_analyses>`_
Research Issues in Outlier Detection                                                                                    Book Chapter                  2019   [#Suri2019Research]_          `[HTML] <https://link.springer.com/chapter/10.1007/978-3-030-05127-3_3>`_
Quantitative comparison of unsupervised anomaly detection algorithms for intrusion detection                            SAC                           2019   [#Falcao2019Quantitative]_    `[HTML] <https://dl.acm.org/citation.cfm?id=3297314>`_
Progress in Outlier Detection Techniques: A Survey                                                                      IEEE Access                   2019   [#Wang2019Progress]_          `[PDF] <https://ieeexplore.ieee.org/iel7/6287639/8600701/08786096.pdf>`_
Deep learning for anomaly detection: A survey                                                                           Preprint                      2019   [#Chalapathy2019Deep]_        `[PDF] <https://arxiv.org/pdf/1901.03407.pdf>`_

<!-- opensource-radar:truncated -->
