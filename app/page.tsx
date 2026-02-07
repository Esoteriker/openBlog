"use client";

import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PageShell } from "@/components/page-shell";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { projectsDataByLocale } from "@/data/projects";
import { workExperienceByLocale } from "@/data/experience";

export default function HomePage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const projectsData = projectsDataByLocale[locale].slice(0, 4);
  const workExperience = workExperienceByLocale[locale];

  return (
    <PageShell>
      <div className="space-y-10">
        <HeroSection content={profileData.hero} />
        <WorkExperienceSection content={workExperience} />

        <section id="systems" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{profileData.systemsUi.header.title}</h2>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:opacity-80">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projectsData.map((project) => (
              <article key={project.name} className="neon-panel p-4">
                <p className="text-xs text-indigo-300">{project.subtitle}</p>
                <h3 className="mt-2 text-lg font-bold">{project.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-ink/78">{project.oneLineValue}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="neon-badge">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="neon-panel p-6">
            <h3 className="text-xl font-bold text-ink">{profileData.about.header.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{profileData.about.intro}</p>
            <Link href="/about" className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-80">
              Learn more →
            </Link>
          </article>
          <article className="neon-panel p-6">
            <h3 className="text-xl font-bold text-ink">{profileData.stack.header.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profileData.stack.groups.flatMap((group) => group.items).slice(0, 10).map((item) => (
                <li key={item} className="neon-badge">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/skills" className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-80">
              Explore skills →
            </Link>
          </article>
        </section>

        <ContactSection content={profileData.contact} />
      </div>
    </PageShell>
  );
}
