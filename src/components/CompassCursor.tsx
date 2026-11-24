import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

// A compass that trails the pointer: the needle swings toward the direction of travel,
// and the dial grows and turns orange over anything clickable. Fine pointers only.
export function CompassCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 })
  const heading = useMotionValue(0)
  const needle = useSpring(heading, { stiffness: 120, damping: 14 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    let lastX = 0
    let lastY = 0
    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      x.set(e.clientX)
      y.set(e.clientY)
      if (Math.hypot(dx, dy) > 3) {
        // degrees clockwise from north; unwrap so the needle takes the short way round
        const next = (Math.atan2(dx, -dy) * 180) / Math.PI
        const cur = heading.get()
        let delta = (next - cur) % 360
        if (delta > 180) delta -= 360
        if (delta < -180) delta += 360
        heading.set(cur + delta)
      }
      setActive(!!(e.target as Element | null)?.closest('a,button,[role=button]'))
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [enabled, x, y, heading])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x: sx, y: sy }}
    >
      <motion.svg
        width="56"
        height="56"
        viewBox="-28 -28 56 56"
        className="-ml-7 -mt-7 drop-shadow-sm"
        animate={{ scale: active ? 1.35 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <circle r="24" fill="var(--color-paper)" fillOpacity="0.15" stroke={active ? 'var(--color-flag)' : 'var(--color-ink)'} strokeWidth="1.5" />
        {/* fixed cardinal ticks */}
        {[0, 90, 180, 270].map((a) => (
          <line key={a} y1="-24" y2="-19" stroke="var(--color-ink)" strokeWidth="1.5" transform={`rotate(${a})`} />
        ))}
        <text y="-11" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="var(--font-mono)" fill="var(--color-ink)">
          N
        </text>
        <motion.g style={{ rotate: needle }}>
          <path d="M0 -15 L4 0 H-4 Z" fill="var(--color-flag)" />
          <path d="M0 15 L4 0 H-4 Z" fill="var(--color-water)" />
        </motion.g>
        <circle r="2" fill="var(--color-paper)" stroke="var(--color-ink)" />
      </motion.svg>
    </motion.div>
  )
}
