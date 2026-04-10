<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { stats } from '../../data/homeContent'
import Button from '../ui/Button.vue'
import Section from '../ui/Section.vue'

const statsGridEl = ref<HTMLElement | null>(null)
const displayedStats = ref<string[]>(stats.map(() => '0'))
const hasAnimated = ref(false)

const DURATION_MS = 1400
let animationFrameId: number | null = null
let observer: IntersectionObserver | null = null

const parseStatValue = (raw: string) => {
  const match = raw.trim().match(/^([^\d]*)([\d,.]+)(.*)$/)
  if (!match) return null

  const [, prefix, numericChunk, suffix] = match
  const target = Number.parseFloat(numericChunk.replace(/,/g, ''))
  if (!Number.isFinite(target)) return null

  const decimals = (numericChunk.split('.')[1] ?? '').length
  return { prefix, suffix, target, decimals }
}

const animateStats = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const parsedStats = stats.map((stat) => parseStatValue(stat.value))
  const startedAt = performance.now()

  const tick = (now: number) => {
    const elapsed = now - startedAt
    const progress = Math.min(elapsed / DURATION_MS, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    displayedStats.value = stats.map((stat, index) => {
      const parsed = parsedStats[index]
      if (!parsed) return stat.value

      const current = parsed.target * eased
      const rounded =
        parsed.decimals > 0
          ? current.toFixed(parsed.decimals)
          : Math.round(current).toLocaleString('en-US')

      return `${parsed.prefix}${rounded}${parsed.suffix}`
    })

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(tick)
      return
    }

    displayedStats.value = stats.map((stat) => stat.value)
    animationFrameId = null
  }

  animationFrameId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!statsGridEl.value) return

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      animateStats()
      observer?.disconnect()
      observer = null
    },
    { threshold: 0.35 },
  )

  observer.observe(statsGridEl.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <Section as="section" id="disgenet" muted>
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div class="fade-in-section">
          <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            DISGENET, the world’s most reliable & extensive gene-disease database
          </h2>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Get immediate access to information comparable to having read over 30 million articles.
          </p>
          <div class="mt-7">
            <Button
              href="https://www.disgenet.com/"
              variant="success"
              size="md"
              class="text-white"
            >
              Visit
            </Button>
          </div>
        </div>

        <div class="fade-in-section overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white shadow-soft dark:ring-slate-700 dark:bg-slate-900">
          <img
            src="/images/access-to-information-section.png"
            alt="DISGENET platform preview"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <div ref="statsGridEl" class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(stat, index) in stats"
          :key="`${stat.value}-${stat.label}`"
          class="fade-in-section rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200 shadow-sm dark:bg-slate-900/85 dark:ring-slate-700"
        >
          <div class="text-center">
            <p class="text-4xl font-bold tracking-tight text-secondary">
              {{ displayedStats[index] ?? stat.value }}
            </p>
            <p class="mt-1 text-sm uppercase tracking-wide text-primary font-semibold dark:text-slate-300">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
