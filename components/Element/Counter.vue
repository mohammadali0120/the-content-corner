<template>
  <span>{{ counter.toLocaleString() }}</span>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  value: number;
  duration: number;
  onCallFunction: boolean;
}

// props
const props = defineProps<Props>();

// emits

// variables
const counter = ref<number>(0);

// computed properties

// watches
watch(
  () => props.onCallFunction,
  () => {
    if (props.onCallFunction) {
      onCounterUpNumber();
    }
  }
);

// methods
const onCounterUpNumber = () => {
  let start = Date.now();
  let end = start + props.duration;
  let interval = props.duration / props.value;
  setInterval(() => {
    let time = Date.now();
    if (time < end) {
      let count = (time - start) / interval;
      counter.value = parseInt(count.toFixed());
    } else {
      counter.value = props.value;
      clearInterval(this);
    }
  }, interval / 2);
};

// hooks
</script>
<style scoped lang="scss"></style>
