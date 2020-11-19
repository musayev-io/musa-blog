<template>
  <div class="">
    <!-- testing style for .links -->
    <!-- <a
      class="font-body text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 hover:border-b-2 hover:border-blue-200 hover:pb-1"
    >
      test link
    </a> -->
    <!-- testing style for .inline-code -->
    <!-- <span
      class="font-mono text-2xl font-bold text-cool-gray-900 bg-m-blue-3 rounded-lg px-2 py-1 mx-2"
      >fun() => ()
    </span> -->
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
