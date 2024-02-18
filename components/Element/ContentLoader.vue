<template>
  <div
    class="w-full flex items-center"
    :class="
      props.position! === 'end'
        ? 'justify-end'
        : props.position! === 'start'
        ? 'justify-start'
        : 'justify-center'
    "
  >
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  position?: "center" | "start" | "end";
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
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #ff9500 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
