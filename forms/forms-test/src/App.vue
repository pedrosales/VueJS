<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="content">
      <form class="panel" v-if="!submited">
        <div class="header">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->
        <!-- <Label name="Name">
          <input type="text" v-model="user.name" />
        </Label>
        <Label name="Last Name">
          <input type="text" v-model="user.lastName" />
        </Label>-->
        <FullName v-model="user.fullName" />
        <Label name="E-mail">
          <input type="email" v-model="user.email" />
        </Label>
        <Label name="Password">
          <input type="password" v-model="user.password" />
        </Label>
        <Label name="Save?">
          <SwitchSelector :value="saveForm" @input="saveForm = $event" />
        </Label>
        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <hr />
        <button @click.prevent="submit">Save</button>
      </form>
      <div class="panel" v-else>
        <div class="header">Resultado</div>
        <Label name="Name">
          <span>{{ user.fullName.name }}</span>
        </Label>
        <Label name="Last Name">
          <span>{{ user.fullName.lastName }}</span>
        </Label>
        <Label name="E-mail">
          <span>{{ user.email }}</span>
        </Label>
        <Label name="Password">
          <span>{{ user.password }}</span>
        </Label>
        <Label name="Save?">
          <span>{{ saveForm }}</span>
        </Label>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "./components/Label.vue";
import SwitchSelector from "./components/SwitchSelector.vue";
import FullName from "./components/FullName.vue";

export default {
  name: "App",
  components: { Label, SwitchSelector, FullName },
  methods: {
    submit() {
      this.submited = true;
    },
  },
  data() {
    return {
      user: {
        // name: "",
        // lastName: "",
        fullName: {
          name: "",
          lastName: "",
        },
        email: "",
        password: "",
      },
      saveForm: false,
      submited: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
}

.panel {
  flex: 1;
  background-color: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.panel .header {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
