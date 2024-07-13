<template>
  <div>
    <p class="text-primary text-base">Name *</p>
    <CommonInput v-model="formData.name" class="h-[40px] w-full" />
    <p class="text-primary text-base">Email *</p>
    <CommonInput v-model="formData.email" class="h-[40px] w-full" />
    <p class="text-primary text-base">Website *</p>
    <CommonInput v-model="formData.website" class="h-[40px] w-full" />
    <p class="text-primary text-base">Message *</p>
    <CommonTextarea v-model="formData.message" class="w-full" :rows="4" />
    <CommonButton fill @click="submitForm">Leave a comment</CommonButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CommonInput from "@/components/common/CommonInput.vue";
import CommonTextarea from "@/components/common/CommonTextarea.vue";
import CommonButton from "@/components/common/CommonButton.vue";
const formData = ref({
  name: "",
  email: "",
  website: "",
  message: "",
});

const submitForm = () => {
  console.log("Form data:", formData.value);
};
</script>

<style scoped></style>
