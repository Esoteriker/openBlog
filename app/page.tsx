"use client";

import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PageShell } from "@/components/page-shell";
import { ShowcaseThumbnail } from "@/components/showcase-thumbnail";
import { useLocale } from "@/components/locale-provider";
import { blogPostsByLocale } from "@/data/blog-posts";
import { profileDataByLocale, type Locale } from "@/data/profile";
import { projectsDataByLocale } from "@/data/projects";
import type { PreviewVariant } from "@/data/showcase-pages";

const projectPreviewVariants: PreviewVariant[] = ["knowledge", "api", "product"];

const projectCopyByLocale: Record<
  Locale,
  {
    title: string;
    summary: string;
    githubLabel: string;
    liveLabel: string;
  }
> = {
  en: {
    title: "Public GitHub Projects",
    summary: "Only projects with public repository links are shown here.",
    githubLabel: "GitHub",
    liveLabel: "Live"
  },
  zh: {
    title: "公开 GitHub 项目",
    summary: "这里只展示能找到公开仓库链接的真实项目。",
    githubLabel: "GitHub",
    liveLabel: "在线"
  },
  de: {
    title: "Public GitHub Projects",
    summary: "Hier erscheinen nur Projekte mit öffentlichen Repository-Links.",
    githubLabel: "GitHub",
    liveLabel: "Live"
  }
};

export default function HomePage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const projectCopy = projectCopyByLocale[locale];
  const projectsData = projectsDataByLocale[locale].slice(0, 3).map((project, index) => ({
    ...project,
    variant: projectPreviewVariants[index] ?? "systems"
  }));
  const latestPosts = blogPostsByLocale[locale].slice(0, 2);
  const latestTitle = locale === "zh" ? "最近写作" : locale === "de" ? "Neueste Beiträge" : "Recent Writing";
  const blogLabel = locale === "zh" ? "去博客" : locale === "de" ? "Zum Blog" : "Read blog";

  return (
    <PageShell>
      <div className="space-y-12">
        <HeroSection content={profileData.hero} />

        <section id="systems" className="project-stage scroll-mt-24 p-5 sm:p-7 lg:p-8">
          <div className="space-y-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-black tracking-tight text-ink sm:text-5xl">{projectCopy.title}</h2>
              <p className="text-base leading-relaxed text-ink/64">{projectCopy.summary}</p>
            </div>

            <div className="project-repo-grid">
              {projectsData.map((project, index) => {
                return (
                  <article key={project.name} className="project-repo-card">
                    <ShowcaseThumbnail variant={project.variant} className="project-repo-thumb" />
                    <div className="mt-4 min-w-0">
                      <span className="text-xs font-black text-accent">0{index + 1}</span>
                      <h3 className="mt-2 text-xl font-bold text-ink">{project.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/62">{project.oneLineValue}</p>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <li key={tag} className="neon-badge">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-button">
                          {projectCopy.githubLabel}
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-button project-link-button-muted">
                          {projectCopy.liveLabel}
                        </a>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{latestTitle}</h2>
            <Link href="/blog" className="text-sm font-semibold text-accent hover:opacity-80">
              {blogLabel} →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Link key={post.title} href={post.href} className="writing-card neon-panel flex gap-4 p-3 transition hover:-translate-y-0.5">
                <ShowcaseThumbnail variant={post.variant} className="writing-thumb" />
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-lg font-bold text-ink">{post.title}</h3>
                  <p className="mt-2 text-sm text-ink/52">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection content={profileData.contact} />
      </div>
    </PageShell>
  );
}
