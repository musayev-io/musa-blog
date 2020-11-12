<template>
  <div class="">
    <!-- Slices block component -->
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <article v-else class="">
      <div class="grid grid-cols-12 mt-20">
        <div class="col-start-4 col-end-10">
          <div class="flex flex-col">
            <h1
              class="text-owl-org-pastel font-termina text-3xl sm:text-4xl lg:text-5xl font-medium"
            >
              {{ postTitle }}
            </h1>
            <span class="font-sans text-base text-owl-nepal pt-4 pb-2"
              >Written on {{ postDate }}</span
            >
          </div>
        </div>
      </div>
      <render-slices :slices="meta.slices" />
    </article>
  </div>
</template>

<script>
import RenderSlices from '~/components/prismic/RenderSlices.vue'

const { DateTime } = require('luxon')

export default {
  name: 'PostContentByUID',
  components: {
    RenderSlices,
  },
  layout: 'default',
  async fetch() {
    // Get blog post
    const postQuery = await this.$prismic.api.getByUID(
      'posts',
      this.$route.params.uid
    )
    this.meta.data = postQuery.data
    this.meta.publishedDate = postQuery.first_publication_date
    this.meta.slices = postQuery.data.body
    this.meta.tags = postQuery.tags
  },
  data() {
    return {
      meta: {
        data: '',
        publishedDate: '',
        slices: '',
        tags: '',
      },
    }
  },
  computed: {
    postTitle() {
      return this.meta.data.post_title[0].text
    },
    postDate() {
      const dt = DateTime.fromISO(this.meta.publishedDate)
      return dt.toLocaleString(DateTime.DATE_FULL)
    },
  },
  created() {
    console.log(this.postDate)
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
}
</script>
