<script setup lang="ts">
const { t } = useLang()

const contacts = [
  { key: 'e', label: 'vw@youverify.co', href: 'mailto:vw@youverify.co', value: 'vw@youverify.co' },
  { key: 'p', label: '+966 55 538 6898', href: 'tel:+966555386898', value: '+966555386898' },
]
const copied = ref<string | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined
async function copyText(value: string, key: string) {
  try { await navigator.clipboard.writeText(value) } catch {}
  copied.value = key
  clearTimeout(timer)
  timer = setTimeout(() => { copied.value = null }, 1600)
}
</script>

<template>
  <section id="pilot" class="pilot">
    <div class="inner grid">
      <div>
        <div class="hex-eyebrow">{{ t.pilotE2 }}</div>
        <h2 class="title">{{ t.plA }}<span class="hl">{{ t.plB }}</span>{{ t.plC }}</h2>
        <p class="intro">{{ t.pilotP }}</p>
        <div class="terms">
          <div class="term"><div class="th">{{ t.provH }}</div><div class="tb">{{ t.provB }}</div></div>
          <div class="term"><div class="th">{{ t.recvH }}</div><div class="tb">{{ t.recvB }}</div></div>
        </div>
        <ol class="timeline">
          <li v-for="tl in t.timeline" :key="tl.k">
            <span class="hex" aria-hidden="true" />
            <span class="k">{{ tl.k }}</span>
            <span class="v">{{ tl.v }}</span>
          </li>
        </ol>
        <div class="contact">
          <div class="team">{{ t.ftTeam }}</div>
          <div v-for="c in contacts" :key="c.key" class="line">
            <a :href="c.href" dir="ltr">{{ c.label }}</a>
            <button type="button" class="copy" @click="copyText(c.value, c.key)">
              <span aria-live="polite">{{ copied === c.key ? t.copiedL : t.copyL }}</span>
            </button>
          </div>
        </div>
      </div>
      <PilotForm />
    </div>
  </section>
</template>

<style scoped>
.pilot { background: var(--navy); color: #FFFFFF; }
.inner { max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
.grid { padding-top: clamp(44px, 5vw, 64px); padding-bottom: clamp(44px, 5vw, 64px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: clamp(32px, 5vw, 64px); align-items: start; }
.title { margin: 16px 0 0; font-size: clamp(30px, 4vw, 48px); font-weight: 400; letter-spacing: -0.015em; line-height: 1.1; text-wrap: balance; }
.title .hl { font-weight: 600; color: var(--peach); }
.intro { font-size: 18px; color: var(--on-navy); line-height: 1.6; margin: 18px 0 0; max-width: 54ch; }
.terms { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 16px; margin-top: 24px; }
.term { background: var(--navy-card); border: 1px solid rgba(191, 201, 230, 0.18); padding: 20px 22px; }
.th { font-size: 12.5px; font-weight: 600; letter-spacing: var(--ls); color: var(--peach); }
.tb { font-size: 15px; color: var(--on-navy); margin-top: 10px; line-height: 1.6; }

.timeline { list-style: none; padding: 0; position: relative; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin: 24px 0 0; }
.timeline::before { content: ""; position: absolute; top: 8px; inset-inline: 0; height: 1px; background: rgba(191, 201, 230, 0.25); }
.timeline li { position: relative; display: flex; flex-direction: column; gap: 8px; }
.hex { width: 16px; height: 18px; background: var(--peach); clip-path: var(--hex); }
.k { font-family: "IBM Plex Mono", "IBM Plex Sans Arabic", ui-monospace, monospace; font-size: 13px; font-weight: 500; color: #FFFFFF; margin-top: 6px; }
.v { font-size: 13.5px; color: var(--on-navy); line-height: 1.45; }

.contact { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.team { font-size: 12.5px; font-weight: 600; letter-spacing: var(--ls); color: var(--on-navy-2); }
.line { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.line a { font-size: 18px; font-weight: 500; color: #FFFFFF; unicode-bidi: isolate; }
.line a:hover { color: var(--peach); }
.copy { font-size: 13px; color: var(--on-navy); background: none; border: 1px solid rgba(191, 201, 230, 0.35); padding: 4px 12px; cursor: pointer; }
.copy:hover { color: #FFFFFF; border-color: var(--on-navy); }

@media (max-width: 480px) {
  .timeline { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 20px; }
  .timeline::before { display: none; }
}
</style>
