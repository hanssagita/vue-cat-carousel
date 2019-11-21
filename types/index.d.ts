import Vue, { PluginObject, PluginFunction } from 'vue'

export class CatCarouselPlugin implements PluginObject<{}> {
  install: PluginFunction<{}>
  static install(pVue: typeof Vue, options?: {} | undefined): void
}

export class CatCarousel extends Vue {}
