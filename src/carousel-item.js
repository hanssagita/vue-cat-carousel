export default {
  name: "CarouselItem",
  props: {
    data: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    price () {
      return this.data.price || {}
    },
    review () {
      return this.data.review || {}
    },
    noRating () {
      return 5 - this.review.rating
    }
  }
}
