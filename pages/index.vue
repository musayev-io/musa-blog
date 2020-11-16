<template>
  <section>
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <hero-welcome :hero="hero" />
    <main>
      <div class="grid grid-cols-12">
        <div class="col-start-3 col-end-11">
          <div
            class="t-heading text-2xl text-white bg-owl-charcoal mt-16 mb-4 border-red-500"
          >
            Recent Posts
          </div>
          <list-posts :posts="posts" />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import HeroWelcome from '~/components/prismic/HeroWelcome.vue'
import ListPosts from '~/components/ListPosts.vue'

export default {
  name: 'Home',
  components: {
    HeroWelcome,
    ListPosts,
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
    this.posts = prismicPostQuery.results
  },
  data() {
    return {
      home: {},
      hero: {},
      posts: {},
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.home))
    // console.log(JSON.stringify(this.hero))
    console.log(JSON.stringify(this.posts))
  },
}
</script>
