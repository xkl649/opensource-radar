"use client";

import type { MessageKey } from "@/lib/i18n";
import { useLang } from "./lang-provider";

/** Signals that most strongly predict "I can run this tonight". */
const PRIORITY = [
  "docker",
  "conda",
  "python",
  "node",
  "ros",
  "platformio",
  "espidf",
  "arduino",
  "hardware",
  "notebook",
  "cmake",
  "rust",
  "go",
  "examples",
  "docs",
  "install",
  "make",
  "tests",
];

const HIGHLIGHT = new Set(["docker", "conda", "hardware", "ros", "platformio", "espidf"]);

export function SignalBadges({
  signals,
  max = 4,
}: {
  signals: string[];
  max?: number;
}) {
  const { t } = useLang();
  if (!signals.length) return null;

  const ordered = [...signals].sort(
    (a, b) => PRIORITY.indexOf(a) - PRIORITY.indexOf(b)
  );
  const shown = ordered.slice(0, max);
  const hidden = ordered.length - shown.length;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {shown.map((s) => (
        <span
          key={s}
          className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ring-1 ${
            HIGHLIGHT.has(s)
              ? "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20"
              : "bg-white/[0.03] text-slate-400 ring-white/5"
          }`}
        >
          {t(`signal.${s}` as MessageKey)}
        </span>
      ))}
      {hidden > 0 && (
        <span className="text-[11px] text-slate-500">+{hidden}</span>
      )}
    </div>
  );
}
