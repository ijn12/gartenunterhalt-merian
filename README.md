# Gärtnerei Merian Website

A small, responsive marketing site for **Gärtnerei Merian** (Timon Merian) – Gartenpflege in der Region Luzern. The site is intentionally lean: a landing page, a contact page, a booking page for a future third-party provider, and an impressum. Colours and imagery follow the Gärtnerei Merian flyer: forest green + lavender accents.

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

The site is currently **code-driven** – all copy lives in code, not a CMS:

- Primary content: `src/lib/site.ts` (contact, services, steps, guarantee, booking, legal).
- Section defaults (hero, about, marketing, testimonials): the `*_FALLBACK` objects in `src/sanity/useSiteContent.ts`.
- Photos live in `public/photos/`, decorative lavender illustrations in `public/illustrations/`.
- Booking: set `booking.embedUrl` in `src/lib/site.ts` to the third-party booking tool's embed URL and the `/buchung` page will render it automatically.

### Sanity CMS

The site is connected to the dedicated Sanity project **`0f90qi1t` (gardener-website)**, set in `.env.local`. That dataset is currently **empty**, so every field falls back to the code content above – the site looks the same whether or not the CMS has data. As soon as content is entered in the Studio (`/studio`), those values override the matching code fallbacks.

- Studio: run `npm run dev` and open `/studio`, or `npm run sanity`.
- CORS origins are configured for `http://localhost:3000/3001/3333`. **Before launch, add the production domain** in the Sanity manage console (or `npx sanity cors add https://<domain>`), otherwise the live site can't read CMS edits.
- The old demo content that shipped with the duplicated project has been wiped.

Before launch, confirm contact details, domain, and legal details in `src/lib/site.ts`.
