<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

withDefaults(
  defineProps<{
    label: string
    title: string
    body: string
    open?: boolean
  }>(),
  {
    open: false,
  },
)
</script>

<template>
  <details
    class="group rounded-2xl border border-slate-200/90 bg-white/90 open:shadow-md dark:border-white/10 dark:bg-zinc-900/50"
    :open="open"
  >
    <summary
      class="flex cursor-pointer list-none items-start gap-4 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden"
    >
      <span
        class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white dark:bg-secondary/25 dark:text-secondary"
        >{{ label.slice(0, 1) }}</span
      >
      <span class="min-w-0 flex-1 text-left">
        <span class="text-xs font-semibold uppercase tracking-wider text-secondary">{{ label }}</span>
        <span class="mt-1 block text-base font-semibold text-slate-900 dark:text-white">{{ title }}</span>
      </span>
      <ChevronDownIcon
        class="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180"
        aria-hidden="true"
      />
    </summary>
    <div class="border-t border-slate-200/80 px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-400 sm:px-6">
      <p class="pl-[3.25rem]">{{ body }}</p>
    </div>
  </details>
</template>
