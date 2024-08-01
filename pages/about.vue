<script setup lang="ts">
definePageMeta({
	pageTransition: {
		name: "rotate",
	},
});

/*
https://nuxt.com/docs/api/composables/use-seo-meta
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
 */
const title = ref("About Us");

// <meta name="description"
useHead({
	title,
	meta: [
		{
			name: "description",
			content: "Nuxt3 Blog Homepage",
		},
	],
});

// <meta property="description"
useSeoMeta({
	title,
	description: "Nuxt3 Blog Homepage",
});
</script>

<template>
	<div>About</div>
</template>

<style scoped>
.rotate-enter-active {
	transition: all 0.3s ease-out;
}
.rotate-leave-active {
	transition: all 0.8s ease-in;
}
.rotate-enter-from {
	transform: rotateZ(180deg);
	opacity: 0;
}
.rotate-leave-to {
	transform: rotateZ(-180deg);
	opacity: 0;
}
</style>
