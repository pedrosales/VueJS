<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
    <input type="text" v-model="fruit" @keydown.enter="add" />
  </div>
</template>

<script>
import fruitsMixin from "@/fruitsMixin";
import userMixin from "@/userMixin";

export default {
  mixins: [fruitsMixin, userMixin],
  created() {
    console.log("fruits.vue");
  },
};
</script>

<style>
</style>