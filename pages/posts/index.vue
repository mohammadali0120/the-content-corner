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
  title: tm("components.pages.posts.title"),
  meta: [
    {
      name: tm("components.pages.posts.name"),
      content: tm("components.pages.posts.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
