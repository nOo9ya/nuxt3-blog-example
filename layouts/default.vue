<script setup lang="ts"></script>

<template>
	<div class="container mx-auto my-4 px-4">
		<AppHeader />
		<div class="content my-5 noto-sans-kr">
			<slot />
		</div>
		<AppFooter />
	</div>
</template>

<style scoped lang="scss">
a {
  color: #ffc0cb;
}
</style>
