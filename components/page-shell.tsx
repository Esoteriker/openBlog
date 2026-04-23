"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];

  return (
    <div className="min-h-screen bg-[#030917] text-ink">
      <Navbar
        locale={locale}
        name={profileData.name}
        title={profileData.title}
        githubUrl={profileData.github}
        githubLabel={profileData.labels.navbarGithub}
        languageLabel={profileData.labels.language}
        themeLabels={profileData.labels.theme}
      />
      <div className="lg:pl-[220px]">
        <main className="mx-auto w-full max-w-[1500px] px-4 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</main>
        <Footer name={profileData.name} note={profileData.footer.note} />
      </div>
    </div>
  );
}
