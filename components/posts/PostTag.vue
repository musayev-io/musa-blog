<template>
  <span class="inline-flex items-center rounded-md bg-m-blue-3 text-m-blue-1 font-mono" :class="dynamicStyle">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    // tag: {
    //   type: String,
    //   required: true,
    // },
    size: {
      type: String,
      required: true,
      default: null,
      validator: (prop) => ['xs', 'sm', 'md', 'lg'].includes(prop),
    },
  },
  computed: {
    dynamicStyle() {
      // Class generator that allows custom color and size
      const styleClass = []
      // Generate and append class for size
      const sizeSm = 'px-2 py-1 mr-3 text-xs'
      const sizeMd = 'px-2 py-1 mr-3'
      const sizeLg = 'px-2 py-1 mr-3 text-lg'

      if (this.size === 'sm') {
        styleClass.push(sizeSm)
      } else if (this.size === 'md') {
        styleClass.push(sizeMd)
      } else if (this.size === 'lg') {
        styleClass.push(sizeLg)
      }

      return styleClass
    },
  },
}
</script>
