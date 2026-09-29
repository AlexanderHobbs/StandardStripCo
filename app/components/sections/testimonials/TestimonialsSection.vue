<script setup lang="ts">
  // TODO: MOCK CONTENT - replace these with the real testimonials.
  // Add, remove or reorder entries freely; the grid adapts to the count.
  const testimonials = [
    {
      quote:
        'Our lot looked brand new after one evening. The crew worked after closing, so customers never noticed the disruption.',
      name: 'Jane Doe',
      role: 'Property Manager',
      company: 'Sample Retail Center',
    },
    {
      quote:
        'The written quote was clear, the price never changed, and the ADA markings passed inspection the first time.',
      name: 'John Smith',
      role: 'Facilities Director',
      company: 'Sample Medical Plaza',
    },
    {
      quote:
        'Fast, professional and easy to schedule. They re-striped and sealcoated our whole lot in a weekend.',
      name: 'Alex Johnson',
      role: 'Owner',
      company: 'Sample Restaurant Group',
    },
    {
      quote:
        'Responsive from the first call to the final walkthrough. We now use them for every property we manage.',
      name: 'Sam Taylor',
      role: 'Operations Manager',
      company: 'Sample Apartment Communities',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <h6 class="text-primary-600 dark:text-primary-200 uppercase">
        Testimonials
      </h6>
      <h3 class="capitalize mt-3">What Our Customers Say</h3>
    </div>
    <div class="-mx-4 flex flex-wrap mt-10">
      <figure
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="flex p-4 w-full lg:w-1/2"
      >
        <div
          class="flex flex-col h-full p-8 rounded-3xl w-full bg-neutral-50 dark:bg-neutral-900 shadow-xl"
        >
          <BaseIcon
            name="i-mdi-format-quote-open"
            height="40px"
            class="mb-3 !text-primary-600"
          />
          <blockquote class="mb-6">
            <p>{{ testimonial.quote }}</p>
          </blockquote>
          <figcaption class="mt-auto">
            <span class="block font-bold">{{ testimonial.name }}</span>
            <span class="block text-sm">
              {{ testimonial.role }}, {{ testimonial.company }}
            </span>
          </figcaption>
        </div>
      </figure>
    </div>
    <div class="mt-8 text-center">
      <p class="mb-4">Join the property owners who trust us with their lots.</p>
      <BaseButton size="xl" to="/contact">Get a Free Quote</BaseButton>
    </div>
  </section>
</template>
<style scoped></style>
