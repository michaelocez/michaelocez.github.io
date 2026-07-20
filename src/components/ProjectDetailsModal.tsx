import { useEffect, useId, useRef } from 'react'
import type { Project } from '../types/portfolio'
import ProjectArchitecture from './ProjectArchitecture'
import ProjectGalleryCarousel from './ProjectGalleryCarousel'
import ProjectResults from './ProjectResults'

type ProjectDetailsModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const summaryId = useId()

  useEffect(() => {
    const dialog = dialogRef.current

    if (!project || !dialog) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      document.body.style.overflow = previousOverflow

      if (dialog.open) {
        dialog.close()
      }
    }
  }, [project])

  if (!project?.details) {
    return null
  }

  const closeDialog = () => dialogRef.current?.close()

  return (
    <dialog
      className="project-details-dialog"
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={summaryId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog()
        }
      }}
    >
      <article className="project-details-dialog__surface">
        <button
          type="button"
          className="project-details-dialog__close"
          aria-label="Close project details"
          onClick={closeDialog}
        >
          <svg aria-hidden="true" viewBox="0 0 16 16">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>

        <header className="project-details-dialog__header">
          <p className="section-kicker">Project details</p>
          <h2 id={titleId}>{project.title}</h2>
          <p id={summaryId}>{project.details.summary}</p>

          <div
            className="project-details-dialog__links"
            aria-label="Project repositories"
          >
            {project.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <span aria-hidden="true">{'\u2197'}</span>
              </a>
            ))}
          </div>
        </header>

        <ProjectGalleryCarousel
          items={project.details.gallery}
          projectTitle={project.title}
        />

        {project.details.results && (
          <ProjectResults results={project.details.results} />
        )}

        <ProjectArchitecture architecture={project.details.architecture} />
      </article>
    </dialog>
  )
}

export default ProjectDetailsModal
