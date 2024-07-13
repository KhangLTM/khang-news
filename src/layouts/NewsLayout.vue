<template>
  <div class="py-5">
    <HeaderNews />
    <div class="container mx-auto px-3 md:px-0">
      <RouterView></RouterView>
    </div>
    <FooterNews />
  </div>
</template>

<script setup lang="ts">
import HeaderNews from '@/modules/news/components/HeaderNews.vue';
import FooterNews from '@/modules/news/components/FooterNews.vue';
</script>

<style scoped></style>
