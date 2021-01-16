export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
  target: 'static', // default is 'server'
  head: {
    title: 'blog-musa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://rsms.me/inter/inter.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/ctp0lmy.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [{ src: '~/prismic/prismic-links', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  loading: {
    color: '#ff9500',
    height: '5px',
  },
}
