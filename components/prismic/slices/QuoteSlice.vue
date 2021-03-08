<template>
  <div class="mx-28 my-4 border-l-4 border-m-orange-1">
    <div class="font-body italic font-medium text-white text-lg md:text-xl px-6 py-4 bg-m-blue-2">{{ quote }}</div>
  </div>
</template>

<script>
export default {
  name: 'QuoteSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quote: '',
    }
  },
  created() {
    this.quote = this.slice.primary.quote_content[0].text
  },
}
</script>
