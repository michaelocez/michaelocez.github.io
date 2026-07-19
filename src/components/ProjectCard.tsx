import type { Project } from '../types/portfolio'

type ProjectCardProps = {
  project: Project
  onOpenProject?: (project: Project) => void
}

function ProjectCard({ project, onOpenProject }: ProjectCardProps) {
  const canOpenProject = Boolean(project.details && onOpenProject)

  return (
    <article
      className={`project-card${project.featured ? ' project-card--featured' : ''}${
        canOpenProject ? ' project-card--interactive' : ''
      }`}
    >
      {canOpenProject && (
        <button
          type="button"
          className="project-card__details-trigger"
          aria-haspopup="dialog"
          aria-label={`View ${project.title} project details`}
          onClick={() => onOpenProject?.(project)}
        />
      )}

      <div className="project-card__topline">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      <div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <p className="project-card__highlight">{project.highlight}</p>
      </div>

      <ul className="project-tags" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-card__footer">
        {canOpenProject && (
          <span className="project-card__details-label" aria-hidden="true">
            View project <span>{'\u2192'}</span>
          </span>
        )}

        <div className="project-links">
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
      </div>
    </article>
  )
}

export default ProjectCard
