import { useState } from 'react'
import { NAV, PROFILE } from '../constants/profile'

const LINKS = NAV.slice(1)

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-sage/70 bg-paper/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-5 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight">
            {PROFILE.initials}
            <span className="text-flag">.</span>
          </a>
          <ul className="hidden items-center gap-1 text-sm font-medium sm:flex">
            {LINKS.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="rounded-full px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold sm:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        {open && (
          <ul id="mobile-menu" className="mt-3 grid grid-cols-2 gap-2 border-t border-sage/70 pt-3 sm:hidden">
            {LINKS.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-plate px-4 py-3 font-semibold"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
