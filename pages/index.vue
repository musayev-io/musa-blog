<template>
  <section>
    <!-- <PrismicHomeBanner /> -->
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <p>{{ homepage }}</p> -->
    <PrismicHomeBanner :hero="hero" />
  </section>
</template>

<script>
import PrismicHomeBanner from '~/components/prismic/PrismicHomeBanner.vue'

export default {
  name: 'Home',
  components: {
    PrismicHomeBanner,
  },
  async fetch() {
    this.home = (await this.$prismic.api.getSingle('home')).data
    this.hero = this.home.hero_group[0]
  },
  data() {
    return {
      home: {},
      hero: {},
    }
  },
  mounted() {
    console.log(JSON.stringify(this.home))
    console.log(JSON.stringify(this.hero))
  },
}
</script>
