import type { ProfileData } from "@/data/profile";

type HeroSectionProps = {
  content: ProfileData["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero-shell glass-panel p-6 sm:p-9">
      <div className="relative z-10 space-y-7 animate-fadeUp">
        <p className="inline-flex rounded-full border border-border/90 bg-canvas/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/85">
          {content.systemRole}
        </p>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {content.headlineLeading} <span className="neon-text-gradient">{content.headlineEmphasis}</span>{" "}
            {content.headlineTrailing}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-ink/82 sm:text-lg">{content.positioningStatement}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {content.telemetry.map((item) => (
            <span key={item} className="neon-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a href={content.ctas.primary.href} className="neon-button-primary">
            {content.ctas.primary.label}
          </a>
          <a href={content.ctas.secondary.href} className="neon-button-secondary">
            {content.ctas.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
