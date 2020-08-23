<template>
  <div id="app">
    <h1>Todos</h1>
    <div class="progress-bar">
      <div class="progress" :style="{width: progress+'%'}">{{ progress }}%</div>
    </div>
    <new-todo />
    <todo-list v-if="todos.length" :todos="todos" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodo from "./components/NewTodo.vue";

import todoBus from "./todo-bus";

export default {
  components: { TodoList, NewTodo },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: "Procurar despachante",
          done: false,
        },
        {
          id: 2,
          name: "Comprar mala",
          done: false,
        },
        {
          id: 3,
          name: "Receber máquina nova",
          done: true,
        },
      ],
    };
  },
  methods: {
    deleteTodo(todoItem) {
      this.todos = this.todos.filter((todo) => todo.id !== todoItem.id);
    },
    addTodo(text) {
      const nameCheck = this.todos.find(
        (todo) => todo.name.toString().toLowerCase() === text.toLowerCase()
      );

      if (!nameCheck) {
        const id =
          this.todos.length > 1 ? this.todos[this.todos.length - 1].id + 1 : 1;
        const todo = { id, name: text };
        this.todos.push(todo);
      }
    },
  },
  computed: {
    progress() {
      const dones = this.todos.filter((td) => td.done).length;
      console.log(dones);
      const progress =
        this.todos.length > 0
          ? Math.round((dones / this.todos.length) * 100)
          : 0;

      return progress;
    },
  },
  created() {
    todoBus.onTodoDeleted((todoItem) => {
      this.deleteTodo(todoItem);
    });

    todoBus.onTodoAdded((text) => {
      this.addTodo(text);
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

.progress-bar {
  border: 1px solid #000;
  width: 80%;
  height: 30px;
}

.progress {
  display: flex;
  background-color: seagreen;
  height: 100%;
}
</style>
