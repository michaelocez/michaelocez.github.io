export type ExternalLink = {
  label: string
  href: string
}

export type ProjectGalleryImage = {
  type: 'image'
  src: string
  alt: string
  caption: string
  orientation?: 'landscape' | 'portrait'
}

export type ProjectArchitectureStep = {
  label: string
  detail: string
}

export type ProjectArchitecture = {
  kicker?: string
  title?: string
  caption: string
  steps: ProjectArchitectureStep[]
}

export type ProjectResultMetric = {
  label: string
  value: string
}

export type ProjectResults = {
  kicker?: string
  title?: string
  caption: string
  metrics: ProjectResultMetric[]
}

export type ProjectDevelopmentNote = {
  title: string
  text: string
}

export type ProjectDetails = {
  summary: string
  gallery: ProjectGalleryImage[]
  results?: ProjectResults
  developmentNote?: ProjectDevelopmentNote
  architecture: ProjectArchitecture
}

export type Project = {
  number: string
  category: string
  title: string
  description: string
  highlight: string
  technologies: string[]
  links: ExternalLink[]
  featured?: boolean
  details?: ProjectDetails
}

export type TechnicalProfileGroup = {
  label: string
  items: string[]
}
