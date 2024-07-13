<template>
    <div>
      <header class="flex items-center justify-between px-8 pb-3 text-3xl">
        <p class="font-bold"><span class="text-red-600">NEWS</span>ROOM</p>
        <img src="@/assets/images/ads.png" class="h-[70px] w-[700px]" />
      </header>
      <nav class="flex h-11 items-center justify-between bg-white pl-4 pr-8 shadow-sm">
        <CommonTab v-model="currentTab" :tabs="tabs" @update:modelValue="handleChangeTab" />
        <CommonInput v-model="search" />
      </nav>
    </div>
  </template>
  n
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import CommonTab from '@/components/common/CommonTab.vue'
  import CommonInput from '@/components/common/CommonInput.vue'
  
  const tabs = [
    { label: 'Home', value: 'home' },
    { label: 'Categories', value: 'categories' },
    { label: 'Single News', value: 'singleNews' }
  ]
  
  const router = useRouter()
  const currentTab = ref('home')
  const search = ref('')
  
  const handleChangeTab = (tab: string | number) => {
    switch (tab) {
      case 'categories':
        router.push({ name: 'categoryNews', params: { id: 1 } })
        break
      case 'singleNews':
        router.push({ name: 'singleNews', params: { id: 1 } })
        break
      default:
        router.push({ name: 'news' })
    }
  }
  </script>
  
  <style scoped></style>
  