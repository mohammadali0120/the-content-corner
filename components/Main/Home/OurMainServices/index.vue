<template>
  <div class="flex flex-wrap">
    <div class="lg:w-6/12 w-full lg:mb-0 mb-4">
      <div class="lg:pe-16">
        <div class="w-full lg:h-[506px] h-[190px] lg:mb-4 mb-2">
          <NuxtImg src="/images/undraw_programming.svg" class="w-full h-full" />
        </div>
        <div class="our-main-services-animate-box animate__animated">
          <div class="lg:mb-6 mb-3">
            <h1
              class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
            >
              {{ $tm("components.default.home.ourMainServices.title") }}
            </h1>
          </div>
          <div class="lg:pe-44">
            <p class="lg:leading-6 text-justify lg:text-base text-sm">
              {{ $tm("components.default.home.ourMainServices.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="lg:w-6/12 w-full our-main-services-animate-box animate__animated"
    >
      <div class="lg:ps-16">
        <ul class="flex flex-wrap">
          <li
            class="lg:w-1/2 our-main-services-animate-box-item animate__animated"
            v-for="(card, index) in $tm(
              'components.default.home.ourMainServices.cards'
            )"
            :key="index"
          >
            <div class="lg:m-4 mb-4">
              <MainHomeOfferingCard
                :title="card.title"
                :subtitle="card.body"
                :icon="card.icon"
                :color="{ default: '#ffffff', hover: '#ffaa00' }"
                mode="vertical"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums

// props

// emits

// variables

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
