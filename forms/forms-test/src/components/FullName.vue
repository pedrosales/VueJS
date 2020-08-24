<template>
  <div class="full-name">
    <label for="Name">Name</label>
    <input
      type="text"
      name="Name"
      class="name"
      placeholder="Name"
      :value="value.name"
      @input="changeName"
    />
    <br />
    <label for="LastName">Last Name</label>
    <input
      type="text"
      class="last-name"
      name="LastName"
      placeholder="Last Name"
      :value="value.lastName"
      @input="changeLastName"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeName(event) {
      this.$emit("input", {
        name: event.target.value,
        lastName: this.value.lastName,
      });
    },
    changeLastName(event) {
      this.$emit("input", {
        name: this.value.name,
        lastName: event.target.value,
      });
    },
  },
};
</script>

<style scoped>
.full-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 10px;
  font-size: 1.4rem;
}

label {
  padding-bottom: 10px;
}

input {
  flex: 1;
  font-size: 1.4rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  align-self: stretch;
}
</style>