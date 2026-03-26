<script setup lang="ts">
import { stats } from '../../data/homeContent'
import Button from '../ui/Button.vue'
import Section from '../ui/Section.vue'
</script>

<template>
  <Section as="section" id="disgenet" muted>
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div class="fade-in-section">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            DISGENET, the world’s most reliable & extensive gene-disease database
          </h2>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Get immediate access to information comparable to having read over 30 million articles.
          </p>
          <div class="mt-7">
            <Button
              href="https://www.disgenet.com/"
              variant="success"
              size="md"
            >
              Visit
            </Button>
          </div>
        </div>

        <div class="fade-in-section overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white shadow-soft">
          <img
            src="/images/access-to-information-section.png"
            alt="DISGENET platform preview"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="`${stat.value}-${stat.label}`"
          class="fade-in-section rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200 shadow-sm"
        >
          <div class="text-center">
            <p class="text-2xl font-bold tracking-tight text-blue-700">
              {{ stat.value }}
            </p>
            <p class="mt-1 text-xs uppercase tracking-wide text-slate-500">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
