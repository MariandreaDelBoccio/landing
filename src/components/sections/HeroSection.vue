<script setup lang="ts">
import { onMounted, ref } from "vue";
import { homeHero } from "../../data/homeContent";
import SharedBadge from "../ui/Badge/Badge.vue";

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
          class="h-[84vh] w-full object-cover"
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
        </video>
      </div>

      <div class="bg-white/95 backdrop-blur-sm">
        <div class="mx-auto max-w-[80vw] px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 pt-3">
          <div class="fade-in-section">
            <SharedBadge variant="secondary" size="sm"">DATA FOR TOMORROW</SharedBadge>
            <h1
              class="text-[42px] font-bold text-transparent bg-clip-text bg-size-[200%_100%]"
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
              {{ homeHero.title }}
            </h1>
            <p class="mt-2 text-base leading-relaxed text-primary sm:text-xl font-bold">
              {{ homeHero.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
