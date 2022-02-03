<script lang="ts">
import { defineComponent } from 'vue';
import VueCarousel from '@/vue-carousel.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueCarousel
  },
  data() {
    return {
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]
    }
  }
});
</script>

<template>
  <div id="app">
    <vue-carousel :slides="images" :timer="5"></vue-carousel>
  </div>
</template>
