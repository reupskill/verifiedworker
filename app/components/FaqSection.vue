<script setup lang="ts">
const { t } = useLang()

// First question open by default; one open at a time.
const open = ref(0)
const toggle = (i: number) => { open.value = open.value === i ? -1 : i }
</script>

<template>
  <section id="faq" class="faq">
    <div class="wrap grid">
      <div>
        <div class="eyebrow">{{ t.faqE }}</div>
        <h2 class="h2 big">{{ t.faqH }}</h2>
        <div class="trust">
          <div v-for="tr in t.trust" :key="tr.h" class="tr">
            <div class="mark" aria-hidden="true" />
            <div>
              <div class="tr-h">{{ tr.h }}</div>
              <div class="tr-b">{{ tr.b }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div v-for="(q, i) in t.faq" :key="i" class="qa">
          <h3>
            <button
              :id="`faq-q-${i}`" type="button" class="q"
              :aria-expanded="open === i" :aria-controls="`faq-a-${i}`" @click="toggle(i)"
            >
              <span>{{ q.q }}</span>
              <span class="sign" aria-hidden="true">{{ open === i ? '−' : '+' }}</span>
            </button>
          </h3>
          <div v-show="open === i" :id="`faq-a-${i}`" class="a" role="region" :aria-labelledby="`faq-q-${i}`">{{ q.a }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq { border-top: 1px solid var(--border); }
.grid { padding-top: 80px; padding-bottom: 80px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 48px; align-items: start; }
.trust { display: flex; flex-direction: column; gap: 16px; margin-top: 28px; }
.tr { display: flex; gap: 12px; align-items: flex-start; }
.mark { width: 28px; height: 28px; border-radius: 7px; background: var(--deep); clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 72%); flex-shrink: 0; }
.tr-h { font-size: 14.5px; font-weight: 700; color: var(--deep-ink); }
.tr-b { font-size: 13.5px; color: var(--muted); margin-top: 4px; line-height: 1.55; }
.list { display: flex; flex-direction: column; }
.qa { border-bottom: 1px solid var(--border); }
h3 { margin: 0; }
.q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 18px 0; cursor: pointer; background: none; border: 0; text-align: start; font-size: 16px; font-weight: 700; color: var(--deep-ink); }
.q:hover { color: var(--deep); }
.sign { font-size: 20px; font-weight: 600; color: var(--blue); line-height: 1; flex-shrink: 0; }
.a { font-size: 14.5px; color: var(--ink-2); line-height: 1.7; padding: 0 0 20px; max-width: 560px; }
</style>
