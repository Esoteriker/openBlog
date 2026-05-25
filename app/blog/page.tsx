"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ShowcaseThumbnail } from "@/components/showcase-thumbnail";
import { useLocale } from "@/components/locale-provider";
import { blogPostsByLocale } from "@/data/blog-posts";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

export default function BlogPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const showcase = showcasePagesByLocale[locale].blog;
  const posts = blogPostsByLocale[locale];

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="space-y-1 pr-20">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {locale === "zh" ? "博客" : profileData.insights.header.title}
          </h1>
          <p className="line-clamp-1 text-base text-ink/58">
            {locale === "zh" ? "一些工程笔记和产品思考。" : profileData.insights.header.description}
          </p>
        </header>

        <section className="blog-post-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-post-card">
              <ShowcaseThumbnail variant={post.variant} className="blog-post-cover" />
              <div className="mt-4 min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent/80">{post.category}</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-ink">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/62">{post.summary}</p>
                <p className="mt-4 text-sm text-ink/44">
                  {post.date} · {post.readTime}
                </p>
              </div>
              <Link href={post.href} className="project-link-button mt-5 w-fit">
                {showcase.openLabel} →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
