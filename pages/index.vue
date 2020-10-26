<template>
  <section>
    <!-- <PrismicHeroGroup /> -->
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <p>{{ homepage }}</p> -->
    <PrismicHeroGroup :hero="hero" />
  </section>
</template>

<script>
import PrismicHeroGroup from '~/components/prismic/PrismicHeroGroup.vue'

export default {
  name: 'Home',
  components: {
    PrismicHeroGroup,
  },
  async fetch() {
    this.home = (await this.$prismic.api.getSingle('home_page')).data
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
