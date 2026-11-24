import { motion } from 'motion/react'
import { SectionHead } from '../components/SectionHead'
import { FEATURED_SKILLS, SKILL_GROUPS } from '../constants/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead index="03" title="Skills" elevation="1,800 – 2,400 m" />
      <ul className="mb-12 flex flex-wrap gap-3">
        {FEATURED_SKILLS.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-full bg-water px-5 py-2.5 font-display text-lg font-bold text-paper"
          >
            {s}
          </motion.li>
        ))}
      </ul>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((g) => (
          <div key={g.label}>
            <h3 className="border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-widest">{g.label}</h3>
            <ul className="mt-3 space-y-1.5">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-flag" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
