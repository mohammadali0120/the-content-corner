<template>
  <ClientOnly>
    <div
      class="w-full h-full text-lightBlack"
      :class="props.variant ? props.variant : 'default:'"
    >
      <i class="block w-full h-full" :class="[icon.prefix, icon.value]"></i>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import "@fortawesome/fontawesome-free/js/all";
import type { Icon } from "~/utilities/types";

// interfaces & types & enums
interface Props {
  icon: Icon;
  variant?: "default" | "white";
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

<style scoped lang="scss">
.default {
  @apply text-lightBlack;
}
.white {
  @apply text-white;
}
</style>
