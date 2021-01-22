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
    <span class="text-m-orange-3 font-display text-2xl pt-4">
      <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link>
    </span>
    <!-- date -->
    <PostDate class="py-2 font-body font-light italic text-m-blue-2" :date="postDate" />
    <!-- post snippet -->
    <span class="text-m-blue-2 text-xl font-body pt-1">
      {{ postSnippet }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
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
      try {
        return this.post.data.post_title[0].text
      } catch {
        return ''
      }
    },
    postTags() {
      try {
        return this.post.tags
      } catch {
        return ''
      }
    },
    postDate() {
      try {
        return this.post.first_publication_date
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
    // console.log(`Post: ${JSON.stringify(this.post)}`)
  },
}
</script>
