<template>
  <div class="component">
    <h2>User Info</h2>
    <p>More Details...</p>
    <p>
      User Name:
      <strong>{{ name }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>