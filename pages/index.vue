<template>
  <div>
    <div class="bg-white dark:bg-gray-900 lg:pt-8 lg:pb-0 py-2">
      <div class="container lg:px-4 px-2">
        <MainHomeIntroduction />
      </div>
    </div>
    <div class="lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeWhyChooseUs />
      </div>
    </div>
    <div class="bg-baseYellow-700 text-white">
      <div class="lg:py-20 py-4">
        <div class="container lg:px-4 px-2">
          <MainHomeTrustedCustomers />
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeOurMainServices />
      </div>
    </div>
    <div class="lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <div
          class="lg:mb-8 mb-4 text-center latest-posts-animate-box animate__animated"
        >
          <h1
            class="lg:text-4xl text-2xl font-extrabold text-black dark:text-white"
          >
            {{ $tm("components.pages.home.latestContent.title") }}
          </h1>
        </div>
        <ul
          class="flex items-center justify-center lg:-mx-2 -mx-1 lg:mb-16 mb-8"
        >
          <li
            v-for="(tab, index) in ($tm('components.pages.home.latestContent.tabs') as Tab[])"
            :key="index"
            @click="selectedLatestContentTab = tab"
          >
            <div
              class="lg:mx-2 mx-1 lg:w-[160px] lg:h-[52px] w-fit lg:p-0 p-2 border border-baseYellow-500 text-baseYellow-500 hover:bg-baseYellow-700 hover:border-baseYellow-700 hover:text-white duration-500 cursor-pointer rounded-md"
              :class="
                selectedLatestContentTab?.value === tab.value
                  ? 'border-baseYellow-700 bg-baseYellow-700 text-white'
                  : ''
              "
            >
              <div class="w-full h-full flex items-center justify-center">
                <NuxtLink
                  :to="`?tab=${tab.value}`"
                  class="font-bold lg:text-xl text-sm"
                  >{{ tab.text }}</NuxtLink
                >
              </div>
            </div>
          </li>
        </ul>

        <Transition
          v-if="selectedLatestContentTab?.value === 'podcasts'"
          name="page"
          mode="out-in"
          appear
        >
          <MainHomeLatestPodcasts :podcasts="podcasts" />
        </Transition>

        <Transition
          v-else-if="selectedLatestContentTab?.value === 'posts'"
          name="page"
          mode="out-in"
          appear
        >
          <MainHomeLatestPosts />
        </Transition>

        <Transition
          v-else-if="selectedLatestContentTab?.value === 'videos'"
          name="page"
          mode="out-in"
          appear
        >
          <MainHomeLatestVideos />
        </Transition>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 lg:py-20 py-4">
      <div class="container lg:px-4 px-2">
        <MainHomeOurBestPricing />
      </div>
    </div>
    <div class="lg:py-20 py-4 dark:bg-[#fda]">
      <div class="container lg:px-4 px-2">
        <MainHomeOurPartners />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums
interface Tab {
  text: string;
  value: string;
}
// props

// emits

// variables
const { tm, locale } = useI18n();
const route = useRoute();
const latestContentTab: Tab[] = tm("components.pages.home.latestContent.tabs");
const selectedLatestContentTab = ref<Tab | null>(null);
// computed properties

// watches
watch(
  () => route.query,
  () => {
    fetchCurrentTabFromI18n();
  }
);

// methods
const fetchCurrentTabFromI18n = () => {
  const foundedTab = latestContentTab.find(
    (tab: Tab) => tab.value === route.query["tab"]
  );
  if (foundedTab) {
    selectedLatestContentTab.value = foundedTab;
  } else {
    selectedLatestContentTab.value = latestContentTab[0];
  }
};

// hooks
const { data: podcasts } = await useFetch(
  `/api/podcasts?locale=${locale.value}`
);

onMounted(() => {
  fetchCurrentTabFromI18n();
});

useHead({
  title: tm("components.pages.home.title"),
  meta: [
    {
      name: tm("components.pages.home.name"),
      content: tm("components.pages.home.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>
