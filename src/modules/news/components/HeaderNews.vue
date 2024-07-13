<template>
  <div>
    <header class="flex items-center justify-between px-2 md:px-8 md:pb-3 text-3xl">
      <p class="hidden md:block font-bold"><span class="text-red-600">NEWS</span>ROOM</p>
      <img src="@/assets/images/ads.png" class="h-[70px] md:w-[700px]" />
    </header>
    <nav class="hidden md:flex h-11 items-center justify-between bg-white pl-4 pr-8 shadow-sm">
      <CommonTab v-model="currentTab" :tabs="tabs" @update:modelValue="handleChangeTab" />
      <CommonInput v-model="search" />
    </nav>
    <div class="flex md:hidden w-full bg-white px-2 py-3 mt-2">
      <p class="font-bold text-3xl"><span class="text-red-600">NEWS</span>ROOM</p>
      <!-- <MobileMenu /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CommonTab from '@/components/common/CommonTab.vue';
import CommonInput from '@/components/common/CommonInput.vue';
import MobileMenu from '../components/MobileMenu.vue';

const tabs = [
  { label: 'Home', value: 'home' },
  { label: 'Categories', value: 'categories' },
  { label: 'Single News', value: 'singleNews' }
];

const router = useRouter();
const currentTab = ref('home');
const search = ref('');

const handleChangeTab = (tab: string | number) => {
  switch (tab) {
    case 'categories':
      router.push({ name: 'categoryNews', params: { id: 1 } });
      break;
    case 'singleNews':
      router.push({ name: 'singleNews', params: { id: 1 } });
      break;
    default:
      router.push({ name: 'news' });
  }
};
</script>

<style scoped></style>
