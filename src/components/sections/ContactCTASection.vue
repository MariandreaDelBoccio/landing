<script setup lang="ts">
import Button from '../ui/Button.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section class="bg-[#2c6474] py-14 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div class="fade-in-section">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            MedBioinformatics can help you build a better tomorrow through data.
          </h2>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Reach out!
          </p>
        </div>

        <div class="fade-in-section rounded-3xl bg-white/0 p-0">
          <ContactForm tone="dark">
            <template #actions>
              <div class="pt-2">
                <Button type="submit" variant="success" size="md">
                  Submit
                </Button>
              </div>
            </template>
          </ContactForm>
        </div>
      </div>
    </div>
  </section>
</template>
