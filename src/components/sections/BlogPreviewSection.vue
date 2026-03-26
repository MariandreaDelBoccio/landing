<script setup lang="ts">
import { computed } from 'vue'

import { blogPosts } from '../../data/blogPosts'
import Card from '../ui/Card.vue'
import Grid from '../ui/Grid.vue'
import Section from '../ui/Section.vue'

const latestPosts = computed(() => blogPosts.slice(0, 3))
</script>

<template>
  <Section as="section" muted>
    <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
      <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Read the latest articles on our blog
      </h2>
      <RouterLink to="/blog" class="text-sm font-medium text-blue-600 hover:text-blue-500">
        View all posts
      </RouterLink>
    </div>

    <Grid :cols="3">
      <Card v-for="post in latestPosts" :key="post.id" class="fade-in-section overflow-hidden !p-0">
        <img :src="post.image" :alt="post.title" class="h-44 w-full object-cover" />
        <div class="p-6">
          <p class="text-xs font-semibold uppercase tracking-wide text-blue-600">{{ post.category }}</p>
          <h3 class="mt-3 text-xl font-semibold text-slate-900">
            <RouterLink :to="`/blog/${post.slug}`" class="hover:text-blue-600">
              {{ post.title }}
            </RouterLink>
          </h3>
          <p class="mt-3 text-sm text-slate-600">{{ post.excerpt }}</p>
        </div>
      </Card>
    </Grid>
  </Section>
</template>
