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
        className="h-10 rounded-lg border border-border/70 bg-canvas/70 px-4 text-[11px] font-semibold text-ink/75"
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
      className="relative inline-flex h-10 w-[78px] items-center rounded-lg border border-border/70 bg-canvas/70 p-1 text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.04),0_1px_2px_rgb(var(--shadow-rgb)/0.1)] transition hover:border-ink/35"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      <span
        className={`absolute top-1 h-8 w-8 rounded-md bg-ink shadow-[0_1px_2px_rgb(var(--shadow-rgb)/0.14)] transition-transform ${
          isDark ? "translate-x-[38px]" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2 text-[13px]">
        <span className={!isDark ? "text-white" : "text-ink/55"}>☀</span>
        <span className={isDark ? "text-white" : "text-ink/55"}>☾</span>
      </span>
    </button>
  );
}
