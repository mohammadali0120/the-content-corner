<template>
  <div>
    <div
      ref="headerRef"
      class="lg:flex hidden bg-white w-full lg:h-[70px] items-center transition-all duration-500 transform"
    >
      <div class="container lg:px-4 px-2">
        <div class="flex items-center justify-between">
          <div>
            <NuxtLink :to="$tm('brand.link')">
              <h3
                class="font-extrabold font-[inter-extrabold] uppercase lg:text-xl text-black"
              >
                {{ $tm("brand.value") }}
              </h3>
            </NuxtLink>
          </div>
          <ul class="flex items-center lg:-mx-4 -mx-2">
            <li
              v-for="(item, index) in $tm('components.layouts.navbar.items')"
              :key="index"
            >
              <NuxtLink
                :to="item.link"
                :class="[
                  'lg:mx-4 mx-2 hover:text-baseYellow-600 duration-300 uppercase',
                  currentAcitveRoute && currentAcitveRoute.link === item.link
                    ? 'text-baseYellow-600'
                    : '',
                ]"
                >{{ item.text }}</NuxtLink
              >
            </li>
            <li
              class="lg:w-[142px] h-10 block rounded-md bg-baseYellow-400 hover:bg-baseYellow-600 duration-300 text-white"
            >
              <NuxtLink
                class="w-full h-full flex justify-center items-center uppercase font-bold"
                :to="$tm('components.layouts.navbar.getStarted.link')"
                >{{
                  $tm("components.layouts.navbar.getStarted.text")
                }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:hidden block bg-black text-white">
      <div class="w-full flex items-center py-1">
        <div class="p-4 w-full">
          <div class="w-full flex items-center justify-between">
            <div>
              <NuxtLink :to="$tm('brand.link')">
                <h3
                  class="font-extrabold text-white font-[inter-extrabold] uppercase text-base"
                >
                  {{ $tm("brand.value") }}
                </h3>
              </NuxtLink>
            </div>
            <div>
              <div class="w-5 h-5 cursor-pointer" @click="onToggleHeaderItems">
                <ElementIcon
                  :icon="{ prefix: 'fa-solid', value: 'fa-bars' }"
                  color="#ffffff"
                />
              </div>
            </div>
          </div>
          <ul
            :style="{ height: dynamicResponsiveHeaderItemsHeight + 'px' }"
            :class="[
              isResponsiveHeaderOpen
                ? 'overflow-y-visible mt-4'
                : 'overflow-y-hidden mt-0',
            ]"
            ref="responsiveHeaderItemsRef"
            class="transition-all duration-500"
          >
            <li
              v-for="(item, index) in $tm('components.layouts.navbar.items')"
              :key="index"
              class="mb-4"
            >
              <NuxtLink
                :to="item.link"
                :class="[
                  ' hover:text-baseYellow-600 duration-300 uppercase',
                  currentAcitveRoute && currentAcitveRoute.link === item.link
                    ? 'text-baseYellow-600'
                    : '',
                ]"
                >{{ item.text }}</NuxtLink
              >
            </li>
            <li
              class="w-full h-10 block rounded-md bg-baseYellow-400 hover:bg-baseYellow-600 duration-300 text-white"
            >
              <NuxtLink
                class="w-full h-full flex justify-center items-center uppercase font-bold"
                :to="$tm('components.layouts.navbar.getStarted.link')"
                >{{
                  $tm("components.layouts.navbar.getStarted.text")
                }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Link } from "@/utilities/types";
import useVerticalScrollbar from "@/composables/useVerticalScrollbar";
// interfaces & types & enums

// props
// emits

// variables
const route = useRoute();
const { $i18n } = useNuxtApp();

const currentAcitveRoute = ref<Link | null>(null);
const isResponsiveHeaderOpen = ref<boolean>(false);
const headerRef = ref<HTMLDivElement | null>(null);
const dynamicResponsiveHeaderItemsHeight = ref<number>(0);
const responsiveHeaderItemsRef = ref<HTMLDivElement | null>(null);
// computed properties

// watches
watch(
  () => route.path,
  () => {
    // Get current route and set its element active
    const i18nRouteItems: Link[] = $i18n.tm("components.layouts.navbar.items");
    const foundedI18nRoute = i18nRouteItems.find((item: Link) => {
      return item.link === route.path;
    });
    if (foundedI18nRoute) {
      currentAcitveRoute.value = foundedI18nRoute;
    }
  },
  { immediate: true }
);
// methods
const onToggleHeaderItems = () => {
  isResponsiveHeaderOpen.value = !isResponsiveHeaderOpen.value;

  if (responsiveHeaderItemsRef.value) {
    isResponsiveHeaderOpen.value
      ? (dynamicResponsiveHeaderItemsHeight.value =
          responsiveHeaderItemsRef.value.scrollHeight)
      : (dynamicResponsiveHeaderItemsHeight.value = 0);
  }
};

// hooks
useVerticalScrollbar(headerRef as Ref, 50);
</script>
<style scoped lang="scss"></style>
