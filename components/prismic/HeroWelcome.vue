<template>
  <div class="grid grid-cols-12">
    <!-- <p v-if="$fetching">Pending...</p>
    <p v-else-if="$fetching">error...</p>
    <section v-else> -->
    <!-- <section>
      <div
        class="bg-owl-charcoal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2
              class="text-xl leading-9 tracking-tight font-light text-owl-org-pastel sm:text-4xl sm:leading-10"
            >
              {{ $prismic.asText(hero.heading) }}
            </h2>
            <p
              class="mt-3 text-3xl leading-7 text-owl-org-safety font-bold sm:mt-4"
            >
              {{ $prismic.asText(hero.subheading) }}
            </p>
          </div>
        </div>
      </div>
    </section> -->
    <section class="col-start-3 col-end-11">
      <div class="flex flex-col mt-16">
        <span class="text-m-orange-3 t-body text-2xl">Hello, I'm</span>
        <span class="t-display text-m-orange-2 text-6xl mt-1"
          >Musa Musayev 🤙🏼</span
        >
        <span class="text-m-blue-2 t-body text-base mt-2 max-w-2xl"
          >I’m a solution architect and product owner for Deloitte.
        </span>
        <span class="text-m-blue-2 t-body text-base mt-2 max-w-2xl">
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
