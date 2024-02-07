<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="bg-white dark:bg-gray-900">
          <LayoutsHeader />
        </div>
        <div>
          <NuxtPage />
        </div>
        <!-- <div>
          <LayoutsFooter />
        </div> -->
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
const htmlAttrs = computed((): any => head.value.htmlAttrs);
</script>
<style scoped lang="scss"></style>
