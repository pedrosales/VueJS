<template>
  <div id="app">
    <h1>Register your claim</h1>
    <div class="content">
      <form class="panel">
        <div class="header">Form</div>
        <Label name="E-mail">
          <input type="email" v-model.lazy.trim="user.email" />
        </Label>
        <Label name="Password">
          <input type="password" v-model="user.password" />
        </Label>
        <Label name="Age">
          <input type="number" v-model.number="user.age" />
        </Label>
        <Label name="Message">
          <textarea name cols="30" rows="5" v-model="message"></textarea>
        </Label>
        <Label name="Problem specs">
          <span class="mr-4">
            <input type="checkbox" value="reproducible" v-model="features" /> Reproducible
          </span>
          <span>
            <input type="checkbox" value="intermitent" v-model="features" /> Intermitent
          </span>
        </Label>
        <Label name="Witch Product">
          <span class="mr-4">
            <input type="radio" value="web" v-model="product" /> Web
          </span>
          <span class="mr-4">
            <input type="radio" value="mobile" v-model="product" /> Mobile
          </span>
          <span>
            <input type="radio" value="other" v-model="product" /> Other
          </span>
        </Label>
        <Label name="Priority">
          <select v-model="priority">
            <option
              v-for="priority in priorities"
              :value="priority.id"
              :key="priority.id"
            >{{ priority.id }} - {{ priority.name }}</option>
          </select>
        </Label>
        <Label name="First claim?">
          <SwitchSelector :value="firstClaim" @input="firstClaim = $event" />
        </Label>
        <hr />
        <button>Send</button>
      </form>
      <div class="panel">
        <div class="header">Result</div>
        <Label name="E-mail">
          <span>{{user.email}}</span>
        </Label>
        <Label name="Password">
          <span>{{ user.password }}</span>
        </Label>
        <Label name="Age">
          <span>{{ user.age }}</span>
        </Label>
        <Label name="Message">
          <span style="white-space: pre;">{{ message }}</span>
        </Label>
        <Label name="Choice the options">
          <span>
            <ul>
              <li v-for="f in features" :key="f">{{ f }}</li>
            </ul>
          </span>
        </Label>
        <Label name="Wich product?">
          <span>{{ product }}</span>
        </Label>
        <Label name="Priority">
          <span>{{ priority }}</span>
        </Label>
        <Label name="First claim?">
          <span>{{ firstClaim }}</span>
        </Label>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchSelector from "./components/SwitchSelector.vue";
import Label from "./components/Label.vue";

export default {
  name: "app",
  components: { SwitchSelector, Label },
  data() {
    return {
      message: "",
      features: [],
      product: "web",
      priority: 1,
      priorities: [
        { id: 1, name: "Low" },
        { id: 2, name: "Mid" },
        { id: 3, name: "High" },
      ],
      user: {
        email: "",
        password: "",
        age: 0,
      },
      firstClaim: true,
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
