<template>
  <div
    class="flex items-center justify-center h-20 main"
  >
    <div
      v-for="i in 5"
      :key="i"
    >
      <router-link :to="'/page/' + fmtPageNum(i)">
        <Button
          :name="fmtPageNum(i)"
          class="w-12 h-12 m-2"
          :class="[fmtPageNum(i) === currentPage ? 'selected-btn' : '']"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue'
export default {
  name: 'PageNavigator',
  data() {
    return {
      currentPage: this.getPageNum()
    }
  },
  components: {
    Button,
  },
  mounted() {
  },
  methods: {
    getPageNum: function() {
      if (this.$route.name === 'MainPage') {
        return 1
      } else if (this.$route.name === 'OtherPage') {
        return Number(this.$route.params.number)
      }
    },
    fmtPageNum: function(i) {
      if (this.currentPage <= 2) {
        return (i-this.currentPage) + this.currentPage
      } else {
        return (i-1) + this.currentPage - 2
      }
    },
  },
}
</script>

<style scoped>
.selected-btn {
  @apply border-4;
  @apply rounded;
  @apply border-blue-600;
}
.main {
  /*font-size: 2vw;*/
}
</style>
