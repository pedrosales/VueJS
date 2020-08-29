<template>
  <Panel title="Store" green>
    <div class="store">
      <span>Add to cart</span>
      <input type="number" v-model.number="quantity" />
      <span>
        itens
        <strong>R$</strong>
      </span>
      <input type="number" v-model.number="price" />
      <button @click="add">Now!</button>
    </div>
  </Panel>
</template>

<script>
export default {
  data() {
    return {
      sequence: 1,
      quantity: 1,
      price: 9.99,
    };
  },
  methods: {
    add() {
      const product = {
        id: this.sequence,
        name: `Product ${this.sequence}`,
        quantity: this.quantity,
        price: this.price,
      };
      this.sequence++;

      this.$store.state.products.push(product);
    },
  },
};
</script>

<style>
.store {
  display: flex;
  justify-content: center;
}

.store > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>