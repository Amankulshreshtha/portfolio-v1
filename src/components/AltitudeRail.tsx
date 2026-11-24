import { motion, useScroll, useSpring, useTransform } from 'motion/react'

// The single vertical axis that rules the page: scroll progress as survey elevation.
export function AltitudeRail() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const elevation = useTransform(smooth, (v) => `${Math.round(v * 3100).toLocaleString('en-US')} m`)
  const top = useTransform(smooth, (v) => `calc(${v * 100}% - 8px)`)
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-y-24 left-3 z-30 hidden w-10 lg:block">
      <div className="absolute inset-y-0 left-4 w-px bg-sage/70" />
      <motion.div className="absolute left-4 top-0 w-px origin-top bg-flag" style={{ scaleY: smooth, height: '100%' }} />
      <motion.span
        className="absolute -left-1 font-mono text-[10px] tracking-tight text-ink tabular-nums"
        style={{ top }}
      >
        <motion.span className="rounded-sm bg-paper px-1">{elevation}</motion.span>
      </motion.span>
    </div>
  )
}
