import taxonomy from "@/data/taxonomy.json";
import type { Lang } from "./types";

export interface Category {
  id: string;
  zh: string;
  en: string;
  descZh: string;
  descEn: string;
  hue: string;
  /** Domains like open hardware have far smaller communities than AI. */
  minStars?: number;
  /** Rank repositories that actually ship design files above popular tooling. */
  probeDesignFiles?: boolean;
  searchTopics: string[];
  keywords: string[];
}

export const CATEGORIES: Category[] = taxonomy.categories;

const BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));

/** Datasets collected before the hardware split still carry this id. */
const LEGACY_IDS: Record<string, string> = {
  hardware: "hardware-design",
};

function resolveCategory(id: string): Category | undefined {
  return BY_ID.get(id) ?? BY_ID.get(LEGACY_IDS[id] ?? "");
}

export function getCategory(id: string): Category | undefined {
  return resolveCategory(id);
}

export function categoryLabel(id: string, lang: Lang): string {
  const c = resolveCategory(id);
  if (!c) return id;
  return lang === "zh" ? c.zh : c.en;
}

export function categoryDesc(id: string, lang: Lang): string {
  const c = resolveCategory(id);
  if (!c) return "";
  return lang === "zh" ? c.descZh : c.descEn;
}

interface HueClasses {
  chip: string;
  activeChip: string;
  dot: string;
  text: string;
  bar: string;
}

/**
 * Written out in full because Tailwind only ships classes it can see as
 * literals; `bg-${hue}-500` would be purged.
 */
const HUES: Record<string, HueClasses> = {
  violet: {
    chip: "bg-violet-500/10 text-violet-300 ring-violet-400/25",
    activeChip: "bg-violet-500/20 text-violet-100 ring-violet-400/60",
    dot: "bg-violet-400",
    text: "text-violet-300",
    bar: "bg-violet-400",
  },
  indigo: {
    chip: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/25",
    activeChip: "bg-indigo-500/20 text-indigo-100 ring-indigo-400/60",
    dot: "bg-indigo-400",
    text: "text-indigo-300",
    bar: "bg-indigo-400",
  },
  blue: {
    chip: "bg-blue-500/10 text-blue-300 ring-blue-400/25",
    activeChip: "bg-blue-500/20 text-blue-100 ring-blue-400/60",
    dot: "bg-blue-400",
    text: "text-blue-300",
    bar: "bg-blue-400",
  },
  fuchsia: {
    chip: "bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-400/25",
    activeChip: "bg-fuchsia-500/20 text-fuchsia-100 ring-fuchsia-400/60",
    dot: "bg-fuchsia-400",
    text: "text-fuchsia-300",
    bar: "bg-fuchsia-400",
  },
  cyan: {
    chip: "bg-cyan-500/10 text-cyan-300 ring-cyan-400/25",
    activeChip: "bg-cyan-500/20 text-cyan-100 ring-cyan-400/60",
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    bar: "bg-cyan-400",
  },
  orange: {
    chip: "bg-orange-500/10 text-orange-300 ring-orange-400/25",
    activeChip: "bg-orange-500/20 text-orange-100 ring-orange-400/60",
    dot: "bg-orange-400",
    text: "text-orange-300",
    bar: "bg-orange-400",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-300 ring-amber-400/25",
    activeChip: "bg-amber-500/20 text-amber-100 ring-amber-400/60",
    dot: "bg-amber-400",
    text: "text-amber-300",
    bar: "bg-amber-400",
  },
  rose: {
    chip: "bg-rose-500/10 text-rose-300 ring-rose-400/25",
    activeChip: "bg-rose-500/20 text-rose-100 ring-rose-400/60",
    dot: "bg-rose-400",
    text: "text-rose-300",
    bar: "bg-rose-400",
  },
  teal: {
    chip: "bg-teal-500/10 text-teal-300 ring-teal-400/25",
    activeChip: "bg-teal-500/20 text-teal-100 ring-teal-400/60",
    dot: "bg-teal-400",
    text: "text-teal-300",
    bar: "bg-teal-400",
  },
  emerald: {
    chip: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/25",
    activeChip: "bg-emerald-500/20 text-emerald-100 ring-emerald-400/60",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    bar: "bg-emerald-400",
  },
  slate: {
    chip: "bg-slate-500/10 text-slate-300 ring-slate-400/25",
    activeChip: "bg-slate-500/20 text-slate-100 ring-slate-400/60",
    dot: "bg-slate-400",
    text: "text-slate-300",
    bar: "bg-slate-400",
  },
};

export function hueClasses(categoryId: string): HueClasses {
  const hue = resolveCategory(categoryId)?.hue ?? "slate";
  return HUES[hue] ?? HUES.slate;
}
