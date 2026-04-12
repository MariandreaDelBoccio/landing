<script setup lang="ts">
import {
  aboutCta,
  aboutHero,
  aboutMission,
  aboutStats,
  leadershipIntro,
  leadershipTeam,
} from '../data/aboutContent'
import MainLayout from '../layouts/MainLayout.vue'
import Button from '../components/ui/Button.vue'
import PageHero from '../components/ui/PageHero.vue'
</script>

<template>
  <MainLayout>
    <PageHero
      :eyebrow="aboutHero.eyebrow"
      :title-before="aboutHero.titleBefore"
      :title-highlight="aboutHero.titleHighlight"
      :title-after="aboutHero.titleAfter"
      :subtitle="aboutHero.subtitle"
    />

    <section class="landing-section landing-surface-a">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div class="fade-in-section">
            <p class="landing-eyebrow">{{ aboutMission.eyebrow }}</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {{ aboutMission.titleBefore }}<span class="text-secondary">{{ aboutMission.titleHighlight }}</span
              >{{ aboutMission.titleAfter }}
            </h2>
          </div>
          <div class="fade-in-section space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <p v-for="(p, i) in aboutMission.paragraphs" :key="i">{{ p }}</p>
          </div>
        </div>

        <div class="fade-in-section brand-image-frame">
          <img
            src="/images/team.png"
            alt="MedBioInformatics team in Barcelona"
            class="aspect-[21/9] h-full w-full rounded-3xl object-cover object-center sm:aspect-[24/9]"
            loading="lazy"
          />
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-3">
          <div
            v-for="stat in aboutStats"
            :key="stat.label"
            class="fade-in-section landing-card-dark px-5 py-6 text-center sm:px-6"
          >
            <p class="text-3xl font-bold tabular-nums text-secondary sm:text-[2.15rem]">{{ stat.value }}</p>
            <p class="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="landing-section landing-surface-b">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="fade-in-section mx-auto max-w-3xl text-center">
          <p class="landing-eyebrow">{{ leadershipIntro.eyebrow }}</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {{ leadershipIntro.titleBefore }}<span class="text-secondary">{{ leadershipIntro.titleHighlight }}</span
            >{{ leadershipIntro.titleAfter }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {{ leadershipIntro.body }}
          </p>
        </div>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="person in leadershipTeam"
            :key="person.name"
            class="fade-in-section landing-card-dark flex flex-col p-0"
          >
            <div class="brand-image-frame brand-image-frame--card-top aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                :src="person.image"
                :alt="person.name"
                class="h-full w-full rounded-none object-cover object-top"
                loading="lazy"
              />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ person.name }}</h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ person.title }}</p>
              <div class="mt-4 flex items-center gap-2">
                <a
                  v-if="person.linkedin"
                  :href="person.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-xs font-bold text-primary transition hover:border-secondary hover:text-secondary dark:border-white/15 dark:text-white"
                  :aria-label="`LinkedIn — ${person.name}`"
                >
                  in
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="landing-section landing-surface-a">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="fade-in-section rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/50 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10"
        >
          <div class="max-w-2xl">
            <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              {{ aboutCta.titleBefore }}<span class="text-secondary">{{ aboutCta.titleHighlight }}</span
              >{{ aboutCta.titleAfter }}
            </h2>
            <p class="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{{ aboutCta.body }}</p>
          </div>
          <div class="mt-6 shrink-0 lg:mt-0">
            <Button :to="aboutCta.buttonTo" variant="cta" size="lg">{{ aboutCta.buttonLabel }}</Button>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
