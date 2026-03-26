<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'success'
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
    return 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
  }
  if (props.variant === 'ghost') {
    return 'bg-transparent text-primary hover:bg-primary-light'
  }
  if (props.variant === 'success') {
    return 'bg-secondary text-on-secondary hover:brightness-105'
  }
  return 'bg-primary text-white hover:bg-primary-light'
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
    class="focus-ring inline-flex items-center justify-center rounded-full font-medium shadow-sm transition duration-200 hover:-translate-y-0.5"
    :class="[variantClass, sizeClass]"
  >
    <slot />
  </component>
</template>
