<template>
  <div class="quote">
    <slot name="source"></slot>
    <slot></slot>
    <div class="author">
      <slot name="author"></slot>
    </div>
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

.author {
  float: right;
}
</style>