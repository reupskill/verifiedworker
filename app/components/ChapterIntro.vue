<script setup lang="ts">
// Numbered chapter heading: "01 · INVITE · Day 1", headline with a highlighted
// phrase, body copy and optional stat pair.
withDefaults(defineProps<{
  num: string
  label: string
  tag: string
  /** Headline in three parts; `b` is highlighted. */
  a: string
  b: string
  c: string
  body: string
  stats?: { v: string; l: string }[]
  /** Outlined tag for chapters on the tinted band. */
  onAlt?: boolean
}>(), { stats: () => [], onAlt: false })
</script>

<template>
  <div>
    <div class="kicker">
      <span class="num">{{ num }}</span>
      <span class="eyebrow">{{ label }}</span>
      <span class="tag" :class="{ 'tag--alt': onAlt }">{{ tag }}</span>
    </div>
    <h2 class="h2">{{ a }}<span class="hl">{{ b }}</span>{{ c }}</h2>
    <p class="lede">{{ body }}</p>
    <div v-if="stats.length" class="stats">
      <div v-for="s in stats" :key="s.v">
        <div class="v">{{ s.v }}</div>
        <div class="l">{{ s.l }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kicker { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.num { font-size: 13px; font-weight: 800; color: var(--blue); }
.tag { font-size: 11.5px; font-weight: 600; color: var(--muted); background: var(--teal-50); border-radius: 999px; padding: 3px 10px; }
.tag--alt { background: #FFFFFF; border: 1px solid var(--border); }
.h2 { margin-top: 14px; }
.lede { max-width: 500px; }
.stats { display: flex; gap: 36px; margin-top: 24px; }
.v { font-size: 22px; font-weight: 800; color: var(--deep); line-height: 1; }
.l { font-size: 12.5px; color: var(--muted); margin-top: 4px; }
</style>
