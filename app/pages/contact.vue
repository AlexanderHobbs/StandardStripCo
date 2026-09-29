<script setup lang="ts">
  import siteMeta from '@/site'

  definePageMeta({
    title: 'Contact',
    description:
      'Request a free quote for parking lot striping, sealcoating, or pavement maintenance.',
    navOrder: 6,
    type: 'secondary',
    icon: 'i-mdi-email-outline',
    tags: ['free quote', 'parking lot striping quote', 'contact us'],
  })

  const { phone, phoneDisplay, email } = siteMeta.business

  const { allServices: services } = await useServices()

  const isRequired = (value: string) =>
    value && String(value).trim().length > 0 ? true : 'This field is required.'

  const isEmail = (value: string) => {
    if (!value) return 'This field is required.'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? true
      : 'Please enter a valid email address.'
  }

  const submitted = ref(false)

  const onSubmit = (values: Record<string, string>, { resetForm }) => {
    // Netlify Forms processes the POST to "/" server-side on deploy; this handler
    // just gives the visitor immediate feedback without a full page reload.
    const formData = new FormData()
    formData.append('form-name', 'contact')
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string)
    })

    $fetch('/', {
      method: 'POST',
      body: formData,
    })
      .catch(() => {
        // Netlify Forms submission only succeeds once deployed on Netlify;
        // ignore network errors in local dev.
      })
      .finally(() => {
        submitted.value = true
        resetForm()
      })
  }
</script>
<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <h6 class="text-primary-600 dark:text-primary-200 uppercase">
        Contact Us
      </h6>
      <h1 class="capitalize mt-3 text-2xl md:text-3xl lg:text-4xl">
        Get A Free Quote
      </h1>
      <p class="mt-4">
        Tell us a bit about your property and what you need, and we'll get back
        to you within one business day.
      </p>
    </div>

    <div class="-mx-4 flex flex-wrap mt-12">
      <div class="p-4 w-full lg:w-5/12">
        <h5 class="font-bold mb-4">Get In Touch</h5>
        <ul class="space-y-4">
          <li class="flex items-center">
            <BaseIcon name="i-mdi-phone-outline" height="24px" class="mr-3" />
            <NuxtLink :to="`tel:${phone}`">{{ phoneDisplay }}</NuxtLink>
          </li>
          <li class="flex items-center">
            <BaseIcon name="i-mdi-email-outline" height="24px" class="mr-3" />
            <NuxtLink :to="`mailto:${email}`">{{ email }}</NuxtLink>
          </li>
          <li class="flex items-center">
            <BaseIcon
              name="i-mdi-map-marker-outline"
              height="24px"
              class="mr-3"
            />
            <span>Proudly serving the greater metro area</span>
          </li>
        </ul>
      </div>

      <div class="p-4 w-full lg:w-7/12">
        <div
          v-if="submitted"
          class="p-6 rounded-xl bg-success-50 text-success-800"
        >
          Thanks! Your request has been sent — we'll be in touch within one
          business day.
        </div>
        <VeeForm
          v-else
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-4"
          @submit="onSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label
              >Don't fill this out if you're human: <input name="bot-field"
            /></label>
          </p>

          <div>
            <label for="name" class="block font-medium mb-1">Name</label>
            <VeeField
              id="name"
              name="name"
              type="text"
              :rules="isRequired"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            />
            <VeeErrorMessage name="name" class="text-error-600 text-sm" />
          </div>

          <div>
            <label for="email" class="block font-medium mb-1">Email</label>
            <VeeField
              id="email"
              name="email"
              type="email"
              :rules="isEmail"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            />
            <VeeErrorMessage name="email" class="text-error-600 text-sm" />
          </div>

          <div>
            <label for="phone" class="block font-medium mb-1"
              >Phone (optional)</label
            >
            <VeeField
              id="phone"
              name="phone"
              type="tel"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            />
          </div>

          <div>
            <label for="address" class="block font-medium mb-1"
              >Property Address</label
            >
            <VeeField
              id="address"
              name="address"
              type="text"
              :rules="isRequired"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            />
            <VeeErrorMessage name="address" class="text-error-600 text-sm" />
          </div>

          <div>
            <label for="service" class="block font-medium mb-1"
              >Service Interested In</label
            >
            <VeeField
              id="service"
              name="service"
              as="select"
              :rules="isRequired"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            >
              <option value="">Select a service</option>
              <option
                v-for="service in services"
                :key="service.slug"
                :value="service.name"
              >
                {{ service.name }}
              </option>
            </VeeField>
            <VeeErrorMessage name="service" class="text-error-600 text-sm" />
          </div>

          <div>
            <label for="message" class="block font-medium mb-1">Message</label>
            <VeeField
              id="message"
              name="message"
              as="textarea"
              rows="4"
              :rules="isRequired"
              class="border rounded-lg px-4 py-2 w-full dark:bg-neutral-900"
            />
            <VeeErrorMessage name="message" class="text-error-600 text-sm" />
          </div>

          <BaseButton type="submit" size="xl">Send Request</BaseButton>
        </VeeForm>
      </div>
    </div>
  </div>
</template>
