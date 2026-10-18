// Vetted Worker landing page, an Elm service (from the vetted-worker-site handoff).
// Static-first: `npm run generate` produces a fully static site in .output/public.
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  // The markup relies on whitespace between inline elements, as written.
  vue: { compilerOptions: { whitespace: 'preserve' } },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: 'Vetted Worker by Elm: identity, police record, employers and a hiring decision for every worker, settled before the visa.',
        },
        { name: 'theme-color', content: '#0C1D46' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },
})
