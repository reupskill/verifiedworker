<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="invite" class="wrap split chapter">
    <ChapterIntro
      num="01" :label="t.c1l" :tag="t.c1t" :a="t.c1a" :b="t.c1b" :c="t.c1c" :body="t.c1p"
      :stats="[{ v: '5 min', l: t.c1s1 }, { v: '0', l: t.c1s2 }]"
    />
    <div class="panel stage">
      <div class="phone">
        <div class="screen">
          <div class="top">
            <div class="clock">09:12</div>
            <div class="app">Vetted Worker</div>
            <div class="msg">{{ t.c1msg }}</div>
          </div>
          <div class="steps">
            <div v-for="s in t.c1steps" :key="s.n" class="step">
              <span class="tick" aria-hidden="true">✓</span>
              <span class="n">{{ s.n }}</span>
              <span class="w mono">{{ s.w }}</span>
            </div>
            <div class="note">{{ t.c1note }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chapter { padding-top: 40px; padding-bottom: 40px; }
.stage { padding: 32px; display: flex; justify-content: center; }
.phone { width: 280px; max-width: 100%; background: var(--navy-2); border-radius: 34px; padding: 9px; box-shadow: 0 24px 60px rgba(27, 27, 75, 0.22); }
.screen { background: #FFFFFF; border-radius: 26px; overflow: hidden; }
.top { background: var(--indigo); color: #FFFFFF; padding: 16px 16px 14px; }
.clock { font-size: 11px; color: var(--cyan-light); }
.app { font-size: 14px; font-weight: 600; margin-top: 6px; }
.msg { font-size: 12px; color: var(--lav-200); margin-top: 6px; line-height: 1.5; }
.steps { padding: 12px 14px 16px; display: flex; flex-direction: column; gap: 8px; }
.step { display: flex; align-items: center; gap: 10px; border: 1px solid var(--border); border-radius: 11px; padding: 9px 10px; }
.tick { width: 20px; height: 20px; border-radius: 50%; background: var(--mint); color: #FFFFFF; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.n { flex: 1; font-size: 12.5px; font-weight: 600; color: var(--navy); }
.w { font-size: 11px; color: var(--faint); }
.note { background: var(--lav-100); border-radius: 10px; padding: 9px 10px; font-size: 11.5px; color: var(--indigo); line-height: 1.45; }

@media (max-width: 420px) {
  .stage { padding: 20px; }
}
</style>
