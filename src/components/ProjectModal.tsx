import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Project } from '../constants/projects'
import { LaptopFrame, PhoneFrame } from './DeviceFrame'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = project?.images.length ?? 0
  // reset the gallery position on every way out, so the next open starts at screen 1
  const close = useCallback(() => {
    setIdx(0)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!project) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight' && count > 1) setIdx((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft' && count > 1) setIdx((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, count, close])

  const Frame = project?.frame === 'phone' ? PhoneFrame : LaptopFrame
  const src = project?.images[idx]

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} gallery`}
            initial={{ y: 40, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-sage bg-paper p-5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {project.period && <p className="font-mono text-[11px] uppercase tracking-widest">{project.period}</p>}
                <h3 className="font-display text-3xl font-extrabold">{project.name}</h3>
                <p className="text-water font-semibold">{project.kind}</p>
              </div>
              <button ref={closeRef} onClick={close} className="rounded-full border-2 border-ink px-4 py-1.5 font-semibold hover:bg-ink hover:text-paper">
                Close
              </button>
            </div>
            <div className="mt-6 flex justify-center rounded-xl bg-plate p-6">
              <Frame
                src={src}
                alt={`${project.name} screenshot ${idx + 1} of ${count}`}
                className={project.frame === 'phone' ? 'w-56' : 'w-full max-w-2xl'}
              />
            </div>
            {count > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3">
                <button aria-label="Previous screenshot" onClick={() => setIdx((i) => (i - 1 + count) % count)} className="h-9 w-9 rounded-full border-2 border-ink hover:bg-ink hover:text-paper">
                  ←
                </button>
                <p className="font-mono text-xs tabular-nums" aria-live="polite">
                  {idx + 1} / {count}
                </p>
                <button aria-label="Next screenshot" onClick={() => setIdx((i) => (i + 1) % count)} className="h-9 w-9 rounded-full border-2 border-ink hover:bg-ink hover:text-paper">
                  →
                </button>
              </div>
            )}
            <p className="mt-6 leading-relaxed">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-ink/40 px-3 py-1 text-sm">
                  {s}
                </li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold underline decoration-flag decoration-2 underline-offset-4">
                Visit site ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
