<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Name:">
        <b-form-input type="text" size="lg" v-model="user.name" placeholder="Name"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="email" size="lg" v-model="user.email" placeholder="E-mail"></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="save" size="lg" variant="primary">Save</b-button>
      <b-button @click="getUsers" size="lg" variant="success" class="ml-2">Get Users</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(user, id) in users" :key="id">
        <strong>Name:</strong>
        {{ user.name }}
        <br />
        <strong>E-mail:</strong>
        {{ user.email }}
        <br />
        <strong>Id:</strong>
        {{ id }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      users: [],
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    save() {
      this.$http.post("users.json", this.user).then(() => {
        this.user.name = "";
        this.user.email = "";
      });
    },
    getUsers() {
      this.$http.get("users.json").then((response) => {
        this.users = response.data;
      });
    },
  },
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
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
