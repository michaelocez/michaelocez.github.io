import './App.css'

import { useEffect, useRef } from 'react'
import type { CSSProperties, PointerEventHandler } from 'react'

const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/michaelocez' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michael-huang-2a55572ba/',
  },
]

function createStars(count: number) {
  let seed = 329
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return seed / 4294967296
  }

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    style: {
      '--star-x': `${(2 + random() * 96).toFixed(2)}%`,
      '--star-y': `${(3 + random() * 94).toFixed(2)}%`,
      '--star-size': `${(0.8 + random() * 1.4).toFixed(2)}px`,
      '--star-delay': `${(-random() * 10).toFixed(2)}s`,
      '--star-duration': `${(5 + random() * 7).toFixed(2)}s`,
    } as CSSProperties,
  }))
}

const stars = createStars(40)

function App() {
  const pointerFrame = useRef<number | null>(null)
  const pointerPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    return () => {
      if (pointerFrame.current !== null) {
        cancelAnimationFrame(pointerFrame.current)
      }
    }
  }, [])

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType !== 'mouse') return

    pointerPosition.current = { x: event.clientX, y: event.clientY }
    if (pointerFrame.current !== null) return

    const container = event.currentTarget
    pointerFrame.current = requestAnimationFrame(() => {
      const { x, y } = pointerPosition.current
      container.style.setProperty('--pointer-x', `${x}px`)
      container.style.setProperty('--pointer-y', `${y}px`)
      pointerFrame.current = null
    })
  }

  return (
    <div
      className="site-shell min-h-screen overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      <div className="star-field" aria-hidden="true">
        {stars.map((star) => (
          <span className="star" key={star.id} style={star.style} />
        ))}
      </div>
      <div className="pointer-glow" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a className="wordmark" href="#top" aria-label="Portfolio home">
          MH
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 sm:gap-8">
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="nav-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero-grid mx-auto grid w-full max-w-[1180px] gap-14 px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-24 lg:pb-32 lg:pt-32">
          <div className="max-w-[790px]">
            <h1 className="hero-title hero-reveal">
              Hi, I&apos;m <span>Michael.</span>
            </h1>

            <p className="hero-copy hero-reveal max-w-[650px]">
              I&apos;m a developer with a background in Computer Science and
              Statistics, building full-stack applications, interactive
              experiences, and data-driven projects.
            </p>

            <div className="hero-actions hero-reveal flex flex-wrap gap-3">
              <a
                className="primary-link"
                href="https://github.com/michaelocez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                className="secondary-link"
                href="mailto:michaelhuang329@gmail.com"
              >
                Contact me
              </a>
            </div>
          </div>

          <aside className="hero-meta hero-reveal" aria-label="Profile summary">
            <div>
              <p className="meta-label">Based in</p>
              <p className="meta-value">New Zealand</p>
            </div>
            <div>
              <p className="meta-label">Focus</p>
              <p className="meta-value">Full-stack development &amp; data</p>
            </div>
            <div>
              <p className="meta-label">Currently</p>
              <p className="meta-value">Open to graduate opportunities</p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App
