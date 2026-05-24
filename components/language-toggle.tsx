"use client";

import { localeOptions } from "@/data/profile";
import { useLocale } from "@/components/locale-provider";

type LanguageToggleProps = {
  label: string;
};

export function LanguageToggle({ label }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex items-center gap-2" aria-label={label}>
      <div className="inline-flex overflow-hidden rounded-lg border border-border/70 bg-canvas/70 p-1 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] backdrop-blur-md">
        {localeOptions.map((option) => {
          const isActive = locale === option.code;

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLocale(option.code)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                isActive
                  ? "bg-ink text-canvas shadow-[0_1px_2px_rgb(var(--shadow-rgb)/0.12)]"
                  : "text-ink/68 hover:bg-ink/5 hover:text-ink"
              }`}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
