<template>
    <component :is="layout">
      <RouterView />
    </component>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import NewsLayout from '@/layouts/NewsLayout.vue'
  
  const route = useRoute()
  
  interface LayoutMap {
    [key: string]: typeof DefaultLayout
  }
  
  const layout = computed(() => {
    const mapLayout: LayoutMap = {
      news: NewsLayout
    }
    return mapLayout[route.meta.layout as string] || DefaultLayout
  })
  </script>
  
  <style scoped></style>
  