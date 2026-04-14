<script setup lang="ts">
import CompanyIntroSection from '../components/sections/CompanyIntroSection.vue'
import ContactCTASection from '../components/sections/ContactCTASection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import StatsSection from '../components/sections/StatsSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import { stats } from '../data/homeContent'
import MainLayout from '../layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <HeroSection />
    <ServicesSection />
    <StatsSection :stats="stats" />
    <CompanyIntroSection />
    <TestimonialsSection />
    <ContactCTASection />
  </MainLayout>
</template>
