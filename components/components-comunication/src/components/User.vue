<template>
  <div class="container">
    <h1>User Component</h1>
    <p>This is an cool component!!</p>
    <p>
      Name:
      <strong>{{ name }}</strong>
    </p>
    <p>
      Age:
      <strong>{{ age }}</strong>
    </p>
    <button @click="changeName">Change Name</button>
    <hr />
    <div class="components">
      <app-user-info :name="name" :age="age" @nameChanged="name = $event" :resetNameFn="resetName" />
      <app-edit-user :age="age" />
    </div>
  </div>
</template>

<script>
import AppUserInfo from "./UserInfo";
import AppEditUser from "./EditUser";

export default {
  components: {
    AppUserInfo,
    AppEditUser,
  },
  data() {
    return {
      name: "Pedro",
      age: 31,
    };
  },
  methods: {
    changeName() {
      this.name = "Ana";
    },
    resetName() {
      this.name = "Pedro";
    },
    changeAge() {
      this.age = 33;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.components {
  display: flex;
}

.components > * {
  margin: 10px;
}
</style>