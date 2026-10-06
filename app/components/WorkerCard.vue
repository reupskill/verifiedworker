<script setup lang="ts">
// Floating worker card from the hero: avatar, name, outcome badge and a
// five-stage progress bar (Invite → Decision).
defineProps<{
  name: string
  meta: string
  badge: string
  tone: 'review' | 'stop'
  icon: string
  /** One colour per stage. */
  bars: string[]
  stages: string[]
}>()
</script>

<template>
  <div class="card worker" :class="`worker--${tone}`">
    <div class="head">
      <div class="avatar"><img :src="icon" alt=""></div>
      <div class="who">
        <div class="line">
          <span class="name">{{ name }}</span>
          <span class="badge" :class="`badge--${tone}`">{{ badge }}</span>
        </div>
        <div class="meta">{{ meta }}</div>
      </div>
    </div>
    <div class="stages">
      <div v-for="(l, i) in stages" :key="i" class="stage">
        <div class="seg" :style="{ background: bars[i] }" />
        <div class="lbl">{{ l }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.worker { border-radius: 20px; padding: 18px 20px; position: relative; }
.head { display: flex; align-items: center; gap: 14px; }
.avatar { width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.avatar img { width: 30px; height: 30px; display: block; }
.worker--review .avatar { background: #FFF1E3; box-shadow: inset 0 0 0 3px #FFD6AE; }
.worker--stop .avatar { background: var(--teal-100); box-shadow: inset 0 0 0 3px var(--teal-200); }
.who { flex: 1; min-width: 0; }
.line { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.name { font-size: 16px; font-weight: 800; color: var(--deep-ink); }
.meta { font-size: 13px; color: var(--muted); margin-top: 3px; }
.stages { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 4px; margin-top: 16px; }
.stage { display: flex; flex-direction: column; gap: 6px; }
.seg { height: 4px; border-radius: 2px; }
.lbl { font-size: 11px; color: var(--ink-3); }
</style>
