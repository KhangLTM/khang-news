<template>
  <div class="mt-8 min-h-screen space-y-5">
    <CommonSlider :slides="hightLightNews" :itemsToShow="isMobile ? 1 : 3">
      <template #slideItem="{ slide }">
        <div class="flex md:w-[97%] items-center gap-2 rounded-sm bg-white">
          <img class="size-[60px] rounded-sm" :src="slide.img" />
          <p class="text-primary">{{ get(slide, 'title') }}</p>
        </div>
      </template>
    </CommonSlider>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <CommonSlider
        :slides="hightLightNews"
        :itemsToShow="1"
        class="news-image-slider md:col-span-2 h-[450px] md:h-full"
      >
        <template #slideItem="{ slide }">
          <CardNews
            class="h-full w-full bg-white"
            :typeCard="NewsCard.CARD_IMAGE"
            :newsItem="slide"
          ></CardNews>
        </template>
      </CommonSlider>

      <div class="md:col-span-1 space-y-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Categories</p>
          <p class="text-primary">View all</p>
        </div>
        <div class="grid grid-rows-3 gap-5">
          <div
            v-for="category in newsCategories"
            :key="category.id"
            :style="{
              backgroundImage: 'url(' + category.img + ')'
            }"
            :class="`flex h-[80px] items-center justify-center bg-cover bg-no-repeat text-white`"
          >
            <p class="text-2xl font-bold">{{ category.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
        <p class="text-xl font-bold">Featured</p>
        <p class="text-primary">View all</p>
      </div>

      <div class="grid grid-cols-1 gap-5 h-fit">
        <CommonSlider
          class="news-image-slider h-[300px] md:h-[400px]"
          :slides="hightLightNews"
          :itemsToShow="isMobile ? 1 : 4"
        >
          <template #slideItem="{ slide }">
            <CardNews class="h-full" :typeCard="NewsCard.CARD_IMAGE" :newsItem="slide"></CardNews>
          </template>
        </CommonSlider>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div v-for="(category, i) in newsCategories" :key="category.id" class="space-y-4">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">{{ get(category, 'name') }}</p>
          <div class="flex gap-2">
            <div class="slider-btn-gray rotate-[180deg]" @click="(slider[i] as any).prev()">
              <SvgIcon icon="arrowRight" :size="isMobile ? 9 : 11" />
            </div>
            <div class="slider-btn-gray">
              <SvgIcon
                icon="arrowRight"
                :size="isMobile ? 9 : 11"
                @click="(slider[i] as any).next()"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-5">
          <CommonSlider
            class="news-image-slider"
            :ref="
              (el) => {
                (slider as any)[i] = el;
              }
            "
            :slides="hightLightNews"
            :itemsToShow="isMobile ? 1 : 2"
            :showNavigation="false"
          >
            <template #slideItem="{ slide }">
              <CardNews :typeCard="NewsCard.CARD_DESC" :newsItem="slide"></CardNews>
            </template>
          </CommonSlider>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="md:col-span-2 flex flex-col gap-5">
        <div class="flex h-[50px] items-center justify-between bg-white px-4 py-2">
          <p class="text-xl font-bold">Popular</p>
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
      </div>
      <RightSection class="md:col-span-1 flex flex-col"> </RightSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import get from 'lodash/get';
import { NewsCard } from '@/modules/news/enum';
import CardNews from '../components/CardNews.vue';
import RightSection from '../components/RightSection.vue';
import CommonSlider from '@/components/common/CommonSlider.vue';
import SvgIcon from '@/components/icon/SvgIcon.vue';
import { newsCategories } from '@/mocks';
import { useFetchNews } from '../service';
import { useDevice } from '@/composables/useDevice';

const { isMobile } = useDevice();

const slider = ref([]);
const page = ref(1);

const { data: hightLightNews } = useFetchNews(page);
</script>

<style scoped></style>
