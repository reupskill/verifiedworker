<script setup lang="ts">
// Animated identity check over the hero photo: a 12-second loop (120 ticks of
// 100 ms) of face scan → face match → seven checks ticking in → "verified"
// badge → fade and restart. Respects prefers-reduced-motion by showing the
// finished state.
const { t } = useLang()

const FACE = { left: 35.8, top: 25.5, w: 27.9, h: 23.8 } // % of the image

const tick = ref(0)
const clock = ref('')

let loop: ReturnType<typeof setInterval> | undefined
let clockTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const setClock = () => {
    try {
      clock.value = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Riyadh' }).format(new Date())
    } catch {}
  }
  setClock()
  clockTimer = setInterval(setClock, 15000)
  if (reduce) tick.value = 80
  else loop = setInterval(() => { tick.value = (tick.value + 1) % 120 }, 100)
})
onBeforeUnmount(() => { clearInterval(loop); clearInterval(clockTimer) })

const fading = computed(() => tick.value >= 110)
const scanning = computed(() => tick.value < 22)
const matched = computed(() => tick.value >= 22 && !fading.value)
const n = computed(() => Math.max(0, Math.min(7, Math.floor((tick.value - 24) / 6) + 1)))
const done = computed(() => tick.value >= 68 && !fading.value)
const ok = computed(() => n.value === 7)
const scanY = computed(() => (scanning.value ? ((tick.value % 11) / 10) * 100 : 50))
// Only the last three checks are on screen at once; the newest pops in.
const visible = computed(() => t.value.chipChecks.slice(Math.max(0, n.value - 3), n.value))

const pct = (v: number) => `${v}%`
const boxStyle = computed(() => ({
  left: pct(FACE.left - 1.5), top: pct(FACE.top - 1.5), width: pct(FACE.w + 3), height: pct(FACE.h + 3),
  transform: scanning.value ? `scale(${1.06 - (tick.value / 22) * 0.06})` : 'scale(1)',
}))
const imgScale = computed(() => `scale(${1 + Math.sin((tick.value / 120) * Math.PI * 2) * 0.008})`)
</script>

<template>
  <div class="art cut" dir="ltr">
    <img src="/assets/hero-riyadh-worker-elm.webp" :alt="t.heroAlt" class="photo" :style="{ transform: imgScale }" width="1180" height="1179">

    <div class="box" :style="boxStyle" aria-hidden="true">
      <span v-for="c in ['tl', 'tr', 'bl', 'br']" :key="c" class="corner" :class="[c, { done }]" />
      <div class="scan" :style="{ top: pct(scanY), opacity: scanning ? 1 : 0 }" />
      <div class="face cut" :class="{ on: matched }"><span class="dot" />{{ t.faceL }}</div>
    </div>

    <div class="counter cut" :style="{ opacity: fading ? 0 : 1 }" aria-hidden="true">
      <div class="counter-l">{{ t.scanL }}</div>
      <div class="counter-v" :class="{ ok }">{{ t.chipPillT.replace('{n}', String(n)) }}</div>
      <div class="track"><div class="fill" :class="{ ok }" :style="{ width: `${(n / 7) * 100}%` }" /></div>
    </div>

    <div class="verified cut" :class="{ on: done }" :style="{ top: pct(FACE.top + FACE.h + 4) }" aria-hidden="true">
      <span class="hex hex--inv">✓</span>{{ t.doneL }}
    </div>

    <div class="stack" aria-hidden="true">
      <div
        v-for="(c, k) in visible" :key="c" class="chip cut"
        :class="{ newest: k === visible.length - 1 }" :style="{ opacity: fading ? 0 : k === visible.length - 1 ? 1 : 0.82 }"
      >
        <span class="hex">✓</span><span>{{ c }}</span>
      </div>
    </div>

    <div class="loc" aria-hidden="true">
      <span class="pulse" :class="{ out: tick % 10 >= 5 }" />
      <span>{{ t.locL }} · {{ clock }}</span>
    </div>
  </div>
</template>

