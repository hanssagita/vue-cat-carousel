import CatCarousel from './CatCarousel.vue'

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install(Vue) {
    Vue.component(CatCarousel.name, CatCarousel)
  },
}

export { CatCarousel }
export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
