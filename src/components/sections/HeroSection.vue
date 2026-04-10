<script setup lang="ts">
import { homeHero } from "../../data/homeContent";
import SharedBadge from "../ui/Badge/Badge.vue";
</script>

<template>
  <section class="relative overflow-hidden bg-slate-50 pt-24 dark:bg-slate-950">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--secondary-light),transparent_55%),radial-gradient(circle_at_80%_20%,var(--primary-light),transparent_45%)]"
      aria-hidden="true"
    />
    <div class="mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div class="fade-in-section">
        <SharedBadge variant="secondary" size="sm">DATA FOR TOMORROW</SharedBadge>
        <h1
          class="mt-4 max-w-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] bg-clip-text pb-0.5 text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
        >
          {{ homeHero.title }}
        </h1>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {{ homeHero.subtitle }}
        </p>
      </div>

      <div class="fade-in-section">
        <div class="hero-orb-shell">
          <video
            class="hero-orb"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="/images/still-medbio.jpg"
            aria-label="MedBioinformatics knowledge sphere"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          <span class="hero-orb-light" aria-hidden="true" />
          <span class="hero-orb-light secondary" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>
