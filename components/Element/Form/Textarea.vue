<template>
  <div ref="textareaElementRef">
    <div
      class="w-full lg:h-44 h-36 border-2 border-gray-200 dark:border-gray-700 rounded-md relative"
    >
      <textarea
        :id="props.name"
        ref="inputRef"
        class="w-full h-full p-2 rounded-md"
        type="text"
        v-model="input"
        @input="onInput"
        @focus="onFocusInput"
      ></textarea>
      <div
        @click="onFocusInput"
        class="w-fit lg:px-4 px-2 text-black dark:text-white absolute font-bold transition-all duration-500"
        :class="
          inputIsFocused
            ? 'bg-transparent -top-5'
            : 'bg-white dark:bg-gray-900 top-2'
        "
      >
        <label :for="props.name" class="relative px-2"
          >{{ $tm(`labels.${props.label}`) }}

          <span
            v-show="inputIsFocused"
            class="block w-full h-2 absolute"
            :class="[
              locale === 'en' ? ' -bottom-2' : '-bottom-1',
              inputIsFocused ? 'bg-white dark:bg-gray-900' : 'bg-transparent',
            ]"
          ></span>
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
const { locale } = useI18n();
const {
  value: input,
  errorMessage,
  meta,
}: any = useField(props.name, props.rules, { label: props.label });
const inputRef = ref<HTMLTextAreaElement | null>(null);
const textareaElementRef = ref<HTMLDivElement | null>(null);
const inputIsFocused = ref<boolean>(false);

// computed properties

// watches

// methods
const onFocusInput = () => {
  inputRef.value?.focus();

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
