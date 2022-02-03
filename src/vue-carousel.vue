<template>
  <div class="slider">
    <transition tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide">
        <img :src="slides[current]"/>
      </div>
    </transition>
    <div class="btn btn-prev" aria-label="Előző" @click="onPreviousClicked()">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Következő" @click="onNextClicked()">
      &#10095;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    timer: Number,
  },
  data() {
    return {
      current: 0,
      length: 0,
      transitionName: 'slide-next',
      show: false,
      interval: 0,
    };
  },
  methods: {
    onPreviousClicked() {
      this.resetInterval();
      this.transitionName = 'slide-prev';
      if (this.current === 0) {
        this.current = this.length - 1;
        return;
      }

      this.current -= 1;
    },
    onNextClicked() {
      this.resetInterval();
      this.transitionName = 'slide-next';
      if (this.current === this.length - 1) {
        this.current = 0;
        return;
      }

      this.current += 1;
    },
    resetInterval() {
      const timeout = Number(this.timer) * 1000;
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.interval = +setInterval(() => {
        this.onNextClicked();
      }, timeout);
    },
  },
  async mounted() {
    this.show = true;
    this.length = this.slides.length;

    if (this.timer) {
      this.resetInterval();
    }
  },
});

</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter-from {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

.slider {
  height: 100vh;
  min-height: 20rem;
  max-height: 30rem;
  position: relative;
  overflow: hidden;
}

.slide {
  height: 100vh;
  min-height: 20rem;
  max-height: 30rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;
}

.btn {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
  color: white
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.2);
}

</style>
