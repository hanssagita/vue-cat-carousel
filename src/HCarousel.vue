<template>
    <div class="h-carousel-container">
      <div class="h-carousel__left-arrow" @click="prev">
        <img src="https://i.imgur.com/JkraWHJ.png">
      </div>
      <div
        ref="carouselContent"
        class="h-carousel__content">
        <div
          ref="carouselWrapper"
          :style="wrapperStyles"
          class="h-carousel__content__wrapper">
          <div
              ref="carouselItem"
              v-for="(product, index) in products"
              class="h-carousel__content__wrapper__item"
              :key="index">
            <template>
              <slot
                name="item"
                :product="product"
                :index="index"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="h-carousel__right-arrow" @click="next">
        <img src="https://i.imgur.com/JkraWHJ.png">
      </div>
    </div>
</template>

<script src="./h-carousel.js"></script>

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
      white-space : nowrap;
      display: inline-block;
      box-sizing: border-box;
      &__wrapper {
        transition: transform 0.5S ease;
        @media only screen and (max-width: 768px) {
          overflow-x: scroll;
        }
        &__item {
          width: 18%;
          padding: 0 1%;
          @media only screen and (max-width: 768px) {
            width: 50%;
          }
          display: inline-block;
        }
      }
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
      z-index: 2;
      @media only screen and (max-width: 768px) {
        display: none;
      }
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
      z-index: 2;
      @media only screen and (max-width: 768px) {
        display: none;
      }
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
