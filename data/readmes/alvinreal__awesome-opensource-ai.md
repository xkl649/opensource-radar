<div align="center">

<img src="assets/osai.png" alt="Awesome Open Source AI" width="120" />



# Awesome Open Source AI

Curated open-source artificial intelligence models, libraries, infrastructure, and developer tools.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

</div>

---
<div align="center">

**[Contributing](#contributing)**

</div>

## Contents

- [1. Core Frameworks & Libraries](#1-core-frameworks--libraries)
- [2. Model Codebases & Model Families](#2-model-codebases--model-families)
- [3. Inference Engines & Serving](#3-inference-engines--serving)
- [4. Agentic AI & Multi-Agent Systems](#4-agentic-ai--multi-agent-systems)
- [5. Retrieval-Augmented Generation (RAG) & Knowledge](#5-retrieval-augmented-generation-rag--knowledge)
- [6. Generative Media Tools](#6-generative-media-tools)
- [7. Training & Fine-tuning Ecosystem](#7-training--fine-tuning-ecosystem)
- [8. MLOps / LLMOps & Production](#8-mlops--llmops--production)
- [9. Evaluation, Benchmarks & Datasets](#9-evaluation-benchmarks--datasets)
- [10. AI Safety, Alignment & Interpretability](#10-ai-safety-alignment--interpretability)
- [11. Specialized Domains](#11-specialized-domains)
- [12. User Interfaces & Self-hosted Platforms](#12-user-interfaces--self-hosted-platforms)
- [13. Developer Tools & Integrations](#13-developer-tools--integrations)
- [14. Resources & Learning](#14-resources--learning)

---

## About this list

Awesome Open Source AI is a curated list of open-source projects for people building with AI.

The goal is to help readers find useful models, libraries, tools, infrastructure, datasets, and learning resources without sorting through a directory dump.

Projects do not need a minimum number of GitHub stars to be included. Stars can be useful context, but they are only one signal. A smaller project may belong here if it is useful, well-maintained, technically interesting, clearly documented, or important to a specific part of the AI ecosystem.

Good entries should have a clear reason to exist. They should help people build, study, run, evaluate, or understand AI systems.

---

## 1. Core Frameworks & Libraries

> Core libraries and frameworks used to build, train, and run AI and machine learning systems.

#### Deep Learning Frameworks

- [PyTorch](https://github.com/pytorch/pytorch) - Dynamic computation graphs, Pythonic API, dominant in research and production. The current standard for most frontier AI work. ![GitHub stars](https://img.shields.io/github/stars/pytorch/pytorch?style=social)
- [TensorFlow](https://github.com/tensorflow/tensorflow) - End-to-end platform with excellent production deployment, TPU support, and large-scale serving tools. ![GitHub stars](https://img.shields.io/github/stars/tensorflow/tensorflow?style=social)
- [JAX](https://github.com/jax-ml/jax) - High-performance numerical computing with composable transformations (JIT, vmap, grad). Rising favorite for research and scientific ML. ![GitHub stars](https://img.shields.io/github/stars/jax-ml/jax?style=social)
- [Flax](https://github.com/google/flax) - Neural network library for JAX, designed for flexibility. Apache-2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/google/flax?style=social)
- [dm-haiku](https://github.com/google-deepmind/dm-haiku) - JAX-based neural network library from Google DeepMind. Elegant functional API with state management, widely used in DeepMind's research. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/google-deepmind/dm-haiku?style=social)
- [Equinox](https://github.com/patrick-kidger/equinox) - Elegant easy-to-use neural networks and scientific computing in JAX. Callable PyTrees with filtered transformations, seamless interoperability with the JAX ecosystem. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/patrick-kidger/equinox?style=social)
- [Diffrax](https://github.com/patrick-kidger/diffrax) - Numerical differential equation solvers in JAX. Autodifferentiable and GPU-capable ODE/SDE/CDE solvers for scientific machine learning and neural differential equations. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/patrick-kidger/diffrax?style=social)
- [vit-pytorch](https://github.com/lucidrains/vit-pytorch) - Comprehensive Vision Transformer (ViT) implementations in PyTorch. Reference implementations of all major vision transformer variants including ViT, DeiT, Swin, and more. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/lucidrains/vit-pytorch?style=social)
- [NumPyro](https://github.com/pyro-ppl/numpyro) - Probabilistic programming with NumPy powered by JAX for autograd and JIT compilation. Bayesian modeling and inference at scale. ![GitHub stars](https://img.shields.io/github/stars/pyro-ppl/numpyro?style=social)
- [Keras](https://github.com/keras-team/keras) - High-level, beginner-friendly API that now runs on multiple backends (TensorFlow, JAX, PyTorch). Perfect for rapid experimentation. ![GitHub stars](https://img.shields.io/github/stars/keras-team/keras?style=social)
- [tinygrad](https://github.com/tinygrad/tinygrad) - Minimalist deep learning framework with tiny code footprint. The "you like PyTorch? you like micrograd? you love tinygrad!" philosophy - simple yet powerful. ![GitHub stars](https://img.shields.io/github/stars/tinygrad/tinygrad?style=social)
- [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) - Industrial deep learning platform from Baidu serving 23+ million developers and 760,000+ companies. China's first independent R&D framework with advanced distributed training and deployment capabilities. ![GitHub stars](https://img.shields.io/github/stars/PaddlePaddle/Paddle?style=social)
- [PyTorch Geometric](https://github.com/pyg-team/pytorch_geometric) - Library for deep learning on irregular input data such as graphs, point clouds, and manifolds. Part of the PyTorch ecosystem. ![GitHub stars](https://img.shields.io/github/stars/pyg-team/pytorch_geometric?style=social)
- [timm (PyTorch Image Models)](https://github.com/huggingface/pytorch-image-models) - The largest collection of PyTorch image encoders and backbones. 900+ pretrained models including ResNet, EfficientNet, Vision Transformer, ConvNeXt, and more with training and inference scripts. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/huggingface/pytorch-image-models?style=social)
- [Triton](https://github.com/triton-lang/triton) - Language and compiler for writing highly efficient custom deep-learning primitives. Powers kernel optimizations in PyTorch, JAX, and other frameworks. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/triton-lang/triton?style=social)
- [GGML](https://github.com/ggml-org/ggml) - Tensor library for machine learning. The foundational C/C++ library powering llama.cpp and many on-device inference engines. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/ggml-org/ggml?style=social)
- [MLX](https://github.com/ml-explore/mlx) - Array framework for machine learning on Apple silicon. Efficient unified memory design with NumPy-like API, automatic differentiation, and multi-device support. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/ml-explore/mlx?style=social)

#### High-Performance Compute Libraries

- [oneDNN](https://github.com/uxlfoundation/oneDNN) - oneAPI Deep Neural Network Library. Cross-platform performance library of basic building blocks for deep learning, optimized for Intel CPUs, GPUs, and Arm architectures. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/uxlfoundation/oneDNN?style=social)
- [ONNX](https://github.com/onnx/onnx) - Open standard for machine learning interoperability. Open Neural Network Exchange provides an open ecosystem that empowers AI developers to choose the right tools as their project evolves. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/onnx/onnx?style=social)
- [IREE](https://github.com/iree-org/iree) - Retargetable MLIR-based machine learning compiler and runtime toolkit. Lowers ML models to unified IR that scales from datacenter to mobile and edge deployments. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/iree-org/iree?style=social)

#### Rust ML Frameworks

- [Burn](https://github.com/tracel-ai/burn) - Next-generation deep learning framework in Rust. Backend-agnostic with CPU, GPU, WebAssembly support. ![GitHub stars](https://img.shields.io/github/stars/tracel-ai/burn?style=social)
- [Candle (Hugging Face)](https://github.com/huggingface/candle) - Minimalist ML framework for Rust. PyTorch-like API with focus on performance and simplicity. ![GitHub stars](https://img.shields.io/github/stars/huggingface/candle?style=social)
- [linfa](https://github.com/rust-ml/linfa) - Comprehensive Rust ML toolkit with classical algorithms. scikit-learn equivalent for Rust with clustering, regression, and preprocessing. ![GitHub stars](https://img.shields.io/github/stars/rust-ml/linfa?style=social)

#### Julia ML Frameworks

- [Flux.jl](https://github.com/FluxML/Flux.jl) - 100% pure-Julia ML stack with lightweight abstractions on top of native GPU and AD support. Elegant, hackable, and fully integrated with Julia's scientific computing ecosystem. ![GitHub stars](https://img.shields.io/github/stars/FluxML/Flux.jl?style=social)
- [MLJ.jl](https://github.com/JuliaAI/MLJ.jl) - Comprehensive Julia machine learning framework providing a unified interface to 200+ models with meta-algorithms for selection, tuning, and evaluation. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/JuliaAI/MLJ.jl?style=social)
- [ModelingToolkit.jl](https://github.com/SciML/ModelingToolkit.jl) - High-performance symbolic-numeric modeling framework for scientific machine learning. Automatically generates fast functions for model components like Jacobians and Hessians with automatic sparsification and parallelization. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/SciML/ModelingToolkit.jl?style=social)

#### NLP & Transformers

- [spaCy (Explosion AI)](https://github.com/explosion/spaCy) - Industrial-strength natural language processing with 75+ languages, transformer pipelines, and production-grade NER, parsing, and text classification. ![GitHub stars](https://img.shields.io/github/stars/explosion/spaCy?style=social)
- [Transformers (Hugging Face)](https://github.com/huggingface/transformers) - The de facto standard library for pretrained NLP models. 1M+ models, 250,000+ downloads/day. BERT, GPT, Llama, Qwen, and hundreds more. ![GitHub stars](https://img.shields.io/github/stars/huggingface/transformers?style=social)
- [sentence-transformers](https://github.com/UKPLab/sentence-transformers) - Classic library for sentence and image embeddings. ![GitHub stars](https://img.shields.io/github/stars/UKPLab/sentence-transformers?style=social)
- [tokenizers (Hugging Face)](https://github.com/huggingface/tokenizers) - Fast state-of-the-art tokenizers for training and inference. ![GitHub stars](https://img.shields.io/github/stars/huggingface/tokenizers?style=social)
- [fairseq2](https://github.com/facebookresearch/fairseq2) - FAIR Sequence Modeling Toolkit 2. Complete rewrite of fairseq with modern PyTorch APIs, native support for LLM training (70B+ models), vLLM integration, and first-party recipes for instruction finetuning and preference optimization. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/facebookresearch/fairseq2?style=social)
- [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) - Self-hosted machine translation API powered by the Argos Translate engine. AGPL-3.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/LibreTranslate/LibreTranslate?style=social)

#### Data Processing & Manipulation

- [Pandas](https://github.com/pandas-dev/pandas) - The gold standard for data analysis and manipulation in Python. ![GitHub stars](https://img.shields.io/github/stars/pandas-dev/pandas?style=social)
- [Polars](https://github.com/pola-rs/polars) - Blazing-fast DataFrame library (Rust backend) - modern alternative to Pandas for large-scale workloads. ![GitHub stars](https://img.shields.io/github/stars/pola-rs/polars?style=social)
- [cuDF](https://github.com/rapidsai/cudf) - GPU DataFrame library from RAPIDS. Accelerates Pandas workflows on NVIDIA GPUs with zero code changes using cuDF.pandas accelerator mode. ![GitHub stars](https://img.shields.io/github/stars/rapidsai/cudf?style=social)
- [Dask](https://github.com/dask/dask) - Parallel computing for big data - scales Pandas/NumPy/scikit-learn to clusters. ![GitHub stars](https://img.shields.io/github/stars/dask/dask?style=social)
- [DataFlow](https://github.com/OpenDCAI/DataFlow) - LLM-ready data preparation system for turning raw PDFs, conversations, code, databases, and other sources into SFT, QA, and RAG-ready datasets. ![GitHub stars](https://img.shields.io/github/stars/OpenDCAI/DataFlow?style=social)
- [NumPy](https://github.com/numpy/numpy) - Fundamental array computing library that powers almost every AI stack. ![GitHub stars](https://img.shields.io/github/stars/numpy/numpy?style=social)
- [SciPy](https://github.com/scipy/scipy) - Scientific computing algorithms (optimization, linear algebra, statistics, signal processing). ![GitHub stars](https://img.shields.io/github/stars/scipy/scipy?style=social)
- [CuPy](https://github.com/cupy/cupy) - NumPy and SciPy-compatible array library for GPU-accelerated computing in Python. ![GitHub stars](https://img.shields.io/github/stars/cupy/cupy?style=social)
- [NetworkX](https://github.com/networkx/networkx) - Creation, manipulation, and study of complex networks. The foundational graph analysis library for Python data science. ![GitHub stars](https://img.shields.io/github/stars/networkx/networkx?style=social)
- [cuGraph](https://github.com/rapidsai/cugraph) - GPU graph analytics library with NetworkX-compatible API. 10-100x faster than CPU for large-scale graph algorithms. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/rapidsai/cugraph?style=social)
- [Vaex](https://github.com/vaexio/vaex) - Out-of-Core hybrid Apache Arrow/NumPy DataFrame for Python. Visualize and explore billion-row datasets at millions of rows per second. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/vaexio/vaex?style=social)
- [Datashader](https://github.com/holoviz/datashader) - High-performance large data visualization. Renders billions of points interactively without aggregation artifacts. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/holoviz/datashader?style=social)
- [Zarr](https://github.com/zarr-developers/zarr-python) - Chunked, compressed, N-dimensional array storage. Scalable tensor data format optimized for cloud and parallel computing. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/zarr-developers/zarr-python?style=social)
- [NVIDIA DALI](https://github.com/NVIDIA/DALI) - GPU-accelerated data loading and augmentation library with highly optimized building blocks for deep learning applications. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/DALI?style=social)
- [Narwhals](https://github.com/narwhals-dev/narwhals) - Lightweight compatibility layer between DataFrame libraries. Write Polars-like code that works seamlessly across Pandas, Polars, cuDF, Modin, and more. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/narwhals-dev/narwhals?style=social)
- [Ibis](https://github.com/ibis-project/ibis) - Portable Python dataframe library with 20+ backends. Write Pandas-like code that runs locally with DuckDB or scales to production databases (BigQuery, Snowflake, PostgreSQL) by changing one line. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/ibis-project/ibis?style=social)
- [skrub](https://github.com/skrub-data/skrub) - Machine learning with dataframes for dirty categorical data. Preprocessing and feature engineering for heterogeneous data with seamless Pandas/Polars integration. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/skrub-data/skrub?style=social)
- [Oxen](https://github.com/Oxen-AI/Oxen) - Lightning fast data version control for machine learning. Optimized for large datasets with efficient diffing, branching, and collaboration. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/Oxen-AI/Oxen?style=social)
- [Pandera](https://github.com/unionai-oss/pandera) - Statistical data testing and validation for dataframes. Pydantic-like API for Pandas, Polars, and other dataframe libraries with type hints and lazy validation. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/unionai-oss/pandera?style=social)
- [Snorkel](https://github.com/snorkel-team/snorkel) - System for quickly generating training data with weak supervision. Programmatically label, build, and manage training data using labeling functions and probabilistic consensus models. Powers Snorkel Flow and used by Google, Apple, and Intel. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/snorkel-team/snorkel?style=social)
- [DuckDB](https://github.com/duckdb/duckdb) - High-performance analytical in-process SQL database system. Fast, reliable, portable, and easy to use with rich SQL dialect support. Perfect for data processing and analytics workloads. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/duckdb/duckdb?style=social)
- [FiftyOne](https://github.com/voxel51/fiftyone) - Visual AI development toolkit for visualizing, labeling, and evaluating visual datasets and models. Supercharges computer vision workflows with dataset exploration and model analysis. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/voxel51/fiftyone?style=social)
- [Label Studio](https://github.com/HumanSignal/label-studio) - Multi-type data labeling and annotation tool with standardized output format. Configurable interface for images, text, audio, video, and time series with ML-assisted labeling. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/HumanSignal/label-studio?style=social)
- [Delta Lake](https://github.com/delta-io/delta) - Open-source storage framework enabling Lakehouse architecture with ACID transactions, scalable metadata handling, and unified batch/streaming processing. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/delta-io/delta?style=social)
- [Apache Iceberg](https://github.com/apache/iceberg) - High-performance open table format for huge analytic tables. Brings SQL table reliability to big data with time travel, hidden partitioning, and schema evolution. Works with Spark, Trino, Flink, Presto, Hive and Impala. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/iceberg?style=social)
- [Apache Hudi](https://github.com/apache/hudi) - Open data lakehouse platform for ingesting, indexing, storing, serving, transforming and managing data across cloud environments. Supports upserts, deletes and incremental processing on big data with built-in ingestion tools for Spark and Flink. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/hudi?style=social)
- [lakeFS](https://github.com/treeverse/lakeFS) - Data version control for your data lake that transforms object storage into Git-like repositories. Enables atomic, versioned data lake operations with branching, committing, and merging for data pipelines. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/treeverse/lakeFS?style=social)
- [Apache Airflow](https://github.com/apache/airflow) - Platform to programmatically author, schedule, and monitor workflows. Industry-standard orchestration for data pipelines and ML workflows with 500+ integrations. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/airflow?style=social)
- [Apache Spark](https://github.com/apache/spark) - Unified analytics engine for large-scale data processing. In-memory cluster computing with high-level APIs in Python, Scala, Java, and R. Powers MLlib for distributed machine learning and Structured Streaming for real-time data. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/spark?style=social)
- [Apache Flink](https://github.com/apache/flink) - Stream processing framework with powerful batch and streaming capabilities. High-throughput, low-latency runtime with exactly-once processing guarantees. Ideal for real-time AI inference pipelines and event-driven ML applications. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/flink?style=social)
- [Apache Beam](https://github.com/apache/beam) - Unified programming model for batch and streaming data processing. Write pipelines once, run anywhere on Flink, Spark, or Google Cloud Dataflow. Portable, extensible, and enterprise-ready for AI data pipelines. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/beam?style=social)
- [Scrapy](https://github.com/scrapy/scrapy) - Fast, high-level web crawling and scraping framework for Python. Extract structured data from websites at scale with built-in support for handling common challenges like pagination, cookies, and concurrent requests. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/scrapy/scrapy?style=social)
- [Temporal](https://github.com/temporalio/temporal) - Durable execution platform for reliable workflow orchestration. Build resilient data pipelines and ML workflows that survive failures and continue execution exactly where they left off. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/temporalio/temporal?style=social)
- [Luigi](https://github.com/spotify/luigi) - Python module for building complex pipelines of batch jobs. Handles dependency resolution, workflow management, visualization, and Hadoop integration. Built at Spotify and battle-tested in production. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/spotify/luigi?style=social)
- [Mage.ai](https://github.com/mage-ai/mage-ai) - Modern open-source data pipeline tool for integrating and transforming data. AI-native ETL/ELT platform with 100+ integrations, real-time monitoring, and collaborative features. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/mage-ai/mage-ai?style=social)
- [Hamilton](https://github.com/apache/hamilton) - Declarative dataflow framework for building testable, modular, self-documenting data pipelines. Encode lineage and metadata directly in Python functions. Originally from Stitch Fix, now Apache incubating. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/hamilton?style=social)
- [D-Tale](https://github.com/man-group/dtale) - Visualizer for Pandas data structures with a Flask back-end and React front-end. Interactive data exploration with charting, filtering, and code export. LGPL-2.1 licensed. ![GitHub stars](https://img.shields.io/github/stars/man-group/dtale?style=social)
- [Sweetviz](https://github.com/fbdesignpro/sweetviz) - Beautiful, high-density visualizations for exploratory data analysis in two lines of code. Self-contained HTML reports for dataset comparison and target analysis. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/fbdesignpro/sweetviz?style=social)
- [TextAttack](https://github.com/QData/TextAttack) - Python framework for adversarial attacks, data augmentation, and model training in NLP. Augment datasets to increase model robustness and generate adversarial examples. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/QData/TextAttack?style=social)
- [uv](https://github.com/astral-sh/uv) - An extremely fast Python package and project manager, written in Rust. 10-100x faster than pip with built-in virtual environment management, dependency resolution, and lockfiles. Essential for modern AI/ML development workflows. Apache 2.0 and MIT dual-licensed. ![GitHub stars](https://img.shields.io/github/stars/astral-sh/uv?style=social)
- [Vector](https://github.com/vectordotdev/vector) - A high-performance observability data pipeline for collecting, transforming, and routing logs and metrics. Real-time data processing with 50+ sources and sinks including Kafka, S3, and Elasticsearch. Ideal for AI/ML log processing and data ingestion. MPL 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/vectordotdev/vector?style=social)

#### Classical ML & Gradient Boosting

- [scikit-learn](https://github.com/scikit-learn/scikit-learn) - Industry-standard library for traditional machine learning (classification, regression, clustering, pipelines). ![GitHub stars](https://img.shields.io/github/stars/scikit-learn/scikit-learn?style=social)
- [XGBoost](https://github.com/dmlc/xgboost) - Scalable, high-performance gradient boosting library. Still dominates Kaggle and tabular competitions. ![GitHub stars](https://img.shields.io/github/stars/dmlc/xgboost?style=social)
- [LightGBM](https://github.com/microsoft/LightGBM) - Microsoft's ultra-fast gradient boosting framework, optimized for speed and memory. ![GitHub stars](https://img.shields.io/github/stars/microsoft/LightGBM?style=social)
- [CatBoost](https://github.com/catboost/catboost) - Gradient boosting that handles categorical features natively with great out-of-the-box performance. ![GitHub stars](https://img.shields.io/github/stars/catboost/catboost?style=social)
- [sktime](https://github.com/sktime/sktime) - Unified framework for machine learning with time series. scikit-learn compatible API for forecasting, classification, clustering, and anomaly detection. ![GitHub stars](https://img.shields.io/github/stars/sktime/sktime?style=social)
- [StatsForecast](https://github.com/Nixtla/statsforecast) - Lightning-fast statistical forecasting with ARIMA, ETS, CES, and Theta models. Optimized for high-performance time series workloads. ![GitHub stars](https://img.shields.io/github/stars/Nixtla/statsforecast?style=social)
- [MLForecast](https://github.com/Nixtla/mlforecast) - Scalable machine learning for time series forecasting. Train any sklearn-compatible model on millions of time series with efficient feature engineering. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/Nixtla/mlforecast?style=social)
- [cuML](https://github.com/rapidsai/cuml) - GPU-accelerated machine learning algorithms with scikit-learn compatible API. 10-50x faster than CPU implementations for large datasets. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/rapidsai/cuml?style=social)
- [SynapseML](https://github.com/microsoft/SynapseML) - Distributed machine learning on Apache Spark. Scalable, composable APIs for text analytics, vision, anomaly detection with seamless Python/Scala/R/.NET integration. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/microsoft/SynapseML?style=social)
- [Darts](https://github.com/unit8co/darts) - User-friendly forecasting and anomaly detection for time series. Unifies classical statistical models (ARIMA, ETS) with modern neural networks (N-BEATS, TFT, DeepAR) in a single scikit-learn compatible API. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/unit8co/darts?style=social)
- [PyTorch Forecasting](https://github.com/sktime/pytorch-forecasting) - Time series forecasting with PyTorch. Multiple neural architectures (N-BEATS, TFT, DeepAR) with in-built interpretation capabilities, built on PyTorch Lightning for distributed training. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/sktime/pytorch-forecasting?style=social)

#### Data Engineering & Feature Stores

- [DataHub](https://github.com/datahub-project/datahub) - The #1 open-source metadata platform for data and AI. Data discovery, governance, and observability with 80+ connectors, column-level lineage, and AI assistant integration. Originally built at LinkedIn. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/datahub-project/datahub?style=social)
- [OpenMetadata](https://github.com/open-metadata/OpenMetadata) - Unified metadata platform for data discovery, observability, and governance. Column-level lineage, semantic search, and team collaboration with 70+ data service connectors. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/open-metadata/OpenMetadata?style=social)
- [Amundsen](https://github.com/amundsen-io/amundsen) - Data discovery and metadata engine from Lyft. PageRank-style search for data resources with usage-based ranking. LF AI & Data Foundation project. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/amundsen-io/amundsen?style=social)

#### Data Transformation & Analytics Engineering

- [Apache Ossie](https://github.com/apache/ossie) - Vendor-neutral specification to standardize semantic models across analytics, BI, and AI agent platforms. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/apache/ossie?style=social)
- [dbt-core](https://github.com/dbt-labs/dbt-core) - Transform data using software engineering best practices. The industry-standard framework for analytics engineering with 15M+ monthly downloads. Enables version control, testing, and documentation for SQL transformations. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/dbt-labs/dbt-core?style=social)
- [SQLMesh](https://github.com/TobikoData/sqlmesh) - Scalable and efficient data transformation framework with dbt compatibility. Features automatic data lineage, time travel, and virtual data environments for testing. Optimized for large-scale data warehouses. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/TobikoData/sqlmesh?style=social)
- [SLayer](https://github.com/MotleyAI/slayer) - Semantic layer for AI-powered data analytics. Allows AI agents to describe data models and query the data using an expressive format with measures, dimensions, and filters, without writing raw SQL. MCP, CLI, API, and Python clients. Embeddable as a Python library. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/MotleyAI/slayer?style=social)
- [WrenAI](https://github.com/Canner/WrenAI) - Open-source Generative BI engine and context layer for AI agents to query databases and produce trusted SQL and dashboards. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/Canner/WrenAI?style=social)

#### Data Quality & Validation

- [Deequ](https://github.com/awslabs/deequ) - Library built on top of Apache Spark for defining "unit tests for data". Measures data quality in large datasets with constraint verification, anomaly detection, and incremental validation. Used at Amazon for production data quality. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/awslabs/deequ?style=social)
- [Great Expectations](https://github.com/great-expectations/great_expectations) - Always know what to expect from your data. Data validation, profiling, and documentation for data pipelines. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/great-expectations/great_expectations?style=social)
- [ydata-profiling](https://github.com/ydataai/ydata-profiling) - One line of code for comprehensive data quality profiling and exploratory data analysis. Generates detailed reports for Pandas and Spark DataFrames including statistics, correlations, missing values, and data quality alerts. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/ydataai/ydata-profiling?style=social)
- [Soda Core](https://github.com/sodadata/soda-core) - Data contracts engine for the modern data stack. Define data quality checks in YAML and automatically validate schema and data across your pipelines. Supports 20+ data sources including Snowflake, BigQuery, and PostgreSQL. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/sodadata/soda-core?style=social)
- [TFX (TensorFlow Extended)](https://github.com/tensorflow/tfx) - End-to-end platform for deploying production ML pipelines. Data validation, transformation, model training, and serving with TensorFlow. Powers Google's production ML infrastructure. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/tensorflow/tfx?style=social)

#### Data Labeling & Annotation

- [Doccano](https://github.com/doccano/doccano) - Open-source text annotation tool for machine learning practitioners. Features text classification, sequence labeling, and sequence-to-sequence tasks for sentiment analysis, NER, and summarization. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/doccano/doccano?style=social)
- [OpenRefine](https://github.com/OpenRefine/OpenRefine) - Free, open-source power tool for working with messy data. Clean, transform, and extend data with web services. Formerly Google Refine. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/OpenRefine/OpenRefine?style=social)

#### AutoML & Hyperparameter Optimization

- [Optuna](https://github.com/optuna/optuna) - Modern, define-by-run hyperparameter optimization with pruning and visualizations. Extremely popular in 2026. ![GitHub stars](https://img.shields.io/github/stars/optuna/optuna?style=social)
- [AutoGluon](https://github.com/autogluon/autogluon) - AWS AutoML toolkit for tabular, image, text, and multimodal data - state-of-the-art with almost zero code. ![GitHub stars](https://img.shields.io/github/stars/autogluon/autogluon?style=social)
- [FLAML](https://github.com/microsoft/FLAML) - Microsoft's fast & lightweight AutoML focused on efficiency and low compute. ![GitHub stars](https://img.shields.io/github/stars/microsoft/FLAML?style=social)
- [Katib (Kubeflow)](https://github.com/kubeflow/katib) - Kubernetes-native AutoML for hyperparameter tuning, early stopping, and neural architecture search. Framework-agnostic with support for TensorFlow, PyTorch, XGBoost, and custom training operators. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/kubeflow/katib?style=social)

#### Interactive ML Apps & Notebooks

- [Streamlit](https://github.com/streamlit/streamlit) - The fastest way to build and share data apps. Transform Python scripts into beautiful web applications with minimal code. Widely used for ML model demos, data visualization, and internal tools. ![GitHub stars](https://img.shields.io/github/stars/streamlit/streamlit?style=social)
- [Gradio](https://github.com/gradio-app/gradio) - Build and share delightful machine learning apps, all in Python. The de facto standard for creating interactive ML demos with automatic UI generation from function signatures. Powers thousands of Hugging Face Spaces. ![GitHub stars](https://img.shields.io/github/stars/gradio-app/gradio?style=social)
- [Marimo](https://github.com/marimo-team/marimo) - A reactive notebook for Python — run reproducible experiments, query with SQL, execute as a script, deploy as an app, and version with git. Stored as pure Python. All in a modern, AI-native editor. ![GitHub stars](https://img.shields.io/github/stars/marimo-team/marimo?style=social)

#### Model Training & Optimization Utilities

- [Hugging Face Accelerate](https://github.com/huggingface/accelerate) - Simple API to make training scripts run on any hardware (multi-GPU, TPU, mixed precision) with minimal code changes. ![GitHub stars](https://img.shields.io/github/stars/huggingface/accelerate?style=social)
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - Microsoft's deep learning optimization library for extreme-scale training (ZeRO, offloading, MoE). ![GitHub stars](https://img.shields.io/github/stars/microsoft/DeepSpeed?style=social)
- [FlashAttention](https://github.com/Dao-AILab/flash-attention) - Fast exact attention kernels that reduce memory usage and accelerate transformer training and inference. ![GitHub stars](https://img.shields.io/github/stars/Dao-AILab/flash-attention?style=social)
- [xFormers](https://github.com/facebookresearch/xformers) - Optimized transformer building blocks and attention operators for PyTorch. ![GitHub stars](https://img.shields.io/github/stars/facebookresearch/xformers?style=social)
- [PyTorch Lightning](https://github.com/Lightning-AI/lightning) - High-level wrapper for PyTorch that removes boilerplate and adds best practices. ![GitHub stars](https://img.shields.io/github/stars/Lightning-AI/lightning?style=social)
- [fastai](https://github.com/fastai/fastai) - Deep learning library providing practitioners with high-level components for state-of-the-art results. Built on PyTorch with a focus on usability and transfer learning. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/fastai/fastai?style=social)
- [PyTorch Ignite](https://github.com/pytorch/ignite) - High-level library for training and evaluating neural networks in PyTorch with an engine, events & handlers system for maximum flexibility. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/pytorch/ignite?style=social)
- [ONNX Runtime](https://github.com/microsoft/onnxruntime) - High-performance inference and training for ONNX models across hardware. ![GitHub stars](https://img.shields.io/github/stars/microsoft/onnxruntime?style=social)
- [einops](https://github.com/arogozhnikov/einops) - Flexible, powerful tensor operations for readable and reliable code. Supports PyTorch, JAX, TensorFlow, NumPy, MLX. ![GitHub stars](https://img.shields.io/github/stars/arogozhnikov/einops?style=social)
- [safetensors](https://github.com/huggingface/safetensors) - Simple, safe way to store and distribute tensors. Fast, secure alternative to pickle for model serialization. ![GitHub stars](https://img.shields.io/github/stars/huggingface/safetensors?style=social)
- [torchmetrics](https://github.com/Lightning-AI/torchmetrics) - Machine learning metrics for distributed, scalable PyTorch applications. 80+ metrics with built-in distributed synchronization. ![GitHub stars](https://img.shields.io/github/stars/Lightning-AI/torchmetrics?style=social)
- [torchao](https://github.com/pytorch/ao) - PyTorch native quantization and sparsity for training and inference. Drop-in optimizations for production deployment. ![GitHub stars](https://img.shields.io/github/stars/pytorch/ao?style=social)
- [SHAP](https://github.com/shap/shap) - Game theoretic approach to explain the output of any machine learning model. Industry standard for model interpretability. ![GitHub stars](https://img.shields.io/github/stars/shap/shap?style=social)
- [skorch](https://github.com/skorch-dev/skorch) - scikit-learn compatible neural network library that wraps PyTorch. Seamlessly integrate PyTorch models with scikit-learn pipelines, grid search, and cross-validation. ![GitHub stars](https://img.shields.io/github/stars/skorch-dev/skorch?style=social)
- [Composer](https://github.com/mosaicml/composer) - Supercharge your model training. MosaicML's PyTorch training library with built-in algorithms for efficient training (FSDP, gradient compression, progressive resizing) and seamless distributed training on large-scale clusters. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/mosaicml/composer?style=social)
- [NVIDIA Apex](https://github.com/NVIDIA/apex) - PyTorch extension for mixed precision training and distributed training optimizations. Powers many production deep learning workloads with tools for automatic mixed precision (AMP), distributed data parallel, and fused optimizers. BSD-3-Clause licensed. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/apex?style=social)

---

## 2. Model Codebases & Model Families

> Canonical model-family repositories with useful code, recipes, evaluation tools, or engineering context. This is not a complete model leaderboard; use Hugging Face and model hubs for up-to-date weight discovery.

#### Language Model Families

- [RWKV](https://github.com/BlinkDL/RWKV-LM) - Attention-free language model architecture with linear-time inference, training code, inference examples, and an active open-source ecosystem. ![GitHub stars](https://img.shields.io/github/stars/BlinkDL/RWKV-LM?style=social)
- [MiniCPM](https://github.com/OpenBMB/MiniCPM) - Compact open model family with practical code, deployment notes, and active edge/on-device focus. ![GitHub stars](https://img.shields.io/github/stars/OpenBMB/MiniCPM?style=social)
- [GPT-OSS](https://github.com/openai/gpt-oss) - OpenAI open-weight model repository with inference examples, recipes, and deployment guidance. ![GitHub stars](https://img.shields.io/github/stars/openai/gpt-oss?style=social)
- [Mamba](https://github.com/state-spaces/mamba) - State Space Model implementation with pretrained checkpoints, architecture code, and research tooling for efficient long-sequence modeling. ![GitHub stars](https://img.shields.io/github/stars/state-spaces/mamba?style=social)
- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - Large-scale language model training codebase from EleutherAI with distributed training support and historical open-model importance. ![GitHub stars](https://img.shields.io/github/stars/EleutherAI/gpt-neox?style=social)
- [GLM-5](https://github.com/zai-org/GLM-5) - Open-source mixture-of-experts language model family optimized for long-horizon planning, agentic tasks, and coding. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/zai-org/GLM-5?style=social)

#### Multimodal & Vision-Language Codebases

- [openai/CLIP](https://github.com/openai/CLIP) - Canonical OpenAI contrastive vision-language model codebase with pretrained checkpoints and practical reference implementation for image-text retrieval and classification. ![GitHub stars](https://img.shields.io/github/stars/openai/CLIP?style=social)
- [OpenCLIP](https://github.com/mlfoundations/open_clip) - Open implementation of CLIP with training code, pretrained models, and zero-shot evaluation tooling. ![GitHub stars](https://img.shields.io/github/stars/mlfoundations/open_clip?style=social)
- [OmniParser](https://github.com/microsoft/OmniParser) - Vision-based GUI parsing model and tooling for computer-use agents. ![GitHub stars](https://img.shields.io/github/stars/microsoft/OmniParser?style=social)
- [MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) - Compact vision-language model family with edge-focused deployment examples and strong OCR-oriented use cases. ![GitHub stars](https://img.shields.io/github/stars/OpenBMB/MiniCPM-V?style=social)
- [Eagle](https://github.com/NVlabs/Eagle) - NVIDIA multimodal model codebase with open checkpoints and reusable research materials for vision-language and video-language tasks. ![GitHub stars](https://img.shields.io/github/stars/NVlabs/Eagle?style=social)
- [Moondream](https://github.com/m87-labs/moondream) - Small vision-language model with practical inference examples for edge and real-time image understanding. ![GitHub stars](https://img.shields.io/github/stars/m87-labs/moondream?style=social)
- [VILA](https://github.com/NVlabs/VILA) - NVIDIA vision-language model family with training, evaluation, and deployment materials across edge and datacenter settings. ![GitHub stars](https://img.shields.io/github/stars/NVlabs/VILA?style=social)
- [Depth Anything V2](https://github.com/DepthAnything/Depth-Anything-V2) - Monocular depth-estimation foundation model with practical inference code and broad computer-vision reuse. ![GitHub stars](https://img.shields.io/github/stars/DepthAnything/Depth-Anything-V2?style=social)
- [NVIDIA Cosmos](https://github.com/NVIDIA/cosmos) - Open platform of world models, tokenizers, and post-training tools designed for physical AI, robotics, and autonomous systems. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/cosmos?style=social)

#### Speech & Audio Model Codebases

- [Whisper](https://github.com/openai/whisper) - Canonical open speech-to-text model codebase with widespread ecosystem support and many downstream implementations. ![GitHub stars](https://img.shields.io/github/stars/openai/whisper?style=social)
- [FunASR](https://github.com/modelscope/FunASR) - Speech recognition toolkit with pretrained models, streaming support, diarization, VAD, and production-oriented examples. ![GitHub stars](https://img.shields.io/github/stars/modelscope/FunASR?style=social)
- [NVIDIA NeMo](https://github.com/NVIDIA-NeMo/NeMo) - Scalable framework and model codebase for speech, language, and multimodal AI with recipes and deployment guidance. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA-NeMo/NeMo?style=social)
- [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) - Complete speech toolkit with ASR, TTS, diarization, source separation, and VAD across embedded and edge environments via ONNX Runtime. ![GitHub stars](https://img.shields.io/github/stars/k2-fsa/sherpa-onnx?style=social)
- [MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS) - Open speech and sound generation family focused on expressive, long-form text-to-speech with streaming and multi-speaker support. ![GitHub stars](https://img.shields.io/github/stars/OpenMOSS/MOSS-TTS?style=social)
- [VoxCPM](https://github.com/OpenBMB/VoxCPM) - Open-sourced tokenizer-free multilingual speech synthesis model with high-quality TTS and style transfer workflows. ![GitHub stars](https://img.shields.io/github/stars/OpenBMB/VoxCPM?style=social)
- [VibeVoice](https://github.com/microsoft/VibeVoice) - Open Frontier Voice AI toolkit spanning speech understanding, generation, and multilingual TTS workflows, with active research and deployment tooling. ![GitHub stars](https://img.shields.io/github/stars/microsoft/VibeVoice?style=social)
- [SpeechBrain](https://github.com/speechbrain/speechbrain) - PyTorch speech toolkit with recipes for ASR, TTS, speaker recognition, and speech enhancement. ![GitHub stars](https://img.shields.io/github/stars/speechbrain/speechbrain?style=social)
- [Pocket TTS](https://github.com/kyutai-labs/pocket-tts) - Lightweight text-to-speech engine optimized for CPU inference with low latency and streaming support. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/kyutai-labs/pocket-tts?style=social)
- [transcribe.cpp](https://github.com/handy-computer/transcribe.cpp) - C/C++ speech-to-text inference library running 16+ model families on the ggml runtime with GPU acceleration. ![GitHub stars](https://img.shields.io/github/stars/handy-computer/transcribe.cpp?style=social)
- [Moonshine](https://github.com/moonshine-ai/moonshine) - Open-source on-device voice AI toolkit for low-latency speech-to-text, intent recognition, and text-to-speech. ![GitHub stars](https://img.shields.io/github/stars/moonshine-ai/moonshine?style=social)

---

## 3. Inference Engines & Serving

> Inference runtimes, serving systems, and optimization tools for running models locally or in production.

#### Local / On-device Inference

- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Pure C/C++ inference engine with GGUF format support. The gold standard for CPU/GPU/Apple Silicon on-device running. Includes llama-server for OpenAI-compatible API. Now at 100K+ stars. ![GitHub stars](https://img.shields.io/github/stars/ggml-org/llama.cpp?style=social)
- [Ollama](https://github.com/ollama/ollama) - Dead-simple local LLM runner with a one-line install, model registry, and OpenAI-compatible API. ![GitHub stars](https://img.shields.io/github/stars/ollama/ollama?style=social)
- [Foundry Local](https://github.com/microsoft/Foundry-Local) - Open-source on-device AI platform covering discovery, model running, sandboxed execution, and evaluation of open models. ![GitHub stars](https://img.shields.io/github/stars/microsoft/Foundry-Local?style=social)
- [Potato OS](https://github.com/slomin/potato-os) - Linux distribution for fully local AI inference on Raspberry Pi 5 and 4, optimized for running open models at the edge. ![GitHub stars](https://img.shields.io/github/stars/slomin/potato-os?style=social)
- [MLC-LLM](https://github.com/mlc-ai/mlc-llm) - Deployment engine that compiles and runs LLMs across browsers, mobile devices, and local hardware. ![GitHub stars](https://img.shields.io/github/stars/mlc-ai/mlc-llm?style=social)
- [WebLLM](https://github.com/mlc-ai/web-llm) - High-performance in-browser LLM inference engine. Runs models directly in the browser with WebGPU acceleration. ![GitHub stars](https://img.shields.io/github/stars/mlc-ai/web-llm?style=social)
- [llama-cpp-python](https://github.com/abetlen/llama-cpp-python) - Official Python bindings for llama.cpp. ![GitHub stars](https://img.shields.io/github/stars/abetlen/llama-cpp-python?style=social)
- [KoboldCpp](https://github.com/LostRuins/koboldcpp) - User-friendly llama.cpp fork focused on role-playing and creative writing. ![GitHub stars](https://img.shields.io/github/stars/LostRuins/koboldcpp?style=social)
- [RamaLama](https://github.com/containers/ramalama) - Container-centric tool for simplifying local AI model serving. Automatically detects GPUs, pulls optimized container images, and runs models securely in rootless containers with enterprise-grade isolation. ![GitHub stars](https://img.shields.io/github/stars/containers/ramalama?style=social)
- [LiteRT](https://github.com/google-ai-edge/LiteRT) - Google's production-ready on-device ML and GenAI deployment framework. Supports Android, iOS, Web, Desktop, and IoT targets with GPU/NPU acceleration via a unified edge-first runtime. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/google-ai-edge/LiteRT?style=social)
- [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) - Production-ready runtime for deploying LLMs on edge devices with low-latency inference and optimized hardware paths for mobile and embedded platforms. ![GitHub stars](https://img.shields.io/github/stars/google-ai-edge/LiteRT-LM?style=social)
- [exo](https://github.com/exo-explore/exo) - Run frontier AI locally by connecting all your devices into an AI cluster. Features automatic device discovery, RDMA over Thunderbolt for 99% latency reduction, topology-aware auto parallel, and tensor parallelism. Uses MLX backend for distributed inference across Apple Silicon devices. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/exo-explore/exo?style=social)
- [ds4](https://github.com/antirez/ds4) - Native inference engine optimized for DeepSeek V4 and GLM models with Metal, CUDA, and ROCm support. ![GitHub stars](https://img.shields.io/github/stars/antirez/ds4?style=social)
- [omlx](https://github.com/jundot/omlx) - Apple-centric inference server for local-first AI workflows with model management, GPU orchestration, and OpenAI-compatible APIs for self-hosted deployment. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/jundot/omlx?style=social)
- [llmfit](https://github.com/AlexsJones/llmfit) - Terminal tool and TUI that right-sizes LLM models to hardware specs and scores local compatibility across GPU, CPU, and RAM. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/AlexsJones/llmfit?style=social)
- [Needle](https://github.com/cactus-compute/needle) - Compact 45M-parameter foundation model and 14MB inference engine for tool calling and structured extraction on tiny devices. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/cactus-compute/needle?style=social)

#### High-performance Serving & API Servers

- [llm-d](https://github.com/llm-d/llm-d) - Kubernetes-native distributed LLM inference framework. Donated to CNCF by RedHat, Google, and IBM. Intelligent scheduling, KV-cache optimization, and state-of-the-art performance across accelerators. ![GitHub stars](https://img.shields.io/github/stars/llm-d/llm-d?style=social)
- [LMDeploy](https://github.com/InternLM/lmdeploy) - Toolkit for compressing, deploying, and serving LLMs from OpenMMLab. 4-bit inference with 2.4x higher performance than FP16, distributed multi-model serving across machines. ![GitHub stars](https://img.shields.io/github/stars/InternLM/lmdeploy?style=social)
- [vLLM](https://github.com/vllm-project/vllm) - State-of-the-art serving engine with PagedAttention and continuous batching. Currently the fastest production-grade LLM server. ![GitHub stars](https://img.shields.io/github/stars/vllm-project/vllm?style=social)
- [vLLM-Omni](https://github.com/vllm-project/vllm-omni) - Multi-modal inference stack extending vLLM for image, audio, and video generation workloads with a unified serving interface. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/vllm-project/vllm-omni?style=social)
- [LMCache](https://github.com/LMCache/LMCache) - Supercharge LLM inference with the fastest KV Cache layer. 3-10x delay savings and GPU cycle reduction for multi-round QA and RAG. Integrates seamlessly with vLLM for distributed, high-throughput deployments. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/LMCache/LMCache?style=social)
- [vLLM Production Stack](https://github.com/vllm-project/production-stack) - Kubernetes-native production stack for vLLM inference. Automated deployment, autoscaling, and monitoring for enterprise-grade LLM serving. Built by the vLLM team for seamless integration. ![GitHub stars](https://img.shields.io/github/stars/vllm-project/production-stack?style=social)
- [Open Model Engine (OME)](https://github.com/sgl-project/ome) - Kubernetes operator for LLM serving with GPU scheduling and model lifecycle management across vLLM, SGLang, and TensorRT-LLM. ![GitHub stars](https://img.shields.io/github/stars/sgl-project/ome?style=social)
- [nano-vLLM](https://github.com/GeeeekExplorer/nano-vllm) - Minimalist vLLM implementation in ~1,200 lines of Python. Educational yet performant with prefix caching, tensor parallelism, and CUDA graph acceleration. Comparable inference speeds to full vLLM. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/GeeeekExplorer/nano-vllm?style=social)
- [SGLang](https://github.com/sgl-project/sglang) - Next-gen serving framework with RadixAttention. Powers xAI's production workloads at 100K+ GPUs scale. ![GitHub stars](https://img.shields.io/github/stars/sgl-project/sglang?style=social)
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - NVIDIA's official high-performance inference backend. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA/TensorRT-LLM?style=social)
- [Aphrodite Engine](https://github.com/aphrodite-engine/aphrodite-engine) - vLLM fork optimized for role-play and creative writing. Supports extensive quantization methods (AQLM, AWQ, GPTQ, GGUF, FP8) and modern samplers. Active development with multi-LoRA and speculative decoding support. ![GitHub stars](https://img.shields.io/github/stars/aphrodite-engine/aphrodite-engine?style=social)
- [AIBrix](https://github.com/vllm-project/aibrix) - Cost-efficient and pluggable infrastructure components for GenAI inference. Kubernetes-native control plane for vLLM with distributed KV cache, heterogeneous GPU serving, and intelligent routing. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/vllm-project/aibrix?style=social)
- [Triton Inference Server](https://github.com/triton-inference-server/server) - NVIDIA's production-grade open-source inference serving software. Supports multiple frameworks (TensorRT, PyTorch, ONNX) with optimized cloud and edge deployment. ![GitHub stars](https://img.shields.io/github/stars/triton-inference-server/server?style=social)
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Fast, flexible Rust-native LLM inference engine built on Candle. Supports text, vision, audio, image generation, and embeddings with hardware-aware auto-tuning. ![GitHub stars](https://img.shields.io/github/stars/EricLBuehler/mistral.rs?style=social)
- [KTransformers](https://github.com/kvcache-ai/ktransformers) - Flexible framework for heterogeneous CPU-GPU LLM inference and fine-tuning. Enables running large MoE models by offloading experts to CPU with BF16/FP8 precision support. ![GitHub stars](https://img.shields.io/github/stars/kvcache-ai/ktransformers?style=social)
- [llamafile](https://github.com/mozilla-ai/llamafile) - Mozilla's single-file distributable LLM solution. Bundle model weights, inference engine, and runtime into one portable executable that runs on six OSes without installation. ![GitHub stars](https://img.shields.io/github/stars/mozilla-ai/llamafile?style=social)
- [Xinference](https://github.com/xorbitsai/inference) - Unified, production-ready inference API for LLMs, speech, and multimodal models. Drop-in GPT replacement with single-line code changes. Supports thousands of models with auto-batching and distributed inference. ![GitHub stars](https://img.shields.io/github/stars/xorbitsai/inference?style=social)
- [RTP-LLM (Alibaba)](https://github.com/alibaba/rtp-llm) - Alibaba's high-performance LLM inference acceleration engine. Powers production LLM services across Taobao, Tmall, and Alibaba's international AI platform. Supports PagedAttention, FlashAttention, FlashDecoding, INT8/INT4 quantization, and heterogeneous hardware (GPU/ARM CPU/Intel). Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/alibaba/rtp-llm?style=social)
- [LitServe (Lightning AI)](https://github.com/Lightning-AI/LitServe) - Minimal Python framework for building custom AI inference servers with full control over logic, batching, and scaling. 2x faster than FastAPI with built-in batching, streaming, and multi-GPU autoscaling. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/Lightning-AI/LitServe?style=social)
- [LightLLM](https://github.com/ModelTC/LightLLM) - Pure Python-based LLM inference and serving framework with lightweight design, easy extensibility, and high-speed performance. Integrates optimizations from FasterTransformer, TGI, vLLM, and SGLang. ![GitHub stars](https://img.shields.io/github/stars/ModelTC/LightLLM?style=social)
- [TabbyAPI](https://github.com/theroyallab/tabbyAPI) - FastAPI-based API server for ExLlamaV2/V3 backends. OpenAI-compatible API with support for model loading/unloading, embeddings, speculative decoding, multi-LoRA, and streaming. ![GitHub stars](https://img.shields.io/github/stars/theroyallab/tabbyAPI?style=social)
- [GPUStack](https://github.com/gpustack/gpustack) - GPU cluster manager that orchestrates inference engines like vLLM and SGLang. Automated engine selection, parameter optimization, and distributed multi-GPU deployment for high-performance AI workloads. ![GitHub stars](https://img.shields.io/github/stars/gpustack/gpustack?style=social)
- [OpenLLM (BentoML)](https://github.com/bentoml/OpenLLM) - Production-grade platform for running any open-source LLMs as OpenAI-compatible API endpoints. Supports 50+ models with built-in streaming, batching, and auto-acceleration. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/bentoml/OpenLLM?style=social)
- [Higress (Alibaba)](https://github.com/alibaba/higress) - AI-native API gateway born from Alibaba's internal infrastructure with 2+ years of production validation. Provides unified LLM API and MCP (Model Context Protocol) management with enterprise-grade 99.99% availability. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/alibaba/higress?style=social)
- [NVIDIA Dynamo](https://github.com/ai-dynamo/dynamo) - Datacenter-scale distributed inference serving framework from NVIDIA. Orchestration layer above vLLM/SGLang/TensorRT-LLM with disaggregated serving, KV-aware routing, and automatic scaling. Built in Rust with Python extensibility. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/ai-dynamo/dynamo?style=social)
- [Microsoft BitNet](https://github.com/microsoft/BitNet) - Official inference framework for 1-bit LLMs (BitNet b1.58). Enables running large models on CPU with minimal memory footprint. Features custom kernels for ternary weight quantization and efficient matmul operations. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/microsoft/BitNet?style=social)
- [FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi) - OpenAI-compatible proxy gateway that stacks the free tiers of multiple LLM providers behind a single endpoint with automatic failover and rate tracking. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/tashfeenahmed/freellmapi?style=social)
- [OmniRoute](https://github.com/diegosouzapw/OmniRoute) - Unified AI gateway and proxy supporting over 230 providers with token compression, automatic failover, and routing strategies. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/diegosouzapw/OmniRoute?style=social)
- [Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) - Rust proxy and library for routing, protocol translation, and operational metrics across LLM backends and coding agents. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/NVIDIA-NeMo/Switchyard?style=social)

#### Additional Inference Engines

- [DeepEP](https://github.com/deepseek-ai/DeepEP) - Efficient expert-parallel communication library for large MoE models, improving throughput in distributed inference and training. ![GitHub stars](https://img.shields.io/github/stars/deepseek-ai/DeepEP?style=social)
- [DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) - CUDA FP8/FMA GEMM kernels for efficient LLM inference and training at reduced precision. ![GitHub stars](https://img.shields.io/github/stars/deepseek-ai/DeepGEMM?style=social)
- [AirLLM](https://github.com/lyogavin/airllm) - Single-GPU 70B inference stack with strong memory/performance optimizations for local deployment on commodity hardware. ![GitHub stars](https://img.shields.io/github/stars/lyogavin/airllm?style=social)
- [ThunderKittens](https://github.com/HazyResearch/ThunderKittens) - High-performance GPU kernel primitives for fast attention and matmul workflows used by LLM stacks. ![GitHub stars](https://img.shields.io/github/stars/HazyResearch/ThunderKittens?style=social)
- [Mirage Persistent Kernel](https://github.com/mirage-project/mirage) - Compiler that fuses model execution into a single mega-kernel for tighter performance. ![GitHub stars](https://img.shields.io/github/stars/mirage-project/mirage?style=social)
- [tt-metal](https://github.com/tenstorrent/tt-metal) - Operator and kernel toolkit for efficient LLM inference and low-level optimization on Tenstorrent hardware. ![GitHub stars](https://img.shields.io/github/stars/tenstorrent/tt-metal?style=social)
- [vLLM-Ascend](https://github.com/vllm-project/vllm-ascend) - Hardware plugin for running vLLM on Huawei Ascend accelerators. ![GitHub stars](https://img.shields.io/github/stars/vllm-project/vllm-ascend?style=social)
- [CTranslate2](https://github.com/OpenNMT/CTranslate2) - Fast inference engine for Transformer models supporting OpenNMT and Hugging Face models. Optimized for CPU and GPU with batching, quantization (INT8/FP16), and dynamic memory management. Powers faster-whisper and other production deployments. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/OpenNMT/CTranslate2?style=social)
- [llama-swap](https://github.com/mostlygeek/llama-swap) - Intelligent model swapping proxy for llama.cpp. Enables seamless hot-swapping between different GGUF models without restarting the server, with automatic model loading/unloading and OpenAI-compatible API. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/mostlygeek/llama-swap?style=social)
- [optillm](https://github.com/algorithmicsuperintelligence/optillm) - Optimizing inference proxy for LLMs with load balancing, failover, and request routing across multiple providers and models. Improves reliability and performance for production deployments. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/algorithmicsuperintelligence/optillm?style=social)
- [Fugusashi](https://github.com/eulogik/fugusashi) - Open-source intelligent model router with CMA-ES evolved routing weights, federated learning for privacy-preserving collaborative routing, and human-interpretable explanations for every decision. OpenAI-compatible API with web dashboard. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/eulogik/fugusashi?style=social)
- [mllm](https://github.com/UbiquitousLearning/mllm) - Fast and lightweight multimodal LLM inference engine for mobile and edge devices. Optimized for running vision-language models on resource-constrained hardware with efficient memory management. MIT licensed. ![GitHub stars](https://img.shields.io/github/stars/UbiquitousLearning/mllm?style=social)
- [shimmy](https://github.com/Michael-A-Kuykendall/shimmy) - Python-free Rust inference server with OpenAI API compatibility. Supports GGUF and SafeTensors formats with hot model swap, auto-discovery, and single binary deployment for zero-dependency inference. Apache 2.0 licensed. ![GitHub stars](https://img.shields.io/github/stars/Michael-A-Kuykendall/shimmy?style=social)

<!-- opensource-radar:truncated -->
