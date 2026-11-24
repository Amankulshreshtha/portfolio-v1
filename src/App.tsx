import { MotionConfig } from 'motion/react'
import { AltitudeRail } from './components/AltitudeRail'
import { CompassCursor } from './components/CompassCursor'
import { Nav } from './components/Nav'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <CompassCursor />
      <AltitudeRail />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </MotionConfig>
  )
}
