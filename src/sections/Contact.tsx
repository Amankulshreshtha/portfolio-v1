import { motion } from 'motion/react'
import { Contours } from '../components/Contours'
import { PROFILE } from '../constants/profile'

const LINKS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, wide: true },
  { label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref },
  { label: 'LinkedIn', value: 'aman-kul', href: PROFILE.linkedin },
  { label: 'GitHub', value: 'Amankulshreshtha', href: PROFILE.github },
]

const YEAR = new Date().getFullYear()

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-water text-paper">
      <Contours className="absolute inset-0 h-full w-full opacity-40" rings={9} stroke="var(--color-water-soft)" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs uppercase tracking-[0.2em]">
          Summit · 3,100 m
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-none tracking-tight sm:text-7xl"
        >
          Have a product to ship? Let’s talk.
        </motion.h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {LINKS.map((l) => (
            <li key={l.label} className={'wide' in l ? 'sm:col-span-3' : undefined}>
              <a
                href={l.href}
                {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block rounded-xl border border-white/25 p-5 transition-colors hover:bg-paper hover:text-ink"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">{l.label}</span>
                <span className="mt-1 block break-all font-display text-xl font-bold">{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-flag px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Download resume ↗
        </a>
        <p className="mt-16 border-t border-white/25 pt-5 font-mono text-[11px] uppercase tracking-widest opacity-80">
          © {YEAR} {PROFILE.name} · {PROFILE.location}
        </p>
      </div>
    </section>
  )
}
