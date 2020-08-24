<template>
  <div id="app" class="container-fluid">
    <h1>Animations</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="show = !show">Show message</b-button>

    <transition name="fade">
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "A info alert to the user!",
      show: false,
    };
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
</style>
