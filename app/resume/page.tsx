"use client";

import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { workExperienceByLocale } from "@/data/experience";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

export default function ResumePage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const resume = showcasePagesByLocale[locale].resume;
  const experience = workExperienceByLocale[locale];

  return (
    <PageShell>
      <div className="space-y-8">
        <header className="space-y-2 pr-28">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{resume.title}</h1>
          <p className="text-lg text-ink/72">{resume.description}</p>
        </header>

        <section className="grid gap-6 xl:grid-cols-[0.86fr_1.2fr]">
          <article className="neon-panel p-7">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{resume.summaryTitle}</h2>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-ink/76">
              {resume.summary.map((item) => (
                <li key={item} className="rounded-2xl border border-border/65 bg-canvas/32 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-ink">{resume.strengthsTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {resume.strengths.map((item) => (
                <li key={item} className="neon-badge px-4 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 text-sm text-ink/66">
              <div>
                <p className="font-semibold uppercase tracking-[0.15em] text-accent">{resume.educationTitle}</p>
                <ul className="mt-3 space-y-2">
                  {resume.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.15em] text-accent">{resume.availabilityTitle}</p>
                <ul className="mt-3 space-y-2">
                  {resume.availability.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="neon-panel p-7">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{resume.experienceTitle}</h2>
            <div className="mt-6 space-y-5">
              {experience.items.map((item) => (
                <section key={item.name} className="rounded-3xl border border-border/65 bg-canvas/28 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-ink">{item.name}</h3>
                      <p className="mt-2 text-base text-accent">{item.role}</p>
                    </div>
                    <p className="rounded-full border border-border/65 bg-canvas/34 px-3 py-1 text-sm text-ink/62">{profileData.name}</p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-ink/74">{item.context}</p>
                  <p className="mt-4 text-base leading-relaxed text-ink/74">{item.impact}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <li key={tech} className="neon-badge px-3 py-1.5">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        </section>
      </div>
    </PageShell>
  );
}
