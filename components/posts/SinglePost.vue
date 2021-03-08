<template>
  <article class="px-6 pt-5 pb-1 mb-8 rounded-lg shadow-lg overflow-hidden bg-blueGray-900">
    <div class="flex flex-col mb-6">
      <!-- date -->
      <!-- <PostDate class="font-body font-light italic text-m-blue-2 mb-2" :date="postDate" /> -->
      <!-- post title -->
      <span class="text-m-orange-3 font-display text-2xl mb-1">
        <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link>
      </span>
      <!-- tags -->
      <!-- NEED TO ITERATE THROUGH TAGS -->
      <div class="flex-wrap">
        <PostTag v-for="tag in postTags" :key="tag.id" class="my-4" size="sm">
          <slot>{{ tag }}</slot>
        </PostTag>
      </div>
      <!-- post snippet -->
      <span class="text-m-blue-3 font-body font-light pt-1">
        {{ postSnippet }}
      </span>
    </div>
  </article>
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
