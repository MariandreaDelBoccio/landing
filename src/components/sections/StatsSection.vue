<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { disgenetSection, stats } from '../../data/homeContent'
import Button from '../ui/Button.vue'

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
  <section id="disgenet" class="landing-section landing-surface-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="fade-in-section">
          <p class="landing-eyebrow">{{ disgenetSection.eyebrow }}</p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            {{ disgenetSection.titleBefore }}<span class="text-secondary">{{ disgenetSection.titleHighlight }}</span>{{ disgenetSection.titleAfter }}
          </h2>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {{ disgenetSection.body }}
          </p>
          <div class="mt-8">
            <Button :href="disgenetSection.ctaHref" variant="cta" size="md">
              {{ disgenetSection.ctaLabel }}
            </Button>
          </div>
        </div>

        <div class="fade-in-section brand-image-frame">
          <img
            src="/images/access-to-information-section.png"
            alt="Researcher reviewing biomedical data on a monitor"
            class="aspect-[4/3] h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>

      <div
        ref="statsGridEl"
        class="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5"
      >
        <div
          v-for="(stat, index) in stats"
          :key="`${stat.value}-${stat.label}`"
          class="fade-in-section landing-card-dark px-5 py-6 text-center sm:px-6"
        >
          <p class="text-4xl font-bold tabular-nums tracking-tight text-secondary sm:text-[2.35rem]">
            {{ displayedStats[index] ?? stat.value }}
          </p>
          <p class="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
