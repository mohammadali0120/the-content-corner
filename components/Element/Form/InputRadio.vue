<template>
  <div class="w-full flex justify-between items-center">
    <input
      type="radio"
      name="radio"
      v-model="input"
      :value="props.value"
      @change="onChange"
      :id="props.value"
      class="input-radio"
    />
    <label :for="props.value" class="font-bold">{{ props.label }}</label>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  label: string;
  value: string;
  filterKey: string;
  initialValue?: string;
}
interface Emit {
  (e: "onChange", payload: string): void;
}
// props
const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();
// variables
const router = useRouter();
const route = useRoute();

const input = ref<string>("");

// computed properties

// watches

// methods
const onChange = () => {
  emit("onChange", input.value);
  router.push({ path: route.path, query: { [props.filterKey]: input.value } });
};
// hooks
onMounted(() => {
  if (props.initialValue && !route.query.hasOwnProperty(props.filterKey)) {
    input.value = props.initialValue;
    emit("onChange", input.value);
  }
  if (props.filterKey in route.query) {
    input.value = route.query[props.filterKey] as string;
    emit("onChange", input.value);
  }
});
</script>

<style lang="scss" scoped>
.input-radio:checked,
.input-radio:not(:checked) {
  position: absolute;
  @apply ltr:-left-[9999px] rtl:-right-[9999px];
}

label {
  width: 100% !important;
}
.input-radio:checked + label,
.input-radio:not(:checked) + label {
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.input-radio:checked + label:before,
.input-radio:not(:checked) + label:before {
  content: "";
  position: absolute;
  top: 0;
  border-radius: 100%;
  border: 1px solid #a3a9ac;
  @apply lg:w-5 lg:h-5 w-3.5 h-3.5 ltr:right-0 rtl:left-0;
}

.input-radio:checked + label:after,
.input-radio:not(:checked) + label:after {
  content: "";
  position: absolute;
  top: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  @apply lg:w-3 lg:h-3 w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 ltr:right-1 rtl:left-1;
}

.input-radio:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.input-radio:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
