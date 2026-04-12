<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { blogPosts } from '../../data/blogPosts'
import Card from '../ui/Card.vue'
import Grid from '../ui/Grid.vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    limit?: number
  }>(),
  {
    eyebrow: 'INSIGHTS',
    title: 'Latest articles',
    limit: 3,
  },
)

const posts = computed(() => blogPosts.slice(0, props.limit))
</script>

<template>
  <section class="landing-section landing-surface-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="landing-eyebrow">{{ eyebrow }}</p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {{ title }}
          </h2>
        </div>
        <RouterLink
          to="/blog"
          class="text-sm font-semibold text-secondary transition hover:gap-2"
        >
          View all →
        </RouterLink>
      </div>

      <Grid :cols="3">
        <Card v-for="post in posts" :key="post.id" class="fade-in-section !p-0">
          <div class="brand-image-frame brand-image-frame--card-top">
            <img :src="post.image" :alt="post.title" class="h-44 w-full rounded-t-2xl object-cover" loading="lazy" />
          </div>
          <div class="p-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-secondary">{{ post.category }}</p>
            <h3 class="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              <RouterLink :to="`/blog/${post.slug}`" class="transition hover:text-secondary">
                {{ post.title }}
              </RouterLink>
            </h3>
            <p class="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{{ post.excerpt }}</p>
            <div class="mt-5">
              <RouterLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition hover:gap-2"
              >
                Read
                <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </div>
        </Card>
      </Grid>
    </div>
  </section>
</template>
