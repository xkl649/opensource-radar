"use client";

import { Radar } from "lucide-react";
import { formatDate } from "@/lib/i18n";
import type { DatasetMeta } from "@/lib/types";
import { useLang } from "./lang-provider";

export function SiteFooter({ meta }: { meta: DatasetMeta }) {
  const { lang, t } = useLang();

  return (
    <footer className="mt-20 border-t border-white/[0.06] bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <Radar size={15} className="text-violet-400" />
          <span className="text-sm font-semibold text-slate-200">{t("site.name")}</span>
          <span className="text-xs text-slate-500">
            {t("footer.updated")} {formatDate(meta.updatedAt, lang)} · {t("footer.refresh")}
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-600">
          {t("footer.note")}
        </p>
      </div>
    </footer>
  );
}
