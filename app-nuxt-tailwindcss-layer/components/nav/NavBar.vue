<script setup lang="ts">
  const { allNavs, currentPath } = useNavMenu()
</script>
<template>
  <div class="w-full">
    <nav>
      <div class="container mx-auto px-4 sm:px-6">
        <div
          class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 lg:h-24 lg:flex-nowrap lg:py-0"
        >
          <div class="flex flex-shrink-0 items-center">
            <TheLogo />
          </div>
          <NavPrimary
            :navs="allNavs"
            :current-path="currentPath"
            class="order-3 w-full lg:order-none lg:ml-auto lg:w-auto"
          />
          <BaseButton
            to="/contact"
            class="whitespace-nowrap"
            label="Get in Contact"
          >
            Get in Contact
          </BaseButton>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
