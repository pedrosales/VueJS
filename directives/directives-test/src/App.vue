<template>
  <div id="app">
    <h1>Directives (Test)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <button v-customEvent:mouseover="callMe">Click me!</button>
  </div>
</template>

<script>
export default {
  directives: {
    customEvent: {
      bind(el, binding) {
        const type = binding.arg;

        el.addEventListener(type, binding.value);
      },
    },
  },
  methods: {
    callMe() {
      console.log("Hello");
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
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
