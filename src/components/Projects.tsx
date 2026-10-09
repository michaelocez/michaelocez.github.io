import { useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/content/portfolio'
import { projects } from '@/content/portfolio'
import { useSpotlight } from '@/hooks/useSpotlight'
import { cn } from '@/lib/utils'
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

  const open = () => {
    const hoverCapable = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches
    onOpen(project, hoverCapable ? GALLERY_OPEN_DELAY_MS : 0)
  }

  const handleClick = (event: ReactMouseEvent) => {
    const target = event.target as HTMLElement
    if (target.closest('a') || target.closest('button')) {
      return
    }
    if (hasGallery) {
      open()
    }
  }

  return (
    <article
      ref={hasGallery ? spotRef : undefined}
      onClick={hasGallery ? handleClick : undefined}
      className={cn(
        'flex flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-5 sm:p-6',
        hasGallery && 'spotlight cursor-pointer hover:border-zinc-600',
      )}
    >
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <ul
        aria-label={`Technologies used in ${project.title}`}
        className="mt-4 flex flex-wrap gap-2"
      >
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
      {(project.links.length > 0 || hasGallery) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-5 text-sm font-medium">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center text-zinc-100 underline underline-offset-4 hover:text-zinc-400"
            >
              {link.label}
            </a>
          ))}
          {hasGallery && (
            <button
              type="button"
              onClick={open}
              className="ml-auto inline-flex h-11 items-center text-zinc-100 underline underline-offset-4 hover:text-zinc-400"
            >
              View gallery ({project.images.length})
            </button>
          )}
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

  useEffect(() => {
    for (const project of projects) {
      for (const image of project.images) {
        const loader = new Image()
        loader.src = image.src
      }
    }
  }, [])

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
