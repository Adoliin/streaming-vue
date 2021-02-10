<template>
  <div class="flex flex-col items-center">

    <div
      id="navbar-desktop"
      class="flex items-center justify-center border bg-red-600
      \ border-t-0 border-l-0 border-r-0 border-red-800 sm:flex-col"
    >

      <div class="flex items-center justify-start w-1/4
        \ sm:justify-center sm:w-full">

        <!--Responsive hamburger button -->
        <button @click="navMobOpener"
          type="button"
          class="ml-2 focus:outline-none focus:shadow-outline
          \ absolute left-0 hidden sm:block"
        >
          <fa-icon icon="bars"/>
        </button>

        <div class="ml-2 text-3xl brand sm:ml-0">
          Stream
        </div>

        <div class="flex flex-wrap items-center justify-start mt-3 ml-4 md:mt-0 md:text-xs sm:hidden space-x-4">
          <div>
            <a href="">
              Link
            </a>
          </div>
          <div>
            <a href="">
              Link
            </a>
          </div>
          <div>
            <a href="">
              Link
            </a>
          </div>
        </div>

      </div>

      <div class="flex items-center justify-center w-2/4 sm:hidden space-y-0">
        <SearchBox placeholder="Search for a star or a video" class="w-5/6 md:w-4/6" />
        <Button class="hidden w-8 h-8 mr-1" name="" />
      </div>

      <div class="flex items-center justify-end w-1/4 sm:hidden">
        <Button class="mr-2" name="SIGN IN" />
        <Button class="mr-2" name="JOIN US" />
      </div>
    </div>
    <div id="navdesk-spacer" />

    <transition
      name="nav-anim"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <NavbarMobile id="navbar-mobile"
        v-show="navMobVisible" />
    </transition>
  </div>
</template>

<script>
import SearchBox from './UI/SearchBox'
import Button from './UI/Button'
import NavbarMobile from './NavbarMobile'

export default {
  data() {
    return {
      navMobVisible: false,
      last_scroll_pos: 0,
      new_scroll_pos: 0,
    }
  },
  name: 'Navbar',
  components: {
    SearchBox,
    Button,
    NavbarMobile,
  },
  created() {
    window.addEventListener('resize', this.navMobHandler)
    window.addEventListener('scroll', this.navMob_onScroll)
  },
  removed() {
    window.addEventListener('resize', this.navMobHandler)
    window.addEventListener('scroll', this.navMob_onScroll)
  },
  methods: {
    navMobOpener: function() {
      this.navMobVisible = !this.navMobVisible
      this.last_scroll_pos = window.scrollY
    },

    navMobHandler: function() {
      if (window.innerWidth > 639) {
        this.navMobVisible = false;
      }
    },

    navMob_onScroll: function() {
      if (this.navMobVisible === true) {
        this.new_scroll_pos = window.scrollY
        var scrollDistance = this.new_scroll_pos - this.last_scroll_pos
        if (Math.abs(scrollDistance) > 150) {
          this.navMobVisible = false
          this.last_scroll_pos = 0
          this.new_scroll_pos = 0
        }
      }
    },

  }
}

</script>

<style>
.brand {
  font-family: Georgia;
}

#navbar-desktop {
  height: 3.5rem;
  width: 100%;
  /*background-color: #931a25;*/
  position: fixed;
  top: 0;
  z-index: 2;
}
#navbar-mobile {
  position:fixed;
  top:3.5rem;
  z-index: 1;
}

#navdesk-spacer {
  height: 3.5rem;
}

#navmob-spacer{
  height: 14rem;

}
</style>
