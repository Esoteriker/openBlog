"use client";

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

export default function AboutPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const showcase = showcasePagesByLocale[locale].about;
  const linkedin = profileData.contact.channels.find((item) => item.label.toLowerCase() === "linkedin");
  const email = profileData.contact.channels.find((item) => item.href.startsWith("mailto:"));

  const socials = [
    { href: profileData.github, label: "GitHub", icon: "GH" },
    linkedin ? { href: linkedin.href, label: "LinkedIn", icon: "in" } : null,
    email ? { href: email.href, label: email.label, icon: "@" } : null
  ].filter(Boolean) as Array<{ href: string; label: string; icon: string }>;

  return (
    <PageShell>
      <div className="space-y-8">
        <header className="space-y-2 pr-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{locale === "zh" ? "关于我" : "About Me"}</h1>
          <p className="text-lg text-ink/72">{showcase.subtitle}</p>
        </header>

        <section className="grid gap-6 xl:grid-cols-[0.82fr_1.55fr]">
          <article className="neon-panel p-7">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/40 bg-canvas/40 shadow-[0_0_0_8px_rgb(var(--accent)/0.08),0_0_32px_rgb(var(--accent)/0.2)]">
                <Image src="/avatar.svg" alt={profileData.name} fill sizes="176px" className="object-cover" priority />
              </div>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-ink">{profileData.name}</h2>
              <p className="mt-2 text-2xl font-semibold text-accent">{profileData.title}</p>
              <p className="mt-4 inline-flex items-center rounded-full border border-border/75 bg-canvas/48 px-4 py-2 text-sm text-ink/74">
                {showcase.location}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-border/60 pt-6 text-base leading-relaxed text-ink/80">
              {showcase.bioLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <Link href="/resume" className="neon-button-primary mt-8 inline-flex w-full items-center justify-center">
              {showcase.resumeLabel}
            </Link>

            <div className="mt-6 flex justify-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border/75 bg-canvas/45 text-sm font-semibold text-ink/82 transition hover:border-accent/65 hover:text-accent"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </article>

          <article className="neon-panel relative overflow-hidden p-8">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,transparent,rgb(var(--accent)/0.85),transparent)]" />
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.timelineTitle}</h2>

            <ol className="mt-8 space-y-8">
              {showcase.milestones.map((item, index) => (
                <li key={item.year} className="grid gap-5 md:grid-cols-[92px_1fr] md:gap-8">
                  <div className="relative pl-10 md:pl-14">
                    {index !== showcase.milestones.length - 1 ? (
                      <span className="absolute left-[12px] top-10 h-[calc(100%+28px)] w-px bg-gradient-to-b from-accent/80 to-transparent md:left-[18px]" />
                    ) : null}
                    <span className={`absolute left-0 top-1 h-6 w-6 rounded-full ${item.accentClass} shadow-[0_0_22px_currentColor] md:left-1`} />
                    <p className="text-2xl font-bold text-accent">{item.year}</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight text-ink">{item.title}</h3>
                    <p className="max-w-3xl text-lg leading-relaxed text-ink/72">{item.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="neon-panel p-7">
          <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.interestsTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {showcase.interests.map((item) => (
              <article key={item.title} className="soft-panel p-5">
                <p className="text-3xl font-bold text-accent">{item.icon}</p>
                <h3 className="mt-4 text-2xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/70">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
