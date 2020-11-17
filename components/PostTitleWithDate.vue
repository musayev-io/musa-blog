<template>
  <div class="flex justify-start justify-items-start mt-6 mb-6">
    <!-- date -->
    <post-date class="ml-10 mr-14" />
    <div class="">
      <!-- tags -->
      <post-tag class="bg-m-blue-3">
        <slot>aws</slot>
      </post-tag>
      <!-- title & description -->
      <post-title-with-snippet :post="post" />
    </div>
  </div>
</template>

<script>
import PostDate from '~/components/PostDate.vue'
import PostTag from '~/components/PostTag.vue'
import PostTitleWithSnippet from '~/components/PostTitleWithSnippet.vue'

export default {
  name: 'PostTitleWithDate',
  components: {
    PostDate,
    PostTag,
    PostTitleWithSnippet,
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
