//import {GetIframe} from '@/api/videos_api.js'

const emptyCard = {
  ID: null,
  active: false,
  orderId: undefined,
  breakpoint: null,
  fullscreen: false,
  iframeInfo: {
    url: '',
    provider: '',
  },
  links: {
    vtt: '',
    array: [],
  },
  vidInfo: {
    categories: [],
    thumbs: {
      thumbMain: '',
      thumbPreviews: [],
    },
    text: {
      actors: [],
      title: '',
      duration: '',
      post_date: '',
    },
  }
}

const cleanCards = function(rawCards) {
  var cards = []
  rawCards.forEach((jsonCard, index) => {
    const newCard = {
      ID: index,
      active: false,
      breakpoint: null,
      fullscreen: false,
      orderId: index,
      iframeInfo: {
        url: jsonCard.iframe_url,
        provider: jsonCard.iframe_name,
      },
      links: {
        vtt: '',
        array: [],
      },
      vidInfo: {
        categories: jsonCard.categories,
        thumbs: {
          //how it should be:
          thumbMain: jsonCard.thumb_main_url,
          //thumbMain: require('@/assets/covers/card-top.jpg'),
          thumbPreviews: jsonCard.thumb_previews_urls,
        },
        text: {
          actors: jsonCard.actors,
          title: jsonCard.title,
          duration: jsonCard.duration,
          post_date: jsonCard.post_date,
        },
      }
    }
    cards.push(newCard)
  })
  return cards
}

const initCards = function() {
  /*
   *use this function to create dummy cards to test
   *and adjust UI befor implementing videosApi
   */
  var cards = []
  //breakpoint: 'sm', 'md', 'lg'or 'sd'
  var cardToPush = {}
  for (var i = 0; i < 30; i++) {
    cardToPush = {
      ID: i,
      orderId: i,
      active: false,
      breakpoint: null,
      fullscreen: false,
      vidInfo: {
        categories: ['cat', 'dogs', 'animals'],
        thumbs: {
          thumbMain: require('@/assets/covers/card-top.jpg'),
          thumbPreviews: [],
        },
        text: {
          actors: ['John Doe', 'Rita Bill', 'Foo Bar'],
          title: 'Lorem ipsum dolor sit ametes',
          duration: '16',
          post_date: 'Sep 28, 2020',
        },
      },
    }
    cards.push(cardToPush)
  }
  return cards
}

// Not exported
const indexInList = function(id, list) {
  return list.findIndex(function(elem) {
    return elem.ID == id
  })
}

// Not exported
const positionPlayer = function(bp, pressedID, refs) {
  /*
   *This is used to position the video player on top
   *of the row that the card pressed is in
   */
  var placeBeforeId = ''
  switch (bp) {
    case 'sd':
      placeBeforeId = 'vid' + String(pressedID - (pressedID % 4))
      break
    case 'lg':
      placeBeforeId = 'vid' + String(pressedID - (pressedID % 3))
      break
    case 'md':
      placeBeforeId = 'vid' + String(pressedID - (pressedID % 2))
      break
    default:
      //In this case bp='sm'
      placeBeforeId = 'vid' + pressedID
  }

  var vc = document.querySelector('#video-container')
  refs[placeBeforeId][0].before(vc)
}

// Not exported
const getBreakpoint = function(screenWidth) {
  if (screenWidth <= 639) {
    return 'sm'
  } else if (screenWidth <= 767) {
    return 'md'
  } else if (screenWidth <= 1023) {
    return 'lg'
  } else {
    return 'sd'
  }
}

const posPlayerOnResize = function() {
  /*
   *This function is should be and only be called
   *on the resize window event listener
   */

  /*
   *Setting a timeout so that the fullscreen event listener can
   *have time to set currentCard.fullscreen to active
   */
  setTimeout(() => {
    if (this.currentCard.active === true && this.currentCard.fullscreen === false) {
      var bp = getBreakpoint(window.innerWidth)
      var cardIndex = indexInList(this.currentCard.ID, this.cards)

      this.currentCard.breakpoint = bp
      this.cards[cardIndex].breakpoint = bp

      positionPlayer(
        this.currentCard.breakpoint,
        this.currentCard.orderId,
        this.$refs,
      )
    }
  }, 500)
}

const closePlayer = function() {
  /*
   *This function is meant to be called only in <VideoContainer/>
   *component becuase it is using 'this.$parent' to access its
   *parent (VideosMenu) component's data
   */
  var oldCardIndex = indexInList(this.$parent.currentCard.ID, this.$parent.cards)
  this.$parent.cards[oldCardIndex].active = false
  this.$parent.cards[oldCardIndex].breakpoint = null
  this.$parent.currentCard = emptyCard

  this.oldId = null
  this.newId = null
}

const handlePlayer = function(newCard) {
  /*
   *newCard: refer to the the 'new' pressed card
   *currentCard: refer to the old pressed card and which will no longer be
   *active
   */

  var bp = getBreakpoint(window.innerWidth)
  positionPlayer(bp, newCard.ID, this.$refs)

  newCard.breakpoint = bp
  newCard.active = true

  var newCardIndex = indexInList(newCard.ID, this.cards)
  var oldCardIndex = indexInList(this.currentCard.ID, this.cards)

  if (this.currentCard.active === false) {
    this.cards[newCardIndex] = newCard
    this.currentCard = newCard
    //this.currentCard.links = await gi.getLinks()

  } else if (this.currentCard.ID !== newCard.ID) {
    this.cards[oldCardIndex].active = false
    this.cards[oldCardIndex].breakpoint = null

    /*
     *Setting the selected card to false to wait for the
     *next rerender with $nextTick and then change it to true so the
     *v-if directive in VideoPlayer can rerender the component
     */
    this.currentCard.active = false
    this.$nextTick(function() {
      this.currentCard = newCard
      //this.currentCard.links = await gi.getLinks()
    })
    this.cards[newCardIndex] = newCard
  }
}

export {
  emptyCard,
  cleanCards,
  initCards,
  indexInList,
  posPlayerOnResize,
  closePlayer,
  handlePlayer,
}
