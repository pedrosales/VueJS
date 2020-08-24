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
    <p
      v-localspotlight:background.delay.switch="{ color1: 'green', color2: 'red', delay: 2000, interval: 200 }"
    >Local custom directive</p>
    <p v-localspotlight.delay="{ color1: 'yellow', delay: 5000 }">Local custom directive</p>
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

        if (binding.modifiers["delay"]) delay = binding.value.delay;

        const color1 = binding.value.color1;
        const color2 = binding.value.color2;
        let currentColor = color1;

        setTimeout(() => {
          if (binding.modifiers["switch"]) {
            setInterval(() => {
              currentColor = currentColor === color1 ? color2 : color1;
              applyColor(currentColor);
            }, binding.value.interval);
          } else {
            applyColor(binding.value.color1);
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
