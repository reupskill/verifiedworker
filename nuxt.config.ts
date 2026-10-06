// Verified Worker landing page (Elm × Youverify).
// Static-first: `npm run generate` produces a fully static site in .output/public.
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Verified Worker · Elm × Youverify',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Verified Worker by Elm and Youverify: identity, police record, employers and a hiring decision, all settled before the visa.',
        },
        { name: 'theme-color', content: '#115766' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap',
        },
        { rel: 'preload', href: '/fonts/BRSonoma-Regular.otf', as: 'font', type: 'font/otf', crossorigin: '' },
        { rel: 'preload', href: '/fonts/BRSonoma-Black.otf', as: 'font', type: 'font/otf', crossorigin: '' },
      ],
    },
  },
})
