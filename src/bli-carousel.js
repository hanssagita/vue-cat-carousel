/* eslint-disable no-console */
export default {
  name: 'bli-carousel',
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
