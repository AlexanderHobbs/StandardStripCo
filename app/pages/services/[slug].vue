<script setup lang="ts">
  import siteMeta from '@/site'

  definePageMeta({
    title: 'Services',
    description: 'Professional line striping and parking lot maintenance.',
    hidden: true,
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-road-variant',
  })

  const route = useRoute()
  const { slug } = route.params

  const { fetchService } = await useService(slug as string)

  const {
    name,
    shortDescription,
    description,
    image,
    icon,
    features,
    priceNote,
  } = fetchService()

  const metaDescription = [shortDescription, description]
    .filter(Boolean)
    .join(' ')

  usePageSeo({
    title: `${name} Services`,
    description: metaDescription,
    keywords: `${name}, parking lot ${name?.toLowerCase()}, pavement maintenance`,
  })

  useSchemaOrg([
    {
      '@type': 'Service',
      name,
      serviceType: name,
      description: description || shortDescription,
      provider: { '@id': `${siteMeta.url}/#identity` },
    },
    defineBreadcrumb({
      itemListElement: [
        { name: 'Home', item: '/' },
        { name: 'Services', item: '/services' },
        { name: name as string },
      ],
    }),
  ])
</script>
<template>
  <div class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="container mx-auto pl-12 pr-8 pt-4 relative">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="py-4 text-center w-full lg:w-fit">
              <NuxtLink to="/services">
                <BaseButton><span>&lt;- Go Back</span> </BaseButton>
              </NuxtLink>
            </div>
            <div class="text-center w-full lg:w-fit">
              <h1 class="capitalize text-2xl md:text-3xl lg:text-4xl">
                {{ name }}
              </h1>
              <h6 class="uppercase">{{ shortDescription }}</h6>
            </div>
            <div
              class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"
            >
              <BaseIcon v-if="icon" :name="icon" height="28px" />
            </div>
          </div>
          <div class="flex flex-wrap pt-8 w-full lg:flex-nowrap">
            <div
              class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"
            >
              <div class="w-full">
                <NuxtImg :src="image" class="rounded-xl w-full" :alt="name" />
              </div>
              <div class="py-8 w-full sm:px-16">
                <p>{{ description }}</p>
                <p v-if="priceNote" class="font-semibold mt-4">
                  {{ priceNote }}
                </p>
              </div>
              <div
                class="max-w-xs py-8 rounded-xl w-full sm:px-8 bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
              >
                <ul>
                  <li
                    v-for="(feature, index) in features"
                    :key="index"
                    class="flex items-center justify-center mt-4 first:mt-0 lg:justify-start"
                  >
                    <BaseIcon
                      name="i-material-symbols-check-box-outline"
                      height="24px"
                    /><span class="ml-2">{{ feature }}</span>
                  </li>
                </ul>
                <div class="mt-6 px-4 text-center">
                  <BaseButton size="lg" color="white" to="/contact" block>
                    Get a Free Quote
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 px-8 text-center lg:text-left">
            <p>
              Ready for a quote on
              <span class="mx-1 text-primary-600 dark:text-primary-200">{{
                name
              }}</span
              ><span
                >? Contact us and we'll get back to you within one business
                day.</span
              >
            </p>
            <div
              class="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <BaseButton size="xl" to="/contact">Get a Free Quote</BaseButton>
              <BaseButton
                size="xl"
                color="white"
                :to="`tel:${siteMeta.business.phone}`"
              >
                Call {{ siteMeta.business.phoneDisplay }}
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
