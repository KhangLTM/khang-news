<template>
  <div class="">
    <div
      v-if="typeCard === NewsCard.CARD_TITLE"
      class="flex items-center gap-2 rounded-sm bg-white"
    >
      <img
        class="size-[80px] rounded-sm"
        src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
      />
      <div>
        <p class="text-primary">
          <span class="text-red-600">Technology </span> / January 01,2045
        </p>
        <p :class="`text-${titleSize || 'medium'} font-semibold`">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>

    <div v-else-if="typeCard === NewsCard.CARD_DESC" class="bg-white">
      <img
        class="h-[150px] w-full rounded-sm"
        src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
      />
      <div class="p-5">
        <p class="text-primary">
          <span class="text-red-600">Technology </span> / January 01,2045
        </p>
        <p :class="`text-${titleSize || 'medium'} font-semibold`">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          officia voluptas nobis corrupti reprehenderit ratione, pariatur ipsum
          facere veniam, esse accusantium debiti...
        </p>
      </div>
    </div>
    <div
      v-else-if="typeCard === NewsCard.CARD_IMAGE"
      class="flex h-full items-end bg-[url('https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg')] bg-cover bg-no-repeat text-white"
    >
      <div class="p-5">
        <p>Technology / January 01,2045</p>
        <p :class="`text-${titleSize || '2xl'} font-bold`">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum NewsCard {
  CARD_IMAGE,
  CARD_DESC,
  CARD_TITLE,
}

withDefaults(
  defineProps<{
    titleSize: string;
    typeCard: NewsCard;
  }>(),
  {
    titleSize: "",
    typeCard: NewsCard.CARD_DESC,
  },
);
</script>

<style scoped></style>
