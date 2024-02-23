<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <div>
        <div class="bg-white dark:bg-gray-900">
          <LayoutsHeader />
        </div>
        <div>
          <Teleport to="body">
            <ElementCustomLoading v-if="useLoadingState().value" />
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

// computed properties
const htmlAttrs = computed((): any => head.value.htmlAttrs);

// watches
watch(
  () => useLoadingState().value,
  () => {
    if (useLoadingState().value) {
      makeNuxtElementOverflowHidden();
    } else {
      makeNuxtElementOverflowVisible();
    }
  }
);

// methods

// hooks
onMounted(() => {
  useLoadingState().value = false;
});
</script>
<style scoped lang="scss"></style>
