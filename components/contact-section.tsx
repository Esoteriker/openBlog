import type { ProfileData } from "@/data/profile";

type ContactSectionProps = {
  content: ProfileData["contact"];
};

export function ContactSection({ content }: ContactSectionProps) {
  const primaryChannel = content.channels.find((item) => item.href.startsWith("mailto:"));

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="glass-panel flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">{content.header.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{content.header.title}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/64">{content.invitation}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primaryChannel ? (
            <a href={primaryChannel.href} className="neon-button-primary">
              {primaryChannel.value}
            </a>
          ) : null}

          {content.channels
            .filter((item) => !item.href.startsWith("mailto:"))
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="neon-button-secondary"
              >
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
