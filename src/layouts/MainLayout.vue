<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const navigationLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const currentYear = new Date().getFullYear()
const isScrolled = ref(false)
const lineProgress = ref(0)
const updateScrollState = () => {
  isScrolled.value = window.scrollY > 20
  lineProgress.value = Math.min(1, window.scrollY / 240)
}

const isActiveLink = (to: string) => {
  const toPath = to.split('#')[0]
  if (toPath === '/') return route.path === '/'
  return route.path.startsWith(toPath)
}

const headerClass = computed(() => {
  const isHome = route.path === '/'
  if (isHome && !isScrolled.value) return 'bg-white/50 backdrop-blur-sm'
  return 'bg-white/90 backdrop-blur-md border-b border-slate-200/70'
})

const mainClass = computed(() => {
  // En home queremos overlay sobre el hero; en el resto dejamos espacio para el header fijo.
  return route.path === '/' ? '' : 'pt-16'
})

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  updateScrollState()
  const onScroll = () => updateScrollState()
  window.addEventListener('scroll', onScroll, { passive: true })
})

watch(
  () => route.path,
  () => {
    updateScrollState()
    isMobileMenuOpen.value = false
  },
)
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 antialiased">
    <header
      class="fixed top-0 left-0 right-0 z-40 w-full"
      :class="headerClass"
    >
      <nav class="mx-auto flex h-16 w-full items-center px-4 sm:px-6 lg:px-8">
        <RouterLink
          to="/"
          class="flex items-center gap-3"
          @click="closeMobileMenu"
        >
          <img
            src="/images/logo.png"
            alt="MedBioinformatics"
            class="h-10 w-auto"
          />
        </RouterLink>

        <ul class="hidden items-center gap-8 md:flex ml-auto">
          <li v-for="link in navigationLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-sm font-black uppercase tracking-widest transition-colors"
              :class="
                isActiveLink(link.to)
                  ? 'text-secondary'
                  : 'text-primary hover:text-secondary'
              "
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="hidden items-center gap-4 md:flex ml-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary ring-1 ring-slate-200 text-white transition hover:bg-secondary font-bold"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        <button
          type="button"
          class="inline-flex items-center rounded-md p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          aria-label="Open main menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="text-lg">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </nav>

      <!-- Barra inferior con colores de marca (solo en scroll) -->
      <div
        v-show="isScrolled"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]"
      >
        <div
          class="h-full w-full bg-gradient-to-r from-primary via-secondary to-primary"
          :style="{
            backgroundSize: '200% 100%',
            backgroundPositionX: `${Math.round(lineProgress * 100)}%`,
          }"
        />
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="border-t border-slate-200 bg-white px-4 pb-4 pt-3 shadow-sm md:hidden"
      >
        <ul class="space-y-3">
          <li v-for="link in navigationLinks" :key="`mobile-${link.to}`">
            <RouterLink
              :to="link.to"
              class="block rounded-md px-3 py-2 text-sm font-medium uppercase tracking-widest transition"
              :class="
                isActiveLink(link.to)
                  ? 'bg-primary-light text-primary'
                  : 'text-slate-700 hover:bg-slate-100'
              "
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </header>

    <main :class="mainClass">
      <slot />
    </main>

    <footer class="bg-[#2c6474] text-white">
      <div class="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-5">
          <div class="space-y-3">
            <p class="text-lg font-semibold tracking-tight">MedBioinformatics</p>
            <p class="text-sm text-white/80">
              Data for tomorrow
            </p>
            <div class="flex items-center gap-3 pt-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-xs ring-1 ring-white/10">in</span>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-xs ring-1 ring-white/10">f</span>
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-xs ring-1 ring-white/10">x</span>
            </div>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold">Company</p>
            <RouterLink to="/about" class="block text-white/80 transition hover:text-white">About</RouterLink>
            <RouterLink to="/blog" class="block text-white/80 transition hover:text-white">Blog</RouterLink>
            <RouterLink to="/contact" class="block text-white/80 transition hover:text-white">Contact</RouterLink>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold">Solutions</p>
            <a href="https://www.disgenet.com/" class="block text-white/80 transition hover:text-white">DISGENET</a>
            <a href="https://www.medbioinformatics.com/nlp/" class="block text-white/80 transition hover:text-white">NLP</a>
            <a
              href="https://www.medbioinformatics.com/ai-knowledge-graphs/"
              class="block text-white/80 transition hover:text-white"
            >
              AI & Knowledge Graphs
            </a>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold">Legal</p>
            <span class="block text-white/80">Legal Notice</span>
            <span class="block text-white/80">Privacy Policy</span>
            <span class="block text-white/80">Terms of Service</span>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold">Contact</p>
            <a href="/contact" class="block text-white/80 transition hover:text-white">Reach out</a>
            <span class="block text-white/80">partners@medbioinformatics.com</span>
          </div>
        </div>

        <div class="mt-12 border-t border-white/20 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-xs text-white/70">
            © {{ currentYear }} MedBioinformatics Solutions. All rights reserved.
          </p>
          <p class="text-xs text-white/70">Created by Weik Deen</p>
        </div>
      </div>
    </footer>
  </div>
</template>
