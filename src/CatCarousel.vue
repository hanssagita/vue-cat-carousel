<template>
  <div class="cat-carousel-container">
      <div class="cat-carousel__prev-navigation" @click="prev">
        <template>
          <slot name="prev-navigation">
            <div class="cat-carousel__default-nav cat-carousel__default-nav--left">
              <img src="https://i.imgur.com/JkraWHJ.png">
            </div>
          </slot>
        </template>
      </div>
      <div
        ref="carouselContent"
        class="cat-carousel__content">
        <div
          ref="carouselWrapper"
          :style="wrapperStyles"
          class="cat-carousel__content__wrapper">
          <div
              ref="carouselItem"
              v-for="(item, index) in items"
              class="cat-carousel__content__wrapper__item"
              :key="index">
            <template>
              <slot
                name="item"
                :data="item"
                :index="index"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="cat-carousel__next-navigation" @click="next">
        <template>
          <slot name="next-navigation">
            <div class="cat-carousel__default-nav">
              <img src="https://i.imgur.com/JkraWHJ.png">
            </div>
          </slot>
        </template>
      </div>
    </div>
</template>

<script src="./cat-carousel.js"></script>

<style lang="scss" scoped>
  .cat-carousel-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .cat-carousel {
    &__content {
      width: 100%;
      overflow: hidden;
      white-space : nowrap;
      display: inline-block;
      box-sizing: border-box;
      &__wrapper {
        transition: transform 0.85s ease-out;
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
    &__prev-navigation {
      display: flex;
      align-self: center;
      position: absolute;
      z-index: 2;
    }
    &__next-navigation {
      display: flex;
      align-self: center;
      position: absolute;
      right: 0;
      z-index: 2;
    }
    &__default-nav {
      width: 32px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
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
      &--left {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
