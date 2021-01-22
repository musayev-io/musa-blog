<template>
  <span class="inline-flex items-center rounded-md px-2 pt-1 pb-1 mr-3 bg-m-blue-3 text-m-blue-1 font-mono">
    <slot>serverless</slot>
  </span>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>
