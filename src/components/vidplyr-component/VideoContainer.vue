<template>
  <div
    class="
    \ player-space flex flex-col justify-end items-center
    \ col-span-4 lg:col-span-3 md:col-span-2 sm:col-span-1"
  >
    <div class="flex w-full h-12 bg-red-400 rounded rounded-b-none">
      <div class="flex items-center w-11/12 h-full pl-1 text-center">
        <div class="text-xl font-bold text-gray-900 truncate
          \ sm:whitespace-no-wrap hover:underline">
          {{ this.currentCard.vidInfo.text.title }}
        </div>
      </div>

      <div class="flex flex-row-reverse items-center
        \ w-1/12 h-full pt-1 pr-1 text-gray-900">
        <button type="button" @click="closePlayer">
          <fa-icon icon="times"
            class="text-4xl"/>
        </button>
      </div>

    </div>

    <div
      v-if="!(currentCard.active && vidLinks)"
      class="video-loading"
    >
      <LoaderAnim />
    </div>

    <VideoPlayer
      class="video-player"
      v-if="currentCard.active && vidLinks"
      :vidLinks="vidLinks"
    />
  </div>
</template>

<script>
import VideoPlayer from '@/components/vidplyr-component/VideoPlayer.vue'
import LoaderAnim from '@/components/UI/LoaderAnim.vue'
import {closePlayer} from '@/components/vidmenu-component/VideosMenu_methods.js'
import {GetIframe} from '@/api/videos_api.js'

export default {
  name: 'VideoContainer',
  data() {
    return {
      vidLinks: false,
      oldId: null,
      newId: null,
    }
  },
  props: {
    currentCard: Object,
  },
  components: {
    VideoPlayer,
    LoaderAnim,
  },
  methods: {
    closePlayer,
    changePlayer() {
      this.oldId = this.newId
      this.newId = this.currentCard.ID
      //Check if the selected card has changed
      if (this.oldId !== this.newId) {
        this.playerOpened = true
        const gi = new GetIframe()
        this.vidLinks = false
        //Wait for the player component to be destroyed and in the
        //$nextTick get the new links and rerender it
        this.$nextTick(async function() {
          try {
            this.vidLinks = await gi.getLinks()
          } catch (err) {
            console.error(err)
          }
        })
      }
    }
  },
  updated() {
    this.changePlayer()
  }
}
</script>

<style>
.player-space {
  height: 38rem;
  background-color: black;
}
@media (max-width: 693px) {
  /*.player-space {
  height: 25rem;
  }*/
}

.video-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
  width: 100%;
}
.video-player {
  /*max-height: 35rem;
  min-height: 30rem;*/
  height: 35rem;
  width: 100%;
}
</style>
