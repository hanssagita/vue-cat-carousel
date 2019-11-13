export default {
  name: "CarouselItem",
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  computed: {
    price () {
      return this.product.price || {}
    },
    review () {
      return this.product.review || {}
    },
    noRating () {
      return 5 - this.review.rating
    }
  }
}
