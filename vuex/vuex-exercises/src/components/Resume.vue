<template>
  <Panel title="Resume" purple>
    <div class="resume">
      <span>
        Total:
        <strong>{{ total | money }}</strong>
      </span>
      <hr />
      <button>Finish!</button>
    </div>
  </Panel>
</template>

<script>
export default {
  computed: {
    total() {
      return this.products
        .map((p) => p.quantity * p.price)
        .reduce((total, current) => total + current, 0);
    },
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>