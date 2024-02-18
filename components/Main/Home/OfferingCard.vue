<template>
  <div
    class="offering-card bg-white dark:bg-gray-900 lg:p-8 p-4 border border-gray-200 dark:border-gray-700 rounded-md group hover:bg-baseYellow-500 hover:dark:bg-gray-950 duration-500 hover:text-white"
    :class="
      props.mode && props.mode === 'vertical'
        ? 'flex flex-col-reverse'
        : 'flex lg:flex-row flex-col-reverse lg:flex-nowrap flex-wrap'
    "
  >
    <div
      class="text-end"
      :class="props.mode && props.mode === 'vertical' ? '' : 'lg:pe-8'"
    >
      <div class="lg:mb-4 mb-2">
        <h2
          class="lg:text-xl text-sm text-black dark:text-white group-hover:text-white group-hover:duration-500 font-bold"
          :class="
            props.mode && props.mode === 'vertical'
              ? 'text-center'
              : 'lg:text-end text-center'
          "
        >
          {{ props.title }}
        </h2>
      </div>
      <div>
        <p class=" lg:text-base text-sm"
        :class="props.mode && props.mode === 'vertical' ? 'text-center' : 'lg:text-end text-start'"
        >
          {{ props.subtitle }}
        </p>
      </div>
    </div>
    <div
      :class="
        props.mode && props.mode === 'vertical'
          ? 'lg:mb-4 mb-2'
          : 'lg:mb-0 mb-4'
      "
    >
      <div
        class="lg:w-[80px] lg:h-[80px] w-1/4 bg-baseYellow-500 group-hover:bg-white duration-500 group-hover:dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto"
      >
        <div class="lg:w-[44px] lg:h-[45px] lg:p-0 p-4">
          <ElementSvgIcon :name="props.icon" :color="props.color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Props {
  title: string;
  subtitle: string;
  icon: string;
  color: { default: string; hover: string };
  mode?: "horizontal" | "vertical";
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
