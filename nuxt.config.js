export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-musa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   {
    //     rel: 'stylesheet',
    //     href: '~assets/css/night-owl.css',
    //   },
    // ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Server settings
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false,
  },

  // Deployment type
  // ssr: false,
  // target: 'static',

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
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  prismic: {
    endpoint: 'https://musa-blog.cdn.prismic.io/api/v2',
    // htmlSerializer: '@/plugins/prismic/html-serializer',
    // linkResolver: '@/plugins/prismic/link-resolver',
  },

  // tailwindcss: {
  //   configPath: '~/tailwind.config.js',
  // },

  loading: {
    color: '#ff9500',
    height: '5px',
  },
  purgeCSS: {
    enabled: false,
  },
}
