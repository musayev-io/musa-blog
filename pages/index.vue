<template>
  <div class="bg-m-blue-1 padding-horizontal mt-16 mb-8">
    <!-- <p v-if="$fetchState.pending">Pending...</p>
    <p v-else-if="$fetchState.error">error...</p>
    <p v-else>{{ homepage }}</p> -->
    <!-- <hero-welcome :hero="hero" /> -->
    <!-- <p v-if="$fetching">Pending...</p>
    <p v-else-if="$fetching">error...</p>
    <section v-else> -->
    <section class="flex flex-col mb-12">
      <span class="text-m-orange-3 font-heading text-2xl mb-4"> Hello, I'm </span>
      <span class="text-m-orange-2 font-display text-5xl font-bold mb-6"> Musa Musayev 🤙🏼 </span>
      <span class="text-m-blue-3 font-body font-light text-xl mb-2">
        I'm a developer and product owner specializing in serverless technologies built on AWS. Being self-taught, one
        of the most useful resources I found was blogs from professionals whom I looked up to. My goal is to share my
        thoughts and findings with others who are on a similar journey as me.
      </span>
    </section>
    <main class="">
      <div class="font-heading font-bold text-2xl text-white mb-8">Recent Posts</div>
      <article v-for="post in posts" :key="post.id" class="flex flex-col">
        <SinglePost
          class="md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition"
          :post="post"
        />
      </article>
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
  head() {
    return {
      title: 'Musa Musayev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Musa Musayev | Passionate about creating serverless solutions in AWS | This is my abode where I share my thoughts and findings to help the others on a similar journey',
        },
      ],
    }
  },
  async fetch() {
    // Get home page
    // this.home = (await this.$prismic.api.getSingle('home_page')).data
    // this.hero = this.home.hero_group[0]

    // Get blog posts
    const prismicPostQuery = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'posts'), {
      orderings: '[document.last_publication_date desc]',
    })
    this.posts = prismicPostQuery.results
  },
  mounted() {
    // console.log(`Posts: ${JSON.stringify(this.posts)}`)
  },
}
</script>
