<template>
  <div class="bg-white">
    <div class="container lg:px-4 px-2">
      <div class="flex flex-wrap lg:flex-row flex-col-reverse">
        <div class="lg:w-4/12 w-full">
          <div class="lg:mb-4 mb-2">
            <h3
              class="text-baseYellow-500 lg:text-base font-bold uppercase lg:text-start text-center"
            >
              {{ $tm("components.pages.home.title") }}
            </h3>
          </div>
          <div
            class="lg:mb-4 mb-2 lg:text-5xl text-2xl font-extrabold text-black uppercase lg:text-start text-center"
          >
            <h1 class="lg:mb-3 mb-1">
              {{ $tm("components.pages.home.subtitles.first") }}
            </h1>
            <h1 class="lg:mb-3 mb-1">
              {{ $tm("components.pages.home.subtitles.second") }}
            </h1>
            <h1 class="lg:mb-3 mb-1">
              {{ $tm("components.pages.home.subtitles.third") }}
            </h1>
          </div>
          <div class="lg:mb-4 mb-2 lg:text-start text-center">
            <p>
              {{ $tm("components.pages.home.text") }}
            </p>
          </div>
          <div class="drop-shadow-md">
            <NuxtLink
              :to="$tm('components.pages.home.link.link')"
              class="lg:w-[147px] w-[120px] lg:h-[58px] h-[32px] lg:mx-0 mx-auto bg-baseYellow-500 hover:bg-baseYellow-700 duration-500 flex items-center justify-center rounded-full text-white font-medium"
              >{{ $tm("components.pages.home.link.text") }}</NuxtLink
            >
          </div>
        </div>
        <div class="lg:w-8/12 w-full lg:mb-0 mb-4">
          <div class="w-full lg:h-[506px] h-[190px]">
            <NuxtImg
              src="/images/undraw_pair_programming.svg"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
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
