<script setup lang="ts">
import type { ServiceAccordionItem, ServiceStat } from '../../data/servicePagesContent'
import AccordionItem from '../ui/AccordionItem.vue'

defineProps<{
  featureCards: { step: string; title: string; body: string }[]
  infographic: { src: string; poster: string; alt: string }
  useCase: { eyebrow: string; title: string; items: ServiceAccordionItem[] }
  stats: ServiceStat[]
  secondaryStats?: ServiceStat[]
}>()
</script>

<template>
  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-5 lg:grid-cols-2">
        <article
          v-for="card in featureCards"
          :key="card.step"
          class="fade-in-section landing-card-dark flex flex-col p-6 sm:p-8"
        >
          <p class="text-5xl font-bold tabular-nums text-secondary/90">{{ card.step }}</p>
          <h2 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{{ card.title }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ card.body }}</p>
        </article>
      </div>

      <div
        class="fade-in-section mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl brand-image-frame bg-white p-2 sm:p-3  mt-6"
      >
        <video
          class="mx-auto h-auto w-full max-h-[min(52vh,420px)] rounded-2xl object-contain sm:max-h-[min(90vh,1080px)] md:rounded-3xl"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          disablepictureinpicture
          controlslist="nodownload noplaybackrate nofullscreen"
          tabindex="-1"
          :aria-label="infographic.alt"
          :poster="infographic.poster"
        >
          <source :src="infographic.src" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <section class="landing-section landing-surface-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mx-auto max-w-3xl text-center">
        <p class="landing-eyebrow">{{ useCase.eyebrow }}</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {{ useCase.title }}
        </h2>
      </div>
      <div class="mx-auto mt-10 max-w-4xl space-y-4">
        <AccordionItem
          v-for="(item, index) in useCase.items"
          :key="item.id"
          :label="item.label"
          :title="item.title"
          :body="item.body"
          :open="index === 0"
        />
      </div>
    </div>
  </section>

  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="fade-in-section landing-card-dark px-5 py-6 text-center sm:px-6"
        >
          <p class="text-3xl font-bold tabular-nums text-secondary sm:text-[2rem]">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <div
        v-if="secondaryStats?.length"
        class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="stat in secondaryStats"
          :key="`sec-${stat.label}`"
          class="fade-in-section landing-card-dark px-4 py-5 text-center"
        >
          <p class="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">{{ stat.value }}</p>
          <p class="mt-1 text-xs text-slate-500 dark:text-slate-500">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
