<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <hr />
    <p>{{ cpf | cpf }}</p>
  </div>
</template>

<script>
export default {
  filters: {
    cpf(value) {
      const array = value.split("");
      array.splice(3, 0, ".");
      array.splice(7, 0, ".");
      array.splice(11, 0, "-");

      return array.join("");
    },
  },
  data() {
    return {
      cpf: "09275965676",
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
  font-size: 2.4rem;
}
</style>
