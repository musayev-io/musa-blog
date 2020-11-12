<template>
  <section class="grid grid-cols-12">
    <div class="col-start-3 col-end-11 mt-16">
      <span
        class="text-2xl font-sans font-semibold tracking-wide text-white bg-owl-charcoal"
        >Featured Posts</span
      >
      <!-- <div class="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"> -->
      <div class="flex flex-col gap-4 lg:space-x-24 lg:flex-row">
        <blog-post-square-card></blog-post-square-card>
        <blog-post-square-card></blog-post-square-card>
        <blog-post-square-card></blog-post-square-card>
      </div>
    </div>
  </section>
</template>
<script>
import BlogPostSquareCard from '~/components/BlogPostSquareCard.vue'

export default {
  components: {
    BlogPostSquareCard,
  },
}
</script>
