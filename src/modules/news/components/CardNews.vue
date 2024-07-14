<template>
  <div>
    <div
      v-if="typeCard === NewsCard.CARD_TITLE"
      class="flex items-center gap-2 rounded-sm bg-white"
    >
      <img class="size-[80px] rounded-sm" :src="get(newsItem, 'img')" />
      <div>
        <p class="text-primary">
          <span class="text-red-600">{{ get(newsItem, 'category') }} </span> /
          {{ dayjs(get(newsItem, 'createdDt')).format('dddd, MMMM DD, YYYY') }}
        </p>
        <p :class="`text-${titleSize || 'medium'} font-semibold line-clamp-2`">
          {{ get(newsItem, 'title') }}
        </p>
      </div>
    </div>

    <div v-else-if="typeCard === NewsCard.CARD_DESC" class="bg-white">
      <img class="h-[200px] w-full rounded-sm" :src="get(newsItem, 'img')" />
      <div class="p-5">
        <p class="text-primary">
          <span class="text-red-600">{{ get(newsItem, 'category') }} </span> /
          {{ dayjs(get(newsItem, 'createdDt')).format('dddd, MMMM DD, YYYY') }}
        </p>
        <p :class="`text-${titleSize || 'medium'} font-semibold min-h-[48px] line-clamp-2`">
          {{ get(newsItem, 'title') }}
        </p>
        <p class="text-primary line-clamp-2">
          {{ get(newsItem, 'desc') }}
        </p>
      </div>
    </div>
    <div
      v-else-if="typeCard === NewsCard.CARD_IMAGE"
      :style="{ backgroundImage: 'url(' + get(newsItem, 'img') + ')', backgroundSize: '100% 100%' }"
      class="flex h-full items-end bg-cover bg-no-repeat text-white"
    >
      <div class="p-5">
        <p>
          {{ get(newsItem, 'category') }} /
          {{ dayjs(get(newsItem, 'createdDt')).format('dddd, MMMM DD, YYYY') }}
        </p>
        <p :class="`text-${titleSize || '2xl'} font-bold line-clamp-2	`">
          {{ get(newsItem, 'title') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import get from 'lodash/get';
import dayjs from 'dayjs';

enum NewsCard {
  CARD_IMAGE,
  CARD_DESC,
  CARD_TITLE
}
interface NewsItem {
  title: string;
  desc: string;
  content: string;
  category: string;
  img: string;
}

withDefaults(
  defineProps<{
    newsItem: NewsItem;
    titleSize?: string;
    typeCard: NewsCard;
  }>(),
  {
    titleSize: '',
    typeCard: NewsCard.CARD_DESC
  }
);
</script>

<style scoped></style>
