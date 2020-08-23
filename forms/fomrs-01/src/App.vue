<template>
  <div id="app">
    <h1>Register you claim</h1>
    <div class="content">
      <form class="panel">
        <div class="header">Form</div>
        <Label name="E-mail">
          <input type="text" />
        </Label>
        <Label name="Password">
          <input type="password" />
        </Label>
        <Label name="Age">
          <input type="number" />
        </Label>
        <Label name="Message">
          <textarea name cols="30" rows="5"></textarea>
        </Label>
        <Label name="Problem specs">
          <span class="mr-4">
            <input type="checkbox" value="reproducible" /> Reproducible
          </span>
          <span>
            <input type="checkbox" value="intermitent" /> Intermitent
          </span>
        </Label>
        <Label name="Witch Product">
          <span class="mr-4">
            <input type="radio" /> Web
          </span>
          <span class="mr-4">
            <input type="radio" /> Mobile
          </span>
          <span>
            <input type="radio" /> Other
          </span>
        </Label>
        <Label name="Priority">
          <select name id>
            <option></option>
          </select>
        </Label>
        <Label name="First claim?">
          <SwitchSelector />
        </Label>
        <hr />
        <button>Send</button>
      </form>
      <div class="panel">
        <div class="header">Result</div>
        <Label name="E-mail">
          <span>???</span>
        </Label>
        <Label name="Password">
          <span>???</span>
        </Label>
        <Label name="Age">
          <span>???</span>
        </Label>
        <Label name="Message">
          <span>???</span>
        </Label>
        <Label name="Choice the options">
          <span>???</span>
        </Label>
        <Label name="Wich product?">
          <span>???</span>
        </Label>
        <Label name="Priority">
          <span>???</span>
        </Label>
        <Label name="First claim?">
          <span>???</span>
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
