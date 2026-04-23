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
      <div className="inline-flex overflow-hidden rounded-lg border border-border/80 bg-canvas/80">
        {localeOptions.map((option) => {
          const isActive = locale === option.code;

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLocale(option.code)}
              className={`px-2 py-1 text-[11px] font-semibold transition ${
                isActive ? "bg-accent/25 text-accent" : "text-ink/70 hover:text-accent"
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
