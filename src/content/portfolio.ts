export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  links: ProjectLink[]
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    title: 'NZ Vehicle Market Tracker',
    description:
      'Interactive dashboard tracking New Zealand passenger vehicles using NZTA open data. A streaming Python pipeline reduces each fleet release to small versioned aggregates, served by a static React dashboard that refreshes automatically.',
    tech: ['Python', 'React', 'TypeScript', 'Vite', 'GitHub Actions'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/michaelocez/nz-vehicle-market-tracker',
      },
      {
        label: 'Live demo',
        url: 'https://michaelocez.github.io/nz-vehicle-market-tracker/',
      },
    ],
    images: [
      {
        src: '/imgs/nz-vehicle-market-tracker/1.webp',
        alt: 'Dashboard hero showing the August 2026 headline fleet entry total and NZ-new versus used import split',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/2.webp',
        alt: 'Market flow chart of annual NZ-new versus used import entries from 2017 to 2026',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/3.webp',
        alt: 'Powertrain breakdown and top makes ranking for August 2026',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/4.webp',
        alt: 'Arrival channel by powertrain, top models ranking, and current fleet age distribution',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/5.webp',
        alt: 'Used import analysis showing previous registration countries and import age distribution',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/6.webp',
        alt: 'Make and model explorer showing Toyota fleet totals',
      },
      {
        src: '/imgs/nz-vehicle-market-tracker/7.webp',
        alt: 'Methodology section describing the scoped passenger vehicle dataset',
      },
    ],
  },
  {
    title: 'Game Review Website',
    description:
      'University course project. A React frontend for browsing and reviewing games, backed by a TypeScript REST API.',
    tech: ['React', 'TypeScript', 'REST'],
    links: [
      {
        label: 'Frontend',
        url: 'https://github.com/michaelocez/game-review-frontend',
      },
      {
        label: 'API',
        url: 'https://github.com/michaelocez/game-review-api',
      },
    ],
    images: [
      {
        src: '/imgs/game-review/1.webp',
        alt: 'Game Review Site browse page showing game cards with genre, price, and rating',
      },
      {
        src: '/imgs/game-review/2.webp',
        alt: 'Game detail page showing description, rating, wishlist buttons, and similar games',
      },
      {
        src: '/imgs/game-review/3.webp',
        alt: 'Game detail page showing similar games, user reviews, and a review submission form',
      },
      {
        src: '/imgs/game-review/4.webp',
        alt: 'Browse page filtered to wishlisted and owned games',
      },
      {
        src: '/imgs/game-review/5.webp',
        alt: 'Edit profile form with name, email, and password fields',
      },
      {
        src: '/imgs/game-review/6.webp',
        alt: 'Browse page on a narrow screen with stacked filters',
      },
      {
        src: '/imgs/game-review/7.webp',
        alt: 'Game detail page on a narrow screen',
      },
    ],
  },
  {
    title: 'Cart Filler Game',
    description:
      'Two person university course project. A tower defense game built with Java and JavaFX, with automated tests.',
    tech: ['Java', 'JavaFX', 'JUnit', 'Gradle'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/michaelocez/cart-filler-game',
      },
    ],
    images: [
      {
        src: '/imgs/cart-filler-game/1.webp',
        alt: 'Cart Filler tower selection screen showing tower stats and selected towers',
      },
      {
        src: '/imgs/cart-filler-game/2.webp',
        alt: 'Cart Filler gameplay showing score 120 on wave 5 of 5 with towers around the track',
      },
      {
        src: '/imgs/cart-filler-game/3.webp',
        alt: 'Cart Filler shop and inventory screen showing tower upgrades on wave 3 of 5',
      },
      {
        src: '/imgs/cart-filler-game/4.webp',
        alt: 'Cart Filler upgrade choice screen with damage, speed, and cash options',
      },
    ],
  },
  {
    title: 'STAT312 Car Colours',
    description:
      'Statistics course project comparing 959 observed UC carpark vehicle colours against national registration proportions, analysed in R.',
    tech: ['R'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/michaelocez/STAT312-Car-Colours-Project',
      },
    ],
    images: [
      {
        src: '/imgs/car-colour-analysis/1.webp',
        alt: 'Bar chart comparing UC carpark vehicle colour observations with national proportions',
      },
      {
        src: '/imgs/car-colour-analysis/2.webp',
        alt: 'Chart of standardised residuals showing which vehicle colours drove the difference',
      },
      {
        src: '/imgs/car-colour-analysis/3.webp',
        alt: 'Chart checking the chi-square assumption with expected vehicle counts per colour',
      },
    ],
  },
  {
    title: 'Roblox Game',
    description:
      'A multiplayer tower obby developed on Roblox, built in Roblox Studio and scripted in Luau.',
    tech: ['Roblox Studio', 'Luau'],
    links: [],
    images: [],
  },
]
