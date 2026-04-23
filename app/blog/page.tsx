"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Pagination } from "@/components/pagination";
import { ShowcaseThumbnail } from "@/components/showcase-thumbnail";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

const POSTS_PER_PAGE = 3;

export default function BlogPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const showcase = showcasePagesByLocale[locale].blog;

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof showcase.tabs)[number]["key"]>("all");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return showcase.posts.filter((post) => {
      const tabMatch = activeTab === "all" || post.category === activeTab;
      const query = `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLowerCase();
      const searchMatch = !search || query.includes(search.toLowerCase());
      return tabMatch && searchMatch;
    });
  }, [activeTab, search, showcase.posts]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visiblePosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const categoryCounts = showcase.tabs
    .filter((tab) => tab.key !== "all")
    .map((tab) => ({
      label: tab.label,
      count: showcase.posts.filter((post) => post.category === tab.key).length
    }));

  const hotTags = Array.from(new Set(showcase.posts.flatMap((post) => post.tags))).slice(0, 12);
  const recentPosts = showcase.posts.slice(0, 4);

  return (
    <PageShell>
      <div className="grid gap-8 xl:grid-cols-[1.7fr_0.72fr]">
        <section className="space-y-6">
          <header className="space-y-2 pr-28">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {locale === "zh" ? "我的博客" : profileData.insights.header.title}
            </h1>
            <p className="text-lg text-ink/72">
              {locale === "zh" ? "记录学习与成长的点滴" : profileData.insights.header.description}
            </p>
          </header>

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-3">
              {showcase.tabs.map((tab) => {
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.key);
                      setPage(1);
                    }}
                    className={`dashboard-tab px-6 py-4 text-base font-semibold ${active ? "dashboard-tab-active" : ""}`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full max-w-sm">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink/44">⌕</span>
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
                placeholder={showcase.searchPlaceholder}
                className="dashboard-search w-full py-4 pl-11 pr-4 text-base"
              />
            </div>
          </div>

          <div className="space-y-4">
            {visiblePosts.map((post) => (
              <article key={post.title} className="neon-panel flex flex-col gap-5 p-4 sm:flex-row sm:items-stretch sm:p-5">
                <ShowcaseThumbnail variant={post.variant} className="h-36 w-full sm:h-auto sm:w-[220px]" />
                <div className="flex flex-1 flex-col">
                  <h2 className="text-3xl font-bold tracking-tight text-ink">{post.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink/72">{post.summary}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li key={tag} className="neon-badge px-3 py-1.5">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 text-sm text-ink/56">
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <a href={post.href} className="font-semibold text-accent transition hover:opacity-80">
                      {showcase.openLabel} →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </section>

        <aside className="space-y-4">
          <div className="neon-panel p-5">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{showcase.categoriesTitle}</h3>
            <ul className="mt-4 space-y-3">
              {categoryCounts.map((item) => (
                <li key={item.label} className="flex items-center justify-between rounded-xl border border-border/65 bg-canvas/28 px-4 py-3 text-sm text-ink/78">
                  <span>{item.label}</span>
                  <span className="sidebar-stat px-2.5 py-1 text-xs text-ink/68">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="neon-panel p-5">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{showcase.hotTagsTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {hotTags.map((tag) => (
                <li key={tag} className="neon-badge px-3 py-1.5">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="neon-panel p-5">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{showcase.recentTitle}</h3>
            <div className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <article key={post.title} className="flex items-center gap-3 rounded-2xl border border-border/65 bg-canvas/28 p-3">
                  <ShowcaseThumbnail variant={post.variant} className="h-16 w-16 flex-none rounded-xl" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{post.title}</p>
                    <p className="mt-1 text-xs text-ink/56">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="neon-panel p-5">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{showcase.subscribeTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/68">{showcase.subscribeDescription}</p>
            <input className="dashboard-search mt-4 w-full px-4 py-4 text-base" placeholder={showcase.subscribePlaceholder} />
            <button type="button" className="neon-button-primary mt-4 w-full justify-center">
              {showcase.subscribeButton}
            </button>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
