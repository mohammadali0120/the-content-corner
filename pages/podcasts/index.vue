<template>
  <div class="lg:py-8 py-2">
    <div class="container lg:px-4 px-2">
      <div class="lg:mb-8 mb-4 text-center">
        <h1
          class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
        >
          {{ $tm("components.pages.podcasts.title") }}
        </h1>
      </div>
      <div class="flex flex-wrap lg:-mx-4">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-4">
          <div class="lg:px-4">
            <ElementFilters
              :title="
                $tm('other.filters.title').replace(
                  '{_text_}',
                  $tm('labels.podcasts')
                )
              "
              filter-key="filter_podcasts"
              initial-value="newest"
              :filters-i18n-items="($tm('other.filters.items') as Filter[])"
              @on-select-filter="selectedFilter = $event"
            />
          </div>
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="lg:px-4">
            <div class="flex flex-wrap lg:-mx-2 -mx-1">
              <div
                v-for="(podcast, index) in podcasts"
                :key="index"
                class="lg:w-1/3 w-full"
                :class="[
                  !isMobile && index <= 2 ? 'lg:mb-4 mb-2' : '',
                  isMobile && podcasts!.length - 1 !== index ? 'mb-2' : '',
                ]"
              >
                <div class="lg:px-2 px-1">
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
                            :icon="{
                              prefix: 'fa-solid',
                              value: 'fa-microphone',
                            }"
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
                    <div class="w-full flex">
                      <div
                        class="lg:min-w-[5rem] lg:min-h-[5rem] min-w-[4rem] min-h-[4rem] lg:w-20 lg:h-20 w-16 h-16 overflow-hidden rounded-md"
                      >
                        <NuxtLink
                          :to="`${$tm('other.links.podcasts')}/${podcast.id}`"
                        >
                          <NuxtImg
                            :src="
                              podcast.image
                                ? podcast.image
                                : '/images/blank-img.jpg'
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Filter, Podcast } from "~/utilities/types";

// interfaces & types & enums

// props

// emits

// variables
const { isMobile } = useScreenSize();
const { tm, locale } = useI18n();
const podcasts = ref<Podcast[] | null>(null);
const selectedFilter = ref<Filter | null>(null);

// computed properties

// watches

// selectedFilter changing in the initial load, so podcasts will be filled out
watch(selectedFilter, async () => {
  const res = await $fetch(
    `/api/podcasts?locale=${locale.value}&filterKey=${selectedFilter.value?.value}`
  );

  podcasts.value = res;
});
// methods

// hooks
const { data: myData } = await useFetch(
  `/api/podcasts?locale=${locale.value}`
);
podcasts.value = myData.value;

useHead({
  title: tm("components.pages.podcasts.meta.title"),
  meta: [
    {
      name: tm("components.pages.podcasts.meta.name"),
      content: tm("components.pages.podcasts.meta.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
