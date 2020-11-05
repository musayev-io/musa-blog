<template>
  <section>
    <!-- <PrismicHeroGroup /> -->
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <p>{{ homepage }}</p> -->
    <PrismicHeroGroup :hero="hero" />
    <PostsList :posts="blogPosts" />
  </section>
</template>

<script>
// import PrismicHeroGroup from '~/components/prismic/PrismicHeroGroup.vue'
import PostsList from '~/components/PostsList.vue'

export default {
  name: 'Home',
  components: {
    // PrismicHeroGroup,
    PostsList,
  },
  layout: 'default',
  async fetch() {
    // Get home page
    this.home = (await this.$prismic.api.getSingle('home_page')).data
    this.hero = this.home.hero_group[0]
    // Get blog posts
    const prismicPostQuery = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'posts')
    )
    this.blogPosts = prismicPostQuery.results
  },
  data() {
    return {
      home: {},
      hero: {},
      blogPosts: {},
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.home))
    // console.log(JSON.stringify(this.hero))
    console.log(JSON.stringify(this.blogPosts))
  },
}
</script>
