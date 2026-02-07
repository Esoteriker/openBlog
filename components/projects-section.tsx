import type { ProfileData } from "@/data/profile";
import type { Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";

type ProjectsSectionProps = {
  header: ProfileData["systemsUi"]["header"];
  labels: ProfileData["systemsUi"]["labels"];
  projects: Project[];
  buttonLabels: ProfileData["systemsUi"]["buttons"];
};

export function ProjectsSection({ header, labels, projects, buttonLabels }: ProjectsSectionProps) {
  return (
    <section id="systems" className="space-y-8 scroll-mt-24">
      <SectionHeading content={header} />
      <div className="grid gap-5">
        {projects.map((project) => {
          const hasCaseStudy = Boolean(project.caseStudyUrl);

          return (
            <article key={project.name} className="neon-panel p-5 sm:p-6">
              <div className="space-y-5">
                <header className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
                  <p className="text-sm font-medium text-[#8b5cf6]">{project.subtitle}</p>
                </header>

                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.problemContext}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/84">{project.problemContext}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.architectureStrategy}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/84">{project.architectureStrategy}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.scalabilityApproach}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/84">{project.scalabilityApproach}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.securityConsiderations}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/84">{project.securityConsiderations}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.architectureHighlights}
                      </p>
                      <ul className="space-y-2 text-sm text-ink/84">
                        {project.architectureHighlights.map((item) => (
                          <li key={item} className="rounded-md border border-border/80 bg-canvas/45 px-3 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {labels.techStack}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.techStack.map((item) => (
                          <li key={item} className="neon-badge">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <footer className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="neon-button-secondary"
                  >
                    {buttonLabels.github}
                  </a>

                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neon-button-secondary">
                      {buttonLabels.live}
                    </a>
                  ) : null}

                  {hasCaseStudy ? (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="neon-button-primary"
                    >
                      {buttonLabels.caseStudy}
                    </a>
                  ) : (
                    <span className="neon-button-secondary cursor-not-allowed opacity-65">
                      {buttonLabels.caseStudySoon}
                    </span>
                  )}
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
