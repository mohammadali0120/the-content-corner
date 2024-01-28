<template>
  <ClientOnly>
    <div class="w-full h-full text-lightBlack" :style="{ color: props.color }">
      <i
        class="block w-full h-full"
        :class="[icon.prefix, icon.value, classes]"
      ></i>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import "@fortawesome/fontawesome-free/js/all";

// interfaces & types & enums
interface Props {
  icon: { prefix: string; value: string };
  color?: string;
  classes?: string;
}

// props
const props = defineProps<Props>();

// emits

// variables

// computed properties

// watches

// methods

// hooks
</script>

<style scoped lang="scss"></style>
