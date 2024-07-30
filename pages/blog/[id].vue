<script setup lang="ts">
import {useRoute} from "vue-router";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const route = useRoute();

// console.log(route.params.id);

// type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
const {
  status,
  data: post
} = await useAsyncData(`post_${route.params.id}`, () => $fetch(`${apiBase}/posts/${route.params.id}`));
// const {data: post, status} = await useAsyncData(`post_${id}`, async () => {
//   const [ post, post2 ] = await Promise.all([
//     $fetch(`${apiBase}/posts/${id}`),
//     $fetch(`${apiBase}/posts/${id}`)
//   ]);
//
//   return { post };
//   // post.value.post
// });
</script>

<template>
  <article class="my-5">
    <div v-if="status === 'pending'">
      Loading...
    </div>
    <div v-else-if="status === 'error'" class="text-red-700">
      <span class="fas fa-exclamation-circle"></span> Error Loading results
    </div>
    <h1 class="mb-2 text-3xl text-center" v-else>
      {{ post.title }}
    </h1>
    <p class="text-sm">{{ post.body }}</p>
    <div class="flex flex-row gap-4 items-center text-sm">
      <span class="flex">Created by: {{ post.userId }}</span>
      <time class="flex items-center">
        <span class="fa fa-clock"></span>
        2024-07-30
      </time>
    </div>
  </article>
</template>

<style scoped></style>
