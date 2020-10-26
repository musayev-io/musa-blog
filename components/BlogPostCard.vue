<template>
  <div class="">
    <!-- Tag pill(s) -->
    <div>
      <a href="#" class="inline-block">
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
        >
          Serverless
        </span>
      </a>
    </div>
    <h2>Blog Title</h2>
    <p></p>
    <p>Snippet</p>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: ['post'],
}
</script>
