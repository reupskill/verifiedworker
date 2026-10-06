<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section id="identity" class="band-alt">
    <div class="wrap split chapter">
      <div class="mocks">
        <div class="card checks">
          <div class="head">
            <span class="title">{{ t.juan }} · {{ t.c2mockT }}</span>
            <span class="done">{{ t.c2done }}</span>
          </div>
          <div class="list">
            <div v-for="i in t.instant" :key="i.n" class="row">
              <span class="dot" />
              <span class="n">{{ i.n }}</span>
              <span class="w mono">{{ i.w }}</span>
            </div>
          </div>
        </div>
        <div class="card alert">
          <span class="dot dot--warn" />
          <div class="body">
            <div class="alert-head"><span class="alert-t">{{ t.c2alertT }}</span><span class="w mono">14:41</span></div>
            <div class="alert-b">{{ t.c2alertB }}</div>
          </div>
        </div>
      </div>
      <ChapterIntro
        num="02" :label="t.c2l" :tag="t.c2t" :a="t.c2a" :b="t.c2b" :c="t.c2c" :body="t.c2p" on-alt
        :stats="[{ v: '7', l: t.c2s1 }, { v: '500+', l: t.c2s2 }]"
      />
    </div>
  </section>
</template>

<style scoped>
.chapter { padding-top: 56px; padding-bottom: 56px; }
.mocks { display: flex; flex-direction: column; gap: 12px; }
.checks { border-radius: 18px; box-shadow: 0 12px 36px rgba(17, 87, 102, 0.08); padding: 16px 18px; }
.head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.title { font-size: 14px; font-weight: 800; color: var(--deep-ink); }
.done { font-size: 11px; font-weight: 700; color: #0B7F6F; background: #E7F8F4; border-radius: 999px; padding: 3px 9px; white-space: nowrap; }
.list { margin-top: 10px; }
.row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-top: 1px solid var(--hairline); }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--mint); flex-shrink: 0; }
.dot--warn { background: var(--orange); margin-top: 6px; }
.n { flex: 1; font-size: 13px; color: var(--deep-ink); }
.w { font-size: 11px; color: var(--faint); }
.alert { border-color: #FFD6AE; border-radius: 18px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start; }
.body { flex: 1; }
.alert-head { display: flex; justify-content: space-between; gap: 10px; }
.alert-t { font-size: 13.5px; font-weight: 800; color: var(--deep-ink); }
.alert-b { font-size: 13px; color: #7A4A14; margin-top: 4px; line-height: 1.5; }
</style>
