<template>
  <span
    class="inline-flex items-center rounded-md px-2.5 pt-0.5 pb-1 mr-4 font-mono text-sm bg-m-blue-3 text-m-blue-1"
  >
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
