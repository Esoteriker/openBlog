"use client";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { StackSection } from "@/components/stack-section";
import { StrengthsSection } from "@/components/strengths-section";
import { profileDataByLocale } from "@/data/profile";
import { projectsDataByLocale } from "@/data/projects";

export default function HomePage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const projectsData = projectsDataByLocale[locale];

  return (
    <div className="text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-canvas focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar
        name={profileData.name}
        title={profileData.title}
        navItems={profileData.navigation}
        githubUrl={profileData.github}
        githubLabel={profileData.labels.navbarGithub}
        languageLabel={profileData.labels.language}
        themeLabels={profileData.labels.theme}
      />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <HeroSection content={profileData.hero} />
        <AboutSection content={profileData.about} />
        <StrengthsSection content={profileData.principles} />
        <StackSection content={profileData.stack} />
        <ProjectsSection
          header={profileData.systemsUi.header}
          labels={profileData.systemsUi.labels}
          projects={projectsData}
          buttonLabels={profileData.systemsUi.buttons}
        />
        <ContactSection content={profileData.contact} />
      </main>
      <Footer name={profileData.name} note={profileData.footer.note} />
    </div>
  );
}
