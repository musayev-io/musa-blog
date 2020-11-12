<template>
  <div class="grid grid-cols-12">
    <prismic-rich-text
      class="col-start-4 col-end-10"
      :field="slice.primary.text"
    />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
