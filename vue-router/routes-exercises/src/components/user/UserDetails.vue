<template>
  <div class="user-details">
    <h3>User details</h3>
    <hr />
    <p>
      <strong>Id:</strong>
      {{ id }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>