<style scoped>
.art { position: relative; width: 100%; max-width: 520px; margin-inline-start: auto; aspect-ratio: 1 / 1; --cut: 26px; background: #E6E4F5; box-shadow: 0 30px 70px rgba(4, 10, 30, 0.45); }
.photo { position: absolute; inset: -1%; width: 102%; height: 102%; object-fit: cover; display: block; transition: transform 0.1s linear; }

.box { position: absolute; transition: transform 0.1s linear; }
.corner { position: absolute; width: 18%; height: 18%; border: 0 solid #C18FD6; transition: border-color 0.4s; }
.corner.done { border-color: #21C28E; }
.tl { top: 0; left: 0; border-top-width: 4px; border-left-width: 4px; }
.tr { top: 0; right: 0; border-top-width: 4px; border-right-width: 4px; }
.bl { bottom: 0; left: 0; border-bottom-width: 4px; border-left-width: 4px; }
.br { bottom: 0; right: 0; border-bottom-width: 4px; border-right-width: 4px; }
.scan { position: absolute; left: 6%; right: 6%; height: 3px; background: linear-gradient(90deg, rgba(46, 159, 218, 0), #2E9FDA, rgba(46, 159, 218, 0)); box-shadow: 0 0 18px 4px rgba(110, 67, 181, 0.5); transition: opacity 0.3s; }
.face { position: absolute; left: 100%; top: 8%; margin-left: 10px; white-space: nowrap; background: #FFFFFF; color: var(--navy); font-size: 12.5px; font-weight: 600; padding: 6px 10px; --cut: 7px; box-shadow: 0 8px 20px rgba(12, 29, 70, 0.18); display: flex; align-items: center; gap: 7px; opacity: 0; transform: translateY(6px); transition: opacity 0.35s, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1); }
.face.on { opacity: 1; transform: translateY(0); }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #21C28E; }

.counter { position: absolute; left: 3%; top: 3.5%; background: rgba(255, 255, 255, 0.96); color: var(--navy); padding: 10px 14px; --cut: 10px; box-shadow: 0 10px 26px rgba(12, 29, 70, 0.18); min-width: 170px; transition: opacity 0.4s; }
.counter-l { font-size: 11.5px; font-weight: 600; letter-spacing: 0.08em; color: var(--slate-blue); }
html[lang="ar"] .counter-l { letter-spacing: 0; }
.counter-v { font-size: 15px; font-weight: 600; margin-top: 3px; color: var(--navy); font-variant-numeric: tabular-nums; transition: color 0.3s; }
.counter-v.ok { color: #11815D; }
.track { height: 3px; background: #EEF1FA; margin-top: 8px; }
.fill { height: 100%; background: var(--violet); transition: width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s; }
.fill.ok { background: #11815D; }

.verified { position: absolute; left: 50%; transform: translate(-50%, 0) scale(0.4); opacity: 0; transition: transform 0.5s cubic-bezier(0.3, 1.6, 0.5, 1), opacity 0.3s; background: #11815D; color: #FFFFFF; font-size: 14px; font-weight: 600; padding: 8px 16px; --cut: 9px; display: flex; align-items: center; gap: 8px; white-space: nowrap; box-shadow: 0 12px 28px rgba(17, 129, 93, 0.35); }
.verified.on { transform: translate(-50%, 0) scale(1); opacity: 1; }

.hex { width: 16px; height: 16px; flex-shrink: 0; clip-path: var(--hex); background: #11815D; color: #FFFFFF; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.hex--inv { background: #FFFFFF; color: #11815D; }

.stack { position: absolute; right: 3%; bottom: 4%; display: flex; flex-direction: column; gap: 8px; align-items: flex-end; width: min(62%, 300px); }
.chip { display: flex; align-items: center; gap: 9px; background: rgba(255, 255, 255, 0.96); color: var(--navy); font-size: 13px; font-weight: 500; padding: 8px 12px; --cut: 8px; box-shadow: 0 10px 26px rgba(12, 29, 70, 0.2); transition: opacity 0.4s; }
.chip.newest { animation: chip-in 0.45s cubic-bezier(0.2, 0.8, 0.2, 1); }
@keyframes chip-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* Live clock pill, laid exactly over the one painted into the photo. */
.loc { position: absolute; left: 1.2%; top: 91.2%; width: 31%; height: 7%; min-height: 30px; background: #FFFFFF; border-radius: 999px; display: flex; align-items: center; gap: 8px; padding: 0 14px; font-size: 13.5px; font-weight: 500; color: var(--navy); box-shadow: 0 6px 16px rgba(12, 29, 70, 0.12); white-space: nowrap; }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--violet); box-shadow: 0 0 0 0 rgba(110, 67, 181, 0.25); transition: box-shadow 0.5s; flex-shrink: 0; }
.pulse.out { box-shadow: 0 0 0 5px rgba(110, 67, 181, 0.25); }

@media (max-width: 480px) {
  .chip { font-size: 11.5px; padding: 6px 9px; }
  .counter { min-width: 0; padding: 8px 10px; }
  .counter-v { font-size: 13px; }
  .verified { font-size: 11.5px; }
  /* No room beside the face box on phones; the corners turning green carry it. */
  .face { display: none; }
  .loc { font-size: 11.5px; padding: 0 9px; width: auto; }
}
</style>
