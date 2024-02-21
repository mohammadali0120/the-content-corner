<template>
  <ul class="flex items-center justify-center lg:-mx-8 -mx-2">
    <li v-for="(item, index) in 5" :key="index">
      <div class="lg:mx-8 mx-2 lg:w-[160px] lg:h-[64px]">
        <NuxtImg :src="`/images/partner-${item}.png`" class="w-full h-full" />
      </div>
    </li>
  </ul>
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
