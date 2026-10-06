<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section class="wrap gap">
    <div>
      <div class="eyebrow">{{ t.gapE }}</div>
      <h2 class="title">{{ t.gapH }}</h2>
    </div>
    <div v-for="(g, i) in t.gap" :key="i" class="item">
      <h3>{{ g.h }}</h3>
      <p>{{ g.b }}</p>
    </div>
  </section>
</template>

<style scoped>
.gap { padding-top: 72px; padding-bottom: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 32px; align-items: start; }
.title { margin: 12px 0 0; font-size: clamp(20px, 2vw, 26px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; color: var(--deep-ink); }
.item { border-top: 2px solid var(--teal-200); padding-top: 16px; }
h3 { margin: 0; font-size: 15.5px; font-weight: 700; color: var(--deep-ink); }
p { margin: 8px 0 0; font-size: 14.5px; color: var(--ink-2); line-height: 1.65; }
</style>
