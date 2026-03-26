<script setup lang="ts">
import Container from './Container.vue'

withDefaults(
  defineProps<{
    as?: string
    containerAs?: string
    narrow?: boolean
    padded?: boolean
    muted?: boolean
  }>(),
  {
    as: 'section',
    containerAs: 'div',
    narrow: false,
    padded: true,
    muted: false,
  },
)
</script>

<template>
  <component :is="as" :class="muted ? 'bg-white' : 'bg-slate-50'">
    <Container
      :as="containerAs"
      :narrow="narrow"
      :class="padded ? 'py-16 sm:py-20 lg:py-24' : ''"
    >
      <slot />
    </Container>
  </component>
</template>
