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
  title: tm("components.pages.podcasts.meta.title"),
  meta: [
    {
      name: tm("components.pages.podcasts.meta.name"),
      content: tm("components.pages.podcasts.meta.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
