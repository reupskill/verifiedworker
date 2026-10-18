# Vetted Worker landing page

Nuxt 4 build of the Elm-led Vetted Worker site (from the `vetted-worker-site` handoff). Elm leads the brand; Youverify appears only in the footer as data and verification partner. English and Arabic, with right-to-left layout for Arabic.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public, deployable to any static host
npm run typecheck
```

## Structure

- `app/app.vue`: page order. Calls `initSite()` once on mount.
- `app/components/`: one component per section, holding the handoff's static markup as-is: `SvgSprite` (shared symbols; keep it on the page), `SiteHeader`, `HeroSection`, `ValueSection`, `HowSection`, `ReportSection`, `WhoSection`, `LevelsSection`, `CostSection`, `CoverageSection`, `ElmSection`, `FaqSection`, `PilotSection`, `SiteFooter`.
- `app/site/init.js`: all behaviour (no dependencies): language switch, hero animation, stepper, report toggle, coverage map and tabs, sources marquee, calculator, copy buttons and the pilot form.
- `app/assets/css/main.css`: all styles. Design tokens are on `:root` at the top.
- `public/brand/`: standalone SVGs of the Elm and Youverify logos, the hero illustration and the corridor map, for reuse elsewhere. The page itself uses inline copies.

Fonts load from Google Fonts (Readex Pro, IBM Plex Mono). There are no other external resources.

## Languages

- English text is in the markup. Every translatable element has `data-i18n="key"`.
- Arabic strings are in the `AR` object at the top of `app/site/init.js`. To change a line, edit the English in the component and the matching `AR` key.
- `?lang=ar` or `#ar` in the URL opens the Arabic version. The choice is remembered in localStorage.

## Pilot form

There is no backend. After validation (company, contact name, valid work email, consent), submitting opens the visitor's email app addressed to **vw@youverify.co** with the request as the body. A summary to copy is shown as a fallback. Submissions with the hidden `website` honeypot field filled are dropped. To POST to an endpoint later, replace the `mailto` line in the form handler in `init.js`, and keep the validation and honeypot.

## Motion and accessibility

All motion stops under `prefers-reduced-motion`. The hero animation and stepper pause when off screen. Tabs support the arrow keys, and every control has a visible focus state.

## Before launch

1. **Arabic copy:** native review by Elm.
2. **Saudi-side sources:** the "Who we check with" strip lists Elm, Absher and Qiwa. Elm must confirm these integrations.
3. **Essential package turnaround:** shows "Hours". Elm's client overview says "Seconds".
4. **Legal footer:** Elm's legal or communications team should approve the partner disclosure, including "Elm Company" and "an Elm portfolio company".
5. **Contact email:** `vw@youverify.co` is shown. An address on the vettedworker.com domain would keep the Elm-led positioning cleaner.
6. **Elm figures:** 3+ billion transactions, 30+ million users, 700+ thousand clients and 350+ e-services are taken from elm.sa. Re-check before launch.
