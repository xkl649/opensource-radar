
# 非线智能 NoneLinear - ReLE评测：中文AI大模型能力评测（持续更新）
- ReLE （**R**eally R**e**liable **L**ive **E**valuation for LLM），原名CLiB
- 目前已囊括398个大模型，覆盖chatgpt、gpt-5.6、谷歌gemini-3.1-pro、Claude-5、grok-4.6、文心ERNIE-X1.1、ERNIE-5.1、qwen3.8-max、商汤senseChat等商用模型，
以及hy3、step3.7-flash、kimi-k3、ernie4.5、MiniMax-M3、deepseek-v4、Qwen3.8、llama4、智谱GLM-5.2、MiMo-V2、LongCat、gemma4、mistral等开源大模型。
- 支持多维度能力评测，包括教育、医疗与心理健康、金融、法律与行政公务、推理与数学计算、语言与指令遵从、agent与工具调用等7个领域，以及细分的~300个维度（比如牙科、高中语文…）。详见我们的技术报告[ReLE: A Scalable System and Structured Benchmark for Diagnosing Capability Anisotropy in Chinese LLMs](https://www.arxiv.org/abs/2601.17399) 媒体报道(机器之心):[全球304个中文大模型实测：没有“全能王者”，ReLE凭70%降本方案破解评估困局](https://www.jiqizhixin.com/articles/2026-02-03)
- 不仅提供排行榜，也提供规模**超200万的大模型缺陷库**！方便广大社区研究分析、改进大模型。
- 为您的私有大模型提供免费评测服务，联系我们(非线智能 ReLE benchmark团队)：[加微信](#联系我们非线智能-ReLE-benchmark团队)


# 目录
- [🔄最近更新](#最近更新)
- [⚓GitHub热门大模型评测项目](#GitHub热门大模型评测项目)
- [📝大模型基本信息](#大模型基本信息)
- [📊排行榜](#-排行榜)
  - [0、多模态排行榜](#0多模态排行榜)
    - [0.1 多模态理解排行榜](#01-多模态理解排行榜)
    - [0.2 图片生成排行榜](#02-图片生成排行榜)
  - [1、综合能力排行榜](#1综合能力排行榜)
    - [1.1 推理类模型排行榜](#11-推理类模型排行榜)
    - [1.2 商用大模型排行榜（含开源模型的付费API）](#12-商用大模型排行榜含开源模型的付费API)
    - [1.3 开源大模型排行榜](#13-开源大模型排行榜)
  - [2、教育排行榜](#2教育排行榜)
    - [2.1 小学学科](#21-小学学科) &nbsp;|&nbsp; [2.2 初中学科](#22-初中学科) &nbsp;|&nbsp; [2.3 中考TODO](#23-中考TODO)
    - [2.4 高中学科](#24-高中学科) &nbsp;|&nbsp; [2.5 高考](#25-高考) &nbsp;|&nbsp; [2.6 高等教育TODO](#26-高等教育TODO)
    - [2.7 考研TODO](#27-考研TODO) &nbsp;|&nbsp; [2.8 教师资格TODO](#28-教师资格TODO)
  - [3、医疗与心理健康排行榜](#3医疗与心理健康排行榜)    
    - [3.1 医师](#31-医师) &nbsp;|&nbsp; [3.2 护理](#32-护理) &nbsp;|&nbsp; [3.3 药师](#33-药师)
    - [3.4 医技](#34-医技) &nbsp;|&nbsp; [3.5 医学基础知识](#35-医学基础知识) &nbsp;|&nbsp; [3.6 医学考研](#36-医学考研)
    - [3.7 心理健康](#37-心理健康)
  - [4、金融排行榜](#4金融排行榜)
    - [4.1 财务](#41-财务) &nbsp;|&nbsp; [4.2 银行](#42-银行) &nbsp;|&nbsp; [4.3 保险](#43-保险)
    - [4.4 证券](#44-证券) &nbsp;|&nbsp; [4.5 其他金融资格考试](#45-其他金融资格考试) &nbsp;|&nbsp; [4.6 金融基础知识](#46-金融基础知识)
    - [4.7 金融应用](#47-金融应用)
  - [5、法律与行政公务排行榜](#5法律与行政公务排行榜)
    - [5.1 律师资格考试](#51-律师资格考试)
    - [5.2 公务员考试](#52-公务员考试)
  - [6、推理与数学计算排行榜](#6推理与数学计算排行榜)
    - [6.1 演绎推理](#61-演绎推理)  &nbsp;|&nbsp; [6.2 常识推理](#62-常识推理) &nbsp;|&nbsp; [6.3 符号推理BBH](#63-符号推理BBH)
    - [6.4 算术能力](#64-算术能力) &nbsp;|&nbsp; [6.5 表格问答](#65-表格问答) &nbsp;|&nbsp; [6.6 表格总结](#66-表格总结)
    - [6.7 高中奥数](#67-高中奥数) &nbsp;|&nbsp; [6.8 初中奥数TODO](#68-初中奥数TODO) &nbsp;|&nbsp; [6.9 小学奥数](#69-小学奥数)
    - [6.10 地图推理TODO](#610-地图推理TODO) &nbsp;|&nbsp; [6.11 空间推理TODO](#611-空间推理TODO) &nbsp;|&nbsp; [6.12 数独](#612-数独)
    - [6.13 金额大小写转换TODO](#613-金额大小写转换TODO) &nbsp;|&nbsp; [6.14 日期计算TODO](#614-日期计算TODO)
  - [7、语言与指令遵从排行榜](#7语言与指令遵从排行榜)
    - [7.1 成语理解](#71-成语理解) &nbsp;|&nbsp; [7.2 情感分析](#72-情感分析) &nbsp;|&nbsp; [7.3 文本蕴含](#73-文本蕴含) 
    - [7.4 文本分类](#74-文本分类) &nbsp;|&nbsp; [7.5 信息抽取](#75-信息抽取) &nbsp;|&nbsp; [7.6 阅读理解](#76-阅读理解) 
    - [7.7 代词理解](#77-代词理解) &nbsp;|&nbsp; [7.8 诗词匹配](#78-诗词匹配) &nbsp;|&nbsp; [7.9 中文指令遵从](#79-中文指令遵从) 
    - [7.10 汉字字形](#710-汉字字形) &nbsp;|&nbsp; [7.11 汉语拼音TODO](#711-汉语拼音TODO) &nbsp;|&nbsp; [7.12 找错别字TODO](#712-找错别字TODO) 
    - [7.13 句子理解TODO](#713-句子理解TODO) &nbsp;|&nbsp; [7.14 标点符号TODO](#714-标点符号TODO) &nbsp;|&nbsp; [7.15 汉字繁简转换TODO](#715-汉字繁简转换TODO) 
    - [7.16 语种识别TODO](#716-语种识别TODO)
  - [8、agent与工具调用排行榜](#8agent与工具调用排行榜)
    - [8.1 TAU](#81-TAU)
    - [8.2 BFCL-V3](#82-BFCL-V3)
  - [9、coding排行榜](#9coding排行榜)
    - [9.1 livecodebench](#91-livecodebench)
    - [9.2 Terminal-Bench-2.0](#92-Terminal-Bench-20)  
  - [10、整合LMArena和AA分数](#10整合LMArena和AA分数)    
- [🌐各项能力评分](#🌐各项能力评分)
- [为什么做榜单？](#为什么做榜单)
- [大模型选型及评测交流群](#大模型评测交流群)
- [Cite Us](#如何引用-ReLE-评测Cite-Us)

# 最近评测更新
- [2026/8/17] v5.11.2版本
  - 新增大模型：gemini-3.7-flash
- [2026/8/17] v5.11.1版本
  - 新增大模型：deepseek-v4-pro（正式版）、grok-4.6
- [2026/8/10] v5.11版本
  - 新增[“图片生成”排行榜](#02-图片生成排行榜)
- [2026/8/4] v5.10.17版本
  - 新增大模型：qwen3.8-max
  - 删除陈旧的模型：Baichuan4-Turbo、Llama-4-Scout-17B-16E-Instruct、GLM-4-9B-0414、
  Qwen3-32B、Qwen3-14B、Qwen3-8B、Qwen3-4B、o4-mini、DeepSeek-R1-0528、ERNIE-4.5-Turbo-32K、
  ERNIE-X1-Turbo-32K、claude-4-sonnet、claude-4-sonnet-thinking、gemini-2.5-flash、
gemini-2.5-pro、hunyuan-t1-20250711、qwen-turbo-2025-07-15、qwen3-235b-a22b-instruct-2507、qwen3-235b-a22b-thinking-2507、
Qwen3-4B-nothink、Qwen3-8B-nothink、Qwen3-14B-nothink、Qwen3-32B-nothink、GLM-4.5-Flash、
GLM-4.5-Air、Qwen3-30B-A3B-Instruct-2507、Qwen3-30B-A3B-Thinking-2507、
GLM-4.5-Air-nothink、GLM-4.5-Flash-nothink
- [2026/7/28] v5.10.16版本
  - 新增大模型：claude-opus-5
- [2026/7/20] v5.10.15版本
  - 新增大模型：kimi-k3
- [2026/7/12] v5.10.14版本
  - 新增大模型：grok-4.5、gpt-5.6-sol-pro
- [2026/7/9] v5.10.13版本
  - 新增大模型：hy3
- [2026/7/2] v5.10.12版本
  - 新增大模型：claude-sonnet-5-thinking
- [2026/6/27] v5.10.12版本
  - 新增大模型：doubao-seed-2-1-pro-260628、doubao-seed-2-1-turbo-260628、doubao-seed-evolving
- [2026/6/18] v5.10.11版本
  - 新增大模型：glm-5.2
- [2026/6/16] v5.10.10版本
  - 新增大模型：kimi-k2.7-code
- [2026/6/2] v5.10.9版本
  - 新增大模型：MiniMax-M3、qwen3.7-plus、step-3.7-flash、claude-opus-4.8-thinking
- [2026/5/30] v5.10.8版本
  - 新增大模型：claude-opus-4.8
- [2026/5/23] v5.10.7版本
  - 新增大模型：qwen3.7-max
- [2026/5/21] v5.10.6版本
  - 新增大模型：gemini-3.5-flash
- [2026/5/13] v5.10.5版本
  - 新增大模型：ernie-5.1
- [2026/5/1] v5.10.4版本
  - 新增大模型：qwen3.6-27b
- [2026/4/25] v5.10.3版本，[2026/4/23] v5.10.2版本，[2026/4/21] v5.10.1版本，[2026/4/18] v5.10版本，[2026/4/15] v5.9版本，[2026/4/8] v5.8.23版本，[2026/4/6] v5.8.22版本，[2026/4/3] v5.8.21版本，[2026/3/19] v5.8.20版本，[2026/3/18] v5.8.19版本，[2026/3/17] v5.8.18版本，[2026/3/5] v5.8.17版本，[2026/2/25] v5.8.16版本，[2026/2/20] v5.8.15版本，[2026/2/14] v5.8.14版本，[2026/2/9] v5.8.13版本，[2026/2/2] v5.8.12版本，[2026/1/27] v5.8.11版本，[2026/1/22] v5.8.10版本，[2025/12/24] v5.8.9版本，[2025/12/23] v5.8.8版本，[2025/12/18] v5.8.7版本，[2025/12/13] v5.8.6版本，[2025/12/6] v5.8.5版本，[2025/12/3] v5.8.4版本，[2025/11/3] v5.8版本，[2025/10/24] v5.7版本，[2025/10/13] v5.6版本，[2025/9/30] v5.5版本，[2025/9/22] v5.4版本，[2025/9/14] v5.3版本，[2025/9/10] v5.2版本，[2025/9/6] v5.1版本，[2025/9/1] v5.0版本，[2025/8/26]v4.13版本，[2025/8/20]v4.12版本，[2025/8/15]v4.11版本，[2025/8/10]v4.10版本，[2025/8/7]v4.9版本，[2025/8/1]v4.8版本，[2025/7/29]v4.7版本，[2025/7/26]v4.6版本，[2025/7/23]v4.5版本，[2025/7/17]v4.4版本，[2025/7/13]v4.3版本，[2025/7/12]v4.2版本，[2025/7/9]v4.1版本，[2025/7/2]v4.0版本，[2025/6/23]v3.33版本，[2025/6/18]v3.32版本，[2025/6/16]v3.31版本，[2025/6/13]v3.30版本，[2025/6/9]v3.29版本，[2025/6/4]v3.28版本，[2025/5/29]v3.27版本，[2025/5/23]v3.26版本，[2025/5/18]v3.25版本，[2025/5/15]v3.24版本，[2025/5/10]v3.23版本，[2025/5/5]v3.22版本，[2025/5/2]v3.21版本，[2025/4/30]v3.20版本，[2025/4/28]v3.19版本，[2025/4/22]v3.18版本，[2025/4/17]v3.17版本，[2025/4/9]v3.16版本，[2025/4/5]v3.15版本，[2025/4/3]v3.14版本，[2025/3/31]v3.13版本，[2025/3/29]v3.12版本，[2025/3/27]v3.11版本，[2025/3/25]v3.10版本，[2025/3/23]v3.9版本，[2025/3/21]v3.8版本，[2025/3/19]v3.7版本，[2025/3/17]v3.6版本，[2025/3/15]v3.5版本，[2025/3/13]v3.4版本，[2025/3/11]v3.3版本，[2025/3/10]v3.2版本，[2025/3/7]v3.1版本，[2025/3/4]v3.0版本，[2025/3/3]v2.22版本，[2025/2/28]v2.21版本，[2025/2/24]v2.20版本，[2025/2/22]v2.19版本，[2025/2/18]v2.18版本，[2025/2/14]v2.17版本，[2025/2/13]v2.16版本，[2025/2/12]v2.15版本，[2025/2/10]v2.14版本，[2025/1/29]v2.13版本，[2025/1/25]v2.12版本，[2025/1/23]v2.11版本，[2025/1/22]v2.10版本，[2025/1/20]v2.9版本，[2025/1/17]v2.8版本，[2025/1/7]v2.7版本
- 2024年：[2024/12/28]v2.6版本，[2024/12/27]v2.5版本，[2024/12/25]v2.4版本, [2024/10/20]v2.3版本，[2024/9/29]v2.2版本，[2024/8/27]v2.1版本，[2024/8/7]v2.0版本，[2024/7/26]v1.21版本，[2024/7/15]v1.20版本，[2024/6/29]v1.19版本，[2024/6/2]v1.18版本，[2024/5/8]v1.17版本，[2024/4/13]v1.16版本，[2024/3/20]v1.15版本，[2024/2/28]v1.14版本，[2024/1/29]v1.13版本
- 2023年：[2023/12/10]v1.12版本，[2023/11/22]v1.11版本，[2023/11/5]v1.10版本，[2023/10/11]v1.9版本，[2023/9/13]v1.8版本，[2023/8/29]v1.7版本，[2023/8/13]v1.6版本，[2023/7/26]v1.5版本， [2023/7/18]v1.4版本， [2023/7/2]v1.3版本， [2023/6/17]v1.2版， [2023/6/10]v1.1版本， [2023/6/4]v1版本

各版本更新详情：[CHANGELOG](CHANGELOG.md)
<br><br>


# GitHub热门大模型评测项目
| repo                                                                               | star  | area   | about                                                                                                                                                                                                                                                                   |
|------------------------------------------------------------------------------------|-------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [langfuse](https://github.com/langfuse/langfuse)                                   | 32.9k | 国外     | Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23                                                                     |
| [opik](https://github.com/comet-ml/opik)                                           | 21.3k | 国外     | Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated evaluations, and production-ready dashboards.                                                                                              |
| [promptfoo](https://github.com/promptfoo/promptfoo)                                |   24.2k | 国外     | Test your prompts, agents, and RAGs. AI Red teaming, pentesting, and vulnerability scanning for LLMs. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.                                                                                               |
| [deepeval](https://github.com/confident-ai/deepeval)                      | 17.5k | 国外     | The LLM Evaluation Framework                                                                                                                                                                                                                                            |
|……|……|……|……|
| [⭐chinese-llm-benchmark（我们）](https://github.com/jeinlee1991/chinese-llm-benchmark) | 5.7k  | **国内** | ReLE中文大模型能力评测（持续更新） |                                                                                               |
|……|……|……|……|

详见[hot50](GitHub热门评测repo.md)
<br><br>


# 大模型基本信息
- [每周最新模型](每周最新模型.md)
    - [8月3~8月9](每周最新模型.md#8月38月9)
    - [7月27~8月2](每周最新模型.md#7月278月2)
    - [7月20~7月26](每周最新模型.md#7月207月26)
    - [7月13~7月19](每周最新模型.md#7月137月19)
- 更多信息详见[模型列表](https://nonelinear.com/static/models.html)
<br><br>

# 🚀 大模型统一网关
隆重推出 一站式 AI 模型超市 🛒，提供当下最全的大模型，让您永远快人一步。
- 🌐 全球模型，一网打尽：GPT-5.6、Gemini-3.1-Pro、Claude-5、DeepSeek-v4、Kimi-k3……
- ⚖️ 智能负载与高并发：我们聚合了多家顶级供应商，通过智能路由实现自动负载均衡。您从此可以告别烦人的 Rate Limit 报错，轻松应对任何流量洪峰！
- 🔀 自动故障切换：单一供应商的 API 临时“抽风”？没关系！我们的系统会毫秒级无感切换到健康的备用渠道，确保您的服务 99.9999% 高可用，让您的用户远离“服务不可用”的尴尬。
- 🛡️在线监控与智能选型：无缝衔接在线效果监测工具，打通模型选型评测闭环。用真实数据说话，助您轻松找到性能最佳、性价比最高的模型方案。
[如何接入在线效果监测](https://nonelinear.com/static/online-eval.html)，[如何接入模型选型评测](https://nonelinear.com/static/task-create.html)
- 💰 超高性价比！☛[查看所有模型及价格](https://nonelinear.com/static/models.html)
```
from openai import OpenAI
base_url = "https://api.nonelinear.com/v1"
api_key = "<your api key>" # 获取https://nonelinear.com/static/apikey.html
client = OpenAI(api_key=api_key, base_url=base_url)
client.chat.completions.create(
    model="<model id>", # 模型列表https://nonelinear.com/static/models.html
    messages=[{"role": "user", "content": "<your prompt>"}],
)
```
<br><br>


# 💥模型选型：目标降本90%
拒绝“盲选”大模型🎉！上传你的【专属测试数据】📊，5分钟🔍测出哪个模型在你的场景下效果最好🏆、最划算💰！选择最合适模型，成本或降90%💥！[去体验>>](https://nonelinear.com/static/task-create.html)
![link](docs/modelSelection/img/task-result-html.png)
<video controls src="docs/modelSelection/img/modelsel.mp4"></video>

示例：
- [微信文章撰写之表格总结](docs/modelSelection/微信文章撰写之表格总结.md)
- [MathML转LaTeX格式](docs/modelSelection/MathML转LaTeX格式.md)
<br><br>


# 📊 排行榜
## 0、多模态排行榜
### 0.1 多模态理解排行榜
详细数据见[多模态理解评测](README-多模态评测.md)<br>

### 0.2 图片生成排行榜
详细数据见[图片生成评测](README-图片生成评测.md)<br><br>

## 1、综合能力排行榜
“综合能力”计分方式：“综合能力”改为“专业能力”和“通用能力”的加权分，权重分别为0.3，0.7；其中“专业能力”为“教育”、“医疗与心理健康”、“金融”、“法律与行政公务”4大领域平均分，“通用能力”为“推理与数学计算”、“语言与指令遵从”、“agent与工具调用”、“coding” 4大领域平均分。
![link](pic/总分.png)

|类别|机构|大模型|【总分】准确率|平均耗时|平均消耗token|花费/千次（元）|排名（准确率）|
|---|---|-----|-------------------|-------|-----------|-----------|-----------|
|商用|阿里巴巴|qwen3.7-max|76.9%|51s|2920|99.0|1|
|商用|anthropic|claude-opus-5(new)|76.8%|15s|1216|168.8|2|

   
详细数据见：[综合能力排行榜](leaderboard/总分.md) | [通用能力排行榜](leaderboard/通用能力.md) | [专业能力排行榜](leaderboard/专业能力.md)
<br><br> 

#### 1.1 推理模型排行榜
见[推理模型排行榜](leaderboard/reasonmodel.md)<br>
<br>
#### 1.2 商用大模型排行榜（含开源模型的付费API）
[输出价格5元及以上商用大模型](leaderboard/commerce1.md) | [输出价格1~5元商用大模型](leaderboard/commerce2.md) | [输出价格1元以下商用大模型](leaderboard/commerce3.md)<br>
DIY自定义维度筛选榜单：☛ [link](https://nonelinear.com/static/benchmarking.html) 
<br>
<br>
#### 1.3 开源大模型排行榜
[5B以下开源大模型](leaderboard/opensource1.md) | [5B~20B开源大模型](leaderboard/opensource2.md) | [20B以上开源大模型](leaderboard/opensource3.md)<br>
DIY自定义维度筛选榜单：☛[link](https://nonelinear.com/static/benchmarking.html)

<br><br>



## 2、教育排行榜
☛☛完整排行榜见[教育](leaderboard/教育.md)<br>

### 2.1 小学学科
☛☛完整排行榜见[小学学科](leaderboard/小学学科.md)。<br>
语文：[排行榜](leaderboard/PrimarySchoolChinese.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=PrimarySchoolChinese)，
英语：[排行榜](leaderboard/PrimarySchoolEnglish.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=PrimarySchoolEnglish)，
数学：[排行榜](leaderboard/PrimarySchoolMathematics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=PrimarySchoolMathematics)，
道德与法治：[排行榜](leaderboard/PrimarySchoolEthics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=PrimarySchoolEthics)，
科学：[排行榜](leaderboard/PrimarySchoolScience.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=PrimarySchoolScience)
<br><br>


### 2.2 初中学科
☛☛完整排行榜见[初中学科](leaderboard/初中学科.md)。<br>
生物：[排行榜](leaderboard/MiddleSchoolBiology.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolBiology)，
化学：[排行榜](leaderboard/MiddleSchoolChemistry.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolChemistry)，
语文：[排行榜](leaderboard/MiddleSchoolChinese.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolChinese)，
英语：[排行榜](leaderboard/MiddleSchoolEnglish.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolEnglish)，
地理：[排行榜](leaderboard/MiddleSchoolGeography.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolGeography)，
历史：[排行榜](leaderboard/MiddleSchoolHistory.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolHistory)，
数学：[排行榜](leaderboard/MiddleSchoolMathematics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolMathematics)，
物理：[排行榜](leaderboard/MiddleSchoolPhysics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolPhysics)，
政治：[排行榜](leaderboard/MiddleSchoolPolitics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=MiddleSchoolPolitics)
<br><br>


### 2.3 中考TODO

### 2.4 高中学科
☛☛完整排行榜见[高中学科](leaderboard/高中学科.md)。<br>
生物：[排行榜](leaderboard/HighSchoolBiology.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolBiology)，
化学：[排行榜](leaderboard/HighSchoolChemistry.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolChemistry)，
语文：[排行榜](leaderboard/HighSchoolChinese.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolChinese)，
英语：[排行榜](leaderboard/HighSchoolEnglish.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolEnglish)，
地理：[排行榜](leaderboard/HighSchoolGeography.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolGeography)，
历史：[排行榜](leaderboard/HighSchoolHistory.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolHistory)，
数学：[排行榜](leaderboard/HighSchoolMathematics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolMathematics)，
物理：[排行榜](leaderboard/HighSchoolPhysics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolPhysics)，
政治：[排行榜](leaderboard/HighSchoolPolitics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=HighSchoolPolitics)
<br><br>


### 2.5 高考
历年高考真题，含简单题、填空题、选择题等等，只保留客观题。所有分数均为准确率，全部答对为100%；比如数学100，表示全部答对。☛☛完整排行榜见[高考](leaderboard/高考.md)。<br>
（1）2025年高考<br>
生物：[排行榜](leaderboard/2025高考生物.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考生物)，
化学：[排行榜](leaderboard/2025高考化学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考化学)，
语文：[排行榜](leaderboard/2025高考语文.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考语文)，
英语：[排行榜](leaderboard/2025高考英语.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考英语)，
地理：[排行榜](leaderboard/2025高考地理.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考地理)，
历史：[排行榜](leaderboard/2025高考历史.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考历史)，
数学：[排行榜](leaderboard/2025高考数学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考数学)，
物理：[排行榜](leaderboard/2025高考物理.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考物理)，
政治：[排行榜](leaderboard/2025高考政治.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=2025高考政治)。

（2）2024年及之前高考<br>
生物：[排行榜](leaderboard/gaokao-biology.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-biology)，
化学：[排行榜](leaderboard/gaokao-chemistry.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-chemistry)，
语文：[排行榜](leaderboard/gaokao-chinese.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-chinese)，
地理：[排行榜](leaderboard/gaokao-geography.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-geography)，
历史：[排行榜](leaderboard/gaokao-history.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-history)，
数学：[排行榜](leaderboard/gaokao-math.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-math)，
物理：[排行榜](leaderboard/gaokao-physics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-physics)，
政治：[排行榜](leaderboard/gaokao-politics.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=gaokao-politics)。
<br><br>


### 2.6 高等教育TODO
### 2.7 考研TODO
### 2.8 教师资格TODO
<br><br><br>



## 3、医疗与心理健康排行榜
☛☛完整排行榜见[医疗与心理健康](leaderboard/医疗与心理健康.md)<br>

### 3.1 医师
☛☛完整排行榜见[医师](leaderboard/医师.md)<br>
（1）内科，[排行榜](leaderboard/内科.md)<br>
内科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-内科)，
中医内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医内科主治医师)，
内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=内科主治医师)，
心血管内科与呼吸内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心血管内科与呼吸内科主治医师)，
肾内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=肾内科主治医师)，
消化内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=消化内科主治医师)，
中西医结合内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中西医结合内科主治医师)，
消化内科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=消化内科高级职称)，
普通内科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=普通内科高级职称)，
呼吸内科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=呼吸内科高级职称)，
心内科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心内科高级职称)，
结核病主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=结核病主治医师)，
内分泌科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=内分泌科高级职称)
<br>

（2）外科，[排行榜](leaderboard/外科.md)<br>
外科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-外科)，
口腔颌面外科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔颌面外科主治医师)，
整形外科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=整形外科主治医师)，
外科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=外科主治医师)，
普通外科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=普通外科高级职称)，
骨科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-骨科)，
骨科中级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=骨科中级职称)，
骨科高级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=骨科高级职称)
<br>

（3）妇产科，[排行榜](leaderboard/妇产科.md)<br>
妇产科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-妇产科)，
妇产科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=妇产科主治医师)，
妇产科学副主任、主任医师职称考试：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=妇产科学副主任、主任医师职称考试)
<br>

（4）儿科，[排行榜](leaderboard/儿科.md)<br>
儿科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-儿科)，
儿科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=儿科主治医师)，
小儿外科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-小儿外科) 
<br>

（5）眼科，[排行榜](leaderboard/眼科.md)<br>
眼科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-眼科)，
眼科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=眼科主治医师)
<br>

（6）口腔科，[排行榜](leaderboard/口腔科.md)<br>
口腔科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-口腔科)，
口腔执业助理医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔执业助理医师)，
口腔执业医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔执业医师)，
口腔内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔内科主治医师)，
口腔科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔科主治医师)，
口腔修复科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔修复科主治医师)，
口腔正畸学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=口腔正畸学主治医师)
<br>

（7）耳鼻咽喉科，[排行榜](leaderboard/耳鼻咽喉科.md)<br>
耳鼻咽喉科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-耳鼻咽喉科)，
耳鼻咽喉科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=耳鼻咽喉科主治医师)
<br>

（8）脑系科，[排行榜](leaderboard/脑系科.md)<br>
神经内科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-神经内科)，
神经内科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=神经内科主治医师)，
精神科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-精神科)，
精神病学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=精神病学主治医师)，
心理治疗学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心理治疗学主治医师考试)，
心理咨询师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心理咨询师考试)
<br>

（9）皮肤科，[排行榜](leaderboard/皮肤科.md)<br>
皮肤科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-皮肤科)，
皮肤科中级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=皮肤科中级职称)，
皮肤与性病学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=皮肤与性病学主治医师)
<br>

（10）中医与中西医结合，[排行榜](leaderboard/中医与中西医结合.md)<br>
中西医结合执业助理医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中西医结合执业助理医师)，
中医执业助理医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医执业助理医师)，
中西医结合执业医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中西医结合执业医师)，
中医执业医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医执业医师)，
中医针灸主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医针灸主治医师)
<br>

（11）康复医学科，[排行榜](leaderboard/康复医学科.md)<br>
康复医学科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-康复医学科)，
康复医学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=康复医学主治医师)
<br>

（12）全科医学科，[排行榜](leaderboard/全科医学科.md)<br>
全科医学科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-全科医学科)，
全科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=全科主治医师)
<br>

（13）临床营养与重症医学，[排行榜](leaderboard/临床营养与重症医学.md)<br>
临床执业助理医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床执业助理医师)，
临床执业医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床执业医师)，
风湿与临床免疫主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=风湿与临床免疫主治医师)，
重症医学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=重症医学主治医师)，
营养学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=营养学主治医师)，
临床病理科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-临床病理科)
<br>

（14）肿瘤科，[排行榜](leaderboard/肿瘤科.md)<br>
肿瘤学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=肿瘤学主治医师)
<br>

（15）麻醉疼痛科，[排行榜](leaderboard/麻醉疼痛科.md)<br>
麻醉科规培结业：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-麻醉科)，
麻醉科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=麻醉科主治医师)，
疼痛科主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=疼痛科主治医师)
<br>

（16）公共卫生与职业病，[排行榜](leaderboard/公共卫生与职业病.md)<br>
公共卫生执业助理医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=公共卫生执业助理医师)，
公共卫生执业医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=公共卫生执业医师)，
医院感染中级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医院感染中级职称)，
传染病主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=传染病主治医师)，
预防医学主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=预防医学主治医师)，
传染病学中级职称：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=传染病学中级职称)，
职业病主治医师：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=职业病主治医师)
<br><br>


