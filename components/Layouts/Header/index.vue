<template>
  <div class="lg:py-4 dir-ltr">
    <div
      ref="headerRef"
      class="lg:flex hidden bg-white dark:bg-gray-900 w-full lg:h-[70px] items-center transition-all duration-300 transform"
    >
      <div class="container lg:px-4 px-2">
        <div class="flex items-center justify-between">
          <div>
            <NuxtLink :to="$tm('brand.link')">
              <h3
                class="font-extrabold font-[inter-extrabold] capitalize lg:text-xl text-black dark:text-white"
              >
                {{ $tm("brand.value") }}
              </h3>
            </NuxtLink>
          </div>
          <ul class="flex items-center lg:-mx-4 -mx-2">
            <li class="lg:mx-4 mx-2">
              <ul
                class="flex ltr:dir-ltr rtl:dir-rtl items-center lg:-mx-4 -mx-2"
              >
                <li
                  v-for="(item, index) in $tm(
                    'components.layouts.header.items'
                  )"
                  :key="index"
                >
                  <NuxtLink
                    :to="item.link"
                    :class="[
                      'lg:mx-4 mx-2 hover:text-baseYellow-500 duration-300 uppercase',
                      currentAcitveRoute &&
                      currentAcitveRoute.link === item.link
                        ? 'text-baseYellow-500'
                        : '',
                    ]"
                    >{{ item.text }}</NuxtLink
                  >
                </li>
              </ul>
            </li>
            <li
              class="lg:w-[142px] h-10 block rounded-md bg-baseYellow-500 hover:bg-baseYellow-700 duration-300 text-white"
            >
              <NuxtLink
                class="w-full h-full flex justify-center items-center uppercase font-bold"
                :to="$tm('components.layouts.header.getStarted.link')"
                >{{
                  $tm("components.layouts.header.getStarted.text")
                }}</NuxtLink
              >
            </li>
            <li class="lg:mx-4 mx-2">
              <div class="w-[120px] h-10">
                <ClientOnly>
                  <ElementDropdownMenu
                    :selected="getCurrentLanguageFromI18n"
                    :items="$tm('other.languages') as Language[]"
                    @on-change-selected-item="onChangeSelectedLanguage"
                  />
                </ClientOnly>
              </div>
            </li>
            <li class="lg:mx-4 mx-2">
              <div class="w-[140px] h-10">
                <ClientOnly>
                  <ElementDropdownMenu
                    :selected="getCurrentTheme"
                    :items="$tm('other.themes') as Theme[]"
                    @on-change-selected-item="
                      onChangeSelectedTheme($event as Theme)
                    "
                  />
                </ClientOnly>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:hidden block bg-black text-white">
      <div class="w-full flex items-center">
        <div class="p-4 w-full">
          <div class="w-full flex items-center justify-between">
            <div>
              <NuxtLink :to="$tm('brand.link')">
                <h3
                  class="font-extrabold text-white font-[inter-extrabold] capitalize text-base"
                >
                  {{ $tm("brand.value") }}
                </h3>
              </NuxtLink>
            </div>
            <div>
              <div class="w-5 h-5 cursor-pointer" @click="onToggleHeaderItems">
                <ElementIcon
                  :icon="{ prefix: 'fa-solid', value: 'fa-bars' }"
                  variant="white"
                />
              </div>
            </div>
          </div>
          <ul
            :style="{ height: dynamicResponsiveHeaderItemsHeight + 'px' }"
            :class="[
              isResponsiveHeaderOpen
                ? 'opacity-1 overflow-y-visible mt-4'
                : 'opacity-0 overflow-y-hidden mt-0',
            ]"
            ref="responsiveHeaderItemsRef"
            class="transition-all duration-300 ltr:dir-ltr rtl:dir-rtl"
          >
            <li
              v-for="(item, index) in $tm('components.layouts.header.items')"
              :key="index"
              class="mb-4"
            >
              <NuxtLink
                :to="item.link"
                :class="[
                  ' hover:text-baseYellow-500 duration-300 uppercase',
                  currentAcitveRoute && currentAcitveRoute.link === item.link
                    ? 'text-baseYellow-500'
                    : '',
                ]"
                >{{ item.text }}</NuxtLink
              >
            </li>
            <li class="mb-4">
              <div class="flex -mx-1">
                <div class="w-1/2 h-10">
                  <div class="w-full h-full p-1">
                    <ClientOnly>
                      <ElementDropdownMenu
                        :selected="getCurrentLanguageFromI18n"
                        :items="$tm('other.languages') as Language[]"
                        variant="black"
                        @on-change-selected-item="
                          onChangeSelectedLanguage($event as Language)
                        "
                      />
                    </ClientOnly>
                  </div>
                </div>
                <div class="w-1/2 h-10">
                  <div class="w-full h-full p-1">
                    <ClientOnly>
                      <ElementDropdownMenu
                        :selected="getCurrentTheme"
                        :items="$tm('other.themes') as Theme[]"
                        variant="black"
                        @on-change-selected-item="
                          onChangeSelectedTheme($event as Theme)
                        "
                      />
                    </ClientOnly>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="w-full h-10 block rounded-md bg-baseYellow-500 hover:bg-baseYellow-700 duration-300 text-white"
            >
              <NuxtLink
                class="w-full h-full flex justify-center items-center uppercase font-bold"
                :to="$tm('components.layouts.header.getStarted.link')"
                >{{
                  $tm("components.layouts.header.getStarted.text")
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
import type {
  Link,
  Language,
  AvailableLanguageCodes,
  Theme,
} from "@/utilities/types";
import { useIndex } from "@/store";
// interfaces & types & enums

// props
// emits

// variables
const route = useRoute();
const { $i18n } = useNuxtApp();
const useIndexStore = useIndex();
const { onChangeLanguage, getCurrentLanguageFromI18n } = useLanguage();
const { onChangeTheme, getCurrentTheme } = useTheme();

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
    const i18nRouteItems: Link[] = $i18n.tm("components.layouts.header.items");
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
const onVerticalScrollbar = (element: any, amount: number) => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > amount) {
    element.classList.add(
      ...[
        "fixed",
        "z-100",
        "top-0",
        "bg-white",
        "dark:bg-black",
        "drop-shadow-md",
      ]
    );
  } else {
    element.classList.remove(
      ...[
        "fixed",
        "z-100",
        "top-0",
        "bg-white",
        "dark:bg-black",
        "drop-shadow-md",
      ]
    );
  }
};
const onChangeSelectedLanguage = (language: Language) => {
  useIndexStore.changeLoading(true);

  onChangeLanguage(language.value as AvailableLanguageCodes);
  onChangeFontFamily(language.value as AvailableLanguageCodes);

  setTimeout(() => {
    useIndexStore.changeLoading(false);
  }, 2000);
};
const onChangeSelectedTheme = (theme: Theme) => {
  useIndexStore.changeLoading(true);

  onChangeTheme(theme.value);

  setTimeout(() => {
    useIndexStore.changeLoading(false);
  }, 2000);
};

// hooks
onMounted(() => {
  window.addEventListener("scroll", () => {
    onVerticalScrollbar(headerRef.value, 50);
  });
});
onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    onVerticalScrollbar(headerRef.value, 50);
  });
});

// hooks
</script>
<style scoped lang="scss"></style>
