<template>
  <Carousel :itemsToShow="itemsToShow" :wrapAround="wrapAround">
    <template v-for="slide in slides" :key="slide.id">
      <Slide :slide="slide">
        <slot name="slideItem"> </slot>
      </Slide>
    </template>

    <template #addons>
      <!-- Slot for addons (e.g., Navigation component) -->
      <slot name="addons">
        <Navigation />
      </slot>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

defineProps<{
  itemsToShow: number
  wrapAround?: boolean
  slides: any
}>()
</script>
<style lang="scss">
.news-image-slider {
  .carousel__viewport {
    height: 100%;
    .carousel__track {
      height: 100%;
    }
  }
}
</style>
