import { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  const [showRobloxContact, setShowRobloxContact] = useState(false)

  return (
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
            <h3 className="project-card__title">Published Roblox Experience</h3>
            <p className="project-card__description">
              Designed, scripted, and published a game that attracted more than
              2,000 players during active development.
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
                  I keep this project unlisted publicly, but I&apos;m happy to
                  share more context upon request.
                </p>
                <a href="mailto:michaelhuang329@gmail.com?subject=Roblox%20project%20enquiry">
                  Email me about this project{' '}
                  <span aria-hidden="true">{'→'}</span>
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
  )
}

export default ProjectsSection