### 3.2 护理
☛☛完整排行榜见[护理](leaderboard/护理.md)<br>
护士执业资格考试：[排行榜](leaderboard/护士执业资格考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=护士执业资格考试)，
护师资格考试：[排行榜](leaderboard/护师资格考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=护师资格考试)，
儿科主管护师：[排行榜](leaderboard/儿科主管护师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=儿科主管护师)，
内科护理学：[排行榜](leaderboard/主管护师-内科护理学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管护师-内科护理学)，
妇产科护理学：[排行榜](leaderboard/主管护师-妇产科护理学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管护师-妇产科护理学)，
妇产科主管护师：[排行榜](leaderboard/妇产科主管护师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=妇产科主管护师)，
外科主管护师：[排行榜](leaderboard/外科主管护师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=外科主管护师)，
主管护师资格考试：[排行榜](leaderboard/主管护师资格考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管护师资格考试)，
内科主管护师：[排行榜](leaderboard/内科主管护师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=内科主管护师)，
副主任、主任护师资格考试：[排行榜](leaderboard/高级护师-副主任、主任护师资格考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=高级护师-副主任、主任护师资格考试)
<br><br>


### 3.3 药师
☛☛完整排行榜见[药师](leaderboard/药师.md)<br>
执业西药师：[排行榜](leaderboard/执业西药师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=执业西药师)，
执业中药师：[排行榜](leaderboard/执业中药师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=执业中药师)，
药士初级考试：[排行榜](leaderboard/药士初级考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=药士初级考试)，
药师初级考试：[排行榜](leaderboard/药师初级考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=药师初级考试)，
中药学（士）：[排行榜](leaderboard/初级中药士-中药学（士）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=初级中药士-中药学（士）)，
中药学（师）：[排行榜](leaderboard/初级中药师-中药学（师）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=初级中药师-中药学（师）)，
主管药师资格考试：[排行榜](leaderboard/主管药师资格考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管药师资格考试)，
主管中药师：[排行榜](leaderboard/主管中药师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管中药师)
<br><br>


