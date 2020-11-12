<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <text-slice :slice="slice"></text-slice>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <!-- Image slice template -->
      <template v-else-if="slice.slice_type === 'image'">
        <image-slice :slice="slice"></image-slice>
      </template>
    </section>
  </section>
</template>

<script>
// Imports for all slices
const QuoteSlice = () => import('~/components/prismic/slices/QuoteSlice.vue')
const TextSlice = () => import('~/components/prismic/slices/TextSlice.vue')
const ImageSlice = () => import('../components/prismic/slices/ImageSlice.vue')
export default {
  name: 'RenderSlices',
  components: {
    QuoteSlice,
    TextSlice,
    ImageSlice,
  },
  props: ['slices'],
}
</script>
