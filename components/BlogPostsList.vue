<template>
  <div class="grid grid-cols-12">
    <section class="col-start-3 col-end-11">
      <span
        class="inline-block text-2xl font-sans font-semibold tracking-wide text-white bg-owl-charcoal text-left w-full mt-16"
        ><slot name="title"></slot
      ></span>
      <div class="flex flex-col px-6">
        <blog-post-single />
        <blog-post-single />
        <blog-post-single />
        <blog-post-single />
        <blog-post-single />
      </div>
    </section>
  </div>
</template>

<script>
import BlogPostSingle from '@/components/BlogPostSingle.vue'

export default {
  name: 'BlogPostsList',
  components: {
    BlogPostSingle,
  },
  props: ['posts'],
  data() {
    return {
      postTitle: {},
      serverless: 'serverless-guru',
    }
  },
  mounted() {
    console.log(this.$prismic.linkResolver)
    console.log(JSON.stringify(this.$prismic.linkResolver))
  },
}
</script>
