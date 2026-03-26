<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    narrow?: boolean
  }>(),
  {
    as: 'div',
    narrow: false,
  },
)
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-full px-4 sm:px-6 lg:px-8"
    :class="narrow ? 'max-w-4xl' : 'max-w-7xl'"
  >
    <slot />
  </component>
</template>
