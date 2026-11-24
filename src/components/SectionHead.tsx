import { motion } from 'motion/react'

export function SectionHead({ index, title, elevation }: { index: string; title: string; elevation: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex items-end justify-between gap-4 border-b border-ink pb-3"
    >
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      <p className="font-mono text-[11px] uppercase tracking-widest text-ink/80">
        Sheet {index} · {elevation}
      </p>
    </motion.div>
  )
}
