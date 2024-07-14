<template>
  <div class="mt-8 space-y-5">
    <CommonBreadcrumb :breadcrumbs="breadcrumbs" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="md:col-span-2 flex flex-col gap-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Technology</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="news in mockHightLightNews?.slice(0, 2)"
            :key="news.id"
            :typeCard="NewsCard.CARD_DESC"
            :newsItem="news"
          ></CardNews>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="news in mockHightLightNews"
            :key="news.id"
            class="h-[80px]"
            :typeCard="NewsCard.CARD_TITLE"
            :newsItem="news"
          ></CardNews>
        </div>
        <img src="@/assets/images/ads.png" class="h-[70px]" />
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Latest</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="news in hightLightNews?.slice(0, 2)"
            :key="news.id"
            :typeCard="NewsCard.CARD_DESC"
            :newsItem="news"
          ></CardNews>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews
            v-for="news in hightLightNews"
            :key="news.id"
            class="h-[80px]"
            :typeCard="NewsCard.CARD_TITLE"
            :newsItem="news"
          ></CardNews>
        </div>
        <div class="flex justify-center">
          <CommonPagination v-model:currentPage="page" :totalPages="2" />
        </div>
      </div>
      <RightSection class="md:col-span-1"> </RightSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NewsCard } from '@/modules/news/enum';
import { mockHightLightNews } from '@/mocks';
import { useFetchNews } from '../service';
import CardNews from '../components/CardNews.vue';
import RightSection from '../components/RightSection.vue';
import CommonBreadcrumb from '@/components/common/CommonBreadcrumb.vue';
import CommonPagination from '@/components/common/CommonPagination.vue';

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/' },
  { label: 'Technology', path: '/category/1' }
];

const page = ref(1);

const { data: hightLightNews } = useFetchNews(page);
</script>

<style scoped></style>
