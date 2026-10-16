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
      <ValueSection />
      <CostCalculator />
      <HowSection />
      <ChapterInvite />
      <ChapterIdentity />
      <ChapterSource />
      <ChapterHistory />
      <ChapterDecision />
      <AudienceSection />
      <LevelsSection />
      <SourcesSection />
      <FaqSection />
      <PilotSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page { min-height: 100vh; background: #FFFFFF; color: var(--ink); }
</style>
