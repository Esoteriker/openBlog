"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

function buildRadarPoints(values: number[], radius: number, cx: number, cy: number) {
  return values
    .map((value, index) => {
      const angle = (Math.PI * 2 * index) / values.length - Math.PI / 2;
      const x = cx + Math.cos(angle) * radius * (value / 100);
      const y = cy + Math.sin(angle) * radius * (value / 100);
      return `${x},${y}`;
    })
    .join(" ");
}

function buildChartPoints(values: number[], width: number, height: number, topPadding: number) {
  return values
    .map((value, index) => {
      const x = (width / Math.max(values.length - 1, 1)) * index;
      const y = height - (value / 100) * (height - topPadding);
      return `${x},${y}`;
    })
    .join(" ");
}

export default function SkillsPage() {
  const { locale } = useLocale();
  const profileData = profileDataByLocale[locale];
  const showcase = showcasePagesByLocale[locale].skills;
  const [activeTab, setActiveTab] = useState<(typeof showcase.tabs)[number]["key"]>("all");

  const visibleTagGroups = useMemo(() => {
    return activeTab === "all" ? showcase.tagGroups : showcase.tagGroups.filter((group) => group.key === activeTab);
  }, [activeTab, showcase.tagGroups]);

  const radarPoints = buildRadarPoints(showcase.radarValues, 112, 140, 132);
  const studyPoints = buildChartPoints(showcase.trendStudy, 420, 240, 24);
  const improvePoints = buildChartPoints(showcase.trendImprove, 420, 240, 24);

  return (
    <PageShell>
      <div className="space-y-8">
        <header className="space-y-2 pr-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/85">{profileData.stack.header.eyebrow}</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{profileData.stack.header.title}</h1>
          <p className="text-lg text-ink/72">{profileData.stack.header.description}</p>
        </header>

        <section className="flex flex-wrap gap-3">
          {showcase.tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`dashboard-tab inline-flex items-center gap-3 px-6 py-4 text-base font-semibold ${
                  active ? "dashboard-tab-active" : ""
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <article className="neon-panel p-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.radarTitle}</h2>
            <div className="mt-6 flex justify-center">
              <svg viewBox="0 0 280 280" className="h-[300px] w-full max-w-[320px]">
                {[36, 56, 76, 96, 112].map((radius) => (
                  <polygon
                    key={radius}
                    points={buildRadarPoints([100, 100, 100, 100, 100, 100], radius, 140, 132)}
                    fill="none"
                    stroke="rgb(var(--border) / 0.38)"
                  />
                ))}
                {showcase.radarAxes.map((label, index) => {
                  const angle = (Math.PI * 2 * index) / showcase.radarAxes.length - Math.PI / 2;
                  const x = 140 + Math.cos(angle) * 126;
                  const y = 132 + Math.sin(angle) * 126;
                  return (
                    <g key={label}>
                      <line x1="140" y1="132" x2={x} y2={y} stroke="rgb(var(--border) / 0.38)" />
                      <text x={x} y={y} fill="rgb(var(--ink) / 0.76)" fontSize="12" textAnchor="middle">
                        {label}
                      </text>
                    </g>
                  );
                })}
                <polygon
                  points={radarPoints}
                  fill="rgb(var(--accent) / 0.18)"
                  stroke="rgb(var(--accent) / 0.9)"
                  strokeWidth="2"
                />
                {showcase.radarValues.map((value, index) => {
                  const angle = (Math.PI * 2 * index) / showcase.radarValues.length - Math.PI / 2;
                  const x = 140 + Math.cos(angle) * 112 * (value / 100);
                  const y = 132 + Math.sin(angle) * 112 * (value / 100);
                  return <circle key={`${value}-${index}`} cx={x} cy={y} r="4.5" fill="rgb(var(--accent) / 1)" />;
                })}
              </svg>
            </div>
            <div className="mt-4 border-t border-border/50 pt-4 text-sm text-ink/56">
              {locale === "zh" ? "综合能力评估" : "Overall capability evaluation"}
            </div>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.proficiencyTitle}</h2>
            <ul className="mt-6 space-y-5">
              {showcase.proficiency.map((item) => (
                <li key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-lg text-ink/86">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-canvas/60">
                    <div className={`h-3 rounded-full bg-gradient-to-r ${item.tone}`} style={{ width: `${item.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border/50 pt-4 text-sm text-ink/56">
              {locale === "zh" ? "基于项目经验与学习投入的综合评估" : "Weighted by project experience and learning focus"}
            </div>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.trendTitle}</h2>
            <div className="mt-4 flex items-center justify-end gap-6 text-sm text-ink/66">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                {showcase.trendStudyLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                {showcase.trendImproveLabel}
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-canvas/30 p-4">
              <svg viewBox="0 0 420 240" className="h-[280px] w-full">
                {[0, 25, 50, 75, 100].map((tick) => {
                  const y = 240 - (tick / 100) * 216;
                  return (
                    <g key={tick}>
                      <line x1="0" y1={y} x2="420" y2={y} stroke="rgb(var(--border) / 0.24)" />
                      <text x="0" y={y - 4} fill="rgb(var(--ink) / 0.42)" fontSize="11">
                        {tick}
                      </text>
                    </g>
                  );
                })}
                <polyline points={studyPoints} fill="none" stroke="#3b82f6" strokeWidth="3" />
                <polyline points={improvePoints} fill="none" stroke="#4ade80" strokeWidth="3" />
                {showcase.trendStudy.map((value, index) => {
                  const x = (420 / Math.max(showcase.trendStudy.length - 1, 1)) * index;
                  const y = 240 - (value / 100) * 216;
                  return <circle key={`study-${index}`} cx={x} cy={y} r="4" fill="#3b82f6" />;
                })}
                {showcase.trendImprove.map((value, index) => {
                  const x = (420 / Math.max(showcase.trendImprove.length - 1, 1)) * index;
                  const y = 240 - (value / 100) * 216;
                  return <circle key={`improve-${index}`} cx={x} cy={y} r="4" fill="#4ade80" />;
                })}
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-ink/56">
              {showcase.trendLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <div className="mt-6 border-t border-border/50 pt-4 text-sm text-ink/56">{showcase.footerNote}</div>
          </article>
        </section>

        <section className="neon-panel p-7">
          <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.tagTitle}</h2>
          <div className="mt-6 grid gap-6 xl:grid-cols-4">
            {visibleTagGroups.map((group) => (
              <article key={group.title} className="xl:border-r xl:border-border/45 xl:pr-6 last:xl:border-r-0">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl ${group.tone}`}>{group.icon}</span>
                  <h3 className="text-2xl font-bold text-ink">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {group.tags.map((tag) => (
                    <li key={tag} className="neon-badge px-4 py-2 text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
