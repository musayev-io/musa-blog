<template>
  <section class="bg-gray-800">
    <div>
      <h1 class="">
        {{ $prismic.asText(hero.heading) }}
      </h1>
      <p>{{ $prismic.asText(hero.subheading) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrismicHomepageBanner',
  props: ['hero'],
}
</script>
