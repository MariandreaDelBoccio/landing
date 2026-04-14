<script setup lang="ts">
import BlogInsightsSection from "../components/sections/BlogInsightsSection.vue";
import ContactCTASection from "../components/sections/ContactCTASection.vue";
import ServiceDetailSections from "../components/sections/ServiceDetailSections.vue";
import MainLayout from "../layouts/MainLayout.vue";
import Button from "../components/ui/Button.vue";
import PageHero from "../components/ui/PageHero.vue";
import { nlpPage, serviceContactCta, stats } from "../data/servicePagesContent";
</script>

<template>
  <MainLayout>
    <PageHero
      :video="nlpPage.heroVideo"
      :has-cta="true"
      :has-info="true"
      :eyebrow="nlpPage.heroEyebrow"
      :title-before="nlpPage.titleBefore"
      :title-highlight="nlpPage.titleHighlight"
      :title-after="nlpPage.titleAfter"
      :subtitle="nlpPage.subtitle"
    >
      <Button :to="nlpPage.primaryCta.href" variant="cta" size="lg">{{
        nlpPage.primaryCta.label
      }}</Button>
    </PageHero>

    <ServiceDetailSections
      :how-it-works="nlpPage.howItWorks"
      :feature-cards="[...nlpPage.howItWorks.cards]"
      :infographic="nlpPage.infographic"
      :use-case="nlpPage.useCase"
      :stats="[...nlpPage.stats]"
      :nlp-solutions="[nlpPage.nlpSolutions]"
      :dgn-stats="stats"
    />

    <BlogInsightsSection
      :eyebrow="nlpPage.insightsEyebrow"
      :title="nlpPage.insightsTitle"
    />

    <ContactCTASection
      :title-before="serviceContactCta.nlp.titleBefore"
      :title-highlight="serviceContactCta.nlp.titleHighlight"
      :title-after="serviceContactCta.nlp.titleAfter"
      :subtitle="serviceContactCta.nlp.subtitle"
    />
  </MainLayout>
</template>
