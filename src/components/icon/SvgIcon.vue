<template>
  <span
    :class="computedClasses"
    :style="computedStyles"
    @click="handleClick"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      :viewBox="viewBox"
      :fill="fill"
      v-html="iconComp"
      v-bind="svgProps"
    ></svg>
  </span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import listIcons from "./icons"; // Assuming `listIcons` contains SVG data for various icons

// Define props interface
interface IconProps {
  icon: string;
  size: string;
  fill: string;
  fillHover?: string;
  class?: string | object; // Allow both string and object types
  svgProps?: Record<string, unknown>; // Ensure svgProps is compatible with any props
  customViewBox?: string;
  containerStyles?: Record<string, string>; // Only accepts an object
}

// Define props using defineProps
const props = defineProps<IconProps>();

const emit = defineEmits(["click"]);

const computedClasses = computed(() => {
  return [props.class];
});

const computedStyles = computed(() => {
  const styles: Record<string, string> = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    ...props.containerStyles, // Merge containerStyles into styles
  };

  return styles;
});

const iconComp = computed(
  () => (listIcons as Record<string, string>)[props.icon],
);

const viewBox = computed(
  () => props.customViewBox || `0 0 ${props.size} ${props.size}`,
);

const handleClick = () => {
  emit("click");
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
