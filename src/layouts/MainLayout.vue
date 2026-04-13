<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import type { RouteLocationRaw } from "vue-router";
import { useRoute } from "vue-router";
import { useTheme } from "../composables/useTheme";
import Button from "../components/ui/Button.vue";
import EnvelopeIcon from "@heroicons/vue/24/outline/EnvelopeIcon";

type NavLink =
  | { label: string; to: RouteLocationRaw }
  | { label: string; href: string };

const BLOG_EXTERNAL_URL = "https://medbioinformatics.com/blog/";

const isMobileMenuOpen = ref(false);
const route = useRoute();
const { isDark, isMounted, toggleTheme } = useTheme();

const navigationLinks: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "NLP", to: "/nlp" },
  { label: "AI & Graphs", to: "/ai-knowledge-graphs" },
  { label: "Blog", href: BLOG_EXTERNAL_URL },
];

const currentYear = new Date().getFullYear();
const isScrolled = ref(false);
const lineProgress = ref(0);
let sectionObserver: IntersectionObserver | null = null;
let removeScrollListener: (() => void) | null = null;

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 20;
  lineProgress.value = Math.min(1, window.scrollY / 240);
};

const isActiveLink = (to: RouteLocationRaw) => {
  if (typeof to === "object" && to !== null) {
    const path = to.path ?? "/";
    if (to.hash) {
      return route.path === path && route.hash === to.hash;
    }
    return route.path === path || route.path.startsWith(`${path}/`);
  }
  if (to === "/") {
    return route.path === "/" && !route.hash;
  }
  return route.path === to || route.path.startsWith(`${to}/`);
};

const headerClass = computed(() => {
  const isHome = route.path === "/";
  if (isHome && !isScrolled.value) {
    return "border-b border-transparent bg-white/75 backdrop-blur-md dark:bg-slate-950/55";
  }
  return "border-b border-slate-200/80 bg-white/92 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/92";
});

const mainClass = computed(() => {
  return route.path === "/" ? "" : "pt-16";
});

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const observeFadeSections = async () => {
  await nextTick();

  if (!sectionObserver) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          sectionObserver?.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
  }

  const sections = document.querySelectorAll(".fade-in-section");
  sections.forEach((section) => {
    if (section.classList.contains("is-visible")) return;
    sectionObserver?.observe(section);
  });
};

onMounted(() => {
  updateScrollState();
  const onScroll = () => updateScrollState();
  window.addEventListener("scroll", onScroll, { passive: true });
  removeScrollListener = () => window.removeEventListener("scroll", onScroll);
  void observeFadeSections();
});

watch(
  () => route.path,
  () => {
    updateScrollState();
    isMobileMenuOpen.value = false;
    void observeFadeSections();
  },
);

onBeforeUnmount(() => {
  removeScrollListener?.();
  sectionObserver?.disconnect();
  sectionObserver = null;
});
</script>

