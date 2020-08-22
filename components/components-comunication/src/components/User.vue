<template>
  <div class="container">
    <h1>User Component</h1>
    <p>This is an cool component!!</p>
    <p>
      Name:
      <strong>{{ name }}</strong>
    </p>
    <button @click="changeName">Change Name</button>
    <hr />
    <div class="components">
      <app-user-info :name="name" @nameChanged="name = $event.newName" :resetNameFn="resetName" />
      <app-edit-user />
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
    };
  },
  methods: {
    changeName() {
      this.name = "Ana";
    },
    resetName() {
      this.name = "Pedro";
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