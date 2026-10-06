<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="pilot" class="pilot">
    <div class="wrap grid">
      <div>
        <div class="eyebrow">{{ t.pilotE }}</div>
        <h2 class="h2">{{ t.pilotH }}</h2>
        <p class="lede">{{ t.pilotP }}</p>
        <div class="terms">
          <div class="card term"><div class="th">{{ t.provH }}</div><div class="tb">{{ t.provB }}</div></div>
          <div class="card term"><div class="th">{{ t.recvH }}</div><div class="tb">{{ t.recvB }}</div></div>
        </div>
        <ol class="timeline">
          <li v-for="tl in t.timeline" :key="tl.k"><div class="k">{{ tl.k }}</div><div class="v">{{ tl.v }}</div></li>
        </ol>
        <div class="contact">
          <span class="ce">{{ t.contactE }}</span>
          <a href="mailto:vw@youverify.co">vw@youverify.co</a>
          <a href="tel:+966555386898" dir="ltr" class="tel">+966 55 538 6898</a>
        </div>
      </div>
      <PilotForm />
    </div>
  </section>
</template>

<style scoped>
.pilot { background: var(--teal-50); border-top: 1px solid var(--border); }
.grid { padding-top: 64px; padding-bottom: 64px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); gap: 48px; align-items: start; }
.terms { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 12px; margin-top: 22px; }
.term { border-radius: 14px; padding: 16px; }
.th { font-size: 14px; font-weight: 700; color: var(--deep); }
.tb { font-size: 13.5px; color: var(--ink-2); margin-top: 6px; line-height: 1.6; }
.timeline { list-style: none; margin: 22px 0 0; display: flex; flex-direction: column; border-inline-start: 2px solid var(--teal-200); padding: 0; padding-inline-start: 16px; gap: 14px; }
.k { font-size: 13px; font-weight: 800; color: var(--deep-ink); }
.v { font-size: 13.5px; color: var(--muted); margin-top: 2px; }
.contact { margin-top: 26px; padding-top: 18px; border-top: 1px solid var(--border); display: flex; flex-wrap: wrap; gap: 8px 22px; font-size: 13.5px; }
.ce { color: var(--ink-3); }
.contact a { font-weight: 700; color: var(--deep); }
.tel { unicode-bidi: isolate; }
</style>
