<template>
  <button @click="handleClick" :class="computedButtonClass" :style="styleButton">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  label?: string;
  buttonClass?: string;
  fill?: boolean;
  outline?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: 'Click me',
  color: 'red-600',
  buttonClass: '',
  fill: false,
  outline: false
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};

const styleButton = computed(() => ({
  background: props.fill ? props.color : ''
}));

const computedButtonClass = computed(() => {
  const baseClasses = `${props.buttonClass} p-2 rounded hover:opacity-80`;

  const classObject = {
    [`text-white bg-${props.color}`]: props.fill,
    'border-2 border-red-600 text-red-600': props.outline,
    'border border-gray-500 text-primary': !props.fill && !props.outline
  };

  return [baseClasses, classObject];
});
</script>

<style scoped></style>
