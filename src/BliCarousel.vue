<template>
    <div class="h-carousel-container">
      <div class="h-carousel__left-arrow" @click="prev">
        <img src="https://i.imgur.com/JkraWHJ.png">
      </div>
      <div class="h-carousel__content">
        <CarouselItem
          v-for="product in products"
          :key="product" 
          :product="product"/>
      </div>
      <div class="h-carousel__right-arrow" @click="next">
        <img src="https://i.imgur.com/JkraWHJ.png">
      </div>
    </div>
</template>

<script src="./bli-carousel.js"></script>

<style lang="scss" scoped>
  .h-carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .h-carousel {
    &__content {
      width: 100%;
      overflow: hidden;
      overflow-x: scroll;
      white-space : nowrap;
      display: inline-block;
      box-sizing: border-box;
    }
    &__left-arrow {
      width: 32px;
      height: 72px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      top: calc(50% - 32px);
      border-radius: 5px;
      box-shadow: 1px 2px 5px -1px #b0b0b0;
      border-right: 1px solid #eee;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
        transform: rotate(180deg);
      }
    }
    &__right-arrow {
      width: 32px;
      height: 72px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      top: calc(50% - 32px);
      right: 0;
      border-radius: 5px;
      box-shadow: 1px 2px 5px -1px #b0b0b0;
      border-right: 1px solid #eee;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }

</style>
<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
