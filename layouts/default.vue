<template>
  <div class="bg-m-blue-1">
    <Header />
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <Footer />
  </div>
</template>

<script>
export default {
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
