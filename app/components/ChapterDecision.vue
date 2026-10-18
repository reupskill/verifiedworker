<script setup lang="ts">
const { t } = useLang()

const outcomes = computed(() => [
  { tone: 'stop', name: t.value.asif, badge: t.value.stopD4, body: t.value.c5asif },
  { tone: 'review', name: t.value.juan, badge: t.value.reviewD9, body: t.value.c5juan },
  { tone: 'proceed', name: t.value.c5okT, badge: t.value.proceed, body: t.value.c5ok },
])
</script>

<template>
  <section id="decision" class="wrap decision">
    <ChapterIntro class="intro" num="05" :label="t.c5l" :tag="t.c5t" :a="t.c5a" :b="t.c5b" :c="t.c5c" :body="t.c5p" />
    <div class="grid">
      <div v-for="o in outcomes" :key="o.tone" class="out" :class="`out--${o.tone}`">
        <div class="head">
          <span class="name">{{ o.name }}</span>
          <span class="badge" :class="`badge--${o.tone}`">{{ o.badge }}</span>
        </div>
        <div class="body">{{ o.body }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.decision { padding-top: 40px; padding-bottom: 40px; }
.intro { max-width: 640px; }
.intro :deep(.lede) { max-width: none; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 16px; margin-top: 24px; }
.out { border: 1px solid; border-radius: 20px; padding: 22px; }
.out--stop { border-color: #F3C2BD; background: #FDF6F5; }
.out--review { border-color: #FFD6AE; background: #FFFAF4; }
.out--proceed { border-color: #BFE9E2; background: #F2FBF9; }
.head { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.name { font-size: 15px; font-weight: 600; color: var(--navy); }
.badge { padding: 4px 11px; }
.body { font-size: 13.5px; margin-top: 12px; line-height: 1.6; }
.out--stop .body { color: #8A2620; }
.out--review .body { color: #7A4A14; }
.out--proceed .body { color: #0B5B4E; }
</style>
