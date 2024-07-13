<template>
  <nav aria-label="Pagination">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          &lt;
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button
          @click="goToPage(page)"
          :class="[
            'border px-3 py-2 leading-tight',
            page === currentPage
              ? 'border-red-600 bg-red-600 text-white'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700',
          ]"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          &gt;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from "vue";

const props = withDefaults(
  defineProps<{
    currentPage: number;
    totalPages: number;
  }>(),
  {
    currentPage: 1,
    totalPages: 1,
  },
);

const emit = defineEmits(["update:currentPage"]);

const pages = computed(() => {
  let pagesArray = [];
  for (let i = 1; i <= props.totalPages; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

const prevPage = () => {
  if (props.currentPage > 1) {
    emit("update:currentPage", props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("update:currentPage", props.currentPage + 1);
  }
};

const goToPage = (page: number) => {
  emit("update:currentPage", page);
};
</script>
