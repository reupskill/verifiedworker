<script setup lang="ts">
const { lang, dir, restoreLang } = useLang()

useHead({ htmlAttrs: { lang, dir } })

onMounted(restoreLang)
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <HeroSection />
      <GapSection />
      <ChapterInvite />
      <ChapterIdentity />
      <ChapterSource />
      <ChapterHistory />
      <ChapterDecision />
      <LevelsSection />
      <SourcesSection />
      <TrustStrip />
      <PilotSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page { min-height: 100vh; background: #FFFFFF; color: var(--ink); }
</style>
