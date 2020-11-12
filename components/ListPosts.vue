<template>
  <div class="grid grid-cols-12">
    <section class="col-start-3 col-end-11">
      <span
        class="inline-block text-2xl font-sans font-semibold tracking-wide text-white bg-owl-charcoal text-left w-full mt-16"
      >
        <slot name="title">Posts</slot>
      </span>
      <div class="flex flex-col px-6">
        <div v-for="post in posts" :key="post.id">
          <post-title-with-date :post="post" />
        </div>
        <!-- <post-title-with-date />
        <post-title-with-date /> -->
      </div>
    </section>
  </div>
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
