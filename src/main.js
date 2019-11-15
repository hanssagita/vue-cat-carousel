import Vue from 'vue'
import HCarousel from './HCarousel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(HCarousel),
}).$mount('#app')
