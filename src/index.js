import Vue from 'vue'

import CatCarousel from './CatCarousel'

const Components = {
  CatCarousel
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
