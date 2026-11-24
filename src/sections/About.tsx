import { motion } from 'motion/react'
import { CountUp } from '../components/CountUp'
import { SectionHead } from '../components/SectionHead'
import { EDUCATION, PROFILE, STATS } from '../constants/profile'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead index="01" title="About" elevation="0 – 600 m" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xl leading-relaxed">{PROFILE.summary}</p>
          <p className="mt-5 text-lg leading-relaxed">
            Claude Code, Antigravity, Copilot/Cursor and ChatGPT/Gemini across the lifecycle, with me owning design and the final review.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest">{PROFILE.location}</p>
        </motion.div>
        <dl className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-t-2 border-ink pt-3">
              <dd className="font-display text-5xl font-extrabold text-water">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-widest">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-14 rounded-2xl border border-sage bg-plate p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/80">Education · {EDUCATION.years}</p>
        <h3 className="mt-2 font-display text-2xl font-bold">{EDUCATION.degree}</h3>
        <p>
          {EDUCATION.school}, {EDUCATION.place}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {EDUCATION.certifications.map((c) => (
            <li key={c} className="rounded-full border border-ink/40 px-3 py-1 text-sm">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
