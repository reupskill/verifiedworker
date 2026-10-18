<script setup lang="ts">
const { t, dir } = useLang()

// Logos per country, in the same order as `t.countries` / `t.auth`.
const LOGOS = [
  ['elm', 'absher', 'qiwa'],
  ['emigrate', 'uidai', 'digilocker'],
  ['nadra', 'beoe', 'navttc'],
  ['bmet', 'bd-ec', 'bd-police'],
  ['dmw', 'prc', 'nbi'],
  ['eg-moi', 'eg-mol', 'eg-scu'],
]
const METHOD_LABEL = { DIGITAL: 'mDig', AUTHENTICATED: 'mAuth', CONFIRMED: 'mConf' } as const

const cards = (countries: number[]) => computed(() =>
  countries.flatMap(i => t.value.auth[i]!.map((a, j) => ({
    ...a,
    country: t.value.countries[i],
    logo: `/assets/sources/${LOGOS[i]![j]}.png`,
    label: t.value[METHOD_LABEL[a.m]],
  }))),
)
// Two marquee rows running in opposite directions.
const rows = [
  { cards: cards([0, 1, 2]), reverse: false },
  { cards: cards([3, 4, 5]), reverse: true },
]

// Corridor map labels, positioned in % of the SVG (viewBox 0 40 540 240).
const mapLabels = computed(() => [
  { l: t.value.countries[5], x: 7.41, y: 32.5, dy: '10px' },
  { l: t.value.countries[2], x: 42.59, y: 20, dy: '-28px' },
  { l: t.value.countries[1], x: 57.41, y: 58.33, dy: '10px' },
  { l: t.value.countries[3], x: 73.15, y: 45.83, dy: '-28px' },
  { l: t.value.countries[4], x: 92.59, y: 81.25, dy: '-30px' },
])
const legend = computed(() => [
  { k: 'dig', l: t.value.mDig, d: t.value.lgDig },
  { k: 'auth', l: t.value.mAuth, d: t.value.lgAuth },
  { k: 'conf', l: t.value.mConf, d: t.value.lgConf },
])
</script>

