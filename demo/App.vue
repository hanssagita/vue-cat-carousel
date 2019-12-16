<template>
  <div id="app">
    <cat-carousel
            :items="products"
            :item-per-page="itemPerPage"
            :indicators-config="{activeColor: '#000', size: 10, color: '#d1d1d1', hideIndicators: false}"
    >
      <template
              slot="item"
              slot-scope="{data, index}"
      >
        <div class="h-carousel__item">
          <div class="h-carousel__item__image">
            <img :src="data.image">
          </div>
          <div class="h-carousel__item__name">
            {{ data.name }}</div>
          <div class="h-carousel__item__price">
            <div class="h-carousel__item__price--strikethrough">{{ data.price.listed }}</div>
            <div class="h-carousel__item__price__display">{{ data.price.offered }}
              <span class="h-carousel__item__price--discount">(-{{ data.price.discount }})%</span>
            </div>
          </div>
          <div class="h-carousel__item__info">
            <div class="h-carousel__item__info__installment">Installment 0%</div>
          </div>
          <div class="h-carousel__item__rating">
          <span
                  class="h-carousel__item__rating__star"
                  v-for="(n, idx) in 5"
                  :key="idx">
        <img src="https://i.imgur.com/GutCBw7.png">
      </span>
            <span class="h-carousel__item__rating__info"> {{ data.review.count }} Review</span>
          </div>
        </div>
      </template>
    </cat-carousel>
  </div>
</template>

<script>
  const {CatCarousel} = require('../src/lib')
  const mockData = require('./mock.js')

  export default {
    name: "Vue Cat Carousel",
    components: {
      CatCarousel
    },
    data () {
      return {
        itemPerPage: 5,
        products: mockData
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
  }
  .h-carousel__item {
    width: 100%;
  }
  .h-carousel__item__image img {
    width: 100%;
    height: 100%;
  }
  .h-carousel__item__name {
    white-space: normal;
    color: #333;
    line-height: 16px;
    font-weight: bold;
  }
  .h-carousel__item__price--strikethrough {
    color: #bbb;
    font-size: 11px;
    text-decoration: line-through;
  }
  .h-carousel__item__price__display {
    color: #f7931e;
    font-size: 15px;
    font-weight: bold;
  }
  .h-carousel__item__price--discount {
    color: #FF5400;
    font-weight: bold;
    margin-left: 5px;
    font-size: 13px;
  }
  .h-carousel__item__info__installment {
    color: #009900;
    font-size: 11px;
  }
  .h-carousel__item__rating {
    display: flex;
    align-items: center;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    margin: 8px 0;
  }
  .h-carousel__item__rating__star {
    margin: 4px 0.5px;
  }
  .h-carousel__item__rating__star img {
    width: 16px;
    height: 16px;
  }
  .h-carousel__item__rating__info {
    margin-left: 4px;
    color: #bbb;
    font-size: 11px;
  }
  .h-carousel__left-arrow {
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
  }
  .h-carousel__left-arrow img {
    width: 32px;
    height: 32px;
    transform: rotate(180deg);
  }
  .h-carousel__right-arrow {
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
  }
  .h-carousel__right-arrow img {
    width: 32px;
    height: 32px;
  }
</style>