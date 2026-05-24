"use client";

import { Footer } from "@/components/footer";
import { LanguageToggle } from "@/components/language-toggle";
import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const linkedin = profileData.contact.channels.find((item) => item.label.toLowerCase() === "linkedin")?.href ?? profileData.github;
  const email = profileData.contact.channels.find((item) => item.href.startsWith("mailto:"))?.href ?? "mailto:esoteriker.dev@gmail.com";

  return (
    <div className="min-h-screen text-ink">
      <Navbar
        locale={locale}
        name={profileData.name}
        title={profileData.title}
        githubUrl={profileData.github}
        githubLabel={profileData.labels.navbarGithub}
        linkedinUrl={linkedin}
        emailHref={email}
        footerNote={profileData.footer.note}
        languageLabel={profileData.labels.language}
        themeLabels={profileData.labels.theme}
      />

      <div className="pointer-events-none fixed right-4 top-4 z-50 hidden items-center gap-3 lg:flex">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-border/70 bg-canvas/68 px-2 py-2 shadow-[0_1px_2px_rgb(var(--shadow-rgb)/0.1)] backdrop-blur-xl">
          <LanguageToggle label={profileData.labels.language} />
          <ThemeToggle
            lightLabel={profileData.labels.theme.light}
            darkLabel={profileData.labels.theme.dark}
            loadingLabel={profileData.labels.theme.loading}
          />
        </div>
      </div>

      <div className="lg:pl-[220px]">
        <main className="mx-auto w-full max-w-[1560px] px-4 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-12">{children}</main>
        <Footer name={profileData.name} note={profileData.footer.note} />
      </div>
    </div>
  );
}
