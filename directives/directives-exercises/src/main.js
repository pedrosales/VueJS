import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("spotlight", {
  bind(el) {
    el.style.backgroundColor = "lightgreen"
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')