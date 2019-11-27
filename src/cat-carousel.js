const WIDTH_PAGE = 100
const SEPARATOR = 2

export default {
  name: 'CatCarousel',
  props: {
    items: {
      type: Array,
      default: []
    },
    itemPerPage: {
      type: Number,
      default: 5,
      required: true
    }
  },
  data () {
    return {
      itemWidth: 0,
      wrapper: {
        translateX: 0
      },
      itemsOnLeft: 0,
      itemsOnRight: 0,
      maxSlide: 0,
      track: 0,
      slides: [],
      normalSlideWindow: [],
      reversedSlideWindow: []
    }
  },
  mounted () {
    this.itemsOnRight = this.items.length - this.itemPerPage
    this.maxSlide = Math.ceil(this.items.length / this.itemPerPage)
    this.initSlides()
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
    },
    onFirstPage () {
      return this.track === 0
    },
    onLastPage () {
      return this.track === this.maxSlide - 1
    },
    widthPerItem () {
      return `${(WIDTH_PAGE / this.itemPerPage) - SEPARATOR}%`
    }
  },
  methods: {
    initSlides () {
      this.slides = this.addSlides(this.items.length)
      this.initialSlides = this.slides
      this.reversedSlides = this.slides.slice().reverse()
    },
    addSlides (itemsLength) {
      if (itemsLength <= 0) return []
      const count = Math.min(itemsLength, this.itemPerPage)
      let slides = []
      slides = slides.concat([count], this.addSlides(itemsLength-count))
      return slides
    },
    prev () {
      if (this.onFirstPage) return
      this.track--
      this.wrapper = Object.assign({}, this.wrapper,{
        translateX: this.wrapper.translateX + this.slides[this.track] * this.itemWidth
      })
      if (this.onFirstPage) this.slides = this.initialSlides
    },
    next () {
      if (this.onLastPage) return
      this.track++
      this.wrapper = Object.assign({}, this.wrapper, {
        translateX: this.wrapper.translateX - this.slides[this.track] * this.itemWidth
      })
      if (this.onLastPage) this.slides = this.reversedSlides
    }
  }
}
