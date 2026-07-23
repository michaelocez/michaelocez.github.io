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
    category: 'Data engineering',
    title: 'NZ Vehicle Market Tracker',
    description:
      'A reproducible data product that transforms NZTA fleet data into validated monthly aggregates and an interactive market dashboard.',
    highlight:
      'Streams 5.9 million source rows and publishes refreshed data through an automated CI/CD pipeline.',
    technologies: ['Python', 'React', 'TypeScript', 'Data pipelines', 'GitHub Actions'],
    links: [
      {
        label: 'Live dashboard',
        href: 'https://michaelocez.github.io/nz-vehicle-market-tracker/',
      },
    ],
    featured: true,
    details: {
      summary:
        'A production-style data project that streams NZTA\'s current-fleet release, applies documented analytical boundaries, generates compact monthly datasets, and publishes a responsive dashboard. The private source repository includes automated validation, scheduled refreshes, snapshot retention, and GitHub Pages deployment.',
      gallery: [
        {
          type: 'image',
          src: '/projects/nz-vehicle-market-tracker/1.png',
          alt: 'NZ Vehicle Market Tracker introduction showing the June 2026 passenger-vehicle total and the split between NZ-new cars and used imports.',
          caption:
            'The published dashboard introduces the latest market snapshot and its NZ-new versus used-import split.',
        },
        {
          type: 'image',
          src: '/projects/nz-vehicle-market-tracker/2.png',
          alt: 'Annual grouped bar chart comparing NZ-new passenger vehicles with used imports from 2017 through June 2026.',
          caption:
            'A selectable time range compares how the two main entry channels have changed over time.',
        },
        {
          type: 'image',
          src: '/projects/nz-vehicle-market-tracker/3.png',
          alt: 'Dashboard panels summarising June 2026 powertrains and the five leading vehicle makes entering the New Zealand fleet.',
          caption:
            'Latest-month analysis connects powertrain composition with leading makes and models.',
        },
      ],
      results: {
        kicker: 'Delivery evidence',
        title: 'Beyond the dashboard',
        caption:
          'The interface is backed by a documented data contract, reconciliation checks, automated tests, and a repeatable delivery process rather than manually prepared chart data.',
        metrics: [
          {
            label: 'Source snapshot',
            value: '5.9m rows',
          },
          {
            label: 'Scoped records',
            value: '3.1m vehicles',
          },
          {
            label: 'Brand mapping',
            value: '99.95%',
          },
          {
            label: 'Automated checks',
            value: '22 tests',
          },
        ],
      },
      developmentNote: {
        title: 'Built in one focused day with Codex',
        text:
          'I used Codex as an AI development collaborator while retaining ownership of the product scope, analytical definitions, technical decisions, review, testing, and deployment. The collaboration accelerated research and implementation without replacing validation or judgement.',
      },
      architecture: {
        kicker: 'Automated data product',
        title: 'Delivery pipeline',
        caption:
          'The system keeps the large raw release outside the repository and publishes only reviewed, frontend-ready aggregates. GitHub Actions repeats the same validated process for future NZTA snapshots.',
        steps: [
          {
            label: 'NZTA snapshot',
            detail:
              'Discover and download the official all-vehicle-years ZIP into temporary storage',
          },
          {
            label: 'Python pipeline',
            detail:
              'Stream selected fields, enforce the passenger-vehicle scope, and validate data quality',
          },
          {
            label: 'Versioned aggregates',
            detail:
              'Write eight compact JSON dimensions with record counts, SHA-256 checksums, and monthly archives',
          },
          {
            label: 'Dashboard delivery',
            detail:
              'Test the React interface, refresh data monthly, and deploy the validated build to GitHub Pages',
          },
        ],
      },
    },
  },
  {
    number: '02',
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
    number: '04',
    category: 'Statistical analysis',
    title: 'Car Colour Analysis',
    description:
      'A real-world study comparing vehicle colour observations from university car parks with New Zealand fleet-registration proportions.',
    highlight:
      'Cleaned and tested the data in R, then communicated where the distributions differed.',
    technologies: ['R', 'tidyverse', 'ggplot2', 'Chi-square testing'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/michaelocez/STAT312-Car-Colours-Project',
      },
    ],
    details: {
      summary:
        'An independently written statistical report comparing 959 observed campus vehicles with national registration data. I prepared the datasets in R, checked the test assumptions, applied Pearson\'s chi-square test, and used standardised residuals to interpret the category-level differences.',
      gallery: [
        {
          type: 'image',
          src: '/projects/car-colour-analysis/1.png',
          alt: 'Grouped bar chart comparing the percentage distribution of twelve vehicle colours in the university sample and New Zealand registration data.',
          caption:
            'Final 12-category comparison between the campus sample and national fleet.',
        },
        {
          type: 'image',
          src: '/projects/car-colour-analysis/2.png',
          alt: 'Horizontal bar chart of standardised residuals by vehicle colour with reference lines at negative two and positive two.',
          caption:
            'Standardised residuals identify the colours driving the overall difference.',
        },
        {
          type: 'image',
          src: '/projects/car-colour-analysis/3.png',
          alt: 'Bar chart showing expected counts below twenty for rare vehicle-colour categories before categories were merged.',
          caption:
            'Expected-count checks prompted the rare-colour categories to be combined.',
        },
      ],
      results: {
        caption:
          'The evidence indicated that the campus and national colour distributions differed. Silver and White appeared more often than expected, while Grey, Gold, and Green appeared less often; interpretation remains mindful of sampling coverage and the visual boundary between Grey and Silver.',
        metrics: [
          {
            label: 'Campus sample',
            value: '959 vehicles',
          },
          {
            label: 'National reference',
            value: '3.65 million',
          },
          {
            label: 'Test statistic',
            value: 'χ²(11) = 87.563',
          },
          {
            label: 'Evidence',
            value: 'p < 0.001',
          },
        ],
      },
      architecture: {
        kicker: 'Analysis workflow',
        title: 'Statistical method',
        caption:
          'The analysis moved from direct observations to a reproducible comparison, with assumption checks determining the final categories used by the test.',
        steps: [
          {
            label: 'Collect',
            detail:
              'Record 959 vehicle colours across ten campus car parks and two observation sessions',
          },
          {
            label: 'Prepare in R',
            detail:
              'Clean category labels, aggregate observations, and join the national reference data',
          },
          {
            label: 'Validate',
            detail:
              'Inspect expected counts and merge rare categories before conducting the test',
          },
          {
            label: 'Test & interpret',
            detail:
              'Apply Pearson\'s chi-square test and use standardised residuals to explain the result',
          },
        ],
      },
    },
  },
  {
    number: '05',
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
    details: {
      summary:
        'Built collaboratively as a JavaFX desktop game in which players configure a tower loadout, manage cash and inventory, and defend a route across configurable waves. The project separates FXML views, controllers, domain models, and services, with Gradle builds and JUnit tests supporting repeatable development.',
      gallery: [
        {
          type: 'image',
          src: '/projects/cart-filler-game/1.png',
          alt: 'Cart Filler tower-selection screen showing four available towers, three selected towers, and the Wizard tower statistics.',
          caption:
            'Pre-game loadout selection with distinct tower costs and combat statistics.',
        },
        {
          type: 'image',
          src: '/projects/cart-filler-game/2.png',
          alt: 'Cart Filler gameplay at wave five of five with four towers positioned around a route and two resource carts moving between them.',
          caption:
            'Wave-based gameplay combines tower placement, resource collection, and score progression.',
        },
        {
          type: 'image',
          src: '/projects/cart-filler-game/3.png',
          alt: 'Cart Filler shop and inventory showing available towers, an upgrade selected for purchase, placed and reserve towers, and stored items.',
          caption:
            'The shop and bag connect purchasing decisions with placed, reserve, and upgrade inventory.',
        },
        {
          type: 'image',
          src: '/projects/cart-filler-game/4.png',
          alt: 'Cart Filler upgrade-selection screen offering increased tower damage, faster attacks, or additional cash.',
          caption:
            'Between-wave upgrades let the player shape damage, attack speed, or cash generation.',
        },
      ],
      architecture: {
        kicker: 'Technical overview',
        title: 'Application structure',
        caption:
          'The desktop application separates its interface, interaction logic, game state, and supporting services while retaining a reproducible build and test workflow.',
        steps: [
          {
            label: 'JavaFX views',
            detail:
              'FXML defines the menu, settings, tower selection, gameplay, shop, upgrade, and result states',
          },
          {
            label: 'Controllers',
            detail:
              'Main, settings, and map controllers respond to player input and coordinate each scene',
          },
          {
            label: 'Domain models',
            detail:
              'GameEnvironment, Tower, Cart, and Health encapsulate progression and game rules',
          },
          {
            label: 'Build & tests',
            detail:
              'Gradle packages the application while JUnit supports automated verification',
          },
        ],
      },
    },
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
