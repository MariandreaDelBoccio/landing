<script setup lang="ts">
import { onMounted, ref } from "vue";
import { homeHero } from "../../data/homeContent";

const videoReady = ref(false);
const videoEl = ref<HTMLVideoElement | null>(null);

const tryPlay = async () => {
  try {
    if (!videoEl.value) return;
    await videoEl.value.play();
  } catch {
    // Si el navegador bloquea autoplay, igual mostraremos el poster hasta que pueda cargar.
  }
};

onMounted(() => {
  // Evita que, por timing, el poster quede “pegado” si el video ya está listo.
  tryPlay();
});
</script>

<template>
  <section class="relative">
    <div class="flex min-h-[100svh] flex-col">
      <!-- Video fills the remaining viewport space; title is in normal flow at bottom -->
      <div class="relative flex-1">
        <video
          class="absolute inset-0 z-[1] h-full w-full object-cover object-[center_68%] lg:object-[center_64%] xl:object-[center_56%] 2xl:object-[center_52%]"
          :poster="videoReady ? '' : '/images/hero-poster.png'"
          ref="videoEl"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          aria-hidden="true"
          @loadeddata="videoReady = true"
          @canplay="videoReady = true"
          @playing="videoReady = true"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          <source src="/images/hero-video.mov" type="video/quicktime" />
        </video>
        <div
          class="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none"
        >
          <h1
            class="translate-y-10 lg:translate-y-16 text-[42px] font-bold uppercase tracking-[0.45em] text-transparent bg-clip-text bg-size-[200%_100%]"
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
            DATA FOR TOMORROW
          </h1>
        </div>
      </div>

      <div class="bg-white/95 backdrop-blur-sm">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div class="fade-in-section max-w-3xl">
            <h1
              class="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
            >
              {{ homeHero.title }}
            </h1>
            <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {{ homeHero.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
