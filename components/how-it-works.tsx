"use client";

import { Boxes, Gauge, PackageOpen, Radar } from "lucide-react";
import type { MessageKey } from "@/lib/i18n";
import { useLang } from "./lang-provider";

const STEPS = [
  { icon: Radar, title: "how.step1.title", body: "how.step1.body" },
  { icon: Boxes, title: "how.step2.title", body: "how.step2.body" },
  { icon: Gauge, title: "how.step3.title", body: "how.step3.body" },
  { icon: PackageOpen, title: "how.step4.title", body: "how.step4.body" },
] satisfies { icon: typeof Radar; title: MessageKey; body: MessageKey }[];

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="scroll-mt-20 border-t border-white/[0.06] pt-14">
      <h2 className="text-lg font-semibold tracking-tight text-slate-100">
        {t("how.title")}
      </h2>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="relative rounded-2xl bg-ink-900/60 p-5 ring-1 ring-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-violet-500/12 ring-1 ring-violet-400/20">
                  <Icon size={15} className="text-violet-300" />
                </span>
                <span className="text-xs font-medium tabular-nums text-slate-600">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-3.5 text-sm font-semibold text-slate-100">
                {t(step.title)}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
                {t(step.body)}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
