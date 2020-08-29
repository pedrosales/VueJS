<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p>
      <strong>Id:</strong>
      {{ id }} {{ $route.params.id }}
    </p>
    <p>
      <strong>Full:</strong>
      {{ $route.query.full ? 'yes' : 'no' }}
    </p>
    <p>
      <strong>Language:</strong>
      {{ $route.query.language }}
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