<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = 'Streaming Vue'
  }
}
</script>

<style>
body {
  /*background-color: #282828;*/
 background-color: #9CC0E7;
}

* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica;
  font-size: 100%;
  color: white;
}
</style>
