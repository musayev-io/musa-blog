<template>
  <div class="flex mt-6 items-start">
    <!-- date -->
    <blog-post-date />
    <div class="mt-4 px-8">
      <blog-post-tag class="bg-owl-org-safety text-owl-charcoal" />
      <!-- title & description -->
      <div class="flex flex-col">
        <span
          class="text-owl-turq text-left font-sans text-2xl font-semibold tracking-wider pt-2"
          >Implementing Dark mode with TailwindCSS</span
        >
        <span
          class="text-owl-nepal text-sm font-sans font-hairline tracking-wide"
          >Ante etiam mi habitasse suspendisse erat mollis</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostDate from '~/components/BlogPostDate.vue'
import BlogPostTag from '~/components/BlogPostTag.vue'

export default {
  name: 'BlogPostSquareCard',
  components: {
    BlogPostDate,
    BlogPostTag,
  },
}
</script>