### 3.4 医技
☛☛完整排行榜见[医技](leaderboard/医技.md)<br>
超声科：[排行榜](leaderboard/规培结业-超声科.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-超声科)，
超声波医学主治医师：[排行榜](leaderboard/超声波医学主治医师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=超声波医学主治医师)，
超声波医学主管技师：[排行榜](leaderboard/超声波医学主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=超声波医学主管技师)，
心电学主管技师：[排行榜](leaderboard/心电学主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心电学主管技师)，
医学影像科：[排行榜](leaderboard/规培结业-医学影像科.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=规培结业-医学影像科)，
核医学主治医师：[排行榜](leaderboard/核医学主治医师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=核医学主治医师)，
核医学主管技师：[排行榜](leaderboard/核医学主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=核医学主管技师)，
放射科主治医师：[排行榜](leaderboard/放射科主治医师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=放射科主治医师)，
放射学技术（士）：[排行榜](leaderboard/放射学技术（士）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=放射学技术（士）)，
放射学技术（师）：[排行榜](leaderboard/放射学技术（师）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=放射学技术（师）)，
放射医学主管技师：[排行榜](leaderboard/放射医学主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=放射医学主管技师) ，
检验技术（士）：[排行榜](leaderboard/检验技术（士）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=检验技术（士）)，
检验技术（师）：[排行榜](leaderboard/检验技术（师）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=检验技术（师）)，
微生物检验主管技师：[排行榜](leaderboard/微生物检验主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=微生物检验主管技师)，
理化检验主管技师：[排行榜](leaderboard/理化检验主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=理化检验主管技师)，
临床医学检验主管技师：[排行榜](leaderboard/临床医学检验主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学检验主管技师)， 
病理科主治医师：[排行榜](leaderboard/病理科主治医师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=病理科主治医师)，
病理学主管技师：[排行榜](leaderboard/病理学主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=病理学主管技师)，
病理学技术：[排行榜](leaderboard/主管技师-病理学技术.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=主管技师-病理学技术)， 
康复医学治疗技术（士）：[排行榜](leaderboard/康复医学治疗技术（士）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=康复医学治疗技术（士）)，
康复医学治疗技术（师）：[排行榜](leaderboard/康复医学治疗技术（师）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=康复医学治疗技术（师）)，
康复医学与治疗主管技师：[排行榜](leaderboard/康复医学与治疗主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=康复医学与治疗主管技师)，
肿瘤学技术（士）：[排行榜](leaderboard/肿瘤学技术（士）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=肿瘤学技术（士）)，
肿瘤学技术（师）：[排行榜](leaderboard/肿瘤学技术（师）.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=肿瘤学技术（师）)，
肿瘤放射治疗主管技师：[排行榜](leaderboard/肿瘤放射治疗主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=肿瘤放射治疗主管技师)，
输血技术主管技师：[排行榜](leaderboard/输血技术主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=输血技术主管技师)，
消毒技术主管技师：[排行榜](leaderboard/消毒技术主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=消毒技术主管技师)，
病案信息主管技师：[排行榜](leaderboard/病案信息主管技师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=病案信息主管技师)
<br><br>


