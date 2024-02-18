<template>
  <div class="lg:pt-8 lg:pb-0 py-2">
    <div class="container lg:px-4 px-2">
      <div class="flex flex-wrap">
        <div class="lg:w-1/4 w-full lg:h-[300px] lg:mb-8 mb-4">
          <NuxtImg
            :src="myData?.image ? myData.image : '/images/blank-img.jpg'"
            class="w-full h-full rounded-md"
          />
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="lg:ps-8">
            <div class="lg:mb-4 mb-2">
              <h1
                class="lg:text-2xl text-sm font-bold text-black dark:text-white"
              >
                {{ myData?.title }}
              </h1>
            </div>
            <div class="w-full">
              <div
                v-show="!isAudioLoaded"
                class="w-full lg:h-[56px] h-[54px] rounded-full skeleton-loading"
              ></div>

              <audio
                v-show="isAudioLoaded"
                ref="audioRef"
                class="w-full"
                controls
                @loadeddata="onLoadAudio"
              >
                <source :src="myData?.link" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
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
const { locale } = useI18n();
const route = useRoute();
const isAudioLoaded = ref<boolean>(false);
const audioRef = ref<any | null>(null);

// computed properties

// watches

// methods
const onLoadAudio = () => {
  console.log("onLoadAudio");
  isAudioLoaded.value = true;
};
// hooks
const { data: myData, pending } = await useFetch(
  `/api/podcasts/${route.params.podcastId}?locale=${locale.value}`
);
if (!myData?.value) {
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
