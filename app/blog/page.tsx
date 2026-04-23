"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";

export default function BlogPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const posts = profileData.insights.items;

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("all");

  const statuses = ["all", ...Array.from(new Set(posts.map((item) => item.status)))];
  const tags = Array.from(new Set(posts.flatMap((item) => item.summary.split(" ")))).slice(0, 12);

  const filteredPosts = useMemo(() => {
    return posts.filter((item) => {
      const statusMatch = activeStatus === "all" || item.status === activeStatus;
      const queryMatch = !search || `${item.title} ${item.summary}`.toLowerCase().includes(search.toLowerCase());
      return statusMatch && queryMatch;
    });
  }, [posts, activeStatus, search]);

  return (
    <PageShell>
      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.7fr]">
        <section className="space-y-5">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.insights.header.eyebrow}</p>
            <h1 className="text-4xl font-extrabold text-ink">{profileData.insights.header.title}</h1>
            <p className="text-ink/72">{profileData.insights.header.description}</p>
          </header>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                    activeStatus === status ? "border-accent/65 bg-accent/20 text-accent" : "border-border/80 text-ink/80"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search article..."
              className="w-full max-w-sm rounded-lg border border-border/80 bg-canvas/70 px-3 py-2 text-sm text-ink outline-none transition focus:border-accent/70"
            />
          </div>

          <div className="space-y-3">
            {filteredPosts.map((item, index) => (
              <article key={item.title} className="neon-panel p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="inline-flex rounded-full border border-border/80 bg-canvas/55 px-2 py-1 text-[11px] text-ink/70">{item.status}</p>
                    <h2 className="mt-2 text-2xl font-bold text-ink">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.summary}</p>
                  </div>
                  <p className="text-xs text-ink/55">0{index + 1}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
                  <span>{profileData.labels.readInsight}</span>
                  <a href={item.href} className="text-accent hover:opacity-80">
                    Open →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="neon-panel p-5">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              {statuses.filter((status) => status !== "all").map((status) => (
                <li key={status} className="flex items-center justify-between">
                  <span>{status}</span>
                  <span className="rounded-md bg-canvas/70 px-2 py-0.5 text-xs">{posts.filter((p) => p.status === status).length}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="neon-panel p-5">
            <h3 className="text-lg font-bold">Hot Tags</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="neon-badge">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="neon-panel p-5">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="mt-2 text-sm text-ink/75">Get updates when I publish new notes.</p>
            <input className="mt-3 w-full rounded-lg border border-border/80 bg-canvas/70 px-3 py-2 text-sm" placeholder="Email" />
            <button type="button" className="neon-button-primary mt-3 w-full text-sm">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
