<template>
  <div class="">
    <prismic-rich-text :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: ['slice'],
}
</script>
