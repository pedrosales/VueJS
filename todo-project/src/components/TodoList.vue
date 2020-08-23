<template>
  <div class="card">
    <v-card class="card-body" v-for="todo in todos" :key="todo.id" dark>
      <v-card-actions class="card-actions">
        <v-icon @click="deleteTodo(todo)">mdi-delete</v-icon>
      </v-card-actions>
      <v-card-title class="card-title">{{ todo.name }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import todoBus from "@/todo-bus";

export default {
  props: { todos: Array },
  methods: {
    deleteTodo(todoItem) {
      todoBus.deleteTodo(todoItem);
    },
  },
};
</script>

<style>
.card {
  display: flex;
  height: 100px;
}

.card-body {
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