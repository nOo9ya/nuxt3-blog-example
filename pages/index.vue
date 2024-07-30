<script setup lang="ts">
import Post from "~/components/blog/Post.vue";

const config = useRuntimeConfig();

if(process.server) {
  console.log(config.secretKey);
}

console.log(config.public.apiBase);

</script>

<template>
  <div class="text-3xl mb-4">
    <h1>Latest Posts</h1>
    <section>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  </div>
</template>

<style scoped>

</style>
