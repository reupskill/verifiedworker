<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="history" class="band-alt">
    <div class="wrap split chapter">
      <div class="card mock">
        <div class="title">{{ t.c4mockT }}</div>
        <div class="cols">
          <div class="col">
            <div class="k">{{ t.c4decl }}</div>
            <div class="v">{{ t.c4declV }}</div>
            <div class="s">{{ t.c4declS }}</div>
          </div>
          <div class="col col--conf">
            <div class="k">{{ t.c4conf }}</div>
            <div class="v">{{ t.c4confV }}</div>
            <div class="s">{{ t.c4confS }}</div>
          </div>
        </div>
        <div class="foot">
          <div>
            <div class="gulf-n">{{ t.c4gulfN }}</div>
            <div class="gulf-r">{{ t.c4gulfR }}</div>
          </div>
          <span class="pill pill--CONFIRMED">{{ t.mConf }}</span>
        </div>
      </div>
      <ChapterIntro num="04" :label="t.c4l" :tag="t.c4t" :a="t.c4a" :b="t.c4b" :c="t.c4c" :body="t.c4p" on-alt />
    </div>
  </section>
</template>

<style scoped>
.chapter { padding-top: 56px; padding-bottom: 56px; }
.mock { border-radius: 20px; box-shadow: 0 12px 36px rgba(17, 87, 102, 0.08); overflow: hidden; }
.title { padding: 14px 18px; border-bottom: 1px solid var(--border); font-size: 14px; font-weight: 800; color: var(--deep-ink); }
.cols { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
.col { padding: 16px 18px; }
.col:first-child { border-inline-end: 1px solid var(--border); }
.col--conf { background: #FFF8F0; }
.k { font-size: 11px; font-weight: 700; letter-spacing: var(--ls); color: var(--faint); }
.v { font-size: 24px; font-weight: 800; color: var(--deep-ink); margin-top: 8px; }
.s { font-size: 12.5px; color: var(--muted); margin-top: 4px; line-height: 1.5; }
.col--conf .k, .col--conf .v { color: #B85C00; }
.col--conf .s { color: #7A4A14; }
.foot { padding: 13px 18px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; gap: 12px; align-items: center; }
.gulf-n { font-size: 13px; font-weight: 700; color: var(--deep-ink); }
.gulf-r { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
</style>
