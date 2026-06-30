# Gartenunterhalt Merian Website

A small, responsive marketing site for **Gartenunterhalt Merian**. The site is intentionally lean: a landing page, a contact page, a booking page for a future third-party provider, and an impressum.

## Tech Stack

- Next.js 16 App Router + React 19
- TypeScript
- Tailwind CSS v4 with design tokens in `src/app/globals.css`
- Framer Motion for subtle reveal animations
- Optional Sanity CMS content with code fallbacks

## Pages

- `/` — landing page with hero, intro, service cards, gallery, reasons, and CTA
- `/buchung` — booking page with configurable third-party link/embed placeholder
- `/kontakt` — contact details, email-based contact form, opening/availability notes, and map placeholder
- `/impressum` — legal details, footer-linked

The site uses static export (`output: "export"`), so booking is expected to happen through a third-party provider such as Calendly, Cal.com, or another external service.

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run start
npm run lint
```

## Editing Content

- Shared fallback content lives in `src/lib/site.ts`.
- Optional CMS fallbacks are merged in `src/sanity/useSiteContent.ts`.
- Booking provider settings can be edited in Sanity under `Buchung`, or in `booking` inside `src/lib/site.ts`.
- Temporary SVG placeholders live in `public/hero/`; replace them with real garden photos when available.

Before launch, replace placeholder contact details, domain, legal details, and booking provider URLs.
