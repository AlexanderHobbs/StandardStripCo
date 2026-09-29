<script setup lang="ts">
  import type { Service } from '~~/types/services'
  const { slug, name, shortDescription, image, icon } = defineProps<Service>()
</script>
<template>
  <NuxtLink class="flex w-full md:w-6/12 lg:w-4/12" :to="`/services/${slug}`">
    <div
      class="m-3 flex w-full flex-col items-center text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 px-6 py-12 rounded-3xl shadow-xl text-center"
    >
      <NuxtImg
        class="aspect-[4/3] mb-4 mx-auto object-cover rounded-xl w-full sm:w-9/12"
        :alt="name"
        :src="image"
      />
      <BaseIcon
        v-if="icon"
        :name="icon"
        height="32px"
        class="mb-2 mx-auto !text-secondary-600"
      />
      <h5 class="font-bold mb-2">{{ name }}</h5>
      <p class="mb-6 text-secondary-600 dark:text-secondary-200 text-sm">
        {{ shortDescription }}
      </p>
      <BaseButton size="lg" class="mt-auto"
        ><span>Learn More</span>
        <BaseIcon
          name="i-mdi-arrow-right"
          height="20px"
          class="!text-tertiary-600 md:ml-1.5"
        />
      </BaseButton>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
