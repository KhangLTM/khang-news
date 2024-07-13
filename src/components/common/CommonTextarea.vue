<template>
  <textarea
    v-model="inputValue"
    :rows="rows"
    :cols="cols"
    :placeholder="placeholder"
    :class="computedClasses"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
  ></textarea>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, defineEmits } from "vue";

interface BaseTextareaProps {
  modelValue: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  disabled?: boolean;
}

const props = defineProps<BaseTextareaProps>();

const inputValue = ref(props.modelValue);

const emit = defineEmits(["update:modelValue", "blur", "focus"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  inputValue.value = target.value;
  emit("update:modelValue", inputValue.value);
};

const handleBlur = () => {
  emit("blur");
};

const handleFocus = () => {
  emit("focus");
};

const computedClasses = computed(() => {
  return [
    // Tailwind CSS classes
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:border-blue-500",
    "focus:ring-blue-500",
    "focus:outline-none",
    "p-2",
    "resize-none",
    props.disabled ? "bg-gray-100 cursor-not-allowed" : "",
  ];
});
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
