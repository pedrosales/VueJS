<template>
  <div class="user">
    <h2>Users</h2>
    <hr />
    <p>
      <strong>Id:</strong>
      {{ id }}
    </p>
    <button success @click="backIndex">Return</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     $route(to) {
  //       this.id = to.params.id;
  //     },
  //   },
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