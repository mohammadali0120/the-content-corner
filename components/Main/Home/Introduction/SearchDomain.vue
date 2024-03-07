<template>
  <div class="flex flex-wrap items-center justify-between">
    <div
      class="lg:w-6/12 w-full lg:mb-0 mb-4 search-domain-animate-box animate__animated"
    >
      <div class="lg:mb-3 mb-1.5">
        <h3 class="font-bold lg:text-2xl text-base text-black dark:text-white">
          {{
            $tm(
              "components.default.home.information.searchDomain.firstSection.title"
            )
          }}
        </h3>
      </div>
      <div>
        <p class="lg:text-base text-sm">
          {{
            $tm(
              "components.default.home.information.searchDomain.firstSection.subtitle"
            )
          }}
        </p>
      </div>
    </div>
    <div class="lg:w-6/12 w-full search-domain-animate-box animate__animated">
      <div class="lg:pe-44">
        <div
          class="lg:p-12 p-6 bg-baseYellow-500 rounded-ee-[50px] rounded-ss-[50px]"
        >
          <div class="lg:h-12 h-8 lg:mb-4 mb-2">
            <div class="w-full h-full flex items-center lg:text-sm text-[9px]">
              <div class="lg:w-6/12 w-6/12 h-full">
                <input
                  type="text"
                  class="bg-white dark:bg-gray-800 w-full h-full rounded-s-md lg:px-4 px-2"
                  :placeholder="
                    $tm(
                      'components.default.home.information.searchDomain.secondSection.inputPlaceholder'
                    )
                  "
                />
              </div>
              <div class="lg:w-2/12 w-3/12 h-full">
                <select
                  class="w-full h-full bg-white dark:bg-gray-800 lg:border-s-2 border-s border-gray-200 dark:border-gray-700 lg:ps-2 ps-1"
                  name=""
                  id=""
                >
                  <option
                    v-for="(option, index) in $tm(
                      'components.default.home.information.searchDomain.secondSection.selectbox'
                    )"
                    value=""
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <div
                class="lg:w-4/12 w-3/12 h-full flex items-center justify-center"
              >
                <button
                  class="h-full w-full bg-red-500 text-white rounded-e-md"
                >
                  {{
                    $tm(
                      "components.default.home.information.searchDomain.secondSection.btn"
                    )
                  }}
                </button>
              </div>
            </div>
          </div>
          <ul class="w-full flex flex-wrap items-center">
            <li
              v-for="(item, index) in $tm(
                'components.default.home.information.searchDomain.secondSection.selectbox'
              )"
              class="lg:w-auto w-1/3 lg:mb-0 mb-1"
            >
              <div
                class="flex items-center rounded-2xl border border-[#ffffff52] dark:border-gray-700 p-1 lg:me-2 me-1 font-medium lg:px-3 px-1.5"
              >
                <span class="text-white"> {{ item.text }} </span>
                <div class="text-red-500 lg:ps-1 ps-0.5">
                  <span> {{ item.priceType }} </span>
                  <span> {{ item.price }} </span>
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
  //   ".search-domain-animate-box"
  // ) as any;

  // isIntersectionEnteredIntoView(animateBoxes[0], ["animate__fadeInDown"]);
  // isIntersectionEnteredIntoView(animateBoxes[1], ["animate__fadeInUp"]);
});
</script>
<style scoped lang="scss"></style>
