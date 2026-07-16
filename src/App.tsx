import './App.css'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEventHandler } from 'react'
import ProjectCard from './components/ProjectCard'
import type { Project } from './components/ProjectCard'

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

const projects: Project[] = [
  {
    number: '01',
    category: 'Full-stack development',
    title: 'Game Review Platform',
    description:
      'A full-stack game review application with a component-based React frontend and a separate REST API for reviews and user data.',
    highlight: 'One product, developed across two focused repositories.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Express', 'MySQL'],
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/michaelocez/game-review-frontend',
      },
      {
        label: 'API',
        href: 'https://github.com/michaelocez/game-review-api',
      },
    ],
    featured: true,
  },
  {
    number: '03',
    category: 'Statistical analysis',
    title: 'Car Colour Analysis',
    description:
      'A real-world study comparing vehicle colour observations from university car parks with New Zealand fleet-registration proportions.',
    highlight: 'Applied chi-square testing and communicated the findings in R.',
    technologies: ['R', 'Chi-square testing', 'Data collection', 'Reporting'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/michaelocez/STAT312-Car-Colours-Project',
      },
    ],
  },
  {
    number: '04',
    category: 'Game development',
    title: 'Cart Filler Game',
    description:
      'A co-developed desktop game with modular Java packages, custom media, automated tests, and a reproducible build process.',
    highlight: 'Built collaboratively with testing and maintainability in mind.',
    technologies: ['Java', 'JavaFX', 'Gradle', 'JUnit'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/michaelocez/cart-filler-game',
      },
    ],
  },
]

const technicalProfile = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'R', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & data',
    items: ['React', 'Node.js', 'Express', 'MySQL', 'JavaFX'],
  },
  {
    label: 'Engineering',
    items: ['REST APIs', 'Automated testing', 'CI/CD', 'Gradle'],
  },
  {
    label: 'Workflow',
    items: ['Git', 'GitHub Actions', 'GitHub Copilot', 'OpenAI Codex'],
  },
]

function App() {
  const pointerFrame = useRef<number | null>(null)
  const pointerPosition = useRef({ x: 0, y: 0 })
  const [showRobloxContact, setShowRobloxContact] = useState(false)

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
      className="site-shell min-h-screen overflow-x-hidden"
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
                href="#work"
              >
                Explore my work <span aria-hidden="true">{'\u2193'}</span>
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

        <section
          className="projects-section mx-auto w-full max-w-[1180px] px-6 py-20 md:px-10 md:py-28"
          id="work"
        >
          <p className="section-kicker">What I&apos;ve done</p>
          <h2 className="section-title">Projects</h2>

          <div className="project-grid">
            <ProjectCard project={projects[0]} />

            <article className="project-card project-card--private">
              <div className="project-card__topline">
                <span>02</span>
                <span>Independent game development</span>
              </div>

              <div>
                <h3 className="project-card__title">
                  Published Roblox Experience
                </h3>
                <p className="project-card__description">
                  Designed, scripted, and published a game that
                  attracted more than 2,000 players during active development.
                </p>
                <p className="project-card__highlight">
                  Managed the full development cycle, player feedback, and a
                  persistent leaderboard.
                </p>
              </div>

              <ul
                className="project-tags"
                aria-label="Published Roblox Experience technologies"
              >
                <li>Lua</li>
                <li>Roblox Studio</li>
                <li>DataStores</li>
                <li>Live operations</li>
              </ul>

              <div className="private-project-action">
                <button
                  type="button"
                  className="project-disclosure"
                  aria-expanded={showRobloxContact}
                  aria-controls="roblox-project-contact"
                  onClick={() => setShowRobloxContact((visible) => !visible)}
                >
                  {showRobloxContact ? 'Hide details' : 'Request project details'}
                </button>

                {showRobloxContact && (
                  <div
                    className="private-project-note"
                    id="roblox-project-contact"
                  >
                    <p>
                      I keep this project unlisted publicly, but I&apos;m happy
                      to share more context upon request.
                    </p>
                    <a href="mailto:michaelhuang329@gmail.com?subject=Roblox%20project%20enquiry">
                      Email me about this project{' '}
                      <span aria-hidden="true">{'\u2192'}</span>
                    </a>
                  </div>
                )}
              </div>
            </article>

            {projects.slice(1).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section
          className="about-section mx-auto w-full max-w-[1180px] px-6 py-20 md:px-10 md:py-28"
          id="about"
        >
          <p className="section-kicker">Background</p>
          <h2 className="section-title">About</h2>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I&apos;m a recent Computer Science graduate with a minor in
                Statistics from the University of Canterbury. My studies and
                projects have given me experience across full-stack development,
                interactive software, and statistical analysis.
              </p>
            </div>

            <div className="technical-profile">
              <h3>Technical profile</h3>
              <div className="skill-groups">
                {technicalProfile.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <ul aria-label={group.label}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
