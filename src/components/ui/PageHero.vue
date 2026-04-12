<script setup lang="ts">
import SharedBadge from './Badge/Badge.vue'

withDefaults(
  defineProps<{
    eyebrow?: string
    titleBefore: string
    titleHighlight?: string
    titleAfter?: string
    subtitle?: string
    align?: 'left' | 'center'
    compact?: boolean
  }>(),
  {
    eyebrow: undefined,
    titleHighlight: '',
    titleAfter: '',
    subtitle: undefined,
    align: 'left',
    compact: false,
  },
)
</script>

<template>
  <section
    class="relative overflow-hidden bg-slate-50 pt-24 dark:bg-slate-950"
    :class="compact ? 'pb-10 sm:pb-12' : 'pb-14 sm:pb-16'"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--secondary-light),transparent_55%),radial-gradient(circle_at_80%_20%,var(--primary-light),transparent_45%)]"
      aria-hidden="true"
    />
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      :class="align === 'center' ? 'text-center' : ''"
    >
      <div class="fade-in-section max-w-4xl" :class="align === 'center' ? 'mx-auto' : ''">
        <SharedBadge v-if="eyebrow" variant="secondary" size="sm">{{ eyebrow }}</SharedBadge>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.12]"
        >
          {{ titleBefore }}<span v-if="titleHighlight" class="text-secondary">{{ titleHighlight }}</span
          >{{ titleAfter }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          :class="align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'"
        >
          {{ subtitle }}
        </p>
        <div v-if="$slots.default" class="mt-8 flex flex-wrap gap-3" :class="align === 'center' ? 'justify-center' : ''">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
