import type { Project } from '../types/portfolio'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`project-card${project.featured ? ' project-card--featured' : ''}`}
    >
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
    </article>
  )
}

export default ProjectCard
