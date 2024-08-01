<script setup lang="ts">
import Logo from "~/assets/icons/Logo.vue";
</script>

<template>
	<header class="flex mb-10 items-center">
		<div class="flex-1">
			<NuxtLink to="/"><Logo class="h-10 w-40" /></NuxtLink>
		</div>
		<nav class="grow">
			<ul class="flex gap-4 list-none">
				<li>
					<NuxtLink to="/"><span class="fas fa-home"></span> Home</NuxtLink>
				</li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/blog">Blog</NuxtLink></li>
			</ul>
		</nav>

		<div class="flex-none user-links">
			<NuxtLink to="/account/create-post" class="mx-3 btn-primary-outline"
				>Post Article</NuxtLink
			>
			<NuxtLink to="/account/profile"
				><span class="fas fa-user"></span> Profile</NuxtLink
			>
		</div>
	</header>
</template>

<style scoped></style>
