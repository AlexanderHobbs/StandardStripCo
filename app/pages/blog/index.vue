<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Blog',
    description: 'Parking lot maintenance tips, guides, and industry news.',
    navOrder: 5,
    type: 'secondary',
    icon: 'i-mdi-post-outline',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h1 class="text-5xl">Blog</h1>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">
            Parking lot maintenance tips, guides, and industry news.
          </h6>
        </div>
        <slot />
      </div>
    </TheHeader>
    <BlogList />
  </div>
</template>
