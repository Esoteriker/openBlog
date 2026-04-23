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
        className="rounded-lg border border-border/80 bg-canvas/75 px-3 py-1 text-[11px] font-semibold text-ink/75"
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
      className="rounded-lg border border-border/80 bg-canvas/80 px-3 py-1 text-[11px] font-semibold text-ink transition hover:border-accent hover:text-accent"
      aria-label="Toggle theme"
    >
      {isDark ? `☀ ${lightLabel}` : `☾ ${darkLabel}`}
    </button>
  );
}
