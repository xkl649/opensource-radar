"use client";

import Link from "next/link";
import { Radar } from "lucide-react";
import { GithubIcon } from "./icons";
import { useLang } from "./lang-provider";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative grid size-8 place-items-center rounded-lg bg-violet-500/15 ring-1 ring-violet-400/25">
            <Radar size={16} className="text-violet-300" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            {t("site.name")}
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 text-[13px] text-slate-400 sm:flex">
          <Link
            href="/#explore"
            className="rounded-lg px-2.5 py-1.5 transition hover:bg-white/5 hover:text-slate-100"
          >
            {t("nav.explore")}
          </Link>
          <Link
            href="/#how"
            className="rounded-lg px-2.5 py-1.5 transition hover:bg-white/5 hover:text-slate-100"
          >
            {t("nav.how")}
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center rounded-lg bg-ink-900 p-0.5 ring-1 ring-white/[0.08]">
            {(["zh", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
                  lang === code
                    ? "bg-white/[0.12] text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {code === "zh" ? "中" : "EN"}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/topics/open-source"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-8 place-items-center rounded-lg bg-ink-900 text-slate-400 ring-1 ring-white/[0.08] transition hover:text-slate-100"
          >
            <GithubIcon size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