<template>
  <section id="sources" class="wrap sources">
    <div class="map-panel cut">
      <div class="map" dir="ltr">
        <svg viewBox="0 40 540 240" role="img" aria-label="Corridors into Riyadh">
          <defs>
            <pattern id="vwDots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#BFC9E6" fill-opacity="0.16" />
            </pattern>
          </defs>
          <rect x="0" y="40" width="540" height="240" fill="url(#vwDots)" />
          <g fill="none" stroke-opacity="0.75" stroke-width="1.3" stroke-dasharray="4 5">
            <path d="M110 150 Q 75 63 40 118" stroke="#F7A573" />
            <path d="M110 150 Q 170 33 230 88" stroke="#BFC9E6" />
            <path d="M110 150 Q 210 95 310 180" stroke="#BFC9E6" />
            <path d="M110 150 Q 252.5 95 395 150" stroke="#BFC9E6" />
            <path d="M110 150 Q 305 95 500 235" stroke="#BFC9E6" />
          </g>
          <circle cx="40" cy="118" r="5" fill="#F7A573" />
          <g fill="#BFC9E6">
            <circle cx="230" cy="88" r="4.5" />
            <circle cx="310" cy="180" r="4.5" />
            <circle cx="395" cy="150" r="4.5" />
            <circle cx="500" cy="235" r="4.5" />
          </g>
          <polygon points="110,138 120.4,144 120.4,156 110,162 99.6,156 99.6,144" fill="#2E9FDA" />
        </svg>
        <span class="ml ml--home" style="left: 20.37%; top: 45.83%;">{{ t.mapRiyadh }}</span>
        <span v-for="m in mapLabels" :key="m.x" class="ml" :style="{ left: `${m.x}%`, top: `${m.y}%`, transform: `translate(-50%, ${m.dy})` }">{{ m.l }}</span>
      </div>
      <div class="caps"><span>{{ t.mapCap1 }}</span><span>{{ t.mapCap2 }}</span></div>
    </div>

    <div class="legend">
      <div v-for="l in legend" :key="l.k" class="lg">
        <span class="lg-k cut" :class="`lg-k--${l.k}`">{{ l.l }}</span>
        <span class="lg-d">{{ l.d }}</span>
      </div>
    </div>

    <h2 class="h2 big">{{ t.srcH }}</h2>
    <p class="lede p">{{ t.srcP }}</p>

    <div class="marquee">
      <div v-for="(r, ri) in rows" :key="ri" class="track" :class="{ reverse: r.reverse }" dir="ltr">
        <template v-for="copyIdx in [0, 1]" :key="copyIdx">
          <div v-for="a in r.cards.value" :key="`${copyIdx}-${a.logo}`" class="auth" :dir="dir" :aria-hidden="copyIdx === 1 ? 'true' : undefined">
            <div class="logo"><img :src="a.logo" :alt="copyIdx === 0 ? a.n : ''" loading="lazy"></div>
            <div class="txt">
              <span class="cn">{{ a.country }}</span>
              <span class="an">{{ a.n }}</span>
              <span class="av">{{ a.v }}</span>
              <span class="tag" :class="`pill--${a.m}`">{{ a.label }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="below">
      <div class="foot">{{ t.srcFoot }}</div>
    </div>
  </section>
</template>

<style scoped>
.sources { padding-top: 44px; padding-bottom: 44px; }

.map-panel { background: var(--navy); padding: clamp(18px, 3vw, 32px); --cut: 24px; }
.map { position: relative; }
.map svg { width: 100%; height: auto; display: block; }
.ml { position: absolute; transform: translate(-50%, 10px); font-size: clamp(11px, 1.2vw, 14px); font-weight: 600; color: var(--on-navy); white-space: nowrap; }
.ml--home { transform: translate(-50%, 14px); font-weight: 700; color: #FFFFFF; }
.caps { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; font-size: 13.5px; color: var(--on-navy-2); }

.legend { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 20px 28px; margin-top: 22px; margin-bottom: 28px; }
.lg { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
.lg-k { font-size: 12.5px; font-weight: 700; letter-spacing: var(--ls); padding: 6px 14px; --cut: 8px; }
.lg-k--dig { color: #0070C7; background: #E6F1FA; }
.lg-k--auth { color: var(--violet-hover); background: #F0E9F8; }
.lg-k--conf { color: #B5431F; background: #FDECE4; }
.lg-d { font-size: 15px; color: var(--slate-blue-2); line-height: 1.55; }

.p { max-width: 520px; }

.marquee { margin-top: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 12px; padding: 4px 0; -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
.track { display: flex; gap: 12px; width: max-content; animation: roll 70s linear infinite; }
.track.reverse { animation-direction: reverse; }
.track:hover { animation-play-state: paused; }
@keyframes roll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 6px)); } }
/* No motion: let people scroll the row themselves instead. (The descendant
   selector keeps the CSS minifier from merging this out of the media query.) */
@media (prefers-reduced-motion: reduce) {
  .marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
  .marquee > .track { animation-name: none; }
}

.auth { flex: 0 0 300px; width: 300px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid var(--border); border-radius: 14px; padding: 10px 12px; }
.logo { width: 64px; height: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.logo img { max-width: 100%; max-height: 100%; display: block; }
.txt { min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.cn { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; color: var(--slate-blue); }
html[lang="ar"] .cn { letter-spacing: 0; }
.an { font-size: 13px; font-weight: 700; color: var(--navy); line-height: 1.3; }
.av { font-size: 12px; color: var(--muted); line-height: 1.35; }
.tag { align-self: flex-start; margin-top: 3px; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 999px; }

.below { display: flex; justify-content: flex-end; margin-top: 16px; }
.foot { font-size: 12.5px; color: var(--muted); max-width: 460px; line-height: 1.5; }

@media (max-width: 480px) {
  .ml { font-size: 9.5px; }
}
</style>
