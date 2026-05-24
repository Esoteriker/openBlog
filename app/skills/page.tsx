"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { useLocale } from "@/components/locale-provider";
import { profileDataByLocale } from "@/data/profile";
import { showcasePagesByLocale } from "@/data/showcase-pages";

type SkillTabKey = "all" | "frontend" | "backend" | "tools";

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
  const [activeTab, setActiveTab] = useState<SkillTabKey>("all");

  const skillViewConfig: Record<
    SkillTabKey,
    {
      radarValues: number[];
      trendStudy: number[];
      trendImprove: number[];
      groupKeys: Array<"frontend" | "backend" | "tools" | "foundation">;
    }
  > = {
    all: {
      radarValues: showcase.radarValues,
      trendStudy: showcase.trendStudy,
      trendImprove: showcase.trendImprove,
      groupKeys: ["frontend", "backend", "tools", "foundation"]
    },
    frontend: {
      radarValues: [94, 62, 74, 82, 76, 72],
      trendStudy: [22, 34, 58, 68, 72, 81, 92],
      trendImprove: [10, 18, 40, 47, 52, 59, 66],
      groupKeys: ["frontend"]
    },
    backend: {
      radarValues: [58, 94, 82, 86, 72, 74],
      trendStudy: [30, 42, 66, 70, 63, 76, 88],
      trendImprove: [12, 24, 44, 48, 46, 58, 68],
      groupKeys: ["backend"]
    },
    tools: {
      radarValues: [52, 68, 72, 78, 84, 91],
      trendStudy: [18, 28, 46, 52, 58, 69, 79],
      trendImprove: [8, 16, 28, 34, 43, 54, 61],
      groupKeys: ["tools", "foundation"]
    }
  };

  const currentView = skillViewConfig[activeTab];

  const visibleTagGroups = useMemo(() => {
    return showcase.tagGroups.filter((group) => currentView.groupKeys.includes(group.key));
  }, [currentView.groupKeys, showcase.tagGroups]);

  const visibleMetrics = useMemo(() => {
    return activeTab === "all" ? showcase.proficiency.slice(0, 6) : showcase.proficiency.filter((item) => item.category === activeTab);
  }, [activeTab, showcase.proficiency]);

  const radarCenterX = 160;
  const radarCenterY = 150;
  const radarGridRadii = [34, 54, 74, 94, 110];
  const radarValueRadius = 110;
  const radarLabelRadius = 126;
  const radarPoints = buildRadarPoints(currentView.radarValues, radarValueRadius, radarCenterX, radarCenterY);
  const studyPoints = buildChartPoints(currentView.trendStudy, 420, 240, 24);
  const improvePoints = buildChartPoints(currentView.trendImprove, 420, 240, 24);

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
              <svg viewBox="0 0 320 300" className="h-[300px] w-full max-w-[340px]">
                {radarGridRadii.map((radius) => (
                  <polygon
                    key={radius}
                    points={buildRadarPoints([100, 100, 100, 100, 100, 100], radius, radarCenterX, radarCenterY)}
                    fill="none"
                    stroke="rgb(var(--border) / 0.38)"
                  />
                ))}
                {showcase.radarAxes.map((label, index) => {
                  const angle = (Math.PI * 2 * index) / showcase.radarAxes.length - Math.PI / 2;
                  const x = radarCenterX + Math.cos(angle) * radarLabelRadius;
                  const y = radarCenterY + Math.sin(angle) * radarLabelRadius;
                  return (
                    <g key={label}>
                      <line
                        x1={radarCenterX}
                        y1={radarCenterY}
                        x2={x}
                        y2={y}
                        stroke="rgb(var(--border) / 0.38)"
                      />
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
                {currentView.radarValues.map((value, index) => {
                  const angle = (Math.PI * 2 * index) / currentView.radarValues.length - Math.PI / 2;
                  const x = radarCenterX + Math.cos(angle) * radarValueRadius * (value / 100);
                  const y = radarCenterY + Math.sin(angle) * radarValueRadius * (value / 100);
                  return <circle key={`${value}-${index}`} cx={x} cy={y} r="4.5" fill="rgb(var(--accent) / 1)" />;
                })}
              </svg>
            </div>
            <div className="mt-4 border-t border-border/50 pt-4 text-sm text-ink/56">
              {activeTab === "all"
                ? locale === "zh"
                  ? "综合能力评估"
                  : "Overall capability evaluation"
                : locale === "zh"
                  ? `当前筛选：${showcase.tabs.find((tab) => tab.key === activeTab)?.label ?? ""}`
                  : `Current filter: ${showcase.tabs.find((tab) => tab.key === activeTab)?.label ?? ""}`}
            </div>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.proficiencyTitle}</h2>
            <ul className="mt-6 space-y-5">
              {visibleMetrics.map((item) => (
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
              {activeTab === "all"
                ? locale === "zh"
                  ? "基于项目经验与学习投入的综合评估"
                  : "Weighted by project experience and learning focus"
                : locale === "zh"
                  ? "只展示当前分类下的核心技能"
                  : "Showing core skills for the selected category"}
            </div>
          </article>

          <article className="neon-panel p-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{showcase.trendTitle}</h2>
            <div className="mt-4 flex items-center justify-end gap-6 text-sm text-ink/66">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
                {showcase.trendStudyLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                {showcase.trendImproveLabel}
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-border/60 bg-canvas/30 p-4">
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
                <polyline points={studyPoints} fill="none" stroke="rgb(var(--ink) / 0.62)" strokeWidth="3" />
                <polyline points={improvePoints} fill="none" stroke="#b0894a" strokeWidth="3" />
                {currentView.trendStudy.map((value, index) => {
                  const x = (420 / Math.max(currentView.trendStudy.length - 1, 1)) * index;
                  const y = 240 - (value / 100) * 216;
                  return <circle key={`study-${index}`} cx={x} cy={y} r="4" fill="rgb(var(--ink) / 0.62)" />;
                })}
                {currentView.trendImprove.map((value, index) => {
                  const x = (420 / Math.max(currentView.trendImprove.length - 1, 1)) * index;
                  const y = 240 - (value / 100) * 216;
                  return <circle key={`improve-${index}`} cx={x} cy={y} r="4" fill="#b0894a" />;
                })}
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-ink/56">
              {showcase.trendLabels.map((label, index) => (
                <span key={`${label}-${index}`}>{label}</span>
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
