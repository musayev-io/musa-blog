<template>
  <footer class="flex flex-col pt-20 items-center pb-12 mt-4 bg-m-blue-1">
    <span class="t-heading lowercase text-m-blue-3">Made with ❤️ from Nashville</span>
    <span class="text-m-blue-2 t-mono text-sm lowercase font-sans tracking-tighter mt-1 font-light">
      Musa Musayev &#169; {{ year }}
    </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      const d = new Date()
      return d.getFullYear()
    },
  },
}
</script>
