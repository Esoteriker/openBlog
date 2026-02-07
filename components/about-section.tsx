import type { ProfileData } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  content: ProfileData["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="neon-panel p-5">
          <p className="text-sm leading-relaxed text-ink/84 sm:text-base">{content.intro}</p>
        </article>
        <article className="grid gap-5">
          <div className="neon-panel p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{content.capabilitiesTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/84">
              {content.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="neon-panel p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{content.currentFocusTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/84">
              {content.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
