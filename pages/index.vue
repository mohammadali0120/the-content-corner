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
          <MainHomeTrustedCustomers />
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeOurMainServices />
      </div>
    </div>
    <div class="lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeOurBestPricing />
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
  title: tm("components.pages.home.title"),
  meta: [
    {
      name: tm("components.pages.home.name"),
      content: tm("components.pages.home.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
