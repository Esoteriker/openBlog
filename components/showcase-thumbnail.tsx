import type { ReactNode } from "react";
import type { PreviewVariant } from "@/data/showcase-pages";

type ShowcaseThumbnailProps = {
  variant: PreviewVariant;
  className?: string;
};

function frame(children: ReactNode, className = "") {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border/70 bg-[#111315] shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] ${className}`}>
      {children}
    </div>
  );
}

export function ShowcaseThumbnail({ variant, className = "" }: ShowcaseThumbnailProps) {
  switch (variant) {
    case "knowledge":
      return frame(
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_28%,rgba(20,184,166,0.34),transparent_26%),radial-gradient(circle_at_72%_72%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(135deg,#07111f,#10233a_56%,#0a121d)]" />
          <div className="absolute inset-4 rounded-xl border border-white/10 bg-white/[0.035]" />
          <div className="absolute left-[8%] top-[13%] h-[74%] w-[54%] rounded-xl border border-cyan-300/22 bg-[#0b1b2c] shadow-[0_0_32px_rgba(34,211,238,0.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:22px_22px]" />
            <div className="absolute left-[18%] top-[20%] h-8 w-12 rounded-[45%] border border-cyan-200/35 bg-cyan-300/12" />
            <div className="absolute left-[46%] top-[32%] h-10 w-16 rounded-[45%] border border-amber-200/35 bg-amber-300/12" />
            <div className="absolute left-[30%] top-[58%] h-9 w-14 rounded-[45%] border border-emerald-200/35 bg-emerald-300/12" />
            {[["24%", "36%"], ["58%", "45%"], ["44%", "68%"]].map(([left, top]) => (
              <span key={`${left}-${top}`} className="absolute h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.75)]" style={{ left, top }} />
            ))}
          </div>
          <div className="absolute right-[7%] top-[13%] h-[74%] w-[28%] rounded-xl border border-white/12 bg-white/[0.06] p-[5%]">
            <div className="h-2 w-2/3 rounded-full bg-white/70" />
            <div className="mt-3 space-y-2">
              {[72, 48, 86].map((width) => (
                <div key={width} className="h-2 rounded-full bg-cyan-200/35" style={{ width: `${width}%` }} />
              ))}
            </div>
            <div className="absolute bottom-[12%] left-[14%] right-[14%] flex h-[34%] items-end gap-1.5">
              {[42, 78, 58, 92].map((height) => (
                <span key={height} className="flex-1 rounded-t bg-gradient-to-t from-amber-300/65 to-cyan-200/70" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </>,
        className
      );
    case "api":
      return frame(
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.28),transparent_24%),radial-gradient(circle_at_82%_70%,rgba(59,130,246,0.22),transparent_30%),linear-gradient(135deg,#07111d,#0d1f2e)]" />
          <div className="absolute inset-y-0 left-0 w-[18%] border-r border-white/10 bg-white/[0.045]">
            <div className="mx-auto mt-[18%] h-2 w-1/2 rounded-full bg-emerald-300" />
            <div className="mx-auto mt-[18%] h-8 w-8 rounded-lg border border-white/12 bg-white/8" />
            <div className="mx-auto mt-2 h-8 w-8 rounded-lg border border-white/12 bg-white/8" />
          </div>
          <div className="absolute left-[23%] right-[6%] top-[12%]">
            <div className="h-2.5 w-[34%] rounded-full bg-white/70" />
            <div className="mt-4 grid grid-cols-[1fr_0.72fr] gap-3">
              <div className="space-y-2.5">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="rounded-xl border border-white/12 bg-white/[0.055] p-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-emerald-300/22" />
                      <div className="h-2 w-1/2 rounded-full bg-white/34" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-amber-200/25 bg-amber-300/10 p-3">
                <div className="h-2 w-2/3 rounded-full bg-amber-200/70" />
                <div className="mt-4 h-12 rounded-lg border border-amber-200/25 bg-black/14" />
                <div className="mt-3 flex gap-2">
                  <div className="h-6 flex-1 rounded-full bg-emerald-300/60" />
                  <div className="h-6 flex-1 rounded-full bg-white/12" />
                </div>
              </div>
            </div>
          </div>
        </>,
        className
      );
    case "product":
      return frame(
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(251,191,36,0.28),transparent_26%),radial-gradient(circle_at_76%_70%,rgba(56,189,248,0.22),transparent_28%),linear-gradient(135deg,#f9fbff,#dfeaf4)] dark:bg-[linear-gradient(135deg,#0b1325,#101c34)]" />
          <div className="absolute left-[8%] top-[13%] h-[74%] w-[38%] rounded-[1.35rem] border border-black/10 bg-white/82 p-3 shadow-xl dark:border-white/10 dark:bg-white/8">
            <div className="h-2 w-1/2 rounded-full bg-slate-300/80" />
            <div className="mt-4 h-14 rounded-xl bg-gradient-to-br from-sky-200 to-cyan-100 dark:from-sky-400/22 dark:to-cyan-300/12" />
            <div className="mt-3 space-y-2">
              {[72, 54, 82].map((width) => (
                <div key={width} className="h-2 rounded-full bg-slate-300/70 dark:bg-white/20" style={{ width: `${width}%` }} />
              ))}
            </div>
          </div>
          <div className="absolute right-[8%] top-[18%] h-[64%] w-[42%] rounded-2xl border border-black/10 bg-white/70 p-3 shadow-lg dark:border-white/10 dark:bg-white/7">
            <div className="flex items-center justify-between">
              <div className="h-2 w-1/3 rounded-full bg-slate-400/70 dark:bg-white/40" />
              <div className="h-7 w-7 rounded-full bg-rose-300/75 shadow-[0_0_16px_rgba(251,113,133,0.4)]" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-11 rounded-xl bg-amber-200/65 dark:bg-amber-300/16" />
              <div className="h-11 rounded-xl bg-sky-200/75 dark:bg-sky-300/16" />
            </div>
            <div className="mt-3 flex gap-2">
              <div className="h-6 flex-1 rounded-full bg-slate-900/80 dark:bg-white/70" />
              <div className="h-6 flex-1 rounded-full border border-slate-300/80 dark:border-white/18" />
            </div>
          </div>
        </>,
        className
      );
    case "observability":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#071120,#111d35)]" />
          <div className="absolute inset-x-0 top-0 h-9 border-b border-white/7 bg-white/3" />
          <div className="absolute inset-x-5 top-14 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-16 rounded-2xl border border-white/8 bg-white/5" />
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex gap-3">
            <div className="h-28 flex-1 rounded-2xl border border-cyan-400/20 bg-cyan-400/10" />
            <div className="h-28 w-32 rounded-2xl border border-violet-400/20 bg-violet-400/10" />
          </div>
        </>,
        className
      );
    case "architecture":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1120,#111b34)]" />
          <div className="absolute left-5 top-5 right-5 h-2 rounded-full bg-white/14" />
          <div className="absolute inset-x-5 top-12 grid gap-3">
            {[34, 46, 58, 30, 65, 40].map((width, index) => (
              <div key={index} className="h-2 rounded-full bg-violet-300/35" style={{ width: `${width}%` }} />
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/7 bg-white/4 p-4">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-10 rounded-lg bg-white/6" />
              ))}
            </div>
          </div>
        </>,
        className
      );
    case "workflow":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff,#eef5ff)] dark:bg-[linear-gradient(180deg,#09101c,#102038)]" />
          <div className="absolute left-10 top-1/2 h-1 w-[70%] -translate-y-1/2 bg-cyan-300/55 dark:bg-cyan-400/25" />
          {[
            { left: "10%", top: "50%" },
            { left: "32%", top: "34%" },
            { left: "52%", top: "50%" },
            { left: "72%", top: "32%" },
            { left: "86%", top: "50%" }
          ].map((item, index) => (
            <div
              key={index}
              className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-white shadow-sm dark:bg-cyan-500/14"
              style={{ left: item.left, top: item.top }}
            />
          ))}
        </>,
        className
      );
    case "signals":
      return frame(
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.38),transparent_28%),linear-gradient(180deg,#1d1246,#090f1d)]" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[28px] border-4 border-fuchsia-400/70 shadow-[0_0_40px_rgba(236,72,153,0.45)]" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-fuchsia-300/85" />
        </>,
        className
      );
    case "spring":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#122117,#0b1410)]" />
          <div className="absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-2xl bg-lime-400/25" />
          <div className="absolute left-28 top-1/2 -translate-y-1/2 text-4xl font-bold text-lime-400/90">Spring</div>
        </>,
        className
      );
    case "docker":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#061827,#0b1630)]" />
          <div className="absolute left-1/2 top-[58%] h-14 w-28 -translate-x-1/2 rounded-b-[45%] rounded-t-2xl bg-sky-400/85" />
          <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 gap-2">
            {[28, 18, 18, 18].map((size, index) => (
              <div key={index} className="rounded-md bg-sky-300/90" style={{ height: "18px", width: `${size}px` }} />
            ))}
          </div>
        </>,
        className
      );
    case "systems":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b101a,#18111f)]" />
          <div className="absolute inset-x-5 top-5 space-y-2">
            {[54, 82, 66, 74, 48].map((width, index) => (
              <div key={index} className="h-2 rounded-full bg-white/18" style={{ width: `${width}%` }} />
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-violet-400/15 bg-violet-500/8 p-3">
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className="h-10 rounded-lg bg-violet-400/16" />
              ))}
            </div>
          </div>
        </>,
        className
      );
    case "charts":
    default:
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#081322,#0f1831)]" />
          <div className="absolute inset-x-4 top-5 h-20 rounded-2xl border border-white/6 bg-white/5" />
          <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-20 rounded-2xl border border-white/6 bg-white/5" />
            ))}
          </div>
        </>,
        className
      );
  }
}
