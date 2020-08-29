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
      :to="{ name: 'userEdit', params: { id }, query: { full: true, language: 'en' } }"
    >Edit</router-link>
    <!-- <router-link tag="button" primary :to="`/users/${id}/edit`">Edit</router-link> -->
    <!-- <router-link tag="button" primary :to="`/users/${$route.params.id}/edit`">Edit</router-link> -->
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>