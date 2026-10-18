<script setup lang="ts">
// Pilot (PoC) request form. There is no backend: submitting opens the
// visitor's email app with the request pre-filled and addressed to the team.
const TO = 'vw@youverify.co'

const { t, lang } = useLang()
const arrow = computed(() => (lang.value === 'ar' ? '←' : '→'))

const blank = () => ({ company: '', name: '', role: '', email: '', mobile: '', count: '20', start: '' })
const form = reactive(blank())
// Chip selections are stored by index so they survive a language switch.
const corridors = ref<number[]>([])
const roles = ref<number[]>([])
const agree = ref(false)
const error = ref<'' | 'errReq' | 'errCount'>('')
const sent = ref(false)
const mailHref = ref('')

watch([form, corridors, roles, agree], () => { error.value = '' }, { deep: true })

const chipLists = { corridors, roles }
function toggle(key: keyof typeof chipLists, i: number) {
  const list = chipLists[key]
  list.value = list.value.includes(i) ? list.value.filter(x => x !== i) : [...list.value, i]
}

function buildMailto() {
  const c = t.value
  const pick = (all: string[], sel: number[]) => all.filter((_, i) => sel.includes(i)).join(', ')
  const lines: [string, string][] = [
    [c.f_company, form.company],
    [c.f_name, form.name],
    [c.f_role, form.role],
    [c.f_email, form.email],
    [c.f_mobile, form.mobile],
    [c.f_corridor, pick(c.corridors, corridors.value)],
    [c.f_roles, pick(c.roles, roles.value)],
    [c.f_count, form.count],
    [c.f_start, form.start],
    [c.langLabel, lang.value === 'ar' ? 'العربية' : 'English'],
  ]
  const body = lines
    .map(([k, v]) => `${k}: ${v.trim() || '—'}`)
    .concat('', `✓ ${c.f_agree}`)
    .join('\n')
  const subject = c.mailSubject.replace('{company}', form.company.trim())
  return `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function submit() {
  const okEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())
  if (!form.company.trim() || !form.name.trim() || !okEmail || !corridors.value.length || !agree.value) {
    error.value = 'errReq'
    return
  }
  const n = Number.parseInt(form.count, 10)
  if (!(n >= 1 && n <= 20)) {
    error.value = 'errCount'
    return
  }
  mailHref.value = buildMailto()
  sent.value = true
  window.location.href = mailHref.value
}

function reset() {
  Object.assign(form, blank())
  corridors.value = []
  roles.value = []
  agree.value = false
  sent.value = false
  nextTick(() => { error.value = '' })
}

const okBody = computed(() =>
  t.value.okBody.replace('{name}', form.name.trim()).replace('{email}', form.email.trim()),
)
</script>

<template>
  <div class="shell cut">
    <form v-if="!sent" class="form" novalidate @submit.prevent="submit">
      <div class="head">
        <div class="fh">{{ t.formH }}</div>
        <div class="fs">{{ t.formS }}</div>
      </div>
      <label class="field">
        <span class="lbl">{{ t.f_company }}</span>
        <input v-model="form.company" type="text" name="company" autocomplete="organization" required>
      </label>
      <div class="two">
        <label class="field">
          <span class="lbl">{{ t.f_name }}</span>
          <input v-model="form.name" type="text" name="name" autocomplete="name" required>
        </label>
        <label class="field">
          <span class="lbl">{{ t.f_role }}</span>
          <input v-model="form.role" type="text" name="role" autocomplete="organization-title">
        </label>
      </div>
      <div class="two">
        <label class="field">
          <span class="lbl">{{ t.f_email }}</span>
          <input v-model="form.email" type="email" name="email" autocomplete="email" placeholder="name@company.com" dir="ltr" required>
        </label>
        <label class="field">
          <span class="lbl">{{ t.f_mobile }}</span>
          <input v-model="form.mobile" type="tel" name="mobile" autocomplete="tel" placeholder="+966" dir="ltr">
        </label>
      </div>
      <fieldset class="field">
        <legend class="lbl">{{ t.f_corridor }}</legend>
        <div class="chips">
          <button
            v-for="(l, i) in t.corridors" :key="i" type="button" class="chip"
            :class="{ on: corridors.includes(i) }" :aria-pressed="corridors.includes(i)" @click="toggle('corridors', i)"
          >{{ l }}</button>
        </div>
      </fieldset>
      <fieldset class="field">
        <legend class="lbl">{{ t.f_roles }}</legend>
        <div class="chips">
          <button
            v-for="(l, i) in t.roles" :key="i" type="button" class="chip"
            :class="{ on: roles.includes(i) }" :aria-pressed="roles.includes(i)" @click="toggle('roles', i)"
          >{{ l }}</button>
        </div>
      </fieldset>
      <div class="two">
        <label class="field">
          <span class="lbl">{{ t.f_count }}</span>
          <input v-model="form.count" type="number" name="count" min="1" max="20">
        </label>
        <label class="field">
          <span class="lbl">{{ t.f_start }}</span>
          <input v-model="form.start" type="date" name="start">
        </label>
      </div>
      <label class="agree">
        <input v-model="agree" type="checkbox" class="sr">
        <span class="box" :class="{ on: agree }" aria-hidden="true">{{ agree ? '✓' : '' }}</span>
        <span class="agree-t">{{ t.f_agree }}</span>
      </label>
      <div v-if="error" class="err" role="alert">{{ t[error] }}</div>
      <button type="submit" class="cta-elm cta-elm--primary cut submit">{{ t.f_submit }}<span aria-hidden="true">{{ arrow }}</span></button>
      <div class="privacy">{{ t.f_privacy }}</div>
    </form>

    <div v-else class="done" role="status">
      <div class="ok" aria-hidden="true">✓</div>
      <div class="ok-h">{{ t.okH }}</div>
      <div class="ok-b">{{ okBody }}</div>
      <div class="fallback">{{ t.mailFallback }} <a :href="mailHref">{{ t.mailFallbackLink }}</a></div>
      <button type="button" class="again" @click="reset">{{ t.okAgain }}</button>
    </div>
  </div>
</template>

<style scoped>
.shell { background: #FFFFFF; color: var(--navy); padding: clamp(24px, 3vw, 36px); --cut: 28px; }
.form { display: flex; flex-direction: column; gap: 16px; }
.head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.fh { font-size: 22px; font-weight: 600; color: var(--navy); }
.fs { font-size: 13.5px; color: var(--slate-blue); }
.field { display: flex; flex-direction: column; gap: 6px; border: 0; margin: 0; padding: 0; min-width: 0; }
fieldset.field { gap: 8px; }
.lbl { font-size: 13.5px; font-weight: 500; color: var(--slate-blue-2); padding: 0; }
fieldset .lbl { margin-bottom: 8px; }
.two { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 14px; }
input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"] {
  border: 1px solid var(--on-navy); border-radius: 0; padding: 12px 14px; font-size: 15px; font-family: inherit; color: var(--ink); background: #FFFFFF; width: 100%; outline: none; min-height: 48px;
}
input:focus { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(110, 67, 181, 0.18); }
html[dir="rtl"] input[dir="ltr"] { text-align: right; }
.chips { display: flex; gap: 8px; flex-wrap: wrap; }
/* Chips clip only the bottom-right corner. */
.chip { padding: 10px 18px; font-size: 14.5px; font-weight: 500; cursor: pointer; border: 1px solid var(--on-navy); background: #FFFFFF; color: var(--navy); clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%); }
.chip:hover { border-color: var(--navy); }
.chip.on { border-color: var(--navy); background: var(--navy); color: #FFFFFF; }
.agree { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; position: relative; }
.sr { position: absolute; opacity: 0; width: 1px; height: 1px; }
.box { width: 18px; height: 18px; border-radius: 5px; flex-shrink: 0; margin-top: 1px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: #FFFFFF; border: 1.5px solid var(--border-strong); background: #FFFFFF; }
.box.on { border-color: var(--indigo); background: var(--indigo); }
.sr:focus-visible + .box { outline: 2px solid var(--cyan); outline-offset: 2px; }
.agree-t { font-size: 12.5px; color: var(--muted); line-height: 1.55; }
.err { font-size: 12.5px; font-weight: 600; color: #B0322A; background: #FDECEA; border-radius: 9px; padding: 9px 12px; }
.submit { min-height: 52px; font-size: 16px; width: 100%; --cut: 14px; }
.privacy { font-size: 11.5px; color: var(--ink-3); line-height: 1.55; }

.done { padding: 24px 4px; display: flex; flex-direction: column; gap: 12px; }
.ok { width: 44px; height: 44px; border-radius: 50%; background: var(--mint); color: #FFFFFF; font-size: 22px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
.ok-h { font-size: 20px; font-weight: 600; color: var(--navy); }
.ok-b { font-size: 14.5px; color: var(--ink-2); line-height: 1.65; }
.fallback { font-size: 13px; color: var(--muted); }
.fallback a { font-weight: 700; }
.again { align-self: flex-start; font-size: 13.5px; font-weight: 700; color: var(--indigo); cursor: pointer; background: none; border: 0; padding: 0; }
.again:hover { color: var(--purple); }
</style>
