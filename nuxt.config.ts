// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	ssr: true,
	app: {
		// https://nuxt.com/docs/api/nuxt-config#head
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Nuxt3 Blog example",
			meta: [
				// {
				// 	name: "description",
				// 	content: "My first Nuxt3 Blog example",
				// },
				// {
				// 	name: "keywords",
				// 	content: "nuxt3, vue, blog, example",
				// },
				{
					name: "og:title",
					content: "Nuxt3 Blog example",
				},
				{
					name: "og:description",
					content: "Nuxt3 blog example og description",
				},
				{
					name: "og:site_name",
					content: "Nuxt3 Blog",
				},
				{
					name: "twitter:title",
					content: "Nuxt3 Blog example",
				},
				{
					name: "twitter:description",
					content: "Nuxt3 blog example og description",
				},
			],
			link: [
				// {
				//   rel: "stylesheet",
				//   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
				// },
				{
					rel: "stylesheet",
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
				},
			],
			script: [
				// {
				// 	type: "text/javascript",
				// 	src: "/js/custom.js",
				// },
			],
		},
		// https://nuxt.com/docs/getting-started/transitions
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
		layoutTransition: {
			name: "layout",
			mode: "in-out",
		},
	},
	css: [
		// "~/assets/styles/custom.css",
		"~/assets/styles/scss/app.scss",
	],
	modules: ["@nuxtjs/tailwindcss"],
	runtimeConfig: {
		secretKey: "",
		public: {
			apiBase: "",
		},
	},
});
