<script setup lang="ts">
const { t } = useLang()

const certs = ['SOC 2 Type II', 'ISO 27001', 'ISO 27018', 'ISO 42001', 'GDPR', 'PDPL']

const DONE = '#21BFAF'
const IDLE = '#E4E9EC'
const ORANGE = '#FF993C'
const RED = '#C2453D'
// Juan: four stages clear, decision pending review.
const juanBars = [DONE, DONE, DONE, DONE, ORANGE]
// Asif: identity flagged, source failed, history never ran, stopped.
const asifBars = [DONE, DONE, RED, IDLE, RED]

const pins = computed(() => [
  { label: t.value.mapRiyadh, left: '22%', top: '57%', dot: DONE },
  { label: t.value.mapLahore, left: '50%', top: '33%', dot: RED },
  { label: t.value.mapManila, left: '85.3%', top: '61.5%', dot: ORANGE },
])
</script>

<template>
  <section id="story" class="hero">
    <div class="wrap grid">
      <div>
        <div class="eyebrow">{{ t.heroE }}</div>
        <h1>{{ t.h1a }}<span class="hl">{{ t.h1b }}</span>{{ t.h1c }}</h1>
        <p class="lede intro">{{ t.heroP }}</p>
        <div class="ctas">
          <a href="#pilot" class="btn cta">{{ t.cta1 }}</a>
        </div>
        <div class="certs">
          <span class="certs-t">{{ t.certT }}</span>
          <span v-for="c in certs" :key="c" class="cert">{{ c }}</span>
        </div>
      </div>

      <div class="visual">
        <div class="map" dir="ltr">
          <img src="/assets/hero-corridors.svg" alt="" class="map-img">
          <div v-for="p in pins" :key="p.left" class="pin" :style="{ left: p.left, top: p.top }">
            <span class="dot" :style="{ background: p.dot }" />{{ p.label }}
          </div>
        </div>
        <WorkerCard
          class="juan"
          :name="t.juan" :meta="t.juanMeta" :badge="t.reviewD9" tone="review"
          icon="/assets/icon-caregiver.svg" :bars="juanBars" :stages="t.bar"
        />
        <WorkerCard
          class="asif"
          :name="t.asif" :meta="t.asifMeta" :badge="t.stopD4" tone="stop"
          icon="/assets/icon-electrician.svg" :bars="asifBars" :stages="t.bar"
        />
        <div class="fict">{{ t.fict }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { background: var(--teal-50); background-image: radial-gradient(circle at 88% 0%, rgba(70, 178, 200, 0.2), rgba(70, 178, 200, 0) 42%); }
.grid { padding-top: 64px; padding-bottom: 72px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: 56px; align-items: center; }
h1 { margin: 16px 0 0; font-size: clamp(30px, 3.4vw, 44px); font-weight: 800; letter-spacing: -0.025em; line-height: 1.08; color: var(--deep-ink); }
.intro { margin-top: 16px; max-width: 500px; }
.ctas { display: flex; gap: 10px; margin-top: 28px; flex-wrap: wrap; }
.cta { border-radius: 10px; padding: 12px 18px; font-size: 14px; box-shadow: 0 6px 18px rgba(17, 87, 102, 0.22); }
.certs { margin-top: 36px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.certs-t { font-size: 12px; font-weight: 700; color: var(--ink-3); }
.cert { font-size: 11.5px; font-weight: 700; color: var(--deep); background: #FFFFFF; border: 1px solid var(--teal-200); padding: 4px 9px; border-radius: 7px; }

.visual { display: flex; flex-direction: column; gap: 14px; }
.map { position: relative; width: 100%; height: 400px; border-radius: 24px; overflow: hidden; box-shadow: 0 24px 60px rgba(11, 56, 66, 0.25); }
.map-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.pin { position: absolute; transform: translate(-50%, -150%); display: flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.95); border-radius: 999px; padding: 4px 10px 4px 8px; font-size: 11.5px; font-weight: 700; color: var(--deep-ink); white-space: nowrap; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.dot { width: 7px; height: 7px; border-radius: 50%; }
.juan { box-shadow: 0 20px 60px rgba(17, 87, 102, 0.12); margin: -110px 24px 0; }
.asif { box-shadow: 0 20px 60px rgba(17, 87, 102, 0.08); margin-inline-start: 60px; margin-inline-end: 24px; }
.fict { font-size: 12px; color: var(--ink-3); margin-inline-start: 36px; }

@media (max-width: 520px) {
  .map { height: 300px; }
  .juan { margin: -90px 8px 0; }
  .asif { margin-inline-start: 24px; margin-inline-end: 8px; }
  .fict { margin-inline-start: 12px; }
}
</style>
