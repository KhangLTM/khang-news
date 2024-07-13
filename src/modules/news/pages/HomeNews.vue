<template>
  <div class="mt-8 min-h-screen space-y-5">
    <CommonSlider :slides="['1', '2', '3', '4', '5']" :itemsToShow="isMobile ? 1 : 3">
      <template #slideItem>
        <div class="flex w-[90%] items-center gap-2 rounded-sm bg-white">
          <img
            class="size-[60px] rounded-sm"
            src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
          />
          <p class="text-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        </div>
      </template>
    </CommonSlider>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <CommonSlider
        :slides="['1', '2', '3', '4', '5']"
        :itemsToShow="1"
        class="news-image-slider md:col-span-2"
      >
        <template #slideItem>
          <CardNews class="h-full w-full bg-white" :typeCard="NewsCard.CARD_IMAGE"></CardNews>
        </template>
      </CommonSlider>

      <div class="md:col-span-1 space-y-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Categories</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="grid grid-rows-3 gap-5">
          <div
            v-for="i in 4"
            :key="i"
            class="flex h-[80px] items-center justify-center bg-[url('https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg')] bg-cover bg-no-repeat text-white"
          >
            <p class="text-2xl font-bold">Technology</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
        <p class="text-xl font-bold">Featured</p>
        <p class="text-primary">View all</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
        <CardNews v-for="i in 4" :key="i" :typeCard="NewsCard.CARD_DESC"></CardNews>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div v-for="i in 4" :key="i" class="space-y-4">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Featured</p>
          <p class="text-primary">View all</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews v-for="i in 2" :key="i" :typeCard="NewsCard.CARD_DESC"></CardNews>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="col-span-2 flex flex-col gap-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Entertainment</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5">
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
        <div class="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5">
          <CardNews v-for="i in 2" :key="i" :typeCard="NewsCard.CARD_DESC"></CardNews>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardNews v-for="i in 4" :key="i" :typeCard="NewsCard.CARD_TITLE"></CardNews>
        </div>
      </div>
      <RightSection class="md:col-span-1 flex flex-col"> </RightSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NewsCard } from '@/modules/news/enum';
import CardNews from '../components/CardNews.vue';
import RightSection from '../components/RightSection.vue';
import CommonSlider from '@/components/common/CommonSlider.vue';

import { useDevice } from '@/composables/useDevice';

const { isMobile } = useDevice();
</script>

<style scoped></style>
