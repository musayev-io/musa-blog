<template>
  <section>
    <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ $prismic.asText(hero.heading) }}
          </h2>
          <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            {{ $prismic.asText(hero.subheading) }}
          </p>
        </div>
        <!-- Horizontal line -->
        <div
          class="mt-4 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
        >
          <!-- Blog card -->
          <div>
            <!-- Tags pill -->
            <div>
              <a href="#" class="inline-block">
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
                >
                  Article
                </span>
              </a>
            </div>
            <a href="#" class="block">
              <h3 class="mt-4 text-xl leading-7 font-semibold text-gray-900">
                Boost your conversion rate
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm leading-5 font-medium text-gray-900">
                  <a href="#"> Paul York </a>
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span class="mx-1"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrismicHomepageBanner',
  props: ['hero'],
}
</script>
