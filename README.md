# mistermoon.dev

Personal site. React, TypeScript, Vite and Material UI.

- `src/components/nightsky.tsx` is the generative star background.
- `src/components/aurorabar.tsx` is the generative northern lights bar in the header.
- `src/pages/home.tsx` is the landing page (about + project list).
- `src/pages/project.tsx` renders a project page from `src/data/projects.ts`.

## Adding a project

Add an entry to `PROJECTS` in `src/data/projects.ts`. It appears on the home page and gets a page at `/projects/<id>`. Put any PDF in `public/` and reference it as `/<file>.pdf`.

## Develop

```
npm install
npm run dev
npm run build
```
