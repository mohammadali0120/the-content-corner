<template>
  <div></div>
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
  title: tm("components.pages.videos.title"),
  meta: [
    {
      name: tm("components.pages.videos.name"),
      content: tm("components.pages.videos.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
