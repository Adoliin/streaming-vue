<template>
  <div>
    <div
      class="flex items-center justify-center mt-4"
      v-if="cards.length === 0"
    >
      <LoaderAnim/>
    </div>
    <div id="main" class="flex justify-center w-full h-full my-4">

      <div class="w-full mx-2 grid gap-4
        \ grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
        <!-- <transition
          name="nav-anim"
          enter-active-class="animate__animated animate__zoomIn"
        >
        </transition> -->
        <VideoContainer
          v-show="currentCard.active"
          :currentCard="currentCard"
          id="video-container"
        />
        <div
          v-for="(card, index) in cards"
          :key="index"
          :ref="'vid'+card.orderId"
          @click="handlePlayer(card)"
          :class="[card.active ? 'selected-card' : '']"
        >
          <VideoCard
            :vidInfo="card.vidInfo"
          />
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import VideoCard from '@/components/card-component/VideoCard'
import VideoContainer from '@/components/vidplyr-component/VideoContainer'
import {VideosApi} from '@/api/videos_api.js'
import LoaderAnim from '@/components/UI/LoaderAnim.vue'

import {
  initCards,
  handlePlayer,
  emptyCard,
  closePlayer,
  posPlayerOnResize,
  cleanCards,
} from '@/components/vidmenu-component/VideosMenu_methods.js'

export default {
  name: 'VideosMenu',
  data() {
    return {
      pageInfo : {
        name: '',
        number: '',
        actorName: '',
      },
      cards: [],
      rawCards: [],
      currentCard: emptyCard,
      cantGetVids_error: undefined,
    }
  },
  components: {
    VideoCard,
    VideoContainer,
    LoaderAnim,
  },
  methods: {
    initCards,
    handlePlayer,
    closePlayer,
    posPlayerOnResize,
    cleanCards,

    getRouteInfo: function() {
      this.pageInfo.name = this.$route.name
      if (this.pageName === 'MainPage') {
        this.pageInfo.number = 1
      } else if (this.pageInfo.name === 'OtherPage') {
        this.pageInfo.number = this.$route.params.number
      } else if (this.pageInfo.name === 'ActorPage') {
        this.pageInfo.number = 1
        this.pageInfo.actorName = this.$route.params.name
        if (this.$route.params.number) {
          this.pageInfo.number = this.$route.params.number
        }
      }
    },

    getPlaceholderCards() {
      this.cards = this.initCards()
    },

    getCards: async function() {
      //get videos through api
      try {
        if (this.pageInfo.name === 'ActorPage') {
          this.jsonCards= await VideosApi.getVideos_byActor(
            this.pageInfo.number,
            this.pageInfo.actorName,
          )
        } else {
          this.jsonCards= await VideosApi.getVideos(
            this.pageInfo.number
          )
        }
        this.cards = this.cleanCards(this.jsonCards)
        /*this.cards = this.initCards()*/
      } catch(err) {
        this.cantGetVids_error = err
      }
    },

  },

  mounted() {
    this.getRouteInfo()
    /*this.getCards()*/
    this.getPlaceholderCards()
  },
  created() {
    window.addEventListener('resize', this.posPlayerOnResize)
    window.addEventListener('fullscreenchange', () => {
      this.currentCard.fullscreen = ! this.currentCard.fullscreen
    })
  },
}
</script>

<style scoped>
.selected-card{
  @apply border-4;
  @apply rounded;
  @apply border-blue-600;
}
</style>
