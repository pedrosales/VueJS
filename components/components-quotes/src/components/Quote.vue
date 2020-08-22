<template>
  <div class="quote">
    <slot name="source"></slot>
    <slot name="text"></slot>
    <slot name="author"></slot>
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