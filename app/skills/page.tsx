"use client";

import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";

export default function SkillsPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];

  const proficiency = profileData.stack.groups.flatMap((group, groupIndex) =>
    group.items.slice(0, 3).map((item, itemIndex) => ({
      name: item,
      value: Math.max(55, 92 - groupIndex * 8 - itemIndex * 5)
    }))
  );

  return (
    <PageShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.stack.header.eyebrow}</p>
          <h1 className="text-4xl font-extrabold text-ink">{profileData.stack.header.title}</h1>
          <p className="text-ink/72">{profileData.stack.header.description}</p>
        </header>

        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <article className="neon-panel p-6">
            <h2 className="text-2xl font-bold">Skill Proficiency</h2>
            <ul className="mt-4 space-y-3">
              {proficiency.map((item) => (
                <li key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-sm text-ink/85">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-canvas/70">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" style={{ width: `${item.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-2xl font-bold">Tech Categories</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {profileData.stack.groups.map((group) => (
                <div key={group.category} className="rounded-lg border border-border/75 bg-canvas/45 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{group.category}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="neon-badge">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
