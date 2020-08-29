import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Panel from "./components/Panel.vue";
Vue.component("Panel", Panel);

Vue.filter("money", value => {
  return `R$ ${parseFloat(value).toFixed(2)}`.replace(".", ",");
});

new Vue({
  render: h => h(App),
}).$mount('#app')