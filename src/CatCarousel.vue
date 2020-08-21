<template>
  <div>
    <div class="cat-carousel-container">
      <div
        :class="['cat-carousel__navigation', {'cat-carousel__navigation--end': onFirstPage}]"
      >
        <template>
          <slot name="prev-navigation" :prev="prev">
            <div class="cat-carousel__default-nav cat-carousel__default-nav--left" @click="prev">
              <img src="https://www.static-src.com/siva/asset//07_2020/arrow-blue-small.png">
            </div>
          </slot>
        </template>
      </div>
      <div
        ref="carouselContent"
        class="cat-carousel__content"
      >
        <div
          ref="carouselWrapper"
          :style="wrapperStyles"
          class="cat-carousel__content__wrapper"
          @touchstart="touchStart"
          @touchmove="touchMove"
        >
          <div
            v-for="(item, index) in items"
            ref="carouselItem"
            :key="prefix + index"
            class="cat-carousel__content__wrapper__item"
            :class="{ 'active': carouselCurrentFirstActiveIndex <= item && item <= carouselCurrentLastActiveIndex }"
            :style="carouselItemStyles"
          >
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
      <div
        :class="['cat-carousel__navigation cat-carousel__navigation__next',
                 {'cat-carousel__navigation--end': onLastPage}]"
      >
        <template>
          <slot name="next-navigation" :next="next">
            <div class="cat-carousel__default-nav" @click="next">
              <img src="https://www.static-src.com/siva/asset//07_2020/arrow-blue-small.png">
            </div>
          </slot>
        </template>
      </div>
    </div>
    <div
      :class="{'hide': hideIndicators}"
      class="cat-carousel__indicators"
    >
      <div
        v-for="index in maxSlide"
        :key="index"
        class="cat-carousel__indicators__item"
        :class="{ 'active': (track + 1) === index }"
        :style="[indicatorsItemSizeStyle, selectedIndicator(index) && activeIndicatorStyle]"
      />
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
      display: inline-block;
      &__wrapper {
        transition: transform 0.5s ease-out;
        display: flex;
        align-items: flex-start;
        height: 100%;
        &__item {
          box-sizing: border-box;
          padding: 0 1%;
          display: flex;
          height: 100%;
        }
      }
    }
    &__navigation {
      display: flex;
      align-self: center;
      position: absolute;
      z-index: 2;
      &__next {
        right: 0;
      }
      &--end {
        display: none;
      }
    }
    &__default-nav {
      width: 48px;
      height: 48px;
      opacity: 0.88;
      box-shadow: 0 0 24px -4px rgba(0, 0, 0, 0.24);
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      border-radius: 50%;
      border-right: 1px solid #eee;
      cursor: pointer;
      z-index: 2;
      @media only screen and (max-width: 768px) {
        display: none;
      }
      img {
        width: 34px;
        height: 34px;
      }
      &--left {
        img {
          transform: rotate(180deg);
        }
      }
    }
    &__indicators {
      display: flex;
      justify-content: center;
      margin: 8px;
      &__item {
        border-radius: 50%;
        margin: 0 4px;
      }
    }
  }
  .hide {
    display: none;
  }
</style>
