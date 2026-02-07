import { SectionHeading } from "@/components/section-heading";
import type { ProfileData } from "@/data/profile";

type AboutSectionProps = {
  content: ProfileData["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-5 xl:grid-cols-[1.1fr_1.3fr]">
        <article className="neon-panel p-6">
          <p className="text-base leading-relaxed text-ink/84">{content.intro}</p>
        </article>
        <article className="grid gap-5 md:grid-cols-2">
          <div className="neon-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{content.capabilitiesTitle}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/84">
              {content.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="neon-panel p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{content.workingStyleTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/84">
              {content.workingStyle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <article className="neon-panel p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{content.timelineTitle}</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {content.timeline.map((entry) => (
            <div key={entry.label} className="rounded-md border border-border/80 bg-canvas/45 px-3 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{entry.label}</p>
              <p className="mt-2 text-sm text-ink/84">{entry.text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
