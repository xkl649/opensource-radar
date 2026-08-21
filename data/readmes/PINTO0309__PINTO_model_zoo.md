# PINTO_model_zoo

<p align="center">
  <img src="https://user-images.githubusercontent.com/33194443/104581604-2592cb00-56a2-11eb-9610-5eaa0afb6e1f.png" />
</p>

 [![CodeQL](https://github.com/PINTO0309/PINTO_model_zoo/workflows/CodeQL/badge.svg)](https://github.com/PINTO0309/PINTO_model_zoo/actions?query=workflow%3ACodeQL) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10229410.svg)](https://doi.org/10.5281/zenodo.10229410) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/PINTO0309/PINTO_model_zoo)

**Please read the contents of the `LICENSE` file located directly under each folder before using the model. My model conversion scripts are released under the MIT license, but the license of the source model itself is subject to the license of the provider repository.**

## Contributors
<a href="https://github.com/pinto0309/PINTO_model_zoo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pinto0309/PINTO_model_zoo" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

A repository for storing models that have been inter-converted between various frameworks. Supported frameworks are TensorFlow, PyTorch, ONNX, OpenVINO, TFJS, TFTRT, TensorFlowLite (Float32/16/INT8), EdgeTPU, CoreML.

TensorFlow Lite, OpenVINO, CoreML, TensorFlow.js, TF-TRT, MediaPipe, ONNX [.tflite, .h5, .pb, saved_model, tfjs, tftrt, mlmodel, .xml/.bin, .onnx]

I have been working on quantization of various models as a hobby, but I have skipped the work of making sample code to check the operation because it takes a lot of time. I welcome a pull request from volunteers to provide sample code. :smile:

**[Note Jan 05, 2020] Currently, the MobileNetV3 backbone model and the Full Integer Quantization model do not return correctly.**

**[Note Jan 08, 2020] If you want the best performance with RaspberryPi4/3, install Ubuntu 19.10 aarch64 (64bit) instead of Raspbian armv7l (32bit). The official Tensorflow Lite is performance tuned for aarch64. On aarch64 OS, performance is about 4 times higher than on armv7l OS.**

## My article
- **[[Japanese ver.] [Tensorflow Lite] Various Neural Network Model quantization methods for Tensorflow Lite (Weight Quantization, Integer Quantization, Full Integer Quantization, Float16 Quantization, EdgeTPU). As of May 05, 2020.](https://qiita.com/PINTO/items/008c54536fca690e0572)**

- **[[English ver.] [Tensorflow Lite] Various Neural Network Model quantization methods for Tensorflow Lite (Weight Quantization, Integer Quantization, Full Integer Quantization, Float16 Quantization, EdgeTPU). As of May 05, 2020.](https://qiita.com/PINTO/items/865250ee23a15339d556)**

- **[Conversion of PyTorch->ONNX->OpenVINO IR model to Tensorflow saved_model / h5 / tflite / pb](https://github.com/PINTO0309/openvino2tensorflow.git)**

- **[[English] Converting PyTorch, ONNX, Caffe, and OpenVINO (NCHW) models to Tensorflow / TensorflowLite (NHWC) in a snap - Qiita](https://qiita.com/PINTO/items/ed06e03eb5c007c2e102)**

- **[[TF2 Object Detection] Converting SSD models into .tflite uint8 format #9371](https://github.com/tensorflow/models/issues/9371#issuecomment-735252080)**

- **[tf.image.resizeを含むFull Integer Quantization (.tflite)モデルのEdgeTPUモデルへの変換後の推論時に発生する "main.ERROR - Only float32 and uint8 are supported currently, got -xxx.Node number n (op name) failed to invoke" エラーの回避方法](https://qiita.com/PINTO/items/6ff62da1d02089442c8c)**

- **[A standalone 2MB installer for TensorflowLite v2.4.0-rc4 and a libedgetpu.so.1 build intended to run on a Yocto-generated environment](https://qiita.com/PINTO/items/effb80ee349d8db6af1b)**

- **[[Japanese] Custom Operation入りのtfliteを逆コンバートしてJSON化し標準OPへ置き換えたうえでtfliteを再生成する方法](https://zenn.dev/pinto0309/articles/9d316860f8d418)**

- **[Generate saved_model, tfjs, tf-trt, EdgeTPU, CoreML, quantized tflite, ONNX, OpenVINO, Myriad Inference Engine blob and .pb from .tflite.](https://github.com/PINTO0309/tflite2tensorflow)**

- **[Add a custom OP to the TFLite runtime to build the whl installer (for Python)](https://zenn.dev/pinto0309/articles/a0e40c2817f2ee)**, **`MaxPoolingWithArgmax2D`**, **`MaxUnpooling2D`**, **`Convolution2DTransposeBias`**

- **[ONNX to JSON](https://github.com/PINTO0309/onnx2json)**

- **[JSON to ONNX](https://github.com/PINTO0309/json2onnx)**

- **[Steps to merge two ONNX files into one](https://zenn.dev/pinto0309/articles/80f18207a3f1ab)**

- **[Inverse Quantization of tflite's Sparse Tensor Densify to Refine a Clean Float32 Model](https://zenn.dev/pinto0309/articles/f6cabb1d13019f)**

- **[Replace PyTorch's argsort with sort and export to ONNX](https://zenn.dev/pinto0309/articles/ae0982b8673623)**

- **[A very simple tool that compresses the overall size of the ONNX model by aggregating duplicate constant values as much as possible. Simple Constant value Shrink for ONNX.](https://github.com/PINTO0309/scs4onnx)**

- **[Simple node deletion tool for onnx. I only test very miscellaneous and limited patterns as a hobby.](https://github.com/PINTO0309/snd4onnx)**

- **[A very simple tool for situations where optimization with onnx-simplifier would exceed the Protocol Buffers upper file size limit of 2GB, or simply to separate onnx files to any size you want. Simple Network Extraction for ONNX.](https://github.com/PINTO0309/sne4onnx)**

- **[Simple tool to combine onnx models. Simple Network Combine Tool for ONNX.](https://github.com/PINTO0309/snc4onnx)**

- **[A set of simple tools for splitting, merging, OP deletion, size compression, rewriting attributes and constants, OP generation, and change opset for ONNX models.](https://github.com/PINTO0309/simple-onnx-processing-tools)**

  ![image](https://user-images.githubusercontent.com/33194443/163656988-4e854448-7459-47d5-be85-436f340e60e6.png)

- **[Self-Created Tools to convert ONNX files (NCHW) to TensorFlow format (NHWC). The purpose of this tool is to solve the massive Transpose extrapolation problem in onnx-tensorflow (onnx-tf).](https://github.com/PINTO0309/onnx2tf)**

  ![image](https://user-images.githubusercontent.com/33194443/194713898-31fc9edc-1e6c-42b3-9f2a-60e3cbf21f80.png)


## List of pre-quantized models
\* WQ = Weight Quantization
\** OV = OpenVINO IR
\*** CM = CoreML
\**** DQ = Dynamic Range Quantization
### 1. Image Classification
|No.|Model Name|Link|FP32|FP16|INT8|DQ|TPU|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|004|Efficientnet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/004_efficientnet)|⚫||⚫|||⚫|||||||
|010|Mobilenetv3|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/010_mobilenetv3)|⚫||⚫|||⚫|||||||
|011|Mobilenetv2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/011_mobilenetv2)|⚫||⚫|⚫||⚫|||||||
|016|Efficientnet-lite|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/016_EfficientNet-lite)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|||
|070|age-gender-recognition|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/070_age-gender-recognition)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|083|Person_Reidentification|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/083_Person_Reidentification)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|248,277,286,287,288,300|
|087|DeepSort|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/087_DeepSort)|⚫|⚫|⚫|||⚫|⚫|⚫||⚫|⚫||
|124|person-attributes-recognition-crossroad-0230|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/124_person-attributes-recognition-crossroad-0230)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|125|person-attributes-recognition-crossroad-0234|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/125_person-attributes-recognition-crossroad-0234)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|126|person-attributes-recognition-crossroad-0238|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/126_person-attributes-recognition-crossroad-0238)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|175|face-recognition-resnet100-arcface-onnx|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/175_face-recognition-resnet100-arcface-onnx)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|RGB/BGR,112x112,[1,512]|
|187|vehicle-attributes-recognition-barrier-0039|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/187_vehicle-attributes-recognition-barrier-0039)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|72x72|
|188|vehicle-attributes-recognition-barrier-0042|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/188_vehicle-attributes-recognition-barrier-0042)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|72x72|
|191|anti-spoof-mn3|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/191_anti-spoof-mn3)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|128x128|
|192|open-closed-eye-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/192_open-closed-eye-0001)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|32x32|
|194|face_recognizer_fast|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/194_face_recognizer_fast)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|112x112|
|195|person_reid_youtu|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/195_person_reid_youtu)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|256x128, ReID|
|199|NSFW|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/199_NSFW)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|224x224|
|244|FINNger|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/244_FINNger)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|96x96|
|256|SFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/256_SFace)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|112x112|
|257|PiCANet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/257_PiCANet)|||||||⚫||||⚫|BDDA,SAGE/224x224|
|259|Emotion_FERPlus|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/259_Emotion_FERPlus)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|64x64|
|290|AdaFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/290_AdaFace)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|112x112|
|317|MobileOne|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/317_MobileOne)|||||||||||⚫|224x224|
|346|facial_expression_recognition_mobilefacenet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/346_facial_expression_recognition_mobilefacenet)|⚫|⚫|⚫|⚫||⚫|||||⚫|112x112|
|379|PP-LCNetV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/379_PP-LCNetV2)|⚫|⚫|||||||||⚫|224x224|
|429|OSNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/429_OSNet)|||||||||||⚫|256x128, ReID|
|430|FastReID|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/430_FastReID)|||||||||||⚫|384x128, ReID|
|431|NITEC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/431_NITEC)|||||||||||⚫|224x224, Gaze Estimation|
|432|face-reidentification-retail-0095|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/432_face-reidentification-retail-0095)|⚫|⚫|||||||||⚫|128x128, FaceReID|
|451|DAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/451_DAN)|||||||||||⚫|224x224, Facial Expression|
|452|FairFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/452_FairFace)|||||||||||⚫|224x224, Face Attribute|
|453|FairDAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/453_FairDAN)|||||||||||⚫|224x224, Face Attribute + Facial Expression|
|462|Gaze-LLE|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/462_Gaze-LLE)|||||||||||⚫|448x448, Attention|
|474|Gaze-LLE-DINOv3|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/474_Gaze-LLE-DINOv3)|||||||||||⚫|640x640,416x416,320x320, Attention|
|475|VSDLM|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/475_VSDLM)|||||||||||⚫|30x48, Lip motion|
|476|OCEC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/476_OCEC)|||||||||||⚫|24x40, Wink/Blink|
|477|PGC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/477_PGC)|||||||||||⚫|32x32, Pointing|
|478|SC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/478_SC)|||||||||||⚫|32x24, Sitting|
|479|PUC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/479_PUC)|||||||||||⚫|32x24, Phone Usage Classifier|
|480|HSC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/480_HSC)|||||||||||⚫|48x48, Happy smile classifier|
|481|WHC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/481_WHC)|||||||||||⚫|4x32x32,6x32x32,8x32x32, Waving Hand Classification|
|483|LVFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/483_LVFace)|||||||||||⚫|Nx3x112x112, Cosine similarity|
|484|TransFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/484_TransFace)|||||||||||⚫|Nx3x112x112, Cosine similarity|
|486|MWC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/486_MWC)|||||||||||⚫|Nx3x48x48, Mask wearing classifier|
|489|Glasses-Detector|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/489_Glasses-Detector)|||||||||||⚫|Glasses|
|491|SGC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/491_SGC)|||||||||||⚫|Sunglasses|
|492|HHC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/493_HHC)|||||||||||⚫|Hat|
|494|BPC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/494_BPC)|||||||||||⚫|Background Plain classification|
|495|Comprehensive-Head-Classification|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/495_Comprehensive-Head-Classification)|⚫||||||||||⚫|Comprehensive head classification|
|497|PPC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/497_PPC)|||||||||||⚫|Binary classification to determine whether the subject is holding a smartphone|
|502|PersonViT|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/502_PersonViT)|||||||||||⚫|Person Re-Identification|
|503|CDNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/503_CDNet)|||||||||||⚫|Person Re-Identification|

