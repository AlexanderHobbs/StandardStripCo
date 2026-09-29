<script setup lang="ts">
  // TODO: MOCK CONTENT - replace with the real Google rating/review count and
  // the real company names (or swap the names for logo images) before launch.
  const google = {
    rating: 5.0,
    reviews: 50,
  }

  const companies = [
    { name: 'Sample Retail Group', icon: 'i-mdi-storefront-outline' },
    { name: 'Northgate Plaza', icon: 'i-mdi-domain' },
    { name: 'Sample Medical Center', icon: 'i-mdi-hospital-building' },
    { name: 'Harbor Property Mgmt', icon: 'i-mdi-home-city-outline' },
    { name: 'Sample Storage Co.', icon: 'i-mdi-warehouse' },
  ]
</script>
<template>
  <section class="container mx-auto px-4 pb-8">
    <!-- Hairlines fade to transparent at both ends so they melt into the page -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
      aria-hidden="true"
    />
    <div
      class="flex flex-col items-center justify-center gap-x-10 gap-y-3 py-4 text-sm lg:flex-row"
    >
      <!-- Google rating -->
      <div class="flex items-center gap-2">
        <BaseIcon name="i-mdi-google" height="18px" />
        <div
          class="flex items-center"
          role="img"
          :aria-label="`${google.rating} out of 5 stars`"
        >
          <BaseIcon
            v-for="n in 5"
            :key="n"
            name="i-mdi-star"
            height="16px"
            class="!text-secondary-500"
          />
        </div>
        <span>
          <strong>{{ google.rating.toFixed(1) }}</strong>
          <span class="text-neutral-500 dark:text-neutral-400">
            ({{ google.reviews }}+ reviews)
          </span>
        </span>
      </div>

      <span
        class="hidden h-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-700 lg:block"
        aria-hidden="true"
      />

      <!-- Trusted by -->
      <div
        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-neutral-500 dark:text-neutral-400"
      >
        <span class="text-xs font-semibold uppercase tracking-wider">
          Trusted by
        </span>
        <span
          v-for="company in companies"
          :key="company.name"
          class="flex items-center gap-1.5 font-medium"
        >
          <BaseIcon :name="company.icon" height="16px" />
          {{ company.name }}
        </span>
      </div>
    </div>
    <div
      class="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
      aria-hidden="true"
    />
  </section>
</template>
<style scoped></style>
