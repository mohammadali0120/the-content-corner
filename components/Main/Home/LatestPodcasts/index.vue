<template>
  <div class="w-full">
    <ElementContentLoader v-if="props.podcasts.length <= 0" />

    <ElementSwiper v-else :swiper="swiperOptions">
      <template #default>
        <swiper-slide v-for="(podcast, index) in props.podcasts" :key="index">
          <div
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 lg:p-4 p-2 rounded-md"
          >
            <div
              class="flex items-center justify-between lg:mb-4 mb-2 overflow-x-auto"
            >
              <div
                class="px-1 lg:h-[30px] h-[24px] flex items-center bg-gray-100 dark:bg-gray-800 rounded-md border border-transparent dark:border-gray-700"
              >
                <div class="lg:w-5 lg:h-5 w-4 h-4">
                  <ElementIcon
                    color="#787878"
                    :icon="{ prefix: 'fa-solid', value: 'fa-microphone' }"
                  />
                </div>
                <div class="lg:text-sm text-sm">
                  <span class="mx-1">
                    {{ $tm("labels.number") }}
                  </span>
                  <span>
                    {{ podcast.id }}
                  </span>
                </div>
              </div>
            </div>

            <div class="">
              <div class="w-full flex">
                <div
                  class="lg:min-w-[5rem] lg:min-h-[5rem] min-w-[4rem] min-h-[4rem] lg:w-20 lg:h-20 w-16 h-16 overflow-hidden rounded-md"
                >
                  <NuxtLink
                    :to="`${$tm('other.links.podcasts')}/${podcast.id}`"
                  >
                    <NuxtImg
                      :src="
                        podcast.image ? podcast.image : '/images/blank-img.jpg'
                      "
                      class="w-full h-full rounded-md"
                      :alt="podcast.title"
                    />
                  </NuxtLink>
                </div>
                <div class="lg:ms-4 ms-2 mt-2 overflow-hidden">
                  <div class="lg:mb-2 mb-1">
                    <h2
                      :title="podcast.title"
                      class="font-bold lg:text-xl text-base dark:text-gray-300 block overflow-hidden overflow-ellipsis whitespace-nowrap"
                    >
                      {{ podcast.title }}
                    </h2>
                  </div>

                  <div>
                    <NuxtLink
                      :to="`${$tm('other.links.podcasts')}/${podcast.id}`"
                      class="text-blue-500 hover:duration-500 hover:text-blue-600 lg:text-sm text-sm"
                    >
                      {{
                        $tm(
                          "components.default.home.latestPodcasts.listenToPodcast"
                        )
                      }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
    </ElementSwiper>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import type { Podcast } from "~/utilities/types";

// interfaces & types & enums
interface Props {
  podcasts: Podcast[];
}

// props
const props = defineProps<Props>();

// emits

// variables
const swiperOptions = {
  autoplay: { delay: 3000 },
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10,
  breakPoints: {
    600: {
      slidesPerView: 2.4,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },
  },
};
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
