<script setup lang="ts">
const { lang, t, setLang } = useLang()
</script>

<template>
  <header class="bar">
    <div class="wrap row">
      <a href="#story" class="brands" aria-label="Vetted Worker">
        <img src="/assets/elm-logo.avif" alt="Elm" class="elm">
        <span class="sep" aria-hidden="true" />
        <span class="name">Vetted Worker</span>
      </a>
      <div class="actions">
        <div class="seg" role="group" aria-label="Language">
          <button type="button" :class="{ on: lang === 'en' }" :aria-pressed="lang === 'en'" lang="en" @click="setLang('en')">EN</button>
          <button type="button" :class="{ on: lang === 'ar' }" :aria-pressed="lang === 'ar'" lang="ar" @click="setLang('ar')">العربية</button>
        </div>
        <a href="#pilot" class="btn cta">{{ t.navCta }}</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bar { position: sticky; top: 0; z-index: 30; background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
.row { padding-top: 12px; padding-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brands { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.elm { height: 34px; display: block; }
.sep { width: 1px; height: 28px; background: var(--border-strong); }
.name { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; color: var(--navy); line-height: 1; white-space: nowrap; }
.actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.seg { display: flex; background: var(--lav-50); border: 1px solid var(--border); border-radius: 999px; padding: 3px; }
.seg button { padding: 5px 11px; border-radius: 999px; font-size: 12.5px; font-weight: 700; cursor: pointer; border: 0; background: transparent; color: var(--muted); }
.seg button.on { background: var(--indigo); color: #FFFFFF; }
.cta { border-radius: 9px; padding: 9px 14px; font-size: 13.5px; }

/* Phones: the nav CTA goes (the hero has the same button right below). */
@media (max-width: 520px) {
  .row { gap: 10px; }
  .elm { height: 28px; }
  .sep { height: 24px; }
  .brands { gap: 9px; }
  .name { font-size: 15px; }
  .cta { display: none; }
}
</style>
