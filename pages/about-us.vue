<template>
  <div>About Us</div>
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
