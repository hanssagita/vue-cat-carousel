import Vue from 'vue'
const Demo = () => import ('./Demo.vue')

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
