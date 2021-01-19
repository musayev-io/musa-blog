<template>
  <div class="">
    <template v-if="label === 'full-screen'">
      <!-- need to do position: absolute; w & h: 100; background: grey with light opacity -->
      <div class="" :style="{ 'background-image': 'url(' + img.url + ')' }" />
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
  name: 'ImageCaptionSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      img: '',
      label: '',
    }
  },
  created() {
    // console.log(JSON.stringify(this.slice))
    this.img = this.slice.primary.image
    this.label = this.slice.slice_label
  },
}
</script>
