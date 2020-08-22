<template>
  <div class="component">
    <h2>User Info</h2>
    <p>More Details...</p>
    <p>
      User Name:
      <strong>{{ reverseName() }}</strong>
    </p>
    <button @click="restartName">Restart Name</button>
    <button @click="resetNameFn()">Reset Name Func</button>
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
    resetNameFn: Function,
  },
  methods: {
    reverseName() {
      return this.name.split("").reverse().join("");
    },
    restartName() {
      const oldName = this.name;
      this.name = "Pedro";
      this.$emit("nameChanged", {
        oldName,
        newName: this.name,
      });
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