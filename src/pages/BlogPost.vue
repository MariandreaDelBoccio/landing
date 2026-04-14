<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { blogPosts } from '../data/blogPosts'
import MainLayout from '../layouts/MainLayout.vue'
import Button from '../components/ui/Button.vue'

const route = useRoute()

const slug = computed(() => String(route.params.slug ?? ''))

const post = computed(() => blogPosts.find((p) => p.slug === slug.value) ?? null)
</script>

<template>
  <MainLayout>
    <article v-if="post" class="pb-20 pt-24">
      <header class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-secondary">{{ post.category }}</p>
        <p class="mt-3 text-sm text-slate-500 dark:text-slate-500">{{ post.date }}</p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {{ post.title }}
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <a
            :href="post.cta.href"
            class="font-semibold text-secondary underline-offset-4 transition hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ post.cta.label }}
          </a>
          <span class="font-normal text-slate-600 dark:text-slate-400"> — open the full article on the publisher site.</span>
        </p>
      </header>

      <div class="fade-in-section mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="brand-image-frame">
          <img
            :src="post.image"
            :alt="post.title"
            class="aspect-[21/9] h-full w-full rounded-3xl object-cover sm:aspect-[2.4/1]"
            loading="eager"
          />
        </div>
      </div>

      <div class="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button to="/blog" variant="secondary" size="md">← Back to blog</Button>
      </div>
    </article>

    <section v-else class="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Article not found</h1>
      <p class="mt-4 text-slate-600 dark:text-slate-400">
        We could not find a post for “{{ slug }}”. Check the URL or return to the blog index.
      </p>
      <div class="mt-8">
        <Button to="/blog" variant="cta" size="md">Go to blog</Button>
      </div>
    </section>
  </MainLayout>
</template>
