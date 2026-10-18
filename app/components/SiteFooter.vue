<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <footer class="foot">
    <div class="wrap inner">
      <div class="cols">
        <div>
          <img src="/assets/elm-logo-white.svg" alt="Elm" class="logo">
          <p class="about">{{ t.ftP }}</p>
        </div>
        <nav :aria-label="t.ftH1">
          <div class="h">{{ t.ftH1 }}</div>
          <div class="links">
            <a v-for="lk in t.ftLinks" :key="lk.href" :href="lk.href">{{ lk.l }}</a>
          </div>
        </nav>
        <div>
          <div class="h">{{ t.ftH2 }}</div>
          <div class="links">
            <span>{{ t.ftTeam }}</span>
            <a href="mailto:vw@youverify.co" dir="ltr" class="ltr">vw@youverify.co</a>
            <a href="tel:+966555386898" dir="ltr" class="ltr">+966 55 538 6898</a>
            <span>{{ t.ftLoc }}</span>
          </div>
        </div>
      </div>
      <div class="partner-row">
        <div class="partner"><span>{{ t.ftPartner }}</span><img src="/assets/youverify-logo-white-tight.svg" alt="Youverify" class="yv"></div>
        <span class="certs" dir="ltr">ISO/IEC 27001 · ISO/IEC 27018 · ISO/IEC 42001 · SOC 2 Type II</span>
      </div>
      <div class="legal">
        <p v-for="(lg, i) in t.legal" :key="i"><strong v-if="lg.h">{{ lg.h }}</strong> {{ lg.b }}</p>
        <p class="copy">{{ t.copy }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.foot { background: var(--navy-3); color: rgba(225, 230, 245, 0.82); }
.inner { padding-top: 40px; padding-bottom: 28px; }
.cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 40px; padding-bottom: 36px; border-bottom: 1px solid rgba(191, 201, 230, 0.18); }
.logo { height: 44px; width: auto; display: block; }
.about { font-size: 14px; line-height: 1.6; margin: 16px 0 0; max-width: 44ch; }
.h { font-size: 12.5px; font-weight: 600; letter-spacing: var(--ls); color: rgba(191, 201, 230, 0.7); margin-bottom: 14px; }
.links { display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; }
.links a { color: rgba(225, 230, 245, 0.82); }
.links a:hover { color: #FFFFFF; }
.ltr { unicode-bidi: isolate; text-align: start; }
.partner-row { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; padding-top: 24px; font-size: 13px; color: rgba(191, 201, 230, 0.7); }
.partner { display: flex; align-items: center; gap: 12px; }
.yv { height: 20px; width: auto; display: block; opacity: 0.9; }
.certs { font-family: var(--font-mono); font-size: 12px; unicode-bidi: isolate; }
.legal { display: flex; flex-direction: column; gap: 10px; margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(191, 201, 230, 0.18); }
.legal p { margin: 0; font-size: 12px; line-height: 1.65; color: rgba(191, 201, 230, 0.62); }
.legal strong { color: rgba(225, 230, 245, 0.85); font-weight: 600; }
.legal .copy { margin-top: 6px; color: rgba(191, 201, 230, 0.5); }
</style>
