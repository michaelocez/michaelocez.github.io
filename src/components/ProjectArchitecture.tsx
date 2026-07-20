import { useId } from 'react'
import type { ProjectArchitecture as ProjectArchitectureData } from '../types/portfolio'

type ProjectArchitectureProps = {
  architecture: ProjectArchitectureData
}

function ProjectArchitecture({ architecture }: ProjectArchitectureProps) {
  const titleId = useId()

  return (
    <section className="project-architecture" aria-labelledby={titleId}>
      <div className="project-architecture__header">
        <div>
          <p className="section-kicker">
            {architecture.kicker ?? 'Technical overview'}
          </p>
          <h3 id={titleId}>{architecture.title ?? 'System architecture'}</h3>
        </div>
        <p>{architecture.caption}</p>
      </div>

      <ol className="architecture-flow">
        {architecture.steps.map((step, index) => (
          <li key={step.label}>
            <span className="architecture-flow__number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h4>{step.label}</h4>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProjectArchitecture
