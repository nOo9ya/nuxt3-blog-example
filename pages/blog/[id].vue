<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// console.log(route.params.id);
</script>

<template>
  <article class="my-5">
    <h1 class="mb-2 text-3xl text-center">
      <NuxtLink to="#" class="text-3xl">Post Title</NuxtLink>
    </h1>
    <p class="text-sm">Post description</p>
    <div class="flex flex-row gap-4 items-center text-sm">
      <span class="flex">Created by: John Doe</span>
      <time class="flex items-center">
        <span class="fa fa-clock"></span>
        2024-07-30
      </time>
    </div>
    <NuxtLink to="#" class="text-sm hover:text-blue-500">Read more</NuxtLink>
  </article>
</template>

<style scoped></style>
