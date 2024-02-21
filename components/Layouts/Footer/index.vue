<template>
  <div class="bg-baseYellow-900 text-white">
    <div class="container lg:px-4 px-2">
      <div class="lg:py-20 py-10">
        <div class="w-full flex items-center justify-between">
          <div>
            <div class="lg:mb-4 mb-2">
              <h4 class="lg:text-sm">
                {{ $tm("components.layouts.footer.header.firstSection.title") }}
              </h4>
            </div>
            <div>
              <h1 class="lg:text-3xl text-xl font-extrabold dark:text-white">
                {{
                  $tm("components.layouts.footer.header.firstSection.subtitle")
                }}
              </h1>
            </div>
          </div>
          <div>
            <div class="lg:mb-4 mb-2">
              <h4 class="lg:text-sm">
                {{
                  $tm("components.layouts.footer.header.secondSection.title")
                }}
              </h4>
            </div>
            <div class="flex items-center">
              <h1 class="lg:text-3xl text-xl font-extrabold dark:text-white">
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
          </div>
          <div>
            <ElementCharmingLink :text="
            $tm('components.layouts.footer.header.link.text')" :link="
            $tm('components.layouts.footer.header.link.link')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interfaces & types & enums

// props

// emits

// variables

// computed properties

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
