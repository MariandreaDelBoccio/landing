<script setup lang="ts">
import { companyIntro } from '../../data/homeContent'
import Button from '../ui/Button.vue'
import Section from '../ui/Section.vue'
</script>

<template>
  <Section as="section" muted>
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div class="fade-in-section overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white shadow-soft dark:ring-slate-700 dark:bg-slate-900">
          <img
            src="/images/team.png"
            alt="MedBioinformatics team"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="fade-in-section">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
            MedBioinformatics,
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-300 sm:text-4xl">
            expanding DISGENET's potential
          </h2>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {{ companyIntro.body }}
          </p>
          <div class="mt-6">
            <Button :to="companyIntro.ctaTo" variant="success" class="text-white">
              {{ companyIntro.ctaLabel }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
