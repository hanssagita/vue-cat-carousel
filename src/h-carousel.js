/* eslint-disable no-console */
const PERSLIDE = 5

export default {
  name: 'h-carousel',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      slideCount: 0,
      screenWidth: 0,
      itemWidth: 0,
      wrapper: {
        translateX: 0
      },
      track:0
    }
  },
  mounted () {
    this.slideCount = this.items.length
    this.screenWidth = window.innerWidth
    this.itemWidth = this.carouselItem[0].clientWidth
  },
  components: {
    CarouselItem: () => import('./CarouselItem')
  },
  computed: {
    carouselContent () {
      return this.$refs.carouselContent
    },
    carouselItem () {
      return this.$refs.carouselItem
    },
    carouselWrapper () {
      return this.$refs.carouselWrapper
    },
    wrapperStyles () {
      return {transform: `translateX(${this.wrapper.translateX}px)`}
    }
  },
  methods: {
    prev () {
      if(this.track === 0) return
      this.track--
      this.wrapper = {
        ...this.wrapper,
        translateX: this.wrapper.translateX + this.itemWidth
      }
    },
    next () {
      if(this.track === this.slideCount - PERSLIDE) return
      this.track ++
      this.wrapper = {
        ...this.wrapper,
        translateX: this.wrapper.translateX + -1 * this.itemWidth
      }
    }
  }
}
