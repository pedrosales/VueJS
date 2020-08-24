<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <hr />
    <p>{{ loggedUser }}</p>
    <p>{{ cpf | cpf | invert }}</p>
    <input type="text" :value="cpf | cpf" />
    <hr />
    <Fruits />
    <hr />
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
    <input type="text" v-model="fruit" @keydown.enter="add" />
  </div>
</template>

<script>
import Fruits from "./components/Fuits.vue";
import fruitsMixin from "@/fruitsMixin";
import userMixin from "@/userMixin";

export default {
  mixins: [fruitsMixin, userMixin],
  components: { Fruits },
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
      fruits: ["watermelon"],
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

input {
  font-size: 2.4rem;
}
</style>
