# michaelocez.github.io

Personal portfolio website. A single-page React application deployed to GitHub Pages.

## Stack

* React 19 + TypeScript
* Vite
* Tailwind CSS v4
* ESLint
* GitHub Actions + GitHub Pages

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint     # eslint
npm run build    # typecheck + production build
npm run preview  # serve the production build locally
```

## Deployment

Pushes to `main` build and deploy automatically through `.github/workflows/deploy.yml`.

## Project layout

* `src/content/` — portfolio content model (projects, links, galleries)
* `src/components/` — page sections, project cards, image modal, effects
* `src/hooks/` — scroll reveal, card spotlight
* `src/lib/` — shared utilities and the effect capability gate
* `public/imgs/` — project screenshots served as static assets
