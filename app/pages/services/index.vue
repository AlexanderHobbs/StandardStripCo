<script setup>
  definePageMeta({
    title: 'Services',
    description:
      'Professional line striping, sealcoating, ADA-compliant marking, pothole repair, lot cleaning, and signage for commercial parking lots.',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-road-variant',
    tags: [
      'line striping',
      'sealcoating',
      'ADA compliance marking',
      'pothole repair',
      'parking lot cleaning',
      'signage installation',
    ],
  })
</script>
<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-8/12">
        <h6 class="uppercase">Our Services</h6>
        <h1 class="capitalize text-2xl md:text-3xl lg:text-4xl">
          Professional Pavement Marking & Maintenance
        </h1>
        <p class="mb-4">
          From fresh line striping to sealcoating, ADA compliance, and pothole
          repair, we keep commercial parking lots safe, sharp, and
          code-compliant. Every job is completed by licensed, insured crews
          using durable, fast-drying materials built to withstand daily traffic.
          Browse our full range of services below, or
          <NuxtLink to="/contact" class="underline"
            >request a free quote</NuxtLink
          >
          for your property.
        </p>
        <BaseButton size="xl" to="/contact" color="secondary">
          Get a Free Quote
        </BaseButton>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <ServiceList />
      </div>
    </div>
  </div>
</template>
