<script setup lang="ts">
  import HeroSection from '@/components/sections/hero/HeroSection.vue'
  import TrustBar from '@/components/sections/trust/TrustBar.vue'
  import ServiceListLite from '@/components/sections/services/ServiceListLite.vue'
  import MiniDivider from '@/components/sections/divider/MiniDivider.vue'
  import OurMission from '@/components/sections/our-mission/OurMission.vue'
  import CallToAction from '@/components/sections/call-to-action/CallToAction.vue'
  import ProcessSection from '@/components/sections/process/ProcessSection.vue'
  import StatsSection from '@/components/sections/stats/StatsSection.vue'
  import TestimonialsSection from '@/components/sections/testimonials/TestimonialsSection.vue'
  import FaqSection from '@/components/sections/faq/FaqSection.vue'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Parking Lot Striping & Sealcoating',
    description:
      'Professional parking lot line striping, sealcoating, ADA-compliant marking, and pavement maintenance for commercial properties.',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    tags: [
      'parking lot striping',
      'line striping contractor',
      'sealcoating',
      'ADA compliant parking lot marking',
      'pavement maintenance',
    ],
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <HeroSection />
    <TrustBar />
    <ServiceListLite />
    <OurMission />
    <MiniDivider />
    <CallToAction />
    <ProcessSection />
    <StatsSection />
    <TestimonialsSection />
    <FaqSection />
  </div>
</template>
<style scoped></style>
