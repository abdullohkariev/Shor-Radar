# Sho'r Radar

**Irrigation and soil-salt advice for farmers in Uzbekistan, powered by NASA Earth data.**
Telegram bot + Mini App · Uzbek · Russian · English

NASA Space Apps Challenge 2026 · Team **UzForce**
Bot: [@ShorRadarBot](https://t.me/ShorRadarBot)

> Decision support, not a measurement. Salt is not observed directly. Sho'r Radar scores the conditions that favour salt build-up.

---

## The problem

About **47% of Uzbekistan's irrigated land is salt-affected** (Frontiers in Sustainable Food Systems, 2025). In Karakalpakstan, Syrdarya and Bukhara the share is above 75%. Farmers must decide when to irrigate, when to flush salts out and what to plant, usually without soil sensors, an agronomist or advice in their own language.

## What Sho'r Radar does

| | |
|---|---|
| 💧 **Irrigation signal** | A daily **irrigate / monitor / wait** verdict with a plain-language reason. |
| 🧂 **Salt-risk indicator** | Scores conditions that favour salt build-up. A measured ECe from the farmer replaces the estimate. |
| 🚿 **Flush timing** | Qualified guidance on when flushing may make sense, based on conditions and the last flush. |
| 🌾 **Salt-aware crops** | FAO salt-tolerance cards, farmer priorities (scarce water, preferred crops) and a 3-step rotation idea with reasons. |
| 📅 **6-month outlook** | A season plan from about two years of past NASA data (climatology, not a forecast). |
| 🗺️ **Map** | Pilot districts and the farmer's fields coloured by signal, with OSM, satellite, NASA true-colour and MODIS NDVI layers. |
| 🤖 **AI explainer** | A lightweight Gemini model explains the result in the farmer's language. It never overrides the rules. |
| 👥 **Community** | Tips per area, likes, reports (3 reports hide a post) and a verified-agronomist badge. |
| ⚠️ **Alerts** | Frost and heavy-rain warnings plus the normal advice, in Telegram. |

## How a farmer uses the bot

1. Send `/start` to [@ShorRadarBot](https://t.me/ShorRadarBot) and pick a language (uz / ru / en).
2. Read what the app does, how it works and its limits.
3. Register: name and area (choose a covered district or share GPS).
4. Tap **Open app**. Everything else happens inside the Mini App, which opens in Telegram with no install.
5. Add a field: location, crop, growth stage, groundwater, drainage, last flush, known salinity.
6. Get the verdict, the reasons, a salt-risk hint, flush and crop guidance, and morning alerts.
7. Log irrigations and flushes so the advice stays accurate.

### Mini App screens
- **Home:** verdict, NASA conditions with the date of the latest data, soil-wetness gauge, 7-day forecast, 30/90-day trends, salt risk, flush hint, field log, **How was this decided?**
- **Map:** districts and fields by signal, with imagery and vegetation layers.
- **Crops:** salt-tolerance cards, priorities, rotation and 6-month outlook.
- **Community** and **About** (how it works, data sources, limits, validation status).

## How a decision is made

```
NASA POWER (soil wetness, temperature, rain, sun) ─┐
Open-Meteo (7-day forecast) ───────────────────────┼─► water balance + crop rules ─► IRRIGATE / MONITOR / WAIT
Farmer input (crop, stage, ECe, irrigation log) ───┘            │
                                                                ├─► salt-risk score ─► flush hint
                                                                └─► FAO tolerance table ─► crop fit
```

- **ET₀** by Hargreaves-Samani; root-zone wetness (`GWETROOT`) drives the irrigation rule.
- **All thresholds** live in one versioned rules file, labelled *placeholder* until an agronomist reviews them. The app shows them and explains which rule fired.
- **Logging an irrigation** holds the signal and resets the water deficit. **A measured ECe** replaces the salt estimate. Without one, the app says "field salinity not measured".
- **AI explainer:** the rules decide first. A short fact sheet about the field (no names or Telegram IDs) goes to a small Gemini model, which explains it in at most five sentences, using only those facts. Each user has a daily limit, and if the AI fails the normal rule-based text is shown.

## Data and methods

- **NASA POWER:** `T2M`, `T2M_MAX/MIN`, `PRECTOTCORR`, `RH2M`, `ALLSKY_SFC_SW_DWN`, `GWETROOT`, `GWETTOP`
- **NASA GIBS / MODIS:** true-colour and NDVI map layers (visual support only)
- **Open-Meteo:** 7-day forecast · **OpenStreetMap:** base map
- **Methods:** FAO-56 (Allen et al. 1998), Hargreaves & Samani (1985), FAO Paper 29 and Maas & Hoffman (1977)

**Coverage:** 14 farming areas (Nukus, Urgench, Khiva, Bukhara, Navoi, Samarkand, Qarshi, Termez, Jizzakh, Gulistan, Tashkent, Andijan, Namangan, Fergana). Pilots: Nukus, Gulistan, Bukhara.

## Built with

Python · FastAPI · aiogram (Telegram bot and Mini App backend) · Leaflet · Vercel + Supabase Postgres (SQLite for local runs) · Gemini (lightweight model) · pytest, including a full simulated bot conversation and a check that every text exists in all three languages.

Reliability: NASA data is cached and shown as *stale* if NASA is unreachable, the page falls back to the last data saved on the phone, and demo or stale data is always labelled. Requests are verified with Telegram's signed login data, users only access their own data, and they can delete their account.

## Honesty and limits

- Salt is **not measured**; we score favourable conditions.
- NASA POWER's grid is about **50 km**, so neighbouring fields look alike.
- Thresholds are **generic and not yet reviewed by an agronomist**.
- Our consistency check replayed the rules on real NASA data for the driest and wettest 30-day windows in three districts. In 6 of 6 district-seasons the driest window gave at least as many IRRIGATE days and no more WAIT days. This is a **logic check, not field validation**, and **no accuracy is claimed**.
- On the free hosting plan, alerts arrive once a day (around 10:00 Tashkent time) instead of at each farmer's chosen hour.
- Uzbek and Russian texts are first drafts and need native-speaker review.

## What comes next

1. Agronomist review of Kc values and irrigation and salinity thresholds
2. Field soil-moisture and EC data from pilot farms to calibrate the rules
3. Finer data: SMAP soil moisture (~9 km) and per-field NDVI
4. Native-speaker review of Uzbek and Russian
5. Alerts at each farmer's chosen hour

## This repository: the website

A static landing page (EN/UZ/RU) with no build step.

```
python -m http.server 8080      # then open http://localhost:8080
```

Publish with GitHub Pages: Settings → Pages → deploy from branch `main`, folder `/ (root)`.

| File | Purpose |
|---|---|
| `index.html`, `style.css`, `script.js` | the page and its language switch |
| `assets/` | logo and icon |

## Sources

NASA POWER (power.larc.nasa.gov) · Open-Meteo (open-meteo.com) · FAO Irrigation & Drainage Paper 56 · Hargreaves & Samani (1985) · FAO Paper 29 / Maas & Hoffman (1977) · Frontiers in Sustainable Food Systems (2025) · Leaflet · OpenStreetMap contributors · aiogram · FastAPI

## AI tools used

Claude (Anthropic) assisted with planning, code and draft translations. A lightweight Gemini model powers the in-app explainer. The team reviews all outputs.
