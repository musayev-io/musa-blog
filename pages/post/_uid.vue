<template>
  <div class="bg-m-blue-1 container mx-auto max-w-4xl">
    <!-- Slices block component -->
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <article v-else class="">
      <div class="flex flex-col">
        <h1
          class="text-m-orange-3 font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mt-12 mb-4 px-6 sm:px-8 lg:px-16"
        >
          {{ postTitle }}
        </h1>
        <span class="font-body font-light text-sm text-m-blue-3 pt-4 px-6 sm:px-8 lg:px-16">
          Written by Musa Musayev on {{ postDate }}
        </span>
        <!-- TODO :: Iterate through tags -->
        <div class="flex-wrap px-6 sm:px-8 lg:px-16">
          <PostTag v-for="tag in postTags" :key="tag.id" class="my-4" size="md">
            <slot>{{ tag }}</slot>
          </PostTag>
        </div>
        <p class="px-6 sm:px-8 lg:px-16">
          {{ postSnippet }}
        </p>
        <RenderSlices class="" :slices="postData.slices" />
      </div>
    </article>
  </div>
</template>

<script>
const { DateTime } = require('luxon')

export default {
  name: 'PostContentByUID',
  layout: 'default',
  data() {
    return {
      postData: {
        data: '',
        publishedDate: '',
        slices: '',
        tags: '',
      },
    }
  },
  async fetch() {
    // Get blog post
    const postQuery = await this.$prismic.api.getByUID('posts', this.$route.params.uid)
    this.postData.data = postQuery.data
    this.postData.publishedDate = postQuery.first_publication_date
    this.postData.slices = postQuery.data.body
    this.postData.tags = postQuery.tags
  },
  head() {
    return {
      title: this.postTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.postSnippet,
        },
      ],
    }
  },
  computed: {
    postTitle() {
      return this.postData.data.post_title[0].text
    },
    postDate() {
      const dt = DateTime.fromISO(this.postData.publishedDate)
      return dt.toLocaleString(DateTime.DATE_FULL)
    },
    postTags() {
      // return array of tags
      // may need to include link so it's clickable to the tag page
      try {
        return this.postData.tags
      } catch {
        return ''
      }
    },
    postSnippet() {
      try {
        return this.post.data.snippet[0].text
      } catch {
        return ''
      }
    },
  },
  mounted() {
    // console.log('Post Query:' + JSON.stringify(this.postQuery))
  },
}
</script>
<style scoped></style>
