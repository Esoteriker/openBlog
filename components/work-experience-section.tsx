import type { WorkExperienceSection } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";

type WorkExperienceSectionProps = {
  content: WorkExperienceSection;
};

export function WorkExperienceSection({ content }: WorkExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-5">
        {content.items.map((item) => (
          <article key={item.name} className="neon-panel p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/84">{item.context}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {content.labels.role}
                  </p>
                  <p className="text-sm text-ink/84">{item.role}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {content.labels.impact}
                  </p>
                  <p className="text-sm text-ink/84">{item.impact}</p>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2 text-sm text-ink/84">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-md border border-border/80 bg-canvas/45 px-3 py-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {item.tech.map((tag) => (
                    <li key={tag} className="neon-badge">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
