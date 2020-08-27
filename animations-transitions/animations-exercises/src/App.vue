<template>
  <div id="app" class="container-fluid">
    <h1>Animations</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="show = !show">Show message</b-button>

    <!-- <transition name="fade" appear>
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>
    <hr />
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="show">{{ message }}</b-alert>
    </transition>
    <hr />
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
    >
      <b-alert variant="info" show v-show="show">{{ message }}</b-alert>
    </transition>-->
    <hr />
    <b-select v-model="animationType" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="animationType" mode="out-in">
      <b-alert variant="info" show v-if="show" key="info">{{ message }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ message }}</b-alert>
    </transition>

    <hr />
    <button @click="show2 = !show2">Show</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="show2" class="box"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "A info alert to the user!",
      show: false,
      animationType: "fade",
      show2: true,
      baseWidth: 0,
    };
  },
  methods: {
    animate(el, done, negative) {
      let round = 1;
      const interval = setInterval(() => {
        const newWidth = this.baseWidth + (negative ? -round * 10 : round * 10);
        el.style.width = `${newWidth}px`;

        if (round > 30) {
          clearInterval(interval);
          done();
        }

        round++;
      }, 20);
    },
    beforeEnter(el) {
      this.baseWidth = 0;
      el.style.width = `${this.baseWidth}px`;
    },
    enter(el, done) {
      this.animate(el, done, false);
    },
    afterEnter(el) {
      console.log("after enter", el);
    },
    enterCancelled(el) {
      console.log("enter cancelled", el);
    },
    beforeLeave(el) {
      this.baseWidth = 300;
      el.style.width = `${this.baseWidth}px`;
    },
    leave(el, done) {
      this.animate(el, done, true);
    },
    afterLeave(el) {
      console.log("after leave", el);
    },
    leaveCancelled(el) {
      console.log("leave cancelled", el);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
/* .fade-enter-to {
  opacity: 1;
} */

/* .fade-leave {
  opacity: 1;
} */

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.box {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
