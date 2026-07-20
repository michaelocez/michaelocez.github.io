import { useId } from 'react'
import type { ProjectResults as ProjectResultsData } from '../types/portfolio'

type ProjectResultsProps = {
  results: ProjectResultsData
}

function ProjectResults({ results }: ProjectResultsProps) {
  const titleId = useId()

  return (
    <section className="project-results" aria-labelledby={titleId}>
      <div className="project-results__header">
        <div>
          <p className="section-kicker">Analysis outcome</p>
          <h3 id={titleId}>Key results</h3>
        </div>
        <p>{results.caption}</p>
      </div>

      <dl className="project-results__metrics">
        {results.metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default ProjectResults
