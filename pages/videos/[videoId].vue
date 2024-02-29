<template>
  <div class="lg:py-8 py-2">
    <div class="container lg:px-4 px-2">
      <div class="w-full lg:h-[500px] lg:mb-4 mb-2">
        <video class="w-full lg:h-full rounded-md" controls>
          <source :src="myData?.link" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <div class="lg:mb-2 mb-1">
        <h1 class="lg:text-2xl text-sm font-bold text-black dark:text-white">
          {{ myData?.title }}
        </h1>
      </div>
      <div class="lg:mb-4 mb-2">
        <p class="text-justify">{{ myData?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums

// props

// emits

// variables
definePageMeta({ middleware: "auth" });
const { locale } = useI18n();
const route = useRoute();

// computed properties

// watches

// methods

// hooks
const { data: myData } = await useFetch(
  `/api/videos/${route.params.videoId}?locale=${locale.value}`
);
if (!myData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

useHead({
  title: myData?.value.title,
  meta: [
    {
      name: myData?.value.title,
      content: myData?.value.description,
    },
  ],
});
</script>
<style scoped lang="scss"></style>
