import VueCarousel from "./components/VueCarousel.vue";

const VueCarouselSimple = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("vue-carousel", VueCarousel);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueCarouselSimple);
}

export default VueCarouselSimple;