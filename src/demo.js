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
    HCarousel: () => import('./HCarousel'),
    CarouselItem: () => import('./CarouselItem')
  }
}
