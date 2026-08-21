"use client";

import { ArrowUpRight, Download, Star, TrendingUp } from "lucide-react";
import { categoryLabel, hueClasses } from "@/lib/categories";
import { formatCount, formatRelative } from "@/lib/i18n";
import type { ProjectSummary } from "@/lib/types";
import { BuildabilityMeter } from "./buildability-meter";
import { CopyButton } from "./copy-button";
import { useLang } from "./lang-provider";
import { SignalBadges } from "./signal-badges";

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  C: "#555555",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  Lua: "#000080",
  Verilog: "#b2b7f8",
  VHDL: "#adb2cb",
};

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const { lang, t } = useLang();
  const hue = hueClasses(project.category);

  return (
    <article className="group relative flex flex-col rounded-2xl bg-ink-900/80 p-5 ring-1 ring-white/[0.06] transition duration-200 hover:-translate-y-0.5 hover:bg-ink-850 hover:ring-white/[0.12]">
      <div className="flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.ownerAvatar}
          alt=""
          width={36}
          height={36}
          loading="lazy"
          className="size-9 shrink-0 rounded-lg bg-ink-800 ring-1 ring-white/10"
        />
        <div className="min-w-0 flex-1">
          <a
            href={`/project/${project.id}`}
            className="block truncate text-[15px] font-semibold text-slate-100 transition group-hover:text-white"
          >
            {project.name}
            <span className="absolute inset-0" aria-hidden />
          </a>
          <p className="truncate text-xs text-slate-500">{project.owner}</p>
        </div>
        <span
          className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-medium ring-1 ${hue.chip}`}
        >
          {categoryLabel(project.category, lang)}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 min-h-[2.5rem] text-[13px] leading-5 text-slate-400">
        {project.description || "—"}
      </p>

      <div className="mt-3">
        <SignalBadges signals={project.signals} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1 text-slate-300">
          <Star size={12} className="text-amber-400" fill="currentColor" />
          {formatCount(project.stars)}
        </span>
        {project.momentum > 0 && (
          <span className="inline-flex items-center gap-1" title="stars / month">
            <TrendingUp size={12} className="text-emerald-400" />
            {formatCount(project.momentum)}
          </span>
        )}
        {project.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{
                backgroundColor: LANGUAGE_COLORS[project.language] ?? "#8b94ad",
              }}
            />
            {project.language}
          </span>
        )}
        {project.license && <span>{project.license}</span>}
        <span className="ml-auto">{formatRelative(project.pushedAt, lang)}</span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3.5">
        <BuildabilityMeter score={project.buildability} />
        {/* Raised above the card-wide link overlay so these stay clickable. */}
        <div className="relative z-10 flex items-center gap-1.5">
          <CopyButton value={`git clone --depth 1 ${project.cloneUrl}`} compact />
          <a
            href={project.zipUrl}
            title={t("card.zip")}
            aria-label={t("card.zip")}
            className="rounded-lg bg-ink-800 p-1.5 text-slate-300 ring-1 ring-white/5 transition hover:bg-ink-700 hover:text-white"
          >
            <Download size={13} strokeWidth={2.2} />
          </a>
          <a
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/[0.12] hover:text-white"
          >
            {t("card.detail")}
            <ArrowUpRight size={12} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </article>
  );
}
