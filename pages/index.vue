<script setup lang="ts">
import Post from "~/components/blog/Post.vue";

const config = useRuntimeConfig();

// if(process.server) {
  // console.log(config.secretKey);
// }

// console.log(config.public.apiBase);

const apiBase = config.public.apiBase;
const {data: posts, status} = await useFetch(`${apiBase}/posts`);
// console.log(posts);
// console.log("status ======> ", status);
// console.log("data ======> ", Object.entries(posts.value)[0]);
// const {data: users, pending, error} = await useFetch(`${apiBase}/users`);

</script>

<template>
  <div class="text-3xl mb-4">
    <h1>Latest Posts</h1>
    <div v-if="status.pending">
      Loading data...
    </div>
    <div v-else-if="status.error" class="text-red-700">
      <span class="fas fa-exclamation-circle"></span> Error Loading results
    </div>
    <section v-else>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>

<style scoped>

</style>
