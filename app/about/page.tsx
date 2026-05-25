"use client";

import Image from "next/image";
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
      <div className="space-y-5">
        <section className="about-stage p-6 sm:p-8 lg:p-10">
          <div className="relative z-10 grid min-h-[520px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="max-w-4xl space-y-6">
              <p className="inline-flex rounded-full border border-border/70 bg-canvas/35 px-3 py-1 text-xs font-semibold text-ink/66 backdrop-blur">
                {showcase.location}
              </p>
              <h1 className="text-5xl font-black leading-none tracking-tight text-ink sm:text-6xl lg:text-8xl">
                {profileData.name}
                <span className="mt-3 block neon-text-gradient">{profileData.title.split("|")[0]?.trim()}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">{profileData.tagline}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="about-social"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="about-id-card">
              <div className="about-avatar-ring">
                <Image src="/avatar.svg" alt={profileData.name} fill sizes="220px" className="object-cover" priority />
              </div>
              <div className="mt-5 space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Live Profile</p>
                <p className="text-2xl font-bold text-ink">{profileData.name}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
