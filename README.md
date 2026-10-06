# Verified Worker landing page

Nuxt 4 build of the Claude Design file `project/Verified Worker Landing v2.dc.html`: a bilingual (EN / العربية) landing page for Verified Worker by Elm × Youverify.

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
- `app/components/`: one component per section (Hero, Gap, Chapter 01–05, Levels, Sources, Trust, Pilot, Footer) plus the shared `ChapterIntro` and `WorkerCard`
- `app/assets/css/main.css`: BR Sonoma `@font-face`, the design-system colour tokens and shared primitives
- `public/`: logos, authority logos, hero illustration and BR Sonoma font files

## Pilot form

There is no backend. Once validation passes (company, contact name, a valid email, at least one corridor, the consent box, and 1–20 workers), submitting opens the visitor's email app with a pre-filled request addressed to **vw@youverify.co**. The success panel also offers a fallback link in case the email app doesn't open. To change the recipient, edit `TO` in `app/components/PilotForm.vue`.

## Before launch

- Have a native speaker review the Arabic copy, especially the job levels and the names of the government authorities.
- The authority logos were cut from a screenshot. Swap in official files if you have them (`public/assets/sources/`).
