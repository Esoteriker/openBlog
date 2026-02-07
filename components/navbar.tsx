import type { NavItem, ProfileData } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

type NavbarProps = {
  name: string;
  title: string;
  navItems: NavItem[];
  githubUrl: string;
  githubLabel: string;
  themeLabels: ProfileData["labels"]["theme"];
};

export function Navbar({ name, title, navItems, githubUrl, githubLabel, themeLabels }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/55 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-tight text-ink">{name}</p>
            <p className="truncate text-xs text-ink/70">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border/90 bg-canvas/65 px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent"
            >
              {githubLabel}
            </a>
            <ThemeToggle
              lightLabel={themeLabels.light}
              darkLabel={themeLabels.dark}
              loadingLabel={themeLabels.loading}
            />
          </div>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="text-ink/82 transition hover:text-accent" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
