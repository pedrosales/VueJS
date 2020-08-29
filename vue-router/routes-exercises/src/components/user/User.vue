<template>
  <div class="user">
    <h2>Users</h2>
    <hr />
    <button success @click="backIndex">Return</button>
  </div>
</template>

<script>
export default {
  methods: {
    backIndex() {
      //   this.$router.push("/");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>