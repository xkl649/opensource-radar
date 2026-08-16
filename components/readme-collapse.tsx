"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "./lang-provider";

/** Must match the max-height below; the effect compares against it in pixels. */
const COLLAPSED_CLASS = "max-h-[30rem] overflow-hidden";

/**
 * Clamps a rendered README to a readable height with a fade-out and an expand
 * control. The children are markdown rendered on the server, passed through as
 * an opaque node so nothing extra ships to the browser.
 */
export function ReadmeCollapse({
  collapsible,
  children,
}: {
  collapsible: boolean;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  // The server can only guess from the markdown length, so the clamp starts on
  // and is dropped once the real rendered height is known.
  const [overflowing, setOverflowing] = useState(collapsible);
  const rootRef = useRef<HTMLDivElement>(null);
  const clampRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clamp = clampRef.current;
    const content = contentRef.current;
    if (!collapsible || expanded || !clamp || !content) return;

    // Images settle late and can push a short-looking README past the clamp.
    const measure = () =>
      setOverflowing(content.offsetHeight > clamp.clientHeight + 24);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    return () => observer.disconnect();
  }, [collapsible, expanded]);

  const clamped = overflowing && !expanded;

  return (
    <div ref={rootRef}>
      <div className="relative">
        <div ref={clampRef} className={clamped ? COLLAPSED_CLASS : undefined}>
          <div ref={contentRef}>{children}</div>
        </div>
        {clamped && (
          <div
            aria-hidden
            // The panel reads as #080a12: ink-900/60 composited over ink-950.
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080a12] via-[#080a12]/85 to-transparent"
          />
        )}
      </div>

      {overflowing && (
        <button
          type="button"
          onClick={() => {
            setExpanded((v) => !v);
            // Collapsing from the bottom of a long README would otherwise leave
            // the reader stranded below the panel.
            if (expanded) rootRef.current?.scrollIntoView({ block: "nearest" });
          }}
          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300 ring-1 ring-white/[0.08] transition hover:bg-white/[0.09] hover:text-slate-100"
        >
          {expanded ? t("detail.readme.collapse") : t("detail.readme.expand")}
          <ChevronDown
            size={13}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
