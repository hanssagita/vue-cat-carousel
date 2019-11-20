const PERSLIDE = 5

export default {
  name: 'CatCarousel',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      itemWidth: 0,
      wrapper: {
        translateX: 0
      },
      itemsOnLeft: 0,
      itemsOnRight: 0
    }
  },
  mounted () {
    this.itemsOnRight = this.items.length - PERSLIDE
    this.itemWidth = this.carouselItem.length > 0 && this.carouselItem[0].clientWidth
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
      if (this.itemsOnLeft === 0) return
      const slideCount = this.countSlide(this.itemsOnLeft)
      this.wrapper = Object.assign({}, this.wrapper,{
        translateX: this.wrapper.translateX + slideCount * this.itemWidth
      })
      this.itemsOnLeft -= slideCount
      this.itemsOnRight += slideCount
    },
    next () {
      if (this.itemsOnRight === this.items.length) return
      const slideCount = this.countSlide(this.itemsOnRight)
      this.wrapper = Object.assign({}, this.wrapper, {
        translateX: this.wrapper.translateX - slideCount * this.itemWidth
      })
      this.itemsOnLeft += slideCount
      this.itemsOnRight -= slideCount
    },
    countSlide (remainingItems) {
      return remainingItems < PERSLIDE ? remainingItems : PERSLIDE
    }
  }
}
