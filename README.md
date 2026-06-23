# Gartenunterhalt Merian — Website

Marketing site for **Gartenunterhalt Merian** — duplicated from the Bolliger IT template, with its own Sanity CMS project.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** for scroll-reveal animations
- **Sanity CMS** for editable content

## Getting started

```bash
npm install
cp .env.local.example .env.local   # or use existing .env.local
npm run dev                         # http://localhost:3000
```

See `SANITY.md` for CMS setup and Studio URLs.

## Status

- Project + Sanity wired to **Gartenunterhalt Merian**
- Landing page uses a green color theme (scoped via `.theme-gartenunterhalt`)
- Content, services, contact details, and sub-pages still carry Bolliger IT placeholders — customize next
