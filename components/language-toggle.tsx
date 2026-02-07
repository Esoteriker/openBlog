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
      <span className="hidden text-xs font-semibold text-ink/65 sm:inline">{label}</span>
      <div className="inline-flex overflow-hidden rounded-md border border-border/90 bg-canvas/70">
        {localeOptions.map((option) => {
          const isActive = locale === option.code;

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLocale(option.code)}
              className={`px-2.5 py-1.5 text-xs font-semibold transition ${
                isActive ? "bg-accent/25 text-accent" : "text-ink/80 hover:text-accent"
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