### 3.5 医学基础知识
（1）基础医学，[排行榜](leaderboard/基础医学.md)<br>
医学三基：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学三基)，
医学心理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学心理学)，
生物化学与分子生物学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=生物化学与分子生物学)，
细胞生物学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-细胞生物学)，
医学免疫学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学免疫学)，
免疫学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-免疫学)，
病理生理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-病理生理学)，  
病理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-病理学)，
医学遗传学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学遗传学)，
寄生虫学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-寄生虫学)，
人体寄生虫学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-人体寄生虫学)，
系统解剖学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-系统解剖学)，
解剖学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-解剖学)，
局部解剖学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-局部解剖学)，
生物信息学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-生物信息学)，
生理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-生理学)，
药理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-药理学)，
药物分析学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-药物分析学)，
医学微生物学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学微生物学)，
组织学与胚胎学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-组织学与胚胎学)，
医学统计学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学统计学)
<br>

（2）临床医学，[排行榜](leaderboard/临床医学.md)<br>
临床医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学综合)，
医学影像学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-医学影像学)，
放射学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-放射学)，
实验诊断学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-实验诊断学)，
神经病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-神经病学)，
外科学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-外科学)，
皮肤性病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-皮肤性病学)，
儿科学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-儿科学)，
核医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-核医学)，
物理诊断学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-物理诊断学)，
牙体牙髓病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-牙体牙髓病学)，
护理学基础：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-护理学基础)，
护理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-护理学基础)，
基础护理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-基础护理学)，
诊断学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-诊断学)，
超声医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-超声医学)，
口腔护理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-口腔护理学)，
循证医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-循证医学)，
流行病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-流行病学)，
口腔组织病理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-口腔组织病理学)，
传染病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-传染病学)，
口腔解剖生理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-口腔解剖生理学)，
麻醉学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-麻醉学)，
介入放射学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=临床医学-介入放射学)
<br>

