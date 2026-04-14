<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import { nlpInfo } from "../../data/servicePagesContent";
import SharedBadge from "./Badge/Badge.vue";
import Button from "./Button.vue";

withDefaults(
  defineProps<{
    eyebrow?: string;
    titleBefore: string;
    titleHighlight?: string;
    titleAfter?: string;
    subtitle?: string;
    align?: "left" | "center";
    compact?: boolean;
    video?: { src: string; alt: string; poster: string };
    hasInfo?: boolean;
    hasCta?: boolean;
  }>(),
  {
    eyebrow: undefined,
    titleHighlight: "",
    titleAfter: "",
    subtitle: undefined,
    align: "left",
    compact: false,
    hasInfo: false,
    hasCta: false,
  },
);
</script>

<template>
  <section class="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--secondary-light),transparent_55%),radial-gradient(circle_at_80%_20%,var(--primary-light),transparent_45%)]"
      aria-hidden="true"
    />
    <div
      class="mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8"
    >
      <div class="fade-in-section">
        <SharedBadge variant="secondary" size="sm">{{
          eyebrow
        }}</SharedBadge>
        <h1
          class="mt-4 max-w-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] bg-clip-text pb-0.5 text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
        >
          {{ titleBefore
          }}<template v-if="titleHighlight">{{ titleHighlight }}</template
          >{{ titleAfter }}
        </h1>
        <div class="fade-in-section">
          <div
            class="mt-8 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <p>{{ subtitle }}</p>
          </div>
          <ul v-if="hasInfo" class="mt-8 grid gap-5 lg:grid-cols-2">
            <li
              v-for="(item, key) in nlpInfo.bullets"
              :key="key"
              class="flex gap-3 text-base leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <CheckCircleIcon
                class="mt-0.5 h-6 w-6 shrink-0 text-secondary"
                aria-hidden="true"
              />
              <span> {{ item.body }}</span>
            </li>
          </ul>
        </div>
        <Button v-if="hasCta" class="mt-8" to="/contact" variant="cta" size="lg">Book a call with an expert</Button>
      </div>

      <div v-if="video" class="fade-in-section">
        <div class="hero-orb-shell">
          <video
            class="hero-orb hero-orb-nlp"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="/images/still-medbio.jpg"
            aria-label="MedBioinformatics knowledge sphere"
          >
            <source :src="video.src" type="video/mp4" />
          </video>
          <span class="hero-orb-light" aria-hidden="true" />
          <span class="hero-orb-light secondary" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
  <!-- <section
    class="relative overflow-hidden bg-slate-50 pt-24 dark:bg-slate-950"
    :class="compact ? 'pb-10 sm:pb-12' : 'pb-14 sm:pb-16'"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--secondary-light),transparent_55%),radial-gradient(circle_at_80%_20%,var(--primary-light),transparent_45%)]"
      aria-hidden="true"
    />
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      :class="align === 'center' ? 'text-center' : ''"
    >
      <div class="fade-in-section max-w-4xl" :class="align === 'center' ? 'mx-auto' : ''">
        <SharedBadge v-if="eyebrow" variant="secondary" size="sm">{{ eyebrow }}</SharedBadge>
        <h1
          class="mt-4 w-full max-w-4xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] bg-clip-text pb-0.5 text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
          :class="align === 'center' ? 'mx-auto' : ''"
        >
          {{ titleBefore }}<template v-if="titleHighlight">{{ titleHighlight }}</template>{{ titleAfter }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          :class="align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'"
        >
          {{ subtitle }}
        </p>
        <div v-if="$slots.default" class="mt-8 flex flex-wrap gap-3" :class="align === 'center' ? 'justify-center' : ''">
          <slot />
        </div>
      </div>
    </div>
  </section> -->
</template>
