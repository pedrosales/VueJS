<template>
  <div class="quote">
    <p>{{ quote.text }}</p>
  </div>
</template>

<script>
export default {
  props: { quote: Object },
};
</script>

<style scoped>
.quote {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>