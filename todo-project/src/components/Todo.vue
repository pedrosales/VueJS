<template>
  <v-card class="card" dark>
    <v-card-actions class="card-actions">
      <v-icon @click="deleteTodo">mdi-delete</v-icon>
    </v-card-actions>
    <v-card-title class="card-title">{{ todo.name }}</v-card-title>
  </v-card>
</template>

<script>
import todoBus from "@/todo-bus";

export default {
  props: { todo: Object },
  methods: {
    deleteTodo() {
      todoBus.deleteTodo(this.todo);
    },
  },
};
</script>

<style>
.card {
  margin-left: 5px;
  margin-right: 10px;
}

.card-actions {
  float: right;
}

.card-title {
  margin-top: 30px;
}
</style>