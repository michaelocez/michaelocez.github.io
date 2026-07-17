# Michael H | Portfolio

[![CI/CD](https://github.com/michaelocez/michaelocez.github.io/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/michaelocez/michaelocez.github.io/actions/workflows/pipeline.yml)

A personal developer portfolio presenting selected full-stack, interactive, and statistical projects. Built with React and TypeScript and deployed to GitHub Pages through an automated CI/CD pipeline.

[View the live portfolio](https://michaelocez.github.io/)

## About

The portfolio introduces my Computer Science and Statistics background, presents selected project work, and provides an overview of the technologies and engineering practices I have used.

The interface uses a responsive dark design with subtle background animation, pointer interaction, keyboard focus styles, and reduced-motion support.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- GitHub Actions
- GitHub Pages

## Running locally

### Prerequisites

- Node.js 24 is recommended to match the CI environment
- npm

### Setup

```bash
git clone https://github.com/michaelocez/michaelocez.github.io.git
cd michaelocez.github.io
npm ci
npm run dev
```

Vite will print the local development URL in the terminal.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run lint` | Check the project with ESLint. |
| `npm run build` | Type-check the project and create an optimized production build in `dist`. |
| `npm run preview` | Preview the production build locally. |

## Project structure

```text
.
|-- .github/workflows/
|   `-- pipeline.yml          # CI/CD validation and deployment
|-- public/
|   `-- favicon.png           # Portfolio favicon
|-- src/
|   |-- components/           # Page sections and reusable UI components
|   |-- data/
|   |   `-- portfolio.ts      # Projects, links, and technical profile
|   |-- hooks/
|   |   `-- usePointerGlow.ts # Pointer interaction logic
|   |-- types/
|   |   `-- portfolio.ts      # Shared portfolio data types
|   |-- App.css               # Portfolio layout and visual styling
|   |-- App.tsx               # Top-level page composition
|   `-- main.tsx              # React application entry point
|-- index.html
`-- package.json
```

## CI/CD pipeline

The GitHub Actions workflow provides one connected validation and deployment pipeline.

For pull requests targeting `main`, the `Quality` job:

1. Checks out the repository.
2. Sets up Node.js 24 with npm caching.
3. Installs the locked dependencies with `npm ci`.
4. Runs ESLint.
5. Runs the TypeScript and Vite production build.

When validated changes are pushed or merged to `main`, the pipeline also:

1. Uploads the generated `dist` directory as a GitHub Pages artifact.
2. Runs the `Deploy` job after the `Quality` job succeeds.
3. Publishes the validated artifact to the `github-pages` environment.

Deployment is intentionally skipped for pull requests, so proposed changes are checked without being published.

## Deployment

The portfolio is hosted with GitHub Pages at [michaelocez.github.io](https://michaelocez.github.io/). Merges to `main` are deployed automatically after the pipeline passes.
