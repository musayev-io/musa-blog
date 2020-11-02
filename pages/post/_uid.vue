<template>
  <section>
    <!-- Slices block component -->
    <!-- <slices-block :slices="slices"/> -->
    <h2>Params: {{ this.$route.params.uid }}</h2>
  </section>
</template>

<script>
// Imports for Prismic Slice components
// import SlicesBlock from '~/components/SlicesBlock.vue'
export default {
  name: 'Page',
  components: {
    // SlicesBlock
  },
  // async fetch() {
  //   return {}
  // },
  head() {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
}
</script>
