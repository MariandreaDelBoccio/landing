<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    cols?: 1 | 2 | 3 | 4
    gap?: 'sm' | 'md' | 'lg'
  }>(),
  {
    cols: 3,
    gap: 'md',
  },
)

const gridColsClass = computed(() => {
  if (props.cols === 1) return 'grid-cols-1'
  if (props.cols === 2) return 'grid-cols-1 md:grid-cols-2'
  if (props.cols === 4) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
  return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
})

const gapClass = computed(() => {
  if (props.gap === 'sm') return 'gap-4'
  if (props.gap === 'lg') return 'gap-8'
  return 'gap-6'
})
</script>

<template>
  <div class="grid" :class="[gridColsClass, gapClass]">
    <slot />
  </div>
</template>
