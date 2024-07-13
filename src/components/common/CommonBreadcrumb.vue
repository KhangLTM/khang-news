<template>
  <nav aria-label="breadcrumb">
    <ol class="flex space-x-1">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :class="[
          'text-base',
          isActive(crumb) ? 'text-primary' : 'text-red-600 hover:opacity-70',
        ]"
      >
        <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.label }}
        </RouterLink>
        <span v-else>{{ crumb.label }}</span>
        <span v-if="index < breadcrumbs.length - 1" class="mx-1 text-gray-500"
          >/</span
        >
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

interface Breadcrumb {
  label: string;
  path: string;
}

defineProps<{
  breadcrumbs: Breadcrumb[];
}>();

const route = useRoute();

const isActive = (crumb: Breadcrumb) => {
  return route.path === crumb.path;
};
</script>
