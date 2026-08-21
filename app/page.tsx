import { Explorer } from "@/components/explorer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { allProjects, datasetMeta } from "@/lib/data";

export default function HomePage() {
  const runnable = allProjects.filter((p) => p.buildability >= 70).length;

  return (
    <>
      <Hero meta={datasetMeta} runnable={runnable} />

      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
        {datasetMeta.total === 0 ? <EmptyDataset /> : <Explorer />}
        <HowItWorks />
      </div>
    </>
  );
}

function EmptyDataset() {
  return (
    <div className="rounded-2xl bg-ink-900/60 p-8 ring-1 ring-white/[0.06]">
      <h2 className="text-base font-semibold text-slate-100">
        数据集还是空的 · The dataset is empty
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
        运行抓取脚本生成 <code className="text-slate-300">data/projects.json</code>，
        建议配置 <code className="text-slate-300">GITHUB_TOKEN</code> 以获得完整结果。
        <br />
        Run the collector to generate{" "}
        <code className="text-slate-300">data/projects.json</code>; set{" "}
        <code className="text-slate-300">GITHUB_TOKEN</code> for a full result set.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-xl bg-ink-950 p-4 text-xs text-slate-300 ring-1 ring-white/[0.06]">
        <code>GITHUB_TOKEN=ghp_xxx npm run fetch</code>
      </pre>
    </div>
  );
}
