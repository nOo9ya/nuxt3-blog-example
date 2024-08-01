<script setup lang="ts">
import Post from "~/components/blog/Post.vue";

const config = useRuntimeConfig();

// if(process.server) {
// console.log(config.secretKey);
// }

// console.log(config.public.apiBase);

const apiBase = config.public.apiBase;
const { data: posts, status } = await useFetch(`${apiBase}/posts`, {
	key: "latestposts",
	server: true,
	lazy: true,
});
// console.log(posts);
// console.log("status ======> ", status);
// console.log("status ======> ", status.error);
// console.log("status success ===> ", status.success);
// console.log("status success ===> ", status.value);
// console.log("data ======> ", Object.entries(posts.value)[0]);
// const {data: users, status} = await useFetch(`${apiBase}/users`);

useHead({
	title: "Homepage",
	meta: [
		{
			name: "description",
			content: "Nuxt3 Blog Homepage",
		},
		{
			name: "og:title",
			content: "Nuxt3 Blog HomePage",
		},
		{
			name: "og:description",
			content: "Nuxt3 Blog Homepage",
		},
	],
});
</script>

<template>
	<div class="text-3xl mb-4">
		<h1>Latest Posts</h1>
		<div v-if="status.value === 'pending'">Loading data...</div>
		<div v-else-if="status.value === 'error'" class="text-red-700">
			<span class="fas fa-exclamation-circle"></span> Error Loading results
		</div>
		<section v-else>
			<Post v-for="post in posts" :key="post.id" :post="post" />
		</section>
	</div>
</template>

<style scoped></style>
