# Sanity CMS – Gartenunterhalt Merian

Sanity is optional. Without a configured Sanity project, the site uses fallback content from `src/lib/site.ts`.

## What Can Be Managed

| Inhalt | Wo es erscheint |
|--------|------------------|
| Laufbanner | Leiste unter dem Header |
| Pop-ups | Hinweise, Ferien, wichtige Informationen |
| Hero / Über uns | Startseite |
| Gartenleistungen | Service-Karten auf der Startseite |
| Buchung | Drittanbieter-Link, Embed-URL und Fallback-Text |
| Kontakt & Standort | Kontaktseite, Footer und Impressum |
| Rechtliches | Impressum, Footer und Datenschutzhinweis |

## Setup

1. Kostenloses Projekt erstellen: [sanity.io/manage](https://www.sanity.io/manage)
2. **Project ID** und **Dataset** (`production`) in `.env.local` eintragen:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=ihre-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. In Sanity Manage → **API → CORS origins** hinzufügen:
   - `http://localhost:3000`
   - Ihre Live-Domain

4. Dev-Server neu starten:

   ```bash
   npm run dev
   ```

## Studio

- Lokal eingebettet: [http://localhost:3000/studio](http://localhost:3000/studio)
- Separat: `npm run sanity` → meist [http://localhost:3333](http://localhost:3333)
- Gehostet: `npm run sanity:deploy`

## Booking Provider

Sobald der Anbieter feststeht, in Sanity unter **Buchung** entweder den direkten Buchungslink oder eine erlaubte Embed-URL eintragen. Die Website bleibt statisch; die eigentliche Buchung läuft beim Drittanbieter.
