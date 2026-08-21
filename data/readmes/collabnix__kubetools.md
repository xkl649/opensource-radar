# Kubetools - A Curated List of Kubernetes Tools

![stars](https://img.shields.io/github/stars/collabnix/kubetools)
![forks](https://img.shields.io/github/forks/collabnix/kubetools)
![issues](https://img.shields.io/github/issues/collabnix/kubetools)
![GitHub contributors](https://img.shields.io/github/contributors/collabnix/kubetools)
![Twitter](https://img.shields.io/twitter/follow/kubetools?style=social)


![Image](kubetools_periodic_table.jpeg) 



There are more than 500+ [Kubernetes Certified Service Providers](https://www.cncf.io/certification/kcsp/) and [tons of Kubernetes Certified distributions](https://kubernetes.io/partners/). Choosing a right distribution can be a daunting task. [Kubetools](https://kubetools.io) is built with a purpose to build a curated list of popular Kubernetes tools. It is actively maintained by [Collabnix Slack Community](https://collabnix.com).  

Follow the Kubetools [Twitter](https://twitter.com/kubetools) account for updates on new list additions.

Have Questions? Join us over [Slack](https://launchpass.com/collabnix) and get chance to be a part of 10,000+ DevOps enthusiasts.<br>

## Top Featured Kubernetes Tools( June 2026)				
				

- [KubeArchInspect](https://github.com/ArmDeveloperEcosystem/kubearchinspect)
- [Kuberay](https://collabnix.com/deploying-ray-on-kubernetes/)
- [K8s-insider](https://collabnix.com/streamlining-kubernetes-networking-with-k8s-insider/)
- [Agentkube](https://github.com/agentkube/agentkube)
- [Stern](https://collabnix.com/tail-kubernetes-with-stern/)
- [Node Problem Detector](https://kubetools.io/monitoring-node-health-with-node-problem-detector-in-kubernetes/)	
- [Karpenter](https://kubetools.io/supercharge-your-kubernetes-cluster-with-karpenter/)
- [Kubestalk](https://kubetools.io/kubestalk-uncovering-hidden-security-risks-in-your-kubernetes-clusters/)
- [K8sGPT](https://kubetools.io/k8sgpt-simplifying-kubernetes-diagnostics-with-natural-language-processing/)
- [Kubeshark](https://kubetools.io/mastering-kubernetes-debugging-and-troubleshooting-with-kubeshark-real-time-visibility-query-language-service-map-and-integrations/) 
- [K9s](https://kubetools.io/why-k9s-should-be-your-go-to-tool-for-kubernetes-management/)
- [KubeGraf](https://github.com/kubegraf/kubegraf)

## Table of Contents

- [Kubetools - A Curated List of Kubernetes Tools](#kubetools---a-curated-list-of-kubernetes-tools)
  - [Table of Contents](#table-of-contents)
  - [Pods](#pods)
  - [Cluster Management](#cluster-management)
  - [Cluster with Core CLI tools](#cluster-with-core-cli-tools)
  - [Alert and Monitoring](#alert-and-monitoring)
  - [Logging and Tracing](#logging-and-tracing)
  - [Troubleshooting / Debugging](#troubleshooting--debugging)
  - [Development Tools/Kit](#developement-toolskit)
  - [Alternative Tools for Development](#alternative-tools-for-development)
  - [Internal Developer Platform](#internal-developer-platform)
  - [CI/CD integration Tools](#cicd-integration-tools)
  - [Security Tools](#security-tools)
  - [Network Policies](#network-policies)
  - [Testing Tools](#testing-tools)
  - [Service Mesh](#service-mesh)
  - [Observability](#observability)
  - [Machine Learning/Deep Learning](#machine-learningdeep-learning)
  - [Compute Edge Tools](#compute-edge-tools)
  - [Kubernetes Tools for Specific Cloud](#kubernetes-tools-for-specific-cloud)
  - [Storage Providers](#storage-providers)
  - [Backup Tools](#backup-tools)
  - [Multiple Tools Repo](#multiple-tools-repo)
  - [Cost Optimisation](#cost-optimisation)
  - [Function as a Service FaaS](#function-as-a-service-faas)
  - [Artificial Intelligence](#artificial-intelligence)
  - [Caching](#caching)
  - [Clients](#clients)
  - [Cleanup](#cleanup)
  - [Non-Categorize](#non-categorize)
  - [Maintainer](#maintainer)


## Pods

|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------ |
|	1	|	kubetail 	|	[	Bash script to tail Kubernetes logs from multiple pods at the same time](https://github.com/johanhaleby/kubetail)	|	![Github Stars](https://img.shields.io/github/stars/johanhaleby/kubetail)	|
|	2	|	kube-s3 	|	[	Kubernetes pods used shared S3 storage](https://github.com/freegroup/kube-s3)	|	![Github Stars](https://img.shields.io/github/stars/freegroup/kube-s3)	|
|	3	|	kubectl-ports-rs	|	[	A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources](https://github.com/widnyana/kubectl-ports-rs)	|	![Github Stars](https://img.shields.io/github/stars/widnyana/kubectl-ports-rs)	|



## Cluster Management						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------ |
|	1	|	Monokle 	|	[	Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations](https://github.com/kubeshop/monokle)	|	![Github Stars](https://img.shields.io/github/stars/kubeshop/monokle)	|
|	2	|	kops  	|	[	Production Grade K8s Installation, Upgrades, and Management](https://github.com/kubernetes/kops)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes/kops)	|
|	3	|	silver-surfer  	|	[	Check ApiVersion compatibility and provide Migration path for Kubernetes objects when upgrading Kubernetes to latest versions](https://github.com/devtron-labs/silver-surfer)	|	![Github Stars](https://img.shields.io/github/stars/devtron-labs/silver-surfer)	|
|	4	|	Kube-ops-view  	|	[	Kubernetes Operational View - read-only system dashboard for multiple K8s clusters](https://github.com/hjacobs/kube-ops-view)	|	![Github Stars](https://img.shields.io/github/stars/hjacobs/kube-ops-view)	|
|	5	|	kubeprompt  	|	[	Kubernetes prompt info](https://github.com/jlesquembre/kubeprompt)	|	![Github Stars](https://img.shields.io/github/stars/jlesquembre/kubeprompt)	|
|	6	|	Metalk8s  	|	[	An opinionated Kubernetes distribution with a focus on long-term on-prem deployments](https://github.com/scality/metalk8s)	|	![Github Stars](https://img.shields.io/github/stars/scality/metalk8s)	|
|	7	|	kind  	|	[	Kubernetes IN Docker - local clusters for testing Kubernetes](https://github.com/kubernetes-sigs/kind)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/kind)	|
|	8	|	Clusterman  	|	[	Cluster Autoscaler for Kubernetes and Mesos](https://github.com/Yelp/clusterman)	|	![Github Stars](https://img.shields.io/github/stars/Yelp/clusterman)	|
|	9	|	Cert-manager  	|	[	Automatically provision and manage TLS certificates](https://github.com/jetstack/cert-manager)	|	![Github Stars](https://img.shields.io/github/stars/jetstack/cert-manager)	|
|	10	|	Goldilocks  	|	[	Get your resource requests "Just Right"](https://github.com/FairwindsOps/goldilocks)	|	![Github Stars](https://img.shields.io/github/stars/FairwindsOps/goldilocks)	|
|	11	|	katafygio  	|	[	Dump, or continuously backup Kubernetes objects as yaml files in git](https://github.com/bpineau/katafygio)	|	![Github Stars](https://img.shields.io/github/stars/bpineau/katafygio)	|
|	12	|	Rancher  	|	[	Complete container management platform](https://github.com/rancher/rancher)	|	![Github Stars](https://img.shields.io/github/stars/rancher/rancher)	|
|	13	|	Sealed Secrets  	|	[	A Kubernetes controller and tool for one-way encrypted Secrets](https://github.com/bitnami-labs/sealed-secrets)	|	![Github Stars](https://img.shields.io/github/stars/bitnami-labs/sealed-secrets)	|
|	14	|	OpenKruise/Kruise  	|	[	Automate application workloads management on Kubernetes https://openkruise.io](https://github.com/openkruise/kruise)	|	![Github Stars](https://img.shields.io/github/stars/openkruise/kruise)	|
|	15	|	kubectl snapshot  	|	[	Take Cluster Snapshots](https://github.com/fbrubbo/kubectl-snapshot)	|	![Github Stars](https://img.shields.io/github/stars/fbrubbo/kubectl-snapshot)	|
|	16	|	kapp  	|	[	simple deployment tool focused on the concept of "Kubernetes application" — a set of resources with the same label https://get-kapp.io](https://github.com/k14s/kapp)	|	![Github Stars](https://img.shields.io/github/stars/k14s/kapp)	|
|	17	|	KEDA  	|	[	Event-driven autoscaler for Kubernetes](https://keda.sh/)	|	![Github Stars](https://img.shields.io/github/stars/kedacore/keda)	|
|	18	|	Octant  	|	[	To better understand the complexity of Kubernetes clusters](https://github.com/vmware-tanzu/octant)	|	![Github Stars](https://img.shields.io/github/stars/vmware-tanzu/octant)	|
|	19	|	Portainer  	|	[	Portainer inside a Kubernetes environment](https://github.com/portainer/k8s)	|	![Github Stars](https://img.shields.io/github/stars/portainer/k8s)	|
|	20	|	Gardener  	|	[	Deliver fully-managed clusters at scale everywhere with your own Kubernetes-as-a-Service](https://gardener.cloud/)	|	-	|
|	21	|	xlskubectl  	|	[	xlskubectl — a spreadsheet to control your Kubernetes cluster](https://github.com/learnk8s/xlskubectl)	|	![Github Stars](https://img.shields.io/github/stars/learnk8s/xlskubectl)	|
|	22	|	Kubefirst  	|	[	Fully-automated OSS delivery & infrastructure management gitops platforms](https://github.com/kubefirst/kubefirst)	|	![Github Stars](https://img.shields.io/github/stars/kubefirst/kubefirst)	|
|	23	|	Kamaji  	|	[	Build and operate Kubernetes at scale with a fraction of operational burden](https://github.com/clastix/kamaji)	|	![Github Stars](https://img.shields.io/github/stars/clastix/kamaji)	|
|	24	|	kustomizer  	|	[	An experimental package manager for distributing Kubernetes configuration as OCI artifacts](https://github.com/stefanprodan/kustomizer)	|	![Github Stars](https://img.shields.io/github/stars/stefanprodan/kustomizer)	|
|	25	|	Kudo  	|	[	declarative approach to building production-grade Kubernetes Operators ](https://github.com/kudobuilder/kudo)	|	![Github Stars](https://img.shields.io/github/stars/kudobuilder/kudo)	|
|	26	|	node-problem-detector  	|	[  This is a place for various problem detectors running on the Kubernetes nodes ](https://github.com/kubernetes/node-problem-detector)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes/node-problem-detector)	|
| 27 | k0s | [k0s is an all-inclusive Kubernetes distribution, which is configured with all of the features needed to build a Kubernetes cluster and packaged as a single binary for ease of use](https://github.com/k0sproject/k0s) | ![GitHub Stars](https://img.shields.io/github/stars/k0sproject/k0s) |
| 28 | k0smotron | [Deploy and run Kubernetes control planes powered by k0s on any existing cluster](https://github.com/k0sproject/k0smotron) | ![GitHub Stars](https://img.shields.io/github/stars/k0sproject/k0smotron) |
|	29	|	ClusterPedia  	|	[	The Encyclopedia of Kubernetes clusters ](https://github.com/clusterpedia-io/clusterpedia)	|	![Github Stars](https://img.shields.io/github/stars/clusterpedia-io/clusterpedia)	|
|	30	|	kubean  	|	[	🌱 Kubernetes lifecycle management operator based on kubespray. ](https://github.com/kubean-io/kubean)	|	![Github Stars](https://img.shields.io/github/stars/kubean-io/kubean)	|
|	31	|	punq  	|	[	Self-hosted Kubernetes workload manager with team collaboration ](https://github.com/mogenius/punq)	|	![Github Stars](https://img.shields.io/github/stars/mogenius/punq)	|
|   32  |   Claudie     |   [   Deploy and operate Kubernetes clusters with each nodepool in a different provider or on-prem](https://github.com/berops/claudie)  |  ![Github Stars](https://img.shields.io/github/stars/berops/claudie)  |
|   33  |   Kubemarine     |   [   Management tool for Kubernetes cluster deployment and maintenance](https://github.com/Netcracker/KubeMarine)  |  ![Github Stars](https://img.shields.io/github/stars/Netcracker/KubeMarine)  |
| 34 |	k8s-duplicator | [Kubernetes controller that copies secrets into other namespaces](https://github.com/Nick-Triller/k8s-duplicator) | ![Github Stars](https://img.shields.io/github/stars/Nick-Triller/k8s-duplicator) |
| 35 |	KubeStellar | [a flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud ](https://github.com/kubestellar/kubestellar) | ![Github Stars](https://img.shields.io/github/stars/kubestellar/kubestellar) |
| 36 |	Trolley | [ Trolley is a multi cloud Kubernetes management system ](https://github.com/Trolley-MGMT/trolleymgmt) | ![Github Stars](https://img.shields.io/github/stars/Trolley-MGMT/trolleymgmt) |
| 37 |	Kunobi | [ Rust Kubernetes management from your desktop, with built-in MCP server ](https://kunobi.ninja) | - |
| 37 |	Cyclops | [ a powerful user interface for managing and interacting with Kubernetes clusters ](https://github.com/cyclops-ui/cyclops) | ![Github Stars](https://img.shields.io/github/stars/cyclops-ui/cyclops) |
| 38 |	Liqo | [ an open-source project that enables dynamic and seamless Kubernetes multi-cluster topologies, supporting heterogeneous on-premise, cloud and edge infrastructures ](https://github.com/liqotech/liqo) | ![Github Stars](https://img.shields.io/github/stars/liqotech/liqo) |
| 39 |	Guard | [ 🔑 Kubernetes Authentication & Authorization WebHook Server ](https://github.com/kubeguard/guard) | ![Github Stars](https://img.shields.io/github/stars/kubeguard/guard) |	
| 40 |	Meshery | [ Meshery is a Multi-cluster management tool for Kubernetes and Clouds ](https://github.com/meshery/meshery) | ![Github Stars](https://img.shields.io/github/stars/meshery/meshery) |							
| 41 |	cluster-template | [ A template for deploying a Kubernetes cluster with k3s or Talos ](https://github.com/onedr0p/cluster-template) | ![Github Stars](https://img.shields.io/github/stars/onedr0p/cluster-template) |
| 42 |	vCluster | [ Create fully functional virtual Kubernetes clusters - Each vcluster runs inside a namespace of the underlying k8s cluster. It's cheaper than creating separate full-blown clusters and it offers better multi-tenancy and isolation than regular namespaces. ](https://github.com/loft-sh/vcluster) | ![Github Stars](https://img.shields.io/github/stars/loft-sh/vcluster) |
| 43 |	KindScaler | [ Node Management for KinD Clusters. Modify the KinD cluster configuration by adding or removing nodes, whether they are control-planes or workers, without regenerating it from scratch. ](https://github.com/lobuhi/kindscaler) | ![Github Stars](https://img.shields.io/github/stars/lobuhi/kindscaler) |
| 44 |	buoy | [  A declarative Kubernetes dashboard in your terminal  ](https://github.com/everettraven/buoy) | ![Github Stars](https://img.shields.io/github/stars/everettraven/buoy) |
| 45 |	Glasskube | [  Glasskube is a Kubernetes package manager that lets you install apps via an easy-to-use web interface or CLI  ](https://github.com/glasskube/glasskube) | ![Github Stars](https://img.shields.io/github/stars/glasskube/glasskube) |
| 46 |	Karmada | [  Open, Multi-Cloud, Multi-Cluster Kubernetes Orchestration.  ](https://github.com/karmada-io/karmada) | ![Github Stars](https://img.shields.io/github/stars/karmada-io/karmada) |
| 47 |	Kubeadmiral | [  Multi-Cluster Kubernetes Orchestration. ](https://github.com/kubewharf/kubeadmiral) | ![Github Stars](https://img.shields.io/github/stars/kubewharf/kubeadmiral) |
| 48 |	RBAC Wizard | [  Helps to visualize and analyze the RBAC configurations of the Kubernetes cluster. ](https://github.com/pehlicd/rbac-wizard) | ![Github Stars](https://img.shields.io/github/stars/pehlicd/rbac-wizard) |
| 49 |	Kondense | [  Kondense is a tool designed for Kubernetes environments, specifically focused on optimizing memory and CPU usage in containers. ](https://github.com/unagex/kondense) | ![Github Stars](https://img.shields.io/github/stars/unagex/kondense) |
| 50 |	Kubeseal-Webgui | [  Kubeseal-Webgui is a simple web ui for Bitnami Sealed Secrets. ](https://github.com/Jaydee94/kubeseal-webgui) | ![Github Stars](https://img.shields.io/github/stars/Jaydee94/kubeseal-webgui) |
| 51 |	Klutch | [ Klutch extends Crossplane to manage resources across multiple Kubernetes clusters ](https://github.com/anynines/klutchio) | ![Github Stars](https://img.shields.io/github/stars/anynines/klutchio) |
| 52 |	Kanvas | [ A comprehensive suite of collaborative tools for designing, deploying and managing cloud-native infrastructure. ](https://kanvas.new) | ![Github Stars](https://img.shields.io/github/stars/meshery/meshery) |
| 53 |	k9sight | [ A fast, keyboard-driven TUI for debugging Kubernetes workloads ](https://github.com/doganarif/k9sight) | ![Github Stars](https://img.shields.io/github/stars/doganarif/k9sight) |
| 54 |	ReleaseRun K8s Deprecation Checker | [ Scan Kubernetes manifests for deprecated and removed APIs across versions 1.16-1.35, with auto-fix YAML output and upgrade timeline ](https://releaserun.com/tools/k8s-deprecation-checker/) | ![Github Stars](https://img.shields.io/github/stars/Releaserun/releaserun-cli) |
| 55 |	okd-metal-installer | [ Ansible-driven bare-metal OKD provisioning via static ISOs and Bootstrap-in-Place ](https://github.com/tosin2013/okd-metal-installer) | ![Github Stars](https://img.shields.io/github/stars/tosin2013/okd-metal-installer) |
| 56 |	KubeStellar Console | [ CNCF Sandbox multi-cluster Kubernetes dashboard with AI-powered operations, real-time observability, and GitOps-native deploy workflows across edge and cloud clusters ](https://github.com/kubestellar/console) | ![Github Stars](https://img.shields.io/github/stars/kubestellar/console) |
| 57 |	Hanoi-CLI | [ Interactive rebalance advisor for Kubernetes that analyzes pod distribution and simulates node failures ](https://github.com/k-krew/hanoi-cli) | ![Github Stars](https://img.shields.io/github/stars/k-krew/hanoi-cli) |
| 58 |	Radar | [ Modern open-source Kubernetes visibility - single binary with ownership-aware topology, image filesystem viewer, Helm and GitOps management (FluxCD/ArgoCD), and a built-in MCP server for AI agents ](https://github.com/skyhook-io/radar) | ![Github Stars](https://img.shields.io/github/stars/skyhook-io/radar) |
| 59 |	Krust | [ Native macOS Kubernetes dashboard for resources, logs, YAML, Helm, CRDs, topology, port forwarding, metrics, security checks, and AI diagnostics ](https://krust.io/) | - |
| 60 |	Kubexer Kubernetes IDE | [ Cross-platform desktop client for managing multiple Kubernetes clusters — live resource views, topology graphs, node/workload management, port-forwarding, CRDs, Helm and GitOps (ArgoCD/Flux) ](https://kubexer.com) | - |


## Cluster with Core CLI tools						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Bootkube  	|	[	bootkube - Launch a self-hosted Kubernetes cluster](https://github.com/kubernetes-sigs/bootkube)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/bootkube)	|
|	2	|	kubectx + kubens  	|	[	Switch faster between clusters and namespaces in kubectl](https://github.com/ahmetb/kubectx)	|	![Github Stars](https://img.shields.io/github/stars/ahmetb/kubectx)	|
|	3	|	kube-shell  	|	[	Kubernetes shell: An integrated shell for working with the Kubernetes](https://github.com/cloudnativelabs/kube-shell)	|	![Github Stars](https://img.shields.io/github/stars/cloudnativelabs/kube-shell)	|
|	4	|	kuttle: kubectl wrapper for sshuttle without SSH  	|	[	Kubernetes wrapper for sshuttle](https://github.com/kayrus/kuttle)	|	![Github Stars](https://img.shields.io/github/stars/kayrus/kuttle)	|
|	5	|	kubectl sudo  	|	[	Run kubernetes commands with the security privileges of another user](https://github.com/postfinance/kubectl-sudo)	|	![Github Stars](https://img.shields.io/github/stars/postfinance/kubectl-sudo)	|
|	6	|	K9s  	|	[	Kubernetes CLI To Manage Your Clusters In Style!](https://github.com/derailed/k9s)	|	![Github Stars](https://img.shields.io/github/stars/derailed/k9s)	|
|	7	|	Ktunnel  	|	[	A cli that exposes your local resources to kubernetes](https://github.com/omrikiei/ktunnel)	|	![Github Stars](https://img.shields.io/github/stars/omrikiei/ktunnel)	|
|	8	|	KubeOperator  	|	[	Run kubectl command in Web Browser. https://kubeoperator.io/](https://github.com/KubeOperator/webkubectl)	|	![Github Stars](https://img.shields.io/github/stars/KubeOperator/webkubectl)	|
|	9	|	Vimkubectl  	|	[	Manage any Kubernetes resource from Vim https://www.vim.org/scripts/script.ph](https://github.com/rottencandy/vimkubectl)	|	![Github Stars](https://img.shields.io/github/stars/rottencandy/vimkubectl)	|
|	10	|	KubeHelper  	|	[	KubeHelper - simplifies many daily Kubernetes cluster tasks through a web interface.](https://github.com/KubeHelper/kubehelper)	|	![Github Stars](https://img.shields.io/github/stars/KubeHelper/kubehelper)	|
|	11	|	kubecolor  	|	[	colorizes kubectl output](https://github.com/hidetatz/kubecolor)	|	![Github Stars](https://img.shields.io/github/stars/hidetatz/kubecolor)	|
|	12	|	Krew  	|	[	Krew is the package manager for kubectl plugins](https://github.com/kubernetes-sigs/krew)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/krew)	|
|	13	|	Kueue  	|	[	Kueue is a set of APIs and controller for job queueing](https://github.com/kubernetes-sigs/kueue)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/kueue)	|
|	14	|	fubectl  	|	[	Reduces repetitive interactions with kubectl](https://github.com/kubermatic/fubectl)	|	![Github Stars](https://img.shields.io/github/stars/kubermatic/fubectl)	|
|	15	|	kube-ps1  	|	[	Kubernetes prompt for bash and zsh](https://github.com/jonmosco/kube-ps1)	|	![Github Stars](https://img.shields.io/github/stars/jonmosco/kube-ps1)	|
|	16	|	Conftest  	|	[ Write tests against structured configuration data using the Open Policy Agent Rego query language](https://github.com/open-policy-agent/conftest)	|	![Github Stars](https://img.shields.io/github/stars/open-policy-agent/conftest)	|
|	17	|	Kube-capacity  	|	[	A  CLI that provides an overview of the resource requests, limits, and utilization in a k8s cluster](https://github.com/robscott/kube-capacity)	|	![Github Stars](https://img.shields.io/github/stars/robscott/kube-capacity)	|
|	18	|	Karpenter  	|	[	Kubernetes Node Autoscaler built for flexibility, performance, and simplicity](https://github.com/aws/karpenter)	|	![Github Stars](https://img.shields.io/github/stars/aws/karpenter)	|
|	19	|	Autoscaler  	|	[	autoscaler Autoscaling components for Kubernetes]( https://github.com/kubernetes/autoscaler)	|	![Github Stars](https://img.shields.io/github/stars/aws/karpenter)	|
|	20	|	Kured  	|	[	 Kubernetes Reboot Daemon](https://github.com/kubereboot/kured)	|	![Github Stars](https://img.shields.io/github/stars/kubereboot/kured)	|
|	21	|	Kube-prompt  	|	[	 An interactive kubernetes client featuring auto-complete](https://github.com/c-bata/kube-prompt)	|	![Github Stars](https://img.shields.io/github/stars/c-bata/kube-prompt)	|
|	22	|	Click  	|	[	  Command Line Interactive Controller for Kubernetes](https://github.com/databricks/click)	|	![Github Stars](https://img.shields.io/github/stars/databricks/click)	|
|	23	|	Kubie  	|	[	 A more powerful alternative to kubectx and kubens](https://github.com/sbstp/kubie)	|	![Github Stars](https://img.shields.io/github/stars/sbstp/kubie)	|
|	24	|	Pluto  	|	[	 A cli tool to help discover deprecated apiVersions in Kubernetes](https://github.com/FairwindsOps/pluto)	|	![Github Stars](https://img.shields.io/github/stars/FairwindsOps/pluto)	|
|	25	|	ksync  	|	[	 Sync files between your local system and a kubernetes cluster](https://github.com/ksync/ksync)	|	![Github Stars](https://img.shields.io/github/stars/ksync/ksync)	|
|	26	|	fleet  	|	[	 Manage large fleets of Kubernetes clusters](https://github.com/rancher/fleet)	|	![Github Stars](https://img.shields.io/github/stars/rancher/fleet)	|
|	27	|	stash  	|	[	 Backup your Kubernetes Stateful Applications](https://github.com/stashed/stash)	|	![Github Stars](https://img.shields.io/github/stars/stashed/stash)	|
|	28	|	Finch  	|	[	 The Finch CLI an open source client for container development](https://github.com/runfinch/finch)	|	![Github Stars](https://img.shields.io/github/stars/runfinch/finch)	|
|	29	|	KubeView  	|	[Kubernetes cluster visualiser and graphical explorer](https://github.com/benc-uk/kubeview)	|	![Github Stars](https://img.shields.io/github/stars/benc-uk/kubeview)	|
|	30	|	Descheduler  	|	[ Descheduler for Kubernetes ](https://github.com/kubernetes-sigs/descheduler)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/descheduler)	|
|	31	|	cloudtty  	|	[ A Friendly Kubernetes CloudShell (Web Terminal) ! ](https://github.com/cloudtty/cloudtty)	|	![Github Stars](https://img.shields.io/github/stars/cloudtty/cloudtty)	|
|	32	|	kor  	|	[ A Tool to discover unused Kubernetes Resources ](https://github.com/yonahd/kor)	|	![Github Stars](https://img.shields.io/github/stars/yonahd/kor)	|
|	33	|	Kubernetes Image Puller  	|	[ Caching images on a cluster by creating a DaemonSet downloading and running the container images on each node ](https://github.com/che-incubator/kubernetes-image-puller)	|	![Github Stars](https://img.shields.io/github/stars/che-incubator/kubernetes-image-puller)	|
|	34	|	image-builder  	|	[ A tool for building Kubernetes virtual machine images across multiple infrastructure providers. ](https://github.com/kubernetes-sigs/image-builder)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/image-builder)	|
|	35	|	Kubed   	|	[ Kubed with a intuitive interactive interface within Emacs help us work with our Kubernetes clusters and deployments with the full power of kubectl](https://github.com/eshelyaron/kubed)	|	![Github Stars](https://img.shields.io/github/stars/eshelyaron/kubed)	|
|	36	|	Duplik8s   	|	[ Duplik8s is a kubectl plugin to duplicate resources in a Kubernetes cluster. ](https://github.com/Telemaco019/duplik8s)	|	![Github Stars](https://img.shields.io/github/stars/Telemaco019/duplik8s)	|
|	37	|	kl  	|	[	Interactive, multi container and cluster terminal app for logs ](https://github.com/robinovitch61/kl)	|	![Github Stars](https://img.shields.io/github/stars/robinovitch61/kl)	|
|	38	|	kubectl foreach  	|	[  Run kubectl commands in all/some contexts in parallel (similar to GNU xargs+parallel) ](https://github.com/ahmetb/kubectl-foreach)	|	![Github Stars](https://img.shields.io/github/stars/ahmetb/kubectl-foreach)	|
|	39	|	kubecui  	|	[ kubeui makes kubectl more user friendly ](https://github.com/pymag09/kubecui)	|	![Github Stars](https://img.shields.io/github/stars/pymag09/kubecui)	|
|	40	|	q-as-kubectl  	|	[ q as kubectl: yet another way to control k8s commands ](https://github.com/ildar-shaimordanov/q-as-kubectl)	|	![Github Stars](https://img.shields.io/github/stars/ildar-shaimordanov/q-as-kubectl)	|
|	41	|	kubectl find  	|	[ UNIX-find-like plugin for kubectl to find resources and perform action on them  ](https://github.com/alikhil/kubectl-find)	|	![Github Stars](https://img.shields.io/github/stars/alikhil/kubectl-find)	|
|	42	|	kubefwd  	|	[ Bulk port forwarding for Kubernetes services with unique IPs per service, automatic /etc/hosts entries, and MCP integration for AI assistants ](https://github.com/txn2/kubefwd)	|	![Github Stars](https://img.shields.io/github/stars/txn2/kubefwd)	|
|	43	|	kubecm  	|	[ Manage your kubeconfig more easily ](https://github.com/sunny0826/kubecm)	|	![Github Stars](https://img.shields.io/github/stars/sunny0826/kubecm)	|
|	44	|	krelay  	|	[ A better alternative to `kubectl port-forward` that can forward TCP or UDP traffic to IP/Host which is accessible inside the cluster ](https://github.com/knight42/krelay)	|	![Github Stars](https://img.shields.io/github/stars/knight42/krelay)	|
|	45	|	kubectl-browse-pvc  	|	[ Kubectl plugin for browsing PVCs on the command line ](https://github.com/clbx/kubectl-browse-pvc)	|	![Github Stars](https://img.shields.io/github/stars/clbx/kubectl-browse-pvc)	|
|	46	|	gwctl  	|	[ Command-line tool for managing and understanding Gateway API resources in your Kubernetes cluster ](https://github.com/kubernetes-sigs/gwctl)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/gwctl)	|
|	47	|	kbu	|	[ A single-pane Kubernetes TUI driven by Tab / Space / Enter / Esc — Relatives navigation, side-by-side YAML compare, and an embedded persistent shell. Zero setup, zero hotkey memorization. ](https://github.com/vulcanshen/kbu)	|	![Github Stars](https://img.shields.io/github/stars/vulcanshen/kbu)	|



## Alert and Monitoring						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Thanos  	|	[	Highly available Prometheus setup with long term storage capabilities. CNCF Sandbox project. https://thanos.io](https://github.com/thanos-io/thanos)	|	![Github Stars](https://img.shields.io/github/stars/thanos-io/thanos)	|
|	2	|	Prometheus  	|	[	The Prometheus monitoring system and time series database.](https://github.com/prometheus/prometheus)	|	![Github Stars](https://img.shields.io/github/stars/prometheus/prometheus)	|
|	3	|	Grafana  	|	[	The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More](https://github.com/grafana/grafana)	|	![Github Stars](https://img.shields.io/github/stars/grafana/grafana)	|
|	4	|	Kubetail  	|	[	Bash script to tail Kubernetes logs from multiple pods at the same time](https://github.com/johanhaleby/kubetail)	|	![Github Stars](https://img.shields.io/github/stars/johanhaleby/kubetail)	|
|	5	|	Searchlight  	|	[	Alerts for Kubernetes](https://github.com/searchlight/searchlight)	|	![Github Stars](https://img.shields.io/github/stars/searchlight/searchlight)	|
|	6	|	linkerd2 Monitoring Mixin for Grafana  	|	[	Grafana dashboards for linkerd2 monitoring and can work in standalone (default) or in multi cluster setup](https://github.com/andrew-waters/linkerd2-mixin)	|	![Github Stars](https://img.shields.io/github/stars/andrew-waters/linkerd2-mixin)	|
|	7	|	kuberhaus  	|	[	Kubernetes resource dashboard with node/pod layout and resource requests](https://github.com/stevelacy/kuberhaus)	|	![Github Stars](https://img.shields.io/github/stars/stevelacy/kuberhaus)	|
|	8	|	Kubernetes Job/CronJob Notifier  	|	[	This tool sends an alert to slack whenever there is a Kubernetes cronJob/Job failure/success](https://github.com/sukeesh/k8s-job-notify)	|	![Github Stars](https://img.shields.io/github/stars/sukeesh/k8s-job-notify)	|
|	9	|	Argus  	|	[	This tool monitors changes in the filesystem on specified paths](https://clustergarage.io/argus/docs/overview)	|	-	|
|	10	|	Kube-Scout  	|	[	Scout for alarming issues across your Kubernetes clusters](https://github.com/ReallyLiri/kubescout)	|	![Github Stars](https://img.shields.io/github/stars/ReallyLiri/kubescout)	|
|	11	|	Kwatch  	|	[	monitor & detect crashes in your Kubernetes(K8s) cluster instantly](https://github.com/abahmed/kwatch)	|	![Github Stars](https://img.shields.io/github/stars/abahmed/kwatch)	|
|	12	|	Scope  	|	[	 Monitoring, visualisation & management for Docker & Kubernetes](https://github.com/weaveworks/scope)	|	![Github Stars](https://img.shields.io/github/stars/weaveworks/scope)	|
|	13	|	Kubeshark  	|	[	TCPDump and Wireshark re-invented for Kubernetes](https://github.com/kubeshark/kubeshark)	|	![Github Stars](https://img.shields.io/github/stars/kubeshark/kubeshark)	|
|	14	|	Ksniff  	|	[	Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark](https://github.com/eldadru/ksniff)	|	![Github Stars](https://img.shields.io/github/stars/eldadru/ksniff)	|
|	15	|	Kube-Prometheus-Top [ kptop ]  	|	[	Monitoring for Kubernetes Nodes, Pods, Containers, and PVCs resources on the terminal through Prometheus metircs](https://github.com/eslam-gomaa/kptop)	|	![Github Stars](https://img.shields.io/github/stars/eslam-gomaa/kptop)	|
|	16	|	ktop  	|	[	A top-like tool for your Kubernetes clusters](https://github.com/vladimirvivien/ktop)	|	![Github Stars](https://img.shields.io/github/stars/vladimirvivien/ktop)	|
|	17	|	Kuberhealthy  	|	[A Kubernetes operator for running synthetic checks as pods. Works great with Prometheus!](https://github.com/kuberhealthy/kuberhealthy)	|	![Github Stars](https://img.shields.io/github/stars/kuberhealthy/kuberhealthy)	|
|	18	|	kurt  	|	[ A Kubernetes plugin that gives context to what is restarting in your Kubernetes cluster ](https://github.com/soraro/kurt)	|	![Github Stars](https://img.shields.io/github/stars/soraro/kurt)	|
|	19	|	KlusterView  	|	[ Get instant insights on your Kubernetes clusters with our lightweight, plug-and-play performance monitoring tool  ](https://github.com/oslabs-beta/KlusterView)	|	![Github Stars](https://img.shields.io/github/stars/oslabs-beta/KlusterView)	|
|	20	|	X.509 Certificate Exporter	|	[	Watch certificates for expiration in Kubernetes Secrets and control-plane files. Alerts and dashboard available.](https://github.com/enix/x509-certificate-exporter/)	|	![Github Stars](https://img.shields.io/github/stars/enix/x509-certificate-exporter)	|
|	21	|	VpK	|	[VpK - Visually presented Kubernetes  View k8s in graphical fashion ](https://github.com/k8svisual/vpk)	|	![Github Stars](https://img.shields.io/github/stars/k8svisual/vpk)	|
|	22	|	k8s-collector	|	[A Kubernetes Job to collect resources, logs and events from a Kubernetes cluster ](https://github.com/gianlucam76/k8s_collector)	|	![Github Stars](https://img.shields.io/github/stars/gianlucam76/k8s_collector)	|
|	23	|	HolmesGPT	|	[  On-Call Assistant for Prometheus Alerts - Get a head start on fixing alerts with AI investigation ](https://github.com/robusta-dev/holmesgpt)	|	![Github Stars](https://img.shields.io/github/stars/robusta-dev/holmesgpt)	|
|	24	|	kcmsu	|	[  K8s ConfigMaps and Secrets Usage ](https://github.com/cristian98149/kcmsu)	|	![Github Stars](https://img.shields.io/github/stars/cristian98149/kcmsu)	|
|	25	|	WatchAlert	|	[  Lightweight cloud-native multi-data source monitoring and alerting engine ](https://github.com/opsre/WatchAlert)	|	![Github Stars](https://img.shields.io/github/stars/opsre/WatchAlert)	|
|	26	|	Kubexer Kubernetes IDE	|	[  Desktop Kubernetes IDE with a built-in monitoring and alerting engine — define alert rules on live cluster events and workload health, with namespace-wide metrics and resource comparison ](https://kubexer.com)	|	-	|
|	27	|	kubectl-outagedeck	|	[ Check official cloud and SaaS provider status for dependencies discovered from Kubernetes workload annotations ](https://github.com/outagedeck/kubectl-outagedeck)	|	![Github Stars](https://img.shields.io/github/stars/outagedeck/kubectl-outagedeck)	|


## Logging and Tracing						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Jaeger  	|	[	CNCF Jaeger, a Distributed Tracing Platform](https://github.com/jaegertracing/jaeger)	|	![Github Stars](https://img.shields.io/github/stars/jaegertracing/jaeger)	|
|	2	|	Kiali  	|	[	Kiali project, observability for the Istio service mesh](https://github.com/kiali/kiali)	|	![Github Stars](https://img.shields.io/github/stars/kiali/kiali)	|
|	3	|	ELK  	|	[	Elasticsearch, Logstash, Kibana](https://github.com/elastic)	|	![Github Stars](https://img.shields.io/github/stars/elastic)	|
|	4	|	fluentbit  	|	[	Fast and Lightweight Log processor and forwarder for Linux, BSD and OSX](https://github.com/fluent/fluent-bit)	|	![Github Stars](https://img.shields.io/github/stars/fluent/fluent-bit)	|
|	5	|	Loki  	|	[	Like Prometheus, but for logs](https://github.com/grafana/loki)	|	![Github Stars](https://img.shields.io/github/stars/grafana/loki)	|
|	6	| kubectl-mtail  |	[ tail logs from multiple pods matching label selector](https://gitlab.com/grzesuav/kubectl-mtail) | ![Github Stars](https://img.shields.io/github/stars/grzesuav/kubectl-mtail)
|	7	| k8spacket   |	[ packets traffic visualization for kubernetes](https://github.com/k8spacket/k8spacket) | ![Github Stars](https://img.shields.io/github/stars/k8spacket/k8spacket)	
|	8	| goldpinger   |	[  Debugging tool for Kubernetes which tests and displays connectivity between nodes in the cluster](https://github.com/bloomberg/goldpinger) | ![Github Stars](https://img.shields.io/github/stars/bloomberg/goldpinger)
|	9	|	Otterize network mapper  	|	[	Map Kubernetes in-cluster traffic and export as text, intents, or an image](https://github.com/otterize/network-mapper)	|	![Github Stars](https://img.shields.io/github/stars/otterize/network-mapper)	|
|	10	|	kube-audit-rest  	|	[	Kubernetes audit logging, when you don't control the control plane ](https://github.com/RichardoC/kube-audit-rest)	|	![Github Stars](https://img.shields.io/github/stars/RichardoC/kube-audit-rest)	|
|	11	|	kail 	|	[	kubernetes log viewer ](https://github.com/boz/kail)	|	![Github Stars](https://img.shields.io/github/stars/boz/kail)	|
|	12	|	network mapper 	|	[	Map Kubernetes in-cluster traffic and export as text, intents, or an image ](https://github.com/otterize/network-mapper)	|	![Github Stars](https://img.shields.io/github/stars/otterize/network-mapper)	|     
|	13	|	retina	|	[	eBPF distributed networking observability tool for Kubernetes. ](https://github.com/microsoft/retina)	|	![Github Stars](https://img.shields.io/github/stars/microsoft/retina)	|    
|	14	|	sablier	|	[	Starting containers on demand and close automatically when not in use. ](https://github.com/acouvreur/sablier)	|	![Github Stars](https://img.shields.io/github/stars/acouvreur/sablier)	| 
|	15	|	kubetail	|	[	Real-time logging dashboard for Kubernetes - view logs in a terminal or a browser](https://github.com/kubetail-org/kubetail)	|	![Github Stars](https://img.shields.io/github/stars/kubetail-org/kubetail)	|
|	16	|	Odigos	|	[	Distributed tracing without code changes using OpenTelemetry and eBPF](https://github.com/odigos-io/odigos)	|	![Github Stars](https://img.shields.io/github/stars/odigos-io/odigos)	|

## Troubleshooting / Debugging						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Monokle  	|	[	Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations](https://github.com/kubeshop/monokle)	|	![Github Stars](https://img.shields.io/github/stars/kubeshop/monokle)	|
|	2	|	Kubectl-debug  	|	[	Allows you to run a new container with all the troubleshooting tools installed in running pod for debugging purposed](https://github.com/aylei/kubectl-debug)	|	![Github Stars](https://img.shields.io/github/stars/aylei/kubectl-debug)	|
|	3	|	PowerfulSeal  	|	[	A powerful testing tool for Kubernetes clustersd](https://github.com/bloomberg/powerfulseal)	|	![Github Stars](https://img.shields.io/github/stars/bloomberg/powerfulseal)	|
|	4	|	Crash-diagnostic  	|	[	Crash-Diagnostics is a tool to help investigate, analyze, and troubleshoot unresponsive or crashed Kubernetes clustersd](https://github.com/vmware-tanzu/crash-diagnostics)	|	![Github Stars](https://img.shields.io/github/stars/vmware-tanzu/crash-diagnostics)	|
|	5	|	K9s  	|	[	Kubernetes CLI To Manage Your Clusters In Style!d](https://github.com/derailed/k9s)	|	![Github Stars](https://img.shields.io/github/stars/derailed/k9s)	|
|	6	|	Kubernetes CLI Plugin - Doctor 	|	[	kubectl cluster triage plugin for k8s - 🏥 (brew doctor equivalent)d](https://github.com/emirozer/kubectl-doctor)	|	![Github Stars](https://img.shields.io/github/stars/emirozer/kubectl-doctor)	|
|	7	|	Knative Inspect  	|	[	A light-weight debugging tool for Knative's system componentsd](https://github.com/nimakaviani/knative-inspect)	|	![Github Stars](https://img.shields.io/github/stars/nimakaviani/knative-inspect)	|
|	8	|	Kubeman  	|	[	To find information from Kubernetes clusters, and to investigate issues related to Kubernetes and Istiod](https://github.com/walmartlabs/kubeman)	|	![Github Stars](https://img.shields.io/github/stars/walmartlabs/kubeman)	|
|	9	|	kpexec  	|	[	kpexec is a kubernetes cli that runs commands in a container with high privileges](https://github.com/ssup2/kpexec)	|	![Github Stars](https://img.shields.io/github/stars/ssup2/kpexec)	|
|	10	|	Koolkits  	|	[	🧰 Opinionated, language-specific, batteries-included debug container images for Kubernetes](https://github.com/lightrun-platform/koolkits)	|	![Github Stars](https://img.shields.io/github/stars/lightrun-platform/koolkits)	|
|	11	|	kubespy  	|	[	pod debugging tool for kubernetes clusters with docker runtimes](https://github.com/huazhihao/kubespy)	|	![Github Stars](https://img.shields.io/github/stars/huazhihao/kubespy)	|
| 12 | Inspektor Gadget | [ A collection of eBPF-based tools to debug and inspect Kubernetes resources and applications ](https://github.com/inspektor-gadget/inspektor-gadget) | ![Github Stars](https://img.shields.io/github/stars/inspektor-gadget/inspektor-gadget) |
|	13	|	KubeSkoop  	|	[	kubernetes networking diagnose tool for different CNI plug-ins and IAAS providers](https://github.com/alibaba/kubeskoop)	|	![Github Stars](https://img.shields.io/github/stars/alibaba/kubeskoop)	|
|	14 |	kubent  	|	[	Easily check your clusters for use of deprecated APIs](https://github.com/doitintl/kube-no-trouble)	|	![Github Stars](https://img.shields.io/github/stars/doitintl/kube-no-trouble)	|
|	15 |	kftray  	|	[ A cross-platform system tray application for managing multiple kubectl port-forward commands, with support for UDP and proxy connections through k8s clusters ](https://github.com/hcavarsan/kftray)	|	![Github Stars](https://img.shields.io/github/stars/hcavarsan/kftray)	|
|	16 |	kuttl  	|	[	Declarative approach to test Kubernetes Operators.](https://github.com/kudobuilder/kuttl)	|	![Github Stars](https://img.shields.io/github/stars/kudobuilder/kuttl)	|
|	17 |	kdave  	|	[ The kdave (Kubernetes Deprecated API Versions Exporter) checks for any deprecated or removed apiVersions in the cluster and exports them in a Prometheus metrics format ](https://github.com/wayfair-incubator/kdave)	|	![Github Stars](https://img.shields.io/github/stars/wayfair-incubator/kdave)	|
|	18 |	kubediff  	|	[ Source VS Deployed - Used to sanity check and understand what has changed between environments ](https://github.com/Ramilito/kubediff)	|	![Github Stars](https://img.shields.io/github/stars/Ramilito/kubediff)	|
| 19 | kubebuddy | [A PowerShell tool for monitoring and managing Kubernetes clusters, supporting JSON, TXT, and HTML output formats with a CLI option for streamlined operations, including health check scoring for cluster assessment](https://github.com/KubeDeckio/KubeBuddy) | ![Github Stars](https://img.shields.io/github/stars/KubeDeckio/KubeBuddy) |
| 20 | k8shark | [Capture Kubernetes cluster state to a portable archive and replay it through a mock API server — use kubectl against a customer's environment without live cluster access](https://github.com/phenixblue/k8shark) | ![Github Stars](https://img.shields.io/github/stars/phenixblue/k8shark) |


									
## Development Tools/Kit						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Okteto: A Tool for Cloud Native Developers  	|	[	Build better applications by developing and testing your code directly in Kubernetes](https://github.com/okteto/okteto)	|	![Github Stars](https://img.shields.io/github/stars/okteto/okteto)	|
|	2	|	Tilt: Tilt manages local development instances for teams that deploy to Kubernetes  	|	[	Local Kubernetes development with no stress](https://github.com/windmilleng/tilt)	|	![Github Stars](https://img.shields.io/github/stars/windmilleng/tilt)	|
|	3	|	Garden: Kubernetes from source to finish  	|	[	Development orchestrator for Kubernetes, containers and functions.](https://github.com/garden-io/garden)	|	![Github Stars](https://img.shields.io/github/stars/garden-io/garden)	|
|	4	|	KuberNix  	|	[	Single dependency Kubernetes clusters for local testing, experimenting and development](https://github.com/saschagrunert/kubernix)	|	![Github Stars](https://img.shields.io/github/stars/saschagrunert/kubernix)	|
|	5	|	Copper  	|	[	A configuration file validator for Kubernetes](https://github.com/cloud66-oss/copper)	|	![Github Stars](https://img.shields.io/github/stars/cloud66-oss/copper)	|
|	6	|	ko  	|	[	Build and deploy Go applications on Kubernetes](https://github.com/google/ko)	|	![Github Stars](https://img.shields.io/github/stars/google/ko)	|
|	7	|	Dekorate  	|	[	Java annotation processors for Kubernetes](https://github.com/dekorateio/dekorate)	|	![Github Stars](https://img.shields.io/github/stars/dekorateio/dekorate)	|
|	8	|	Lens IDE  	|	[	A powerful interface and toolkit for managing, visualizing, and interacting with multiple Kubernetes clusters](https://k8slens.dev/)	|	-	|
|	9	|	Kosko  	|	[	Organize Kubernetes manifests in JavaScript](https://kosko.dev/)	|	-	|
|	10	|	Telepresence  	|	[	Fast, local development for Kubernetes and Openshift microservices](https://www.telepresence.io/)	|	-	|
|	11	|	Monokle  	|	[	Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations](https://github.com/kubeshop/monokle)	|	![Github Stars](https://img.shields.io/github/stars/kubeshop/monokle)	|
|	12	|	KuberEz  	|	[	Graphical modeling tool for Kubernetes manifest](https://github.com/uengine-oss/kuber-ez)	|	![Github Stars](https://img.shields.io/github/stars/uengine-oss/kuber-ez)	|
|	13	|	mirrord  	|	[	Run your local process in the context of your cloud cluster](https://github.com/metalbear-co/mirrord)	|	![Github Stars](https://img.shields.io/github/stars/metalbear-co/mirrord)	|
|	14	|	Aptakube  	|	[	A modern, lightweight and multi-cluster desktop client for Kubernetes](https://aptakube.com)	|	-	|
|	15	|	Kubes  	|	[	Kubernetes App Deploy Tool: build docker image, compile Kubernetes YAML files, and apply them](https://github.com/boltops-tools/kubes)	|	![Github Stars](https://img.shields.io/github/stars/boltops-tools/kubes)	|
|	16	|	Kaniko  	|	[	 Build Container Images In Kubernetes](https://github.com/GoogleContainerTools/kaniko)	|	![Github Stars](https://img.shields.io/github/stars/GoogleContainerTools/kaniko)	|
|	17	|	Python client for kuberenetes  	|	[	 Official Python client library for kubernetes](https://github.com/kubernetes-client/python)	    |	![Github Stars](https://img.shields.io/github/stars/kubernetes-client/python)	|
|	18	|	eclipse che IDE for k8s	|	[	 The Kubernetes-Native IDE for Developer Teams](https://github.com/eclipse/che)	    |	![Github Stars](https://img.shields.io/github/stars/eclipse/che)	|
|	19	|	Kubebuilder	|	[	SDK for building Kubernetes APIs using CRDs](https://github.com/kubernetes-sigs/kubebuilder)	    |	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/kubebuilder)	|
|	20	|	Operator-sdk	|	[	  SDK for building Kubernetes applications. Provides high level APIs, useful abstractions, and project scaffolding](https://github.com/operator-framework/operator-sdk)	    |	![Github Stars](https://img.shields.io/github/stars/operator-framework/operator-sdk)	|
|	21	|	cdk8s	|	[	  Kubernetes native apps and abstractions using object-oriented programming](https://github.com/cdk8s-team/cdk8s)	    |	![Github Stars](https://img.shields.io/github/stars/cdk8s-team/cdk8s)	|
|	22	|	Gitkube	|	[	 Build and deploy docker images to Kubernetes using git push](https://github.com/hasura/gitkube)	    |	![Github Stars](https://img.shields.io/github/stars/hasura/gitkube)	|
|	23	|	Arkade	|	[	 Open Source Marketplace For Kubernetes](https://github.com/alexellis/arkade)	    |	![Github Stars](https://img.shields.io/github/stars/alexellis/arkade)	|
|	24	|	k2tf	|	[	 k2tf - Kubernetes YAML to Terraform HCL converters](https://github.com/sl1pm4t/k2tf)	    |	![Github Stars](https://img.shields.io/github/stars/sl1pm4t/k2tf)	|
|	25	|	Terraformer	|	[	 CLI tool to generate terraform files from existing infrastructure (reverse Terraform). Infrastructure to Code](https://github.com/chenrui333/terraformer)	    |	![Github Stars](https://img.shields.io/github/stars/chenrui333/terraformer)	|
|	26	|	Atomix	|	[	 A Kubernetes toolkit for building distributed applications using cloud native principles](https://github.com/atomix/atomix)	    |	![Github Stars](https://img.shields.io/github/stars/atomix/atomix)	|
|	27	|	Brigade	|	[	  Event-driven scripting for Kubernetes](https://github.com/brigadecore/brigade)	    |	![Github Stars](https://img.shields.io/github/stars/brigadecore/brigade)	|
|	28	|	Spread	|	[	  Docker to Kubernetes in one command](https://github.com/redspread/spread)	    |	![Github Stars](https://img.shields.io/github/stars/redspread/spread)	|
|	29	|	Kompose	|	[	  convert docker compose to kubernetes resources](https://github.com/kubernetes/kompose)	    |	![Github Stars](https://img.shields.io/github/stars/kubernetes/kompose)	|
|	30	|	Helmfile	|	[	 Declaratively deploy your Kubernetes manifests, Kustomize configs, and Charts as Helm releases. Generate all-in-one manifests for use with ArgoCD.](https://github.com/helmfile/helmfile)	    |	![Github Stars](https://img.shields.io/github/stars/helmfile/helmfile)	|
|	31	|	validkube	|	[    ValidKube combines the best open-source tools to help ensure Kubernetes YAML best practices, hygiene & security.]( https://github.com/komodorio/validkube)	    |	![Github Stars](https://img.shields.io/github/stars/komodorio/validkube)	|
|	32	|	Config Syncer	|	[	 Config Syncer by AppsCode keeps ConfigMaps and Secrets synchronized across namespaces and/or clusters.](https://github.com/kubeops/config-syncer)	    |	![Github Stars](https://img.shields.io/github/stars/kubeops/config-syncer)	|
|	33	|	Gefyra	|	[	 Gefyra: Blazingly-fast, rock-solid, local application development with Kubernetes](https://github.com/gefyrahq/gefyra)	    |	![Github Stars](https://img.shields.io/github/stars/gefyrahq/gefyra)	|
|	34	|	Kubernetes ConfigMap Reload	|	[	 Simple binary to trigger a reload when a Kubernetes ConfigMap is updated](https://github.com/jimmidyson/configmap-reload)	    |	![Github Stars](https://img.shields.io/github/stars/jimmidyson/configmap-reload)	|
|	35	|	RELOADER	|	[	 A Kubernetes controller to watch changes in ConfigMap and Secrets and do rolling upgrades on Pods](https://github.com/stakater/Reloader)	    |	![Github Stars](https://img.shields.io/github/stars/stakater/Reloader)	|
|	36	|	Ingress Monitor Controller	|	[	 A Kubernetes controller to watch ingresses and create liveness alerts for your apps/microservices in UptimeRobot, StatusCake, Pingdom, etc](https://github.com/stakater/IngressMonitorController)	    |	![Github Stars](https://img.shields.io/github/stars/stakater/IngressMonitorController)	|
|	37	|	odo  	|	[	 Developer-focused CLI for fast & iterative application development on Kubernetes and Podman](https://odo.dev/)	|	![Github Stars](https://img.shields.io/github/stars/redhat-developer/odo)	|
|	38	|	configmap-reload  	|	[Simple binary to trigger a reload when a Kubernetes ConfigMap is updated](https://github.com/jimmidyson/configmap-reload)	|	![Github Stars](https://img.shields.io/github/stars/jimmidyson/configmap-reload)	|
|	39	|	k8tz  	|	[Kubernetes admission controller and a CLI tool to inject timezones into Pods and CronJobs](https://github.com/k8tz/k8tz)	|	![Github Stars](https://img.shields.io/github/stars/k8tz/k8tz)	|
|	40	|	KDash  	|	[A simple and fast dashboard for Kubernetes ](https://github.com/kdash-rs/kdash)	|	![Github Stars](https://img.shields.io/github/stars/kdash-rs/kdash)	|
|  41  |   DevSpace   |   [An open-source developer tool for Kubernetes that lets you develop and deploy cloud-native software faster](https://www.devspace.sh/)   |   ![Github Stars](https://img.shields.io/github/stars/devspace-sh/devspace)  |
|  42  |   K8Studio   |   [K8 Studio is a cross-platform client IDE to manage Kubernetes Clusters](https://github.com/guiqui/k8Studio)   |   ![Github Stars](https://img.shields.io/github/stars/guiqui/k8Studio)  |
|  43  |   Radius   |   [Radius is a cloud-native, portable application platform that makes app development easier for teams building cloud-native apps](https://github.com/radius-project/radius)   |   ![Github Stars](https://img.shields.io/github/stars/radius-project/radius)  |
|  44  |   Kubefirst   |   [The Kubefirst CLI creates instant GitOps platforms that integrate some of the best tools in cloud native from scratch in minutes](https://github.com/kubefirst/kubefirst)   |   ![Github Stars](https://img.shields.io/github/stars/kubefirst/kubefirst)  |
|  45  |   k'exp   |   [Understand Kubernetes - the visual way Not yet another attempt to manage production clusters in the browser](https://github.com/iximiuz/kexp)   |   ![Github Stars](https://img.shields.io/github/stars/iximiuz/kexp)  |
|  46  |   k8s-insider   |   [A zero-config way to access you kubernetes cluster network](https://github.com/TrueGoric/k8s-insider)   |   ![Github Stars](https://img.shields.io/github/stars/TrueGoric/k8s-insider)  |
|  47  |   Cyclops   |   [Developer friendly Kubernetes 👁️](https://github.com/cyclops-ui/cyclops)   |   ![Github Stars](https://img.shields.io/github/stars/cyclops-ui/cyclops)  |
|  48  |   Sablier   |   [Start your containers on demand, shut them down automatically when there's no activity. ](https://github.com/acouvreur/sablier)   |   ![Github Stars](https://img.shields.io/github/stars/acouvreur/sablier)  |
|  49  |   kronic   |   [ The simple Kubernetes CronJob Admin UI ](https://github.com/mshade/kronic)   |   ![Github Stars](https://img.shields.io/github/stars/mshade/kronic)  |
|  50  |   Kor   |   [ A Golang Tool to discover unused Kubernetes Resources ](https://github.com/yonahd/kor)   |   ![Github Stars](https://img.shields.io/github/stars/yonahd/kor)  |
|  51  |   Docketeer   |   [ Docketeer is a developer-friendly application that provides a single interface for container and network management as well as metric visualization. ](https://github.com/open-source-labs/Docketeer)   |   ![Github Stars](https://img.shields.io/github/stars/open-source-labs/Docketeer)  |
|  52  |   Helmify   |   [ Creates Helm chart from Kubernetes yaml ](https://github.com/arttor/helmify)   |   ![Github Stars](https://img.shields.io/github/stars/arttor/helmify)  |
|  53  |   Kueue   |   [ Kubernetes-native Job Queueing ](https://github.com/kubernetes-sigs/kueue)   |   ![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/kueue)  |
|  54  |   Reckoner   |   [ Declaratively install and manage multiple Helm chart releases ](https://github.com/FairwindsOps/reckoner)   |   ![Github Stars](https://img.shields.io/github/stars/FairwindsOps/reckoner)  |
|  55  |   Katenary   |   [ Convert docker-compose to a configurable helm chart ](https://github.com/metal3d/katenary)   |   ![Github Stars](https://img.shields.io/github/stars/metal3d/katenary)  |
|  56  |   kubernetes-replicator   |   [ Kubernetes controller for synchronizing secrets & config maps across namespaces ](https://github.com/mittwald/kubernetes-replicator)   |   ![Github Stars](https://img.shields.io/github/stars/mittwald/kubernetes-replicator)  |
|  57  |   node-gizmo   |   [ A CLI utility for your Kubernetes nodes ](https://github.com/Kavinraja-G/node-gizmo)   |   ![Github Stars](https://img.shields.io/github/stars/Kavinraja-G/node-gizmo)  |
|  58  |   KubeBlocks   |   [ open-source control plane that runs and manages databases, message queues and other data infrastructure on K8s. ](https://github.com/apecloud/kubeblocks)   |   ![Github Stars](https://img.shields.io/github/stars/apecloud/kubeblocks)  |
|  59  |   KFtray   |   [ Manage and run multiple kubectl port-forward configurations directly in the menu bar, syncing configurations with git repositories. ](https://github.com/hcavarsan/kftray)   |   ![Github Stars](https://img.shields.io/github/stars/hcavarsan/kftray)  |
|  60  |   Tilt   |   [ Define your dev environment as code. For microservice apps on Kubernetes. ](https://github.com/tilt-dev/tilt)   |   ![Github Stars](https://img.shields.io/github/stars/tilt-dev/tilt)  |
|  61  |   Garden   |   [ Automation for Kubernetes development and testing. Spin up production-like environments for development, testing, and CI on demand. ](https://github.com/garden-io/garden)   |   ![Github Stars](https://img.shields.io/github/stars/garden-io/garden)  |
|  62  |   Kubectl-fields   |   [ A Kubernetes resources hierarchy parsing tool. ](https://github.com/rewanthtammana/kubectl-fields)   |   ![Github Stars](https://img.shields.io/github/stars/rewanthtammana/kubectl-fields)  |
|  63  |   sleepcycles   |   [ Define sleep & wake up cycles for your Kubernetes resources. ](https://github.com/rekuberate-io/sleepcycles)   |   ![Github Stars](https://img.shields.io/github/stars/rekuberate-io/sleepcycles)  |
|  64  |   scaf   |   [ scaf provides developers and DevOps engineers with a complete blueprint for a new project using Kubernetes . ](https://github.com/sixfeetup/scaf)   |   ![Github Stars](https://img.shields.io/github/stars/sixfeetup/scaf)  |
|  65  |   KubePug   |   [ Deprecations AKA KubePug - Pre UpGrade (Checker) ](https://github.com/kubepug/kubepug)   |   ![Github Stars](https://img.shields.io/github/stars/kubepug/kubepug)  |
|  66  |   scaf   |   [  scaf provides developers and DevOps engineers with a complete blueprint for a new project using Kubernetes  ](https://github.com/sixfeetup/scaf)   |   ![Github Stars](https://img.shields.io/github/stars/sixfeetup/scaf)  |
|  67  |   mogenius   |   [  A self-service platform that enables developers to deploy and manage applications on Kubernetes with ease and safety  ](https://mogenius.com)   |   -  |
|  68  |   Armada   |   [ A multi-cluster batch queuing system for high-throughput workloads on Kubernetes. ](https://github.com/armadaproject/armada)   |   ![Github Stars](https://img.shields.io/github/stars/armadaproject/armada)  |
|  69  |   kro   |   [ Kube Resource Orchestrator (kro) provides a powerful abstraction layer that allows you to define complex multi-resource constructs as reusable components in your applications and systems](https://github.com/awslabs/kro)   |   ![Github Stars](https://img.shields.io/github/stars/awslabs/kro)  |
|  70  |   kubectl-slice   |   [ Split multiple Kubernetes files into smaller files with ease. Split multi-YAML files into individual files](https://github.com/patrickdappollonio/kubectl-slice)   |   ![Github Stars](https://img.shields.io/github/stars/patrickdappollonio/kubectl-slice)  |
|  71  |   crik   |   [ crik is a project that aims to provide checkpoint and restore functionality for Kubernetes pods mainly targeted for node shutdown and restart scenarios ](https://github.com/qawolf/crik)   |   ![Github Stars](https://img.shields.io/github/stars/qawolf/crik)  |
|  72  |   kbld   |   [ kbld seamlessly incorporates image building and image pushing into your development and deployment workflows ](https://github.com/carvel-dev/kbld)   |   ![Github Stars](https://img.shields.io/github/stars/carvel-dev/kbld)  |
|  73  |   Helm Kanvas Snapshot  |   [ Plugin that generates a visual snapshot of Helm charts. ](https://github.com/meshery/helm-kanvas-snapshot)   |   ![Github Stars](https://img.shields.io/github/stars/meshery/helm-kanvas-snapshot)  |
|  74  |   KubeDiagrams  |   [ Generate Kubernetes architecture diagrams from Kubernetes manifest files, kustomization files, Helm charts, and actual cluster state. ](https://github.com/philippemerle/KubeDiagrams)   |   ![Github Stars](https://img.shields.io/github/stars/philippemerle/KubeDiagrams)  |
|  75  |   k8skonf  |   [ Write Kubernetes manifests in TypeScript ](https://github.com/konfjs/k8skonf)   |   ![Github Stars](https://img.shields.io/github/stars/konfjs/k8skonf)  |
|  76  |   helm-controller  |   [ A simple way to manage helm charts with Custom Resource Definitions in k8s ](https://github.com/k3s-io/helm-controller)   |   ![Github Stars](https://img.shields.io/github/stars/k3s-io/helm-controller)  |
|  77  |   Grafana-Tanka  |   [ Flexible, reusable and concise configuration for Kubernetes ](https://github.com/grafana/tanka)   |   ![Github Stars](https://img.shields.io/github/stars/grafana/tanka)  |
|  78  |   kubesearch.dev  |   [ Kubesearch is a searchable index of popular Helm chart releases in categories such as observability, networking, storage, and automation ](https://kubesearch.dev/)   |   ![Github Stars](https://img.shields.io/github/stars/whazor/k8s-at-home-search)  |
|  79  |   Klustr  |   [ A native (non-Electron) cross-platform Kubernetes desktop client driven purely by your kubeconfig — multi-context live views, logs, exec, port-forwarding, RBAC, CRDs, Helm, Argo CD, Flux CD and Gateway API, with nothing installed in the cluster ](https://github.com/SametKUM/klustr)   |   ![Github Stars](https://img.shields.io/github/stars/SametKUM/klustr)  |
|  80  |   Kubexer Kubernetes IDE  |   [ A cross-platform desktop IDE for Kubernetes — multi-cluster resource browsing and management, live pod logs, exec, port-forwarding, topology graphs, CRDs, Helm, GitOps (ArgoCD/Flux), templates, image CVE scanning, and a built-in AI assistant ](https://kubexer.com)   |   -  |


## Alternative Tools for Development						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	Minikube  	|	[	minikube implements a local Kubernetes clusterd](https://github.com/kubernetes/minikube)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes/minikube)	|
|	2	|	KubeSphere  	|	[	Easy-to-use Production Ready Container Platform https://kubesphere.io](https://github.com/kubesphere/kubesphere)	|	![Github Stars](https://img.shields.io/github/stars/kubesphere/kubesphere)	|
|	3	|	skippbox  	|	[	A Desktop application for k8sd](https://github.com/skippbox/skippbox)	|	![Github Stars](https://img.shields.io/github/stars/skippbox/skippbox)	|
|	4	|	kind  	|	[	Kubernetes IN Docker - local clusters for testing Kubernetes https://kind.sigs.k8s.io/d](https://github.com/kubernetes-sigs/kind)	|	![Github Stars](https://img.shields.io/github/stars/kubernetes-sigs/kind)	|
|	5	|	k3d  	|	[	k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker.d](https://k3d.io/)	|	-	
|	6	|	Systemk: virtual kubelet for systemd  	|	[	Systemk is a systemd backend for the virtual-kubelet. Instead of starting containers, you start systemd units](https://github.com/virtual-kubelet/systemk)	|	![Github Stars](https://img.shields.io/github/stars/virtual-kubelet/systemk)	|
|	7	|	mokbox  	|	[	Build verifiably conformant multi-node kubernetes clusters in containers](https://github.com/bashtools/mokctl)	|	![Github Stars](https://img.shields.io/github/stars/bashtools/mokctl)	|
|	8	|	Otomi  	|	[	Self-hosted PaaS for Kubernetes](https://github.com/redkubes/otomi-core)	|	![Github Stars](https://img.shields.io/github/stars/redkubes/otomi-core)	|
|	9	|	Rainbond  	|	[	offers a serverless experience, and allows you to easily manage containerized applications without needing to understand Kubernetes](https://github.com/goodrain/rainbond)	|	![Github Stars](https://img.shields.io/github/stars/goodrain/rainbond)	|
|	10	|	MyKube  	|	[ k8s-installer - One-click k8s single-node cluster installation on your own device ](https://github.com/guyst16/mykube)	|	![Github Stars](https://img.shields.io/github/stars/guyst16/mykube)	|
|	11	|	K8e  	|	[ K8e 🚀 - Instantly Ready Kubernetes Enterprise Edition ](https://github.com/xiaods/k8e)	|	![Github Stars](https://img.shields.io/github/stars/xiaods/k8e)	|


## Internal Developer Platform						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	OpenChoreo	|	[	A complete, open-source internal developer platform (IDP) for Kubernetes that provides high-level abstractions (components, endpoints, environments) to turn developer intent into Kubernetes resources, with a Backstage-powered portal and built-in CI/CD and GitOps](https://github.com/openchoreo/openchoreo)	|	![Github Stars](https://img.shields.io/github/stars/openchoreo/openchoreo)	|


									
## CI/CD integration Tools						
									
|	Sr No	|	Tool Name	|		Description with URL	|	GitHub Popularity	|
| ---------- | --------------------- | --------------------- | ------------------|									
|	1	|	HybridK8s Droid  	|	[	Intelligence for your favourite Delivery Platform](https://hybridk8s.tech/)	|	-	|
|	2	|	Devtron  	|	[	Software Delivery Workflow for Kubernetes](https://github.com/devtron-labs/devtron)	|	![Github Stars](https://img.shields.io/github/stars/devtron-labs/devtron)	|
|	3	|	Skaffold  	|	[	Easy and Repeatable Kubernetes Development](https://github.com/GoogleContainerTools/skaffold)	|	![Github Stars](https://img.shields.io/github/stars/GoogleContainerTools/skaffold)	|
|	4	|	Apollo  	|	[	Apollo - The logz.io continuous deployment solution over kubernetes](https://github.com/logzio/apollo)	|	![Github Stars](https://img.shields.io/github/stars/logzio/apollo)	|
|	5	|	Helm Cabin  	|	[	Web UI that visualizes Helm releases in a Kubernetes cluster](https://github.com/Nick-Triller/helm-cabin)	|	![Github Stars](https://img.shields.io/github/stars/Nick-Triller/helm-cabin)	|

<!-- opensource-radar:truncated -->
