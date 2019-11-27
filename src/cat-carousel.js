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
      track: 0
    }
  },
  mounted () {
    this.itemsOnRight = this.items.length - this.itemPerPage
    this.maxSlide = Math.ceil(this.items.length / this.itemPerPage)
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
    prev () {
      if (this.onFirstPage) return
      const slideCount = this.countSlide(this.itemsOnLeft)
      this.wrapper = Object.assign({}, this.wrapper,{
        translateX: this.wrapper.translateX + slideCount * this.itemWidth
      })
      this.itemsOnLeft -= slideCount
      this.itemsOnRight += slideCount
      this.track--
    },
    next () {
      if (this.onLastPage) return
      const slideCount = this.countSlide(this.itemsOnRight)
      this.wrapper = Object.assign({}, this.wrapper, {
        translateX: this.wrapper.translateX - slideCount * this.itemWidth
      })
      this.itemsOnLeft += slideCount
      this.itemsOnRight -= slideCount
      this.track++
    },
    countSlide (remainingItems) {
      return remainingItems < this.itemPerPage ? remainingItems : this.itemPerPage
    },
    selectedControl (index) {
      return index === this.track + 1
    }
  }
}
