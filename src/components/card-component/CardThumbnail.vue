<template>
  <div>
    <img
      class="object-scale-down w-full bg-black"
      :src="imgUrl"
      alt="Sunset in the mountains"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
  </div>
</template>

<script>

export default {
  name: 'CardThumbnail',
  props: {
    thumbs: Object,
  },
  data() {
    return {
      serverUrl: 'http://localhost:6969/thumbnails/',
      hover: false,
      imgUrl: '',
    }
  },
  methods: {
    generateMain: function() {
      this.imgUrl = this.thumbs.thumbMain
    },
  },
  mounted() {
    this.generateMain()
  },
}
</script>

<style>
</style>
