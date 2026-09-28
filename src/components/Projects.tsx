import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/content/portfolio'
import { projects } from '@/content/portfolio'
import { useSpotlight } from '@/hooks/useSpotlight'
import { ImageModal } from './ImageModal'
import { Reveal } from './Reveal'
import { Section } from './Section'

interface GalleryState {
  project: Project
  index: number
}

const GALLERY_OPEN_DELAY_MS = 300

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project, delayMs: number) => void
}) {
  const hasGallery = project.images.length > 0
  const spotRef = useSpotlight<HTMLElement>()

  const handleClick = (event: ReactMouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) {
      return
    }
    if (hasGallery) {
      onOpen(project, GALLERY_OPEN_DELAY_MS)
    }
  }

  const handleKeyDown = (event: ReactKeyboardEvent) => {
    if (!hasGallery || event.target !== event.currentTarget) {
      return
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(project, 0)
    }
  }

  return (
    <article
      ref={hasGallery ? spotRef : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={hasGallery ? 'button' : undefined}
      tabIndex={hasGallery ? 0 : undefined}
      aria-label={
        hasGallery ? `Open screenshots for ${project.title}` : undefined
      }
      className={
        hasGallery
          ? 'spotlight flex cursor-pointer flex-col rounded-lg border border-zinc-200 bg-white p-5 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 dark:focus-visible:outline-zinc-100 sm:p-6'
          : 'flex flex-col rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6'
      }
    >
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <ul
        aria-label={`Technologies used in ${project.title}`}
        className="mt-4 flex flex-wrap gap-2"
      >
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export function Projects() {
  const [lead, ...rest] = projects
  const [gallery, setGallery] = useState<GalleryState | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const timeoutRef = useRef<number>(0)

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const openGallery = (project: Project, delayMs: number) => {
    openerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    window.clearTimeout(timeoutRef.current)
    if (delayMs <= 0) {
      setGallery({ project, index: 0 })
      return
    }
    timeoutRef.current = window.setTimeout(() => {
      setGallery({ project, index: 0 })
    }, delayMs)
  }

  useEffect(() => {
    if (!gallery && openerRef.current) {
      openerRef.current.focus()
      openerRef.current = null
    }
  }, [gallery])

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4">
        {lead && (
          <Reveal>
            <ProjectCard project={lead} onOpen={openGallery} />
          </Reveal>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} onOpen={openGallery} />
            </Reveal>
          ))}
        </div>
      </div>
      {gallery &&
        createPortal(
          <ImageModal
            project={gallery.project}
            index={gallery.index}
            onIndexChange={(index) => setGallery({ ...gallery, index })}
            onClose={() => setGallery(null)}
          />,
          document.body,
        )}
    </Section>
  )
}
