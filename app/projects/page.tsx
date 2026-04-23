"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { projectsDataByLocale } from "@/data/projects";

export default function ProjectsPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const projects = projectsDataByLocale[locale];

  const [activeTag, setActiveTag] = useState("all");
  const [search, setSearch] = useState("");

  const filterTags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags))).slice(0, 6)];

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const byTag = activeTag === "all" || project.tags.includes(activeTag);
      const bySearch =
        !search ||
        `${project.name} ${project.subtitle} ${project.oneLineValue} ${project.tags.join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase());
      return byTag && bySearch;
    });
  }, [projects, activeTag, search]);

  return (
    <PageShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.systemsUi.header.eyebrow}</p>
          <h1 className="text-4xl font-extrabold text-ink">{profileData.systemsUi.header.title}</h1>
          <p className="text-ink/72">{profileData.systemsUi.header.description}</p>
        </header>

        <section className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => {
              const active = tag === activeTag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                    active ? "border-accent/65 bg-accent/20 text-accent" : "border-border/80 text-ink/80 hover:border-accent/55"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="w-full max-w-sm rounded-lg border border-border/80 bg-canvas/70 px-3 py-2 text-sm text-ink outline-none transition focus:border-accent/70"
          />
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.name} className="neon-panel flex h-full flex-col p-5">
              <p className="text-xs text-indigo-300">{project.subtitle}</p>
              <h2 className="mt-2 text-xl font-bold text-ink">{project.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{project.oneLineValue}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="neon-badge">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-2 text-xs text-ink/72">
                <p>
                  <span className="font-semibold text-accent">{profileData.systemsUi.labels.problemContext}: </span>
                  {project.problemContext}
                </p>
              </div>

              <div className="mt-auto flex gap-3 pt-4">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="neon-button-primary text-xs">
                  GitHub
                </a>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neon-button-secondary text-xs">
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
