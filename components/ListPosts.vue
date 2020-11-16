<template>
  <section class="flex flex-col">
    <div v-for="post in posts" :key="post.id">
      <post-title-with-date :post="post" />
    </div>
  </section>
</template>

<script>
import PostTitleWithDate from '@/components/PostTitleWithDate.vue'

export default {
  name: 'ListPosts',
  components: {
    PostTitleWithDate,
  },
  props: ['posts'],
  data() {
    return {}
  },
  mounted() {
    console.log(`ListPosts: ${JSON.stringify(this.posts)}`)
  },
}
</script>
