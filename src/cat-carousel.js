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
      itemsOnRight: 0
    }
  },
  mounted () {
    console.log('kucing', this.itemPerPage)
    this.itemsOnRight = this.items.length - this.itemPerPage
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
      return this.itemsOnLeft === 0
    },
    onLastPage () {
      return this.itemsOnRight === 0
    },
    widthPerItem () {
      return `${(WIDTH_PAGE / this.itemPerPage) - SEPARATOR}%`
    }
  },
  methods: {
    prev () {
      if (this.onTheFarLeft) return
      const slideCount = this.countSlide(this.itemsOnLeft)
      this.wrapper = Object.assign({}, this.wrapper,{
        translateX: this.wrapper.translateX + slideCount * this.itemWidth
      })
      this.itemsOnLeft -= slideCount
      this.itemsOnRight += slideCount
    },
    next () {
      if (this.onTheFarRight) return
      const slideCount = this.countSlide(this.itemsOnRight)
      this.wrapper = Object.assign({}, this.wrapper, {
        translateX: this.wrapper.translateX - slideCount * this.itemWidth
      })
      this.itemsOnLeft += slideCount
      this.itemsOnRight -= slideCount
    },
    countSlide (remainingItems) {
      return remainingItems < this.itemPerPage ? remainingItems : this.itemPerPage
    }
  }
}
