<template>
  <div class="lg:py-8 py-2">
    <div class="container lg:px-4 px-2">
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full">
          <div class="w-full lg:h-[540px] h-[171px] lg:mb-4 mb-2">
            <NuxtImg
              src="/images/blank-img.jpg"
              class="w-full h-full rounded-md"
            />
          </div>
        </div>
        <div class="lg:w-1/2 w-full">
          <div class="lg:ps-4">
            <div class="lg:mb-8 mb-4">
              <div class="lg:mb-4 mb-2">
                <h1
                  class="lg:text-2xl text-base text-black dark:text-white font-bold"
                >
                  {{ $tm("components.pages.aboutUs.title") }}
                </h1>
              </div>
              <div>
                <p class="text-justify lg:lead8 leading-6">
                  {{ $tm("components.pages.aboutUs.description") }}
                </p>
              </div>
            </div>
            <div>
              <div class="lg:mb-4 mb-2">
                <h1
                  class="lg:text-2xl text-base text-black dark:text-white font-bold"
                >
                  {{ $tm("components.pages.aboutUs.information.title") }}
                </h1>
              </div>
              <ul class="lg:mb-4 mb-2">
                <li
                  v-for="(item, index) in $tm(
                    'components.pages.aboutUs.information.items'
                  )"
                  :key="index"
                  class="flex items-start lg:mb-2 mb-1"
                >
                  <strong class="font-bold inline-block lg:me-2 me-1">
                    {{ item.title }}:</strong
                  >
                  <span> {{ item.text }} </span>
                </li>
              </ul>

              <ul class="flex items-center lg:-mx-4 -mx-2">
                <li
                  v-for="(item, index) in $tm(
                    'components.pages.aboutUs.information.socialMedia'
                  )"
                  :key="index"
                >
                  <a :href="item.link" class="flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 bg-baseYellow-500 rounded-full transition-all duration-500 hover:bg-baseYellow-800 lg:mx-4 mx-2">
                    <div class="lg:w-6 lg:h-6 w-4 h-4">
                      <ElementIcon :icon="item.icon" variant="white" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums

// props

// emits

// variables
const { tm } = useI18n();

// computed properties

// watches

// methods

// hooks
useHead({
  title: tm("components.pages.aboutUs.meta.title"),
  meta: [
    {
      name: tm("components.pages.aboutUs.meta.name"),
      content: tm("components.pages.aboutUs.meta.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
