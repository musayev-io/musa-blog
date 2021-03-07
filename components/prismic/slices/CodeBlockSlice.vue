<template>
  <pre>
    <code v-highlight class="whitespace-pre overflow-x-auto python rounded-lg">{{ code }}</code>
  </pre>
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
  data() {
    return {
      language: '',
      code: '',
    }
  },
  created() {
    this.language = this.slice.primary.language
    this.code = this.slice.primary.code[0].text
  },
}
</script>
