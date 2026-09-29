<script setup lang="ts">
  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title,
      description: route.meta.description,
      ogImage: route.meta.ogImage,
      canonicalUrl: route.meta.canonicalUrl || route.fullPath,
      generator: route.meta.generator,
      tags: route.meta.tags,
    }
  })

  // Quote CTAs: the contact page is the destination itself, and blog posts
  // carry their own in-article CTA.
  const showEndBanner = computed(
    () => route.path !== '/contact' && !route.path.startsWith('/blog/'),
  )
  const showStickyBar = computed(() => route.path !== '/contact')

  useHeadAndMeta(pageMeta)
  useOgImage()
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <div
      class="min-h-screen flex flex-col pb-20 lg:pb-0 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        class="fixed z-20 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60"
      />
      <div class="mt-24">
        <main class="shadow">
          <slot />
        </main>
      </div>
      <QuoteBanner v-if="showEndBanner" />
      <TheFooter />
      <StickyQuoteBar v-if="showStickyBar" />
    </div>
    <!-- </div> -->
  </div>
</template>

<style></style>
