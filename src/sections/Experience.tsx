import { motion } from 'motion/react'
import { SectionHead } from '../components/SectionHead'
import { EXPERIENCE } from '../constants/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead index="02" title="Experience" elevation="600 – 1,800 m" />
      <ol className="relative space-y-14 border-l border-sage pl-8">
        {EXPERIENCE.map((r) => (
          <motion.li
            key={r.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <svg className="absolute -left-[2.65rem] top-1" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2 L18 17 H2 Z" fill="var(--color-flag)" stroke="var(--color-paper)" strokeWidth="2" />
            </svg>
            <p className="font-mono text-[11px] uppercase tracking-widest">
              {r.period} · {r.elevation}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold">{r.title}</h3>
            <p className="font-semibold text-water">
              {r.company} <span className="font-normal text-ink">· {r.place}</span>
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-flag">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
