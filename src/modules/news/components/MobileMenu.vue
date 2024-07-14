<template>
  <nav :class="navClass">
    <SvgIcon @click="mobileMenuOpen = !mobileMenuOpen" icon="burgerMenu" size="24" />

    <div v-if="mobileMenuOpen" :class="menuClass">
      <div
        v-for="item in menuItems"
        :key="item.label"
        :class="`pt-2 pb-3 space-y-1 ${getActiveClass(item.value)}`"
      >
        <p @click="handleClickMenuItem(item.value)" class="px-3 py-2 rounded-md text-base">
          {{ item.label }}
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import SvgIcon from '@/components/icon/SvgIcon.vue';

interface MenuItem {
  label: string;
  value: string;
}

const emit = defineEmits(['changeMenu']);

const props = defineProps<{
  menuItems: MenuItem[];
  activeMenu: string;
  navClass?: string;
  buttonClass?: string;
  menuClass?: string;
}>();

const mobileMenuOpen = ref(false);

const getActiveClass = (menuItem: string) => {
  if (menuItem === props.activeMenu) return 'bg-red-600 text-white';
};
const handleClickMenuItem = (menuItem: string) => {
  emit('changeMenu', menuItem);
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Add any additional scoped styles if needed */
</style>
