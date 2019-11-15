<template>
  <div>
    <div class="title">DEMO APP</div>
    <HCarousel
      :products="products"
    >
    <template
      slot="item"
      slot-scope="{product, index}"
    >
     <CarouselItem
      :product="product"
      :index="index"
     />
    </template>
    </HCarousel>
  </div>
</template>

<script src="./demo.js"></script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>
