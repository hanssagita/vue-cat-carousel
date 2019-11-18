/* eslint-disable no-console */
import routes from "./routes";

export default {
  name: "Demo",
  data () {
    return {
      products: routes
    }
  },
  components: {
    CatCarousel: () => import('../CatCarousel'),
    CarouselItem: () => import('./CarouselItem')
  }
}
