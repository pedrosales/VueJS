<template>
  <Panel title="Parameters" red>
    <div class="parameters">
      <span>
        <strong>Default Quantity:</strong>
        <input type="number" v-model="quantity" />
      </span>
      <span>
        <strong>Default Price:</strong>
        <input type="number" v-model="price" />
      </span>
    </div>
  </Panel>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
      price: 0,
    };
  },
};
</script>

<style>
.parameters {
  display: flex;
  justify-content: space-around;
}
</style>