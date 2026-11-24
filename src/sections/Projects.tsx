import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LaptopFrame, PhoneFrame } from '../components/DeviceFrame'
import { PhoneDeck } from '../components/PhoneDeck'
import { ProjectModal } from '../components/ProjectModal'
import { SectionHead } from '../components/SectionHead'
import { PROJECTS, type Project } from '../constants/projects'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])
  return matches
}

function Visual({ p }: { p: Project }) {
  if (p.frame === 'phone' && p.images.length > 1) {
    return (
      <div className="h-72 pt-6">
        <PhoneDeck images={p.images.slice(0, 3)} name={p.name} />
      </div>
    )
  }
  const Frame = p.frame === 'phone' ? PhoneFrame : LaptopFrame
  return (
    <div className="flex h-72 items-center justify-center">
      <Frame src={p.images[0]} alt={`${p.name} preview`} className={p.frame === 'phone' ? 'w-32' : 'w-full max-w-lg'} />
    </div>
  )
}

function ProjectCard({ p, i, className, onOpen }: { p: Project; i: number; className: string; onOpen: (p: Project) => void }) {
  return (
    <article
      aria-label={`${i + 1} of ${PROJECTS.length}: ${p.name}`}
      className={`group grid shrink-0 items-center gap-6 rounded-2xl border border-sage bg-plate p-6 sm:p-8 md:grid-cols-[1.1fr_1fr] ${className}`}
    >
      <Visual p={p} />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest">
          Plate {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          {p.period && ` · ${p.period}`}
        </p>
        <h3 className="mt-2 font-display text-3xl font-extrabold">{p.name}</h3>
        <p className="font-semibold text-water">{p.kind}</p>
        <p className="mt-3 leading-relaxed">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((s) => (
            <li key={s} className="rounded-full border border-ink/40 px-2.5 py-0.5 text-xs">
              {s}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onOpen(p)}
          className="mt-6 rounded-full bg-ink px-5 py-2 font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          {p.images.length ? `View ${p.images.length} screens` : 'View details'}
        </button>
      </div>
    </article>
  )
}

// Wide screens: the section pins and vertical scrolling slides the whole row of cards sideways.
function PinnedTrack({ onOpen }: { onOpen: (p: Project) => void }) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const el = track.current
    if (!el) return
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    // 1px of vertical scroll = 1px of sideways travel, plus one screen for the pin itself
    <div ref={wrap} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHead index="04" title="Projects" elevation="2,400 – 3,000 m" />
        </div>
        <motion.div ref={track} style={{ x }} className="flex w-max gap-6 pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pr-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} onOpen={onOpen} className="w-[min(70vw,820px)]" />
          ))}
        </motion.div>
        <div className="mx-auto mt-8 w-full max-w-6xl px-5" aria-hidden="true">
          <div className="h-1 bg-sage/50">
            <motion.div className="h-1 origin-left bg-flag" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Phones, and reduced-motion users: an ordinary swipeable row, no scroll hijacking.
function SwipeTrack({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead index="04" title="Projects" elevation="2,400 – 3,000 m" />
      <div tabIndex={0} aria-label="Projects, scroll sideways" className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} onOpen={onOpen} className="w-[85vw] max-w-md snap-center" />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const reduce = useReducedMotion()
  const wide = useMediaQuery('(min-width: 768px)')
  return (
    <section id="projects">
      {wide && !reduce ? <PinnedTrack onOpen={setOpen} /> : <SwipeTrack onOpen={setOpen} />}
      <ProjectModal project={open} onClose={close} />
    </section>
  )
}
