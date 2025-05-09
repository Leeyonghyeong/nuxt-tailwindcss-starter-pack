import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/tailwind.css'],

  app: {
    head: {
      title: 'Nuxt + TailwindCss Starter Pack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nuxt + TailwindCss Starter Pack',
        },
        { property: 'og:title', content: 'Nuxt + TailwindCss Starter Pack' },
        {
          property: 'og:description',
          content: 'Nuxt + TailwindCss Starter Pack',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ko_KR' },
        {
          property: 'og:image',
          content: 'Your Image',
        },
        { property: 'og:url', content: 'Your Url' },
      ],
    },
  },
})
