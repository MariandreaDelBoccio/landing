<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'cta'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    to: undefined,
    href: undefined,
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

const componentTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const variantClass = computed(() => {
  if (props.variant === 'secondary') {
    return 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-700 hover:shadow-[0_0_0_1px_var(--secondary-light),0_10px_32px_-16px_var(--secondary)]'
  }
  if (props.variant === 'ghost') {
    return 'bg-transparent text-primary hover:bg-primary-light dark:text-slate-100 dark:hover:bg-slate-800 hover:shadow-[0_0_0_1px_var(--primary-light),0_10px_24px_-18px_var(--primary)]'
  }
  if (props.variant === 'success') {
    return 'bg-secondary text-on-secondary hover:brightness-105 hover:shadow-[0_0_0_1px_var(--secondary-light),0_12px_35px_-14px_var(--secondary)]'
  }
  if (props.variant === 'cta') {
    return 'bg-secondary text-white shadow-md hover:brightness-110 dark:text-slate-950 hover:shadow-[0_0_0_1px_var(--secondary-light),0_14px_40px_-12px_var(--secondary)]'
  }
  return 'bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_0_1px_var(--primary-light),0_12px_35px_-14px_var(--primary)]'
})

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'px-4 py-2 text-sm'
  if (props.size === 'lg') return 'px-6 py-3.5 text-base'
  return 'px-5 py-2.5 text-sm'
})
</script>

<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    :type="componentTag === 'button' ? type : undefined"
    class="focus-ring inline-flex cursor-pointer items-center justify-center rounded-full font-medium shadow-sm transition duration-200 hover:-translate-y-0.5"
    :class="[variantClass, sizeClass]"
  >
    <slot />
  </component>
</template>
