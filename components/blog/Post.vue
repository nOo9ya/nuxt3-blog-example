<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="my-5">
    <h3 class="mb-2">
      <NuxtLink :to="`/blog/${post.id}`" class="text-xl">
        {{ post.title }}
      </NuxtLink>
    </h3>
    <p class="text-sm">{{ post.content }}</p>
    <div class="flex flex-row gap-4 items-center text-sm">
      <span class="flex">Created by: {{ post.userId }}</span>
      <time class="flex items-center">
        <span class="fa fa-clock"></span>{{ post.createdAt }}
      </time>
    </div>
    <NuxtLink :to="`/blog/${post.id}`" class="text-sm hover:text-blue-500">Read
      more
    </NuxtLink>
  </article>
</template>

<style scoped>

</style>
