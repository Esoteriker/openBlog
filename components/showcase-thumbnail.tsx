import type { ReactNode } from "react";
import type { PreviewVariant } from "@/data/showcase-pages";

type ShowcaseThumbnailProps = {
  variant: PreviewVariant;
  className?: string;
};

function frame(children: ReactNode, className = "") {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border/70 bg-[#09111f] ${className}`}>
      {children}
    </div>
  );
}

export function ShowcaseThumbnail({ variant, className = "" }: ShowcaseThumbnailProps) {
  switch (variant) {
    case "knowledge":
      return frame(
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.24),transparent_28%),linear-gradient(180deg,#07111f,#0b1730)]" />
          <div className="absolute left-5 top-5 h-16 w-16 rounded-2xl border border-sky-400/40 bg-sky-500/12" />
          <div className="absolute left-28 top-8 h-3 w-28 rounded-full bg-white/70" />
          <div className="absolute left-28 top-16 h-2 w-40 rounded-full bg-white/25" />
          <div className="absolute bottom-7 left-6 right-6 flex gap-3">
            <div className="h-16 flex-1 rounded-xl border border-sky-400/20 bg-sky-400/12" />
            <div className="h-16 flex-1 rounded-xl border border-cyan-400/20 bg-cyan-400/12" />
            <div className="h-16 w-20 rounded-xl border border-blue-400/20 bg-blue-400/14" />
          </div>
        </>,
        className
      );
    case "api":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111e,#0e1b31)]" />
          <div className="absolute inset-y-0 left-0 w-16 border-r border-white/6 bg-white/3" />
          <div className="absolute left-5 top-5 h-2 w-6 rounded-full bg-emerald-400/80" />
          <div className="absolute left-24 top-6 h-3 w-24 rounded-full bg-white/75" />
          <div className="absolute left-24 top-16 right-6 space-y-3">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/4 px-4 py-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-400/25" />
                <div className="h-2 w-24 rounded-full bg-white/18" />
              </div>
            ))}
          </div>
        </>,
        className
      );
    case "product":
      return frame(
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fafc,#e5edf9)] dark:bg-[linear-gradient(180deg,#0b1325,#101c34)]" />
          <div className="absolute inset-x-0 top-0 h-10 border-b border-black/8 bg-white/70 dark:border-white/8 dark:bg-white/5" />
          <div className="absolute left-5 top-14 h-24 w-28 rounded-2xl bg-sky-300/35 dark:bg-sky-500/18" />
          <div className="absolute left-36 top-14 right-5 h-10 rounded-2xl bg-blue-200/55 dark:bg-blue-500/14" />
          <div className="absolute left-36 top-28 right-5 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-14 rounded-xl bg-white/70 shadow-sm dark:bg-white/8" />
            ))}
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
