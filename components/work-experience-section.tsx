import type { WorkExperienceSection } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";

type WorkExperienceSectionProps = {
  content: WorkExperienceSection;
};

export function WorkExperienceSection({ content }: WorkExperienceSectionProps) {
  const featuredItems = content.items.slice(0, 2);

  return (
    <section id="experience" className="space-y-5 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-4 lg:grid-cols-2">
        {featuredItems.map((item, index) => (
          <article key={item.name} className="neon-panel group relative overflow-hidden p-5 sm:p-6">
            <span className="absolute right-5 top-5 text-5xl font-bold text-ink/[0.035] transition group-hover:text-accent/10">
              0{index + 1}
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/80">{item.role.split("|")[0]?.trim()}</p>
            <h3 className="mt-4 max-w-xl text-xl font-bold tracking-tight text-ink sm:text-2xl">{item.name}</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/68">{item.impact}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tech.slice(0, 4).map((tag) => (
                <li key={tag} className="neon-badge">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