### 2. 2D Object Detection
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|002|Mobilenetv3-SSD|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/002_mobilenetv3-ssd)|⚫||⚫|||⚫||⚫|||||
|006|Mobilenetv2-SSDlite|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/006_mobilenetv2-ssdlite)|⚫||⚫|⚫||⚫|||||||
|008|Mask_RCNN_Inceptionv2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/008_mask_rcnn_inceptionv2)|⚫|⚫||||⚫|||||||
|018|EfficientDet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/018_EfficientDet)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|023|Yolov3-nano|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/023_yolov3-nano)|⚫|⚫||||⚫|||||⚫||
|024|Yolov3-lite|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/024_yolov3-lite)|⚫|⚫|⚫|||⚫|⚫||||⚫||
|031|Yolov4|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/031_yolov4)|⚫|⚫|⚫|⚫||⚫|||||⚫||
|034|SSD_Mobilenetv2_mnasfpn|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/034_ssd_mobilenet_v2_mnasfpn_shared_box_predictor)|⚫|⚫|⚫|⚫||⚫|||||⚫||
|038|SSDlite_MobileDet_edgetpu|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/038_ssdlite_mobiledet_edgetpu)|⚫|⚫|⚫|⚫||⚫|||⚫|⚫|⚫||
|039|SSDlite_MobileDet_cpu|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/039_ssdlite_mobiledet_cpu)|⚫|⚫|⚫|||⚫|||||||
|042|Centernet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/042_centernet)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|045|SSD_Mobilenetv2_oid_v4|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/045_ssd_mobilenet_v2_oid_v4)|⚫|⚫|⚫|⚫||⚫|||⚫||||
|046|Yolov4-tiny|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/046_yolov4-tiny)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|047|SpineNetMB_49|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/047_SpineNetMB_49)|⚫|⚫|⚫|||⚫|||||⚫|Mobile RetinaNet|
|051|East_Text_Detection|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/051_East_Text_Detection)|⚫|⚫|⚫|⚫||⚫|⚫||⚫|⚫|⚫||
|054|KNIFT|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/054_KNIFT)|⚫|⚫|⚫|||⚫|⚫||||⚫|MediaPipe|
|056|TextBoxes++ with dense blocks, separable convolution and Focal Loss|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/056_TextBoxes%2B%2B)|⚫|⚫|⚫|||⚫|⚫|⚫||⚫|⚫||
|058|keras-retinanet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/058_keras-retinanet)|⚫|⚫||||⚫|⚫||⚫|⚫|⚫|resnet50_coco_best_v2.1.0.h5,320x320|
|072|NanoDet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/072_NanoDet)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|[issue #274](https://github.com/google-coral/edgetpu/issues/274)|
|073|RetinaNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/073_RetinaNet)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|074|Yolact|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/074_Yolact)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|085|Yolact_Edge|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/085_Yolact_Edge)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|21/10/05 new MobileNetV2(550x550)|
|089|DETR|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/089_DETR)|⚫|⚫|⚫|||⚫|||||⚫|256x256|
|103|EfficientDet_lite|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/103_EfficientDet_lite)|⚫|⚫|⚫|⚫||⚫|⚫||⚫|⚫|⚫|lite0,lite1,lite2,lite3,lite4|
|116|DroNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/116_DroNet)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|DroNet,DroNetV3|
|123|YOLOR|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/123_YOLOR)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫||⚫|ssss_s2d/320x320,640x640,960x960,1280x1280|
|132|YOLOX|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/132_YOLOX)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|nano,tiny,s,m,l,x/256x320,320x320,416x416,480x640,544x960,736x1280,1088x1920|
|143|RAPiD|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/143_RAPiD)|⚫|⚫|⚫|||⚫|⚫||||⚫|Fisheye, cepdof/habbof/mw_r, 608x608/1024x1024|
|145|text_detection_db|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/145_text_detection_db)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|480x640|
|151|object_detection_mobile_object_localizer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/151_object_detection_mobile_object_localizer)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|192x192|
|169|spaghettinet_edgetpu|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/169_spaghettinet_edgetpu)|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|⚫|⚫|320x320,S/M/L|
|174|PP-PicoDet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/174_PP-PicoDet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|S/M/L,320x320/416x416/640x640|
|178|vehicle-detection-0200|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/178_vehicle-detection-0200)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|256x256,PriorBoxClustered->ndarray(0.npy)|
|179|person-detection-0202|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/179_person-detection-0202)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|512x512,PriorBoxClustered->ndarray(0.npy)|
|183|pedestrian-detection-adas-0002|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/183_pedestrian-detection-adas-0002)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|384x672,PriorBox->ndarray(0.npy)|
|184|pedestrian-and-vehicle-detector-adas-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/184_pedestrian-and-vehicle-detector-adas-0001)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|384x672,PriorBox->ndarray(0.npy)|
|185|person-vehicle-bike-detection-crossroad-0078|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/185_person-vehicle-bike-detection-crossroad-0078)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|1024x1024,PriorBoxClustered->ndarray(0.npy)|
|186|person-vehicle-bike-detection-crossroad-1016|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/186_person-vehicle-bike-detection-crossroad-1016)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|512x512,PriorBoxClustered->ndarray(0.npy)|
|189|vehicle-license-plate-detection-barrier-0106|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/189_vehicle-license-plate-detection-barrier-0106)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|300x300,PriorBoxClustered->ndarray(0.npy)|
|190|person-detection-asl-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/190_person-detection-asl-0001)|⚫|⚫|⚫||⚫|⚫|⚫||||⚫|320x320|
|197|yolact-resnet50-fpn|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/197_yolact-resnet50-fpn)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|RGB,550x550|
|198|YOLOF|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/198_YOLOF)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|BGR/RGB,608x608|
|221|YOLACT-PyTorch|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/221_YOLACT-PyTorch)|⚫|⚫|⚫||⚫|⚫|⚫||⚫|⚫|⚫|180x320,240x320,320x480,480x640,544x544,720x1280|
|226|CascadeTableNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/226_CascadeTableNet)|⚫|⚫|||⚫|⚫|⚫||||⚫|General,320x320 only|
|262|ByteTrack|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/262_ByteTrack)|||||||||||⚫|YOLOX/nano,tiny,s,m,l,x,mot17,ablation/128x320,192x320,192x448,192x640,256x320,256x448,256x640,384x640,512x1280,736x1280|
|264|object_localization_network|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/264_object_localization_network)|||||||||||⚫|180x320,240x320,270x480,360x480,360x480,360x640,480x640,720x1280|
|307|YOLOv7|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/307_YOLOv7)|⚫|⚫|⚫||⚫|⚫|⚫||⚫||⚫|YOLOv7,YOLOv7-tiny|
|308|FastestDet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/308_FastestDet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|180x320,256x320,320x480,352x352,352x640,480x640,736x1280|
|329|YOLOX-PAI|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/329_YOLOX-PAI)|||||||||||⚫||
|332|CrowdDet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/332_CrowdDet)|||||||||||⚫||
|334|DAMO-YOLO|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/334_DAMO-YOLO)|||||||||||⚫||
|336|PP-YOLOE-Plus|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/336_PP-YOLOE-Plus)|||||||||||⚫||
|337|FreeYOLO|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/337_FreeYOLO)|||||||||||⚫||
|341|YOLOv6|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/341_YOLOv6)|⚫|⚫|⚫||⚫|⚫|||||⚫||
|356|EdgeYOLO|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/356_EdgeYOLO)|||||||||||⚫||
|376|RT-DETR|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/376_RT-DETR)|||||||||||⚫|ResNet50,ResNet101,HgNetv2-L,HgNetv2-X|
|386|naruto_handsign_detection|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/386_naruto_handsign_detection)|⚫|⚫|⚫||⚫||||||⚫||
|422|Gold-YOLO-Head-Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/422_Gold-YOLO-Head-Hand)|||||||||||⚫|Head,Hand|
|424|Gold-YOLO-Body|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/424_Gold-YOLO-Body)|||||||||||⚫|Body|
|425|Gold-YOLO-Body-Head-Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/425_Gold-YOLO-Body-Head-Hand)|||||||||||⚫|Body,Head,Hand|
|426|YOLOX-Body-Head-Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/426_YOLOX-Body-Head-Hand)|⚫|⚫|⚫||||||||⚫|Body,Head,Hand, tflite float16 XNNPACK boost (ARMv8.2)|
|434|YOLOX-Body-Head-Hand-Face|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/434_YOLOX-Body-Head-Hand-Face)|||||||||||⚫|Body,Head,Hand,Face|
|441|YOLOX-Body-Head-Hand-Face-Dist|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/441_YOLOX-Body-Head-Hand-Face-Dist)|||||||||||⚫|Body,Head,Hand,Face,Complex Distorted|
|442|YOLOX-Body-Head-Face-HandLR-Dist|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/442_YOLOX-Body-Head-Face-HandLR-Dist)|||||||||||⚫|Body,Head,Hands,Left-Hand,Right-Hand,Face,Complex Distorted|
|444|YOLOX-Foot-Dist|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/444_YOLOX-Foot-Dist)|||||||||||⚫|Foot,Complex Distorted|
|445|YOLOX-Body-Head-Face-HandLR-Foot-Dist|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/445_YOLOX-Body-Head-Face-HandLR-Foot-Dist)|||||||||||⚫|Body,Head,Face,Hands,Left-Hand,Right-Hand,Foot,Complex Distorted|
|446|YOLOX-Body-With-Wheelchair|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/446_YOLOX-Body-With-Wheelchair)|||||||||||⚫|Body with WheelChair|
|447|YOLOX-Wholebody-with-Wheelchair|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/447_YOLOX-Wholebody-with-Wheelchair)|||||||||||⚫|Wholebody with WheelChair|
|448|YOLOX-Eye-Nose-Mouth-Ear|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/448_YOLOX-Eye-Nose-Mouth-Ear)|||||||||||⚫||
|449|YOLOX-WholeBody12|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/449_YOLOX-WholeBody12)|||||||||||⚫|Body,BodyWithWheelchair,Head,Face,Eye,Nose,Mouth,Ear,Hand,Hand-Left,Hand-Right,Foot|
|450|YOLOv9-Wholebody-with-Wheelchair|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/450_YOLOv9-Wholebody-with-Wheelchair)|||||||||||⚫|Wholebody with WheelChair|
|454|YOLOv9-Wholebody13|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/454_YOLOv9-Wholebody13)|||||||||||⚫|Body,BodyWithWheelchair,BodyWithCrutches,Head,Face,Eye,Nose,Mouth,Ear,Hand,Hand-Left,Hand-Right,Foot|
|455|YOLOv9-Gender|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/455_YOLOv9-Gender)|||||||||||⚫|Body,Male,Female|
|456|YOLOv9-Wholebody15|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/456_YOLOv9-Wholebody15)|||||||||||⚫|Body,Male,Female,BodyWithWheelchair,BodyWithCrutches,Head,Face,Eye,Nose,Mouth,Ear,Hand,Hand-Left,Hand-Right,Foot|
|457|YOLOv9-Wholebody17|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/457_YOLOv9-Wholebody17)|||||||||||⚫|Body,Male,Adult,Child,Female,BodyWithWheelchair,BodyWithCrutches,Head,Face,Eye,Nose,Mouth,Ear,Hand,Hand-Left,Hand-Right,Foot|
|458|YOLOv9-Discrete-HeadPose-Yaw|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/458_YOLOv9-Discrete-HeadPose-Yaw)|||||||||||⚫|Head,Front,Right-Front,Right-Side,Right-Back,Back,Left-Back,Left-Side,Left-Front|
|459|YOLOv9-Wholebody25|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/459_YOLOv9-Wholebody25)|||||||||||⚫|Body,Adult,Child,Male,Female,Body_with_Wheelchair,Body_with_Crutches,Head,Front,Right_Front,Right_Side,Right_Back,Back,Left_Back,Left_Side,Left_Front,Face,Eye,Nose,Mouth,Ear,Hand,Hand_Left,Hand_Right,Foot|
|460|RT-DETRv2-Wholebody25|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/460_RT-DETRv2-Wholebody25)|||||||||||⚫|Body,Adult,Child,Male,Female,Body_with_Wheelchair,Body_with_Crutches,Head,Front,Right_Front,Right_Side,Right_Back,Back,Left_Back,Left_Side,Left_Front,Face,Eye,Nose,Mouth,Ear,Hand,Hand_Left,Hand_Right,Foot|
|461|YOLOv9-Phone|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/461_YOLOv9-Phone)|||||||||||⚫|Phone|
|463|YOLOv9-Shoulder-Elbow-Knee|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/463_YOLOv9-Shoulder-Elbow-Knee)|||||||||||⚫|Shoulder,Elbow,Knee|
|464|YOLOv9-Wholebody28|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/464_YOLOv9-Wholebody28)|||||||||||⚫|Body,Adult,Child,Male,Female,Body_with_Wheelchair,Body_with_Crutches,Head,Front,Right_Front,Right_Side,Right_Back,Back,Left_Back,Left_Side,Left_Front,Face,Eye,Nose,Mouth,Ear,Shoulder,Elbow,Hand,Hand_Left,Hand_Right,Knee,Foot|
|465|DEIM-Wholebody28|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/465_DEIM-Wholebody28)|||||||||||⚫|Body,Adult,Child,Male,Female,Body_with_Wheelchair,Body_with_Crutches,Head,Front,Right_Front,Right_Side,Right_Back,Back,Left_Back,Left_Side,Left_Front,Face,Eye,Nose,Mouth,Ear,Shoulder,Elbow,Hand,Hand_Left,Hand_Right,Knee,Foot|
|468|YOLOv9-Wholebody28-Refine|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/468_YOLOv9-Wholebody28-Refine)|||||||||||⚫|Body,Adult,Child,Male,Female,Body_with_Wheelchair,Body_with_Crutches,Head,Front,Right_Front,Right_Side,Right_Back,Back,Left_Back,Left_Side,Left_Front,Face,Eye,Nose,Mouth,Ear,Shoulder,Elbow,Hand,Hand_Left,Hand_Right,Knee,Foot|
|471|YOLO-Wholebody34|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/471_YOLO-Wholebody34)|||||||||||⚫|body,adult,child,male,female,body_with_wheelchair,body_with_crutches,head,front,right-front,right-side,right-back,back,left-back,left-side,left-front,face,eye,nose,mouth,ear,collarbone,shoulder,solar_plexus,elbow,wrist,hand,hand_left,hand_right,abdomen,hip_joint,knee,ankle,foot|
|472|DEIMv2-Wholebody34|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/472_DEIMv2-Wholebody34)|||||||||||⚫|body,adult,child,male,female,body_with_wheelchair,body_with_crutches,head,front,right-front,right-side,right-back,back,left-back,left-side,left-front,face,eye,nose,mouth,ear,collarbone,shoulder,solar_plexus,elbow,wrist,hand,hand_left,hand_right,abdomen,hip_joint,knee,ankle,foot|
|473|HISDF|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/473_HISDF)|||||||||||⚫|Object Detection x Depth Estimation x Pose Estimation x Instance Segmentation x Binary Segmentation|
|482|UHD|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/482_UHD)|||||||||||⚫|64x64, Object Detection, Human Detection|
|485|DEIMv2-Wholebody40|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/485_DEIMv2-Wholebody40)|||||||||||⚫|40 classes|
|489|489_Glasses-Detector|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/489_Glasses-Detector)|||||||||||⚫|glasses|
### 3. 3D Object Detection
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|036|Objectron|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/036_Objectron)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe/camera,chair,chair_1stage,cup,sneakers,sneakers_1stage,ssd_mobilenetv2_oidv4_fp16|
|063|3D BoundingBox estimation for autonomous driving|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/063_3d-bounding-box-estimation-for-autonomous-driving)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|**[YouTube](https://youtu.be/MKer-Sj87d4)**|
|107|SFA3D|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/107_SFA3D)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|263|EgoNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/263_EgoNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫||
|321|DID-M3D|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/321_DID-M3D)|||||||||||⚫||
|363|YOLO-6D-Pose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/363_YOLO-6D-Pose)|⚫||||||||⚫||⚫|Texas Instruments ver, PINTO Special ver|
### 4. 2D/3D Face Detection
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|025|Head_Pose_Estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/025_head_pose_estimation)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|030|BlazeFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/030_BlazeFace)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|032|FaceMesh|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/032_FaceMesh)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|040|DSFD_vgg|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/040_DSFD_vgg)|⚫|⚫||||⚫|||||||
|041|DBFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/041_DBFace)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MobileNetV2/V3, 320x320,480x640,640x960,800x1280|
|043|Face_Landmark|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/043_face_landmark)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|049|Iris_Landmark|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/049_iris_landmark)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|095|CenterFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/095_centerface)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|096|RetinaFace|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/096_RetinaFace)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|106|WHENet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/106_WHENet)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|Real-time Fine-Grained Estimation for Wide Range Head Pose|
|129|SCRFD|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/129_SCRFD)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|All types|
|134|head-pose-estimation-adas-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/134_head-pose-estimation-adas-0001)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|60x60|
|144|YuNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/144_YuNet)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|120x160|
|227|face-detection-adas-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/227_face-detection-adas-0001)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|384x672,PriorBox->ndarray(0.npy)|
|250|Face-Mask-Detection|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/250_Face-Mask-Detection)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|PriorBox->ndarray(0.npy)|
|282|face_landmark_with_attention|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/282_face_landmark_with_attention)|⚫|⚫|⚫||⚫|⚫|⚫||⚫||⚫|MediaPipe,192x192|
|289|face-detection-0100|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/289_face-detection-0100)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|256x256,PriorBoxClustered->ndarray(0.npy)|
|293|Lightweight-Head-Pose-Estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/293_Lightweight-Head-Pose-Estimation)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|HeadPose, 224x224|
|300|6DRepNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/300_6DRepNet)|⚫|⚫|⚫||⚫|⚫|⚫||⚫||⚫|6D HeadPose, 224x224|
|301|YOLOv4_Face|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/301_YOLOv4_Face)|||||||||||⚫|480x640|
|302|SLPT|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/302_SLPT)|||||||||||⚫|decoder=6/12,256x256|
|303|FAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/303_FAN)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|Face Alignment,128x128/256x256|
|304|SynergyNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/304_SynergyNet)|||||||||||⚫|6D HeadPose,224x224|
|305|DMHead|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/305_DMHead)|||||||||||⚫|6D HeadPose,Multi-Model-Fused,224x224,PINTO's custom models|
|311|HHP-Net|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/311_HHP-Net)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|6D HeadPose,No-LICENSE|
|319|ACR-Loss|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/319_ACR-Loss)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|Face Alignment|
|322|YOLOv7_Head|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/322_YOLOv7_Head)|||||||||||⚫|PINTO's custom models|
|383|DirectMHP|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/383_DirectMHP)|⚫|⚫|||||||||⚫||
|387|YuNetV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/387_YuNetV2)|⚫|⚫|⚫||⚫||||||⚫|640x640|
|390|BlendshapeV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/390_BlendshapeV2)|⚫|⚫|||||||||⚫|1x146x2,Nx146x2,MediaPipe|
|399|RetinaFace_MobileNetv2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/399_RetinaFace_MobileNetv2)|||||||||||⚫||
|410|FaceMeshV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/410_FaceMeshV2)|⚫|⚫|⚫||⚫||⚫||||⚫|MediaPipe|
|414|STAR|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/414_STAR)|⚫|⚫|⚫||⚫||⚫||||⚫||
|421|Gold-YOLO-Head|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/421_Gold-YOLO-Head)|||||||||||⚫|Head (not Face)|
|423|6DRepNet360|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/423_6DRepNet360)|||||||||||⚫|6D HeadPose, FullRange, 224x224|
|433|FaceBoxes.PyTorch|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/433_FaceBoxes.PyTorch)|||||||||||⚫|2D Face|
|435|MobileFaceNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/435_MobileFaceNet)|||||||||||⚫|Face Alignment,112x112|
|436|Peppa_Pig_Face_Landmark|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/436_Peppa_Pig_Face_Landmark)|||||||||||⚫|Face Alignment,128x128,256x256|
|437|PIPNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/437_PIPNet)|||||||||||⚫|Face Alignment,256x256|
|443|Opal23_HeadPose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/443_Opal23_HeadPose)|||||||||||⚫|6D HeadPose, FullRange, 128x128|
### 5. 2D/3D Hand Detection
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|027|Minimal-Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/027_minimal-hand)|⚫|⚫|⚫|||⚫||⚫|⚫|⚫|⚫||
|033|Hand_Detection_and_Tracking|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/033_Hand_Detection_and_Tracking)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|094|hand_recrop|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/094_hand_recrop)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|403|trt_pose_hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/)|||||||||||⚫|2D|
|420|Gold-YOLO-Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/420_Gold-YOLO-Hand)|||||||||||⚫|2D|
|438|PeCLR|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/438_PeCLR)|||||||||||⚫|2D+3D|
### 6. 2D/3D Human/Animal Pose Estimation
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|003|Posenet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/003_posenet)|⚫|⚫|⚫|⚫||⚫|⚫||||||
|007|Mobilenetv2_Pose_Estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/007_mobilenetv2-poseestimation)|⚫|⚫|⚫|⚫||⚫|⚫||⚫|⚫|||
|029|Human_Pose_Estimation_3D|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/029_human-pose-estimation-3d-0001)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|RGB,180x320,240x320,360x640,480x640,720x1280|
|053|BlazePose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/053_BlazePose)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe|
|065|ThreeDPoseUnityBarracuda|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/065_ThreeDPoseUnityBarracuda)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|**[YouTube](https://www.youtube.com/watch?v=L0ieoaOD6Po)**|
|080|tf_pose_estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/080_tf_pose_estimation)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|084|EfficientPose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/084_EfficientPose)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|SinglePose|
|088|Mobilenetv3_Pose_Estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/088_mobilenetv3-poseestimation)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|115|MoveNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/115_MoveNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|lightning,thunder|
|137|MoveNet_MultiPose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/137_MoveNet_MultiPose)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|lightning,192x192,192x256,256x256,256x320,320x320,480x640,720x1280,1280x1920|
|156|MobileHumanPose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/156_MobileHumanPose)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|3D|
|157|3DMPPE_POSENET|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/157_3DMPPE_POSENET)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|3D,192x192/256x256/320x320/416x416/480x640/512x512|
|265|PoseAug|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/265_PoseAug)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|2D->3D/GCN,MLP,STGCN,VideoPose/Nx16x2|
|268|Lite-HRNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/268_Lite-HRNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|COCO,MPII/Top-Down|
|269|Higher-HRNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/269_Higher-HRNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|192x320,256x320,320x480,384x640,480x640,512x512,576x960,736x1280/Bottom-Up|
|271|HRNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/271_HRNet)|||||||||||⚫|COCO,MPII/Top-Down|
|333|E2Pose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/333_E2Pose)|⚫|⚫|⚫||⚫||||||⚫|COCO/CrowdPose,End-to-End|
|350|P-STMO|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/350_P-STMO)|||||||||||⚫|2D->3D,in_the_wild|
|355|MHFormer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/355_MHFormer)|⚫|⚫|||||||||⚫|2D->3D|
|365|HTNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/365_HTNet)|⚫|⚫|||||||||⚫|2D->3D|
|392|STCFormer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/392_STCFormer)|⚫|⚫|||||||||⚫|2D->3D|
|393|RTMPose_WholeBody|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/393_RTMPose_WholeBody)|⚫|⚫|⚫||⚫||||||⚫|2D|
|394|RTMPose_Animal|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/394_RTMPose_Animal)|⚫|⚫|⚫||⚫||||||⚫|2D|
|402|trt_pose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/402_trt_pose)|||||||||||⚫|2D|
|412|pytorch_cpn|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/412_pytorch_cpn)|⚫|⚫|||||||||⚫|2D|
|427|RTMPose_Hand|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/427_RTMPose_Hand)|||||||||||⚫|2D|
|440|ViTPose|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/440_ViTPose)|||||||||||⚫|2D|
### 7. Depth Estimation from Monocular/Stereo Images
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|009|Multi-Scale Local Planar Guidance for Monocular Depth Estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/009_multi-scale_local_planar_guidance_for_monocular_depth_estimation)|⚫||||||||||||
|014|tf-monodepth2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/014_tf-monodepth2)|⚫|⚫|⚫|||⚫|⚫|⚫||⚫|⚫||
|028|struct2depth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/028_struct2depth)|⚫|⚫||||⚫|||||⚫||
|064|Dense Depth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/064_Dense_Depth)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|066|Footprints|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/066_footprints)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|067|MiDaS|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/067_MiDaS)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|081|MiDaS v2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/081_MiDaS_v2)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|135|CoEx|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/135_CoEx)|||||||⚫||||⚫|WIP, onnx/OpenVINO only|
|142|HITNET|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/142_HITNET)|⚫|⚫||||⚫|||||⚫|WIP [issue1](https://github.com/openvinotoolkit/openvino/issues/7379),[issue2](https://github.com/openvinotoolkit/openvino/issues/9517),flyingthings_finalpass_xl/eth3d/middlebury_d400,120x160/240x320/256x256/480x640/720x1280|
|146|FastDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/146_FastDepth)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|128x160,224x224,256x256,256x320,320x320,480x640,512x512,768x1280|
|147|PackNet-SfM|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/147_PackNet-SfM)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|ddad/kitti,Convert all ResNet18 backbones only|
|148|LapDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/148_LapDepth)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|kitti/nyu,192x320/256x320/368x640/480x640/720x1280|
|149|depth_estimation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/149_depth_estimation)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|nyu,180x320/240x320/360x640/480x640/720x1280|
|150|MobileStereoNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/150_MobileStereoNet)||||||||||||WIP. Conversion script only.|
|153|MegaDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/153_MegaDepth)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|192x256,384x512|
|158|HR-Depth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/158_HR-Depth)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|159|EPCDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/159_EPCDepth)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|160|msg_chn_wacv20|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/160_msg_chn_wacv20)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|192x320,240x320,256x256,352x480,368x480,368x640,480x640,720x1280,1280x1920|
|162|PyDNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/162_PyDNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|164|MADNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/164_MADNet)|⚫|⚫||||⚫|⚫|⚫|⚫|⚫|⚫|Real-time-self-adaptive-deep-stereo (perform only inference mode, no-backprop, kitti)|
|165|RealtimeStereo|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/165_RealtimeStereo)|⚫|⚫|||⚫|⚫|⚫||⚫|⚫|⚫|180x320,216x384,240x320,270x480,360x480,360x640,480x640,720x1280|
|166|Insta-DM|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/166_Insta-DM)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|192x320,256x320,256x832,384x640,480x640,736x1280|
|167|DPT|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/168_DPT)|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|⚫|dpt-hybrid,480x640,ViT,ONNX 96x128/256x320/384x480/480x640|
|173|MVDepthNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/173_MVDepthNet)|||||||⚫||||⚫|256x320|
|202|stereoDNN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/202_stereoDNN)|⚫|⚫|||⚫|⚫|⚫|⚫||⚫|⚫|NVSmall_321x1025,NVTiny_161x513,ResNet18_321x1025,ResNet18_2d_257x513|
|203|SRHNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/203_SRHNet)|||||||||||⚫|finetune2_kitti/sceneflow,maxdisp192,320x480/480x640|
|210|SC_Depth_pl|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/210_SC_Depth_pl)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|⚫|kitti/nyu,320x320,320x480,480x640,640x800|
|211|Lac-GwcNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/211_Lac-GwcNet)|||||||||||⚫|kitti,240x320,320x480,480x640,720x1280|
|219|StereoNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/219_StereoNet)|⚫|⚫|⚫||⚫|⚫|⚫|||⚫|⚫|Left/180x320,240x320,320x480,360x640,480x640|
|235|W-Stereo-Disp|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/235_W-Stereo-Disp)|||||||||||⚫|Kitti,Sceneflow/320x480,384x576,480x640|
|236|A-TVSNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/236_A-TVSNet)|⚫|⚫|||⚫|⚫|||||⚫|Stereo only/192x320,256x320,320x480,480x640|
|239|CasStereoNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/239_CasStereoNet)|||||||||||⚫|Stereo KITTI only/256x320,384x480,480x640,736x1280|
|245|GLPDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/245_GLPDepth)|||||||⚫||||⚫|Kitti,NYU/192x320,320x480,384x640,480x640,736x1280,non-commercial use only|
|258|TinyHITNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/258_TinyHITNet)|||||||⚫||||⚫|180x320,240x320,300x400,360x640,384x512,480x640,720x960,720x1280|
|266|ACVNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/266_ACVNet)|||||||⚫||||⚫|sceneflow,kitti/240x320,320x480,384x640,480x640,544x960,720x1280|
|280|GASDA|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/280_GASDA)|||||||||||⚫|No-LICENSE|
|284|CREStereo|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/284_CREStereo)|||||||||||⚫|ITER2,ITER5,ITER10,ITER20/240x320,320x480,360x640,480x640,480x640,720x1280|
|292|Graft-PSMNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/292_Graft-PSMNet)|||||||||||⚫|192x320,240x320,320x480,368x640,480x640,720x1280|
|294|FSRE-Depth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/294_FSRE-Depth)|||||||⚫||||⚫|192x320,256x320,320x480,368x640,480x640,736x1280|
|296|MGNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/296_MGNet)|⚫|⚫|⚫||⚫|⚫|⚫||⚫||⚫|240x320,360x480,360x640,360x1280,480x640,720x1280|
|312|NeWCRFs|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/312_NeWCRFs)|||||||||||⚫|384x384,384x576,384x768,384x960,576x768,768x1344|
|313|PyDNet2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/314_PyDNet2)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|Mono-Depth|
|327|EMDC|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/327_EMDC)|||||||||||⚫|RGB+SarseDepth|
|338|Fast-ACVNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/338_Fast-ACVNet)|||||||||||⚫|Stereo/grid_sample opset=16,no_grid_sample opset=11|
|358|CGI-Stereo|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/358_CGI-Stereo)|⚫|⚫|||||||||⚫|Stereo|
|362|ZoeDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/362_ZoeDepth)|||||||||||⚫|Mono-Depth|
|364|IGEV|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/364_IGEV)|||||||||||⚫|Stereo|
|371|Lite-Mono|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/371_Lite-Mono)|||||||||||⚫|Mono|
|384|TCMonoDepth|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/384_TCMonoDepth)|||||||||||⚫|Mono|
|397|MiDaSv3.1|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/397_MiDaSv3.1)|||||||||||⚫|Mono|
|415|High-frequency-Stereo-Matching-Network|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/415_High-frequency-Stereo-Matching-Network)|||||||||||⚫|Stereo|
|439|Depth-Anything|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/439_Depth-Anything)|||||||||||⚫|Mono|
### 8. Semantic Segmentation
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|001|deeplabv3|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/001_deeplabv3)|⚫|||||⚫|||||||
|015|Faster-Grad-CAM|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/015_Faster-Grad-CAM)|⚫||⚫|||⚫|||||||
|020|EdgeTPU-Deeplab|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/020_edgetpu-deeplab)|⚫|⚫|⚫|||⚫|||||||
|021|EdgeTPU-Deeplab-slim|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/021_edgetpu-deeplab-slim)|⚫|⚫|⚫|||⚫|||||||
|026|Mobile-Deeplabv3-plus|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/026_mobile-deeplabv3-plus)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|035|BodyPix|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/035_BodyPix)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe,MobileNet0.50/0.75/1.00,ResNet50|
|057|BiSeNetV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/057_BiSeNetV2)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|060|Hair Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/060_hair_segmentation)|⚫|||||⚫|||⚫|⚫|⚫|WIP,MediaPipe|
|061|U^2-Net|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/061_U-2-Net)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|069|ENet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/069_ENet)|⚫|⚫||||⚫|||⚫|⚫|⚫|Cityscapes,512x1024|
|075|ERFNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/075_ERFNet)|⚫|⚫|⚫|⚫||⚫|⚫||⚫|⚫|⚫|Cityscapes,256x512,384x786,512x1024|
|078|MODNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/078_MODNet)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|128x128,192x192,256x256,512x512|
|082|MediaPipe_Meet_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/082_MediaPipe_Meet_Segmentation)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|MediaPipe,128x128,144x256,96x160|
|104|DeeplabV3-plus|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/104_DeeplabV3-plus)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫||⚫|cityscapes,200x400,400x800,800x1600|
|109|Selfie_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/109_Selfie_Segmentation)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|256x256|
|136|road-segmentation-adas-0001|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/136_road-segmentation-adas-0001)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|138|BackgroundMattingV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/138_BackgroundMattingV2)|⚫|⚫||||⚫|⚫||||⚫|720x1280,2160x4096|
|181|models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_default_argmax|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/181_models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_default_argmax)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|182|models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_fused_argmax|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/182_models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_fused_argmax)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|196|human_segmentation_pphumanseg|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/196_human_segmentation_pphumanseg)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||
|201|CityscapesSOTA|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/201_CityscapesSOTA)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|180x320,240x320,360x640,480x640,720x1280|
|206|Matting|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/206_Matting)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|PaddleSeg/modnet_mobilenetv2,modnet_hrnet_w18,modnet_resnet50_vd/256x256,384x384,512x512,640x640|
|228|Fast-SCNN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/228_Fast-SCNN)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|192x384,384x384,384x576,576x576,576x768,768x1344|
|238|SUIM-Net|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/238_SUIM-Net)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|||⚫|RSB,VGG/240x320,256x320,320x480,360x640,384x480,384x640,480x640,720x1280|
|242|RobustVideoMatting|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/242_RobustVideoMatting)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫||⚫|Mbnv3,ResNet50/192x320,240x320,320x480,384x640,480x640,720x1280,1088x1920,2160x3840|
|246|SqueezeSegV3|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/246_SqueezeSegV3)|⚫|⚫|||⚫|⚫|⚫|⚫|⚫||⚫|21,53/180x320,240x320,320x480,360x640,480x640,720x1280|
|267|LIOT|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/267_LIOT)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|180x320,240x320,320x480,360x640,480x640,540x960,720x1280,1080x1920|
|287|Topformer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/287_Topformer)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫|Tiny,Small,Base/448x448,512x512|
|295|SparseInst|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/295_SparseInst)|||||||⚫||||⚫|r50_giam_aug/192x384,384x384,384x576,384x768,576x576,576x768,768x1344|
|299|DGNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/299_DGNet)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫||⚫||
|313|IS-Net|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/313_IS-Net)|||||||||||⚫|180x320,240x320,320x480,360x640,480x640,720x1280,1080x1920,1080x2048,2160x4096,N-batch,Dynamic-HeightxWidth|
|335|PIDNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/335_PIDNet)|||||||||||⚫|Cityscapes,CamVid/Dynamic-HeightxWidth|
|343|PP-MattingV2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/343_PP-MattingV2)|⚫|⚫|||||||||⚫|HumanSeg|
|347|RGBX_Semantic_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/347_RGBX_Semantic_Segmentation)|||||||||||⚫||
|369|Segment_Anything|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/369_Segment_Anything)|||||||||||⚫||
|380|Skin-Clothes-Hair-Segmentation-using-SMP|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/380_Skin-Clothes-Hair-Segmentation-using-SMP)|⚫|⚫|||||||||⚫||
|391|MagicTouch|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/391_MagicTouch)|⚫|⚫|||⚫||||||⚫|MediaPipe|
|405|Ear_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/405_Ear_Segmentation)|||||||||||⚫|Ear|
|417|PopNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/417_PopNet)|||||||||||⚫|Saliency|
|466|People_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/466_People_Segmentation)|||||||||||⚫|UNet|
|467|Human_Parsing|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/467_Human_Parsing)|||||||||||⚫||
|470|RHIS|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/470_RHIS)|||||||||||⚫|UNet+UNet|
|489|489_Glasses-Detector|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/489_Glasses-Detector)|||||||||||⚫|glasses|
### 9. Anomaly Detection
|No.|Model Name|Link|FP32|FP16|INT8|TPU|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|005|One_Class_Anomaly_Detection|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/005_one_class_anomaly_detection)|⚫||⚫|⚫|⚫|||||||
|099|Efficientnet_Anomaly_Detection_Segmentation|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/099_efficientnet_anomaly_detection_segmentation)|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
### 10. Artistic
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|017|Artistic-Style-Transfer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/017_Artistic-Style-Transfer)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫||⚫||
|019|White-box-Cartoonization|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/019_White-box-Cartoonization)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|037|First_Neural_Style_Transfer|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/037_First_Neural_Style_Transfer)|⚫|||||⚫|||||⚫||
|044|Selfie2Anime|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/044_selfie2anime)|⚫|⚫|⚫|||⚫|⚫|⚫|||⚫||
|050|AnimeGANv2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/050_AnimeGANv2)|⚫|⚫|⚫|||⚫|⚫|⚫||⚫|⚫||
|062|Facial Cartoonization|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/062_facial_cartoonization)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫||
|068|Colorful_Image_Colorization|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/068_Colorful_Image_Colorization)|⚫|⚫||||⚫|⚫|⚫|⚫||⚫|experimental|
|101|arbitrary_image_stylization|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/101_arbitrary_image_stylization)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|magenta|
|113|Anime2Sketch|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/113_Anime2Sketch)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|161|EigenGAN-Tensorflow|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/161_EigenGAN-Tensorflow)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|Anime,CelebA|
|193|CoCosNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/193_CoCosNet)|⚫|⚫|||⚫|⚫|⚫|⚫|⚫||⚫|RGB,256x256|
### 11. Super Resolution
|No.|Model Name|Link|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX|Remarks|
|:-|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-|
|012|Fast_Accurate_and_Lightweight_Super-Resolution|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/012_Fast_Accurate_and_Lightweight_Super-Resolution)|⚫||⚫|||⚫|||||||
|022|Learning_to_See_Moving_Objects_in_the_Dark|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/022_Learning_to_See_Moving_Objects_in_the_Dark)|⚫|⚫||||⚫|||||⚫||
|071|Noise2Noise|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/071_Noise2Noise)|⚫|⚫|⚫|⚫||⚫|||||⚫|srresnet/clear only|
|076|Deep_White_Balance|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/076_Deep_White_Balance)|⚫|⚫||||⚫|⚫|⚫|⚫|⚫|⚫||
|077|ESRGAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/077_ESRGAN)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|50x50->x4, 100x100->x4|
|079|MIRNet|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/079_MIRNet)|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|⚫|Low-light Image Enhancement/40x40,80x80,120x120,120x160,120x320,120x480,120x640,120x1280,180x480,180x640,180x1280,180x320,240x320,240x480,360x480,360x640,480x640,720x1280|
|086|Defocus Deblurring Using Dual-Pixel|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/086_defocus-deblurring-dual-pixel)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫||
|090|Ghost-free_Shadow_Removal|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/090_Ghost-free_Shadow_Removal)|⚫|⚫|⚫|||⚫|⚫|⚫|||⚫|256x256|
|111|SRN-Deblur|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/111_SRN-Deblur)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|240x320,480x640,720x1280,1024x1280|
|112|DeblurGANv2|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/112_DeblurGANv2)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|inception/mobilenetv2:256x256,320x320,480x640,736x1280,1024x1280|
|114|Two-branch-dehazing|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/114_Two-branch-dehazing)|⚫|⚫|⚫|||⚫|⚫||⚫|⚫|⚫|240x320,480x640,720x1280|
|133|Real-ESRGAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/133_Real-ESRGAN)|⚫|⚫||||⚫|⚫|⚫|⚫|⚫|⚫|16x16,32x32,64x64,128x128,240x320,256x256,320x320,480x640|
|152|DeepLPF|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/152_DeepLPF)|⚫|⚫||||⚫|⚫||||⚫||
|170|Learning-to-See-in-the-Dark|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/170_Learning-to-See-in-the-Dark)|⚫|⚫|⚫|||⚫|⚫|⚫|⚫|⚫|⚫|sony/fuji, 240x320,360x480,360x640,480x640|
|171|Fast-SRGAN|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/171_Fast-SRGAN)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|||⚫|120x160,128x128,240x320,256x256,480x640,512x512|
|172|Real-Time-Super-Resolution|[■■■](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/172_Real-Time-Super-Resolution)|⚫|⚫|⚫|⚫||⚫|⚫|⚫|⚫|⚫|⚫|64x64,96x96,128x128,256x256,240x320,480x640|

<!-- opensource-radar:truncated -->
