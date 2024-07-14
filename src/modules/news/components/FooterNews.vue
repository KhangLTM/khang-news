<template>
  <div class="mt-[50px] w-full space-y-5">
    <div class="grid h-fit md:grid-cols-4 gap-5 bg-white px-8 py-10">
      <div class="space-y-3">
        <p class="text-3xl font-bold"><span class="text-red-600">NEWS</span>ROOM</p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque non omnis quia maiores
          commodi ad.
        </p>
        <SocialBlocks />
      </div>
      <div class="space-y-3">
        <p class="text-2xl font-bold">Categories</p>
        <div class="flex max-w-[420px] flex-wrap gap-2">
          <CommonButton v-for="cate in newsCategories" :key="cate.id" buttonClass=" h-[40px]">{{
            cate.name
          }}</CommonButton>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-2xl font-bold">Tags</p>
        <div class="flex max-w-[420px] flex-wrap gap-2">
          <CommonButton v-for="tag in newTags" :key="tag.id" buttonClass=" h-[40px]">{{
            tag.name
          }}</CommonButton>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-2xl font-bold">Quick Links</p>
        <div>
          <div v-for="link in quickLinks" :key="link" class="flex items-center gap-2">
            <SvgIcon icon="arrowRight" size="9" />
            <p class="text-primary">{{ link }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-primary text-center">
      @<span class="text-red-600">Your site name.</span>All Rights Reversed. Designed By
      <span class="text-red-600">HTML Codex</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { newsCategories, newTags } from '@/mocks';
import CommonButton from '@/components/common/CommonButton.vue';
import SocialBlocks from './SocialBlocks.vue';
import SvgIcon from '@/components/icon/SvgIcon.vue';

const quickLinks = ['About', 'Advertise', 'Privacy Policy', 'Terms & Conditions'];
</script>

<style scoped></style>
