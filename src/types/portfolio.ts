export type ExternalLink = {
  label: string
  href: string
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
}

export type TechnicalProfileGroup = {
  label: string
  items: string[]
}
