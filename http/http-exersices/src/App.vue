<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  // created() {
  //   this.$http
  //     .post("usuarios.json", {
  //       name: "Pedro",
  //       email: "pedro@qontecnologia.com",
  //     })
  //     .then((response) => console.log(response));
  // },
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

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
