<script setup lang="ts">
const { t } = useLang()

const applicants = computed(() => [
  { name: t.value.asif, badge: t.value.stopD4, tone: 'stop', body: t.value.howAsifR },
  { name: t.value.juan, badge: t.value.reviewD9, tone: 'review', body: t.value.howJuanR },
])
</script>

<template>
  <section id="how" class="how">
    <div class="wrap grid">
      <div>
        <h2 class="h2 big h">{{ t.howH }}</h2>
        <div class="apps">
          <a v-for="a in applicants" :key="a.tone" href="#decision" class="app">
            <span class="app-head">
              <span class="app-n">{{ a.name }}</span>
              <span class="badge" :class="`badge--${a.tone}`">{{ a.badge }}</span>
            </span>
            <span class="app-b">{{ a.body }}</span>
          </a>
        </div>
      </div>
      <div class="side">
        <p>{{ t.howP }}</p>
        <div class="steps">
          <a v-for="s in t.howSteps" :key="s.href" :href="s.href" class="step">
            <span class="bar" />
            <span class="d">{{ s.d }}</span>
            <span class="n">{{ s.n }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how { background: var(--navy-2); color: #FFFFFF; }
.grid { padding-top: 40px; padding-bottom: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 24px; align-items: center; }
.h { color: #FFFFFF; }
.apps { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 10px; margin-top: 22px; }
.app { display: flex; flex-direction: column; gap: 6px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(143, 211, 244, 0.22); border-radius: 14px; padding: 14px 16px; color: #FFFFFF; }
.app:hover { color: #FFFFFF; background: rgba(255, 255, 255, 0.1); }
.app-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.app-n { font-size: 14px; font-weight: 600; }
.badge { font-size: 10.5px; padding: 3px 9px; }
.app-b { font-size: 12.5px; color: var(--lav-200); line-height: 1.45; }
.side { display: flex; flex-direction: column; gap: 18px; }
p { font-size: 15px; color: var(--lav-200); line-height: 1.65; margin: 0; max-width: 520px; }
.steps { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px; }
.step { display: flex; flex-direction: column; gap: 8px; color: #FFFFFF; }
.step:hover { color: var(--cyan-light); }
.bar { height: 3px; border-radius: 2px; background: var(--cyan); }
.d { font-size: 11px; font-weight: 700; color: var(--cyan-light); }
.n { font-size: 13.5px; font-weight: 700; line-height: 1.3; }

@media (max-width: 420px) {
  .n { font-size: 12px; }
  .d { font-size: 10px; }
}
</style>
