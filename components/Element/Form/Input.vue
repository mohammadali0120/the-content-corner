<template>
  <input
    class="w-full h-full border-2 p-2 rounded-md"
    placeholder="Enter something"
    type="text"
    v-model="input"
    @input="onInput"
  />
  <div v-show="errorMessage">
    <p class="text-red-500 text-sm">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";

interface Props {
  name: string;
  label: string;
  rules: string;
}

const props = defineProps<Props>();

const {
  value: input,
  errorMessage,
  meta,
} = useField(props.name, props.rules, { label: props.label });

const onInput = () => {
  console.log("input", input.value);
};
</script>
<style scoped lang="scss"></style>
