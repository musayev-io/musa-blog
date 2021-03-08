<template>
  <div class="">
    <template v-if="label === 'full-screen'">
      <!-- need to do position: absolute; w & h: 100; background: grey with light opacity -->
      <div class="" :style="{ 'background-image': 'url(' + imgUrl + ')' }"></div>
    </template>
    <template v-if="label === 'content'">
      <div class="py-8">
        <img :src="imgUrl" :alt="imgAlt" />
        <div v-if="imgCaption">
          <p class="font-body text-lg text-m-blue-3 italic text-center pt-4">{{ imgCaption }}</p>
        </div>
      </div>
    </template>
    <template v-else-if="label === 'post-preview'">
      <div class="">
        <prismic-image class="my-6" :field="img" />
        <!-- <template v-if="$prismic.asText(caption) != ''">
          <p>
            <span class="">{{ $prismic.asText(caption) }}</span>
          </p>
        </template> -->
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImageSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      label: '',
      imgUrl: '',
      imgAlt: '',
      imgCaption: '',
    }
  },
  created() {
    // console.log(JSON.stringify(this.slice))
    this.label = this.slice.slice_label
    this.imgUrl = this.slice.primary.image.url
    this.imgAlt = this.slice.primary.image.alt

    // Get image caption, if exists
    if (typeof this.slice.primary.caption[0].text !== 'undefined') {
      this.imgCaption = this.slice.primary.caption[0].text
    }
  },
}
</script>
