<template>
  <div class="">
    <prismic-rich-text class="px-6 sm:px-8 lg:px-16" :field="slice.primary.text" />
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
