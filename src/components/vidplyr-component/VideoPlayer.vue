<template>
  <div class="plyr-style">
    <video class="player" playsinline controls>
      <source
        v-for="(vidLink, index) in vidLinks.array"
        :key="index"
        :src="vidLink.url"
        :size="vidLink.quality"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
import plyrOptions from '@/components/vidplyr-component/plyrOptions.js'

export default {
  name: "VideoPlayer",
  props: {
    vidLinks: Object,
  },
  data() {
    return {
      plyrOptions,
      player: null,
    }
  },
  async mounted() {
    //to start playing video instantely
    this.plyrOptions.previewThumbnails.src = this.vidLinks.vtt
    this.player = new this.$plyr('.player', this.plyrOptions)
    try {
      await this.player.play()
    } catch(err) {
      /*console.log('Interrupted plyr!')*/
    }
  },
}
</script>

<style scoped>
/*Plyr custom styling*/
.plyr-style{
  --plyr-color-main: #e53e3e;
  --plyr-range-thumb-height: 25px;
  --plyr-range-track-height: 20px;
}
</style>
