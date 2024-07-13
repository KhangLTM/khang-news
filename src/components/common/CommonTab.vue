<template>
  <div :class="`${containerClass} h-full`">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['tab', tabClass(tab)]"
      @click="selectTab(tab.value)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Direction = "horizontal" | "vertical";

interface Tab {
  value: string | number;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  modelValue: string | number;
  gap: number;
  direction: Direction;
}

const props = withDefaults(defineProps<TabsProps>(), {
  tabs: () => [],
  modelValue: "",
  gap: 0,
  direction: "horizontal" as Direction,
});

const emit = defineEmits(["update:modelValue", "changeTab"]);

const containerClass = computed(() => {
  return props.direction === "horizontal" ? "flex flex-row" : "flex flex-col";
});

const tabClass = (tab: Tab) => {
  return [
    "cursor-pointer px-4 py-2 transition-all duration-300",
    tab.value === props.modelValue
      ? "bg-red-600 text-white"
      : "bg-white text-black",
    props.direction === "horizontal" ? `mr-${props.gap}` : `mb-${props.gap}`,
  ];
};

const selectTab = (value: string | number) => {
  emit("update:modelValue", value);
  emit("changeTab", value);
};
</script>

<style scoped></style>
