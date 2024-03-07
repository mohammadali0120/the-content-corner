<template>
  <div>
    <div
      class="text-center lg:mb-16 mb-8 why-choose-us-animate-box animate__animated"
    >
      <div class="lg:mb-8 mb-4">
        <h1
          class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
        >
          {{ $tm("components.default.home.whyChooseUs.title") }}
        </h1>
      </div>
      <div class="lg:w-[560px] mx-auto">
        <h5 class="lg:text-base text-sm">
          {{ $tm("components.default.home.whyChooseUs.subtitle") }}
        </h5>
      </div>
    </div>
    <ul class="flex flex-wrap">
      <li
        class="lg:w-1/2 why-choose-us-animate-box-item animate__animated"
        v-for="(card, index) in $tm(
          'components.default.home.whyChooseUs.cards'
        )"
        :key="index"
      >
        <div class="lg:m-4 mb-4">
          <MainHomeOfferingCard
            :title="card.title"
            :subtitle="card.body"
            :icon="card.icon"
            :color="{ default: '#ffffff', hover: '#ffaa00' }"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { isEven } from "~/composables/useUtils";
import useIntersectionObserver from "~/composables/useIntersectionObserver";

// interfaces & types & enums

// props

// emits

// variables
const { isIntersected, isIntersectionEnteredIntoView } =
  useIntersectionObserver();

// computed properties

// watches

// methods

// hooks
onMounted(() => {
  // const animateBoxes = document.querySelectorAll(
  //   ".why-choose-us-animate-box"
  // ) as any;

  // const animateBoxItems = document.querySelectorAll(
  //   ".why-choose-us-animate-box-item"
  // ) as any;

  // isIntersectionEnteredIntoView(animateBoxes[0], ["animate__fadeInDown"]);

  // animateBoxItems.forEach((item: HTMLLIElement, index: number) => {
  //   if (isEven(index)) {
  //     isIntersectionEnteredIntoView(item, ["animate__fadeInLeft"]);
  //   } else {
  //     isIntersectionEnteredIntoView(item, ["animate__fadeInRight"]);
  //   }
  // });
});
</script>
<style scoped lang="scss"></style>
