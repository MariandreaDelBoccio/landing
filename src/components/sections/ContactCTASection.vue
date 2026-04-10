<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../../composables/useTheme'
import { contactCta } from '../../data/homeContent'
import Button from '../ui/Button.vue'
import ContactForm from './ContactForm.vue'

const { isDark } = useTheme()
const formTone = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<template>
  <section class="landing-section bg-zinc-100 dark:bg-[#030303]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="fade-in-section form-static-glow rounded-3xl border border-slate-200/90 bg-white p-8 dark:border-white/10 dark:bg-zinc-950/75 lg:p-10 xl:p-12"
      >
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <h2
              class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.35rem] lg:leading-tight"
            >
              {{ contactCta.titleBefore }}<span class="text-secondary">{{ contactCta.titleHighlight }}</span>{{ contactCta.titleAfter }}
            </h2>
            <p class="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {{ contactCta.subtitle }}
            </p>
          </div>

          <div>
            <ContactForm :tone="formTone" :hide-company="true" :filled-fields="true">
              <template #actions>
                <div class="pt-2">
                  <Button type="submit" variant="cta" size="md"> Send message </Button>
                </div>
              </template>
            </ContactForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
