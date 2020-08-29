<template>
  <div id="app">
    <h1>Routes with VueRouter</h1>
    <router-view name="menu" />
    <transition
      enter-active-class="animated rubberBand"
      leave-active-class="animated rollOut"
      mode="out-in"
    >
      <router-view />
    </transition>
    <router-view name="menuBottom" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
