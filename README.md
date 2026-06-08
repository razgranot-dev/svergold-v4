# Svergold — Import & Marketing LTD (V4 — canonical)

Premium marketing site for Svergold, an international import & trade company.
Static site: hand-written HTML / CSS / vanilla JS. No build step.

**V4 is the current canonical version.** It is built on the V3 cinematic
design (hero, scroll Journey, sectors, vehicles) with the marketing-audit fixes
applied: real contact paths, a working WhatsApp lead flow, trust band, SEO meta /
Open Graph / JSON-LD schema, `robots.txt` / `sitemap.xml`, image alt text and
analytics hooks — plus a B2B "Company name" field ported from the older root site.
The hero is preserved unchanged from V3.

## Features
- Trilingual **HE / EN / RU** with Hebrew **RTL**
- **Light** (white / ivory / champagne / gold) and **dark** (black / graphite / gold) themes
- Cinematic **Hero** (ship video + animated gold routes) and an **image-sequence scroll Journey**
- Trust band, Sectors, Vehicles, Why-us, Built-for-Scale, Locations (animated coast map)
- Contact form with validation that opens a prefilled WhatsApp message to +972508828800
- Floating WhatsApp / call buttons, fully responsive

## Run locally
```bash
python serve.py 8849
# → http://127.0.0.1:8849   (8848 is taken by the old root server; any free port works)
```
`serve.py` is a small Range-capable static server. Any static host (Vercel, Netlify, nginx) also works.

## Deploy
Static deployment — no build command, output is the repository root. A `vercel.json` is included for Vercel.

## Notes
- `assets/` holds images/video; `assets/journey-seq/` holds the 60 Journey frames; `assets/generated/` holds the AI-generated sector/service plates.
- `scripts/gen-sectors.mjs` is a one-off image-generation helper (reads `GEMINI_API_KEY` from a local `.env`, which is gitignored and never committed).
