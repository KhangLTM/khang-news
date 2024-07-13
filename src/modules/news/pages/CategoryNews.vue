<template>
  <div class="mt-8 space-y-5">
    <CommonBreadcrumb :breadcrumbs="breadcrumbs" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="col-span-2 flex flex-col gap-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Entertainment</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="hidden md:grid grid-cols-1 md:grid-cols-2 flex-1 gap-5">
          <CardNews v-for="i in 2" :key="i" :typeCard="NewsCard.CARD_DESC"></CardNews>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="i in 4"
            :key="i"
            class="h-[80px]"
            :typeCard="NewsCard.CARD_TITLE"
          ></CardNews>
        </div>
        <img src="@/assets/images/ads.png" class="h-[70px]" />
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Latest</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="hidden md:grid grid-cols-1 md:grid-cols-2 flex-1 gap-5">
          <CardNews v-for="i in 2" :key="i" :typeCard="NewsCard.CARD_DESC"></CardNews>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="i in isMobile ? 9 : 4"
            :key="i"
            :typeCard="NewsCard.CARD_TITLE"
          ></CardNews>
        </div>
        <CommonPagination class="place-self-center"></CommonPagination>
      </div>
      <RightSection class="md:col-span-1 flex flex-col"> </RightSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NewsCard } from '@/modules/news/enum';
import CardNews from '../components/CardNews.vue';
import RightSection from '../components/RightSection.vue';
import CommonBreadcrumb from '@/components/common/CommonBreadcrumb.vue';
import CommonPagination from '@/components/common/CommonPagination.vue';
import { useDevice } from '@/composables/useDevice';

const { isMobile } = useDevice();

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/category' },
  { label: 'Technology', path: '/category/1' }
];
</script>

<style scoped></style>
