<template>
  <div id="video-card" class="flex justify-center">
    <div
      class="h-full overflow-hidden rounded shadow-md"
    >
      <!-- \ border-gray-500 border-2 -->

      <CardThumbnail
        id="thumbnail-img"
        :thumbs="vidInfo.thumbs"
      />
      <CardText
        id="text-container"
        :vidInfo="vidInfo.text"
      />
    </div>
  </div>
</template>

<script>
import CardThumbnail from '@/components/card-component/CardThumbnail'
import CardText from '@/components/card-component/CardText'

export default {
  name: 'VideoCard',
  props: {
    vidInfo: Object,
  },
  components: {
    CardThumbnail,
    CardText,
  },
}
</script>

<style scoped>
/*#thumbnail-img{
max-height: 17.5rem;
}*/
#text-container {
  max-height: 5rem;
}
</style>
