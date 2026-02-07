import type { ProfileData } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

type StrengthsSectionProps = {
  content: ProfileData["principles"];
};

export function StrengthsSection({ content }: StrengthsSectionProps) {
  return (
    <section id="principles" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <article key={item.title} className="module-card neon-panel p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">{item.module}</p>
            <h3 className="mt-2 text-base font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/82">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
