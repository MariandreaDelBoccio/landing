<script setup lang="ts">
import './badge.css';  
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    size?: 'xs' | 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'primaryLight' | 'secondary' | 'tertiary' | 'quaternary' | 'warning' | 'error' | 'custom'
    customColor?: string
  }>(),
  {
    size: 'sm',
    variant: 'primary',
    customColor: '',
  },
);

const span = 'span';

const sizeStyles = computed(() => {
  if (props.size === 'xs') return 'text-xs px-1 py-1';
  if (props.size === 'sm') return 'text-sm px-4 py-1';
  if (props.size === 'md') return 'text-base px-6 py-2';
  if (props.size === 'lg') return 'text-lg px-5 py-3';
  return 'text-sm px-4 py-1';
});

const style = computed(() => {
  if (props.variant === 'custom' && props.customColor.startsWith('#')) {
    return { backgroundColor: props.customColor, color: '#fff' };
  }
  return undefined;
});

const variantStyles = computed(() => {  
  if (props.variant === 'primary') return 'badge-primary';
  if (props.variant === 'primaryLight') return 'badge-primary-light';
  if (props.variant === 'secondary') return 'badge-secondary';
  if (props.variant === 'tertiary') return 'badge-tertiary';
  if (props.variant === 'quaternary') return 'badge-quaternary';
  if (props.variant === 'warning') return 'badge-warning';
  if (props.variant === 'error') return 'badge-error';
  return 'badge-primary';
});
</script>

<template>
  <component :is="span" class="badge flex items-center px-3 py-1/.5 font-extrabold" :class="[variantStyles, sizeStyles]" :style="style">
    <slot />
  </component>
</template>

