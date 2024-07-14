<template>
  <div class="space-y-5">
    <div class="flex h-[50px] bg-white px-4 py-2">
      <p class="text-xl font-bold">Follow Us</p>
    </div>
    <div class="grid flex-1 grid-rows-3 gap-4">
      <SocialBlocks class="row-span-1" :typeShow="TypeShow.DETAIL" />
      <div class="row-span-2 flex flex-col gap-4">
        <div class="flex h-[50px] bg-white px-4 py-2">
          <p class="text-xl font-bold">Newsletter</p>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-4 bg-white px-2 md:px-0">
          <p class="text-primary text-center text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harums Harums Harums Harums
          </p>
          <div>
            <div class="flex">
              <CommonInput inputClasses="h-[40px]" placeholder="YOUR EMAIL" />
              <CommonButton fill>Sign Up</CommonButton>
            </div>
            <p class="text-primary mt-1 text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
    <img
      class="h-[120px] md:h-[250px] w-full rounded-sm"
      src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
    />
    <div class="flex h-[50px] bg-white px-4 py-2">
      <p class="text-xl font-bold">Trending</p>
    </div>
    <div class="grid grid-rows-3 gap-4">
      <CardNews
        v-for="news in hightLightNews"
        :key="news.id"
        class="h-[80px]"
        :typeCard="NewsCard.CARD_TITLE"
        :newsItem="news"
      ></CardNews>
    </div>
    <div class="space-y-3">
      <div class="flex h-[50px] bg-white px-4 py-2">
        <p class="text-xl font-bold">Tags</p>
      </div>
      <div class="flex max-w-[420px] flex-wrap gap-2">
        <CommonButton v-for="tag in newTags" :key="tag.id" buttonClass="h-[40px]">{{
          tag.name
        }}</CommonButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { newTags } from '@/mocks';
import { NewsCard, TypeShow } from '@/modules/news/enum';
import { useFetchNews } from '../service';

import CommonInput from '@/components/common/CommonInput.vue';
import CommonButton from '@/components/common/CommonButton.vue';

import SocialBlocks from '../components/SocialBlocks.vue';
import CardNews from '../components/CardNews.vue';

const { data: hightLightNews } = useFetchNews();
</script>

<style scoped></style>
