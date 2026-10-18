// Vetted Worker landing page, an Elm service (design: Vetted Worker Landing Elm v2).
// Static-first: `npm run generate` produces a fully static site in .output/public.
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Vetted Worker, from Elm',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Vetted Worker, from Elm, checks each overseas hire\'s passport, police record, certificates and past jobs with the offices that issued them, before the visa.',
        },
        { name: 'theme-color', content: '#0C1D46' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap',
        },
        { rel: 'preload', href: '/assets/hero-riyadh-worker-elm.webp', as: 'image', type: 'image/webp' },
      ],
    },
  },
})
