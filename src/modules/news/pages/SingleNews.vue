<template>
  <div class="mt-8 grid grid-cols-3 gap-5">
    <div class="col-span-2 space-y-5">
      <CommonBreadcrumb :breadcrumbs="breadcrumbs" />
      <div class="rounded-sm bg-white shadow-sm">
        <img
          class="h-[500px] w-full rounded-sm"
          src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
        />
        <div class="space-y-5 p-7">
          <p class="text-primary">
            <span class="text-red-600">Technology </span> / January 01,2045
          </p>
          <h1 class="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            esse incidunt laudantium dicta? Autem ullam et perspiciatis ipsum
            nostrum maxime alias, incidunt inventore vero. Cumque officia dolor
            sapiente. Commodi, dignissimos.
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
    <RightSection class="col-span-1"></RightSection>
  </div>
</template>

<script setup lang="ts">
import ListComments from "../components/ListComments.vue";
import FormComment from "../components/FormComment.vue";
import RightSection from "../components/RightSection.vue";

import CommonBreadcrumb from "@/components/common/CommonBreadcrumb.vue";

import { comments } from "@/mocks";

const breadcrumbs = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/category" },
  { label: "Technology", path: "/category/1" },
  { label: "New Title", path: "/single-news/1" },
];
</script>

<style scoped></style>
