<template>
  <section class="flex flex-col">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </section>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'

export default {
  name: 'ListPosts',
  components: {
    SinglePost,
  },
  props: ['posts'],
  data() {
    return {}
  },
}
</script>
