"use client";

import Image from "next/image";
import type { ProfileData } from "@/data/profile";

type HeroSectionProps = {
  content: ProfileData["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const primaryHref = content.ctas.primary.href.startsWith("#") ? "/projects" : content.ctas.primary.href;
  const telemetry = content.telemetry.slice(0, 4);

  return (
    <section id="about" className="hero-shell home-hero px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="relative z-10 flex min-h-[500px] flex-col justify-between gap-10 lg:min-h-[620px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="max-w-4xl space-y-6 animate-fadeUp">
            <p className="inline-flex rounded-full border border-border/70 bg-canvas/35 px-3 py-1 text-xs font-semibold text-ink/68 backdrop-blur">
              {content.systemRole}
            </p>
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

          <div className="hero-visual-card min-h-[320px] p-5">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-alt))]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-cool))]" />
              </div>
              <span className="text-xs font-semibold text-ink/48">LIVE STACK</span>
            </div>

            <div className="mt-6 grid grid-cols-[88px_1fr] gap-5">
              <div className="avatar-shell relative h-24 w-24 overflow-hidden rounded-2xl border border-border/70 shadow-[0_12px_28px_rgb(var(--shadow-rgb)/0.12)]">
                <Image
                  src="/avatar.svg"
                  alt="Haidong Xu avatar"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-3">
                {telemetry.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-ink/42">0{index + 1}</span>
                    <span className="h-px flex-1 bg-border/80" />
                    <span className="text-xs font-semibold text-ink/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex h-24 items-end gap-3 border-t border-border/60 pt-6">
              {[44, 72, 52, 90, 62].map((height, index) => (
                <span
                  key={height}
                  className="signal-bar flex-1 rounded-t-md bg-[linear-gradient(180deg,rgb(var(--accent-alt)/0.8),rgb(var(--accent)/0.72))]"
                  style={{ height: `${height}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-border/60 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/52 sm:grid-cols-4">
          {telemetry.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
