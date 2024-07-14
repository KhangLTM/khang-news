<template>
  <Carousel ref="carousel" :itemsToShow="itemsToShow" :wrapAround="wrapAround">
    <template v-for="slide in slides" :key="slide.id">
      <Slide :slide="slide">
        <slot name="slideItem"> </slot>
      </Slide>
    </template>

    <template #addons>
      <slot v-if="showNavigation" name="addons">
        <Navigation>
          <template #next>
            <div class="slider-btn">
              <SvgIcon icon="arrowRightWhite" :size="isMobile ? 9 : 11" />
            </div>
          </template>
          <template #prev>
            <div class="slider-btn rotate-[180deg]">
              <SvgIcon icon="arrowRightWhite" :size="isMobile ? 9 : 11" />
            </div>
          </template>
        </Navigation>
      </slot>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import SvgIcon from '@/components/icon/SvgIcon.vue';
import { useDevice } from '@/composables/useDevice';

import 'vue3-carousel/dist/carousel.css';

withDefaults(
  defineProps<{
    itemsToShow: number;
    wrapAround?: boolean;
    showNavigation?: boolean;
    slides: any;
  }>(),
  {
    wrapAround: false,
    showNavigation: true
  }
);
const { isMobile } = useDevice();
const carousel = ref(null);

const next = () => (carousel.value as any).next();
const prev = () => (carousel.value as any).prev();

defineExpose({
  next,
  prev
});
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
