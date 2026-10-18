<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="value" class="wrap value">
    <div class="head">
      <h2 class="h2 big">{{ t.valH }}</h2>
    </div>
    <div class="grid">
      <div v-for="v in t.val" :key="v.k" class="card item">
        <h3>{{ v.h }}</h3>
        <p>{{ v.b }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value { padding-top: 44px; padding-bottom: 16px; }
.head { max-width: 680px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; margin-top: 24px; }
.item { border-radius: 20px; padding: 26px; box-shadow: 0 2px 6px rgba(27, 27, 75, 0.04); display: flex; flex-direction: column; gap: 12px; }
h3 { margin: 0; font-size: 18px; font-weight: 600; color: var(--navy); letter-spacing: -0.01em; }
p { margin: 0; font-size: 14.5px; color: var(--ink-2); line-height: 1.65; }
</style>
