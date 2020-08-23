<template>
  <div class="todos">
    <template v-if="todos.length">
      <todo v-for="todo in todos" :key="todo.name" :todo="todo" />
    </template>
    <p v-else class="no-todos">Sua vida está em dia!! =)</p>
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
  justify-content: center;
  flex-wrap: wrap;
  color: #aaa;
}

.no-todos {
  color: #aaa;
  font-size: 1.2rem;
}
</style>