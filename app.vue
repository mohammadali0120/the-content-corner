<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="lg:py-4">
          <LayoutsHeader />
        </div>
        <div class="container lg:px-4 px-2 lg:my-8 my-2">
          <NuxtPage />
        </div>
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>
<style scoped lang="scss"></style>
