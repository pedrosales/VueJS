<template>
  <div id="app">
    <h1>Filters & Mixins (Test)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <hr />
    <p>{{ text | changeWhiteSpace }}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
    valor na string final-->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <hr />
    <p>{{ countCharacters | countChar }}</p>
    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <hr />
    <p>{{ whiteSpaces }}</p>
    <p>{{ countChar }}</p>
    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import computedMixins from "@/computedMixins";

export default {
  mixins: [computedMixins],
  data() {
    return {
      text: "value to change the whitespaces",
    };
  },
  filters: {
    changeWhiteSpace(value) {
      const textWithoutWhiteSpce = value.split(" ").join(",");
      // const regex = valor.repace(/\s/g, ",");
      return textWithoutWhiteSpce;
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
  font-size: 2.5rem;
}
</style>
