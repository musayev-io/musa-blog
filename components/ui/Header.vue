<template>
  <!-- <nav class="container mx-auto px-4 sm:px-6 lg:px-8 justify-items-end space-x-8 py-6 pr-6">
    <div class="">
      <nuxt-link to="/" class="font-display uppercase text-m-blue-3 hover:border-b-2 hover:border-current">
        Home
      </nuxt-link> -->
  <!-- <nuxt-link to="/" class="font-display uppercase text-m-blue-3"> About </nuxt-link> -->
  <!-- <nuxt-link to="/" class="font-display uppercase text-m-blue-3"> Blog </nuxt-link> -->
  <!-- </div>
  </nav> -->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-m-blue-1">
    <div class="padding-horizontal pt-4">
      <div class="flex items-center justify-end h-8">
        <div class="flex items-center">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link to="/" class="font-display uppercase text-m-blue-3 hover:border-b-2 hover:border-current">
                Home
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="h-6 w-6"
              :class="isMenuOpen ? 'hidden' : 'block'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="h-6 w-6"
              :class="isMenuOpen ? 'block' : 'hidden'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div class="sm:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
      <div class="px-6 pt-2 space-y-1" @click="toggleMenu">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
          Home
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>
