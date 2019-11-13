/* eslint-disable no-console */
import routes from './routes'

export default {
  name: 'bli-carousel',
  data () {
    return {
      products: routes
    }
  },
  components: {
    CarouselItem: () => import('./CarouselItem')
  },
  methods: {
    prev () {
      console.log('prev')
    },
    next () {
      console.log('next')
    }
  }
}
