<template>
  <div>Contact Us</div>
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
  title: tm("components.pages.contactUs.title"),
  meta: [
    {
      name: tm("components.pages.contactUs.name"),
      content: tm("components.pages.contactUs.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
