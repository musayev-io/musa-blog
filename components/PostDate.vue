<template>
  <div>
    <span class="font-body font-light text-sm text-m-blue-2 pt-4 mb-4">Posted on {{ postDate }}</span>
  </div>
</template>

<script>
const { DateTime } = require('luxon')

export default {
  name: 'PostDate',
  props: ['date'],
  computed: {
    postDate() {
      const dt = DateTime.fromISO(this.date)
      return dt.toLocaleString(DateTime.DATE_FULL)
    },
  },
}
</script>
