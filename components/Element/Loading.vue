<template>
  <div
    v-show="loading"
    class="bg-[#1F2937] z-100 fixed top-0 left-0 w-full h-full text-center flex items-center justify-center"
  >
    <div class="loader"></div>
  </div>
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
const nuxtApp = useNuxtApp();
const loading = ref<boolean>(false);

// computed properties

// watches
watch(loading, () => {
  if (loading.value) {
    makeNuxtElementOverflowHidden();
  } else {
    makeNuxtElementOverflowVisible();
  }
});

// methods

// hooks
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:transition:finish", () => {
  loading.value = false;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<style scoped lang="scss">
.loader {
  position: relative;
  width: 75px;
  height: 100px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#ddd 50px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0);
  background-size: 8px 100%;
  background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px;
  animation: pillerPushUp 3s linear infinite;
}
.loader:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 10px;
  height: 10px;
  background: #ffaa00;
  border-radius: 50%;
  animation: ballStepUp 3s linear infinite;
}

@keyframes pillerPushUp {
  0%,
  40%,
  100% {
    background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px;
  }
  50%,
  90% {
    background-position: 0px 50px, 15px 58px, 30px 66px, 45px 78px, 60px 90px;
  }
}

@keyframes ballStepUp {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(8px, -14px);
  }
  10% {
    transform: translate(15px, -10px);
  }
  17% {
    transform: translate(23px, -24px);
  }
  20% {
    transform: translate(30px, -20px);
  }
  27% {
    transform: translate(38px, -34px);
  }
  30% {
    transform: translate(45px, -30px);
  }
  37% {
    transform: translate(53px, -44px);
  }
  40% {
    transform: translate(60px, -40px);
  }
  50% {
    transform: translate(60px, 0);
  }
  57% {
    transform: translate(53px, -14px);
  }
  60% {
    transform: translate(45px, -10px);
  }
  67% {
    transform: translate(37px, -24px);
  }
  70% {
    transform: translate(30px, -20px);
  }
  77% {
    transform: translate(22px, -34px);
  }
  80% {
    transform: translate(15px, -30px);
  }
  87% {
    transform: translate(7px, -44px);
  }
  90% {
    transform: translate(0, -40px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
