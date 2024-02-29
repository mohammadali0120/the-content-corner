<template>
  <div
    ref="dropdownMenuRef"
    class="relative w-full h-full ltr:dir-ltr rtl:dir-rtl"
  >
    <div
      class="w-full h-full flex items-center cursor-pointer lg:border-2 border rounded-md"
      :class="[props.variant ? 'menu-' + props.variant : 'menu-default']"
      @click="isMenuVisibele = !isMenuVisibele"
    >
      <div class="ps-2 flex items-center">
        <div
          v-if="selectedItem.imgSrc"
          class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1"
        >
          <NuxtImg v-if="selectedItem.imgSrc" :src="selectedItem.imgSrc" />
        </div>
        <div
          v-else-if="selectedItem.icon"
          class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1"
        >
          <ElementIcon
            :key="selectedItem.icon.value"
            :icon="selectedItem.icon"
            :variant="
              props.variant && props.variant === 'black' ? 'white' : 'default'
            "
          />
        </div>

        <span :title="selectedItem.text">{{ selectedItem.text }}</span>
      </div>
    </div>
    <Transition
      :name="
        props.position && props.position === 'top'
          ? 'slide-down'
          : 'slide-up'
      "
    >
      <ul
        v-show="isMenuVisibele"
        class="w-full absolute z-10 left-0 lg:border-2 border rounded-md p-1"
        :class="[
          props.variant ? 'menu-' + props.variant : 'menu-default',
          props.position && props.position === 'top'
            ? `bottom-[100%] mb-1`
            : `top-[100%] mt-1`,
        ]"
      >
        <li
          class="flex items-center duration-500 cursor-pointer rounded-md py-1 ps-2"
          :class="[
            props.items.length - 1 !== index ? 'lg:mb-2 mb-1' : '',
            props.variant ? 'menu-item-' + props.variant : 'menu-item-default',
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
                props.variant && props.variant === 'black' ? 'white' : 'default'
              "
            />
          </div>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </Transition>
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
  variant?: "default" | "black" | "dark";
  position?: "top" | "bottom";
}
interface Emit {
  (e: "onChangeSelectedItem", payload: Item): void;
}
// props
const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();

// variables
const dropdownMenuRef = ref<HTMLDivElement | null>(null);
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
  @apply bg-white dark:bg-black border-gray-200 dark:border-gray-700;
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-in-out;
  visibility: visible;
  opacity: 1;
  z-index: 1;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.3s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-2em);
  z-index: -1;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease-in-out;
  visibility: visible;
  opacity: 1;
  z-index: 1;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.3s;
}
.slide-down-enter-from,
.slide-down-leave-to {
  visibility: hidden;
  opacity: 0;
  transform: translateY(2em);
  z-index: -1;
}
</style>
