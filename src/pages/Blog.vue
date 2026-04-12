<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { blogPosts } from '../data/blogPosts'
import MainLayout from '../layouts/MainLayout.vue'
import Card from '../components/ui/Card.vue'
import Grid from '../components/ui/Grid.vue'
import PageHero from '../components/ui/PageHero.vue'
</script>

<template>
  <MainLayout>
    <PageHero
      eyebrow="BLOG"
      title-before="Insights on "
      title-highlight="NLP"
      title-after=", graphs, and AI in life sciences"
      subtitle="Practical perspectives on standards, discovery workflows, and how teams operationalize biomedical intelligence."
      compact
    />

    <section class="landing-section landing-surface-a">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid :cols="3">
          <Card v-for="post in blogPosts" :key="post.id" class="fade-in-section !p-0">
            <div class="brand-image-frame brand-image-frame--card-top">
              <img :src="post.image" :alt="post.title" class="h-48 w-full rounded-t-2xl object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <p class="text-xs font-semibold uppercase tracking-wider text-secondary">{{ post.category }}</p>
              <p class="mt-2 text-xs text-slate-500 dark:text-slate-500">{{ post.date }}</p>
              <h2 class="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                <RouterLink :to="`/blog/${post.slug}`" class="transition hover:text-secondary">
                  {{ post.title }}
                </RouterLink>
              </h2>
              <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {{ post.excerpt }}
              </p>
              <div class="mt-6">
                <RouterLink
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition hover:gap-2"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </RouterLink>
              </div>
            </div>
          </Card>
        </Grid>
      </div>
    </section>
  </MainLayout>
</template>
