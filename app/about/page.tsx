"use client";

import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";

export default function AboutPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];

  const timeline = [
    { year: "2026", title: "Senior Solution Architect", summary: profileData.about.currentFocus[0] ?? "" },
    { year: "2025", title: "AI Agent Systems", summary: profileData.about.currentFocus[1] ?? "" },
    { year: "2024", title: "Architecture Hardening", summary: profileData.about.currentFocus[2] ?? "" }
  ];

  return (
    <PageShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.about.header.eyebrow}</p>
          <h1 className="text-4xl font-extrabold text-ink">{profileData.about.header.title}</h1>
          <p className="text-ink/72">{profileData.about.header.description}</p>
        </header>

        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.4fr]">
          <article className="neon-panel p-6">
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="mt-2 text-accent">{profileData.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">{profileData.about.intro}</p>

            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.15em] text-ink/58">{profileData.about.capabilitiesTitle}</p>
              <ul className="space-y-2 text-sm text-ink/80">
                {profileData.about.capabilities.map((item) => (
                  <li key={item} className="rounded-md border border-border/70 bg-canvas/45 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <ol className="mt-4 space-y-4">
              {timeline.map((item) => (
                <li key={item.year} className="grid gap-2 border-l border-accent/40 pl-4">
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-ink/78">{item.summary}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
