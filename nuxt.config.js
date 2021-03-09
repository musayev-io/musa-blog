export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Musa Musayev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>',
      },
      // {
      //   rel: 'stylesheet',
      //   href: '~assets/css/night-owl.css',
      // },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Server settings
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false,
  },

  // Page loading settings
  loading: {
    color: '#ff9500',
    height: '5px',
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Nuxt application directory
  // srcDir: 'src/',

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-gtag',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  prismic: {
    endpoint: 'https://musa-blog.cdn.prismic.io/api/v2',
    // htmlSerializer: '@/plugins/prismic/html-serializer',
    // linkResolver: '@/plugins/prismic/link-resolver',
  },
  'google-gtag': {
    id: 'UA-132464444-1',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
}
