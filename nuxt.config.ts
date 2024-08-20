// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ignore: ['./docker/'],
  modules: ['@pinia/nuxt', 'nuxt-build-cache', '@nuxt/eslint', '@nuxt/test-utils/module'],
  typescript: {
    typeCheck: true,
  },
  css: [
    'bulma',
    '~/assets/css/main.css'
  ],
  $development: {
    debug: true,
    devServer: {
      https: true,
    },
    devtools: {
      enabled: true
    },
    modules: ['@nuxt/devtools'],
    runtimeConfig: {
      apiSecret: 'abc123'
    }
  },

  $production: {
    modules: ["nuxt-security"],
    // @ts-ignore
    security: {
      headers: {
        crossOriginEmbedderPolicy: 'unsafe-none',
      },
    },
    runtimeConfig: {
      apiSecret: 'def456'
    }
  },
  compatibilityDate: '2024-08-10'
})