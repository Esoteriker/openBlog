import type { SectionHeaderContent } from "@/data/profile";

type SectionHeadingProps = {
  content: SectionHeaderContent;
};

export function SectionHeading({ content }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-2 animate-fadeUp">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">{content.eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{content.title}</h2>
      <p className="line-clamp-2 text-base leading-relaxed text-ink/64">{content.description}</p>
    </div>
  );
}
