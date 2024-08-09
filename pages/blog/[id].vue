<script setup lang="ts">
import { useRoute } from "vue-router";

definePageMeta({
	pageTransition: false,
	layoutTransition: false,
});

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const route = useRoute();

// console.log(route.params.id);

// type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
const {
	data: post,
	status,
	refresh,
} = await useAsyncData(
	`post_${route.params.id}`,
	() => {
		return $fetch(`${apiBase}/posts/${route.params.id}`);
	},
	{
		transform: (data) => {
			data.custom_data = "sb";
			return data;
		},
	},
);

const refetchData = async () => {
	await refresh();
};

// const {data: post, status} = await useAsyncData(`post_${id}`, async () => {
//   const [ post, post2 ] = await Promise.all([
//     $fetch(`${apiBase}/posts/${id}`),
//     $fetch(`${apiBase}/posts/${id}`)
//   ]);
//
//   return { post, post2 };
//   // post.value.post
// });
</script>

<template>
	<div v-if="status.value === 'pending'">Loading...</div>
	<div v-else-if="status.value === 'error'" class="text-red-700">
		<span class="fas fa-exclamation-circle"></span> Error Loading results
	</div>

	<div v-else>
		<!-- // https://nuxt.com/docs/getting-started/seo-meta#useseometa  -->
		<head>
			<Title>{{ post.title }}</Title>
			<Meta name="description" :content="post.title" />
			<Meta name="og:description" :content="post.title" />
			<Meta name="og:url" :content="`http://localhost:3000/blog/${post.id}`" />
		</head>

		<article class="my-5">
			<h1 class="mb-2 text-3xl text-center">
				{{ post.title }}
			</h1>
			<p class="text-sm">{{ post.content }}</p>
			<div class="flex flex-row gap-4 items-center text-sm">
				<span class="flex">Created by: {{ post.UserId }}</span>
				<time class="flex items-center">
					<span class="fa fa-clock"></span>
					{{ post.createdAt }}
				</time>
			</div>
		</article>
		<a href="#" @click.prevent="refetchData">Refresh Post</a>
	</div>
</template>

<style scoped></style>
