<template>
  <div class="relative">
    <div
      class="w-[120px] h-[32px] lg:border-2 border border-gray-200 rounded-md"
    >
      <div
        class="w-full h-full flex items-center cursor-pointer"
        @click="isMenuVisibele = !isMenuVisibele"
      >
        <div class="lg:ps-2 ps-1 flex items-center">
          <div class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1">
            <NuxtImg v-if="selectedItem.imgSrc" :src="selectedItem.imgSrc" />
          </div>
          <span>{{ selectedItem.text }}</span>
        </div>
      </div>
      <Transition name="slide">
        <ul
          v-show="isMenuVisibele"
          class="w-[120px] absolute z-10 bg-white left-0 mt-1 lg:border-2 border border-gray-200 rounded-md lg:p-1 p-.5"
        >
          <li
            class="flex items-center hover:bg-blue-50 duration-500 cursor-pointer rounded-md lg:py-1 py-0.5 lg:ps-2 ps-1"
            :class="props.items.length - 1 !== index ? 'lg:mb-2 mb-1' : ''"
            v-for="(item, index) in props.items"
            :key="index"
            @click="onChangeSelectedItem(item)"
          >
            <div class="lg:w-5 lg:h-5 w-4 h-4 lg:me-2 me-1">
              <NuxtImg v-if="item.imgSrc" :src="item.imgSrc" />
            </div>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Item {
  text: string;
  value?: string;
  imgSrc?: string;
}

interface Props {
  selected: Item;
  items: Item[];
}
interface Emit {
  (e: "onChangeSelectedItem", payload: Item): Item;
}
// props
const props = defineProps<Props>();
// emits
const emit = defineEmits<Emit>();

// variables
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
</script>
<style scoped lang="scss"></style>
