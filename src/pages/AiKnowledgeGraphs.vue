<script setup lang="ts">
import BlogInsightsSection from '../components/sections/BlogInsightsSection.vue'
import ContactCTASection from '../components/sections/ContactCTASection.vue'
import ServiceDetailSections from '../components/sections/ServiceDetailSections.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Button from '../components/ui/Button.vue'
import PageHero from '../components/ui/PageHero.vue'
import { aiKgPage, serviceContactCta } from '../data/servicePagesContent'
</script>

<template>
  <MainLayout>
    <PageHero
      :eyebrow="aiKgPage.heroEyebrow"
      :title-before="aiKgPage.titleBefore"
      :title-highlight="aiKgPage.titleHighlight"
      :title-after="aiKgPage.titleAfter"
      :subtitle="aiKgPage.subtitle"
    >
      <Button :to="aiKgPage.primaryCta.href" variant="cta" size="lg">{{ aiKgPage.primaryCta.label }}</Button>
    </PageHero>

    <ServiceDetailSections
      :feature-cards="[...aiKgPage.featureCards]"
      :infographic="aiKgPage.infographic"
      :use-case="aiKgPage.useCase"
      :stats="[...aiKgPage.stats]"
      :secondary-stats="[...aiKgPage.secondaryStats]"
    />

    <BlogInsightsSection :eyebrow="aiKgPage.insightsEyebrow" :title="aiKgPage.insightsTitle" />

    <ContactCTASection
      :title-before="serviceContactCta.aiKg.titleBefore"
      :title-highlight="serviceContactCta.aiKg.titleHighlight"
      :title-after="serviceContactCta.aiKg.titleAfter"
      :subtitle="serviceContactCta.aiKg.subtitle"
    />
  </MainLayout>
</template>
