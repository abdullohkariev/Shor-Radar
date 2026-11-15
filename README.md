# Sho'r Radar – website

Static landing page for Sho'r Radar (NASA Space Apps 2026, team CST). No build step, no dependencies.
Languages: English, Uzbek, Russian (switch in the header; Uzbek and Russian are first drafts and need native review).

## Preview locally
```
python -m http.server 8080
```
Open http://localhost:8080

## Publish on GitHub Pages
Push these files to the repo root (or a `/docs` folder), then Settings → Pages → deploy from the branch.

## Files
- `index.html`, `style.css`, `script.js` – the page and its EN/UZ/RU switch
- `assets/` – logo and icon copied from the app (`app/static/img`)

## Before publishing, check
- The bot link `https://t.me/ShorRadarBot`
- The 47% / 79% / 82% salinity figures against the cited source (Frontiers in Sustainable Food Systems, 2025)
- The challenge name and team details in the footer
