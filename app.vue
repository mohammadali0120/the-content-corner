<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="bg-white dark:bg-gray-900">
          <LayoutsHeader />
        </div>
        <div>
          <Teleport to="body">
            <ElementCustomLoading v-if="useIndexStore.getLoading" />
          </Teleport>
          <ElementLoading />
          <NuxtPage />
        </div>
        <div>
          <LayoutsFooter />
        </div>
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { useIndex } from "~/store";
import {
  makeNuxtElementOverflowHidden,
  makeNuxtElementOverflowVisible,
} from "~/composables/useUtils";

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
watch(
  () => useIndexStore.getLoading,
  () => {
    if (!useIndexStore.getLoading) {
      makeNuxtElementOverflowHidden();
    } else {
      makeNuxtElementOverflowVisible();
    }
  }
);

// methods

// hooks
onMounted(() => {
  useIndexStore.changeLoading(false);
});
</script>
<style scoped lang="scss"></style>
