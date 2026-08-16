"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CircleAlert,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  Package,
  Star,
  Tag,
} from "lucide-react";
import { categoryLabel, hueClasses } from "@/lib/categories";
import {
  buildabilityTier,
  formatBytes,
  formatCount,
  formatDate,
  formatRelative,
  type MessageKey,
} from "@/lib/i18n";
import type { Project, ProjectSummary } from "@/lib/types";
import { BuildabilityMeter } from "./buildability-meter";
import { CopyButton } from "./copy-button";
import { GithubIcon } from "./icons";
import { useLang } from "./lang-provider";
import { ProjectCard } from "./project-card";

export function ProjectDetail({
  project,
  related,
}: {
  project: Project;
  related: ProjectSummary[];
}) {
  const { lang, t } = useLang();
  const hue = hueClasses(project.category);
  const tier = buildabilityTier(project.buildability);
  const cloneCmd = `git clone --depth 1 ${project.cloneUrl}`;

  const meta = [
    { label: t("detail.meta.stars"), value: formatCount(project.stars) },
    { label: t("detail.meta.forks"), value: formatCount(project.forks) },
    { label: t("detail.meta.issues"), value: formatCount(project.openIssues) },
    { label: t("detail.meta.language"), value: project.language ?? "—" },
    { label: t("detail.meta.license"), value: project.license ?? t("detail.noLicense") },
    { label: t("detail.meta.updated"), value: formatRelative(project.pushedAt, lang) },
    { label: t("detail.meta.created"), value: formatDate(project.createdAt, lang) },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/#explore"
        className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 transition hover:text-slate-200"
      >
        <ArrowLeft size={14} />
        {t("detail.back")}
      </Link>

      <div className="mt-6 flex flex-wrap items-start gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.ownerAvatar}
          alt=""
          width={56}
          height={56}
          className="size-14 rounded-xl bg-ink-800 ring-1 ring-white/10"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              {project.name}
            </h1>
            <span
              className={`rounded-md px-2 py-1 text-[11px] font-medium ring-1 ${hue.chip}`}
            >
              {categoryLabel(project.category, lang)}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">{project.fullName}</p>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-300">
            {project.description}
          </p>

          {project.topics.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-400 ring-1 ring-white/[0.06]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3 py-2 text-[13px] font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/[0.12]"
          >
            <GithubIcon size={14} />
            {t("detail.openGithub")}
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.03] px-3 py-2 text-[13px] text-slate-300 ring-1 ring-white/[0.08] transition hover:bg-white/[0.08]"
            >
              <Globe size={14} />
              {t("detail.homepage")}
            </a>
          )}
        </div>
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <Panel title={t("detail.steps")} hint={t("detail.stepsHint")}>
            <ol className="space-y-4">
              {project.steps.map((step, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[11px] font-semibold tabular-nums text-slate-300 ring-1 ring-white/[0.08]">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] leading-relaxed text-slate-300">
                      {lang === "zh" ? step.zh : step.en}
                    </p>
                    {step.cmd && <CodeBlock code={step.cmd} />}
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          {project.buildabilityReasons.length > 0 && (
            <Panel title={t("detail.why")}>
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-semibold tabular-nums ${tier.color}`}>
                  {project.buildability}
                </span>
                <BuildabilityMeter score={project.buildability} />
              </div>
              <ul className="mt-4 space-y-2">
                {project.buildabilityReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px]">
                    <span
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                        reason.weight > 0 ? "bg-emerald-400" : "bg-rose-400"
                      }`}
                    />
                    <span
                      className={reason.weight > 0 ? "text-slate-400" : "text-rose-300/80"}
                    >
                      {lang === "zh" ? reason.zh : reason.en}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          {project.readmePreview && (
            <Panel title={t("detail.readme")}>
              <p className="text-[13px] leading-relaxed text-slate-400">
                {project.readmePreview}…
              </p>
              <a
                href={`${project.url}#readme`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-violet-300 transition hover:text-violet-200"
              >
                {t("detail.readmeMore")}
                <ExternalLink size={13} />
              </a>
            </Panel>
          )}

          {!project.enriched && (
            <div className="flex items-start gap-2.5 rounded-xl bg-amber-500/[0.06] p-4 text-[13px] text-amber-200/80 ring-1 ring-amber-400/15">
              <CircleAlert size={15} className="mt-0.5 shrink-0" />
              <span>
                {lang === "zh"
                  ? "这个项目还没有做深度分析，复现步骤是通用模板，请以仓库 README 为准。"
                  : "This project has not been deeply analysed yet, so the steps above are a generic template — defer to the repository README."}
              </span>
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
          <Panel title={t("detail.download")} compact>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-200">
                  <GitBranch size={13} className="text-slate-500" />
                  {t("detail.download.clone")}
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  {t("detail.download.cloneHint")}
                </p>
                <CodeBlock code={cloneCmd} />
              </div>

              <div>
                <a
                  href={project.zipUrl}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[13px] font-semibold text-ink-950 transition hover:bg-slate-200"
                >
                  <Download size={14} strokeWidth={2.4} />
                  {t("detail.download.zip")}
                </a>
                <p className="mt-1.5 text-[11px] text-slate-500">
                  {t("detail.download.zipHint")}
                </p>
              </div>

              {project.latestRelease && (
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-200">
                    <Tag size={13} className="text-slate-500" />
                    {t("detail.download.release")}
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-slate-300">
                      {project.latestRelease}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {t("detail.download.releaseHint")}
                  </p>
                  <div className="mt-2.5 space-y-1.5">
                    {project.releaseAssets.map((asset) => (
                      <a
                        key={asset.url}
                        href={asset.url}
                        className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-2 text-[12px] text-slate-300 ring-1 ring-white/[0.06] transition hover:bg-white/[0.07]"
                      >
                        <Package size={13} className="shrink-0 text-slate-500" />
                        <span className="min-w-0 flex-1 truncate">{asset.name}</span>
                        <span className="shrink-0 text-[11px] text-slate-500">
                          {formatBytes(asset.size)}
                        </span>
                      </a>
                    ))}
                    {project.latestReleaseUrl && (
                      <a
                        href={project.latestReleaseUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 pt-1 text-[12px] text-violet-300 transition hover:text-violet-200"
                      >
                        {project.latestRelease}
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Panel>

          <Panel title={t("detail.overview")} compact>
            <dl className="space-y-2.5">
              {meta.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-[12px] text-slate-500">{row.label}</dt>
                  <dd className="truncate text-[13px] font-medium text-slate-200">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>

          {project.signals.length > 0 && (
            <Panel title={t("detail.signals")} compact>
              <div className="flex flex-wrap gap-1.5">
                {project.signals.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-emerald-500/[0.08] px-2 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/15"
                  >
                    {t(`signal.${s}` as MessageKey)}
                  </span>
                ))}
              </div>
            </Panel>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-14 border-t border-white/[0.06] pt-10">
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-100">
            <Star size={15} className="text-amber-400" />
            {t("detail.related")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Panel({
  title,
  hint,
  compact,
  children,
}: {
  title: string;
  hint?: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-2xl bg-ink-900/60 ring-1 ring-white/[0.06] ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
      {hint && <p className="mt-1 text-[12px] text-slate-500">{hint}</p>}
      <div className={hint ? "mt-4" : "mt-3.5"}>{children}</div>
    </section>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="group relative mt-2 rounded-xl bg-ink-950 ring-1 ring-white/[0.06]">
      <pre className="overflow-x-auto p-3 pr-11 font-mono text-[12px] leading-relaxed text-slate-300">
        <code>{code}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <CopyButton value={code} compact />
      </div>
    </div>
  );
}
