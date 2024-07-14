<template>
  <header>
    <div class="h-[40px] md:h-[50px] flex justify-between items-center bg-white">
      <div class="flex pl-2 md:pl-8 items-center gap-3">
        <p class="h-full bg-red-600 text-white p-3 text-sm md:text-base">Trending</p>
        <div class="flex gap-2">
          <div class="slider-btn-gray rotate-[180deg]" @click="(slider as any).prev()">
            <SvgIcon icon="arrowRight" :size="isMobile ? 9 : 11" />
          </div>
          <div class="slider-btn-gray">
            <SvgIcon icon="arrowRight" :size="isMobile ? 9 : 11" @click="(slider as any).next()" />
          </div>
        </div>
        <div class="w-[250px] md:w-[300px]">
          <CommonSlider
            ref="slider"
            :slides="['1', '2', '3']"
            :itemsToShow="1"
            :showNavigation="false"
          >
            <template #slideItem>
              <p class="text-primary text-[11px] md:text-sm">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </template>
          </CommonSlider>
        </div>
      </div>
      <div class="hidden md:block text-primary text-base pr-2 md:pr-8">Monday, January 01,2045</div>
    </div>
    <div class="flex items-center justify-between px-2 md:px-8 md:pb-3 mt-2 md:mt-0">
      <p class="hidden md:block font-bold text-3xl"><span class="text-red-600">NEWS</span>ROOM</p>
      <img src="@/assets/images/ads.png" class="h-[70px] md:w-[700px]" />
    </div>
    <nav class="hidden md:flex h-11 items-center justify-between bg-white pl-4 pr-8 shadow-sm">
      <CommonTab :modelValue="curMenuItem" :tabs="menuItems" @update:modelValue="handleClickMenu" />
      <CommonInput v-model="search" />
    </nav>
    <div class="flex md:hidden w-full bg-white px-2 py-3 mt-2 justify-between">
      <p class="font-bold text-3xl"><span class="text-red-600">NEWS</span>ROOM</p>
      <MobileMenu
        v-model:isOpen="isMenuOpen"
        :activeMenu="curMenuItem"
        navClass="p-1 border relative"
        menuClass="absolute bg-white top-[41px] w-screen right-[-10px] z-10"
        :menuItems="menuItems"
        @changeMenu="handleClickMenu"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SvgIcon from '@/components/icon/SvgIcon.vue';
import CommonTab from '@/components/common/CommonTab.vue';
import CommonInput from '@/components/common/CommonInput.vue';
import CommonSlider from '@/components/common/CommonSlider.vue';
import MobileMenu from '../components/MobileMenu.vue';
import { useDevice } from '@/composables/useDevice';

const { isMobile } = useDevice();

const isMenuOpen = ref(false);
const slider = ref(null);
const menuItems = [
  { label: 'Home', value: 'home' },
  { label: 'Categories', value: 'categories' },
  { label: 'Single News', value: 'singleNews' }
];

const router = useRouter();
const curMenuItem = ref('home');
const search = ref('');

const handleClickMenu = (menuItem: string) => {
  curMenuItem.value = menuItem;
  switch (menuItem) {
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
