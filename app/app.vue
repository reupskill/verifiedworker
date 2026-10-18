<script setup lang="ts">
import { initSite } from '~/site/init.js'

// init.js switches the page language; mirror it into the head so Nuxt's head
// manager doesn't put lang/dir/title back to English after it renders.
const lang = ref<'en' | 'ar'>('en')
useHead({
  htmlAttrs: {
    lang: () => (lang.value === 'ar' ? 'ar' : 'en-GB'),
    dir: () => (lang.value === 'ar' ? 'rtl' : 'ltr'),
  },
  title: () => (lang.value === 'ar' ? 'Vetted Worker من علم' : 'Vetted Worker by Elm'),
})

const onLang = (e: Event) => { lang.value = (e as CustomEvent<'en' | 'ar'>).detail }

// The page is static markup; init.js wires up its behaviour once after hydration.
onMounted(() => {
  document.addEventListener('vw:lang', onLang)
  initSite()
})
onBeforeUnmount(() => document.removeEventListener('vw:lang', onLang))
</script>

<template>
  <SvgSprite />
  <SiteHeader />
  <main id="top">
    <HeroSection />
    <ValueSection />
    <HowSection />
    <ReportSection />
    <WhoSection />
    <LevelsSection />
    <CostSection />
    <CoverageSection />
    <ElmSection />
    <FaqSection />
    <PilotSection />
  </main>
  <SiteFooter />
</template>
