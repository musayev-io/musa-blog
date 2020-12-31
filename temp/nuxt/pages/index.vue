<template>
  <div class="px-4">
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <hero-welcome :hero="hero" /> -->
    <!-- <p v-if="$fetching">Pending...</p>
    <p v-else-if="$fetching">error...</p>
    <section v-else> -->
    <section class="flex flex-col mt-16 mb-8 max-w-4xl mx-auto">
      <span class="text-m-orange-3 font-body text-2xl">Hello, I'm</span>
      <span class="text-m-orange-2 font-display text-5xl font-bold mb-4">Musa Musayev 🤙🏼 </span>
      <!-- <span class="text-m-blue-2 font-body text-2xl mb-2">
        I’m a solution architect and product owner for Deloitte.
      </span>
      <span class="text-m-blue-2 font-body text-2xl">
        I work primarily on AWS technologies, specializing in serverless solutions. Japan This is a collection of my
        notes and thoughts, and help those who are on a similar jouney as me
      </span> -->
      <span class="text-m-blue-2 font-heading font-thin text-xl mb-2">
        I’m a solution architect and product owner for Deloitte.
      </span>
      <span class="text-m-blue-2 font-heading font-thin text-xl">
        I work primarily on AWS technologies, specializing in serverless solutions. Japan This is a collection of my
        notes and thoughts, and help those who are on a similar jouney as me
      </span>
    </section>
    <main>
      <div class="max-w-4xl mx-auto">
        <div class="font-heading text-2xl text-white bg-owl- mt-16 mb-4">Recent Posts</div>
        <ListPosts :posts="posts" />
      </div>
    </main>
  </div>
</template>

<script>
// import HeroWelcome from '~/components/prismic/HeroWelcome.vue'
import ListPosts from '~/components/ListPosts.vue'

export default {
  name: 'Home',
  components: {
    // HeroWelcome,
    ListPosts,
  },
  layout: 'default',
  data() {
    return {
      home: {},
      hero: {},
      posts: {},
    }
  },
  async fetch() {
    // Get home page
    this.home = (await this.$prismic.api.getSingle('home_page')).data
    this.hero = this.home.hero_group[0]
    // Get blog posts
    const prismicPostQuery = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'posts'))
    this.posts = prismicPostQuery.results
  },
  mounted() {
    console.log(`Posts: ${JSON.stringify(this.posts)}`)
  },
}
</script>
