<script setup lang="ts">
const { t, lang } = useLang()
const arrow = computed(() => (lang.value === 'ar' ? '←' : '→'))
</script>

<template>
  <section id="story" class="hero">
    <svg class="iso" aria-hidden="true">
      <defs>
        <pattern id="vwIso" width="34.64" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 0L34.64 20M0 20L34.64 0" stroke="#BFC9E6" stroke-opacity="0.09" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#vwIso)" />
    </svg>
    <div class="inner grid">
      <div>
        <div class="hex-eyebrow">{{ t.heroE }}</div>
        <h1>{{ t.h1a }}<span class="hl">{{ t.h1b }}</span>{{ t.h1c }}</h1>
        <p class="intro">{{ t.heroP }}</p>
        <div class="ctas">
          <a href="#pilot" class="cta-elm cta-elm--primary cut">{{ t.cta1 }}<span aria-hidden="true">{{ arrow }}</span></a>
          <a href="#how" class="cta-elm cta-elm--ghost cut">{{ t.cta2 }}</a>
        </div>
        <ul class="assure">
          <li v-for="a in t.assure" :key="a">{{ a }}</li>
        </ul>
      </div>
      <div class="visual"><HeroArt /></div>
    </div>
    <div class="proof-band">
      <div class="inner proof">
        <div v-for="p in t.proof" :key="p.v" class="stat">
          <div class="pv">{{ p.v }}</div>
          <div class="pl">{{ p.l }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; background: var(--navy); color: #FFFFFF; }
.iso { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.inner { position: relative; max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
.grid { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(32px, 4vw, 48px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr)); gap: 48px; align-items: center; }
h1 { margin: 18px 0 0; font-size: clamp(38px, 5.6vw, 72px); font-weight: 400; letter-spacing: -0.02em; line-height: 1.04; color: #FFFFFF; text-wrap: balance; }
h1 .hl { font-weight: 600; color: var(--peach); }
.intro { font-size: clamp(16px, 1.4vw, 19px); color: var(--on-navy); line-height: 1.65; margin: 22px 0 0; max-width: 56ch; }
.ctas { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
.assure { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 22px; margin: 28px 0 0; font-size: 14px; color: var(--on-navy); }
.assure li { display: inline-flex; align-items: center; gap: 8px; }
.assure li::before { content: ""; width: 8px; height: 8px; background: var(--sky); transform: rotate(45deg); }
.visual { position: relative; }

.proof-band { position: relative; border-top: 1px solid rgba(191, 201, 230, 0.18); }
.proof { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); }
.stat { padding: 26px 20px 28px; border-inline-start: 1px solid rgba(191, 201, 230, 0.18); display: flex; flex-direction: column; gap: 6px; }
.pv { font-size: clamp(26px, 2.6vw, 34px); font-weight: 500; line-height: 1.1; color: #FFFFFF; font-variant-numeric: tabular-nums; }
.pl { font-size: 14px; color: var(--on-navy-2); line-height: 1.45; }

@media (max-width: 480px) {
  .proof { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .stat { padding: 20px 14px 22px; }
}
</style>
