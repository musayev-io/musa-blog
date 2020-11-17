<template>
  <div class="grid grid-cols-12">
    <!-- <p v-if="$fetching">Pending...</p>
    <p v-else-if="$fetching">error...</p>
    <section v-else> -->
    <section class="col-start-4 col-end-10">
      <div class="flex flex-col mt-16 mb-8">
        <span class="text-m-orange-3 t-body text-2xl">Hello, I'm</span>
        <span class="text-m-orange-2 font-display text-5xl font-bold mb-4"
          >Musa Musayev 🤙🏼</span
        >
        <span
          class="text-m-blue-2 font-maison font-thin text-lg tracking-wide mb-2 max-w-2xl"
          >I’m a solution architect and product owner for Deloitte.
        </span>
        <span
          class="text-m-blue-2 font-maison font-thin text-lg tracking-wide max-w-2xl"
        >
          I work primarily on AWS technologies, specializing in serverless
          solutions. This is a collection of my notes and thoughts, and help
          those who are on a similar jouney as me
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroWelcome',
  props: {
    hero: {
      type: Object,
      required: true,
    },
    fetching: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
