<script setup lang="ts">
  import type { PropType } from 'vue'

  type NavItem = {
    title: string
    to: string
    children?: NavItem[]
  }

  const props = defineProps({
    navs: {
      type: Array as PropType<NavItem[]>,
      default: () => [],
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })

  // Which dropdown is open (by parent path). It opens on hover/focus and is
  // closed explicitly when the parent or one of its options is clicked, and
  // again on route change, Escape, or when the pointer/focus leaves it.
  const openMenu = ref<string | null>(null)
  const open = (nav: NavItem) => {
    if (nav.children?.length) openMenu.value = nav.to
  }
  const close = () => {
    openMenu.value = null
  }
  const onFocusOut = (event: FocusEvent) => {
    const group = event.currentTarget as HTMLElement
    if (!group.contains(event.relatedTarget as Node | null)) close()
  }
  watch(() => props.currentPath, close)

  // A parent stays highlighted while one of its child pages is open.
  const isActive = (nav: NavItem) =>
    nav.to === props.currentPath ||
    !!nav.children?.some((child) => child.to === props.currentPath)

  const linkClass = (active: boolean) =>
    active
      ? 'text-primary-600 dark:text-primary-400'
      : 'text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400'
</script>

<template>
  <div class="h-full items-center">
    <div
      class="flex h-full flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8"
    >
      <div
        v-for="nav in navs"
        :key="nav.to"
        class="relative"
        @mouseenter="open(nav)"
        @mouseleave="close"
        @focusin="open(nav)"
        @focusout="onFocusOut"
        @keydown.esc="close"
      >
        <NuxtLink
          :to="nav.to"
          class="inline-flex items-center gap-1 font-medium text-base whitespace-nowrap transition-colors"
          :class="linkClass(isActive(nav))"
          :aria-haspopup="nav.children?.length ? 'true' : undefined"
          @click="close"
        >
          {{ nav.title }}
          <BaseIcon
            v-if="nav.children?.length"
            name="i-mdi-chevron-down"
            height="18px"
            class="transition-transform"
            :class="{ 'rotate-180': openMenu === nav.to }"
          />
        </NuxtLink>

        <!-- Dropdown: desktop only (lg+), directly under its parent link. The
             pt-2 wrapper bridges the gap so hover isn't lost between the link
             and the panel. On smaller screens, tapping the parent opens its
             overview page instead. -->
        <div
          v-if="nav.children?.length"
          v-show="openMenu === nav.to"
          class="absolute left-0 top-full z-30 hidden pt-2 lg:block"
        >
          <ul
            class="min-w-[14rem] overflow-hidden rounded-xl border border-neutral-200 bg-white py-2 shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            <li v-for="child in nav.children" :key="child.to">
              <NuxtLink
                :to="child.to"
                class="block whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
                :class="linkClass(child.to === currentPath)"
                @click="close"
              >
                {{ child.title }}
              </NuxtLink>
            </li>
            <li
              v-if="!nav.children.some((child) => child.to === nav.to)"
              class="mt-1 border-t border-neutral-200 dark:border-neutral-800"
            >
              <NuxtLink
                :to="nav.to"
                class="block whitespace-nowrap px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-neutral-100 dark:text-primary-400 dark:hover:bg-neutral-900"
                @click="close"
              >
                View all {{ nav.title.toLowerCase() }} &rarr;
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
