// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3 Blog example',
      meta: [
        {
          name: 'description',
          content: 'My first Nuxt3 Blog example'
        },
        {
          name: 'keywords',
          content: 'nuxt3, vue, blog, example'
        }
      ],
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
        // },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        }
      ],
    },
  },
  css: [
    "~/assets/styles/custom.css",
    "~/assets/styles/scss/app.scss"
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    secretKey: '',
    public: {
      apiBase: '',
    }
  }
});
