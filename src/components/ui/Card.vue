<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    hover?: boolean
    padded?: boolean
  }>(),
  {
    as: 'article',
    hover: true,
    padded: true,
  },
)
</script>

<template>
  <component
    :is="as"
    class="rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-300 dark:border-slate-700 dark:bg-slate-900"
    :class="[
      hover ? 'brand-glow-card hover:-translate-y-1 hover:shadow-lg' : '',
      padded ? 'p-6 sm:p-7' : '',
    ]"
  >
    <slot />
  </component>
</template>
