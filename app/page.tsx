"use client";

import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PageShell } from "@/components/page-shell";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { useLocale } from "@/components/locale-provider";
import { workExperienceByLocale } from "@/data/experience";
import { profileDataByLocale } from "@/data/profile";
import { projectsDataByLocale } from "@/data/projects";

export default function HomePage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const projectsData = projectsDataByLocale[locale].slice(0, 3);
  const workExperience = workExperienceByLocale[locale];
  const viewAllLabel = locale === "zh" ? "全部项目" : "View all";

  return (
    <PageShell>
      <div className="space-y-12">
        <HeroSection content={profileData.hero} />
        <WorkExperienceSection content={workExperience} />

        <section id="systems" className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{profileData.systemsUi.header.title}</h2>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:opacity-80">
              {viewAllLabel} →
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projectsData.map((project) => (
              <article key={project.name} className="neon-panel p-5">
                <p className="project-subtitle text-xs font-semibold uppercase tracking-[0.12em]">{project.subtitle}</p>
                <h3 className="mt-3 text-lg font-bold">{project.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <li key={tag} className="neon-badge">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <ContactSection content={profileData.contact} />
      </div>
    </PageShell>
  );
}
