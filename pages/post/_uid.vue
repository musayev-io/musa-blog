<template>
  <div class="bg-m-blue-1">
    <!-- Slices block component -->
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <article v-else class="">
      <div class="grid grid-cols-12 mt-20">
        <div class="col-start-4 col-end-10">
          <div class="flex flex-col">
            <h1
              class="text-m-orange-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4"
            >
              {{ postTitle }}
            </h1>
            <span class="font-maison font-light text-sm text-m-blue-2 pt-4 mb-4"
              >Written by <strong>Musa Musayev</strong> on {{ postDate }}</span
            >
            <!-- TODO :: Iterate through tags -->
            <div class="flex">
              <post-tag class="mb-10">
                <slot>{{ postTags }}</slot>
              </post-tag>
              <post-tag class="mb-10">
                <slot>lambda</slot>
              </post-tag>
              <post-tag class="mb-10">
                <slot>lambdas</slot>
              </post-tag>
            </div>
          </div>
        </div>
        <div class="col-start-5 col-end-10">
          <render-slices class="" :slices="meta.slices" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import RenderSlices from '~/components/prismic/RenderSlices.vue'
import PostTag from '~/components/PostTag.vue'

const { DateTime } = require('luxon')

export default {
  name: 'PostContentByUID',
  components: {
    RenderSlices,
    PostTag,
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
    postTags() {
      // return array of tags
      // may need to include link so it's clickable to the tag page
      return 'sample tag'
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
<style scoped></style>
