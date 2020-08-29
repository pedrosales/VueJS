<template>
  <div class="user-details">
    <h3>User details</h3>
    <hr />
    <p>
      <strong>Id:</strong>
      {{ id }}
    </p>
    <router-link
      tag="button"
      primary
      :to="{ name: 'userEdit', params: { id }, query: { full: true, language: 'en' }, hash: '#footer' }"
    >Edit</router-link>
    <!-- <router-link tag="button" primary :to="`/users/${id}/edit`">Edit</router-link> -->
    <!-- <router-link tag="button" primary :to="`/users/${$route.params.id}/edit`">Edit</router-link> -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("before inside component");
    // next((vm) => {
    //   console.log(vm.id);
    // });
    const auth = true;
    auth ? next() : next(false);
  },
};
</script>

<style>
</style>