<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section class="strip">
    <div class="wrap grid">
      <div v-for="tr in t.trust" :key="tr.h" class="item">
        <div class="mark" aria-hidden="true" />
        <div>
          <h3>{{ tr.h }}</h3>
          <p>{{ tr.b }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strip { background: var(--teal-50); border-top: 1px solid var(--border); }
.grid { padding-top: 56px; padding-bottom: 56px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 28px; }
.item { display: flex; gap: 14px; align-items: flex-start; }
/* Youverify "tag" motif: square with a clipped lower corner. */
.mark { width: 36px; height: 36px; border-radius: 9px; background: var(--deep); clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 72%); flex-shrink: 0; }
h3 { margin: 0; font-size: 15.5px; font-weight: 700; color: var(--deep-ink); }
p { margin: 6px 0 0; font-size: 14px; color: var(--ink-2); line-height: 1.6; }
</style>
