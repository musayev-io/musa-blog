<template>
  <section>
    <!-- Slices block component -->
    <!-- <slices-block :slices="slices"/> -->
    <h2>Params: {{ this.$route.params.uid }}</h2>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <article v-else class="prose sm:prose-sm md:prose-xl">
      <prismic-rich-text class="musa" :field="fields.postContent" />
    </article>
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
  async fetch() {
    // Get blog post
    const postQuery = await this.$prismic.api.getByUID(
      'posts',
      this.$route.params.uid
    )
    this.fields.postContent = postQuery.data.post_content
    this.fields.publishedDate = postQuery.first_publication_date
    this.fields.tags = postQuery.tags
    console.log(this.$nuxt.context.$config)
  },
  data() {
    return {
      fields: {
        postContent: '',
        publishedDate: '',
        tags: '',
      },
      postQuery: '',
    }
  },
  mounted() {
    // Call fetch again if last fetch more than a minute ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
    },
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
