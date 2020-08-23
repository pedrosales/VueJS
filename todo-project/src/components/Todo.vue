<template>
  <v-card class="card" dark :class="{done: todo.done}" @click="doneUndoneTodo">
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
    doneUndoneTodo() {
      this.todo.done = !this.todo.done;
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

.done {
  background-color: seagreen !important;
}
</style>