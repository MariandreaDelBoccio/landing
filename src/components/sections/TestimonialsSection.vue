<script setup lang="ts">
import { testimonials, testimonialsHeader } from '../../data/homeContent'
</script>

<template>
  <section class="landing-section landing-surface-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mx-auto max-w-3xl text-center">
        <p class="landing-eyebrow">{{ testimonialsHeader.eyebrow }}</p>
        <h2
          class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
        >
          {{ testimonialsHeader.titleBefore }}<span class="text-secondary">{{ testimonialsHeader.titleHighlight }}</span>{{ testimonialsHeader.titleAfter }}
        </h2>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
        <article
          v-for="item in testimonials"
          :key="item.name"
          class="fade-in-section brand-glow-card landing-card-dark flex min-h-full flex-col p-6 sm:p-7"
        >
          <span class="font-serif text-5xl leading-none text-secondary" aria-hidden="true">“</span>
          <p class="mt-5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            “{{ item.quote }}”
          </p>
          <div class="mt-8 border-t border-slate-200/80 pt-5 dark:border-white/10">
            <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ item.name }}</p>
            <p class="mt-1 text-xs font-medium text-secondary">{{ item.role }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
