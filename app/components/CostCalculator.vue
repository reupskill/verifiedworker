<script setup lang="ts">
// "Cost of getting it wrong" calculator: failed placements × cost per hire.
const { t } = useLang()

const hires = ref('200')
const cost = ref('15000')
const rate = ref('5')

const num = (v: string) => Math.max(0, Number.parseFloat(v) || 0)
const nCost = computed(() => num(cost.value))
const failed = computed(() => {
  const r = Math.min(100, num(rate.value))
  return Math.round((num(hires.value) * r) / 100 * 10) / 10
})
const fmt = (n: number) => n.toLocaleString('en-US')
const total = computed(() => `SAR ${fmt(Math.round(failed.value * nCost.value))}`)
const sub = computed(() => t.value.calcSub.replace('{n}', fmt(failed.value)).replace('{c}', fmt(nCost.value)))
</script>

<template>
  <section id="cost" class="wrap cost">
    <div class="box">
      <div>
        <h2 class="h2 big">{{ t.calcH }}</h2>
        <p class="lede p">{{ t.calcP }}</p>
        <div class="fields">
          <label class="field">
            <span>{{ t.calcHires }}</span>
            <input v-model="hires" type="number" min="1" inputmode="numeric">
          </label>
          <label class="field">
            <span>{{ t.calcCost }}</span>
            <input v-model="cost" type="number" min="0" step="500" inputmode="numeric">
          </label>
          <label class="field">
            <span>{{ t.calcRate }}</span>
            <input v-model="rate" type="number" min="0" max="100" step="0.5" inputmode="decimal">
          </label>
          <div class="ex">{{ t.calcEx }}</div>
        </div>
      </div>
      <div class="out" aria-live="polite">
        <div class="eyebrow out-l">{{ t.calcOutL }}</div>
        <div class="total" dir="ltr">{{ total }}</div>
        <div class="sub">{{ sub }}</div>
        <div class="rule" />
        <div class="note">{{ t.calcNote }}</div>
        <a href="#pilot" class="out-cta">{{ t.calcCta }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cost { padding-top: 16px; padding-bottom: 44px; }
.box { background: var(--lav-50); border: 1px solid var(--lav-100); border-radius: 28px; padding: clamp(24px, 4vw, 44px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 36px; align-items: center; }
.p { max-width: 460px; }
.fields { display: flex; flex-direction: column; gap: 14px; margin-top: 26px; max-width: 420px; }
.field { display: grid; grid-template-columns: minmax(0, 1fr) 130px; gap: 12px; align-items: center; }
.field span { font-size: 13.5px; font-weight: 700; color: var(--navy); }
input { border: 1px solid var(--border-strong); border-radius: 10px; padding: 10px 12px; font-size: 14px; font-family: inherit; color: var(--ink); background: #FFFFFF; width: 100%; outline: none; min-height: 42px; }
input:focus { border-color: var(--cyan); box-shadow: 0 0 0 3px rgba(10, 166, 226, 0.2); }
.ex { font-size: 12px; color: var(--ink-3); }

.out { background: var(--navy-2); background-image: radial-gradient(circle at 100% 0%, rgba(10, 166, 226, 0.25), rgba(10, 166, 226, 0) 55%); border-radius: 22px; padding: 30px; color: #FFFFFF; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 24px 60px rgba(20, 20, 60, 0.22); min-width: 0; }
.out-l { color: var(--cyan-light); }
.total { font-size: clamp(36px, 4.4vw, 52px); font-weight: 600; letter-spacing: -0.025em; line-height: 1; unicode-bidi: isolate; overflow-wrap: anywhere; }
html[dir="rtl"] .total { text-align: right; }
.sub { font-size: 14px; color: var(--lav-200); }
.rule { height: 1px; background: rgba(255, 255, 255, 0.12); margin: 6px 0; }
.note { font-size: 14.5px; color: var(--lav-100); line-height: 1.6; }
.out-cta { align-self: flex-start; background: #FFFFFF; color: var(--navy); border-radius: 10px; padding: 12px 18px; font-size: 14px; font-weight: 700; margin-top: 4px; }
.out-cta:hover { color: var(--indigo); background: var(--lav-50); }

@media (max-width: 420px) {
  .field { grid-template-columns: minmax(0, 1fr) 110px; }
  .out { padding: 24px; }
}
</style>
