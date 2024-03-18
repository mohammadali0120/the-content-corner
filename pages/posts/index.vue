<template>
  <div class="lg:py-8 py-2">
    <div class="container lg:px-4 px-2">
      <div class="lg:mb-8 mb-4 text-center">
        <h1
          class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
        >
          {{ $tm("components.pages.posts.title") }}
        </h1>
      </div>
      <div class="flex flex-wrap lg:-mx-4">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-4">
          <div class="lg:px-4">
            <ElementFilters
              :title="
                $tm('other.filters.title').replace(
                  '{_text_}',
                  $tm('labels.posts')
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
            <ul class="flex flex-wrap lg:-mx-4 -mx-2">
              <li
                class="lg:w-1/3 w-full"
                v-for="(post, index) in posts"
                :key="index"
                :class="[
                  !isMobile && index <= 2 ? 'lg:mb-8 mb-4' : '',
                  isMobile && posts!.length - 1 !== index ? 'mb-4' : '',
                ]"
              >
                <div class="lg:px-4 px-2">
                  <div class="w-full lg:h-[330px] h-[180px] lg:mb-4 mb-2">
                    <NuxtImg
                      :src="post.image ? post.image : '/images/blank-img.jpg'"
                      class="w-full h-full rounded-md"
                    />
                  </div>
                  <div class="lg:mb-2 mb-1">
                    <h3
                      class="text-black dark:text-white font-bold lg:text-2xl text-base"
                    >
                      {{ post.title }}
                    </h3>
                  </div>
                  <div class="lg:mb-4 mb-2">
                    <p>
                      {{ reduceString(post.description, 80) }}
                    </p>
                  </div>
                  <div class="flex items-center justify-between font-bold">
                    <div class="opacity-50">
                      <span>{{ post.date }}</span>
                    </div>
                    <div>
                      <NuxtLink
                        :to="`${$tm('other.links.posts')}/${post.id}`"
                        class="text-blue-500"
                        >{{
                          $tm(
                            "labels.readMore"
                          )
                        }}</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Filter, Post } from "~/utilities/types";

// interfaces & types & enums

// props

// emits

// variables
const { isMobile } = useScreenSize();
const { tm, locale } = useI18n();
const posts = ref<Post[] | null>(null);
const selectedFilter = ref<Filter | null>(null);

// computed properties

// watches

// selectedFilter changing in the initial load, so posts will be filled out
watch(selectedFilter, async () => {
  const res = await $fetch(
    `/api/posts?locale=${locale.value}&filterKey=${selectedFilter.value?.value}`
  );

  posts.value = res;
});
// methods

// hooks
const { data: myData } = await useFetch(
  `/api/posts?locale=${locale.value}`
);
posts.value = myData.value;

useHead({
  title: tm("components.pages.posts.meta.title"),
  meta: [
    {
      name: tm("components.pages.posts.meta.name"),
      content: tm("components.pages.posts.meta.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
