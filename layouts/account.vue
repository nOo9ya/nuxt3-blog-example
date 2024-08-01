<script setup lang="ts"></script>

<template>
	<div class="container mx-auto my-4 px-4">
		<AppHeader />
		<nav>
			<ul>
				<li>Update Profile</li>
				<li>view Profile</li>
			</ul>
		</nav>
		<div class="content my-5">
			<slot />
		</div>
		<AppFooter />
	</div>
</template>

<style scoped></style>
