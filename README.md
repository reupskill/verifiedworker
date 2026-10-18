# Vetted Worker landing page

Nuxt 4 build of the Claude Design file `Vetted Worker Landing Elm v2.dc.html`: a bilingual (EN / العربية) landing page for Vetted Worker, an Elm service. Youverify is credited as the data and verification partner.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public, deployable to any static host
npm run typecheck
```

## Structure

- `app/app.vue`: page order, plus the `<html lang dir>` binding
- `app/i18n/copy.ts`: all EN and AR copy in one typed object (the `Copy` type keeps both languages in step)
- `app/composables/useLang.ts`: current language; `?lang=ar|en` takes priority, then the choice remembered in localStorage
- `app/components/`: one component per section, in page order: Hero (with the animated `HeroArt`), Value, CostCalculator, How, Chapter 01–05, Audience, Levels, Sources, Elm, Faq, Pilot, Footer. `ChapterIntro` is shared by the chapters
- `app/assets/css/main.css`: Elm colour tokens and shared primitives (cut corners, hexagon eyebrows, CTAs). Fonts load from Google Fonts: Readex Pro, IBM Plex Mono and IBM Plex Sans Arabic
- `public/assets/`: Elm and Youverify logos, the authority logos and the hero photo

## Pilot form

There is no backend. Once validation passes (company, contact name, a valid email, at least one corridor, the consent box, and 1–20 workers), submitting opens the visitor's email app with a pre-filled request addressed to **vw@youverify.co**. The success panel also offers a fallback link in case the email app doesn't open. To change the recipient, edit `TO` in `app/components/PilotForm.vue`.

## Before launch

- Have a native speaker review the Arabic copy, especially the job levels and the names of the government authorities.
- The hero animation and the two logo marquees stop moving for visitors who have reduced motion turned on.
- The authority logos were cut from a screenshot. Swap in official files if you have them (`public/assets/sources/`).
