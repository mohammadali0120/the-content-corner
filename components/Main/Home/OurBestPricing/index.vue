<template>
  <div>
    <div
      class="lg:mb-8 mb-4 text-center our-best-pricing-animate-box animate__animated"
    >
      <h1
        class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
      >
        {{ $tm("components.default.home.ourBestPricing.title") }}
      </h1>
    </div>

    <div class="w-full">
      <ul class="flex flex-wrap">
        <li
          class="lg:w-1/4 w-full our-best-pricing-animate-box-item animate__animated"
          v-for="(card, index) in $tm(
            'components.default.home.ourBestPricing.cards'
          )"
          :key="index"
        >
          <div class="lg:m-4 mb-4">
            <MainHomeOurBestPricingCard
              :type="card.type"
              :priceType="card.priceType"
              :price="card.price"
              :duration="card.duration"
              :featureText1="card.featureText1"
              :featureText2="card.featureText2"
              :featureText3="card.featureText3"
              :features="card.features"
              :btn="{ text: card.btn.text, link: card.btn.link }"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
import useIntersectionObserver from "~/composables/useIntersectionObserver";

// props

// emits

// variables
const { isIntersected, isIntersectionEnteredIntoView } =
  useIntersectionObserver();

// computed properties

// watches

watch(
  isIntersected,
  () => {
    if (isIntersected.value) {
      const animateBoxItems = document.querySelectorAll(
        ".our-best-pricing-animate-box-item"
      ) as any;

      animateBoxItems.forEach((item: HTMLLIElement, index: number) => {
        let duration = 100 * index + 2;

        setTimeout(() => {
          isIntersectionEnteredIntoView(item, ["animate__fadeInDown"]);
        }, duration);
      });
    }
  },
  { immediate: true }
);

// methods

// hooks
onMounted(() => {
  // const animateBoxes = document.querySelectorAll(
  //   ".our-best-pricing-animate-box"
  // ) as any;

  // isIntersectionEnteredIntoView(animateBoxes[0], ["animate__fadeInDown"]);
});
</script>
<style scoped lang="scss"></style>
