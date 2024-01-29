<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="bg-white">
          <LayoutsHeader />
        </div>
        <div>
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
