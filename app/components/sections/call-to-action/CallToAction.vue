<script setup lang="ts">
  import CallToActionCard from './CallToActionCard.vue'

  const callToActions = [
    {
      img: 'https://placehold.co/900x1000/1f2124/1f2124',
      action: 'Our Services',
      to: '/services',
    },
    {
      img: 'https://placehold.co/900x1000/2f3033/2f3033',
      action: 'View Our Work',
      to: '/our-work',
    },
    {
      img: 'https://placehold.co/900x1000/b91c1c/b91c1c',
      action: 'Get a Quote',
      to: '/contact',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Started
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Everything Your Parking Lot Needs
      </h3>
      <p class="mt-4 text-center">
        From fresh striping to a free on-site quote, we make it easy to keep
        your lot safe and looking sharp.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
