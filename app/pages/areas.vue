<script setup lang="ts">
  import { serviceCounties, serviceTowns } from '@/data/service-area'

  definePageMeta({
    title: 'Areas We Cover',
    description:
      'Parking lot striping, sealcoating and pavement maintenance from Booneville to Bentonville, Arkansas. See the towns and counties we serve.',
    navOrder: 4,
    type: 'primary',
    icon: 'i-mdi-map-marker-radius-outline',
    tags: [
      'parking lot striping Arkansas',
      'Bentonville parking lot striping',
      'Fort Smith sealcoating',
      'Fayetteville line striping',
    ],
  })

  const countyName = (slug: string) =>
    serviceCounties.find((c) => c.slug === slug)?.name ?? ''

  const allLots = serviceCounties.flatMap((c) => c.lots)
  const lotCount = (town: string) =>
    allLots.filter((lot) => lot.city === town).length
</script>

<template>
  <div>
    <section class="container mx-auto px-4 pt-12 pb-8 text-center">
      <div class="mx-auto lg:w-8/12">
        <h6 class="text-primary-600 uppercase dark:text-primary-200">
          Areas We Cover
        </h6>
        <h1 class="capitalize text-2xl md:text-3xl lg:text-4xl">
          Parking Lot Striping From Booneville To Bentonville
        </h1>
        <p class="mt-4">
          We serve {{ serviceTowns.length }} towns across
          {{ serviceCounties.length }} Arkansas counties. Find your town below.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 pb-16">
      <div class="-mx-3 flex flex-wrap">
        <div
          v-for="town in serviceTowns"
          :id="town.slug"
          :key="town.slug"
          class="flex w-full scroll-mt-28 p-3 md:w-1/2 lg:w-1/3"
        >
          <article
            class="flex w-full flex-col rounded-3xl bg-neutral-50 p-6 shadow-xl dark:bg-neutral-900"
          >
            <div class="mb-3 flex items-center justify-between gap-2">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-primary-600/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-200"
              >
                <BaseIcon name="i-mdi-map-marker-outline" height="14px" />
                {{ countyName(town.countySlug) }}, AR
              </span>
              <span
                v-if="lotCount(town.name)"
                class="text-xs text-neutral-500 dark:text-neutral-400"
              >
                {{ lotCount(town.name) }} lot{{
                  lotCount(town.name) > 1 ? 's' : ''
                }}
                completed
              </span>
            </div>

            <h3 class="mb-2 !text-xl md:!text-2xl">
              Parking Lot Striping in {{ town.name }}
            </h3>
            <p class="mb-4 text-sm">{{ town.blurb }}</p>

            <ul class="mb-6 flex flex-wrap gap-2">
              <li
                v-for="item in town.focus"
                :key="item"
                class="rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800"
              >
                {{ item }}
              </li>
            </ul>

            <div class="mt-auto">
              <BaseButton size="lg" to="/contact" block>
                Get a Quote in {{ town.name }}
              </BaseButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
