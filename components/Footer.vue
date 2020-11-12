<template>
  <footer class="flex flex-col pt-20 items-center mb-12 mt-4">
    <span class="text-base font-termina lowercase text-owl-org-peach"
      >Made with ❤️ from Nashville</span
    >
    <span
      class="text-owl-org-peach lowercase text-xs font-sans tracking-tighter"
      >Musa Musayev &#169; {{ year }}
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
