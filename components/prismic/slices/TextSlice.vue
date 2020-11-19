<template>
  <div class="">
    <span
      class="text-transparent font font-body border-b-2 border-m-blue-3 pb-1 sm:bg-clip-text bg-gradient-to-r from-orange-200 to-m-orange-1"
    >
      test link
    </span>
    <span
      class="font-mono text-lg font-bold text-m-orange-2 bg-gray-700 rounded-lg px-2 py-1 mx-2"
      >fun() => ()
    </span>
    <prismic-rich-text :field="slice.primary.text" />
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
