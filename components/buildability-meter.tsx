"use client";

import { buildabilityTier } from "@/lib/i18n";
import { useLang } from "./lang-provider";

export function BuildabilityMeter({
  score,
  showLabel = true,
}: {
  score: number;
  showLabel?: boolean;
}) {
  const { t } = useLang();
  const tier = buildabilityTier(score);

  return (
    <div className="flex items-center gap-2">
      <div
        className="h-1.5 w-16 overflow-hidden rounded-full bg-white/[0.07]"
        role="meter"
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t("card.buildability")}
      >
        <div
          className={`h-full rounded-full transition-all ${tier.bar}`}
          style={{ width: `${Math.max(score, 4)}%` }}
        />
      </div>
      {showLabel && (
        <span className={`text-[11px] font-medium ${tier.color}`}>
          {t(tier.key)}
        </span>
      )}
    </div>
  );
}
