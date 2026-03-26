<script setup lang="ts">
import { services } from '../../data/homeContent'
import Button from '../ui/Button.vue'
import Card from '../ui/Card.vue'
import Section from '../ui/Section.vue'
</script>

<template>
  <Section as="section" id="services" muted>
    <div class="mx-auto max-w-7xl px-0">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="service in services"
          :key="service.title"
          class="fade-in-section flex h-full flex-col !p-0"
        >
          <div class="flex flex-1 flex-col p-6">
            <img
              v-if="service.iconSrc"
              :src="service.iconSrc"
              :alt="service.title"
              class="h-12 w-12"
            />
            <h3 class="mt-2 text-lg font-semibold text-slate-900">
              {{ service.title }}
            </h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {{ service.description }}
            </p>
            <div class="mt-5">
              <Button
                :href="service.ctaHref"
                :variant="service.ctaLabel === 'Visit' ? 'success' : 'ghost'"
              >
                {{ service.ctaLabel }}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </Section>
</template>
