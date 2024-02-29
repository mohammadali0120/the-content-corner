<template>
  <div
    class="w-full rounded-md bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-gray-900 lg:p-4 p-2"
  >
    <div class="flex items-center lg:mb-4 mb-2">
      <div class="lg:w-10 lg:h-10 w-8 h-8 p-1">
        <ElementIcon :icon="{ prefix: 'fa-solid', value: 'fa-filter' }" />
      </div>
      <div class="lg:ms-4 ms-2">
        <h2
          class="font-bold lg:text-2xl text-base text-black dark:text-gray-300"
        >
          {{ props.title }}
        </h2>
      </div>
    </div>
    <ul>
      <li v-for="(filter, index) in props.filtersI18nItems" :key="index">
        <div
          :class="
            index !== props.filtersI18nItems.length - 1 ? 'lg:mb-2 mb-1.5' : ''
          "
        >
          <ElementFormInputRadio
            :label="filter.text"
            :value="filter.value"
            :initial-value="props.initialValue"
            :filter-key="props.filterKey"
            @on-change="onSelectFilter($event)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Filter } from "~/utilities/types";
// interfaces & types & enums

interface Props {
  title: string;
  filtersI18nItems: Filter[];
  filterKey: string;
  initialValue: string;
}
interface Emit {
  (e: "onSelectFilter", payload: Filter): void;
}

// props
const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();
// variables
const input = ref<string>("");
// computed properties

// watches

// methods
const onSelectFilter = (value: any) => {
  input.value = value;

  const convertedI18nFilterItems: Filter[] = JSON.parse(
    JSON.stringify(props.filtersI18nItems)
  );

  const foundedFilter = convertedI18nFilterItems.find((filter: Filter) => {
    return filter.value === input.value;
  })!;

  emit("onSelectFilter", foundedFilter);
};

// hooks
</script>
