<template>
	<!--  <div>-->
	<!--    <NuxtRouteAnnouncer />-->
	<!--    <NuxtWelcome />-->
	<!--  </div>-->
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
/*
https://nuxt.com/docs/api/composables/use-head
nuxt.config.js 에 설정된 head 설정보다 우선으로 적용 된다.
- title 만 적용되는거 같고, 나머진 nuxt.config.js가 우선인듯...
interface MetaObject {
  title?: string
  titleTemplate?: string | ((title?: string) => string)
  base?: Base
  link?: Link[]
  meta?: Meta[]
  style?: Style[]
  script?: Script[]
  noscript?: Noscript[]
  htmlAttrs?: HtmlAttributes
  bodyAttrs?: BodyAttributes
}
 */
useHead({
	title: "Home",
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - My Nuxt3 Blog` : "My Nuxt3 Blog";
	},
	meta: [
		{
			name: "description",
			content: "My nuxt3 blog home page",
		},
		{
			name: "keywords",
			content: "nuxt3, vue, blog, example",
		},
	],
	script: [
		{
			// innerHTML: "alert('start nuxt3')",
		},
	],
	bodyAttrs: {},
});
</script>

<style>
/*
style scope -> scope disabled
nuxt.config.js > app > pageTransition > name: 'page'
*/
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
