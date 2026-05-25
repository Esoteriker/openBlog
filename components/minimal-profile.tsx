"use client";

import type { Locale, ProfileData } from "@/data/profile";

type MinimalProfileProps = {
  locale: Locale;
  profileData: ProfileData;
};

const minimalCopyByLocale: Record<
  Locale,
  {
    label: string;
    headline: string;
    capabilities: string[];
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  }
> = {
  en: {
    label: "Minimal profile",
    headline: "I build reliable AI product workflows across full-stack systems.",
    capabilities: [
      "Product UI with TypeScript, Next.js, Angular, and data visualization.",
      "Backend APIs with Java/Python services, async jobs, and clear contracts.",
      "RAG/LLM integration with retries, fallbacks, observability, and production debugging."
    ],
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn"
  },
  zh: {
    label: "极简介绍",
    headline: "我把 AI 能力做成可靠的全栈产品流程。",
    capabilities: [
      "用 TypeScript、Next.js、Angular 和数据可视化交付产品界面。",
      "设计 Java/Python 后端 API、异步任务和清晰的系统契约。",
      "集成 RAG/LLM 流程，并处理重试、回退、观测与生产调试。"
    ],
    emailLabel: "邮件",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn"
  },
  de: {
    label: "Minimalprofil",
    headline: "Ich baue verlässliche AI-Produktflows über Full-Stack-Systeme.",
    capabilities: [
      "Product UI mit TypeScript, Next.js, Angular und Datenvisualisierung.",
      "Backend APIs mit Java/Python Services, Async-Jobs und klaren Verträgen.",
      "RAG/LLM-Integration mit Retries, Fallbacks, Observability und Production Debugging."
    ],
    emailLabel: "E-Mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn"
  }
};

export function MinimalProfile({ locale, profileData }: MinimalProfileProps) {
  const copy = minimalCopyByLocale[locale];
  const email = profileData.contact.channels.find((item) => item.href.startsWith("mailto:"));
  const linkedin = profileData.contact.channels.find((item) => item.label.toLowerCase() === "linkedin");

  return (
    <main className="minimal-shell">
      <section className="minimal-card" aria-label={copy.label}>
        <div className="minimal-orbit" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl">
          <p className="minimal-kicker">{copy.label}</p>
          <h1 className="mt-5 text-5xl font-black leading-none tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {profileData.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profileData.title}</p>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-ink sm:text-4xl">{copy.headline}</p>

          <div className="minimal-capability-grid">
            {copy.capabilities.map((item) => (
              <p key={item} className="minimal-capability">
                {item}
              </p>
            ))}
          </div>

          <div className="minimal-actions">
            {email ? (
              <a href={email.href} className="neon-button-primary">
                {copy.emailLabel}
              </a>
            ) : null}
            <a href={profileData.github} target="_blank" rel="noreferrer" className="neon-button-secondary">
              {copy.githubLabel}
            </a>
            {linkedin ? (
              <a href={linkedin.href} target="_blank" rel="noreferrer" className="neon-button-secondary">
                {copy.linkedinLabel}
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
