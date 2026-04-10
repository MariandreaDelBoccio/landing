import { computed, onMounted, ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'medbio-theme'
const theme = ref<Theme>('light')
const isMounted = ref(false)

const resolvePreferredTheme = (): Theme => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const applyThemeClass = (value: Theme) => {
  document.documentElement.classList.toggle('dark', value === 'dark')
}

export const useTheme = () => {
  onMounted(() => {
    theme.value = resolvePreferredTheme()
    applyThemeClass(theme.value)
    isMounted.value = true
  })

  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (nextTheme: Theme) => {
    theme.value = nextTheme
    localStorage.setItem(STORAGE_KEY, nextTheme)
    applyThemeClass(nextTheme)
  }

  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return {
    theme,
    isDark,
    isMounted,
    setTheme,
    toggleTheme,
  }
}
