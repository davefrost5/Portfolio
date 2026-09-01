# David Frost — Portfolio

Personal portfolio site for [David Frost](https://github.com/davefrost5). Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy lives in **`content/content.ts`** — edit that file to update work history, about text, contact info, and LinkedIn posts without touching components.

### Add LinkedIn post URLs

Paste post URLs into the `linkedinPosts` array in `content/content.ts`. Cards fetch title, description, and image via [Microlink](https://microlink.io/) OG metadata (cached with ISR).

```ts
export const linkedinPosts: string[] = [
  "https://www.linkedin.com/posts/davefrost525_...",
  // add more URLs here
];
```

## Deploy to Vercel

1. Push this repo to GitHub (`davefrost5/Portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new).
3. **Import** the GitHub repository.
4. Vercel auto-detects Next.js — no extra config needed.
5. Click **Deploy**.

Every push to `main` triggers a new deployment.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — work overview + LinkedIn posts |
| `/work/[slug]` | Individual project detail |
| `/about` | About page |
| `/contact` | Contact links (email, LinkedIn, GitHub) |
| `/resume` | Resume summary |

## Stack

- Next.js 15 (App Router, Server Components)
- TypeScript
- Tailwind CSS v4
- Instrument Serif + IBM Plex Sans (Google Fonts)
- Website previews via Microlink screenshots (ISR, 24h revalidate)

## Build

```bash
npm run build
npm start
```
