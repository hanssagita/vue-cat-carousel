const WIDTH_PAGE = 100
const SWIPE_THRESHOLD = 80
const CENTER_MODE_DEFAULT_CONFIG = {
  enabled: false,
  paddingCenter: 10
}
const INDICATORS_DEFAULT_CONFIG = {
  size: 16,
  color: '#d6d6d6',
  activeColor: '#0095da',
  hideIndicators: false
}

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
    indicatorsConfig: {
      type: Object,
      default: () => {
        return INDICATORS_DEFAULT_CONFIG
      }
    },
    centerMode: {
      type: Object,
      default: () => {
        return CENTER_MODE_DEFAULT_CONFIG
      }
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
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
  },
  watch: {
    items () {
      this.wrapper = {
        translateX: 0
      }
      this.track = 0
      this.maxSlide = Math.ceil(this.items.length / this.itemPerPage)
      this.initSlides()
    },
    track (val) {
      this.$emit('change', val)
    }
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
    itemWidth () {
      return this.carouselItem && this.carouselItem.length > 0 && this.carouselItem[0].clientWidth
    },
    wrapperStyles () {
      if (this.centerMode.enabled) {
        return {transform: `translateX(calc(${this.wrapper.translateX}px + ${this.centerMode.paddingCenter}%)`}
      }

      return {transform: `translateX(${this.wrapper.translateX}px)`}
    },
    onFirstPage () {
      return this.track === 0
    },
    onLastPage () {
      return this.track === this.maxSlide - 1
    },
    carouselItemStyles () {
      let width = WIDTH_PAGE / this.itemPerPage

      if (this.centerMode.enabled) {
        width = width * (1 - this.centerMode.paddingCenter / 100 * 2)
      }

      return {
        flex: `0 0 ${width}%`,
        width: `${width}%`
      }
    },
    carouselCurrentFirstActiveIndex () {
      return this.track * this.itemPerPage
    },
    carouselCurrentLastActiveIndex () {
      return (this.track + 1) * this.itemPerPage - 1
    },
    indicatorsItemSizeStyle () {
      const size = this.indicatorsConfig.size || INDICATORS_DEFAULT_CONFIG.size
      return {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: this.indicatorsConfig.color || INDICATORS_DEFAULT_CONFIG.color
      }
    },
    activeIndicatorStyle () {
      return {
        backgroundColor: this.indicatorsConfig.activeColor || INDICATORS_DEFAULT_CONFIG.activeColor
      }
    },
    hideIndicators () {
      return this.indicatorsConfig.hideIndicators || INDICATORS_DEFAULT_CONFIG.hideIndicators
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
