<template>
  <ClientOnly>
    <component :is="icon" class="w-full h-full" />
  </ClientOnly>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  name: string;
  color?: { default: string; hover: string };
}

// props
const props = defineProps<Props>();

// emits

// variables
const icon = defineAsyncComponent(
  () => import(`../../assets/svgIcons/${props.name}.svg`)
);

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss">
svg {
  fill: v-bind("props.color?.default");
}

.offering-card {
  &:hover {
    svg {
      fill: v-bind("props.color?.hover");
    }
  }
}
</style>
