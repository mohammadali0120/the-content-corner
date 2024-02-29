<template>
  <div>
    <ElementContentLoader v-if="props.posts.length <= 0" />
    <ul v-else class="flex flex-wrap lg:-mx-4 -mx-2">
      <li
        class="lg:w-1/3 w-full lg:mb-0 mb-4"
        v-for="(post, index) in getPosts"
        :key="index"
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
                  $tm("labels.readMore")
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
import type { Post } from "~/utilities/types";

// interfaces & types & enums
interface Props {
  posts: Post[];
}

// props
const props = defineProps<Props>();
// emits

// variables

// computed properties
const getPosts = computed((): Post[] => {
  const posts = props.posts.filter((post: Post, index: number) => {
    return index <= 2;
  });

  return posts;
});

// watches

// methods

// hooks
</script>
<style scoped lang="scss"></style>
