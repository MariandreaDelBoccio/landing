<script setup lang="ts">
import { homeSolutions, services } from '../../data/homeContent'
</script>

<template>
  <section id="services" class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mx-auto max-w-3xl text-center">
        <p class="landing-eyebrow">{{ homeSolutions.eyebrow }}</p>
        <h2
          class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
        >
          {{ homeSolutions.titleBefore }}<span class="text-secondary">{{ homeSolutions.titleHighlight }}</span>{{ homeSolutions.titleAfter }}
        </h2>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="fade-in-section brand-glow-card landing-card-dark flex min-h-full flex-col p-6 sm:p-7"
        >
          <img
            v-if="service.iconSrc"
            :src="service.iconSrc"
            :alt="service.title"
            class="service-icon-brand h-11 w-11 shrink-0 opacity-90"
          />
          <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            {{ service.title }}
          </h3>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {{ service.description }}
          </p>
          <div class="mt-6">
            <a
              :href="service.ctaHref"
              class="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition hover:gap-2"
            >
              {{ service.ctaLabel }}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
