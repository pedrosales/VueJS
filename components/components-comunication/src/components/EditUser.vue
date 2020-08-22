<template>
  <div class="component">
    <h2>Edit User Information</h2>
    <p>edit informations</p>
    <p>
      Age:
      <strong>{{ age }}</strong>
    </p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import bus from "@/bus";

export default {
  props: {
    age: Number,
    changeAgeFn: Function,
  },
  methods: {
    editAge() {
      this.age += 1;
      bus.$emit("ageChanged", this.age);
    },
  },
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>