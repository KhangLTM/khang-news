<template>
  <div v-if="typeShow === TypeShow.SIMPLE" class="space-x-2">
    <CommonButton v-for="social in socials" :key="social">
      <SvgIcon :icon="social" size="16" />
    </CommonButton>
  </div>
  <div v-else-if="typeShow === TypeShow.DETAIL" class="grid grid-cols-2 gap-2">
    <CommonButton
      v-for="social in socials"
      :key="social"
      :color="renderColor(social)"
      fill
    >
      <div class="flex items-center gap-2">
        <SvgIcon :icon="social" fill="white" size="16" />
        <p class="text-[12px]">{{ `${socialCounts[social]} followers` }}</p>
      </div>
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
import { socialCounts } from "@/mocks";
import SvgIcon from "@/components/icon/SvgIcon.vue";
import CommonButton from "@/components/common/CommonButton.vue";

const socials: string[] = [
  "facebook",
  "twitter",
  "linkedin",
  "instagram",
  "youtube",
  "vimeo",
];

enum TypeShow {
  SIMPLE,
  DETAIL,
}

withDefaults(
  defineProps<{
    typeShow: TypeShow;
  }>(),
  {
    typeShow: TypeShow.SIMPLE,
  },
);

const renderColor = (social: string): string => {
  const mapColor: Record<string, string> = {
    facebook: "#1877f2",
    twitter: "#00AEF0",
    linkedin: "#0a66c2",
    instagram: "#c32aa3",
    youtube: "#ff0000",
    vimeo: "#1ab7ea",
  };
  return mapColor[social] || "#000000";
};
</script>

<style scoped></style>
