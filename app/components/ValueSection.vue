<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="value" class="wrap value">
    <div class="head">
      <div class="eyebrow">{{ t.valE }}</div>
      <h2 class="h2 big">{{ t.valH }}</h2>
    </div>
    <div class="grid">
      <div v-for="v in t.val" :key="v.k" class="card item">
        <div class="mark">{{ v.k }}</div>
        <h3>{{ v.h }}</h3>
        <p>{{ v.b }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value { padding-top: 88px; padding-bottom: 40px; }
.head { max-width: 680px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; margin-top: 36px; }
.item { border-radius: 20px; padding: 26px; box-shadow: 0 2px 6px rgba(17, 87, 102, 0.04); display: flex; flex-direction: column; gap: 12px; }
/* Youverify "tag" motif: square with a clipped lower corner. */
.mark { width: 40px; height: 40px; border-radius: 10px; background: var(--deep); color: #FFFFFF; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 72%); }
h3 { margin: 0; font-size: 18px; font-weight: 800; color: var(--deep-ink); letter-spacing: -0.01em; }
p { margin: 0; font-size: 14.5px; color: var(--ink-2); line-height: 1.65; }
</style>
