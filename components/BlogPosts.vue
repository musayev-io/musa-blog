<template>
  <div class="">
    <!-- Tag pill(s) -->
    <!-- <div>
      <a href="#" class="inline-block">
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
        >
          Serverless
        </span>
      </a>
    </div> -->
    <div v-for="{ id, uid, data } in posts" :key="id">
      <!-- <p>{{ post }}</p> -->
      <!-- <prismic-link :field="serverless">Hello World</prismic-link> -->
      <NuxtLink :to="`post/${uid}`">{{ data.post_title[0].text }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  props: ['posts'],
  data() {
    return {
      postTitle: {},
      serverless: 'serverless-guru',
    }
  },
  mounted() {
    console.log(this.$prismic.linkResolver)
    console.log(JSON.stringify(this.$prismic.linkResolver))
  },
}
</script>
