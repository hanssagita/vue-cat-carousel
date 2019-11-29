const WIDTH_PAGE = 100
const SWIPE_THRESHOLD = 80

export default {
  name: 'CatCarousel',
  props: {
    items: {
      type: Array,
      default: [],
      required: true
    },
    itemPerPage: {
      type: Number,
      default: 5
    },
    hideIndicators: {
      type: Boolean,
      default: false
    },
    indicatorsItemSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      itemWidth: 0,
      wrapper: {
        translateX: 0
      },
      maxSlide: 0,
      track: 0,
      slides: [],
      normalSlideWindow: [],
      reversedSlideWindow: [],
      touchX: null
    }
  },
  mounted () {
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
    carouselItemStyles () {
      const width = WIDTH_PAGE / this.itemPerPage
      return {
        flex: `0 0 ${width}%`,
        width: `${width}%`
      }
    },
    indicatorsItemSizeStyle () {
      return `width: ${this.indicatorsItemSize}px; height: ${this.indicatorsItemSize}px;`
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
    },
    selectedIndicator (index) {
      return index === this.track + 1
    },
    touchStart (event) {
      this.touchX = event.touches[0].clientX
    },
    touchMove (event) {
      event.preventDefault()
      if (!this.touchX) return
      let currentX = event.touches[0].clientX
      let diffX = currentX - this.touchX
      if (diffX > SWIPE_THRESHOLD) {
        this.prev()
        this.touchX = null
      }
      if (diffX < -SWIPE_THRESHOLD) {
        this.next()
        this.touchX = null
      }
    }
  }
}
