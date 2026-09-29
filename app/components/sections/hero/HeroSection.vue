<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  import siteMeta from '@/site'

  const { phone, phoneDisplay } = siteMeta.business
</script>
<template>
  <section
    class="container mx-auto flex min-h-[calc(100svh-6rem)] flex-col pb-6 px-4"
  >
    <BackgroundImageWrapper
      :image-url="heroImageUrl"
      class="flex flex-1 items-center rounded-3xl"
    >
      <div class="w-full">
        <div class="lg:px-12 px-6 py-12 relative rounded-3xl">
          <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-secondary-600 dark:text-secondary-200 uppercase"
              >
                Sharper Lines. Safer Lots.
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Professional Parking Lot Striping & Pavement Maintenance
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                Fresh, code-compliant line striping, sealcoating, and pavement
                repair for property managers, retail centers, and businesses.
                Licensed, insured, and ready to keep your lot safe.
              </p>
              <div class="flex flex-wrap items-center gap-4">
                <BaseButton size="xl" label="Get a Free Quote" to="/contact">
                  <div class="inline-block ml-1 p-1.5 text-lg">
                    Get a Free Quote
                  </div>
                  <BaseIcon name="i-mdi-road-variant" height="28px" />
                </BaseButton>
                <NuxtLink
                  :to="`tel:${phone}`"
                  class="inline-flex items-center gap-2 rounded-full px-6 py-4 font-medium text-white ring-2 ring-inset ring-white/70 transition-colors hover:bg-white/10"
                >
                  <BaseIcon name="i-mdi-phone-outline" height="22px" />
                  {{ phoneDisplay }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
