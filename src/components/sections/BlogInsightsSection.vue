<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

import { blogPosts } from '../../data/blogPosts'
import Card from '../ui/Card.vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    limit?: number
  }>(),
  {
    eyebrow: 'INSIGHTS',
    title: 'Latest articles',
  },
)

const posts = computed(() =>
  props.limit != null ? blogPosts.slice(0, props.limit) : blogPosts,
)

const trackRef = ref<HTMLElement | null>(null)
const isGrabbing = ref(false)

let dragPointerId: number | null = null
let dragStartClientX = 0
let dragStartScrollLeft = 0
let dragMoved = false
let blockClickAfterDrag = false

function scrollCarousel(direction: -1 | 1) {
  const track = trackRef.value
  if (!track) return
  const first = track.querySelector<HTMLElement>('[data-carousel-item]')
  const gap = 24
  const step = (first?.offsetWidth ?? track.clientWidth) + gap
  track.scrollBy({ left: direction * step, behavior: 'smooth' })
}

function onTrackPointerDown(e: PointerEvent) {
  if (e.pointerType !== 'mouse' || e.button !== 0) return
  const track = trackRef.value
  if (!track) return
  dragPointerId = e.pointerId
  dragStartClientX = e.clientX
  dragStartScrollLeft = track.scrollLeft
  dragMoved = false
  isGrabbing.value = true
  track.setPointerCapture(e.pointerId)
}

function onTrackPointerMove(e: PointerEvent) {
  if (dragPointerId === null || e.pointerId !== dragPointerId) return
  const track = trackRef.value
  if (!track) return
  const dx = e.clientX - dragStartClientX
  if (Math.abs(dx) > 4) dragMoved = true
  track.scrollLeft = dragStartScrollLeft - dx
}

function endTrackDrag(e: PointerEvent) {
  if (dragPointerId === null || e.pointerId !== dragPointerId) return
  const track = trackRef.value
  if (track?.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId)
  dragPointerId = null
  isGrabbing.value = false
  if (dragMoved) blockClickAfterDrag = true
  dragMoved = false
}

function onLostPointerCapture(e: PointerEvent) {
  if (e.pointerId !== dragPointerId) return
  dragPointerId = null
  isGrabbing.value = false
  dragMoved = false
}

function onTrackClickCapture(e: MouseEvent) {
  if (!blockClickAfterDrag) return
  blockClickAfterDrag = false
  e.preventDefault()
  e.stopPropagation()
}
</script>

<template>
  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="landing-eyebrow">{{ eyebrow }}</p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {{ title }}
          </h2>
        </div>
      </div>

      <div
        ref="trackRef"
        class="-mx-4 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        :class="[
          isGrabbing ? 'cursor-grabbing select-none' : 'cursor-grab',
        ]"
        tabindex="0"
        aria-roledescription="carrusel"
        aria-label="Artículos recientes"
        @keydown.left.prevent="scrollCarousel(-1)"
        @keydown.right.prevent="scrollCarousel(1)"
        @pointerdown="onTrackPointerDown"
        @pointermove="onTrackPointerMove"
        @pointerup="endTrackDrag"
        @pointercancel="endTrackDrag"
        @lostpointercapture="onLostPointerCapture"
        @click.capture="onTrackClickCapture"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          data-carousel-item
          class="fade-in-section flex w-[min(90vw,22rem)] shrink-0 snap-start flex-col sm:w-[22rem]"
        >
          <Card class="flex h-full min-h-0 flex-1 flex-col !p-0">
            <div class="brand-image-frame brand-image-frame--card-top shrink-0">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-44 w-full rounded-t-2xl object-cover"
                draggable="false"
                loading="lazy"
              />
            </div>
            <div class="flex min-h-0 flex-1 flex-col p-6">
              <p class="shrink-0 text-xs font-semibold uppercase tracking-wider text-secondary">{{ post.category }}</p>
              <h3 class="mt-3 flex-1 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                <a
                  :href="post.cta.href"
                  class="block line-clamp-4 transition hover:text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ post.title }}
                </a>
              </h3>
              <div class="mt-5 shrink-0">
                <a
                  :href="post.cta.href"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition hover:gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ post.cta.label }}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div
          v-if="posts.length > 1"
          class="flex shrink-0 gap-2 justify-center mt-4"
          role="group"
          aria-label="Navegación del carrusel de artículos"
        >
          <button
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            aria-label="Artículos anteriores"
            @click="scrollCarousel(-1)"
          >
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            aria-label="Artículos siguientes"
            @click="scrollCarousel(1)"
          >
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
    </div>
  </section>
</template>
