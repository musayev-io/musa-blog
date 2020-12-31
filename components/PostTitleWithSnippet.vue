<template>
  <div class="flex flex-col">
    <span class="text-m-orange-3 font-display text-xl pt-4">
      <nuxt-link :to="`post/${post.uid}`">{{ postTitle }}</nuxt-link>
    </span>
    <PostDate class="py-2" />
    <span class="text-m-blue-2 font-body italic pt-1">
      {{ postSnippet }}
    </span>
  </div>
</template>

<script>
import PostDate from '~/components/PostDate.vue'

export default {
  name: 'PostTitleWithSnippet',
  components: {
    PostDate,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postTitle() {
      return this.post.data.post_title[0].text
    },
    postSnippet() {
      return this.post.data.post_title[0].text
    },
  },
}
</script>
