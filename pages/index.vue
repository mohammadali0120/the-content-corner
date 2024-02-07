<template>
  <div>
    <div class="bg-white dark:bg-gray-900 lg:pt-8 lg:pb-0 py-2">
      <div class="container lg:px-4 px-2">
        <MainHomeIntroduction />
      </div>
    </div>
    <div class="lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeWhyChooseUs />
      </div>
    </div>
    <div class="bg-baseYellow-700 text-white">
      <div class="lg:py-20 py-4">
        <div class="container lg:px-4 px-2">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useIntersectionObserver from "@/composables/useIntersectionObserver";

// interfaces & types & enums

// props

// emits

// variables
const { tm } = useI18n();
const isCounterStarted = ref<boolean>(false);
const { isIntersected, isIntersectionEnteredIntoView } =
  useIntersectionObserver();

// computed properties

// watches
watch(
  isIntersected,
  () => {
    if (isIntersected.value) {
      isCounterStarted.value = true;
    }
  },
  { immediate: true }
);

// methods

// hooks

useHead({
  title: tm("components.pages.home.title"),
  meta: [
    {
      name: tm("components.pages.home.name"),
      content: tm("components.pages.home.content"),
    },
  ],
});

onMounted(() => {
  const animateBoxes = document.querySelectorAll(
    ".trusted-on-us-counter-animate-box"
  ) as any;

  isIntersectionEnteredIntoView(animateBoxes[0]);
});
</script>
<style scoped lang="scss"></style>
