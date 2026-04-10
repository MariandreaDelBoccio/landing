<script setup lang="ts">
import { companyIntro } from '../../data/homeContent'
import Button from '../ui/Button.vue'
</script>

<template>
  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="fade-in-section brand-image-frame order-2 lg:order-1">
          <img
            src="/images/team.png"
            alt="MedBioinformatics team"
            class="aspect-[4/3] h-full w-full rounded-3xl object-cover"
          />
        </div>

        <div class="fade-in-section order-1 lg:order-2">
          <p class="landing-eyebrow">{{ companyIntro.eyebrow }}</p>
          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            {{ companyIntro.titleBefore }}<span class="text-secondary">{{ companyIntro.titleHighlight }}</span>{{ companyIntro.titleAfter }}
          </h2>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {{ companyIntro.body }}
          </p>
          <div class="mt-8">
            <Button :to="companyIntro.ctaTo" variant="cta" size="md">
              {{ companyIntro.ctaLabel }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
