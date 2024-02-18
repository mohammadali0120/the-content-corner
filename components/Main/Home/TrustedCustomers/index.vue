<template>
  <div>
    <div class="lg:mb-8 mb-4 w-full text-center uppercase">
      <h4 class="">
        {{ $tm("components.default.home.trustedOnUs.title") }}
      </h4>
    </div>
    <ul
      class="flex flex-wrap items-center w-full justify-center trusted-on-us-counter-animate-box"
    >
      <li
        v-for="(item, index) in $tm(
          'components.default.home.trustedOnUs.items'
        )"
        :key="index"
        class="lg:w-auto w-full lg:mb-0 mb-4"
      >
        <div class="lg:mx-4 mx-2">
          <div class="lg:mb-4 mb-2">
            <h3
              class="text-center lg:text-4xl text-sm font-extrabold text-white"
            >
              <ElementCounter
                :value="parseInt(item.value)"
                :duration="5000"
                :on-call-function="isCounterStarted"
              />
            </h3>
          </div>
          <div>
            <p class="text-center">
              {{ item.text }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useIntersectionObserver from "~/composables/useIntersectionObserver";

// interfaces & types & enums

// props

// emits

// variables
const isCounterStarted = ref<boolean>(false);
const { isIntersected, isIntersectionEnteredIntoView } =
  useIntersectionObserver();

// computed properties

// watches
watch(
  isIntersected,
  (): any => {
    if (isIntersected.value) {
      isCounterStarted.value = true;
    }
  },
  { immediate: true }
);

// methods

// hooks
onMounted(() => {
  const animateBoxes = document.querySelectorAll(
    ".trusted-on-us-counter-animate-box"
  ) as any;

  isIntersectionEnteredIntoView(animateBoxes[0]);
});
</script>
<style scoped lang="scss"></style>
