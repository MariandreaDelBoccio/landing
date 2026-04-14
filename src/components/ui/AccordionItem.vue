<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

withDefaults(
  defineProps<{
    label: string;
    title: string;
    body?: string;
    open?: boolean;
    icon?: string;
    items?: {
      title: string;
      body: string;
    }[];
  }>(),
  {
    open: false,
  },
);
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
        v-if="!icon"
        class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white dark:bg-secondary/25 dark:text-secondary"
        >{{ label.slice(0, 1) }}</span
      >
      <img
        v-if="icon"
        :src="`/icons/${icon}.svg`"
        :alt="icon"
        class="service-icon-brand mt-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full object-contain text-xs font-bold text-white dark:bg-secondary/25 dark:text-secondary"
      />
      <span class="min-w-0 flex-1 text-left">
        <span
          class="text-xs font-semibold uppercase tracking-wider text-secondary"
          >{{ label }}</span
        >
        <span
          class="mt-1 block text-base font-semibold text-slate-900 dark:text-white"
          >{{ title }}</span
        >
      </span>
      <ChevronDownIcon
        class="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180"
        aria-hidden="true"
      />
    </summary>
    <div
      v-if="body"
      class="border-t border-slate-200/80 px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-400 sm:px-6"
    >
      <p class="pl-[3.25rem]">{{ body }}</p>
    </div>
    <div
      v-if="items"
      class="border-t border-slate-200/80 px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-400 sm:px-6"
    >
      <ul>
        <li
          v-for="item in items"
          :key="item.title"
          class="flex gap-6 text-base items-center leading-relaxed text-slate-700 dark:text-slate-300 my-2 border-b border-slate-200/80 py-4 px-2"
        >
          <span
            class="text-xs font-semibold uppercase tracking-wider text-secondary w-1/4"
            >{{ item.title }}</span
          >
          <p class="w-3/4">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </details>
</template>
