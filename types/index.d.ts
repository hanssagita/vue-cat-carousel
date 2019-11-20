import Vue, { PluginObject, PluginFunction } from 'vue'

export class SliderPlugin implements PluginObject<{}> {
  install: PluginFunction<{}>
  static install(pVue: typeof Vue, options?: {} | undefined): void
}

export class CatCarousel extends Vue {}
