import { copy, type Lang } from '~/i18n/copy'

const STORAGE_KEY = 'vw-landing-lang'

/**
 * Page language (EN / AR). Starts as English for the static render, then on the
 * client honours `?lang=ar|en` first and the remembered choice second.
 */
export function useLang() {
  const lang = useState<Lang>('lang', () => 'en')
  const t = computed(() => copy[lang.value])
  const dir = computed(() => (lang.value === 'ar' ? 'rtl' : 'ltr'))

  function setLang(l: Lang) {
    lang.value = l
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }

  function restoreLang() {
    let l: string | null = null
    try {
      l = new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY)
    } catch {}
    if (l === 'en' || l === 'ar') lang.value = l
  }

  return { lang, t, dir, setLang, restoreLang }
}
