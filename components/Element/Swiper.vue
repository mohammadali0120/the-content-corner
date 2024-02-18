<template>
  <ClientOnly>
    <swiper
      :modules="modules"
      :slides-per-view="props.swiper.slidesPerView"
      :autoplay="props.swiper.autoplay"
      :loop="props.swiper.loop"
      :space-between="props.swiper.spaceBetween"
      :breakpoints="props.swiper.breakPoints"
    >
      <slot> </slot>
    </swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Swiper } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// interfaces & types & enums
interface Props {
  swiper: {
    slidesPerView: number;
    autoplay?: { delay: number; pauseOnMouseEnter?: boolean };
    loop?: boolean;
    spaceBetween?: number;
    breakPoints?: any;
  };
}
// props
const props = defineProps<Props>();

// emits

// variables
const modules = [Navigation, Autoplay];

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
