<template>
  <div id="app">
    <h1>Directives</h1>
    <hr />
    <p v-text="'Using directives'"></p>
    <p v-html="'Using directive <strong>v-html</strong>'"></p>
    <hr />
    <p v-spotlight:background.delay="'lightblue'">Custom directive</p>
    <p v-spotlight.delay="color">Custom directive</p>

    <!-- <p v-test:args.modifier1.modifier2.modifier3="value"></p> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: "blue",
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
  font-size: 2.5rem;
}
</style>
