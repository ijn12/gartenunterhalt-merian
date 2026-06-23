# Sanity CMS – Gartenunterhalt Merian

Roger-style CMS for editable website content (currently still filled with Bolliger IT placeholder content).

## Projekt

| | |
|---|---|
| **Project ID** | `0f90qi1t` |
| **Dataset** | `production` |
| **Manage** | [sanity.io/manage/project/0f90qi1t](https://www.sanity.io/manage/project/0f90qi1t) |

`.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0f90qi1t
NEXT_PUBLIC_SANITY_DATASET=production
```

## Studio öffnen

- **Gehostet:** [https://gartenunterhalt-merian.sanity.studio](https://gartenunterhalt-merian.sanity.studio)
- **Lokal:** [http://localhost:3000/studio](http://localhost:3000/studio) (with `npm run dev`)
- **Separat:** `npm run sanity` → [http://localhost:3333](http://localhost:3333)

### Studio neu deployen

```bash
SANITY_STUDIO_BASEPATH=/ npm run sanity:deploy
```

## CORS origins

- `http://localhost:3000`
- Production URL when deployed (e.g. `https://www.gartenunterhalt-merian.ch`)

## Nächste Schritte

Replace all CMS content (hero, services, contact, testimonials, etc.) with Gartenunterhalt Merian copy.
