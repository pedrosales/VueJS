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
      todoBus.markDoneUndone({ name: this.todo.name, done: !this.todo.done });
    },
  },
};
</script>

<style>
.card {
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 350px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-actions {
  float: right;
}

.card-title {
  margin-top: 30px;
  color: #aaa;
}

.done {
  border-left: 12px solid green !important;
  background-color: seagreen !important;
  text-decoration: line-through !important;
}
</style>