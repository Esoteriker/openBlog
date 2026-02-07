type FooterProps = {
  name: string;
  note: string;
};

export function Footer({ name, note }: FooterProps) {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-xs text-ink/68 sm:px-6 lg:px-8">
        <p>{name}</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
