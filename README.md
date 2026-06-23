# Gardener Website

Duplicate of the Bolliger IT marketing site — ready to customize for a gardener client. Same stack and CMS structure as `bolligerit-website`.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** for scroll-reveal animations
- **@vis.gl/react-google-maps** for the Kontakt-page map
- Fonts via `next/font`: Geist, Geist Mono, Instrument Serif

## Pages

- `/` — Hauptseite (hero, about, services overview, reasons, testimonials, values, CTA)
- `/dienstleistungen` — full services grid, "Exklusives Angebot" band, Tarife 2026
- `/kontakt` — contact details, opening hours, contact form, Google Maps "Standort"
- `/impressum` — legal details (footer-linked)

Home CTAs link to `/kontakt`. All shared business content lives in `src/lib/site.ts`.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then add your Google Maps key (optional)
npm run dev                         # http://localhost:3000
```

### Google Maps

The Kontakt-page map uses the Google Maps JavaScript API. Add a key to `.env.local`:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

Without a key the map shows a styled placeholder with the address and a link to
Google Maps, so the page works fine until a key is provided.

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx                 # fonts, <html lang="de">, SEO metadata
    page.tsx                   # Hauptseite
    dienstleistungen/page.tsx  # Dienstleistungen
    kontakt/page.tsx           # Kontakt
    impressum/page.tsx         # Impressum
    globals.css                # brand color tokens + base styles
  lib/
    site.ts                    # ALL shared business content (contact, hours,
                               # tariffs, services, impressum, map coords, nav)
  components/
    Header.tsx       # sticky header, route nav (usePathname), mobile menu
    Hero.tsx         # headline + live "Grand Opening" countdown
    About.tsx        # "Wer ist Bolliger IT"
    ServiceStrip.tsx # blue "Technische Hilfe aus einer Hand" CTA band
    Services.tsx     # services overview + reusable ServiceCard / ServicesGrid
    Reasons.tsx      # "Warum Bolliger IT"
    Testimonials.tsx # customer voices (placeholders)
    Values.tsx       # Vision / Mission / Philosophie
    CtaBand.tsx      # final home CTA -> /kontakt
    OfferBand.tsx    # "Exklusives Angebot" (Dienstleistungen)
    Tariffs.tsx      # Tarife 2026 + Wegpauschalen tables
    PageHero.tsx     # sub-page banner
    ContactForm.tsx  # contact form (client)
    StandortMap.tsx  # Google Maps JS API + placeholder fallback (client)
    Footer.tsx
    Wordmark.tsx     # BOLLIGER IT logo
    PillButton.tsx, icons.tsx, Reveal.tsx, ui.tsx  # primitives
```

## Editing content

- **All business data** (address, phone, email, opening hours, tariffs, services,
  Impressum, map coordinates, nav) lives in `src/lib/site.ts` — edit it in one place.
- **Brand colors** live as CSS variables in `src/app/globals.css` under `@theme`
  (`--color-orange`, `--color-blue`, `--color-navy`, …) and are used via Tailwind
  classes like `bg-orange`, `text-ink-2`, `border-line`.
- **Images:** the design uses tasteful placeholders ("Foto folgt"). Drop real photos
  into `public/` and swap the placeholder blocks for `next/image`.
- **Contact form** currently shows a success state on submit; wire it to an email
  service / API route when ready.

## Notes

- Original design references and screenshots are kept in `design-source/`.
- Real data is sourced from the live site. Two different mobile numbers appear on his
  current site (`078 402 91 65` on Kontakt vs `079 491 91 65` on Informatives) — the
  Kontakt number is used; confirm which is correct.
- Still to provide before launch: real photos, testimonials, the Google Maps API key,
  and the Datenschutz / AGB legal pages.
