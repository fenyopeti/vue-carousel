<template>
  <div id="app">
    <vue-carousel></vue-carousel>
  </div>
</template>

<script>
import VueCarousel from './components/VueCarousel.vue'

export default {
  name: 'app',
  components: {
    VueCarousel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
