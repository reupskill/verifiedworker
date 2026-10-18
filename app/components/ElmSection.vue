<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="elm" class="elm">
    <div class="wrap grid">
      <div>
        <img src="/assets/elm-logo.avif" alt="Elm" class="logo">
        <h2 class="h2 big title">{{ t.elmH1 }}<span class="em">{{ t.elmH2 }}</span>{{ t.elmH3 }}</h2>
        <p class="lede p">{{ t.elmP }}</p>
      </div>
      <div>
        <div class="nums">
          <div v-for="n in t.elmNums" :key="n.l" class="num">
            <div class="v" dir="ltr">{{ n.v }}</div>
            <div class="l">{{ n.l }}</div>
          </div>
        </div>
        <div class="src">{{ t.elmSrc }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.elm { background: var(--lav-50); border-top: 1px solid var(--lav-100); }
.grid { padding-top: 44px; padding-bottom: 44px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: clamp(28px, 5vw, 72px); align-items: center; }
.logo { height: 40px; display: block; }
.title { margin-top: 22px; }
.em { color: var(--purple); }
.p { margin-top: 14px; max-width: 520px; }
.nums { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #DCD6EE; }
.num { padding-block: 22px; padding-inline-end: 16px; border-bottom: 1px solid #DCD6EE; display: flex; flex-direction: column; gap: 4px; }
.v { font-size: clamp(30px, 3.4vw, 40px); font-weight: 300; line-height: 1.1; color: var(--navy); unicode-bidi: isolate; text-align: start; }
.l { font-size: 13.5px; color: var(--muted); }
.src { font-size: 12px; color: var(--ink-3); margin-top: 12px; }
</style>
