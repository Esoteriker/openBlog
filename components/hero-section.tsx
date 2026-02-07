"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProfileData } from "@/data/profile";

type HeroSectionProps = {
  content: ProfileData["hero"];
};

type TypingPhase = "typing" | "holdTyped" | "deleting" | "holdDeleted";

const TYPE_SPEED_MS = 72;
const DELETE_SPEED_MS = 48;
const HOLD_TYPED_MS = 1300;
const HOLD_DELETED_MS = 320;

export function HeroSection({ content }: HeroSectionProps) {
  const titles = content.typingTitles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [phase, setPhase] = useState<TypingPhase>("typing");

  const longestTitle = titles.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
  const primaryHref = content.ctas.primary.href.startsWith("#") ? "/projects" : content.ctas.primary.href;

  useEffect(() => {
    if (!titles.length) {
      return;
    }

    const fullText = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing") {
      if (visibleText.length < fullText.length) {
        timeout = setTimeout(() => {
          setVisibleText(fullText.slice(0, visibleText.length + 1));
        }, TYPE_SPEED_MS);
      } else {
        setPhase("holdTyped");
      }
    } else if (phase === "holdTyped") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_TYPED_MS);
    } else if (phase === "deleting") {
      if (visibleText.length > 0) {
        timeout = setTimeout(() => {
          setVisibleText(fullText.slice(0, visibleText.length - 1));
        }, DELETE_SPEED_MS);
      } else {
        setPhase("holdDeleted");
      }
    } else {
      timeout = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setPhase("typing");
      }, HOLD_DELETED_MS);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [phase, titleIndex, titles, visibleText]);

  return (
    <section id="about" className="hero-shell glass-panel p-6 sm:p-9">
      <div className="relative z-10 animate-fadeUp">
        <div className="grid items-start gap-7 md:grid-cols-[1fr_auto]">
          <div className="space-y-3">
            <h1
              className="relative text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
              aria-label={titles[titleIndex] ?? ""}
            >
              <span className="invisible">{longestTitle}</span>
              <span aria-hidden className="absolute inset-0">
                <span className="neon-text-gradient">{visibleText}</span>
                <span className="typing-caret" />
              </span>
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-ink/82 sm:text-lg">{content.positioningStatement}</p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border/70 bg-white/95 shadow-[0_0_16px_rgb(var(--accent)/0.12)] sm:h-24 sm:w-24">
              <Image
                src="/avatar.svg"
                alt="Haidong Xu avatar"
                fill
                sizes="(min-width: 640px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 pt-1">
          <a href={primaryHref} className="neon-button-primary">
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
