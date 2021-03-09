<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <TextSlice :slice="slice" />
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <QuoteSlice :slice="slice" />
      </template>
      <!-- Image slice template -->
      <template v-else-if="slice.slice_type === 'image'">
        <ImageSlice :slice="slice" />
      </template>
      <!-- Code-block slice template -->
      <template v-else-if="slice.slice_type === 'code'">
        <CodeBlockSlice :slice="slice" />
      </template>
    </section>
  </section>
</template>

<script>
export default {
  name: 'RenderSlices',
  props: {
    slices: {
      type: Array,
      required: true,
    },
  },
}
</script>
