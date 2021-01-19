<template>
  <section class="flex flex-col">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListPosts',
  props: ['posts'],
  data() {
    return {}
  },
}
</script>
