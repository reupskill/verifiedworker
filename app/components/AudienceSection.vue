<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="who" class="who">
    <div class="wrap inner">
      <div class="head">
        <div class="eyebrow">{{ t.audE }}</div>
        <h2 class="h2 big">{{ t.audH }}</h2>
      </div>
      <div class="grid">
        <div v-for="a in t.aud" :key="a.h" class="card item">
          <h3>{{ a.h }}</h3>
          <p>{{ a.b }}</p>
          <ul>
            <li v-for="pt in a.pts" :key="pt"><span class="ck" aria-hidden="true">✓</span><span>{{ pt }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who { background: var(--surface-alt); border-top: 1px solid var(--border); }
.inner { padding-top: 80px; padding-bottom: 80px; }
.head { max-width: 680px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 16px; margin-top: 36px; }
.item { border-radius: 20px; padding: 26px; display: flex; flex-direction: column; gap: 12px; }
h3 { margin: 0; font-size: 19px; font-weight: 800; color: var(--deep-ink); letter-spacing: -0.01em; }
p { margin: 0; font-size: 14.5px; color: var(--ink-2); line-height: 1.65; }
ul { list-style: none; margin: 6px 0 0; padding: 14px 0 0; border-top: 1px solid var(--hairline); display: flex; flex-direction: column; gap: 8px; }
li { display: flex; gap: 9px; font-size: 13.5px; color: var(--deep-ink); line-height: 1.5; }
.ck { color: var(--mint); font-weight: 800; }
</style>
