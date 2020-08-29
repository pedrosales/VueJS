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
  },
  data() {
    return {
      products: [
        { name: "Product 1", quantity: 7, price: 14.55 },
        { name: "Product 2", quantity: 10, price: 22.99 },
        { name: "Product 3", quantity: 1, price: 43.18 },
      ],
    };
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