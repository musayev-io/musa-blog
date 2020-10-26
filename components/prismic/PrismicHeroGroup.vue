<template>
  <section class="">
    <div>
      <h1 class="font-sans">
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
