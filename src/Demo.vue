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
      <template
        slot="next-navigation">
        <div class="custom-nav">
          <img src="https://i.imgur.com/JkraWHJ.png">
        </div>
      </template>
    </HCarousel>
  </div>
</template>

<script src="./demo.js"></script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
.custom-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgba(208, 233, 239, 1);
}
</style>
