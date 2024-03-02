<template>
  <div class="bg-baseYellow-900 text-white">
    <div class="container lg:px-4 px-2">
      <div class="lg:py-10 py-2">
        <div
          class="w-full flex flex-wrap items-end justify-between lg:mb-16 mb-8"
        >
          <div>
            <div class="lg:mb-6 mb-3">
              <h4 class="lg:text-sm text-base">
                {{ $tm("components.layouts.footer.header.firstSection.title") }}
              </h4>
            </div>
            <div class="lg:mb-0 mb-3">
              <h1 class="lg:text-2xl text-xl font-extrabold dark:text-white">
                {{
                  $tm("components.layouts.footer.header.firstSection.subtitle")
                }}
              </h1>
            </div>
          </div>
          <div class="lg:w-auto w-full">
            <div class="lg:mb-6 mb-3">
              <h4 class="lg:text-sm text-base">
                {{
                  $tm("components.layouts.footer.header.secondSection.title")
                }}
              </h4>
            </div>
            <div class="flex items-center lg:justify-normal justify-between">
              <div class="flex items-center">
                <h1 class="lg:text-2xl text-xl font-extrabold dark:text-white">
                  {{
                    $tm(
                      "components.layouts.footer.header.secondSection.subtitle.text"
                    )
                  }}
                </h1>
                <span>
                  {{
                    $tm(
                      "components.layouts.footer.header.secondSection.subtitle.duration"
                    )
                  }}</span
                >
              </div>
              <div class="lg:hidden block">
                <ElementCharmingLink
                  :text="$tm('components.layouts.footer.header.link.text')"
                  :link="$tm('components.layouts.footer.header.link.link')"
                />
              </div>
            </div>
          </div>
          <div class="lg:inline-block hidden h-fit">
            <ElementCharmingLink
              :text="$tm('components.layouts.footer.header.link.text')"
              :link="$tm('components.layouts.footer.header.link.link')"
            />
          </div>
        </div>
        <div class="flex flex-wrap lg:mb-4 mb-2">
          <div class="lg:w-1/4 w-full lg:mb-0 mb-8">
            <div class="lg:pe-16">
              <div class="lg:p-6 p-3 rounded-md bg-baseYellow-500">
                <div class="lg:mb-6 mb-3">
                  <h1
                    class="lg:text-2xl text-xl font-extrabold dark:text-white text-center"
                  >
                    {{ $tm("components.layouts.footer.siteInfo.title") }}
                  </h1>
                </div>
                <div class="lg:mb-6 mb-3">
                  <p class="text-justify leading-6">
                    {{ $tm("components.layouts.footer.siteInfo.description") }}
                  </p>
                </div>
                <ul class="flex items-center lg:-mx-4 -mx-2">
                  <li
                    v-for="(item, index) in $tm(
                      'components.layouts.footer.siteInfo.socialMedia'
                    )"
                    :key="index"
                  >
                    <a
                      :href="item.link"
                      class="flex items-center justify-center lg:w-10 lg:h-10 bg-baseYellow-300 rounded-full transition-all duration-500 hover:bg-baseYellow-700 lg:mx-4 mx-2"
                    >
                      <div class="lg:w-6 lg:h-6 w-4 h-4">
                        <ElementIcon :icon="item.icon" variant="white" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 w-full lg:mb-0 mb-8">
            <div class="lg:pe-16">
              <div class="lg:mb-6 mb-3">
                <h1 class="lg:text-2xl text-xl font-extrabold dark:text-white">
                  {{ $tm("components.layouts.footer.usefullLinks.title") }}
                </h1>
              </div>
              <ul>
                <li
                  v-for="(item, index) in $tm(
                    'components.layouts.footer.usefullLinks.links'
                  )"
                  :key="index"
                  :class="
                    $tm('components.layouts.footer.usefullLinks.links').length -
                      1 !==
                    index
                      ? 'lg:mb-4 mb-2'
                      : ''
                  "
                >
                  <NuxtLink
                    :to="item.link"
                    class="hover:text-gray-200 duration-300"
                  >
                    {{ item.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="lg:w-1/4 w-full lg:mb-0 mb-8">
            <div class="lg:pe-16">
              <div class="lg:mb-6 mb-3">
                <h1 class="lg:text-2xl text-xl font-extrabold dark:text-white">
                  {{ $tm("components.layouts.footer.navigational.title") }}
                </h1>
              </div>
              <ul>
                <li
                  v-for="(item, index) in $tm(
                    'components.layouts.footer.navigational.links'
                  )"
                  :key="index"
                  :class="
                    $tm('components.layouts.footer.navigational.links').length -
                      1 !==
                    index
                      ? 'lg:mb-4 mb-2'
                      : ''
                  "
                >
                  <NuxtLink
                    :to="item.link"
                    class="hover:text-gray-200 duration-300"
                  >
                    {{ item.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="lg:w-1/4 w-full">
            <div class="lg:pe-16">
              <div class="lg:mb-6 mb-3">
                <h1 class="lg:text-2xl text-xl font-extrabold dark:text-white">
                  {{ $tm("components.layouts.footer.office.title") }}
                </h1>
              </div>
              <ul>
                <li
                  v-for="(item, index) in $tm(
                    'components.layouts.footer.office.items'
                  )"
                  :key="index"
                  :class="
                    $tm('components.layouts.footer.office.items').length - 1 !==
                    index
                      ? 'lg:mb-6 mb-3'
                      : ''
                  "
                >
                  <div class="flex">
                    <div class="lg:w-6 lg:h-6 w-4 h-4">
                      <ElementIcon :icon="item.icon" variant="white" />
                    </div>

                    <div class="lg:ps-4 ps-2">
                      <h4 class="leading-6">{{ item.text }}</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="lg:block hidden w-fit ms-auto">
          <div class="lg:w-[140px] w-[120px] h-10">
            <ClientOnly>
              <ElementDropdownMenu
                :selected="getCurrentTheme"
                :items="$tm('other.themes') as Theme[]"
                variant="black"
                position="top"
                @on-change-selected-item="
                  onChangeTheme($event.value as ThemeVariants)
                "
              />
            </ClientOnly>
          </div>
        </div>
      </div>
      <div class="lg:pb-4 pb-2 text-center">
        <p class="font-bold">
          {{
            $tm("components.layouts.footer.copyright.text").replace(
              "{_date_}",
              new Date().getFullYear()
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Theme, ThemeVariants } from "~/utilities/types";

// interfaces & types & enums

// props

// emits

// variables
const { onChangeTheme, getCurrentTheme } = useTheme();

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
