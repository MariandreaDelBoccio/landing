<script setup lang="ts">
import { testimonials } from '../../data/homeContent'
import Card from '../ui/Card.vue'
import Section from '../ui/Section.vue'
</script>

<template>
  <Section as="section" muted>
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What do customers and researchers say about us?
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <Card
          v-for="item in testimonials"
          :key="item.name"
          :hover="false"
          class="fade-in-section bg-white/70"
        >
          <p class="text-sm leading-relaxed text-slate-700">"{{ item.quote }}"</p>
          <div class="mt-6 border-t border-slate-200 pt-4">
            <p class="text-sm font-semibold text-teal-700">{{ item.name }}</p>
            <p class="mt-1 text-xs text-slate-500">{{ item.role }}</p>
          </div>
        </Card>
      </div>
    </div>
  </Section>
</template>
