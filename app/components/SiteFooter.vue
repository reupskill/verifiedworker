<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <footer class="foot">
    <div class="wrap inner">
      <div class="cols">
        <div>
          <div class="brand">
            <div class="chip"><img src="/assets/elm-logo.avif" alt="Elm" class="elm"></div>
            <div class="partner">
              <span>{{ t.inPartner }}</span>
              <img src="/assets/youverify-logo-white-tight.svg" alt="Youverify" class="yv">
            </div>
          </div>
          <div class="tag">{{ t.footTag }}</div>
        </div>
        <nav v-for="fc in t.footCols" :key="fc.h" :aria-label="fc.h">
          <div class="h">{{ fc.h }}</div>
          <div class="links">
            <a v-for="lk in fc.links" :key="lk.href" :href="lk.href">{{ lk.l }}</a>
          </div>
        </nav>
      </div>
      <div class="legal">
        <span>{{ t.copy }}</span>
        <span>{{ t.partner }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.foot { background: var(--deep-ink); color: #FFFFFF; }
.inner { padding-top: 48px; padding-bottom: 28px; }
.cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr)); gap: 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.brand { display: flex; align-items: center; gap: 12px; }
.chip { background: #FFFFFF; border-radius: 10px; padding: 8px 14px; display: flex; align-items: center; }
.elm { height: 30px; display: block; }
.partner { display: flex; flex-direction: column; gap: 4px; }
.partner span { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; color: rgba(255, 255, 255, 0.65); line-height: 1; white-space: nowrap; }
html[lang="ar"] .partner span { letter-spacing: 0; }
.yv { height: 14px; display: block; align-self: flex-start; }
.tag { font-size: 13.5px; color: rgba(255, 255, 255, 0.7); margin-top: 14px; line-height: 1.6; max-width: 240px; }
.h { font-size: 11.5px; font-weight: 700; letter-spacing: var(--ls); color: var(--blue-light); }
.links { display: flex; flex-direction: column; gap: 9px; margin-top: 12px; }
.links a { font-size: 13.5px; color: rgba(255, 255, 255, 0.72); }
.links a:hover { color: #FFFFFF; }
.legal { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-top: 20px; font-size: 12.5px; color: rgba(255, 255, 255, 0.5); }
</style>
