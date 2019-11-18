import Vue from 'vue'
const Demo = () => import ('./demo/Demo.vue')

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
