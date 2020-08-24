<template>
  <div id="app">
    <h1>Directives</h1>
    <hr />
    <p v-text="'Using directives'"></p>
    <p v-html="'Using directive <strong>v-html</strong>'"></p>
    <hr />
    <p v-spotlight>Custom directive</p>
  </div>
</template>

<script>
export default {
  name: "App",
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
