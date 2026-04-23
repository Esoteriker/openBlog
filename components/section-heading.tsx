import type { SectionHeaderContent } from "@/data/profile";

type SectionHeadingProps = {
  content: SectionHeaderContent;
};

export function SectionHeading({ content }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl space-y-2 animate-fadeUp">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">{content.eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">{content.title}</h2>
      <p className="text-base leading-relaxed text-ink/70">{content.description}</p>
    </div>
  );
}
