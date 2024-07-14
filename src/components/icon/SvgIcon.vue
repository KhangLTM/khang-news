<template>
  <span :class="computedClasses" :style="computedStyles" @click="handleClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      :fill="fill"
      v-html="iconComp"
      v-bind="svgProps"
    ></svg>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import listIcons from './icons';

interface IconProps {
  icon: string;
  size: string | number;
  fill?: string;
  class?: string | object;
  svgProps?: Record<string, unknown>;
}

const props = defineProps<IconProps>();

const emit = defineEmits(['click']);

const computedClasses = computed(() => {
  return [props.class];
});

const computedStyles = computed(() => {
  const styles: Record<string, string> = {
    width: `${props.size}px`,
    height: `${props.size}px`
  };

  return styles;
});

const iconComp = computed(() => (listIcons as Record<string, string>)[props.icon]);

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
