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
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("cart", {
    total: "totalValue",
  }),
  // computed: mapGetters(["totalValue"]),
  // computed: {
  //   total() {
  //     return this.$store.getters.totalValue;
  //   },
  // },
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