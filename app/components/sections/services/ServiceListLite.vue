<script setup lang="ts">
  const { allServices: services } = await useServices()
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Our Services
            </h6>
            <h3 class="capitalize">
              Professional Pavement Marking & Maintenance
            </h3>
            <p class="mb-4">
              From fresh line striping to sealcoating and ADA compliance, we
              keep your parking lot safe, sharp, and code-compliant.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/services" color="secondary"
              ><span>View All Services ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            v-bind="service"
          />
        </div>
        <div class="mt-8 text-center">
          <BaseButton size="xl" to="/contact">Get a Free Quote</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
