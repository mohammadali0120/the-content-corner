<template>
  <div class="drop-shadow-md w-fit">
    <NuxtLink
      :to="props.link"
      class="lg:w-[147px] w-[120px] lg:h-[58px] h-[32px] lg:mx-0 mx-auto bg-baseYellow-500 lg:border-2 border border-transparent hover:bg-white hover:dark:bg-gray-900 hover:border-baseYellow-500 hover:text-baseYellow-500 duration-500 flex items-center justify-center rounded-full text-white font-medium"
      >{{ props.text }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  text: string;
  link: string;
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
