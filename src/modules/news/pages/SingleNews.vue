<template>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="md:col-span-2 space-y-5">
      <CommonBreadcrumb :breadcrumbs="breadcrumbs" />
      <div class="rounded-sm bg-white shadow-sm">
        <img
          class="h-[300px] md:h-[500px] w-full rounded-sm"
          src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
        />
        <div class="space-y-5 p-7">
          <p class="text-primary">
            <span class="text-red-600">Technology </span> / January 01,2045
          </p>
          <h1 class="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse incidunt
            laudantium dicta? Autem ullam et perspiciatis ipsum nostrum maxime alias, incidunt
            inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse incidunt
            laudantium dicta? Autem ullam et perspiciatis ipsum nostrum maxime alias, incidunt
            inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos. inventore vero.
            Cumque officia dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia
            dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente.
            Commodi, dignissimos
          </p>
          <h2 class="font-bold text-xl">Inventore vero. Cumque</h2>
          <img
            class="w-[150px] h-[100px] md:h-[170px] md:w-[320px] rounded-sm float-left pr-[20px]"
            src="https://picsum.photos/500/509"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse incidunt
            laudantium dicta? Autem ullam et perspiciatis ipsum nostrum maxime alias, incidunt
            inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Doloremque esse incidunt laudantium dicta? Autem
            ullam et perspiciatis ipsum nostrum maxime alias, incidunt inventore vero. Cumque
            officia dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor
            sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi,
            dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos.fficia
            dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente.
            Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi,
            dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos
          </p>
          <h2 class="font-bold text-xl">Dignissimos. inventore vero</h2>
          <img
            class="w-[150px] h-[100px] md:h-[170px] md:w-[320px] rounded-sm float-right"
            src="https://picsum.photos/500/510"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse incidunt
            laudantium dicta? Autem ullam et perspiciatis ipsum nostrum maxime alias, incidunt
            inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Doloremque esse incidunt laudantium dicta? Autem
            ullam et perspiciatis ipsum nostrum maxime alias, incidunt inventore vero. Cumque
            officia dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor
            sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi,
            dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos.fficia
            dolor sapiente. Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente.
            Commodi, dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi,
            dignissimos. inventore vero. Cumque officia dolor sapiente. Commodi, dignissimos
          </p>
        </div>
      </div>
      <div class="rounded-sm bg-white p-7 shadow-sm">
        <p class="text-2xl font-bold">3 Comments</p>
        <ListComments :comments="comments" class="mt-8" />
      </div>
      <div class="rounded-sm bg-white p-7 shadow-sm">
        <p class="text-2xl font-bold">Leave a comment</p>
        <FormComment class="mt-8 space-y-4" />
      </div>
    </div>
    <RightSection class="md:col-span-1 md:mt-[42px]"></RightSection>
  </div>
</template>

<script setup lang="ts">
import ListComments from '../components/ListComments.vue';
import FormComment from '../components/FormComment.vue';
import RightSection from '../components/RightSection.vue';

import CommonBreadcrumb from '@/components/common/CommonBreadcrumb.vue';

import { comments } from '@/mocks';

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/' },
  { label: 'Technology', path: '/category/1' },
  { label: 'Lorem ipsum dolor sit', path: '/single-news/1' }
];
</script>

<style scoped></style>
