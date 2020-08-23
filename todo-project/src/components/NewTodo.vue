<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            @keydown.prevent.enter="addTodo"
            type="text"
            class="text-field"
            label="new task"
            clearable
            outlined
            v-model="text"
          >
            <template v-if="text" v-slot:append>
              <v-icon @click="addTodo">mdi-plus-box-outline</v-icon>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import todoBus from "@/todo-bus";

export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addTodo() {
      todoBus.addTodo(this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.text-field {
  color: #aaa;
  width: 400px;
}
</style>