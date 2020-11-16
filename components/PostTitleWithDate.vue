<template>
  <div class="flex justify-start justify-items-start mt-6 mb-6">
    <!-- date -->
    <blog-post-date class="ml-10 mr-14" />
    <div class="">
      <!-- tags -->
      <blog-post-tag class="bg-m-blue-3">
        <slot>aws</slot>
      </blog-post-tag>
      <!-- title & description -->
      <div class="flex flex-col">
        <span class="text-m-orange-3 t-display text-3xl tracking-wider pt-4">
          <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link></span
        >
        <span class="text-m-blue-2 t- pt-1"
          >Ante etiam mi habitasse suspendisse erat mollis</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostDate from '~/components/BlogPostDate.vue'
import BlogPostTag from '~/components/BlogPostTag.vue'

export default {
  name: 'PostTitleWithDate',
  components: {
    BlogPostDate,
    BlogPostTag,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    postTitle() {
      return this.post.data.post_title[0].text
    },
  },
  mounted() {
    console.log(`Post: ${this.post}`)
  },
}
</script>
