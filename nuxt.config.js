export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dolphin-interview',
    htmlAttrs: {
      lang: 'en'
    },
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
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URI || '/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: ['~/api/index.js'],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      /* meta options */
      favicon: false
    },
    icon: {
      /* meta options */
      source: '/favicon.png'
    },
    manifest: {
      lang: 'en'
    }
  },

  // Auth module configuration: https://auth.nuxtjs.org/guide/setup/
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    },
    strategies: {
      local: {
        user: {
          property: ''
        },
        token: {
          property: 'token',
          required: true,
          global: true,
          type: 'Bearer'
        },

        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: '/user',
            method: 'get',
            propertyName: false
          }
        }
      }
    }
  }
}
