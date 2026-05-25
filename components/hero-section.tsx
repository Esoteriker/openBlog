"use client";

import type { ProfileData } from "@/data/profile";

type HeroSectionProps = {
  content: ProfileData["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const primaryHref = content.ctas.primary.href;

  return (
    <section id="about" className="hero-shell home-hero px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
      <div className="hero-tech-stage" aria-hidden="true">
        <div className="hero-code-card hero-code-card-main">
          <div className="hero-window-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-code-lines">
            <span className="w-2/3" />
            <span className="w-full" />
            <span className="w-4/5" />
            <span className="w-1/2" />
          </div>
        </div>
        <div className="hero-code-card hero-code-card-small">
          <span>TSX</span>
          <span>CSS</span>
          <span>UI</span>
        </div>
        <div className="hero-node hero-node-one" />
        <div className="hero-node hero-node-two" />
        <div className="hero-node hero-node-three" />
      </div>
      <div className="relative z-10 flex min-h-[210px] items-center sm:min-h-[250px] lg:min-h-[300px]">
        <div className="max-w-5xl space-y-5 animate-fadeUp">
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span>{content.headlineLeading} </span>
            <span className="neon-text-gradient">{content.headlineEmphasis}</span>
            <span> {content.headlineTrailing}</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink/72 sm:text-lg">{content.positioningStatement}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={primaryHref} className="neon-button-primary">
              {content.ctas.primary.label}
            </a>
            <a href={content.ctas.secondary.href} className="neon-button-secondary">
              {content.ctas.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
