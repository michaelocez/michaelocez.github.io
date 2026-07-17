import type {
  ExternalLink,
  Project,
  TechnicalProfileGroup,
} from '../types/portfolio'

export const externalLinks: ExternalLink[] = [
  { label: 'GitHub', href: 'https://github.com/michaelocez' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michael-huang-2a55572ba/',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    category: 'Full-stack development',
    title: 'Game Review Platform',
    description:
      'A full-stack game review application with a component-based React frontend and a separate REST API for reviews and user data.',
    highlight: 'One product, developed across two focused repositories.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Express', 'MySQL'],
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/michaelocez/game-review-frontend',
      },
      {
        label: 'API',
        href: 'https://github.com/michaelocez/game-review-api',
      },
    ],
    featured: true,
  },
  {
    number: '03',
    category: 'Statistical analysis',
    title: 'Car Colour Analysis',
    description:
      'A real-world study comparing vehicle colour observations from university car parks with New Zealand fleet-registration proportions.',
    highlight: 'Applied chi-square testing and communicated the findings in R.',
    technologies: ['R', 'Chi-square testing', 'Data collection', 'Reporting'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/michaelocez/STAT312-Car-Colours-Project',
      },
    ],
  },
  {
    number: '04',
    category: 'Game development',
    title: 'Cart Filler Game',
    description:
      'A co-developed desktop game with modular Java packages, custom media, automated tests, and a reproducible build process.',
    highlight: 'Built collaboratively with testing and maintainability in mind.',
    technologies: ['Java', 'JavaFX', 'Gradle', 'JUnit'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/michaelocez/cart-filler-game',
      },
    ],
  },
]

export const technicalProfile: TechnicalProfileGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'R', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & data',
    items: ['React', 'Node.js', 'Express', 'MySQL', 'JavaFX'],
  },
  {
    label: 'Engineering',
    items: ['REST APIs', 'Automated testing', 'CI/CD', 'Gradle'],
  },
  {
    label: 'Workflow',
    items: ['Git', 'GitHub Actions', 'GitHub Copilot', 'OpenAI Codex'],
  },
]
