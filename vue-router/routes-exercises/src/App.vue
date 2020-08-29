<template>
  <div id="app">
    <h1>Routes with VueRouter</h1>
    <router-view />
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
