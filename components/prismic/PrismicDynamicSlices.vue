<template>
  <div>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'PlaceholderOne'">
        <PlaceholderOne :slice="slice" />
      </template>
      <!-- Quote slice component -->
      <template v-else-if="slice.slice_type === 'PlaceholderTwo'">
        <PlaceholderTwo :slice="slice" />
      </template>
    </section>
  </div>
</template>

<script>
// Imports for all slices
// const PlaceholderOne = () => import('./slices/PlaceholderOne.vue')
// const PlaceholderTwo = () => import('./slices/PlaceholderTwo.vue')

export default {
  name: 'DynamicSlices',
  components: {
    // PlaceholderOne,
    // PlaceholderTwo,
  },
  props: ['slices'],
}
</script>
