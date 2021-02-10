<template>
  <div>
    <Navbar />
    <div
      class="flex items-center justify-center text-6xl notfound"
    >
      <h1 class="text-black">
        404 Page not found :(
      </h1>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'PageNotFound',
  components: {
    Navbar,
    Footer,
  },
  created() {
    document.title = '404 page not found :('
  }
}
</script>

<style scoped>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
}
</style>
