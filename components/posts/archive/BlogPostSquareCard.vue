<template>
  <!-- blog card -->
  <div class="flex flex-col bg-owl-stone items-center mt-4 py-6 px-6 rounded-md text-center">
    <span class="text-owl-turq font-sans text-lg font-semibold tracking-wider px-4 py-2">
      Implementing Dark mode with TailwindCSS
    </span>
    <span class="text-owl-nepal py-4 px-2 text-sm font-sans tracking-wide">
      Ante etiam mi habitasse suspendisse erat mollis
    </span>
    <span class="inline-flex shadow-sm py-4">
      <button
        type="button"
        class="inline-flex items-center px-8 py-2 border border-owl-org-pastel text-xs font-inter font-semiboldt tracking-wide leading-4 uppercase text-owl-org-safety hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
      >
        Read More
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BlogPostSquareCard',
}
</script>
