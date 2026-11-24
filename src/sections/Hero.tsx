import { motion } from 'motion/react'
import profilePhoto from '../assets/images/profile.webp'
import { Contours } from '../components/Contours'
import { Marquee } from '../components/Marquee'
import { MARQUEE_ROWS, PROFILE } from '../constants/profile'
import { useGreeting } from '../hooks/useGreeting'

export function Hero() {
  const { greeting, time } = useGreeting()
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.4fr_1fr] md:pb-24 md:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em]"
          >
            {greeting} · <span className="tabular-nums">{time}</span> · {PROFILE.coords}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I’m {PROFILE.firstName}.
            <span className="mt-3 block text-[0.62em] leading-[1.05] text-water">{PROFILE.role}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed"
          >
            {PROFILE.tagline}. Python, Django, React, TypeScript and React Native, shipped to production and the app stores.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-flag px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Resume ↗
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Contact
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 90, damping: 14 }}
          className="mx-auto"
        >
          <div className="relative">
            {/* rings centred on the portrait and faded out toward the edges, so they never cross the text */}
            <Contours
              className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 sm:h-[600px] sm:w-[800px] [mask-image:radial-gradient(closest-side,#000_35%,transparent_100%)]"
              rings={9}
              wobble={0.35}
              fit="meet"
            />
            <img
              src={profilePhoto}
              alt={`Portrait of ${PROFILE.name}`}
              width={720}
              height={944}
              className="relative h-56 w-56 rounded-full border-2 border-ink object-cover object-[50%_22%] sm:h-72 sm:w-72"
            />
            <svg viewBox="0 0 240 240" className="pointer-events-none absolute inset-[-14px]" fill="none">
              <circle cx="120" cy="120" r="116" stroke="var(--color-sage)" strokeDasharray="3 5" />
            </svg>
            <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-water px-4 py-1 font-mono text-[11px] tracking-widest text-paper">
              BENCHMARK · 3,100 M
            </p>
          </div>
        </motion.div>
      </div>
      <div className="relative space-y-3 pb-2">
        <Marquee items={MARQUEE_ROWS[0]} />
        <Marquee items={MARQUEE_ROWS[1]} reverse />
      </div>
    </section>
  )
}
