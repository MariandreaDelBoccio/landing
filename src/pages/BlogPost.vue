<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'

const route = useRoute()

const slug = computed(() => String(route.params.slug ?? ''))
</script>

<template>
  <MainLayout>
    <article class="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p class="text-sm font-medium uppercase tracking-wide text-blue-600">Article</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Blog Post
      </h1>
      <p class="mt-6 text-base text-slate-600">
        Ruta dinámica detectada: <span class="font-semibold text-slate-800">{{ slug }}</span>
      </p>
      <p class="mt-2 text-base text-slate-600">
        En el siguiente paso renderizaremos el contenido real de cada post local.
      </p>
    </article>
  </MainLayout>
</template>
