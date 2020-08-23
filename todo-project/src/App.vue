<template>
  <div id="app">
    <h1>Todos</h1>
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

import todoBus from "./todo-bus";

export default {
  components: { TodoList },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: "Procurar despachante",
        },
        {
          id: 2,
          name: "Comprar mala",
        },
        {
          id: 3,
          name: "Receber máquina nova",
        },
      ],
    };
  },
  methods: {
    deleteTodo(todoItem) {
      this.todos = this.todos.filter((todo) => todo.id !== todoItem.id);
    },
  },
  created() {
    todoBus.onTodoDeleted((todoItem) => {
      this.deleteTodo(todoItem);
    });
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
