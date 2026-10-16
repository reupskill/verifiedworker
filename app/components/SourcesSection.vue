<script setup lang="ts">
const { t } = useLang()

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

const rows = computed(() =>
  t.value.countries.map((country, i) => ({
    country,
    auths: t.value.auth[i]!.map((a, j) => ({
      ...a,
      logo: `/assets/sources/${LOGOS[i]![j]}.png`,
      label: t.value[METHOD_LABEL[a.m]],
    })),
  })),
)

const stats = computed(() => [
  { v: '18', l: t.value.srcS1 },
  { v: '6', l: t.value.srcS2 },
  { v: '100%', l: t.value.srcS3 },
])

const legend = computed(() => [
  { c: '#0F808C', k: t.value.mDig, d: t.value.mDigD },
  { c: '#1C6FA0', k: t.value.mAuth, d: t.value.mAuthD },
  { c: '#7E8C92', k: t.value.mConf, d: t.value.mConfD },
])
</script>

<template>
  <section id="sources" class="wrap sources">
    <div class="top">
      <div>
        <div class="eyebrow">{{ t.srcE }}</div>
        <h2 class="h2 big">{{ t.srcH }}</h2>
        <p class="lede p">{{ t.srcP }}</p>
      </div>
      <div class="stats">
        <div v-for="s in stats" :key="s.v" class="stat">
          <div class="sv">{{ s.v }}</div>
          <div class="sl">{{ s.l }}</div>
        </div>
      </div>
    </div>

    <div class="table">
      <div v-for="r in rows" :key="r.country" class="row">
        <div class="country">
          <span class="cn">{{ r.country }}</span>
          <span class="cs">{{ t.srcPanelSub }}</span>
        </div>
        <div v-for="a in r.auths" :key="a.logo" class="auth">
          <div class="logo"><img :src="a.logo" :alt="a.n" loading="lazy"></div>
          <div class="txt">
            <span class="an">{{ a.n }}</span>
            <span class="av">{{ a.v }}</span>
            <span class="tag" :class="`pill--${a.m}`">{{ a.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="below">
      <div class="legend">
        <span v-for="l in legend" :key="l.k"><span class="ld" :style="{ background: l.c }" /><strong>{{ l.k }}</strong>{{ l.d }}</span>
      </div>
      <div class="foot">{{ t.srcFoot }}</div>
    </div>
  </section>
</template>

<style scoped>
.sources { padding-top: 88px; padding-bottom: 88px; }
.top { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr)); gap: 32px; align-items: end; }
.p { max-width: 520px; }
.stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.stat { background: var(--teal-50); border-radius: 14px; padding: 14px 16px; }
.sv { font-size: 26px; font-weight: 800; color: var(--deep); line-height: 1; }
.sl { font-size: 12px; color: var(--muted); margin-top: 6px; }

.table { margin-top: 36px; background: var(--surface-alt); border: 1px solid var(--border); border-radius: 22px; overflow: hidden; }
.row { display: grid; grid-template-columns: minmax(140px, 0.7fr) repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 12px; padding: 16px 20px; align-items: stretch; }
.row + .row { border-top: 1px solid var(--border); }
.country { display: flex; flex-direction: column; justify-content: center; gap: 3px; }
.cn { font-size: 15px; font-weight: 800; color: var(--deep-ink); }
.cs { font-size: 12px; color: var(--ink-3); }
.auth { display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid var(--border); border-radius: 14px; padding: 10px 12px; }
.logo { width: 64px; height: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.logo img { max-width: 100%; max-height: 100%; display: block; }
.txt { min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.an { font-size: 13px; font-weight: 700; color: var(--deep-ink); line-height: 1.3; }
.av { font-size: 12px; color: var(--muted); line-height: 1.35; }
.tag { align-self: flex-start; margin-top: 3px; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 999px; }

.below { display: flex; justify-content: space-between; gap: 16px 28px; flex-wrap: wrap; margin-top: 16px; align-items: center; }
.legend { display: flex; gap: 18px; flex-wrap: wrap; font-size: 12.5px; color: var(--ink-2); }
.legend > span { display: flex; align-items: center; gap: 7px; }
.legend strong { color: var(--deep-ink); }
.ld { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.foot { font-size: 12.5px; color: var(--muted); max-width: 460px; line-height: 1.5; }

@media (max-width: 520px) {
  .row { grid-template-columns: minmax(0, 1fr); padding: 14px; }
  .stat { padding: 12px; }
  .sv { font-size: 22px; }
}
</style>
