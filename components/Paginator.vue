<script setup lang="ts">
const props = defineProps({
	totalResults: {
		type: Number,
		required: true,
	},
	limit: {
		type: Number,
		required: true,
	},
	currentPage: {
		type: Number,
		required: true,
	},
});

defineEmits(["onPaginate"]);

const numPages = ref(
	props.totalResults > props.limit
		? Math.round(props.totalResults / props.limit)
		: 1,
);

watch(
	() => props.totalResults,
	(newValue, oldValue) => {
		if (newValue != oldValue) {
			numPages.value =
				props.totalResults > props.limit
					? Math.round(props.totalResults / props.limit)
					: 1;
		}
	},
);
</script>

<template>
	<div class="paginator" v-if="totalResults > 0 && numPages > 1">
		<ul>
			<li
				class="page"
				:class="{ disabled: num === currentPage }"
				v-for="num in numPages"
				:key="num"
				@click="$emit('onPaginate', num)"
			>
				{{ num }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.paginator {
	& .page {
		@apply bg-green-600 inline mx-1 p-2 cursor-pointer text-sm text-white;
	}

	& .disabled {
		@apply bg-gray-400 pointer-events-none cursor-not-allowed opacity-50 text-black;
	}
}
</style>
