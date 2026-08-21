# onnx2tf
A tool for converting ONNX files to LiteRT/TFLite/TensorFlow, PyTorch native code (nn.Module), TorchScript (.pt), state_dict (.pt), Exported Program (.pt2), and Dynamo ONNX. It also supports direct conversion from LiteRT to PyTorch.

You should use LiteRT Torch rather than onnx2tf. https://github.com/google-ai-edge/litert-torch and https://github.com/google-ai-edge/ai-edge-quantizer

<p align="center">
  <img src="https://user-images.githubusercontent.com/33194443/193840307-fa69eace-05a9-4d93-9c5d-999cf88af28e.png" />
</p>

[![Downloads](https://static.pepy.tech/personalized-badge/onnx2tf?period=total&units=none&left_color=grey&right_color=brightgreen&left_text=Downloads)](https://pepy.tech/project/onnx2tf) ![GitHub](https://img.shields.io/github/license/PINTO0309/onnx2tf?color=2BAF2B) [![Python](https://img.shields.io/badge/Python-3.12-2BAF2B)](https://img.shields.io/badge/Python-3.8-2BAF2B) [![PyPI](https://img.shields.io/pypi/v/onnx2tf?color=2BAF2B)](https://pypi.org/project/onnx2tf/) [![CodeQL](https://github.com/PINTO0309/onnx2tf/workflows/CodeQL/badge.svg)](https://github.com/PINTO0309/onnx2tf/actions?query=workflow%3ACodeQL) ![Model Convert Test Status](https://github.com/PINTO0309/onnx2tf/workflows/Model%20Convert%20Test/badge.svg) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.7230085.svg)](https://doi.org/10.5281/zenodo.7230085) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/PINTO0309/onnx2tf)

## `tf_converter` supported layers
- https://github.com/onnx/onnx/blob/main/docs/Operators.md
- :heavy_check_mark:: Supported　:white_check_mark:: Partial support　**Help wanted**: Pull Request are welcome

  <details><summary>See the list of supported layers</summary><div>

  |OP|Status|
  |:-|:-:|
  |Abs|:heavy_check_mark:|
  |Acosh|:heavy_check_mark:|
  |Acos|:heavy_check_mark:|
  |Add|:heavy_check_mark:|
  |AffineGrid|:heavy_check_mark:|
  |And|:heavy_check_mark:|
  |ArgMax|:heavy_check_mark:|
  |ArgMin|:heavy_check_mark:|
  |Asinh|:heavy_check_mark:|
  |Asin|:heavy_check_mark:|
  |Atanh|:heavy_check_mark:|
  |Atan|:heavy_check_mark:|
  |Attention|:heavy_check_mark:|
  |AveragePool|:heavy_check_mark:|
  |BatchNormalization|:heavy_check_mark:|
  |Bernoulli|:heavy_check_mark:|
  |BitShift|:heavy_check_mark:|
  |BitwiseAnd|:heavy_check_mark:|
  |BitwiseNot|:heavy_check_mark:|
  |BitwiseOr|:heavy_check_mark:|
  |BitwiseXor|:heavy_check_mark:|
  |BlackmanWindow|:heavy_check_mark:|
  |Cast|:heavy_check_mark:|
  |Ceil|:heavy_check_mark:|
  |Celu|:heavy_check_mark:|
  |CenterCropPad|:heavy_check_mark:|
  |Clip|:heavy_check_mark:|
  |Col2Im|:white_check_mark:|
  |Compress|:heavy_check_mark:|
  |ConcatFromSequence|:heavy_check_mark:|
  |Concat|:heavy_check_mark:|
  |ConstantOfShape|:heavy_check_mark:|
  |Constant|:heavy_check_mark:|
  |Conv|:heavy_check_mark:|
  |ConvInteger|:white_check_mark:|
  |ConvTranspose|:heavy_check_mark:|
  |Cosh|:heavy_check_mark:|
  |Cos|:heavy_check_mark:|
  |CumProd|:heavy_check_mark:|
  |CumSum|:heavy_check_mark:|
  |DeformConv|:white_check_mark:|
  |DepthToSpace|:heavy_check_mark:|
  |Det|:heavy_check_mark:|
  |DequantizeLinear|:heavy_check_mark:|
  |DFT|:white_check_mark:|
  |Div|:heavy_check_mark:|
  |Dropout|:heavy_check_mark:|
  |DynamicQuantizeLinear|:heavy_check_mark:|
  |Einsum|:heavy_check_mark:|
  |Elu|:heavy_check_mark:|
  |Equal|:heavy_check_mark:|
  |Erf|:heavy_check_mark:|
  |Expand|:heavy_check_mark:|
  |Exp|:heavy_check_mark:|
  |EyeLike|:heavy_check_mark:|
  |Flatten|:heavy_check_mark:|
  |Floor|:heavy_check_mark:|
  |FusedConv|:heavy_check_mark:|
  |GatherElements|:heavy_check_mark:|
  |GatherND|:heavy_check_mark:|
  |Gather|:heavy_check_mark:|
  |Gelu|:heavy_check_mark:|
  |Gemm|:heavy_check_mark:|
  |GlobalAveragePool|:heavy_check_mark:|
  |GlobalLpPool|:heavy_check_mark:|
  |GlobalMaxPool|:heavy_check_mark:|
  |GreaterOrEqual|:heavy_check_mark:|
  |Greater|:heavy_check_mark:|
  |GridSample|:white_check_mark:|
  |GroupNormalization|:heavy_check_mark:|
  |GRU|:heavy_check_mark:|
  |HammingWindow|:white_check_mark:|
  |HannWindow|:white_check_mark:|
  |Hardmax|:heavy_check_mark:|
  |HardSigmoid|:heavy_check_mark:|
  |HardSwish|:heavy_check_mark:|
  |Identity|:heavy_check_mark:|
  |If|:heavy_check_mark:|
  |ImageDecoder|:white_check_mark:|
  |Input|:heavy_check_mark:|
  |InstanceNormalization|:heavy_check_mark:|
  |Inverse|:heavy_check_mark:|
  |IsInf|:heavy_check_mark:|
  |IsNaN|:heavy_check_mark:|
  |LayerNormalization|:heavy_check_mark:|
  |LeakyRelu|:heavy_check_mark:|
  |LessOrEqual|:heavy_check_mark:|
  |Less|:heavy_check_mark:|
  |Log|:heavy_check_mark:|
  |LogSoftmax|:heavy_check_mark:|
  |Loop|:heavy_check_mark:|
  |LpNormalization|:heavy_check_mark:|
  |LpPool|:heavy_check_mark:|
  |LRN|:heavy_check_mark:|
  |LSTM|:heavy_check_mark:|
  |MatMul|:heavy_check_mark:|
  |MatMulInteger|:heavy_check_mark:|
  |MaxPool|:heavy_check_mark:|
  |Max|:heavy_check_mark:|
  |MaxRoiPool|:heavy_check_mark:|
  |MaxUnpool|:heavy_check_mark:|
  |Mean|:heavy_check_mark:|
  |MeanVarianceNormalization|:heavy_check_mark:|
  |MelWeightMatrix|:heavy_check_mark:|
  |Min|:heavy_check_mark:|
  |Mish|:heavy_check_mark:|
  |Mod|:heavy_check_mark:|
  |Mul|:heavy_check_mark:|
  |Multinomial|:heavy_check_mark:|
  |Neg|:heavy_check_mark:|
  |NegativeLogLikelihoodLoss|:heavy_check_mark:|
  |NonMaxSuppression|:heavy_check_mark:|
  |NonZero|:heavy_check_mark:|
  |Optional|:heavy_check_mark:|
  |OptionalGetElement|:heavy_check_mark:|
  |OptionalHasElement|:heavy_check_mark:|
  |Not|:heavy_check_mark:|
  |OneHot|:heavy_check_mark:|
  |Or|:heavy_check_mark:|
  |Pad|:heavy_check_mark:|
  |Pow|:heavy_check_mark:|
  |PRelu|:heavy_check_mark:|
  |QLinearAdd|:heavy_check_mark:|
  |QLinearAveragePool|:heavy_check_mark:|
  |QLinearConcat|:heavy_check_mark:|
  |QLinearConv|:heavy_check_mark:|
  |QGemm|:heavy_check_mark:|
  |QLinearGlobalAveragePool|:heavy_check_mark:|
  |QLinearLeakyRelu|:heavy_check_mark:|
  |QLinearMatMul|:heavy_check_mark:|
  |QLinearMul|:heavy_check_mark:|
  |QLinearSigmoid|:heavy_check_mark:|
  |QLinearSoftmax|:heavy_check_mark:|
  |QuantizeLinear|:heavy_check_mark:|
  |RandomNormalLike|:heavy_check_mark:|
  |RandomNormal|:heavy_check_mark:|
  |RandomUniformLike|:heavy_check_mark:|
  |RandomUniform|:heavy_check_mark:|
  |Range|:heavy_check_mark:|
  |Reciprocal|:heavy_check_mark:|
  |ReduceL1|:heavy_check_mark:|
  |ReduceL2|:heavy_check_mark:|
  |ReduceLogSum|:heavy_check_mark:|
  |ReduceLogSumExp|:heavy_check_mark:|
  |ReduceMax|:heavy_check_mark:|
  |ReduceMean|:heavy_check_mark:|
  |ReduceMin|:heavy_check_mark:|
  |ReduceProd|:heavy_check_mark:|
  |ReduceSum|:heavy_check_mark:|
  |ReduceSumSquare|:heavy_check_mark:|
  |RegexFullMatch|:heavy_check_mark:|
  |Relu|:heavy_check_mark:|
  |Reshape|:heavy_check_mark:|
  |Resize|:heavy_check_mark:|
  |ReverseSequence|:heavy_check_mark:|
  |RNN|:heavy_check_mark:|
  |RoiAlign|:heavy_check_mark:|
  |RotaryEmbedding|:heavy_check_mark:|
  |Round|:heavy_check_mark:|
  |ScaleAndTranslate|:heavy_check_mark:|
  |Scatter|:heavy_check_mark:|
  |ScatterElements|:heavy_check_mark:|
  |ScatterND|:heavy_check_mark:|
  |Scan|:heavy_check_mark:|
  |Selu|:heavy_check_mark:|
  |SequenceAt|:heavy_check_mark:|
  |SequenceConstruct|:heavy_check_mark:|
  |SequenceEmpty|:heavy_check_mark:|
  |SequenceErase|:heavy_check_mark:|
  |SequenceInsert|:heavy_check_mark:|
  |SequenceLength|:heavy_check_mark:|
  |Shape|:heavy_check_mark:|
  |Shrink|:heavy_check_mark:|
  |Sigmoid|:heavy_check_mark:|
  |Sign|:heavy_check_mark:|
  |Sinh|:heavy_check_mark:|
  |Sin|:heavy_check_mark:|
  |Size|:heavy_check_mark:|
  |Slice|:heavy_check_mark:|
  |Softmax|:heavy_check_mark:|
  |SoftmaxCrossEntropyLoss|:heavy_check_mark:|
  |Softplus|:heavy_check_mark:|
  |Softsign|:heavy_check_mark:|
  |SpaceToDepth|:heavy_check_mark:|
  |Split|:heavy_check_mark:|
  |SplitToSequence|:heavy_check_mark:|
  |Sqrt|:heavy_check_mark:|
  |Squeeze|:heavy_check_mark:|
  |STFT|:white_check_mark:|
  |StringConcat|:heavy_check_mark:|
  |StringNormalizer|:heavy_check_mark:|
  |StringSplit|:heavy_check_mark:|
  |Sub|:heavy_check_mark:|
  |Sum|:heavy_check_mark:|
  |Tan|:heavy_check_mark:|
  |Tanh|:heavy_check_mark:|
  |TensorScatter|:heavy_check_mark:|
  |TfIdfVectorizer|:white_check_mark:|
  |ThresholdedRelu|:heavy_check_mark:|
  |Tile|:heavy_check_mark:|
  |TopK|:heavy_check_mark:|
  |Transpose|:heavy_check_mark:|
  |Trilu|:heavy_check_mark:|
  |Unique|:heavy_check_mark:|
  |Unsqueeze|:heavy_check_mark:|
  |Upsample|:heavy_check_mark:|
  |Where|:heavy_check_mark:|
  |Xor|:heavy_check_mark:|

  </div></details>

## `flatbuffer_direct` execution path

`flatbuffer_direct` is now the default backend. It is faster and has a higher success rate than `tf_converter` for the supported direct path. The simplest conversion command now outputs only a LiteRT model by default, but if you add `--flatbuffer_direct_output_saved_model`, it will also output a `saved_model`. Unlike the legacy `tf_converter` path, this SavedModel is built from the LiteRT-side ModelIR.

> [!IMPORTANT]
> **`flatbuffer_direct` is the current default backend. Use `--tflite_backend tf_converter` only when you explicitly need the legacy TensorFlow Lite Converter compatibility path.**

<img width="1390" height="680" alt="image" src="https://github.com/user-attachments/assets/04c5d8e2-2465-4dac-b3ea-37d7e7f987cc" />

With the default `flatbuffer_direct` backend, onnx2tf uses a direct fast path for both ONNX input and `-it/--input_tflite_file_path` input:

1. ONNX graph preprocessing (`tflite_builder.preprocess`) and direct lowering (`lower_onnx_to_ir`)
2. Direct FlatBuffer export (`*_float32.tflite`, `*_float16.tflite`, and optional quantized variants)
3. Optional direct reports/evaluation (`*_op_coverage_report.json`, tensor correspondence, ONNX/TFLite check)

In this fast path, the per-node TensorFlow conversion (`op.make_node()` over all ONNX nodes) is skipped.
This removes the long debug traces such as:

- `INFO: <index> / <total>`
- `INFO: onnx_op_type: ...`
- `INFO: tf_op_type: ...`

Measured example (same model, float32 TFLite write stage):

- `tf_converter`: `~24.947s`
- `flatbuffer_direct`: `~0.239s`
- `flatbuffer_direct` was approximately **107x faster** than `tf_converter` in this case.

Actual speedup depends on model structure, enabled options, and runtime environment.

Direct export can also generate TF-side artifacts without falling back to `tf_converter`:

- `--output_h5`
- `--output_keras_v3`
- `--output_tfv1_pb`
- `--flatbuffer_direct_output_pytorch`

These artifacts are generated from an internal SavedModel bridge built from float32 ModelIR.
If direct export fails, conversion stops with an explicit error.

`-inimc` / `-onimc` also stay on the direct path in `flatbuffer_direct`.
For ONNX input and `-it` input, these options crop the imported/lowered ModelIR
at the specified boundary tensor names instead of splitting the ONNX graph.

`-dgc`, `-ebu`, and `-eru` also stay on the direct path in `flatbuffer_direct`.
For ONNX input they are applied during lowering or as post-lowering ModelIR rewrites.
For `-it` input they are applied to imported ModelIR before SavedModel bridge,
split planning, or rewritten TFLite export.
If the requested rewrite cannot be applied safely, conversion stops with an explicit error.

`-me` also stays on the direct path in `flatbuffer_direct`.
For ONNX `MeanVarianceNormalization`, direct lowering uses primitive builtin ops
and applies `mvn_epsilon` to the internal `variance + epsilon` term without
falling back to `tf_converter`.

`--disable_model_save` also stays on the direct path. In `flatbuffer_direct`, it means the conversion can still run internal validation and temporary staging, but no final artifacts are left in the requested output directory.

Invalid combinations are rejected explicitly:

- `--disable_model_save` with `--output_h5`, `--output_keras_v3`, or `--output_tfv1_pb`
- `--enable_auto_split_model` with `--output_h5`, `--output_keras_v3`, or `--output_tfv1_pb`

SavedModel direct export from `flatbuffer_direct` ModelIR is available with
`--flatbuffer_direct_output_saved_model`.
PyTorch package direct export is available with
`--flatbuffer_direct_output_pytorch`.
These options have the following constraints:

- `--tflite_backend flatbuffer_direct` is required for both
- `--flatbuffer_direct_output_saved_model` cannot be combined with `--disable_model_save`
- `CUSTOM` ops are rejected with an explicit error

|INT8 ONNX|INT8 TFLite(LiteRT)|
|:-:|:-:|
|<img width="300" alt="Image" src="https://github.com/user-attachments/assets/c1411cb7-35aa-489d-ad87-291d64b766ec" />|<img width="300" alt="image" src="https://github.com/user-attachments/assets/7ffeaa53-4c83-4a9e-b5b4-17ea11c93b20" />|

- e.g. LiteRT only output
  ```bash
  onnx2tf \
  -i iat_llie_180x320.onnx \
  -tb flatbuffer_direct
  ```
- e.g. Generate additional `saved_model` from LiteRT after LiteRT output
  ```bash
  onnx2tf \
  -i iat_llie_180x320.onnx \
  -tb flatbuffer_direct \
  -fdosm
  ```
- e.g. Generate `saved_model` directly from an existing LiteRT (`.tflite`) file
  ```bash
  onnx2tf \
  -it iat_llie_180x320_float32.tflite \
  -tb flatbuffer_direct
  ```
- e.g. Generate `.h5` directly from an existing LiteRT (`.tflite`) file without `tf_converter` fallback
  ```bash
  onnx2tf \
  -it iat_llie_180x320_float32.tflite \
  -tb flatbuffer_direct \
  -oh5
  ```
  <img width="1249" height="315" alt="image" src="https://github.com/user-attachments/assets/baf38dd4-cd3b-4116-af07-6d3282b66b30" />

- e.g. Generate a PyTorch package directly from an existing LiteRT (`.tflite`) file
  ```bash
  onnx2tf \
  -it iat_llie_180x320_float32.tflite \
  -o tmp_iat_llie_180x320_from_tflite \
  -tb flatbuffer_direct \
  -fdopt
  ```

- e.g. Compare the input LiteRT model and the generated PyTorch package with the same seeded inputs
  ```bash
  onnx2tf \
  -it iat_llie_180x320_float32.tflite \
  -o tmp_iat_llie_180x320_from_tflite \
  -tb flatbuffer_direct \
  -fdopt \
  -cotof
  ```
  This outputs:
  - `iat_llie_180x320_float32_pytorch/`
  - `iat_llie_180x320_float32_pytorch_accuracy_report.json` (`TFLite↔PyTorch`)
  - `iat_llie_180x320_float32_accuracy_comparison_report.json`

### [Ultra experimental] PyTorch export example (`yolox_s.onnx`)

`flatbuffer_direct` can emit a native PyTorch package together with optional
TorchScript, Dynamo ONNX, and ExportedProgram artifacts in one run.

Generate all PyTorch-side artifacts plus TFLite and accuracy reports:

```bash
onnx2tf \
-i yolox_s.onnx \
-o tmp_yolox_s \
-tb flatbuffer_direct \
-cotof \
-fdopt \
-fdots \
-fdodo \
-fdoep
```

The output directory contains:

- `yolox_s_float32.tflite`
- `yolox_s_float16.tflite`
- `yolox_s_accuracy_report.json` (`ONNX↔TFLite`)
- `yolox_s_pytorch_accuracy_report.json` (`ONNX↔PyTorch`)
- `yolox_s_accuracy_comparison_report.json`
- `yolox_s_pytorch/`
  - `model.py`
  - `runtime.py`
  - `state_dict.pth`
  - `metadata.json`
  - `yolox_s_pytorch/yolox_s_jit.pt`
  - `yolox_s_pytorch/yolox_s_dynamo.onnx`
  - `yolox_s_pytorch/yolox_s_ep.pt2`

The generated PyTorch package is a normal `torch.nn.Module` package. You can
load it and run eager inference directly:

```python
import sys

import torch

sys.path.append("tmp_yolox_s")
from yolox_s_pytorch import load_model

model = load_model(device="cpu", eval_mode=True)
x = torch.zeros((1, 3, 640, 640), dtype=torch.float32)

with torch.no_grad():
    output = model(x)

print("input :", tuple(x.shape))
print("output:", tuple(output.shape))
print(model.forward_named(x).keys())
```

Expected output for the current `yolox_s` package:

```python
input : (1, 3, 640, 640)
output: (1, 8400, 85)
dict_keys(['output'])
```

You can also load the bundled `state_dict.pth` explicitly with standard
PyTorch APIs:

```python
import sys
from pathlib import Path

import torch

sys.path.append("tmp_yolox_s")
from yolox_s_pytorch.model import Model

package_dir = Path("tmp_yolox_s/yolox_s_pytorch")
model = Model(load_weights=False, eval_mode=True)
state_dict = torch.load(package_dir / "state_dict.pth", map_location="cpu")
model.load_state_dict(state_dict, strict=True)
```

The generated `state_dict.pth` is saved in `load_state_dict`-compatible format
for native PyTorch packages.

For native packages, raw `torch.onnx.export(..., dynamo=True)` and raw
`torch.export.save(torch.export.export(...))` are intended to produce the same
graph structure as the helper-generated `*_dynamo.onnx` and `*_ep.pt2`.

Example: raw `torch.onnx.export`

```python
from pathlib import Path
import importlib
import logging
import sys
import torch

package_dir = Path("tmp_yolox_s/yolox_s_pytorch").resolve()
sys.path.insert(0, str(package_dir.parent))
pkg = importlib.import_module(package_dir.name)

model = pkg.load_model(device="cpu", eval_mode=True)
model.eval()

example_inputs = (torch.randn(1, 3, 640, 640),)
logging.getLogger("torch.onnx._internal.exporter._registration").setLevel(logging.ERROR)

with torch.no_grad():
    torch.onnx.export(
        model,
        example_inputs,
        str(package_dir / "raw_dynamo.onnx"),
        dynamo=True,
        input_names=model.input_names,
        output_names=model.output_names,
    )
```

Example: raw `torch.export.save`

```python
from pathlib import Path
import importlib
import sys
import torch

package_dir = Path("tmp_yolox_s/yolox_s_pytorch").resolve()
sys.path.insert(0, str(package_dir.parent))
pkg = importlib.import_module(package_dir.name)

model = pkg.load_model(device="cpu", eval_mode=True)
model.eval()

example_inputs = (torch.randn(1, 3, 640, 640),)

with torch.no_grad():
    exported_program = torch.export.export(model, example_inputs)

torch.export.save(
    exported_program,
    str(package_dir / "raw_exported_program.pt2"),
)
```

Both examples require a concrete example input shape. For dynamic public inputs,
use the same concrete shape/data that you would provide to `-fdodo` or `-fdoep`
via `--shape_hints`, `--test_data_nhwc_path`, or `-cind`.

> [!CAUTION]
> Native PyTorch packages generated by `--flatbuffer_direct_output_pytorch` are intended primarily for **inference**, not for training as-is.
>
> Detailed reasons:
>
> - The exporter is designed to preserve inference behavior of the converted TFLite/ModelIR graph, not to reconstruct the original training-time PyTorch model semantics.
> - The generated graph may include inference-oriented rewrites such as layout normalization, constant folding, reshapes/transposes inserted for runtime compatibility, and decomposition into primitive ops. These are correct for forward inference but are not guaranteed to be ideal or even stable for gradient-based optimization.
> - Some generated models include postprocessing or task-specific inference logic such as `argmax`, `non_max_suppression`, score filtering, indexing-heavy tensor selection, or shape-control branches. These are typically non-differentiable or poor training targets.
> - Native export may emit helper paths that are semantically equivalent for inference but were not designed with training ergonomics in mind, such as strict shape/layout alignment, bridge shims for 1D/2D/3D convolution compatibility, or graph-local runtime helpers.
> - Fallback-backed packages (`tflite`, `saved_model`, `string_normalizer`) are wrappers around non-PyTorch execution backends and therefore should be treated as inference-only.
> - Even native packages are emitted with `eval_mode=True` as the normal usage path. The exporter does not currently guarantee training-safe reconstruction of modules such as normalization layers, recurrent state handling, or control-flow-heavy blocks in the same form expected by optimizers and schedulers.
> - `state_dict.pth` is `load_state_dict`-compatible for native packages, but compatibility of weight loading does **not** imply that the generated module is a faithful training architecture suitable for fine-tuning.
>
> Practical guidance:
>
> - Use generated PyTorch packages for inference validation, packaging, and side-by-side output comparison.
> - If you want to train or fine-tune a model, treat the generated package as a reference implementation only, and rebuild or simplify the architecture into a training-oriented PyTorch model before optimization.

<details><summary>Click to expand</summary>

- Scope: ONNX ops listed in the ``tf_converter` supported layers` table above.
- Source of truth: `onnx2tf/tflite_builder/op_registry.py` and `--report_op_coverage` output.
- Current summary:
  - Listed ONNX ops in the builtin table below: `192`
  - Policy counts are generated in `*_op_coverage_report.json` (`schema_policy_counts`).
  - Check each conversion run with `--report_op_coverage` for the latest numbers.

Notes:
- `flatbuffer_direct` supports only a subset of ONNX ops as TFLite builtins.
- Some ops are conditionally supported (rank/attribute/constant-input constraints).
- For model-specific results, use `--report_op_coverage` and check `*_op_coverage_report.json`.

<details><summary>Builtin supported (ONNX -> TFLite) in flatbuffer_direct</summary><div>

|ONNX OP|TFLite OP|Key constraints (flatbuffer_direct)|
|:-|:-|:-|
|Abs|ABS (or NEG + MAXIMUM for INT64)|For `INT64` input, lowered as `NEG + MAXIMUM` because TFLite `ABS` kernel does not support `INT64`|
|Acos|MUL + SUB + SQRT + ATAN2|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Acosh|SUB + ADD + SQRT + MUL + LOG|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Add|ADD|-|
|AffineGrid|BATCH_MATMUL + TRANSPOSE + RESHAPE|`size` input must be constant rank-1 length `4` or `5` with static positive values; `theta` must be rank-3 float tensor with shape `[N,2,3]` or `[N,3,4]`; output shape must match `size`; `align_corners` in `{0,1}`|
|And|LOGICAL_AND|-|
|ArgMax|ARG_MAX (+ optional RESHAPE for keepdims)|`axis` must be in range, `keepdims` must be `0` or `1`, `select_last_index=0`, output dtype must be `INT32` or `INT64`|
|ArgMin|ARG_MIN (+ optional RESHAPE for keepdims)|`axis` must be in range, `keepdims` must be `0` or `1`, `select_last_index=0`, output dtype must be `INT32` or `INT64`|
|Attention|RESHAPE + TRANSPOSE + BATCH_MATMUL + MUL + SOFTMAX + CAST|Canonical 3-input form only (`query/key/value`); single output only; `q_num_heads == kv_num_heads > 0`; `is_causal=0`; `qk_matmul_output_mode=0`; `softcap=0`; rank-3 float tensors only|
|Asin|MUL + SUB + SQRT + ATAN2|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Asinh|MUL + ADD + SQRT + LOG|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Atan|ATAN2|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Atanh|ADD + SUB + DIV + LOG + MUL|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|AveragePool|AVERAGE_POOL_2D (+ optional PAD/PADV2 + divisor correction DIV)|2D only (rank=4), `ceil_mode` in `{0,1}`, `count_include_pad` in `{0,1}`. Supports `auto_pad` in `{NOTSET,VALID,SAME_*,SAME_LOWER}` and explicit pads. For `count_include_pad=0` with non-zero effective pads, a correction path (`AVERAGE_POOL_2D` on mask + `DIV`) is applied|
|BatchNormalization|MUL + ADD|All parameter inputs (`scale`, `bias`, `mean`, `var`) must be constant|
|Bernoulli|SHAPE + RANDOM_UNIFORM + LESS (+ optional CAST)|Input dtype must be `FLOAT16/FLOAT32`; output dtype must be `BOOL` or numeric|
|BitShift|RIGHT_SHIFT (RIGHT) or MUL-based (LEFT)|LHS/RHS must be integer tensors, `direction` must be `LEFT` or `RIGHT`; `LEFT` requires constant shift input|
|BitwiseAnd|LOGICAL_AND|BOOL tensors only|
|BitwiseNot|LOGICAL_NOT / SUB + CAST|Input dtype must be BOOL or integer|
|BitwiseOr|LOGICAL_OR|BOOL tensors only|
|BitwiseXor|BITWISE_XOR|Input dtypes must match and be BOOL/integer|
|BlackmanWindow|CAST + SQUEEZE + RANGE + MUL + DIV + COS + SUB + ADD + MAXIMUM|Input must be scalar-like rank-1 length-1 integer tensor; output dtype must be `FLOAT16/FLOAT32`|
|Cast|CAST|-|
|CastLike|CAST|-|
|Ceil|CEIL|-|
|Celu|MAXIMUM + MINIMUM + DIV + EXP + SUB + MUL + ADD|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|CenterCropPad|SLICE + PAD (+ optional RESHAPE passthrough)|Target shape input must be constant rank-1; `axes` must be in range and length must match target shape; output rank must match input rank; string dtype unsupported in builtin path|
|Clip|RELU / RELU6 / MAXIMUM + MINIMUM|General constant clip ranges are supported via `MAXIMUM`/`MINIMUM` decomposition. ReLU fast-path: `min=0,max=+inf`; ReLU6 fast-path: `min=0,max=6`|
|Col2Im|RESHAPE + TRANSPOSE + TRANSPOSE_CONV + SLICE + CAST|Input/output dtype must be `FLOAT16/FLOAT32`; input/output ranks must be `3/4`; `image_shape` and `block_shape` must be constant 2-elements; static positive dimensions required|
|Concat|CONCATENATION|-|
|ConstantOfShape|CAST + FILL|Shape input must be rank-1 integer tensor; `value` attribute must be scalar (or omitted for zero-fill)|
|Conv|CONV_2D / DEPTHWISE_CONV_2D / CONV_3D|2D: rank=4, constant weights, grouped conv only regular/depthwise, zero pads or `auto_pad=SAME_*`. 3D: rank=5, constant rank-5 weights, `group=1`, strides/dilations length=3, `auto_pad` in `{NOTSET,VALID,SAME_UPPER}` (`SAME_LOWER` unsupported); explicit pads are handled via VALID+pad/crop path|
|ConvInteger|CAST + SUB + PAD + CONV_2D / DEPTHWISE_CONV_2D + TRANSPOSE|Input must be integer tensor, output dtype must be `INT32/INT64`, weights must be constant rank-4, and grouped conv must be regular/depthwise only|
|ConvTranspose|TRANSPOSE_CONV / CONV_3D_TRANSPOSE (+ optional ADD bias; 1D uses `EXPAND_DIMS/SQUEEZE` shim)|1D/2D/3D supported (1D: input rank=3 + weight rank=3 const, 2D: input rank=4 + weight rank=4 const, 3D: input rank=5 + weight rank=5 const), `group=1`, dilations must be all-ones, and `output_padding` must satisfy `0 <= output_padding < stride` (1D len=1, 2D len=2, 3D len=3). `auto_pad` supports `SAME_*`, `VALID`, and `NOTSET`; explicit non-zero pads are handled by post-crop when output shape is static|
|Compress|NOT_EQUAL + WHERE + RESHAPE + CAST + GATHER|Condition input must be rank-1 `BOOL` or integer tensor; `axis` may be omitted (flattened output) or be in range; when `axis` is specified and static, condition length must match that axis dimension|
|Cos|COS|-|
|Cosh|SUB + EXP + ADD + MUL|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|CumProd|RANGE + LESS/LESS_EQUAL + RESHAPE + TILE + FILL + SELECT_V2 + REDUCE_PROD (+ optional REVERSE_V2)|Input/output dtype must be `FLOAT16` or `FLOAT32`; input shape must be fully static positive; `axis` must be scalar constant (or attr) and in range; `exclusive`/`reverse` must be `0` or `1`|
|DFT|RESHAPE + BATCH_MATMUL + CONCATENATION (+ optional CAST)|Current builtin path supports real input `[..., N, 1]` only with `onesided=1`, `inverse=0`, and transform `axis=rank-2`; input/output shapes must be static positive; optional `dft_length` and `axis` inputs must be constant scalars; output shape must be `[..., N//2 + 1, 2]`|
|CumSum|CUMSUM|Input rank must be `>=1`; `axis` must be scalar constant (or attr) and in range; `exclusive`/`reverse` must be `0` or `1`|
|DeformConv|PAD + RESHAPE + TRANSPOSE + SHAPE + RANGE + SQUEEZE + GATHER + FLOOR + MAXIMUM/MINIMUM + CAST + MUL + ADD + SUB + BATCH_MATMUL|Constrained 2D float path only: input/output/offset/mask rank=4, input/offset/output(/mask) dtype `FLOAT16/FLOAT32`, weights and optional bias must be constant, kernel/channel/spatial dims must be static positive, and builtin lowering is limited to `group=1` and `offset_group=1` for LiteRT runtime safety. Grouped patterns remain custom-op candidates|
|DequantizeLinear|DEQUANTIZE|`scale` must be constant, `zero_point` (if provided) must be constant, per-axis `axis` must be in range|
|DepthToSpace|DEPTH_TO_SPACE (DCR) / RESHAPE + TRANSPOSE + RESHAPE (CRD)|Rank-4 only, `blocksize > 1`, `mode` in `{DCR,CRD}`|
|Det|GATHER + RESHAPE + MUL + SUB + ADD|Input/output dtype must be `FLOAT16/FLOAT32`; builtin lowering currently supports static square `2x2` / `3x3` matrices only|
|Div|DIV or MUL (when divisor is constant reciprocal)|For non-floating outputs, lowered as `CAST -> MUL(reciprocal) -> CAST` to preserve output dtype without using unsupported integer DIV paths|
|Dropout|RESHAPE (+ optional SHAPE + FILL for mask output)|Inference-time no-op in flatbuffer_direct; inputs `ratio`/`training_mode` are ignored|
|DynamicQuantizeLinear|NEG + REDUCE_MAX + MINIMUM + MAXIMUM + SUB + DIV + ADD + CAST|Input dtype must be `FLOAT16/FLOAT32`, output dtypes must be `Y=UINT8`, `Y_Scale=FLOAT16/FLOAT32`, `Y_ZeroPoint=UINT8`; scale/zero-point outputs must be scalar|
|Einsum|FULLY_CONNECTED|Rank-2 matmul-style equation only (`ij,jk->ik`), rhs input must be constant weights|
|Elu|ELU|-|
|Equal|EQUAL|-|
|Erf|ABS + SIGN + MUL + ADD + DIV + EXP + SUB|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Exp|EXP|-|
|Expand|RESHAPE + MUL (broadcast via const ones)|Output shape must be statically known, non-negative, and broadcast-compatible with input shape (current direct lowering uses static `RESHAPE + MUL`)|
|EyeLike|RESHAPE (from const eye)|Output must be rank-2 with fully static positive shape|
|Flatten|RESHAPE|Input rank must be >= 1|
|Floor|FLOOR|-|
|FusedConv|CONV_2D / DEPTHWISE_CONV_2D + fused activation|Supports `Relu/Tanh/Sigmoid/LeakyRelu/Clip/HardSigmoid` activations with valid scalar params; convolution constraints follow builtin Conv/FusedConv validator|
|FusedMatMul|BATCH_MATMUL (+ optional MUL for `alpha`)|Input rank >= 2, dtypes FLOAT16/FLOAT32 only, `transA/transB` must be 0 or 1, finite `alpha` required|
|Gather|GATHER|`batch_dims=0` only|
|GatherElements|CAST + RESHAPE + CONCATENATION + GATHER_ND|Data/indices ranks must match, output shape must equal indices shape, static positive output dims required, `axis` must be in range|
|GatherND|CAST + GATHER_ND|`batch_dims=0` only; indices must be integer type; indices last dim must be static positive and `<= params_rank`|
|Gelu|GELU|-|
|Gemm|FULLY_CONNECTED|Input rank=2, weight rank=2 + constant, `transA=0` only|
|Greater|GREATER|-|
|GreaterOrEqual|GREATER_EQUAL|-|
|GridSample|PAD + RESHAPE + TRANSPOSE + SQUEEZE + SLICE + ADD/SUB/MUL + FLOOR + MAXIMUM/MINIMUM + CAST + GATHER|Rank-4/5 with static positive dims; `mode=bilinear`; `padding_mode` in `{zeros,border}`; `align_corners` in `{0,1}`. When `grid` is graph input, keep shape metadata (e.g. `-kat grid`)|
|GlobalAveragePool|MEAN|Input rank must be `>=3`|
|GlobalLpPool|ABS + POW + SUM + RESHAPE (+ optional CAST)|Input rank must be `>=3`; input/output dtype must be `FLOAT16/FLOAT32`; `p` must be finite and `> 0`|
|GlobalMaxPool|REDUCE_MAX|Input rank must be `>=3`|
|GroupNormalization|RESHAPE + MEAN + SUB + MUL + ADD + SQRT + DIV (+ optional CAST)|Input/output dtype must be `FLOAT16/FLOAT32`; scale/bias must be constant length=`C`; `num_groups > 0` and must divide channel dim; channel/spatial dims must be static positive|
|GRU|TRANSPOSE + SLICE + SQUEEZE + BATCH_MATMUL + ADD + MUL + SUB + LOGISTIC + TANH + RESHAPE + CONCATENATION + EXPAND_DIMS|`layout=0`; `direction` in `{forward, reverse, bidirectional}`; `sequence_lens` unsupported; `W/R` must be constant rank-3; `linear_before_reset` in `{0,1}`; activations `[Sigmoid,Tanh]`; `clip=0`|
|Hardmax|TRANSPOSE + ARG_MAX + ONE_HOT|`axis` must be in range; target axis size must be static positive|
|HardSigmoid|MUL + ADD + MAXIMUM + MINIMUM|Input/output dtype must be FLOAT16 or FLOAT32|
|HardSwish|HARD_SWISH|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|HammingWindow|CAST + SQUEEZE + RANGE + MUL + DIV + COS + SUB + MAXIMUM|Input must be scalar-like rank-1 length-1 integer tensor; output dtype must be `FLOAT16/FLOAT32`|
|HannWindow|CAST + SQUEEZE + RANGE + MUL + DIV + COS + SUB + MAXIMUM|Input must be scalar-like rank-1 length-1 integer tensor; output dtype must be `FLOAT16/FLOAT32`|
|MelWeightMatrix|const-folded builtin tensor materialization|All five inputs must be constant scalars; output dtype must be `FLOAT16/FLOAT32`; output shape is `[dft_length // 2 + 1, num_mel_bins]`; requires `0 <= lower_edge_hertz < upper_edge_hertz <= sample_rate / 2`|
|Identity|RESHAPE|-|
|If|CONCATENATION + REDUCE_MAX + CAST + ADD + MUL + RESHAPE + NON_MAX_SUPPRESSION_V4/V5 + SLICE + GATHER + SHAPE + SUB + SELECT/SELECT_V2|Built-in lowering supports constrained patterns: NMS-guard pattern (empty then-branch + NMS else-branch), axis0 Add-branch pattern (single `Add` per branch, same trailing dims, different static first dim), SequenceConstruct Add-branch pattern (branch-local `Constant`/`Add` with terminal `SequenceConstruct`), and nested ReduceMin/Add pattern (else-branch `ReduceMin/Greater` with nested Add/Add `If`). In control-flow branch lowering, dynamic-condition `If` is additionally supported when both branches are single-output initializer-only constants (lowered via `Where`)|
|InstanceNormalization|MEAN + SUB + MUL + MEAN + ADD + SQRT + DIV + MUL + ADD|Input/output dtype must be `FLOAT16` or `FLOAT32`; input rank must be `>=3`; `scale` and `bias` inputs must be constant|
|IsInf|ABS + EQUAL / LESS + GREATER + LOGICAL_AND|Input dtype must be `FLOAT16/FLOAT32`; output dtype must be `BOOL`; `detect_negative` / `detect_positive` are honored|
|IsNaN|NOT_EQUAL|Input dtype must be `FLOAT16/FLOAT32`; output dtype must be `BOOL`|
|MeanVarianceNormalization|MEAN + SUB + MUL + MEAN + ADD + SQRT + DIV|Input/output dtype must be `FLOAT16` or `FLOAT32`; `mvn_epsilon` is applied directly in builtin lowering; default axes follow ONNX channel-first semantics and rank `<3` reduces over axis `0`|
|Inverse|SLICE + MUL + SUB + ADD + NEG + CONCATENATION + DIV (+ optional CAST in/out)|Input/output dtype must be `FLOAT16` or `FLOAT32`; input rank must be `>=2`; matrix last dimensions must resolve to square `2x2` or `3x3`|
|LeakyRelu|LEAKY_RELU|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Less|LESS|-|
|LessOrEqual|LESS_EQUAL|-|
|Log|LOG|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|LogSoftmax|SOFTMAX + LOG (+ transpose in/out for non-last axis)|`axis` must be in range (negative axis normalized)|
|Loop|WHILE (+ subgraph-local ADD/LESS/LOGICAL_AND/RESHAPE and lowered body ops)|Built-in lowering supports either static-unroll patterns (constant `trip_count`/`cond`, loop-carried outputs only) or WHILE patterns with loop-carried outputs only (no scan outputs). `max_trip_count` input dtype must be `INT32` or `INT64`|
|LpPool|ABS + POW + AVERAGE_POOL_2D + MUL + RESHAPE (+ optional CAST)|Rank-4 only; input/output dtype must be `FLOAT16/FLOAT32`; `kernel_shape/strides/dilations` must be 2D; `dilations=[1,1]`; `p` must be finite and `> 0`; non-zero pads require `count_include_pad=1`|
|LpNormalization|L2_NORMALIZATION|`p=2`, `axis=last` only|
|LRN|LOCAL_RESPONSE_NORMALIZATION (+ transpose in/out)|Input rank must be 4, `size` must be a positive odd integer|
|LayerNormalization|MEAN + SUB + MUL + ADD + SQRT + DIV (+ optional CAST)|`axis` and `stash_type` are honored; optional ONNX outputs (`mean`, `inv_std_dev`) are supported|
|LSTM|UNIDIRECTIONAL_SEQUENCE_LSTM / BIDIRECTIONAL_SEQUENCE_LSTM + REVERSE_V2 + SPLIT + SQUEEZE + SLICE + RESHAPE/EXPAND_DIMS + CONCATENATION|`direction` in `{forward,reverse,bidirectional}`, `layout=0`, `input_forget=0`; `W/R` must be constant rank-3 with `num_directions` matching `direction`; optional `B` must be constant shape `[num_directions, 8*hidden_size]`; `initial_h/initial_c` are optional (when provided, shape must be `[num_directions, batch, hidden]`; runtime tensor inputs are supported); `sequence_lens` and peephole input `P` unsupported; projection (`R.shape[2] != hidden_size`) unsupported|
|MatMul|BATCH_MATMUL (+ CAST/RESHAPE/SQUEEZE helpers)|Supports standard rank>=2 matmul, vector lhs/rhs forms, vector dot, and scalar multiply patterns|
|MatMulInteger|CAST + SUB + BATCH_MATMUL|A/B input rank must be >=2 (rank=1 placeholder allowed), A/B dtypes must be integer tensor types (`INT8/UINT8/INT16/UINT16/INT32`), output dtype must be `INT32/INT64`; optional zero-point inputs must be scalar/1D and shape-compatible|
|Max|MAXIMUM (chained for >2 inputs)|At least 2 inputs|
|MaxPool|MAX_POOL_2D|2D only (rank=4), `ceil_mode` in `{0,1}`, zero pads or `auto_pad=SAME_*`|
|MaxRoiPool|TRANSPOSE + SLICE + MAX_POOL_2D + CONCATENATION|Current builtin path supports rank-4 input/output only with constant `rois`; input/output dtype must be `FLOAT16/FLOAT32`; all shapes must be static positive; `pooled_shape` must be length-2 positive and match output spatial dims; output channels must match input channels; output batch must equal the number of constant rois|
|MaxUnpool|CAST + RESHAPE + SCATTER_ND|Input/indices/output must be rank-4; input and indices shapes must match; input/output dtype must match and indices must be integer; output shape must be static positive with matching batch/channel; `kernel_shape` and `strides` must be length-2 positive; zero `pads` only; optional `output_shape` input must be a constant length-4 tensor matching the graph output shape|
|Mean|ADD + DIV (+ optional CAST)|All inputs and output must be `FLOAT16/FLOAT32`|
|NegativeLogLikelihoodLoss|TRANSPOSE + CAST + EQUAL + SELECT_V2 + ONE_HOT + MUL + SUM + SUB (+ optional GATHER/MEAN/DIV)|Input/output dtype must be `FLOAT16/FLOAT32`; target dtype must be integer; input rank must be `>=2` with static positive class dim at axis 1; optional weight must be rank-1 float tensor of length `C`; `reduction` in `{none,sum,mean}`; `ignore_index` supported|
|Min|MINIMUM (chained for >2 inputs)|At least 2 inputs|
|Mish|EXP + ADD + LOG + TANH + MUL|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Mod|FLOOR_MOD|`fmod=0` only|
|Mul|MUL|-|
|MultiHeadAttention|RESHAPE + TRANSPOSE + BATCH_MATMUL + MUL + SOFTMAX + CAST|`num_heads > 0`, `unidirectional=0`, query/key/value must be rank-3 same dtype (`FLOAT16/FLOAT32`), hidden dims must be static positive and divisible by `num_heads`|
|Neg|NEG|-|
|NonMaxSuppression|NON_MAX_SUPPRESSION_V4/V5 + SLICE + GATHER + SUB + CAST + RESHAPE + CONCATENATION (+ optional ARG_MAX + REDUCE_MAX)|Rank-3 boxes/scores only; `center_point_box=0`; currently `batch=1`; boxes last dim must be `4`; static positive `num_boxes`; `scores_shape[2] == boxes_shape[1]`; optional thresholds/max_output must be scalar constants; output dtype must be `INT32` or `INT64`; when `--output_nms_with_argmax` is disabled, class dim must be static positive (class dim `>1` is supported via class-wise NMS). `--switch_nms_version` (`-snms`) selects V4 or V5.|
|NonZero|NOT_EQUAL + WHERE + TRANSPOSE + CAST|Input rank must be `>=1`; output rank must be `2`|
|Not|LOGICAL_NOT|-|
|OneHot|CAST + ADD + FLOOR_MOD + ONE_HOT|`depth` input must be constant scalar and `>0`; `values` input must be constant 2-element tensor `[off_value,on_value]`; normalized `axis` must be in range|
|OptionalHasElement|const-fold (`BOOL` scalar)|Built-in lowering supports determinable-presence cases only: non-optional tensor inputs are folded to `true`; inputs produced by `Optional` (empty/value) are folded to `false/true`; runtime-optional graph inputs are not supported in builtin path|
|Or|LOGICAL_OR|-|
|Pad|PAD / PADV2 / MIRROR_PAD (+ dynamic pads bridge: CAST + RESHAPE + TRANSPOSE)|`mode` in `{constant,reflect}`; `reflect` is lowered to `MIRROR_PAD(REFLECT)`. `pads` may be constant or dynamic rank-1 tensor of length `2*rank` (integer type, internally cast to `INT32`). For `mode=constant`, constant zero is lowered as `PAD`; constant non-zero is lowered as `PADV2` (non-quantized tensors only)|
|Pow|POW|Output dtype must be `FLOAT16` or `FLOAT32`|
|PRelu|PRELU|`slope` must be constant (scalar or per-channel)|
|QGemm|FULLY_CONNECTED|Input rank=1 or 2, weight must be constant rank=2, bias must be constant, quantization params must be constant, `transA=0`, `transB` in `{0,1}`|
|QLinearAdd|ADD|All quantization params (`a/b/c scale`, `a/b/c zero_point`) must be constant|
|QLinearAveragePool|DEQUANTIZE + TRANSPOSE + AVERAGE_POOL_2D + TRANSPOSE + QUANTIZE|Input rank=4 only, all quantization params (`x scale/zero_point`, `y scale/zero_point`) must be constant, `kernel_shape/strides` must be 2D, `dilations=[1,1]`, `ceil_mode` in `{0,1}` (`ceil_mode=1` has stricter pad/auto_pad constraints), and `count_include_pad=0`|
|QLinearConcat|DEQUANTIZE + CONCATENATION + QUANTIZE|`y scale/zero_point` and each input triplet (`x scale/zero_point`) must be constant, input ranks must match, `axis` must be in range|
|QLinearConv|CONV_2D / DEPTHWISE_CONV_2D|Input/output rank=4, weight must be constant rank=4, all quantization params constant, group conv only regular/depthwise (depthwise detection uses `group` and weight shape), optional bias must be constant|
|QLinearGlobalAveragePool|AVERAGE_POOL_2D (preferred) / DEQUANTIZE + MEAN + QUANTIZE (fallback)|All quantization params (`x scale/zero_point`, `y scale/zero_point`) must be constant, input rank >= 3, `channels_last` must be 0 or 1. Quantized `AVERAGE_POOL_2D` path is used for rank-4 with static spatial dims and per-tensor quantization|
|QLinearLeakyRelu|DEQUANTIZE + PRELU + QUANTIZE|All quantization params (`x/y scale`, `x/y zero_point`) must be constant|
|QLinearMatMul|FULLY_CONNECTED|Input rank=1 or 2, weight must be constant rank=2, all quantization params constant|
|QLinearMul|MUL|All quantization params (`a/b/c scale`, `a/b/c zero_point`) must be constant|
|QLinearSigmoid|DEQUANTIZE + LOGISTIC + QUANTIZE|All quantization params (`x scale/zero_point`, `y scale/zero_point`) must be constant|
|QLinearSoftmax|DEQUANTIZE + SOFTMAX + QUANTIZE|All quantization params (`x/y scale`, `x/y zero_point`) must be constant; `axis` must be last dimension|
|QuantizeLinear|QUANTIZE|`scale` must be constant, `zero_point` (if provided) must be constant, per-axis `axis` must be in range|
|RandomNormal|RANDOM_STANDARD_NORMAL (+ optional MUL + ADD + CAST)|`shape` attribute must be present and non-empty; output dtype must be `FLOAT16/FLOAT32`; `seed` is mapped to TFLite random options when provided|
|RandomNormalLike|SHAPE + RANDOM_STANDARD_NORMAL (+ optional MUL + ADD + CAST)|Rank inferred from input shape; output dtype must be supported numeric type (`FLOAT16/FLOAT32/INT*`/`UINT*`). `seed` is mapped to TFLite random options when provided|
|RandomUniform|RANDOM_UNIFORM (+ optional MUL + ADD + CAST)|`shape` attribute must be present and non-empty; output dtype must be `FLOAT16/FLOAT32`; `seed` is mapped to TFLite random options when provided|
|RandomUniformLike|SHAPE + RANDOM_UNIFORM (+ optional MUL + ADD + CAST)|Input rank is used only to materialize the runtime shape; output dtype must be `FLOAT16/FLOAT32`; `seed` is mapped to TFLite random options when provided|
|Range|CAST + SQUEEZE + RANGE|Each of `start/limit/delta` must be scalar-like rank-1 length-1 tensor|
|Reciprocal|DIV|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|ReduceL1|ABS + SUM|Reduce axes must be constant when provided via input tensor|
|ReduceL2|MUL + SUM + SQRT + CAST|Reduce axes must be constant when provided via input tensor|
|ReduceLogSum|SUM + LOG (+ optional CAST)|Input/output dtype must be `FLOAT16/FLOAT32`; reduce axes must be constant when provided via input tensor|
|ReduceLogSumExp|EXP + SUM + LOG (+ optional CAST)|Input/output dtype must be `FLOAT16/FLOAT32`; reduce axes must be constant when provided via input tensor|
|ReduceMax|REDUCE_MAX|Reduce axes must be constant when provided via input tensor|
|ReduceMean|MEAN|Reduce axes must be constant when provided via input tensor|
|ReduceMin|REDUCE_MIN|Reduce axes must be constant when provided via input tensor|
|ReduceProd|REDUCE_PROD|Reduce axes must be constant when provided via input tensor|
|ReduceSumSquare|MUL + SUM (+ optional CAST)|Input/output dtype must be `FLOAT16/FLOAT32`; reduce axes must be constant when provided via input tensor|
|ReduceSum|SUM|Reduce axes must be constant when provided via input tensor|
|Relu|RELU|-|
|Reshape|RESHAPE|Shape input must be constant|
|Resize|RESIZE_NEAREST_NEIGHBOR / RESIZE_BILINEAR / (cubic) RESHAPE + BATCH_MATMUL + RESHAPE + BATCH_MATMUL|Rank-4 only. `nearest`/`linear`: builtin resize path (limited attr combinations), parameters must be constant `scales/sizes` or dynamic rank-1 integer `sizes` (INT32/INT64). `cubic`: strict ONNX cubic decomposition (no FlexResizeBicubic), supports `coordinate_transformation_mode` in `{align_corners, asymmetric, half_pixel, pytorch_half_pixel}` and honors `cubic_coeff_a`/`exclude_outside`; requires static input C/H/W and static output H/W. Batch dimension is preserved through the cubic decomposition path|
|ReverseSequence|CAST + REVERSE_SEQUENCE|Input rank must be `>=2`; `seq_lengths` must be rank-1 integer tensor; `batch_axis`/`time_axis` must be in range and different|
|RoiAlign|CAST + GATHER + PAD + RESHAPE + ADD/SUB/MUL/DIV + MAXIMUM/MINIMUM + FLOOR + TILE + AVERAGE_POOL_2D / MAX_POOL_2D + TRANSPOSE|Input/output rank=4 only; `rois` rank=2 (`[...,4]`), `batch_indices` rank=1 integer; input `C/H/W` must be static positive; `mode` in `{avg,max}`; `coordinate_transformation_mode` in `{half_pixel,output_half_pixel}`; `output_height/output_width` must be positive|
|RotaryEmbedding|TRANSPOSE + SLICE + RESHAPE + CAST + MUL + SUB + ADD + CONCATENATION|Current builtin path supports rank-4 input/output only, `interleaved=0`, and no `position_ids` input; all tensor dtypes must be `FLOAT16/FLOAT32` with output dtype matching input; shapes must be static positive; `cos/sin` must be rank-2 with shape `[seq_len, rotary_embedding_dim/2]`; `rotary_embedding_dim` must be even and `<= head_size`|
|RNN|UNIDIRECTIONAL_SEQUENCE_RNN + REVERSE_V2 + CONCATENATION + TRANSPOSE + EXPAND_DIMS + SLICE + SQUEEZE + RESHAPE|`direction` in `{forward,reverse,bidirectional}`, `layout=0`; `sequence_lens` unsupported; `W/R` must be constant rank-3 with `num_directions` matching `direction`; optional `B` must be constant shape `[num_directions, 2*hidden_size]`; optional `initial_h` shape must be `[num_directions, batch, hidden]` (runtime tensor inputs are supported); activations in `{tanh,relu,sigmoid}`; `clip=0`|
|Round|ROUND|-|
|Scatter|CAST + LESS + SELECT + SHAPE + GATHER + RANGE + RESHAPE + TILE + CONCATENATION + MUL + ADD + SUB + FILL + SCATTER_ND|Alias of `ScatterElements`; `reduction=none` only; `axis` must be in range; `indices` dtype must be integer; `updates/output` dtype must match `data` dtype|
|ScatterND|CAST + SHAPE + FILL + MUL + SCATTER_ND + SUB + ADD|`reduction=none` only; data/updates/output dtypes must match (numeric), indices dtype must be integer, indices last dim must be static positive and `<= data rank`|
|ScatterElements|CAST + LESS + SELECT + SHAPE + GATHER + RANGE + RESHAPE + TILE + CONCATENATION + MUL + ADD + SUB + FILL + SCATTER_ND|`reduction=none` only; `data/indices/updates` must have same rank; `axis` must be in range; `indices` dtype must be integer; `updates/output` dtype must match `data` dtype; output shape must match `data` shape|
|TensorScatter|CAST + GATHER + RESHAPE + ADD (+ FLOOR_MOD for `mode=circular`) + CONCATENATION + FILL + MUL + SUB + SCATTER_ND|`data/updates/output` rank must match and `updates` shape must be static positive; `axis` must be in range; `mode` in `{linear,circular}`; optional `write_indices` must be rank-1 integer tensor with length `>= updates.shape[0]`; `output` dtype must match `data` dtype; `mode=circular` requires static positive axis dim|
|Selu|MAXIMUM + MINIMUM + EXP + SUB + MUL + ADD|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Shape|SHAPE (+ SLICE for `start/end`)|Output dtype must be `INT32` or `INT64`; `start/end` slicing follows ONNX normalization|
|Shrink|ADD + SUB + LESS + GREATER + SELECT_V2 (+ optional CAST)|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Sigmoid|LOGISTIC|-|
|Sign|SIGN|-|
|Sin|SIN|-|
|Sinh|SUB + EXP + MUL|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Size|SHAPE + REDUCE_PROD (+ optional CAST)|Computes tensor element count via `Shape -> ReduceProd`; output dtype follows ONNX output type (`INT32/INT64`)|
|StringNormalizer|RESHAPE (no-op) / EQUAL + LOGICAL_OR + LOGICAL_NOT + WHERE + GATHER (+ EXPAND_DIMS for rank-2) / const-fold|Input/output dtype must be `STRING`, `locale` must be `''` or `en_US`. Runtime path supports only `case_change_action=NONE` (or empty). For non-constant input, stopword filtering is supported only when `is_case_sensitive=1` and input rank is 1 or 2 (`rank=2` follows current onnx2tf behavior and processes the first row). Constant-input path is folded at conversion time and supports `LOWER/UPPER`, case-insensitive matching, and empty-result fallback (`""`) semantics.|
|Slice|SLICE / STRIDED_SLICE / REVERSE_V2|`starts` must be constant input/attr. `ends` is usually constant input/attr; dynamic `ends` is supported only for rank-1 axis-0 prefix slice (`start=0`, `step=1`). `steps=0` unsupported. Negative `steps` are supported only for full-axis reverse pattern (`start=-1`, very negative `end`, `step=-1`) via `REVERSE_V2`|
|Softmax|SOFTMAX (+ transpose in/out for non-last axis)|`axis` must be in range (negative axis normalized)|
|SoftmaxCrossEntropyLoss|TRANSPOSE + SOFTMAX + LOG + CAST + EQUAL + SELECT_V2 + ONE_HOT + MUL + SUM + SUB (+ optional GATHER/MEAN/DIV)|Input/output dtype must be `FLOAT16/FLOAT32`; labels dtype must be integer; input rank must be `>=2` with static positive class dim at axis 1; optional weight must be rank-1 float tensor of length `C`; `reduction` in `{none,sum,mean}`; optional output[1] log-prob tensor is supported|
|Softplus|EXP + ADD + LOG|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Softsign|ABS + ADD + DIV|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|STFT|SLICE + MUL + RESHAPE + BATCH_MATMUL + CONCATENATION (+ optional CAST)|Current builtin path supports rank-2 signal input only with `onesided=1`; `frame_step`, `window`, and `frame_length` inputs must be constant; shapes must be static positive with `signal_length >= frame_length`; `window` length must equal `frame_length`; output shape must be `[batch, num_frames, frame_length//2 + 1, 2]`|
|SpaceToDepth|SPACE_TO_DEPTH|`blocksize > 1`, rank=4 (NCHW)|
|Split|SLICE|`axis` must be in range; explicit split sizes (input/attr) must be constant and count must match outputs; without explicit split sizes, axis dim must be known and divisible by output count|
|Sqrt|SQRT|-|
|Squeeze|SQUEEZE|Axes must be constant when provided via input tensor|
|Sub|SUB|-|
|Sum|ADD (chained for >2 inputs)|At least 2 inputs|
|Tan|SIN + COS + DIV|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Tanh|TANH|-|
|ThresholdedRelu|GREATER + CAST + MUL|Input/output dtype must be `FLOAT16` or `FLOAT32`|
|Tile|CAST + TILE|`multiples` must be rank-1 integer tensor; if input rank is static, `len(multiples)` must match input rank; constant `multiples` must be non-negative|
|TopK|TOPK_V2 (+ optional TRANSPOSE + NEG + CAST + SQUEEZE)|Input rank must be `>=1`; input dtype must be `FLOAT16/FLOAT32`; `axis` must be in range; `largest` must be `0` or `1`; `sorted` must be `1`; `k` must be scalar-like (`[]` or `[1]`) and integer dtype; indices output dtype must be `INT32` or `INT64`|
|Transpose|TRANSPOSE|Permutation input must be constant|
|Trilu|MUL / LOGICAL_AND|Input rank must be `>=2`; matrix dims must be static positive; optional `k` input must be constant|
|Unique|CAST + FLOOR_MOD + UNIQUE + CONCATENATION|Input dtype must be integer; output[0] dtype must be integer; `sorted` must be `0` or `1`; when `axis` is specified, only `axis=0` is supported and input must be rank-2 with static positive second dimension; builtin path supports output[0] only (other outputs must be unused)|
|Unsqueeze|RESHAPE|Axes must be constant and unique. Axis normalization follows output-rank semantics (`output_rank = input_rank + len(axes)`), so opset8-style patterns such as `input_rank=2, axes=[2,3]` are supported|
|Upsample|RESIZE_NEAREST_NEIGHBOR / RESIZE_BILINEAR / (cubic) RESHAPE + BATCH_MATMUL + RESHAPE + BATCH_MATMUL|Legacy alias of `Resize` lowered by the same builder. Rank-4 only; supports constrained `nearest`/`linear` builtin resize and constrained `cubic` decomposition path. Parameter input follows `Upsample` 2-input form (`scales`/`sizes`) with the same constant/dynamic integer constraints as `Resize`|
|Where|CAST + SELECT|Condition input dtype must be BOOL or numeric|
|Xor|NOT_EQUAL|-|

</div></details>

<details><summary>Custom-op candidates in flatbuffer_direct (opt-in)</summary><div>

|ONNX OP|Default policy|When enabled|
|:-|:-|:-|
|DeformConv|builtin_supported on constrained standard 2D float pattern (`group=1`, `offset_group=1`); otherwise explicit_error (`custom_op_candidate_disabled`)|Grouped or otherwise unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|DynamicQuantizeLinear|builtin_supported on constrained float-input/uint8-output pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|Einsum|builtin_supported on constrained equations; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported equations can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|GridSample|builtin_supported on constrained rank-4/5 bilinear pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported GridSample patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|If|builtin_supported on constrained patterns (NMS-guard, axis0 Add-branch, SequenceConstruct Add-branch, and nested ReduceMin/Add); otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported If patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|LogSoftmax|builtin_supported on constrained axis pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|Loop|builtin_supported on constrained patterns (static-unroll / WHILE loop-carried forms); otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported Loop patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|LSTM|builtin_supported on constrained forward/reverse/bidirectional pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|NonMaxSuppression|builtin_supported on constrained rank-3 boxes/scores pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|QLinearConv|builtin_supported on constrained regular/depthwise pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported grouped patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|RoiAlign|builtin_supported on constrained pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported RoiAlign patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|Scan|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|ScatterElements|builtin_supported on constrained pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported ScatterElements patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|SequenceAt|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|SequenceConstruct|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|SequenceErase|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|SequenceInsert|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|SequenceLength|explicit_error (`custom_op_candidate_disabled`)|Lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|TopK|builtin_supported on constrained float-input/scalar-k pattern; otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|
|Unique|builtin_supported on constrained integer pattern (output[0]-only); otherwise explicit_error (`custom_op_candidate_disabled`)|Unsupported patterns can be lowered to TFLite `CUSTOM` when `--flatbuffer_direct_allow_custom_ops` is enabled and allowlist passes|

</div></details>

Notes:
- `Einsum` is now treated as `builtin_supported` when it matches builtin constraints; unsupported `Einsum` patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `QLinearConv` is treated as `builtin_supported` for regular/depthwise patterns; unsupported grouped patterns may still fallback to `CUSTOM` when custom-op mode is enabled.
- `LogSoftmax` is now treated as `builtin_supported` when builtin constraints pass; unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `LSTM` is now treated as `builtin_supported` for constrained forward/reverse/bidirectional patterns; unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `NonMaxSuppression` is now treated as `builtin_supported` when builtin constraints pass; unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `DynamicQuantizeLinear` is now treated as `builtin_supported` for constrained float-input/uint8-output patterns; unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `If` is now treated as `builtin_supported` for constrained patterns (NMS-guard, axis0 Add-branch, SequenceConstruct Add-branch, and nested ReduceMin/Add); unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `Loop` is now treated as `builtin_supported` for constrained static-unroll/WHILE loop-carried patterns; unsupported patterns may still fallback to `CUSTOM` if custom-op mode is enabled.
- `StringNormalizer` is now treated as `builtin_supported` under constrained runtime patterns (`case_change_action=NONE`, locale `''/en_US`, rank1/2). Unsupported runtime patterns (e.g. `LOWER/UPPER` or case-insensitive stopword filtering) may still fallback to `CUSTOM` if custom-op mode is enabled.
- `StringNormalizer` constant-input graphs are now folded at conversion time with string-constant buffer serialization support in flatbuffer_direct (including stopword filtering and `LOWER/UPPER` case conversion).
- `OptionalHasElement` is now treated as `builtin_supported` for determinable-presence cases (non-optional inputs and `Optional` producer lineage), reducing `ONNX_OPTIONALHASELEMENT` custom-op fallbacks.
- `OneHot`, `MatMulInteger`, `Pow`, `Reciprocal`, and `Inverse` are now treated as `builtin_supported` when builtin constraints pass.
- `ReduceMin` is now treated as `builtin_supported` under builtin constraints.
- `Min` and `TopK` are now treated as `builtin_supported` under builtin constraints, reducing `ONNX_MIN` / `ONNX_TOPK` custom-op fallbacks.
- `DepthToSpace` and `HardSwish` are now treated as `builtin_supported` under builtin constraints (`HardSwish` is lowered directly as TFLite `HARD_SWISH`).
- `Pad` builtin path now supports dynamic `pads` input (rank-1 length `2*rank`) via `CAST + RESHAPE + TRANSPOSE` bridge before `PAD`.
- `Pad` builtin path now supports `mode=reflect` by lowering to TFLite `MIRROR_PAD` (`REFLECT` mode).
- `Pad` builtin path now supports constant non-zero padding values by lowering to TFLite `PADV2` (non-quantized tensors).
- `Unsqueeze` builtin path now normalizes axes using output-rank semantics (`output_rank = input_rank + len(axes)`), supporting opset8-style cases such as `axes=[2,3]` for rank-2 input and reducing `ONNX_UNSQUEEZE` custom-op fallback.
- `ConvTranspose` builtin path has been expanded: constrained 1D lowering (`EXPAND_DIMS -> TRANSPOSE_CONV -> SQUEEZE`), relaxed `output_padding` handling (`0 <= output_padding < stride`), and explicit non-zero pad handling via post-crop when output shape is static.
- `Conv` now includes rank-5 `CONV_3D` builtin lowering (`group=1`, constant weights), reducing `ONNX_CONV` custom-op fallbacks on 3D conv subgraphs.
- `ConvTranspose` now includes rank-5 `CONV_3D_TRANSPOSE` builtin lowering (`group=1`, `dilations=[1,1,1]`, constrained `output_padding`), reducing `ONNX_CONVTRANSPOSE` custom-op fallbacks on 3D deconv subgraphs.
- `NonMaxSuppression` builtin path now supports class dim `>1` without forcing `--output_nms_with_argmax` by using per-class `NON_MAX_SUPPRESSION_V4/V5` (selected by `--switch_nms_version`) and concatenating `[batch, class, index]` triplets (matching default `onnx2tf/ops/NonMaxSuppression.py` behavior when `-onwa` is not set).
- `AveragePool` builtin path now supports explicit pads and `count_include_pad` in `{0,1}`; when `count_include_pad=0` with non-zero effective pads, divisor correction is applied to keep ONNX semantics.
- Leading input transpose passthrough optimization now treats `CAST` as passthrough, reducing redundant `Transpose -> Cast -> (Sub/Mul/...) -> Transpose` chains.
- Newly added builtin-covered ops in this update include:
  `Abs`, `Acos`, `Acosh`, `And`, `ArgMin`, `Asin`, `Asinh`, `Atan`, `Atanh`, `BitShift`,
  `BitwiseAnd`, `BitwiseNot`, `BitwiseOr`, `BitwiseXor`, `Ceil`, `Celu`, `Cos`, `Cosh`,
  `Elu`, `Equal`, `EyeLike`, `Floor`, `GatherND`, `Gelu`, `Greater`, `GRU`, `Hardmax`,
  `Less`, `LessOrEqual`, `Mish`, `NonZero`, `Not`, `Or`, `Range`, `ReduceL1`, `ReduceL2`,
  `RNN`, `Round`, `Selu`, `Sign`, `Sin`, `Sinh`, `Softplus`, `Softsign`, `Tan`, `Trilu`,
  `Where`, and `Xor`.
- Additional builtin-covered ops added in subsequent commits include:
  `Erf`, `GlobalAveragePool`, `GlobalMaxPool`, `QLinearLeakyRelu`, `QLinearSoftmax`, `ScatterND`, `Slice`,
  `Split`, and `Tile`.
- Newly builtin-covered ops added in this update include:
  `Log`, `Max`, `RoiAlign`, and `ScatterElements`.
- `Resize` builtin path now accepts dynamic rank-1 integer `sizes` input in addition to constant `scales/sizes`.
- `Resize(cubic)` now uses strict ONNX cubic semantics (including `cubic_coeff_a` and `exclude_outside`) in both `tf_converter` and `flatbuffer_direct`.
- `GreaterOrEqual`, `RandomNormalLike`, and constrained `GridSample` (`rank-4/5`, `bilinear`, `padding_mode` in `{zeros,border}`, `align_corners` in `{0,1}`) are now treated as `builtin_supported` under builtin constraints.
- `Slice` builtin path now supports additional constrained patterns: rank-1 dynamic-end prefix slice and full-axis reverse (`step=-1`) via `REVERSE_V2`.
- `Abs` builtin path now avoids unsupported `ABS(INT64)` by lowering `INT64` input to `NEG + MAXIMUM`.
- `tf_converter` now prefers a non-Flex cubic lowering (`RESHAPE + BATCH_MATMUL + RESHAPE + BATCH_MATMUL`) when rank-4 input and static spatial sizes are available, reducing `FlexResizeBicubic` generation.
- `flatbuffer_direct` cubic lowering now preserves batch metadata on intermediate tensors and output tensors (no batch-dimension drop in `RESHAPE`/`BATCH_MATMUL` chain).
- NHWC propagation around Conv-family outputs has been tightened: `CONV_2D` / `DEPTHWISE_CONV_2D` / `TRANSPOSE_CONV` outputs now avoid redundant immediate post-transpose insertion when layout is already NHWC.
- Added direct NHWC passthrough optimization for `TRANSPOSE(0,3,1,2) -> MEAN(keepDims=True) -> TRANSPOSE(0,2,3,1)` by removing both transposes and remapping reduction axes.
- HardSigmoid-related transpose passthrough has been strengthened (including expanded `MUL+ADD+RELU_0_TO_1` form), reducing redundant transpose wrappers in activation/residual chains.
- Added PReLU transpose passthrough optimization for `TRANSPOSE(0,3,1,2) -> PRELU -> TRANSPOSE(0,2,3,1)` style chains (including per-channel slope remap).
- Extended pre-concat transpose-chain optimization to handle broader unary ops and singleton-channel reshape adapters before `CONCATENATION`.
- Added ShuffleNet-style transpose-shuffle optimization to reduce long `Transpose/Reshape/Transpose/Reshape/Gather` chains while preserving downstream layout contracts.
- Added SiNet-tail NHWC optimization for Softmax-mask residual blocks: removes redundant pre/post transpose adapters around `MUL/ADD/PRELU + SOFTMAX + REDUCE_MAX + RESHAPE + MUL + ADD` and remaps axis/shape constants to NHWC to avoid terminal transpose bridges.
- Added affine fold for single-path conv chains: `CONV_2D -> MUL(const) -> ADD(const)` is folded into Conv weights/bias when the Conv output is not multi-fanout.
- Added clamp canonicalization: `MAXIMUM(0.0) -> MINIMUM(1.0)` is rewritten to `RELU_0_TO_1` to reduce op count and improve downstream transpose/activation fusion opportunities.

<!-- opensource-radar:truncated -->
