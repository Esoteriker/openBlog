"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
  loadingLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel, loadingLabel }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-full border border-border/80 bg-canvas/75 px-4 py-2 text-[11px] font-semibold text-ink/75"
      >
        {loadingLabel}
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-11 w-[84px] items-center rounded-full border border-border/80 bg-canvas/75 p-1 text-ink shadow-[0_12px_28px_rgb(var(--shadow-rgb)/0.14)] transition hover:border-accent/60"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      <span
        className={`absolute top-1 h-9 w-9 rounded-full bg-accent shadow-[0_8px_18px_rgb(var(--accent)/0.28)] transition-transform ${
          isDark ? "translate-x-[40px]" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2 text-sm">
        <span className={!isDark ? "text-white" : "text-ink/55"}>☀</span>
        <span className={isDark ? "text-white" : "text-ink/55"}>☾</span>
      </span>
    </button>
  );
}
