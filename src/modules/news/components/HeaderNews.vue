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
      <div class="hidden md:block text-primary text-base pr-2 md:pr-8">
        {{ dayjs().format('dddd, MMMM DD, YYYY') }}
      </div>
    </div>
    <div class="flex items-center justify-between px-2 md:px-8 md:pb-3 mt-2">
      <p class="hidden md:block font-bold text-3xl"><span class="text-red-600">NEWS</span>ROOM</p>
      <img src="@/assets/images/ads.png" class="h-[70px] md:w-[700px]" />
    </div>
    <nav class="hidden md:flex h-11 items-center justify-between bg-white pl-4 pr-8 shadow-sm">
      <CommonTab :modelValue="curMenuItem" :tabs="menuItems" @update:modelValue="handleClickMenu" />
      <div class="flex">
        <CommonInput v-model="search" />
        <div class="size-[30px] bg-gray-200 grid place-items-center">
          <SvgIcon icon="search" size="20px" />
        </div>
      </div>
    </nav>
    <div class="flex md:hidden w-full bg-white px-2 py-3 mt-2 justify-between">
      <p class="font-bold text-3xl"><span class="text-red-600">NEWS</span>ROOM</p>
      <MobileMenu
        v-model:isOpen="isMenuOpen"
        :activeMenu="curMenuItem as string"
        navClass="p-1 border relative"
        menuClass="absolute bg-white top-[41px] w-screen right-[-10px] z-10"
        :menuItems="menuItems"
        @changeMenu="handleClickMenu"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import dayjs from 'dayjs';
import SvgIcon from '@/components/icon/SvgIcon.vue';
import CommonTab from '@/components/common/CommonTab.vue';
import CommonInput from '@/components/common/CommonInput.vue';
import CommonSlider from '@/components/common/CommonSlider.vue';
import MobileMenu from '../components/MobileMenu.vue';
import { useDevice } from '@/composables/useDevice';

const menuItems = [
  { label: 'Home', value: 'news' },
  { label: 'Categories', value: 'categoryNews' },
  { label: 'Single News', value: 'singleNews' }
];

const router = useRouter();
const route = useRoute();

const { isMobile } = useDevice();

const isMenuOpen = ref(false);
const slider = ref(null);

const search = ref('');

const curMenuItem = computed<string>(() => (route.name as string) || 'news');

const handleClickMenu = (menuItem: string) => {
  switch (menuItem) {
    case 'categoryNews':
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
