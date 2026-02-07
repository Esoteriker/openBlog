# Haidong Xu - Engineering Portfolio

Professional personal website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes (light/dark mode)

## Local development

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Scripts

- `yarn dev` - run local development server
- `yarn build` - production build
- `yarn start` - run production server
- `yarn lint` - lint with Next.js config
- `yarn typecheck` - run TypeScript checks

## Data-driven content

All site content is centralized in:

- `data/profile.ts`
- `data/projects.ts`

## Deploy to Vercel

1. Push repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `yarn build`.
5. Output setting: default (`.next`).
6. Deploy.
