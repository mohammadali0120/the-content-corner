<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="bg-white dark:bg-gray-900">
          <LayoutsHeader />
        </div>
        <div>
          <ClientOnly>
            <ElementCustomLoading v-show="useIndexStore.getLoading" />
          </ClientOnly>
          <ElementLoading />
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
import { useIndex } from "@/store";

// interfaces & types & enums

// props

// emits

// variables
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
const useIndexStore = useIndex();

// computed properties
const htmlAttrs = computed((): any => head.value.htmlAttrs);

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
