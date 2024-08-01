<script setup lang="ts">
import type { IPostElement } from "~/types";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const router = useRoute();

const form = ref({});
const errors = ref({});

const targetElement: IPostElement[] = [
	{ id: "title", message: "Required Title" },
	{ id: "description", message: "Required Description" },
	{ id: "author", message: "Required Author" },
];

const handleSubmit = async () => {
	// console.log(form.value);
	errors.value = formValidated(form, targetElement);

	console.log(Object.entries(errors.value));
	// console.log(Object.entries(errors.value));
	if (Object.entries(errors.value).length > 0) {
		return false;
	}

	const currentDate = new Date().toISOString().slice(0, 10);
	console.log(apiBase);
	await $fetch("/posts", {
		baseURL: apiBase,
		method: "POST",
		body: { ...form.value, created_at: currentDate.toString() },
		onResponse: ({ request, response, options }) => {
			if (response.ok) {
				alert("post created");
				router.push("/");
			}
		},
		onResponseError: ({ request, response, options }) => {
			if (!response.ok) {
				console.log(response.statusText, response.status);
				alert(response.status + " " + response.statusText);
			}
		},
	});
};
</script>

<template>
	<div class="container">
		<form method="post" @submit.prevent="handleSubmit">
			<div class="input-group">
				<label for="title">title</label>
				<div class="flex flex-col">
					<input type="text" name="title" id="title" v-model="form.title" />
					<span class="error-hint" v-if="errors && errors.title">{{
						errors.title
					}}</span>
				</div>
			</div>

			<div class="input-group">
				<label for="description">description</label>
				<div class="flex flex-col">
					<textarea
						name="description"
						id="description"
						rows="3"
						v-model="form.description"
					></textarea>
					<span class="error-hint" v-if="errors && errors.description">{{
						errors.description
					}}</span>
				</div>
			</div>

			<div class="input-group">
				<label for="author">Author</label>
				<div class="flex flex-col">
					<input type="text" name="author" id="author" v-model="form.author" />
					<span class="error-hint" v-if="errors && errors.author">{{
						errors.author
					}}</span>
				</div>
			</div>

			<div class="text-center">
				<button type="submit" class="btn-primary">Save</button>
			</div>
		</form>
	</div>
</template>

<style scoped></style>
