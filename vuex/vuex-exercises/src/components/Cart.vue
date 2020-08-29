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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      total: "totalValue",
    }),
    // total() {
    //   return this.$store.getters.totalValue;
    // },
    products() {
      return this.$store.state.cart.products;
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

hr {
  margin-top: 30px;
}

.total {
  display: flex;
  justify-content: flex-end;
}
</style>