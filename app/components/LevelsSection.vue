<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="levels" class="levels">
    <div class="wrap inner">
      <div class="eyebrow e">{{ t.lvE }}</div>
      <h2 class="h2 h">{{ t.lvH }}</h2>
      <div class="grid">
        <div v-for="(l, i) in t.levels" :key="l.n" class="lvl" :class="{ 'lvl--hi': i === 1 }">
          <div class="top">
            <span class="n">{{ l.n }}</span>
            <span class="time">{{ l.time }}</span>
          </div>
          <div class="who">{{ l.who }}</div>
          <ul>
            <li v-for="it in l.items" :key="it"><span class="ck" aria-hidden="true">✓</span><span>{{ it }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.levels { background: var(--deep-ink); background-image: radial-gradient(circle at 8% 0%, rgba(70, 178, 200, 0.2), rgba(70, 178, 200, 0) 40%); color: #FFFFFF; }
.inner { padding-top: 72px; padding-bottom: 72px; }
.e { color: var(--blue-light); }
.h { color: #FFFFFF; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; margin-top: 32px; }
.lvl { border-radius: 18px; padding: 22px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(144, 208, 222, 0.26); }
.lvl--hi { background: rgba(70, 178, 200, 0.14); border: 1.5px solid var(--blue); }
.top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.n { font-size: 18px; font-weight: 800; }
.time { font-size: 13px; font-weight: 700; color: var(--blue-light); }
.who { font-size: 11.5px; font-weight: 700; letter-spacing: var(--ls); color: var(--blue); margin-top: 6px; }
ul { list-style: none; margin: 16px 0 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
li { display: flex; gap: 9px; align-items: flex-start; font-size: 13.5px; color: #D3E9EF; line-height: 1.5; }
.ck { color: var(--blue); font-weight: 800; }
</style>
