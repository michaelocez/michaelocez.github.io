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
    details: {
      summary:
        'A full-stack coursework project for browsing games, publishing reviews, and managing personal wishlist and ownership states. The React client and TypeScript REST API are maintained as separate repositories.',
      gallery: [
        {
          type: 'image',
          src: '/projects/game-review/1.png',
          alt: 'Desktop game catalogue with search, genre, platform, sorting, and price filters above a grid of game cards.',
          caption:
            'Searchable catalogue with multiple filtering and sorting controls.',
        },
        {
          type: 'image',
          src: '/projects/game-review/2.png',
          alt: 'Desktop detail page for Balatro showing its image, description, metadata, ownership controls, and similar games.',
          caption:
            'Detailed game information, ownership state, and related recommendations.',
        },
        {
          type: 'image',
          src: '/projects/game-review/3.png',
          alt: 'Review section with an existing review and a form for entering review text and a numeric rating.',
          caption:
            'Authenticated review submission with written feedback and a rating.',
        },
        {
          type: 'image',
          src: '/projects/game-review/4.png',
          alt: 'Filtered desktop catalogue showing a game marked as wishlisted and owned by the signed-in user.',
          caption:
            'Personal wishlist and owned-library state integrated into the catalogue.',
        },
        {
          type: 'image',
          src: '/projects/game-review/5.png',
          alt: 'Account editing page with portfolio-safe first name, last name, email, password, and profile-image fields.',
          caption:
            'Profile management using a clearly fictional demonstration account.',
        },
        {
          type: 'image',
          src: '/projects/game-review/6.png',
          alt: 'Mobile catalogue showing responsive filters and a game marked as wishlisted and owned.',
          caption: 'Responsive catalogue and personal-library controls on mobile.',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/projects/game-review/7.png',
          alt: 'Mobile Balatro detail page with metadata, creator information, rating, and ownership controls.',
          caption: 'Responsive game details and account-specific actions on mobile.',
          orientation: 'portrait',
        },
      ],
      architecture: {
        caption:
          'The interface and API remain independently focused, communicating through a stable REST boundary before data is persisted in MySQL.',
        steps: [
          {
            label: 'React frontend',
            detail: 'Material UI pages, routing, client state, and responsive views',
          },
          {
            label: 'Axios + REST',
            detail: 'HTTP requests and JSON responses across the /api/v1 boundary',
          },
          {
            label: 'Express API',
            detail: 'Routes, controllers, validation, authentication, and models',
          },
          {
            label: 'MySQL',
            detail: 'Games, users, reviews, images, wishlists, and ownership data',
          },
        ],
      },
    },
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