（3）预防医学与公共卫生学，[排行榜](leaderboard/预防医学与公共卫生学.md)<br>
预防医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=预防医学)，
卫生学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=卫生学)，
医学伦理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学伦理学)
<br>

（4）中医学与中药学，[排行榜](leaderboard/中医学与中药学.md)<br>
中医眼科学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医眼科学)，
金匮要略讲义：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金匮要略讲义)，
中医基础理论：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医基础理论)，
中医诊断学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医诊断学)，
中医学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医学)，
温病学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=温病学)，
中国医学史：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中国医学史)，
中医内科学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医内科学)，
中医儿科学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中医儿科学)，
伤寒论：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=伤寒论)，
内经讲义：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=内经讲义)
<br><br>


### 3.6 医学考研
医学考研，包含外科护理学、基础护理学、西医综合等5个方向，参考[CMB](https://github.com/FreedomIntelligence/CMB)。☛☛完整排行榜见[医学考研](leaderboard/医学考研.md)。<br>
（1）外科护理学：[排行榜](leaderboard/医学考研-外科护理学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学考研-外科护理学)，
（2）基础护理学：[排行榜](leaderboard/医学考研-基础护理学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学考研-基础护理学)，
（3）考研政治：[排行榜](leaderboard/考研政治.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=考研政治)，
（4）西医综合：[排行榜](leaderboard/医学考研-西医综合.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学考研-西医综合)，
（5）中医综合：[排行榜](leaderboard/医学考研-中医综合.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=医学考研-中医综合)
<br><br>


### 3.7 心理健康
目前包含4个子项：心理综合，心理治疗学主治医师，心理咨询师，医学心理学。☛☛完整排行榜见[心理健康](leaderboard/心理健康.md)。<br>
（1）心理综合：[排行榜](leaderboard/心理综合.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心理综合)，
（2）心理治疗学主治医师：[排行榜](leaderboard/心理治疗学主治医师考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心理治疗学主治医师考试)，
（3）心理咨询师：[排行榜](leaderboard/心理咨询师考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=心理咨询师考试)，
（4）医学心理学：[排行榜](leaderboard/基础医学-医学心理学.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基础医学-医学心理学)
<br><br><br>



## 4、金融排行榜
☛☛完整排行榜见[金融](leaderboard/金融.md)<br>

### 4.1 财务
☛☛完整排行榜见[财务](leaderboard/财务.md)。<br>
初级会计职称：[排行榜](leaderboard/初级会计职称.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=初级会计职称)，
注册会计师：[排行榜](leaderboard/注册会计师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=注册会计师)，
会计从业资格：[排行榜](leaderboard/会计从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=会计从业资格)，
审计师考试：[排行榜](leaderboard/审计师考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=审计师考试)，
注册税务师：[排行榜](leaderboard/注册税务师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=注册税务师)，
注册管理会计师：[排行榜](leaderboard/注册管理会计师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=注册管理会计师)

### 4.2 银行
☛☛完整排行榜见[银行](leaderboard/银行.md)。<br>
银行初级资格：[排行榜](leaderboard/银行初级资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=银行初级资格)，
银从中级资格：[排行榜](leaderboard/银从中级资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=银从中级资格)，
银行从业资格：[排行榜](leaderboard/银行从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=银行从业资格)

### 4.3 保险
☛☛完整排行榜见[保险](leaderboard/保险.md)。<br>
保险从业资格：[排行榜](leaderboard/保险从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险从业资格)

### 4.4 证券
☛☛完整排行榜见[证券](leaderboard/证券.md)。<br>
证券专项考试：[排行榜](leaderboard/证券专项考试.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=证券专项考试)，
证券从业资格：[排行榜](leaderboard/证券从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=证券从业资格)

### 4.5 其他金融资格考试
☛☛完整排行榜见[其他金融资格考试](leaderboard/其他金融资格考试.md)。<br>
初级经济师：[排行榜](leaderboard/初级经济师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=初级经济师)，
中级经济师：[排行榜](leaderboard/中级经济师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中级经济师)，
反假货币知识：[排行榜](leaderboard/反假货币知识.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=反假货币知识)，
期货从业资格：[排行榜](leaderboard/期货从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=期货从业资格)，
金融理财师AFP：[排行榜](leaderboard/金融理财师AFP.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融理财师AFP)，
基金从业资格：[排行榜](leaderboard/基金从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=基金从业资格)，
黄金从业资格：[排行榜](leaderboard/黄金从业资格.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=黄金从业资格)，
中国精算师：[排行榜](leaderboard/中国精算师.md)|[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中国精算师)

### 4.6 金融基础知识
☛☛完整排行榜见[金融基础知识](leaderboard/金融基础知识.md)。<br>
金融学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融学)，
公司战略与风险管理：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=公司战略与风险管理)，
宏观经济学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=宏观经济学)，
金融市场学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融市场学)，
会计学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=会计学)，
成本会计学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=成本会计学)，
货币金融学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=货币金融学)，
政治经济学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=政治经济学)，
投资学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=投资学)，
计量经济学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=计量经济学)，
公司金融学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=公司金融学)，
财政学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=财政学)，
商业银行金融学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=商业银行金融学)，
管理会计学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=管理会计学)，
中央银行学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中央银行学)，
审计学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=审计学)，
国际经济学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=国际经济学)，
中级财务会计：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=中级财务会计)，
财务管理学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=财务管理学)，
微观经济学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=微观经济学)，
国际金融学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=国际金融学)，
金融工程学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融工程学)，
经济法：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=经济法)，
高级财务会计：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=高级财务会计)，
保险学：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险学)

### 4.7 金融应用
☛☛完整排行榜见[金融应用](leaderboard/金融应用.md)。<br>
保险知识解读：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险知识解读)，
金融术语解释：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融术语解释)，
执业医师资格考试：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融知识-执业医师资格考试)，
理财知识解读：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=理财知识解读)，
执业药师资格考试：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融知识-执业药师资格考试)，
金融文档抽取：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融文档抽取)，
研判观点提取：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融认知-研判观点提取)，
金融情绪识别：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融情绪识别)，
保险槽位识别：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险槽位识别)，
保险意图理解：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险意图理解)，
金融意图理解：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融意图理解)，
保险属性抽取：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险属性抽取)，
保险条款解读：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=保险条款解读)，
金融产品分析：[badcase](https://nonelinear.com/static/badcase/badcase-of-benchmark.html?benchmark=金融产品分析)，

<!-- opensource-radar:truncated -->