<template>
  <div
    class="min-h-screen bg-white text-slate-800 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200"
  >
    <header class="fixed top-0 left-0 right-0 z-40 w-full" :class="headerClass">
      <nav class="mx-auto flex h-16 w-full items-center px-4 sm:px-6 lg:px-8">
        <RouterLink
          to="/"
          class="flex items-center gap-3"
          @click="closeMobileMenu"
        >
          <img
            src="/images/logo.png"
            alt="MedBioinformatics"
            class="h-10 w-auto dark:hidden"
          />
          <img
            src="/images/logo-white.svg"
            alt="MedBioinformatics"
            class="hidden h-10 w-auto dark:block"
          />
        </RouterLink>

        <ul class="ml-auto hidden items-center gap-8 md:flex">
          <li
            v-for="link in navigationLinks"
            :key="
              'href' in link ? link.href : `${link.label}-${String(link.to)}`
            "
          >
            <a
              v-if="'href' in link"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-slate-700 transition-colors hover:text-secondary dark:text-slate-200"
            >
              {{ link.label }}
            </a>
            <RouterLink
              v-else
              :to="link.to"
              class="text-sm font-medium transition-colors"
              :class="
                isActiveLink(link.to)
                  ? 'text-secondary'
                  : 'text-slate-700 hover:text-secondary dark:text-slate-200'
              "
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="ml-4 hidden items-center gap-3 md:flex">
          <Button to="/contact" variant="cta" size="sm" class="!shadow-none">
            Contact
          </Button>
          <button
            type="button"
            class="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold uppercase tracking-widest text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
            @click="toggleTheme"
          >
            <span aria-hidden="true">{{
              isMounted ? (isDark ? "☀" : "🌙") : "◐"
            }}</span>
            <span>{{ isMounted ? (isDark ? "Light" : "Dark") : "Theme" }}</span>
          </button>
          <a
            href="https://www.linkedin.com/company/medbioinformatics/about/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary ring-1 ring-slate-200 text-white transition hover:bg-secondary font-bold dark:ring-slate-700"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        <button
          type="button"
          class="inline-flex cursor-pointer items-center rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          aria-label="Open main menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="text-lg">{{ isMobileMenuOpen ? "✕" : "☰" }}</span>
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
        class="border-t border-slate-200 bg-white px-4 pb-4 pt-3 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:hidden"
      >
        <div class="mb-3">
          <button
            type="button"
            class="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold uppercase tracking-widest text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
            @click="toggleTheme"
          >
            <span aria-hidden="true">{{
              isMounted ? (isDark ? "☀" : "🌙") : "◐"
            }}</span>
            <span>{{ isMounted ? (isDark ? "Light" : "Dark") : "Theme" }}</span>
          </button>
        </div>
        <ul class="space-y-3">
          <li
            v-for="link in navigationLinks"
            :key="
              'href' in link
                ? `mobile-${link.href}`
                : `mobile-${link.label}-${String(link.to)}`
            "
          >
            <a
              v-if="'href' in link"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </a>
            <RouterLink
              v-else
              :to="link.to"
              class="block rounded-md px-3 py-2 text-sm font-medium transition"
              :class="
                isActiveLink(link.to)
                  ? 'bg-primary-light text-primary dark:text-slate-100'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
              "
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="mt-4">
          <Button
            to="/contact"
            variant="cta"
            size="md"
            class="w-full justify-center !shadow-none"
            @click="closeMobileMenu"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </header>

    <main :class="mainClass">
      <slot />
    </main>

    <footer class="border-t border-white/10 bg-[#050505] text-slate-300">
      <div class="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8"
        >
          <div class="space-y-4 sm:col-span-2 lg:col-span-2">
            <RouterLink to="/" class="inline-flex items-center gap-2">
              <img src="/images/logo-white.svg" alt="" class="h-9 w-auto" />
            </RouterLink>
            <p class="max-w-sm text-sm leading-relaxed text-slate-400">
              Streamlining the journey from complex data to actionable insights
            </p>
            <div class="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/medbioinformatics/about/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs text-slate-200 transition hover:border-secondary/50 hover:text-secondary"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.youtube.com/channel/UCGazBaBHYyx4-fIW8TZXYbg/featured"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs text-slate-200 transition hover:border-secondary/50 hover:text-secondary"
                aria-label="LinkedIn"
              >
                <img src="/icons/youtube.svg" alt="YouTube" class="h-5 w-5" />
              </a>
              <a
                href="mailto:info@disgenet.com"
                class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs text-slate-200 transition hover:border-secondary/50 hover:text-secondary"
                aria-label="Email"
              >
                <EnvelopeIcon class="h-5 w-5" />
              </a>
            </div>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold text-white">Company</p>
            <RouterLink
              to="/about"
              class="block text-slate-300 transition hover:text-secondary"
              >About</RouterLink
            >
            <a
              :href="BLOG_EXTERNAL_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-slate-300 transition hover:text-secondary"
              >Blog</a
            >
            <RouterLink
              to="/contact"
              class="block text-slate-300 transition hover:text-secondary"
              >Contact</RouterLink
            >
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold text-white">Products</p>
            <a
              href="https://www.disgenet.com/"
              class="block text-slate-300 transition hover:text-secondary"
              >DISGENET</a
            >
            <RouterLink
              to="/nlp"
              class="block text-slate-300 transition hover:text-secondary"
              >NLP</RouterLink
            >
            <RouterLink
              to="/ai-knowledge-graphs"
              class="block text-slate-300 transition hover:text-secondary"
              >AI & Knowledge Graphs</RouterLink
            >
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold text-white">Resources</p>
            <a
              :href="BLOG_EXTERNAL_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-slate-300 transition hover:text-secondary"
              >Insights</a
            >
            <span class="block text-slate-400">Documentation</span>
            <span class="block text-slate-400">Support</span>
          </div>

          <div class="space-y-3 text-sm">
            <p class="font-semibold text-white">Legal</p>
            <span class="block text-slate-400">Legal Notice</span>
            <span class="block text-slate-400">Privacy Policy</span>
            <span class="block text-slate-400">Terms of Service</span>
          </div>
        </div>

        <div
          class="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-xs text-slate-400">
            © {{ currentYear }} MedBioinformatics Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
