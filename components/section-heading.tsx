import type { SectionHeaderContent } from "@/data/profile";

type SectionHeadingProps = {
  content: SectionHeaderContent;
};

export function SectionHeading({ content }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3 animate-fadeUp">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{content.eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl">{content.title}</h2>
      <p className="text-sm leading-relaxed text-ink/80 sm:text-base">{content.description}</p>
    </div>
  );
}
