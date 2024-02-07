<template>
  <div ref="dropdownMenuRef" class="relative w-full h-full ltr:dir-ltr rtl:dir-rtl">
    <div
      class="w-full h-full lg:border-2 border rounded-md"
      :class="[props.variant ? 'menu-' + props.variant : 'menu-default']"
    >
      <div
        class="w-full h-full flex items-center cursor-pointer"
        @click="isMenuVisibele = !isMenuVisibele"
      >
        <div class="ps-2 flex items-center">
          <div class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1">
            <NuxtImg v-if="selectedItem.imgSrc" :src="selectedItem.imgSrc" />
            <ElementIcon
              v-else-if="selectedItem.icon"
              :key="selectedItem.icon.value"
              :icon="selectedItem.icon"
              :variant="
                props.variant && props.variant === 'black' ? 'white' : 'default'
              "
            />
          </div>
          <span>{{ selectedItem.text }}</span>
        </div>
      </div>
      <Transition name="slide">
        <ul
          v-show="isMenuVisibele"
          class="w-full absolute z-10 left-0 mt-1 lg:border-2 border rounded-md p-1"
          :class="[props.variant ? 'menu-' + props.variant : 'menu-default']"
        >
          <li
            class="flex items-center duration-300 cursor-pointer rounded-md py-1 ps-2"
            :class="[
              props.items.length - 1 !== index ? 'lg:mb-2 mb-1' : '',
              props.variant
                ? 'menu-item-' + props.variant
                : 'menu-item-default',
            ]"
            v-for="(item, index) in props.items"
            :key="index"
            @click="onChangeSelectedItem(item)"
          >
            <div class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1">
              <NuxtImg v-if="item.imgSrc" :src="item.imgSrc" />
              <ElementIcon
                v-else-if="item.icon"
                :icon="item.icon"
                :variant="
                  props.variant && props.variant === 'black'
                    ? 'white'
                    : 'default'
                "
              />
            </div>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Icon } from "~/utilities/types";

// interfaces & types & enums
interface Item {
  text: string;
  value?: string;
  imgSrc?: string;
  icon?: Icon;
}

interface Props {
  selected: Item;
  items: Item[];
  variant?: "default" | "black";
}
interface Emit {
  (e: "onChangeSelectedItem", payload: Item): void;
}
// props
const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();

// variables
const dropdownMenuRef=ref<HTMLDivElement|null>(null)
const isMenuVisibele = ref<boolean>(false);
const selectedItem = ref<Item>(props.selected);

// computed properties

// watches
watch(
  () => props.selected,
  () => {
    selectedItem.value = props.selected;
  }
);

// methods
const onChangeSelectedItem = (item: Item) => {
  selectedItem.value = item;

  emit("onChangeSelectedItem", item);

  isMenuVisibele.value = false;
};

// hooks

onClickOutside(dropdownMenuRef, () => {
  isMenuVisibele.value = false;
});
</script>
<style scoped lang="scss">
.menu-default {
  @apply bg-white dark:bg-transparent border-gray-200 dark:border-gray-700;
}
.menu-black {
  @apply bg-black border-gray-700;
}

.menu-item-default {
  @apply hover:bg-blue-50 dark:hover:bg-gray-800;
}
.menu-item-black {
  @apply hover:bg-gray-800;
}
</style>
