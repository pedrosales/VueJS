import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("invert", (value) => {
  return value.split("").reverse().join("")
})

Vue.mixin({
  data() {
    return {
      global: "Global var"
    }
  },
  created() {
    console.log("created - mixin global")
  }
})

new Vue({
  render: h => h(App),
  created() {
    console.log("created - vue instance")
  }
}).$mount('#app')