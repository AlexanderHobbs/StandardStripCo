<script setup lang="ts">
  definePageMeta({
    title: 'About',
    description:
      'Licensed, insured, and locally owned parking lot striping and pavement maintenance company with 15+ years of experience.',
    navOrder: 4,
    type: 'secondary',
    icon: 'i-mdi-information-outline',
    tags: [
      'parking lot striping company',
      'licensed and insured',
      'pavement maintenance contractor',
    ],
  })

  const values = [
    {
      icon: 'i-mdi-certificate-outline',
      title: 'Licensed & Insured',
      description:
        'Fully licensed and insured on every job, so you can hire with confidence.',
    },
    {
      icon: 'i-mdi-account-hard-hat-outline',
      title: 'Experienced Crews',
      description:
        'Our crews bring years of hands-on striping and pavement maintenance experience to every project.',
    },
    {
      icon: 'i-mdi-clock-check-outline',
      title: 'On-Time, Every Time',
      description:
        'We work around your schedule and show up when we say we will — no surprises.',
    },
    {
      icon: 'i-mdi-wheelchair-accessibility',
      title: 'Code-Compliant Work',
      description:
        'Every layout is designed to meet ADA and local code requirements, so you stay compliant.',
    },
  ]
</script>
<template>
  <div>
    <section class="container mx-auto px-4 py-12">
      <div class="mx-auto text-center w-full lg:w-8/12">
        <h6 class="text-primary-600 dark:text-primary-200 uppercase">
          About Us
        </h6>
        <h1 class="capitalize mt-3 text-2xl md:text-3xl lg:text-4xl">
          Built On Reliability & Craftsmanship
        </h1>
        <p class="mt-4">
          ProStripe Parking Lot Services was founded on a simple idea: property
          owners deserve a pavement maintenance partner who shows up on time,
          does the job right, and stands behind their work. Over 15 years later,
          we've grown into a trusted name for line striping, sealcoating, and
          parking lot maintenance across the region.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="p-4 w-full sm:w-1/2 lg:w-1/4"
        >
          <div
            class="h-full p-6 rounded-3xl text-center bg-neutral-50 dark:bg-neutral-900"
          >
            <BaseIcon
              :name="value.icon"
              height="36px"
              class="mb-3 mx-auto !text-primary-600"
            />
            <h5 class="font-bold mb-2">{{ value.title }}</h5>
            <p class="text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-6/12">
          <NuxtImg
            src="https://placehold.co/1000x650/1f2124/ffffff?text=Our+Equipment"
            class="rounded-3xl w-full"
            alt="Our equipment"
          />
        </div>
        <div class="mx-auto p-4 w-full lg:w-5/12">
          <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
            Our Equipment
          </h6>
          <h3 class="capitalize mb-2">Professional-Grade Results</h3>
          <p class="mb-6">
            We invest in modern striping and sealcoating equipment so every job
            gets crisp lines, even coverage, and a fast cure time — minimizing
            disruption to your property.
          </p>
          <BaseButton size="xl" to="/contact"> Get A Free Quote </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
