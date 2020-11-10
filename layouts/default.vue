<template>
  <div class="bg-owl-charcoal p-2">
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
  </div>
</template>

<script>
export default {
  components: {},
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
