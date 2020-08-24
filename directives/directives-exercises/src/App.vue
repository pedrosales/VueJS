<template>
  <div id="app">
    <h1>Directives</h1>
    <hr />
    <p v-text="'Using directives'"></p>
    <p v-html="'Using directive <strong>v-html</strong>'"></p>
    <hr />
    <p v-spotlight:background.delay="'lightblue'">Custom directive</p>
    <p v-spotlight.delay="color">Custom directive</p>
    <hr />
    <p v-localspotlight:background.delay.switch="'red'">Local custom directive</p>
    <p v-localspotlight.delay="color">Local custom directive</p>
    <!-- <p v-test:args.modifier1.modifier2.modifier3="value"></p> -->
  </div>
</template>

<script>
export default {
  name: "App",
  directives: {
    localspotlight: {
      bind(el, binding) {
        const applyColor = (color) => {
          if (binding.arg === "background") {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        };

        let delay = 0;

        if (binding.modifiers["delay"]) delay = 3000;

        const color1 = binding.value;
        const color2 = "purple";
        let currentColor = color1;

        setTimeout(() => {
          if (binding.modifiers["switch"]) {
            setInterval(() => {
              currentColor = currentColor === color1 ? color2 : color1;
              applyColor(currentColor);
            }, 1000);
          } else {
            applyColor(binding.value);
          }
        }, delay);
      },
    },
  },
  data() {
    return {
      color: "blue",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
