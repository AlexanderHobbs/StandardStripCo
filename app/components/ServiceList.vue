<script setup lang="ts">
  const { allServices: services } = await useServices()
</script>
<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 justify-center">
        <ServiceCard
          v-for="(service, index) in services"
          v-bind="service"
          :key="index"
          class
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
