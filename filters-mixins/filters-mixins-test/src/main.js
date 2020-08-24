import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("countChar", (value) => {
  // const words = value.split(" ");
  // let wordsCount = [];

  // words.forEach(word => {
  //   wordsCount.push(`${word} (${word.length})`);
  // })

  // return wordsCount.join(" ");

  return value.split(" ").map(word => `${word} (${word.length})`).join(" ");
})

new Vue({
  render: h => h(App),
}).$mount('#app')