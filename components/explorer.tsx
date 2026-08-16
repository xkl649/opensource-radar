"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, categoryLabel, hueClasses } from "@/lib/categories";
import type { MessageKey } from "@/lib/i18n";
import type { ProjectSummary } from "@/lib/types";
import { useLang } from "./lang-provider";
import { ProjectCard } from "./project-card";

type SortKey =
  | "relevance"
  | "stars"
  | "momentum"
  | "updated"
  | "buildability"
  | "newest";

const SORTS: { key: SortKey; label: MessageKey }[] = [
  { key: "relevance", label: "sort.relevance" },
  { key: "buildability", label: "sort.buildability" },
  { key: "momentum", label: "sort.momentum" },
  { key: "stars", label: "sort.stars" },
  { key: "updated", label: "sort.updated" },
  { key: "newest", label: "sort.newest" },
];

const TOGGLES = [
  { key: "docker", label: "filter.onlyDocker" as MessageKey },
  { key: "quickstart", label: "filter.onlyRunnable" as MessageKey },
  { key: "fresh", label: "filter.onlyFresh" as MessageKey },
  { key: "licensed", label: "filter.onlyLicensed" as MessageKey },
];

const PAGE_SIZE = 24;

/**
 * Plain substring matching makes short queries useless — "ros" hits "across"
 * and "prospect". Names and topics still match on substrings so that "diff"
 * finds "diffusers", but prose only matches whole words.
 */
