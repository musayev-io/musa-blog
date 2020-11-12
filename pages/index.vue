<template>
  <section>
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <hero-welcome :hero="hero" />
    <main>
      <recent-posts></recent-posts>
      <blog-posts-list :posts="blogPosts" />
    </main>
  </section>
</template>

<script>
import HeroWelcome from '~/components/prismic/HeroWelcome.vue'
import RecentPosts from '~/components/RecentPosts.vue'
import BlogPostsList from '~/components/BlogPostsList.vue'

export default {
  name: 'Home',
  components: {
    HeroWelcome,
    RecentPosts,
    BlogPostsList,
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
