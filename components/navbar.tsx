"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Locale, ProfileData } from "@/data/profile";

type NavbarProps = {
  locale: Locale;
  name: string;
  title: string;
  githubUrl: string;
  githubLabel: string;
  linkedinUrl: string;
  emailHref: string;
  footerNote: string;
  languageLabel: string;
  themeLabels: ProfileData["labels"]["theme"];
};

const navTextByLocale: Record<
  Locale,
  { home: string; about: string; skills: string; projects: string; blog: string; resume: string; contact: string }
> = {
  en: { home: "Home", about: "About", skills: "Skills", projects: "Projects", blog: "Blog", resume: "Resume", contact: "Contact" },
  zh: { home: "首页", about: "关于我", skills: "技能", projects: "项目", blog: "博客", resume: "简历", contact: "联系我" },
  de: { home: "Start", about: "Über", skills: "Skills", projects: "Projekte", blog: "Blog", resume: "Lebenslauf", contact: "Kontakt" }
};

export function Navbar({
  locale,
  name,
  title,
  githubUrl,
  githubLabel,
  linkedinUrl,
  emailHref,
  footerNote,
  languageLabel,
  themeLabels
}: NavbarProps) {
  const pathname = usePathname();
  const text = navTextByLocale[locale];

  const navItems = [
    { href: "/", label: text.home, icon: "⌂" },
    { href: "/about", label: text.about, icon: "◉" },
    { href: "/skills", label: text.skills, icon: "✦" },
    { href: "/projects", label: text.projects, icon: "▣" },
    { href: "/blog", label: text.blog, icon: "✎" },
    { href: "/resume", label: text.resume, icon: "☰" },
    { href: "/#contact", label: text.contact, icon: "✉" }
  ];

  const socialLinks = [
    { href: githubUrl, label: githubLabel, icon: "GH" },
    { href: linkedinUrl, label: "LinkedIn", icon: "in" },
    { href: emailHref, label: text.contact, icon: "@" }
  ];

  return (
    <>
      <header className="border-b border-border/65 bg-canvas/88 px-4 py-3 shadow-[0_10px_24px_rgb(var(--shadow-rgb)/0.08)] backdrop-blur-xl lg:hidden">
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
              const active = item.href !== "/#contact" && pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    className={`rounded-lg border px-3 py-1.5 transition ${
                      active
                        ? "border-ink/35 bg-ink/10 text-ink"
                        : "border-border/65 bg-canvas/58 text-ink/72 hover:border-ink/30 hover:text-ink"
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

      <aside className="sidebar-shell fixed inset-y-0 left-0 z-40 hidden w-[220px] border-r border-border/65 px-4 pb-6 pt-5 lg:flex lg:flex-col">
        <div className="rounded-xl border border-border/65 bg-canvas/36 px-3 py-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]">
          <p className="text-xl font-extrabold tracking-tight text-ink">{name}</p>
          <p className="mt-1 text-xs text-ink/60">{title}</p>
        </div>

        <nav aria-label="Primary navigation" className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const active = item.href !== "/#contact" && pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "border-border/65 bg-ink/[0.06] text-ink shadow-[inset_2px_0_0_rgb(var(--ink)/0.42)]"
                        : "border-transparent text-ink/64 hover:border-border/65 hover:bg-ink/[0.045] hover:text-ink"
                    }`}
                  >
                    <span className="inline-flex w-6 justify-center text-xs text-ink/52 transition group-hover:text-ink/76">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-4">
          <div className="flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/65 bg-canvas/42 text-sm font-semibold text-ink/68 transition hover:border-ink/35 hover:bg-ink/[0.045] hover:text-ink"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-xs text-ink/55">
            <p>© {new Date().getFullYear()} {name}</p>
            <p>{footerNote}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
