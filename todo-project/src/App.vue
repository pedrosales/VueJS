<template>
  <div id="app">
    <h1>Todos</h1>
    <TodoProgress :progress="progress" />
    <new-todo />
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodo from "./components/NewTodo.vue";
import TodoProgress from "./components/TodoProgress.vue";

import todoBus from "./todo-bus";

export default {
  components: { TodoList, NewTodo, TodoProgress },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    deleteTodo(todoItem) {
      this.todos = this.todos.filter(
        (todo) => todo.name.toLowerCase() !== todoItem.name.toLowerCase()
      );
    },
    addTodo(text) {
      const nameCheck = this.todos.find(
        (todo) => todo.name.toString().toLowerCase() === text.toLowerCase()
      );

      if (!nameCheck) {
        const todo = { name: text, done: false };
        this.todos.push(todo);
      }
    },
    markUnmarkDone(todoItem) {
      const todo = this.todos.filter((t) => t.name === todoItem.name)[0];
      if (todo) todo.done = todoItem.done;
    },
  },
  computed: {
    progress() {
      const dones = this.todos.filter((td) => td.done).length;
      const progress =
        this.todos.length > 0
          ? Math.round((dones / this.todos.length) * 100)
          : 0;

      return progress;
    },
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
    },
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];

    todoBus.onTodoDeleted((todoItem) => {
      this.deleteTodo(todoItem);
    });

    todoBus.onTodoAdded((text) => {
      this.addTodo(text);
    });

    todoBus.onDoneUndoneChecked((todoItem) => {
      this.markUnmarkDone(todoItem);
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
  color: #ddd;
}
</style>
