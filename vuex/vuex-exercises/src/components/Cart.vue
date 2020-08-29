<template>
  <Panel title="Cart" blue :notification="products.length">
    <div class="cart">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.name">
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="total">
        <span>
          Total:
          <strong>{{ total | money}}</strong>
        </span>
      </div>
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
        { id: 1, name: "Product 1", quantity: 7, price: 14.55 },
        { id: 2, name: "Product 2", quantity: 10, price: 22.99 },
        { id: 3, name: "Product 3", quantity: 1, price: 43.18 },
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

hr {
  margin-top: 30px;
}

.total {
  display: flex;
  justify-content: flex-end;
}
</style>