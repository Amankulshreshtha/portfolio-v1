export function Marquee({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  // list twice so translateX(-50%) loops seamlessly
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-sage/80 py-3" role="presentation">
      <div className={`flex w-max gap-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {loop.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.18em] text-ink"
          >
            {item}
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M5 0 L10 9 H0 Z" fill="var(--color-flag)" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
