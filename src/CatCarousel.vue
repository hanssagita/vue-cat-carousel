<template>
  <div>
    <div class="cat-carousel-container">
      <div
        :class="['cat-carousel__navigation', {'cat-carousel__navigation--end': onFirstPage}]"
      >
        <template>
          <slot name="prev-navigation" :prev="prev">
            <div class="cat-carousel__default-nav cat-carousel__default-nav--left" @click="prev">
              <img src="https://i.imgur.com/JkraWHJ.png">
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
        >
          <div
            v-for="(item, index) in items"
            ref="carouselItem"
            :key="index"
            class="cat-carousel__content__wrapper__item"
            :style="{width: widthPerItem}"
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
              <img src="https://i.imgur.com/JkraWHJ.png">
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
        :class="['cat-carousel__indicators__item',
                 {'cat-carousel__indicators__item--selected': selectedIndicator(index)}]"
        :style="indicatorsItemSizeStyle"
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
      white-space : nowrap;
      display: inline-block;
      box-sizing: border-box;
      &__wrapper {
        transition: transform 0.5s ease-out;
        @media only screen and (max-width: 768px) {
          overflow-x: scroll;
        }
        &__item {
          padding: 0 1%;
          display: inline-block;
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
        opacity: 0.5;
      }
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
    &__indicators {
      display: flex;
      justify-content: center;
      margin: 8px;
      &__item {
        background-color: #d6d6d6;
        border-radius: 50%;
        margin: 0 4px;
        &--selected {
          background-color: #0095da;
        }
      }
    }
  }
  .hide {
    display: none;
  }
</style>
