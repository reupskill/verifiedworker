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

// Philippines first: it's the pilot corridor and Juan's story.
const country = ref(4)

const authorities = computed(() =>
  t.value.auth[country.value]!.map((a, j) => ({
    ...a,
    logo: `/assets/sources/${LOGOS[country.value]![j]}.png`,
    label: t.value[METHOD_LABEL[a.m]],
  })),
)
</script>

<template>
  <section id="sources" class="wrap sources">
    <div class="grid">
      <div>
        <div class="eyebrow">{{ t.srcE }}</div>
        <h2 class="h2">{{ t.srcH }}</h2>
        <p class="lede p">{{ t.srcP }}</p>
        <div class="tabs" role="tablist" :aria-label="t.srcE">
          <button
            v-for="(n, i) in t.countries" :key="i"
            type="button" role="tab" class="tab" :class="{ on: country === i }"
            :aria-selected="country === i" @click="country = i"
          >
            <span>{{ n }}</span>
            <span class="count">3</span>
          </button>
        </div>
        <div class="legend">
          <span><span class="ld" style="background: #0F808C" />{{ t.mDig }}</span>
          <span><span class="ld" style="background: #1C6FA0" />{{ t.mAuth }}</span>
          <span><span class="ld" style="background: #7E8C92" />{{ t.mConf }}</span>
        </div>
      </div>

      <div class="panel box" role="tabpanel">
        <div class="box-head">
          <span class="country">{{ t.countries[country] }}</span>
          <span class="sub">{{ t.srcPanelSub }}</span>
        </div>
        <div class="auths">
          <div v-for="a in authorities" :key="a.logo" class="card auth">
            <div class="logo"><img :src="a.logo" :alt="a.n" loading="lazy"></div>
            <div class="an">{{ a.n }}</div>
            <div class="av">{{ a.v }}</div>
            <span class="pill" :class="`pill--${a.m}`">{{ a.label }}</span>
          </div>
        </div>
        <div class="foot">{{ t.srcFoot }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sources { padding-top: 80px; padding-bottom: 80px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 48px; align-items: start; }
.p { font-size: 14.5px; }
.tabs { display: flex; flex-direction: column; gap: 4px; margin-top: 24px; }
.tab { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 11px 14px; border-radius: 11px; cursor: pointer; font-size: 14.5px; font-weight: 600; color: var(--deep-ink); background: transparent; border: 0; text-align: start; }
.tab:hover { background: var(--teal-50); }
.tab.on { font-weight: 700; color: #FFFFFF; background: var(--deep); }
.count { font-size: 11.5px; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: var(--hairline); color: var(--ink-3); }
.tab.on .count { background: rgba(255, 255, 255, 0.18); color: #FFFFFF; }
.legend { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 22px; font-size: 12.5px; color: var(--muted); }
.legend > span { display: flex; align-items: center; gap: 6px; }
.ld { width: 8px; height: 8px; border-radius: 50%; }

.box { padding: 24px; }
.box-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.country { font-size: 18px; font-weight: 800; color: var(--deep-ink); }
.sub { font-size: 12.5px; color: var(--muted); }
.auths { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr)); gap: 12px; }
.auth { border-radius: 16px; padding: 16px; }
.logo { height: 64px; display: flex; align-items: center; justify-content: center; }
.logo img { max-width: 100%; max-height: 100%; display: block; }
.an { font-size: 13.5px; font-weight: 700; color: var(--deep-ink); margin-top: 14px; }
.av { font-size: 12.5px; color: var(--muted); margin-top: 4px; line-height: 1.5; }
.pill { margin-top: 10px; padding: 3px 9px; }
.foot { font-size: 12.5px; color: var(--muted); margin-top: 16px; line-height: 1.55; }
</style>
