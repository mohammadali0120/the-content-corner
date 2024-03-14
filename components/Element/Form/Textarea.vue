<template>
  <div ref="textareaElementRef">
    <div
      class="w-full lg:h-44 h-36 border-2 border-gray-200 dark:border-gray-700 rounded-md relative"
    >
      <textarea
        :id="props.name"
        ref="textareaRef"
        class="w-full h-full lg:p-4 p-2 rounded-md"
        type="text"
        v-model="input"
        @input="onInput"
        @focus="onFocusInput"
      ></textarea>
      <div
        @click="onFocusInput"
        class="w-fit lg:mx-4 mx-2 text-black dark:text-white absolute transform font-bold transition-all duration-500 lg:border-b-4 border-b-2"
        :class="
          inputIsFocused
            ? 'bg-transparent lg:-top-6 -top-[18px] border-white dark:border-gray-900'
            : 'bg-white dark:bg-gray-900 top-2 border-transparent'
        "
      >
        <label :for="props.name" class="relative px-2"
          >{{ $tm(`labels.${props.label}`) }}
        </label>
      </div>
    </div>
    <div v-show="errorMessage">
      <p class="text-red-500 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

// interfaces & types & enums
interface Props {
  name: string;
  label: string;
  rules: string;
}
interface Emit {
  (e: "onInput", payload: string): void;
}
// props

const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();

// variables
const {
  value: input,
  errorMessage,
  meta,
}: any = useField(props.name, props.rules, { label: props.label });
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const textareaElementRef = ref<HTMLDivElement | null>(null);
const inputIsFocused = ref<boolean>(false);

// computed properties

// watches

// methods
const onFocusInput = () => {
  textareaRef.value?.focus();

  inputIsFocused.value = true;
};
const onUnFocusInput = () => {
  if (!input.value || input.value.length <= 0) {
    inputIsFocused.value = false;
  }
};

const onInput = () => {
  emit("onInput", input.value);
};
// hooks
onClickOutside(textareaElementRef, () => {
  onUnFocusInput();
});
</script>
<style scoped lang="scss"></style>
