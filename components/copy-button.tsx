"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useLang } from "./lang-provider";

interface Props {
  value: string;
  label?: string;
  className?: string;
  compact?: boolean;
}

export function CopyButton({ value, label, className = "", compact }: Props) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API needs a secure context; fall back to a scratch textarea.
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
  }

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      title={label ?? t("card.copy")}
      aria-label={label ?? t("card.copy")}
      className={`inline-flex items-center gap-1.5 rounded-lg text-xs font-medium transition ${
        compact ? "p-1.5" : "px-2.5 py-1.5"
      } ${
        copied
          ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
          : "bg-ink-800 text-slate-300 ring-1 ring-white/5 hover:bg-ink-700 hover:text-white"
      } ${className}`}
    >
      <Icon size={13} strokeWidth={2.2} />
      {!compact && <span>{copied ? t("card.copied") : (label ?? t("card.copy"))}</span>}
    </button>
  );
}
