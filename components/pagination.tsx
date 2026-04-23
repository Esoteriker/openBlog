type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-2">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="rounded-xl border border-border/80 bg-canvas/50 px-4 py-3 text-sm text-ink/70 transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
      >
        {"<"}
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
        const active = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-11 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
              active
                ? "border-accent/75 bg-accent text-white shadow-[0_10px_26px_rgb(var(--accent)/0.28)]"
                : "border-border/80 bg-canvas/45 text-ink/72 hover:border-accent/60 hover:text-accent"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-border/80 bg-canvas/50 px-4 py-3 text-sm text-ink/70 transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
      >
        {">"}
      </button>
    </div>
  );
}
