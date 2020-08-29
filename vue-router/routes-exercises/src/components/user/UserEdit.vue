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
    <hr />
    <button primary @click="confirmExit = true">Confirm</button>
    <div id="footer">
      <h3>Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmExit: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmExit) {
      next();
    } else if (confirm("Are you shure?")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style>
#footer {
  margin-top: 2000px;
}
</style>