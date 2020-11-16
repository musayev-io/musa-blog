<template>
  <div class="bg-owl-charcoal h-screen">
    <Header />
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  // // Called before rendering the layout (even for error page)
  // async middleware({ store, $prismic }) {
  //   await store.dispatch('fetchMenu', $prismic)
  // },
}
</script>
