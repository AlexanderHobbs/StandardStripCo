<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg
          src="https://placehold.co/1000x650/b91c1c/ffffff?text=Our+Mission"
          class="rounded-3xl w-full"
          alt="Our Mission"
        />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Why Choose Us
        </h6>
        <h3 class="capitalize mb-2">Built On Reliability & Craftsmanship</h3>
        <p class="mb-6">
          Licensed, insured, and locally owned, we've helped property managers
          and business owners keep their lots safe, compliant, and looking
          professional for over 15 years.
        </p>
        <BaseButton size="xl" to="/about"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
