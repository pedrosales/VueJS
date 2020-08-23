import Vue from "vue";

export default new Vue({
    methods: {
        deleteTodo(todoItem) {
            this.$emit("todoDeleted", todoItem);
        },
        onTodoDeleted(callback) {
            this.$on("todoDeleted", callback);
        },
        addTodo(text) {
            this.$emit("todoAdded", text);
        },
        onTodoAdded(callback) {
            this.$on("todoAdded", callback);
        }
    }
});