<template>
  <div class="flex flex-col mt-6 mb-6">
    <!-- tags -->
    <!-- NEED TO ITERATE THROUGH TAGS -->
    <div>
      <PostTag v-for="tag in postTags" :key="tag.id">
        <slot>{{ tag }}</slot>
      </PostTag>
    </div>
    <!-- post title -->
    <span class="text-m-orange-3 font-display text-xl pt-4">
      <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link>
    </span>
    <!-- date -->
    <PostDate class="py-2" :date="postDate" />
    <!-- post snippet -->
    <span class="text-m-blue-2 font-body italic pt-1">
      {{ postSnippet }}
    </span>
  </div>
</template>

<script>
import PostDate from '~/components/PostDate.vue'
import PostTag from '~/components/PostTag.vue'

export default {
  name: 'SinglePost',
  components: {
    PostDate,
    PostTag,
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
    postTags() {
      return this.post.tags
    },
    postDate() {
      return this.post.first_publication_date
    },
    postSnippet() {
      return this.post.data.post_snippet[0]
    },
  },
  mounted() {
    console.log(`Post: ${JSON.stringify(this.post)}`)
  },
}
</script>
