<template>
  <div>
    <ElementContentLoader v-if="props.videos.length <= 0" />
    <ul v-else class="flex flex-wrap lg:-mx-4 -mx-2">
      <li
        class="lg:w-1/3 w-full lg:mb-0 mb-4"
        v-for="(video, index) in getVidoes"
        :key="index"
      >
        <div class="lg:px-4 px-2">
          <div class="w-full lg:h-[330px] h-[180px] lg:mb-4 mb-2">
            <NuxtImg
              :src="video.image ? video.image : '/images/blank-img.jpg'"
              class="w-full h-full rounded-md"
            />
          </div>
          <div class="lg:mb-2 mb-1">
            <h3
              class="text-black dark:text-white font-bold lg:text-2xl text-base"
            >
              {{ video.title }}
            </h3>
          </div>
          <div class="lg:mb-4 mb-2">
            <p>
              {{ reduceString(video.description, 80) }}
            </p>
          </div>
          <div class="flex items-center justify-between font-bold">
            <div class="opacity-50">
              <span>{{ video.date }}</span>
            </div>
            <div>
              <NuxtLink
                :to="`${$tm('other.links.videos')}/${video.id}`"
                class="text-blue-500"
                >{{
                  $tm("labels.watchingVideo")
                }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "~/utilities/types";

// interfaces & types & enums
interface Props {
  videos: Video[];
}

// props
const props = defineProps<Props>();
// emits

// variables

// computed properties
const getVidoes = computed((): Video[] => {
  const videos = props.videos.filter((post: Video, index: number) => {
    return index <= 2;
  });

  return videos;
});

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
