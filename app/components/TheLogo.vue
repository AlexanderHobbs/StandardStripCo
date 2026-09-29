<script setup lang="ts">
  import siteMeta from '@/site'
  const { title } = siteMeta
</script>
<template>
  <NuxtLink class="flex items-center sm:flex-row" to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      height="2.5em"
      viewBox="0 0 24 24"
      fill="none"
      class="mr-2"
    >
      <rect x="1" y="8" width="22" height="8" rx="1" class="fill-primary-600" />
      <rect x="3" y="11" width="4" height="2" class="fill-secondary-500" />
      <rect x="10" y="11" width="4" height="2" class="fill-secondary-500" />
      <rect x="17" y="11" width="4" height="2" class="fill-secondary-500" />
    </svg>
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ title }}
    </h6>
  </NuxtLink>
</template>
<style scoped></style>
