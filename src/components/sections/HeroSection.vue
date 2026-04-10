<script setup lang="ts">
import { homeHero } from "../../data/homeContent";
import SharedBadge from "../ui/Badge/Badge.vue";
</script>

<template>
  <section class="relative">
    <div class="flex min-h-[100svh] flex-col">
      <div class="relative min-h-0 flex-1 overflow-hidden bg-white dark:bg-slate-950">
        <img
          src="/images/still-medbio.jpg"
          alt=""
          class="absolute inset-0 h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black_0%,black_42%,rgba(0,0,0,0.65)_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_42%,rgba(0,0,0,0.65)_58%,transparent_100%)]"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/55 to-white/88 dark:from-slate-950/35 dark:via-slate-950/50 dark:to-slate-950/90"
          aria-hidden="true"
        />

        <div
          class="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <p
            class="max-w-4xl text-center text-2xl font-bold leading-snug tracking-tight text-transparent bg-clip-text bg-size-[200%_100%] sm:text-3xl md:text-[4rem] md:leading-tight"
            style="
              background-image: linear-gradient(
                90deg,
                var(--secondary),
                var(--primary) 50%,
                #fff 100%
              );
              background-size: 200% 100%;
            "
          >
            We turn biomedical Evidence into knowledge
          </p>
        </div>
      </div>

      <div class="relative z-20 shrink-0 bg-white/95 backdrop-blur-sm dark:bg-slate-950/95">
        <div
          class="mx-auto max-w-[80vw] px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 pt-3"
        >
          <div class="fade-in-section">
            <SharedBadge variant="secondary" size="sm"
              >DATA FOR TOMORROW</SharedBadge
            >
            <h1
              class="text-[34px] font-bold bg-clip-text bg-size-[200%_100%] mt-2 text-base leading-relaxed text-primary dark:text-slate-100"
            >
              {{ homeHero.title }}
            </h1>
            <p
              class="mt-1 text-base leading-relaxed text-primary sm:text-xl font-bold dark:text-slate-300"
            >
              {{ homeHero.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
