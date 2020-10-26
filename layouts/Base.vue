<template>
  <div>
    <PrismicHeader />
    <nuxt />
  </div>
</template>

<script>
import PrismicHeader from '~/components/prismic/PrismicHeader'

export default {
  components: {
    PrismicHeader,
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
