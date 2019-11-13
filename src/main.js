import Vue from 'vue'
import BliCarousel from './BliCarousel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(BliCarousel),
}).$mount('#app')
