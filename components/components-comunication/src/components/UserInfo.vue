<template>
  <div class="component">
    <h2>User Info</h2>
    <p>More Details...</p>
    <p>
      User Name:
      <strong>{{ reverseName() }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      // required: true,
      default: "Anônimo",
      // default: function () {
      //   return Array(10).fill(0).join(",");
      // },
    },
  },
  methods: {
    reverseName() {
      return this.name.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>