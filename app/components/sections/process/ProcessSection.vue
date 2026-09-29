<script setup lang="ts">
  const steps = [
    {
      icon: 'i-mdi-clipboard-text-outline',
      title: 'Request A Free Quote',
      description:
        "Tell us about your property and what you need. We'll walk your lot and send a written quote with no hidden fees.",
    },
    {
      icon: 'i-mdi-calendar-check-outline',
      title: 'We Schedule Around You',
      description:
        'We work early mornings, evenings, or weekends to minimize disruption to your business or residents.',
    },
    {
      icon: 'i-mdi-road-variant',
      title: 'We Get It Done',
      description:
        'Our crew preps the surface and applies fast-drying, code-compliant markings so your lot is back in service quickly.',
    },
    {
      icon: 'i-mdi-check-decagram-outline',
      title: 'Final Walkthrough',
      description:
        'We review the finished work with you to make sure everything meets your expectations before we call it done.',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <h6 class="text-primary-600 dark:text-primary-200 uppercase">
        How It Works
      </h6>
      <h3 class="capitalize mt-3">From Quote To Completion</h3>
    </div>
    <div class="-mx-4 flex flex-wrap mt-10">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="p-4 w-full sm:w-1/2 lg:w-1/4"
      >
        <div
          class="h-full p-6 rounded-3xl text-center bg-neutral-50 dark:bg-neutral-900"
        >
          <div
            class="mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center bg-primary-600 text-white"
          >
            <span class="font-bold">{{ index + 1 }}</span>
          </div>
          <BaseIcon
            :name="step.icon"
            height="32px"
            class="mb-3 mx-auto !text-primary-600"
          />
          <h5 class="font-bold mb-2">{{ step.title }}</h5>
          <p class="text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
