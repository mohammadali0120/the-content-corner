<template>
  <div
    class="bg-white dark:bg-gray-900 lg:p-8 p-4 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-md"
  >
    <div class="w-full text-center lg:mb-8 mb-4">
      <h6 class="opacity-50">{{ props.type }}</h6>
    </div>
    <div class="flex justify-center items-center text-black dark:text-white lg:mb-6 mb-3">
      <span class="lg:text-xl text-sm lg:-mt-4 -mt-2">{{ props.priceType }}</span>
      <h3 class="font-bold lg:text-4xl text-base mx-1">{{ props.price }}</h3>
      <span>/</span>
      <span class="lg:text-xs text-[8px]"> {{ props.duration }}</span>
    </div>
    <div class="w-full text-center lg:mb-6 mb-3">
      <h6 class="opacity-50">{{ props.featureText1 }}</h6>
    </div>
    <div class="w-full text-center lg:mb-6 mb-3">
      <h5>{{ props.featureText2 }}</h5>
    </div>
    <ul class="w-full text-center lg:mb-6 mb-3">
      <li v-for="(feature, index) in props.features" :key="index" class="lg:mb-4 mb-2">
        <span class="font-bold text-black dark:text-white">{{ feature.text }}</span>
        <span class="lg:mx-2 mx-1 font-bold text-black dark:text-white">{{ feature.volumeType }}</span>
        <span class="opacity-50">{{ feature.type }}</span>
      </li>
    </ul>
    <div class="w-full text-center lg:mb-6 mb-3">
      <h6 class="opacity-50">{{ props.featureText3 }}</h6>
    </div>
    <div >
      <ElementCharmingLink class="mx-auto" :text="props.btn.text" :link="props.btn.link" />
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  type: string;
  priceType: string;
  price: string;
  duration: string;
  featureText1: string;
  featureText2: string;
  featureText3: string;
  features: { text: string; volumeType: string; type: string }[];
  btn: { text: string; link: string };
}
// props
const props = defineProps<Props>();
// emits

// variables

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
