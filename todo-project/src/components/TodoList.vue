<template>
  <div class="todos">
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  props: { todos: Array },
  components: { Todo },
};
</script>

<style>
.todos {
  display: flex;
  margin: 10px;
}
</style>