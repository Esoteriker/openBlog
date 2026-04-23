"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, ProfileData } from "@/data/profile";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

type NavbarProps = {
  locale: Locale;
  name: string;
  title: string;
  githubUrl: string;
  githubLabel: string;
  languageLabel: string;
  themeLabels: ProfileData["labels"]["theme"];
};

const navTextByLocale: Record<Locale, { home: string; about: string; skills: string; projects: string; blog: string; contact: string }> = {
  en: { home: "Home", about: "About", skills: "Skills", projects: "Projects", blog: "Blog", contact: "Contact" },
  zh: { home: "首页", about: "关于我", skills: "技能", projects: "项目", blog: "博客", contact: "联系我" },
  de: { home: "Start", about: "Über", skills: "Skills", projects: "Projekte", blog: "Blog", contact: "Kontakt" }
};

export function Navbar({ locale, name, title, githubUrl, githubLabel, languageLabel, themeLabels }: NavbarProps) {
  const pathname = usePathname();
  const text = navTextByLocale[locale];

  const navItems = [
    { href: "/", label: text.home, icon: "⌂" },
    { href: "/about", label: text.about, icon: "◉" },
    { href: "/skills", label: text.skills, icon: "✦" },
    { href: "/projects", label: text.projects, icon: "▣" },
    { href: "/blog", label: text.blog, icon: "✎" }
  ];

  return (
    <>
      <header className="border-b border-border/70 bg-canvas/85 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-ink">{name}</p>
            <p className="truncate text-xs text-ink/65">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle label={languageLabel} />
            <ThemeToggle lightLabel={themeLabels.light} darkLabel={themeLabels.dark} loadingLabel={themeLabels.loading} />
          </div>
        </div>
        <nav aria-label="Primary navigation" className="mt-3">
          <ul className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    className={`rounded-md border px-3 py-1.5 transition ${
                      active
                        ? "border-accent/70 bg-accent/20 text-accent"
                        : "border-border/75 bg-canvas/65 text-ink/84 hover:border-accent/70 hover:text-accent"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[220px] border-r border-border/70 bg-[#050b1a]/95 p-4 lg:flex lg:flex-col">
        <div className="rounded-xl border border-border/70 bg-canvas/45 px-3 py-4">
          <p className="text-xl font-extrabold tracking-tight text-ink">{name}</p>
          <p className="mt-1 text-xs text-ink/60">{title}</p>
        </div>

        <nav aria-label="Primary navigation" className="mt-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "border-accent/55 bg-accent/16 text-accent"
                        : "border-transparent text-ink/80 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    <span className="text-xs text-accent/90">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-lg border border-border/80 bg-canvas/70 px-3 py-2 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            {githubLabel}
          </a>
          <Link
            href="/#contact"
            className="flex w-full items-center justify-center rounded-lg border border-border/80 bg-canvas/70 px-3 py-2 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            {text.contact}
          </Link>
          <div className="rounded-lg border border-border/70 bg-canvas/50 p-2">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/60">{languageLabel}</p>
            <div className="flex items-center justify-between gap-2">
              <LanguageToggle label={languageLabel} />
              <ThemeToggle lightLabel={themeLabels.light} darkLabel={themeLabels.dark} loadingLabel={themeLabels.loading} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
