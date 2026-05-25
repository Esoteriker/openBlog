"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ShowcaseThumbnail } from "@/components/showcase-thumbnail";
import { useLocale } from "@/components/locale-provider";
import { findBlogPost } from "@/data/blog-posts";

export default function BlogPostPage() {
  const { locale } = useLocale();
  const params = useParams<{ slug: string }>();
  const post = findBlogPost(locale, params.slug);
  const backLabel = locale === "zh" ? "返回博客" : locale === "de" ? "Zurück zum Blog" : "Back to blog";
  const sourceLabel = locale === "zh" ? "来源链接" : locale === "de" ? "Quellen" : "Sources";

  if (!post) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl space-y-5">
          <Link href="/blog" className="text-sm font-semibold text-accent">
            {backLabel} →
          </Link>
          <h1 className="text-3xl font-bold text-ink">{locale === "zh" ? "文章不存在" : "Post not found"}</h1>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl space-y-8">
        <Link href="/blog" className="text-sm font-semibold text-accent">
          ← {backLabel}
        </Link>

        <header className="space-y-5">
          <ShowcaseThumbnail variant={post.variant} className="h-64 w-full" />
          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink/48">
              {post.date} · {post.readTime}
            </p>
            <h1 className="text-4xl font-black tracking-tight text-ink sm:text-5xl">{post.title}</h1>
            <p className="text-lg leading-relaxed text-ink/68">{post.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="neon-badge">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8 border-y border-border/55 py-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink/70">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <footer className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink/48">{sourceLabel}</h2>
          <div className="flex flex-wrap gap-2">
            {post.sourceLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="project-link-button">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </article>
    </PageShell>
  );
}
