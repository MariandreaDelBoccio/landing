<script setup lang="ts">
import { computed } from 'vue'

import ContactForm from '../components/sections/ContactForm.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Button from '../components/ui/Button.vue'
import PageHero from '../components/ui/PageHero.vue'
import { contactFindUs, contactHero } from '../data/contactContent'
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()
const formTone = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<template>
  <MainLayout>
    <PageHero
      :eyebrow="contactHero.eyebrow"
      :title-before="contactHero.titleBefore"
      :title-highlight="contactHero.titleHighlight"
      :title-after="contactHero.titleAfter"
      align="center"
      compact
    >
      <Button :href="contactHero.ctaHref" variant="cta" size="lg">{{ contactHero.ctaLabel }}</Button>
    </PageHero>

    <section id="contact-form" class="landing-section landing-surface-a scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="fade-in-section form-static-glow rounded-3xl border border-slate-200/90 bg-white p-8 dark:border-white/10 dark:bg-zinc-950/75 lg:p-10 xl:p-12"
        >
          <div class="mx-auto max-w-3xl text-center">
            <p class="landing-eyebrow">GET IN TOUCH</p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Tell us about your project
            </h2>
            <p class="mt-3 text-base text-slate-600 dark:text-slate-400">
              We typically reply within two business days. For urgent matters, mention it in your message.
            </p>
          </div>
          <div class="mx-auto mt-10 max-w-5xl">
            <ContactForm :tone="formTone" :hide-company="false" :filled-fields="true">
              <template #actions>
                <div class="flex justify-end pt-2">
                  <Button type="submit" variant="cta" size="md">Submit</Button>
                </div>
              </template>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>

    <section class="landing-section landing-surface-b">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div class="fade-in-section flex flex-col justify-center">
            <p class="landing-eyebrow">{{ contactFindUs.eyebrow }}</p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {{ contactFindUs.title }}
            </h2>
            <p class="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100">{{ contactFindUs.company }}</p>
            <address class="mt-4 not-italic text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p v-for="(line, i) in contactFindUs.lines" :key="i">{{ line }}</p>
            </address>
          </div>
          <div class="fade-in-section min-h-[280px] overflow-hidden rounded-3xl border border-slate-200/80 shadow-sm dark:border-white/10 lg:min-h-[320px]">
            <iframe
              :title="`Map: ${contactFindUs.company}`"
              class="h-full min-h-[280px] w-full border-0 lg:min-h-[320px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :src="contactFindUs.mapEmbedSrc"
            />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
