import type { ProfileData } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

type ContactSectionProps = {
  content: ProfileData["contact"];
};

export function ContactSection({ content }: ContactSectionProps) {
  const primaryChannel = content.channels.find((item) => item.label.toLowerCase() === "email");

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      <SectionHeading content={content.header} />
      <div className="glass-panel p-6 sm:p-8">
        <p className="max-w-3xl text-base leading-relaxed text-ink/86">{content.invitation}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {primaryChannel ? (
            <a href={primaryChannel.href} className="neon-button-primary">
              {primaryChannel.value}
            </a>
          ) : null}

          {content.channels
            .filter((item) => item.label.toLowerCase() !== "email")
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
