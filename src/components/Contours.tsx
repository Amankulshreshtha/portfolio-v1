import { motion } from 'motion/react'

// Deterministic wobbly closed rings: no randomness, so SSR/StrictMode renders match.
function ring(cx: number, cy: number, r: number, seed: number, amount: number) {
  const pts = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2
    const wobble = 1 + amount * (0.12 * Math.sin(a * 3 + seed) + 0.07 * Math.sin(a * 5 - seed * 1.7))
    return [cx + Math.cos(a) * r * wobble * 1.25, cy + Math.sin(a) * r * wobble]
  })
  return `M${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L')} Z`
}

export function Contours({
  className = '',
  rings = 11,
  stroke = 'var(--color-sage)',
  wobble = 1,
  fit = 'slice',
}: {
  className?: string
  rings?: number
  stroke?: string
  // 0 = perfect ellipses, 1 = full terrain wobble
  wobble?: number
  fit?: 'slice' | 'meet'
}) {
  return (
    <svg viewBox="0 0 800 600" aria-hidden="true" className={className} fill="none" preserveAspectRatio={`xMidYMid ${fit}`}>
      {Array.from({ length: rings }, (_, i) => (
        <motion.path
          key={i}
          d={ring(400, 300, 30 + i * 26, i * 0.55, wobble)}
          stroke={stroke}
          strokeWidth={i % 5 === 0 ? 1.8 : 1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: i % 5 === 0 ? 0.9 : 0.55 }}
          transition={{ duration: 1.8, delay: i * 0.08, ease: 'easeOut' }}
        />
      ))}
    </svg>
  )
}
