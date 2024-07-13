<template>
    <div class="space-y-4">
      <div v-for="comment in comments" :key="comment.id" class="flex gap-2">
        <img class="size-[50px] rounded-sm" :src="comment.userAvatar" alt="User Avatar" />
  
        <div class="flex flex-col gap-2">
          <p class="text-primary">
            <span class="font-semibold text-red-600">{{ comment.userName }}</span>
            {{ comment.date }}
          </p>
  
          <p class="text-primary">
            {{ comment.text }}
          </p>
  
          <CommonButton class="w-[50px]">Reply</CommonButton>
          <div v-if="comment.replies && comment.replies.length > 0" class="mt-4 space-y-2">
            <ListComments :comments="comment.replies" :level="(level as number) + 1" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import CommonButton from '@/components/common/CommonButton.vue' // Adjust path as per your project structure
  
  // Define types for comments and replies
  interface Comment {
    id: number
    userName: string
    userAvatar: string
    date: string
    text: string
    replies?: Comment[]
  }
  
  // Define props using defineProps
  defineProps<{
    comments: Comment[]
    level?: number
  }>()
  </script>
  <style scoped>
  /* Add scoped styles here */
  </style>
  