<template>
  <div
    class="bg-red-400 grid grid-cols-12">
    <div class="col-span-9">
      <div class="ml-1 text-xl font-bold text-black truncate">
        {{concatActors()}}
      </div>
    </div>
    <div class="flex flex-row-reverse items-center col-span-3">
      <div class="inline mr-1 text-sm">
        <fa-icon icon="heart" class="text-red-600"/>
      </div>
      <div class="inline mr-1 text-xs text-gray-700">
        {{vidInfo.duration}}%
      </div>
    </div>
    <div class="flex col-span-8">
      <p class="ml-1 text-base text-gray-700 truncate">
        {{vidInfo.title}}
      </p>
    </div>
    <div class="flex flex-row-reverse items-center mr-1 col-span-4">
      <p class="inline text-xs text-right text-gray-700">
        {{formatDate(vidInfo.post_date)}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    vidInfo: Object,
  },
  methods: {

    formatDate: function(rawDate) {
      const jsDate = new Date(rawDate)
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
      return new Intl.DateTimeFormat('en-US', options).format(jsDate)
    },

    concatActors: function() {
      var actors = this.vidInfo.actors
      if (actors) {
        if (actors.length > 1) {
          var result = ''
          actors.forEach( actor => {
            result = result + ', ' + actor
          })
          return result.slice(1,result.length)
        } else {
          return actors[0]
        }
      } else {
        return 'No actors...'
      }

    }

  }
}
</script>

<style scoped>
</style>
