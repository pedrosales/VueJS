import Vue from "vue";

export default new Vue({
    methods: {
        deleteTodo(todoItem) {
            this.$emit("deletedTodo", todoItem);
        },
        onTodoDeleted(callback) {
            this.$on("deletedTodo", callback);
        }
    }
});