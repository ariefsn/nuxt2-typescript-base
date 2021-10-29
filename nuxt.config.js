require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-ts-base',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/datetime',
    '@/plugins/utils',
    '@/plugins/env',
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
    // https://pinia.esm.dev/ssr/nuxt.html#installation
    ['@pinia/nuxt', { disableVuex: false }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/guide/setup,
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Auth module configuration: https://auth.nuxtjs.org/
  auth: {
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'data'
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post'
          },
          user: {
            url: '/me',
            method: 'get'
          }
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: process.env.HOST ?? '127.0.0.1',
    port: process.env.PORT ? parseInt(process.env.PORT) : 9000
  },

  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  }
}
