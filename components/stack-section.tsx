import type { ProfileData } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

type StackSectionProps = {
  content: ProfileData["stack"];
};

export function StackSection({ content }: StackSectionProps) {
  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.groups.map((group) => (
          <article key={group.category} className="neon-panel p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="neon-badge">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
