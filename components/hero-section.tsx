import type { ProfileData } from "@/data/profile";

type HeroSectionProps = {
  content: ProfileData["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const primaryHref = content.ctas.primary.href.startsWith("#") ? "/projects" : content.ctas.primary.href;
  const secondaryHref = content.ctas.secondary.href.startsWith("#") ? "/about" : content.ctas.secondary.href;

  return (
    <section className="hero-shell glass-panel p-6 sm:p-9">
      <div className="relative z-10 grid gap-8 animate-fadeUp lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-7">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
            {content.systemRole}
          </p>

          <div className="space-y-3">
            <h1 className="text-4xl font-black tracking-tight text-ink sm:text-6xl">
              {content.headlineLeading} <span className="neon-text-gradient">{content.headlineEmphasis}</span>{" "}
              {content.headlineTrailing}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-ink/82 sm:text-xl">{content.positioningStatement}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {content.telemetry.map((item) => (
              <span key={item} className="neon-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={primaryHref} className="neon-button-primary">
              {content.ctas.primary.label}
            </a>
            <a href={secondaryHref} className="neon-button-secondary">
              {content.ctas.secondary.label}
            </a>
          </div>
        </div>

        <aside className="neon-panel p-5" aria-label="Value highlights">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{content.highlightsTitle}</p>
          <ul className="mt-3 space-y-3 text-sm text-ink/84">
            {content.quickPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-lg border border-border/70 bg-[#060f22] p-4 font-mono text-xs text-ink/70">
            <p className="text-accent">const developer = {"{"}</p>
            <p className="pl-3">focus: &quot;AI Agent Platforms&quot;,</p>
            <p className="pl-3">stack: [&quot;Next.js&quot;, &quot;FastAPI&quot;, &quot;Neo4j&quot;],</p>
            <p className="pl-3">goal: &quot;Production-first systems&quot;</p>
            <p>{"};"}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