function matchScore(p: ProjectSummary, needle: string): number {
  const name = p.name.toLowerCase();
  if (name === needle) return 100;

  let score = 0;
  if (name.startsWith(needle)) score += 60;
  else if (name.includes(needle)) score += 40;

  if (p.owner.toLowerCase().includes(needle)) score += 25;
  if (p.topics.some((topic) => topic === needle)) score += 35;
  else if (p.topics.some((topic) => topic.includes(needle))) score += 20;
  if (p.language?.toLowerCase() === needle) score += 20;

  const words = p.description.toLowerCase().split(/[^a-z0-9+#.]+/);
  if (words.includes(needle)) score += 15;
  else if (needle.length >= 4 && words.some((w) => w.startsWith(needle))) score += 8;

  return score;
}

export function Explorer({ projects }: { projects: ProjectSummary[] }) {
  const { lang, t } = useLang();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [language, setLanguage] = useState("");
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const [visible, setVisible] = useState(PAGE_SIZE);

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) {
      if (p.language) counts.set(p.language, (counts.get(p.language) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([name]) => name);
  }, [projects]);

  const countsByCategory = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return counts;
  }, [projects]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const freshCutoff = Date.now() - 30 * 86_400_000;

    const filtered = projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (language && p.language !== language) return false;
      if (toggles.docker && !p.signals.includes("docker")) return false;
      if (toggles.quickstart && !p.hasQuickstart) return false;
      if (toggles.licensed && !p.license) return false;
      if (toggles.fresh && new Date(p.pushedAt).getTime() < freshCutoff) return false;
      return !needle || matchScore(p, needle) > 0;
    });

    // A query implies intent, so relevance wins over whatever sort is selected.
    if (needle) {
      return [...filtered].sort(
        (a, b) => matchScore(b, needle) - matchScore(a, needle) || b.stars - a.stars
      );
    }

    const sorters: Record<SortKey, (a: ProjectSummary, b: ProjectSummary) => number> = {
      relevance: (a, b) =>
        b.stars + b.momentum * 4 + b.buildability * 25 -
        (a.stars + a.momentum * 4 + a.buildability * 25),
      stars: (a, b) => b.stars - a.stars,
      momentum: (a, b) => b.momentum - a.momentum,
      updated: (a, b) => +new Date(b.pushedAt) - +new Date(a.pushedAt),
      buildability: (a, b) => b.buildability - a.buildability || b.stars - a.stars,
      newest: (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
    };

    return [...filtered].sort(sorters[sort]);
  }, [projects, query, category, language, toggles, sort]);

  const activeFilters =
    Boolean(query || category || language) || Object.values(toggles).some(Boolean);

  function reset() {
    setQuery("");
    setCategory("");
    setLanguage("");
    setToggles({});
    setVisible(PAGE_SIZE);
  }

  return (
    <section id="explore" className="scroll-mt-32">
      <div className="sticky top-14 z-20 -mx-4 border-b border-white/[0.06] bg-ink-950/85 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="relative">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder={t("search.placeholder")}
            className="w-full rounded-xl bg-ink-900 py-3 pl-11 pr-11 text-sm text-slate-100 ring-1 ring-white/[0.08] outline-none transition placeholder:text-slate-600 focus:bg-ink-850 focus:ring-violet-400/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t("search.clear")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 transition hover:bg-white/5 hover:text-slate-200"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="mt-3 flex snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Pill
            active={!category}
            onClick={() => {
              setCategory("");
              setVisible(PAGE_SIZE);
            }}
            label={t("filter.all")}
            count={projects.length}
          />
          {CATEGORIES.map((c) => {
            const hue = hueClasses(c.id);
            const active = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCategory(active ? "" : c.id);
                  setVisible(PAGE_SIZE);
                }}
                className={`flex shrink-0 snap-start items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-medium ring-1 transition ${
                  active ? hue.activeChip : `${hue.chip} hover:brightness-125`
                }`}
              >
                <span className={`size-1.5 rounded-full ${hue.dot}`} />
                {categoryLabel(c.id, lang)}
                <span className="text-[11px] opacity-60">
                  {countsByCategory.get(c.id) ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <SlidersHorizontal size={14} className="text-slate-600" />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label={t("sort.label")}
          className="rounded-lg bg-ink-900 px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/[0.08] outline-none transition hover:bg-ink-850 focus:ring-violet-400/40"
        >
          {SORTS.map((s) => (
            <option key={s.key} value={s.key} className="bg-ink-900">
              {t(s.label)}
            </option>
          ))}
        </select>

        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          aria-label={t("filter.language")}
          className="rounded-lg bg-ink-900 px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/[0.08] outline-none transition hover:bg-ink-850 focus:ring-violet-400/40"
        >
          <option value="" className="bg-ink-900">
            {t("filter.anyLanguage")}
          </option>
          {languages.map((l) => (
            <option key={l} value={l} className="bg-ink-900">
              {l}
            </option>
          ))}
        </select>

        {TOGGLES.map((tg) => (
          <button
            key={tg.key}
            type="button"
            onClick={() => {
              setToggles((prev) => ({ ...prev, [tg.key]: !prev[tg.key] }));
              setVisible(PAGE_SIZE);
            }}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ring-1 transition ${
              toggles[tg.key]
                ? "bg-violet-500/20 text-violet-100 ring-violet-400/50"
                : "bg-ink-900 text-slate-400 ring-white/[0.08] hover:text-slate-200"
            }`}
          >
            {t(tg.label)}
          </button>
        ))}

        {activeFilters && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs text-slate-500 transition hover:text-slate-200"
          >
            <X size={12} />
            {t("filter.reset")}
          </button>
        )}

        <span className="ml-auto text-xs text-slate-500">
          <span className="font-medium text-slate-300">{results.length}</span>{" "}
          {t("results.count")}
        </span>
      </div>

      {results.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-slate-300">{t("results.empty.title")}</p>
          <p className="mt-1.5 text-sm text-slate-500">{t("results.empty.body")}</p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.slice(0, visible).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {visible < results.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-xl bg-ink-900 px-5 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/[0.08] transition hover:bg-ink-850 hover:ring-white/20"
              >
                {t("results.more")} · {results.length - visible}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

function Pill({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 snap-start items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-medium ring-1 transition ${
        active
          ? "bg-white/[0.12] text-white ring-white/25"
          : "bg-white/[0.03] text-slate-400 ring-white/[0.08] hover:text-slate-200"
      }`}
    >
      {label}
      <span className="text-[11px] opacity-60">{count}</span>
    </button>
  );
}
