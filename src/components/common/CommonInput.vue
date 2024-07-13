<template>
  <input
    :placeholder="placeholder"
    v-model="inputValue"
    @input="updateValue"
    :class="inputClass"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { defineProps, defineEmits, withDefaults } from "vue";

interface InputProps {
  placeholder?: string;
  modelValue: string;
  inputClasses?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: "",
  modelValue: "",
  inputClass: "",
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

const updateValue = () => {
  emit("update:modelValue", inputValue.value);
};

const inputClass = computed(
  () => `p-2 border rounded h-[30px] ${props.inputClasses || ""}`,
);
</script>

<style scoped></style>
