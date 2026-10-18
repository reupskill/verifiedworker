<script setup lang="ts">
const { t } = useLang()

const rows = computed(() => [
  { logo: '/assets/sources/dmw.png', alt: 'DMW', w: t.value.c3r1w, n: t.value.c3r1n, r: t.value.c3r1r, m: 'DIGITAL', label: t.value.mDig },
  { code: 'PK', w: t.value.c3r2w, n: t.value.c3r2n, r: t.value.c3r2r, m: 'FAILED', label: t.value.mFail },
  { logo: '/assets/sources/nbi.png', alt: 'NBI', w: t.value.c3r3w, n: t.value.c3r3n, r: t.value.c3r3r, m: 'AUTHENTICATED', label: t.value.mAuth },
  { logo: '/assets/sources/prc.png', alt: 'PRC', w: t.value.c3r4w, n: t.value.c3r4n, r: t.value.c3r4r, m: 'DIGITAL', label: t.value.mDig },
])
</script>

<template>
  <section id="source" class="wrap split chapter">
    <ChapterIntro
      num="03" :label="t.c3l" :tag="t.c3t" :a="t.c3a" :b="t.c3b" :c="t.c3c" :body="t.c3p"
      :stats="[{ v: '5–10', l: t.c3s1 }, { v: '18', l: t.c3s2 }]"
    />
    <div class="panel stage">
      <div v-for="row in rows" :key="row.w" class="card row" :class="{ 'row--fail': row.m === 'FAILED' }">
        <div class="logo">
          <img v-if="row.logo" :src="row.logo" :alt="row.alt">
          <span v-else class="code">{{ row.code }}</span>
        </div>
        <div>
          <div class="when">{{ row.w }}</div>
          <div class="what">{{ row.n }}</div>
          <div class="res">{{ row.r }}</div>
        </div>
        <span class="pill" :class="`pill--${row.m}`">{{ row.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chapter { padding-top: 40px; padding-bottom: 40px; }
.stage { padding: 24px; display: flex; flex-direction: column; gap: 10px; }
.row { border-radius: 14px; padding: 12px 14px; display: grid; grid-template-columns: 52px minmax(0, 1fr) auto; gap: 14px; align-items: center; }
.row--fail { border-color: #F3C2BD; }
.logo { height: 40px; display: flex; align-items: center; justify-content: center; }
.logo img { max-width: 100%; max-height: 100%; display: block; }
.code { width: 100%; height: 100%; border-radius: 10px; background: #FDECEA; color: #B0322A; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
.when { font-size: 11px; color: var(--faint); }
.what { font-size: 13.5px; font-weight: 700; color: var(--navy); margin-top: 2px; }
.res { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
.row--fail .res { color: #8A2620; }
</style>
