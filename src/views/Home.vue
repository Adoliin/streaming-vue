<template>
  <div id="home">
    <Navbar />
    <CoverImage />
    <!-- <PageNavigator
      :key="routePath + 'pn-up'"
    /> -->
    <VideosMenu
      :key="routePath + 'vm'"
    />
    <PageNavigator
      :key="routePath + 'pn-down'"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import CoverImage from '@/components/CoverImage'
import VideosMenu from '@/components/vidmenu-component/VideosMenu'
import PageNavigator from '@/components/PageNavigator.vue'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data() {
    return {
      routePath: '',
    }
  },
  components: {
    Navbar,
    CoverImage,
    VideosMenu,
    PageNavigator,
    Footer,
  },

  beforeRouteEnter(to, from, next) {
    if (from.path === '/') {
      if (to.path === '/page/1') {
        next()
      } else {
        next(vm => {
          vm.routePath = to.path
        })
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // Change key to rerender VideosMenu
    this.routePath = to.path
    next()
  },
}

</script>

<style scoped>
</style>
