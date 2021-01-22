<template>
  <nav class="grid grid-cols-12 justify-items-end space-x-8 py-6 pr-6">
    <div class="col-start-3 col-end-11">
      <nuxt-link to="/" class="font-display uppercase text-m-blue-3 hover:border-b-2 hover:border-current">
        Home
      </nuxt-link>
      <button
        type="button"
        class="inline-flex items-center px-2 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Button text
      </button>
      <!-- <nuxt-link to="/" class="font-display uppercase text-m-blue-3"> About </nuxt-link> -->
      <!-- <nuxt-link to="/" class="font-display uppercase text-m-blue-3"> Blog </nuxt-link> -->
    </div>
  </nav>
</template>

<script>
export default {}
</script>
