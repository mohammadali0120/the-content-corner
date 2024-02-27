<template>
  <div class="lg:py-8 py-2">
    <div class="container lg:px-4 px-2">
      <div class="flex flex-wrap">
        <div class="w-full lg:h-[500px] h-[171px] lg:mb-4 mb-2">
          <NuxtImg
            :src="myData?.image ? myData.image : '/images/blank-img.jpg'"
            class="w-full h-full rounded-md"
          />
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="">
            <div class="lg:mb-4 mb-2">
              <h1
                class="lg:text-2xl text-sm font-bold text-black dark:text-white"
              >
                {{ myData?.title }}
              </h1>
            </div>
          </div>
        </div>
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
  `/api/posts/${route.params.postId}?locale=${locale.value}`
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
