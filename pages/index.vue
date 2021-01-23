<template>
  <div class="bg-m-blue-1 padding-horizontal mt-16 mb-8">
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <hero-welcome :hero="hero" /> -->
    <!-- <p v-if="$fetching">Pending...</p>
    <p v-else-if="$fetching">error...</p>
    <section v-else> -->
    <section class="flex flex-col mb-20">
      <span class="text-m-orange-3 font-heading text-2xl mb-4"> Hello, I'm </span>
      <span class="text-m-orange-2 font-display text-5xl font-bold mb-6"> Musa Musayev 🤙🏼 </span>
      <span class="text-m-blue-2 font-body font-light text-xl mb-2"> Aliquam nascetur rutrum velit ad dictum non </span>
      <span class="text-m-blue-2 font-body font-light text-xl">
        Laborum sint aliquip fugiat tempor pariatur in velit laboris aliqua incididunt culpa aliqua labore. Consequat
        cupidatat incididunt veniam in nostrud ad. Est anim laborum qui voluptate. Ipsum velit in Lorem amet laboris
        consequat esse dolore. Aliquip culpa adipisicing non dolore esse ex anim. Deserunt duis dolor nisi do nulla
        mollit exercitation exercitation proident magna officia culpa. Anim minim quis proident elit.
      </span>
    </section>
    <main class="">
      <div class="font-heading font-bold text-3xl text-white mb-8">Recent Posts</div>
      <section class="flex flex-col">
        <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'default',
  data() {
    return {
      // home: {},
      // hero: {},
      posts: {},
    }
  },
  async fetch() {
    // Get home page
    // this.home = (await this.$prismic.api.getSingle('home_page')).data
    // this.hero = this.home.hero_group[0]

    // Get blog posts
    const prismicPostQuery = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'posts'))
    this.posts = prismicPostQuery.results
  },
  mounted() {
    // console.log(`Posts: ${JSON.stringify(this.posts)}`)
  },
}
</script>
