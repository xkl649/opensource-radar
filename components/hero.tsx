"use client";

import { ArrowDown } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { formatRelative } from "@/lib/i18n";
import type { DatasetMeta } from "@/lib/types";
import { useLang } from "./lang-provider";

export function Hero({ meta, runnable }: { meta: DatasetMeta; runnable: number }) {
  const { lang, t } = useLang();

  const stats = [
    { value: meta.total, label: t("hero.stat.projects") },
    { value: CATEGORIES.length, label: t("hero.stat.categories") },
    { value: runnable, label: t("hero.stat.runnable") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid-backdrop pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-18rem] size-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), rgba(6,182,212,0.12) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] py-1 pl-1.5 pr-3 text-xs text-slate-400 ring-1 ring-white/[0.08]">
          <span className="relative flex size-4 items-center justify-center">
            <span className="absolute size-1.5 rounded-full bg-emerald-400" />
            <span className="absolute size-4 animate-ping rounded-full bg-emerald-400/20" />
          </span>
          {t("hero.badge")}
        </div>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
          {t("site.tagline")}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
          {t("site.description")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
          >
            {t("hero.cta")}
            <ArrowDown size={15} strokeWidth={2.4} />
          </a>

          <dl className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-slate-500">{s.label}</dt>
                <dd className="text-xl font-semibold tabular-nums text-slate-100">
                  {s.value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="text-xs text-slate-500">{t("hero.stat.updated")}</dt>
              <dd className="text-xl font-semibold text-slate-100">
                {formatRelative(meta.updatedAt, lang)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
