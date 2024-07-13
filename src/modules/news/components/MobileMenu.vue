<template>
  <nav class="p-4 border b">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on mobile menu state -->
    <div v-if="mobileMenuOpen" class="sm:hidden" @click.away="mobileMenuOpen = false">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Mobile menu items -->
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Services</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MobileMenu',
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      mobileMenuOpen
    };
  }
});
</script>

<style scoped>
/* Tailwind CSS classes for styling */
</style>
