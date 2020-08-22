<template>
  <div id="app">
    {{ title }}
    <button @click="title += '#'">Change</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "VueJS data test",
    };
  },
};
</script>

<style>
#app {
  background-color: green;
  color: #fff;
}
</style>