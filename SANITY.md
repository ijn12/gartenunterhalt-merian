# Sanity CMS – Gardener Website

Content is duplicated from Bolliger IT for now — customize in Studio before launch.

## What can be managed

| Inhalt | Wo es erscheint |
|--------|------------------|
| **Laufbanner** | Rotierende Leiste unter dem Header (Ferien, Öffnungszeiten, Hinweise) |
| **Pop-ups** | Modal für Ferien, wichtige Infos (mit Start-/Enddatum) |
| **Stories / News** | Abschnitt «Aktuelles» auf der Hauptseite |
| **USPs / Gründe** | Die 3 nummerierten Karten auf der Hauptseite |
| **Vision / Mission / Philosophie** | Werte-Abschnitt auf der Hauptseite |

Ohne Sanity-Konfiguration bleibt alles wie bisher (Fallback aus `src/lib/site.ts`).

## Projekt

| | |
|---|---|
| **Project ID** | `0f90qi1t` |
| **Dataset** | `production` |
| **Manage** | [sanity.io/manage/project/0f90qi1t](https://www.sanity.io/manage/project/0f90qi1t) |

`.env.local` (already set locally, not committed):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0f90qi1t
NEXT_PUBLIC_SANITY_DATASET=production
```

## CORS origins

Configured for local dev. Add the live domain in Sanity Manage → **API → CORS origins** before deploy:

- `http://localhost:3000`
- Your production URL (e.g. `https://www.example.ch`)

## Studio öffnen

- **Gehostet:** [https://gardener-website.sanity.studio](https://gardener-website.sanity.studio)
- **Lokal (Entwicklung):** [http://localhost:3000/studio](http://localhost:3000/studio) (with `npm run dev`)
- **Separat:** `npm run sanity` → [http://localhost:3333](http://localhost:3333)

Invite your client as a project member in Sanity Manage → Members.

### Gehostetes Studio neu deployen (nach Schema-/Code-Änderungen)

```bash
SANITY_STUDIO_BASEPATH=/ npm run sanity:deploy
```

## Erste Schritte im Studio

1. **Laufbanner** → Dokument `siteBanner`
2. **Pop-ups**, **USPs**, **Werte**, **Kontakt**, **Hero**, etc. — all duplicated from Bolliger IT; replace with gardener content
3. **Reihenfolge** fields control display order

## Technik

- Inhalte werden vom Browser live von Sanity geladen (CDN)
- Statischer Export (`out/`) funktioniert weiterhin — kein Rebuild nötig bei Textänderungen
- Pop-ups: Schliessen wird im Browser gespeichert (`localStorage`)
