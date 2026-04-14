<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/outline";
import {
  nlpInfo,
  type ServiceAccordionItem,
  type ServiceStat,
} from "../../data/servicePagesContent";
import AccordionItem from "../ui/AccordionItem.vue";
import StatsSection from "./StatsSection.vue";

defineProps<{
  howItWorks: { title: string };
  featureCards: {
    step: string;
    title: string;
    subtitle: string;
    body: string;
  }[];
  infographic: { src: string; poster: string; alt: string };
  useCase: { eyebrow: string; title: string; items: ServiceAccordionItem[] };
  stats: ServiceStat[];
  nlpSolutions: {
    title: string;
    body: string;
    cta: { label: string; href: string };
    img: { src: string; alt: string };
  }[];
  dgnStats: ServiceStat[];
}>();
</script>

<template>
  <!-- Feature Cards -->
  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-center mb-8"
      >
        {{ howItWorks.title }}
      </h2>
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="card in featureCards"
          :key="card.step"
          class="fade-in-section landing-card-dark flex flex-col p-6 sm:p-8"
        >
          <p class="text-5xl font-bold tabular-nums text-secondary/90">
            {{ card.step }}
          </p>
          <h2 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {{ card.title }}
          </h2>
          <span
            class="text-primary text-xs font-bold uppercase tracking-wider py-1 rounded-full inline-block mt-2 dark:text-secondary/90"
          >
            {{ card.subtitle }}
          </span>
          <p
            class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {{ card.body }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <section>
    <!-- Infographic -->
    <div class="landing-section landing-surface-b">
      <video
        class="mx-auto h-auto w-full max-h-[min(52vh,420px)] object-contain sm:max-h-[min(90vh,1080px)]"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        disablepictureinpicture
        controlslist="nodownload noplaybackrate nofullscreen"
        tabindex="-1"
        :aria-label="infographic.alt"
        :poster="infographic.poster"
      >
        <source :src="infographic.src" type="video/mp4" />
      </video>
    </div>
  </section>

  <!-- Use Case -->
  <section class="landing-section landing-surface-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="fade-in-section mx-auto max-w-3xl text-center">
        <p class="landing-eyebrow">{{ useCase.eyebrow }}</p>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          {{ useCase.title }}
        </h2>
      </div>
      <div class="mx-auto mt-10 max-w-4xl space-y-4">
        <AccordionItem
          v-for="(item, index) in useCase.items"
          :key="item.id"
          :icon="item.icon"
          :label="item.label"
          :title="item.title"
          :items="item.items"
          :open="index === 0"
        />
      </div>
    </div>
  </section>

  <section class="landing-section landing-surface-a">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="fade-in-section landing-card-dark px-5 py-6 text-center sm:px-6"
        >
          <p
            class="text-3xl font-bold tabular-nums text-secondary sm:text-[2rem]"
          >
            {{ stat.value }}
          </p>
          <p
            class="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="landing-section landing-surface-b">
    <div>
      <StatsSection :stats="dgnStats" eyebrow="Our NLP Solution in action" />
    </div>
  </section>
</template>
