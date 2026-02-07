import type { ProfileData } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

type WritingSectionProps = {
  content: ProfileData["insights"];
  readLabel: string;
};

export function WritingSection({ content, readLabel }: WritingSectionProps) {
  return (
    <section id="insights" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="grid gap-4 md:grid-cols-3">
        {content.items.map((item) => (
          <article key={item.title} className="neon-panel p-5">
            <p className="inline-flex rounded-full border border-border/90 bg-canvas/60 px-2 py-1 text-[11px] font-semibold text-ink/72">
              {item.status}
            </p>
            <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/82">{item.summary}</p>
            {item.href === "#" ? (
              <span className="mt-3 inline-flex text-sm font-semibold text-accent/66">{readLabel}</span>
            ) : (
              <a href={item.href} className="mt-3 inline-flex text-sm font-semibold text-accent transition hover:opacity-80">
                {readLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
