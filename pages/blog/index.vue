<script setup lang="ts">
import { useSearchStore } from "~/stores/useSearchStore";
import { storeToRefs } from "pinia";
import Post from "~/components/blog/Post.vue";
import Paginator from "~/components/Paginator.vue";

useHead({
	title: "Blog",
	meta: [
		{
			name: "description",
			content: "Nuxt3 all blog posts",
		},
		{
			name: "og:description",
			content: "Nuxt3 all blog posts",
		},
	],
});

const router = useRouter();
const route = useRoute();

const store = useSearchStore();
const { posts, page, loading, limit, totalFound, searchQuery } =
	storeToRefs(store);

if (route.query) {
	if (route.query.page) {
		page.value = parseInt(route.query.page);
	}

	if (route.query.q) {
		searchQuery.value = route.query.q;
	}
}

await store.fetchPosts();

const handlePaginate = (page: number) => {
	router
		.push({
			path: "/blog",
			query: {
				...route.query,
				page,
			},
		})
		.then(() => {
			store.setPage(page);
		});
};

const search = () => {
	page.value = 1;
	store.fetchPosts();
	store.getPostsCount();

	router.replace({
		path: "/blog",
		query: {
			q: searchQuery.value,
		},
	});
};

onMounted(() => {
	store.getPostsCount();
});
</script>

<template>
	<div>
		<form method="get" class="text-end" @submit.prevent="search">
			<input
				type="text"
				name="q"
				id="q"
				class="text-sm w-80"
				placeholder="Type something to search..."
				v-model="searchQuery"
			/>
		</form>
		<h1 class="text-3xl mb-4">All Posts</h1>
		<div v-if="loading">Loading data...</div>
		<section v-else-if="posts">
			<div>
				<Post v-for="post in posts" :key="post.id" :post="post" />
			</div>

			<Paginator
				:current-page="page"
				:limit="limit"
				:total-results="totalFound"
				@on-paginate="handlePaginate"
			/>
		</section>
	</div>
</template>

<style scoped></style>
