"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Pagination } from "@/components/pagination";
import { ShowcaseThumbnail } from "@/components/showcase-thumbnail";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

const PROJECTS_PER_PAGE = 4;

export default function ProjectsPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const showcase = showcasePagesByLocale[locale].projects;

  const [activeTab, setActiveTab] = useState<(typeof showcase.tabs)[number]["key"]>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return showcase.items.filter((project) => {
      const categoryMatch = activeTab === "all" || project.category === activeTab;
      const query = `${project.title} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
      const searchMatch = !search || query.includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeTab, search, showcase.items]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visibleProjects = filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  return (
    <PageShell>
      <div className="space-y-8">
        <header className="space-y-2 pr-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.systemsUi.header.eyebrow}</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {locale === "zh" ? "我的项目" : profileData.systemsUi.header.title}
          </h1>
          <p className="text-lg text-ink/72">{profileData.systemsUi.header.description}</p>
        </header>

        <section className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
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
              className="dashboard-search w-full pl-11 pr-4 py-4 text-base"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project) => (
            <article key={project.title} className="neon-panel flex h-full flex-col p-4">
              <ShowcaseThumbnail variant={project.variant} className="h-44 w-full" />
              <div className="mt-5 flex flex-1 flex-col">
                <h2 className="text-3xl font-bold tracking-tight text-ink">{project.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink/72">{project.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="neon-badge px-3 py-1.5">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-end gap-3 pt-6">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border/75 bg-canvas/45 text-sm font-semibold text-ink/84 transition hover:border-accent/60 hover:text-accent"
                      aria-label={showcase.githubLabel}
                    >
                      GH
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border/75 bg-canvas/45 text-sm font-semibold text-ink/84 transition hover:border-accent/60 hover:text-accent"
                      aria-label={showcase.liveLabel}
                    >
                      ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </PageShell>
  );
}
