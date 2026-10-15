export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 border-ink py-3 ${className}`}>
      <div className="marquee flex w-max gap-8 whitespace-nowrap font-mono text-sm font-medium uppercase tracking-wider">
        {row.map((t, i) => <span key={i} className="flex items-center gap-8">{t}<span aria-hidden>✦</span></span>)}
      </div>
    </div>
  );
}
