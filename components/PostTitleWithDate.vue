<template>
  <div class="flex mt-6 items-start">
    <!-- date -->
    <blog-post-date />
    <div class="mt-4 px-8">
      <blog-post-tag class="bg-owl-org-safety text-owl-charcoal" />
      <!-- title & description -->
      <div class="flex flex-col">
        <span
          class="text-owl-turq text-left font-sans text-2xl font-semibold tracking-wider pt-2"
        >
          <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link></span
        >
        <span class="text-owl-nepal text-sm font-sans font-light tracking-wide"
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
