type FooterProps = {
  name: string;
  note: string;
};

export function Footer({ name, note }: FooterProps) {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-2 px-4 text-xs text-ink/55 sm:px-8 lg:px-10">
        <p>{name}</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
